"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[2313],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return g}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),u=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=u(t.components);return n.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=u(a),g=r,c=s["".concat(m,".").concat(g)]||s[g]||d[g]||l;return a?n.createElement(c,i(i({ref:e},p),{},{components:a})):n.createElement(c,i({ref:e},p))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},5162:function(t,e,a){a.d(e,{Z:function(){return i}});var n=a(7294),r=a(6010),l="tabItem_Ymn6";function i(t){var e=t.children,a=t.hidden,i=t.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},e)}},5488:function(t,e,a){a.d(e,{Z:function(){return g}});var n=a(3117),r=a(7294),l=a(6010),i=a(2389),o=a(7392),m=a(7094),u=a(2466),p="tabList__CuJ",d="tabItem_LNqP";function s(t){var e,a,i=t.lazy,s=t.block,g=t.defaultValue,c=t.values,k=t.groupId,h=t.className,N=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=c?c:N.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),f=(0,o.l)(b,(function(t,e){return t.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===g?g:null!=(e=null!=g?g:null==(a=N.find((function(t){return t.props.default})))?void 0:a.props.value)?e:N[0].props.value;if(null!==y&&!b.some((function(t){return t.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,m.U)(),T=v.tabGroupChoices,C=v.setTabGroupChoices,P=(0,r.useState)(y),w=P[0],A=P[1],x=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var I=T[k];null!=I&&I!==w&&b.some((function(t){return t.value===I}))&&A(I)}var O=function(t){var e=t.currentTarget,a=x.indexOf(e),n=b[a].value;n!==w&&(E(e),A(n),null!=k&&C(k,String(n)))},R=function(t){var e,a=null;switch(t.key){case"ArrowRight":var n,r=x.indexOf(t.currentTarget)+1;a=null!=(n=x[r])?n:x[0];break;case"ArrowLeft":var l,i=x.indexOf(t.currentTarget)-1;a=null!=(l=x[i])?l:x[x.length-1]}null==(e=a)||e.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},h)},b.map((function(t){var e=t.value,a=t.label,i=t.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:function(t){return x.push(t)},onKeyDown:R,onFocus:O,onClick:O},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":w===e})}),null!=a?a:e)}))),i?(0,r.cloneElement)(N.filter((function(t){return t.props.value===w}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==w})}))))}function g(t){var e=(0,i.Z)();return r.createElement(s,(0,n.Z)({key:String(e)},t))}},5247:function(t,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return g}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=a(5488),o=a(5162),m=["components"],u={id:"admin-portal",title:"Admin Portal"},p=void 0,d={unversionedId:"admin-portal",id:"admin-portal",title:"Admin Portal",description:"We provide a web-based portal called Casdoor for model management and policy management:",source:"@site/docs/AdminPortal.mdx",sourceDirName:".",slug:"/admin-portal",permalink:"/ru/docs/admin-portal",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/AdminPortal.mdx",tags:[],version:"current",frontMatter:{id:"admin-portal",title:"Admin Portal"},sidebar:"docs",previous:{title:"Authorization of Service Mesh through Envoy",permalink:"/ru/docs/envoy"},next:{title:"Casbin Service",permalink:"/ru/docs/service"}},s={},g=[],c={toc:g};function k(t){var e=t.components,a=(0,r.Z)(t,m);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"We provide a ",(0,l.kt)("a",{parentName:"p",href:"https://casdoor.org"},"web-based portal called Casdoor")," for model management and policy management:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://hsluoyz.github.io/casbin/ui_model_editor.png",alt:"model editor"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://hsluoyz.github.io/casbin/ui_policy_editor.png",alt:"policy editor"})),(0,l.kt)("p",null,"There are also 3rd-party admin portal projects that use Casbin as authorization engine. You can get started to build your own Casbin service based on these projects."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"Author"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,l.kt)("th",{parentName:"tr",align:null},"Backend"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://casdoor.org"},"Casdoor")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"React + Ant Design"),(0,l.kt)("td",{parentName:"tr",align:null},"Beego"),(0,l.kt)("td",{parentName:"tr",align:null},"Based on Beego + XORM + React")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/go-admin-team/go-admin"},"go-admin-team/go-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/go-admi-team"},"@go-admin-team")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Gin"),(0,l.kt)("td",{parentName:"tr",align:null},"go-admin Based on Gin + Casbin + GORM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/piexlmax/gin-vue-admin"},"gin-vue-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/piexlmax"},"@piexlmax")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Gin"),(0,l.kt)("td",{parentName:"tr",align:null},"Based on Gin + GORM + Vue")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/LyricTian/gin-admin"},"gin-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/LyricTian"},"@LyricTian")),(0,l.kt)("td",{parentName:"tr",align:null},"React + Ant Design"),(0,l.kt)("td",{parentName:"tr",align:null},"Gin"),(0,l.kt)("td",{parentName:"tr",align:null},"RBAC scaffolding based on Gin + GORM + Casbin + Ant Design React")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/hequan2017/go-admin"},"go-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/hequan2017"},"@hequan2017")),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Gin"),(0,l.kt)("td",{parentName:"tr",align:null},"Go RESTful API gateway based on Gin + GORM + JWT + RBAC (Casbin)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/bullteam/zeus-admin"},"zeus-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/bullteam"},"bullteam")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Gin"),(0,l.kt)("td",{parentName:"tr",align:null},"Unified Permission management platform based on JWT + Casbin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/snowlyg/IrisAdminApi"},"IrisAdminApi")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/snowlyg"},"@snowlyg")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Iris"),(0,l.kt)("td",{parentName:"tr",align:null},"Backend API based on Iris + Casbin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/tiger1103/gfast"},"Gfast")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/tiger1103"},"@tiger1103")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Go Frame"),(0,l.kt)("td",{parentName:"tr",align:null},"Admin portal based on GF (Go Frame)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"echo-admin (",(0,l.kt)("a",{parentName:"td",href:"https://github.com/RealLiuSha/echo-admin-ui"},"Frontend"),", ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/RealLiuSha/echo-admin"},"Backend"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/RealLiuSha"},"@RealLiuSha")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue 2.x + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Echo"),(0,l.kt)("td",{parentName:"tr",align:null},"Admin portal based on Echo + Gorm + Casbin + Uber-FX")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/atul-wankhade/Spec-Center"},"Spec-Center")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/atul-wankhade"},"@atul-wankhade")),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Mux"),(0,l.kt)("td",{parentName:"tr",align:null},"Golang RESTful platform based on Casbin + MongoDB"))))),(0,l.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"Author"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,l.kt)("th",{parentName:"tr",align:null},"Backend"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/BazookaW/spring-boot-web"},"spring-boot-web")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/BazookaW"},"@BazookaW")),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"SpringBoot"),(0,l.kt)("td",{parentName:"tr",align:null},"Admin portal based on SpringBoot 2.0 + MyBatisPlus + Casbin"))))),(0,l.kt)(o.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"Author"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,l.kt)("th",{parentName:"tr",align:null},"Backend"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/JoemaNequinto/node-mysql-rest-api"},"node-mysql-rest-api")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/JoemaNequinto"},"@JoemaNequinto")),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Express"),(0,l.kt)("td",{parentName:"tr",align:null},"A boilerplate application for building RESTful APIs Microservice in Node.js using Express, Sequelize, JWT and Casbin.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/alikhan866/Casbin-Role-Mgt-Dashboard-RBAC"},"Casbin-Role-Mgt-Dashboard-RBAC")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/alikhan866"},"@alikhan866")),(0,l.kt)("td",{parentName:"tr",align:null},"React + Material UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Express"),(0,l.kt)("td",{parentName:"tr",align:null},"Beginner friendly RBAC management with Enforcer integration to check enforcement result on the go"))))),(0,l.kt)(o.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"Author"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,l.kt)("th",{parentName:"tr",align:null},"Backend"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/CoderCharm/fastapi-mysql-generator"},"fastapi-mysql-generator")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/CoderCharm"},"@CoderCharm")),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"FastAPI"),(0,l.kt)("td",{parentName:"tr",align:null},"FastAPI + MySQL + JWT + Casbin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/xingxingzaixian/FastAPI-MySQL-Tortoise-Casbin"},"FastAPI-MySQL-Tortoise-Casbin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/xingxingzaixian"},"@xingxingzaixian")),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"FastAPI"),(0,l.kt)("td",{parentName:"tr",align:null},"FastAPI + MySQL + Tortoise + Casbin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/openstack-policy-editor"},"openstack-policy-editor")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Bootstrap"),(0,l.kt)("td",{parentName:"tr",align:null},"Django"),(0,l.kt)("td",{parentName:"tr",align:null},"The Web UI for Casbin"))))),(0,l.kt)(o.Z,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"Author"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,l.kt)("th",{parentName:"tr",align:null},"Backend"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/techoner/tadmin"},"Tadmin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/techoner"},"@techoner")),(0,l.kt)("td",{parentName:"tr",align:null},"AmazeUI"),(0,l.kt)("td",{parentName:"tr",align:null},"ThinkPHP"),(0,l.kt)("td",{parentName:"tr",align:null},"Non-intrusive backend framework based on ThinkPHP 5.1+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Tinywan/video.tinywan.com"},"video.tinywan.com")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Tinywan"},"@Tinywanner")),(0,l.kt)("td",{parentName:"tr",align:null},"LayUI"),(0,l.kt)("td",{parentName:"tr",align:null},"ThinkPHP"),(0,l.kt)("td",{parentName:"tr",align:null},"RESTful API gateway based on ThinkPHP5 + ORM + JWT + RBAC (Casbin)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/pl1998/laravel-casbin-admin"},"laravel-casbin-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/pl1998"},"@pl1998")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Laravel"),(0,l.kt)("td",{parentName:"tr",align:null},"RBAC permission management system based on vue-element-admin and Laravel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"larke-admin (",(0,l.kt)("a",{parentName:"td",href:"https://github.com/deatil/larke-admin-frontend"},"Frontend"),", ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/deatil/larke-admin"},"Backend"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/deatil"},"@deatil")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue 2 + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Laravel 8"),(0,l.kt)("td",{parentName:"tr",align:null},"Admin portal based on Laravel 8, JWT and RBAC")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/TragicMale/hyperf-vuetify-admin"},"hyperf-vuetify-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/TragicMale"},"@TragicMale")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + Vuetify 2.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Hyperf"),(0,l.kt)("td",{parentName:"tr",align:null},"Admin portal based on Hyperf, Vuetify and Casbin")))))))}k.isMDXComponent=!0}}]);