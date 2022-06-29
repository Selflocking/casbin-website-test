"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[4168],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),d=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return o.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(t),u=r,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||a;return t?o.createElement(f,i(i({ref:n},s),{},{components:t})):o.createElement(f,i({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4106:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var o=t(3117),r=t(102),a=(t(7294),t(3905)),i=["components"],l={id:"model-storage",title:"Model Storage"},c=void 0,d={unversionedId:"model-storage",id:"model-storage",title:"Model Storage",description:"Unlike the policy, the model can be loaded only, it cannot be saved. Because we think the model is not a dynamic component and should not be modified at run-time, so we don't implement an API to save the model into a storage.",source:"@site/docs/ModelStorage.mdx",sourceDirName:".",slug:"/model-storage",permalink:"/ja/docs/model-storage",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/ModelStorage.mdx",tags:[],version:"current",frontMatter:{id:"model-storage",title:"Model Storage"},sidebar:"docs",previous:{title:"Super Admin",permalink:"/ja/docs/superadmin"},next:{title:"Policy Storage",permalink:"/ja/docs/policy-storage"}},s={},m=[{value:"Load model from .CONF file",id:"load-model-from-conf-file",level:2},{value:"Load model from code",id:"load-model-from-code",level:2},{value:"Load model from string",id:"load-model-from-string",level:2}],p={toc:m};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Unlike the policy, the model can be loaded only, it cannot be saved. Because we think the model is not a dynamic component and should not be modified at run-time, so we don't implement an API to save the model into a storage."),(0,a.kt)("p",null,"However, the good news is, we provide three equivalent ways to load a model either statically or dynamically:"),(0,a.kt)("h2",{id:"load-model-from-conf-file"},"Load model from .CONF file"),(0,a.kt)("p",null,"This is the most common way to use Casbin. It's easy to understand for beginners and convenient for sharing when you ask Casbin team for help."),(0,a.kt)("p",null,"The content of the ",(0,a.kt)("inlineCode",{parentName:"p"},".CONF")," file ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_model.conf"},"examples/rbac_model.conf"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n")),(0,a.kt)("p",null,"Then you can load the model file as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'e := casbin.NewEnforcer("examples/rbac_model.conf", "examples/rbac_policy.csv")\n')),(0,a.kt)("h2",{id:"load-model-from-code"},"Load model from code"),(0,a.kt)("p",null,"The model can be initialized dynamically from code instead of using ",(0,a.kt)("inlineCode",{parentName:"p"},".CONF")," file. Here's an example for the RBAC model:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/casbin/casbin/v2"\n    "github.com/casbin/casbin/v2/model"\n    "github.com/casbin/casbin/v2/persist/file-adapter"\n)\n\n// Initialize the model from Go code.\nm := model.NewModel()\nm.AddDef("r", "r", "sub, obj, act")\nm.AddDef("p", "p", "sub, obj, act")\nm.AddDef("g", "g", "_, _")\nm.AddDef("e", "e", "some(where (p.eft == allow))")\nm.AddDef("m", "m", "g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act")\n\n// Load the policy rules from the .CSV file adapter.\n// Replace it with your adapter to avoid files.\na := fileadapter.NewAdapter("examples/rbac_policy.csv")\n\n// Create the enforcer.\ne := casbin.NewEnforcer(m, a)\n')),(0,a.kt)("h2",{id:"load-model-from-string"},"Load model from string"),(0,a.kt)("p",null,"Or you can just load the entire model text from a multi-line string. The good point for this way is that you do not need to maintain a model file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/casbin/casbin/v2"\n    "github.com/casbin/casbin/v2/model"\n)\n\n// Initialize the model from a string.\ntext :=\n`\n[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n`\nm, _ := model.NewModelFromString(text)\n\n// Load the policy rules from the .CSV file adapter.\n// Replace it with your adapter to avoid files.\na := fileadapter.NewAdapter("examples/rbac_policy.csv")\n\n// Create the enforcer.\ne := casbin.NewEnforcer(m, a)\n')))}u.isMDXComponent=!0}}]);