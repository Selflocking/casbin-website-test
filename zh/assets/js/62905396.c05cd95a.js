"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[7789],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return m}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),c=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=c(a),m=n,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return a?r.createElement(h,i(i({ref:e},s),{},{components:a})):r.createElement(h,i({ref:e},s))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5162:function(t,e,a){a.d(e,{Z:function(){return i}});var r=a(7294),n=a(6010),l="tabItem_Ymn6";function i(t){var e=t.children,a=t.hidden,i=t.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,i),hidden:a},e)}},5488:function(t,e,a){a.d(e,{Z:function(){return m}});var r=a(3117),n=a(7294),l=a(6010),i=a(2389),o=a(7392),p=a(7094),c=a(2466),s="tabList__CuJ",d="tabItem_LNqP";function u(t){var e,a,i=t.lazy,u=t.block,m=t.defaultValue,h=t.values,k=t.groupId,b=t.className,g=n.Children.map(t.children,(function(t){if((0,n.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=h?h:g.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),f=(0,o.l)(N,(function(t,e){return t.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(e=null!=m?m:null==(a=g.find((function(t){return t.props.default})))?void 0:a.props.value)?e:g[0].props.value;if(null!==y&&!N.some((function(t){return t.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+N.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,p.U)(),w=v.tabGroupChoices,P=v.setTabGroupChoices,W=(0,n.useState)(y),E=W[0],T=W[1],R=[],C=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var A=w[k];null!=A&&A!==E&&N.some((function(t){return t.value===A}))&&T(A)}var S=function(t){var e=t.currentTarget,a=R.indexOf(e),r=N[a].value;r!==E&&(C(e),T(r),null!=k&&P(k,String(r)))},x=function(t){var e,a=null;switch(t.key){case"ArrowRight":var r,n=R.indexOf(t.currentTarget)+1;a=null!=(r=R[n])?r:R[0];break;case"ArrowLeft":var l,i=R.indexOf(t.currentTarget)-1;a=null!=(l=R[i])?l:R[R.length-1]}null==(e=a)||e.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},b)},N.map((function(t){var e=t.value,a=t.label,i=t.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===e?0:-1,"aria-selected":E===e,key:e,ref:function(t){return R.push(t)},onKeyDown:x,onFocus:S,onClick:S},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":E===e})}),null!=a?a:e)}))),i?(0,n.cloneElement)(g.filter((function(t){return t.props.value===E}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map((function(t,e){return(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==E})}))))}function m(t){var e=(0,i.Z)();return n.createElement(u,(0,r.Z)({key:String(e)},t))}},3328:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var r=a(3117),n=a(102),l=(a(7294),a(3905)),i=a(5488),o=a(5162),p=["components"],c={id:"watchers",title:"Watchers"},s=void 0,d={unversionedId:"watchers",id:"watchers",title:"Watchers",description:"We support to use distributed messaging systems like etcd to keep consistence between multiple Casbin enforcer instances. So our users can concurrently use multiple Casbin enforcers to handle large number of permission checking requests.",source:"@site/docs/Watchers.mdx",sourceDirName:".",slug:"/watchers",permalink:"/zh/docs/watchers",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Watchers.mdx",tags:[],version:"current",frontMatter:{id:"watchers",title:"Watchers"},sidebar:"docs",previous:{title:"Adapters",permalink:"/zh/docs/adapters"},next:{title:"Dispatchers",permalink:"/zh/docs/dispatchers"}},u={},m=[{value:"WatcherEx",id:"watcherex",level:2}],h={toc:m};function k(t){var e=t.components,a=(0,n.Z)(t,p);return(0,l.kt)("wrapper",(0,r.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"We support to use distributed messaging systems like ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/coreos/etcd"},"etcd")," to keep consistence between multiple Casbin enforcer instances. So our users can concurrently use multiple Casbin enforcers to handle large number of permission checking requests."),(0,l.kt)("p",null,"Similar to policy storage adapters, we don't put watcher code in the main library. Any support for a new messaging system should be implemented as a watcher. A complete list of Casbin watchers is provided as below. Any 3rd-party contribution on a new watcher is welcomed, please inform us and I will put it in this list:)"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Watcher"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Author"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/etcd-watcher"},"Etcd Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"KV store"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/coreos/etcd"},"etcd"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/redis-watcher"},"Redis Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"KV store"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,l.kt)("a",{parentName:"td",href:"http://redis.io/"},"Redis"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/billcobbler/casbin-redis-watcher"},"Redis Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"KV store"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/billcobbler"},"@billcobbler")),(0,l.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,l.kt)("a",{parentName:"td",href:"http://redis.io/"},"Redis"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/tikv-watcher"},"TiKV Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"KV store"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/tikv/tikv"},"TiKV"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/wgarunap/casbin-kafka-watcher"},"Kafka Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"Messaging system"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/wgarunap"},"@wgarunap")),(0,l.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,l.kt)("a",{parentName:"td",href:"https://kafka.apache.org/"},"Apache Kafka"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Soluto/casbin-nats-watcher"},"NATS Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"Messaging system"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Soluto"},"Soluto")),(0,l.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,l.kt)("a",{parentName:"td",href:"https://nats.io/"},"NATS"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/grepsr/casbin-zk-watcher"},"ZooKeeper Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"Messaging system"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/grepsr"},"Grepsr")),(0,l.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,l.kt)("a",{parentName:"td",href:"https://zookeeper.apache.org/"},"Apache ZooKeeper"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rusenask/casbin-go-cloud-watcher"},"NATS, RabbitMQ, GCP Pub/Sub, AWS SNS & SQS, Kafka, InMemory")),(0,l.kt)("td",{parentName:"tr",align:null},"Messaging System"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rusenask/"},"@rusenask")),(0,l.kt)("td",{parentName:"tr",align:null},"Watcher based on ",(0,l.kt)("a",{parentName:"td",href:"https://gocloud.dev/"},"Go Cloud Dev Kit")," that works with leading cloud providers and self-hosted infrastructure")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/fmyxyz/casbin-rocketmq-watcher"},"RocketMQ Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"Messaging system"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/fmyxyz"},"@fmyxyz")),(0,l.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,l.kt)("a",{parentName:"td",href:"https://rocketmq.apache.org/"},"Apache RocketMQ")))))),(0,l.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Watcher"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Author"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/mapleafgo/jcasbin-extra"},"Etcd Adapter")),(0,l.kt)("td",{parentName:"tr",align:null},"KV store"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/mapleafgo"},"@mapleafgo")),(0,l.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/coreos/etcd"},"etcd"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/jcasbin/redis-watcher"},"Redis Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"KV store"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,l.kt)("a",{parentName:"td",href:"http://redis.io/"},"Redis"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/jcasbin/kafka-watcher"},"Kafka Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"Messaging system"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,l.kt)("a",{parentName:"td",href:"https://kafka.apache.org/"},"Apache Kafka")))))),(0,l.kt)(o.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Watcher"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Author"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/etcd-watcher"},"Etcd Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"KV store"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/coreos/etcd"},"etcd"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/redis-watcher"},"Redis Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"KV store"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,l.kt)("a",{parentName:"td",href:"http://redis.io/"},"Redis"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/pubsub-watcher"},"Pub/Sub Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"Messaging system"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,l.kt)("a",{parentName:"td",href:"https://cloud.google.com/pubsub/docs"},"Google Cloud Pub/Sub"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/mcollina/casbin-pg-watcher"},"Postgres Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"Database"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/mcollina/"},"Matteo Collina")),(0,l.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,l.kt)("a",{parentName:"td",href:"https://www.postgresql.org/"},"PostgreSQL")))))),(0,l.kt)(o.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Watcher"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Author"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ScienceLogic/flask-casbin-redis-watcher"},"Redis Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"KV store"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ScienceLogic"},"ScienceLogic")),(0,l.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,l.kt)("a",{parentName:"td",href:"http://redis.io/"},"Redis"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/pycasbin/postgresql-watcher"},"PostgreSQL Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"Database"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,l.kt)("a",{parentName:"td",href:"https://www.postgresql.org/"},"PostgreSQL")))))),(0,l.kt)(o.Z,{value:".NET",label:".NET",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Watcher"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Author"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Sbou/Casbin.NET-Redis-Watcher"},"Redis Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"KV store"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Sbou"},"@Sbou")),(0,l.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,l.kt)("a",{parentName:"td",href:"http://redis.io/"},"Redis")))))),(0,l.kt)(o.Z,{value:"Ruby",label:"Ruby",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Watcher"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Author"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/CasbinRuby/casbin-ruby-redis-watcher"},"Redis Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"KV store"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/CasbinRuby"},"CasbinRuby")),(0,l.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,l.kt)("a",{parentName:"td",href:"http://redis.io/"},"Redis"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/CasbinRuby/casbin-ruby-rabbitmq-watcher"},"RabbitMQ Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"Messaging system"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/CasbinRuby"},"CasbinRuby")),(0,l.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,l.kt)("a",{parentName:"td",href:"https://www.rabbitmq.com/"},"RabbitMQ")))))),(0,l.kt)(o.Z,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Watcher"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Author"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Tinywan/casbin"},"Redis Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"KV store"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Tinywan"},"Tinywan")),(0,l.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,l.kt)("a",{parentName:"td",href:"http://redis.io/"},"Redis"))))))),(0,l.kt)("h2",{id:"watcherex"},"WatcherEx"),(0,l.kt)("p",null,"In order to support incremental synchronization between multiple instances, we provide the ",(0,l.kt)("inlineCode",{parentName:"p"},"WatcherEx")," interface. We hope it can notify other instances when the policy changes, but there is currently no implementation of ",(0,l.kt)("inlineCode",{parentName:"p"},"WatcherEx"),". We recommend that you use dispatcher to achieve this. "),(0,l.kt)("p",null,"Compared with ",(0,l.kt)("inlineCode",{parentName:"p"},"Watcher")," interface, ",(0,l.kt)("inlineCode",{parentName:"p"},"WatcherEx")," can distinguish what type of update action is received, e.g., ",(0,l.kt)("inlineCode",{parentName:"p"},"AddPolicy")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"RemovePolicy"),". "),(0,l.kt)("p",null,"WatcherEx Apis:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SetUpdateCallback(func(string)) error"),(0,l.kt)("td",{parentName:"tr",align:null},"SetUpdateCallback sets the callback function that the watcher will call, when the policy in DB has been changed by other instances. A classic callback is Enforcer.LoadPolicy().")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Update() error"),(0,l.kt)("td",{parentName:"tr",align:null},"Update calls the update callback of other instances to synchronize their policy. It is usually called after changing the policy in DB, like Enforcer.SavePolicy(), Enforcer.AddPolicy(), Enforcer.RemovePolicy(), etc.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Close()"),(0,l.kt)("td",{parentName:"tr",align:null},"Close stops and releases the watcher, the callback function will not be called any more.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UpdateForAddPolicy(sec, ptype string, params ...string) error"),(0,l.kt)("td",{parentName:"tr",align:null},"UpdateForAddPolicy calls the update callback of other instances to synchronize their policy. It is called after a policy is added via Enforcer.AddPolicy(), Enforcer.AddNamedPolicy(), Enforcer.AddGroupingPolicy() and Enforcer.AddNamedGroupingPolicy().")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UpdateForRemovePolicy(sec, ptype string, params ...string) error"),(0,l.kt)("td",{parentName:"tr",align:null},"UPdateForRemovePolicy calls the update callback of other instances to synchronize their policy. It is called after a policy is removed by Enforcer.RemovePolicy(), Enforcer.RemoveNamedPolicy(), Enforcer.RemoveGroupingPolicy() and Enforcer.RemoveNamedGroupingPolicy().")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UpdateForRemoveFilteredPolicy(sec, ptype string, fieldIndex int, fieldValues ...string) error"),(0,l.kt)("td",{parentName:"tr",align:null},"UpdateForRemoveFilteredPolicy calls the update callback of other instances to synchronize their policy. It is called after Enforcer.RemoveFilteredPolicy(), Enforcer.RemoveFilteredNamedPolicy(), Enforcer.RemoveFilteredGroupingPolicy() and Enforcer.RemoveFilteredNamedGroupingPolicy().")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UpdateForSavePolicy(model model.Model) error"),(0,l.kt)("td",{parentName:"tr",align:null},"UpdateForSavePolicy calls the update callback of other instances to synchronize their policy. It is called after Enforcer.SavePolicy()")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UpdateForAddPolicies(sec string, ptype string, rules ...[]string) error"),(0,l.kt)("td",{parentName:"tr",align:null},"UpdateForAddPolicies calls the update callback of other instances to synchronize their policy. It is called after Enforcer.AddPolicies(), Enforcer.AddNamedPolicies(), Enforcer.AddGroupingPolicies() and Enforcer.AddNamedGroupingPolicies().")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UpdateForRemovePolicies(sec string, ptype string, rules ...[]string) error"),(0,l.kt)("td",{parentName:"tr",align:null},"UpdateForRemovePolicies calls the update callback of other instances to synchronize their policy. It is called after  Enforcer.RemovePolicies(), Enforcer.RemoveNamedPolicies(), Enforcer.RemoveGroupingPolicies() and Enforcer.RemoveNamedGroupingPolicies().")))))}k.isMDXComponent=!0}}]);