"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[7241],{4137:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>u});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},l=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),c=p(t),d=s,u=c["".concat(o,".").concat(d)]||c[d]||h[d]||r;return t?n.createElement(u,i(i({ref:a},l),{},{components:t})):n.createElement(u,i({ref:a},l))}));function u(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=d;var m={};for(var o in a)hasOwnProperty.call(a,o)&&(m[o]=a[o]);m.originalType=e,m[c]="string"==typeof e?e:s,i[1]=m;for(var p=2;p<r;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8496:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>m,toc:()=>p});var n=t(7462),s=(t(7294),t(4137));const r={},i="Submitting data blobs to Celestia",m={unversionedId:"learn/submit-data",id:"learn/submit-data",title:"Submitting data blobs to Celestia",description:"To submit data to Celestia, users submit blob transactions (BlobTx). Blob",source:"@site/docs/learn/submit-data.md",sourceDirName:"learn",slug:"/learn/submit-data",permalink:"/learn/submit-data",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/learn/submit-data.md",tags:[],version:"current",frontMatter:{},sidebar:"learn",previous:{title:"Paying for blobspace",permalink:"/category/paying-for-blobspace"},next:{title:"Specifications",permalink:"/category/specifications"}},o={},p=[{value:"Fee market and mempool",id:"fee-market-and-mempool",level:2},{value:"Fees and gas limits",id:"fees-and-gas-limits",level:3},{value:"Estimating PFB gas",id:"estimating-pfb-gas",level:4},{value:"Gas fee calculation",id:"gas-fee-calculation",level:4},{value:"Estimating gas programmatically",id:"estimating-gas-programmatically",level:4},{value:"Submitting multiple transactions in one block from the same account",id:"submitting-multiple-transactions-in-one-block-from-the-same-account",level:3},{value:"API",id:"api",level:2},{value:"The celestia-app consensus node CLI",id:"the-celestia-app-consensus-node-cli",level:3},{value:"The celestia-node light node CLI",id:"the-celestia-node-light-node-cli",level:3},{value:"GRPC to a consensus node via the <code>user</code> package",id:"grpc-to-a-consensus-node-via-the-user-package",level:3},{value:"RPC to a celestia-node",id:"rpc-to-a-celestia-node",level:3}],l={toc:p},c="wrapper";function h(e){let{components:a,...t}=e;return(0,s.kt)(c,(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"submitting-data-blobs-to-celestia"},"Submitting data blobs to Celestia"),(0,s.kt)("p",null,"To submit data to Celestia, users submit blob transactions (",(0,s.kt)("inlineCode",{parentName:"p"},"BlobTx"),"). Blob\ntransactions contain two components, a standard Cosmos-SDK transaction called\n",(0,s.kt)("inlineCode",{parentName:"p"},"MsgPayForBlobs")," and a ",(0,s.kt)("inlineCode",{parentName:"p"},"Blob")," of data."),(0,s.kt)("h2",{id:"fee-market-and-mempool"},"Fee market and mempool"),(0,s.kt)("p",null,"Celestia makes use of a standard gas-priced prioritized mempool. By default,\ntransactions with fees higher than that of other transactions in the mempool\nwill be prioritized by validators."),(0,s.kt)("h3",{id:"fees-and-gas-limits"},"Fees and gas limits"),(0,s.kt)("p",null,"As of version v1.0.0 of the application (celestia-app), there is no protocol\nenforced protocol minimum fee (similar to EIP-1559 in Ethereum). Instead, each\nconsensus node running a mempool uses a locally configured gas price threshold\nthat must be met in order for that node to accept a transaction, either directly\nfrom a user or gossiped from another node, into its mempool."),(0,s.kt)("p",null,"As of version v1.0.0 of the application (celestia-app), gas is not refunded.\nInstead, transaction fees are deducted by a flat fee, originally determined by\nthe user via multiplying the gas limit by the desired gas price. This means that\nusers should use an accurate gas limit value if they do not wish to over pay."),(0,s.kt)("p",null,"Under the hood, fees are currently handled by specifying and deducting a flat\nfee. However gas price is often specifed by users instead of calculating the\nflat fee from the gas used and the gas price. Since the state machine does not\nrefund users for unused gas, gas price is calculated by dividing the total fee\nby the gas limit."),(0,s.kt)("h4",{id:"estimating-pfb-gas"},"Estimating PFB gas"),(0,s.kt)("p",null,"Generally, the gas used by a PFB transaction involves a static fixed cost and\na dynamic cost based on the size of each blob involved in the transaction."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Note: For a general use case of a normal account submitting a PFB, the static\ncosts can be treated as such. However, due to the description above of how gas\nworks in the Cosmos-SDK this is not always the case. Notably, if we use a\nvesting account or the ",(0,s.kt)("inlineCode",{parentName:"p"},"feegrant")," modules, then these static costs change.")),(0,s.kt)("p",null,"The fixed cost is an approximation of the gas consumed by operations outside\nthe function ",(0,s.kt)("inlineCode",{parentName:"p"},"GasToConsume")," (for example, signature verification, tx size, read\naccess to accounts), which has a default value of 65,000 gas."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Note: the first transaction sent by an account (sequence number == 0) has an\nadditional one time gas cost of 10,000 gas. If this is the case, this\nshould be accounted for.")),(0,s.kt)("p",null,"Each blob in the PFB contributes to the total gas cost based on its size. The\nfunction ",(0,s.kt)("inlineCode",{parentName:"p"},"GasToConsume")," calculates the total gas consumed by all the blobs\ninvolved in a PFB, where each blob's gas cost is computed by first determining\nhow many shares are needed to store the blob size. Then, it computes the product\nof the number of shares, the number of bytes per share, and the ",(0,s.kt)("inlineCode",{parentName:"p"},"gasPerByte"),"\nparameter. Finally, it adds a static amount per blob."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"GasCostPerBlobByte")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"GasCostPerTransactionByte")," are parameters that\ncould potentially be adjusted through the system's governance mechanisms. Hence,\nactual costs may vary depending on the current state of these parameters."),(0,s.kt)("h4",{id:"gas-fee-calculation"},"Gas fee calculation"),(0,s.kt)("p",null,"The total fee for a transaction is calculated as the product of the gas limit\nfor the transaction and the gas price set by the user:"),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mtext",{parentName:"mrow"},"Total\xa0Fee"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mtext",{parentName:"mrow"},"Gas\xa0Limit"),(0,s.kt)("mo",{parentName:"mrow"},"\xd7"),(0,s.kt)("mtext",{parentName:"mrow"},"Gas\xa0Price")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{Total Fee} = \\text{Gas Limit} \\times \\text{Gas Price}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"Total\xa0Fee")),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"Gas\xa0Limit")),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"Gas\xa0Price"))))))),(0,s.kt)("p",null,"The gas limit for a transaction is the maximum amount of gas that a user is\nwilling to spend on a transaction. It is determined by both a static\nfixed cost and a variable dynamic cost based on the size of each blob involved\nin the transaction:"),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mtext",{parentName:"mrow"},"Gas\xa0Limit"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mtext",{parentName:"mrow"},"Fixed\xa0Cost"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("msubsup",{parentName:"mrow"},(0,s.kt)("mo",{parentName:"msubsup"},"\u2211"),(0,s.kt)("mrow",{parentName:"msubsup"},(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("mi",{parentName:"msubsup"},"n")),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mtext",{parentName:"msub"},"SparseSharesNeeded(Blob"),(0,s.kt)("mi",{parentName:"msub"},"i")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"\xd7"),(0,s.kt)("mtext",{parentName:"mrow"},"Share\xa0Size"),(0,s.kt)("mo",{parentName:"mrow"},"\xd7"),(0,s.kt)("mtext",{parentName:"mrow"},"Gas\xa0Cost\xa0Per\xa0Blob\xa0Byte")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{Gas Limit} = \\text{Fixed Cost} + \\sum_{i=1}^{n} \\text{SparseSharesNeeded(Blob}_i) \\times \\text{Share Size} \\times \\text{Gas Cost Per Blob Byte}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"Gas\xa0Limit")),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"Fixed\xa0Cost")),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.104em",verticalAlign:"-0.2997em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},(0,s.kt)("span",{parentName:"span",className:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"\u2211"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8043em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.4003em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,s.kt)("span",{parentName:"span",className:"mrel mtight"},"="),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.2029em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2997em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"SparseSharesNeeded(Blob")),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.162em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.4003em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2997em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"Share\xa0Size")),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"Gas\xa0Cost\xa0Per\xa0Blob\xa0Byte"))))))),(0,s.kt)("p",null,"Where:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mtext",{parentName:"mrow"},"Fixed\xa0Cost")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{Fixed Cost}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"Fixed\xa0Cost"))))))," is a static value (65,000 gas)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mtext",{parentName:"msub"},"SparseSharesNeeded(Blob"),(0,s.kt)("mi",{parentName:"msub"},"i")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{SparseSharesNeeded(Blob}_i)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0497em",verticalAlign:"-0.2997em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"SparseSharesNeeded(Blob")),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.162em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.4003em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2997em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," is the number of shares needed for the ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"i")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"))))),"th blob in the transaction"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mtext",{parentName:"mrow"},"Share\xa0Size")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{Share Size}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"Share\xa0Size"))))))," is the size of each share"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mtext",{parentName:"mrow"},"Gas\xa0Cost\xa0Per\xa0Blob\xa0Byte")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{Gas Cost Per Blob Byte}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"Gas\xa0Cost\xa0Per\xa0Blob\xa0Byte"))))))," is a parameter that could potentially be adjusted through the system's governance mechanisms.")),(0,s.kt)("p",null,"The gas fee is set by the user when they submit a transaction. The fee is often\nspecified by users directly. The total cost for the transaction is then\ncalculated as the product of the estimated gas limit and the gas price.\nSince the state machine does not refund users for unused gas,\nit's important for users to estimate the gas limit accurately to\navoid overpaying."),(0,s.kt)("p",null,"For more details on how gas is calculated per blob, refer to the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app/blob/32d247971386c1944d44bec1faeb000b1ff1dd51/x/blob/keeper/keeper.go#L53"},(0,s.kt)("inlineCode",{parentName:"a"},"PayForBlobs")," function"),"\nthat consumes gas based on the blob sizes. This function uses the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app/blob/32d247971386c1944d44bec1faeb000b1ff1dd51/x/blob/types/payforblob.go#L157-L167"},(0,s.kt)("inlineCode",{parentName:"a"},"GasToConsume")," function"),"\nto calculate the extra gas charged to pay for a set of blobs in a ",(0,s.kt)("inlineCode",{parentName:"p"},"MsgPayForBlobs"),"\ntransaction. This function calculates the total shares used by all blobs and\nmultiplies it by the ",(0,s.kt)("inlineCode",{parentName:"p"},"ShareSize")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"gasPerByte")," to get the total gas to consume."),(0,s.kt)("p",null,"For estimating the total gas required for a set of blobs, refer to the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app/blob/32d247971386c1944d44bec1faeb000b1ff1dd51/x/blob/types/payforblob.go#L169-L181"},(0,s.kt)("inlineCode",{parentName:"a"},"EstimateGas")," function"),".\nThis function estimates the gas based on a linear model that is dependent on\nthe governance parameters: ",(0,s.kt)("inlineCode",{parentName:"p"},"gasPerByte")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"txSizeCost"),". It assumes other\nvariables are constant, including the assumption that the ",(0,s.kt)("inlineCode",{parentName:"p"},"MsgPayForBlobs"),"\nis the only message in the transaction. The ",(0,s.kt)("inlineCode",{parentName:"p"},"DefaultEstimateGas")," function\nruns ",(0,s.kt)("inlineCode",{parentName:"p"},"EstimateGas")," with the system defaults."),(0,s.kt)("h4",{id:"estimating-gas-programmatically"},"Estimating gas programmatically"),(0,s.kt)("p",null,"Users can estimate an efficient gas limit by using this function:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    blobtypes "github.com/celestiaorg/celestia-app/x/blob/types"\n)\ngasLimit := blobtypes.DefaultEstimateGas([]uint32{uint32(sizeOfDataInBytes)})\n')),(0,s.kt)("p",null,"If using a celestia-node light client, then this function is automatically\ncalled for you when submitting a blob. This function works by breaking down the\ncomponents of calculating gas for a blob transaction. These components consist\nof a flat costs for all PFBs, the size of each blob and how many shares each\nuses and the parameter for gas used per byte. More information about how gas is\nused can be found in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app/blob/d17e231ae3a0150b50a1854f3e9a268c34502b6b/specs/src/specs/resource_pricing.md"},"gas\nspecs"),"\nand the exact formula can be found in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app/blob/d17e231ae3a0150b50a1854f3e9a268c34502b6b/x/blob/types/payforblob.go#L157-L181"},"blob\nmodule"),"."),(0,s.kt)("h3",{id:"submitting-multiple-transactions-in-one-block-from-the-same-account"},"Submitting multiple transactions in one block from the same account"),(0,s.kt)("p",null,"The mempool Celestia uses works by maintaining a fork of the canonical state\neach block. This means that each time we submit a transaction to it, it will\nupdate the sequence number (aka nonce) for the account that submitted the\ntransaction. If users wish to submit a second transaction, they can, but must\nspecify the nonce manually. If this is not done, the new transactions will not\nbe able to be submitted until the first transaction is reaped from the mempool (i.e. included in a block), or dropped due to timing out."),(0,s.kt)("p",null,"By default, nodes will drop a transaction if it does not get included in 10\nblocks (roughly 2.5 minutes). At this point, the user must resubmit their\ntransaction if they want it to eventually be included."),(0,s.kt)("p",null,"As of v1.0.0 of the application (celestia-app), users are unable to replace an\nexisting transaction with a different one with higher fees. They must instead\nwait 10 blocks from the original submitted time and then resubmit the\ntransaction. Again, community members have already suggested solutions and a\nwillingness to accept changes to fix this issue."),(0,s.kt)("h2",{id:"api"},"API"),(0,s.kt)("p",null,"Users can currently create and submit ",(0,s.kt)("inlineCode",{parentName:"p"},"BlobTx"),"s in four ways."),(0,s.kt)("h3",{id:"the-celestia-app-consensus-node-cli"},"The celestia-app consensus node CLI"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-terminal"},"celestia-appd tx blob PayForBlobs <hex encoded namespace> <hex encoded data> [flags]\n")),(0,s.kt)("h3",{id:"the-celestia-node-light-node-cli"},"The celestia-node light node CLI"),(0,s.kt)("p",null,"Using ",(0,s.kt)("inlineCode",{parentName:"p"},"blob.Submit"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-terminal"},"celestia rpc blob submit <hex encoded namespace> <hex encoded data>\n")),(0,s.kt)("p",null,"Learn more in the ",(0,s.kt)("a",{parentName:"p",href:"../../developers/node-tutorial"},"node tutorial"),"."),(0,s.kt)("h3",{id:"grpc-to-a-consensus-node-via-the-user-package"},"GRPC to a consensus node via the ",(0,s.kt)("inlineCode",{parentName:"h3"},"user")," package"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "fmt"\n\n    "github.com/celestiaorg/celestia-app/app"\n    "github.com/celestiaorg/celestia-app/app/encoding"\n    "github.com/celestiaorg/celestia-app/pkg/appconsts"\n    "github.com/celestiaorg/celestia-app/pkg/namespace"\n    "github.com/celestiaorg/celestia-app/pkg/user"\n    blobtypes "github.com/celestiaorg/celestia-app/x/blob/types"\n    "github.com/cosmos/cosmos-sdk/crypto/keyring"\n    tmproto "github.com/tendermint/tendermint/proto/tendermint/types"\n    "google.golang.org/grpc"\n    "google.golang.org/grpc/credentials/insecure"\n)\n\n// SubmitData is a demo function that shows how to use the signer to submit data\n// to the blockchain directly via a celestia node. We can manage this keyring\n// using the `celestia-appd keys` or `celestia keys` sub commands and load this\n// keyring from a file and use it to programmatically sign transactions.\nfunc DemoSubmitData(grpcAddr string, kr keyring.Keyring) error {\n    // create an encoding config that can decode and encode all celestia-app\n    // data structures.\n    ecfg := encoding.MakeConfig(app.ModuleEncodingRegisters...)\n\n    // create a connection to the grpc server on the consensus node.\n    conn, err := grpc.Dial(grpcAddr, grpc.WithTransportCredentials(insecure.NewCredentials()))\n    if err != nil {\n        return err\n    }\n    defer conn.Close()\n\n    // get the address of the account we want to use to sign transactions.\n    rec, err := kr.Key("accountName")\n    if err != nil {\n        return err\n    }\n\n    addr, err := rec.GetAddress()\n    if err != nil {\n        return err\n    }\n\n    // Setup the signer. This function will automatically query the relevant\n    // account information such as sequence (nonce) and account number.\n    signer, err := user.SetupSigner(context.TODO(), kr, conn, addr, ecfg)\n    if err != nil {\n        return err\n    }\n\n    ns := namespace.MustNewV0([]byte("1234567890"))\n\n    fmt.Println("namepace", len(ns.Bytes()))\n\n    blob, err := blobtypes.NewBlob(ns, []byte("some data"), appconsts.ShareVersionZero)\n    if err != nil {\n        return err\n    }\n\n    gasLimit := blobtypes.DefaultEstimateGas([]uint32{uint32(len(blob.Data))})\n\n    options := []user.TxOption{\n        // here we\'re setting estimating the gas limit from the above estimated\n        // function, and then setting the gas price to 0.1utia per unit of gas.\n        user.SetGasLimitAndFee(gasLimit, 0.1),\n    }\n\n    // this function will submit the transaction and block until a timeout is\n    // reached or the transaction is committed.\n    resp, err := signer.SubmitPayForBlob(context.TODO(), []*tmproto.Blob{blob}, options...)\n    if err != nil {\n        return err\n    }\n\n    // check the response code to see if the transaction was successful.\n    if resp.Code != 0 {\n        // handle code\n        fmt.Println(resp.Code, resp.Codespace, resp.RawLog)\n    }\n\n    // if we don\'t want to wait for the transaction to be confirmed, we can\n    // manually sign and submit the transaction using the same package.\n    blobTx, err := signer.CreatePayForBlob([]*tmproto.Blob{blob}, options...)\n    if err != nil {\n        return err\n    }\n\n    resp, err = signer.BroadcastTx(context.TODO(), blobTx)\n    if err != nil {\n        return err\n    }\n\n    // check the response code to see if the transaction was successful. Note\n    // that this time we\'re not waiting for the transaction to be committed.\n    // Therefore the code here is only from the consensus node\'s mempool.\n    if resp.Code != 0 {\n        // handle code\n        fmt.Println(resp.Code, resp.Codespace, resp.RawLog)\n    }\n\n    return err\n}\n')),(0,s.kt)("h3",{id:"rpc-to-a-celestia-node"},"RPC to a celestia-node"),(0,s.kt)("p",null,"Using the JSON RPC API, submit data using the following methods:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/api/v0.11.0-rc13/#blob.Submit"},"blob.Submit")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/api/v0.11.0-rc13/#state.SubmitPayForBlob"},"state.SubmitPayForBlob"))),(0,s.kt)("p",null,"Learn more in the ",(0,s.kt)("a",{parentName:"p",href:"/api/v0.11.0-rc13"},"celestia-node API docs"),"."))}h.isMDXComponent=!0}}]);