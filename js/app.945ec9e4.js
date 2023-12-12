(function(){var e={1974:function(e,t,a){"use strict";var s=a(7195),r=a(8315),i=(a(7024),a(4340)),n=a(4984),l=a(4496),o=a(785),c=function(){var e=this,t=e._self._c;return t("div",{staticClass:"bg-image",attrs:{id:"app"}},[t("nav-bar"),t("b-container",{staticClass:"z-1"},[t("section",{staticClass:"bg-warning border rounded-3 mb-4",attrs:{id:"inicio"}},[t("home")],1),t("section",{staticClass:"mb-4",attrs:{id:"sobre"}},[t("about-me")],1),t("section",{staticClass:"bg-warning border rounded-3 mb-4",attrs:{id:"habilidades"}},[t("skills")],1),t("section",{staticClass:"mb-4",attrs:{id:"portifolio"}},[t("projects")],1),t("section",{staticClass:"bg-warning border rounded-3 mb-4",attrs:{id:"contato"}},[t("contact")],1)])],1)},m=[],d=function(){var e=this,t=e._self._c;return t("b-navbar",{staticClass:"ps-4 pe-4 p-2",attrs:{toggleable:"lg",type:"dark",variant:"dark",fixed:"top"}},[t("b-navbar-brand",{attrs:{href:"#"}},[e._v(e._s(e.titulo??"Henrique Rodrigues"))]),t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",[t("b-nav-item",{staticClass:"px-2",attrs:{href:"#inicio",active:""}},[e._v(e._s(e.$t("nav.home")))]),t("b-nav-item",{staticClass:"px-2",attrs:{href:"#sobre"}},[e._v(e._s(e.$t("nav.aboutMe")))]),t("b-nav-item",{staticClass:"px-2",attrs:{href:"#habilidades"}},[e._v(e._s(e.$t("nav.skills")))]),t("b-nav-item",{staticClass:"px-2",attrs:{href:"#portifolio"}},[e._v(e._s(e.$t("nav.projects")))]),t("b-nav-item",{staticClass:"px-2",attrs:{href:"#contato"}},[e._v(e._s(e.$t("nav.contact")))])],1),t("b-navbar-nav",{staticClass:"w-100 pe-4",attrs:{align:"right"}},[t("lang-switcher")],1)],1)],1)},v=[],p=function(){var e=this,t=e._self._c;return t("b-nav-item-dropdown",{attrs:{text:e.lang.toUpperCase()}},[t("b-dropdown-item",{on:{click:function(t){return e.changeLang("en")}}},[e._v("EN")]),t("b-dropdown-item",{on:{click:function(t){return e.changeLang("pt-br")}}},[e._v("PT-BR")])],1)},u=[],g=a(5730);function f(){const e=a(4967),t={};return e.keys().forEach((a=>{const s=a.match(/([A-Za-z0-9-_]+)\./i);if(s&&s.length>1){const r=s[1];t[r]=e(a)}})),t}s["default"].use(g.Z);var b=new g.Z({globalInjection:!0,locale:"en",fallbackLocale:"en",messages:f()}),h={name:"LangSwitcher",data:()=>({lang:b.locale}),methods:{changeLang(e){b.locale=e,this.lang=b.locale}}},w=h,_=a(1001),x=(0,_.Z)(w,p,u,!1,null,null,null),C=x.exports,k={name:"NavBar",components:{LangSwitcher:C},props:{titulo:String}},y=k,j=(0,_.Z)(y,d,v,!1,null,null,null),S=j.exports,N=function(){var e=this,t=e._self._c;return t("b-row",{staticClass:"p-4",attrs:{"align-h":"center"}},[t("b-col",{staticClass:"text-center",attrs:{md:"6"}},[e.showForm?t("h2",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"titulo-secundario"},[e._v(" "+e._s(e.$t("section.contact.title"))+" ")]):e._e(),e.showForm?t("b-form",{on:{submit:function(t){return t.preventDefault(),e.sendEmail.apply(null,arguments)}}},[t("b-form-group",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"my-2",attrs:{"label-for":"name"}},[t("b-form-input",{attrs:{id:"name",name:"name",type:"text",placeholder:e.$t("section.contact.form.name"),required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),t("b-form-group",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"my-2",attrs:{"label-for":"email"}},[t("b-form-input",{attrs:{id:"email",name:"email",type:"email",placeholder:e.$t("section.contact.form.email"),required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),t("b-form-group",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"my-2",attrs:{"label-for":"message"}},[t("b-form-textarea",{attrs:{id:"message",name:"message",type:"text",placeholder:e.$t("section.contact.form.message"),rows:"3","max-rows":"6",required:""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1),t("b-button",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"btnSocial shadow my-2",attrs:{type:"submit"}},[e.showSpinner?t("b-spinner",{attrs:{small:"",label:"Spinning"}}):e._e(),e._v(" "+e._s(e.textBtnSend??e.$t("section.contact.form.btnSend")))],1)],1):e._e(),t("b-alert",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],attrs:{show:!e.showForm,variant:e.colorAlert}},[e._v(e._s(e.msgAlert))])],1)],1)},$=[],P=a(1106),I={name:"Contact",data:()=>({email:"",name:"",message:"",showForm:!0,colorAlert:"success",msgAlert:"",textBtnSend:null,showSpinner:!1}),methods:{sendEmail(e){this.showSpinner=!0,this.textBtnSend=b.t("section.contact.form.btnSending"),P.ZP.sendForm("service_eurd5to","template_kwg513d",e.target,"yzpczPyFCkstjj0bv").then((()=>{this.showForm=!1,this.msgAlert=b.t("section.contact.msgAlert.successSendEmail")}),(e=>{this.showForm=!1,this.colorAlert="danger",this.msgAlert=b.t("section.contact.msgAlert.errorSendEmail"),e.console.error()})),this.name="",this.email="",this.message=""}}},A=I,M=(0,_.Z)(A,N,$,!1,null,null,null),q=M.exports,O=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"row py-2"},[t("div",{staticClass:"col text-center"},[t("h2",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"titulo-secundario"},[e._v(e._s(e.$t("section.projects.title")))]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-4 py-2"},[t("b-card",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],attrs:{title:"Projeto Financeiro","img-src":a(2399),"img-alt":"Image","img-top":""}},[t("b-card-text",[e._v(" "+e._s(e.$t("section.projects.card7"))+" ")]),t("b-card-footer",{attrs:{"footer-class":"text-end"}},[t("b-btn",{staticClass:"btnSocial shadow",attrs:{href:"http://financeiro.henriquersantos.com",target:"_blank"}},[e._v(e._s(e.$t("section.projects.btnView")))])],1)],1)],1),t("div",{staticClass:"col-md-4 py-2"},[t("b-card",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],attrs:{title:"Curso Cinthia Magrini - LP de vendas","img-src":a(5112),"img-alt":"Image","img-top":""}},[t("b-card-text",[e._v(" "+e._s(e.$t("section.projects.card6"))+" ")]),t("b-card-footer",{attrs:{"footer-class":"text-end"}},[t("b-btn",{staticClass:"btnSocial shadow",attrs:{href:"https://cinthiamagriniadvogada.henriquersantos.com",target:"_blank"}},[e._v(e._s(e.$t("section.projects.btnView")))])],1)],1)],1),t("div",{staticClass:"col-md-4 py-2"},[t("b-card",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],attrs:{title:"MoneySage - LP de vendas","img-src":a(2715),"img-alt":"Image","img-top":""}},[t("b-card-text",[e._v(" "+e._s(e.$t("section.projects.card5"))+" ")]),t("b-card-footer",{attrs:{"footer-class":"text-end"}},[t("b-btn",{staticClass:"btnSocial shadow",attrs:{href:"https://moneysage.henriquersantos.com",target:"_blank"}},[e._v(e._s(e.$t("section.projects.btnView")))])],1)],1)],1),t("div",{staticClass:"col-md-4 py-2"},[t("b-card",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],attrs:{title:"Saúde em riqueza - LP com Quiz","img-src":a(312),"img-alt":"Image","img-top":""}},[t("b-card-text",[e._v(" "+e._s(e.$t("section.projects.card4"))+" ")]),t("b-card-footer",{attrs:{"footer-class":"text-end"}},[t("b-btn",{staticClass:"btnSocial shadow",attrs:{href:"https://saudeemriqueza.henriquersantos.com",target:"_blank"}},[e._v(e._s(e.$t("section.projects.btnView")))])],1)],1)],1),t("div",{staticClass:"col-md-4 py-2"},[t("b-card",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],attrs:{title:"SolicardSys","img-src":a(3934),"img-alt":"Image","img-top":""}},[t("b-card-text",[e._v(" "+e._s(e.$t("section.projects.card2"))+" ")]),t("b-card-footer",{attrs:{"footer-class":"text-end"}},[t("b-btn",{staticClass:"btnSocial shadow",attrs:{href:"https://sysgalaxpay.henriquersantos.com",target:"_blank"}},[e._v(e._s(e.$t("section.projects.btnView")))])],1)],1)],1),t("div",{staticClass:"col-md-4 py-2"},[t("b-card",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],attrs:{title:"InstaFake","img-src":"http://www.inforpress.cv/wp-content/uploads/2020/05/empty.jpg","img-alt":"Image","img-top":""}},[t("b-card-text",[e._v(" "+e._s(e.$t("section.projects.card1"))+" ")]),t("b-card-footer",{attrs:{"footer-class":"text-end"}},[t("b-btn",{staticClass:"btnSocial shadow",attrs:{href:"https://fakeinsta.henriquersantos.com",target:"_blank"}},[e._v(e._s(e.$t("section.projects.btnView")))])],1)],1)],1),t("div",{staticClass:"col-md-4 py-2"},[t("b-card",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticStyle:{width:"100%"},attrs:{title:"Tic-Tac-Toe","img-src":a(5380),"img-alt":"Image","img-top":""}},[t("b-card-text",{domProps:{innerHTML:e._s(e.$t("section.projects.card3"))}}),t("b-card-footer",{attrs:{"footer-class":"text-end"}},[t("b-btn",{staticClass:"btnSocial shadow",attrs:{href:"https://tictactoe.henriquersantos.com",target:"_blank"}},[e._v(e._s(e.$t("section.projects.btnView")))])],1)],1)],1)])])])])},E=[],L={name:"Projects"},V=L,z=(0,_.Z)(V,O,E,!1,null,null,null),T=z.exports,U=function(){var e=this,t=e._self._c;return t("b-row",{staticClass:"p-4 text-center"},[t("h2",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"titulo-secundario"},[e._v(" "+e._s(e.$t("section.skills.title"))+" ")]),t("b-col",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],attrs:{md:"5",lg:"4"}},[t("img",{staticClass:"img-fluid rounded",attrs:{src:a(3752),alt:"",srcset:""}})]),t("b-col",{staticClass:"mt-3 mt-md-0",attrs:{md:"7",lg:"8"}},[t("div",{staticClass:"text-start mt-2"},[t("h4",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}]},[e._v(" "+e._s(e.$t("section.skills.skill6.name"))+" "),t("span",{staticClass:"fs-6 fw-light fst-italic"},[e._v(" ("+e._s(e.$t("section.skills.skill6.experience"))+") ")])]),t("b-progress",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"mt-2",attrs:{value:70,variant:"info",striped:"","show-progress":"",animated:e.animate}})],1),t("div",{staticClass:"text-start mt-2"},[t("h4",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}]},[e._v(" "+e._s(e.$t("section.skills.skill1.name"))+" "),t("span",{staticClass:"fs-6 fw-light fst-italic"},[e._v(" ("+e._s(e.$t("section.skills.skill1.experience"))+") ")])]),t("b-progress",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"mt-2",attrs:{value:70,variant:"info",striped:"","show-progress":"",animated:e.animate}})],1),t("div",{staticClass:"text-start mt-2"},[t("h4",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}]},[e._v(" "+e._s(e.$t("section.skills.skill2.name"))+" "),t("span",{staticClass:"fs-6 fw-light fst-italic"},[e._v(" ("+e._s(e.$t("section.skills.skill2.experience"))+") ")])]),t("b-progress",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"mt-2",attrs:{value:60,variant:"info",striped:"","show-progress":"",animated:e.animate}})],1),t("div",{staticClass:"text-start mt-2"},[t("h4",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}]},[e._v(" "+e._s(e.$t("section.skills.skill8.name"))+" "),t("span",{staticClass:"fs-6 fw-light fst-italic"},[e._v(" ("+e._s(e.$t("section.skills.skill8.experience"))+") ")])]),t("b-progress",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"mt-2",attrs:{value:60,variant:"info",striped:"","show-progress":"",animated:e.animate}})],1),t("div",{staticClass:"text-start mt-2"},[t("h4",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}]},[e._v(" "+e._s(e.$t("section.skills.skill7.name"))+" "),t("span",{staticClass:"fs-6 fw-light fst-italic"},[e._v(" ("+e._s(e.$t("section.skills.skill7.experience"))+") ")])]),t("b-progress",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"mt-2",attrs:{value:40,variant:"info",striped:"","show-progress":"",animated:e.animate}})],1),t("div",{staticClass:"text-start mt-2"},[t("h4",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}]},[e._v(" "+e._s(e.$t("section.skills.skill3.name"))+" "),t("span",{staticClass:"fs-6 fw-light fst-italic"},[e._v(" ("+e._s(e.$t("section.skills.skill3.experience"))+") ")])]),t("b-progress",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"mt-2",attrs:{value:40,variant:"info",striped:"","show-progress":"",animated:e.animate}})],1),t("div",{staticClass:"text-start mt-2"},[t("h4",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}]},[e._v(" "+e._s(e.$t("section.skills.skill9.name"))+" "),t("span",{staticClass:"fs-6 fw-light fst-italic"},[e._v(" ("+e._s(e.$t("section.skills.skill9.experience"))+") ")])]),t("b-progress",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"mt-2",attrs:{value:30,variant:"info",striped:"","show-progress":"",animated:e.animate}})],1),t("div",{staticClass:"text-start mt-2"},[t("h4",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}]},[e._v(" "+e._s(e.$t("section.skills.skill4.name"))+" "),t("span",{staticClass:"fs-6 fw-light fst-italic"},[e._v(" ("+e._s(e.$t("section.skills.skill4.experience"))+") ")])]),t("b-progress",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"mt-2",attrs:{value:30,variant:"info",striped:"","show-progress":"",animated:e.animate}})],1),t("div",{staticClass:"text-start mt-2"},[t("h4",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}]},[e._v(" "+e._s(e.$t("section.skills.skill5.name"))+" "),t("span",{staticClass:"fs-6 fw-light fst-italic"},[e._v(" ("+e._s(e.$t("section.skills.skill5.experience"))+") ")])]),t("b-progress",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"mt-2",attrs:{value:15,variant:"info",striped:"","show-progress":"",animated:e.animate}})],1)])],1)},H=[],F={name:"Skills",data:()=>({animate:!0})},B=F,Z=(0,_.Z)(B,U,H,!1,null,null,null),D=Z.exports,R=function(){var e=this,t=e._self._c;return t("b-row",{staticClass:"p-4 text-center"},[t("h2",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"titulo-secundario"},[e._v(e._s(e.$t("section.aboutMe.title")))]),t("b-col",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"mt-3 mt-md-0 text-center",attrs:{md:"7",lg:"8"}},[t("h3",[e._v(e._s(e.$t("section.aboutMe.message")))])]),t("b-col",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],attrs:{md:"5",lg:"4"}},[t("img",{staticClass:"img-fluid rounded",attrs:{src:a(8993),alt:"",srcset:""}})])],1)},Q=[],G={name:"AboutMe"},J=G,W=(0,_.Z)(J,R,Q,!1,null,null,null),X=W.exports,K=function(){var e=this,t=e._self._c;return t("b-row",{staticClass:"p-4"},[t("b-col",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],attrs:{md:"5",lg:"4"}},[t("img",{staticClass:"img-fluid rounded",attrs:{src:a(2321),alt:"",srcset:""}})]),t("b-col",{staticClass:"mt-3 mt-md-0 p-0",attrs:{md:"7",lg:"8"}},[t("b-row",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}]},[t("h1",{staticClass:"titulo",domProps:{innerHTML:e._s(e.$t("section.home.title",{name:"Henrique"}))}})]),t("b-row",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}]},[t("div",{staticClass:"d-flex justify-content-between"},[t("b-btn",{staticClass:"btnSocial shadow",attrs:{href:"#contato"}},[e._v(e._s(e.$t("section.home.contact")))]),t("div",[t("b-link",{staticClass:"px-2 socialIcons",attrs:{href:"https://api.whatsapp.com/send?phone=5514998617696&text=Olá, disponivel para um novo serviço ?",target:"_blank"}},[t("font-awesome-icon",{attrs:{icon:"fa-brands fa-whatsapp",size:"3x",bounce:""}})],1),t("b-link",{staticClass:"px-2 socialIcons",attrs:{href:"https://github.com/Koonac",target:"_blank"}},[t("font-awesome-icon",{attrs:{icon:"fa-brands fa-github",size:"3x",bounce:""}})],1),t("b-link",{staticClass:"px-2 socialIcons",attrs:{href:"https://www.linkedin.com/in/ednilson-rodrigues/",target:"_blank"}},[t("font-awesome-icon",{attrs:{icon:"fa-brands fa-linkedin-in",size:"3x",bounce:""}})],1)],1)],1)])],1)],1)},Y=[],ee={name:"Home"},te=ee,ae=(0,_.Z)(te,K,Y,!1,null,null,null),se=ae.exports,re={name:"App",head:{script:[{type:"text/javascript",src:"https://kit.fontawesome.com/dd928c7064.js",async:!0,body:!0}]},components:{NavBar:S,Contact:q,Projects:T,Skills:D,AboutMe:X,Home:se}},ie=re,ne=(0,_.Z)(ie,c,m,!1,null,null,null),le=ne.exports;i.vI.add(l.VHX,l.mdU,l.hwn,l.zhw),s["default"].use(r.XG7),s["default"].use(o.Z,{delay:200,duration:800,scale:1.2,reset:!0}),s["default"].component("font-awesome-icon",n.GN),s["default"].config.productionTip=!1,new s["default"]({i18n:b,render:e=>e(le)}).$mount("#app")},4967:function(e,t,a){var s={"./en.json":2007,"./pt-br.json":8982};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=i,e.exports=r,r.id=4967},8993:function(e,t,a){"use strict";e.exports=a.p+"img/about.4b86ade1.jpg"},5112:function(e,t,a){"use strict";e.exports=a.p+"img/cinthia-magrini.05107707.jpg"},2321:function(e,t,a){"use strict";e.exports=a.p+"img/eu-social.30f991a0.jpg"},5380:function(e,t,a){"use strict";e.exports=a.p+"img/jogo-da-velha.810d612a.png"},2715:function(e,t,a){"use strict";e.exports=a.p+"img/moneySage.b5c10b6f.jpg"},2399:function(e,t,a){"use strict";e.exports=a.p+"img/projeto-financeiro.86be90f4.png"},312:function(e,t,a){"use strict";e.exports=a.p+"img/saude-em-riqueza.1c73b408.jpg"},3752:function(e,t,a){"use strict";e.exports=a.p+"img/skills.36dab5cd.png"},3934:function(e,t,a){"use strict";e.exports=a.p+"img/solicard-sys.68aaa38f.png"},2007:function(e){"use strict";e.exports=JSON.parse('{"nav":{"home":"Home","aboutMe":"About","skills":"Skills","projects":"Projects","contact":"Contact"},"section":{"home":{"title":"Hi, my name is <span>{name}</span> i\'m Web Developer.","contact":"Contact"},"aboutMe":{"title":"About me","message":"Ambitious and technology-loving, seeking to leverage programming skills to create solutions for automating and streamlining daily routines."},"skills":{"title":"Skills","skill1":{"name":"JavaScript","experience":"Intermediate"},"skill2":{"name":"Vue.js","experience":"Intermediate"},"skill3":{"name":"Nuxt.js","experience":"Beginner"},"skill4":{"name":"React","experience":"Beginner"},"skill5":{"name":"Next.js","experience":"Beginner"},"skill6":{"name":"PHP","experience":"Intermediate"},"skill7":{"name":"Laravel","experience":"Beginner"},"skill8":{"name":"MySQL","experience":"Intermediate"},"skill9":{"name":"WordPress","experience":"Beginner"}},"projects":{"title":"Projects","card1":"A PHP-based Instagram clone with CRUD functionality for posts and user creation. Designed to deliver a user-friendly interface and seamless experience for managing social media content.","card2":"An integrated system with the GalaxPay payment platform, capturing customer data from the integrated platform for card printing, generating new contracts, managing company finances, and featuring access levels. User: admin Pass: admin","card3":"A Tic Tac Toe project using jQuery and CSS, one of my first projects in pure jQuery, is an excellent way to have fun playing a classic game and testing your strategic skills.","card4":"A landing page for \'Saúde em Riqueza\' with a lead conversion questionnaire. (Vue 2)","card5":"A high-conversion sales landing page for \'MoneySage\' with various persuasive animations to drive sales (Vue 2).","card6":"A sales landing page with a clear call to action for the \'Banking Law course with Cinthia Magrini\' (Vue 2).","card7":"A login system, CRUD operations (Create, Read, Update, Delete) for payments and receipts with associated categories. The project was built using Nuxt 3 for the frontend, Laravel 10 for the backend, and MySQL database for data storage.","btnView":"View"},"contact":{"title":"Contact","form":{"name":"Name","email":"E-mail","message":"Enter something...","btnSend":"Send","btnSending":"Sending... "},"msgAlert":{"successSendEmail":"Email successfully sent !","errorSendEmail":"Failed to send email, please try again !"}}}}')},8982:function(e){"use strict";e.exports=JSON.parse('{"nav":{"home":"Início","aboutMe":"Sobre","skills":"Habilidades","projects":"Projetos","contact":"Contato"},"section":{"home":{"title":"Olá, meu nome é <span>{name}</span> eu sou desenvolvedor web.","contact":"Contato"},"aboutMe":{"title":"Sobre mim","message":"Ambicioso e amante da tecnologia, busco alavancar minhas habilidades de programação e criar soluções para automatizar e agilizar suas rotinas diárias."},"skills":{"title":"Habilidades","skill1":{"name":"JavaScript","experience":"Intermediário"},"skill2":{"name":"Vue.js","experience":"Intermediário"},"skill3":{"name":"Nuxt.js","experience":"Iniciante"},"skill4":{"name":"React","experience":"Iniciante"},"skill5":{"name":"Next.js","experience":"Iniciante"},"skill6":{"name":"PHP","experience":"Intermediário"},"skill7":{"name":"Laravel","experience":"Iniciante"},"skill8":{"name":"MySql","experience":"Intermediário"},"skill9":{"name":"WordPress","experience":"Iniciante"}},"projects":{"title":"Projetos","card1":"Um clone do Instagram baseado em PHP com funcionalidade CRUD para postagens e criação de usuários. Projetado para oferecer uma interface amigável e uma experiência perfeita para o gerenciamento de conteúdo de mídia social.","card2":"Um sistema integrado com a plataforma de pagamentos GalaxPay, captando os dados dos clientes da plataforma integrada para impressão de cartões, geração de novos contratos, gestão financeira da empresa e níveis de acesso.","card3":"Um projeto Tic Tac Toe com jQuery e CSS um dos meus primeiros projetos em jquery puro, é uma excelente maneira de se divertir jogando um jogo clássico e testar as suas habilidades estratégicas.","card4":"Uma landing page para \'Saúde em Riqueza\' com um questionário para conversão de leads. (Vue 2)","card5":"Uma landing page de vendas de alta conversão para \'MoneySage\' com diversas animações persuasivas para induzir a venda (Vue 2).","card6":"Uma landing page de vendas com chamada direta para ação para o \'Curso de Direito Bancário com Cinthia Magrini\' (Vue 2).","card7":"Sistema de login, operações CRUD (Create, Read, Update, Delete) para pagamentos e recebimentos com categorias associadas. O projeto foi construído utilizando as tecnologias Nuxt 3 para o frontend, Laravel 10 para o backend e banco de dados MySQL para armazenamento de dados.","btnView":"Ver"},"contact":{"title":"Contato","form":{"name":"Nome","email":"E-mail","message":"Escreva algo...","btnSend":"Enviar","btnSending":"Sending... "},"msgAlert":{"successSendEmail":"E-mail enviado com sucesso !","errorSendEmail":"Falha ao enviar o e-mail, tente novamente !"}}}}')}},t={};function a(s){var r=t[s];if(void 0!==r)return r.exports;var i=t[s]={exports:{}};return e[s].call(i.exports,i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,s,r,i){if(!s){var n=1/0;for(m=0;m<e.length;m++){s=e[m][0],r=e[m][1],i=e[m][2];for(var l=!0,o=0;o<s.length;o++)(!1&i||n>=i)&&Object.keys(a.O).every((function(e){return a.O[e](s[o])}))?s.splice(o--,1):(l=!1,i<n&&(n=i));if(l){e.splice(m--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var m=e.length;m>0&&e[m-1][2]>i;m--)e[m]=e[m-1];e[m]=[s,r,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,i,n=s[0],l=s[1],o=s[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(o)var m=o(a)}for(t&&t(s);c<n.length;c++)i=n[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(m)},s=self["webpackChunkhenrique_rodrigues_page"]=self["webpackChunkhenrique_rodrigues_page"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(1974)}));s=a.O(s)})();
//# sourceMappingURL=app.945ec9e4.js.map