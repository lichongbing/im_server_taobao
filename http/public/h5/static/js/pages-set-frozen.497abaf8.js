(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-frozen"],{"769a":function(n,t,a){"use strict";a.r(t);var e=a("a7b1"),i=a.n(e);for(var o in e)"default"!==o&&function(n){a.d(t,n,(function(){return e[n]}))}(o);t["default"]=i.a},"882b":function(n,t,a){"use strict";var e;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return e}));var i=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"frozen-bg"},[a("v-uni-view",{staticClass:"frozen-card"},[a("v-uni-view",{staticClass:"uni-media-image"},[a("v-uni-image",{staticClass:"uni-media-loading",attrs:{src:"/static/theme/default/frone.png"}})],1),a("v-uni-view",{staticClass:"frozen-head"},[n._v("")]),a("v-uni-view",{staticClass:"frozen-head"},[n._v("发现趣聊帐号被盗或手机丢失，你可以冻结相遇号")]),a("v-uni-view",{staticClass:"frozen-function"},[a("v-uni-text",[n._v("防止坏人窃取你的个人隐私\n\t\t\t\t\t\t防止坏人冒用你的身份诈骗好友\n\t\t\t\t\t\t防止坏人盗刷你的支付资金")])],1)],1),a("v-uni-view",{staticClass:"frozen-btn"},[a("v-uni-button",{class:["landing","landing_true"],attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.subLongin.apply(void 0,arguments)}}},[n._v("开始冻结")])],1)],1)],1)},o=[]},"9fc5":function(n,t,a){var e=a("24fb");t=e(!1),t.push([n.i,".uni-media-image[data-v-16804646]{padding:%?10?% %?10?%;margin-top:%?10?%;text-align:center}.uni-media-loading[data-v-16804646]{width:%?150?%;height:%?150?%}.landing[data-v-16804646]{height:%?84?%;line-height:%?84?%;color:#fff;font-size:%?32?%;bordor:none;border-radius:%?10?%}.landing_false[data-v-16804646]{background-color:#d8d8d8}.uni-button[type=primary][data-v-16804646]{background-color:#b2e281}.frozen-btn[data-v-16804646]{padding:%?10?% %?20?%;margin-top:%?55?%;text-align:center}.frozen-function[data-v-16804646]{font-size:%?26?%;margin-top:%?20?%;margin-bottom:%?0?%;padding:%?0?% %?10?%;color:#999;text-align:center}.frozen-forget[data-v-16804646]{float:left;font-size:%?26?%;color:#999}.textspace[data-v-16804646]{padding:%?10?% %?10?%}.frozen-register[data-v-16804646]{color:#666;float:right;font-size:%?26?%}.frozen-input uni-input[data-v-16804646]{background:#f2f5f6;font-size:%?28?%;padding:%?10?% %?25?%;height:%?62?%;line-height:%?62?%;border-radius:%?8?%}.frozen-margin-b[data-v-16804646]{margin-bottom:%?25?%}.frozen-input[data-v-16804646]{padding:%?20?% %?20?%}.frozen-head[data-v-16804646]{font-size:%?34?%;text-align:center;padding:%?25?% %?10?% %?25?% %?10?%}.frozen-card[data-v-16804646]{background:#fff;border-radius:%?12?%;padding:%?10?% %?25?%;\n\t/* box-shadow: 0 6upx 18upx rgba(0,0,0,0.12); */position:relative;margin-top:%?100?%}.frozen-bg[data-v-16804646]{\n\t/* height: 260upx;\n\tpadding: 25upx;\n\tbackground: linear-gradient(#FF978D, #FFBB69); */}uni-page-body[data-v-16804646]{background-color:#fff}.uni-form-item .with-fun .uni-icon[data-v-16804646]{text-align:center}body.?%PAGE?%[data-v-16804646]{background-color:#fff}",""]),n.exports=t},a7b1:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{showPassword:!0,form:{username:"",password:""}}},onLoad:function(){},computed:{checkIn:function(){return""!=this.form.password&&""!=this.form.username&&this.form.password.length>5}},methods:{changePassword:function(){this.showPassword=!this.showPassword},delInputUsernameText:function(){this.form.username=""},delInputPasswordText:function(){this.form.password=""},subLongin:function(){var n=this;n.checkIn&&n.$httpSend({path:"/im/in/frozen",data:n.form,success:function(n){uni.setStorage({key:"token",data:n.token,fail:function(){uni.showModal({content:"本地存储数据不可用!"})},success:function(){uni.reLaunch({url:"../chat/index"})}})}})},go_forget:function(){uni.navigateTo({url:"../../pages/in/forget"})},go_register:function(){uni.navigateTo({url:"../../pages/in/reg"})}}};t.default=e},aa9e:function(n,t,a){"use strict";a.r(t);var e=a("882b"),i=a("769a");for(var o in i)"default"!==o&&function(n){a.d(t,n,(function(){return i[n]}))}(o);a("f82f5");var r,s=a("f0c5"),d=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,"16804646",null,!1,e["a"],r);t["default"]=d.exports},eb0f:function(n,t,a){var e=a("9fc5");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var i=a("4f06").default;i("006ddf3a",e,!0,{sourceMap:!1,shadowMode:!1})},f82f5:function(n,t,a){"use strict";var e=a("eb0f"),i=a.n(e);i.a}}]);