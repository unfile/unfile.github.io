(window.webpackJsonp=window.webpackJsonp||[]).push([[22,9,13,14],{193:function(e,t,n){"use strict";n.r(t);var r={props:{message:{type:String},title:{type:String,default:""}},methods:{okClicked:function(){this.$emit("ok")},close:function(){this.$emit("close")}}},l=n(8),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"\n    modal\n    h-screen\n    w-full\n    fixed\n    left-0\n    top-0\n    flex\n    justify-center\n    items-center\n    bg-black bg-opacity-50\n    z-1000\n  "},[n("div",{staticClass:"bg-white rounded shadow-lg w-10/12 md:w-1/3"},[e.title?n("div",{staticClass:"px-4 py-2 flex justify-between items-center"},[n("h3",{staticClass:"font-semibold text-lg"},[e._v(e._s(e.title))]),e._v(" "),n("button",{staticClass:"text-black close-modal",on:{click:e.close}},[e._v("✗")])]):e._e(),e._v(" "),n("div",{staticClass:"px-10 py-5 break-words"},[e._v("\n      "+e._s(e.message)+"\n    ")]),e._v(" "),n("div",{staticClass:"flex justify-end items-center w-100 px-10 pb-5"},[n("button",{staticClass:"bg-blue-600 hover:bg-blue-700 px-3 py-1 px-2 rounded text-white",on:{click:e.okClicked}},[e._v("\n        Ok\n      ")])])])])}),[],!1,null,null,null);t.default=component.exports},194:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return d})),n.d(t,"f",(function(){return f}));n(179),n(25);var r=Number("34357641216"),l=Number("4244635648");function o(e,path){return"https://".concat(e,".ipfs.dweb.link/").concat(encodeURIComponent(path))}function c(e,t){return new File([JSON.stringify(t)],e,{type:"application/json"})}function d(e){var t,n=e;return e>1e9?(t="GB",n/=1e9):e>1e6?(t="MB",n/=1e6):e>1e3?(t="KB",n/=1e3):t="Bytes","".concat(n.toFixed(2).toLocaleString()," ").concat(t)}function f(e,t){var link=document.createElement("a");link.href=URL.createObjectURL(e),link.download=t||e.name,link.click()}},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(2),l=(n(20),n(191),n(33),n(25),n(31),{_pattern:/[a-zA-Z0-9\_\-]/,_getRandomByte:function(){if(window.crypto&&window.crypto.getRandomValues){var e=new Uint8Array(1);return window.crypto.getRandomValues(e),e[0]}if(window.msCrypto&&window.msCrypto.getRandomValues){e=new Uint8Array(1);return window.msCrypto.getRandomValues(e),e[0]}return Math.floor(256*Math.random())},generate:function(e){return Array.apply(null,{length:e}).map((function(){for(var e;;)if(e=String.fromCharCode(this._getRandomByte()),this._pattern.test(e))return e}),this).join("")}}),o=function(e){return window.crypto.subtle.importKey("raw",new TextEncoder("utf-8").encode(e),"PBKDF2",!1,["deriveKey"])},c=function(e,t,n){return window.crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:25e4,hash:"SHA-256"},e,{name:"AES-GCM",length:256},!1,n)};function d(e,t,n){return f.apply(this,arguments)}function f(){return(f=Object(r.a)(regeneratorRuntime.mark((function e(t,n,r){var d,f,h,v,data,m,y,w,x,C;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d=window.crypto.getRandomValues(new Uint8Array(16)),f=window.crypto.getRandomValues(new Uint8Array(12)),e.next=4,o(n);case 4:return h=e.sent,e.next=7,c(h,d,["encrypt"]);case 7:return v=e.sent,e.next=10,t.arrayBuffer();case 10:return data=e.sent,e.next=13,window.crypto.subtle.encrypt({name:"AES-GCM",iv:f},v,data);case 13:return m=e.sent,y=new Uint8Array(m),(w=new Uint8Array(d.byteLength+f.byteLength+y.byteLength)).set(d,0),w.set(f,d.byteLength),w.set(y,d.byteLength+f.byteLength),x=r?t.name:l.generate(10),C=new File([w],x+".enc",{type:t.type}),e.abrupt("return",{file:C,originalName:t.fullPath||t.name});case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t){return v.apply(this,arguments)}function v(){return(v=Object(r.a)(regeneratorRuntime.mark((function e(t,n){var r,l,d,data,f,h,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.arrayBuffer();case 2:return r=e.sent,l=r.slice(0,16),d=r.slice(16,28),data=r.slice(28),e.next=8,o(n);case 8:return f=e.sent,e.next=11,c(f,l,["decrypt"]);case 11:return h=e.sent,e.next=14,window.crypto.subtle.decrypt({name:"AES-GCM",iv:d},h,data);case 14:return v=e.sent,e.abrupt("return",new Blob([v]));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},204:function(e,t,n){var content=n(214);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(48).default)("2ac09388",content,!0,{sourceMap:!1})},209:function(e,t,n){"use strict";n.r(t);var r={},l=n(8),component=Object(l.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"}})])}),[],!1,null,null,null);t.default=component.exports},210:function(e,t,n){"use strict";n.r(t);var r={},l=n(8),component=Object(l.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M12 2C17.523 2 22 6.477 22 12C22 12.427 21.973 12.847 21.922 13.26C21.73 12.3756 21.2032 11.5997 20.452 11.095C20.2166 8.93431 19.1626 6.94583 17.5066 5.53821C15.8505 4.13059 13.7182 3.41074 11.5478 3.52661C9.37742 3.64248 7.33385 4.58526 5.83707 6.1612C4.34028 7.73714 3.50397 9.82653 3.5 12C3.49985 13.2007 3.7541 14.3879 4.246 15.4832C4.73789 16.5785 5.45628 17.5572 6.35382 18.3548C7.25137 19.1524 8.30771 19.7508 9.45327 20.1105C10.5988 20.4703 11.8076 20.5833 13 20.442V21.5C13 21.652 13.014 21.802 13.04 21.947C12.6945 21.9825 12.3473 22.0002 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM20.487 12.482C20.1696 12.0664 19.7299 11.7607 19.2298 11.6081C18.7296 11.4554 18.1942 11.4634 17.6988 11.631C17.2035 11.7986 16.7731 12.1173 16.4684 12.5423C16.1636 12.9672 15.9998 13.4771 16 14V15H15.5C15.1022 15 14.7206 15.158 14.4393 15.4393C14.158 15.7206 14 16.1022 14 16.5V21.5C14 21.8978 14.158 22.2794 14.4393 22.5607C14.7206 22.842 15.1022 23 15.5 23H21.5C21.8978 23 22.2794 22.842 22.5607 22.5607C22.842 22.2794 23 21.8978 23 21.5V16.5C23 16.1022 22.842 15.7206 22.5607 15.4393C22.2794 15.158 21.8978 15 21.5 15H21V14C21.0009 13.4513 20.8206 12.9177 20.487 12.482V12.482ZM18.107 19.92C17.9862 19.8683 17.8767 19.7934 17.7849 19.6994C17.693 19.6054 17.6206 19.4943 17.5717 19.3723C17.5228 19.2503 17.4984 19.1199 17.4999 18.9885C17.5015 18.8571 17.5288 18.7273 17.5805 18.6065C17.6322 18.4857 17.7071 18.3762 17.8011 18.2844C17.8951 18.1925 18.0062 18.1201 18.1282 18.0712C18.2502 18.0223 18.3806 17.9979 18.512 17.9994C18.6434 18.001 18.7732 18.0283 18.894 18.08C19.138 18.1844 19.3305 18.3814 19.4293 18.6277C19.528 18.874 19.5249 19.1495 19.4205 19.3935C19.3161 19.6375 19.1191 19.83 18.8728 19.9288C18.6265 20.0275 18.351 20.0244 18.107 19.92ZM17.5 14C17.5 13.7348 17.6054 13.4804 17.7929 13.2929C17.9804 13.1054 18.2348 13 18.5 13C18.7652 13 19.0196 13.1054 19.2071 13.2929C19.3946 13.4804 19.5 13.7348 19.5 14V15H17.5V14ZM10.75 13.44L15.22 8.97C15.354 8.83704 15.5332 8.75951 15.7219 8.75286C15.9105 8.74622 16.0947 8.81096 16.2378 8.93416C16.3808 9.05736 16.4721 9.22996 16.4934 9.41752C16.5148 9.60508 16.4647 9.79379 16.353 9.946L16.28 10.03L11.28 15.03C11.153 15.157 10.9847 15.2342 10.8055 15.2476C10.6264 15.261 10.4485 15.2097 10.304 15.103L10.22 15.03L7.72 12.53C7.58704 12.396 7.5095 12.2168 7.50286 12.0281C7.49622 11.8395 7.56096 11.6553 7.68416 11.5122C7.80736 11.3692 7.97996 11.2779 8.16752 11.2566C8.35508 11.2352 8.54379 11.2853 8.696 11.397L8.78 11.47L10.75 13.44V13.44Z",fill:"currentColor"}})])}),[],!1,null,null,null);t.default=component.exports},213:function(e,t,n){"use strict";n(204)},214:function(e,t,n){var r=n(47)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.has-mask{\n  position:absolute;\n  clip:rect(10px,150px,130px,10px)\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},226:function(e,t,n){"use strict";n.r(t);n(31),n(22),n(36);var r=n(2),l=(n(20),n(25),n(13),n(37),n(38),n(33),n(34),n(195)),o=n(194);function c(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){c=!0,l=e},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw l}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var h={components:{Modal:n(193).default},props:{password:{type:String}},filters:{formatSize:function(e){return Object(o.c)(e)}},data:function(){return{encrypting:!1,blurPassword:!0,caption:"",uploading:!1,showAddress:!1,address:"",selectedFiles:[],encryptedFiles:{},totalSize:0,errorMsg:"",currency:null}},methods:{setAddress:function(address,e){this.address=address,this.currency=e},highlight:function(e){this.$refs.dropArea.classList.add("border-red-500")},unhighlight:function(e){this.$refs.dropArea.classList.remove("border-red-500")},reset:function(){this.selectedFiles=[],this.encryptedFiles={},this.totalSize=0,this.encrypting=!1},checkFiles:function(e){var t,n=0,r=c(e);try{for(r.s();!(t=r.n()).done;){var l=t.value;if(l.size>o.a)return this.errorMsg="The file ".concat(f.fullPath||f.name," is larger than the allowed single file size, please split it into parts or try another file."),this.reset(),!1;if((n+=l.size)>o.b)return this.errorMsg="Total files size is larger than allowed, please remove some files and consider splitting the uploads to multiple parts.",this.reset(),!1}}catch(e){r.e(e)}finally{r.f()}return!0},fileSelected:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e.target.files.length<1)){n.next=3;break}return console.log("nothing selected"),n.abrupt("return");case 3:return console.log(e.target.files),t.selectedFiles=e.target.files,n.next=7,t.handleFileSelected();case 7:case"end":return n.stop()}}),n)})))()},fileDropped:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,i,l,o,d,f,h;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.dataTransfer){n.next=2;break}return n.abrupt("return");case 2:for(r=[],i=0;i<e.dataTransfer.files.length;i++)r[i]=e.dataTransfer.files[i];if(!r.length){n.next=22;break}if(t.encrypting=!0,t.selectedFiles=[],l=[],!(o=e.dataTransfer.items)||!o.length||null==o[0].webkitGetAsEntry){n.next=17;break}return n.t0=l,n.next=13,t._addFilesFromItems(o);case 13:n.t1=n.sent,l=n.t0.concat.call(n.t0,n.t1),n.next=19;break;case 17:d=c(r);try{for(d.s();!(f=d.n()).done;)h=f.value,l.push(h)}catch(e){d.e(e)}finally{d.f()}case 19:return t.selectedFiles=l,n.next=22,t.handleFileSelected();case 22:case"end":return n.stop()}}),n)})))()},traverseDirectory:function(e){var t=this,n=e.createReader();return new Promise((function(e,r){var l=[];!function o(){n.readEntries((function(n){n.length?(l.push(Promise.all(n.map((function(e){return e.isFile?e:t.traverseDirectory(e)})))),o()):e(Promise.all(l))}),(function(e){return r(e)}))}()}))},getFile:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(t,n){return e.file(t,n)}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},flattenEntries:function(a){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,l,i,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=[],r=c(a),t.prev=2,r.s();case 4:if((l=r.n()).done){t.next=21;break}if(!(i=l.value).isFile){t.next=14;break}return t.next=9,e.getFile(i);case 9:(o=t.sent).fullPath=i.fullPath,n.push(o),t.next=19;break;case 14:return t.t0=n,t.next=17,e.flattenEntries(i);case 17:t.t1=t.sent,n=t.t0.concat.call(t.t0,t.t1);case 19:t.next=4;break;case 21:t.next=26;break;case 23:t.prev=23,t.t2=t.catch(2),r.e(t.t2);case 26:return t.prev=26,r.f(),t.finish(26);case 29:return t.abrupt("return",n);case 30:case"end":return t.stop()}}),t,null,[[2,23,26,29]])})))()},_getItem:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,l,o,d,f,h;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=[],null==e.webkitGetAsEntry||!(l=e.webkitGetAsEntry())){n.next=36;break}if(!l.isFile){n.next=6;break}r.push(e.getAsFile()),n.next=34;break;case 6:if(!l.isDirectory){n.next=34;break}return n.next=9,t.traverseDirectory(l);case 9:o=n.sent,d=c(o),n.prev=11,d.s();case 13:if((f=d.n()).done){n.next=26;break}if(!((h=f.value)instanceof Array)){n.next=23;break}return n.t0=r,n.next=19,t.flattenEntries(h);case 19:n.t1=n.sent,r=n.t0.concat.call(n.t0,n.t1),n.next=24;break;case 23:r.push(h);case 24:n.next=13;break;case 26:n.next=31;break;case 28:n.prev=28,n.t2=n.catch(11),d.e(n.t2);case 31:return n.prev=31,d.f(),n.finish(31);case 34:n.next=37;break;case 36:null!=e.getAsFile&&(null!=e.kind&&"file"!==e.kind||r.push(e.getAsFile()));case 37:return n.abrupt("return",r);case 38:case"end":return n.stop()}}),n,null,[[11,28,31,34]])})))()},_addFilesFromItems:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,l,o,d,f,h,v,m,y;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=[],l=[],o=c(e);try{for(o.s();!(d=o.n()).done;)f=d.value,l.push(t._getItem(f))}catch(e){o.e(e)}finally{o.f()}return n.next=6,Promise.all(l);case 6:h=n.sent,v=c(h);try{for(v.s();!(m=v.n()).done;)y=m.value,r=r.concat(y)}catch(e){v.e(e)}finally{v.f()}return console.log(r),n.abrupt("return",r);case 11:case"end":return n.stop()}}),n)})))()},encryptAndEmit:function(e,t,n){var o=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(l.c)(e,t);case 2:c=r.sent,o.encryptedFiles[n]=c,o.totalSize+=c.file.size;case 5:case"end":return r.stop()}}),r)})))()},handleFileSelected:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.selectedFiles.length<1)){t.next=4;break}return console.log("no files selected"),e.encrypting=!1,t.abrupt("return");case 4:if(e.checkFiles(e.selectedFiles)){t.next=6;break}return t.abrupt("return");case 6:n=l.a.generate(16),e.$emit("passwordCreated",n),e.encrypting=!0,e.encryptedFiles={},i=0;case 11:if(!(i<e.selectedFiles.length)){t.next=25;break}return t.prev=12,t.next=15,e.encryptAndEmit(e.selectedFiles[i],n,i);case 15:t.next=22;break;case 17:return t.prev=17,t.t0=t.catch(12),e.errorMsg="Unable to encrypt file ".concat(e.selectedFiles[i].fullPath||e.selectedFiles[i].name,", please make sure you have permissions to read the file."),e.reset(),t.abrupt("break",25);case 22:i++,t.next=11;break;case 25:console.log(e.encryptedFiles),e.encrypting=!1;case 27:case"end":return t.stop()}}),t,null,[[12,17]])})))()},uploadClicked:function(){if(0!=Object.keys(this.encryptedFiles).length)if(!this.address||this.currency){this.uploading=!0;var e=[];this.address&&this.currency&&e.push({address:this.address,currency:this.currency}),this.$emit("upload",{files:this.encryptedFiles,password:this.password,caption:this.caption,addresses:e})}else this.errorMsg="Your tipping address is not recognized a valid format, please add a correct BTC or XMR address.";else console.log("no file selected")}}},v=(n(213),n(8)),component=Object(v.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sm:max-w-lg w-full p-10 bg-white rounded-xl z-10 shadow-xl"},[e.selectedFiles.length<1&&!e.encrypting?n("div",{staticClass:"text-center"},[n("h1",{staticClass:"mb-5 text-sm text-gray-400"},[e._v("\n      Your files will be encrypted locally on your device then sent to a\n      decentralized storage.\n    ")])]):e._e(),e._v(" "),n("form",{staticClass:"space-y-3"},[n("div",{staticClass:"grid grid-cols-1 space-y-2"},[n("div",{staticClass:"flex items-center justify-center w-full"},[n("transition",{attrs:{"enter-active-class":"transition-all delay-300 duration-300 ease","leave-active-class":"transition-all duration-300 ease","enter-class":"opacity-0 transform scale-0","enter-to-class":"opacity-100 transform scale-100","leave-class":"opacity-100 transform scale-100","leave-to-class":"opacity-0 transform scale-0"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.encrypting&&e.selectedFiles.length<1,expression:"!encrypting && selectedFiles.length < 1"}],ref:"dropArea",staticClass:"\n              flex flex-col\n              rounded-lg\n              border-4 border-dashed\n              w-full\n              h-64\n              p-9\n              group\n              text-center\n            ",attrs:{id:"drop-area"},on:{dragenter:function(t){return t.preventDefault(),e.highlight.apply(null,arguments)},dragover:function(t){return t.preventDefault(),e.highlight.apply(null,arguments)},dragleave:function(t){return t.preventDefault(),e.unhighlight.apply(null,arguments)},drop:function(t){t.preventDefault(),e.unhighlight(t),e.fileDropped(t)}}},[n("div",{staticClass:"\n                h-full\n                w-full\n                text-center\n                flex flex-col\n                items-center\n                justify-center\n              "},[n("CloudIcon",{staticClass:"w-20 h-20 text-blue-300 animate-bounce"}),e._v(" "),n("div",{staticClass:"flex flex-auto max-h-48 w-2/5 mx-auto -mt-10"}),e._v(" "),n("p",{staticClass:"pointer-none text-gray-500"},[n("span",{staticClass:"font-semibold"},[n("span",{staticClass:"text-sm"},[e._v("Drag and drop")]),e._v(" files here\n                  "),n("br"),e._v("\n                  or"),n("br")]),e._v(" "),n("label",{staticClass:"\n                    w-full\n                    flex\n                    justify-center\n                    bg-blue-500\n                    text-gray-100\n                    tracking-wide\n                    font-semibold\n                    focus:outline-none\n                    focus:shadow-outline\n                    hover:bg-blue-600\n                    shadow-lg\n                    cursor-pointer\n                    transition\n                    ease-in\n                    duration-300\n                    p-2\n                    rounded-lg\n                    mt-2\n                  ",attrs:{for:"file-input"}},[e._v("Click to Select")]),e._v(" "),n("input",{staticClass:"hidden",attrs:{type:"file",id:"file-input",multiple:""},on:{change:e.fileSelected}})])],1)])]),e._v(" "),n("transition",{attrs:{"enter-active-class":"transition-all delay-300 duration-300 ease","leave-active-class":"transition-all duration-300 ease","enter-class":"opacity-0 transform scale-0","enter-to-class":"opacity-100 transform scale-100","leave-class":"opacity-100 transform scale-100","leave-to-class":"opacity-0 transform scale-0"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.encrypting||e.selectedFiles.length>0,expression:"encrypting || selectedFiles.length > 0"}],staticClass:"\n              flex flex-col\n              rounded-lg\n              w-full\n              h-64\n              group\n              text-center\n              justify-around\n              items-center\n            "},[e.selectedFiles.length!=Object.keys(e.encryptedFiles).length||e.encrypting?n("div",{staticClass:"text-center flex flex-col justify-around items-center"},[n("h1",{staticClass:"font-bold text-lg mb-3 text-gray-600"},[e._v("\n                Encrypting"),e.selectedFiles.length>0?n("span",[e._v(" "+e._s(Object.keys(e.encryptedFiles).length)+"/"+e._s(e.selectedFiles.length))]):n("span",[e._v("...")])]),e._v(" "),n("Spinner")],1):n("LockIcon",{staticClass:"text-green-500 h-30 w-30 min-w-min"}),e._v(" "),n("h1",{staticClass:"font-semibold text-center my-3 text-gray-400"},[e._v("\n              Total size: "),e.totalSize>0?n("span",[e._v(e._s(e._f("formatSize")(e.totalSize)))]):e._e()])],1)])],1),e._v(" "),n("transition",{attrs:{"enter-active-class":"transition-all delay-500 duration-300 ease-out","leave-active-class":"transition-all delay-500 duration-300 ease-in","enter-class":"opacity-0 transform scale-0","enter-to-class":"opacity-100 transform scale-100","leave-class":"opacity-100 transform scale-100","leave-to-class":"opacity-0 transform scale-0"}},[e.encrypting||e.selectedFiles.length>0?n("div",{staticClass:"text-center mt-5"},[n("h4",{staticClass:"text-sm font-bold text-gray-400 tracking-wide"},[e._v("\n            Decryption Key:\n          ")]),e._v(" "),n("h2",{staticClass:"\n              text-sm\n              font-bold\n              text-red-500\n              tracking-widest\n              my-3\n              select-all\n            ",class:{"filter blur-sm":e.blurPassword},on:{mouseenter:function(t){e.blurPassword=!1},mouseleave:function(t){e.blurPassword=!0}}},[e._v("\n            "+e._s(e.password)+"\n          ")]),e._v(" "),n("p",{staticClass:"text-sm text-gray-400"},[e._v("\n            Your files cannot be opened without this key\n          ")])]):e._e()])],1),e._v(" "),n("div",{staticClass:"grid grid-cols-1 space-y-2"},[n("label",{staticClass:"text-sm font-bold text-gray-500 tracking-wide"},[e._v("Caption")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.caption,expression:"caption"}],staticClass:"\n          text-base\n          p-2\n          border border-gray-300\n          rounded-lg\n          focus:outline-none\n          focus:border-indigo-500\n          outline-none\n        ",attrs:{type:"text",placeholder:"Optional"},domProps:{value:e.caption},on:{input:function(t){t.target.composing||(e.caption=t.target.value)}}}),e._v(" "),e.showAddress?e._e():n("button",{staticClass:"p-2 text-blue-400 font-semibold",on:{click:function(t){e.showAddress=!0}}},[e._v("\n        + Add Bitcoin or Monero tipping address\n      ")]),e._v(" "),e.showAddress?n("label",{staticClass:"text-sm font-bold text-gray-500 tracking-wide"},[e._v("Wallet address or LNUrl to receive tips")]):e._e(),e._v(" "),e.showAddress?n("WalletInput",{on:{validated:e.setAddress}}):e._e()],1),e._v(" "),n("div",[n("button",{staticClass:"\n          mt-5\n          w-full\n          flex\n          justify-center\n          p-4\n          tracking-wide\n          font-semibold\n          rounded-xl\n        ",class:{"bg-gray-100 text-gray-400 cursor-not-allowed\tshadow":e.selectedFiles.length<1||e.encrypting||e.uploading,"bg-blue-500 text-gray-100 focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300":!(e.selectedFiles.length<1||e.encrypting||e.uploading)},attrs:{disabled:e.selectedFiles.length<1||e.encrypting||e.uploading},on:{click:function(t){return t.preventDefault(),e.uploadClicked.apply(null,arguments)}}},[e._v("\n        Upload\n      ")])])]),e._v(" "),n("Modal",{directives:[{name:"show",rawName:"v-show",value:e.errorMsg,expression:"errorMsg"}],attrs:{message:e.errorMsg},on:{ok:function(t){e.errorMsg=""}}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CloudIcon:n(209).default,LockIcon:n(210).default,Spinner:n(125).default,WalletInput:n(227).default,Modal:n(193).default})}}]);