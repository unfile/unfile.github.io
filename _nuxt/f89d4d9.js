(window.webpackJsonp=window.webpackJsonp||[]).push([[17,8],{225:function(e,n,t){e.exports=t.p+"img/Lightning.795a69f.svg"},227:function(e,n,t){e.exports=t.p+"img/BTC.c9f3346.svg"},228:function(e,n,t){e.exports=t.p+"img/XMR.45ccc83.svg"},229:function(e,n,t){"use strict";t.r(n);var c=t(6),r=(t(30),t(12),t(58),{props:{address:"",currency:"",paymentHash:""},methods:{close:function(){this.$emit("close")},checkLightningPayment:function(){var e=this,n=new Headers;n.append("X-Api-Key","d97307f305d24dc2944fa397a21c6421");var t={method:"GET",headers:n,redirect:"follow"};fetch("https://lnbits.com/api/v1/payments/".concat(this.paymentHash),t).then((function(n){n.ok?n.json().then((function(n){console.log(n),n.paid&&(e.success=!0,clearInterval(e.checkLightningPayment))})).catch((function(e){console.log("error",e)})):console.log(n)})).catch((function(e){console.log(e)}))}},data:function(){return{qrCode:null,success:!1}},mounted:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c=t(272),e.qrCode=new c({width:300,height:300,margin:10,type:"svg",data:e.address,image:t(231)("./".concat(e.currency,".svg")),dotsOptions:{color:"#000000",type:"square"},backgroundOptions:{color:"#ffffff"}}),e.qrCode.append(e.$refs.canvas),e.paymentHash&&setInterval(e.checkLightningPayment,5e3);case 4:case"end":return n.stop()}}),n)})))()}}),o=t(13),component=Object(o.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"\n    modal\n    h-screen\n    w-full\n    fixed\n    left-0\n    top-0\n    flex\n    justify-center\n    items-center\n    bg-black bg-opacity-50\n    z-1000\n  "},[t("div",{staticClass:"\n      bg-white\n      rounded\n      shadow-lg\n      w-10/12\n      lg:w-1/3\n      flex flex-col\n      justify-center\n      items-center\n    "},[e.success?t("div",{staticClass:"flex justify-center items-center flex-col"},[t("h1",{staticClass:"text-lg font-semibold text-center text-green-600 mt-5"},[e._v("\n        Payment received, thank you.\n      ")]),e._v(" "),t("CheckIcon",{staticClass:"w-64 h-64 text-green-500"})],1):t("div",{staticClass:"flex justify-center items-center flex-col"},[t("div",{ref:"canvas",staticClass:"px-10 py-5 cursor-pointer",attrs:{id:"canvas-"+e.currency},on:{click:function(n){return e.qrCode.download({name:"qr",extension:"png"})}}}),e._v(" "),t("div",{staticClass:"text-center select-all break-all px-10 text-xs"},[e._v("\n        "+e._s(e.address)+"\n      ")])]),e._v(" "),t("div",{staticClass:"flex justify-center items-center w-100 p-10"},[t("button",{staticClass:"\n          bg-blue-600\n          hover:bg-blue-700\n          px-3\n          py-1\n          px-2\n          rounded\n          text-white\n        ",on:{click:e.close}},[e._v("\n        Close\n      ")])])])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{CheckIcon:t(233).default})},231:function(e,n,t){var map={"./BTC.svg":227,"./Lightning.svg":225,"./XMR.svg":228,"./fluent_checkmark-lock-24-regular.svg":232};function c(e){var n=r(e);return t(n)}function r(e){if(!t.o(map,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return map[e]}c.keys=function(){return Object.keys(map)},c.resolve=r,e.exports=c,c.id=231},232:function(e,n,t){e.exports=t.p+"img/fluent_checkmark-lock-24-regular.c3d6dea.svg"},233:function(e,n,t){"use strict";t.r(n);var c={},r=t(13),component=Object(r.a)(c,(function(){var e=this.$createElement,n=this._self._c||e;return n("svg",{attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"check-circle",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{fill:"currentColor",d:"M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"}})])}),[],!1,null,null,null);n.default=component.exports}}]);