(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-details-more_details"],{"11fd":function(t,e,a){"use strict";a.r(e);var i=a("5421"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=n.a},3809:function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("f5ed")),s={routeTabBarHook:function(){n.default.routeTool(),n.default.setStatusTips()},routeSonHook:function(){n.default.routeTool()}};e.default=s},4013:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"page"},[a("v-uni-navigator",{attrs:{"hover-class":"none",url:"/pages/friend/remarks?user_id="+t.user_id,"animation-type":"slide-in-bottom"}},[a("v-uni-view",{staticClass:"uni-list"},[a("v-uni-view",{staticClass:"uni-list-cell",attrs:{"hover-class":"none"}},[a("v-uni-view",{staticClass:"uni-list-cell-navigate uni-navigate-right"},[a("v-uni-view",{staticStyle:{width:"100%"}},[t._v("设置备注和标签")])],1)],1)],1)],1),t._e(),t.data.remove?a("v-uni-view",{staticClass:"uni-list",staticStyle:{"margin-top":"20upx"}},[a("v-uni-view",{staticClass:"uni-list-cell",attrs:{"hover-class":"none"}},[a("v-uni-view",{staticClass:"uni-list-cell-navigate",on:{click:function(e){e=t.$handleEvent(e),t.goDelete(e)}}},[a("v-uni-view",{staticClass:"tool"},[t._v("删除")])],1)],1)],1):t._e()],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},4892:function(t,e,a){var i=a("bed7");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("273bc07c",i,!0,{sourceMap:!1,shadowMode:!1})},5421:function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("3809")),s=(i(a("1a0f")),i(a("ec4e"))),u={data:function(){return{user_id:0,data:{remove:0}}},computed:{},onShow:function(){n.default.routeSonHook()},methods:{goDelete:function(){var t=this;uni.showModal({title:"重要提示",content:"删除好友及相关的会话数据并且不能恢复，确认删除吗？",success:function(e){e.confirm&&t.$httpSend({path:"/im/remove/friend",data:{user_id:t.user_id},success:function(e){uni.showToast({title:"操作成功",duration:1500});for(var a=0,i=s.default.localData("chat_list"),n=i.length;a<n;a++)if(i[a].list_id==e){i.splice(a,1),s.default.localData("chat_list",i),uni.$emit("data_chat_list",i);break}s.default.localData(e,null);for(var u=0,o=s.default.localData("friend_list"),l=o.length;u<l;u++)for(var r=0,d=o[u].data,c=d.length;r<c;r++)if(d[r].user_id==t.user_id){o[u].data.splice(r,1),s.default.localData("friend_list",o),uni.$emit("data_friend_list",o);break}setTimeout(function(){uni.switchTab({url:"../friend/index"})},1600)}})}})}},onLoad:function(t){this.user_id=t.user_id;var e=this;e.$httpSend({path:"/im/friend/details",data:{user_id:e.user_id},success:function(t){e.data=t}})}};e.default=u},"917b":function(t,e,a){"use strict";var i=a("4892"),n=a.n(i);n.a},aead:function(t,e,a){"use strict";a.r(e);var i=a("4013"),n=a("11fd");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("917b");var u=a("2877"),o=Object(u["a"])(n["default"],i["a"],i["b"],!1,null,"4ca8dd0b",null);e["default"]=o.exports},bed7:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".tool[data-v-4ca8dd0b]{width:100%;text-align:center;color:red}",""])}}]);