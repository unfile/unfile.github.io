(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{225:function(e,n,t){"use strict";var o=t(10),r=t(2),l=t(87),c=t(16),m=t(11),d=t(39),f=t(166),h=t(62),v=t(167),x=t(5),N=t(50),y=t(61).f,_=t(31).f,w=t(15).f,I=t(260).trim,C="Number",E=r.Number,A=E.prototype,S=d(N(A))==C,T=function(e){if(h(e))throw TypeError("Cannot convert a Symbol value to a number");var n,t,o,r,l,c,m,code,d=v(e,"number");if("string"==typeof d&&d.length>2)if(43===(n=(d=I(d)).charCodeAt(0))||45===n){if(88===(t=d.charCodeAt(2))||120===t)return NaN}else if(48===n){switch(d.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+d}for(c=(l=d.slice(2)).length,m=0;m<c;m++)if((code=l.charCodeAt(m))<48||code>r)return NaN;return parseInt(l,o)}return+d};if(l(C,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var k,j=function(e){var n=arguments.length<1?0:e,t=this;return t instanceof j&&(S?x((function(){A.valueOf.call(t)})):d(t)!=C)?f(new E(T(n)),t,j):T(n)},F=o?y(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;F.length>O;O++)m(E,k=F[O])&&!m(j,k)&&w(j,k,_(E,k));j.prototype=A,A.constructor=j,c(r,C,j)}},260:function(e,n,t){var o=t(18),r=t(8),l="["+t(261)+"]",c=RegExp("^"+l+l+"*"),m=RegExp(l+l+"*$"),d=function(e){return function(n){var t=r(o(n));return 1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(m,"")),t}};e.exports={start:d(1),end:d(2),trim:d(3)}},261:function(e,n){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},298:function(e,n,t){"use strict";t.r(n);t(225),t(12);var o={data:function(){return{loading:!1,memo:"",amount:null,error:""}},methods:{submit:function(){var e=this;if(this.error="",!Number(this.amount)||Number(this.amount)<10)this.error="Amount cannot be less than 10 satoshis";else{this.loading=!0;var n=new Headers;n.append("X-Api-Key","d97307f305d24dc2944fa397a21c6421"),n.append("Content-Type","application/json");var t=JSON.stringify({out:!1,amount:Number(this.amount),memo:this.memo||"UnFile.io Donation"});fetch("https://lnbits.com/api/v1/payments",{method:"POST",headers:n,body:t,redirect:"follow"}).then((function(n){n.ok?n.json().then((function(n){console.log(n),n&&e.$emit("ok",n)})).catch((function(n){console.log("error",n),e.error="".concat(n)})).finally((function(){e.loading=!1})):n.text().then((function(n){e.error="".concat(n),e.loading=!1}))})).catch((function(n){console.log(n),e.error="".concat(n),e.loading=!1}))}},close:function(){this.$emit("close")}}},r=t(13),component=Object(r.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"\n    modal\n    h-screen\n    w-full\n    fixed\n    left-0\n    top-0\n    flex\n    justify-center\n    items-center\n    bg-black bg-opacity-50\n    z-1000\n  "},[t("div",{staticClass:"\n      bg-white\n      rounded\n      shadow-lg\n      w-10/12\n      md:w-1/3\n      flex flex-col\n      justify-center\n      items-center\n    "},[t("div",{staticClass:"px-10 py-5 flex flex-col justify-center items-start"},[t("label",{attrs:{for:"amount"}},[e._v("Amount (SAT)")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],staticClass:"\n          text-base\n          p-2\n          border border-gray-300\n          rounded-lg\n          focus:outline-none\n          focus:border-indigo-500\n          outline-none\n          mb-5\n        ",attrs:{type:"number",name:"amount",id:"amount",min:"10",placeholder:"min 10 satoshis"},domProps:{value:e.amount},on:{input:function(n){n.target.composing||(e.amount=n.target.value)}}}),e._v(" "),t("label",{attrs:{for:"memo"}},[e._v("Memo")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.memo,expression:"memo"}],staticClass:"\n          text-base\n          p-2\n          border border-gray-300\n          rounded-lg\n          focus:outline-none\n          focus:border-indigo-500\n          outline-none\n        ",attrs:{type:"text",placeholder:"optional note",id:"memo",name:"memo"},domProps:{value:e.memo},on:{input:function(n){n.target.composing||(e.memo=n.target.value)}}})]),e._v(" "),e.error?t("p",{staticClass:"text-red-600 p-5 text-center"},[e._v(e._s(e.error))]):e._e(),e._v(" "),t("div",{staticClass:"flex justify-around items-center w-full p-5"},[e.loading?t("Spinner",{staticClass:"h-1 w-1"}):t("button",{staticClass:"bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white border-2 border-purple-600",on:{click:e.submit}},[e._v("\n        Generate Invoice\n      ")]),e._v(" "),t("button",{staticClass:"\n          hover:bg-red-600\n          hover:text-white\n          px-4\n          py-2\n          rounded-lg\n          text-red-600\n          border-2 border-red-600\n        ",on:{click:e.close}},[e._v("\n        Close\n      ")])],1)])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Spinner:t(168).default})}}]);