webpackJsonp([3],{100:function(t,e){},102:function(t,e,n){n(100);var i=n(45)(n(47),n(103),null,null);t.exports=i.exports},103:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},109:function(t,e){},44:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(50),o=(i(r),n(51)),s=i(o),a=n(56),u=i(a);new s.default(u.default)},47:function(t,e,n){"use strict"},48:function(t,e,n){"use strict";Date.prototype.format=function(t){var e,n,i;i={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()},/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(n in i)e=i[n],new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?e:("00"+e).substr((""+e).length)));return t},Date.prototype.addDate=function(t){return new Date(this.getTime()+864e5*t)}},49:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(12),o=i(r),s=n(16),a=i(s),u=function(){function t(e,n){(0,o.default)(this,t),this.baseUrl=e,this.httpProvide=n}return(0,a.default)(t,[{key:"post",value:function(t,e){e=this.concatParams(e);var n=this.httpProvide.http.post(this.baseUrl+t,e);return this.getDefferPromise(n)}},{key:"get",value:function(t,e){e=this.concatParams(e);var n=sprWebBase.http.get(this.baseUrl+t,{params:e});return this.getDefferPromise(n)}},{key:"concatParams",value:function(t){return t}},{key:"getDefferPromise",value:function(t){return t.then(function(t){return 0==t.data.errcode?t.data:t.data.errmsg},function(t){console.log("error")})}}]),t}();e.default=u},50:function(t,e,n){"use strict";n(55),n(54);var i=n(52);!function(t){t&&t.__esModule}(i)},51:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(12),o=i(r),s=n(102),a=i(s);sprWebBase.prototype.extendsPlugins();var u=function t(e){(0,o.default)(this,t);var n=sprWebBase.prototype.initRouter(e);n.beforeEach(function(t,e,n){window.scrollTo(0,0),n()});new sprWebBase({el:"#app",router:n,render:function(t){return t(a.default)}})};e.default=u},52:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(12),o=i(r),s=n(16),a=i(s),u=n(53),c=i(u),l=function(){function t(e){return(0,o.default)(this,t),c.default.extend(e)}return(0,a.default)(t,[{key:"directive",value:function(t,e){return c.default.directive(t,e)}}]),t}();window.sprWeb=l,e.default=l},53:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(31),o=i(r),s=n(12),a=i(s),u=n(16),c=i(u),l=n(63),f=i(l),h=n(62),d=i(h),p=n(107),m=i(p),v=n(105),g=i(v),y=n(104),w=i(y),x=n(101),b=i(x);n(99);var T=n(49),E=i(T),P=n(48);i(P);window.Vue=m.default;var j=function(t){function e(t){(0,a.default)(this,e);var n=(0,f.default)(this,(e.__proto__||(0,o.default)(e)).call(this));return n.init(t),n}return(0,d.default)(e,t),(0,c.default)(e,[{key:"extendsPlugins",value:function(){m.default.use(g.default),m.default.use(w.default),m.default.use(b.default)}},{key:"init",value:function(t){return new m.default(t)}},{key:"initRouter",value:function(t){return new g.default(t)}},{key:"sprHttpProvide",value:function(t){function n(t){this.httpProvide=new E.default(t,e)}return n.prototype.post=function(t,e){return this.httpProvide.post(t,e)},n.prototype.get=function(t,e){return this.httpProvide.get(t,e)},n}},{key:"router",value:function(t,e){t.$router.push(e)}}]),e}(m.default);window.sprWebBase=j,e.default=window.sprWebBase},54:function(t,e,n){"use strict";$(function(){function t(){var t=e.clientWidth;t=t>750?750:t,e.style.fontSize=t/750*100+"px"}var e=document.documentElement;t(),window.onresize=function(){t()}})},55:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(17),o=i(r),s=n(31),a=i(s),u=function(){function t(t){return null==t?String(t):X[V.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(e){return"object"==t(e)}function s(t){return r(t)&&!n(t)&&(0,a.default)(t)==Object.prototype}function u(t){return"number"==typeof t.length}function c(t){return N.call(t,function(t){return null!=t})}function l(t){return t.length>0?j.fn.concat.apply([],t):t}function f(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function h(t){return t in I?I[t]:I[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function d(t,e){return"number"!=typeof e||L[f(t)]?e:e+"px"}function p(t){var e,n;return D[t]||(e=O.createElement(t),O.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),D[t]=n),D[t]}function m(t){return"children"in t?C.call(t.children):j.map(t.childNodes,function(t){if(1==t.nodeType)return t})}function v(t,e,n){for(P in e)n&&(s(e[P])||Q(e[P]))?(s(e[P])&&!s(t[P])&&(t[P]={}),Q(e[P])&&!Q(t[P])&&(t[P]=[]),v(t[P],e[P],n)):e[P]!==E&&(t[P]=e[P])}function g(t,e){return null==e?j(t):j(t).filter(e)}function y(t,n,i,r){return e(n)?n.call(t,i,r):n}function w(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function x(t,e){var n=t.className||"",i=n&&n.baseVal!==E;if(e===E)return i?n.baseVal:n;i?n.baseVal=e:t.className=e}function b(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?j.parseJSON(t):t):t}catch(e){return t}}function T(t,e){e(t);for(var n=0,i=t.childNodes.length;n<i;n++)T(t.childNodes[n],e)}var E,P,j,S,_,k,M=[],C=M.slice,N=M.filter,O=window.document,D={},I={},L={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},Y=/^\s*<(\w+|!)[^>]*>/,$=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,H=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,R=/^(?:body|html)$/i,z=/([A-Z])/g,A=["val","css","html","text","data","width","height","offset"],F=["after","prepend","before","append"],Z=O.createElement("table"),B=O.createElement("tr"),W={tr:O.createElement("tbody"),tbody:Z,thead:Z,tfoot:Z,td:B,th:B,"*":O.createElement("div")},U=/complete|loaded|interactive/,q=/^[\w-]*$/,X={},V=X.toString,J={},G=O.createElement("div"),K={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Q=Array.isArray||function(t){return t instanceof Array};return J.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=G).appendChild(t),i=~J.qsa(r,e).indexOf(t),o&&G.removeChild(t),i},_=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},k=function(t){return N.call(t,function(e,n){return t.indexOf(e)==n})},J.fragment=function(t,e,n){var i,r,o;return $.test(t)&&(i=j(O.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(H,"<$1></$2>")),e===E&&(e=Y.test(t)&&RegExp.$1),e in W||(e="*"),o=W[e],o.innerHTML=""+t,i=j.each(C.call(o.childNodes),function(){o.removeChild(this)})),s(n)&&(r=j(i),j.each(n,function(t,e){A.indexOf(t)>-1?r[t](e):r.attr(t,e)})),i},J.Z=function(t,e){return t=t||[],t.__proto__=j.fn,t.selector=e||"",t},J.isZ=function(t){return t instanceof J.Z},J.init=function(t,n){var i;if(!t)return J.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&Y.test(t))i=J.fragment(t,RegExp.$1,n),t=null;else{if(n!==E)return j(n).find(t);i=J.qsa(O,t)}else{if(e(t))return j(O).ready(t);if(J.isZ(t))return t;if(Q(t))i=c(t);else if(r(t))i=[t],t=null;else if(Y.test(t))i=J.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==E)return j(n).find(t);i=J.qsa(O,t)}}return J.Z(i,t)},j=function(t,e){return J.init(t,e)},j.extend=function(t){var e,n=C.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){v(t,n,e)}),t},J.qsa=function(t,e){var n,r="#"==e[0],o=!r&&"."==e[0],s=r||o?e.slice(1):e,a=q.test(s);return i(t)&&a&&r?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:C.call(a&&!r?o?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},j.contains=O.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},j.type=t,j.isFunction=e,j.isWindow=n,j.isArray=Q,j.isPlainObject=s,j.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},j.inArray=function(t,e,n){return M.indexOf.call(e,t,n)},j.camelCase=_,j.trim=function(t){return null==t?"":String.prototype.trim.call(t)},j.uuid=0,j.support={},j.expr={},j.map=function(t,e){var n,i,r,o=[];if(u(t))for(i=0;i<t.length;i++)null!=(n=e(t[i],i))&&o.push(n);else for(r in t)null!=(n=e(t[r],r))&&o.push(n);return l(o)},j.each=function(t,e){var n,i;if(u(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(i in t)if(!1===e.call(t[i],i,t[i]))return t;return t},j.grep=function(t,e){return N.call(t,e)},window.JSON&&(j.parseJSON=JSON.parse),j.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){X["[object "+e+"]"]=e.toLowerCase()}),j.fn={forEach:M.forEach,reduce:M.reduce,push:M.push,sort:M.sort,indexOf:M.indexOf,concat:M.concat,map:function(t){return j(j.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return j(C.apply(this,arguments))},ready:function(t){return U.test(O.readyState)&&O.body?t(j):O.addEventListener("DOMContentLoaded",function(){t(j)},!1),this},get:function(t){return t===E?C.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return M.every.call(this,function(e,n){return!1!==t.call(e,n,e)}),this},filter:function(t){return e(t)?this.not(this.not(t)):j(N.call(this,function(e){return J.matches(e,t)}))},add:function(t,e){return j(k(this.concat(j(t,e))))},is:function(t){return this.length>0&&J.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==E)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):u(t)&&e(t.item)?C.call(t):j(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return j(n)},has:function(t){return this.filter(function(){return r(t)?j.contains(this,t):j(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:j(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:j(t)},find:function(t){var e=this;return t?"object"==(void 0===t?"undefined":(0,o.default)(t))?j(t).filter(function(){var t=this;return M.some.call(e,function(e){return j.contains(e,t)})}):1==this.length?j(J.qsa(this[0],t)):this.map(function(){return J.qsa(this,t)}):j()},closest:function(t,e){var n=this[0],r=!1;for("object"==(void 0===t?"undefined":(0,o.default)(t))&&(r=j(t));n&&!(r?r.indexOf(n)>=0:J.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return j(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=j.map(n,function(t){if((t=t.parentNode)&&!i(t)&&e.indexOf(t)<0)return e.push(t),t});return g(e,t)},parent:function(t){return g(k(this.pluck("parentNode")),t)},children:function(t){return g(this.map(function(){return m(this)}),t)},contents:function(){return this.map(function(){return C.call(this.childNodes)})},siblings:function(t){return g(this.map(function(t,e){return N.call(m(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return j.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=p(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=j(t).get(0),r=i.parentNode||this.length>1;return this.each(function(e){j(this).wrapAll(n?t.call(this,e):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){j(this[0]).before(t=j(t));for(var e;(e=t.children()).length;)t=e.first();j(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=j(this),r=i.contents(),o=n?t.call(this,e):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){j(this).replaceWith(j(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=j(this);(t===E?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return j(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return j(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;j(this).empty().append(y(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=y(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(r(t))for(P in t)w(this,P,t[P]);else w(this,t,y(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:E},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){w(this,t)},this)})},prop:function(t,e){return t=K[t]||t,1 in arguments?this.each(function(n){this[t]=y(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(z,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,e):this.attr(n);return null!==i?b(i):E},val:function(t){return 0 in arguments?this.each(function(e){this.value=y(this,t,e,this.value)}):this[0]&&(this[0].multiple?j(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=j(this),i=y(this,t,e,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var i,r=this[0];if(!r)return;if(i=getComputedStyle(r,""),"string"==typeof e)return r.style[_(e)]||i.getPropertyValue(e);if(Q(e)){var o={};return j.each(e,function(t,e){o[e]=r.style[_(e)]||i.getPropertyValue(e)}),o}}var s="";if("string"==t(e))n||0===n?s=f(e)+":"+d(e,n):this.each(function(){this.style.removeProperty(f(e))});else for(P in e)e[P]||0===e[P]?s+=f(P)+":"+d(P,e[P])+";":this.each(function(){this.style.removeProperty(f(P))});return this.each(function(){this.style.cssText+=";"+s})},index:function(t){return t?this.indexOf(j(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&M.some.call(this,function(t){return this.test(x(t))},h(t))},addClass:function(t){return t?this.each(function(e){if("className"in this){S=[];var n=x(this);y(this,t,e,n).split(/\s+/g).forEach(function(t){j(this).hasClass(t)||S.push(t)},this),S.length&&x(this,n+(n?" ":"")+S.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===E)return x(this,"");S=x(this),y(this,t,e,S).split(/\s+/g).forEach(function(t){S=S.replace(h(t)," ")}),x(this,S.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var i=j(this);y(this,t,n,x(this)).split(/\s+/g).forEach(function(t){(e===E?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===E?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===E?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=R.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(j(t).css("margin-top"))||0,n.left-=parseFloat(j(t).css("margin-left"))||0,i.top+=parseFloat(j(e[0]).css("border-top-width"))||0,i.left+=parseFloat(j(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||O.body;t&&!R.test(t.nodeName)&&"static"==j(t).css("position");)t=t.offsetParent;return t})}},j.fn.detach=j.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});j.fn[t]=function(r){var o,s=this[0];return r===E?n(s)?s["inner"+e]:i(s)?s.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){s=j(this),s.css(t,y(this,r,e,s[t]()))})}}),F.forEach(function(e,n){var i=n%2;j.fn[e]=function(){var e,r,o=j.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:J.fragment(n)}),s=this.length>1;return o.length<1?this:this.each(function(t,e){r=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var a=j.contains(O.documentElement,r);o.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!r)return j(t).remove();r.insertBefore(t,e),a&&T(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},j.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return j(t)[e](this),this}}),J.Z.prototype=j.fn,J.uniq=k,J.deserializeValue=b,j.zepto=J,j}();window.Zepto=u,void 0===window.$&&(window.$=u),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,s){if(n=i(n),n.ns)var a=r(n.ns);return(v[e(t)]||[]).filter(function(t){return t&&(!n.e||t.e==n.e)&&(!n.ns||a.test(t.ns))&&(!o||e(t.fn)===e(o))&&(!s||t.sel==s)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in w||!!e}function s(t){return x[t]||y&&w[t]||t}function a(n,r,a,u,l,h,d){var p=e(n),m=v[p]||(v[p]=[]);r.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(a);var r=i(e);r.fn=a,r.sel=l,r.e in x&&(a=function(e){var n=e.relatedTarget;if(!n||n!==this&&!t.contains(this,n))return r.fn.apply(this,arguments)}),r.del=h;var p=h||a;r.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=u;var e=p.apply(n,t._args==f?[t]:[t].concat(t._args));return!1===e&&(t.preventDefault(),t.stopPropagation()),e}},r.i=m.length,m.push(r),"addEventListener"in n&&n.addEventListener(s(r.e),r.proxy,o(r,d))})}function u(t,i,r,a,u){var c=e(t);(i||"").split(/\s/).forEach(function(e){n(t,e,r,a).forEach(function(e){delete v[c][e.i],"removeEventListener"in t&&t.removeEventListener(s(e.e),e.proxy,o(e,u))})})}function c(e,n){return!n&&e.isDefaultPrevented||(n||(n=e),t.each(P,function(t,i){var r=n[t];e[t]=function(){return this[i]=b,r&&r.apply(n,arguments)},e[i]=T}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?!1===n.returnValue:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=b)),e}function l(t){var e,n={originalEvent:t};for(e in t)E.test(e)||t[e]===f||(n[e]=t[e]);return c(n,t)}var f,h=1,d=Array.prototype.slice,p=t.isFunction,m=function(t){return"string"==typeof t},v={},g={},y="onfocusin"in window,w={focus:"focusin",blur:"focusout"},x={mouseenter:"mouseover",mouseleave:"mouseout"};g.click=g.mousedown=g.mouseup=g.mousemove="MouseEvents",t.event={add:a,remove:u},t.proxy=function(n,i){var r=2 in arguments&&d.call(arguments,2);if(p(n)){var o=function(){return n.apply(i,r?r.concat(d.call(arguments)):arguments)};return o._zid=e(n),o}if(m(i))return r?(r.unshift(n[i],n),t.proxy.apply(null,r)):t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var b=function(){return!0},T=function(){return!1},E=/^([A-Z]|returnValue$|layer[XY]$)/,P={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i,r,o){var s,c,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,i,e,o)}),h):(m(n)||p(r)||!1===r||(r=i,i=n,n=f),(p(i)||!1===i)&&(r=i,i=f),!1===r&&(r=T),h.each(function(f,h){o&&(s=function(t){return u(h,t.type,r),r.apply(this,arguments)}),n&&(c=function(e){var i,o=t(e.target).closest(n,h).get(0);if(o&&o!==h)return i=t.extend(l(e),{currentTarget:o,liveFired:h}),(s||r).apply(o,[i].concat(d.call(arguments,1)))}),a(h,e,r,i,n,c||s)}))},t.fn.off=function(e,n,i){var r=this;return e&&!m(e)?(t.each(e,function(t,e){r.off(t,n,e)}),r):(m(n)||p(i)||!1===i||(i=n,n=f),!1===i&&(i=T),r.each(function(){u(this,e,i,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):c(e),e._args=n,this.each(function(){e.type in w&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,i){var r,o;return this.each(function(s,a){r=l(m(e)?t.Event(e):e),r._args=i,r.target=a,t.each(n(a,e.type||e),function(t,e){if(o=e.proxy(r),r.isImmediatePropagationStopped())return!1})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(g[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),c(n)}}(u),function(t){function e(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function n(t,n,i,r){if(t.global)return e(n||y,i,r)}function i(e){e.global&&0==t.active++&&n(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var i=e.context;if(!1===e.beforeSend.call(i,t,e)||!1===n(e,i,"ajaxBeforeSend",[t,e]))return!1;n(e,i,"ajaxSend",[t,e])}function s(t,e,i,r){var o=i.context;i.success.call(o,t,"success",e),r&&r.resolveWith(o,[t,"success",e]),n(i,o,"ajaxSuccess",[e,i,t]),u("success",e,i)}function a(t,e,i,r,o){var s=r.context;r.error.call(s,i,e,t),o&&o.rejectWith(s,[i,e,t]),n(r,s,"ajaxError",[i,r,t||e]),u(e,i,r)}function u(t,e,i){var o=i.context;i.complete.call(o,e,t),n(i,o,"ajaxComplete",[e,i]),r(i)}function c(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==E?"html":t==T?"json":x.test(t)?"script":b.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function d(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function p(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?p(e,u,i,n):e.add(n,u)})}var m,v,g=0,y=window.document,w=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,x=/^(?:text|application)\/javascript/i,b=/^(?:text|application)\/xml/i,T="application/json",E="text/html",P=/^\s*$/,j=y.createElement("a");j.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var i,r,u=e.jsonpCallback,c=(t.isFunction(u)?u():u)||"jsonp"+ ++g,l=y.createElement("script"),f=window[c],h=function(e){t(l).triggerHandler("error",e||"abort")},d={abort:h};return n&&n.promise(d),t(l).on("load error",function(o,u){clearTimeout(r),t(l).off().remove(),"error"!=o.type&&i?s(i[0],d,e,n):a(null,u||"error",d,e,n),window[c]=f,i&&t.isFunction(f)&&f(i[0]),f=i=void 0}),!1===o(d,e)?(h("abort"),d):(window[c]=function(){i=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),y.head.appendChild(l),e.timeout>0&&(r=setTimeout(function(){h("timeout")},e.timeout)),d)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:T,xml:"application/xml, text/xml",html:E,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n,r=t.extend({},e||{}),u=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===r[m]&&(r[m]=t.ajaxSettings[m]);i(r),r.crossDomain||(n=y.createElement("a"),n.href=r.url,n.href=n.href,r.crossDomain=j.protocol+"//"+j.host!=n.protocol+"//"+n.host),r.url||(r.url=window.location.toString()),h(r);var d=r.dataType,p=/\?.+=\?/.test(r.url);if(p&&(d="jsonp"),!1!==r.cache&&(e&&!0===e.cache||"script"!=d&&"jsonp"!=d)||(r.url=f(r.url,"_="+Date.now())),"jsonp"==d)return p||(r.url=f(r.url,r.jsonp?r.jsonp+"=?":!1===r.jsonp?"":"callback=?")),t.ajaxJSONP(r,u);var g,w=r.accepts[d],x={},b=function(t,e){x[t.toLowerCase()]=[t,e]},T=/^([\w-]+:)\/\//.test(r.url)?RegExp.$1:window.location.protocol,E=r.xhr(),S=E.setRequestHeader;if(u&&u.promise(E),r.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",w||"*/*"),(w=r.mimeType||w)&&(w.indexOf(",")>-1&&(w=w.split(",",2)[0]),E.overrideMimeType&&E.overrideMimeType(w)),(r.contentType||!1!==r.contentType&&r.data&&"GET"!=r.type.toUpperCase())&&b("Content-Type",r.contentType||"application/x-www-form-urlencoded"),r.headers)for(v in r.headers)b(v,r.headers[v]);if(E.setRequestHeader=b,E.onreadystatechange=function(){if(4==E.readyState){E.onreadystatechange=c,clearTimeout(g);var e,n=!1;if(E.status>=200&&E.status<300||304==E.status||0==E.status&&"file:"==T){d=d||l(r.mimeType||E.getResponseHeader("content-type")),e=E.responseText;try{"script"==d?(0,eval)(e):"xml"==d?e=E.responseXML:"json"==d&&(e=P.test(e)?null:t.parseJSON(e))}catch(t){n=t}n?a(n,"parsererror",E,r,u):s(e,E,r,u)}else a(E.statusText||null,E.status?"error":"abort",E,r,u)}},!1===o(E,r))return E.abort(),a(null,"abort",E,r,u),E;if(r.xhrFields)for(v in r.xhrFields)E[v]=r.xhrFields[v];var _=!("async"in r)||r.async;E.open(r.type,r.url,_,r.username,r.password);for(v in x)S.apply(E,x[v]);return r.timeout>0&&(g=setTimeout(function(){E.onreadystatechange=c,E.abort(),a(null,"timeout",E,r,u)},r.timeout)),E.send(r.data?r.data:null),E},t.get=function(){return t.ajax(d.apply(null,arguments))},t.post=function(){var e=d.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=d.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var r,o=this,s=e.split(/\s/),a=d(e,n,i),u=a.success;return s.length>1&&(a.url=s[0],r=s[1]),a.success=function(e){o.html(r?t("<div>").html(e.replace(w,"")).find(r):e),u&&u.apply(o,arguments)},t.ajax(a),this};var S=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(S(e)+"="+S(n))},p(i,e,n),i.join("&").replace(/%20/g,"+")}}(u),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function t(n){if(n.forEach)return n.forEach(t);i.push({name:e,value:n})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(u),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(t){var e=getComputedStyle;window.getComputedStyle=function(t){try{return e(t)}catch(t){return null}}}}(u),function(t){function e(t,e,n,i){return Math.abs(t-e)>=Math.abs(n-i)?t-e>0?"Left":"Right":n-i>0?"Up":"Down"}function n(){l=null,h.last&&(h.el.trigger("longTap"),h={})}function i(){l&&clearTimeout(l),l=null}function r(){a&&clearTimeout(a),u&&clearTimeout(u),c&&clearTimeout(c),l&&clearTimeout(l),a=u=c=l=null,h={}}function o(t){return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary}function s(t,e){return t.type=="pointer"+e||t.type.toLowerCase()=="mspointer"+e}var a,u,c,l,f,h={};t(document).ready(function(){var d,p,m,v,g=0,y=0;"MSGesture"in window&&(f=new MSGesture,f.target=document.body),t(document).bind("MSGestureEnd",function(t){var e=t.velocityX>1?"Right":t.velocityX<-1?"Left":t.velocityY>1?"Down":t.velocityY<-1?"Up":null;e&&(h.el.trigger("swipe"),h.el.trigger("swipe"+e))}).on("touchstart MSPointerDown pointerdown",function(e){(v=s(e,"down"))&&!o(e)||(m=v?e:e.touches[0],e.touches&&1===e.touches.length&&h.x2&&(h.x2=void 0,h.y2=void 0),d=Date.now(),p=d-(h.last||d),h.el=t("tagName"in m.target?m.target:m.target.parentNode),a&&clearTimeout(a),h.x1=m.pageX,h.y1=m.pageY,p>0&&p<=250&&(h.isDoubleTap=!0),h.last=d,l=setTimeout(n,750),f&&v&&f.addPointer(e.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){(v=s(t,"move"))&&!o(t)||(m=v?t:t.touches[0],i(),h.x2=m.pageX,h.y2=m.pageY,g+=Math.abs(h.x1-h.x2),y+=Math.abs(h.y1-h.y2))}).on("touchend MSPointerUp pointerup",function(n){(v=s(n,"up"))&&!o(n)||(i(),h.x2&&Math.abs(h.x1-h.x2)>30||h.y2&&Math.abs(h.y1-h.y2)>30?c=setTimeout(function(){h.el.trigger("swipe"),h.el.trigger("swipe"+e(h.x1,h.x2,h.y1,h.y2)),h={}},0):"last"in h&&(g<30&&y<30?u=setTimeout(function(){var e=t.Event("tap");e.cancelTouch=r,h.el&&h.el.trigger(e),h.isDoubleTap?(h.el&&h.el.trigger("doubleTap"),h={}):a=setTimeout(function(){a=null,h.el&&h.el.trigger("singleTap"),h={}},250)},0):h={}),g=y=0)}).on("touchcancel MSPointerCancel pointercancel",r),t(window).on("scroll",r)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.on(e,t)}})}(u),function(t,e){function n(t){return t.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()}function i(t){return r?r+t:t.toLowerCase()}var r,s,a,u,c,l,f,h,d,p,m="",v={Webkit:"webkit",Moz:"",O:"o"},g=document.createElement("div"),y=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,w={};t.each(v,function(t,e){if(void 0!==g.style[t+"TransitionProperty"])return m="-"+t.toLowerCase()+"-",r=e,!1}),s=m+"transform",w[a=m+"transition-property"]=w[u=m+"transition-duration"]=w[l=m+"transition-delay"]=w[c=m+"transition-timing-function"]=w[f=m+"animation-name"]=w[h=m+"animation-duration"]=w[p=m+"animation-delay"]=w[d=m+"animation-timing-function"]="",t.fx={off:void 0===r&&void 0===g.style.transitionProperty,speeds:{_default:400,fast:200,slow:600},cssPrefix:m,transitionEnd:i("TransitionEnd"),animationEnd:i("AnimationEnd")},t.fn.animate=function(e,n,i,r,o){return t.isFunction(n)&&(r=n,i=void 0,n=void 0),t.isFunction(i)&&(r=i,i=void 0),t.isPlainObject(n)&&(i=n.easing,r=n.complete,o=n.delay,n=n.duration),n&&(n=("number"==typeof n?n:t.fx.speeds[n]||t.fx.speeds._default)/1e3),o&&(o=parseFloat(o)/1e3),this.anim(e,n,i,r,o)},t.fn.anim=function(e,i,r,m,v){var g,x,b,T={},E="",P=this,j=t.fx.transitionEnd,S=!1;if(void 0===i&&(i=t.fx.speeds._default/1e3),void 0===v&&(v=0),t.fx.off&&(i=0),"string"==typeof e)T[f]=e,T[h]=i+"s",T[p]=v+"s",T[d]=r||"linear",j=t.fx.animationEnd;else{x=[];for(g in e)y.test(g)?E+=g+"("+e[g]+") ":(T[g]=e[g],x.push(n(g)));E&&(T[s]=E,x.push(s)),i>0&&"object"===(void 0===e?"undefined":(0,o.default)(e))&&(T[a]=x.join(", "),T[u]=i+"s",T[l]=v+"s",T[c]=r||"linear")}return b=function(e){if(void 0!==e){if(e.target!==e.currentTarget)return;t(e.target).unbind(j,b)}else t(this).unbind(j,b);S=!0,t(this).css(w),m&&m.call(this)},i>0&&(this.bind(j,b),setTimeout(function(){S||b.call(P)},1e3*(i+v)+25)),this.size()&&this.get(0).clientLeft,this.css(T),i<=0&&setTimeout(function(){P.each(function(){b.call(this)})},0),this},g=null}(u),function(t){function e(t){this.wrap=t.dom,this.outer=t.dom.getElementsByTagName("ul")[0],this.lis=this.outer.getElementsByTagName("li"),this.init(),this.bindDOM()}e.prototype.init=function(){this.winW=window.innerWidth,this.winH=window.innerHeight,this.initIndex=0;for(var t=this.lis,e=t.length,n=(this.header,0);n<e;n++)t[n].style.webkitTransform="translate3d(0, "+n*this.winH+"px, 0)",t[n].style.zIndex=e-n;this.outer.style.cssText="width:"+this.winW+"px",this.wrap.style.height=this.winH+"px"},e.prototype.bindDOM=function(){var e=this,n=e.winH,i=e.outer,r=e.lis,o=(r.length,function(t){t.preventDefault(),e.startTime=1*new Date,e.startY=t.touches[0].pageY,e.offsetY=0;for(var n=t.target;"LI"!=n.nodeName&&"BODY"!=n.nodeName;)n=n.parentNode;e.target=n}),s=function(n){n.preventDefault(),e.offsetY=n.targetTouches[0].pageY-e.startY;var i=e.initIndex-1,o=i+3;if(e.offsetY>0)for(i;i<o;i++)r[i]&&(r[i].style.webkitTransition="-webkit-transform 0s ease-out"),i==e.initIndex+1&&(r[i]&&(r[i].style.zIndex=887),r[i]&&(r[i].style.webkitTransform="translate3d(0, "+((i-e.initIndex)*e.winH+e.offsetY)+"px, 0)")),i==e.initIndex&&(r[i]&&(r[i].style.zIndex=888),r[i]&&(r[i].style.webkitTransform="translate3d(0, "+((i-e.initIndex)*e.winH+.3*e.offsetY)+"px, 0) scale("+(1-e.offsetY/(3.5*e.winH))+")")),i==e.initIndex-1&&(r[i]&&(r[i].style.zIndex=889),r[i]&&(r[i].style.webkitTransition="-webkit-transform 0.1s ease-out"),r[i]&&(r[i].style.webkitTransform="translate3d(0, "+((i-e.initIndex)*e.winH+e.offsetY+50)+"px, 0)"));else{for(i;i<o;i++)r[i]&&(r[i].style.webkitTransition="-webkit-transform 0s ease-out"),i==e.initIndex+1&&(r[i]&&(r[i].style.zIndex=889),r[i]&&(r[i].style.webkitTransition="-webkit-transform 0.1s ease-out"),r[i]&&(r[i].style.webkitTransform="translate3d(0, "+((i-e.initIndex)*e.winH+e.offsetY-50)+"px, 0)")),i==e.initIndex&&(r[i]&&(r[i].style.zIndex=888),r[i]&&(r[i].style.webkitTransform="translate3d(0, "+((i-e.initIndex)*e.winH+.3*e.offsetY)+"px, 0) scale("+(1+e.offsetY/(3.5*e.winH))+")")),i==e.initIndex-1&&(r[i]&&(r[i].style.zIndex=887),r[i]&&(r[i].style.webkitTransform="translate3d(0, "+((i-e.initIndex)*e.winH+e.offsetY)+"px, 0)"));e.offsetY<-50&&t(r[e.initIndex+1]).find(".content").show()}},a=function(t){t.preventDefault();var i=n/5;1*new Date-e.startTime>300?e.offsetY>=i?e.goIndex("-1"):e.offsetY<0&&e.offsetY<-i?e.goIndex("+1"):e.goIndex("0"):e.offsetY>50?e.goIndex("-1"):e.offsetY<-50?e.goIndex("+1"):e.goIndex("0")};i.addEventListener("touchstart",o),i.addEventListener("touchmove",s),i.addEventListener("touchend",a)},e.prototype.goIndex=function(t){var e,n=this.initIndex,i=this.lis,r=i.length;"number"==typeof t?e=n:"string"==typeof t&&(e=n+1*t),e>r-1?e=r-1:e<0&&(e=0),this.initIndex=e,i[e].style.webkitTransition="-webkit-transform 0.2s ease-out",i[e-1]&&(i[e-1].style.webkitTransition="-webkit-transform 0.2s ease-out"),i[e+1]&&(i[e+1].style.webkitTransition="-webkit-transform 0.2s ease-out"),i[e].style.webkitTransform="translate3d(0, 0, 0)",i[e-1]&&(i[e-1].style.webkitTransform="translate3d(0, "+-this.winH+"px, 0)"),i[e+1]&&(i[e+1].style.webkitTransform="translate3d(0, "+this.winH+"px, 0)")},t.fn.slider=function(){return this.data("Slider")||this.data("Slider",new e({dom:this[0]})),this}}(u)},56:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={routes:[{path:"/login",name:"login",component:function(t){return n.e(1).then(function(){var e=[n(112)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/register",name:"register",component:function(t){return n.e(0).then(function(){var e=[n(113)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/",redirect:"/login"}]}},57:function(t,e,n){"use strict";n(44)},99:function(t,e){}},[57]);