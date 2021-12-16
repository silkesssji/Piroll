var tns=function(){var t=window,e=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},n=window,i=n.cancelAnimationFrame||n.mozCancelAnimationFrame||function(t){clearTimeout(t)};function a(){for(var t,e,n,i=arguments[0]||{},a=1,o=arguments.length;a<o;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function o(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function r(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function u(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var l=document.documentElement;function s(t){var e="";return t.fake&&(e=l.style.overflow,t.style.background="",t.style.overflow=l.style.overflow="hidden",l.appendChild(t)),e}function c(t,e){t.fake&&(t.remove(),l.style.overflow=e,l.offsetHeight)}function d(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function f(t){return("insertRule"in t?t.cssRules:t.rules).length}function v(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var p="classList"in document.createElement("_"),m=p?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},h=p?function(t,e){m(t,e)||t.classList.add(e)}:function(t,e){m(t,e)||(t.className+=" "+e)},y=p?function(t,e){m(t,e)&&t.classList.remove(e)}:function(t,e){m(t,e)&&(t.className=t.className.replace(e,""))};function g(t,e){return t.hasAttribute(e)}function x(t,e){return t.getAttribute(e)}function b(t){return void 0!==t.item}function M(t,e){if(t=b(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function C(t,e){t=b(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function w(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function T(t,e){"none"!==t.style.display&&(t.style.display="none")}function E(t,e){"none"===t.style.display&&(t.style.display="")}function B(t){return"none"!==window.getComputedStyle(t).display}function L(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach(function(i){"ms"===i&&"transform"!==t||e.push(i+n)}),t=e}for(var i=document.createElement("fakeelement"),a=(t.length,0);a<t.length;a++){var o=t[a];if(void 0!==i.style[o])return o}return!1}function S(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var A=!1;try{var N=Object.defineProperty({},"passive",{get:function(){A=!0}});window.addEventListener("test",null,N)}catch(t){}var O=!!A&&{passive:!0};function D(t,e,n){for(var i in e){var a=0<=["touchstart","touchmove"].indexOf(i)&&!n&&O;t.addEventListener(i,e[i],a)}}function H(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&O;t.removeEventListener(n,e[n],i)}}function k(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach(function(n){n(e,t)})}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var I=function(t){t=a({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},t||{});var n=document,l=window,p={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},b={},A=t.useLocalStorage;if(A){var N=navigator.userAgent,O=new Date;try{(b=l.localStorage)?(b.setItem(O,O),A=b.getItem(O)==O,b.removeItem(O)):A=!1,A||(b={})}catch(N){A=!1}A&&(b.tnsApp&&b.tnsApp!==N&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){b.removeItem(t)}),localStorage.tnsApp=N)}var _=b.tC?o(b.tC):r(b,"tC",function(){var t=document,e=u(),n=s(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var o,r="(10px * 10)",l=["calc"+r,"-moz-calc"+r,"-webkit-calc"+r],d=0;d<3;d++)if(o=l[d],i.style.width=o,100===i.offsetWidth){a=o.replace(r,"");break}}catch(t){}return e.fake?c(e,n):i.remove(),a}(),A),R=b.tPL?o(b.tPL):r(b,"tPL",function(){var t,e=document,n=u(),i=s(n),a=e.createElement("div"),o=e.createElement("div"),r="";a.className="tns-t-subp2",o.className="tns-t-ct";for(var l=0;l<70;l++)r+="<div></div>";return o.innerHTML=r,a.appendChild(o),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-o.children[67].getBoundingClientRect().left)<2,n.fake?c(n,i):a.remove(),t}(),A),P=b.tMQ?o(b.tMQ):r(b,"tMQ",function(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=u(),i=s(n),a=e.createElement("div"),o=e.createElement("style"),r="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return o.type="text/css",a.className="tns-mq-test",n.appendChild(o),n.appendChild(a),o.styleSheet?o.styleSheet.cssText=r:o.appendChild(e.createTextNode(r)),t=window.getComputedStyle?window.getComputedStyle(a).position:a.currentStyle.position,n.fake?c(n,i):a.remove(),"absolute"===t}(),A),W=b.tTf?o(b.tTf):r(b,"tTf",L("transform"),A),z=b.t3D?o(b.t3D):r(b,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=u(),a=s(i),o=n.createElement("p"),r=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return r+="transform",i.insertBefore(o,null),o.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(o).getPropertyValue(r),i.fake?c(i,a):o.remove(),void 0!==e&&0<e.length&&"none"!==e}(W),A),q=b.tTDu?o(b.tTDu):r(b,"tTDu",L("transitionDuration"),A),j=b.tTDe?o(b.tTDe):r(b,"tTDe",L("transitionDelay"),A),F=b.tADu?o(b.tADu):r(b,"tADu",L("animationDuration"),A),V=b.tADe?o(b.tADe):r(b,"tADe",L("animationDelay"),A),G=b.tTE?o(b.tTE):r(b,"tTE",S(q,"Transition"),A),Q=b.tAE?o(b.tAE):r(b,"tAE",S(F,"Animation"),A),X=l.console&&"function"==typeof l.console.warn,Y=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],K={};if(Y.forEach(function(e){if("string"==typeof t[e]){var i=t[e],a=n.querySelector(i);if(K[e]=i,!a||!a.nodeName)return void(X&&console.warn("Can't find",t[e]));t[e]=a}}),!(t.container.children.length<1)){var J=t.responsive,U=t.nested,Z="carousel"===t.mode;if(J){0 in J&&(t=a(t,J[0]),delete J[0]);var $={};for(var tt in J){var et=J[tt];et="number"==typeof et?{items:et}:et,$[tt]=et}J=$,$=null}if(Z||function t(e){for(var n in e)Z||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!Z){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var nt=t.animateIn,it=t.animateOut,at=t.animateDelay,ot=t.animateNormal}var rt,ut,lt="horizontal"===t.axis,st=n.createElement("div"),ct=n.createElement("div"),dt=t.container,ft=dt.parentNode,vt=dt.outerHTML,pt=dt.children,mt=pt.length,ht=Dn(),yt=!1;J&&Zn(),Z&&(dt.className+=" tns-vpfix");var gt,xt,bt,Mt,Ct,wt,Tt,Et,Bt=t.autoWidth,Lt=_n("fixedWidth"),St=_n("edgePadding"),At=_n("gutter"),Nt=kn(),Ot=_n("center"),Dt=Bt?1:Math.floor(_n("items")),Ht=_n("slideBy"),kt=t.viewportMax||t.fixedWidthViewportWidth,It=_n("arrowKeys"),_t=_n("speed"),Rt=t.rewind,Pt=!Rt&&t.loop,Wt=_n("autoHeight"),zt=_n("controls"),qt=_n("controlsText"),jt=_n("nav"),Ft=_n("touch"),Vt=_n("mouseDrag"),Gt=_n("autoplay"),Qt=_n("autoplayTimeout"),Xt=_n("autoplayText"),Yt=_n("autoplayHoverPause"),Kt=_n("autoplayResetOnVisibility"),Jt=(null,Tt=_n("nonce"),Et=document.createElement("style"),Tt&&Et.setAttribute("nonce",Tt),document.querySelector("head").appendChild(Et),Et.sheet?Et.sheet:Et.styleSheet),Ut=t.lazyload,Zt=t.lazyloadSelector,$t=[],te=Pt?(Ct=function(){if(Bt||Lt&&!kt)return mt-1;var e=Lt?"fixedWidth":"items",n=[];if((Lt||t[e]<mt)&&n.push(t[e]),J)for(var i in J){var a=J[i][e];a&&(Lt||a<mt)&&n.push(a)}return n.length||n.push(0),Math.ceil(Lt?kt/Math.min.apply(null,n):Math.max.apply(null,n))}(),wt=Z?Math.ceil((5*Ct-mt)/2):4*Ct-mt,wt=Math.max(Ct,wt),In("edgePadding")?wt+1:wt):0,ee=Z?mt+2*te:mt+te,ne=!(!Lt&&!Bt||Pt),ie=Lt?Ti():null,ae=!Z||!Pt,oe=lt?"left":"top",re="",ue="",le=Lt?function(){return Ot&&!Pt?mt-1:Math.ceil(-ie/(Lt+At))}:Bt?function(){for(var t=0;t<ee;t++)if(gt[t]>=-ie)return t}:function(){return Ot&&Z&&!Pt?mt-1:Pt||Z?Math.max(0,ee-Math.ceil(Dt)):ee-1},se=An(_n("startIndex")),ce=se,de=(Sn(),0),fe=Bt?null:le(),ve=t.preventActionWhenRunning,pe=t.swipeAngle,me=!pe||"?",he=!1,ye=t.onInit,ge=new k,xe=" tns-slider tns-"+t.mode,be=dt.id||(Mt=window.tnsId,window.tnsId=Mt?Mt+1:1,"tns"+window.tnsId),Me=_n("disable"),Ce=!1,we=t.freezable,Te=!(!we||Bt)&&Un(),Ee=!1,Be={click:Hi,keydown:function(t){t=qi(t);var e=[p.LEFT,p.RIGHT].indexOf(t.keyCode);0<=e&&(0===e?Ye.disabled||Hi(t,-1):Ke.disabled||Hi(t,1))}},Le={click:function(t){if(he){if(ve)return;Oi()}for(var e=ji(t=qi(t));e!==$e&&!g(e,"data-nav");)e=e.parentNode;if(g(e,"data-nav")){var n=an=Number(x(e,"data-nav")),i=Lt||Bt?n*mt/en:n*Dt;Di(Ie?n:Math.min(Math.ceil(i),mt-1),t),on===n&&(dn&&Pi(),an=-1)}},keydown:function(t){t=qi(t);var e=n.activeElement;if(g(e,"data-nav")){var i=[p.LEFT,p.RIGHT,p.ENTER,p.SPACE].indexOf(t.keyCode),a=Number(x(e,"data-nav"));0<=i&&(0===i?0<a&&zi(Ze[a-1]):1===i?a<en-1&&zi(Ze[a+1]):Di(an=a,t))}}},Se={mouseover:function(){dn&&(Ii(),fn=!0)},mouseout:function(){fn&&(ki(),fn=!1)}},Ae={visibilitychange:function(){n.hidden?dn&&(Ii(),pn=!0):pn&&(ki(),pn=!1)}},Ne={keydown:function(t){t=qi(t);var e=[p.LEFT,p.RIGHT].indexOf(t.keyCode);0<=e&&Hi(t,0===e?-1:1)}},Oe={touchstart:Qi,touchmove:Xi,touchend:Yi,touchcancel:Yi},De={mousedown:Qi,mousemove:Xi,mouseup:Yi,mouseleave:Yi},He=In("controls"),ke=In("nav"),Ie=!!Bt||t.navAsThumbnails,_e=In("autoplay"),Re=In("touch"),Pe=In("mouseDrag"),We="tns-slide-active",ze="tns-slide-cloned",qe="tns-complete",je={load:function(t){ui(ji(t))},error:function(t){var e;e=ji(t),h(e,"failed"),li(e)}},Fe="force"===t.preventScrollOnTouch;if(He)var Ve,Ge,Qe=t.controlsContainer,Xe=t.controlsContainer?t.controlsContainer.outerHTML:"",Ye=t.prevButton,Ke=t.nextButton,Je=t.prevButton?t.prevButton.outerHTML:"",Ue=t.nextButton?t.nextButton.outerHTML:"";if(ke)var Ze,$e=t.navContainer,tn=t.navContainer?t.navContainer.outerHTML:"",en=Bt?mt:Ji(),nn=0,an=-1,on=On(),rn=on,un="tns-nav-active",ln="Carousel Page ",sn=" (Current Slide)";if(_e)var cn,dn,fn,vn,pn,mn="forward"===t.autoplayDirection?1:-1,hn=t.autoplayButton,yn=t.autoplayButton?t.autoplayButton.outerHTML:"",gn=["<span class='tns-visually-hidden'>"," animation</span>"];if(Re||Pe)var xn,bn,Mn={},Cn={},wn=!1,Tn=lt?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};Bt||Ln(Me||Te),W&&(oe=W,re="translate",z?(re+=lt?"3d(":"3d(0px, ",ue=lt?", 0px, 0px)":", 0px)"):(re+=lt?"X(":"Y(",ue=")")),Z&&(dt.className=dt.className.replace("tns-vpfix","")),function(){(In("gutter"),st.className="tns-outer",ct.className="tns-inner",st.id=be+"-ow",ct.id=be+"-iw",""===dt.id&&(dt.id=be),xe+=R||Bt?" tns-subpixel":" tns-no-subpixel",xe+=_?" tns-calc":" tns-no-calc",Bt&&(xe+=" tns-autowidth"),xe+=" tns-"+t.axis,dt.className+=xe,Z?((rt=n.createElement("div")).id=be+"-mw",rt.className="tns-ovh",st.appendChild(rt),rt.appendChild(ct)):st.appendChild(ct),Wt)&&((rt||ct).className+=" tns-ah");if(ft.insertBefore(st,dt),ct.appendChild(dt),v(pt,function(t,e){h(t,"tns-item"),t.id||(t.id=be+"-item"+e),!Z&&ot&&h(t,ot),M(t,{"aria-hidden":"true",tabindex:"-1"})}),te){for(var e=n.createDocumentFragment(),i=n.createDocumentFragment(),a=te;a--;){var o=a%mt,r=pt[o].cloneNode(!0);if(h(r,ze),C(r,"id"),i.insertBefore(r,i.firstChild),Z){var u=pt[mt-1-o].cloneNode(!0);h(u,ze),C(u,"id"),e.appendChild(u)}}dt.insertBefore(e,dt.firstChild),dt.appendChild(i),pt=dt.children}}(),function(){if(!Z)for(var e=se,n=se+Math.min(mt,Dt);e<n;e++){var i=pt[e];i.style.left=100*(e-se)/Dt+"%",h(i,nt),y(i,ot)}if(lt&&(R||Bt?(d(Jt,"#"+be+" > .tns-item","font-size:"+l.getComputedStyle(pt[0]).fontSize+";",f(Jt)),d(Jt,"#"+be,"font-size:0;",f(Jt))):Z&&v(pt,function(t,e){var n;t.style.marginLeft=(n=e,_?_+"("+100*n+"% / "+ee+")":100*n/ee+"%")})),P){if(q){var a=rt&&t.autoHeight?jn(t.speed):"";d(Jt,"#"+be+"-mw",a,f(Jt))}a=Rn(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),d(Jt,"#"+be+"-iw",a,f(Jt)),Z&&(a=lt&&!Bt?"width:"+Pn(t.fixedWidth,t.gutter,t.items)+";":"",q&&(a+=jn(_t)),d(Jt,"#"+be,a,f(Jt))),a=lt&&!Bt?Wn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(a+=zn(t.gutter)),Z||(q&&(a+=jn(_t)),F&&(a+=Fn(_t))),a&&d(Jt,"#"+be+" > .tns-item",a,f(Jt))}else{Z&&Wt&&(rt.style[q]=_t/1e3+"s"),ct.style.cssText=Rn(St,At,Lt,Wt),Z&&lt&&!Bt&&(dt.style.width=Pn(Lt,At,Dt));a=lt&&!Bt?Wn(Lt,At,Dt):"";At&&(a+=zn(At)),a&&d(Jt,"#"+be+" > .tns-item",a,f(Jt))}if(J&&P)for(var o in J){o=parseInt(o);var r=J[o],u=(a="",""),s="",c="",p="",m=Bt?null:_n("items",o),g=_n("fixedWidth",o),x=_n("speed",o),b=_n("edgePadding",o),M=_n("autoHeight",o),C=_n("gutter",o);q&&rt&&_n("autoHeight",o)&&"speed"in r&&(u="#"+be+"-mw{"+jn(x)+"}"),("edgePadding"in r||"gutter"in r)&&(s="#"+be+"-iw{"+Rn(b,C,g,x,M)+"}"),Z&&lt&&!Bt&&("fixedWidth"in r||"items"in r||Lt&&"gutter"in r)&&(c="width:"+Pn(g,C,m)+";"),q&&"speed"in r&&(c+=jn(x)),c&&(c="#"+be+"{"+c+"}"),("fixedWidth"in r||Lt&&"gutter"in r||!Z&&"items"in r)&&(p+=Wn(g,C,m)),"gutter"in r&&(p+=zn(C)),!Z&&"speed"in r&&(q&&(p+=jn(x)),F&&(p+=Fn(x))),p&&(p="#"+be+" > .tns-item{"+p+"}"),(a=u+s+c+p)&&Jt.insertRule("@media (min-width: "+o/16+"em) {"+a+"}",Jt.cssRules.length)}}(),Vn();var En=Pt?Z?function(){var t=de,e=fe;t+=Ht,e-=Ht,St?(t+=1,e-=1):Lt&&(Nt+At)%(Lt+At)&&(e-=1),te&&(e<se?se-=mt:se<t&&(se+=mt))}:function(){if(fe<se)for(;de+mt<=se;)se-=mt;else if(se<de)for(;se<=fe-mt;)se+=mt}:function(){se=Math.max(de,Math.min(fe,se))},Bn=Z?function(){var t,e,n,i,a,o,r,u,l,s,c;Ci(dt,""),q||!_t?(Li(),_t&&B(dt)||Oi()):(t=dt,e=oe,n=re,i=ue,a=Ei(),o=_t,r=Oi,u=Math.min(o,10),l=0<=a.indexOf("%")?"%":"px",a=a.replace(l,""),s=Number(t.style[e].replace(n,"").replace(i,"").replace(l,"")),c=(a-s)/o*u,setTimeout(function a(){o-=u,s+=c,t.style[e]=n+s+l+i,0<o?setTimeout(a,u):r()},u)),lt||Ki()}:function(){$t=[];var t={};t[G]=t[Q]=Oi,H(pt[ce],t),D(pt[se],t),Si(ce,nt,it,!0),Si(se,ot,nt),G&&Q&&_t&&B(dt)||Oi()};return{version:"2.9.4",getInfo:Zi,events:ge,goTo:Di,play:function(){Gt&&!dn&&(Ri(),vn=!1)},pause:function(){dn&&(Pi(),vn=!0)},isOn:yt,updateSliderHeight:pi,refresh:Vn,destroy:function(){if(Jt.disabled=!0,Jt.ownerNode&&Jt.ownerNode.remove(),H(l,{resize:Kn}),It&&H(n,Ne),Qe&&H(Qe,Be),$e&&H($e,Le),H(dt,Se),H(dt,Ae),hn&&H(hn,{click:Wi}),Gt&&clearInterval(cn),Z&&G){var e={};e[G]=Oi,H(dt,e)}Ft&&H(dt,Oe),Vt&&H(dt,De);var i=[vt,Xe,Je,Ue,tn,yn];for(var a in Y.forEach(function(e,n){var a="container"===e?st:t[e];if("object"==typeof a&&a){var o=!!a.previousElementSibling&&a.previousElementSibling,r=a.parentNode;a.outerHTML=i[n],t[e]=o?o.nextElementSibling:r.firstElementChild}}),Y=nt=it=at=ot=lt=st=ct=dt=ft=vt=pt=mt=ut=ht=Bt=Lt=St=At=Nt=Dt=Ht=kt=It=_t=Rt=Pt=Wt=Jt=Ut=gt=$t=te=ee=ne=ie=ae=oe=re=ue=le=se=ce=de=fe=pe=me=he=ye=ge=xe=be=Me=Ce=we=Te=Ee=Be=Le=Se=Ae=Ne=Oe=De=He=ke=Ie=_e=Re=Pe=We=qe=je=xt=zt=qt=Qe=Xe=Ye=Ke=Ve=Ge=jt=$e=tn=Ze=en=nn=an=on=rn=un=ln=sn=Gt=Qt=mn=Xt=Yt=hn=yn=Kt=gn=cn=dn=fn=vn=pn=Mn=Cn=xn=wn=bn=Tn=Ft=Vt=null,this)"rebuild"!==a&&(this[a]=null);yt=!1},rebuild:function(){return I(a(t,K))}}}function Ln(t){t&&(zt=jt=Ft=Vt=It=Gt=Yt=Kt=!1)}function Sn(){for(var t=Z?se-te:se;t<0;)t+=mt;return t%mt+1}function An(t){return t=t?Math.max(0,Math.min(Pt?mt-1:mt-Dt,t)):0,Z?t+te:t}function Nn(t){for(null==t&&(t=se),Z&&(t-=te);t<0;)t+=mt;return Math.floor(t%mt)}function On(){var t,e=Nn();return t=Ie?e:Lt||Bt?Math.ceil((e+1)*en/mt-1):Math.floor(e/Dt),!Pt&&Z&&se===fe&&(t=en-1),t}function Dn(){return l.innerWidth||n.documentElement.clientWidth||n.body.clientWidth}function Hn(t){return"top"===t?"afterbegin":"beforeend"}function kn(){var t=St?2*St-At:0;return function t(e){if(null!=e){var i,a,o=n.createElement("div");return e.appendChild(o),a=(i=o.getBoundingClientRect()).right-i.left,o.remove(),a||t(e.parentNode)}}(ft)-t}function In(e){if(t[e])return!0;if(J)for(var n in J)if(J[n][e])return!0;return!1}function _n(e,n){if(null==n&&(n=ht),"items"===e&&Lt)return Math.floor((Nt+At)/(Lt+At))||1;var i=t[e];if(J)for(var a in J)n>=parseInt(a)&&e in J[a]&&(i=J[a][e]);return"slideBy"===e&&"page"===i&&(i=_n("items")),Z||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function Rn(t,e,n,i,a){var o="";if(void 0!==t){var r=t;e&&(r-=e),o=lt?"margin: 0 "+r+"px 0 "+t+"px;":"margin: "+t+"px 0 "+r+"px 0;"}else if(e&&!n){var u="-"+e+"px";o="margin: 0 "+(lt?u+" 0 0":"0 "+u+" 0")+";"}return!Z&&a&&q&&i&&(o+=jn(i)),o}function Pn(t,e,n){return t?(t+e)*ee+"px":_?_+"("+100*ee+"% / "+n+")":100*ee/n+"%"}function Wn(t,e,n){var i;if(t)i=t+e+"px";else{Z||(n=Math.floor(n));var a=Z?ee:n;i=_?_+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==U?i+";":i+" !important;"}function zn(t){var e="";return!1!==t&&(e=(lt?"padding-":"margin-")+(lt?"right":"bottom")+": "+t+"px;"),e}function qn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function jn(t){return qn(q,18)+"transition-duration:"+t/1e3+"s;"}function Fn(t){return qn(F,17)+"animation-duration:"+t/1e3+"s;"}function Vn(){if(In("autoHeight")||Bt||!lt){var t=dt.querySelectorAll("img");v(t,function(t){var e=t.src;Ut||(e&&e.indexOf("data:image")<0?(t.src="",D(t,je),h(t,"loading"),t.src=e):ui(t))}),e(function(){di(w(t),function(){xt=!0})}),In("autoHeight")&&(t=si(se,Math.min(se+Dt-1,ee-1))),Ut?Gn():e(function(){di(w(t),Gn)})}else Z&&Bi(),Xn(),Yn()}function Gn(){if(Bt&&1<mt){var t=Pt?se:mt-1;!function e(){var n=pt[t].getBoundingClientRect().left,i=pt[t-1].getBoundingClientRect().right;Math.abs(n-i)<=1?Qn():setTimeout(function(){e()},16)}()}else Qn()}function Qn(){lt&&!Bt||(mi(),Bt?(ie=Ti(),we&&(Te=Un()),fe=le(),Ln(Me||Te)):Ki()),Z&&Bi(),Xn(),Yn()}function Xn(){if(hi(),st.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+ai()+"</span>  of "+mt+"</div>"),bt=st.querySelector(".tns-liveregion .current"),_e){var e=Gt?"stop":"start";hn?M(hn,{"data-action":e}):t.autoplayButtonOutput&&(st.insertAdjacentHTML(Hn(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+gn[0]+e+gn[1]+Xt[0]+"</button>"),hn=st.querySelector("[data-action]")),hn&&D(hn,{click:Wi}),Gt&&(Ri(),Yt&&D(dt,Se),Kt&&D(dt,Ae))}if(ke){if($e)M($e,{"aria-label":"Carousel Pagination"}),v(Ze=$e.children,function(t,e){M(t,{"data-nav":e,tabindex:"-1","aria-label":ln+(e+1),"aria-controls":be})});else{for(var n="",i=Ie?"":'style="display:none"',a=0;a<mt;a++)n+='<button type="button" data-nav="'+a+'" tabindex="-1" aria-controls="'+be+'" '+i+' aria-label="'+ln+(a+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",st.insertAdjacentHTML(Hn(t.navPosition),n),$e=st.querySelector(".tns-nav"),Ze=$e.children}if(Ui(),q){var o=q.substring(0,q.length-18).toLowerCase(),r="transition: all "+_t/1e3+"s";o&&(r="-"+o+"-"+r),d(Jt,"[aria-controls^="+be+"-item]",r,f(Jt))}M(Ze[on],{"aria-label":ln+(on+1)+sn}),C(Ze[on],"tabindex"),h(Ze[on],un),D($e,Le)}He&&(Qe||Ye&&Ke||(st.insertAdjacentHTML(Hn(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+be+'">'+qt[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+be+'">'+qt[1]+"</button></div>"),Qe=st.querySelector(".tns-controls")),Ye&&Ke||(Ye=Qe.children[0],Ke=Qe.children[1]),t.controlsContainer&&M(Qe,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&M([Ye,Ke],{"aria-controls":be,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(M(Ye,{"data-controls":"prev"}),M(Ke,{"data-controls":"next"})),Ve=gi(Ye),Ge=gi(Ke),Mi(),Qe?D(Qe,Be):(D(Ye,Be),D(Ke,Be))),$n()}function Yn(){if(Z&&G){var e={};e[G]=Oi,D(dt,e)}Ft&&D(dt,Oe,t.preventScrollOnTouch),Vt&&D(dt,De),It&&D(n,Ne),"inner"===U?ge.on("outerResized",function(){Jn(),ge.emit("innerLoaded",Zi())}):(J||Lt||Bt||Wt||!lt)&&D(l,{resize:Kn}),Wt&&("outer"===U?ge.on("innerLoaded",ci):Me||ci()),ri(),Me?ni():Te&&ei(),ge.on("indexChanged",fi),"inner"===U&&ge.emit("innerLoaded",Zi()),"function"==typeof ye&&ye(Zi()),yt=!0}function Kn(t){e(function(){Jn(qi(t))})}function Jn(e){if(yt){"outer"===U&&ge.emit("outerResized",Zi(e)),ht=Dn();var i,a=ut,o=!1;J&&(Zn(),(i=a!==ut)&&ge.emit("newBreakpointStart",Zi(e)));var r,u,l,s,c=Dt,p=Me,m=Te,g=It,x=zt,b=jt,M=Ft,C=Vt,w=Gt,B=Yt,L=Kt,S=se;if(i){var A=Lt,N=Wt,O=qt,k=Ot,I=Xt;if(!P)var _=At,R=St}if(It=_n("arrowKeys"),zt=_n("controls"),jt=_n("nav"),Ft=_n("touch"),Ot=_n("center"),Vt=_n("mouseDrag"),Gt=_n("autoplay"),Yt=_n("autoplayHoverPause"),Kt=_n("autoplayResetOnVisibility"),i&&(Me=_n("disable"),Lt=_n("fixedWidth"),_t=_n("speed"),Wt=_n("autoHeight"),qt=_n("controlsText"),Xt=_n("autoplayText"),Qt=_n("autoplayTimeout"),P||(St=_n("edgePadding"),At=_n("gutter"))),Ln(Me),Nt=kn(),lt&&!Bt||Me||(mi(),lt||(Ki(),o=!0)),(Lt||Bt)&&(ie=Ti(),fe=le()),(i||Lt)&&(Dt=_n("items"),Ht=_n("slideBy"),(u=Dt!==c)&&(Lt||Bt||(fe=le()),En())),i&&Me!==p&&(Me?ni():function(){if(Ce){if(Jt.disabled=!1,dt.className+=xe,Bi(),Pt)for(var t=te;t--;)Z&&E(pt[t]),E(pt[ee-t-1]);if(!Z)for(var e=se,n=se+mt;e<n;e++){var i=pt[e],a=e<se+Dt?nt:ot;i.style.left=100*(e-se)/Dt+"%",h(i,a)}ti(),Ce=!1}}()),we&&(i||Lt||Bt)&&(Te=Un())!==m&&(Te?(Li(Ei(An(0))),ei()):(function(){if(Ee){if(St&&P&&(ct.style.margin=""),te)for(var t="tns-transparent",e=te;e--;)Z&&y(pt[e],t),y(pt[ee-e-1],t);ti(),Ee=!1}}(),o=!0)),Ln(Me||Te),Gt||(Yt=Kt=!1),It!==g&&(It?D(n,Ne):H(n,Ne)),zt!==x&&(zt?Qe?E(Qe):(Ye&&E(Ye),Ke&&E(Ke)):Qe?T(Qe):(Ye&&T(Ye),Ke&&T(Ke))),jt!==b&&(jt?(E($e),Ui()):T($e)),Ft!==M&&(Ft?D(dt,Oe,t.preventScrollOnTouch):H(dt,Oe)),Vt!==C&&(Vt?D(dt,De):H(dt,De)),Gt!==w&&(Gt?(hn&&E(hn),dn||vn||Ri()):(hn&&T(hn),dn&&Pi())),Yt!==B&&(Yt?D(dt,Se):H(dt,Se)),Kt!==L&&(Kt?D(n,Ae):H(n,Ae)),i){if(Lt===A&&Ot===k||(o=!0),Wt!==N&&(Wt||(ct.style.height="")),zt&&qt!==O&&(Ye.innerHTML=qt[0],Ke.innerHTML=qt[1]),hn&&Xt!==I){var W=Gt?1:0,z=hn.innerHTML,q=z.length-I[W].length;z.substring(q)===I[W]&&(hn.innerHTML=z.substring(0,q)+Xt[W])}}else Ot&&(Lt||Bt)&&(o=!0);if((u||Lt&&!Bt)&&(en=Ji(),Ui()),(r=se!==S)?(ge.emit("indexChanged",Zi()),o=!0):u?r||fi():(Lt||Bt)&&(ri(),hi(),ii()),u&&!Z&&function(){for(var t=se+Math.min(mt,Dt),e=ee;e--;){var n=pt[e];se<=e&&e<t?(h(n,"tns-moving"),n.style.left=100*(e-se)/Dt+"%",h(n,nt),y(n,ot)):n.style.left&&(n.style.left="",h(n,ot),y(n,nt)),y(n,it)}setTimeout(function(){v(pt,function(t){y(t,"tns-moving")})},300)}(),!Me&&!Te){if(i&&!P&&(St===R&&At===_||(ct.style.cssText=Rn(St,At,Lt,_t,Wt)),lt)){Z&&(dt.style.width=Pn(Lt,At,Dt));var j=Wn(Lt,At,Dt)+zn(At);s=f(l=Jt)-1,"deleteRule"in l?l.deleteRule(s):l.removeRule(s),d(Jt,"#"+be+" > .tns-item",j,f(Jt))}Wt&&ci(),o&&(Bi(),ce=se)}i&&ge.emit("newBreakpointEnd",Zi(e))}}function Un(){if(!Lt&&!Bt)return mt<=(Ot?Dt-(Dt-1)/2:Dt);var t=Lt?(Lt+At)*mt:gt[mt],e=St?Nt+2*St:Nt+At;return Ot&&(e-=Lt?(Nt-Lt)/2:(Nt-(gt[se+1]-gt[se]-At))/2),t<=e}function Zn(){for(var t in ut=0,J)(t=parseInt(t))<=ht&&(ut=t)}function $n(){!Gt&&hn&&T(hn),!jt&&$e&&T($e),zt||(Qe?T(Qe):(Ye&&T(Ye),Ke&&T(Ke)))}function ti(){Gt&&hn&&E(hn),jt&&$e&&E($e),zt&&(Qe?E(Qe):(Ye&&E(Ye),Ke&&E(Ke)))}function ei(){if(!Ee){if(St&&(ct.style.margin="0px"),te)for(var t="tns-transparent",e=te;e--;)Z&&h(pt[e],t),h(pt[ee-e-1],t);$n(),Ee=!0}}function ni(){if(!Ce){if(Jt.disabled=!0,dt.className=dt.className.replace(xe.substring(1),""),C(dt,["style"]),Pt)for(var t=te;t--;)Z&&T(pt[t]),T(pt[ee-t-1]);if(lt&&Z||C(ct,["style"]),!Z)for(var e=se,n=se+mt;e<n;e++){var i=pt[e];C(i,["style"]),y(i,nt),y(i,ot)}$n(),Ce=!0}}function ii(){var t=ai();bt.innerHTML!==t&&(bt.innerHTML=t)}function ai(){var t=oi(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function oi(t){null==t&&(t=Ei());var e,n,i,a=se;if(Ot||St?(Bt||Lt)&&(n=-(parseFloat(t)+St),i=n+Nt+2*St):Bt&&(n=gt[se],i=n+Nt),Bt)gt.forEach(function(t,o){o<ee&&((Ot||St)&&t<=n+.5&&(a=o),.5<=i-t&&(e=o))});else{if(Lt){var o=Lt+At;Ot||St?(a=Math.floor(n/o),e=Math.ceil(i/o-1)):e=a+Math.ceil(Nt/o)-1}else if(Ot||St){var r=Dt-1;if(Ot?(a-=r/2,e=se+r/2):e=se+r,St){var u=St*Dt/Nt;a-=u,e+=u}a=Math.floor(a),e=Math.ceil(e)}else e=a+Dt-1;a=Math.max(a,0),e=Math.min(e,ee-1)}return[a,e]}function ri(){if(Ut&&!Me){var t=oi();t.push(Zt),si.apply(null,t).forEach(function(t){if(!m(t,qe)){var e={};e[G]=function(t){t.stopPropagation()},D(t,e),D(t,je),t.src=x(t,"data-src");var n=x(t,"data-srcset");n&&(t.srcset=n),h(t,"loading")}})}}function ui(t){h(t,"loaded"),li(t)}function li(t){h(t,qe),y(t,"loading"),H(t,je)}function si(t,e,n){var i=[];for(n||(n="img");t<=e;)v(pt[t].querySelectorAll(n),function(t){i.push(t)}),t++;return i}function ci(){var t=si.apply(null,oi());e(function(){di(t,pi)})}function di(t,n){return xt?n():(t.forEach(function(e,n){!Ut&&e.complete&&li(e),m(e,qe)&&t.splice(n,1)}),t.length?void e(function(){di(t,n)}):n())}function fi(){ri(),hi(),ii(),Mi(),function(){if(jt&&(on=0<=an?an:On(),an=-1,on!==rn)){var t=Ze[rn],e=Ze[on];M(t,{tabindex:"-1","aria-label":ln+(rn+1)}),y(t,un),M(e,{"aria-label":ln+(on+1)+sn}),C(e,"tabindex"),h(e,un),rn=on}}()}function vi(t,e){for(var n=[],i=t,a=Math.min(t+e,ee);i<a;i++)n.push(pt[i].offsetHeight);return Math.max.apply(null,n)}function pi(){var t=Wt?vi(se,Dt):vi(te,mt),e=rt||ct;e.style.height!==t&&(e.style.height=t+"px")}function mi(){gt=[0];var t=lt?"left":"top",e=lt?"right":"bottom",n=pt[0].getBoundingClientRect()[t];v(pt,function(i,a){a&&gt.push(i.getBoundingClientRect()[t]-n),a===ee-1&&gt.push(i.getBoundingClientRect()[e]-n)})}function hi(){var t=oi(),e=t[0],n=t[1];v(pt,function(t,i){e<=i&&i<=n?g(t,"aria-hidden")&&(C(t,["aria-hidden","tabindex"]),h(t,We)):g(t,"aria-hidden")||(M(t,{"aria-hidden":"true",tabindex:"-1"}),y(t,We))})}function yi(t){return t.nodeName.toLowerCase()}function gi(t){return"button"===yi(t)}function xi(t){return"true"===t.getAttribute("aria-disabled")}function bi(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Mi(){if(zt&&!Rt&&!Pt){var t=Ve?Ye.disabled:xi(Ye),e=Ge?Ke.disabled:xi(Ke),n=se<=de,i=!Rt&&fe<=se;n&&!t&&bi(Ve,Ye,!0),!n&&t&&bi(Ve,Ye,!1),i&&!e&&bi(Ge,Ke,!0),!i&&e&&bi(Ge,Ke,!1)}}function Ci(t,e){q&&(t.style[q]=e)}function wi(t){return null==t&&(t=se),Bt?(Nt-(St?At:0)-(gt[t+1]-gt[t]-At))/2:Lt?(Nt-Lt)/2:(Dt-1)/2}function Ti(){var t=Nt+(St?At:0)-(Lt?(Lt+At)*ee:gt[ee]);return Ot&&!Pt&&(t=Lt?-(Lt+At)*(ee-1)-wi():wi(ee-1)-gt[ee-1]),0<t&&(t=0),t}function Ei(t){var e;if(null==t&&(t=se),lt&&!Bt)if(Lt)e=-(Lt+At)*t,Ot&&(e+=wi());else{var n=W?ee:Dt;Ot&&(t-=wi()),e=100*-t/n}else e=-gt[t],Ot&&Bt&&(e+=wi());return ne&&(e=Math.max(e,ie)),e+(!lt||Bt||Lt?"px":"%")}function Bi(t){Ci(dt,"0s"),Li(t)}function Li(t){null==t&&(t=Ei()),dt.style[oe]=re+t+ue}function Si(t,e,n,i){var a=t+Dt;Pt||(a=Math.min(a,ee));for(var o=t;o<a;o++){var r=pt[o];i||(r.style.left=100*(o-se)/Dt+"%"),at&&j&&(r.style[j]=r.style[V]=at*(o-t)/1e3+"s"),y(r,e),h(r,n),i&&$t.push(r)}}function Ai(t,e){ae&&En(),(se!==ce||e)&&(ge.emit("indexChanged",Zi()),ge.emit("transitionStart",Zi()),Wt&&ci(),dn&&t&&0<=["click","keydown"].indexOf(t.type)&&Pi(),he=!0,Bn())}function Ni(t){return t.toLowerCase().replace(/-/g,"")}function Oi(t){if(Z||he){if(ge.emit("transitionEnd",Zi(t)),!Z&&0<$t.length)for(var e=0;e<$t.length;e++){var n=$t[e];n.style.left="",V&&j&&(n.style[V]="",n.style[j]=""),y(n,it),h(n,ot)}if(!t||!Z&&t.target.parentNode===dt||t.target===dt&&Ni(t.propertyName)===Ni(oe)){if(!ae){var i=se;En(),se!==i&&(ge.emit("indexChanged",Zi()),Bi())}"inner"===U&&ge.emit("innerLoaded",Zi()),he=!1,ce=se}}}function Di(t,e){if(!Te)if("prev"===t)Hi(e,-1);else if("next"===t)Hi(e,1);else{if(he){if(ve)return;Oi()}var n=Nn(),i=0;if("first"===t?i=-n:"last"===t?i=Z?mt-Dt-n:mt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(mt-1,t))),i=t-n)),!Z&&i&&Math.abs(i)<Dt){var a=0<i?1:-1;i+=de<=se+i-mt?mt*a:2*mt*a*-1}se+=i,Z&&Pt&&(se<de&&(se+=mt),fe<se&&(se-=mt)),Nn(se)!==Nn(ce)&&Ai(e)}}function Hi(t,e){if(he){if(ve)return;Oi()}var n;if(!e){for(var i=ji(t=qi(t));i!==Qe&&[Ye,Ke].indexOf(i)<0;)i=i.parentNode;var a=[Ye,Ke].indexOf(i);0<=a&&(n=!0,e=0===a?-1:1)}if(Rt){if(se===de&&-1===e)return void Di("last",t);if(se===fe&&1===e)return void Di("first",t)}e&&(se+=Ht*e,Bt&&(se=Math.floor(se)),Ai(n||t&&"keydown"===t.type?t:null))}function ki(){cn=setInterval(function(){Hi(null,mn)},Qt),dn=!0}function Ii(){clearInterval(cn),dn=!1}function _i(t,e){M(hn,{"data-action":t}),hn.innerHTML=gn[0]+t+gn[1]+e}function Ri(){ki(),hn&&_i("stop",Xt[1])}function Pi(){Ii(),hn&&_i("start",Xt[0])}function Wi(){dn?(Pi(),vn=!0):(Ri(),vn=!1)}function zi(t){t.focus()}function qi(t){return Fi(t=t||l.event)?t.changedTouches[0]:t}function ji(t){return t.target||l.event.srcElement}function Fi(t){return 0<=t.type.indexOf("touch")}function Vi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Gi(){return o=Cn.y-Mn.y,r=Cn.x-Mn.x,e=Math.atan2(o,r)*(180/Math.PI),i=!1,90-(n=pe)<=(a=Math.abs(90-Math.abs(e)))?i="horizontal":a<=n&&(i="vertical"),i===t.axis;var e,n,i,a,o,r}function Qi(t){if(he){if(ve)return;Oi()}Gt&&dn&&Ii(),wn=!0,bn&&(i(bn),bn=null);var e=qi(t);ge.emit(Fi(t)?"touchStart":"dragStart",Zi(t)),!Fi(t)&&0<=["img","a"].indexOf(yi(ji(t)))&&Vi(t),Cn.x=Mn.x=e.clientX,Cn.y=Mn.y=e.clientY,Z&&(xn=parseFloat(dt.style[oe].replace(re,"")),Ci(dt,"0s"))}function Xi(t){if(wn){var n=qi(t);Cn.x=n.clientX,Cn.y=n.clientY,Z?bn||(bn=e(function(){!function t(n){if(me){if(i(bn),wn&&(bn=e(function(){t(n)})),"?"===me&&(me=Gi()),me){!Fe&&Fi(n)&&(Fe=!0);try{n.type&&ge.emit(Fi(n)?"touchMove":"dragMove",Zi(n))}catch(t){}var a=xn,o=Tn(Cn,Mn);if(!lt||Lt||Bt)a+=o,a+="px";else a+=W?o*Dt*100/((Nt+At)*ee):100*o/(Nt+At),a+="%";dt.style[oe]=re+a+ue}}else wn=!1}(t)})):("?"===me&&(me=Gi()),me&&(Fe=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&Fe&&t.preventDefault()}}function Yi(n){if(wn){bn&&(i(bn),bn=null),Z&&Ci(dt,""),wn=!1;var a=qi(n);Cn.x=a.clientX,Cn.y=a.clientY;var o=Tn(Cn,Mn);if(Math.abs(o)){if(!Fi(n)){var r=ji(n);D(r,{click:function t(e){Vi(e),H(r,{click:t})}})}Z?bn=e(function(){if(lt&&!Bt){var t=-o*Dt/(Nt+At);t=0<o?Math.floor(t):Math.ceil(t),se+=t}else{var e=-(xn+o);if(e<=0)se=de;else if(e>=gt[ee-1])se=fe;else for(var i=0;i<ee&&e>=gt[i];)e>gt[se=i]&&o<0&&(se+=1),i++}Ai(n,o),ge.emit(Fi(n)?"touchEnd":"dragEnd",Zi(n))}):me&&Hi(n,0<o?-1:1)}}"auto"===t.preventScrollOnTouch&&(Fe=!1),pe&&(me="?"),Gt&&!dn&&ki()}function Ki(){(rt||ct).style.height=gt[se+Dt]-gt[se]+"px"}function Ji(){var t=Lt?(Lt+At)*mt/Nt:mt/Dt;return Math.min(Math.ceil(t),mt)}function Ui(){if(jt&&!Ie&&en!==nn){var t=nn,e=en,n=E;for(en<nn&&(t=en,e=nn,n=T);t<e;)n(Ze[t]),t++;nn=en}}function Zi(t){return{container:dt,slideItems:pt,navContainer:$e,navItems:Ze,controlsContainer:Qe,hasControls:He,prevButton:Ye,nextButton:Ke,items:Dt,slideBy:Ht,cloneCount:te,slideCount:mt,slideCountNew:ee,index:se,indexCached:ce,displayIndex:Sn(),navCurrentIndex:on,navCurrentIndexCached:rn,pages:en,pagesCached:nn,sheet:Jt,isOn:yt,event:t||{}}}X&&console.warn("No slides found in",t.container)};return I}();const quoteCarouselElement=document.querySelector(".slogan__carousel"),projectCarouseElement=document.querySelector(".project__carousel"),toggleMobileMenuButton=document.querySelector(".nav__toggle-menu"),menu=document.querySelector(".nav__menu"),galleryMobile=document.querySelector(".gallery_index");let isMenuOpened=!1;if(toggleMobileMenuButton.addEventListener("click",function(t){t.preventDefault(),isMenuOpened?(toggleMobileMenuButton.classList.remove("nav__toggle-menu--close"),menu.classList.remove("nav__menu--opened")):(menu.classList.add("nav__menu--opened"),toggleMobileMenuButton.classList.add("nav__toggle-menu--close")),isMenuOpened=!isMenuOpened}),quoteCarouselElement&&tns({container:".slogan__carousel",items:1,slideBy:"page",autoplay:!0,speed:400,autoplayTimeout:5e3,controls:!1,navContainer:".carousel__controls",autoplayButtonOutput:!1,startIndex:0,mouseDrag:!0}),projectCarouseElement&&tns({container:".project__carousel",items:1,slideBy:"page",autoplay:!1,speed:400,nav:!1,controlsContainer:".sidebar__menu",autoplayButtonOutput:!1,prevButton:".sidebar__item_order_1",nextButton:".sidebar__item_order_2",startIndex:window.location.search.split("=")[1]}),document.documentElement.clientWidth<768&&galleryMobile)var sliderGallery=tns({container:".gallery_index",items:1,slideBy:"page",autoplay:!0,speed:400,nav:!1,controls:!1,autoplayButtonOutput:!1,startIndex:0,mouseDrag:!0});window.addEventListener("resize",function(t){if(document.documentElement.clientWidth<768&&galleryMobile)var e=tns({container:".gallery_index",items:1,slideBy:"page",autoplay:!0,speed:700,nav:!1,controls:!1,autoplayButtonOutput:!1,startIndex:0,mouseDrag:!0});document.documentElement.clientWidth>768&&e&&e.destroy()});