webpackJsonp([1,0],[function(t,e,n){t.exports=n(2)},,function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var o=n(1),s=a(o),r=n(36),i=a(r),u=n(35),d=a(u),c=n(3),l=a(c),f=n(22),p=a(f),h=n(38),v=a(h),g=n(23),m=a(g),b=n(26),y=a(b),_=n(25),w=a(_),x=n(28),C=a(x),F=n(24),R=a(F),j=n(27),I=a(j);n(10),s.default.use(i.default),s.default.use(d.default);var k=new i.default({routes:[{path:"/",component:y.default},{path:"/foo",component:w.default},{path:"/swear",component:C.default},{path:"/congratulation",component:R.default},{path:"/rank",component:I.default}]});new s.default({store:l.default,Velocity:p.default,wx:v.default,router:k,render:function(t){return t(m.default)}}).$mount("#app")},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),s=a(o),r=n(37),i=a(r);s.default.use(i.default);var u={openId:"test"},d={getOpenId:function(t,e){t.openId=e}},c={},l={};e.default=new i.default.Store({state:u,getters:l,actions:c,mutations:d})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{openId:"fuck your"}},computed:{},created:function(){console.log("im getting openid"+this.openId),this.$store.commit("getOpenId",this.openId)}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"foo"}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{show:!1}},methods:{},mounted:function(){this.show=1;var t=document.querySelector('meta[name="csrf-token"]').content,e={utf8:"✓",authenticity_token:t,visit_history:{pageInfo:"hello",openId:"test",stayTime:"fiiii"}};this.$http.post("/visit_histories.json",e).then(function(t){console.log(t)},function(t){console.log(t)})},beforeDestory:function(){console.log("Hello beforeDestory")},destoryed:function(){console.log("Hello destoryed")}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swear"}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){t.exports=n.p+"/static/img/biaoqing.e4208cd.jpg"},function(t,e,n){t.exports=n.p+"/static/img/chenwenbo.0eb9f59.png"},function(t,e,n){t.exports=n.p+"/static/img/gongzhonghao.70bfff4.png"},function(t,e,n){t.exports=n.p+"/static/img/qiandao.e710092.png"},function(t,e,n){t.exports=n.p+"/static/img/slogan1.8da0d68.png"},,function(t,e,n){var a,o;n(11),a=n(4);var s=n(29);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,t.exports=a},function(t,e,n){var a,o;n(13),a=n(5);var s=n(31);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-6d020ca0",t.exports=a},function(t,e,n){var a,o;n(16),a=n(6);var s=n(34);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,t.exports=a},function(t,e,n){var a,o;n(14),a=n(7);var s=n(32);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-74357e00",t.exports=a},function(t,e,n){var a,o;n(12),a=n(8);var s=n(30);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,t.exports=a},function(t,e,n){var a,o;n(15),a=n(9);var s=n(33);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-c7d678c0",t.exports=a},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"app"}},[t._m(0)," ",e("div",{attrs:{id:"nav"}},[e("router-link",{attrs:{to:"/"}},["活動"])," ",e("router-link",{attrs:{to:"/congratulation"}},["恭喜"])," ",e("router-link",{attrs:{to:"rank"}},["Rank"])])," ",e("router-view")])},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"headlogo"}},[e("span",{attrs:{id:"logo1"}},["男性健康公益协会 "]),e("br")," ",e("span",{attrs:{id:"logo2"}},["MALE HEALTH"])])}]}},function(t,e,n){t.exports={render:function(){var t=this;t.$createElement;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"rank"}},[e("ol",{attrs:{id:"liebiao"}},[e("li",{staticClass:"hang"},[e("table",[e("tr",[e("th",{staticClass:"touxiang",attrs:{rowspan:"2"}},[e("img",{staticClass:"touxiang1",attrs:{src:n(17),alt:"头像"}})])," ",e("th",{staticClass:"name"},["罗大可"])," ",e("th",{staticClass:"tianshu"},["已经连续戒撸",e("em",["32"]),"天"])])," ",e("tr",[e("td",{staticClass:"diqu"},[" (来自湖南长沙   二戒)  "])," ",e("td",{staticClass:"jine"},["领取红包总额",e("em",["122.11"]),"元"])])])])])])}]}},function(t,e,n){t.exports={render:function(){var t=this;t.$createElement;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"congratulation"}},[e("div",[e("img",{attrs:{id:"qiandao",src:n(20),alt:"签到成功"}})])," ",e("p",{attrs:{id:"zhuanzhang"}},["\n      我们的工作人员会在3小时内会通过微信向你发放红包 ",e("br"),"\n      请注意留意你的微信账号添加好友请求哦！\n    "])," ",e("hr",{staticStyle:{border:"1px dashed #000"},attrs:{width:"100%",size:"1"}})," ",e("p",["\n      此活动由中国男性健康公益协会主办 ",e("br"),"\n      陈文伯戒撸团队提供全力支持\n    "])," ",e("div",{attrs:{id:"erweima"}},[e("div",{attrs:{id:"erweima1"}},[e("img",{attrs:{id:"chenwenbo",src:n(18),alt:"陈文伯微信二维码"}})," ",e("p",["\n      关注陈文伯咨询微信号",e("br"),"\n      随时随地咨询专家\n    "])])," ",e("div",{attrs:{id:"erweima2"}},[e("img",{attrs:{id:"gongzhonghao",src:n(19),alt:"公众号微信二维码"}})," ",e("p",{staticClass:"guanzhu"},["\n     关注活动公众号",e("br"),"\n     免得领钱找不到网站\n   "])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"hello"},[e("transition",{attrs:{"enter-active-class":"animated bounceInUp"}},[t.show?e("div",{attrs:{id:"rule"}},[e("router-link",{attrs:{to:"/swear"}},["活动规则"])]):t._e()])," ",e("transition",{attrs:{name:"zhichiwomen","enter-active-class":"animated tada"}},[t.show?e("div",{attrs:{id:"contact"}},[e("a",{attrs:{href:"#",target:"_blank"}},["支持我们"])]):t._e()])])},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this;t.$createElement;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"swear"}},[e("img",{attrs:{id:"slogan1",src:n(21),alt:"slogan"}})," ",e("div",{attrs:{id:"slogan"}},[e("span",[e("button",{staticClass:"slogan2",attrs:{id:"wo",type:"button"}},["我"])])," ",e("span",[e("button",{staticClass:"slogan2",attrs:{id:"fa",type:"button"}},["发"])])," ",e("span",[e("button",{staticClass:"slogan2",attrs:{id:"shi",type:"button"}},["誓"])])," ",e("span",[e("button",{staticClass:"slogan2",attrs:{id:"jin",type:"button"}},["今"])])," ",e("span",[e("button",{staticClass:"slogan2",attrs:{id:"tian",type:"button"}},["天"])])," ",e("span",[e("button",{staticClass:"slogan2",attrs:{id:"mei",type:"button"}},["没"])])," ",e("span",[e("button",{staticClass:"slogan2",attrs:{id:"you",type:"button"}},["有"])])," ",e("span",[e("button",{staticClass:"slogan2",attrs:{id:"lu",type:"button"}},["撸"])])])," ",e("div",{attrs:{id:"inputbg"}},[e("div",{staticClass:"input-append"},[e("input",{staticClass:"span2",staticStyle:{width:"60%",height:"27px"},attrs:{id:"appendedInputButton",type:"text",placeholder:"输入你的微信号领取红包"}})," ",e("button",{staticClass:"btn",staticStyle:{width:"32%",height:"33px"},attrs:{id:"btn",type:"button"}},["\n    领取红包"])])])," ",e("h2",["活动规则："])," ",e("p",["\n1.参与者需诚实守信，为自己的健康负责； ",e("br"),"\n2.主办方每天安排100000红包随机发放，一年不撸的参与者，10万奖金； ",e("br"),"\n3.参与者若中途停止戒撸一天，则惩罚其一周内无法参与活动。之前的成绩作废，一周后重新计算。\n"])," ",e("div",{attrs:{id:"support"}},[e("a",{attrs:{href:"#",target:"_blank"}},["支持我们"])])," ",e("div",[e("p",{attrs:{id:"footer"}},["\n    注：支持我们可领取更大的每日红包哦\n  "])])])}]}},function(t,e){t.exports={render:function(){var t=this;t.$createElement;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("div",[e("h2",["I'm Foo"])])}]}}]);
//# sourceMappingURL=app.5f709bf90ee560872166.js.map