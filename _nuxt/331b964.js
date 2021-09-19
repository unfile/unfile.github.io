(window.webpackJsonp=window.webpackJsonp||[]).push([[20,12],{231:function(e,t,n){e.exports=n.p+"img/BTC.c9f3346.svg"},232:function(e,t,n){e.exports=n.p+"img/XMR.45ccc83.svg"},234:function(e,t,n){var map={"./BTC.svg":231,"./XMR.svg":232,"./fluent_checkmark-lock-24-regular.svg":238};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=234},238:function(e,t,n){e.exports=n.p+"img/fluent_checkmark-lock-24-regular.c3d6dea.svg"},278:function(e,t,n){"use strict";n.r(t);var r=n(6),o=(n(30),{props:{address:"",currency:""},methods:{close:function(){this.$emit("close")}},data:function(){return{qrCode:null}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=n(304),e.qrCode=new r({width:300,height:300,margin:10,type:"svg",data:e.address,image:n(234)("./".concat(e.currency,".svg")),dotsOptions:{color:"#000000",type:"square"},backgroundOptions:{color:"#ffffff"}}),e.qrCode.append(e.$refs.canvas);case 3:case"end":return t.stop()}}),t)})))()}}),l=n(13),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"\n    modal\n    h-screen\n    w-full\n    fixed\n    left-0\n    top-0\n    flex\n    justify-center\n    items-center\n    bg-black bg-opacity-50\n    z-1000\n  "},[n("div",{staticClass:"\n      bg-white\n      rounded\n      shadow-lg\n      w-10/12\n      md:w-1/3\n      flex flex-col\n      justify-center\n      items-center\n    "},[n("div",{ref:"canvas",staticClass:"px-10 py-5 cursor-pointer",attrs:{id:"canvas-"+e.currency},on:{click:function(t){return e.qrCode.download({name:"qr",extension:"png"})}}}),e._v(" "),n("div",{staticClass:"text-center select-all break-all px-10 text-sm"},[e._v(e._s(e.address))]),e._v(" "),n("div",{staticClass:"flex justify-center items-center w-100 p-10"},[n("button",{staticClass:"\n          bg-blue-600\n          hover:bg-blue-700\n          px-3\n          py-1\n          px-2\n          rounded\n          text-white\n        ",on:{click:e.close}},[e._v("\n        Close\n      ")])])])])}),[],!1,null,null,null);t.default=component.exports},684:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",{staticClass:"mt-5"},[n("b",[e._v("Q:")]),e._v(" Where are my files saved?")]),e._v(" "),n("li",[n("b",[e._v("A:")]),e._v(" UnFile uses\n        "),n("a",{staticClass:"text-blue-500",attrs:{href:"https://web3.storage/",target:"_external"}},[e._v("Web3.Storage")]),e._v("\n        technology to store the files using\n        "),n("a",{staticClass:"text-blue-500",attrs:{href:"https://filecoin.io/",target:"_external"}},[e._v("FileCoin")]),e._v("\n        deals and distribute them using\n        "),n("a",{staticClass:"text-blue-500",attrs:{href:"https://ipfs.io/",target:"_external"}},[e._v("IPFS")]),e._v(". Your files are distributed on a decentralized network making it\n        censorship resistant. It's also "),n("b",[e._v("FREE")]),e._v(" and unlimited.\n      ")]),e._v(" "),n("li",{staticClass:"mt-5"},[n("b",[e._v("Q:")]),e._v(" Can you open my files?")]),e._v(" "),n("li",[n("b",[e._v("A:")]),e._v(" No, Since the files get encrypted before they are uploaded,\n        there is no way to open them without your key.\n      ")]),e._v(" "),n("li",{staticClass:"mt-5"},[n("b",[e._v("Q:")]),e._v(" What kind of encryption is used to secure my files?\n      ")]),e._v(" "),n("li",[n("b",[e._v("A:")]),e._v(" UnFile is using\n        "),n("a",{staticClass:"text-blue-500",attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API",target:"_external"}},[e._v("WebCryptoAPI")]),e._v("\n        to encrypt the files, each file is encrypted locally in your browser\n        using AES-GCM algorithm.\n      ")]),e._v(" "),n("li",{staticClass:"mt-5"},[n("b",[e._v("Q:")]),e._v(" What information is visible and not encrypted?\n      ")]),e._v(" "),n("li",[n("b",[e._v("A:")]),e._v(" All file names are encrypted with the caption and any crypto\n        payment address. The only visible information will be files sizes as\n        well as the version of the uploader for future compatibility.\n      ")]),e._v(" "),n("li",{staticClass:"mt-5"},[n("b",[e._v("Q:")]),e._v(" What is the size limit for upload?")]),e._v(" "),n("li",[n("b",[e._v("A:")]),e._v(" Web3.Storage have a limit of 32 GiB for each content\n        archive, this means the total size of files in a single upload cannot exceed that\n        limit, This may be increased in the future. There is another limit for\n        individiual file size since browsers cannot encrypt files larger than\n        2 GiB. If your file is larger than this you can split it into multiple\n        parts using a zip archive or similar methods.\n      ")]),e._v(" "),n("li",{staticClass:"mt-5"},[n("b",[e._v("Q:")]),e._v(" Are there any restrictions on what to upload?\n      ")]),e._v(" "),n("li",[n("b",[e._v("A:")]),e._v(" There are none, UnFile is free to use and modify to suit your\n        needs. However, please don't use it in anything considered immoral.\n      ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"bg-white w-8 h-8 rounded-full border-2 border-white"},[t("img",{attrs:{src:n(231)}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"bg-white w-8 h-8 rounded-full border-2 border-white"},[t("img",{attrs:{src:n(232)}})])}],o={data:function(){return{btcQR:!1,xmrQR:!1}}},l=n(13),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"\n    md:py-12\n    px-4\n    sm:px-6\n    lg:px-8\n    relative\n    flex\n    items-center\n    justify-center\n    flex-1\n  "},[n("div",{staticClass:"max-w-screen-lg w-full p-10 bg-white rounded-xl z-10 shadow-xl"},[n("h1",{staticClass:"text-center font-bold text-2xl"},[e._v("FAQ")]),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"flex flex-wrap justify-center items-center mt-5"},[n("button",{staticClass:"\n          m-3\n          border-2 border-yellow-500\n          text-yellow-500\n          px-3\n          py-2\n          rounded-lg\n          font-semibold\n          text-lg\n          focus:outline-none\n          focus:shadow-outline\n          hover:bg-yellow-500\n          hover:border-yellow-500\n          hover:text-white\n          shadow-lg\n          cursor-pointer\n          transition\n          ease-in\n          duration-300\n          flex\n          justify-center\n          items-center\n        ",on:{click:function(t){e.btcQR=!0}}},[e._v("\n        Donate Bitcoin "),e._m(1)]),e._v(" "),n("button",{staticClass:"\n          m-3\n          border-2\n          px-3\n          py-2\n          rounded-lg\n          font-semibold\n          text-lg\n          focus:outline-none\n          focus:shadow-outline\n          hover:text-white\n          shadow-lg\n          cursor-pointer\n          transition\n          ease-in\n          duration-300\n          flex\n          justify-center\n          items-center\n          xmrbtn\n        ",on:{click:function(t){e.xmrQR=!0}}},[e._v("\n        Donate Monero "),e._m(2)]),e._v(" "),e.btcQR?n("PaymentModal",{key:"btc",attrs:{address:"bc1qmu6yj6e49wjvf6qgdcf98tmm48f4dxxajxqjga",currency:"BTC"},on:{close:function(t){e.btcQR=!1}}}):e._e(),e._v(" "),e.xmrQR?n("PaymentModal",{key:"xmr",attrs:{address:"898swoLtFZ3NqPAAVUpFwf9MVtnyy17MASvyhLstFYDmZ5C4rvSyGSiXvRny5uic2jRsFqWsdfmHGPmapVMhHizL2pWhyEb",currency:"XMR"},on:{close:function(t){e.xmrQR=!1}}}):e._e()],1)])])}),r,!1,null,null,null);t.default=component.exports;installComponents(component,{PaymentModal:n(278).default})}}]);