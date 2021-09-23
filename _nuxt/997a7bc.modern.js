(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{613:function(n,e,t){"use strict";t.r(e);var l={head:()=>({title:"UnFile - My Previous Uploads"}),data:()=>({uploads:[]}),computed:{baseUrl:()=>window.location.origin},mounted(){var n=localStorage.getItem("unfile-uploads");n&&(this.uploads=JSON.parse(n))},methods:{forget(i){this.uploads.splice(i,1),localStorage.setItem("unfile-uploads",JSON.stringify(this.uploads))},clearAll(){this.uploads=[],localStorage.removeItem("unfile-uploads")}}},o=t(8),component=Object(o.a)(l,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"\n    md:py-12\n    px-4\n    sm:px-6\n    lg:px-8\n    relative\n    flex\n    items-center\n    justify-center\n    flex-1\n  "},[t("div",{staticClass:"max-w-screen-lg w-full p-10 bg-white rounded-xl z-10 shadow-xl"},[n.uploads.length<1?t("div",{staticClass:"flex flex-col items-center justify-center"},[t("h1",{staticClass:"text-center font-bold text-2xl text-gray-500"},[n._v("\n        No links are saved in your browser\n      ")]),n._v(" "),t("n-link",{staticClass:"\n          mt-10\n          md:w-1/2\n          sm:w-full\n          flex\n          justify-center\n          p-2\n          tracking-wide\n          font-semibold\n          rounded-xl\n          bg-blue-500\n          text-gray-100\n          focus:outline-none\n          focus:shadow-outline\n          hover:bg-blue-600\n          shadow-lg\n          cursor-pointer\n          transition\n          ease-in\n          duration-300\n        ",attrs:{to:"/"}},[n._v("\n        Upload Some Files\n      ")])],1):t("div",{staticClass:"flex flex-col items-center justify-center"},[n._l(n.uploads,(function(e,i){return t("div",{key:i,staticClass:"\n          flex flex-wrap\n          justify-between\n          items-center\n          border\n          p-3\n          rounded\n          mb-3\n          w-full\n        "},[t("div",{staticClass:"mx-2 break-words font-bold"},[n._v(n._s(e.caption))]),n._v(" "),t("div",{staticClass:"break-all mx-2 text-sm select-all"},[n._v("\n          "+n._s(n.baseUrl)+n._s(e.link)+"\n        ")]),n._v(" "),t("button",{staticClass:"\n            bg-blue-500\n            text-gray-100\n            tracking-wide\n            font-semibold\n            focus:outline-none\n            focus:shadow-outline\n            hover:bg-blue-600\n            shadow-lg\n            cursor-pointer\n            transition\n            ease-in\n            duration-300\n            py-1\n            px-2\n            rounded-md\n            text-xs\n            mx-2\n          ",on:{click:function(e){return n.forget(i)}}},[n._v("\n          Forget\n        ")])])})),n._v(" "),t("button",{staticClass:"\n          mt-10\n          flex\n          justify-center\n          py-2\n          px-4\n          tracking-wide\n          font-semibold\n          rounded-xl\n          bg-blue-500\n          text-gray-100\n          focus:outline-none\n          focus:shadow-outline\n          hover:bg-blue-600\n          shadow-lg\n          cursor-pointer\n          transition\n          ease-in\n          duration-300\n          text-lg\n        ",on:{click:n.clearAll}},[n._v("\n        Clear All\n      ")])],2)])])}),[],!1,null,null,null);e.default=component.exports}}]);