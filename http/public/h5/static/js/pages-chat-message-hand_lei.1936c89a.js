(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-chat-message-hand_lei"],{"10a7":function(e,t,n){var i=n("c371");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("0cdded44",i,!0,{sourceMap:!1,shadowMode:!1})},"1e60":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("760f")),s={routeTabBarHook:function(){a.default.routeTool(),a.default.setStatusTips()},routeSonHook:function(){a.default.routeTool()}};t.default=s},"22cf":function(e,t,n){"use strict";n.r(t);var i=n("3b3c"),a=n("6ff6");for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);n("282d");var c,l=n("f0c5"),u=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"10d1b797",null,!1,i["a"],c);t["default"]=u.exports},"282d":function(e,t,n){"use strict";var i=n("10a7"),a=n.n(i);a.a},"3b3c":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"content",class:e.typeClass},[n("v-uni-view",{staticClass:"luck"},[n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"term"},[e._v("红包个数")]),n("v-uni-view",{staticClass:"input"},[n("v-uni-input",{attrs:{type:"number",placeholder:"输入红包个数"},model:{value:e.number,callback:function(t){e.number=t},expression:"number"}}),e._v("个")],1)],1),n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"term"},[e._v("总金额")]),n("v-uni-view",{staticClass:"input"},[n("v-uni-input",{attrs:{type:"number",placeholder:"输入金额"},model:{value:e.luckMoney,callback:function(t){e.luckMoney=t},expression:"luckMoney"}}),e._v("元")],1)],1),n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"term"},[e._v("红包雷值")]),n("v-uni-view",{staticClass:"input"},[e.lei.length?e._e():n("v-uni-input",{attrs:{type:"number",disabled:"true",placeholder:"请点击下方选择雷值"}}),e.lei.length?n("v-uni-view",{staticClass:"lei-content"},e._l(e.lei,(function(t,i){return n("v-uni-view",{staticClass:"input-num"},[e._v(e._s(t))])})),1):e._e()],1)],1),n("v-uni-view",{staticClass:"tis"},[e._v("* 提示再次点击选中的雷为取消")]),n("v-uni-view",{staticClass:"blessing"},[n("v-uni-view",{class:["input-num-select",e.selected_num0?" active":""],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.taptLei(0)}}},[e._v("0")]),n("v-uni-view",{class:["input-num-select",e.selected_num1?" active":""],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.taptLei(1)}}},[e._v("1")]),n("v-uni-view",{class:["input-num-select",e.selected_num2?" active":""],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.taptLei(2)}}},[e._v("2")]),n("v-uni-view",{class:["input-num-select",e.selected_num3?" active":""],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.taptLei(3)}}},[e._v("3")]),n("v-uni-view",{class:["input-num-select",e.selected_num4?" active":""],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.taptLei(4)}}},[e._v("4")]),n("v-uni-view",{class:["input-num-select",e.selected_num5?" active":""],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.taptLei(5)}}},[e._v("5")]),n("v-uni-view",{class:["input-num-select",e.selected_num6?" active":""],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.taptLei(6)}}},[e._v("6")]),n("v-uni-view",{class:["input-num-select",e.selected_num7?" active":""],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.taptLei(7)}}},[e._v("7")]),n("v-uni-view",{class:["input-num-select",e.selected_num8?" active":""],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.taptLei(8)}}},[e._v("8")]),n("v-uni-view",{class:["input-num-select",e.selected_num9?" active":""],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.taptLei(9)}}},[e._v("9")])],1),n("v-uni-view",{staticClass:"hand",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.hand("luck")}}},[e._v("发红包")])],1),n("v-uni-view",{staticClass:"normal"},[n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"term"},[e._v("红包个数")]),n("v-uni-view",{staticClass:"input"},[n("v-uni-input",{attrs:{type:"number",placeholder:"输入红包个数"},model:{value:e.number,callback:function(t){e.number=t},expression:"number"}}),e._v("个")],1)],1),n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"term"},[e._v("单个金额")]),n("v-uni-view",{staticClass:"input"},[n("v-uni-input",{attrs:{type:"number",placeholder:"输入金额"},model:{value:e.money,callback:function(t){e.money=t},expression:"money"}}),e._v("元")],1)],1),n("v-uni-view",{staticClass:"tis"},[e._v("小伙伴领取的金额相同")]),n("v-uni-view",{staticClass:"blessing"},[n("v-uni-input",{attrs:{type:"text",maxlength:"12",placeholder:"恭喜发财"},model:{value:e.blessing,callback:function(t){e.blessing=t},expression:"blessing"}})],1),n("v-uni-view",{staticClass:"hand",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.hand("normal")}}},[e._v("发红包")])],1)],1)],1)},s=[]},"6ff6":function(e,t,n){"use strict";n.r(t);var i=n("fb22"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t["default"]=a.a},c371:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-10d1b797]{background-color:#f3f3f3}uni-view[data-v-10d1b797]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.tabr[data-v-10d1b797]{width:94%;height:%?105?%;padding:0 3%;border-bottom:solid %?1?% #dedede}.tabr uni-view[data-v-10d1b797]{width:50%;height:%?100?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;color:#999}.tabr .on[data-v-10d1b797]{color:#cf3c35}.tabr .border[data-v-10d1b797]{height:%?4?%;background-color:#cf3c35;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.tabr .border.normal[data-v-10d1b797]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.content[data-v-10d1b797]{width:100%;height:80vh;overflow:hidden}.content.normal .luck[data-v-10d1b797]{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.content.normal .normal[data-v-10d1b797]{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.content .luck[data-v-10d1b797], .content .normal[data-v-10d1b797]{-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.content .normal[data-v-10d1b797]{-webkit-transform:translate3d(100%,-100%,0);transform:translate3d(100%,-100%,0)}.content .row[data-v-10d1b797], .content .tis[data-v-10d1b797], .content .blessing[data-v-10d1b797], .content .hand[data-v-10d1b797]{width:94%}.content .row[data-v-10d1b797], .content .tis[data-v-10d1b797], .content .blessing[data-v-10d1b797]{border-bottom:#dedede solid %?1?%}.content .row[data-v-10d1b797], .content .blessing[data-v-10d1b797]{padding:%?30?%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;justify-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.content .row[data-v-10d1b797], .content .hand[data-v-10d1b797]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.content .row[data-v-10d1b797]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.content .row .term[data-v-10d1b797], .content .row .input[data-v-10d1b797]{width:50%}.content .row .input[data-v-10d1b797]{-webkit-flex-shrink:0;flex-shrink:0;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.content .row .input uni-input[data-v-10d1b797]{height:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:right;margin-right:%?20?%;font-size:%?30?%}.content .input-lei[data-v-10d1b797]{-webkit-flex-shrink:0;flex-shrink:0;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.content .input-lei uni-text[data-v-10d1b797]{height:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:left;margin-right:%?20?%;font-size:%?30?%}.content .tis[data-v-10d1b797]{height:%?60?%;padding:%?20?% 3%;font-size:16px;color:red}.content .hand[data-v-10d1b797]{margin:%?30?% 3%;background-color:#cf3c35;color:#fff;font-size:%?34?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:%?10?%;height:%?100?%}.content .input-num[data-v-10d1b797]{width:20px;height:20px;font-size:12px;font-weight:700;line-height:20px;text-align:center;background:url(/static/theme/default/chat/lei1.png) no-repeat;background-size:100% 100%;display:inline-block;margin-left:5px}.input-num-select[data-v-10d1b797]{display:inline-block;width:50px;height:50px;line-height:50px;text-align:center;border-radius:100%;background:#fff;font-size:18px;font-weight:700;margin:0 9px 10px 0;background:url(/static/theme/default/chat/lei1.png) no-repeat;background-size:100% 100%}.input-num-select[data-v-10d1b797]:nth-child(2n){background:url(/static/theme/default/chat/lei2.png) no-repeat!important;background-size:100% 100%!important}.lei-content[data-v-10d1b797]{display:-webkit-box;display:-webkit-flex;display:flex;word-break:break-all;width:%?300?%;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.blessing .active[data-v-10d1b797]{background:url(/static/theme/default/chat/lei3.png) no-repeat!important;background-size:100% 100%!important}body.?%PAGE?%[data-v-10d1b797]{background-color:#f3f3f3}',""]),e.exports=t},fb22:function(e,t,n){"use strict";(function(e){var i=n("4ea4");n("c975"),n("a434"),n("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("da2a")),s=i(n("1e60")),c=(i(n("2263")),{data:function(){return{typeClass:"luck",number:"",money:"",luckMoney:"",blessing:"",click:!0,lei:[],page_params:{},selected_num0:!1,selected_num1:!1,selected_num2:!1,selected_num3:!1,selected_num4:!1,selected_num5:!1,selected_num6:!1,selected_num7:!1,selected_num8:!1,selected_num9:!1}},onLoad:function(e){var t=this;t.page_params=e},onShow:function(){s.default.routeTabBarHook()},computed:{},methods:{deleteNum:function(e){var t=this.lei.indexOf(e);this.lei.splice(t,1)},taptLei:function(e){switch(e){case 0:return this.selected_num0?(this.deleteNum(e),this.selected_num0=!1):(this.lei.push(e),this.selected_num0=!0);case 1:return this.selected_num1?(this.deleteNum(e),this.selected_num1=!1):(this.lei.push(e),this.selected_num1=!0);case 2:return this.selected_num2?(this.deleteNum(e),this.selected_num2=!1):(this.lei.push(e),this.selected_num2=!0);case 3:return this.selected_num3?(this.deleteNum(e),this.selected_num3=!1):(this.lei.push(e),this.selected_num3=!0);case 4:return this.selected_num4?(this.deleteNum(e),this.selected_num4=!1):(this.lei.push(e),this.selected_num4=!0);case 5:return this.selected_num5?(this.deleteNum(e),this.selected_num5=!1):(this.lei.push(e),this.selected_num5=!0);case 6:return this.selected_num6?(this.deleteNum(e),this.selected_num6=!1):(this.lei.push(e),this.selected_num6=!0);case 7:return this.selected_num7?(this.deleteNum(e),this.selected_num7=!1):(this.lei.push(e),this.selected_num7=!0);case 8:return this.selected_num8?(this.deleteNum(e),this.selected_num8=!1):(this.lei.push(e),this.selected_num8=!0);case 9:return this.selected_num9?(this.deleteNum(e),this.selected_num9=!1):(this.lei.push(e),this.selected_num9=!0)}},switchType:function(e){this.typeClass=e},hand:function(t){var n=this,i={type:2,num:this.number,hongbao_msg:this.lei,amount:this.money};return"luck"==t&&(i.amount=this.luckMoney),n.lei.length<=0?uni.showToast({title:"请选择红包雷",icon:"none"}):!i.amount||i.amount<=0?uni.showToast({title:"金额不能为空",icon:"none"}):i.num!=Math.abs(parseInt(i.num))?uni.showToast({title:"数量填写大于0的整数",icon:"none"}):(i.hongbao_msg=JSON.stringify(i.hongbao_msg)||"恭喜发财",i=Object.assign(this.page_params,i),void a.default.checkBeforePay(i,(function(e){a.default.createLeiHongBao(i,(function(e){uni.navigateTo({url:"../message?list_id="+n.page_params.list_id})}),(function(e){n.click=!0,uni.showToast({title:e.msg,icon:"none"})}))}),(function(t){e.log("fail callback"),uni.showToast({title:t.msg,icon:"none"})}),(function(e){uni.showToast({title:e.msg,icon:"none"})})))},getPassword:function(t){e.log("参数传递",t);var n=this;if(!n.click)return!1;n.click=!1,uni.showLoading({title:"提交中"}),a.default.createLeiHongBao(t,(function(e){uni.navigateTo({url:"../message?list_id="+n.page_params.list_id})}),(function(e){n.click=!0}))}}});t.default=c}).call(this,n("5a52")["default"])}}]);