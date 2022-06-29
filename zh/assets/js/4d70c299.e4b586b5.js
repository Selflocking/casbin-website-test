"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3708],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(6010),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),r=n(7294),i=n(6010),o=n(2389),l=n(7392),c=n(7094),u=n(2466),p="tabList__CuJ",s="tabItem_LNqP";function d(e){var t,n,o=e.lazy,d=e.block,m=e.defaultValue,h=e.values,f=e.groupId,b=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==N&&!g.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,c.U)(),w=y.tabGroupChoices,C=y.setTabGroupChoices,T=(0,r.useState)(N),x=T[0],O=T[1],M=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var A=w[f];null!=A&&A!==x&&g.some((function(e){return e.value===A}))&&O(A)}var E=function(e){var t=e.currentTarget,n=M.indexOf(t),a=g[n].value;a!==x&&(j(t),O(a),null!=f&&C(f,String(a)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=M.indexOf(e.currentTarget)+1;n=null!=(a=M[r])?a:M[0];break;case"ArrowLeft":var i,o=M.indexOf(e.currentTarget)-1;n=null!=(i=M[o])?i:M[M.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},b)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return M.push(e)},onKeyDown:P,onFocus:E,onClick:E},o,{className:(0,i.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(k.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},4703:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return m}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=n(5488),l=n(5162),c=["components"],u={id:"rbac-with-pattern",title:"RBAC with Pattern"},p=void 0,s={unversionedId:"rbac-with-pattern",id:"rbac-with-pattern",title:"RBAC with Pattern",description:"Quick Start",source:"@site/docs/RBACWithPattern.mdx",sourceDirName:".",slug:"/rbac-with-pattern",permalink:"/zh/docs/rbac-with-pattern",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/RBACWithPattern.mdx",tags:[],version:"current",frontMatter:{id:"rbac-with-pattern",title:"RBAC with Pattern"},sidebar:"docs",previous:{title:"RBAC",permalink:"/zh/docs/rbac"},next:{title:"RBAC with Domains",permalink:"/zh/docs/rbac-with-domains"}},d={},m=[{value:"Quick Start",id:"quick-start",level:2},{value:"Use pattern matching in RBAC",id:"use-pattern-matching-in-rbac",level:2}],h={toc:m};function f(e){var t=e.components,u=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"quick-start"},"Quick Start"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"use pattern in ",(0,i.kt)("inlineCode",{parentName:"p"},"g(_,_)")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e, _ := NewEnforcer("./example.conf", "./example.csv")\ne.AddNamedMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"use pattern with domain"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e.AddNamedDomainMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"use all pattern"),(0,i.kt)("p",{parentName:"li"},"just combined use of two APIs"))),(0,i.kt)("p",null,"As shown above, after you create the ",(0,i.kt)("inlineCode",{parentName:"p"},"enforcer")," instance, you need to activate pattern matching via ",(0,i.kt)("inlineCode",{parentName:"p"},"AddNamedMatchingFunc")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AddNamedMatchingFunc")," API,  which determine how the pattern matches."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you use the online editor, it specifies the pattern matching function in the lower left corner.\n",(0,i.kt)("img",{alt:"editor-tips",src:n(9759).Z,width:"480",height:"272"})))),(0,i.kt)("h2",{id:"use-pattern-matching-in-rbac"},"Use pattern matching in RBAC"),(0,i.kt)("p",null,"Sometimes, you want some subjects, object or domains/tenants with the specific pattern to be automatically granted to a role. Pattern matching functions in RBAC can help you do that. A pattern matching function shares the same parameters and return value as the previous ",(0,i.kt)("a",{parentName:"p",href:"/docs/syntax-for-models#functions-in-matchers"},"matcher function"),"."),(0,i.kt)("p",null,"The pattern matching function supports each parameter of g."),(0,i.kt)("p",null,"We know that normally RBAC is expressed as ",(0,i.kt)("inlineCode",{parentName:"p"},"g(r.sub, p.sub)")," in matcher. Then we will use policy like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"p, alice, book_group, read\ng, /book/1, book_group\ng, /book/2, book_group\n")),(0,i.kt)("p",null,"So ",(0,i.kt)("inlineCode",{parentName:"p"},"alice")," can read all books including ",(0,i.kt)("inlineCode",{parentName:"p"},"book 1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"book 2"),". But there can be thousands of books and it's very tedious to add each book to the book role (or group) with one ",(0,i.kt)("inlineCode",{parentName:"p"},"g")," policy rule."),(0,i.kt)("p",null,"But with pattern matching functions, you can write the policy with only one line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"g, /book/:id, book_group\n")),(0,i.kt)("p",null,"Casbin will automatically match ",(0,i.kt)("inlineCode",{parentName:"p"},"/book/1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/book/2")," into pattern ",(0,i.kt)("inlineCode",{parentName:"p"},"/book/:id")," for you. You only need to register the function with the enforcer like:"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e.AddNamedMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,i.kt)(l.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await e.addNamedMatchingFunc('g', Util.keyMatch2Func);\n")))),(0,i.kt)("p",null,"When Using a pattern matching function in domains/tenants, You need to register the function to enforcer and model. "),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e.AddNamedDomainMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,i.kt)(l.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await e.addNamedDomainMatchingFunc('g', Util.keyMatch2Func);\n")))),(0,i.kt)("p",null,"If you don't understand what ",(0,i.kt)("inlineCode",{parentName:"p"},"g(r.sub, p.sub, r.dom)")," means, please read ",(0,i.kt)("a",{parentName:"p",href:"/docs/rbac-with-domains"},"rbac-with-domains"),". In short, ",(0,i.kt)("inlineCode",{parentName:"p"},"g(r.sub, p.sub, r.dom)")," will check whether the user ",(0,i.kt)("inlineCode",{parentName:"p"},"r.sub")," has a role ",(0,i.kt)("inlineCode",{parentName:"p"},"p.sub")," in the domain ",(0,i.kt)("inlineCode",{parentName:"p"},"r.dom"),". So this is how the matcher work. You can see the full example ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/dbdb6cbe2e7a80863e4951f9ff36da07fef01b75/model_test.go#L278-L307"},"here"),". "),(0,i.kt)("p",null,"Apart from the pattern matching syntax above, we can also use pure domain pattern."),(0,i.kt)("p",null,"For example,  if we want ",(0,i.kt)("inlineCode",{parentName:"p"},"sub")," to have access in different domains, ",(0,i.kt)("inlineCode",{parentName:"p"},"domain1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"domain2"),", we can use the pure domain pattern:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"p, admin, domain1, data1, read\np, admin, domain1, data1, write\np, admin, domain2, data2, read\np, admin, domain2, data2, write\n\ng, alice, admin, *\ng, bob, admin, domain2\n")),(0,i.kt)("p",null,"In this example, we want ",(0,i.kt)("inlineCode",{parentName:"p"},"alice")," to read and write ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," in domain1 and domain2, pattern matching ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"g")," makes ",(0,i.kt)("inlineCode",{parentName:"p"},"alice")," have the access to two domains."),(0,i.kt)("p",null,"By using pattern matching, especially in the scenarios which is more complicated and there are a lot of domains or objects we need to take into consideration, we can implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"policy_definition")," more elegant and effective."))}f.isMDXComponent=!0},9759:function(e,t,n){t.Z=n.p+"assets/images/editor-tips-4f3fd45a1ea048f308e3e31da355ff79.png"}}]);