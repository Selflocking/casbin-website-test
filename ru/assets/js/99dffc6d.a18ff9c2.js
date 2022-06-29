"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6874],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=i,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9121:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(3117),i=n(102),o=(n(7294),n(3905)),r=["components"],l={title:"Authorization in APISIX using Casbin",author:"Rushikesh Tote",authorTitle:"Member of Casbin",authorURL:"http://github.com/rushitote",authorImageURL:"https://avatars.githubusercontent.com/rushitote"},s=void 0,u={permalink:"/ru/blog/2021/08/19/apisix-casbin-authorization",editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/blog/2021-08-19-apisix-casbin-authorization.md",source:"@site/blog/2021-08-19-apisix-casbin-authorization.md",title:"Authorization in APISIX using Casbin",description:"Introduction",date:"2021-08-19T00:00:00.000Z",formattedDate:"19 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 2021 \u0433.",tags:[],readingTime:5.51,truncated:!1,authors:[{name:"Rushikesh Tote",title:"Member of Casbin",url:"http://github.com/rushitote",imageURL:"https://avatars.githubusercontent.com/rushitote"}],frontMatter:{title:"Authorization in APISIX using Casbin",author:"Rushikesh Tote",authorTitle:"Member of Casbin",authorURL:"http://github.com/rushitote",authorImageURL:"https://avatars.githubusercontent.com/rushitote"},nextItem:{title:"Yang Luo - Google Open Source Peer Bonus Winner",permalink:"/ru/blog/2020/04/21/google-award"}},c={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Creating a model",id:"creating-a-model",level:2},{value:"Creating a policy",id:"creating-a-policy",level:2},{value:"Enabling the plugin on route",id:"enabling-the-plugin-on-route",level:2},{value:"Enabling the plugin using a global model/policy",id:"enabling-the-plugin-using-a-global-modelpolicy",level:2},{value:"Use Cases",id:"use-cases",level:2}],h={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/"},"APISIX")," is a high performance and scalable cloud native API gateway based on Nginx and etcd. It is an open source project by the Apache Software Foundation. Besides that, what makes APISIX so good is the support of many great built in plugins that could be used to implement features like authentication, monitoring, routing, etc. And the fact that plugins in APISIX are hot-reloaded (without restarts) makes it very dynamic."),(0,o.kt)("p",null,"But while using APISIX, there may be scenarios where you might want to add complex authorization logic in your application. This is where authz-casbin might help you, authz-casbin is an APISIX plugin based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin/"},"Lua Casbin")," that enables powerful authorization based on various access control models. ",(0,o.kt)("a",{parentName:"p",href:"https://casbin.io/"},"Casbin")," is an authorization library which supports access control models like ACL, RBAC, ABAC. Originally written in Go, it has been ported to many languages and Lua Casbin is the Lua implementation of Casbin. The development of authz-casbin started when we proposed a new plugin for authorization in the APISIX repository (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/4674"},"#4674"),") to which the core members agreed. And after the helpful reviews which led to some major changes and improvements, the PR (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/4710"},"#4710"),") was finally merged. "),(0,o.kt)("p",null,"In this blog, we will use the authz-casbin plugin to show how you can implement an authorization model based on Role Based Access Control (RBAC) in APISIX."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE"),": You will need to use some other plugin or custom workflow for authenticating the user since Casbin will only do authorization and not authentication."),(0,o.kt)("h2",{id:"creating-a-model"},"Creating a model"),(0,o.kt)("p",null,"The plugin uses three parameters for authorizing any request - subject, object and action. Here, subject is the value of  the username header, which could be something like ",(0,o.kt)("inlineCode",{parentName:"p"},"[username: alice]"),". Then, the object is the URL path that is being accessed and the action is request method being used."),(0,o.kt)("p",null,"Let's say we want to create a model with three resources at the paths - ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"/res1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/res2"),". And we want to have a model like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/7BlvBNR.png",alt:"image"})),(0,o.kt)("p",null,"This would mean that all users (",(0,o.kt)("inlineCode",{parentName:"p"},"*"),") like for example ",(0,o.kt)("inlineCode",{parentName:"p"},"jack")," can access the homepage (",(0,o.kt)("inlineCode",{parentName:"p"},"/"),"). And users with ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," permissions like ",(0,o.kt)("inlineCode",{parentName:"p"},"alice")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bob")," can access all the pages and resources (like ",(0,o.kt)("inlineCode",{parentName:"p"},"res1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"res2"),"). Also, let's restrict users without any admin permissions to using only ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," request method. For this scenario, we could define the model as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-conf"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)\n")),(0,o.kt)("h2",{id:"creating-a-policy"},"Creating a policy"),(0,o.kt)("p",null,"From the above scenario, the policy would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-conf"},"p, *, /, GET\np, admin, *, *\ng, alice, admin\ng, bob, admin\n")),(0,o.kt)("p",null,"The matcher from the model means:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"(g(r.sub, p.sub) || keyMatch(r.sub, p.sub))"),": Either the request's subject has a role as the policy's subject or the request's subject matches the policy's subject in ",(0,o.kt)("inlineCode",{parentName:"li"},"keyMatch"),". ",(0,o.kt)("inlineCode",{parentName:"li"},"keyMatch")," is built in function in Lua Casbin, you can take a look at the function's description and more such functions that could be useful ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/casbin/lua-casbin/blob/master/src/util/BuiltInFunctions.lua"},"here"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"keyMatch(r.obj, p.obj)"),": The request's object matches the policy's object (URL path here)."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"keyMatch(r.act, p.act)"),": The request's action matches the policy's action (HTTP request method here).")),(0,o.kt)("h2",{id:"enabling-the-plugin-on-route"},"Enabling the plugin on route"),(0,o.kt)("p",null,"Once you have created the model and policy, you can enable it on a route using the APISIX Admin API. To enable it using model and policy file paths:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "model_path": "/path/to/model.conf",\n            "policy_path": "/path/to/policy.csv",\n            "username": "username"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/*"\n}\'\n')),(0,o.kt)("p",null,"Here, the username field is the header name that you will be using to pass in the subject. For example, if you will be passing the username header as ",(0,o.kt)("inlineCode",{parentName:"p"},"user: alice"),", you would use ",(0,o.kt)("inlineCode",{parentName:"p"},'"username": "user"'),"."),(0,o.kt)("p",null,"For using model/policy text instead of files, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"model")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"policy")," fields instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "model": "[request_definition]\n            r = sub, obj, act\n\n            [policy_definition]\n            p = sub, obj, act\n\n            [role_definition]\n            g = _, _\n\n            [policy_effect]\n            e = some(where (p.eft == allow))\n\n            [matchers]\n            m = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)",\n\n            "policy": "p, *, /, GET\n            p, admin, *, *\n            g, alice, admin\n            g, bob, admin",\n\n            "username": "username"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/*"\n}\'\n')),(0,o.kt)("h2",{id:"enabling-the-plugin-using-a-global-modelpolicy"},"Enabling the plugin using a global model/policy"),(0,o.kt)("p",null,"There may be situations where you might want to use a single model and policy configuration across multiple routes. You can do that by first by sending a ",(0,o.kt)("inlineCode",{parentName:"p"},"PUT")," request to add the model and policy configuration to the plugin's metadata by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/authz-casbin -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -i -X PUT -d \'\n{\n"model": "[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)",\n\n"policy": "p, *, /, GET\np, admin, *, *\ng, alice, admin\ng, bob, admin"\n}\'\n')),(0,o.kt)("p",null,"And then to enable the same configuration on some route, send a request using the Admin API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "username": "username"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/route1/*"\n}\'\n')),(0,o.kt)("p",null,"This will add the plugin metadata configuration to the route. You can also easily update the plugin metadata configuration by resending the request to plugin's metadata with updated model and policy configuration, the plugin will automatically update all the routes using the plugin metadata. "),(0,o.kt)("h2",{id:"use-cases"},"Use Cases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The primary use case of this plugin would be in implementing authorization in your APIs. You can easily add this plugin on any API route that you are using with your authorization model and policy configuration. "),(0,o.kt)("li",{parentName:"ul"},"If you want to have a single authorization model for all your APIs, you can use global model/policy method. This makes updating the policy easy for all routes, since you only need to update the metadata in etcd."),(0,o.kt)("li",{parentName:"ul"},"While if you would like to use a different model for every different route, you can use the route method. This is helpful when different API routes have different sets of user permissions. You can also use this when you are dealing with larger policies, since it will make the authorization faster when filtered into multiple routes.")))}d.isMDXComponent=!0}}]);