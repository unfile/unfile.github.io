(window.webpackJsonp=window.webpackJsonp||[]).push([[19,12],{187:function(n,e,t){n.exports=t.p+"img/BTC.c9f3346.svg"},188:function(n,e,t){n.exports=t.p+"img/XMR.45ccc83.svg"},190:function(n,e,t){var map={"./BTC.svg":187,"./XMR.svg":188,"./fluent_checkmark-lock-24-regular.svg":194};function r(n){var e=o(n);return t(e)}function o(n){if(!t.o(map,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return map[n]}r.keys=function(){return Object.keys(map)},r.resolve=o,n.exports=r,r.id=190},194:function(n,e,t){n.exports=t.p+"img/fluent_checkmark-lock-24-regular.c3d6dea.svg"},213:function(n,e,t){"use strict";t.r(e);var r=t(3),o={props:{address:"",currency:""},methods:{close(){this.$emit("close")}},data:()=>({qrCode:null}),mounted(){var n=this;return Object(r.a)((function*(){var e=t(237);n.qrCode=new e({width:300,height:300,margin:10,type:"svg",data:n.address,image:t(190)("./".concat(n.currency,".svg")),dotsOptions:{color:"#000000",type:"square"},backgroundOptions:{color:"#ffffff"}}),n.qrCode.append(n.$refs.canvas)}))()}},c=t(8),component=Object(c.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"\n    modal\n    h-screen\n    w-full\n    fixed\n    left-0\n    top-0\n    flex\n    justify-center\n    items-center\n    bg-black bg-opacity-50\n    z-1000\n  "},[t("div",{staticClass:"\n      bg-white\n      rounded\n      shadow-lg\n      w-10/12\n      md:w-1/3\n      flex flex-col\n      justify-center\n      items-center\n    "},[t("div",{ref:"canvas",staticClass:"px-10 py-5 cursor-pointer",attrs:{id:"canvas-"+n.currency},on:{click:function(e){return n.qrCode.download({name:"qr",extension:"png"})}}}),n._v(" "),t("div",{staticClass:"text-center select-all break-all px-10 text-sm"},[n._v(n._s(n.address))]),n._v(" "),t("div",{staticClass:"flex justify-center items-center w-100 p-10"},[t("button",{staticClass:"\n          bg-blue-600\n          hover:bg-blue-700\n          px-3\n          py-1\n          px-2\n          rounded\n          text-white\n        ",on:{click:n.close}},[n._v("\n        Close\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},611:function(n,e,t){"use strict";t.r(e);var r=[function(){var n=this.$createElement,e=this._self._c||n;return e("span",{staticClass:"bg-white w-8 h-8 rounded-full border-2 border-white"},[e("img",{attrs:{src:t(187)}})])},function(){var n=this.$createElement,e=this._self._c||n;return e("span",{staticClass:"bg-white w-8 h-8 rounded-full border-2 border-white"},[e("img",{attrs:{src:t(188)}})])}],o={head:()=>({title:"UnFile - Donation"}),data:()=>({btcQR:!1,xmrQR:!1})},c=t(8),component=Object(c.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"\n    md:py-12\n    px-4\n    sm:px-6\n    lg:px-8\n    relative\n    flex flex-col\n    items-center\n    justify-center\n    flex-1\n  "},[t("div",{staticClass:"sm:max-w-lg w-full p-10 bg-white rounded-xl z-10 shadow-xl"},[t("h1",{staticClass:"text-lg text-center"},[n._v("\n      Thank you for supporting this project. These are the currently accepted payment methods:\n    ")]),n._v(" "),t("div",{staticClass:"flex flex-wrap justify-center items-center mt-5"},[t("button",{staticClass:"\n          m-3\n          border-2 border-yellow-500\n          text-yellow-500\n          px-3\n          py-2\n          rounded-lg\n          font-semibold\n          text-lg\n          focus:outline-none\n          focus:shadow-outline\n          hover:bg-yellow-500\n          hover:border-yellow-500\n          hover:text-white\n          shadow-lg\n          cursor-pointer\n          transition\n          ease-in\n          duration-300\n          flex\n          justify-center\n          items-center\n        ",on:{click:function(e){n.btcQR=!0}}},[n._v("\n        Bitcoin "),n._m(0)]),n._v(" "),t("button",{staticClass:"\n          m-3\n          border-2\n          px-3\n          py-2\n          rounded-lg\n          font-semibold\n          text-lg\n          focus:outline-none\n          focus:shadow-outline\n          hover:text-white\n          shadow-lg\n          cursor-pointer\n          transition\n          ease-in\n          duration-300\n          flex\n          justify-center\n          items-center\n          xmrbtn\n        ",on:{click:function(e){n.xmrQR=!0}}},[n._v("\n        Monero "),n._m(1)]),n._v(" "),n.btcQR?t("PaymentModal",{key:"btc",attrs:{address:"bc1qmu6yj6e49wjvf6qgdcf98tmm48f4dxxajxqjga",currency:"BTC"},on:{close:function(e){n.btcQR=!1}}}):n._e(),n._v(" "),n.xmrQR?t("PaymentModal",{key:"xmr",attrs:{address:"898swoLtFZ3NqPAAVUpFwf9MVtnyy17MASvyhLstFYDmZ5C4rvSyGSiXvRny5uic2jRsFqWsdfmHGPmapVMhHizL2pWhyEb",currency:"XMR"},on:{close:function(e){n.xmrQR=!1}}}):n._e()],1)])])}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{PaymentModal:t(213).default})}}]);