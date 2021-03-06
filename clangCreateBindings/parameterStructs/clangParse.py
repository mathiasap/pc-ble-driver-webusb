import clang.cindex
from clang.cindex import CursorKind
import os
from clangCreateBindings.parameterStructs.structSerialization import StructData, StructChild

parse_files = []
compArgs = ""
file_root = ""
headers = []

def filePointers():
    '''
        Return generator that iterates over clang compiled source files
    '''
    global headers
    idx = clang.cindex.Index.create()
    for filename, path in parse_files:
        headers.append(filename)
        yield idx.parse(path+filename, args=compArgs)

parsedStructs = set()

typedefArrays = {"ble_gap_ch_mask_t": "uint8_t"}

def createStructNode(structParent):
    global parsedStructs
    if structParent.spelling in parsedStructs:
        return
    parsedStructs.add(structParent.spelling)
    structNode = StructData(structParent.spelling)
    structFields = [e for e in structParent.walk_preorder()]
    insideUnion = False
    for fieldIndex in range(len(structFields)):
        child = structFields[fieldIndex]

        if child.kind == clang.cindex.CursorKind.TYPE_REF:
            prev = structFields[fieldIndex - 1]

            dataType = child.spelling
            dataName = prev.spelling

            isArray = prev.type.get_array_size() != -1
            isPointer = prev.type.kind == clang.cindex.TypeKind.POINTER
            if isPointer and "**" in prev.type.spelling: # Hack to check if pointer is a pointer to another pointer
                isPointer = 2
            if dataType in typedefArrays:
                isArray = True
                dataType = typedefArrays[dataType]

            isBitfield = prev.is_bitfield()
            childStruct = StructChild(structParent.spelling, dataType, dataName, isPointer, isArray, isBitfield)
            #print(dir(prev))
            #print(prev.type.spelling)
            if "const " in prev.type.spelling:
                childStruct.isConst = True
            else:
                childStruct.isConst = False
            childStruct.insideUnion = insideUnion
            structNode.addChild(childStruct)

        elif child.kind == clang.cindex.CursorKind.UNION_DECL:
            insideUnion = True
            prev = structFields[fieldIndex - 1]
            if prev.kind == clang.cindex.CursorKind.FIELD_DECL:
                structNode.unionName = prev.spelling+"."
                return structNode
            #return
    return structNode

def clangIsStruct(func):
    #print(func)
    return clang.cindex.CursorKind.TYPEDEF_DECL == func



def parseAll(parsedStructs):
    for tu in filePointers():
        for c in tu.cursor.walk_preorder():
            if(clangIsStruct(c.kind) and "ble_" in c.spelling and c.spelling.endswith("_t")): #c.spelling.startswith("ble")
                '''
                    Parsed node is a C function with a name that starts with "ble"
                '''
                structNode = createStructNode(c)
                if structNode is not None:
                    parsedStructs[structNode.dataType] = structNode

def setup(version, s_ver, sd_dir_name):
    global parse_files
    global compArgs
    global headers
    global parsedStructs
    global file_root

    parsedStructs = set()
    pc_ble_drive_webusb_root = os.getcwd()
    pc_ble_drive_root = pc_ble_drive_webusb_root + "/pc-ble-driver"

    sdk_root = pc_ble_drive_root+"/src/sd_api_v{}/sdk".format(version)
    source_files_to_parse_headers = os.listdir("{}/components/softdevice/{}/headers".format(sdk_root, sd_dir_name))
    source_files_to_parse_serializers = os.listdir("{}/components/serialization/application/codecs/{}/serializers".format(sdk_root, s_ver))
    headers = []

    compArgs    = '-x c++ --std=c++11 -DNRF_SD_BLE_API_VERSION={ver}'.format(ver=version).split()

    include_dir = [pc_ble_drive_root+"/include/common/internal",
    pc_ble_drive_root+"/include/common/internal/transport",
    pc_ble_drive_root+"/include/common/config"]

    cpp_dir = [sdk_root+"/components/serialization/application/codecs/{s_ver}/serializers".format(s_ver=s_ver),
    sdk_root+"/components/serialization/application/codecs/common",
    sdk_root+"/components/libraries/util",
    sdk_root+"/components/serialization/common",
    sdk_root+"/components/serialization/common/struct_ser/{s_ver}".format(s_ver=s_ver),
    sdk_root+"/components/softdevice/{}/headers".format(sd_dir_name)]

    file_root = sdk_root+"/components/softdevice/{}/headers/".format(sd_dir_name)

    pc_ble_driver_includes = [ '-I' + inc for inc in include_dir ]
    pc_ble_driver_cppincludes = [ '-I' + inc for inc in cpp_dir ]
    compArgs    = compArgs + pc_ble_driver_includes + pc_ble_driver_cppincludes


    parse_files = []
    for filename in source_files_to_parse_headers:
        if filename.endswith(".h") and "ble_" in filename:
            parse_files.append((filename, file_root))
    for filename in source_files_to_parse_serializers:
        if filename.endswith(".h") and "ble_" in filename:
            parse_files.append((filename, "{}/components/serialization/application/codecs/{}/serializers/".format(sdk_root, s_ver)))

    return pc_ble_drive_webusb_root, headers
