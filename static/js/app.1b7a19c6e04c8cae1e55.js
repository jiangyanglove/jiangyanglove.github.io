webpackJsonp([0],[,,function(t,n){!function(t,n){var a=t.documentElement,e="orientationchange"in window?"orientationchange":"resize",i=function(){var t=a.clientWidth;t&&(a.style.fontSize=t/320*20+"px")};t.addEventListener&&(n.addEventListener(e,i,!1),t.addEventListener("DOMContentLoaded",i,!1))}(document,window)},function(t,n,a){"use strict";var e=a(1),i=a(26),s=a(22),r=a.n(s),o=a(21),u=a.n(o);e.a.use(i.a),n.a=new i.a({routes:[{path:"/",name:"start",component:r.a},{path:"/confirm",name:"confirm",component:u.a}]})},function(t,n,a){function e(t){a(12)}var i=a(0)(a(8),a(23),e,null,null);t.exports=i.exports},function(t,n,a){"use strict";a.d(n,"a",function(){return g});var e=a(17),i=a.n(e),s=a(18),r=a.n(s),o=a(19),u=a.n(o),c=a(20),v=a.n(c),d=a(15),m=a.n(d),f=a(16),l=a.n(f),g=[{names:["蔡","依","林","琴","少","芬","卓","妍","康","永","琳","健","雅","林","晨","黄","圣","允","儿","心","如","志","玲"],right:["蔡","依","林"],mp3:i.a,img:m.a},{names:["黄","家","驹","王","力","宏","赵","雷"],right:["赵","雷"],mp3:r.a,img:l.a},{names:["冯","建","宇","绍","峰","德","伦","郑","伊","张","卫","周","华","陈","州","李","春","马","天","吴","镇","黄","翔"],right:["冯","建","宇"],mp3:u.a,img:l.a},{names:["迪","玛","希","李","云","郑","怡","张","海","丽","热","巴","陈","妍","李","媛","陈","冠","金","堀","北","真"],right:["迪","玛","希"],mp3:v.a,img:l.a}]},function(t,n,a){"use strict";a.d(n,"a",function(){return e});var e=function(t){var n=void 0,a=void 0,e=void 0;for(n=t.length-1;n>0;n-=1)a=Math.floor(Math.random()*(n+1)),e=t[n],t[n]=t[a],t[a]=e;return t}},function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(1),i=a(4),s=a.n(i),r=a(3),o=a(2);a.n(o);e.a.config.productionTip=!1,new e.a({el:"#app",router:r.a,template:"<App/>",components:{App:s.a}})},function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(11);a.n(e);n.default={name:"app",data:function(){return{win_height:window.innerHeight,isLoading:1}},mounted:function(){var t=this;setTimeout(function(){t.isLoading=0},1e3),this.touchMove()},methods:{touchMove:function(){document.addEventListener("touchmove",function(t){t.preventDefault()})}}}},function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(5),i=a(6);n.default={name:"confirm",data:function(){return{win_height:window.innerHeight,img:e.a[0].img,anwsers:[],isTrue:0,mp3:e.a[0].mp3,names:e.a[0].names,right:e.a[0].right,globalI:0,anwserI:0,isClick:null,total:e.a.length,isFinish:0,num:1,alpha:0,beta:0,gamma:0,rotate:0,fontY:0,fontX:0}},mounted:function(){var t=this,n=this;n.anwsers=[];for(var s=0;s<n.right.length;s+=1)n.anwsers.push("");n.img=e.a[n.globalI].img,n.mp3=e.a[n.globalI].mp3,n.names=a.i(i.a)(e.a[n.globalI].names),n.right=e.a[n.globalI].right,setTimeout(function(){t.$refs.music.play()},1e3),window.addEventListener("deviceorientation",function(t){var a=t.beta,e=t.gamma;Math.abs(a)<45&&(n.beta=a),Math.abs(e)<45&&(n.gamma=e)},!1),setInterval(function(){n.fontX=Math.random(),n.rotate+=2},50)},methods:{getAnwser:function(t,n){var a=this;a.isClick=n,a.anwserI<a.right.length&&(a.anwsers.splice(a.anwserI,1,t),a.anwserI+=1,a.anwsers.toString()===a.right.toString()&&(a.isTrue=1),a.globalI===a.right.length&&(a.isFinish=1))},music:function(){this.$refs.music.play()},goNext:function(){var t=this,n=this;n.isTrue=0,n.isFinish=0,n.anwserI=0,n.isClick=null,n.anwsers=[],n.globalI<e.a.length-1&&(n.globalI+=1,n.img=e.a[n.globalI].img,n.mp3=e.a[n.globalI].mp3,n.names=a.i(i.a)(e.a[n.globalI].names),n.right=e.a[n.globalI].right);for(var s=0;s<n.right.length;s+=1)n.anwsers.push("");this.$refs.music.load(),setTimeout(function(){t.$refs.music.play()},1e3),n.num<e.a.length&&(n.num+=1)}}}},function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"start",data:function(){return{win_height:window.innerHeight}},mounted:function(){this.touchMove()},methods:{touchMove:function(){document.addEventListener("touchmove",function(t){t.preventDefault()})}}}},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n,a){t.exports=a.p+"static/img/img1.44012fc.jpg"},function(t,n){t.exports="data:image/png;base64,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"},function(t,n,a){t.exports=a.p+"static/media/1caiyilin.8f91cce.mp3"},function(t,n,a){t.exports=a.p+"static/media/2zhaolei.d2baf0e.mp3"},function(t,n,a){t.exports=a.p+"static/media/3fengjianyu.27722c6.mp3"},function(t,n,a){t.exports=a.p+"static/media/4dimaxi.8af7cfe.mp3"},function(t,n,a){function e(t){a(14)}var i=a(0)(a(9),a(25),e,"data-v-7c725954",null);t.exports=i.exports},function(t,n,a){function e(t){a(13)}var i=a(0)(a(10),a(24),e,"data-v-6f7f3614",null);t.exports=i.exports},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:"router-fade",mode:"out-in"}},[t.isLoading?a("div",{staticClass:"loading",style:{minHeight:t.win_height+"px"}},[a("div",{staticClass:"dt"},[a("div",{staticClass:"dtc"},[a("i",{staticClass:"logo"})])])]):t._e()]),t._v(" "),a("router-view")],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"start",style:{minHeight:t.win_height+"px"}},[a("i",{staticClass:"lang"}),t._v(" "),a("i",{staticClass:"info"}),t._v(" "),a("i",{staticClass:"title"}),t._v(" "),a("i",{staticClass:"logo"}),t._v(" "),t._m(0),t._v(" "),a("router-link",{staticClass:"btn-go",attrs:{to:"/confirm"}})],1)},staticRenderFns:[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"link"},[a("a",{attrs:{href:"https://www.baidu.com/"}},[t._v("夏日青春YOUNG")]),t._v(" "),a("a",{attrs:{href:"https://www.youku.com/"}},[t._v("尖叫之夜")])])}]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"confirm",style:{minHeight:t.win_height+"px"}},[a("audio",{ref:"music",attrs:{src:t.mp3,preload:""}}),t._v(" "),a("div",{ref:"bg",staticClass:"bg"},[a("span",{staticClass:"img",class:{active:t.isTrue},style:{backgroundImage:"url("+t.img+")"},attrs:{"data-depth":"0.50"}})]),t._v(" "),a("div",{staticClass:"top"},[a("div",{staticClass:"left",on:{click:function(n){t.music()}}},[a("i",{staticClass:"icon-vioce"}),t._v("听音频猜明星")]),t._v(" "),t._m(0)]),t._v(" "),t.isTrue?a("i",{staticClass:"next active",on:{click:function(n){t.goNext()}}}):a("i",{staticClass:"next"}),t._v(" "),a("div",{staticClass:"bottom"},[a("div",{staticClass:"anwser"},[a("div",{staticClass:"a-t"},t._l(t.anwsers,function(n){return a("span",[t._v(t._s(n))])})),t._v(" "),a("div",{staticClass:"a-b"},[t._v(t._s(t.num)+"/"+t._s(t.total))])]),t._v(" "),a("div",{staticClass:"icon-logo"})]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isTrue,expression:"!isTrue"}],ref:"scene",staticClass:"fly",style:{transform:"translate3d("+t.gamma+"px,"+t.beta+"px,0)"},attrs:{id:"scene"}},t._l(t.names,function(n,e){return a("span",{class:{active:t.isClick==e},style:{transform:"translate3d("+t.fontX+"px,"+t.fontY+"px,0)rotate("+t.rotate+"deg)"},on:{click:function(a){t.getAnwser(n,e)}}},[t._v("\n        "+t._s(n))])}))])},staticRenderFns:[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"right"},[t._v("求助好友"),a("i",{staticClass:"icon-mark"})])}]}}],[7]);
//# sourceMappingURL=app.1b7a19c6e04c8cae1e55.js.map