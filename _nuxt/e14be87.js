(window.webpackJsonp=window.webpackJsonp||[]).push([[26,7,8,11,12,15,17],{179:function(t,e,n){"use strict";var r=n(5),o=n(26),l=n(27),c=n(124),d=n(68),f=n(9),h=n(49).f,v=n(50).f,m=n(11).f,_=n(187).trim,y="Number",x=r.Number,w=x,C=x.prototype,k=l(n(89)(C))==y,I="trim"in String.prototype,A=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,l=(e=I?e.trim():_(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+e};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(k?f((function(){C.valueOf.call(n)})):l(n)!=y)?c(new w(A(e)),n,x):A(e)};for(var M,j=n(7)?h(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;j.length>E;E++)o(w,M=j[E])&&!o(x,M)&&m(x,M,v(w,M));x.prototype=C,C.constructor=x,n(14)(r,y,x)}},180:function(t,e,n){t.exports=n.p+"img/Lightning.795a69f.svg"},181:function(t,e,n){t.exports=n.p+"img/BTC.c9f3346.svg"},182:function(t,e,n){t.exports=n.p+"img/XMR.45ccc83.svg"},183:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(20),{props:{address:"",currency:"",paymentHash:""},methods:{close:function(){this.$emit("close")},checkLightningPayment:function(){var t=this,e=new Headers;e.append("X-Api-Key","d97307f305d24dc2944fa397a21c6421");var n={method:"GET",headers:e,redirect:"follow"};fetch("https://lnbits.com/api/v1/payments/".concat(this.paymentHash),n).then((function(e){e.ok?e.json().then((function(e){console.log(e),e.paid&&(t.success=!0,clearInterval(t.checkLightningPayment))})).catch((function(t){console.log("error",t)})):console.log(e)})).catch((function(t){console.log(t)}))}},data:function(){return{qrCode:null,success:!1}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n(192),t.qrCode=new r({width:300,height:300,margin:10,type:"svg",data:t.address,image:n(184)("./".concat(t.currency,".svg")),dotsOptions:{color:"#000000",type:"square"},backgroundOptions:{color:"#ffffff"}}),t.qrCode.append(t.$refs.canvas),t.paymentHash&&setInterval(t.checkLightningPayment,5e3);case 4:case"end":return e.stop()}}),e)})))()}}),l=n(8),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    modal\n    h-screen\n    w-full\n    fixed\n    left-0\n    top-0\n    flex\n    justify-center\n    items-center\n    bg-black bg-opacity-50\n    z-1000\n  "},[n("div",{staticClass:"\n      bg-white\n      rounded\n      shadow-lg\n      w-10/12\n      lg:w-1/3\n      flex flex-col\n      justify-center\n      items-center\n    "},[t.success?n("div",{staticClass:"flex justify-center items-center flex-col"},[n("h1",{staticClass:"text-lg font-semibold text-center text-green-600 mt-5"},[t._v("\n        Payment received, thank you.\n      ")]),t._v(" "),n("CheckIcon",{staticClass:"w-64 h-64 text-green-500"})],1):n("div",{staticClass:"flex justify-center items-center flex-col"},[n("div",{ref:"canvas",staticClass:"px-10 py-5 cursor-pointer",attrs:{id:"canvas-"+t.currency},on:{click:function(e){return t.qrCode.download({name:"qr",extension:"png"})}}}),t._v(" "),n("div",{staticClass:"text-center select-all break-all px-10 text-xs"},[t._v("\n        "+t._s(t.address)+"\n      ")])]),t._v(" "),n("div",{staticClass:"flex justify-center items-center w-100 p-10"},[n("button",{staticClass:"\n          bg-blue-600\n          hover:bg-blue-700\n          px-3\n          py-1\n          px-2\n          rounded\n          text-white\n        ",on:{click:t.close}},[t._v("\n        Close\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CheckIcon:n(186).default})},184:function(t,e,n){var map={"./BTC.svg":181,"./Lightning.svg":180,"./XMR.svg":182,"./fluent_checkmark-lock-24-regular.svg":185};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=184},185:function(t,e,n){t.exports=n.p+"img/fluent_checkmark-lock-24-regular.c3d6dea.svg"},186:function(t,e,n){"use strict";n.r(e);var r={},o=n(8),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"check-circle",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"}})])}),[],!1,null,null,null);e.default=component.exports},187:function(t,e,n){var r=n(4),o=n(32),l=n(9),c=n(188),d="["+c+"]",f=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),v=function(t,e,n){var o={},d=l((function(){return!!c[t]()||"​"!="​"[t]()})),f=o[t]=d?e(m):c[t];n&&(o[n]=f),r(r.P+r.F*d,"String",o)},m=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(h,"")),t};t.exports=v},188:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},189:function(t,e,n){var content=n(197);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("2fd4df42",content,!0,{sourceMap:!1})},196:function(t,e,n){"use strict";n(189)},197:function(t,e,n){var r=n(47)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.xmrbtn{\n  color:#f60;\n  border-color:#f60\n}\n.xmrbtn:hover{\n  background-color:#f60\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},200:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"bg-white w-8 h-8 rounded-full border-2 border-white"},[e("img",{attrs:{src:n(181)}})])}],o={props:{address:{type:String},text:{type:String,default:"Bitcoin"}},data:function(){return{showModal:!1}}},l=n(8),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"\n      m-3\n      border-2 border-yellow-500\n      text-yellow-500\n      px-3\n      py-2\n      rounded-lg\n      font-semibold\n      text-lg\n      focus:outline-none\n      focus:shadow-outline\n      hover:bg-yellow-500\n      hover:border-yellow-500\n      hover:text-white\n      shadow-lg\n      cursor-pointer\n      transition\n      ease-in\n      duration-300\n      flex\n      justify-center\n      items-center\n    ",on:{click:function(e){t.showModal=!0}}},[t._v("\n    "+t._s(t.text)+" "),t._m(0)]),t._v(" "),t.showModal?n("PaymentModal",{key:"btc",attrs:{address:t.address,currency:"BTC"},on:{close:function(e){t.showModal=!1}}}):t._e()],1)}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{PaymentModal:n(183).default})},201:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"bg-white w-8 h-8 rounded-full border-2 border-white"},[e("img",{attrs:{src:n(182)}})])}],o={props:{address:{type:String},text:{type:String,default:"Monero"}},data:function(){return{showModal:!1}}},l=(n(196),n(8)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"\n      m-3\n      border-2\n      px-3\n      py-2\n      rounded-lg\n      font-semibold\n      text-lg\n      focus:outline-none\n      focus:shadow-outline\n      hover:text-white\n      shadow-lg\n      cursor-pointer\n      transition\n      ease-in\n      duration-300\n      flex\n      justify-center\n      items-center\n      xmrbtn\n    ",on:{click:function(e){t.showModal=!0}}},[t._v("\n    "+t._s(t.text)+" "),t._m(0)]),t._v(" "),t.showModal?n("PaymentModal",{key:"xmr",attrs:{address:t.address,currency:"XMR"},on:{close:function(e){t.showModal=!1}}}):t._e()],1)}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{PaymentModal:n(183).default})},203:function(t,e,n){"use strict";n.r(e);n(179),n(13);var r={data:function(){return{loading:!1,memo:"",amount:null,error:""}},methods:{submit:function(){var t=this;if(this.error="",!Number(this.amount)||Number(this.amount)<10)this.error="Amount cannot be less than 10 satoshis";else{this.loading=!0;var e=new Headers;e.append("X-Api-Key","d97307f305d24dc2944fa397a21c6421"),e.append("Content-Type","application/json");var n=JSON.stringify({out:!1,amount:Number(this.amount),memo:this.memo||"UnFile.io Donation"});fetch("https://lnbits.com/api/v1/payments",{method:"POST",headers:e,body:n,redirect:"follow"}).then((function(e){e.ok?e.json().then((function(e){console.log(e),e&&t.$emit("ok",e)})).catch((function(e){console.log("error",e),t.error="".concat(e)})).finally((function(){t.loading=!1})):e.text().then((function(e){t.error="".concat(e),t.loading=!1}))})).catch((function(e){console.log(e),t.error="".concat(e),t.loading=!1}))}},close:function(){this.$emit("close")}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    modal\n    h-screen\n    w-full\n    fixed\n    left-0\n    top-0\n    flex\n    justify-center\n    items-center\n    bg-black bg-opacity-50\n    z-1000\n  "},[n("div",{staticClass:"\n      bg-white\n      rounded\n      shadow-lg\n      w-10/12\n      md:w-1/3\n      flex flex-col\n      justify-center\n      items-center\n    "},[n("div",{staticClass:"px-10 py-5 flex flex-col justify-center items-start"},[n("label",{attrs:{for:"amount"}},[t._v("Amount (SAT)")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"\n          text-base\n          p-2\n          border border-gray-300\n          rounded-lg\n          focus:outline-none\n          focus:border-indigo-500\n          outline-none\n          mb-5\n        ",attrs:{type:"number",name:"amount",id:"amount",min:"10",placeholder:"min 10 satoshis"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),t._v(" "),n("label",{attrs:{for:"memo"}},[t._v("Memo")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.memo,expression:"memo"}],staticClass:"\n          text-base\n          p-2\n          border border-gray-300\n          rounded-lg\n          focus:outline-none\n          focus:border-indigo-500\n          outline-none\n        ",attrs:{type:"text",placeholder:"optional note",id:"memo",name:"memo"},domProps:{value:t.memo},on:{input:function(e){e.target.composing||(t.memo=e.target.value)}}})]),t._v(" "),t.error?n("p",{staticClass:"text-red-600 p-5 text-center"},[t._v(t._s(t.error))]):t._e(),t._v(" "),n("div",{staticClass:"flex justify-around items-center w-full p-5"},[t.loading?n("Spinner",{staticClass:"h-1 w-1"}):n("button",{staticClass:"bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white border-2 border-purple-600",on:{click:t.submit}},[t._v("\n        Generate Invoice\n      ")]),t._v(" "),n("button",{staticClass:"\n          hover:bg-red-600\n          hover:text-white\n          px-4\n          py-2\n          rounded-lg\n          text-red-600\n          border-2 border-red-600\n        ",on:{click:t.close}},[t._v("\n        Close\n      ")])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Spinner:n(125).default})},208:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"\n        bg-white\n        w-14\n        h-8\n        rounded-full\n        border-2 border-white\n        flex\n        items-center\n        justify-center\n      "},[e("img",{attrs:{src:n(180)}})])}],o={data:function(){return{lightning:!1,lightningQr:!1,payment_hash:null}},methods:{initInvoice:function(data){this.lightning=!1,this.lightningQr=data.payment_request,this.payment_hash=data.payment_hash}}},l=n(8),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"\n      m-3\n      border-2 border-purple-600\n      text-purple-600\n      px-3\n      py-2\n      rounded-lg\n      font-semibold\n      text-lg\n      focus:outline-none\n      focus:shadow-outline\n      hover:bg-purple-600\n      hover:border-purple-600\n      hover:text-white\n      shadow-lg\n      cursor-pointer\n      transition\n      ease-in\n      duration-300\n      flex flex-wrap\n      justify-center\n      items-center\n    ",on:{click:function(e){t.lightning=!0}}},[t._v("\n    Bitcoin Lightning Network "),t._m(0)]),t._v(" "),t.lightning?n("LightningCheckout",{on:{ok:t.initInvoice,close:function(e){t.lightning=!1}}}):t._e(),t._v(" "),t.lightningQr?n("PaymentModal",{key:"lightning",attrs:{address:t.lightningQr,currency:"Lightning",paymentHash:t.payment_hash},on:{close:function(e){t.lightningQr=!1}}}):t._e()],1)}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{LightningCheckout:n(203).default,PaymentModal:n(183).default})},261:function(t,e,n){"use strict";n.r(e);var r={head:function(){return{title:"UnFile - FAQ"}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    md:py-12\n    px-4\n    sm:px-6\n    lg:px-8\n    relative\n    flex\n    items-center\n    justify-center\n    flex-1\n  "},[n("div",{staticClass:"max-w-screen-lg w-full p-10 bg-white rounded-xl z-10 shadow-xl"},[n("h1",{staticClass:"text-center font-bold text-2xl"},[t._v("FAQ")]),t._v(" "),t._m(0),t._v(" "),n("hr",{staticClass:"w-full mt-5"}),t._v(" "),n("div",{staticClass:"flex flex-wrap justify-center items-center mt-5"},[n("h1",{staticClass:"text-xl text-center font-semibold text-gray-600 w-full mb-3"},[t._v("\n        If you like this project and want to see more features added, consider\n        tipping us using these methods\n      ")]),t._v(" "),n("BitcoinButton",{attrs:{address:"bc1qmu6yj6e49wjvf6qgdcf98tmm48f4dxxajxqjga"}}),t._v(" "),n("LightningInvoiceButton"),t._v(" "),n("MoneroButton",{attrs:{address:"898swoLtFZ3NqPAAVUpFwf9MVtnyy17MASvyhLstFYDmZ5C4rvSyGSiXvRny5uic2jRsFqWsdfmHGPmapVMhHizL2pWhyEb"}})],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",{staticClass:"mt-5"},[n("b",[t._v("Q:")]),t._v(" Where are my files saved?")]),t._v(" "),n("li",[n("b",[t._v("A:")]),t._v(" UnFile uses\n        "),n("a",{staticClass:"text-blue-500",attrs:{href:"https://web3.storage/",target:"_external"}},[t._v("Web3.Storage")]),t._v("\n        technology to store the files using\n        "),n("a",{staticClass:"text-blue-500",attrs:{href:"https://filecoin.io/",target:"_external"}},[t._v("FileCoin")]),t._v("\n        deals and distribute them using\n        "),n("a",{staticClass:"text-blue-500",attrs:{href:"https://ipfs.io/",target:"_external"}},[t._v("IPFS")]),t._v(". Your files are distributed on a decentralized network making it\n        censorship resistant. It's also "),n("b",[t._v("FREE")]),t._v(", opensource and unlimited.\n      ")]),t._v(" "),n("li",{staticClass:"mt-5"},[n("b",[t._v("Q:")]),t._v(" Can you open my files?")]),t._v(" "),n("li",[n("b",[t._v("A:")]),t._v(" No, Since the files get encrypted before they are uploaded,\n        there is no way to open them without your key.\n      ")]),t._v(" "),n("li",{staticClass:"mt-5"},[n("b",[t._v("Q:")]),t._v(" What kind of encryption is used to secure my files?\n      ")]),t._v(" "),n("li",[n("b",[t._v("A:")]),t._v(" UnFile is using\n        "),n("a",{staticClass:"text-blue-500",attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API",target:"_external"}},[t._v("WebCryptoAPI")]),t._v("\n        to encrypt the files, each file is encrypted locally in your browser\n        using AES-GCM algorithm.\n      ")]),t._v(" "),n("li",{staticClass:"mt-5"},[n("b",[t._v("Q:")]),t._v(" What information is visible and not encrypted?\n      ")]),t._v(" "),n("li",[n("b",[t._v("A:")]),t._v(" All file names are encrypted with the caption and any crypto\n        payment address. The only visible information will be files sizes as\n        well as the version of the uploader for future compatibility.\n      ")]),t._v(" "),n("li",{staticClass:"mt-5"},[n("b",[t._v("Q:")]),t._v(" What is the size limit for upload?")]),t._v(" "),n("li",[n("b",[t._v("A:")]),t._v(" Web3.Storage have a limit of 32 GiB for each content\n        archive, this means the total size of files in a single upload cannot\n        exceed that limit, This may be increased in the future. There is\n        another limit for individiual file size since browsers cannot encrypt\n        files larger than 2 GiB. If your file is larger than this you can\n        split it into multiple parts using a zip archive or similar methods.\n      ")]),t._v(" "),n("li",{staticClass:"mt-5"},[n("b",[t._v("Q:")]),t._v(" How does tipping work?")]),t._v(" "),n("li",[n("b",[t._v("A:")]),t._v(" You type the address of the wallet where you wish to receive\n        tips and a button will appear to the users with the QR code\n        automatically generated. We currently support "),n("b",[t._v("BTC")]),t._v(" and\n        "),n("b",[t._v("XMR")]),t._v(" as well as "),n("b",[t._v("LNUrl-pay")]),t._v(" protocol. Let us know if you\n        think more should be supported.\n      ")]),t._v(" "),n("li",{staticClass:"mt-5"},[n("b",[t._v("Q:")]),t._v(" I have a suggestion, where do I send it?")]),t._v(" "),n("li",[n("b",[t._v("A:")]),t._v(" Please write any feature requests or suggestion in our\n        "),n("a",{staticClass:"text-blue-500",attrs:{href:"https://github.com/unfile/unfile",target:"_external"}},[t._v("GitHub repository")])]),t._v(" "),n("li",{staticClass:"mt-5"},[n("b",[t._v("Q:")]),t._v(" Are there any restrictions on what to upload?\n      ")]),t._v(" "),n("li",[n("b",[t._v("A:")]),t._v(" There are none, UnFile is free to use and modify to suit\n        your needs. However, please don't use it in anything considered\n        immoral.\n      ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BitcoinButton:n(200).default,LightningInvoiceButton:n(208).default,MoneroButton:n(201).default})}}]);