(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-details-index"],{"16ff":function(i,t,e){"use strict";var s=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticClass:"page"},[e("v-uni-view",{staticClass:"uni-list my_padding"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-media-list uni-list-cell-navigate",staticStyle:{"flex-direction":"row"}},[e("v-uni-view",{staticClass:"uni-media-list-logo phto"},[e("v-uni-image",{staticStyle:{width:"125upx",height:"125upx","border-radius":"15upx"},attrs:{src:i.userPhoto,"lazy-load":!0},on:{click:function(t){t=i.$handleEvent(t),i.showPhoto()}}})],1),e("v-uni-view",{staticClass:"uni-media-list-detail",staticStyle:{height:"aotu"}},[e("v-uni-view",{staticClass:"uni-media-list-text-top"},[i._v(i._s(i.my.nickname)),e("v-uni-image",{staticClass:"sex_type",attrs:{src:"../../static/theme/default/details/"+i.my.sex+".png","lazy-load":!0}})],1),e("v-uni-view",{staticClass:"uni-media-list-info"},[i._v("昵称:")]),e("v-uni-view",{staticClass:"uni-media-list-info"},[i._v("相遇号:")]),e("v-uni-view",{staticClass:"uni-media-list-info"},[i._v("地区:")]),e("v-uni-view",{staticClass:"uni-media-list-text-bottom uni-ellipsis"})],1)],1)],1)],1),i.isRemarks?e("v-uni-view",{staticClass:"uni-card"},[e("v-uni-navigator",{attrs:{"hover-class":"none",url:"/pages/friend/remarks?user_id="+i.user_id,"animation-type":"slide-in-bottom"}},[e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell",attrs:{"hover-class":"none"}},[e("v-uni-view",{staticClass:"uni-list-cell-navigate uni-navigate-right"},[e("v-uni-view",{staticStyle:{width:"100%"}},[i._v("设置备注和标签")])],1)],1)],1)],1)],1):i._e(),i.is_in?e("v-uni-view",{staticClass:"uni-card"},[e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell",attrs:{"hover-class":"none"}},[e("v-uni-view",{staticClass:"uni-list-cell-navigate"},[e("v-uni-view",{staticStyle:{width:"100%"}},[i._v("验证信息"),e("v-uni-view",{staticClass:"show_text"},[i._v(i._s(i.my.content))])],1)],1)],1)],1)],1):i._e(),e("v-uni-view",{staticClass:"uni-card"},[e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell",attrs:{"hover-class":"none"}},[e("v-uni-view",{staticClass:"uni-list-cell-navigate"},[e("v-uni-view",{staticStyle:{width:"100%"}},[i._v("个性签名"),e("v-uni-view",{staticClass:"show_text"},[i._v(i._s(i.my.doodling))])],1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"uni-card",on:{click:function(t){t=i.$handleEvent(t),i.goCircle(t)}}},[e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell",attrs:{"hover-class":"none"}},[e("v-uni-view",{staticClass:"uni-list-cell-navigate uni-navigate-right friend_cricle"},[e("v-uni-view",{staticClass:"cricle_title"},[i._v("朋友圈")]),i._l(i.my.show_friend.circle,function(t,s){return e("v-uni-view",{key:s,staticClass:"uni-media-list-logo cricle_img"},[e("v-uni-image",{staticStyle:{"border-radius":"8upx"},attrs:{src:i.staticPath+t}})],1)})],2)],1)],1)],1),i.isFrom?e("v-uni-view",{staticClass:"uni-card"},[e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell",attrs:{"hover-class":"none"}},[e("v-uni-view",{staticClass:"uni-list-cell-navigate"},[e("v-uni-view",{staticStyle:{width:"100%"}},[i._v("来 源"),e("v-uni-view",{staticClass:"show_text"},[i._v(i._s(i.my.from))])],1)],1)],1)],1)],1):i._e(),i.my.is_friend?e("v-uni-view",{staticClass:"uni-card"},[e("v-uni-view",{staticClass:"uni-list"},[i.my.show_friend.phone?e("v-uni-view",{staticClass:"uni-list-cell",attrs:{"hover-class":"none"}},[e("v-uni-view",{staticClass:"uni-list-cell-navigate"},[e("v-uni-navigator",{attrs:{"hover-class":"none",url:"/pages/details/more"}},[e("v-uni-view",{staticStyle:{width:"100%"}},[i._v("手机号码"),e("v-uni-view",{staticClass:"show_text"},[i._v(i._s(i.my.show_friend.phone))])],1)],1)],1)],1):i._e(),i._e()],1)],1):i._e(),e("v-uni-view",{staticClass:"uni-card"},[e("v-uni-view",{staticClass:"uni-list"},[i.my.is_friend?e("v-uni-view",[e("v-uni-view",{staticClass:"uni-list-cell",attrs:{"hover-class":"none"}},[e("v-uni-view",{staticClass:"uni-list-cell-navigate",on:{click:function(t){t=i.$handleEvent(t),i.goMsg()}}},[e("v-uni-view",{staticClass:"tool"},[e("v-uni-view",{staticClass:"uni-media-list-logo"},[e("v-uni-image",{attrs:{src:"../../static/theme/default/details/msg.png"}})],1),i._v("发消息")],1)],1)],1),i._e()],1):e("v-uni-view",{staticClass:"uni-list-cell",attrs:{"hover-class":"none"}},[e("v-uni-view",{staticClass:"uni-list-cell-navigate"},[e("v-uni-view",{staticClass:"tool",on:{click:function(t){t=i.$handleEvent(t),i.addFriend(t)}}},[i._v("添加到通讯录")])],1)],1)],1)],1)],1)},a=[];e.d(t,"a",function(){return s}),e.d(t,"b",function(){return a})},"1d85":function(i,t,e){"use strict";e.r(t);var s=e("c13c"),a=e.n(s);for(var n in s)"default"!==n&&function(i){e.d(t,i,function(){return s[i]})}(n);t["default"]=a.a},"312f":function(i,t,e){"use strict";e.r(t);var s=e("16ff"),a=e("1d85");for(var n in a)"default"!==n&&function(i){e.d(t,i,function(){return a[i]})}(n);e("4447");var l=e("2877"),u=Object(l["a"])(a["default"],s["a"],s["b"],!1,null,"0d574294",null);t["default"]=u.exports},4447:function(i,t,e){"use strict";var s=e("8b1c"),a=e.n(s);a.a},"8b1c":function(i,t,e){var s=e("bdba");"string"===typeof s&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals);var a=e("4f06").default;a("7bc83134",s,!0,{sourceMap:!1,shadowMode:!1})},ae82:function(i,t,e){"use strict";var s=e("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(e("19ce")),n={routeTabBarHook:function(){a.default.routeTool(),a.default.setStatusTips()},routeSonHook:function(){a.default.routeTool()}};t.default=n},bdba:function(i,t,e){t=i.exports=e("2350")(!1),t.push([i.i,".uni-media-list-detail[data-v-0d574294]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;overflow:hidden}.uni-media-list-info[data-v-0d574294]{font-size:%?26?%;padding-top:%?5?%;color:#8f8f94}.uni-media-list-text-top[data-v-0d574294]{margin-top:0;font-size:%?38?%;font-weight:600}.uni-media-list-logo[data-v-0d574294]{width:%?45?%;height:%?45?%;margin-right:%?10?%;display:inline-block;vertical-align:middle}.phto[data-v-0d574294]{position:relative;z-index:3;margin-left:%?15?%;margin-right:%?20?%;bottom:0;top:%?-30?%;width:%?125?%;height:%?125?%}.my_padding[data-v-0d574294]{padding-bottom:25px}.uni-card[data-v-0d574294]{-webkit-box-shadow:none;box-shadow:none}.my_padding[data-v-0d574294]:before{background-color:#fff}.tool[data-v-0d574294]{width:100%;text-align:center}.friend_cricle[data-v-0d574294]{padding-top:%?20?%;padding-bottom:%?20?%}.cricle_title[data-v-0d574294]{display:inline-block;width:%?120?%}.cricle_img[data-v-0d574294]{width:%?100?%;height:%?100?%}.sex_type[data-v-0d574294]{width:%?35?%;height:%?35?%;margin-right:%?0?%;margin-left:%?20?%}.show_text[data-v-0d574294]{position:absolute;right:%?60?%;color:#8f8f94;display:inline-block}",""])},c13c:function(i,t,e){"use strict";var s=e("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("a481");s(e("164f"));var a=s(e("ae82")),n=s(e("ca63")),l={components:{},data:function(){return{user_id:"",is_type:0,is_in:0,my:{show_friend:[],photo:"default_man/90.jpg",sex:0}}},onShow:function(){a.default.routeSonHook()},computed:{isFrom:function(){return this.user_id!=n.default.data("user_info")},userPhoto:function(){return n.default.staticPhoto()+this.my.photo+"?_="+Math.random()},staticPath:function(){return n.default.staticCircle()},isRemarks:function(){return this.my.is_friend&&this.my.user_id!=n.default.data("user_info").id}},methods:{showPhoto:function(){var i=this.userPhoto.replace("70.jpg","300.jpg");uni.previewImage({indicator:"none",current:i,urls:[i]})},goCircle:function(){uni.navigateTo({url:"../push/circle_details?user_id="+this.my.user_id})},goMsg:function(i){this.my.user_id!=n.default.data("user_info").id?this.$httpSend({path:"/im/message/getListId",data:{user_id:this.my.user_id},success:function(i){uni.navigateTo({url:"../chat/message?list_id="+i.list_id})}}):uni.showToast({title:"不能给自己发消息",duration:2e3,icon:"none"})},addFriend:function(){var i=this;i.is_in?i.$httpSend({path:"/im/action/friendAddAction",data:{apply_id:i.my.apply_id},success:function(t){uni.showToast({title:"已添加",duration:2e3});for(var e=n.default.localData("friend_apply_list"),s=0,a=e.length;s<a;s++)if(e[s].id==i.my.apply_id){e[s].text="已添加",n.default.localData("friend_apply_list",e);break}setTimeout(function(){uni.navigateBack()},2500)}}):uni.navigateTo({url:"../friend/apply?user_id="+i.user_id+"&is_type="+i.is_type})}},onLoad:function(i){var t=this;t.user_id=i.user_id,"in"in i&&(t.is_in=i.in),"is_type"in i&&(t.is_type=i.is_type),t.$httpSend({path:"/im/get/details",data:{user_id:t.user_id,in:t.is_in},success:function(i){t.my=i}})},onNavigationBarButtonTap:function(i){this.user_id!=n.default.data("user_info").id&&(this.my.is_friend?uni.navigateTo({url:"./more_details?user_id="+this.user_id}):uni.showToast({title:"对方不是好友,没有更多操作了",duration:1500,icon:"none"}))}};t.default=l}}]);