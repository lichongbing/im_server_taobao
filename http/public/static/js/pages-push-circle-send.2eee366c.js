(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-push-circle-send"],{"1eec":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".cell-pd[data-v-07f1c87e]{padding:%?20?% %?30?%}.uni-textarea[data-v-07f1c87e]{width:auto;padding:%?20?% %?25?%;line-height:1.6;height:%?150?%}.uni-list[data-v-07f1c87e]:before{height:0}.uni-list[data-v-07f1c87e]:after{height:0}.list-pd[data-v-07f1c87e]{margin-top:0;margin-bottom:%?80?%}.close-view[data-v-07f1c87e]{text-align:center;line-height:%?22?%;height:%?24?%;width:%?24?%;border-radius:50%;background:#ef5350;color:#fff;position:absolute;top:%?6?%;right:%?8?%;font-size:%?24?%}.page[data-v-07f1c87e]{width:%?750?%;height:100%}",""])},"3b8d":function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return a});var i=n("795b"),r=n.n(i);function o(t,e,n,i,o,a,u){try{var c=t[a](u),s=c.value}catch(l){return void n(l)}c.done?e(s):r.a.resolve(s).then(i,o)}function a(t){return function(){var e=this,n=arguments;return new r.a(function(i,r){var a=t.apply(e,n);function u(t){o(a,i,r,u,c,"next",t)}function c(t){o(a,i,r,u,c,"throw",t)}u(void 0)})}}},4563:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page",on:{touchstart:function(e){e=t.$handleEvent(e),t.touchStart(e)},touchend:function(e){e=t.$handleEvent(e),t.touchEnd(e)}}},[n("v-uni-form",[n("v-uni-view",{staticClass:"uni-textarea"},[n("v-uni-textarea",{attrs:{placeholder:"这一刻的想法..."},model:{value:t.input_content,callback:function(e){t.input_content=e},expression:"input_content"}})],1),n("v-uni-view",{staticClass:"uni-list list-pd"},[n("v-uni-view",{staticClass:"uni-list-cell cell-pd"},[n("v-uni-view",{staticClass:"uni-uploader"},[n("v-uni-view",{staticClass:"uni-uploader-head"},[n("v-uni-view",{staticClass:"uni-uploader-title"}),n("v-uni-view",{staticClass:"uni-uploader-info"},[t._v(t._s(t.imageList.length)+"/9")])],1),n("v-uni-view",{staticClass:"uni-uploader-body"},[n("v-uni-view",{staticClass:"uni-uploader__files"},[t._l(t.imageList,function(e,i){return[n("v-uni-view",{key:i+"_0",staticClass:"uni-uploader__file",staticStyle:{position:"relative"}},[n("v-uni-image",{staticClass:"uni-uploader__img",attrs:{mode:"aspectFill",src:e,"data-src":e},on:{click:function(e){e=t.$handleEvent(e),t.previewImage(e)}}}),n("v-uni-view",{staticClass:"close-view",on:{click:function(e){e=t.$handleEvent(e),t.close(i)}}},[t._v("x")])],1)]}),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.imageList.length<9,expression:"imageList.length < 9"}],staticClass:"uni-uploader__input-box"},[n("v-uni-view",{staticClass:"uni-uploader__input",on:{click:function(e){e=t.$handleEvent(e),t.chooseImage(e)}}})],1)],2)],1)],1)],1)],1)],1)],1)},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},"4a44":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("1d68")),o={routeTabBarHook:function(){r.default.routeTool(),r.default.setStatusTips()},routeSonHook:function(){r.default.routeTool()}};e.default=o},"5a7a":function(t,e,n){"use strict";n.r(e);var i=n("e610"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=r.a},"71f0":function(t,e,n){"use strict";var i=n("f548"),r=n.n(i);r.a},"96cf":function(t,e){!function(e){"use strict";var n,i=Object.prototype,r=i.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",s="object"===typeof t,l=e.regeneratorRuntime;if(l)s&&(t.exports=l);else{l=e.regeneratorRuntime=s?t.exports:{},l.wrap=x;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={},g={};g[a]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(O([])));y&&y!==i&&r.call(y,a)&&(g=y);var w=E.prototype=L.prototype=Object.create(g);b.prototype=w.constructor=E,E.constructor=b,E[c]=b.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},T(k.prototype),k.prototype[u]=function(){return this},l.AsyncIterator=k,l.async=function(t,e,n,i){var r=new k(x(t,e,n,i));return l.isGeneratorFunction(e)?r:r.next().then(function(t){return t.done?t.value:r.next()})},T(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},l.values=O,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,r){return u.type="throw",u.arg=t,e.next=i,r&&(e.method="next",e.arg=n),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;j(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:O(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=n),v}}}function x(t,e,n,i){var r=e&&e.prototype instanceof L?e:L,o=Object.create(r.prototype),a=new F(i||[]);return o._invoke=I(t,n,a),o}function _(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(i){return{type:"throw",arg:i}}}function L(){}function b(){}function E(){}function T(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){function e(n,i,o,a){var u=_(t[n],t,i);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"===typeof s&&r.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(s).then(function(t){c.value=t,o(c)},function(t){return e("throw",t,o,a)})}a(u.arg)}var n;function i(t,i){function r(){return new Promise(function(n,r){e(t,i,n,r)})}return n=n?n.then(r,r):r()}this._invoke=i}function I(t,e,n){var i=h;return function(r,o){if(i===d)throw new Error("Generator is already running");if(i===p){if("throw"===r)throw o;return $()}n.method=r,n.arg=o;while(1){var a=n.delegate;if(a){var u=C(a,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===h)throw i=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=d;var c=_(t,e,n);if("normal"===c.type){if(i=n.done?p:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=p,n.method="throw",n.arg=c.arg)}}}function C(t,e){var i=t.iterator[e.method];if(i===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,C(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var r=_(i,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,v;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function e(){while(++i<t.length)if(r.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:$}}function $(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},d397:function(t,e,n){"use strict";n.r(e);var i=n("4563"),r=n("5a7a");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("71f0");var a=n("2877"),u=Object(a["a"])(r["default"],i["a"],i["b"],!1,null,"07f1c87e",null);e["default"]=u.exports},e610:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("795b"));n("96cf");var o=i(n("3b8d")),a=i(n("f499")),u=i(n("4c92")),c=i(n("4a44")),s=i(n("f7af")),l=[["camera"],["album"],["camera","album"]],h=[["compressed"],["original"],["compressed","original"]],f={data:function(){return{input_content:"",imageList:[],sourceTypeIndex:2,sourceType:["拍照","相册","拍照或相册"],sizeTypeIndex:2,sizeType:["压缩","原图","压缩或原图"],countIndex:8,count:[1,2,3,4,5,6,7,8,9],startX:0,movedX:0,endX:0,send_status:!1}},onShow:function(){c.default.routeSonHook()},onUnload:function(){this.imageList=[],this.sourceTypeIndex=2,this.sourceType=["拍照","相册","拍照或相册"],this.sizeTypeIndex=2,this.sizeType=["压缩","原图","压缩或原图"],this.countIndex=8},methods:{publish:function(){var t=this;if(this.input_content){if(!this.send_status){this.send_status=!0;var e=this;uni.showLoading({title:"发布中"}),function(n){var i={text:t.input_content,value:[]};if(e.imageList.length)for(var r=0,o=e.imageList.length;r<o;r++)e.$httpSendFile({type:2,local_url:e.imageList[r],data:{len:o},success:function(t){i.value.push(t.save_name),i.value.length>=o&&n(i)},fail:function(){e.$httpSend({path:"/im/upload/deleteCircleFile"})}});else n(i)}(function(t){e.$httpSend({path:"/im/circle/sendMsg",data:{content:(0,a.default)(t)},success_action:!0,success:function(t){if(uni.hideLoading(),e.send_status=!1,t.err)return uni.showModal({content:"发布失败"}),void e.$httpSend({path:"/im/upload/deleteCircleFile"});e.imageList.length&&e.$httpSend({path:"/im/upload/circleFileAction",data:{circle_id:t.data.circle_id}}),uni.showToast({icon:"success",title:"发布成功",success:function(){var t=s.default.localData("circle_data");u.default.getCircleList({time:t.length?t[t.length-1].time:0,type:0,user_id:0}),uni.navigateBack()}})},fail:function(t){uni.hideLoading(),uni.showModal({content:"发布失败"}),e.$httpSend({path:"/im/upload/deleteCircleFile"})}})})}}else uni.showModal({content:"内容不能为空",showCancel:!1})},close:function(t){this.imageList.splice(t,1)},chooseImage:function(){var t=(0,o.default)(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(9!==this.imageList.length){t.next=7;break}return t.next=3,this.isFullImg();case 3:if(e=t.sent,console.log("是否继续?",e),e){t.next=7;break}return t.abrupt("return");case 7:uni.chooseImage({sourceType:l[this.sourceTypeIndex],sizeType:h[this.sizeTypeIndex],count:this.imageList.length+this.count[this.countIndex]>9?9-this.imageList.length:this.count[this.countIndex],success:function(t){n.imageList=n.imageList.concat(t.tempFilePaths)}});case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),isFullImg:function(){var t=this;return new r.default(function(e){uni.showModal({content:"已经有9张图片了,是否清空现有图片？",success:function(n){n.confirm?(t.imageList=[],e(!0)):e(!1)},fail:function(){e(!1)}})})},previewImage:function(t){var e=t.target.dataset.src;console.log(e),console.log(this.imageList),uni.previewImage({current:e,urls:this.imageList})},touchStart:function(t){this.startX=t.mp.changedTouches[0].pageX},touchEnd:function(t){this.endX=t.mp.changedTouches[0].pageX,this.endX-this.startX>200&&uni.navigateBack()}},onNavigationBarButtonTap:function(t){0==t.index&&this.publish()}};e.default=f},f548:function(t,e,n){var i=n("1eec");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("42c1925b",i,!0,{sourceMap:!1,shadowMode:!1})}}]);