(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{179:function(t,e,r){"use strict";var n=r(5),o=r(26),l=r(27),c=r(124),d=r(68),m=r(9),f=r(49).f,h=r(50).f,v=r(11).f,x=r(187).trim,y="Number",_=n.Number,w=_,N=_.prototype,k=l(r(89)(N))==y,C="trim"in String.prototype,I=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,l=(e=C?e.trim():x(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,m=c.length;i<m;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,n)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof _&&(k?m((function(){N.valueOf.call(r)})):l(r)!=y)?c(new w(I(e)),r,_):I(e)};for(var A,E=r(7)?f(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;E.length>S;S++)o(w,A=E[S])&&!o(_,A)&&v(_,A,h(w,A));_.prototype=N,N.constructor=_,r(14)(n,y,_)}},187:function(t,e,r){var n=r(4),o=r(32),l=r(9),c=r(188),d="["+c+"]",m=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),h=function(t,e,r){var o={},d=l((function(){return!!c[t]()||"​"!="​"[t]()})),m=o[t]=d?e(v):c[t];r&&(o[r]=m),n(n.P+n.F*d,"String",o)},v=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(m,"")),2&e&&(t=t.replace(f,"")),t};t.exports=h},188:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},204:function(t,e,r){"use strict";r.r(e);r(179),r(13);var n={data:function(){return{loading:!1,memo:"",amount:null,error:""}},methods:{submit:function(){var t=this;if(this.error="",!Number(this.amount)||Number(this.amount)<10)this.error="Amount cannot be less than 10 satoshis";else{this.loading=!0;var e=new Headers;e.append("X-Api-Key","d97307f305d24dc2944fa397a21c6421"),e.append("Content-Type","application/json");var r=JSON.stringify({out:!1,amount:Number(this.amount),memo:this.memo||"UnFile.io Donation"});fetch("https://legend.lnbits.com/api/v1/payments",{method:"POST",headers:e,body:r,redirect:"follow"}).then((function(e){e.ok?e.json().then((function(e){console.log(e),e&&t.$emit("ok",e)})).catch((function(e){console.log("error",e),t.error="".concat(e)})).finally((function(){t.loading=!1})):e.text().then((function(e){t.error="".concat(e),t.loading=!1}))})).catch((function(e){console.log(e),t.error="".concat(e),t.loading=!1}))}},close:function(){this.$emit("close")}}},o=r(8),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 z-50 dark:bg-gray-500 dark:bg-opacity-70"},[r("div",{staticClass:"bg-white rounded shadow-lg w-10/12 md:w-1/3 flex flex-col justify-center items-center py-5 dark:bg-gray-800 relative"},[r("div",{staticClass:"px-10 py-5 flex flex-col justify-center items-start"},[r("label",{staticClass:"dark:text-gray-200",attrs:{for:"amount"}},[t._v("Amount (SAT)")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 outline-none mb-5 dark:bg-gray-800 dark:border-gray-500 dark:text-white",attrs:{type:"number",name:"amount",id:"amount",min:"10",placeholder:"min 10 satoshis"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),t._v(" "),r("label",{staticClass:"dark:text-gray-200",attrs:{for:"memo"}},[t._v("Memo")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.memo,expression:"memo"}],staticClass:"text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 outline-none dark:bg-gray-800 dark:border-gray-500 dark:text-white",attrs:{type:"text",placeholder:"optional note",id:"memo",name:"memo"},domProps:{value:t.memo},on:{input:function(e){e.target.composing||(t.memo=e.target.value)}}})]),t._v(" "),t.error?r("p",{staticClass:"text-red-600 p-4 text-center dark:text-red-500"},[t._v(t._s(t.error))]):t._e(),t._v(" "),t.error?r("p",{staticClass:"dark:text-white p-4 text-center"},[t._v("\n      Could not generate invoice, please use this external link instead\n      "),r("br"),t._v(" "),r("a",{staticClass:"text-blue-500 dark:text-blue-300",attrs:{href:"https://legend.lnbits.com/tipjar/59",target:"_external"}},[t._v("https://legend.lnbits.com/tipjar/59")])]):t._e(),t._v(" "),r("div",{staticClass:"flex justify-around items-center w-full p-5"},[t.loading?r("Spinner",{staticClass:"h-1 w-1"}):r("button",{staticClass:"bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white border-2 border-purple-600",on:{click:t.submit}},[t._v("Generate Invoice")])],1),t._v(" "),r("div",{staticClass:"absolute top-0 right-0 justify-center items-center w-100"},[r("button",{staticClass:"bg-transparent hover:bg-red-600 px-3 pb-1 hover:text-white dark:text-white text-2xl",on:{click:t.close}},[t._v("×")])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Spinner:r(125).default})}}]);