/*

[rewrite_local]
# 车工计算破解
^http:\/\/wu18\.cn\/cg\/zhanghao\/ALogOn\.php url script-response-body https://raw.githubusercontent.com/kingreevice/Script/refs/heads/main/wo18_1.js

[mitm]
hostname = wu18.cn

*/

var body =JSON.parse($response.body); 
body["data"]="登录成功"
body["time"]="2026.12.13"
body =  JSON.stringify(body)
$done(body)
