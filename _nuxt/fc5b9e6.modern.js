(window.webpackJsonp=window.webpackJsonp||[]).push([[12,8,11,17],{123:function(n,e,t){n.exports=t.p+"img/Lightning.795a69f.svg"},124:function(n,e,t){n.exports=t.p+"img/BTC.c9f3346.svg"},125:function(n,e,t){n.exports=t.p+"img/XMR.45ccc83.svg"},126:function(n,e,t){"use strict";t.r(e);var o=t(2),r={props:{address:"",currency:"",paymentHash:""},methods:{close(){this.$emit("close")},checkLightningPayment(){var n=new Headers;n.append("X-Api-Key","d97307f305d24dc2944fa397a21c6421");var e={method:"GET",headers:n,redirect:"follow"};fetch("https://lnbits.com/api/v1/payments/".concat(this.paymentHash),e).then((n=>{n.ok?n.json().then((n=>{console.log(n),n.paid&&(this.success=!0,clearInterval(this.checkLightningPayment))})).catch((n=>{console.log("error",n)})):console.log(n)})).catch((n=>{console.log(n)}))}},data:()=>({qrCode:null,success:!1}),mounted(){var n=this;return Object(o.a)((function*(){var e=t(135);n.qrCode=new e({width:300,height:300,margin:10,type:"svg",data:n.address,image:t(127)("./".concat(n.currency,".svg")),dotsOptions:{color:"#000000",type:"square"},backgroundOptions:{color:"#ffffff"}}),n.qrCode.append(n.$refs.canvas),n.paymentHash&&setInterval(n.checkLightningPayment,5e3)}))()}},c=t(4),component=Object(c.a)(r,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"\n    modal\n    h-screen\n    w-full\n    fixed\n    left-0\n    top-0\n    flex\n    justify-center\n    items-center\n    bg-black bg-opacity-50\n    z-1000\n  "},[t("div",{staticClass:"\n      bg-white\n      rounded\n      shadow-lg\n      w-10/12\n      lg:w-1/3\n      flex flex-col\n      justify-center\n      items-center\n    "},[n.success?t("div",{staticClass:"flex justify-center items-center flex-col"},[t("h1",{staticClass:"text-lg font-semibold text-center text-green-600 mt-5"},[n._v("\n        Payment received, thank you.\n      ")]),n._v(" "),t("CheckIcon",{staticClass:"w-64 h-64 text-green-500"})],1):t("div",{staticClass:"flex justify-center items-center flex-col"},[t("div",{ref:"canvas",staticClass:"px-10 py-5 cursor-pointer",attrs:{id:"canvas-"+n.currency},on:{click:function(e){return n.qrCode.download({name:"qr",extension:"png"})}}}),n._v(" "),t("div",{staticClass:"text-center select-all break-all px-10 text-xs"},[n._v("\n        "+n._s(n.address)+"\n      ")])]),n._v(" "),t("div",{staticClass:"flex justify-center items-center w-100 p-10"},[t("button",{staticClass:"\n          bg-blue-600\n          hover:bg-blue-700\n          px-3\n          py-1\n          px-2\n          rounded\n          text-white\n        ",on:{click:n.close}},[n._v("\n        Close\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CheckIcon:t(129).default})},127:function(n,e,t){var map={"./BTC.svg":124,"./Lightning.svg":123,"./XMR.svg":125,"./fluent_checkmark-lock-24-regular.svg":128};function o(n){var e=r(n);return t(e)}function r(n){if(!t.o(map,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return map[n]}o.keys=function(){return Object.keys(map)},o.resolve=r,n.exports=o,o.id=127},128:function(n,e,t){n.exports=t.p+"img/fluent_checkmark-lock-24-regular.c3d6dea.svg"},129:function(n,e,t){"use strict";t.r(e);var o={},r=t(4),component=Object(r.a)(o,(function(){var n=this.$createElement,e=this._self._c||n;return e("svg",{attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"check-circle",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"}})])}),[],!1,null,null,null);e.default=component.exports},132:function(n,e,t){"use strict";var o=t(41),r=t(25),c=t(6),l=t(77),d=t(133);o(o.P+o.R,"Promise",{finally:function(n){var e=l(this,r.Promise||c.Promise),t="function"==typeof n;return this.then(t?function(t){return d(e,n()).then((function(){return t}))}:n,t?function(t){return d(e,n()).then((function(){throw t}))}:n)}})},133:function(n,e,t){var o=t(5),r=t(11),c=t(134);n.exports=function(n,e){if(o(n),r(e)&&e.constructor===n)return e;var t=c.f(n);return(0,t.resolve)(e),t.promise}},134:function(n,e,t){"use strict";var o=t(56);function r(n){var e,t;this.promise=new n((function(n,o){if(void 0!==e||void 0!==t)throw TypeError("Bad Promise constructor");e=n,t=o})),this.resolve=o(e),this.reject=o(t)}n.exports.f=function(n){return new r(n)}},143:function(n,e,t){"use strict";t.r(e);t(132);var o={data:()=>({loading:!1,memo:"",amount:null,error:""}),methods:{submit(){if(this.error="",!Number(this.amount)||Number(this.amount)<10)this.error="Amount cannot be less than 10 satoshis";else{this.loading=!0;var n=new Headers;n.append("X-Api-Key","d97307f305d24dc2944fa397a21c6421"),n.append("Content-Type","application/json");var e=JSON.stringify({out:!1,amount:Number(this.amount),memo:this.memo||"UnFile.io Donation"});fetch("https://lnbits.com/api/v1/payments",{method:"POST",headers:n,body:e,redirect:"follow"}).then((n=>{n.ok?n.json().then((n=>{console.log(n),n&&this.$emit("ok",n)})).catch((n=>{console.log("error",n),this.error="".concat(n)})).finally((()=>{this.loading=!1})):n.text().then((n=>{this.error="".concat(n),this.loading=!1}))})).catch((n=>{console.log(n),this.error="".concat(n),this.loading=!1}))}},close(){this.$emit("close")}}},r=t(4),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"\n    modal\n    h-screen\n    w-full\n    fixed\n    left-0\n    top-0\n    flex\n    justify-center\n    items-center\n    bg-black bg-opacity-50\n    z-1000\n  "},[t("div",{staticClass:"\n      bg-white\n      rounded\n      shadow-lg\n      w-10/12\n      md:w-1/3\n      flex flex-col\n      justify-center\n      items-center\n    "},[t("div",{staticClass:"px-10 py-5 flex flex-col justify-center items-start"},[t("label",{attrs:{for:"amount"}},[n._v("Amount (SAT)")]),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.amount,expression:"amount"}],staticClass:"\n          text-base\n          p-2\n          border border-gray-300\n          rounded-lg\n          focus:outline-none\n          focus:border-indigo-500\n          outline-none\n          mb-5\n        ",attrs:{type:"number",name:"amount",id:"amount",min:"10",placeholder:"min 10 satoshis"},domProps:{value:n.amount},on:{input:function(e){e.target.composing||(n.amount=e.target.value)}}}),n._v(" "),t("label",{attrs:{for:"memo"}},[n._v("Memo")]),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.memo,expression:"memo"}],staticClass:"\n          text-base\n          p-2\n          border border-gray-300\n          rounded-lg\n          focus:outline-none\n          focus:border-indigo-500\n          outline-none\n        ",attrs:{type:"text",placeholder:"optional note",id:"memo",name:"memo"},domProps:{value:n.memo},on:{input:function(e){e.target.composing||(n.memo=e.target.value)}}})]),n._v(" "),n.error?t("p",{staticClass:"text-red-600 p-5 text-center"},[n._v(n._s(n.error))]):n._e(),n._v(" "),t("div",{staticClass:"flex justify-around items-center w-full p-5"},[n.loading?t("Spinner",{staticClass:"h-1 w-1"}):t("button",{staticClass:"bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white border-2 border-purple-600",on:{click:n.submit}},[n._v("\n        Generate Invoice\n      ")]),n._v(" "),t("button",{staticClass:"\n          hover:bg-red-600\n          hover:text-white\n          px-4\n          py-2\n          rounded-lg\n          text-red-600\n          border-2 border-red-600\n        ",on:{click:n.close}},[n._v("\n        Close\n      ")])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Spinner:t(76).default})},149:function(n,e,t){"use strict";t.r(e);var o=[function(){var n=this.$createElement,e=this._self._c||n;return e("span",{staticClass:"\n        bg-white\n        w-14\n        h-8\n        rounded-full\n        border-2 border-white\n        flex\n        items-center\n        justify-center\n      "},[e("img",{attrs:{src:t(123)}})])}],r={data:()=>({lightning:!1,lightningQr:!1,payment_hash:null}),methods:{initInvoice(data){this.lightning=!1,this.lightningQr=data.payment_request,this.payment_hash=data.payment_hash}}},c=t(4),component=Object(c.a)(r,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("button",{staticClass:"\n      m-3\n      border-2 border-purple-600\n      text-purple-600\n      px-3\n      py-2\n      rounded-lg\n      font-semibold\n      text-lg\n      focus:outline-none\n      focus:shadow-outline\n      hover:bg-purple-600\n      hover:border-purple-600\n      hover:text-white\n      shadow-lg\n      cursor-pointer\n      transition\n      ease-in\n      duration-300\n      flex flex-wrap\n      justify-center\n      items-center\n    ",on:{click:function(e){n.lightning=!0}}},[n._v("\n    Bitcoin Lightning Network "),n._m(0)]),n._v(" "),n.lightning?t("LightningCheckout",{on:{ok:n.initInvoice,close:function(e){n.lightning=!1}}}):n._e(),n._v(" "),n.lightningQr?t("PaymentModal",{key:"lightning",attrs:{address:n.lightningQr,currency:"Lightning",paymentHash:n.payment_hash},on:{close:function(e){n.lightningQr=!1}}}):n._e()],1)}),o,!1,null,null,null);e.default=component.exports;installComponents(component,{LightningCheckout:t(143).default,PaymentModal:t(126).default})}}]);