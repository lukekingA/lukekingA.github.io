(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)i=r[d],s[i]&&p.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),s=a.n(n);s.a},4385:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"app"}},[a("router-view")],1)},o=[],i=(a("034f"),a("2877")),r={},c=Object(i["a"])(r,s,o,!1,null,null,null),l=c.exports,u=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("top-header"),a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col col-sm-10 offset-sm-1"},[a("card",{attrs:{id:"about-me"}},[a("h3",{staticClass:"text-left"},[t._v("About Me")]),a("div",{staticClass:"ml-2"},[a("p",[t._v("My name is Luke King and I'm a full stack software developer. In software there is always\n            something changing and new better ways to get things done. It an exciting field to be in and always new\n            things to learn.")]),a("p",[t._v("I have spent a lot of my life in small business. I was always looking for technology that could improve\n            efficiency and bring more consistency into the operation. These same problem solving skills have been\n            useful\n            to me in software development in the way I approach a new task, breaking it down into its basic components\n            and finding the solution. Finding new solutions to problems and learning new ways to do things is what I\n            enjoy most in life.\n          ")])])]),a("card",[a("h3",{staticClass:"mt-2"},[t._v("Tech I have experience with")]),a("ul",{staticClass:"list-unstyled d-flex flex-wrap justify-content-around white-card mt-3"},t._l(t.skills,function(e){return a("li",[t._v(t._s(e))])}),0)]),a("card",{attrs:{id:"projects"}},[a("h3",[t._v("Projects")]),a("div",{staticClass:"row"},t._l(t.projects,function(t){return a("div",{staticClass:"col-12 col-sm-4"},[a("card",{staticClass:"card-height",style:{backgroundImage:"url("+t.background+")",backgroundSize:"cover"}},[a("project",{attrs:{project:t}})],1)],1)}),0)])],1)]),a("bottom",{attrs:{id:"contact"}})],1)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"key-background col-12 d-flex align-items-center justify-content-center pt-3 shadow-sm"},[n("div",{staticClass:"mr-2"},[n("h1",{staticClass:"font-weight-bold text-light text-shadow"},[t._v("Luke King")]),n("p",{staticClass:"text-light text-shadow"},[t._v("Full Stack Software Developer")])]),n("div",{staticClass:"d-sm-none"},[n("img",{staticClass:"rounded-circle drop-shadow img-big",attrs:{src:a("ff79"),alt:"Luke King Image"}})])])}],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top-header row sticky-top"},[n("div",{staticClass:"d-flex justify-content-between header-height bg-secondary col shadow"},[n("img",{staticClass:"d-none m-3 d-sm-inline rounded-circle shadow-sm",attrs:{src:a("ff79"),alt:"Head Shot"}}),n("div",{staticClass:"d-flex align-items-center mr-3"},[n("a",{staticClass:"text-light mr-2 txt-shadow text-decoration-none",attrs:{href:"#about-me"}},[t._v("About")]),n("a",{staticClass:"text-light mr-2 txt-shadow text-decoration-none",attrs:{href:"#projects"}},[t._v("Projects")]),n("a",{staticClass:"text-light mr-2 txt-shadow text-decoration-none",attrs:{href:"#contact"}},[t._v("Contact")]),t.home?n("a",{staticClass:"text-light mr-2 txt-shadow text-decoration-none",attrs:{href:"#"},on:{click:t.goResume}},[t._v("Resume")]):n("a",{staticClass:"text-light mr-2 txt-shadow text-decoration-none",attrs:{href:"#"},on:{click:t.goHome}},[t._v("Home")])])])])},h=[],m=(a("7f7f"),{name:"top-header",data:function(){return{}},computed:{home:function(){return"home"==this.$route.name}},methods:{goHome:function(){this.$router.push({name:"home"})},goResume:function(){this.$router.push({name:"resume"})}},components:{}}),g=m,b=(a("a72d"),Object(i["a"])(g,f,h,!1,null,"6da8b00c",null)),v=b.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card card-shadow my-4 p-2"},[t._t("default")],2)},k=[],x={name:"card",data:function(){return{}},computed:{},methods:{},components:{}},C=x,_=(a("e182"),Object(i["a"])(C,w,k,!1,null,"e7dbe280",null)),j=_.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom"},[a("footer",{staticClass:"row mt-3 py-4 bg-secondary",attrs:{id:"contact"}},[a("div",{staticClass:"col"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 text-light"},[a("h4",[t._v("Get in touch")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 d-flex flex-column align-content-start"},[a("div",[a("a",{staticClass:"text-light",attrs:{href:"tel:12084028367"}},[a("h6",[a("i",{staticClass:"fas fa-mobile-alt"}),t._v(" (208)402-8367")])])]),a("div",[a("a",{staticClass:"text-light",attrs:{href:"email:lkingfrm@gmail.com"}},[t._v("lkingfrm@gmail.com")])])]),a("div",{staticClass:"col-6 d-flex justify-content-around"},[a("div",[a("a",{staticClass:"text-light",attrs:{href:"//www.linkedin.com/in/lukekinga"}},[a("h4",[a("i",{staticClass:"fab fa-linkedin"})])])]),a("div",[a("a",{staticClass:"text-light",attrs:{href:"//www.facebook.com/luke.king.31542"}},[a("h4",[a("i",{staticClass:"fab fa-facebook-square"})])])]),a("div",[a("a",{staticClass:"text-light",attrs:{href:"https://github.com/lukekingA"}},[a("h4",[a("i",{staticClass:"fab fa-github-square"})])])])])])])])])}],B={name:"bottom",data:function(){return{}},computed:{},methods:{},components:{}},O=B,E=Object(i["a"])(O,y,S,!1,null,"36e9a961",null),M=E.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"project"},[a("a",{staticClass:"border-bottom border-light text-light txt-shadow",attrs:{href:t.project.link}},[a("h3",[t._v(t._s(t.project.title))])]),a("p",{staticClass:"text-white txt-shadow font-weight-bold",domProps:{innerHTML:t._s(t.project.description)}})])},P=[],I={name:"project",data:function(){return{}},props:["project"],computed:{},methods:{},components:{}},T=I,H=Object(i["a"])(T,$,P,!1,null,"2e5f8526",null),K=H.exports,V=a("c821"),D=a.n(V),L=a("aa9f"),R=a.n(L),A=a("b28c"),J=a.n(A),z=a("fd6a"),G=a.n(z),Q=a("8c7c"),q=a.n(Q),F=a("de6d"),N=a.n(F),U={name:"home",data:function(){return{skills:["JavaScript","Vue JS","C# and .NET","Node.js","Express.js","MongoDB","Mongoose","MySQL","Dapper","Bootstrap 4","jQuery","Html 5 and CSS 3","Scrum","Git"],projects:[{title:"Slap",link:"https://lukekinga.github.io/encapsul-slap/",description:"Slap the bear game.<br/>Built with Vanilla.js",background:N.a},{title:"Inspire",link:"https://lukekinga.github.io/inspire/",description:"Personalized backdrop for work.<br/> Built with Vue.js.",background:J.a},{title:"Bug Report",link:"https://lukekinga.github.io/bug-report/",description:"A cool application to track bugs in a project.<br/> Built with Vue.js and Express.js with MongoDB.",background:G.a},{title:"Kantasktic",link:"https://kantasktic.herokuapp.com/",description:"Plan a project. Break it into managable pieces. Get work done.<br/> Built with Vue.js and Express.js with MongoDB.",background:R.a},{title:"Bob's Burgers",link:"https://bobs-burgers-pos.herokuapp.com",description:"POS application to manage the menu and orders for small resturaunt.<br/> Built with Vue.js, Express.js and MongoDB.",background:q.a},{title:"Keepr",link:"https://keeperlk.herokuapp.com/",description:"Keep pictures and articles. Organize them for easy access. Share your intrests with others.<br/> Built with C# and Vue.js with a MySQL database.",background:D.a}]}},computed:{},methods:{},components:{TopHeader:v,Card:j,Bottom:M,Project:K}},W=U,X=(a("efb0"),Object(i["a"])(W,d,p,!1,null,"47be4a40",null)),Y=X.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"resume"},[a("top-header"),t._m(0)],1)},tt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("img",{staticClass:"w-100",attrs:{src:a("64e6"),alt:""}})])])}],et=(a("64e6"),{name:"resume",data:function(){return{}},computed:{},methods:{},components:{TopHeader:v}}),at=et,nt=Object(i["a"])(at,Z,tt,!1,null,"43829d78",null),st=nt.exports;n["a"].use(u["a"]);var ot=new u["a"]({routes:[{path:"/",name:"home",component:Y},{path:"/resume",name:"resume",component:st}]}),it=a("2f62");n["a"].use(it["a"]);var rt=new it["a"].Store({state:{},mutations:{},actions:{}});a("4989"),a("ab8b");n["a"].config.productionTip=!1,new n["a"]({router:ot,store:rt,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,a){},"64e6":function(t,e,a){t.exports=a.p+"img/Resume.30fd26dd.png"},"8c7c":function(t,e,a){t.exports=a.p+"img/Bobs.03d85ef7.png"},a72d:function(t,e,a){"use strict";var n=a("4385"),s=a.n(n);s.a},aa9f:function(t,e,a){t.exports=a.p+"img/KanTaskTic.441d1539.png"},b28c:function(t,e,a){t.exports=a.p+"img/Inspire.49774b30.png"},c821:function(t,e,a){t.exports=a.p+"img/Keepr.1dd782e8.png"},d134:function(t,e,a){},da60:function(t,e,a){},de6d:function(t,e,a){t.exports=a.p+"img/Slap.82f59aaa.png"},e182:function(t,e,a){"use strict";var n=a("d134"),s=a.n(n);s.a},efb0:function(t,e,a){"use strict";var n=a("da60"),s=a.n(n);s.a},fd6a:function(t,e,a){t.exports=a.p+"img/BugReport.10db7fb1.png"},ff79:function(t,e,a){t.exports=a.p+"img/headShot.5740af53.jpg"}});
//# sourceMappingURL=app.fa20ac6f.js.map