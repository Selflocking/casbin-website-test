"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[1756],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(7294),a=r(6010),l="tabItem_Ymn6";function o(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},5488:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(3117),a=r(7294),l=r(6010),o=r(2389),i=r(7392),u=r(7094),c=r(2466),s="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,r,o=e.lazy,d=e.block,m=e.defaultValue,f=e.values,v=e.groupId,b=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(r=h.find((function(e){return e.props.default})))?void 0:r.props.value)?t:h[0].props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,u.U)(),w=g.tabGroupChoices,O=g.setTabGroupChoices,j=(0,a.useState)(N),T=j[0],E=j[1],C=[],x=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var P=w[v];null!=P&&P!==T&&k.some((function(e){return e.value===P}))&&E(P)}var D=function(e){var t=e.currentTarget,r=C.indexOf(t),n=k[r].value;n!==T&&(x(t),E(n),null!=v&&O(v,String(n)))},Z=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=C.indexOf(e.currentTarget)+1;r=null!=(n=C[a])?n:C[0];break;case"ArrowLeft":var l,o=C.indexOf(e.currentTarget)-1;r=null!=(l=C[o])?l:C[C.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},b)},k.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return C.push(e)},onKeyDown:Z,onFocus:D,onClick:D},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=r?r:t)}))),o?(0,a.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,o.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},672:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var n=r(3117),a=r(102),l=(r(7294),r(3905)),o=r(5488),i=r(5162),u=["components"],c={id:"cloud-native",title:"Cloud Native Middlewares"},s=void 0,p={unversionedId:"cloud-native",id:"cloud-native",title:"Cloud Native Middlewares",description:"Cloud Native projects",source:"@site/docs/CloudNative.mdx",sourceDirName:".",slug:"/cloud-native",permalink:"/fr/docs/cloud-native",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/CloudNative.mdx",tags:[],version:"current",frontMatter:{id:"cloud-native",title:"Cloud Native Middlewares"},sidebar:"docs",previous:{title:"GraphQL Middlewares",permalink:"/fr/docs/graphql-middlewares"},next:{title:"API Overview",permalink:"/fr/docs/api-overview"}},d={},m=[{value:"Cloud Native projects",id:"cloud-native-projects",level:3}],f={toc:m};function v(e){var t=e.components,r=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"cloud-native-projects"},"Cloud Native projects"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"Author"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/k8s-authz"},"k8s-authz")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Authorization middleware For ",(0,l.kt)("a",{parentName:"td",href:"https://kubernetes.io/"},"Kubernetes"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/envoy-authz"},"envoy-authz")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Authorization middleware For ",(0,l.kt)("a",{parentName:"td",href:"https://istio.io/"},"Istio")," and ",(0,l.kt)("a",{parentName:"td",href:"https://envoyproxy.io/"},"Envoy"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/kubesphere-authz"},"kubesphere-authz")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Authorization middleware For ",(0,l.kt)("a",{parentName:"td",href:"https://kubesphere.io/"},"kubeSphere")))))),(0,l.kt)(i.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"Author"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/odpf/shield"},"ODPF Shield")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/odpf"},"Open Data Platform")),(0,l.kt)("td",{parentName:"tr",align:null},"ODPF Shield is cloud native role-based authorization aware reverse-proxy service.")))))))}v.isMDXComponent=!0}}]);