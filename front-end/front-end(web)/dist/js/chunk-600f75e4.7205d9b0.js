(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-600f75e4"],{"362a":function(e,s,t){},"59c2":function(e,s,t){"use strict";t("fc8c")},"7f74":function(e,s,t){e.exports=t.p+"img/CoUBYGBhNV-AN-SPADHuD9JYNGM647.05e5ebea.png"},"91d7":function(e,s,t){"use strict";t.r(s);var i=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"user-login"},[t("div",{staticClass:"user-login-bg",style:{"background-image":"url("+e.backgroundImage+")"}}),t("div",{staticClass:"content-wrapper"},[e._m(0),t("div",{staticClass:"form-container"},[t("h4",{staticClass:"form-title"},[e._v("注册")]),t("el-form",{ref:"form",attrs:{model:e.user,"label-width":"0"}},[t("div",{staticClass:"form-items"},[t("el-row",{staticClass:"form-item"},[t("el-col",[t("el-form-item",{attrs:{prop:"username",rules:[{required:!0,message:"邮箱不能为空"}]}},[t("div",{staticClass:"form-line"},[t("i",{staticClass:"el-icon-edit-outline input-icon"}),t("el-input",{attrs:{placeholder:"邮箱"},model:{value:e.user.username,callback:function(s){e.$set(e.user,"username",s)},expression:"user.username"}})],1)])],1)],1),t("el-row",{staticClass:"form-item form-item-geng"},[t("el-col",[t("el-input",{attrs:{type:"text",maxlength:"4",placeholder:"验证码"},model:{value:e.mailCode,callback:function(s){e.mailCode=s},expression:"mailCode"}}),t("el-button",{attrs:{disabled:e.disabled},on:{click:e.getCodeRequest}},[e._v(e._s(e.num))])],1)],1),t("el-row",{staticClass:"form-item"},[t("el-col",[t("el-form-item",{attrs:{prop:"password",rules:[{required:!0,message:"密码不能为空"}]}},[t("div",{staticClass:"form-line"},[t("i",{staticClass:"el-icon-service input-icon"}),t("el-input",{attrs:{maxlength:"10",type:"password",placeholder:"密码"},model:{value:e.user.password,callback:function(s){e.$set(e.user,"password",s)},expression:"user.password"}})],1)])],1)],1),t("el-row",{staticClass:"form-item"},[t("el-button",{staticClass:"submit-btn",attrs:{type:"primary",size:"small"},on:{click:e.submitBtn}},[e._v("\n              注册\n            ")])],1)],1),t("el-row",{staticClass:"tips"},[t("router-link",{staticClass:"link",attrs:{to:"/login",tag:"a"}},[e._v("返回登录页")])],1)],1)],1)])])},a=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("h2",{staticClass:"slogan"},[e._v("\n      通了旅游 "),t("br"),e._v("\n      注册\n    ")])}],r=t("ac96"),o=t("7f74"),n={components:{BasicContainer:r["a"]},name:"UserLogin",data:function(){return{backgroundImage:o,user:{username:"",password:""},mailCode:"",num:"登录",disabled:!1}},created:function(){null==this.$cookies.get("registy")||this.$cookies.get("registy")<=0||60==this.$cookies.get("registy")?(this.$cookies.set("registy",60),this.$cookies.set("registy",60),this.disabled=!1,this.num="获取"):this.$cookies.get("registy")<60&&this.$cookies.get("registy")>0&&this.getCode()},methods:{submitBtn:function(){var e=this;0!=this.user.username.length&&8==this.user.password.length&&4==this.mailCode.length?this.axios.post(this.$root.loginUrl+"/register/"+this.user.username+"/"+this.user.password+"/"+this.mailCode).then((function(s){s.data&&e.$message({message:"注册成功",type:"success"}),console.log(s.data)})).catch((function(e){console.error(e)})):this.$message.error("格式错误，请检查后注册")},getCodeRequest:function(){var e=this,s=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;s.test(this.user.username)?this.axios.post(this.$root.loginUrl+"/getMailCode/"+this.user.username).then((function(s){s.data?(e.$message({message:"发送成功,验证码两分钟内有效",type:"success"}),e.getCode()):e.$message.error("发送失败")})).catch((function(s){console.error(s),e.$message.error("发送失败，请检查网络")})):this.$message.error("邮箱格式错误")},getCode:function(){var e=this,s=setInterval((function(){e.$cookies.get("registy")<=0?(e.disabled=!1,e.num="获取",clearInterval(s)):(e.disabled=!0,e.$cookies.set("registy",e.$cookies.get("registy")-1),e.num=e.$cookies.get("registy"))}),1e3)}}},l=n,c=(t("59c2"),t("2877")),u=Object(c["a"])(l,i,a,!1,null,"5be3a376",null);s["default"]=u.exports},ac96:function(e,s,t){"use strict";var i=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"basic-container"},[e._t("default")],2)},a=[],r={name:"basic-container"},o=r,n=(t("f28d"),t("2877")),l=Object(n["a"])(o,i,a,!1,null,null,null),c=l.exports,u=c;s["a"]=u},f28d:function(e,s,t){"use strict";t("362a")},fc8c:function(e,s,t){}}]);
//# sourceMappingURL=chunk-600f75e4.7205d9b0.js.map