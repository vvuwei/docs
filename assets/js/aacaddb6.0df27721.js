"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[307],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(4137));const i={sidebar_label:"Node metrics",description:"A guide on how to run metrics for your Celestia Node DA instance."},a="Celestia Node metrics",s={unversionedId:"nodes/celestia-node-metrics",id:"nodes/celestia-node-metrics",title:"Celestia Node metrics",description:"A guide on how to run metrics for your Celestia Node DA instance.",source:"@site/docs/nodes/celestia-node-metrics.md",sourceDirName:"nodes",slug:"/nodes/celestia-node-metrics",permalink:"/nodes/celestia-node-metrics",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/celestia-node-metrics.md",tags:[],version:"current",frontMatter:{sidebar_label:"Node metrics",description:"A guide on how to run metrics for your Celestia Node DA instance."},sidebar:"nodes",previous:{title:"Celestia Node",permalink:"/category/celestia-node"},next:{title:"Config.toml guide",permalink:"/nodes/config-toml"}},l={},c=[{value:"Running metrics flags",id:"running-metrics-flags",level:2},{value:"Metrics endpoint design considerations",id:"metrics-endpoint-design-considerations",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"celestia-node-metrics"},"Celestia Node metrics"),(0,r.kt)("p",null,"This tutorial is for running metrics for your ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-node")," Data\nAvailability instance."),(0,r.kt)("p",null,"This tutorial will focus on running metrics for a light-node."),(0,r.kt)("p",null,"This tutorial assumes you have already setup your light node\nby following the tutorial in the ",(0,r.kt)("a",{parentName:"p",href:"/developers/node-tutorial"},"Node API tutorial"),"."),(0,r.kt)("h2",{id:"running-metrics-flags"},"Running metrics flags"),(0,r.kt)("p",null,"You can enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-node")," metric flags with the following\ncommand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --core.ip <ip-address> --metrics --metrics.endpoint <ip-address:port> --p2p.network <network>\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--core.ip")," gRPC port defaults to 9090,\nso if you do not specify it in the command\nline, it will default to that port. You can\nadd the port after the IP address or use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--core.grpc.port")," flag to specify another\nport if you prefer."),(0,r.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,r.kt)("p",null,"Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"--metrics")," flags enables metrics and expects\nan input into ",(0,r.kt)("inlineCode",{parentName:"p"},"--metrics.endpoint"),"."),(0,r.kt)("p",null,"We will go over what the endpoint will need to be in the following section."),(0,r.kt)("h2",{id:"metrics-endpoint-design-considerations"},"Metrics endpoint design considerations"),(0,r.kt)("p",null,"At the moment, the architecture of ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-node")," metrics\nworks as specified in the following ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-node/blob/main/docs/adr/adr-010-incentivized-testnet-monitoring.md"},"ADR"),"."),(0,r.kt)("p",null,"Essentially, the design considerations here will necessitate\nrunning an OpenTelemetry (OTEL) collector that connects to Celestia\nlight node."),(0,r.kt)("p",null,"For an overview of OTEL, check out the guide ",(0,r.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/collector"},"here"),"."),(0,r.kt)("p",null,"The ADR and the OTEL docs will help you run your collector on the metrics endpoint.\nThis will then allow you to process the data in the collector on a\nPrometheus server which can then be viewed on a Grafana dashboard."),(0,r.kt)("p",null,"In the future, we do want to open-source some developer toolings around\nthis infrastructure to allow for node operators to be able to monitor\ntheir Data Availability nodes."))}u.isMDXComponent=!0}}]);