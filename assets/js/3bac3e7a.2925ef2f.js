"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[1340],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,f=b["".concat(s,".").concat(d)]||b[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},3552:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],c={id:"multi-threading",title:"Multi-threading"},s=void 0,u={unversionedId:"multi-threading",id:"multi-threading",title:"Multi-threading",description:"If you use Casbin in a multi-threading manner, you can use the synchronized wrapper of the Casbin enforcer//github.com/casbin/casbin/blob/master/enforcersynced.go (GoLang) and https://github.com/casbin/casbin-cpp/blob/master/casbin/enforcersynced.cpp (C++).",source:"@site/docs/MultiThreading.mdx",sourceDirName:".",slug:"/multi-threading",permalink:"/docs/multi-threading",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/MultiThreading.mdx",tags:[],version:"current",frontMatter:{id:"multi-threading",title:"Multi-threading"},sidebar:"docs",previous:{title:"Data Permissions",permalink:"/docs/data-permissions"},next:{title:"Benchmarks",permalink:"/docs/benchmark"}},l={},p=[],b={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you use Casbin in a multi-threading manner, you can use the synchronized wrapper of the Casbin enforcer: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/enforcer_synced.go"},"https://github.com/casbin/casbin/blob/master/enforcer_synced.go")," (GoLang) and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp/blob/master/casbin/enforcer_synced.cpp"},"https://github.com/casbin/casbin-cpp/blob/master/casbin/enforcer_synced.cpp")," (C++)."),(0,i.kt)("p",null,"It also supports the ",(0,i.kt)("inlineCode",{parentName:"p"},"AutoLoad")," feature, which means the Casbin enforcer will automatically load the latest policy rules from DB if it has changed. Call ",(0,i.kt)("inlineCode",{parentName:"p"},"StartAutoLoadPolicy()")," to start automatically loading policy periodically and call ",(0,i.kt)("inlineCode",{parentName:"p"},"StopAutoLoadPolicy()")," to stop it."))}d.isMDXComponent=!0}}]);