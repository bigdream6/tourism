(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a75c3d5"],{"022b":function(t,e,i){},"0f6f":function(t,e,i){"use strict";i("ef0e")},"41f7":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"top"},[i("div",{staticClass:"top_container"},[i("div",{staticClass:"top_left"},[i("router-link",{attrs:{tag:"h2",to:"/"}},[t._v("通了旅游")]),i("h3",[i("router-link",{attrs:{tag:"a",to:"/tours"}},[t._v("跟团游")])],1),i("h3",[i("router-link",{attrs:{tag:"a",to:"/lvtu"}},[t._v("我的旅图")])],1),i("h3",[i("router-link",{attrs:{tag:"a",to:"/dongtai"}},[t._v("旅态")])],1)],1),i("div",{staticClass:"top_right"},[t.loginIsShow?t._e():i("div",{staticClass:"login_and_show"},[i("el-avatar",{attrs:{src:t.imgUrl}}),t._v(",\n        "+t._s(t.name)+"\n        "),i("div",[i("div",{on:{click:function(e){t.inforShow=!0}}},[t._v("修改信息")]),i("hr"),i("div",{on:{click:t.toLogin}},[t._v("退出")])])],1),i("infor",{directives:[{name:"show",rawName:"v-show",value:t.inforShow,expression:"inforShow"}],attrs:{name:t.name,imageUrl:t.imgUrl}}),t.loginIsShow?i("div",[i("router-link",{attrs:{tag:"span",to:"/registy"}},[t._v("注册")]),i("span",[t._v(" | ")]),i("router-link",{attrs:{tag:"span",to:"/login"}},[t._v("登录")])],1):t._e()],1)])])},s=[],o=i("b009"),a={components:{infor:o["a"]},data:function(){return{loginIsShow:!0,name:"",inforShow:!1,imgUrl:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}},mounted:function(){if(0==this.$cookies.get("uId").length||null==this.$cookies.get("uId"))this.loginIsShow=!0;else{var t=this;this.loginIsShow=!1,0==this.$cookies.get("infor")?this.name=this.$cookies.get("name"):(this.name=this.$cookies.get("name"),t.imgUrl=this.$cookies.get("imgUrl").replaceAll("^","/"),console.log(this.imgUrl))}},methods:{toLogin:function(){this.$router.push({path:"/login"})}}},r=a,l=(i("8761"),i("2877")),c=Object(l["a"])(r,n,s,!1,null,"54de3c6b",null);e["a"]=c.exports},"72ad":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("top"),i("div",{staticClass:"cotainer teamInfor"},[i("div",{staticClass:"f1"},[i("div",[i("el-carousel",{attrs:{trigger:"click",height:"150px"}},t._l(t.teamInfor.fileList,(function(t){return i("el-carousel-item",{key:t},[i("div",{staticClass:"img",style:{background:"url("+t+")"}})])})),1)],1),i("div",{staticClass:"f1_right"},[i("h3",[t._v(t._s(t.teamInfor.introduce))]),i("div",[i("span",[t._v(t._s(t.teamInfor.departure))]),t._v("\n          >>>>\n          "),i("span",[t._v(t._s(t.teamInfor.destination))])]),i("div",{staticClass:"price"},[i("h3",[t._v("￥"+t._s(t.teamInfor.price))]),i("el-button",{attrs:{type:"success"},on:{click:t.open}},[t._v("预定名额")])],1)])]),i("hr"),i("div",{staticClass:"f2"},[i("div",[i("h2",[t._v("行程安排")]),i("el-timeline",[t._l(t.teamInfor.buZhou,(function(e,n){return i("el-timeline-item",{key:n,attrs:{placement:"top"}},[i("el-card",[i("h4",[t._v(t._s(e))])])],1)})),i("div",{staticClass:"arcle"},[t._v("文章Id:"+t._s(this.teamInfor.tId))])],2)],1),i("div",[t._v("\n        提供商："+t._s(t.teamInfor.provider)+"\n        "),t._m(0)]),i("div")])])],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._v("\n          温馨提示\n          "),i("br"),t._v("\n          【关于购物场所】\n          1.在旅游行程中，个别景点景区、餐厅、休息区等场所存在商场等购物场所，上述场所非旅行社安排的指定购物场所。本公司提醒旅游者根据自身需要，理性消费并索要必要票据。如产生消费争议，请自行承担相关责任义务，由此带来的不便，敬请谅解！\n          2.目的地可能有部分私人经营的娱乐、消费场所，此类组织多数无合法经营资质，存在各种隐患。为了您的安全和健康考虑，本公司提醒您，谨慎消费；\n          "),i("br"),t._v("\n          【关于不可抗力因素】\n          1.本产品行程实际出行中，导游、司机可能会根据天气、交通等情况，对您的行程进行适当调整（如调整景点游览顺序等），以确保行程顺利进行。如因不可抗力等因素确实无法执行原行程计划，对于因此而造成的费用变更，我社实行多退少补，敬请配合；\n          2.行程中的赠送项目，如因交通、天气等不可抗因素导致不能赠送的、或因您个人原因不能参观的，费用不退，敬请谅解；\n          3.因玉龙雪山冰川大索道实行限票制，旺季（暑假、寒假、春节等节假日）期间出行不保证上大索道，如实际出行时上不了大索道则退门票差价安排小索道，望知晓。\n          4.如遇春节、元旦、国庆、寒暑假等旺季出行，动车票资源紧张，本社会调整火车卧铺或汽车往返，请知晓！\n          5.如遇春节、元旦、国庆、寒暑假等旺季出行，国际五星酒店因资源紧张无法安排，则安排至同级酒店或退差价安排商务酒店。\n          "),i("br"),t._v("\n          【温馨提示】\n          1.全程请您妥善保管好您的身份证件及贵重物品，以免因遗失等情况影响了旅行；\n          2.由于旅游产品包含因素较多，为提高客户体验，我社会对产品进行更新、升级；您拍下付款时的产品细节和您出行的产品细节会有所出入，在您抵达昆明时，我社工作人员会把准确的行程单与您核对，行程将按照行程单执行。\n          3.此行程为特价打包产品，指定最少2成人及以上预定，低于此人数下单视为无效订单，不便之处，敬请谅解！\n          4.因客人是失信人员导致乘坐不了飞机、火车、高铁，并未提前告知工作人员，所产生的一切费用自行承担。\n          5.8人及以上出游人数下单前请先咨询客服！如果未咨询拍下付款，则视为无效订单，不便之处，敬请谅解！\n          6.本行程只支持纸质版合同，会在抵达昆明的第一天由合同专员当面签署并讲解行程及注意事项，请知晓！\n          7.由于铁路局政策原因，如客人由于自身原因需火车/动车退票、改期，请持身份证原件自行操作，望悉知！\n          8.跟团产品需您全程跟团，期间不可出现离团及脱团行为，请您予以配合。如您擅自离团，视为您单方面违约，需承担已损失的机票、车费、住宿费，旅行社有权在您违约后终止您的后继行程及服务，包括您的回程机票，之后发生的任何事情均需您自行全权负责。\n          9.该团为各地游客散拼组成，出发地不同，机票价格不一致会导致所拍价格不一致，行程段具体以合同为准，望悉知！\n        ")])}],o=i("41f7"),a={components:{top:o["a"]},data:function(){return{teamInfor:{}}},methods:{open:function(){var t=this;this.$prompt("请输入电话号","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^[1]([3-9])[0-9]{9}$/,inputErrorMessage:"格式不正确"}).then((function(e){var i=e.value;t.axios.post(t.$root.team+"savePhoneNum/"+i).then((function(e){e.data&&t.$message({type:"success",message:"提交成功"+i})})).catch((function(t){console.error(t)}))})).catch((function(){t.$message({type:"info",message:"取消输入"})}))}},mounted:function(){this.teamInfor=JSON.parse(this.$route.query.item)}},r=a,l=(i("c6cd"),i("2877")),c=Object(l["a"])(r,n,s,!1,null,"93a8daa4",null);e["default"]=c.exports},8761:function(t,e,i){"use strict";i("022b")},b009:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"infor"},[i("div",{staticClass:"infor_f1"},[i("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://localhost:81/upload/","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.imageUrl?i("img",{staticClass:"avatar",attrs:{src:t.infor.imgUrl}}):i("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),i("div",[i("el-input",{attrs:{type:"text",maxlength:"10"},model:{value:t.infor.name,callback:function(e){t.$set(t.infor,"name",e)},expression:"infor.name"}})],1)],1),i("div",[i("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"我的签名",minlength:"4",maxlength:"50"},model:{value:t.infor.theSay,callback:function(e){t.$set(t.infor,"theSay",e)},expression:"infor.theSay"}})],1),i("div",[i("el-button",{attrs:{size:"small",type:"success"},on:{click:function(e){return t.send()}}},[t._v(" 修改 ")]),i("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.show}},[t._v("取消")])],1)])},s=[],o={name:"infor",props:["imageUrl","name"],data:function(){return{infor:{uId:"",theSay:"",imgUrl:"",name:""}}},methods:{send:function(){var t=this;if(this.infor.name.length<4)this.$message.error("名字长度不能少于4位");else if(this.infor.name.match("[//,?]"))this.$message.error("名字中不能包含特殊字符（/,?）");else{this.infor.uId=this.$cookies.get("uId");var e=this.infor.imgUrl;this.infor.imgUrl=this.infor.imgUrl.replaceAll("/","^");var i=JSON.stringify(this.infor),n=this;this.axios.post(this.$root.loginUrl+"updateUserInfor/"+i).then((function(i){console.log(i),i.data?(t.$cookies.set("name",n.infor.name),t.$cookies.set("imgUrl",e),t.$cookies.set("infor",1),t.$cookies.set("qian",t.infor.theSay),t.$parent.imgUrl=e,t.$parent.name=n.infor.name,t.$message({message:"修改 成功",type:"success"}),t.$parent.inforShow=!1):t.$message.error("修改失败")})).catch((function(e){n.infor.imgUrl=t.$cookies.get("imgUrl").replaceAll("%","/"),t.$message.error("修改失败"),console.error(e)}))}},show:function(){this.$parent.inforShow=!1},handleAvatarSuccess:function(t,e){console.log(t),this.infor.imgUrl=t},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type,i=t.size/1024/1024<2;return e||this.$message.error("上传头像图片只能是 JPG 格式!"),i||this.$message.error("上传头像图片大小不能超过 2MB!"),e&&i}},mounted:function(){this.$cookies.isKey("qian")&&(this.infor.theSay=this.$cookies.get("qian")),this.$cookies.isKey("imgUrl")?this.infor.imgUrl=this.$cookies.get("imgUrl").replaceAll("^","/"):this.infor.imgUrl=this.imageUrl,this.$cookies.isKey("name")&&(this.infor.name=this.$cookies.get("name"))}},a=o,r=(i("0f6f"),i("2877")),l=Object(r["a"])(a,n,s,!1,null,null,null);e["a"]=l.exports},b0fe:function(t,e,i){},c6cd:function(t,e,i){"use strict";i("b0fe")},ef0e:function(t,e,i){}}]);
//# sourceMappingURL=chunk-0a75c3d5.ec618ed2.js.map