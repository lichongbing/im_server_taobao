(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-push-circle"],{"0888":function(t,e,i){"use strict";i.r(e);var a=i("583a"),n=i("e232");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("95ac");var s=i("2877"),c=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"1277c0ac",null);e["default"]=c.exports},"191e":function(t,e,i){var a=i("e58b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("329a142a",a,!0,{sourceMap:!1,shadowMode:!1})},"1fed":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{inputValue:""}},props:{placeholder:{type:String,required:!0},focus:{type:Boolean,required:!0}},onLoad:function(){},methods:{blur:function(){this.$emit("blur")},startRecognize:function(){var t={},e=this;t.engine="iFly",e.inputValue="",plus.speech.startRecognize(t,function(t){console.log(t),e.inputValue+=t},function(t){console.log("语音识别失败："+t.message)})},sendMessge:function(){this.inputValue?(this.$emit("send-message",this.inputValue),this.inputValue=""):uni.showModal({content:"还没有输入内容哦!",showCancel:!1})}}};e.default=a},2949:function(t,e,i){"use strict";var a=i("f3ec"),n=i.n(a);n.a},3015:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".footer[data-v-5c5ce37b]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;height:%?80?%;min-height:%?80?%;border-top:solid 1px #bbb;overflow:hidden;padding:%?5?%;background-color:#f4f5f6}.footer-left[data-v-5c5ce37b]{width:%?80?%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.footer-right[data-v-5c5ce37b]{width:%?120?%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#1482d1}.footer-center[data-v-5c5ce37b]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding-left:%?20?%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.footer-center .input-text[data-v-5c5ce37b]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;background:#fff;\n\t/* border: solid 1upx #ddd; */padding:%?10?%!important;font-family:verdana!important;overflow:hidden;border-radius:%?15?%}.footer-right .send-comment[data-v-5c5ce37b]{background-color:#007aff;text-align:center;line-height:%?60?%;color:#fff;width:%?80?%;height:%?60?%;border-radius:5px;font-size:10px\n\t/* height: 60upx; */}",""])},"583a":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page",attrs:{id:"moments"}},[i("v-uni-view",{staticClass:"home-pic"},[i("avatar",{attrs:{selWidth:"600upx",selHeight:"600upx",avatarSrc:t.circleImg,avatarStyle:"width: 750upx; height: 500upx; border-radius: 0upx;"},on:{upload:function(e){e=t.$handleEvent(e),t.upload(e)}}}),i("v-uni-view",{staticClass:"home-pic-base"},[i("v-uni-view",{staticClass:"top-pic"},[i("v-uni-image",{staticClass:"header",attrs:{src:t.myPhoto,"lazy-load":!0},on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.goDetails(t.my_data.id)}}})],1),i("v-uni-view",{staticClass:"top-name"},[t._v(t._s(t.my_data.nickname))])],1)],1),t.no_reader_msg?i("v-uni-view",{staticClass:"new_msg",on:{click:function(e){e=t.$handleEvent(e),t.goCircleChat(e)}}},[t._v("你有新的消息")]):t._e(),t._l(t.posts,function(e,a){return i("v-uni-view",{key:a,staticClass:"moments__post",attrs:{id:"post-"+a}},[i("v-uni-view",{staticClass:"post-left"},[i("v-uni-image",{staticClass:"post_header",attrs:{src:t.staticPhoto+e.header_image+"?_="+t.imgRan,"lazy-load":!0},on:{click:function(i){i=t.$handleEvent(i),t.goDetails(e.uid)}}})],1),i("v-uni-view",{staticClass:"post_right"},[i("v-uni-text",{staticClass:"post-username",on:{click:function(i){i=t.$handleEvent(i),t.goDetails(e.uid)}}},[t._v(t._s(e.username))]),i("v-uni-view",{staticClass:"paragraph",attrs:{id:"paragraph"},on:{click:function(e){e=t.$handleEvent(e),t.init_input()}}},[t._v(t._s(e.content.text))]),0==e.type?i("v-uni-view",{staticClass:"thumbnails",on:{click:function(e){e=t.$handleEvent(e),t.init_input()}}},t._l(e.content.value,function(n,o){return i("v-uni-view",{key:o,class:1===e.content.value.length?"my-gallery":"thumbnail"},[i("v-uni-image",{staticClass:"gallery_img",attrs:{"lazy-load":!0,mode:"aspectFill",src:t.staticPath+e.post_id+"/"+n,"data-src":n},on:{click:function(e){e=t.$handleEvent(e),t.previewImage(a,o)}}})],1)}),1):t._e(),i("v-uni-view",{staticClass:"toolbar"},[i("v-uni-view",{staticClass:"timestamp"},[t._v(t._s(e.timestamp))]),i("v-uni-view",{staticClass:"like",on:{click:function(e){e=t.$handleEvent(e),t.like(a)}}},[i("v-uni-image",{attrs:{src:0===e.islike?"../../static/theme/default/push/circle/islike.png":"../../static/theme/default/push/circle/like.png","lazy-load":!0}})],1),i("v-uni-view",{staticClass:"comment",on:{click:function(e){e=t.$handleEvent(e),t.comment(a)}}},[i("v-uni-image",{attrs:{src:"../../static/theme/default/push/circle/comment.png","lazy-load":!0}})],1)],1),i("v-uni-view",{staticClass:"post-footer"},[e.like.length?i("v-uni-view",{staticClass:"footer_content"},[i("v-uni-image",{staticClass:"liked",attrs:{src:"../../static/theme/default/push/circle/liked.png","lazy-load":!0}}),t._l(e.like,function(e,a){return i("v-uni-text",{key:a,staticClass:"nickname",on:{click:function(i){i=t.$handleEvent(i),t.goDetails(e.uid)}}},[t._v(t._s((a?",":"")+e.username))])})],2):t._e(),t._l(e.comments,function(e,n){return i("v-uni-view",{key:n,staticClass:"footer_content",on:{click:function(e){e=t.$handleEvent(e),t.reply(a,n)}}},[i("v-uni-text",{staticClass:"comment-nickname",staticStyle:{"word-break":"break-all"}},[t._v(t._s(e.username+e.reply+": ")),i("v-uni-text",{staticClass:"comment-content"},[t._v(t._s(e.content))])],1)],1)})],2)],1)],1)}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showInput,expression:"showInput"}],staticClass:"foot"},[i("chat-input",{attrs:{focus:t.focus,placeholder:t.input_placeholder},on:{"send-message":function(e){e=t.$handleEvent(e),t.send_comment(e)},blur:function(e){e=t.$handleEvent(e),t.blur(e)}}})],1),t.showLoadMore?i("v-uni-view",{staticClass:"uni-loadmore"},[t._v(t._s(t.loadMoreText))]):t._e()],2)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"6f44":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a481");var n=a(i("bd86")),o=a(i("c659")),s=a(i("4c92")),c=a(i("4a44")),l=a(i("5fb3")),r=a(i("f7af")),d={components:{chatInput:o.default,avatar:l.default},data:function(){var t;return{my_data:(t={id:0,photo:"",nickname:""},(0,n.default)(t,"photo","default_man/90.jpg"),(0,n.default)(t,"circle_img","default_circle_img.jpg"),t),user_id:0,posts:[],index:"",comment_index:"",input_placeholder:"评论",focus:!1,is_reply:!1,showInput:!1,screenHeight:"",platform:"",windowHeight:"",loadMoreText:"加载中...",showLoadMore:!1,is_more:!1,no_reader_msg:0}},computed:{myPhoto:function(){return r.default.staticPhoto()+this.my_data.photo+"?_="+this.imgRan},circleImg:function(){return r.default.staticPhoto()+this.my_data.circle_img},staticPath:function(){return r.default.staticCircle()},staticPhoto:function(){return r.default.staticPhoto()},imgRan:function(){return Math.random()}},onLoad:function(t){var e=this;uni.getSystemInfo({success:function(t){e.screenHeight=t.screenHeight,e.platform=t.platform}})},onShow:function(){var t=this;c.default.routeSonHook();var e=this,i=r.default.localData("circle_data");i?(e.posts=i,(r.default.data("no_reader_circle")||r.default.data("no_reader_circle_chat_num"))&&(this.posts=[],r.default.data("circle_data",[]),this.pullDownRefresh())):e.pullDownRefresh(),this.no_reader_msg=r.default.data("no_reader_circle_chat_num")?1:0,r.default.data("no_reader_circle",0),uni.onWindowResize(function(e){"ios"===t.platform?(t.windowHeight=e.size.windowHeight,t.adjust()):t.screenHeight-e.size.windowHeight>60&&t.windowHeight<=e.size.windowHeight&&(t.windowHeight=e.size.windowHeight,t.adjust())}),uni.$on("data_circle_data",function(t){e.posts=t}),uni.$on("data_user_info",function(t){e.my_data=t}),uni.$on("data_circle_tips",function(t){isNaN(t)||(e.no_reader_msg=1)}),e.my_data=r.default.data("user_info")},onUnload:function(){uni.$off("data_circle_tips"),uni.$off("data_user_info"),uni.$off("data_circle_data"),uni.offWindowResize(),this.max=0,this.data=[],this.loadMoreText="加载更多",this.showLoadMore=!1},onReachBottom:function(){var t=this,e=this;if(e.showLoadMore=!0,!e.is_more){var i=0,a=e.posts.length;a&&(i=e.posts[a-1].time),s.default.getCircleList({time:i,type:1,user_id:0},function(i){e.my_data=i.user_info,i.data.length<10&&(t.loadMoreText="没有更多数据了",t.is_more=!0)})}},onPullDownRefresh:function(){(r.default.data("no_reader_circle")||r.default.data("no_reader_circle_chat_num"))&&(this.posts=[],r.default.data("circle_data",[])),this.pullDownRefresh()},onNavigationBarButtonTap:function(t){0==t.index&&this.navigateTo("./circle/send")},methods:{upload:function(t){var e=this;e.$httpSendFile({local_url:t.path,type:3,success:function(t){e.$httpSend({path:"/im/action/upCircleImg",success:function(t){s.default.base(),uni.showToast({title:"更换成功",duration:2e3})}})}})},goCircleChat:function(){r.default.data("no_reader_circle_chat_num",0),this.navigateTo("./circle_chat_details")},pullDownRefresh:function(){var t=this,e=0;this.posts.length&&(e=this.posts[0].time),s.default.getCircleList({time:e,type:0,user_id:0},function(e){t.my_data=e.user_info}),uni.stopPullDownRefresh(),r.default.data("no_reader_circle",0)},goDetails:function(t){this.navigateTo("../details/index?user_id="+t)},navigateTo:function(t){uni.navigateTo({url:t})},like:function(t){var e=this,i=e.posts[t].islike?0:1;e.$httpSend({path:"/im/circle/likeAction",data:{is_like:i,id:e.posts[t].post_id},success:function(i){if(e.posts[t].islike=i.action,i.action)e.posts[t].like.push({uid:e.my_data.id,username:e.my_data.nickname});else for(var a=0,n=e.posts[t].like.length;a<n;a++)if(e.posts[t].like[a].uid==e.my_data.id){e.posts[t].like.splice(a,1);break}}})},comment:function(t){this.showInput?(this.showInput=!1,this.focus=!1,this.index=""):(this.showInput=!0,this.focus=!0,this.index=t)},adjust:function(){var t=this;uni.createSelectorQuery().selectViewport().scrollOffset(function(e){var i=e.scrollTop,a=uni.createSelectorQuery().select("#post-"+t.index);a.boundingClientRect(function(e){uni.pageScrollTo({scrollTop:i-(t.windowHeight-(e.height+e.top+45)),duration:300})}).exec()}).exec()},reply:function(t,e){this.is_reply=!0,this.showInput=!0;var i=this.posts[t].comments[e].username;this.input_placeholder="回复"+i,this.index=t,this.comment_index=e,this.focus=!0},blur:function(){},send_comment:function(t){var e=this,i=this.posts[this.index],a=i.uid,n="";if(this.is_reply){var o=i.comments[this.comment_index];a=o.uid,i.uid!=a&&(n="回复"+o.username)}e.$httpSend({path:"/im/circle/comment",data:{message:t,id:i.post_id,chat_user_id:a},success:function(a){i.comments.push({uid:e.my_data.id,reply:n,username:e.my_data.nickname,content:t}),e.init_input()}})},init_input:function(){this.showInput=!1,this.focus=!1,this.input_placeholder="评论",this.is_reply=!1},previewImage:function(t,e){for(var i=this.posts[t],a=[],n=0,o=i.content.value.length;n<o;n++)a.push(this.staticPath+i.post_id+"/"+i.content.value[n].replace("_thumb",""));var s=a[e];uni.previewImage({current:s,urls:a})},goPublish:function(){uni.navigateTo({url:"./circle/send",success:function(t){},fail:function(){},complete:function(){}})}},watch:{}};e.default=d},"7a55":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"footer"},[i("v-uni-view",{staticClass:"footer-center"},[i("v-uni-textarea",{staticClass:"input-text",staticStyle:{"max-height":"65upx"},attrs:{"auto-height":"true",focus:t.focus,placeholder:t.placeholder,maxlength:-1,"show-confirm-bar":!1},on:{confirm:function(e){e=t.$handleEvent(e),t.sendMessge(e)},blur:function(e){e=t.$handleEvent(e),t.blur(e)}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}})],1),i("v-uni-view",{staticClass:"footer-right"},[i("v-uni-view",{staticClass:"send-comment",attrs:{id:"msg-type"},on:{click:function(e){e=t.$handleEvent(e),t.sendMessge(e)}}},[t._v("发送")])],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"95ac":function(t,e,i){"use strict";var a=i("191e"),n=i.n(a);n.a},c36c:function(t,e,i){"use strict";i.r(e);var a=i("1fed"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},c659:function(t,e,i){"use strict";i.r(e);var a=i("7a55"),n=i("c36c");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("2949");var s=i("2877"),c=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"5c5ce37b",null);e["default"]=c.exports},e232:function(t,e,i){"use strict";i.r(e);var a=i("6f44"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},e58b:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".liked[data-v-1277c0ac]{\n\t/* display: inline-block; */position:relative;margin-right:%?10?%;width:%?34?%;height:%?34?%}.post-username[data-v-1277c0ac]{font-size:%?32?%;font-weight:600;color:#36648b}.gallery_img[data-v-1277c0ac]{width:100%;height:100%}.header[data-v-1277c0ac]{width:%?250?%;height:%?250?%;z-index:10;border-radius:%?40?%}.publish[data-v-1277c0ac]{position:absolute;top:%?20?%;right:%?20?%\n\n\t/* z-index: 9999; */}.post_header[data-v-1277c0ac]{width:%?85?%!important;height:%?85?%!important;border-radius:%?10?%;margin-top:%?8?%}#moments[data-v-1277c0ac]{background:#fff}#moments .home-pic[data-v-1277c0ac]{width:100%;\n\t/* margin-top: -150upx; */position:relative;height:%?500?%;z-index:5;margin-bottom:%?50?%}#moments .home-pic-base[data-v-1277c0ac]{position:absolute;left:%?-60?%;bottom:%?-70?%;width:100%;height:%?160?%;padding:0 %?15?%}#moments .home-pic-base .top-pic[data-v-1277c0ac]{width:%?250?%;height:%?250?%;border-radius:%?40?%;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0;background-color:#fff;float:right}#moments .home-pic-base .top-name[data-v-1277c0ac]{position:absolute;\n\t/* left: 20px; */right:%?160?%;top:%?45?%;font-size:%?32?%;font-weight:600;text-align:right;color:#fff;overflow:hidden}#moments .moments__post[data-v-1277c0ac]{background:#fff;display:block;border-bottom:1px solid #f2eeee;padding:%?30?% %?20?%;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}#moments .moments__post[data-v-1277c0ac]:before{content:none}#moments .moments__post .post_right[data-v-1277c0ac]{font-size:%?32?%;display:table-cell;padding-left:%?20?%;width:100%}\n/* #moments .moments__post .post_right .paragraphExtender {\n\t\tmargin: 5px auto;\n\t\tdisplay: -webkit-box;\n\t\tdisplay: -webkit-flex;\n\t\tdisplay: -ms-flexbox;\n\t\tdisplay: flex\n\t} */#moments .moments__post .title[data-v-1277c0ac]{color:#094dcc}#moments .moments__post .thumbnails[data-v-1277c0ac]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap\n\t/* display: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -ms-flexbox; */\n\t/* -webkit-flex-wrap: wrap;\n\t-ms-flex-wrap: wrap; */}#moments .moments__post .thumbnails .thumbnail[data-v-1277c0ac]{width:30%;height:%?180?%;margin:%?4?%;background:#757575;overflow:hidden}.my-gallery[data-v-1277c0ac]{width:%?250?%;height:%?400?%;margin:%?4?%;background:#757575;overflow:hidden}#moments .moments__post .toolbar[data-v-1277c0ac]{position:relative;top:%?10?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}#moments .moments__post .toolbar .timestamp[data-v-1277c0ac]{color:#757575;font-size:%?22?%}#moments .moments__post .like[data-v-1277c0ac]{width:auto;height:auto;position:absolute;right:%?70?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}#moments .moments__post .comment[data-v-1277c0ac]{width:auto;height:auto;position:absolute;right:%?10?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}#moments .moments__post .toolbar uni-image[data-v-1277c0ac]{padding-left:%?20?%;width:%?30?%;height:%?30?%}.post-footer[data-v-1277c0ac]{margin-top:%?30?%;background-color:#f3f3f5;width:100%}#moments .moments__post .footer_content[data-v-1277c0ac]{padding-left:%?10?%;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}#moments .moments__post .footer_content .nickname[data-v-1277c0ac]{color:#36648b;font-size:%?24?%}#moments .moments__post .footer_content .comment-nickname[data-v-1277c0ac]{color:#36648b;font-size:%?24?%}#moments .moments__post .footer_content .comment-content[data-v-1277c0ac]{color:#000;font-size:%?24?%}.foot[data-v-1277c0ac]{position:fixed;width:100%;height:%?90?%;min-height:%?90?%;left:%?0?%;bottom:%?0?%;overflow:hidden}.new_msg[data-v-1277c0ac]{text-align:center;color:#36648b;font-weight:700}",""])},f3ec:function(t,e,i){var a=i("3015");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6430a4de",a,!0,{sourceMap:!1,shadowMode:!1})}}]);