"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[8841],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(6010),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(3117),a=n(7294),i=n(6010),l=n(2389),o=n(7392),c=n(7094),s=n(2466),u="tabList__CuJ",p="tabItem_LNqP";function f(e){var t,n,l=e.lazy,f=e.block,d=e.defaultValue,m=e.values,h=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.l)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,c.U)(),w=N.tabGroupChoices,E=N.setTabGroupChoices,x=(0,a.useState)(g),C=x[0],T=x[1],O=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var j=w[h];null!=j&&j!==C&&k.some((function(e){return e.value===j}))&&T(j)}var M=function(e){var t=e.currentTarget,n=O.indexOf(t),r=k[n].value;r!==C&&(I(t),T(r),null!=h&&E(h,String(r)))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=O.indexOf(e.currentTarget)+1;n=null!=(r=O[a])?r:O[0];break;case"ArrowLeft":var i,l=O.indexOf(e.currentTarget)-1;n=null!=(i=O[l])?i:O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":f},v)},k.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return O.push(e)},onKeyDown:Z,onFocus:M,onClick:M},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(b.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,l.Z)();return a.createElement(f,(0,r.Z)({key:String(t)},e))}},2886:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),l=n(5488),o=n(5162),c=["components"],s={id:"effector",title:"Effector"},u=void 0,p={unversionedId:"effector",id:"effector",title:"Effector",description:"Effect is the result of a policy rule. And the `Effector` is the interface for Casbin effectors.",source:"@site/docs/Effector.mdx",sourceDirName:".",slug:"/effector",permalink:"/ru/docs/effector",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Effector.mdx",tags:[],version:"current",frontMatter:{id:"effector",title:"Effector"},sidebar:"docs",previous:{title:"Syntax for Models",permalink:"/ru/docs/syntax-for-models"},next:{title:"Function",permalink:"/ru/docs/function"}},f={},d=[{value:"<code>MergeEffects()</code>",id:"mergeeffects",level:3}],m={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Effect is the result of a policy rule. And the ",(0,i.kt)("inlineCode",{parentName:"p"},"Effector")," is the interface for Casbin effectors."),(0,i.kt)("h3",{id:"mergeeffects"},(0,i.kt)("inlineCode",{parentName:"h3"},"MergeEffects()")),(0,i.kt)("p",null,"MergeEffects merges all matching results collected by the enforcer into a single decision."),(0,i.kt)("p",null,"For example:"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"Effect, explainIndex, err = e.MergeEffects(expr, effects, matches, policyIndex, policyLength)\n")))),(0,i.kt)("p",null,"In this example:  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Effect")," is the final decision being merged by this function(Initialized as ",(0,i.kt)("inlineCode",{parentName:"li"},"Indeterminate"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"explainIndex")," is the index of ",(0,i.kt)("inlineCode",{parentName:"li"},"eft")," which is ",(0,i.kt)("inlineCode",{parentName:"li"},"Allow")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Deny"),".(Initialized as ",(0,i.kt)("inlineCode",{parentName:"li"},"-1"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"err")," is used to check if the effect is supported."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expr")," is the policy effects stored as ",(0,i.kt)("inlineCode",{parentName:"li"},"string")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"effects")," is the array of the Effect which can be ",(0,i.kt)("inlineCode",{parentName:"li"},"Allow"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Indeterminate")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Deny")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"matches")," is the array showing that if the result is matching the policy."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"policyIndex")," is the index of policy in the model."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"policyLength")," is the length of the policy.")),(0,i.kt)("p",null,"The code above illustrates how can we pass the parameters to the ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeEffects")," function and the function will process the effects and matches based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"expr"),"  "),(0,i.kt)("p",null,"To deploy an Effector, we can do this:"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"var e Effector\nEffect, explainIndex, err = e.MergeEffects(expr, effects, matches, policyIndex, policyLength)\n")))),(0,i.kt)("p",null,"The basic idea of the ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeEffects")," indicates that if the ",(0,i.kt)("inlineCode",{parentName:"p"},"expr")," can match the results which means that the ",(0,i.kt)("inlineCode",{parentName:"p"},"p_eft")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"allow"),", then we can merge all effects at last. And if there are no deny rules are matched, then we allow."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"expr")," can not match ",(0,i.kt)("inlineCode",{parentName:"p"},'"priority(p_eft) || deny"')," and also the ",(0,i.kt)("inlineCode",{parentName:"p"},"policyIndex")," is shorter than ",(0,i.kt)("inlineCode",{parentName:"p"},"policyLength-1"),", it will ",(0,i.kt)("strong",{parentName:"p"},"short-circuit")," some effects in the middle."))))}h.isMDXComponent=!0}}]);