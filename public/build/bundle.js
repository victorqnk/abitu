var app=function(){"use strict";function e(){}function a(e){return e()}function n(){return Object.create(null)}function t(e){e.forEach(a)}function s(e){return"function"==typeof e}function l(e,a){return e!=e?a==a:e!==a||e&&"object"==typeof e||"function"==typeof e}function o(e,a){e.appendChild(a)}function i(e,a,n){e.insertBefore(a,n||null)}function r(e){e.parentNode.removeChild(e)}function c(e){return document.createElement(e)}function u(e){return document.createTextNode(e)}function d(){return u(" ")}function m(e,a,n,t){return e.addEventListener(a,n,t),()=>e.removeEventListener(a,n,t)}function p(e,a,n){null==n?e.removeAttribute(a):e.getAttribute(a)!==n&&e.setAttribute(a,n)}function f(e,a){a=""+a,e.wholeText!==a&&(e.data=a)}function v(e,a){e.value=null==a?"":a}function g(e,a,n){e.classList[n?"add":"remove"](a)}let y;function h(e){y=e}function q(){const e=function(){if(!y)throw new Error("Function called outside component initialization");return y}();return(a,n)=>{const t=e.$$.callbacks[a];if(t){const s=function(e,a){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,a),n}(a,n);t.slice().forEach((a=>{a.call(e,s)}))}}}const b=[],j=[],C=[],w=[],S=Promise.resolve();let x=!1;function z(e){C.push(e)}let k=!1;const E=new Set;function O(){if(!k){k=!0;do{for(let e=0;e<b.length;e+=1){const a=b[e];h(a),A(a.$$)}for(h(null),b.length=0;j.length;)j.pop()();for(let e=0;e<C.length;e+=1){const a=C[e];E.has(a)||(E.add(a),a())}C.length=0}while(b.length);for(;w.length;)w.pop()();x=!1,k=!1,E.clear()}}function A(e){if(null!==e.fragment){e.update(),t(e.before_update);const a=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,a),e.after_update.forEach(z)}}const N=new Set;let $;function M(e,a){e&&e.i&&(N.delete(e),e.i(a))}function T(e,a,n,t){if(e&&e.o){if(N.has(e))return;N.add(e),$.c.push((()=>{N.delete(e),t&&(n&&e.d(1),t())})),e.o(a)}}function _(e){e&&e.c()}function Q(e,n,l){const{fragment:o,on_mount:i,on_destroy:r,after_update:c}=e.$$;o&&o.m(n,l),z((()=>{const n=i.map(a).filter(s);r?r.push(...n):t(n),e.$$.on_mount=[]})),c.forEach(z)}function H(e,a){const n=e.$$;null!==n.fragment&&(t(n.on_destroy),n.fragment&&n.fragment.d(a),n.on_destroy=n.fragment=null,n.ctx=[])}function R(e,a){-1===e.$$.dirty[0]&&(b.push(e),x||(x=!0,S.then(O)),e.$$.dirty.fill(0)),e.$$.dirty[a/31|0]|=1<<a%31}function J(a,s,l,o,i,c,u=[-1]){const d=y;h(a);const m=a.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let p=!1;if(m.ctx=l?l(a,s.props||{},((e,n,...t)=>{const s=t.length?t[0]:n;return m.ctx&&i(m.ctx[e],m.ctx[e]=s)&&(!m.skip_bound&&m.bound[e]&&m.bound[e](s),p&&R(a,e)),n})):[],m.update(),p=!0,t(m.before_update),m.fragment=!!o&&o(m.ctx),s.target){if(s.hydrate){const e=function(e){return Array.from(e.childNodes)}(s.target);m.fragment&&m.fragment.l(e),e.forEach(r)}else m.fragment&&m.fragment.c();s.intro&&M(a.$$.fragment),Q(a,s.target,s.anchor),O()}h(d)}class L{$destroy(){H(this,1),this.$destroy=e}$on(e,a){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(a),()=>{const e=n.indexOf(a);-1!==e&&n.splice(e,1)}}$set(e){var a;this.$$set&&(a=e,0!==Object.keys(a).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function B(e,a,n){const t=e.slice();return t[14]=a[n],t[16]=n,t}function D(e){let a;return{c(){a=c("p"),a.innerHTML='<small class="svelte-3ma5hr">Elige una respuesta</small>'},m(e,n){i(e,a,n)},d(e){e&&r(a)}}}function G(e){let a;return{c(){a=c("p"),a.innerHTML='<small class="svelte-3ma5hr">Deja tu dirección de correo electrónico para estar en contacto<br/>A\n      continuación podrás conocer tus resultados</small>'},m(e,n){i(e,a,n)},d(e){e&&r(a)}}}function P(e){let a;return{c(){a=c("p"),a.innerHTML='<small class="svelte-3ma5hr">Puedes elegir varias respuestas</small>'},m(e,n){i(e,a,n)},d(e){e&&r(a)}}}function V(e){let a,n,t,l,v,y=e[14].a+"";return{c(){a=c("li"),n=u(y),t=d(),p(a,"class","svelte-3ma5hr"),g(a,"active",e[2]instanceof Array?e[2].includes(e[16]):e[2]===e[16]),g(a,"multiple","MOQ"===e[0].type)},m(r,c){i(r,a,c),o(a,n),o(a,t),l||(v=m(a,"click",(function(){s(e[6](e[14],e[16]))&&e[6](e[14],e[16]).apply(this,arguments)})),l=!0)},p(t,s){e=t,1&s&&y!==(y=e[14].a+"")&&f(n,y),4&s&&g(a,"active",e[2]instanceof Array?e[2].includes(e[16]):e[2]===e[16]),1&s&&g(a,"multiple","MOQ"===e[0].type)},d(e){e&&r(a),l=!1,v()}}}function W(e){let a,n,s,l,u,f;return{c(){a=c("div"),n=c("input"),s=d(),l=c("input"),p(n,"type","text"),p(n,"placeholder","Nombre completo*"),p(n,"class","svelte-3ma5hr"),p(l,"type","email"),p(l,"placeholder","Correo electrónico*"),p(l,"class","svelte-3ma5hr"),p(a,"class","inputs svelte-3ma5hr")},m(t,r){i(t,a,r),o(a,n),v(n,e[4]),o(a,s),o(a,l),v(l,e[5]),u||(f=[m(n,"input",e[10]),m(l,"input",e[11])],u=!0)},p(e,a){16&a&&n.value!==e[4]&&v(n,e[4]),32&a&&l.value!==e[5]&&v(l,e[5])},d(e){e&&r(a),u=!1,t(f)}}}function I(a){let n,t,s;return{c(){n=c("button"),n.textContent="Previo",p(n,"class","active svelte-3ma5hr")},m(e,l){i(e,n,l),t||(s=m(n,"click",a[9]),t=!0)},p:e,d(e){e&&r(n),t=!1,s()}}}function F(e){let a,n,t,s,l=e[1]<20?"Siguiente":"Terminar";return{c(){a=c("button"),n=u(l),p(a,"class","svelte-3ma5hr"),g(a,"active",e[3])},m(l,r){i(l,a,r),o(a,n),t||(s=m(a,"click",e[8]),t=!0)},p(e,t){2&t&&l!==(l=e[1]<20?"Siguiente":"Terminar")&&f(n,l),8&t&&g(a,"active",e[3])},d(e){e&&r(a),t=!1,s()}}}function K(e){let a,n,t;return{c(){a=c("button"),a.textContent="Ver resultado",p(a,"class","center svelte-3ma5hr"),g(a,"active",U(e[5])&&e[4])},m(s,l){i(s,a,l),n||(t=m(a,"click",e[7]),n=!0)},p(e,n){48&n&&g(a,"active",U(e[5])&&e[4])},d(e){e&&r(a),n=!1,t()}}}function Z(a){let n,t,s,l,m,v,g,y,h,q,b=a[0].ask+"";function j(e,a){return"MOQ"===e[0].type?P:"IQ"===e[0].type?G:D}let C=j(a),w=C(a),S=a[0].answers,x=[];for(let e=0;e<S.length;e+=1)x[e]=V(B(a,S,e));let z="IQ"===a[0].type&&W(a),k=a[1]>0&&20!=a[1]&&I(a),E=a[1]<20&&F(a),O=20==a[1]&&K(a);return{c(){n=c("p"),t=u(b),s=d(),w.c(),l=d(),m=c("ul");for(let e=0;e<x.length;e+=1)x[e].c();v=d(),z&&z.c(),g=d(),y=c("div"),k&&k.c(),h=d(),E&&E.c(),q=d(),O&&O.c(),p(m,"class","svelte-3ma5hr"),p(y,"class","buttons")},m(e,a){i(e,n,a),o(n,t),i(e,s,a),w.m(e,a),i(e,l,a),i(e,m,a);for(let e=0;e<x.length;e+=1)x[e].m(m,null);i(e,v,a),z&&z.m(e,a),i(e,g,a),i(e,y,a),k&&k.m(y,null),o(y,h),E&&E.m(y,null),o(y,q),O&&O.m(y,null)},p(e,[a]){if(1&a&&b!==(b=e[0].ask+"")&&f(t,b),C!==(C=j(e))&&(w.d(1),w=C(e),w&&(w.c(),w.m(l.parentNode,l))),69&a){let n;for(S=e[0].answers,n=0;n<S.length;n+=1){const t=B(e,S,n);x[n]?x[n].p(t,a):(x[n]=V(t),x[n].c(),x[n].m(m,null))}for(;n<x.length;n+=1)x[n].d(1);x.length=S.length}"IQ"===e[0].type?z?z.p(e,a):(z=W(e),z.c(),z.m(g.parentNode,g)):z&&(z.d(1),z=null),e[1]>0&&20!=e[1]?k?k.p(e,a):(k=I(e),k.c(),k.m(y,h)):k&&(k.d(1),k=null),e[1]<20?E?E.p(e,a):(E=F(e),E.c(),E.m(y,q)):E&&(E.d(1),E=null),20==e[1]?O?O.p(e,a):(O=K(e),O.c(),O.m(y,null)):O&&(O.d(1),O=null)},i:e,o:e,d(e){e&&r(n),e&&r(s),w.d(e),e&&r(l),e&&r(m),function(e,a){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(a)}(x,e),e&&r(v),z&&z.d(e),e&&r(g),e&&r(y),k&&k.d(),E&&E.d(),O&&O.d()}}}function U(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}function Y(e,a,n){const t=q();let s,l,o,i,{question:r}=a,{current:c}=a;function u(){n(3,l=null),n(2,s=null)}return e.$$set=e=>{"question"in e&&n(0,r=e.question),"current"in e&&n(1,c=e.current)},[r,c,s,l,o,i,function(e,a){if("MOQ"===r.type){if(s instanceof Array)if(s.includes(a)){let e=s.indexOf(a);s.splice(e,1),n(2,s=[...s])}else n(2,s=[a,...s]);else n(2,s=[a]);if(l instanceof Array)if(l.includes(e)){let a=l.indexOf(e);l.splice(a,1),n(3,l=[...l])}else n(3,l=[e,...l]);else n(3,l=[e])}else n(2,s=a),n(3,l=e)},function(){t("answer",{answer:{name:o,email:i}}),u()},function(){l&&(t("answer",{answer:l,next:!0}),u())},function(){t("answer",{answer:null,next:!1}),u()},function(){o=this.value,n(4,o)},function(){i=this.value,n(5,i)}]}class X extends L{constructor(e){super(),J(this,e,Y,Z,l,{question:0,current:1})}}function ee(e){let a;return{c(){a=c("p"),a.innerHTML="<small>Contestaste que actualmente estás bajo tratamiento con un medicamento que requiere receta médica, por lo que te recomendamos consultar a tu médico antes de consumir nuestros productos.</small>"},m(e,n){i(e,a,n)},d(e){e&&r(a)}}}function ae(e){let a;return{c(){a=c("p"),a.innerHTML="<small>Contestaste que actualmente tienes una condición médica, por lo que te recomendamos continuar tu tratamiento y consultar cualquier duda con tu médico.</small>"},m(e,n){i(e,a,n)},d(e){e&&r(a)}}}function ne(e){let a,n,t,s,l,u,m,f,v,g,y,h,q,b,j,C,w,S,x,z,k="50+"===e[1][1].a||JSON.stringify(e[1][3]).includes("Mejorar sistema inmunológico")||"Sí"===e[1][7].a||"Sí"===e[1][12].a,E=JSON.stringify(e[1][3]).includes("Mejorar sistema inmunológico"),O=k&&te(),A="50+"===e[1][1].a&&se(),N=E&&le(),$="6+"==e[1][6].a&&oe(),M="Sí"===e[1][7].a&&ie(),T="Sí"===e[1][12].a&&re();return{c(){a=c("div"),n=c("img"),s=d(),l=c("div"),u=c("h6"),u.textContent="TE RECOMENDAMOS",m=d(),f=c("h3"),f.textContent="Wellaid",v=d(),g=c("p"),g.textContent="Wllaid es un suplemento que contiene Vitamina D3, Zinc, Vitamina C, Ácido Alfa Lipóico, Resveratrol, N-acetilcisteína y Semilla de Uva.",y=c("p"),y.textContent="Su combinación de ingredientes te ayudará a fortalecer tus defensas, potenciar la función de tu  sistema inmune y aumentar la capacidad antioxidante del organismo.",h=d(),O&&O.c(),q=d(),b=c("ul"),A&&A.c(),j=d(),N&&N.c(),C=d(),$&&$.c(),w=d(),M&&M.c(),S=d(),T&&T.c(),x=d(),z=c("button"),z.textContent="Agregar al carrito",n.src!==(t="https://cdn.shopify.com/s/files/1/0327/9375/5786/products/Abitu_7_960x.jpg?v=1597100044")&&p(n,"src","https://cdn.shopify.com/s/files/1/0327/9375/5786/products/Abitu_7_960x.jpg?v=1597100044"),p(n,"alt","wellaid"),p(n,"class","svelte-hqfjz5"),p(u,"class","svelte-hqfjz5"),p(f,"class","svelte-hqfjz5"),p(g,"class","svelte-hqfjz5"),p(y,"class","svelte-hqfjz5"),p(z,"id","AddToCart__btn"),p(z,"data-product","Wellaid"),p(z,"class","svelte-hqfjz5"),p(l,"class","text svelte-hqfjz5"),p(a,"class","col svelte-hqfjz5")},m(e,t){i(e,a,t),o(a,n),o(a,s),o(a,l),o(l,u),o(l,m),o(l,f),o(l,v),o(l,g),o(l,y),o(l,h),O&&O.m(l,null),o(l,q),o(l,b),A&&A.m(b,null),o(b,j),N&&N.m(b,null),o(b,C),$&&$.m(b,null),o(b,w),M&&M.m(b,null),o(b,S),T&&T.m(b,null),o(l,x),o(l,z)},p(e,a){2&a&&(k="50+"===e[1][1].a||JSON.stringify(e[1][3]).includes("Mejorar sistema inmunológico")||"Sí"===e[1][7].a||"Sí"===e[1][12].a),k?O||(O=te(),O.c(),O.m(l,q)):O&&(O.d(1),O=null),"50+"===e[1][1].a?A||(A=se(),A.c(),A.m(b,j)):A&&(A.d(1),A=null),2&a&&(E=JSON.stringify(e[1][3]).includes("Mejorar sistema inmunológico")),E?N||(N=le(),N.c(),N.m(b,C)):N&&(N.d(1),N=null),"6+"==e[1][6].a?$||($=oe(),$.c(),$.m(b,w)):$&&($.d(1),$=null),"Sí"===e[1][7].a?M||(M=ie(),M.c(),M.m(b,S)):M&&(M.d(1),M=null),"Sí"===e[1][12].a?T||(T=re(),T.c(),T.m(b,null)):T&&(T.d(1),T=null)},d(e){e&&r(a),O&&O.d(),A&&A.d(),N&&N.d(),$&&$.d(),M&&M.d(),T&&T.d()}}}function te(e){let a;return{c(){a=c("h4"),a.innerHTML="Por qué wellaid es <b>para ti</b>",p(a,"class","svelte-hqfjz5")},m(e,n){i(e,a,n)},d(e){e&&r(a)}}}function se(e){let a;return{c(){a=c("li"),a.textContent="Contestaste que tienes más de 50 años, por lo que te recomendamos incluir WELLAID en tu rutina diaria, ya que con el paso del tiempo, nuestro sistema inmune va perdiendo fuerza y efectividad para protegernos. Este suplemento contiene zinc, vitamina D y antioxidantes, los cuales son elementos que ayudan a dar esa fuerza a tus defensas.",p(a,"class","svelte-hqfjz5")},m(e,n){i(e,a,n)},d(e){e&&r(a)}}}function le(e){let a;return{c(){a=c("li"),a.textContent="Contestaste que tu objetivo principal para tomar suplementos es fortalecer tu sistema inmune. Te recomendamos incluir WELLAID en tu rutina para que estés reforzado con vitamina D, C, Zinc y antioxidantes.",p(a,"class","svelte-hqfjz5")},m(e,n){i(e,a,n)},d(e){e&&r(a)}}}function oe(e){let a;return{c(){a=c("li"),a.textContent="Contestaste que tomas más de 6 copas de alcohol a la semana. El consumo de alcohol suprime el sistema inmune, por lo que te recomendamos tomar wellaid, cuyos ingredientes te ayudarán a fortalecer tus defensas.",p(a,"class","svelte-hqfjz5")},m(e,n){i(e,a,n)},d(e){e&&r(a)}}}function ie(e){let a;return{c(){a=c("li"),a.textContent="Debido a que actualmente fumas, te recomendamos wellaid. Este suplemento contiene antioxidantes, entre ellos vitamina C, n-acetilcisteína y resveratrol,  que ayudan a contrarrestar el daño celular causado por las toxinas provenientes del cigarro.",p(a,"class","svelte-hqfjz5")},m(e,n){i(e,a,n)},d(e){e&&r(a)}}}function re(e){let a;return{c(){a=c("li"),a.textContent="Contestaste que te enfermas con frecuencia, por lo que te recomendamos wellaid un suplemento que contiene zinc, vitamina D y antioxidantes, los cuales ayudan a fortalecer tu sistema inmunológico y asi evitar el riesgo de enfermar.",p(a,"class","svelte-hqfjz5")},m(e,n){i(e,a,n)},d(e){e&&r(a)}}}function ce(e){let a,n,t,s,l,u,m,f,v,g,y,h,q,b,j,C,w,S,x,z,k,E,O=JSON.stringify(e[1][3]).includes("Mejorar niveles de energía")||JSON.stringify(e[1][4]).includes("Keto")||JSON.stringify(e[1][4]).includes("Vegano")||JSON.stringify(e[1][4]).includes("Vegetariano")||"6+"==e[1][6].a||"Sí"===e[1][13].a||"A veces"===e[1][13].a||"Sí"===e[1][14].a||"A veces"===e[1][14].a||"Todo el tiempo"===e[1][15].a||"Casi siempre"==e[1][15].a,A=JSON.stringify(e[1][3]).includes("Mejorar niveles de energía"),N=JSON.stringify(e[1][4]).includes("Keto"),$=JSON.stringify(e[1][4]).includes("Vegano"),M=JSON.stringify(e[1][4]).includes("Vegetariano"),T=O&&ue(),_=A&&de(),Q=N&&me(),H=$&&pe(),R=M&&fe(),J="6+"==e[1][6].a&&ve(),L=("Sí"==e[1][13].a||"A veces"==e[1][13].a)&&ge(),B=("Sí"===e[1][14].a||"A veces"==e[1][14].a)&&ye(),D=("Todo el tiempo"===e[1][15].a||"Casi siempre"==e[1][15].a)&&he();return{c(){a=c("div"),n=c("img"),s=d(),l=c("div"),u=c("h6"),u.textContent="TE RECOMENDAMOS",m=d(),f=c("h3"),f.textContent="Recharge",v=d(),g=c("p"),g.innerHTML="Con su combinación de Complejo B, cafeína, L-teanina y Bacopa Monnieri, <b>Recharge contribuye a aumentar tus niveles de energía durante el día, disminuir el estrés, potenciar la memoria y concentración, ayudándote a rendir al máximo en tus actividades diarias.</b>",y=d(),T&&T.c(),h=d(),q=c("ul"),_&&_.c(),b=d(),Q&&Q.c(),j=d(),H&&H.c(),C=d(),R&&R.c(),w=d(),J&&J.c(),S=d(),L&&L.c(),x=d(),B&&B.c(),z=d(),D&&D.c(),k=d(),E=c("button"),E.textContent="Agregar al carrito",n.src!==(t="https://cdn.shopify.com/s/files/1/0327/9375/5786/products/Abitu_48_960x.jpg?v=1611522218")&&p(n,"src","https://cdn.shopify.com/s/files/1/0327/9375/5786/products/Abitu_48_960x.jpg?v=1611522218"),p(n,"alt","Recharge"),p(n,"class","svelte-hqfjz5"),p(u,"class","svelte-hqfjz5"),p(f,"class","svelte-hqfjz5"),p(g,"class","svelte-hqfjz5"),p(E,"id","AddToCart__btn"),p(E,"data-product","Recharge"),p(E,"class","svelte-hqfjz5"),p(l,"class","text svelte-hqfjz5"),p(a,"class","col svelte-hqfjz5")},m(e,t){i(e,a,t),o(a,n),o(a,s),o(a,l),o(l,u),o(l,m),o(l,f),o(l,v),o(l,g),o(l,y),T&&T.m(l,null),o(l,h),o(l,q),_&&_.m(q,null),o(q,b),Q&&Q.m(q,null),o(q,j),H&&H.m(q,null),o(q,C),R&&R.m(q,null),o(q,w),J&&J.m(q,null),o(q,S),L&&L.m(q,null),o(q,x),B&&B.m(q,null),o(q,z),D&&D.m(q,null),o(l,k),o(l,E)},p(e,a){2&a&&(O=JSON.stringify(e[1][3]).includes("Mejorar niveles de energía")||JSON.stringify(e[1][4]).includes("Keto")||JSON.stringify(e[1][4]).includes("Vegano")||JSON.stringify(e[1][4]).includes("Vegetariano")||"6+"==e[1][6].a||"Sí"===e[1][13].a||"A veces"===e[1][13].a||"Sí"===e[1][14].a||"A veces"===e[1][14].a||"Todo el tiempo"===e[1][15].a||"Casi siempre"==e[1][15].a),O?T||(T=ue(),T.c(),T.m(l,h)):T&&(T.d(1),T=null),2&a&&(A=JSON.stringify(e[1][3]).includes("Mejorar niveles de energía")),A?_||(_=de(),_.c(),_.m(q,b)):_&&(_.d(1),_=null),2&a&&(N=JSON.stringify(e[1][4]).includes("Keto")),N?Q||(Q=me(),Q.c(),Q.m(q,j)):Q&&(Q.d(1),Q=null),2&a&&($=JSON.stringify(e[1][4]).includes("Vegano")),$?H||(H=pe(),H.c(),H.m(q,C)):H&&(H.d(1),H=null),2&a&&(M=JSON.stringify(e[1][4]).includes("Vegetariano")),M?R||(R=fe(),R.c(),R.m(q,w)):R&&(R.d(1),R=null),"6+"==e[1][6].a?J||(J=ve(),J.c(),J.m(q,S)):J&&(J.d(1),J=null),"Sí"==e[1][13].a||"A veces"==e[1][13].a?L||(L=ge(),L.c(),L.m(q,x)):L&&(L.d(1),L=null),"Sí"===e[1][14].a||"A veces"==e[1][14].a?B||(B=ye(),B.c(),B.m(q,z)):B&&(B.d(1),B=null),"Todo el tiempo"===e[1][15].a||"Casi siempre"==e[1][15].a?D||(D=he(),D.c(),D.m(q,null)):D&&(D.d(1),D=null)},d(e){e&&r(a),T&&T.d(),_&&_.d(),Q&&Q.d(),H&&H.d(),R&&R.d(),J&&J.d(),L&&L.d(),B&&B.d(),D&&D.d()}}}function ue(e){let a;return{c(){a=c("h4"),a.innerHTML="Por qué Recharge es <b>para ti</b>",p(a,"class","svelte-hqfjz5")},m(e,n){i(e,a,n)},d(e){e&&r(a)}}}function de(e){let a;return{c(){a=c("li"),a.textContent="Contestaste que quieres mejorar tus niveles de energía, por lo que te recomendamos RECHARGE, cuya combinación de ingredientes te ayudarán a sentirte más energético, concentrado y relajado, ayudándote a rendir al máximo en tu día a día.",p(a,"class","svelte-hqfjz5")},m(e,n){i(e,a,n)},d(e){e&&r(a)}}}function me(e){let a;return{c(){a=c("li"),a.textContent="Contestaste que mantienes una dieta cetogénica, por lo que tu consumo de frutas y verduras es limitado y eso puede provocar deficiencias de vitaminas. Debido a esto, te recomendamos RECHARGE, que incluye todas las vitaminas del complejo B.",p(a,"class","svelte-hqfjz5")},m(e,n){i(e,a,n)},d(e){e&&r(a)}}}function pe(e){let a;return{c(){a=c("li"),a.textContent="Contestaste que mantienes una dieta vegana, por lo que te recomendamos incluir RECHARGE en tu rutina diaria, ya que contiene vitamina B12, la cual es necesaria suplementar en quienes no consumen productos de origen animal.",p(a,"class","svelte-hqfjz5")},m(e,n){i(e,a,n)},d(e){e&&r(a)}}}function fe(e){let a;return{c(){a=c("li"),a.textContent="Contestaste que mantienes una dieta vegetariana, por lo que te recomendamos incluir RECHARGE en tu rutina diaria, ya que contiene vitamina B12, la cual es necesaria suplementar en quienes no consumen productos de origen animal.",p(a,"class","svelte-hqfjz5")},m(e,n){i(e,a,n)},d(e){e&&r(a)}}}function ve(e){let a;return{c(){a=c("li"),a.textContent="Contestaste que tomas más de 6 copas de alcohol a la semana, por lo que te recomendamos tomar RECHARGE. El consumo de alcohol disminuye las reservas de vitaminas B. RECHARGE contiene cinco vitaminas del complejo B (B1, B2, B5, B6, B12), ayudándote a recuperar lo perdido por esas noches de copas.",p(a,"class","svelte-hqfjz5")},m(e,n){i(e,a,n)},d(e){e&&r(a)}}}function ge(e){let a;return{c(){a=c("li"),a.textContent="Contestaste que en ocasiones te sientes cansado, que tiendes a sentirte sin energía o con sueño a media tarde, por lo que te recomendamos consumir RECHARGE . Este suplemento contiene elementos que ayudan a aumentar los niveles de energía durante el día, así como mejorar la memoria y concentración.",p(a,"class","svelte-hqfjz5")},m(e,n){i(e,a,n)},d(e){e&&r(a)}}}function ye(e){let a;return{c(){a=c("li"),a.textContent="Contestaste que a veces te cuesta trabajo concentrarte, por lo que te recomendamos RECHARGE. Este suplemento contiene bacopa, un adaptógeno que ayuda a mejorar los niveles de atención y memoria.",p(a,"class","svelte-hqfjz5")},m(e,n){i(e,a,n)},d(e){e&&r(a)}}}function he(e){let a;return{c(){a=c("li"),a.textContent="Contestaste que sueles sentirte estresado, por lo que te recomendamos RECHARGE, que contiene L-teanina, un aminoácido que tiene propiedades relajantes, contribuyendo a disminuir los niveles de ansiedad y estrés.",p(a,"class","svelte-hqfjz5")},m(e,n){i(e,a,n)},d(e){e&&r(a)}}}function qe(e){let a,n,t,s,l,u,m,f,v,g,y,h,q,b,j,C,w=JSON.stringify(e[1][3]).includes("Belleza")||"Sí"===e[1][11].a||"Sí"===e[1][9].a&&"Sí"===e[1][10].a,S=JSON.stringify(e[1][3]).includes("Belleza"),x=w&&be(),z=S&&je(),k="Sí"===e[1][11].a&&Ce();return{c(){a=c("div"),n=c("img"),s=d(),l=c("div"),u=c("h6"),u.textContent="TE RECOMENDAMOS",m=d(),f=c("h3"),f.textContent="Glow",v=d(),g=c("p"),g.innerHTML="Glow contiene Vitamina E, Ácido Hialurónico, Biotina y Shiitake. Esta combinación <b>está destinada a mantener la hidratación de tu piel y aportarte los nutrientes esenciales para tener un cabello brillante y uñas fuertes y sanas.</b>",y=d(),x&&x.c(),h=d(),q=c("ul"),z&&z.c(),b=d(),k&&k.c(),j=d(),C=c("button"),C.textContent="Agregar al carrito",n.src!==(t="https://cdn.shopify.com/s/files/1/0327/9375/5786/products/Abitu_12_960x.jpg?v=1597100352")&&p(n,"src","https://cdn.shopify.com/s/files/1/0327/9375/5786/products/Abitu_12_960x.jpg?v=1597100352"),p(n,"alt","Glow"),p(n,"class","svelte-hqfjz5"),p(u,"class","svelte-hqfjz5"),p(f,"class","svelte-hqfjz5"),p(g,"class","svelte-hqfjz5"),p(C,"id","AddToCart__btn"),p(C,"data-product","Glow"),p(C,"class","svelte-hqfjz5"),p(l,"class","text svelte-hqfjz5"),p(a,"class","col svelte-hqfjz5")},m(e,t){i(e,a,t),o(a,n),o(a,s),o(a,l),o(l,u),o(l,m),o(l,f),o(l,v),o(l,g),o(l,y),x&&x.m(l,null),o(l,h),o(l,q),z&&z.m(q,null),o(q,b),k&&k.m(q,null),o(l,j),o(l,C)},p(e,a){2&a&&(w=JSON.stringify(e[1][3]).includes("Belleza")||"Sí"===e[1][11].a||"Sí"===e[1][9].a&&"Sí"===e[1][10].a),w?x||(x=be(),x.c(),x.m(l,h)):x&&(x.d(1),x=null),2&a&&(S=JSON.stringify(e[1][3]).includes("Belleza")),S?z||(z=je(),z.c(),z.m(q,b)):z&&(z.d(1),z=null),"Sí"===e[1][11].a?k||(k=Ce(),k.c(),k.m(q,null)):k&&(k.d(1),k=null)},d(e){e&&r(a),x&&x.d(),z&&z.d(),k&&k.d()}}}function be(e){let a;return{c(){a=c("h4"),a.innerHTML="Por qué Glow es <b>para ti</b>",p(a,"class","svelte-hqfjz5")},m(e,n){i(e,a,n)},d(e){e&&r(a)}}}function je(e){let a;return{c(){a=c("li"),a.textContent="Contestaste que tu objetivo principal para tomar suplementos es Belleza, te recomendamos incluir GLOW en tu rutina; ya que contiene vitamina E, ácido hialurónico, biotina y hongo shiitake, los cuales son elementos que promueven la salud del sistema tegumentario que incluye las uñas, el pelo y la piel.",p(a,"class","svelte-hqfjz5")},m(e,n){i(e,a,n)},d(e){e&&r(a)}}}function Ce(e){let a;return{c(){a=c("li"),a.textContent="Contestaste que se te rompen mucho las uñas, ó que tienes la piel seca y/ó se te cae el pelo, por lo que te recomendamos incluir GLOW en tu rutina; ya que contiene vitamina E, ácido hialurónico, biotina y hongo shiitake, los cuales son elementos que promueven la salud del sistema tegumentario que incluye las uñas, el pelo y la piel.",p(a,"class","svelte-hqfjz5")},m(e,n){i(e,a,n)},d(e){e&&r(a)}}}function we(e){let a,n,t,s,l,u,m,f,v,g,y,h,q,b,j,C,w,S,x=JSON.stringify(e[1][3]).includes("Mejorar calidad del sueño"),z=JSON.stringify(e[1][19]).includes("Sí"),k=x&&Se(),E=("Todo el tiempo"===e[1][15].a||"Casi siempre"===e[1][15].a||"En ocasiones"===e[1][15].a)&&xe(),O=z&&ze();return{c(){a=c("div"),n=c("img"),s=d(),l=c("div"),u=c("h6"),u.textContent="TE RECOMENDAMOS",m=d(),f=c("h3"),f.textContent="Magnesio",v=d(),g=c("p"),g.textContent="El Glicinato de Magnesio es un suplemento de fácil absorción con efectos relajantes que promueve un mejor sueño y descanso, además de coadyuvar en la síntesis de la de Vitamina D, el metabolismo de la glucosa y la regulación de a presión arterial. Nuestra fórmula se complementa con menta, una hierba que presenta propiedades antiinflamatorias y antioxidantes que ayuda a disminuir síntomas digestivos.",y=d(),h=c("h4"),h.innerHTML="Por qué Magnesio es <b>para ti</b>",q=d(),b=c("ul"),k&&k.c(),j=d(),E&&E.c(),C=d(),O&&O.c(),w=d(),S=c("button"),S.textContent="Agregar al carrito",n.src!==(t="https://cdn.shopify.com/s/files/1/0327/9375/5786/products/Ab_2_2048x2048.jpg?v=1638288497")&&p(n,"src","https://cdn.shopify.com/s/files/1/0327/9375/5786/products/Ab_2_2048x2048.jpg?v=1638288497"),p(n,"alt","Magnesio"),p(n,"class","svelte-hqfjz5"),p(u,"class","svelte-hqfjz5"),p(f,"class","svelte-hqfjz5"),p(g,"class","svelte-hqfjz5"),p(h,"class","svelte-hqfjz5"),p(S,"id","AddToCart__btn"),p(S,"data-product","Magnesio"),p(S,"class","svelte-hqfjz5"),p(l,"class","text svelte-hqfjz5"),p(a,"class","col svelte-hqfjz5")},m(e,t){i(e,a,t),o(a,n),o(a,s),o(a,l),o(l,u),o(l,m),o(l,f),o(l,v),o(l,g),o(l,y),o(l,h),o(l,q),o(l,b),k&&k.m(b,null),o(b,j),E&&E.m(b,null),o(b,C),O&&O.m(b,null),o(l,w),o(l,S)},p(e,a){2&a&&(x=JSON.stringify(e[1][3]).includes("Mejorar calidad del sueño")),x?k||(k=Se(),k.c(),k.m(b,j)):k&&(k.d(1),k=null),"Todo el tiempo"===e[1][15].a||"Casi siempre"===e[1][15].a||"En ocasiones"===e[1][15].a?E||(E=xe(),E.c(),E.m(b,C)):E&&(E.d(1),E=null),2&a&&(z=JSON.stringify(e[1][19]).includes("Sí")),z?O||(O=ze(),O.c(),O.m(b,null)):O&&(O.d(1),O=null)},d(e){e&&r(a),k&&k.d(),E&&E.d(),O&&O.d()}}}function Se(e){let a;return{c(){a=c("li"),a.textContent="Contestaste que buscas mejorar la calidad del sueño. Te recomendamos que incluyas nuestro glicinato de magnesio en tu rutina de las noches, ya que ayuda a conciliar el sueño y a tener un descanso profundo gracias a su efecto relajante.",p(a,"class","svelte-hqfjz5")},m(e,n){i(e,a,n)},d(e){e&&r(a)}}}function xe(e){let a,n,t;return{c(){a=c("li"),a.textContent="Contestaste que te sientes estresado la mayor parte del tiempo. El magnesio es un mineral  que nos ayuda a tener una mejor respuesta al estrés, mejorando también síntomas como la ansiedad. Además, es imprescindible para numerosas funciones de nuestro organismo, pero el estrés constante disminuye nuestras reservas del mismo. Por esta razón te recomendamos incluir  magnesio en tu rutina diaria.",n=d(),t=c("li"),t.textContent="Sugerimos su consumo antes de dormir, ya que el glicinato de magnesio tiene un efecto relajante que ayuda a conciliar el sueño y tener un descanso más profundo.",p(a,"class","svelte-hqfjz5"),p(t,"class","svelte-hqfjz5")},m(e,s){i(e,a,s),i(e,n,s),i(e,t,s)},d(e){e&&r(a),e&&r(n),e&&r(t)}}}function ze(e){let a;return{c(){a=c("li"),a.textContent="Contestaste que te cuesta trabajo quedarte dormido/a y que tu descanso no es reparador. Te recomendamos que incluyas nuestro glicinato de magnesio en tu rutina de las noches, ya que ayuda a conciliar el sueño y a tener un descanso profundo gracias a su efecto relajante.",p(a,"class","svelte-hqfjz5")},m(e,n){i(e,a,n)},d(e){e&&r(a)}}}function ke(e){let a,n,t,s,l,u,m,f,v,g,y,h,q,b,j,C,w,S=JSON.stringify(e[1][3]).includes("Problemas digestivos"),x=S&&Ee(),z="Sí"===e[1][18].a&&Oe();return{c(){a=c("div"),n=c("img"),s=d(),l=c("div"),u=c("h6"),u.textContent="TE RECOMENDAMOS",m=d(),f=c("h3"),f.textContent="Happibelly",v=d(),g=c("p"),g.textContent="Happibelly es un suplemento diseñado para mejorar  síntomas gastrointestinales como inflamación y constipación. La combinación de enzimas y polvos provenientes de la papaya y la ciruela, complementan cada una de las acciones necesarias para ayudar a nuestro organismo a tener una digestión más sencilla de forma saludable.",y=d(),h=c("h4"),h.innerHTML="Por qué Happibelly es <b>para ti</b>",q=d(),b=c("ul"),x&&x.c(),j=d(),z&&z.c(),C=d(),w=c("button"),w.textContent="Agregar al carrito",n.src!==(t="https://cdn.shopify.com/s/files/1/0327/9375/5786/products/Abitu_48_2048x2048.jpg?v=1649697055")&&p(n,"src","https://cdn.shopify.com/s/files/1/0327/9375/5786/products/Abitu_48_2048x2048.jpg?v=1649697055"),p(n,"alt","Happibelly"),p(n,"class","svelte-hqfjz5"),p(u,"class","svelte-hqfjz5"),p(f,"class","svelte-hqfjz5"),p(g,"class","svelte-hqfjz5"),p(h,"class","svelte-hqfjz5"),p(w,"id","AddToCart__btn"),p(w,"data-product","Happibelly"),p(w,"class","svelte-hqfjz5"),p(l,"class","text svelte-hqfjz5"),p(a,"class","col svelte-hqfjz5")},m(e,t){i(e,a,t),o(a,n),o(a,s),o(a,l),o(l,u),o(l,m),o(l,f),o(l,v),o(l,g),o(l,y),o(l,h),o(l,q),o(l,b),x&&x.m(b,null),o(b,j),z&&z.m(b,null),o(l,C),o(l,w)},p(e,a){2&a&&(S=JSON.stringify(e[1][3]).includes("Problemas digestivos")),S?x||(x=Ee(),x.c(),x.m(b,j)):x&&(x.d(1),x=null),"Sí"===e[1][18].a?z||(z=Oe(),z.c(),z.m(b,null)):z&&(z.d(1),z=null)},d(e){e&&r(a),x&&x.d(),z&&z.d()}}}function Ee(e){let a;return{c(){a=c("li"),a.textContent="Contestaste que sufres de problemas digestivos, te recomendamos Happibelly que contiene enzimas digestivas y fibra que  ayudan a contrarrestar estos síntomas al apoyar el proceso de digestión.",p(a,"class","svelte-hqfjz5")},m(e,n){i(e,a,n)},d(e){e&&r(a)}}}function Oe(e){let a;return{c(){a=c("li"),a.textContent="Contestaste que presentas síntomas intestinales después de comer, como inflamación y gases. Happibelly contiene enzimas digestivas y fibra que  ayudan a contrarrestar estos síntomas al apoyar el proceso de digestión.",p(a,"class","svelte-hqfjz5")},m(e,n){i(e,a,n)},d(e){e&&r(a)}}}function Ae(a){let n,t,s,l,m,v,g,y,h,q,b,j,C,w,S,x,z=a[1][18].name+"",k=a[0].wellaid>4||a[2](),E=a[0].recharge>4||a[2](),O=a[0].glow>4||a[2](),A=a[0].magnesio>4||a[2](),N=a[0].happibelly>4||a[2](),$="Sí"===a[1][9].a&&ee(),M="Sí"===a[1][10].a&&ae(),T=k&&ne(a),_=E&&ce(a),Q=O&&qe(a),H=A&&we(a),R=N&&ke(a);return{c(){n=c("section"),t=c("h6"),t.textContent="RECOMENDACIÓN",s=d(),l=c("p"),m=u("para "),v=u(z),g=d(),y=c("p"),y.innerHTML="Usa el código <small><strong>Abitu2020</strong> en el checkout para aplicar tu descuento.</small><br/><small>Estas recomendaciones están basadas en tus respuestas y el conocimiento de nuestros expertos.</small>",h=d(),$&&$.c(),q=d(),M&&M.c(),b=d(),j=c("div"),T&&T.c(),C=d(),_&&_.c(),w=d(),Q&&Q.c(),S=d(),H&&H.c(),x=d(),R&&R.c(),p(t,"class","svelte-hqfjz5"),p(n,"class","svelte-hqfjz5"),p(j,"class","row svelte-hqfjz5")},m(e,a){i(e,n,a),o(n,t),o(n,s),o(n,l),o(l,m),o(l,v),o(n,g),o(n,y),o(n,h),$&&$.m(n,null),o(n,q),M&&M.m(n,null),i(e,b,a),i(e,j,a),T&&T.m(j,null),o(j,C),_&&_.m(j,null),o(j,w),Q&&Q.m(j,null),o(j,S),H&&H.m(j,null),o(j,x),R&&R.m(j,null)},p(e,[a]){2&a&&z!==(z=e[1][18].name+"")&&f(v,z),"Sí"===e[1][9].a?$||($=ee(),$.c(),$.m(n,q)):$&&($.d(1),$=null),"Sí"===e[1][10].a?M||(M=ae(),M.c(),M.m(n,null)):M&&(M.d(1),M=null),1&a&&(k=e[0].wellaid>4||e[2]()),k?T?T.p(e,a):(T=ne(e),T.c(),T.m(j,C)):T&&(T.d(1),T=null),1&a&&(E=e[0].recharge>4||e[2]()),E?_?_.p(e,a):(_=ce(e),_.c(),_.m(j,w)):_&&(_.d(1),_=null),1&a&&(O=e[0].glow>4||e[2]()),O?Q?Q.p(e,a):(Q=qe(e),Q.c(),Q.m(j,S)):Q&&(Q.d(1),Q=null),1&a&&(A=e[0].magnesio>4||e[2]()),A?H?H.p(e,a):(H=we(e),H.c(),H.m(j,x)):H&&(H.d(1),H=null),1&a&&(N=e[0].happibelly>4||e[2]()),N?R?R.p(e,a):(R=ke(e),R.c(),R.m(j,null)):R&&(R.d(1),R=null)},i:e,o:e,d(e){e&&r(n),$&&$.d(),M&&M.d(),e&&r(b),e&&r(j),T&&T.d(),_&&_.d(),Q&&Q.d(),H&&H.d(),R&&R.d()}}}function Ne(e,a,n){let{points:t}=a,{answers:s}=a;return e.$$set=e=>{"points"in e&&n(0,t=e.points),"answers"in e&&n(1,s=e.answers)},[t,s,function(){return t.wellaid<4&&t.recharge<4&&t.glow<4&&t.magnesio<4&&t.happibelly<4}]}class $e extends L{constructor(e){super(),J(this,e,Ne,Ae,l,{points:0,answers:1})}}var Me=[{type:"DQ",ask:"¿Has tomado vitaminas anteriormente?",answers:[{a:"Sí",value:null},{a:"No",value:null},{a:"Si, pero las dejé de tomar",value:null}],key:"1. Tomas vitaminas"},{type:"SOQ",ask:"Edad",answers:[{a:"18 - 30",value:null},{a:"31 - 50",value:"glow"},{a:"50+",value:"wellaid,magnesio"}],key:"2. Edad"},{type:"DQ",ask:"Género",answers:[{a:"Femenino",value:null},{a:"Masculino",value:null},{a:"Otro",value:null}],key:"3. Género"},{type:"MOQ",ask:"Objetivo principal para tomar vitaminas o suplementos",answers:[{a:"Embarazarte",value:null},{a:"Alergias",value:"wellaid"},{a:"Bienestar general",value:"wellaid,magnesio"},{a:"Mejorar sistema inmunológico",value:"wellaid"},{a:"Mejorar rendimiento físico",value:"recharge"},{a:"Mejorar niveles de energía",value:"recharge"},{a:"Belleza",value:"glow"},{a:"Mejorar la calidad del sueño",value:"magnesio"},{a:"Problemas digestivos",value:"happibelly"}],key:"4. Objetivo"},{block:"Dieta y estilo de vida",type:"MOQ",ask:"¿Llevas alguna dieta especial?",answers:[{a:"Vegetariano",value:"recharge"},{a:"Paleo",value:null},{a:"Vegano",value:"recharge"},{a:"Libre de gluten",value:null},{a:"Libre de lactosa",value:null},{a:"Keto",value:"wellaid,happibelly"},{a:"Pescatariano",value:null},{a:"Ninguna / Otra",value:null}],key:"5. Dieta"},{type:"SOQ",ask:"¿Cuántas porciones de fruta y verduras consumes al día?",answers:[{a:"0",value:"wellaid,magnesio,happibelly"},{a:"1",value:"wellaid,magnesio,happibelly"},{a:"2 - 3",value:"glow"},{a:">4",value:null}],key:"6. Frutas y verduras"},{type:"DQ",ask:"¿Consumes alcohol? ¿Cuántas copas a la semana?",answers:[{a:"0",value:null},{a:"2",value:"magnesio,happibelly"},{a:"4",value:"magnesio,happibelly"},{a:"6+",value:"magnesio,happibelly"}],key:"7. Alcohol"},{type:"SOQ",ask:"¿Fumas?",answers:[{a:"Sí",value:"force wellaid"},{a:"No",value:null}],key:"8. Fumas"},{type:"SOQ",ask:"¿Consumes bebidas con cafeína (café, té, bebidas energizantes)? ¿Cuántas tazas al día?",answers:[{a:"0 - 2",value:null},{a:"2 - 4",value:"remove recharge,magnesio"},{a:"4+",value:"remove recharge,magnesio"}],key:"9. Tazas de Cafeína"},{type:"SOQ",ask:"¿Estás tomando algún medicamento que requiera receta médica?",answers:[{a:"Sí",value:"doctor"},{a:"No",value:null}],key:"10. Medicamentos con receta"},{type:"SOQ",ask:"¿Tienes alguna condición médica especial?",answers:[{a:"Sí",value:"condition"},{a:"No",value:null}],key:"11. Condición médica especial"},{block:"Salud y Bienestar",type:"SOQ",ask:"¿Se te rompen mucho las uñas, sufres de piel seca o se te cae mucho el pelo?",answers:[{a:"Sí",value:"force glow"},{a:"No",value:null}],key:"12. Vulnerable"},{type:"SOQ",ask:"¿Te enfermas con frecuencia, convives mucho con niños pequeños o vas a viajar en un avión durante el próximo mes?",answers:[{a:"Sí",value:"force wellaid"},{a:"No",value:null}],key:"13. Precaución"},{type:"SOQ",ask:"En ocasiones, ¿Te sientes cansado o sin energía?, ¿Te da bajón de energía o sueño a media tarde?",answers:[{a:"Sí",value:"force recharge"},{a:"A veces",value:"force recharge,wellaid"},{a:"No",value:null}],key:"14. Cansancio"},{type:"SOQ",ask:"¿Te cuesta trabajo concentrarte? ¿Te preocupa tu memoria a corto plazo?",answers:[{a:"Sí",value:"recharge"},{a:"A veces",value:"force recharge,wellaid"},{a:"No",value:null}],key:"15. Baja concentración"},{type:"DQ",ask:"¿Qué tan seguido te sientes estresado?",answers:[{a:"Todo el tiempo",value:"wellaid,magnesio"},{a:"Casi siempre",value:"magnesio"},{a:"En ocasiones",value:"magnesio"},{a:"No me siento estresado",value:null}],key:"16. Estresado"},{type:"SOQ",ask:"¿Haces ejercicio?",answers:[{a:"Sí",value:"recharge,magnesio"},{a:"No",value:"recharge,wellaid"}],key:"17. Ejercicio"},{type:"SOQ",ask:"¿Qué tan sano consideras tu estilo de vida?",answers:[{a:"Muy Sano",value:"glow"},{a:"Moderadamente sano",value:"glow,recharge"},{a:"Poco sano",value:"glow,wellaid"}],key:"18. Sano"},{type:"SOQ",ask:"¿Tienes síntomas como inflamación, gases y pesadez al terminar tus comidas? ",answers:[{a:"Sí",value:"force happibelly"},{a:"No",value:null}],key:"19. Síntomas"},{type:"SOQ",ask:"¿Te cuesta trabajo quedarte dormido  y al despertar sientes que no descansaste? ",answers:[{a:"Sí",value:"force magnesio"},{a:"No",value:null}],key:"20. Dormir"},{type:"IQ",ask:"Estemos en contacto",answers:[],key:""}];function Te(e){let a,n;return{c(){a=c("progress"),a.value=n=e[0]/20,p(a,"max","1"),p(a,"class","svelte-d62sjq")},m(e,n){i(e,a,n)},p(e,t){1&t&&n!==(n=e[0]/20)&&(a.value=n)},d(e){e&&r(a)}}}function _e(a){let n;return{c(){n=c("hr")},m(e,a){i(e,n,a)},p:e,d(e){e&&r(n)}}}function Qe(e){let a,n,t,s,l,m,v=e[0]+1+"";return l=new X({props:{current:e[0],question:Me[e[0]]}}),l.$on("answer",e[5]),{c(){a=c("p"),n=u(v),t=u(" de 21"),s=d(),_(l.$$.fragment),p(a,"class","small svelte-d62sjq")},m(e,r){i(e,a,r),o(a,n),o(a,t),i(e,s,r),Q(l,e,r),m=!0},p(e,a){(!m||1&a)&&v!==(v=e[0]+1+"")&&f(n,v);const t={};1&a&&(t.current=e[0]),1&a&&(t.question=Me[e[0]]),1024&a&&(t.$$scope={dirty:a,ctx:e}),l.$set(t)},i(e){m||(M(l.$$.fragment,e),m=!0)},o(e){T(l.$$.fragment,e),m=!1},d(e){e&&r(a),e&&r(s),H(l,e)}}}function He(e){let a,n;return a=new $e({props:{points:e[3],answers:e[1]}}),{c(){_(a.$$.fragment)},m(e,t){Q(a,e,t),n=!0},p(e,n){const t={};8&n&&(t.points=e[3]),2&n&&(t.answers=e[1]),a.$set(t)},i(e){n||(M(a.$$.fragment,e),n=!0)},o(e){T(a.$$.fragment,e),n=!1},d(e){H(a,e)}}}function Re(e){let a,n,s,l,o,u,f,v,g;function y(e,a){return e[2]?_e:Te}let h=y(e),q=h(e);const b=[He,Qe],j=[];function C(e,a){return e[2]?0:1}return o=C(e),u=j[o]=b[o](e),{c(){a=c("span"),a.textContent="×",n=d(),q.c(),s=d(),l=c("section"),u.c(),p(a,"class","close svelte-d62sjq"),p(l,"class","svelte-d62sjq")},m(t,r){i(t,a,r),i(t,n,r),q.m(t,r),i(t,s,r),i(t,l,r),j[o].m(l,null),f=!0,v||(g=m(a,"click",e[4]),v=!0)},p(e,[a]){h===(h=y(e))&&q?q.p(e,a):(q.d(1),q=h(e),q&&(q.c(),q.m(s.parentNode,s)));let n=o;o=C(e),o===n?j[o].p(e,a):($={r:0,c:[],p:$},T(j[n],1,1,(()=>{j[n]=null})),$.r||t($.c),$=$.p,u=j[o],u?u.p(e,a):(u=j[o]=b[o](e),u.c()),M(u,1),u.m(l,null))},i(e){f||(M(u),f=!0)},o(e){T(u),f=!1},d(e){e&&r(a),e&&r(n),q.d(e),e&&r(s),e&&r(l),j[o].d(),v=!1,g()}}}function Je(e,a,n){let t,s,l=0,o=[],i=!1,r={recharge:0,wellaid:0,glow:0};function c(){let e={};var a;console.log(o),o.forEach(((a,n)=>{if(a instanceof Array){let t=[];a.forEach((e=>{u(e.value),t.push(e.a)})),e[Me[n].key]=t.join(),t=[]}else e[Me[n].key]=a.a,u(a.value)})),e["Correo electrónico"]=s,e["Nombre completo"]=t,n(2,i=!0),delete e[""],a=e,jQuery(document).ready((function(e){e.ajax({type:"GET",url:"https://script.google.com/macros/s/AKfycbxsITxQP4RGWtoBEixpitvqRFboTpZFvYl0ww26oU5MU-xYQyTPo91lWQ/exec?callback=?",data:a,async:!0,contentType:"application/json",dataType:"jsonp",success(e){console.log({data:e})},error(e){console.log({error:e})}})}))}function u(e){e.split(",").forEach((a=>{switch(e){case"recharge":n(3,r.recharge+=1,r);break;case"force recharge":n(3,r.recharge+=100,r);break;case"remove recharge":n(3,r.recharge-=300,r);break;case"wellaid":n(3,r.wellaid+=1,r);break;case"force wellaid":n(3,r.wellaid+=100,r);break;case"remove wellaid":n(3,r.wellaid-=300,r);break;case"glow":n(3,r.glow+=1,r);break;case"force glow":n(3,r.glow+=100,r);break;case"remove glow":n(3,r.glow-=300,r);break;case"magnesio":n(3,r.magnesio+=1,r);break;case"force magnesio":n(3,r.magnesio+=100,r);break;case"remove magnesio":n(3,r.magnesio-=300,r);break;case"happibelly":n(3,r.happibelly+=1,r);break;case"force happibelly":n(3,r.happibelly+=100,r);break;case"remove happibelly":n(3,r.happibelly-=300,r);break;case"doctor":case"condition":n(3,r.recharge-=500,r),n(3,r.wellaid-=500,r),n(3,r.glow-=500,r)}}))}return[l,o,i,r,function(){n(3,r.recharge=0,r),n(3,r.wellaid=0,r),n(3,r.glow=0,r),n(0,l=0),n(1,o=[]),n(2,i=!1),document.getElementsByClassName("abitu-quiz__container").style.display="none"},function(e){n(1,o[l]=e.detail.answer,o),e.detail.next?n(0,l++,l):(20===l&&(t=e.detail.answer.name,s=e.detail.answer.email,c()),n(0,l-=1))}]}return new class extends L{constructor(e){super(),J(this,e,Je,Re,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
