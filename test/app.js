"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
// import Church from '../release/Services/Church';
// import Member from '../release/Services/Member';
var index_1 = require("../release/index");
var church_client = new index_1.Church();
var test_church_uuid = '4465b887-0ead-427f-bbeb-efd265765cbc';
var test_api_client_version_uuid = '08576067-3425-46e7-894c-4f15cbe2805e';
var test_session_uuid = (0, crypto_1.randomUUID)();
var test_member_username = 'member01';
var test_member_password = 'member01';
// var config_file_url = '';
var base_path = '';
// church_client.getChurches()
// 	.then((response: any) => {
// 		response.data.forEach((church: any) => {
// 			if (church.uuid == test_church_uuid) {
// 		}
// 	});
// });
// church_client.getChurch(test_church_uuid)
// 	.then((response: any) => {
// 		console.log(response.data);
// 		base_path = response.data.base_path;
// 		const member_client = new Member(base_path, test_api_client_version_uuid, test_session_uuid);
// 		member_client.getMe()
// 			.then((response: any) => {
// 				console.log(response.data);
// 				member_client.Authenticate(test_member_username, test_member_password, "760076")
// 					.then((response: any) => {
// 						console.log(response.data);
// 						member_client.getMe()
// 							.then((response: any) => {
// 								console.log(response.data);
// 							});
// 					});
// 			});
// 	});
church_client.getChurch(test_church_uuid)
    .then(function (response) {
    console.log(response.data);
    base_path = response.data.base_path;
    var menu_client = new index_1.Menu(base_path, test_api_client_version_uuid, test_session_uuid);
    menu_client.getSlug('main-menu')
        .then(function (response) {
        console.log(JSON.stringify(response.data, null, 2));
    });
});
// const variable_client = new Variable("https://tenant-00002-efd265765cbc.hamanahel.in", test_api_client_version_uuid, test_session_uuid);
// console.log(variable_client.getBoolean('enforce_mobile_2fa_config_flag'));
// console.log(data)
