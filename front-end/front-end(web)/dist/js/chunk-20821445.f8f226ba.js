(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20821445"],{"12bc":function(t,e,n){},a41c:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"phoneNum"},[n("div",{staticClass:"f1"},[n("h2",[t._v("旅游团预定用户手机")]),n("i",{staticClass:"el-icon-document",on:{click:function(e){return t.downloadFile("test")}}},[t._v("下载Excel")])]),n("hr"),n("div",[t._m(0),n("div",{staticClass:"geng_body"},t._l(t.dataList,(function(e,i){return n("div",{key:i},[n("div",[t._v(t._s(e.phoneNum))]),n("div",[t._v(t._s(e.date))])])})),0),n("hr")])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"geng_head"},[n("div",[t._v("手机号")]),n("div",[t._v("日期")]),n("div",[t._v("手机号")]),n("div",[t._v("日期")]),n("div",[t._v("手机号")]),n("div",[t._v("日期")]),n("div",[t._v("手机号")]),n("div",[t._v("日期")])])}],a={data:function(){return{dataList:[]}},methods:{downloadFile:function(t){this.axios.get(this.$root.team+"phoneNumExcel/download",{responseType:"arraybuffer",ContentType:"application/vnd.ms-excel"}).then((function(t){var e=new Blob([t.data],{type:"application/xlsx"}),n=window.URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download="download.xlsx",i.click(),URL.revokeObjectURL(n)})).catch((function(t){}))}},beforeMount:function(){var t=this;this.axios.post(this.$root.team+"listPhoneNum").then((function(e){t.dataList=e.data,console.log(t.dataList),console.log("-------------")})).catch((function(t){console.error(t)}))}},c=a,s=(n("e8e3"),n("2877")),d=Object(s["a"])(c,i,o,!1,null,null,null);e["default"]=d.exports},e8e3:function(t,e,n){"use strict";n("12bc")}}]);
//# sourceMappingURL=chunk-20821445.f8f226ba.js.map