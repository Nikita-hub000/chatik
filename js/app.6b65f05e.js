(function(e){function t(t){for(var r,s,c=t[0],a=t[1],u=t[2],l=0,d=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);b&&b(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},s={app:0},o={app:0},i=[];function c(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-431fc0ed":"8568c62e"}[e]+".js"}function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n={"chunk-431fc0ed":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-431fc0ed":"16eefd88"}[e]+".css",o=a.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete s[e],b.parentNode.removeChild(b),n(i)},b.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(b)})).then((function(){s[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",d.name="ChunkLoadError",d.type=r,d.request=s,n[1](d)}o[e]=void 0}};var b=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var b=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3071:function(e,t,n){},3228:function(e,t,n){},4360:function(e,t,n){"use strict";n("b0c0");var r=n("5502"),s=Object(r["a"])({state:function(){return{isEnter:!0,name:""}},getters:{},mutations:{login:function(e){e.isEnter=!1},notlogin:function(e){e.isEnter=!0},showName:function(e,t){e.name=t}}});t["a"]=s},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),s={id:"nav"},o=Object(r["i"])("Home"),i=Object(r["i"])(" | "),c=Object(r["i"])("Chat");function a(e,t){var n=Object(r["A"])("router-link"),a=Object(r["A"])("router-view");return Object(r["t"])(),Object(r["g"])(r["a"],null,[Object(r["h"])("div",s,[Object(r["j"])(n,{to:"/"},{default:Object(r["G"])((function(){return[o]})),_:1}),i,Object(r["j"])(n,{class:Object(r["p"])({disabled:e.$store.state.isEnter}),to:"/about"},{default:Object(r["G"])((function(){return[c]})),_:1},8,["class"])]),Object(r["j"])(a)],64)}n("c582");const u={};u.render=a;var l=u,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),b={class:"home"};function h(e,t,n,s,o,i){var c=Object(r["A"])("register");return Object(r["t"])(),Object(r["g"])("div",b,[Object(r["j"])(c)])}n("b0c0");Object(r["w"])("data-v-5bdbbd08");var p={key:0},f=Object(r["h"])("div",{class:"ribbon"},null,-1),m={class:"login"},g=Object(r["h"])("h1",null,"Sign in",-1),O=Object(r["h"])("p",null,"This will be an amazing experience",-1),j={class:"input"},v={class:"blockinput"},w=Object(r["h"])("i",{class:"icon-envelope-alt"},null,-1),y={class:"blockinput"},k=Object(r["h"])("i",{class:"icon-unlock"},null,-1),S={key:0,style:{"margin-top":"10px"}},_={key:1,style:{"margin-top":"10px"}},E={key:1},L=Object(r["h"])("div",{class:"ribbon"},null,-1),C={class:"login"},x=Object(r["h"])("h1",null,"Sign up",-1),A=Object(r["h"])("p",null,"This will be an amazing experience",-1),P={class:"input"},N={class:"blockinput"},T=Object(r["h"])("i",{class:"icon-envelope-alt"},null,-1),H={class:"blockinput"},R=Object(r["h"])("i",{class:"icon-unlock"},null,-1),U={key:0,style:{"margin-top":"10px"}};function V(e,t,n,s,o,i){return Object(r["t"])(),Object(r["g"])("form",{onSubmit:t[8]||(t[8]=Object(r["I"])((function(){}),["prevent"])),class:"register"},[o.isShowSign?(Object(r["t"])(),Object(r["g"])("div",p,[f,Object(r["h"])("div",m,[g,O,Object(r["h"])("div",j,[Object(r["h"])("div",v,[w,Object(r["H"])(Object(r["h"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.userLog.name=e}),placeholder:"Name"},null,512),[[r["E"],o.userLog.name]])]),Object(r["h"])("div",y,[k,Object(r["H"])(Object(r["h"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.userLog.password=e}),placeholder:"Password"},null,512),[[r["E"],o.userLog.password]])])]),Object(r["h"])("button",{class:"register__btn",onClick:t[2]||(t[2]=function(e){return i.sign()})}," Войти "),Object(r["h"])("button",{class:"register__btn",onClick:t[3]||(t[3]=function(e){return i.showReg()})}," Еще нет аккаунта? Зарегистрироваться ")]),o.isRegOk?(Object(r["t"])(),Object(r["g"])("p",S," Вы успешно зарегистрировались ")):Object(r["f"])("",!0),o.isSign?(Object(r["t"])(),Object(r["g"])("p",_," Вы ввели неверные данные ")):Object(r["f"])("",!0)])):o.isShowSign?Object(r["f"])("",!0):(Object(r["t"])(),Object(r["g"])("div",E,[L,Object(r["h"])("div",C,[x,A,Object(r["h"])("div",P,[Object(r["h"])("div",N,[T,Object(r["H"])(Object(r["h"])("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return o.user.name=e}),placeholder:"Name"},null,512),[[r["E"],o.user.name]])]),Object(r["h"])("div",H,[R,Object(r["H"])(Object(r["h"])("input",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return o.user.password=e}),placeholder:"Password"},null,512),[[r["E"],o.user.password]])])]),Object(r["h"])("button",{class:"register__btn",onClick:t[6]||(t[6]=function(e){return i.addNewUser()})}," Зарегистрироваться "),Object(r["h"])("button",{class:"register__btn",onClick:t[7]||(t[7]=function(e){return i.showLogin()})}," Уже есть аккаунт? Войти ")]),o.isOk?(Object(r["t"])(),Object(r["g"])("p",U," Такой аккаунт уже существует. Попробуйте друго имя пользователя ")):Object(r["f"])("",!0)]))],32)}Object(r["u"])();n("caad");var M=n("4360"),K={data:function(){return{isOk:!1,isSign:!1,isRegOk:!1,isShowSign:!0,user:{id:Math.random(1,1e4),name:"",password:""},userLog:{name:"",password:""},users:[{id:1,name:"Vitya",password:"12345"},{id:2,name:"Kolya",password:"12345"},{id:3,name:"Andrey1",password:"12345"},{id:4,name:"Vitya2",password:"12345"},{id:5,name:"Kolya3",password:"12345"},{id:6,name:"Andrey4",password:"12345"},{id:7,name:"Vitya444",password:"12345"},{id:8,name:"Kolya222",password:"12345"},{id:9,name:"Andrey1212",password:"12345"}]}},emits:["enter"],methods:{addNewUser:function(){for(var e=[],t=0;t<this.users.length;t++)e.push(this.users[t]["name"]===this.user.name);e.includes(!0)?(this.isOk=!0,this.isRegOk=!1):(this.users.push({id:this.users[this.users.length-1]["id"]+1,name:this.user.name,password:this.user.password}),this.isOk=!1,this.isShowSign=!0,this.isRegOk=!0),console.log(this.users)},showLogin:function(){this.isShowSign=!0},showReg:function(){this.isShowSign=!1},sign:function(){var e=this;this.users.some((function(t){return t["name"]===e.userLog.name&&t["password"]===e.userLog.password}))?(this.isSign=!1,this.isRegOk=!1,this.$router.push("/about"),M["a"].commit("showName",{name:this.userLog.name}),M["a"].commit("login")):(this.isSign=!0,M["a"].commit("notlogin"))}}};n("ecb9");K.render=V,K.__scopeId="data-v-5bdbbd08";var B=K,I={components:{Register:B},name:"Home"};I.render=h;var q=I,z=[{path:"/",name:"Home",component:q},{path:"/about",name:"Chat",component:function(){return n.e("chunk-431fc0ed").then(n.bind(null,"f820"))}}],D=Object(d["a"])({history:Object(d["b"])("/"),routes:z}),G=D;Object(r["d"])(l).use(M["a"]).use(G).mount("#app")},c582:function(e,t,n){"use strict";n("3071")},ecb9:function(e,t,n){"use strict";n("3228")}});
//# sourceMappingURL=app.6b65f05e.js.map