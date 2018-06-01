emscriptenBindings = {'ble_tx_packet_count_get_req_enc': Module.cwrap('emscripten_ble_tx_packet_count_get_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_tx_packet_count_get_rsp_dec': Module.cwrap('emscripten_ble_tx_packet_count_get_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_uuid_encode_req_enc': Module.cwrap('emscripten_ble_uuid_encode_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_uuid_encode_rsp_dec': Module.cwrap('emscripten_ble_uuid_encode_rsp_dec', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_uuid_decode_req_enc': Module.cwrap('emscripten_ble_uuid_decode_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_uuid_decode_rsp_dec': Module.cwrap('emscripten_ble_uuid_decode_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_uuid_vs_add_req_enc': Module.cwrap('emscripten_ble_uuid_vs_add_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_uuid_vs_add_rsp_dec': Module.cwrap('emscripten_ble_uuid_vs_add_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_version_get_req_enc': Module.cwrap('emscripten_ble_version_get_req_enc', 'number', ['number', 'number', 'number']),
'ble_version_get_rsp_dec': Module.cwrap('emscripten_ble_version_get_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_opt_set_req_enc': Module.cwrap('emscripten_ble_opt_set_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_opt_set_rsp_dec': Module.cwrap('emscripten_ble_opt_set_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_enable_req_enc': Module.cwrap('emscripten_ble_enable_req_enc', 'number', ['number', 'number', 'number']),
'ble_enable_rsp_dec': Module.cwrap('emscripten_ble_enable_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_opt_get_req_enc': Module.cwrap('emscripten_ble_opt_get_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_opt_get_rsp_dec': Module.cwrap('emscripten_ble_opt_get_rsp_dec', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_user_mem_reply_req_enc': Module.cwrap('emscripten_ble_user_mem_reply_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_user_mem_reply_rsp_dec': Module.cwrap('emscripten_ble_user_mem_reply_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_event_dec': Module.cwrap('emscripten_ble_event_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_evt_tx_complete_dec': Module.cwrap('emscripten_ble_evt_tx_complete_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_evt_user_mem_request_dec': Module.cwrap('emscripten_ble_evt_user_mem_request_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_evt_user_mem_release_dec': Module.cwrap('emscripten_ble_evt_user_mem_release_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_evt_data_length_changed_dec': Module.cwrap('emscripten_ble_evt_data_length_changed_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_adv_data_set_req_enc': Module.cwrap('emscripten_ble_gap_adv_data_set_req_enc', 'number', ['number', 'number', 'number', 'number', 'number', 'number']),
'ble_gap_adv_data_set_rsp_dec': Module.cwrap('emscripten_ble_gap_adv_data_set_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_adv_start_req_enc': Module.cwrap('emscripten_ble_gap_adv_start_req_enc', 'number', ['number', 'number', 'number']),
'ble_gap_adv_start_rsp_dec': Module.cwrap('emscripten_ble_gap_adv_start_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_tx_power_set_req_enc': Module.cwrap('emscripten_ble_gap_tx_power_set_req_enc', 'number', ['number', 'number', 'number']),
'ble_gap_tx_power_set_rsp_dec': Module.cwrap('emscripten_ble_gap_tx_power_set_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_appearance_get_req_enc': Module.cwrap('emscripten_ble_gap_appearance_get_req_enc', 'number', ['number', 'number', 'number']),
'ble_gap_appearance_get_rsp_dec': Module.cwrap('emscripten_ble_gap_appearance_get_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_appearance_set_req_enc': Module.cwrap('emscripten_ble_gap_appearance_set_req_enc', 'number', ['number', 'number', 'number']),
'ble_gap_appearance_set_rsp_dec': Module.cwrap('emscripten_ble_gap_appearance_set_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_device_name_get_req_enc': Module.cwrap('emscripten_ble_gap_device_name_get_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_device_name_get_rsp_dec': Module.cwrap('emscripten_ble_gap_device_name_get_rsp_dec', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gap_device_name_set_req_enc': Module.cwrap('emscripten_ble_gap_device_name_set_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gap_device_name_set_rsp_dec': Module.cwrap('emscripten_ble_gap_device_name_set_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_ppcp_set_req_enc': Module.cwrap('emscripten_ble_gap_ppcp_set_req_enc', 'number', ['number', 'number', 'number']),
'ble_gap_ppcp_set_rsp_dec': Module.cwrap('emscripten_ble_gap_ppcp_set_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_conn_param_update_req_enc': Module.cwrap('emscripten_ble_gap_conn_param_update_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_conn_param_update_rsp_dec': Module.cwrap('emscripten_ble_gap_conn_param_update_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_disconnect_req_enc': Module.cwrap('emscripten_ble_gap_disconnect_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_disconnect_rsp_dec': Module.cwrap('emscripten_ble_gap_disconnect_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_rssi_stop_req_enc': Module.cwrap('emscripten_ble_gap_rssi_stop_req_enc', 'number', ['number', 'number', 'number']),
'ble_gap_rssi_stop_rsp_dec': Module.cwrap('emscripten_ble_gap_rssi_stop_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_ppcp_get_req_enc': Module.cwrap('emscripten_ble_gap_ppcp_get_req_enc', 'number', ['number', 'number', 'number']),
'ble_gap_ppcp_get_rsp_dec': Module.cwrap('emscripten_ble_gap_ppcp_get_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_auth_key_reply_req_enc': Module.cwrap('emscripten_ble_gap_auth_key_reply_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gap_auth_key_reply_rsp_dec': Module.cwrap('emscripten_ble_gap_auth_key_reply_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_sec_info_reply_req_enc': Module.cwrap('emscripten_ble_gap_sec_info_reply_req_enc', 'number', ['number', 'number', 'number', 'number', 'number', 'number']),
'ble_gap_sec_info_reply_rsp_dec': Module.cwrap('emscripten_ble_gap_sec_info_reply_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_sec_params_reply_req_enc': Module.cwrap('emscripten_ble_gap_sec_params_reply_req_enc', 'number', ['number', 'number', 'number', 'number', 'number', 'number']),
'ble_gap_sec_params_reply_rsp_dec': Module.cwrap('emscripten_ble_gap_sec_params_reply_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_authenticate_req_enc': Module.cwrap('emscripten_ble_gap_authenticate_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_authenticate_rsp_dec': Module.cwrap('emscripten_ble_gap_authenticate_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_adv_stop_req_enc': Module.cwrap('emscripten_ble_gap_adv_stop_req_enc', 'number', ['number', 'number']),
'ble_gap_adv_stop_rsp_dec': Module.cwrap('emscripten_ble_gap_adv_stop_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_conn_sec_get_req_enc': Module.cwrap('emscripten_ble_gap_conn_sec_get_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_conn_sec_get_rsp_dec': Module.cwrap('emscripten_ble_gap_conn_sec_get_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_rssi_start_req_enc': Module.cwrap('emscripten_ble_gap_rssi_start_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gap_rssi_start_rsp_dec': Module.cwrap('emscripten_ble_gap_rssi_start_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_scan_stop_req_enc': Module.cwrap('emscripten_ble_gap_scan_stop_req_enc', 'number', ['number', 'number']),
'ble_gap_scan_stop_rsp_dec': Module.cwrap('emscripten_ble_gap_scan_stop_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_scan_start_req_enc': Module.cwrap('emscripten_ble_gap_scan_start_req_enc', 'number', ['number', 'number', 'number']),
'ble_gap_scan_start_rsp_dec': Module.cwrap('emscripten_ble_gap_scan_start_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_connect_req_enc': Module.cwrap('emscripten_ble_gap_connect_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gap_connect_rsp_dec': Module.cwrap('emscripten_ble_gap_connect_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_connect_cancel_req_enc': Module.cwrap('emscripten_ble_gap_connect_cancel_req_enc', 'number', ['number', 'number']),
'ble_gap_connect_cancel_rsp_dec': Module.cwrap('emscripten_ble_gap_connect_cancel_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_encrypt_req_enc': Module.cwrap('emscripten_ble_gap_encrypt_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gap_encrypt_rsp_dec': Module.cwrap('emscripten_ble_gap_encrypt_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_rssi_get_req_enc': Module.cwrap('emscripten_ble_gap_rssi_get_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_rssi_get_rsp_dec': Module.cwrap('emscripten_ble_gap_rssi_get_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_keypress_notify_req_enc': Module.cwrap('emscripten_ble_gap_keypress_notify_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_keypress_notify_rsp_dec': Module.cwrap('emscripten_ble_gap_keypress_notify_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_lesc_dhkey_reply_req_enc': Module.cwrap('emscripten_ble_gap_lesc_dhkey_reply_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_lesc_dhkey_reply_rsp_dec': Module.cwrap('emscripten_ble_gap_lesc_dhkey_reply_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_lesc_oob_data_set_req_enc': Module.cwrap('emscripten_ble_gap_lesc_oob_data_set_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gap_lesc_oob_data_set_rsp_dec': Module.cwrap('emscripten_ble_gap_lesc_oob_data_set_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_lesc_oob_data_get_req_enc': Module.cwrap('emscripten_ble_gap_lesc_oob_data_get_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gap_lesc_oob_data_get_rsp_dec': Module.cwrap('emscripten_ble_gap_lesc_oob_data_get_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_addr_get_req_enc': Module.cwrap('emscripten_ble_gap_addr_get_req_enc', 'number', ['number', 'number', 'number']),
'ble_gap_addr_get_rsp_dec': Module.cwrap('emscripten_ble_gap_addr_get_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_addr_set_req_enc': Module.cwrap('emscripten_ble_gap_addr_set_req_enc', 'number', ['number', 'number', 'number']),
'ble_gap_addr_set_rsp_dec': Module.cwrap('emscripten_ble_gap_addr_set_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_privacy_set_req_enc': Module.cwrap('emscripten_ble_gap_privacy_set_req_enc', 'number', ['number', 'number', 'number']),
'ble_gap_privacy_set_rsp_dec': Module.cwrap('emscripten_ble_gap_privacy_set_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_privacy_get_req_enc': Module.cwrap('emscripten_ble_gap_privacy_get_req_enc', 'number', ['number', 'number', 'number']),
'ble_gap_privacy_get_rsp_dec': Module.cwrap('emscripten_ble_gap_privacy_get_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_whitelist_set_req_enc': Module.cwrap('emscripten_ble_gap_whitelist_set_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_whitelist_set_rsp_dec': Module.cwrap('emscripten_ble_gap_whitelist_set_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_device_identities_set_req_enc': Module.cwrap('emscripten_ble_gap_device_identities_set_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gap_device_identities_set_rsp_dec': Module.cwrap('emscripten_ble_gap_device_identities_set_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_evt_auth_key_request_dec': Module.cwrap('emscripten_ble_gap_evt_auth_key_request_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_auth_status_dec': Module.cwrap('emscripten_ble_gap_evt_auth_status_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_conn_param_update_dec': Module.cwrap('emscripten_ble_gap_evt_conn_param_update_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_conn_sec_update_dec': Module.cwrap('emscripten_ble_gap_evt_conn_sec_update_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_connected_dec': Module.cwrap('emscripten_ble_gap_evt_connected_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_disconnected_dec': Module.cwrap('emscripten_ble_gap_evt_disconnected_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_passkey_display_dec': Module.cwrap('emscripten_ble_gap_evt_passkey_display_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_rssi_changed_dec': Module.cwrap('emscripten_ble_gap_evt_rssi_changed_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_sec_info_request_dec': Module.cwrap('emscripten_ble_gap_evt_sec_info_request_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_sec_params_request_dec': Module.cwrap('emscripten_ble_gap_evt_sec_params_request_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_timeout_dec': Module.cwrap('emscripten_ble_gap_evt_timeout_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_sec_request_dec': Module.cwrap('emscripten_ble_gap_evt_sec_request_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_conn_param_update_request_dec': Module.cwrap('emscripten_ble_gap_evt_conn_param_update_request_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_adv_report_dec': Module.cwrap('emscripten_ble_gap_evt_adv_report_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_scan_req_report_dec': Module.cwrap('emscripten_ble_gap_evt_scan_req_report_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_key_pressed_dec': Module.cwrap('emscripten_ble_gap_evt_key_pressed_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_lesc_dhkey_request_dec': Module.cwrap('emscripten_ble_gap_evt_lesc_dhkey_request_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_primary_services_discover_req_enc': Module.cwrap('emscripten_ble_gattc_primary_services_discover_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gattc_primary_services_discover_rsp_dec': Module.cwrap('emscripten_ble_gattc_primary_services_discover_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gattc_descriptors_discover_req_enc': Module.cwrap('emscripten_ble_gattc_descriptors_discover_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_descriptors_discover_rsp_dec': Module.cwrap('emscripten_ble_gattc_descriptors_discover_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gattc_relationships_discover_req_enc': Module.cwrap('emscripten_ble_gattc_relationships_discover_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_relationships_discover_rsp_dec': Module.cwrap('emscripten_ble_gattc_relationships_discover_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gattc_characteristics_discover_req_enc': Module.cwrap('emscripten_ble_gattc_characteristics_discover_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_characteristics_discover_rsp_dec': Module.cwrap('emscripten_ble_gattc_characteristics_discover_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gattc_read_req_enc': Module.cwrap('emscripten_ble_gattc_read_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gattc_read_rsp_dec': Module.cwrap('emscripten_ble_gattc_read_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gattc_char_values_read_req_enc': Module.cwrap('emscripten_ble_gattc_char_values_read_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gattc_char_values_read_rsp_dec': Module.cwrap('emscripten_ble_gattc_char_values_read_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gattc_write_req_enc': Module.cwrap('emscripten_ble_gattc_write_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_write_rsp_dec': Module.cwrap('emscripten_ble_gattc_write_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gattc_hv_confirm_req_enc': Module.cwrap('emscripten_ble_gattc_hv_confirm_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_hv_confirm_rsp_dec': Module.cwrap('emscripten_ble_gattc_hv_confirm_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gattc_char_value_by_uuid_read_req_enc': Module.cwrap('emscripten_ble_gattc_char_value_by_uuid_read_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gattc_char_value_by_uuid_read_rsp_dec': Module.cwrap('emscripten_ble_gattc_char_value_by_uuid_read_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gattc_attr_info_discover_req_enc': Module.cwrap('emscripten_ble_gattc_attr_info_discover_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_attr_info_discover_rsp_dec': Module.cwrap('emscripten_ble_gattc_attr_info_discover_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gattc_exchange_mtu_request_req_enc': Module.cwrap('emscripten_ble_gattc_exchange_mtu_request_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_exchange_mtu_request_rsp_dec': Module.cwrap('emscripten_ble_gattc_exchange_mtu_request_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gattc_evt_char_disc_rsp_dec': Module.cwrap('emscripten_ble_gattc_evt_char_disc_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_evt_char_val_by_uuid_read_rsp_dec': Module.cwrap('emscripten_ble_gattc_evt_char_val_by_uuid_read_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_evt_char_vals_read_rsp_dec': Module.cwrap('emscripten_ble_gattc_evt_char_vals_read_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_evt_desc_disc_rsp_dec': Module.cwrap('emscripten_ble_gattc_evt_desc_disc_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_evt_hvx_dec': Module.cwrap('emscripten_ble_gattc_evt_hvx_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_evt_prim_srvc_disc_rsp_dec': Module.cwrap('emscripten_ble_gattc_evt_prim_srvc_disc_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_evt_read_rsp_dec': Module.cwrap('emscripten_ble_gattc_evt_read_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_evt_rel_disc_rsp_dec': Module.cwrap('emscripten_ble_gattc_evt_rel_disc_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_evt_timeout_dec': Module.cwrap('emscripten_ble_gattc_evt_timeout_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_evt_write_rsp_dec': Module.cwrap('emscripten_ble_gattc_evt_write_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_evt_attr_info_disc_rsp_dec': Module.cwrap('emscripten_ble_gattc_evt_attr_info_disc_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_evt_exchange_mtu_rsp_dec': Module.cwrap('emscripten_ble_gattc_evt_exchange_mtu_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_value_get_req_enc': Module.cwrap('emscripten_ble_gatts_value_get_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gatts_value_get_rsp_dec': Module.cwrap('emscripten_ble_gatts_value_get_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_hvx_req_enc': Module.cwrap('emscripten_ble_gatts_hvx_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_hvx_rsp_dec': Module.cwrap('emscripten_ble_gatts_hvx_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_characteristic_add_req_enc': Module.cwrap('emscripten_ble_gatts_characteristic_add_req_enc', 'number', ['number', 'number', 'number', 'number', 'number', 'number']),
'ble_gatts_characteristic_add_rsp_dec': Module.cwrap('emscripten_ble_gatts_characteristic_add_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_service_add_req_enc': Module.cwrap('emscripten_ble_gatts_service_add_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gatts_service_add_rsp_dec': Module.cwrap('emscripten_ble_gatts_service_add_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_sys_attr_set_req_enc': Module.cwrap('emscripten_ble_gatts_sys_attr_set_req_enc', 'number', ['number', 'number', 'number', 'number', 'number', 'number']),
'ble_gatts_sys_attr_set_rsp_dec': Module.cwrap('emscripten_ble_gatts_sys_attr_set_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gatts_value_set_req_enc': Module.cwrap('emscripten_ble_gatts_value_set_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gatts_value_set_rsp_dec': Module.cwrap('emscripten_ble_gatts_value_set_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_sys_attr_get_req_enc': Module.cwrap('emscripten_ble_gatts_sys_attr_get_req_enc', 'number', ['number', 'number', 'number', 'number', 'number', 'number']),
'ble_gatts_sys_attr_get_rsp_dec': Module.cwrap('emscripten_ble_gatts_sys_attr_get_rsp_dec', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gatts_descriptor_add_req_enc': Module.cwrap('emscripten_ble_gatts_descriptor_add_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gatts_descriptor_add_rsp_dec': Module.cwrap('emscripten_ble_gatts_descriptor_add_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_include_add_req_enc': Module.cwrap('emscripten_ble_gatts_include_add_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gatts_include_add_rsp_dec': Module.cwrap('emscripten_ble_gatts_include_add_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_rw_authorize_reply_req_enc': Module.cwrap('emscripten_ble_gatts_rw_authorize_reply_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_rw_authorize_reply_rsp_dec': Module.cwrap('emscripten_ble_gatts_rw_authorize_reply_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gatts_service_changed_req_enc': Module.cwrap('emscripten_ble_gatts_service_changed_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gatts_service_changed_rsp_dec': Module.cwrap('emscripten_ble_gatts_service_changed_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gatts_attr_get_req_enc': Module.cwrap('emscripten_ble_gatts_attr_get_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gatts_attr_get_rsp_dec': Module.cwrap('emscripten_ble_gatts_attr_get_rsp_dec', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gatts_initial_user_handle_get_req_enc': Module.cwrap('emscripten_ble_gatts_initial_user_handle_get_req_enc', 'number', ['number', 'number', 'number']),
'ble_gatts_initial_user_handle_get_rsp_dec': Module.cwrap('emscripten_ble_gatts_initial_user_handle_get_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_exchange_mtu_reply_req_enc': Module.cwrap('emscripten_ble_gatts_exchange_mtu_reply_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_exchange_mtu_reply_rsp_dec': Module.cwrap('emscripten_ble_gatts_exchange_mtu_reply_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gatts_evt_hvc_dec': Module.cwrap('emscripten_ble_gatts_evt_hvc_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_evt_rw_authorize_request_dec': Module.cwrap('emscripten_ble_gatts_evt_rw_authorize_request_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_evt_sc_confirm_dec': Module.cwrap('emscripten_ble_gatts_evt_sc_confirm_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_evt_sys_attr_missing_dec': Module.cwrap('emscripten_ble_gatts_evt_sys_attr_missing_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_evt_timeout_dec': Module.cwrap('emscripten_ble_gatts_evt_timeout_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_evt_write_dec': Module.cwrap('emscripten_ble_gatts_evt_write_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_evt_exchange_mtu_request_dec': Module.cwrap('emscripten_ble_gatts_evt_exchange_mtu_request_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_l2cap_cid_register_req_enc': Module.cwrap('emscripten_ble_l2cap_cid_register_req_enc', 'number', ['number', 'number', 'number']),
'ble_l2cap_cid_register_rsp_dec': Module.cwrap('emscripten_ble_l2cap_cid_register_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_l2cap_cid_unregister_req_enc': Module.cwrap('emscripten_ble_l2cap_cid_unregister_req_enc', 'number', ['number', 'number', 'number']),
'ble_l2cap_cid_unregister_rsp_dec': Module.cwrap('emscripten_ble_l2cap_cid_unregister_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_l2cap_tx_req_enc': Module.cwrap('emscripten_ble_l2cap_tx_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_l2cap_tx_rsp_dec': Module.cwrap('emscripten_ble_l2cap_tx_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_l2cap_evt_rx_dec': Module.cwrap('emscripten_ble_l2cap_evt_rx_dec', 'number', ['number', 'number', 'number', 'number'])}