(window.webpackJsonp=window.webpackJsonp||[]).push([[27,7,8,11,12,15,17,18,19],{179:function(t,e,n){"use strict";var r=n(5),o=n(26),c=n(27),l=n(124),M=n(68),y=n(9),d=n(49).f,I=n(50).f,j=n(11).f,N=n(187).trim,D="Number",z=r.Number,f=z,m=z.prototype,v=c(n(89)(m))==D,h="trim"in String.prototype,x=function(t){var e=M(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=h?e.trim():N(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,y=l.length;i<y;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!z(" 0o1")||!z("0b1")||z("+0x1")){z=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof z&&(v?y((function(){m.valueOf.call(n)})):c(n)!=D)?l(new f(x(e)),n,z):x(e)};for(var A,L=n(7)?d(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;L.length>w;w++)o(f,A=L[w])&&!o(z,A)&&j(z,A,I(f,A));z.prototype=m,m.constructor=z,n(14)(r,D,z)}},180:function(t,e,n){t.exports=n.p+"img/Lightning.795a69f.svg"},181:function(t,e,n){t.exports=n.p+"img/BTC.c9f3346.svg"},182:function(t,e,n){t.exports=n.p+"img/XMR.45ccc83.svg"},183:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(20),{props:{address:"",currency:"",paymentHash:""},methods:{close:function(){this.$emit("close")},checkLightningPayment:function(){var t=this,e=new Headers;e.append("X-Api-Key","d97307f305d24dc2944fa397a21c6421");var n={method:"GET",headers:e,redirect:"follow"};fetch("https://legend.lnbits.com/api/v1/payments/".concat(this.paymentHash),n).then((function(e){e.ok?e.json().then((function(e){console.log(e),e.paid&&(t.success=!0,clearInterval(t.checkLightningPayment))})).catch((function(t){console.log("error",t)})):console.log(e)})).catch((function(t){console.log(t)}))}},data:function(){return{qrCode:null,success:!1}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n(193),t.qrCode=new r({width:300,height:300,margin:10,type:"svg",data:t.address,image:n(184)("./".concat(t.currency,".svg")),dotsOptions:{color:"#000000",type:"square"},backgroundOptions:{color:"#ffffff"}}),t.qrCode.append(t.$refs.canvas),t.paymentHash&&setInterval(t.checkLightningPayment,5e3);case 4:case"end":return e.stop()}}),e)})))()}}),c=n(8),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 z-50 dark:bg-gray-500 dark:bg-opacity-70"},[n("div",{staticClass:"bg-white rounded shadow-lg w-10/12 lg:w-1/3 flex flex-col justify-center items-center dark:bg-gray-800"},[t.success?n("div",{staticClass:"flex justify-center items-center flex-col"},[n("h1",{staticClass:"text-lg font-semibold text-center text-green-600 mt-5 dark:text-green-400"},[t._v("Payment received, thank you.")]),t._v(" "),n("CheckIcon",{staticClass:"w-64 h-64 text-green-500 dark:text-green-300"})],1):n("div",{staticClass:"flex justify-center items-center flex-col"},[n("div",{ref:"canvas",staticClass:"px-10 py-5 cursor-pointer",attrs:{id:"canvas-"+t.currency},on:{click:function(e){return t.qrCode.download({name:"qr",extension:"png"})}}}),t._v(" "),n("div",{staticClass:"text-center select-all break-all px-10 text-xs dark:text-white"},[t._v(t._s(t.address))])]),t._v(" "),n("div",{staticClass:"flex justify-center items-center w-100 p-10"},[n("button",{staticClass:"bg-blue-600 hover:bg-blue-700 px-3 py-1 px-2 rounded text-white",on:{click:t.close}},[t._v("Close")])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CheckIcon:n(186).default})},184:function(t,e,n){var map={"./BTC.svg":181,"./Lightning.svg":180,"./XMR.svg":182,"./fluent_checkmark-lock-24-regular.svg":185};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=184},185:function(t,e,n){t.exports=n.p+"img/fluent_checkmark-lock-24-regular.c3d6dea.svg"},186:function(t,e,n){"use strict";n.r(e);var r={},o=n(8),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"check-circle",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"}})])}),[],!1,null,null,null);e.default=component.exports},187:function(t,e,n){var r=n(4),o=n(32),c=n(9),l=n(188),M="["+l+"]",y=RegExp("^"+M+M+"*"),d=RegExp(M+M+"*$"),I=function(t,e,n){var o={},M=c((function(){return!!l[t]()||"​"!="​"[t]()})),y=o[t]=M?e(j):l[t];n&&(o[n]=y),r(r.P+r.F*M,"String",o)},j=I.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(y,"")),2&e&&(t=t.replace(d,"")),t};t.exports=I},188:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},190:function(t,e,n){var content=n(198);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("2fd4df42",content,!0,{sourceMap:!1})},192:function(t,e,n){"use strict";n.r(e);var r={mounted:function(){this.initPayPalButton()},methods:{close:function(){this.$emit("close")},initPayPalButton:function(){var t=this;if(console.log("pay button"),window.paypal){var e=document.querySelector("#smart-button-container #description"),n=document.querySelector("#smart-button-container #amount"),r=document.querySelector("#smart-button-container #descriptionError"),o=document.querySelector("#smart-button-container #priceLabelError"),c=document.querySelector("#smart-button-container #invoiceid"),l=document.querySelector("#smart-button-container #invoiceidError"),M=document.querySelector("#smart-button-container #invoiceidDiv"),y=[e,n];M.firstChild.innerHTML.length>1&&(M.style.display="block");var d=[];d[0]={},d[0].amount={},console.log(window.paypal),window.paypal.Buttons({style:{color:"blue",shape:"rect",label:"paypal",layout:"vertical"},onInit:function(data,t){t.disable(),"block"===M.style.display&&y.push(c),y.forEach((function(e){e.addEventListener("keyup",(function(e){y.every(I)?t.enable():t.disable()}))}))},onClick:function(){e.value.length<1?r.style.visibility="visible":r.style.visibility="hidden",n.value.length<1?o.style.visibility="visible":o.style.visibility="hidden",c.value.length<1&&"block"===M.style.display?l.style.visibility="visible":l.style.visibility="hidden",d[0].description=e.value,d[0].amount.value=n.value,""!==c.value&&(d[0].invoice_id=c.value)},createOrder:function(data,t){return t.order.create({purchase_units:d,application_context:{brand_name:"UnFile",shipping_preference:"NO_SHIPPING"}})},onApprove:function(data,t){return t.order.capture().then((function(t){console.log("Capture result",t,JSON.stringify(t,null,2));var element=document.getElementById("paypal-button-container");element.innerHTML="",element.innerHTML="<h3>Thank you for your payment!</h3>"}))},onError:function(t){console.log(t)}}).render("#paypal-button-container")}else setTimeout((function(){t.initPayPalButton()}),500);function I(t){return t.value.length>0}}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-screen w-full fixed left-0 top-0 overflow-y-auto"},[n("div",{staticClass:"flex relative justify-center items-center z-50 w-full"},[n("div",{staticClass:"bg-white rounded shadow-lg w-10/12 lg:w-1/3 flex flex-col justify-center items-center py-10 my-20 relative"},[t._m(0),t._v(" "),n("div",{staticClass:"absolute top-0 right-0 justify-center items-center w-100"},[n("button",{staticClass:"bg-transparent hover:bg-red-600 px-3 py-1 px-2 rounded hover:text-white",on:{click:t.close}},[t._v("×")])])])]),t._v(" "),n("div",{staticClass:"h-screen w-full absolute left-0 top-0 bg-black bg-opacity-50 z-10 dark:bg-gray-500 dark:bg-opacity-70"})])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"smart-button-container"}},[n("div",{staticStyle:{"text-align":"center"}},[n("label",{attrs:{for:"description"}},[t._v("Message")]),t._v(" "),n("input",{staticClass:"text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 outline-none",attrs:{type:"text",name:"descriptionInput",id:"description",maxlength:"127",value:""}})]),t._v(" "),n("p",{staticStyle:{visibility:"hidden",color:"red","text-align":"center"},attrs:{id:"descriptionError"}},[t._v("Please enter a description")]),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("label",{attrs:{for:"amount"}},[t._v("Donation Amount")]),t._v(" "),n("input",{staticClass:"text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 outline-none mb-5",attrs:{name:"amountInput",type:"number",id:"amount",value:""}}),t._v(" "),n("span",{},[t._v("USD")])]),t._v(" "),n("p",{staticStyle:{visibility:"hidden",color:"red","text-align":"center"},attrs:{id:"priceLabelError"}},[t._v("Please enter a price")]),t._v(" "),n("div",{staticStyle:{"text-align":"center",display:"none"},attrs:{id:"invoiceidDiv"}},[n("label",{attrs:{for:"invoiceid"}}),t._v(" "),n("input",{attrs:{name:"invoiceid",maxlength:"127",type:"text",id:"invoiceid",value:""}})]),t._v(" "),n("p",{staticStyle:{visibility:"hidden",color:"red","text-align":"center"},attrs:{id:"invoiceidError"}},[t._v("Please enter an Invoice ID")]),t._v(" "),n("div",{staticStyle:{"text-align":"center","margin-top":"0.625rem"},attrs:{id:"paypal-button-container"}})])}],!1,null,null,null);e.default=component.exports},197:function(t,e,n){"use strict";n(190)},198:function(t,e,n){var r=n(47)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.xmrbtn{\n  color:#f60;\n  border-color:#f60\n}\n.xmrbtn:hover{\n  background-color:#f60\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},201:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"bg-white w-8 h-8 rounded-full border-2 border-white"},[e("img",{attrs:{src:n(181)}})])}],o={props:{address:{type:String},text:{type:String,default:"Bitcoin"}},data:function(){return{showModal:!1}}},c=n(8),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"m-3 border-2 border-yellow-500 text-yellow-500 px-3 py-2 rounded-lg font-semibold text-lg focus:outline-none focus:shadow-outline hover:bg-yellow-500 hover:border-yellow-500 hover:text-white shadow-lg cursor-pointer transition ease-in duration-300 flex justify-center items-center",on:{click:function(e){t.showModal=!0}}},[t._v("\n    "+t._s(t.text)+" \n    "),t._m(0)]),t._v(" "),n("transition",{attrs:{"enter-active-class":"transition-all duration-500 ease","leave-active-class":"transition-all duration-500 ease","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-class":"opacity-100","leave-to-class":"opacity-0"}},[t.showModal?n("PaymentModal",{key:"btc",attrs:{address:t.address,currency:"BTC"},on:{close:function(e){t.showModal=!1}}}):t._e()],1)],1)}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{PaymentModal:n(183).default})},202:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"bg-white w-8 h-8 rounded-full border-2 border-white"},[e("img",{attrs:{src:n(182)}})])}],o={props:{address:{type:String},text:{type:String,default:"Monero"}},data:function(){return{showModal:!1}}},c=(n(197),n(8)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"m-3 border-2 px-3 py-2 rounded-lg font-semibold text-lg focus:outline-none focus:shadow-outline hover:text-white shadow-lg cursor-pointer transition ease-in duration-300 flex justify-center items-center xmrbtn",on:{click:function(e){t.showModal=!0}}},[t._v("\n    "+t._s(t.text)+" \n    "),t._m(0)]),t._v(" "),n("transition",{attrs:{"enter-active-class":"transition-all duration-500 ease","leave-active-class":"transition-all duration-500 ease","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-class":"opacity-100","leave-to-class":"opacity-0"}},[t.showModal?n("PaymentModal",{key:"xmr",attrs:{address:t.address,currency:"XMR"},on:{close:function(e){t.showModal=!1}}}):t._e()],1)],1)}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{PaymentModal:n(183).default})},204:function(t,e,n){"use strict";n.r(e);n(179),n(13);var r={data:function(){return{loading:!1,memo:"",amount:null,error:""}},methods:{submit:function(){var t=this;if(this.error="",!Number(this.amount)||Number(this.amount)<10)this.error="Amount cannot be less than 10 satoshis";else{this.loading=!0;var e=new Headers;e.append("X-Api-Key","d97307f305d24dc2944fa397a21c6421"),e.append("Content-Type","application/json");var n=JSON.stringify({out:!1,amount:Number(this.amount),memo:this.memo||"UnFile.io Donation"});fetch("https://legend.lnbits.com/api/v1/payments",{method:"POST",headers:e,body:n,redirect:"follow"}).then((function(e){e.ok?e.json().then((function(e){console.log(e),e&&t.$emit("ok",e)})).catch((function(e){console.log("error",e),t.error="".concat(e)})).finally((function(){t.loading=!1})):e.text().then((function(e){t.error="".concat(e),t.loading=!1}))})).catch((function(e){console.log(e),t.error="".concat(e),t.loading=!1}))}},close:function(){this.$emit("close")}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    modal\n    h-screen\n    w-full\n    fixed\n    left-0\n    top-0\n    flex\n    justify-center\n    items-center\n    bg-black bg-opacity-50\n    z-50\n    dark:bg-gray-500 dark:bg-opacity-70\n  "},[n("div",{staticClass:"\n      bg-white\n      rounded\n      shadow-lg\n      w-10/12\n      md:w-1/3\n      flex flex-col\n      justify-center\n      items-center\n      py-5\n      dark:bg-gray-800\n    "},[n("div",{staticClass:"px-10 py-5 flex flex-col justify-center items-start"},[n("label",{staticClass:"dark:text-gray-200",attrs:{for:"amount"}},[t._v("Amount (SAT)")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"\n          text-base\n          p-2\n          border border-gray-300\n          rounded-lg\n          focus:outline-none focus:border-indigo-500\n          outline-none\n          mb-5\n          dark:bg-gray-800 dark:border-gray-500 dark:text-white\n        ",attrs:{type:"number",name:"amount",id:"amount",min:"10",placeholder:"min 10 satoshis"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),t._v(" "),n("label",{staticClass:"dark:text-gray-200",attrs:{for:"memo"}},[t._v("Memo")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.memo,expression:"memo"}],staticClass:"\n          text-base\n          p-2\n          border border-gray-300\n          rounded-lg\n          focus:outline-none focus:border-indigo-500\n          outline-none\n          dark:bg-gray-800 dark:border-gray-500 dark:text-white\n        ",attrs:{type:"text",placeholder:"optional note",id:"memo",name:"memo"},domProps:{value:t.memo},on:{input:function(e){e.target.composing||(t.memo=e.target.value)}}})]),t._v(" "),t.error?n("p",{staticClass:"text-red-600 p-4 text-center dark:text-red-500"},[t._v("\n      "+t._s(t.error)+"\n    ")]):t._e(),t._v(" "),t.error?n("p",{staticClass:"dark:text-white p-4 text-center"},[t._v("\n      Could not generate invoice, please use this external link instead"),n("br"),n("a",{staticClass:"text-blue-500 dark:text-blue-300",attrs:{href:"https://legend.lnbits.com/tipjar/59",target:"_external"}},[t._v("https://legend.lnbits.com/tipjar/59")])]):t._e(),t._v(" "),n("div",{staticClass:"flex justify-around items-center w-full p-5"},[t.loading?n("Spinner",{staticClass:"h-1 w-1"}):n("button",{staticClass:"\n          bg-purple-600\n          hover:bg-purple-700\n          px-4\n          py-2\n          rounded-lg\n          text-white\n          border-2 border-purple-600\n        ",on:{click:t.submit}},[t._v("\n        Generate Invoice\n      ")]),t._v(" "),n("button",{staticClass:"\n          hover:bg-red-600 hover:text-white\n          px-4\n          py-2\n          rounded-lg\n          text-red-600\n          border-2 border-red-600\n          dark:text-red-500 dark:border-red-500 dark:hover:bg-red-500\n        ",on:{click:t.close}},[t._v("\n        Close\n      ")])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Spinner:n(125).default})},209:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"\n        bg-white\n        w-14\n        h-8\n        rounded-full\n        border-2 border-white\n        flex\n        items-center\n        justify-center\n      "},[e("img",{attrs:{src:n(180)}})])}],o={data:function(){return{lightning:!1,lightningQr:!1,payment_hash:null}},methods:{initInvoice:function(data){this.lightning=!1,this.lightningQr=data.payment_request,this.payment_hash=data.payment_hash}}},c=n(8),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"\n      m-3\n      border-2 border-purple-600\n      text-purple-600\n      px-3\n      py-2\n      rounded-lg\n      font-semibold\n      text-lg\n      focus:outline-none\n      focus:shadow-outline\n      hover:bg-purple-600\n      hover:border-purple-600\n      hover:text-white\n      shadow-lg\n      cursor-pointer\n      transition\n      ease-in\n      duration-300\n      flex flex-wrap\n      justify-center\n      items-center\n    ",on:{click:function(e){t.lightning=!0}}},[t._v("\n    Bitcoin Lightning Network "),t._m(0)]),t._v(" "),n("transition",{attrs:{"enter-active-class":"transition-all duration-500 ease","leave-active-class":"transition-all duration-500 ease","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-class":"opacity-100","leave-to-class":"opacity-0"}},[t.lightning?n("LightningCheckout",{on:{ok:t.initInvoice,close:function(e){t.lightning=!1}}}):t._e()],1),t._v(" "),n("transition",{attrs:{"enter-active-class":"transition-all delay-500 duration-500 ease","leave-active-class":"transition-all duration-500 ease","enter-class":"opacity-100","enter-to-class":"opacity-100","leave-class":"opacity-100","leave-to-class":"opacity-0"}},[t.lightningQr?n("PaymentModal",{key:"lightning",attrs:{address:t.lightningQr,currency:"Lightning",paymentHash:t.payment_hash},on:{close:function(e){t.lightningQr=!1}}}):t._e()],1)],1)}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{LightningCheckout:n(204).default,PaymentModal:n(183).default})},210:function(t,e,n){"use strict";n.r(e);var r={head:function(){return{script:[{src:"https://www.paypal.com/sdk/js?client-id=".concat(this.$config.paypalClientId,"&enable-funding=venmo&currency=USD"),"data-sdk-integration-source":"button-factory"}]}},data:function(){return{showModal:!1}},components:{PaypalModal:n(192).default}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"m-3 border-2 border-blue-400 text-blue-400 px-3 py-2 rounded-lg font-semibold text-lg focus:outline-none focus:shadow-outline hover:bg-blue-400 hover:border-blue-400 hover:text-white shadow-lg cursor-pointer transition ease-in duration-300 flex justify-center items-center bg-blue-400 dark:bg-transparent",on:{click:function(e){t.showModal=!0}}},[n("img",{staticClass:"paypal-logo paypal-logo-paypal paypal-logo-color-white",attrs:{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxcHgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxMDEgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHhtbG5zPSJodHRwOiYjeDJGOyYjeDJGO3d3dy53My5vcmcmI3gyRjsyMDAwJiN4MkY7c3ZnIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNIDEyLjIzNyAyLjggTCA0LjQzNyAyLjggQyAzLjkzNyAyLjggMy40MzcgMy4yIDMuMzM3IDMuNyBMIDAuMjM3IDIzLjcgQyAwLjEzNyAyNC4xIDAuNDM3IDI0LjQgMC44MzcgMjQuNCBMIDQuNTM3IDI0LjQgQyA1LjAzNyAyNC40IDUuNTM3IDI0IDUuNjM3IDIzLjUgTCA2LjQzNyAxOC4xIEMgNi41MzcgMTcuNiA2LjkzNyAxNy4yIDcuNTM3IDE3LjIgTCAxMC4wMzcgMTcuMiBDIDE1LjEzNyAxNy4yIDE4LjEzNyAxNC43IDE4LjkzNyA5LjggQyAxOS4yMzcgNy43IDE4LjkzNyA2IDE3LjkzNyA0LjggQyAxNi44MzcgMy41IDE0LjgzNyAyLjggMTIuMjM3IDIuOCBaIE0gMTMuMTM3IDEwLjEgQyAxMi43MzcgMTIuOSAxMC41MzcgMTIuOSA4LjUzNyAxMi45IEwgNy4zMzcgMTIuOSBMIDguMTM3IDcuNyBDIDguMTM3IDcuNCA4LjQzNyA3LjIgOC43MzcgNy4yIEwgOS4yMzcgNy4yIEMgMTAuNjM3IDcuMiAxMS45MzcgNy4yIDEyLjYzNyA4IEMgMTMuMTM3IDguNCAxMy4zMzcgOS4xIDEzLjEzNyAxMC4xIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNIDM1LjQzNyAxMCBMIDMxLjczNyAxMCBDIDMxLjQzNyAxMCAzMS4xMzcgMTAuMiAzMS4xMzcgMTAuNSBMIDMwLjkzNyAxMS41IEwgMzAuNjM3IDExLjEgQyAyOS44MzcgOS45IDI4LjAzNyA5LjUgMjYuMjM3IDkuNSBDIDIyLjEzNyA5LjUgMTguNjM3IDEyLjYgMTcuOTM3IDE3IEMgMTcuNTM3IDE5LjIgMTguMDM3IDIxLjMgMTkuMzM3IDIyLjcgQyAyMC40MzcgMjQgMjIuMTM3IDI0LjYgMjQuMDM3IDI0LjYgQyAyNy4zMzcgMjQuNiAyOS4yMzcgMjIuNSAyOS4yMzcgMjIuNSBMIDI5LjAzNyAyMy41IEMgMjguOTM3IDIzLjkgMjkuMjM3IDI0LjMgMjkuNjM3IDI0LjMgTCAzMy4wMzcgMjQuMyBDIDMzLjUzNyAyNC4zIDM0LjAzNyAyMy45IDM0LjEzNyAyMy40IEwgMzYuMTM3IDEwLjYgQyAzNi4yMzcgMTAuNCAzNS44MzcgMTAgMzUuNDM3IDEwIFogTSAzMC4zMzcgMTcuMiBDIDI5LjkzNyAxOS4zIDI4LjMzNyAyMC44IDI2LjEzNyAyMC44IEMgMjUuMDM3IDIwLjggMjQuMjM3IDIwLjUgMjMuNjM3IDE5LjggQyAyMy4wMzcgMTkuMSAyMi44MzcgMTguMiAyMy4wMzcgMTcuMiBDIDIzLjMzNyAxNS4xIDI1LjEzNyAxMy42IDI3LjIzNyAxMy42IEMgMjguMzM3IDEzLjYgMjkuMTM3IDE0IDI5LjczNyAxNC42IEMgMzAuMjM3IDE1LjMgMzAuNDM3IDE2LjIgMzAuMzM3IDE3LjIgWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0gNTUuMzM3IDEwIEwgNTEuNjM3IDEwIEMgNTEuMjM3IDEwIDUwLjkzNyAxMC4yIDUwLjczNyAxMC41IEwgNDUuNTM3IDE4LjEgTCA0My4zMzcgMTAuOCBDIDQzLjIzNyAxMC4zIDQyLjczNyAxMCA0Mi4zMzcgMTAgTCAzOC42MzcgMTAgQyAzOC4yMzcgMTAgMzcuODM3IDEwLjQgMzguMDM3IDEwLjkgTCA0Mi4xMzcgMjMgTCAzOC4yMzcgMjguNCBDIDM3LjkzNyAyOC44IDM4LjIzNyAyOS40IDM4LjczNyAyOS40IEwgNDIuNDM3IDI5LjQgQyA0Mi44MzcgMjkuNCA0My4xMzcgMjkuMiA0My4zMzcgMjguOSBMIDU1LjgzNyAxMC45IEMgNTYuMTM3IDEwLjYgNTUuODM3IDEwIDU1LjMzNyAxMCBaIj48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTSA2Ny43MzcgMi44IEwgNTkuOTM3IDIuOCBDIDU5LjQzNyAyLjggNTguOTM3IDMuMiA1OC44MzcgMy43IEwgNTUuNzM3IDIzLjYgQyA1NS42MzcgMjQgNTUuOTM3IDI0LjMgNTYuMzM3IDI0LjMgTCA2MC4zMzcgMjQuMyBDIDYwLjczNyAyNC4zIDYxLjAzNyAyNCA2MS4wMzcgMjMuNyBMIDYxLjkzNyAxOCBDIDYyLjAzNyAxNy41IDYyLjQzNyAxNy4xIDYzLjAzNyAxNy4xIEwgNjUuNTM3IDE3LjEgQyA3MC42MzcgMTcuMSA3My42MzcgMTQuNiA3NC40MzcgOS43IEMgNzQuNzM3IDcuNiA3NC40MzcgNS45IDczLjQzNyA0LjcgQyA3Mi4yMzcgMy41IDcwLjMzNyAyLjggNjcuNzM3IDIuOCBaIE0gNjguNjM3IDEwLjEgQyA2OC4yMzcgMTIuOSA2Ni4wMzcgMTIuOSA2NC4wMzcgMTIuOSBMIDYyLjgzNyAxMi45IEwgNjMuNjM3IDcuNyBDIDYzLjYzNyA3LjQgNjMuOTM3IDcuMiA2NC4yMzcgNy4yIEwgNjQuNzM3IDcuMiBDIDY2LjEzNyA3LjIgNjcuNDM3IDcuMiA2OC4xMzcgOCBDIDY4LjYzNyA4LjQgNjguNzM3IDkuMSA2OC42MzcgMTAuMSBaIj48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTSA5MC45MzcgMTAgTCA4Ny4yMzcgMTAgQyA4Ni45MzcgMTAgODYuNjM3IDEwLjIgODYuNjM3IDEwLjUgTCA4Ni40MzcgMTEuNSBMIDg2LjEzNyAxMS4xIEMgODUuMzM3IDkuOSA4My41MzcgOS41IDgxLjczNyA5LjUgQyA3Ny42MzcgOS41IDc0LjEzNyAxMi42IDczLjQzNyAxNyBDIDczLjAzNyAxOS4yIDczLjUzNyAyMS4zIDc0LjgzNyAyMi43IEMgNzUuOTM3IDI0IDc3LjYzNyAyNC42IDc5LjUzNyAyNC42IEMgODIuODM3IDI0LjYgODQuNzM3IDIyLjUgODQuNzM3IDIyLjUgTCA4NC41MzcgMjMuNSBDIDg0LjQzNyAyMy45IDg0LjczNyAyNC4zIDg1LjEzNyAyNC4zIEwgODguNTM3IDI0LjMgQyA4OS4wMzcgMjQuMyA4OS41MzcgMjMuOSA4OS42MzcgMjMuNCBMIDkxLjYzNyAxMC42IEMgOTEuNjM3IDEwLjQgOTEuMzM3IDEwIDkwLjkzNyAxMCBaIE0gODUuNzM3IDE3LjIgQyA4NS4zMzcgMTkuMyA4My43MzcgMjAuOCA4MS41MzcgMjAuOCBDIDgwLjQzNyAyMC44IDc5LjYzNyAyMC41IDc5LjAzNyAxOS44IEMgNzguNDM3IDE5LjEgNzguMjM3IDE4LjIgNzguNDM3IDE3LjIgQyA3OC43MzcgMTUuMSA4MC41MzcgMTMuNiA4Mi42MzcgMTMuNiBDIDgzLjczNyAxMy42IDg0LjUzNyAxNCA4NS4xMzcgMTQuNiBDIDg1LjczNyAxNS4zIDg1LjkzNyAxNi4yIDg1LjczNyAxNy4yIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNIDk1LjMzNyAzLjMgTCA5Mi4xMzcgMjMuNiBDIDkyLjAzNyAyNCA5Mi4zMzcgMjQuMyA5Mi43MzcgMjQuMyBMIDk1LjkzNyAyNC4zIEMgOTYuNDM3IDI0LjMgOTYuOTM3IDIzLjkgOTcuMDM3IDIzLjQgTCAxMDAuMjM3IDMuNSBDIDEwMC4zMzcgMy4xIDEwMC4wMzcgMi44IDk5LjYzNyAyLjggTCA5Ni4wMzcgMi44IEMgOTUuNjM3IDIuOCA5NS40MzcgMyA5NS4zMzcgMy4zIFoiPjwvcGF0aD48L3N2Zz4","data-v-b01da731":"",alt:"",role:"presentation"}}),t._v("\n         "),n("span",{staticClass:"text-white"},[t._v("/")]),t._v(" \n        "),t._m(0)]),t._v(" "),n("transition",{attrs:{"enter-active-class":"transition-all duration-500 ease","leave-active-class":"transition-all duration-500 ease","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-class":"opacity-100","leave-to-class":"opacity-0"}},[t.showModal?n("PaypalModal",{on:{close:function(e){t.showModal=!1}}}):t._e()],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"paypal-button-label-container flex"},[n("img",{staticClass:"paypal-logo-card paypal-logo-card- flex-shrink",attrs:{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMjQgMTgiIHhtbG5zPSJodHRwOiYjeDJGOyYjeDJGO3d3dy53My5vcmcmI3gyRjsyMDAwJiN4MkY7c3ZnIj48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMy4wMDAwMDAsIC02LjAwMDAwMCkiIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTguMjc1MjEzMzgsMTIuNTEyMjY1MyBDNy45MzAwMzU0MiwxMi41MTIyNjUzIDcuNjUwMjEzMzgsMTIuMjMyNDQzMiA3LjY1MDIxMzM4LDExLjg4NzI2NTMgQzcuNjUwMjEzMzgsMTEuNTQyMDg3MyA3LjkzMDAzNTQyLDExLjI2MjI2NTMgOC4yNzUyMTMzOCwxMS4yNjIyNjUzIEwyNC43ODc5MDQyLDExLjI2MjI2NTMgQzI1LjU5NTU5MzksMTEuMjYyMjY1MyAyNi4yNSwxMS45MTc1OTA1IDI2LjI1LDEyLjcyNTUzNjggTDI2LjI1LDIyLjI4NjcyODQgQzI2LjI1LDIzLjA5NDY3NDggMjUuNTk1NTkzOSwyMy43NSAyNC43ODc5MDQyLDIzLjc1IEw1LjIxMjMxMzAyLDIzLjc1IEM0LjQwNDYyMzI1LDIzLjc1IDMuNzUsMjMuMDk0Njc0OCAzLjc1LDIyLjI4NjczOTcgTDMuNzUsNy43MTMyNzE1MiBDMy43NSw2LjkwNTMyNTE4IDQuNDA0NDA2MDgsNi4yNSA1LjIxMjI3MjEyLDYuMjUgTDI0Ljc4ODA2NjQsNi4yNTU1MjE2MyBDMjUuNTk1NjA3OSw2LjI1NTczMTQ3IDI2LjI1LDYuOTEwOTk1MDcgMjYuMjUsNy43MTg3MDM2MiBMMjYuMjUsOS4yMzU3NzE2MSBDMjYuMjUsOS41ODA5NDk1OCAyNS45NzAyNjc1LDkuODYwODExNjggMjUuNjI1MDg5NSw5Ljg2MDg2MTEyIEMyNS4yNzk5MTE1LDkuODYwOTEwNTUgMjUuMDAwMDQ5NCw5LjU4MTEyODYgMjUsOS4yMzU5NTA2MyBMMjQuOTk5NzgyNyw3LjcxODc5MzEzIEMyNC45OTk3ODI3LDcuNjAwODMxODkgMjQuOTA0NjYxMSw3LjUwNTU1MTk3IDI0Ljc4NzcyNzgsNy41MDU1MjE1OCBMNS4yMTIwOTU4Myw3LjQ5OTk5OTk4IEM1LjA5NTE1NTA2LDcuNDk5OTk5OTggNSw3LjU5NTI4ODY4IDUsNy43MTMyNjAyOCBMNS4wMDAyMTcxOCwyMi4yODY3Mjg0IEM1LjAwMDIxNzE4LDIyLjQwNDcxMTMgNS4wOTUzNzIyMywyMi41IDUuMjEyMzEzMDIsMjIuNSBMMjQuNzg3OTA0MiwyMi41IEMyNC45MDQ4NDUsMjIuNSAyNSwyMi40MDQ3MTEzIDI1LDIyLjI4NjcyODQgTDI1LDEyLjcyNTUzNjggQzI1LDEyLjYwNzU1NCAyNC45MDQ4NDQ5LDEyLjUxMjI2NTMgMjQuNzg3OTA0MiwxMi41MTIyNjUzIEw4LjI3NTIxMzM4LDEyLjUxMjI2NTMgWiIgaWQ9IlN0cm9rZS0xIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4",alt:""}}),t._v(" \n            "),n("span",{staticClass:"paypal-button-text true text-white"},[t._v("Debit or Credit Card")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PaypalModal:n(192).default})},262:function(t,e,n){"use strict";n.r(e);var r={head:function(){return{title:"UnFile - Donation"}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md:py-12 px-4 sm:px-6 lg:px-8 relative flex flex-col items-center justify-center flex-1"},[n("div",{staticClass:"sm:max-w-lg w-full p-10 bg-white rounded-xl z-10 shadow-xl dark:bg-gray-800"},[n("h1",{staticClass:"text-lg text-center dark:text-white"},[t._v("\n      Thank you for supporting this project. These are the currently accepted\n      payment methods:\n    ")]),t._v(" "),n("div",{staticClass:"flex flex-wrap justify-center items-center mt-5"},[n("BitcoinButton",{attrs:{address:"bc1qmu6yj6e49wjvf6qgdcf98tmm48f4dxxajxqjga"}}),t._v(" "),n("LightningInvoiceButton"),t._v(" "),n("MoneroButton",{attrs:{address:"898swoLtFZ3NqPAAVUpFwf9MVtnyy17MASvyhLstFYDmZ5C4rvSyGSiXvRny5uic2jRsFqWsdfmHGPmapVMhHizL2pWhyEb"}}),t._v(" "),n("PaypalButton")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BitcoinButton:n(201).default,LightningInvoiceButton:n(209).default,MoneroButton:n(202).default,PaypalButton:n(210).default})}}]);