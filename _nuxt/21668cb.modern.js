(window.webpackJsonp=window.webpackJsonp||[]).push([[23,7,8,10,14,15,17,19,21],{123:function(t,e,n){t.exports=n.p+"img/Lightning.795a69f.svg"},124:function(t,e,n){t.exports=n.p+"img/BTC.c9f3346.svg"},125:function(t,e,n){t.exports=n.p+"img/XMR.45ccc83.svg"},126:function(t,e,n){"use strict";n.r(e);var r=n(2),o={props:{address:"",currency:"",paymentHash:""},methods:{close(){this.$emit("close")},checkLightningPayment(){var t=new Headers;t.append("X-Api-Key","d97307f305d24dc2944fa397a21c6421");var e={method:"GET",headers:t,redirect:"follow"};fetch("https://lnbits.com/api/v1/payments/".concat(this.paymentHash),e).then((t=>{t.ok?t.json().then((t=>{console.log(t),t.paid&&(this.success=!0,clearInterval(this.checkLightningPayment))})).catch((t=>{console.log("error",t)})):console.log(t)})).catch((t=>{console.log(t)}))}},data:()=>({qrCode:null,success:!1}),mounted(){var t=this;return Object(r.a)((function*(){var e=n(135);t.qrCode=new e({width:300,height:300,margin:10,type:"svg",data:t.address,image:n(127)("./".concat(t.currency,".svg")),dotsOptions:{color:"#000000",type:"square"},backgroundOptions:{color:"#ffffff"}}),t.qrCode.append(t.$refs.canvas),t.paymentHash&&setInterval(t.checkLightningPayment,5e3)}))()}},l=n(4),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    modal\n    h-screen\n    w-full\n    fixed\n    left-0\n    top-0\n    flex\n    justify-center\n    items-center\n    bg-black bg-opacity-50\n    z-50\n    dark:bg-gray-500\n    dark:bg-opacity-70\n  "},[n("div",{staticClass:"\n      bg-white\n      rounded\n      shadow-lg\n      w-10/12\n      lg:w-1/3\n      flex flex-col\n      justify-center\n      items-center\n      dark:bg-gray-800\n    "},[t.success?n("div",{staticClass:"flex justify-center items-center flex-col"},[n("h1",{staticClass:"text-lg font-semibold text-center text-green-600 mt-5 dark:text-green-400"},[t._v("\n        Payment received, thank you.\n      ")]),t._v(" "),n("CheckIcon",{staticClass:"w-64 h-64 text-green-500 dark:text-green-300"})],1):n("div",{staticClass:"flex justify-center items-center flex-col"},[n("div",{ref:"canvas",staticClass:"px-10 py-5 cursor-pointer",attrs:{id:"canvas-"+t.currency},on:{click:function(e){return t.qrCode.download({name:"qr",extension:"png"})}}}),t._v(" "),n("div",{staticClass:"text-center select-all break-all px-10 text-xs dark:text-white"},[t._v("\n        "+t._s(t.address)+"\n      ")])]),t._v(" "),n("div",{staticClass:"flex justify-center items-center w-100 p-10"},[n("button",{staticClass:"\n          bg-blue-600\n          hover:bg-blue-700\n          px-3\n          py-1\n          px-2\n          rounded\n          text-white\n        ",on:{click:t.close}},[t._v("\n        Close\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CheckIcon:n(129).default})},127:function(t,e,n){var map={"./BTC.svg":124,"./Lightning.svg":123,"./XMR.svg":125,"./fluent_checkmark-lock-24-regular.svg":128};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=127},128:function(t,e,n){t.exports=n.p+"img/fluent_checkmark-lock-24-regular.c3d6dea.svg"},129:function(t,e,n){"use strict";n.r(e);var r={},o=n(4),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"check-circle",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"}})])}),[],!1,null,null,null);e.default=component.exports},130:function(t,e,n){var content=n(137);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("2fd4df42",content,!0,{sourceMap:!1})},131:function(t,e,n){var content=n(139);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("557b3900",content,!0,{sourceMap:!1})},132:function(t,e,n){"use strict";var r=n(41),o=n(25),l=n(6),c=n(77),d=n(133);r(r.P+r.R,"Promise",{finally:function(t){var e=c(this,o.Promise||l.Promise),n="function"==typeof t;return this.then(n?function(n){return d(e,t()).then((function(){return n}))}:t,n?function(n){return d(e,t()).then((function(){throw n}))}:t)}})},133:function(t,e,n){var r=n(5),o=n(11),l=n(134);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=l.f(t);return(0,n.resolve)(e),n.promise}},134:function(t,e,n){"use strict";var r=n(56);function o(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)}t.exports.f=function(t){return new o(t)}},136:function(t,e,n){"use strict";n(130)},137:function(t,e,n){var r=n(23)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.xmrbtn{\n  color:#f60;\n  border-color:#f60\n}\n.xmrbtn:hover{\n  background-color:#f60\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},138:function(t,e,n){"use strict";n(131)},139:function(t,e,n){var r=n(23)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.text-shadow{\n  text-shadow:0 0 3px #000\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},140:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"bg-white w-8 h-8 rounded-full border-2 border-white"},[e("img",{attrs:{src:n(124)}})])}],o={props:{address:{type:String},text:{type:String,default:"Bitcoin"}},data:()=>({showModal:!1})},l=n(4),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"\n      m-3\n      border-2 border-yellow-500\n      text-yellow-500\n      px-3\n      py-2\n      rounded-lg\n      font-semibold\n      text-lg\n      focus:outline-none\n      focus:shadow-outline\n      hover:bg-yellow-500\n      hover:border-yellow-500\n      hover:text-white\n      shadow-lg\n      cursor-pointer\n      transition\n      ease-in\n      duration-300\n      flex\n      justify-center\n      items-center\n    ",on:{click:function(e){t.showModal=!0}}},[t._v("\n    "+t._s(t.text)+" "),t._m(0)]),t._v(" "),t.showModal?n("PaymentModal",{key:"btc",attrs:{address:t.address,currency:"BTC"},on:{close:function(e){t.showModal=!1}}}):t._e()],1)}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{PaymentModal:n(126).default})},141:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"bg-white w-8 h-8 rounded-full border-2 border-white"},[e("img",{attrs:{src:n(125)}})])}],o={props:{address:{type:String},text:{type:String,default:"Monero"}},data:()=>({showModal:!1})},l=(n(136),n(4)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"\n      m-3\n      border-2\n      px-3\n      py-2\n      rounded-lg\n      font-semibold\n      text-lg\n      focus:outline-none\n      focus:shadow-outline\n      hover:text-white\n      shadow-lg\n      cursor-pointer\n      transition\n      ease-in\n      duration-300\n      flex\n      justify-center\n      items-center\n      xmrbtn\n    ",on:{click:function(e){t.showModal=!0}}},[t._v("\n    "+t._s(t.text)+" "),t._m(0)]),t._v(" "),t.showModal?n("PaymentModal",{key:"xmr",attrs:{address:t.address,currency:"XMR"},on:{close:function(e){t.showModal=!1}}}):t._e()],1)}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{PaymentModal:n(126).default})},142:function(t,e,n){"use strict";n.r(e);var r={props:{pct:{type:Number,default:0}}},o=(n(138),n(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    w-full\n    bg-gray-100\n    rounded-full\n    overflow-hidden\n    shadow-inner\n    h-6\n    dark:bg-gray-600\n  "},[n("div",{staticClass:"bg-blue-400 text-xs leading-none py-3 text-center",style:"width: "+t.pct+"%"}),t._v(" "),n("div",{staticClass:"text-center w-full -mt-6 font-semibold text-white text-shadow"},[t._v("\n    "+t._s(t.pct)+"%\n  ")])])}),[],!1,null,null,null);e.default=component.exports},144:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"e",(function(){return l})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return d})),n.d(e,"f",(function(){return f}));var r=Number("34357641216"),o=Number("4244635648");function l(t,path){return"https://".concat(t,".ipfs.dweb.link/").concat(encodeURIComponent(path))}function c(t,e){return new File([JSON.stringify(e)],t,{type:"application/json"})}function d(t){var e,n=t;return t>1e9?(e="GB",n/=1e9):t>1e6?(e="MB",n/=1e6):t>1e3?(e="KB",n/=1e3):e="Bytes","".concat(n.toFixed(2).toLocaleString()," ").concat(e)}function f(t,e){var link=document.createElement("a");link.href=URL.createObjectURL(t),link.download=e||t.name,link.click()}},145:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return h}));var r=n(2),o={_pattern:/[a-zA-Z0-9\_\-]/,_getRandomByte:function(){if(window.crypto&&window.crypto.getRandomValues){var t=new Uint8Array(1);return window.crypto.getRandomValues(t),t[0]}if(window.msCrypto&&window.msCrypto.getRandomValues){t=new Uint8Array(1);return window.msCrypto.getRandomValues(t),t[0]}return Math.floor(256*Math.random())},generate:function(t){return Array.apply(null,{length:t}).map((function(){for(var t;;)if(t=String.fromCharCode(this._getRandomByte()),this._pattern.test(t))return t}),this).join("")}},l=t=>window.crypto.subtle.importKey("raw",new TextEncoder("utf-8").encode(t),"PBKDF2",!1,["deriveKey"]),c=(t,e,n)=>window.crypto.subtle.deriveKey({name:"PBKDF2",salt:e,iterations:25e4,hash:"SHA-256"},t,{name:"AES-GCM",length:256},!1,n);function d(t,e,n){return f.apply(this,arguments)}function f(){return(f=Object(r.a)((function*(t,e,n){var r=window.crypto.getRandomValues(new Uint8Array(16)),d=window.crypto.getRandomValues(new Uint8Array(12)),f=yield l(e),h=yield c(f,r,["encrypt"]),data=yield t.arrayBuffer(),v=yield window.crypto.subtle.encrypt({name:"AES-GCM",iv:d},h,data),y=new Uint8Array(v),m=new Uint8Array(r.byteLength+d.byteLength+y.byteLength);m.set(r,0),m.set(d,r.byteLength),m.set(y,r.byteLength+d.byteLength);var x=n?t.name:o.generate(10);return{file:new File([m],x+".enc",{type:t.type}),originalName:t.fullPath||t.name}}))).apply(this,arguments)}function h(t,e){return v.apply(this,arguments)}function v(){return(v=Object(r.a)((function*(t,e){var n=yield t.arrayBuffer(),r=n.slice(0,16),o=n.slice(16,28),data=n.slice(28),d=yield l(e),f=yield c(d,r,["decrypt"]),h=yield window.crypto.subtle.decrypt({name:"AES-GCM",iv:o},f,data);return new Blob([h])}))).apply(this,arguments)}},146:function(t,e,n){"use strict";n.r(e);var r={props:{message:{type:String},title:{type:String,default:""}},methods:{okClicked(){this.$emit("ok")},close(){this.$emit("close")}}},o=n(4),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    modal\n    h-screen\n    w-full\n    fixed\n    left-0\n    top-0\n    flex\n    justify-center\n    items-center\n    bg-black bg-opacity-50\n    z-50\n    dark:bg-gray-500 dark:bg-opacity-70\n  "},[n("div",{staticClass:"bg-white rounded shadow-lg w-10/12 md:w-1/3 dark:bg-gray-800"},[t.title?n("div",{staticClass:"px-4 py-2 flex justify-between items-center"},[n("h3",{staticClass:"font-semibold text-lg dark:text-white"},[t._v(t._s(t.title))]),t._v(" "),n("button",{staticClass:"text-black close-modal dark:text-white",on:{click:t.close}},[t._v("✗")])]):t._e(),t._v(" "),n("div",{staticClass:"px-10 py-5 break-words dark:text-white"},[t._v("\n      "+t._s(t.message)+"\n    ")]),t._v(" "),n("div",{staticClass:"flex justify-end items-center w-100 px-10 pb-5"},[n("button",{staticClass:"bg-blue-600 hover:bg-blue-700 px-3 py-1 px-2 rounded text-white darl:bg-blue-500",on:{click:t.okClicked}},[t._v("\n        Ok\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},148:function(t,e,n){"use strict";n.r(e);var r={},o=n(4),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"lock",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"}})])}),[],!1,null,null,null);e.default=component.exports},150:function(t,e,n){"use strict";n.d(e,"d",(function(){return d})),n.d(e,"e",(function(){return v})),n.d(e,"b",(function(){return m})),n.d(e,"a",(function(){return w})),n.d(e,"c",(function(){return C}));var r=n(2),o=(n(12),n(16),n(151)),l=n(144),c=n(145);function d(t){return f.apply(this,arguments)}function f(){return(f=Object(r.a)((function*(t){var e="https://dweb.link/api/v0/ls?arg=".concat(encodeURIComponent(t)),n=yield fetch(e),data=yield n.json(),r=[];return data.Objects[0].Links.forEach((t=>{var e=Object.fromEntries(Object.entries(t).map((t=>{var[e,n]=t;return[e.toLowerCase(),n]})));r.push(e)})),r}))).apply(this,arguments)}function h(){return new o.a({token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDZFMTE3RDc3YjYzNUFkMzU3OURFQUYxODUyZjE1NjBkYUFDZGE1NjIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2MzA4MjI5MjQ3MzAsIm5hbWUiOiJEZUJveCJ9.J8JNPVrd94C0MSAiyavSbjKRQAYFEJQDkq36cwjNUZU"})}function v(t,e,n,r,o,l){return y.apply(this,arguments)}function y(){return(y=Object(r.a)((function*(t,e,caption,n,r,o){var d=c.a.generate(20),f={files:{},caption:caption,addresses:n},v=[];for(var y of Object.keys(t))f.files[t[y].file.name]=t[y].originalName,v.push(t[y].file);var m=Object(l.d)("metadata.json",f),x=new File([String(r)],"VERSION",{type:"text/plain"});v.push(x);var w=yield Object(c.c)(m,e,!0);v.push(w.file);var _=h();console.log("> 🤖 calculating content ID for files");var C=v.map((t=>t.size)).reduce(((a,b)=>a+b),0),k=0;return yield _.put(v,{name:d,onRootCidReady:t=>{console.log("> 🔑 locally calculated Content ID: ".concat(t," ")),console.log("> 📡 sending files to web3.storage ")},onStoredChunk:t=>{console.log("> 🛰 sent ".concat(t.toLocaleString()," bytes to web3.storage"));var e=100*(k+=t)/C;console.log("Uploading... ".concat(e.toFixed(2),"% complete")),o(Number(e.toFixed(1)))}})}))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=Object(r.a)((function*(t){var e=Object(l.e)(t,"metadata.json.enc"),n=yield fetch(e);if(!n.ok)throw new Error("error fetching image metadata: [".concat(n.status,"] ").concat(n.statusText));return yield n.blob()}))).apply(this,arguments)}function w(t){return _.apply(this,arguments)}function _(){return(_=Object(r.a)((function*(t){var e=h(),n=yield e.status(t);return console.log(n),n}))).apply(this,arguments)}function C(t,e,n,r){return k.apply(this,arguments)}function k(){return(k=Object(r.a)((function*(t,e,n,r){var o=Object(l.e)(t,e),c=yield fetch(o),d=c.body.getReader(),f=c.headers.get("Content-Length");console.log(f);for(var h=0,v=[];;){var{done:y,value:m}=yield d.read();if(y)break;if(v.push(m),h+=m.length,n)n(r,h/f*100)}var x=new Uint8Array(h),w=0;for(var _ of v)x.set(_,w),w+=_.length;return new Blob([x])}))).apply(this,arguments)}},157:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"\n        bg-white\n        w-14\n        h-8\n        rounded-full\n        border-2 border-white\n        flex\n        items-center\n        justify-center\n      "},[e("img",{attrs:{src:n(123)}})])}],o={props:{address:{type:String},text:{type:String,default:"Bitcoin Lightning Network"}},data:()=>({showModal:!1})},l=n(4),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"\n      m-3\n      border-2 border-purple-600\n      text-purple-600\n      px-3\n      py-2\n      rounded-lg\n      font-semibold\n      text-lg\n      focus:outline-none\n      focus:shadow-outline\n      hover:bg-purple-600\n      hover:border-purple-600\n      hover:text-white\n      shadow-lg\n      cursor-pointer\n      transition\n      ease-in\n      duration-300\n      flex flex-wrap\n      justify-center\n      items-center\n    ",on:{click:function(e){t.showModal=!0}}},[t._v("\n    "+t._s(t.text)+" "),t._m(0)]),t._v(" "),t.showModal?n("PaymentModal",{attrs:{address:t.address,currency:"Lightning"},on:{close:function(e){t.showModal=!1}}}):t._e()],1)}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{PaymentModal:n(126).default})},190:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(132),n(144)),l=n(150),c=n(145),d={data(){return{status:null,metadata:null,files:[],dKey:this.$route.query.key,showQR:!1,error:"",errorModal:"",loadingDetails:!1,saveText:"Save Link in My Files"}},mounted(){var t=this;return Object(r.a)((function*(){try{t.status=yield Object(l.a)(t.$route.params.cid),yield t.getFilesList()}catch(e){console.error(e),t.error='Unable to get status for CID: <br><span class="break-all text-red-600">'.concat(t.$route.params.cid,"</span><br> please make sure your url is correct.")}t.dKey&&t.getDetails()}))()},methods:{getDetails(){var t=this;return Object(r.a)((function*(){var e;t.loadingDetails=!0;try{e=yield Object(l.b)(t.$route.params.cid)}catch(e){t.error="Could not find metadata file."}try{yield t.decryptMetadata(e)}catch(e){t.errorModal="Unable to decrypt, please check if your key is correct."}t.loadingDetails=!1}))()},decryptMetadata(t){var e=this;return Object(r.a)((function*(){var n=yield Object(c.b)(t,e.dKey);console.log(n);var text=yield n.text();console.log(text),e.metadata=JSON.parse(text)}))()},getFilesList(){var t=this;return Object(r.a)((function*(){var e=yield Object(l.d)(t.$route.params.cid);t.files=e.filter((t=>!("metadata.json.enc"==t.name||"VERSION"==t.name)))}))()},resave(t,e){Object(o.f)(t,e)},downloadFile(t){this.$set(this.files[t],"progress",0),Object(l.c)(this.$route.params.cid,this.files[t].name,this.updateProgress,t).then((e=>{this.$set(this.files[t],"decrypting",!0),console.log(e),Object(c.b)(e,this.dKey).then((e=>{this.$set(this.files[t],"decrypted",e),Object(o.f)(e,this.metadata.files[this.files[t].name])})).finally((()=>{this.$set(this.files[t],"decrypting",!1)}))}))},updateProgress(t,progress){this.$set(this.files[t],"progress",Number(progress.toFixed(2)))},saveLink(){var t=localStorage.getItem("unfile-uploads");(t=t&&JSON.parse(t)||[]).unshift({caption:this.metadata.caption||"",link:window.location.pathname+"?key=".concat(this.dKey)}),localStorage.setItem("unfile-uploads",JSON.stringify(t)),this.saveText="Link Saved!"}},filters:{dateTime:t=>new Date(t).toLocaleString(),formatSize:t=>Object(o.c)(t)}},f=n(4),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    md:py-12\n    px-4\n    sm:px-6\n    lg:px-8\n    relative\n    flex\n    items-center\n    justify-center\n    flex-1\n  "},[n("div",{staticClass:"max-w-screen-lg w-full p-10 bg-white rounded-xl z-10 shadow-xl dark:bg-gray-800"},[t.error?n("div",{staticClass:"text-center text-xl break-words",domProps:{innerHTML:t._s(t.error)}}):n("div",{staticClass:"flex flex-grow flex-wrap justify-around items-center"},[n("transition",{attrs:{"enter-active-class":"transition-all delay-1000 duration-1000 ease","leave-active-class":"transition-all duration-1000 ease","enter-class":"opacity-0 transform scale-0","enter-to-class":"opacity-100 transform scale-100","leave-class":"opacity-100 transform scale-100","leave-to-class":"opacity-0 transform scale-0"}},[t.status&&t.metadata?n("div",{staticClass:"w-full"},[n("div",{staticClass:"\n              sm:px-4\n              md:px-16\n              lg:px-24\n              w-full\n              mb-4\n              flex flex-wrap\n              items-center\n              justify-between\n            "},[n("p",{staticClass:"\n                text-green-500\n                font-semibold\n                text-xl\n                flex\n                items-center\n                justify-center\n                dark:text-green-300\n              "},[t._v("\n              Key accepted "),n("CheckIcon",{staticClass:"w-5 h-5"})],1),t._v(" "),n("button",{staticClass:"\n                flex\n                justify-center\n                cursor-pointer\n                py-1\n                px-2\n                rounded-lg\n                bg-blue-500\n                text-gray-100\n                focus:outline-none\n                focus:shadow-outline\n                hover:bg-blue-600\n                shadow-lg\n                cursor-pointer\n                transition\n                ease-in\n                duration-300\n                text-sm\n              ",attrs:{disabled:"Link Saved!"==t.saveText},on:{click:t.saveLink}},[t._v("\n              "+t._s(t.saveText)+"\n            ")])]),t._v(" "),n("hr",{staticClass:"w-full dark:border-gray-600"})]):t.status?n("form",{staticClass:"sm:px-4 md:px-16 lg:px-24 w-full space-y-2 mb-4",on:{submit:function(e){return e.preventDefault(),t.getDetails.apply(null,arguments)}}},[n("label",{staticClass:"text-sm font-bold text-gray-500 tracking-wide dark:text-gray-200"},[t._v("Enter Decryption Key")]),t._v(" "),n("div",{staticClass:"flex items-center space-x-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.dKey,expression:"dKey"}],staticClass:"\n                text-base\n                p-2\n                border border-gray-300\n                rounded-lg\n                focus:outline-none\n                focus:border-indigo-500\n                outline-none\n                w-full\n                dark:border-gray-500\n                dark:bg-gray-800\n              ",attrs:{type:"text",required:"",disabled:t.files.length<1},domProps:{value:t.dKey},on:{input:function(e){e.target.composing||(t.dKey=e.target.value)}}}),t._v(" "),n("div",{staticClass:"flex-shrink-0"},[t.loadingDetails?n("Spinner",{staticClass:"h-1 w-1"}):n("button",{staticClass:"\n                  w-full\n                  flex\n                  justify-center\n                  tracking-wide\n                  font-semibold\n                  cursor-pointer\n                  py-2\n                  px-4\n                  rounded-lg\n                ",class:t.files.length<1?"bg-gray-100 text-gray-400 cursor-not-allowed\tshadow dark:bg-gray-600":"bg-blue-500 text-gray-100 focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300",attrs:{type:"submit",disabled:t.files.length<1}},[t._v("\n                🔑Verify\n              ")])],1)])]):t._e()]),t._v(" "),n("transition",{attrs:{"enter-active-class":"transition-all delay-1000 duration-1000 ease","leave-active-class":"transition-all duration-1000 ease","enter-class":"opacity-0 transform scale-0","enter-to-class":"opacity-100 transform scale-100","leave-class":"opacity-100 transform scale-100","leave-to-class":"opacity-0 transform scale-0"}},[t.status?n("div",{staticClass:"flex flex-col items-center self-start dark:text-white"},[n("table",{staticClass:"table-auto mt-5"},[n("tbody",[n("tr",{directives:[{name:"show",rawName:"v-show",value:t.files.length>0,expression:"files.length > 0"}]},[n("td",{staticClass:"text-right px-5 py-1"},[t._v("Files")]),t._v(" "),n("td",{staticClass:"text-left px-5 py-1"},[t._v("\n                  "+t._s(t.files.length.toLocaleString())+"\n                ")])]),t._v(" "),n("tr",[n("td",{staticClass:"text-right px-5 py-1"},[t._v("Total Size")]),t._v(" "),t.status.dagSize?n("td",{staticClass:"text-left px-5 py-1"},[t._v("\n                  "+t._s(t._f("formatSize")(t.status.dagSize))+"\n                ")]):n("td",{staticClass:"text-left px-5 py-1"},[t._v("N/A")])]),t._v(" "),n("tr",[n("td",{staticClass:"text-right px-5 py-1"},[t._v("Pins")]),t._v(" "),n("td",{staticClass:"text-left px-5 py-1"},[n("div",{staticClass:"\n                      rounded-full\n                      h-6\n                      w-6\n                      text-white\n                      font-bold\n                      text-center\n                      min-w-min\n                      px-1\n                    ",class:t.status.pins.length<1?"bg-red-500":"bg-green-400"},[t._v("\n                    "+t._s(t.status.pins.length)+"\n                  ")])])]),t._v(" "),n("tr",[n("td",{staticClass:"text-right px-5 py-1"},[t._v("Deals")]),t._v(" "),n("td",{staticClass:"text-left px-5 py-1"},[n("div",{staticClass:"\n                      rounded-full\n                      h-6\n                      w-6\n                      text-white\n                      font-bold\n                      text-center\n                      min-w-min\n                      px-1\n                    ",class:t.status.deals.length<1?"bg-red-500":"bg-green-400"},[t._v("\n                    "+t._s(t.status.deals.length)+"\n                  ")])])]),t._v(" "),n("tr",[n("td",{staticClass:"text-right px-5 py-1"},[t._v("Created at")]),t._v(" "),n("td",{staticClass:"text-left px-5 py-1"},[t._v("\n                  "+t._s(t._f("dateTime")(t.status.created))+"\n                ")])])])]),t._v(" "),t.metadata&&t.metadata.addresses.length>0?n("div",{staticClass:"flex flex-col justify-center items-center my-5"},t._l(t.metadata.addresses,(function(address){return n("div",{key:address.currency,staticClass:"flex justify-center items-center w-full"},["BTC"==address.currency?n("BitcoinButton",{attrs:{address:address.address,text:"Tip Uploader Bitcoin"}}):"Lightning"==address.currency?n("LNUrlButton",{attrs:{address:address.address,text:"Tip Uploader via Lightning"}}):"XMR"==address.currency?n("MoneroButton",{attrs:{address:address.address,text:"Tip Uploader Monero"}}):t._e()],1)})),0):t._e()]):t._e()]),t._v(" "),n("transition",{attrs:{"enter-active-class":"transition-all delay-1000 duration-1000 ease","leave-active-class":"transition-all duration-1000 ease","enter-class":"opacity-0 transform scale-0","enter-to-class":"opacity-100 transform scale-100","leave-class":"opacity-100 transform scale-100","leave-to-class":"opacity-0 transform scale-0"}},[t.status?t._e():n("div",{staticClass:"flex flex-col justify-center items-center"},[n("h1",{staticClass:"text-center mb-3 text-lg text-gray-600 font-semibold dark:text-gray-200"},[t._v("\n            Finding your files..\n          ")]),t._v(" "),n("Spinner")],1)]),t._v(" "),n("transition",{attrs:{"enter-active-class":"transition-all delay-1000 duration-1000 ease","leave-active-class":"transition-all duration-1000 ease","enter-class":"opacity-0 transform scale-0","enter-to-class":"opacity-100 transform scale-100","leave-class":"opacity-100 transform scale-100","leave-to-class":"opacity-0 transform scale-0"}},[t.files.length>0?n("div",{staticClass:"self-start mt-5",class:{"flex-1":t.metadata}},[t.metadata?n("h1",{staticClass:"text-lg font-bold text-center text-gray-600 mb-3 dark:text-gray-200"},[t._v("\n            "+t._s(t.metadata.caption)+"\n          ")]):t._e(),t._v(" "),t._l(t.files,(function(e,i){return n("div",{key:i,staticClass:"flex flex-col"},[n("div",{staticClass:"flex items-center flex-wrap"},[n("div",{staticClass:"flex flex-col flex-1 mx-3"},[n("h1",{staticClass:"w-full break-all font-semibold text-sm dark:text-white"},[t._v("\n                  "+t._s(t.metadata&&t.metadata.files?t.metadata.files[e.name]:e.name)+"\n                ")]),t._v(" "),n("p",{staticClass:"text-sm whitespace-nowrap text-gray-500 dark:text-gray-300"},[t._v("\n                  "+t._s(t._f("formatSize")(e.size))+"\n                ")])]),t._v(" "),n("div",[t.metadata?t.metadata&&null==e.progress?n("button",{staticClass:"\n                    w-full\n                    bg-blue-500\n                    text-gray-100\n                    tracking-wide\n                    font-semibold\n                    focus:outline-none\n                    focus:shadow-outline\n                    hover:bg-blue-600\n                    shadow-lg\n                    cursor-pointer\n                    transition\n                    ease-in\n                    duration-300\n                    py-1\n                    px-2\n                    rounded-md\n                    text-xs\n                  ",on:{click:function(e){return t.downloadFile(i)}}},[t._v("\n                  Download\n                ")]):t._e():n("SolidLockIcon",{staticClass:"h-6 w-6 text-gray-400 min-w-min dark:text-gray-200"})],1)]),t._v(" "),n("div",{staticClass:"flex items-center"},[n("ProgressBar",{directives:[{name:"show",rawName:"v-show",value:null!=e.progress,expression:"f.progress != null"}],staticClass:"mx-3",attrs:{pct:e.progress}}),100==e.progress&&Boolean(e.decrypted)?n("button",{staticClass:"\n                  text-blue-500\n                  tracking-wide\n                  font-semibold\n                  border-2 border-blue-500\n                  hover:bg-blue-500\n                  hover:text-white\n                  cursor-pointer\n                  py-1\n                  px-2\n                  rounded-md\n                  text-xs\n                  whitespace-nowrap\n                ",on:{click:function(n){return t.resave(e.decrypted,t.metadata.files[e.name])}}},[t._v("\n                Re-Save\n              ")]):t.metadata&&Boolean(e.decrypting)?n("Spinner",{staticClass:"h-1 w-1"}):t._e()],1)])}))],2):t.status&&t.files.length<1?n("Spinner",{staticClass:"flex-1"}):t._e()],1)],1),t._v(" "),n("Modal",{directives:[{name:"show",rawName:"v-show",value:t.errorModal,expression:"errorModal"}],attrs:{message:t.errorModal},on:{ok:function(e){t.errorModal=""}}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CheckIcon:n(129).default,Spinner:n(76).default,BitcoinButton:n(140).default,LNUrlButton:n(157).default,MoneroButton:n(141).default,SolidLockIcon:n(148).default,ProgressBar:n(142).default,Modal:n(146).default})}}]);