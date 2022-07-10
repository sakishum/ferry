(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-192165dd"],{"2dde":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"form",attrs:{model:e.user,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"用户昵称",prop:"nickName"}},[r("el-input",{model:{value:e.user.nickName,callback:function(t){e.$set(e.user,"nickName",t)},expression:"user.nickName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"手机号码",prop:"phone"}},[r("el-input",{attrs:{maxlength:"11"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{attrs:{maxlength:"50"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"性别"}},[r("el-radio-group",{model:{value:e.user.sex,callback:function(t){e.$set(e.user,"sex",t)},expression:"user.sex"}},[r("el-radio",{attrs:{label:"0"}},[e._v("男")]),e._v(" "),r("el-radio",{attrs:{label:"1"}},[e._v("女")])],1)],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.submit}},[e._v("保存")]),e._v(" "),r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:e.close}},[e._v("关闭")])],1)],1)},a=[],o=r("b150"),i={props:{user:{type:Object}},data:function(){return{rules:{nickName:[{required:!0,message:"用户昵称不能为空",trigger:"blur"}],email:[{required:!0,message:"邮箱地址不能为空",trigger:"blur"},{type:"email",message:"'请输入正确的邮箱地址",trigger:["blur","change"]}],phone:[{required:!0,message:"手机号码不能为空",trigger:"blur"},{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}]}}},methods:{submit:function(){var e=this;this.$refs["form"].validate((function(t){t&&Object(o["k"])(e.user).then((function(t){200===t.code?e.msgSuccess("修改成功"):e.msgError(t.msg)}))}))},close:function(){this.$store.dispatch("tagsView/delView",this.$route),this.$router.push({path:"/dashboard"})}}},l=i,n=r("2877"),u=Object(n["a"])(l,s,a,!1,null,null,null);t["default"]=u.exports},3823:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"form",attrs:{model:e.user,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"旧密码",prop:"oldPassword"}},[r("el-input",{attrs:{placeholder:"请输入旧密码",type:"password"},model:{value:e.user.oldPassword,callback:function(t){e.$set(e.user,"oldPassword",t)},expression:"user.oldPassword"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"新密码",prop:"newPassword"}},[r("el-input",{attrs:{placeholder:"请输入新密码",type:"password"},model:{value:e.user.newPassword,callback:function(t){e.$set(e.user,"newPassword",t)},expression:"user.newPassword"}})],1),e._v(" "),r("el-form-item",{staticStyle:{"/* margin-bottom":"10px */"},attrs:{label:"确认密码",prop:"confirmPassword"}},[r("el-input",{attrs:{placeholder:"请确认密码",type:"password"},model:{value:e.user.confirmPassword,callback:function(t){e.$set(e.user,"confirmPassword",t)},expression:"user.confirmPassword"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.submit}},[e._v("保存")]),e._v(" "),r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:e.close}},[e._v("关闭")])],1)],1)},a=[],o=r("b150"),i={data:function(){var e=this,t=function(t,r,s){e.user.newPassword!==r?s(new Error("两次输入的密码不一致")):s()};return{passwordTyleStatus:!0,user:{oldPassword:void 0,newPassword:void 0,confirmPassword:void 0,passwordType:1},rules:{oldPassword:[{required:!0,message:"旧密码不能为空",trigger:"blur"}],newPassword:[{required:!0,message:"新密码不能为空",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"}],confirmPassword:[{required:!0,message:"确认密码不能为空",trigger:"blur"},{required:!0,validator:t,trigger:"blur"}]}}},methods:{submit:function(){var e=this;this.$refs["form"].validate((function(t){t&&(e.passwordTyleStatus||(e.user.passwordType=0),e.user.passwordType=0,Object(o["l"])(e.user.oldPassword,e.user.newPassword,e.user.passwordType).then((function(t){200===t.code?e.msgSuccess("修改成功"):e.msgError(t.msg)})))}))},close:function(){this.$store.dispatch("tagsView/delView",this.$route),this.$router.push({path:"/index"})}}},l=i,n=r("2877"),u=Object(n["a"])(l,s,a,!1,null,null,null);t["default"]=u.exports},"88c9":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("img",{staticClass:"img-circle img-lg",attrs:{src:e.options.img,title:"点击上传头像"},on:{click:function(t){return e.editCropper()}}}),e._v(" "),r("el-dialog",{attrs:{title:e.title,visible:e.open,width:"800px"},on:{"update:visible":function(t){e.open=t}}},[r("el-row",[r("el-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[r("vue-cropper",{ref:"cropper",attrs:{img:e.options.img,info:!0,"auto-crop":e.options.autoCrop,"auto-crop-width":e.options.autoCropWidth,"auto-crop-height":e.options.autoCropHeight,"fixed-box":e.options.fixedBox},on:{realTime:e.realTime}})],1),e._v(" "),r("el-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[r("div",{staticClass:"avatar-upload-preview"},[r("img",{style:e.previews.img,attrs:{src:e.previews.url}})])])],1),e._v(" "),r("br"),e._v(" "),r("el-row",[r("el-col",{attrs:{lg:2,md:2}},[r("el-upload",{attrs:{action:"#","http-request":e.requestUpload,"show-file-list":!1,"before-upload":e.beforeUpload}},[r("el-button",{attrs:{size:"small"}},[e._v("\n            上传\n            "),r("i",{staticClass:"el-icon-upload el-icon--right"})])],1)],1),e._v(" "),r("el-col",{attrs:{lg:{span:1,offset:2},md:2}},[r("el-button",{attrs:{icon:"el-icon-plus",size:"small"},on:{click:function(t){return e.changeScale(1)}}})],1),e._v(" "),r("el-col",{attrs:{lg:{span:1,offset:1},md:2}},[r("el-button",{attrs:{icon:"el-icon-minus",size:"small"},on:{click:function(t){return e.changeScale(-1)}}})],1),e._v(" "),r("el-col",{attrs:{lg:{span:1,offset:1},md:2}},[r("el-button",{attrs:{icon:"el-icon-refresh-left",size:"small"},on:{click:function(t){return e.rotateLeft()}}})],1),e._v(" "),r("el-col",{attrs:{lg:{span:1,offset:1},md:2}},[r("el-button",{attrs:{icon:"el-icon-refresh-right",size:"small"},on:{click:function(t){return e.rotateRight()}}})],1),e._v(" "),r("el-col",{attrs:{lg:{span:2,offset:6},md:2}},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.uploadImg()}}},[e._v("提 交")])],1)],1)],1)],1)},a=[],o=r("4360"),i=r("7e79"),l=r("b150"),n={components:{VueCropper:i["VueCropper"]},props:{user:{type:Object}},data:function(){return{open:!1,title:"修改头像",options:{img:o["a"].getters.avatar,autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixedBox:!0},previews:{}}},methods:{editCropper:function(){this.open=!0},requestUpload:function(){},rotateLeft:function(){this.$refs.cropper.rotateLeft()},rotateRight:function(){this.$refs.cropper.rotateRight()},changeScale:function(e){e=e||1,this.$refs.cropper.changeScale(e)},beforeUpload:function(e){var t=this;if(-1===e.type.indexOf("image/"))this.msgError("文件格式错误，请上传图片类型,如：JPG，PNG后缀的文件。");else{var r=new FileReader;r.readAsDataURL(e),r.onload=function(){t.options.img=r.result}}},uploadImg:function(){var e=this;this.$refs.cropper.getCropBlob((function(t){var r=new FormData;r.append("upload[]",t),Object(l["m"])(r).then((function(t){200===t.code?(e.open=!1,e.options.img="/"+t.data,e.msgSuccess("修改成功")):e.msgError(t.msg),e.$refs.cropper.clearCrop()}))}))},realTime:function(e){this.previews=e}}},u=n,c=r("2877"),p=Object(c["a"])(u,s,a,!1,null,null,null);t["default"]=p.exports},b150:function(e,t,r){"use strict";r.d(t,"i",(function(){return a})),r.d(t,"e",(function(){return o})),r.d(t,"f",(function(){return i})),r.d(t,"a",(function(){return l})),r.d(t,"k",(function(){return n})),r.d(t,"c",(function(){return u})),r.d(t,"d",(function(){return c})),r.d(t,"j",(function(){return p})),r.d(t,"b",(function(){return d})),r.d(t,"g",(function(){return m})),r.d(t,"l",(function(){return f})),r.d(t,"m",(function(){return v})),r.d(t,"h",(function(){return g}));var s=r("b775");function a(e){return Object(s["a"])({url:"/api/v1/sysUserList",method:"get",params:e})}function o(e){return Object(s["a"])({url:"/api/v1/sysUser/"+e,method:"get"})}function i(){return Object(s["a"])({url:"/api/v1/sysUser/",method:"get"})}function l(e){return Object(s["a"])({url:"/api/v1/sysUser",method:"post",data:e})}function n(e){return Object(s["a"])({url:"/api/v1/sysUser",method:"put",data:e})}function u(e){return Object(s["a"])({url:"/api/v1/sysUser/"+e,method:"delete"})}function c(e){return Object(s["a"])({url:"/api/v1/sysUser/export",method:"get",params:e})}function p(e,t){var r={userId:e,password:t};return Object(s["a"])({url:"/api/v1/sysUser",method:"put",data:r})}function d(e,t){var r={userId:e,status:t};return Object(s["a"])({url:"/api/v1/sysUser",method:"put",data:r})}function m(){return Object(s["a"])({url:"/api/v1/user/profile",method:"get"})}function f(e,t,r){var a={oldPassword:e,newPassword:t,passwordType:r};return Object(s["a"])({url:"/api/v1/user/pwd",method:"put",data:a})}function v(e){return Object(s["a"])({url:"/api/v1/user/avatar",method:"post",data:e})}function g(){return Object(s["a"])({url:"/api/v1/sysUser/importTemplate",method:"get"})}},ecac:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6,xs:24}},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("个人信息")])]),e._v(" "),r("div",[r("div",{staticClass:"text-center"},[r("userAvatar",{attrs:{user:e.user}})],1),e._v(" "),r("ul",{staticClass:"list-group list-group-striped"},[r("li",{staticClass:"list-group-item"},[r("svg-icon",{attrs:{"icon-class":"user"}}),e._v(" 用户名称\n              "),r("div",{staticClass:"pull-right"},[e._v(e._s(e.user.username))])],1),e._v(" "),r("li",{staticClass:"list-group-item"},[r("svg-icon",{attrs:{"icon-class":"phone"}}),e._v(" 手机号码\n              "),r("div",{staticClass:"pull-right"},[e._v(e._s(e.user.phone))])],1),e._v(" "),r("li",{staticClass:"list-group-item"},[r("svg-icon",{attrs:{"icon-class":"email"}}),e._v(" 用户邮箱\n              "),r("div",{staticClass:"pull-right"},[e._v(e._s(e.user.email))])],1),e._v(" "),r("li",{staticClass:"list-group-item"},[r("svg-icon",{attrs:{"icon-class":"tree"}}),e._v(" 所属部门\n              "),r("div",{staticClass:"pull-right"},[e._v(e._s(e.deptName))])],1),e._v(" "),r("li",{staticClass:"list-group-item"},[r("svg-icon",{attrs:{"icon-class":"peoples"}}),e._v(" 所属角色\n              "),r("div",{staticClass:"pull-right"},[e._v(e._s(e.roleName))])],1),e._v(" "),r("li",{staticClass:"list-group-item"},[r("svg-icon",{attrs:{"icon-class":"date"}}),e._v(" 创建日期\n              "),r("div",{staticClass:"pull-right"},[e._v(e._s(e.parseTime(e.user.create_time)))])],1)])])])],1),e._v(" "),r("el-col",{attrs:{span:18,xs:24}},[r("el-card",[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("基本资料")])]),e._v(" "),r("el-tabs",{model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[r("el-tab-pane",{attrs:{label:"基本资料",name:"userinfo"}},[r("userInfo",{attrs:{user:e.user}})],1),e._v(" "),r("el-tab-pane",{attrs:{label:"修改密码",name:"resetPwd"}},[r("resetPwd",{attrs:{user:e.user}})],1)],1)],1)],1)],1)],1)},a=[],o=r("88c9"),i=r("2dde"),l=r("3823"),n=r("b150"),u={name:"Profile",components:{userAvatar:o["default"],userInfo:i["default"],resetPwd:l["default"]},data:function(){return{user:{},roleGroup:{},postGroup:{},deptGroup:{},activeTab:"userinfo",roleIds:void 0,postIds:void 0,roleName:void 0,postName:void 0,dept:{},deptName:void 0}},created:function(){this.getUser()},methods:{getUser:function(){var e=this;Object(n["g"])().then((function(t){if(e.user=t.data,e.roleIds=t.roleIds,e.roleGroup=t.roles,e.roleIds[0])for(var r in e.roleGroup)e.roleIds[0]===e.roleGroup[r].roleId&&(e.roleName=e.roleGroup[r].roleName);else e.roleName="暂无";e.dept=t.dept,e.deptName=e.dept.deptName}))}}},c=u,p=r("2877"),d=Object(p["a"])(c,s,a,!1,null,null,null);t["default"]=d.exports}}]);