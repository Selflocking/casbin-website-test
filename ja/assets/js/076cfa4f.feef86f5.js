"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[69],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),b=a,f=m["".concat(c,".").concat(b)]||m[b]||p[b]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2393:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={title:"Casbin Server is Launched!",author:"Helong Zhang",authorTitle:"Casbin Maintainer",authorURL:"http://github.com/BetaCat0",authorImageURL:"https://avatars.githubusercontent.com/BetaCat0"},c=void 0,u={permalink:"/ja/blog/2018/08/07/launching-casbin-server",editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/blog/2018-08-07-launching-casbin-server.md",source:"@site/blog/2018-08-07-launching-casbin-server.md",title:"Casbin Server is Launched!",description:"Some of our customers ask if Casbin can be used as a service instead of a library. The",date:"2018-08-07T00:00:00.000Z",formattedDate:"2018\u5e748\u67087\u65e5",tags:[],readingTime:.69,truncated:!1,authors:[{name:"Helong Zhang",title:"Casbin Maintainer",url:"http://github.com/BetaCat0",imageURL:"https://avatars.githubusercontent.com/BetaCat0"}],frontMatter:{title:"Casbin Server is Launched!",author:"Helong Zhang",authorTitle:"Casbin Maintainer",authorURL:"http://github.com/BetaCat0",authorImageURL:"https://avatars.githubusercontent.com/BetaCat0"},prevItem:{title:"node-Casbin: New Member of Casbin Family",permalink:"/ja/blog/2018/08/27/node-casbin"}},l={authorsImageUrls:[void 0]},p=[],m={toc:p};function b(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Some of our customers ask if Casbin can be used as a service instead of a library. The\nanswer is ",(0,o.kt)("strong",{parentName:"p"},"YES"),". Today, we launched the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-server"},"Casbin Server")," project as a concrete solution for\n",(0,o.kt)("strong",{parentName:"p"},"Access Control as a Service"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Casbin Server")," is under active development by our core team. It has several features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Purely developed in Golang."),(0,o.kt)("li",{parentName:"ul"},"Can manage thousands of Casbin instances, so you can move policy enforcement logic from multiple services into one Casbin Server."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"gRPC")," is used to communicated with Casbin Server. We also consider to add the ",(0,o.kt)("strong",{parentName:"li"},"RESTful")," support in near future."),(0,o.kt)("li",{parentName:"ul"},"A friendly web administrator portal is provided for non-developer administrators to manage all details like Casbin instances, models, policy storage and load balancing.")),(0,o.kt)("p",null,"The source code is hosted on GitHub: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-server"},"https://github.com/casbin/casbin-server")),(0,o.kt)("p",null,"Any issues or pull requests are welcome :)"))}b.isMDXComponent=!0}}]);