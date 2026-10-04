var Gs=Object.create;var Ho=Object.defineProperty;var Ys=Object.getOwnPropertyDescriptor;var Js=Object.getOwnPropertyNames;var Xs=Object.getPrototypeOf,Qs=Object.prototype.hasOwnProperty;var Uo=(c,n)=>()=>{try{return n||c((n={exports:{}}).exports,n),n.exports}catch(r){throw n=0,r}};var ta=(c,n,r,a)=>{if(n&&typeof n=="object"||typeof n=="function")for(let h of Js(n))!Qs.call(c,h)&&h!==r&&Ho(c,h,{get:()=>n[h],enumerable:!(a=Ys(n,h))||a.enumerable});return c};var jo=(c,n,r)=>(r=c!=null?Gs(Xs(c)):{},ta(n||!c||!c.__esModule?Ho(r,"default",{value:c,enumerable:!0}):r,c));var fr=Uo((Ai,ur)=>{(function(c,n){typeof Ai=="object"&&typeof ur<"u"?n(Ai):typeof define=="function"&&define.amd?define(["exports"],n):(c=typeof globalThis<"u"?globalThis:c||self,n(c.leaflet={}))})(Ai,(function(c){"use strict";var n="1.9.4";function r(t){var e,i,o,s;for(i=1,o=arguments.length;i<o;i++){s=arguments[i];for(e in s)t[e]=s[e]}return t}var a=Object.create||(function(){function t(){}return function(e){return t.prototype=e,new t}})();function h(t,e){var i=Array.prototype.slice;if(t.bind)return t.bind.apply(t,i.call(arguments,1));var o=i.call(arguments,2);return function(){return t.apply(e,o.length?o.concat(i.call(arguments)):arguments)}}var d=0;function f(t){return"_leaflet_id"in t||(t._leaflet_id=++d),t._leaflet_id}function z(t,e,i){var o,s,l,u;return u=function(){o=!1,s&&(l.apply(i,s),s=!1)},l=function(){o?s=arguments:(t.apply(i,arguments),setTimeout(u,e),o=!0)},l}function A(t,e,i){var o=e[1],s=e[0],l=o-s;return t===o&&i?t:((t-s)%l+l)%l+s}function b(){return!1}function K(t,e){if(e===!1)return t;var i=Math.pow(10,e===void 0?6:e);return Math.round(t*i)/i}function H(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function et(t){return H(t).split(/\s+/)}function U(t,e){Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?a(t.options):{});for(var i in e)t.options[i]=e[i];return t.options}function Tt(t,e,i){var o=[];for(var s in t)o.push(encodeURIComponent(i?s.toUpperCase():s)+"="+encodeURIComponent(t[s]));return(!e||e.indexOf("?")===-1?"?":"&")+o.join("&")}var kt=/\{ *([\w_ -]+) *\}/g;function ei(t,e){return t.replace(kt,function(i,o){var s=e[o];if(s===void 0)throw new Error("No value provided for variable "+i);return typeof s=="function"&&(s=s(e)),s})}var Ct=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"};function R(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1}var Z="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function B(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var O=0;function w(t){var e=+new Date,i=Math.max(0,16-(e-O));return O=e+i,window.setTimeout(t,i)}var E=window.requestAnimationFrame||B("RequestAnimationFrame")||w,g=window.cancelAnimationFrame||B("CancelAnimationFrame")||B("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function p(t,e,i){if(i&&E===w)t.call(e);else return E.call(window,h(t,e))}function S(t){t&&g.call(window,t)}var P={__proto__:null,extend:r,create:a,bind:h,get lastId(){return d},stamp:f,throttle:z,wrapNum:A,falseFn:b,formatNum:K,trim:H,splitWords:et,setOptions:U,getParamString:Tt,template:ei,isArray:Ct,indexOf:R,emptyImageUrl:Z,requestFn:E,cancelFn:g,requestAnimFrame:p,cancelAnimFrame:S};function C(){}C.extend=function(t){var e=function(){U(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},i=e.__super__=this.prototype,o=a(i);o.constructor=e,e.prototype=o;for(var s in this)Object.prototype.hasOwnProperty.call(this,s)&&s!=="prototype"&&s!=="__super__"&&(e[s]=this[s]);return t.statics&&r(e,t.statics),t.includes&&(X(t.includes),r.apply(null,[o].concat(t.includes))),r(o,t),delete o.statics,delete o.includes,o.options&&(o.options=i.options?a(i.options):{},r(o.options,t.options)),o._initHooks=[],o.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var l=0,u=o._initHooks.length;l<u;l++)o._initHooks[l].call(this)}},e},C.include=function(t){var e=this.prototype.options;return r(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},C.mergeOptions=function(t){return r(this.prototype.options,t),this},C.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i=typeof t=="function"?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};function X(t){if(!(typeof L>"u"||!L||!L.Mixin)){t=Ct(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var V={on:function(t,e,i){if(typeof t=="object")for(var o in t)this._on(o,t[o],e);else{t=et(t);for(var s=0,l=t.length;s<l;s++)this._on(t[s],e,i)}return this},off:function(t,e,i){if(!arguments.length)delete this._events;else if(typeof t=="object")for(var o in t)this._off(o,t[o],e);else{t=et(t);for(var s=arguments.length===1,l=0,u=t.length;l<u;l++)s?this._off(t[l]):this._off(t[l],e,i)}return this},_on:function(t,e,i,o){if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}if(this._listens(t,e,i)===!1){i===this&&(i=void 0);var s={fn:e,ctx:i};o&&(s.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(s)}},_off:function(t,e,i){var o,s,l;if(this._events&&(o=this._events[t],!!o)){if(arguments.length===1){if(this._firingCount)for(s=0,l=o.length;s<l;s++)o[s].fn=b;delete this._events[t];return}if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}var u=this._listens(t,e,i);if(u!==!1){var m=o[u];this._firingCount&&(m.fn=b,this._events[t]=o=o.slice()),o.splice(u,1)}}},fire:function(t,e,i){if(!this.listens(t,i))return this;var o=r({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var s=this._events[t];if(s){this._firingCount=this._firingCount+1||1;for(var l=0,u=s.length;l<u;l++){var m=s[l],_=m.fn;m.once&&this.off(t,_,m.ctx),_.call(m.ctx||this,o)}this._firingCount--}}return i&&this._propagateEvent(o),this},listens:function(t,e,i,o){typeof t!="string"&&console.warn('"string" type argument expected');var s=e;typeof e!="function"&&(o=!!e,s=void 0,i=void 0);var l=this._events&&this._events[t];if(l&&l.length&&this._listens(t,s,i)!==!1)return!0;if(o){for(var u in this._eventParents)if(this._eventParents[u].listens(t,e,i,o))return!0}return!1},_listens:function(t,e,i){if(!this._events)return!1;var o=this._events[t]||[];if(!e)return!!o.length;i===this&&(i=void 0);for(var s=0,l=o.length;s<l;s++)if(o[s].fn===e&&o[s].ctx===i)return s;return!1},once:function(t,e,i){if(typeof t=="object")for(var o in t)this._on(o,t[o],e,!0);else{t=et(t);for(var s=0,l=t.length;s<l;s++)this._on(t[s],e,i,!0)}return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[f(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[f(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,r({layer:t.target,propagatedFrom:t.target},t),!0)}};V.addEventListener=V.on,V.removeEventListener=V.clearAllEventListeners=V.off,V.addOneTimeEventListener=V.once,V.fireEvent=V.fire,V.hasEventListeners=V.listens;var rt=C.extend(V);function D(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e}var wt=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};D.prototype={clone:function(){return new D(this.x,this.y)},add:function(t){return this.clone()._add(F(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(F(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new D(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new D(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=wt(this.x),this.y=wt(this.y),this},distanceTo:function(t){t=F(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t=F(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=F(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+K(this.x)+", "+K(this.y)+")"}};function F(t,e,i){return t instanceof D?t:Ct(t)?new D(t[0],t[1]):t==null?t:typeof t=="object"&&"x"in t&&"y"in t?new D(t.x,t.y):new D(t,e,i)}function st(t,e){if(t)for(var i=e?[t,e]:t,o=0,s=i.length;o<s;o++)this.extend(i[o])}st.prototype={extend:function(t){var e,i;if(!t)return this;if(t instanceof D||typeof t[0]=="number"||"x"in t)e=i=F(t);else if(t=dt(t),e=t.min,i=t.max,!e||!i)return this;return!this.min&&!this.max?(this.min=e.clone(),this.max=i.clone()):(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)),this},getCenter:function(t){return F((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return F(this.min.x,this.max.y)},getTopRight:function(){return F(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return typeof t[0]=="number"||t instanceof D?t=F(t):t=dt(t),t instanceof st?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=dt(t);var e=this.min,i=this.max,o=t.min,s=t.max,l=s.x>=e.x&&o.x<=i.x,u=s.y>=e.y&&o.y<=i.y;return l&&u},overlaps:function(t){t=dt(t);var e=this.min,i=this.max,o=t.min,s=t.max,l=s.x>e.x&&o.x<i.x,u=s.y>e.y&&o.y<i.y;return l&&u},isValid:function(){return!!(this.min&&this.max)},pad:function(t){var e=this.min,i=this.max,o=Math.abs(e.x-i.x)*t,s=Math.abs(e.y-i.y)*t;return dt(F(e.x-o,e.y-s),F(i.x+o,i.y+s))},equals:function(t){return t?(t=dt(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight())):!1}};function dt(t,e){return!t||t instanceof st?t:new st(t,e)}function _t(t,e){if(t)for(var i=e?[t,e]:t,o=0,s=i.length;o<s;o++)this.extend(i[o])}_t.prototype={extend:function(t){var e=this._southWest,i=this._northEast,o,s;if(t instanceof nt)o=t,s=t;else if(t instanceof _t){if(o=t._southWest,s=t._northEast,!o||!s)return this}else return t?this.extend(it(t)||pt(t)):this;return!e&&!i?(this._southWest=new nt(o.lat,o.lng),this._northEast=new nt(s.lat,s.lng)):(e.lat=Math.min(o.lat,e.lat),e.lng=Math.min(o.lng,e.lng),i.lat=Math.max(s.lat,i.lat),i.lng=Math.max(s.lng,i.lng)),this},pad:function(t){var e=this._southWest,i=this._northEast,o=Math.abs(e.lat-i.lat)*t,s=Math.abs(e.lng-i.lng)*t;return new _t(new nt(e.lat-o,e.lng-s),new nt(i.lat+o,i.lng+s))},getCenter:function(){return new nt((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new nt(this.getNorth(),this.getWest())},getSouthEast:function(){return new nt(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){typeof t[0]=="number"||t instanceof nt||"lat"in t?t=it(t):t=pt(t);var e=this._southWest,i=this._northEast,o,s;return t instanceof _t?(o=t.getSouthWest(),s=t.getNorthEast()):o=s=t,o.lat>=e.lat&&s.lat<=i.lat&&o.lng>=e.lng&&s.lng<=i.lng},intersects:function(t){t=pt(t);var e=this._southWest,i=this._northEast,o=t.getSouthWest(),s=t.getNorthEast(),l=s.lat>=e.lat&&o.lat<=i.lat,u=s.lng>=e.lng&&o.lng<=i.lng;return l&&u},overlaps:function(t){t=pt(t);var e=this._southWest,i=this._northEast,o=t.getSouthWest(),s=t.getNorthEast(),l=s.lat>e.lat&&o.lat<i.lat,u=s.lng>e.lng&&o.lng<i.lng;return l&&u},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return t?(t=pt(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function pt(t,e){return t instanceof _t?t:new _t(t,e)}function nt(t,e,i){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,i!==void 0&&(this.alt=+i)}nt.prototype={equals:function(t,e){if(!t)return!1;t=it(t);var i=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return i<=(e===void 0?1e-9:e)},toString:function(t){return"LatLng("+K(this.lat,t)+", "+K(this.lng,t)+")"},distanceTo:function(t){return k.distance(this,it(t))},wrap:function(){return k.wrapLatLng(this)},toBounds:function(t){var e=180*t/40075017,i=e/Math.cos(Math.PI/180*this.lat);return pt([this.lat-e,this.lng-i],[this.lat+e,this.lng+i])},clone:function(){return new nt(this.lat,this.lng,this.alt)}};function it(t,e,i){return t instanceof nt?t:Ct(t)&&typeof t[0]!="object"?t.length===3?new nt(t[0],t[1],t[2]):t.length===2?new nt(t[0],t[1]):null:t==null?t:typeof t=="object"&&"lat"in t?new nt(t.lat,"lng"in t?t.lng:t.lon,t.alt):e===void 0?null:new nt(t,e,i)}var x={latLngToPoint:function(t,e){var i=this.projection.project(t),o=this.scale(e);return this.transformation._transform(i,o)},pointToLatLng:function(t,e){var i=this.scale(e),o=this.transformation.untransform(t,i);return this.projection.unproject(o)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,i=this.scale(t),o=this.transformation.transform(e.min,i),s=this.transformation.transform(e.max,i);return new st(o,s)},infinite:!1,wrapLatLng:function(t){var e=this.wrapLng?A(t.lng,this.wrapLng,!0):t.lng,i=this.wrapLat?A(t.lat,this.wrapLat,!0):t.lat,o=t.alt;return new nt(i,e,o)},wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),o=e.lat-i.lat,s=e.lng-i.lng;if(o===0&&s===0)return t;var l=t.getSouthWest(),u=t.getNorthEast(),m=new nt(l.lat-o,l.lng-s),_=new nt(u.lat-o,u.lng-s);return new _t(m,_)}},k=r({},x,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var i=Math.PI/180,o=t.lat*i,s=e.lat*i,l=Math.sin((e.lat-t.lat)*i/2),u=Math.sin((e.lng-t.lng)*i/2),m=l*l+Math.cos(o)*Math.cos(s)*u*u,_=2*Math.atan2(Math.sqrt(m),Math.sqrt(1-m));return this.R*_}}),y=6378137,$={R:y,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,o=Math.max(Math.min(i,t.lat),-i),s=Math.sin(o*e);return new D(this.R*t.lng*e,this.R*Math.log((1+s)/(1-s))/2)},unproject:function(t){var e=180/Math.PI;return new nt((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:(function(){var t=y*Math.PI;return new st([-t,-t],[t,t])})()};function M(t,e,i,o){if(Ct(t)){this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=e,this._c=i,this._d=o}M.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new D((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};function I(t,e,i,o){return new M(t,e,i,o)}var q=r({},k,{code:"EPSG:3857",projection:$,transformation:(function(){var t=.5/(Math.PI*$.R);return I(t,.5,-t,.5)})()}),W=r({},q,{code:"EPSG:900913"});function lt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function mt(t,e){var i="",o,s,l,u,m,_;for(o=0,l=t.length;o<l;o++){for(m=t[o],s=0,u=m.length;s<u;s++)_=m[s],i+=(s?"L":"M")+_.x+" "+_.y;i+=e?j.svg?"z":"x":""}return i||"M0 0"}var Y=document.documentElement.style,Pt="ActiveXObject"in window,Mt=Pt&&!document.addEventListener,Ce="msLaunchUri"in navigator&&!("documentMode"in document),ue=Zt("webkit"),Se=Zt("android"),fe=Zt("android 2")||Zt("android 3"),pe=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),zr=Se&&Zt("Google")&&pe<537&&!("AudioNode"in window),Ei=!!window.opera,In=!Ce&&Zt("chrome"),Nn=Zt("gecko")&&!ue&&!Ei&&!Pt,Mr=!In&&Zt("safari"),Rn=Zt("phantom"),Zn="OTransition"in Y,Ar=navigator.platform.indexOf("Win")===0,Dn=Pt&&"transition"in Y,Bi="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!fe,Hn="MozPerspective"in Y,Cr=!window.L_DISABLE_3D&&(Dn||Bi||Hn)&&!Zn&&!Rn,Ee=typeof orientation<"u"||Zt("mobile"),Sr=Ee&&ue,Er=Ee&&Bi,Un=!window.PointerEvent&&window.MSPointerEvent,jn=!!(window.PointerEvent||Un),Fn="ontouchstart"in window||!!window.TouchEvent,Br=!window.L_NO_TOUCH&&(Fn||jn),Or=Ee&&Ei,Ir=Ee&&Nn,Nr=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Rr=(function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",b,e),window.removeEventListener("testPassiveEventSupport",b,e)}catch{}return t})(),Zr=(function(){return!!document.createElement("canvas").getContext})(),Oi=!!(document.createElementNS&&lt("svg").createSVGRect),Dr=!!Oi&&(function(){var t=document.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),Hr=!Oi&&(function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&typeof e.adj=="object"}catch{return!1}})(),Ur=navigator.platform.indexOf("Mac")===0,jr=navigator.platform.indexOf("Linux")===0;function Zt(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var j={ie:Pt,ielt9:Mt,edge:Ce,webkit:ue,android:Se,android23:fe,androidStock:zr,opera:Ei,chrome:In,gecko:Nn,safari:Mr,phantom:Rn,opera12:Zn,win:Ar,ie3d:Dn,webkit3d:Bi,gecko3d:Hn,any3d:Cr,mobile:Ee,mobileWebkit:Sr,mobileWebkit3d:Er,msPointer:Un,pointer:jn,touch:Br,touchNative:Fn,mobileOpera:Or,mobileGecko:Ir,retina:Nr,passiveEvents:Rr,canvas:Zr,svg:Oi,vml:Hr,inlineSvg:Dr,mac:Ur,linux:jr},Wn=j.msPointer?"MSPointerDown":"pointerdown",qn=j.msPointer?"MSPointerMove":"pointermove",Vn=j.msPointer?"MSPointerUp":"pointerup",Kn=j.msPointer?"MSPointerCancel":"pointercancel",Ii={touchstart:Wn,touchmove:qn,touchend:Vn,touchcancel:Kn},Gn={touchstart:Gr,touchmove:ii,touchend:ii,touchcancel:ii},me={},Yn=!1;function Fr(t,e,i){return e==="touchstart"&&Kr(),Gn[e]?(i=Gn[e].bind(this,i),t.addEventListener(Ii[e],i,!1),i):(console.warn("wrong event specified:",e),b)}function Wr(t,e,i){if(!Ii[e]){console.warn("wrong event specified:",e);return}t.removeEventListener(Ii[e],i,!1)}function qr(t){me[t.pointerId]=t}function Vr(t){me[t.pointerId]&&(me[t.pointerId]=t)}function Jn(t){delete me[t.pointerId]}function Kr(){Yn||(document.addEventListener(Wn,qr,!0),document.addEventListener(qn,Vr,!0),document.addEventListener(Vn,Jn,!0),document.addEventListener(Kn,Jn,!0),Yn=!0)}function ii(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){e.touches=[];for(var i in me)e.touches.push(me[i]);e.changedTouches=[e],t(e)}}function Gr(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&Lt(e),ii(t,e)}function Yr(t){var e={},i,o;for(o in t)i=t[o],e[o]=i&&i.bind?i.bind(t):i;return t=e,e.type="dblclick",e.detail=2,e.isTrusted=!1,e._simulated=!0,e}var Jr=200;function Xr(t,e){t.addEventListener("dblclick",e);var i=0,o;function s(l){if(l.detail!==1){o=l.detail;return}if(!(l.pointerType==="mouse"||l.sourceCapabilities&&!l.sourceCapabilities.firesTouchEvents)){var u=io(l);if(!(u.some(function(_){return _ instanceof HTMLLabelElement&&_.attributes.for})&&!u.some(function(_){return _ instanceof HTMLInputElement||_ instanceof HTMLSelectElement}))){var m=Date.now();m-i<=Jr?(o++,o===2&&e(Yr(l))):o=1,i=m}}}return t.addEventListener("click",s),{dblclick:e,simDblclick:s}}function Qr(t,e){t.removeEventListener("dblclick",e.dblclick),t.removeEventListener("click",e.simDblclick)}var Ni=ri(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Be=ri(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Xn=Be==="webkitTransition"||Be==="OTransition"?Be+"End":"transitionend";function Qn(t){return typeof t=="string"?document.getElementById(t):t}function Oe(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!i||i==="auto")&&document.defaultView){var o=document.defaultView.getComputedStyle(t,null);i=o?o[e]:null}return i==="auto"?null:i}function at(t,e,i){var o=document.createElement(t);return o.className=e||"",i&&i.appendChild(o),o}function ut(t){var e=t.parentNode;e&&e.removeChild(t)}function ni(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function _e(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function ge(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function Ri(t,e){if(t.classList!==void 0)return t.classList.contains(e);var i=oi(t);return i.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(i)}function Q(t,e){if(t.classList!==void 0)for(var i=et(e),o=0,s=i.length;o<s;o++)t.classList.add(i[o]);else if(!Ri(t,e)){var l=oi(t);Zi(t,(l?l+" ":"")+e)}}function gt(t,e){t.classList!==void 0?t.classList.remove(e):Zi(t,H((" "+oi(t)+" ").replace(" "+e+" "," ")))}function Zi(t,e){t.className.baseVal===void 0?t.className=e:t.className.baseVal=e}function oi(t){return t.correspondingElement&&(t=t.correspondingElement),t.className.baseVal===void 0?t.className:t.className.baseVal}function St(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&ts(t,e)}function ts(t,e){var i=!1,o="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(o)}catch{if(e===1)return}e=Math.round(e*100),i?(i.Enabled=e!==100,i.Opacity=e):t.style.filter+=" progid:"+o+"(opacity="+e+")"}function ri(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}function ee(t,e,i){var o=e||new D(0,0);t.style[Ni]=(j.ie3d?"translate("+o.x+"px,"+o.y+"px)":"translate3d("+o.x+"px,"+o.y+"px,0)")+(i?" scale("+i+")":"")}function yt(t,e){t._leaflet_pos=e,j.any3d?ee(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function ie(t){return t._leaflet_pos||new D(0,0)}var Ie,Ne,Di;if("onselectstart"in document)Ie=function(){J(window,"selectstart",Lt)},Ne=function(){ht(window,"selectstart",Lt)};else{var Re=ri(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Ie=function(){if(Re){var t=document.documentElement.style;Di=t[Re],t[Re]="none"}},Ne=function(){Re&&(document.documentElement.style[Re]=Di,Di=void 0)}}function Hi(){J(window,"dragstart",Lt)}function Ui(){ht(window,"dragstart",Lt)}var si,ji;function Fi(t){for(;t.tabIndex===-1;)t=t.parentNode;t.style&&(ai(),si=t,ji=t.style.outlineStyle,t.style.outlineStyle="none",J(window,"keydown",ai))}function ai(){si&&(si.style.outlineStyle=ji,si=void 0,ji=void 0,ht(window,"keydown",ai))}function to(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body);return t}function Wi(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}var es={__proto__:null,TRANSFORM:Ni,TRANSITION:Be,TRANSITION_END:Xn,get:Qn,getStyle:Oe,create:at,remove:ut,empty:ni,toFront:_e,toBack:ge,hasClass:Ri,addClass:Q,removeClass:gt,setClass:Zi,getClass:oi,setOpacity:St,testProp:ri,setTransform:ee,setPosition:yt,getPosition:ie,get disableTextSelection(){return Ie},get enableTextSelection(){return Ne},disableImageDrag:Hi,enableImageDrag:Ui,preventOutline:Fi,restoreOutline:ai,getSizedParentNode:to,getScale:Wi};function J(t,e,i,o){if(e&&typeof e=="object")for(var s in e)Vi(t,s,e[s],i);else{e=et(e);for(var l=0,u=e.length;l<u;l++)Vi(t,e[l],i,o)}return this}var Dt="_leaflet_events";function ht(t,e,i,o){if(arguments.length===1)eo(t),delete t[Dt];else if(e&&typeof e=="object")for(var s in e)Ki(t,s,e[s],i);else if(e=et(e),arguments.length===2)eo(t,function(m){return R(e,m)!==-1});else for(var l=0,u=e.length;l<u;l++)Ki(t,e[l],i,o);return this}function eo(t,e){for(var i in t[Dt]){var o=i.split(/\d/)[0];(!e||e(o))&&Ki(t,o,null,null,i)}}var qi={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Vi(t,e,i,o){var s=e+f(i)+(o?"_"+f(o):"");if(t[Dt]&&t[Dt][s])return this;var l=function(m){return i.call(o||t,m||window.event)},u=l;!j.touchNative&&j.pointer&&e.indexOf("touch")===0?l=Fr(t,e,l):j.touch&&e==="dblclick"?l=Xr(t,l):"addEventListener"in t?e==="touchstart"||e==="touchmove"||e==="wheel"||e==="mousewheel"?t.addEventListener(qi[e]||e,l,j.passiveEvents?{passive:!1}:!1):e==="mouseenter"||e==="mouseleave"?(l=function(m){m=m||window.event,Yi(t,m)&&u(m)},t.addEventListener(qi[e],l,!1)):t.addEventListener(e,u,!1):t.attachEvent("on"+e,l),t[Dt]=t[Dt]||{},t[Dt][s]=l}function Ki(t,e,i,o,s){s=s||e+f(i)+(o?"_"+f(o):"");var l=t[Dt]&&t[Dt][s];if(!l)return this;!j.touchNative&&j.pointer&&e.indexOf("touch")===0?Wr(t,e,l):j.touch&&e==="dblclick"?Qr(t,l):"removeEventListener"in t?t.removeEventListener(qi[e]||e,l,!1):t.detachEvent("on"+e,l),t[Dt][s]=null}function ne(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function Gi(t){return Vi(t,"wheel",ne),this}function Ze(t){return J(t,"mousedown touchstart dblclick contextmenu",ne),t._leaflet_disable_click=!0,this}function Lt(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function oe(t){return Lt(t),ne(t),this}function io(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;)e.push(i),i=i.parentNode;return e}function no(t,e){if(!e)return new D(t.clientX,t.clientY);var i=Wi(e),o=i.boundingClientRect;return new D((t.clientX-o.left)/i.x-e.clientLeft,(t.clientY-o.top)/i.y-e.clientTop)}var is=j.linux&&j.chrome?window.devicePixelRatio:j.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function oo(t){return j.edge?t.wheelDeltaY/2:t.deltaY&&t.deltaMode===0?-t.deltaY/is:t.deltaY&&t.deltaMode===1?-t.deltaY*20:t.deltaY&&t.deltaMode===2?-t.deltaY*60:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?-t.detail*20:t.detail?t.detail/-32765*60:0}function Yi(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch{return!1}return i!==t}var ns={__proto__:null,on:J,off:ht,stopPropagation:ne,disableScrollPropagation:Gi,disableClickPropagation:Ze,preventDefault:Lt,stop:oe,getPropagationPath:io,getMousePosition:no,getWheelDelta:oo,isExternalTarget:Yi,addListener:J,removeListener:ht},ro=rt.extend({run:function(t,e,i,o){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(o||.5,.2),this._startPos=ie(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=p(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=this._duration*1e3;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var i=this._startPos.add(this._offset.multiplyBy(t));e&&i._round(),yt(this._el,i),this.fire("step")},_complete:function(){S(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),ot=rt.extend({options:{crs:q,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=U(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=h(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.zoom!==void 0&&(this._zoom=this._limitZoom(e.zoom)),e.center&&e.zoom!==void 0&&this.setView(it(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Be&&j.any3d&&!j.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),J(this._proxy,Xn,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,i){if(e=e===void 0?this._zoom:this._limitZoom(e),t=this._limitCenter(it(t),e,this.options.maxBounds),i=i||{},this._stop(),this._loaded&&!i.reset&&i!==!0){i.animate!==void 0&&(i.zoom=r({animate:i.animate},i.zoom),i.pan=r({animate:i.animate,duration:i.duration},i.pan));var o=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,i.zoom):this._tryAnimatedPan(t,i.pan);if(o)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e,i.pan&&i.pan.noMoveStart),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(j.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(j.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,i){var o=this.getZoomScale(e),s=this.getSize().divideBy(2),l=t instanceof D?t:this.latLngToContainerPoint(t),u=l.subtract(s).multiplyBy(1-1/o),m=this.containerPointToLatLng(s.add(u));return this.setView(m,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():pt(t);var i=F(e.paddingTopLeft||e.padding||[0,0]),o=F(e.paddingBottomRight||e.padding||[0,0]),s=this.getBoundsZoom(t,!1,i.add(o));if(s=typeof e.maxZoom=="number"?Math.min(e.maxZoom,s):s,s===1/0)return{center:t.getCenter(),zoom:s};var l=o.subtract(i).divideBy(2),u=this.project(t.getSouthWest(),s),m=this.project(t.getNorthEast(),s),_=this.unproject(u.add(m).divideBy(2).add(l),s);return{center:_,zoom:s}},fitBounds:function(t,e){if(t=pt(t),!t.isValid())throw new Error("Bounds are not valid.");var i=this._getBoundsCenterZoom(t,e);return this.setView(i.center,i.zoom,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){if(t=F(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend");if(e.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new ro,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){Q(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,e,i){if(i=i||{},i.animate===!1||!j.any3d)return this.setView(t,e,i);this._stop();var o=this.project(this.getCenter()),s=this.project(t),l=this.getSize(),u=this._zoom;t=it(t),e=e===void 0?u:e;var m=Math.max(l.x,l.y),_=m*this.getZoomScale(u,e),T=s.distanceTo(o)||1,N=1.42,G=N*N;function tt(bt){var yi=bt?-1:1,Ws=bt?_:m,qs=_*_-m*m+yi*G*G*T*T,Vs=2*Ws*G*T,ln=qs/Vs,Do=Math.sqrt(ln*ln+1)-ln,Ks=Do<1e-9?-18:Math.log(Do);return Ks}function zt(bt){return(Math.exp(bt)-Math.exp(-bt))/2}function $t(bt){return(Math.exp(bt)+Math.exp(-bt))/2}function Bt(bt){return zt(bt)/$t(bt)}var At=tt(0);function ke(bt){return m*($t(At)/$t(At+N*bt))}function Hs(bt){return m*($t(At)*Bt(At+N*bt)-zt(At))/G}function Us(bt){return 1-Math.pow(1-bt,1.5)}var js=Date.now(),Ro=(tt(1)-At)/N,Fs=i.duration?1e3*i.duration:1e3*Ro*.8;function Zo(){var bt=(Date.now()-js)/Fs,yi=Us(bt)*Ro;bt<=1?(this._flyToFrame=p(Zo,this),this._move(this.unproject(o.add(s.subtract(o).multiplyBy(Hs(yi)/T)),u),this.getScaleZoom(m/ke(yi),u),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}return this._moveStart(!0,i.noMoveStart),Zo.call(this),this},flyToBounds:function(t,e){var i=this._getBoundsCenterZoom(t,e);return this.flyTo(i.center,i.zoom,e)},setMaxBounds:function(t){return t=pt(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),o=this._limitCenter(i,this._zoom,pt(t));return i.equals(o)||this.panTo(o,e),this._enforcingBounds=!1,this},panInside:function(t,e){e=e||{};var i=F(e.paddingTopLeft||e.padding||[0,0]),o=F(e.paddingBottomRight||e.padding||[0,0]),s=this.project(this.getCenter()),l=this.project(t),u=this.getPixelBounds(),m=dt([u.min.add(i),u.max.subtract(o)]),_=m.getSize();if(!m.contains(l)){this._enforcingBounds=!0;var T=l.subtract(m.getCenter()),N=m.extend(l).getSize().subtract(_);s.x+=T.x<0?-N.x:N.x,s.y+=T.y<0?-N.y:N.y,this.panTo(this.unproject(s),e),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=r({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var i=this.getSize(),o=e.divideBy(2).round(),s=i.divideBy(2).round(),l=o.subtract(s);return!l.x&&!l.y?this:(t.animate&&t.pan?this.panBy(l):(t.pan&&this._rawPanBy(l),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(h(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=r({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=h(this._handleGeolocationResponse,this),i=h(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var e=t.code,i=t.message||(e===1?"permission denied":e===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e=t.coords.latitude,i=t.coords.longitude,o=new nt(e,i),s=o.toBounds(t.coords.accuracy*2),l=this._locateOptions;if(l.setView){var u=this.getBoundsZoom(s);this.setView(o,l.maxZoom?Math.min(u,l.maxZoom):u)}var m={latlng:o,bounds:s,timestamp:t.timestamp};for(var _ in t.coords)typeof t.coords[_]=="number"&&(m[_]=t.coords[_]);this.fire("locationfound",m)}},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),ut(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(S(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)ut(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){var i="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),o=at("div",i,e||this._mapPane);return t&&(this._panes[t]=o),o},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new _t(e,i)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=pt(t),i=F(i||[0,0]);var o=this.getZoom()||0,s=this.getMinZoom(),l=this.getMaxZoom(),u=t.getNorthWest(),m=t.getSouthEast(),_=this.getSize().subtract(i),T=dt(this.project(m,o),this.project(u,o)).getSize(),N=j.any3d?this.options.zoomSnap:1,G=_.x/T.x,tt=_.y/T.y,zt=e?Math.max(G,tt):Math.min(G,tt);return o=this.getScaleZoom(zt,o),N&&(o=Math.round(o/(N/100))*(N/100),o=e?Math.ceil(o/N)*N:Math.floor(o/N)*N),Math.max(s,Math.min(l,o))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new D(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){var i=this._getTopLeftPoint(t,e);return new st(i,i.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(t===void 0?this.getZoom():t)},getPane:function(t){return typeof t=="string"?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var i=this.options.crs;return e=e===void 0?this._zoom:e,i.scale(t)/i.scale(e)},getScaleZoom:function(t,e){var i=this.options.crs;e=e===void 0?this._zoom:e;var o=i.zoom(t*i.scale(e));return isNaN(o)?1/0:o},project:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.latLngToPoint(it(t),e)},unproject:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.pointToLatLng(F(t),e)},layerPointToLatLng:function(t){var e=F(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(it(t))._round();return e._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(it(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(pt(t))},distance:function(t,e){return this.options.crs.distance(it(t),it(e))},containerPointToLayerPoint:function(t){return F(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return F(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(F(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(it(t)))},mouseEventToContainerPoint:function(t){return no(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=Qn(t);if(e){if(e._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");J(e,"scroll",this._onScroll,this),this._containerId=f(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&j.any3d,Q(t,"leaflet-container"+(j.touch?" leaflet-touch":"")+(j.retina?" leaflet-retina":"")+(j.ielt9?" leaflet-oldie":"")+(j.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=Oe(t,"position");e!=="absolute"&&e!=="relative"&&e!=="fixed"&&e!=="sticky"&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),yt(this._mapPane,new D(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Q(t.markerPane,"leaflet-zoom-hide"),Q(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e,i){yt(this._mapPane,new D(0,0));var o=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var s=this._zoom!==e;this._moveStart(s,i)._move(t,e)._moveEnd(s),this.fire("viewreset"),o&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,i,o){e===void 0&&(e=this._zoom);var s=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),o?i&&i.pinch&&this.fire("zoom",i):((s||i&&i.pinch)&&this.fire("zoom",i),this.fire("move",i)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return S(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){yt(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[f(this._container)]=this;var e=t?ht:J;e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),j.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){S(this._resizeRequest),this._resizeRequest=p(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i=[],o,s=e==="mouseout"||e==="mouseover",l=t.target||t.srcElement,u=!1;l;){if(o=this._targets[f(l)],o&&(e==="click"||e==="preclick")&&this._draggableMoved(o)){u=!0;break}if(o&&o.listens(e,!0)&&(s&&!Yi(l,t)||(i.push(o),s))||l===this._container)break;l=l.parentNode}return!i.length&&!u&&!s&&this.listens(e,!0)&&(i=[this]),i},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e=t.target||t.srcElement;if(!(!this._loaded||e._leaflet_disable_events||t.type==="click"&&this._isClickDisabled(e))){var i=t.type;i==="mousedown"&&Fi(e),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,i){if(t.type==="click"){var o=r({},t);o.type="preclick",this._fireDOMEvent(o,o.type,i)}var s=this._findEventTargets(t,e);if(i){for(var l=[],u=0;u<i.length;u++)i[u].listens(e,!0)&&l.push(i[u]);s=l.concat(s)}if(s.length){e==="contextmenu"&&Lt(t);var m=s[0],_={originalEvent:t};if(t.type!=="keypress"&&t.type!=="keydown"&&t.type!=="keyup"){var T=m.getLatLng&&(!m._radius||m._radius<=10);_.containerPoint=T?this.latLngToContainerPoint(m.getLatLng()):this.mouseEventToContainerPoint(t),_.layerPoint=this.containerPointToLayerPoint(_.containerPoint),_.latlng=T?m.getLatLng():this.layerPointToLatLng(_.layerPoint)}for(u=0;u<s.length;u++)if(s[u].fire(e,_,!0),_.originalEvent._stopped||s[u].options.bubblingMouseEvents===!1&&R(this._mouseEvents,e)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return ie(this._mapPane)||new D(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){var i=t&&e!==void 0?this._getNewPixelOrigin(t,e):this.getPixelOrigin();return i.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){var o=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(o)},_latLngBoundsToNewLayerBounds:function(t,e,i){var o=this._getNewPixelOrigin(i,e);return dt([this.project(t.getSouthWest(),e)._subtract(o),this.project(t.getNorthWest(),e)._subtract(o),this.project(t.getSouthEast(),e)._subtract(o),this.project(t.getNorthEast(),e)._subtract(o)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var o=this.project(t,e),s=this.getSize().divideBy(2),l=new st(o.subtract(s),o.add(s)),u=this._getBoundsOffset(l,i,e);return Math.abs(u.x)<=1&&Math.abs(u.y)<=1?t:this.unproject(o.add(u),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),o=new st(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(o,e))},_getBoundsOffset:function(t,e,i){var o=dt(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),s=o.min.subtract(t.min),l=o.max.subtract(t.max),u=this._rebound(s.x,-l.x),m=this._rebound(s.y,-l.y);return new D(u,m)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),o=j.any3d?this.options.zoomSnap:1;return o&&(t=Math.round(t/o)*o),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){gt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._trunc();return(e&&e.animate)!==!0&&!this.getSize().contains(i)?!1:(this.panBy(i,e),!0)},_createAnimProxy:function(){var t=this._proxy=at("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(e){var i=Ni,o=this._proxy.style[i];ee(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),o===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){ut(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();ee(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var o=this.getZoomScale(e),s=this._getCenterOffset(t)._divideBy(1-1/o);return i.animate!==!0&&!this.getSize().contains(s)?!1:(p(function(){this._moveStart(!0,i.noMoveStart||!1)._animateZoom(t,e,!0)},this),!0)},_animateZoom:function(t,e,i,o){this._mapPane&&(i&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,Q(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:o}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(h(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&gt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function os(t,e){return new ot(t,e)}var Ot=C.extend({options:{position:"topright"},initialize:function(t){U(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),o=t._controlCorners[i];return Q(e,"leaflet-control"),i.indexOf("bottom")!==-1?o.insertBefore(e,o.firstChild):o.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(ut(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),De=function(t){return new Ot(t)};ot.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",i=this._controlContainer=at("div",e+"control-container",this._container);function o(s,l){var u=e+s+" "+e+l;t[s+l]=at("div",u,i)}o("top","left"),o("top","right"),o("bottom","left"),o("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)ut(this._controlCorners[t]);ut(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var so=Ot.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,i,o){return i<o?-1:o<i?1:0}},initialize:function(t,e,i){U(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var o in t)this._addLayer(t[o],o);for(o in e)this._addLayer(e[o],o,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return Ot.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(f(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){Q(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(Q(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):gt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return gt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=at("div",t),i=this.options.collapsed;e.setAttribute("aria-haspopup",!0),Ze(e),Gi(e);var o=this._section=at("section",t+"-list");i&&(this._map.on("click",this.collapse,this),J(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var s=this._layersLink=at("a",t+"-toggle",e);s.href="#",s.title="Layers",s.setAttribute("role","button"),J(s,{keydown:function(l){l.keyCode===13&&this._expandSafely()},click:function(l){Lt(l),this._expandSafely()}},this),i||this.expand(),this._baseLayersList=at("div",t+"-base",o),this._separator=at("div",t+"-separator",o),this._overlaysList=at("div",t+"-overlays",o),e.appendChild(o)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&f(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(h(function(o,s){return this.options.sortFunction(o.layer,s.layer,o.name,s.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;ni(this._baseLayersList),ni(this._overlaysList),this._layerControlInputs=[];var t,e,i,o,s=0;for(i=0;i<this._layers.length;i++)o=this._layers[i],this._addItem(o),e=e||o.overlay,t=t||!o.overlay,s+=o.overlay?0:1;return this.options.hideSingleBase&&(t=t&&s>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(f(t.target)),i=e.overlay?t.type==="add"?"overlayadd":"overlayremove":t.type==="add"?"baselayerchange":null;i&&this._map.fire(i,e)},_createRadioElement:function(t,e){var i='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",o=document.createElement("div");return o.innerHTML=i,o.firstChild},_addItem:function(t){var e=document.createElement("label"),i=this._map.hasLayer(t.layer),o;t.overlay?(o=document.createElement("input"),o.type="checkbox",o.className="leaflet-control-layers-selector",o.defaultChecked=i):o=this._createRadioElement("leaflet-base-layers_"+f(this),i),this._layerControlInputs.push(o),o.layerId=f(t.layer),J(o,"click",this._onInputClick,this);var s=document.createElement("span");s.innerHTML=" "+t.name;var l=document.createElement("span");e.appendChild(l),l.appendChild(o),l.appendChild(s);var u=t.overlay?this._overlaysList:this._baseLayersList;return u.appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){if(!this._preventClick){var t=this._layerControlInputs,e,i,o=[],s=[];this._handlingClick=!0;for(var l=t.length-1;l>=0;l--)e=t[l],i=this._getLayer(e.layerId).layer,e.checked?o.push(i):e.checked||s.push(i);for(l=0;l<s.length;l++)this._map.hasLayer(s[l])&&this._map.removeLayer(s[l]);for(l=0;l<o.length;l++)this._map.hasLayer(o[l])||this._map.addLayer(o[l]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t=this._layerControlInputs,e,i,o=this._map.getZoom(),s=t.length-1;s>=0;s--)e=t[s],i=this._getLayer(e.layerId).layer,e.disabled=i.options.minZoom!==void 0&&o<i.options.minZoom||i.options.maxZoom!==void 0&&o>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,J(t,"click",Lt),this.expand();var e=this;setTimeout(function(){ht(t,"click",Lt),e._preventClick=!1})}}),rs=function(t,e,i){return new so(t,e,i)},Ji=Ot.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=at("div",e+" leaflet-bar"),o=this.options;return this._zoomInButton=this._createButton(o.zoomInText,o.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(o.zoomOutText,o.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,o,s){var l=at("a",i,o);return l.innerHTML=t,l.href="#",l.title=e,l.setAttribute("role","button"),l.setAttribute("aria-label",e),Ze(l),J(l,"click",oe),J(l,"click",s,this),J(l,"click",this._refocusOnMap,this),l},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";gt(this._zoomInButton,e),gt(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(Q(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(Q(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}});ot.mergeOptions({zoomControl:!0}),ot.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Ji,this.addControl(this.zoomControl))});var ss=function(t){return new Ji(t)},ao=Ot.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",i=at("div",e),o=this.options;return this._addScales(o,e+"-line",i),t.on(o.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=at("div",e,i)),t.imperial&&(this._iScale=at("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,i=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(i)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),i=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,i,e/t)},_updateImperial:function(t){var e=t*3.2808399,i,o,s;e>5280?(i=e/5280,o=this._getRoundNum(i),this._updateScale(this._iScale,o+" mi",o/i)):(s=this._getRoundNum(e),this._updateScale(this._iScale,s+" ft",s/e))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),as=function(t){return new ao(t)},ls='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Xi=Ot.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(j.inlineSvg?ls+" ":"")+"Leaflet</a>"},initialize:function(t){U(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=at("div","leaflet-control-attribution"),Ze(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(' <span aria-hidden="true">|</span> ')}}});ot.mergeOptions({attributionControl:!0}),ot.addInitHook(function(){this.options.attributionControl&&new Xi().addTo(this)});var hs=function(t){return new Xi(t)};Ot.Layers=so,Ot.Zoom=Ji,Ot.Scale=ao,Ot.Attribution=Xi,De.layers=rs,De.zoom=ss,De.scale=as,De.attribution=hs;var Ht=C.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Ht.addTo=function(t,e){return t.addHandler(e,this),this};var cs={Events:V},lo=j.touch?"touchstart mousedown":"mousedown",Yt=rt.extend({options:{clickTolerance:3},initialize:function(t,e,i,o){U(this,o),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},enable:function(){this._enabled||(J(this._dragStartTarget,lo,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Yt._dragging===this&&this.finishDrag(!0),ht(this._dragStartTarget,lo,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(this._enabled&&(this._moved=!1,!Ri(this._element,"leaflet-zoom-anim"))){if(t.touches&&t.touches.length!==1){Yt._dragging===this&&this.finishDrag();return}if(!(Yt._dragging||t.shiftKey||t.which!==1&&t.button!==1&&!t.touches)&&(Yt._dragging=this,this._preventOutline&&Fi(this._element),Hi(),Ie(),!this._moving)){this.fire("down");var e=t.touches?t.touches[0]:t,i=to(this._element);this._startPoint=new D(e.clientX,e.clientY),this._startPos=ie(this._element),this._parentScale=Wi(i);var o=t.type==="mousedown";J(document,o?"mousemove":"touchmove",this._onMove,this),J(document,o?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var e=t.touches&&t.touches.length===1?t.touches[0]:t,i=new D(e.clientX,e.clientY)._subtract(this._startPoint);!i.x&&!i.y||Math.abs(i.x)+Math.abs(i.y)<this.options.clickTolerance||(i.x/=this._parentScale.x,i.y/=this._parentScale.y,Lt(t),this._moved||(this.fire("dragstart"),this._moved=!0,Q(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Q(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(i),this._moving=!0,this._lastEvent=t,this._updatePosition())}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),yt(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){gt(document.body,"leaflet-dragging"),this._lastTarget&&(gt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),ht(document,"mousemove touchmove",this._onMove,this),ht(document,"mouseup touchend touchcancel",this._onUp,this),Ui(),Ne();var e=this._moved&&this._moving;this._moving=!1,Yt._dragging=!1,e&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function ho(t,e,i){var o,s=[1,4,2,8],l,u,m,_,T,N,G,tt;for(l=0,N=t.length;l<N;l++)t[l]._code=re(t[l],e);for(m=0;m<4;m++){for(G=s[m],o=[],l=0,N=t.length,u=N-1;l<N;u=l++)_=t[l],T=t[u],_._code&G?T._code&G||(tt=li(T,_,G,e,i),tt._code=re(tt,e),o.push(tt)):(T._code&G&&(tt=li(T,_,G,e,i),tt._code=re(tt,e),o.push(tt)),o.push(_));t=o}return t}function co(t,e){var i,o,s,l,u,m,_,T,N;if(!t||t.length===0)throw new Error("latlngs not passed");Et(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var G=it([0,0]),tt=pt(t),zt=tt.getNorthWest().distanceTo(tt.getSouthWest())*tt.getNorthEast().distanceTo(tt.getNorthWest());zt<1700&&(G=Qi(t));var $t=t.length,Bt=[];for(i=0;i<$t;i++){var At=it(t[i]);Bt.push(e.project(it([At.lat-G.lat,At.lng-G.lng])))}for(m=_=T=0,i=0,o=$t-1;i<$t;o=i++)s=Bt[i],l=Bt[o],u=s.y*l.x-l.y*s.x,_+=(s.x+l.x)*u,T+=(s.y+l.y)*u,m+=u*3;m===0?N=Bt[0]:N=[_/m,T/m];var ke=e.unproject(F(N));return it([ke.lat+G.lat,ke.lng+G.lng])}function Qi(t){for(var e=0,i=0,o=0,s=0;s<t.length;s++){var l=it(t[s]);e+=l.lat,i+=l.lng,o++}return it([e/o,i/o])}var ds={__proto__:null,clipPolygon:ho,polygonCenter:co,centroid:Qi};function uo(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=ps(t,i),t=fs(t,i),t}function fo(t,e,i){return Math.sqrt(He(t,e,i,!0))}function us(t,e,i){return He(t,e,i)}function fs(t,e){var i=t.length,o=typeof Uint8Array<"u"?Uint8Array:Array,s=new o(i);s[0]=s[i-1]=1,tn(t,s,e,0,i-1);var l,u=[];for(l=0;l<i;l++)s[l]&&u.push(t[l]);return u}function tn(t,e,i,o,s){var l=0,u,m,_;for(m=o+1;m<=s-1;m++)_=He(t[m],t[o],t[s],!0),_>l&&(u=m,l=_);l>i&&(e[u]=1,tn(t,e,i,o,u),tn(t,e,i,u,s))}function ps(t,e){for(var i=[t[0]],o=1,s=0,l=t.length;o<l;o++)ms(t[o],t[s])>e&&(i.push(t[o]),s=o);return s<l-1&&i.push(t[l-1]),i}var po;function mo(t,e,i,o,s){var l=o?po:re(t,i),u=re(e,i),m,_,T;for(po=u;;){if(!(l|u))return[t,e];if(l&u)return!1;m=l||u,_=li(t,e,m,i,s),T=re(_,i),m===l?(t=_,l=T):(e=_,u=T)}}function li(t,e,i,o,s){var l=e.x-t.x,u=e.y-t.y,m=o.min,_=o.max,T,N;return i&8?(T=t.x+l*(_.y-t.y)/u,N=_.y):i&4?(T=t.x+l*(m.y-t.y)/u,N=m.y):i&2?(T=_.x,N=t.y+u*(_.x-t.x)/l):i&1&&(T=m.x,N=t.y+u*(m.x-t.x)/l),new D(T,N,s)}function re(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}function ms(t,e){var i=e.x-t.x,o=e.y-t.y;return i*i+o*o}function He(t,e,i,o){var s=e.x,l=e.y,u=i.x-s,m=i.y-l,_=u*u+m*m,T;return _>0&&(T=((t.x-s)*u+(t.y-l)*m)/_,T>1?(s=i.x,l=i.y):T>0&&(s+=u*T,l+=m*T)),u=t.x-s,m=t.y-l,o?u*u+m*m:new D(s,l)}function Et(t){return!Ct(t[0])||typeof t[0][0]!="object"&&typeof t[0][0]<"u"}function _o(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Et(t)}function go(t,e){var i,o,s,l,u,m,_,T;if(!t||t.length===0)throw new Error("latlngs not passed");Et(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var N=it([0,0]),G=pt(t),tt=G.getNorthWest().distanceTo(G.getSouthWest())*G.getNorthEast().distanceTo(G.getNorthWest());tt<1700&&(N=Qi(t));var zt=t.length,$t=[];for(i=0;i<zt;i++){var Bt=it(t[i]);$t.push(e.project(it([Bt.lat-N.lat,Bt.lng-N.lng])))}for(i=0,o=0;i<zt-1;i++)o+=$t[i].distanceTo($t[i+1])/2;if(o===0)T=$t[0];else for(i=0,l=0;i<zt-1;i++)if(u=$t[i],m=$t[i+1],s=u.distanceTo(m),l+=s,l>o){_=(l-o)/s,T=[m.x-_*(m.x-u.x),m.y-_*(m.y-u.y)];break}var At=e.unproject(F(T));return it([At.lat+N.lat,At.lng+N.lng])}var _s={__proto__:null,simplify:uo,pointToSegmentDistance:fo,closestPointOnSegment:us,clipSegment:mo,_getEdgeIntersection:li,_getBitCode:re,_sqClosestPointOnSegment:He,isFlat:Et,_flat:_o,polylineCenter:go},en={project:function(t){return new D(t.lng,t.lat)},unproject:function(t){return new nt(t.y,t.x)},bounds:new st([-180,-90],[180,90])},nn={R:6378137,R_MINOR:6356752314245179e-9,bounds:new st([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(t){var e=Math.PI/180,i=this.R,o=t.lat*e,s=this.R_MINOR/i,l=Math.sqrt(1-s*s),u=l*Math.sin(o),m=Math.tan(Math.PI/4-o/2)/Math.pow((1-u)/(1+u),l/2);return o=-i*Math.log(Math.max(m,1e-10)),new D(t.lng*e*i,o)},unproject:function(t){for(var e=180/Math.PI,i=this.R,o=this.R_MINOR/i,s=Math.sqrt(1-o*o),l=Math.exp(-t.y/i),u=Math.PI/2-2*Math.atan(l),m=0,_=.1,T;m<15&&Math.abs(_)>1e-7;m++)T=s*Math.sin(u),T=Math.pow((1-T)/(1+T),s/2),_=Math.PI/2-2*Math.atan(l*T)-u,u+=_;return new nt(u*e,t.x*e/i)}},gs={__proto__:null,LonLat:en,Mercator:nn,SphericalMercator:$},vs=r({},k,{code:"EPSG:3395",projection:nn,transformation:(function(){var t=.5/(Math.PI*nn.R);return I(t,.5,-t,.5)})()}),vo=r({},k,{code:"EPSG:4326",projection:en,transformation:I(1/180,1,-1/180,.5)}),ys=r({},x,{projection:en,transformation:I(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,o=e.lat-t.lat;return Math.sqrt(i*i+o*o)},infinite:!0});x.Earth=k,x.EPSG3395=vs,x.EPSG3857=q,x.EPSG900913=W,x.EPSG4326=vo,x.Simple=ys;var It=rt.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[f(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[f(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var i=this.getEvents();e.on(i,this),this.once("remove",function(){e.off(i,this)},this)}this.onAdd(e),this.fire("add"),e.fire("layeradd",{layer:this})}}});ot.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var e=f(t);return this._layers[e]?this:(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var e=f(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return f(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){t=t?Ct(t)?t:[t]:[];for(var e=0,i=t.length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){(!isNaN(t.options.maxZoom)||!isNaN(t.options.minZoom))&&(this._zoomBoundLayers[f(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=f(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,i=this._getZoomSpan();for(var o in this._zoomBoundLayers){var s=this._zoomBoundLayers[o].options;t=s.minZoom===void 0?t:Math.min(t,s.minZoom),e=s.maxZoom===void 0?e:Math.max(e,s.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,i!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var ve=It.extend({initialize:function(t,e){U(this,e),this._layers={};var i,o;if(t)for(i=0,o=t.length;i<o;i++)this.addLayer(t[i])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){var e=typeof t=="number"?t:this.getLayerId(t);return e in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e=Array.prototype.slice.call(arguments,1),i,o;for(i in this._layers)o=this._layers[i],o[t]&&o[t].apply(o,e);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return f(t)}}),bs=function(t,e){return new ve(t,e)},jt=ve.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),ve.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),ve.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new _t;for(var e in this._layers){var i=this._layers[e];t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t}}),xs=function(t,e){return new jt(t,e)},ye=C.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){U(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if(t==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var o=this._createImg(i,e&&e.tagName==="IMG"?e:null);return this._setIconStyles(o,t),(this.options.crossOrigin||this.options.crossOrigin==="")&&(o.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),o},_setIconStyles:function(t,e){var i=this.options,o=i[e+"Size"];typeof o=="number"&&(o=[o,o]);var s=F(o),l=F(e==="shadow"&&i.shadowAnchor||i.iconAnchor||s&&s.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),l&&(t.style.marginLeft=-l.x+"px",t.style.marginTop=-l.y+"px"),s&&(t.style.width=s.x+"px",t.style.height=s.y+"px")},_createImg:function(t,e){return e=e||document.createElement("img"),e.src=t,e},_getIconUrl:function(t){return j.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});function ws(t){return new ye(t)}var Ue=ye.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return typeof Ue.imagePath!="string"&&(Ue.imagePath=this._detectIconPath()),(this.options.imagePath||Ue.imagePath)+ye.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var e=function(i,o,s){var l=o.exec(i);return l&&l[s]};return t=e(t,/^url\((['"])?(.+)\1\)$/,2),t&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=at("div","leaflet-default-icon-path",document.body),e=Oe(t,"background-image")||Oe(t,"backgroundImage");if(document.body.removeChild(t),e=this._stripUrl(e),e)return e;var i=document.querySelector('link[href$="leaflet.css"]');return i?i.href.substring(0,i.href.length-11-1):""}}),yo=Ht.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new Yt(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Q(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&gt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,o=this._marker.options.autoPanSpeed,s=this._marker.options.autoPanPadding,l=ie(e._icon),u=i.getPixelBounds(),m=i.getPixelOrigin(),_=dt(u.min._subtract(m).add(s),u.max._subtract(m).subtract(s));if(!_.contains(l)){var T=F((Math.max(_.max.x,l.x)-_.max.x)/(u.max.x-_.max.x)-(Math.min(_.min.x,l.x)-_.min.x)/(u.min.x-_.min.x),(Math.max(_.max.y,l.y)-_.max.y)/(u.max.y-_.max.y)-(Math.min(_.min.y,l.y)-_.min.y)/(u.min.y-_.min.y)).multiplyBy(o);i.panBy(T,{animate:!1}),this._draggable._newPos._add(T),this._draggable._startPos._add(T),yt(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=p(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(S(this._panRequest),this._panRequest=p(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,o=ie(e._icon),s=e._map.layerPointToLatLng(o);i&&yt(i,o),e._latlng=s,t.latlng=s,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){S(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),hi=It.extend({options:{icon:new Ue,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){U(this,e),this._latlng=it(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=it(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),o=!1;i!==this._icon&&(this._icon&&this._removeIcon(),o=!0,t.title&&(i.title=t.title),i.tagName==="IMG"&&(i.alt=t.alt||"")),Q(i,e),t.keyboard&&(i.tabIndex="0",i.setAttribute("role","button")),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&J(i,"focus",this._panOnFocus,this);var s=t.icon.createShadow(this._shadow),l=!1;s!==this._shadow&&(this._removeShadow(),l=!0),s&&(Q(s,e),s.alt=""),this._shadow=s,t.opacity<1&&this._updateOpacity(),o&&this.getPane().appendChild(this._icon),this._initInteraction(),s&&l&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ht(this._icon,"focus",this._panOnFocus,this),ut(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&ut(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&yt(this._icon,t),this._shadow&&yt(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(Q(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),yo)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new yo(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&St(this._icon,t),this._shadow&&St(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var e=this.options.icon.options,i=e.iconSize?F(e.iconSize):F(0,0),o=e.iconAnchor?F(e.iconAnchor):F(0,0);t.panInside(this._latlng,{paddingTopLeft:o,paddingBottomRight:i.subtract(o)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function ks(t,e){return new hi(t,e)}var Jt=It.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return U(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),ci=Jt.extend({options:{fill:!0,radius:10},initialize:function(t,e){U(this,e),this._latlng=it(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=it(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return Jt.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),o=[t+i,e+i];this._pxBounds=new st(this._point.subtract(o),this._point.add(o))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function $s(t,e){return new ci(t,e)}var on=ci.extend({initialize:function(t,e,i){if(typeof e=="number"&&(e=r({},i,{radius:e})),U(this,e),this._latlng=it(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new _t(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:Jt.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,i=this._map,o=i.options.crs;if(o.distance===k.distance){var s=Math.PI/180,l=this._mRadius/k.R/s,u=i.project([e+l,t]),m=i.project([e-l,t]),_=u.add(m).divideBy(2),T=i.unproject(_).lat,N=Math.acos((Math.cos(l*s)-Math.sin(e*s)*Math.sin(T*s))/(Math.cos(e*s)*Math.cos(T*s)))/s;(isNaN(N)||N===0)&&(N=l/Math.cos(Math.PI/180*e)),this._point=_.subtract(i.getPixelOrigin()),this._radius=isNaN(N)?0:_.x-i.project([T,t-N]).x,this._radiusY=_.y-u.y}else{var G=o.unproject(o.project(this._latlng).subtract([this._mRadius,0]));this._point=i.latLngToLayerPoint(this._latlng),this._radius=this._point.x-i.latLngToLayerPoint(G).x}this._updateBounds()}});function Ps(t,e,i){return new on(t,e,i)}var Ft=Jt.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){U(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e=1/0,i=null,o=He,s,l,u=0,m=this._parts.length;u<m;u++)for(var _=this._parts[u],T=1,N=_.length;T<N;T++){s=_[T-1],l=_[T];var G=o(t,s,l,!0);G<e&&(e=G,i=o(t,s,l))}return i&&(i.distance=Math.sqrt(e)),i},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return go(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=it(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new _t,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return Et(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],i=Et(t),o=0,s=t.length;o<s;o++)i?(e[o]=it(t[o]),this._bounds.extend(e[o])):e[o]=this._convertLatLngs(t[o]);return e},_project:function(){var t=new st;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new D(t,t);this._rawPxBounds&&(this._pxBounds=new st([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)]))},_projectLatlngs:function(t,e,i){var o=t[0]instanceof nt,s=t.length,l,u;if(o){for(u=[],l=0;l<s;l++)u[l]=this._map.latLngToLayerPoint(t[l]),i.extend(u[l]);e.push(u)}else for(l=0;l<s;l++)this._projectLatlngs(t[l],e,i)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}var e=this._parts,i,o,s,l,u,m,_;for(i=0,s=0,l=this._rings.length;i<l;i++)for(_=this._rings[i],o=0,u=_.length;o<u-1;o++)m=mo(_[o],_[o+1],t,o,!0),m&&(e[s]=e[s]||[],e[s].push(m[0]),(m[1]!==_[o+1]||o===u-2)&&(e[s].push(m[1]),s++))}},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,o=t.length;i<o;i++)t[i]=uo(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var i,o,s,l,u,m,_=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(i=0,l=this._parts.length;i<l;i++)for(m=this._parts[i],o=0,u=m.length,s=u-1;o<u;s=o++)if(!(!e&&o===0)&&fo(t,m[s],m[o])<=_)return!0;return!1}});function Ls(t,e){return new Ft(t,e)}Ft._flat=_o;var be=Ft.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return co(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var e=Ft.prototype._convertLatLngs.call(this,t),i=e.length;return i>=2&&e[0]instanceof nt&&e[0].equals(e[i-1])&&e.pop(),e},_setLatLngs:function(t){Ft.prototype._setLatLngs.call(this,t),Et(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Et(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,i=new D(e,e);if(t=new st(t.min.subtract(i),t.max.add(i)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}for(var o=0,s=this._rings.length,l;o<s;o++)l=ho(this._rings[o],t,!0),l.length&&this._parts.push(l)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e=!1,i,o,s,l,u,m,_,T;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(l=0,_=this._parts.length;l<_;l++)for(i=this._parts[l],u=0,T=i.length,m=T-1;u<T;m=u++)o=i[u],s=i[m],o.y>t.y!=s.y>t.y&&t.x<(s.x-o.x)*(t.y-o.y)/(s.y-o.y)+o.x&&(e=!e);return e||Ft.prototype._containsPoint.call(this,t,!0)}});function Ts(t,e){return new be(t,e)}var Wt=jt.extend({initialize:function(t,e){U(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e=Ct(t)?t:t.features,i,o,s;if(e){for(i=0,o=e.length;i<o;i++)s=e[i],(s.geometries||s.geometry||s.features||s.coordinates)&&this.addData(s);return this}var l=this.options;if(l.filter&&!l.filter(t))return this;var u=di(t,l);return u?(u.feature=pi(t),u.defaultOptions=u.options,this.resetStyle(u),l.onEachFeature&&l.onEachFeature(t,u),this.addLayer(u)):this},resetStyle:function(t){return t===void 0?this.eachLayer(this.resetStyle,this):(t.options=r({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){t.setStyle&&(typeof e=="function"&&(e=e(t.feature)),t.setStyle(e))}});function di(t,e){var i=t.type==="Feature"?t.geometry:t,o=i?i.coordinates:null,s=[],l=e&&e.pointToLayer,u=e&&e.coordsToLatLng||rn,m,_,T,N;if(!o&&!i)return null;switch(i.type){case"Point":return m=u(o),bo(l,t,m,e);case"MultiPoint":for(T=0,N=o.length;T<N;T++)m=u(o[T]),s.push(bo(l,t,m,e));return new jt(s);case"LineString":case"MultiLineString":return _=ui(o,i.type==="LineString"?0:1,u),new Ft(_,e);case"Polygon":case"MultiPolygon":return _=ui(o,i.type==="Polygon"?1:2,u),new be(_,e);case"GeometryCollection":for(T=0,N=i.geometries.length;T<N;T++){var G=di({geometry:i.geometries[T],type:"Feature",properties:t.properties},e);G&&s.push(G)}return new jt(s);case"FeatureCollection":for(T=0,N=i.features.length;T<N;T++){var tt=di(i.features[T],e);tt&&s.push(tt)}return new jt(s);default:throw new Error("Invalid GeoJSON object.")}}function bo(t,e,i,o){return t?t(e,i):new hi(i,o&&o.markersInheritOptions&&o)}function rn(t){return new nt(t[1],t[0],t[2])}function ui(t,e,i){for(var o=[],s=0,l=t.length,u;s<l;s++)u=e?ui(t[s],e-1,i):(i||rn)(t[s]),o.push(u);return o}function sn(t,e){return t=it(t),t.alt!==void 0?[K(t.lng,e),K(t.lat,e),K(t.alt,e)]:[K(t.lng,e),K(t.lat,e)]}function fi(t,e,i,o){for(var s=[],l=0,u=t.length;l<u;l++)s.push(e?fi(t[l],Et(t[l])?0:e-1,i,o):sn(t[l],o));return!e&&i&&s.length>0&&s.push(s[0].slice()),s}function xe(t,e){return t.feature?r({},t.feature,{geometry:e}):pi(e)}function pi(t){return t.type==="Feature"||t.type==="FeatureCollection"?t:{type:"Feature",properties:{},geometry:t}}var an={toGeoJSON:function(t){return xe(this,{type:"Point",coordinates:sn(this.getLatLng(),t)})}};hi.include(an),on.include(an),ci.include(an),Ft.include({toGeoJSON:function(t){var e=!Et(this._latlngs),i=fi(this._latlngs,e?1:0,!1,t);return xe(this,{type:(e?"Multi":"")+"LineString",coordinates:i})}}),be.include({toGeoJSON:function(t){var e=!Et(this._latlngs),i=e&&!Et(this._latlngs[0]),o=fi(this._latlngs,i?2:e?1:0,!0,t);return e||(o=[o]),xe(this,{type:(i?"Multi":"")+"Polygon",coordinates:o})}}),ve.include({toMultiPoint:function(t){var e=[];return this.eachLayer(function(i){e.push(i.toGeoJSON(t).geometry.coordinates)}),xe(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(e==="MultiPoint")return this.toMultiPoint(t);var i=e==="GeometryCollection",o=[];return this.eachLayer(function(s){if(s.toGeoJSON){var l=s.toGeoJSON(t);if(i)o.push(l.geometry);else{var u=pi(l);u.type==="FeatureCollection"?o.push.apply(o,u.features):o.push(u)}}}),i?xe(this,{geometries:o,type:"GeometryCollection"}):{type:"FeatureCollection",features:o}}});function xo(t,e){return new Wt(t,e)}var zs=xo,mi=It.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,i){this._url=t,this._bounds=pt(e),U(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Q(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){ut(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&_e(this._image),this},bringToBack:function(){return this._map&&ge(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=pt(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._url.tagName==="IMG",e=this._image=t?this._url:at("img");if(Q(e,"leaflet-image-layer"),this._zoomAnimated&&Q(e,"leaflet-zoom-animated"),this.options.className&&Q(e,this.options.className),e.onselectstart=b,e.onmousemove=b,e.onload=h(this.fire,this,"load"),e.onerror=h(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(e.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=e.src;return}e.src=this._url,e.alt=this.options.alt},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),i=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;ee(this._image,i,e)},_reset:function(){var t=this._image,e=new st(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();yt(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){St(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),Ms=function(t,e,i){return new mi(t,e,i)},wo=mi.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t=this._url.tagName==="VIDEO",e=this._image=t?this._url:at("video");if(Q(e,"leaflet-image-layer"),this._zoomAnimated&&Q(e,"leaflet-zoom-animated"),this.options.className&&Q(e,this.options.className),e.onselectstart=b,e.onmousemove=b,e.onloadeddata=h(this.fire,this,"load"),t){for(var i=e.getElementsByTagName("source"),o=[],s=0;s<i.length;s++)o.push(i[s].src);this._url=i.length>0?o:[e.src];return}Ct(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var l=0;l<this._url.length;l++){var u=at("source");u.src=this._url[l],e.appendChild(u)}}});function As(t,e,i){return new wo(t,e,i)}var ko=mi.extend({_initImage:function(){var t=this._image=this._url;Q(t,"leaflet-image-layer"),this._zoomAnimated&&Q(t,"leaflet-zoom-animated"),this.options.className&&Q(t,this.options.className),t.onselectstart=b,t.onmousemove=b}});function Cs(t,e,i){return new ko(t,e,i)}var Ut=It.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,e){t&&(t instanceof nt||Ct(t))?(this._latlng=it(t),U(this,e)):(U(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&St(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&St(this._container,1),this.bringToFront(),this.options.interactive&&(Q(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(St(this._container,0),this._removeTimeout=setTimeout(h(ut,void 0,this._container),200)):ut(this._container),this.options.interactive&&(gt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=it(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&_e(this._container),this},bringToBack:function(){return this._map&&ge(this._container),this},_prepareOpen:function(t){var e=this._source;if(!e._map)return!1;if(e instanceof jt){e=null;var i=this._source._layers;for(var o in i)if(i[o]._map){e=i[o];break}if(!e)return!1;this._source=e}if(!t)if(e.getCenter)t=e.getCenter();else if(e.getLatLng)t=e.getLatLng();else if(e.getBounds)t=e.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof e=="string")t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=F(this.options.offset),i=this._getAnchor();this._zoomAnimated?yt(this._container,t.add(i)):e=e.add(t).add(i);var o=this._containerBottom=-e.y,s=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;this._container.style.bottom=o+"px",this._container.style.left=s+"px"}},_getAnchor:function(){return[0,0]}});ot.include({_initOverlay:function(t,e,i,o){var s=e;return s instanceof t||(s=new t(o).setContent(e)),i&&s.setLatLng(i),s}}),It.include({_initOverlay:function(t,e,i,o){var s=i;return s instanceof t?(U(s,o),s._source=this):(s=e&&!o?e:new t(o,this),s.setContent(i)),s}});var _i=Ut.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,Ut.prototype.openOn.call(this,t)},onAdd:function(t){Ut.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Jt||this._source.on("preclick",ne))},onRemove:function(t){Ut.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Jt||this._source.off("preclick",ne))},getEvents:function(){var t=Ut.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=at("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=at("div",t+"-content-wrapper",e);if(this._contentNode=at("div",t+"-content",i),Ze(e),Gi(this._contentNode),J(e,"contextmenu",ne),this._tipContainer=at("div",t+"-tip-container",e),this._tip=at("div",t+"-tip",this._tipContainer),this.options.closeButton){var o=this._closeButton=at("a",t+"-close-button",e);o.setAttribute("role","button"),o.setAttribute("aria-label","Close popup"),o.href="#close",o.innerHTML='<span aria-hidden="true">&#215;</span>',J(o,"click",function(s){Lt(s),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var o=t.offsetHeight,s=this.options.maxHeight,l="leaflet-popup-scrolled";s&&o>s?(e.height=s+"px",Q(t,l)):gt(t,l),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),i=this._getAnchor();yt(this._container,e.add(i))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,e=parseInt(Oe(this._container,"marginBottom"),10)||0,i=this._container.offsetHeight+e,o=this._containerWidth,s=new D(this._containerLeft,-i-this._containerBottom);s._add(ie(this._container));var l=t.layerPointToContainerPoint(s),u=F(this.options.autoPanPadding),m=F(this.options.autoPanPaddingTopLeft||u),_=F(this.options.autoPanPaddingBottomRight||u),T=t.getSize(),N=0,G=0;l.x+o+_.x>T.x&&(N=l.x+o-T.x+_.x),l.x-N-m.x<0&&(N=l.x-m.x),l.y+i+_.y>T.y&&(G=l.y+i-T.y+_.y),l.y-G-m.y<0&&(G=l.y-m.y),(N||G)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([N,G]))}},_getAnchor:function(){return F(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Ss=function(t,e){return new _i(t,e)};ot.mergeOptions({closePopupOnClick:!0}),ot.include({openPopup:function(t,e,i){return this._initOverlay(_i,t,e,i).openOn(this),this},closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),It.include({bindPopup:function(t,e){return this._popup=this._initOverlay(_i,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof jt||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){if(!(!this._popup||!this._map)){oe(t);var e=t.layer||t.target;if(this._popup._source===e&&!(e instanceof Jt)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=e,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){t.originalEvent.keyCode===13&&this._openPopup(t)}});var gi=Ut.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){Ut.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){Ut.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=Ut.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip",e=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=at("div",e),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+f(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,i,o=this._map,s=this._container,l=o.latLngToContainerPoint(o.getCenter()),u=o.layerPointToContainerPoint(t),m=this.options.direction,_=s.offsetWidth,T=s.offsetHeight,N=F(this.options.offset),G=this._getAnchor();m==="top"?(e=_/2,i=T):m==="bottom"?(e=_/2,i=0):m==="center"?(e=_/2,i=T/2):m==="right"?(e=0,i=T/2):m==="left"?(e=_,i=T/2):u.x<l.x?(m="right",e=0,i=T/2):(m="left",e=_+(N.x+G.x)*2,i=T/2),t=t.subtract(F(e,i,!0)).add(N).add(G),gt(s,"leaflet-tooltip-right"),gt(s,"leaflet-tooltip-left"),gt(s,"leaflet-tooltip-top"),gt(s,"leaflet-tooltip-bottom"),Q(s,"leaflet-tooltip-"+m),yt(s,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&St(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){return F(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Es=function(t,e){return new gi(t,e)};ot.include({openTooltip:function(t,e,i){return this._initOverlay(gi,t,e,i).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),It.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(gi,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(!(!t&&this._tooltipHandlersAdded)){var e=t?"off":"on",i={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,i.click=this._openTooltip,this._map?this._addFocusListeners():i.add=this._addFocusListeners),this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),this[e](i),this._tooltipHandlersAdded=!t}},openTooltip:function(t){return this._tooltip&&(this instanceof jt||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&(J(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),J(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&e.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var e=this;this._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var e=t.latlng,i,o;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),o=this._map.containerPointToLayerPoint(i),e=this._map.layerPointToLatLng(o)),this._tooltip.setLatLng(e)}});var $o=ye.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&t.tagName==="DIV"?t:document.createElement("div"),i=this.options;if(i.html instanceof Element?(ni(e),e.appendChild(i.html)):e.innerHTML=i.html!==!1?i.html:"",i.bgPos){var o=F(i.bgPos);e.style.backgroundPosition=-o.x+"px "+-o.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});function Bs(t){return new $o(t)}ye.Default=Ue;var je=It.extend({options:{tileSize:256,opacity:1,updateWhenIdle:j.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){U(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),ut(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(_e(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(ge(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=z(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof D?t:new D(t,t)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e=this.getPane().children,i=-t(-1/0,1/0),o=0,s=e.length,l;o<s;o++)l=e[o].style.zIndex,e[o]!==this._container&&l&&(i=t(i,+l));isFinite(i)&&(this.options.zIndex=i+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!j.ielt9){St(this._container,this.options.opacity);var t=+new Date,e=!1,i=!1;for(var o in this._tiles){var s=this._tiles[o];if(!(!s.current||!s.loaded)){var l=Math.min(1,(t-s.loaded)/200);St(s.el,l),l<1?e=!0:(s.active?i=!0:this._onOpaqueTile(s),s.active=!0)}}i&&!this._noPrune&&this._pruneTiles(),e&&(S(this._fadeFrame),this._fadeFrame=p(this._updateOpacity,this))}},_onOpaqueTile:b,_initContainer:function(){this._container||(this._container=at("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(t!==void 0){for(var i in this._levels)i=Number(i),this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(ut(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var o=this._levels[t],s=this._map;return o||(o=this._levels[t]={},o.el=at("div","leaflet-tile-container leaflet-zoom-animated",this._container),o.el.style.zIndex=e,o.origin=s.project(s.unproject(s.getPixelOrigin()),t).round(),o.zoom=t,this._setZoomTransform(o,s.getCenter(),s.getZoom()),b(o.el.offsetWidth),this._onCreateLevel(o)),this._level=o,o}},_onUpdateLevel:b,_onRemoveLevel:b,_onCreateLevel:b,_pruneTiles:function(){if(this._map){var t,e,i=this._map.getZoom();if(i>this.options.maxZoom||i<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)e=this._tiles[t],e.retain=e.current;for(t in this._tiles)if(e=this._tiles[t],e.current&&!e.active){var o=e.coords;this._retainParent(o.x,o.y,o.z,o.z-5)||this._retainChildren(o.x,o.y,o.z,o.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)ut(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,o){var s=Math.floor(t/2),l=Math.floor(e/2),u=i-1,m=new D(+s,+l);m.z=+u;var _=this._tileCoordsToKey(m),T=this._tiles[_];return T&&T.active?(T.retain=!0,!0):(T&&T.loaded&&(T.retain=!0),u>o?this._retainParent(s,l,u,o):!1)},_retainChildren:function(t,e,i,o){for(var s=2*t;s<2*t+2;s++)for(var l=2*e;l<2*e+2;l++){var u=new D(s,l);u.z=i+1;var m=this._tileCoordsToKey(u),_=this._tiles[m];if(_&&_.active){_.retain=!0;continue}else _&&_.loaded&&(_.retain=!0);i+1<o&&this._retainChildren(s,l,i+1,o)}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return e.minNativeZoom!==void 0&&t<e.minNativeZoom?e.minNativeZoom:e.maxNativeZoom!==void 0&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,o){var s=Math.round(e);this.options.maxZoom!==void 0&&s>this.options.maxZoom||this.options.minZoom!==void 0&&s<this.options.minZoom?s=void 0:s=this._clampZoom(s);var l=this.options.updateWhenZooming&&s!==this._tileZoom;(!o||l)&&(this._tileZoom=s,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),s!==void 0&&this._update(t),i||this._pruneTiles(),this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var o=this._map.getZoomScale(i,t.zoom),s=t.origin.multiplyBy(o).subtract(this._map._getNewPixelOrigin(e,i)).round();j.any3d?ee(t.el,s,o):yt(t.el,s)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),o=this._tileZoom,s=this._map.getPixelWorldBounds(this._tileZoom);s&&(this._globalTileRange=this._pxBoundsToTileRange(s)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],o).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],o).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],o).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],o).y/i.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),o=e.getZoomScale(i,this._tileZoom),s=e.project(t,this._tileZoom).floor(),l=e.getSize().divideBy(o*2);return new st(s.subtract(l),s.add(l))},_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(t===void 0&&(t=e.getCenter()),this._tileZoom!==void 0){var o=this._getTiledPixelBounds(t),s=this._pxBoundsToTileRange(o),l=s.getCenter(),u=[],m=this.options.keepBuffer,_=new st(s.getBottomLeft().subtract([m,-m]),s.getTopRight().add([m,-m]));if(!(isFinite(s.min.x)&&isFinite(s.min.y)&&isFinite(s.max.x)&&isFinite(s.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var T in this._tiles){var N=this._tiles[T].coords;(N.z!==this._tileZoom||!_.contains(new D(N.x,N.y)))&&(this._tiles[T].current=!1)}if(Math.abs(i-this._tileZoom)>1){this._setView(t,i);return}for(var G=s.min.y;G<=s.max.y;G++)for(var tt=s.min.x;tt<=s.max.x;tt++){var zt=new D(tt,G);if(zt.z=this._tileZoom,!!this._isValidTile(zt)){var $t=this._tiles[this._tileCoordsToKey(zt)];$t?$t.current=!0:u.push(zt)}}if(u.sort(function(At,ke){return At.distanceTo(l)-ke.distanceTo(l)}),u.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Bt=document.createDocumentFragment();for(tt=0;tt<u.length;tt++)this._addTile(u[tt],Bt);this._level.el.appendChild(Bt)}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}if(!this.options.bounds)return!0;var o=this._tileCoordsToBounds(t);return pt(this.options.bounds).overlaps(o)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),o=t.scaleBy(i),s=o.add(i),l=e.unproject(o,t.z),u=e.unproject(s,t.z);return[l,u]},_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),i=new _t(e[0],e[1]);return this.options.noWrap||(i=this._map.wrapLatLngBounds(i)),i},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var e=t.split(":"),i=new D(+e[0],+e[1]);return i.z=+e[2],i},_removeTile:function(t){var e=this._tiles[t];e&&(ut(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){Q(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=b,t.onmousemove=b,j.ielt9&&this.options.opacity<1&&St(t,this.options.opacity)},_addTile:function(t,e){var i=this._getTilePos(t),o=this._tileCoordsToKey(t),s=this.createTile(this._wrapCoords(t),h(this._tileReady,this,t));this._initTile(s),this.createTile.length<2&&p(h(this._tileReady,this,t,null,s)),yt(s,i),this._tiles[o]={el:s,coords:t,current:!0},e.appendChild(s),this.fire("tileloadstart",{tile:s,coords:t})},_tileReady:function(t,e,i){e&&this.fire("tileerror",{error:e,tile:i,coords:t});var o=this._tileCoordsToKey(t);i=this._tiles[o],i&&(i.loaded=+new Date,this._map._fadeAnimated?(St(i.el,0),S(this._fadeFrame),this._fadeFrame=p(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(Q(i.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),j.ielt9||!this._map._fadeAnimated?p(this._pruneTiles,this):setTimeout(h(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new D(this._wrapX?A(t.x,this._wrapX):t.x,this._wrapY?A(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new st(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});function Os(t){return new je(t)}var we=je.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,e=U(this,e),e.detectRetina&&j.retina&&e.maxZoom>0?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),typeof e.subdomains=="string"&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&e===void 0&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var i=document.createElement("img");return J(i,"load",h(this._tileOnLoad,this,e,i)),J(i,"error",h(this._tileOnError,this,e,i)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(i.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(i.referrerPolicy=this.options.referrerPolicy),i.alt="",i.src=this.getTileUrl(t),i},getTileUrl:function(t){var e={r:j.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var i=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=i),e["-y"]=i}return ei(this._url,r(e,this.options))},_tileOnLoad:function(t,e){j.ielt9?setTimeout(h(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var o=this.options.errorTileUrl;o&&e.getAttribute("src")!==o&&(e.src=o),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,i=this.options.zoomReverse,o=this.options.zoomOffset;return i&&(t=e-t),t+o},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_abortLoading:function(){var t,e;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&(e=this._tiles[t].el,e.onload=b,e.onerror=b,!e.complete)){e.src=Z;var i=this._tiles[t].coords;ut(e),delete this._tiles[t],this.fire("tileabort",{tile:e,coords:i})}},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute("src",Z),je.prototype._removeTile.call(this,t)},_tileReady:function(t,e,i){if(!(!this._map||i&&i.getAttribute("src")===Z))return je.prototype._tileReady.call(this,t,e,i)}});function Po(t,e){return new we(t,e)}var Lo=we.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var i=r({},this.defaultWmsParams);for(var o in e)o in this.options||(i[o]=e[o]);e=U(this,e);var s=e.detectRetina&&j.retina?2:1,l=this.getTileSize();i.width=l.x*s,i.height=l.y*s,this.wmsParams=i},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,we.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,o=dt(i.project(e[0]),i.project(e[1])),s=o.min,l=o.max,u=(this._wmsVersion>=1.3&&this._crs===vo?[s.y,s.x,l.y,l.x]:[s.x,s.y,l.x,l.y]).join(","),m=we.prototype.getTileUrl.call(this,t);return m+Tt(this.wmsParams,m,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+u},setParams:function(t,e){return r(this.wmsParams,t),e||this.redraw(),this}});function Is(t,e){return new Lo(t,e)}we.WMS=Lo,Po.wms=Is;var qt=It.extend({options:{padding:.1},initialize:function(t){U(this,t),f(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Q(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),o=this._map.getSize().multiplyBy(.5+this.options.padding),s=this._map.project(this._center,e),l=o.multiplyBy(-i).add(s).subtract(this._map._getNewPixelOrigin(t,e));j.any3d?ee(this._container,l,i):yt(this._container,l)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new st(i,i.add(e.multiplyBy(1+t*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),To=qt.extend({options:{tolerance:0},getEvents:function(){var t=qt.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){qt.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");J(t,"mousemove",this._onMouseMove,this),J(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),J(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){S(this._redrawRequest),delete this._ctx,ut(this._container),ht(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var e in this._layers)t=this._layers[e],t._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){qt.prototype._update.call(this);var t=this._bounds,e=this._container,i=t.getSize(),o=j.retina?2:1;yt(e,t.min),e.width=o*i.x,e.height=o*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",j.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){qt.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[f(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,o=e.prev;i?i.prev=o:this._drawLast=o,o?o.next=i:this._drawFirst=i,delete t._order,delete this._layers[f(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(typeof t.options.dashArray=="string"){var e=t.options.dashArray.split(/[, ]+/),i=[],o,s;for(s=0;s<e.length;s++){if(o=Number(e[s]),isNaN(o))return;i.push(o)}t.options._dashArray=i}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||p(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new st,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var i=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,i.x,i.y),this._ctx.clip()}this._drawing=!0;for(var o=this._drawFirst;o;o=o.next)t=o.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,o,s,l,u=t._parts,m=u.length,_=this._ctx;if(m){for(_.beginPath(),i=0;i<m;i++){for(o=0,s=u[i].length;o<s;o++)l=u[i][o],_[o?"lineTo":"moveTo"](l.x,l.y);e&&_.closePath()}this._fillStroke(_,t)}}},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var e=t._point,i=this._ctx,o=Math.max(Math.round(t._radius),1),s=(Math.max(Math.round(t._radiusY),1)||o)/o;s!==1&&(i.save(),i.scale(1,s)),i.beginPath(),i.arc(e.x,e.y/s,o,0,Math.PI*2,!1),s!==1&&i.restore(),this._fillStroke(i,t)}},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&i.weight!==0&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},_onClick:function(t){for(var e=this._map.mouseEventToLayerPoint(t),i,o,s=this._drawFirst;s;s=s.next)i=s.layer,i.options.interactive&&i._containsPoint(e)&&(!(t.type==="click"||t.type==="preclick")||!this._map._draggableMoved(i))&&(o=i);this._fireEvent(o?[o]:!1,t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(gt(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var i,o,s=this._drawFirst;s;s=s.next)i=s.layer,i.options.interactive&&i._containsPoint(e)&&(o=i);o!==this._hoveredLayer&&(this._handleMouseOut(t),o&&(Q(this._container,"leaflet-interactive"),this._fireEvent([o],t,"mouseover"),this._hoveredLayer=o)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,t),this._mouseHoverThrottled=!0,setTimeout(h(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var i=e.next,o=e.prev;if(i)i.prev=o;else return;o?o.next=i:i&&(this._drawFirst=i),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t)}},_bringToBack:function(t){var e=t._order;if(e){var i=e.next,o=e.prev;if(o)o.next=i;else return;i?i.prev=o:o&&(this._drawLast=o),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t)}}});function zo(t){return j.canvas?new To(t):null}var Fe=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch{}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),Ns={_initContainer:function(){this._container=at("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(qt.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=Fe("shape");Q(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=Fe("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[f(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;ut(e),t.removeInteractiveTarget(e),delete this._layers[f(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,o=t.options,s=t._container;s.stroked=!!o.stroke,s.filled=!!o.fill,o.stroke?(e||(e=t._stroke=Fe("stroke")),s.appendChild(e),e.weight=o.weight+"px",e.color=o.color,e.opacity=o.opacity,o.dashArray?e.dashStyle=Ct(o.dashArray)?o.dashArray.join(" "):o.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=o.lineCap.replace("butt","flat"),e.joinstyle=o.lineJoin):e&&(s.removeChild(e),t._stroke=null),o.fill?(i||(i=t._fill=Fe("fill")),s.appendChild(i),i.color=o.fillColor||o.color,i.opacity=o.fillOpacity):i&&(s.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),o=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+o+" 0,"+65535*360)},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){_e(t._container)},_bringToBack:function(t){ge(t._container)}},vi=j.vml?Fe:lt,We=qt.extend({_initContainer:function(){this._container=vi("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=vi("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){ut(this._container),ht(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){qt.prototype._update.call(this);var t=this._bounds,e=t.getSize(),i=this._container;(!this._svgSize||!this._svgSize.equals(e))&&(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),yt(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){var e=t._path=vi("path");t.options.className&&Q(e,t.options.className),t.options.interactive&&Q(e,"leaflet-interactive"),this._updateStyle(t),this._layers[f(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){ut(t._path),t.removeInteractiveTarget(t._path),delete this._layers[f(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,i=t.options;e&&(i.stroke?(e.setAttribute("stroke",i.color),e.setAttribute("stroke-opacity",i.opacity),e.setAttribute("stroke-width",i.weight),e.setAttribute("stroke-linecap",i.lineCap),e.setAttribute("stroke-linejoin",i.lineJoin),i.dashArray?e.setAttribute("stroke-dasharray",i.dashArray):e.removeAttribute("stroke-dasharray"),i.dashOffset?e.setAttribute("stroke-dashoffset",i.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),i.fill?(e.setAttribute("fill",i.fillColor||i.color),e.setAttribute("fill-opacity",i.fillOpacity),e.setAttribute("fill-rule",i.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,mt(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),o=Math.max(Math.round(t._radiusY),1)||i,s="a"+i+","+o+" 0 1,0 ",l=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+s+i*2+",0 "+s+-i*2+",0 ";this._setPath(t,l)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){_e(t._path)},_bringToBack:function(t){ge(t._path)}});j.vml&&We.include(Ns);function Mo(t){return j.svg||j.vml?new We(t):null}ot.include({getRenderer:function(t){var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if(t==="overlayPane"||t===void 0)return!1;var e=this._paneRenderers[t];return e===void 0&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){return this.options.preferCanvas&&zo(t)||Mo(t)}});var Ao=be.extend({initialize:function(t,e){be.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=pt(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});function Rs(t,e){return new Ao(t,e)}We.create=vi,We.pointsToPath=mt,Wt.geometryToLayer=di,Wt.coordsToLatLng=rn,Wt.coordsToLatLngs=ui,Wt.latLngToCoords=sn,Wt.latLngsToCoords=fi,Wt.getFeature=xe,Wt.asFeature=pi,ot.mergeOptions({boxZoom:!0});var Co=Ht.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){J(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){ht(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){ut(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||t.which!==1&&t.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Ie(),Hi(),this._startPoint=this._map.mouseEventToContainerPoint(t),J(document,{contextmenu:oe,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=at("div","leaflet-zoom-box",this._container),Q(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new st(this._point,this._startPoint),i=e.getSize();yt(this._box,e.min),this._box.style.width=i.x+"px",this._box.style.height=i.y+"px"},_finish:function(){this._moved&&(ut(this._box),gt(this._container,"leaflet-crosshair")),Ne(),Ui(),ht(document,{contextmenu:oe,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if(!(t.which!==1&&t.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(h(this._resetState,this),0);var e=new _t(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){t.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});ot.addInitHook("addHandler","boxZoom",Co),ot.mergeOptions({doubleClickZoom:!0});var So=Ht.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),o=e.options.zoomDelta,s=t.originalEvent.shiftKey?i-o:i+o;e.options.doubleClickZoom==="center"?e.setZoom(s):e.setZoomAround(t.containerPoint,s)}});ot.addInitHook("addHandler","doubleClickZoom",So),ot.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Eo=Ht.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new Yt(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}Q(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){gt(this._map._container,"leaflet-grab"),gt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=pt(this._map.options.maxBounds);this._offsetLimit=dt(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(i),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,o=this._draggable._newPos.x,s=(o-e+i)%t+e-i,l=(o+e+i)%t-e-i,u=Math.abs(s+i)<Math.abs(l+i)?s:l;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=u},_onDragEnd:function(t){var e=this._map,i=e.options,o=!i.inertia||t.noInertia||this._times.length<2;if(e.fire("dragend",t),o)e.fire("moveend");else{this._prunePositions(+new Date);var s=this._lastPos.subtract(this._positions[0]),l=(this._lastTime-this._times[0])/1e3,u=i.easeLinearity,m=s.multiplyBy(u/l),_=m.distanceTo([0,0]),T=Math.min(i.inertiaMaxSpeed,_),N=m.multiplyBy(T/_),G=T/(i.inertiaDeceleration*u),tt=N.multiplyBy(-G/2).round();!tt.x&&!tt.y?e.fire("moveend"):(tt=e._limitOffset(tt,e.options.maxBounds),p(function(){e.panBy(tt,{duration:G,easeLinearity:u,noMoveStart:!0,animate:!0})}))}}});ot.addInitHook("addHandler","dragging",Eo),ot.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Bo=Ht.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),J(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),ht(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,i=t.scrollTop||e.scrollTop,o=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(o,i)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e=this._panKeys={},i=this.keyCodes,o,s;for(o=0,s=i.left.length;o<s;o++)e[i.left[o]]=[-1*t,0];for(o=0,s=i.right.length;o<s;o++)e[i.right[o]]=[t,0];for(o=0,s=i.down.length;o<s;o++)e[i.down[o]]=[0,t];for(o=0,s=i.up.length;o<s;o++)e[i.up[o]]=[0,-1*t]},_setZoomDelta:function(t){var e=this._zoomKeys={},i=this.keyCodes,o,s;for(o=0,s=i.zoomIn.length;o<s;o++)e[i.zoomIn[o]]=t;for(o=0,s=i.zoomOut.length;o<s;o++)e[i.zoomOut[o]]=-t},_addHooks:function(){J(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){ht(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e=t.keyCode,i=this._map,o;if(e in this._panKeys){if(!i._panAnim||!i._panAnim._inProgress)if(o=this._panKeys[e],t.shiftKey&&(o=F(o).multiplyBy(3)),i.options.maxBounds&&(o=i._limitOffset(F(o),i.options.maxBounds)),i.options.worldCopyJump){var s=i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(o)));i.panTo(s)}else i.panBy(o)}else if(e in this._zoomKeys)i.setZoom(i.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else if(e===27&&i._popup&&i._popup.options.closeOnEscapeKey)i.closePopup();else return;oe(t)}}});ot.addInitHook("addHandler","keyboard",Bo),ot.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Oo=Ht.extend({addHooks:function(){J(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){ht(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=oo(t),i=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var o=Math.max(i-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(h(this._performZoom,this),o),oe(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0;t._stop();var o=this._delta/(this._map.options.wheelPxPerZoomLevel*4),s=4*Math.log(2/(1+Math.exp(-Math.abs(o))))/Math.LN2,l=i?Math.ceil(s/i)*i:s,u=t._limitZoom(e+(this._delta>0?l:-l))-e;this._delta=0,this._startTime=null,u&&(t.options.scrollWheelZoom==="center"?t.setZoom(e+u):t.setZoomAround(this._lastMousePos,e+u))}});ot.addInitHook("addHandler","scrollWheelZoom",Oo);var Zs=600;ot.mergeOptions({tapHold:j.touchNative&&j.safari&&j.mobile,tapTolerance:15});var Io=Ht.extend({addHooks:function(){J(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){ht(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),t.touches.length===1){var e=t.touches[0];this._startPos=this._newPos=new D(e.clientX,e.clientY),this._holdTimeout=setTimeout(h(function(){this._cancel(),this._isTapValid()&&(J(document,"touchend",Lt),J(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),Zs),J(document,"touchend touchcancel contextmenu",this._cancel,this),J(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){ht(document,"touchend",Lt),ht(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),ht(document,"touchend touchcancel contextmenu",this._cancel,this),ht(document,"touchmove",this._onMove,this)},_onMove:function(t){var e=t.touches[0];this._newPos=new D(e.clientX,e.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){var i=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});i._simulated=!0,e.target.dispatchEvent(i)}});ot.addInitHook("addHandler","tapHold",Io),ot.mergeOptions({touchZoom:j.touch,bounceAtZoomLimits:!0});var No=Ht.extend({addHooks:function(){Q(this._map._container,"leaflet-touch-zoom"),J(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){gt(this._map._container,"leaflet-touch-zoom"),ht(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(!(!t.touches||t.touches.length!==2||e._animatingZoom||this._zooming)){var i=e.mouseEventToContainerPoint(t.touches[0]),o=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),e.options.touchZoom!=="center"&&(this._pinchStartLatLng=e.containerPointToLatLng(i.add(o)._divideBy(2))),this._startDist=i.distanceTo(o),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),J(document,"touchmove",this._onTouchMove,this),J(document,"touchend touchcancel",this._onTouchEnd,this),Lt(t)}},_onTouchMove:function(t){if(!(!t.touches||t.touches.length!==2||!this._zooming)){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),o=e.mouseEventToContainerPoint(t.touches[1]),s=i.distanceTo(o)/this._startDist;if(this._zoom=e.getScaleZoom(s,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&s<1||this._zoom>e.getMaxZoom()&&s>1)&&(this._zoom=e._limitZoom(this._zoom)),e.options.touchZoom==="center"){if(this._center=this._startLatLng,s===1)return}else{var l=i._add(o)._divideBy(2)._subtract(this._centerPoint);if(s===1&&l.x===0&&l.y===0)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(l),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),S(this._animRequest);var u=h(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=p(u,this,!0),Lt(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,S(this._animRequest),ht(document,"touchmove",this._onTouchMove,this),ht(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});ot.addInitHook("addHandler","touchZoom",No),ot.BoxZoom=Co,ot.DoubleClickZoom=So,ot.Drag=Eo,ot.Keyboard=Bo,ot.ScrollWheelZoom=Oo,ot.TapHold=Io,ot.TouchZoom=No,c.Bounds=st,c.Browser=j,c.CRS=x,c.Canvas=To,c.Circle=on,c.CircleMarker=ci,c.Class=C,c.Control=Ot,c.DivIcon=$o,c.DivOverlay=Ut,c.DomEvent=ns,c.DomUtil=es,c.Draggable=Yt,c.Evented=rt,c.FeatureGroup=jt,c.GeoJSON=Wt,c.GridLayer=je,c.Handler=Ht,c.Icon=ye,c.ImageOverlay=mi,c.LatLng=nt,c.LatLngBounds=_t,c.Layer=It,c.LayerGroup=ve,c.LineUtil=_s,c.Map=ot,c.Marker=hi,c.Mixin=cs,c.Path=Jt,c.Point=D,c.PolyUtil=ds,c.Polygon=be,c.Polyline=Ft,c.Popup=_i,c.PosAnimation=ro,c.Projection=gs,c.Rectangle=Ao,c.Renderer=qt,c.SVG=We,c.SVGOverlay=ko,c.TileLayer=we,c.Tooltip=gi,c.Transformation=M,c.Util=P,c.VideoOverlay=wo,c.bind=h,c.bounds=dt,c.canvas=zo,c.circle=Ps,c.circleMarker=$s,c.control=De,c.divIcon=Bs,c.extend=r,c.featureGroup=xs,c.geoJSON=xo,c.geoJson=zs,c.gridLayer=Os,c.icon=ws,c.imageOverlay=Ms,c.latLng=it,c.latLngBounds=pt,c.layerGroup=bs,c.map=os,c.marker=ks,c.point=F,c.polygon=Ts,c.polyline=Ls,c.popup=Ss,c.rectangle=Rs,c.setOptions=U,c.stamp=f,c.svg=Mo,c.svgOverlay=Cs,c.tileLayer=Po,c.tooltip=Es,c.transformation=I,c.version=n,c.videoOverlay=As;var Ds=window.L;c.noConflict=function(){return window.L=Ds,this},window.L=c}))});var wr=Uo((br,xr)=>{var yr=(function(){var c=function(R,Z){var B=236,O=17,w=R,E=r[Z],g=null,p=0,S=null,P=[],C={},X=function(x,k){p=w*4+17,g=(function(y){for(var $=new Array(y),M=0;M<y;M+=1){$[M]=new Array(y);for(var I=0;I<y;I+=1)$[M][I]=null}return $})(p),V(0,0),V(p-7,0),V(0,p-7),wt(),D(),st(x,k),w>=7&&F(x),S==null&&(S=pt(w,E,P)),dt(S,k)},V=function(x,k){for(var y=-1;y<=7;y+=1)if(!(x+y<=-1||p<=x+y))for(var $=-1;$<=7;$+=1)k+$<=-1||p<=k+$||(0<=y&&y<=6&&($==0||$==6)||0<=$&&$<=6&&(y==0||y==6)||2<=y&&y<=4&&2<=$&&$<=4?g[x+y][k+$]=!0:g[x+y][k+$]=!1)},rt=function(){for(var x=0,k=0,y=0;y<8;y+=1){X(!0,y);var $=h.getLostPoint(C);(y==0||x>$)&&(x=$,k=y)}return k},D=function(){for(var x=8;x<p-8;x+=1)g[x][6]==null&&(g[x][6]=x%2==0);for(var k=8;k<p-8;k+=1)g[6][k]==null&&(g[6][k]=k%2==0)},wt=function(){for(var x=h.getPatternPosition(w),k=0;k<x.length;k+=1)for(var y=0;y<x.length;y+=1){var $=x[k],M=x[y];if(g[$][M]==null)for(var I=-2;I<=2;I+=1)for(var q=-2;q<=2;q+=1)I==-2||I==2||q==-2||q==2||I==0&&q==0?g[$+I][M+q]=!0:g[$+I][M+q]=!1}},F=function(x){for(var k=h.getBCHTypeNumber(w),y=0;y<18;y+=1){var $=!x&&(k>>y&1)==1;g[Math.floor(y/3)][y%3+p-8-3]=$}for(var y=0;y<18;y+=1){var $=!x&&(k>>y&1)==1;g[y%3+p-8-3][Math.floor(y/3)]=$}},st=function(x,k){for(var y=E<<3|k,$=h.getBCHTypeInfo(y),M=0;M<15;M+=1){var I=!x&&($>>M&1)==1;M<6?g[M][8]=I:M<8?g[M+1][8]=I:g[p-15+M][8]=I}for(var M=0;M<15;M+=1){var I=!x&&($>>M&1)==1;M<8?g[8][p-M-1]=I:M<9?g[8][15-M-1+1]=I:g[8][15-M-1]=I}g[p-8][8]=!x},dt=function(x,k){for(var y=-1,$=p-1,M=7,I=0,q=h.getMaskFunction(k),W=p-1;W>0;W-=2)for(W==6&&(W-=1);;){for(var lt=0;lt<2;lt+=1)if(g[$][W-lt]==null){var mt=!1;I<x.length&&(mt=(x[I]>>>M&1)==1);var Y=q($,W-lt);Y&&(mt=!mt),g[$][W-lt]=mt,M-=1,M==-1&&(I+=1,M=7)}if($+=y,$<0||p<=$){$-=y,y=-y;break}}},_t=function(x,k){for(var y=0,$=0,M=0,I=new Array(k.length),q=new Array(k.length),W=0;W<k.length;W+=1){var lt=k[W].dataCount,mt=k[W].totalCount-lt;$=Math.max($,lt),M=Math.max(M,mt),I[W]=new Array(lt);for(var Y=0;Y<I[W].length;Y+=1)I[W][Y]=255&x.getBuffer()[Y+y];y+=lt;var Pt=h.getErrorCorrectPolynomial(mt),Mt=f(I[W],Pt.getLength()-1),Ce=Mt.mod(Pt);q[W]=new Array(Pt.getLength()-1);for(var Y=0;Y<q[W].length;Y+=1){var ue=Y+Ce.getLength()-q[W].length;q[W][Y]=ue>=0?Ce.getAt(ue):0}}for(var Se=0,Y=0;Y<k.length;Y+=1)Se+=k[Y].totalCount;for(var fe=new Array(Se),pe=0,Y=0;Y<$;Y+=1)for(var W=0;W<k.length;W+=1)Y<I[W].length&&(fe[pe]=I[W][Y],pe+=1);for(var Y=0;Y<M;Y+=1)for(var W=0;W<k.length;W+=1)Y<q[W].length&&(fe[pe]=q[W][Y],pe+=1);return fe},pt=function(x,k,y){for(var $=z.getRSBlocks(x,k),M=A(),I=0;I<y.length;I+=1){var q=y[I];M.put(q.getMode(),4),M.put(q.getLength(),h.getLengthInBits(q.getMode(),x)),q.write(M)}for(var W=0,I=0;I<$.length;I+=1)W+=$[I].dataCount;if(M.getLengthInBits()>W*8)throw"code length overflow. ("+M.getLengthInBits()+">"+W*8+")";for(M.getLengthInBits()+4<=W*8&&M.put(0,4);M.getLengthInBits()%8!=0;)M.putBit(!1);for(;!(M.getLengthInBits()>=W*8||(M.put(B,8),M.getLengthInBits()>=W*8));)M.put(O,8);return _t(M,$)};C.addData=function(x,k){k=k||"Byte";var y=null;switch(k){case"Numeric":y=b(x);break;case"Alphanumeric":y=K(x);break;case"Byte":y=H(x);break;case"Kanji":y=et(x);break;default:throw"mode:"+k}P.push(y),S=null},C.isDark=function(x,k){if(x<0||p<=x||k<0||p<=k)throw x+","+k;return g[x][k]},C.getModuleCount=function(){return p},C.make=function(){if(w<1){for(var x=1;x<40;x++){for(var k=z.getRSBlocks(x,E),y=A(),$=0;$<P.length;$++){var M=P[$];y.put(M.getMode(),4),y.put(M.getLength(),h.getLengthInBits(M.getMode(),x)),M.write(y)}for(var I=0,$=0;$<k.length;$++)I+=k[$].dataCount;if(y.getLengthInBits()<=I*8)break}w=x}X(!1,rt())},C.createTableTag=function(x,k){x=x||2,k=typeof k>"u"?x*4:k;var y="";y+='<table style="',y+=" border-width: 0px; border-style: none;",y+=" border-collapse: collapse;",y+=" padding: 0px; margin: "+k+"px;",y+='">',y+="<tbody>";for(var $=0;$<C.getModuleCount();$+=1){y+="<tr>";for(var M=0;M<C.getModuleCount();M+=1)y+='<td style="',y+=" border-width: 0px; border-style: none;",y+=" border-collapse: collapse;",y+=" padding: 0px; margin: 0px;",y+=" width: "+x+"px;",y+=" height: "+x+"px;",y+=" background-color: ",y+=C.isDark($,M)?"#000000":"#ffffff",y+=";",y+='"/>';y+="</tr>"}return y+="</tbody>",y+="</table>",y},C.createSvgTag=function(x,k,y,$){var M={};typeof arguments[0]=="object"&&(M=arguments[0],x=M.cellSize,k=M.margin,y=M.alt,$=M.title),x=x||2,k=typeof k>"u"?x*4:k,y=typeof y=="string"?{text:y}:y||{},y.text=y.text||null,y.id=y.text?y.id||"qrcode-description":null,$=typeof $=="string"?{text:$}:$||{},$.text=$.text||null,$.id=$.text?$.id||"qrcode-title":null;var I=C.getModuleCount()*x+k*2,q,W,lt,mt,Y="",Pt;for(Pt="l"+x+",0 0,"+x+" -"+x+",0 0,-"+x+"z ",Y+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',Y+=M.scalable?"":' width="'+I+'px" height="'+I+'px"',Y+=' viewBox="0 0 '+I+" "+I+'" ',Y+=' preserveAspectRatio="xMinYMin meet"',Y+=$.text||y.text?' role="img" aria-labelledby="'+nt([$.id,y.id].join(" ").trim())+'"':"",Y+=">",Y+=$.text?'<title id="'+nt($.id)+'">'+nt($.text)+"</title>":"",Y+=y.text?'<description id="'+nt(y.id)+'">'+nt(y.text)+"</description>":"",Y+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',Y+='<path d="',lt=0;lt<C.getModuleCount();lt+=1)for(mt=lt*x+k,q=0;q<C.getModuleCount();q+=1)C.isDark(lt,q)&&(W=q*x+k,Y+="M"+W+","+mt+Pt);return Y+='" stroke="transparent" fill="black"/>',Y+="</svg>",Y},C.createDataURL=function(x,k){x=x||2,k=typeof k>"u"?x*4:k;var y=C.getModuleCount()*x+k*2,$=k,M=y-k;return Ct(y,y,function(I,q){if($<=I&&I<M&&$<=q&&q<M){var W=Math.floor((I-$)/x),lt=Math.floor((q-$)/x);return C.isDark(lt,W)?0:1}else return 1})},C.createImgTag=function(x,k,y){x=x||2,k=typeof k>"u"?x*4:k;var $=C.getModuleCount()*x+k*2,M="";return M+="<img",M+=' src="',M+=C.createDataURL(x,k),M+='"',M+=' width="',M+=$,M+='"',M+=' height="',M+=$,M+='"',y&&(M+=' alt="',M+=nt(y),M+='"'),M+="/>",M};var nt=function(x){for(var k="",y=0;y<x.length;y+=1){var $=x.charAt(y);switch($){case"<":k+="&lt;";break;case">":k+="&gt;";break;case"&":k+="&amp;";break;case'"':k+="&quot;";break;default:k+=$;break}}return k},it=function(x){var k=1;x=typeof x>"u"?k*2:x;var y=C.getModuleCount()*k+x*2,$=x,M=y-x,I,q,W,lt,mt,Y={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},Pt={"\u2588\u2588":"\u2580","\u2588 ":"\u2580"," \u2588":" ","  ":" "},Mt="";for(I=0;I<y;I+=2){for(W=Math.floor((I-$)/k),lt=Math.floor((I+1-$)/k),q=0;q<y;q+=1)mt="\u2588",$<=q&&q<M&&$<=I&&I<M&&C.isDark(W,Math.floor((q-$)/k))&&(mt=" "),$<=q&&q<M&&$<=I+1&&I+1<M&&C.isDark(lt,Math.floor((q-$)/k))?mt+=" ":mt+="\u2588",Mt+=x<1&&I+1>=M?Pt[mt]:Y[mt];Mt+=`
`}return y%2&&x>0?Mt.substring(0,Mt.length-y-1)+Array(y+1).join("\u2580"):Mt.substring(0,Mt.length-1)};return C.createASCII=function(x,k){if(x=x||1,x<2)return it(k);x-=1,k=typeof k>"u"?x*2:k;var y=C.getModuleCount()*x+k*2,$=k,M=y-k,I,q,W,lt,mt=Array(x+1).join("\u2588\u2588"),Y=Array(x+1).join("  "),Pt="",Mt="";for(I=0;I<y;I+=1){for(W=Math.floor((I-$)/x),Mt="",q=0;q<y;q+=1)lt=1,$<=q&&q<M&&$<=I&&I<M&&C.isDark(W,Math.floor((q-$)/x))&&(lt=0),Mt+=lt?mt:Y;for(W=0;W<x;W+=1)Pt+=Mt+`
`}return Pt.substring(0,Pt.length-1)},C.renderTo2dContext=function(x,k){k=k||2;for(var y=C.getModuleCount(),$=0;$<y;$++)for(var M=0;M<y;M++)x.fillStyle=C.isDark($,M)?"black":"white",x.fillRect($*k,M*k,k,k)},C};c.stringToBytesFuncs={default:function(R){for(var Z=[],B=0;B<R.length;B+=1){var O=R.charCodeAt(B);Z.push(O&255)}return Z}},c.stringToBytes=c.stringToBytesFuncs.default,c.createStringToBytes=function(R,Z){var B=(function(){for(var w=kt(R),E=function(){var D=w.read();if(D==-1)throw"eof";return D},g=0,p={};;){var S=w.read();if(S==-1)break;var P=E(),C=E(),X=E(),V=String.fromCharCode(S<<8|P),rt=C<<8|X;p[V]=rt,g+=1}if(g!=Z)throw g+" != "+Z;return p})(),O=63;return function(w){for(var E=[],g=0;g<w.length;g+=1){var p=w.charCodeAt(g);if(p<128)E.push(p);else{var S=B[w.charAt(g)];typeof S=="number"?(S&255)==S?E.push(S):(E.push(S>>>8),E.push(S&255)):E.push(O)}}return E}};var n={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},r={L:1,M:0,Q:3,H:2},a={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},h=(function(){var R=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],Z=1335,B=7973,O=21522,w={},E=function(g){for(var p=0;g!=0;)p+=1,g>>>=1;return p};return w.getBCHTypeInfo=function(g){for(var p=g<<10;E(p)-E(Z)>=0;)p^=Z<<E(p)-E(Z);return(g<<10|p)^O},w.getBCHTypeNumber=function(g){for(var p=g<<12;E(p)-E(B)>=0;)p^=B<<E(p)-E(B);return g<<12|p},w.getPatternPosition=function(g){return R[g-1]},w.getMaskFunction=function(g){switch(g){case a.PATTERN000:return function(p,S){return(p+S)%2==0};case a.PATTERN001:return function(p,S){return p%2==0};case a.PATTERN010:return function(p,S){return S%3==0};case a.PATTERN011:return function(p,S){return(p+S)%3==0};case a.PATTERN100:return function(p,S){return(Math.floor(p/2)+Math.floor(S/3))%2==0};case a.PATTERN101:return function(p,S){return p*S%2+p*S%3==0};case a.PATTERN110:return function(p,S){return(p*S%2+p*S%3)%2==0};case a.PATTERN111:return function(p,S){return(p*S%3+(p+S)%2)%2==0};default:throw"bad maskPattern:"+g}},w.getErrorCorrectPolynomial=function(g){for(var p=f([1],0),S=0;S<g;S+=1)p=p.multiply(f([1,d.gexp(S)],0));return p},w.getLengthInBits=function(g,p){if(1<=p&&p<10)switch(g){case n.MODE_NUMBER:return 10;case n.MODE_ALPHA_NUM:return 9;case n.MODE_8BIT_BYTE:return 8;case n.MODE_KANJI:return 8;default:throw"mode:"+g}else if(p<27)switch(g){case n.MODE_NUMBER:return 12;case n.MODE_ALPHA_NUM:return 11;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 10;default:throw"mode:"+g}else if(p<41)switch(g){case n.MODE_NUMBER:return 14;case n.MODE_ALPHA_NUM:return 13;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 12;default:throw"mode:"+g}else throw"type:"+p},w.getLostPoint=function(g){for(var p=g.getModuleCount(),S=0,P=0;P<p;P+=1)for(var C=0;C<p;C+=1){for(var X=0,V=g.isDark(P,C),rt=-1;rt<=1;rt+=1)if(!(P+rt<0||p<=P+rt))for(var D=-1;D<=1;D+=1)C+D<0||p<=C+D||rt==0&&D==0||V==g.isDark(P+rt,C+D)&&(X+=1);X>5&&(S+=3+X-5)}for(var P=0;P<p-1;P+=1)for(var C=0;C<p-1;C+=1){var wt=0;g.isDark(P,C)&&(wt+=1),g.isDark(P+1,C)&&(wt+=1),g.isDark(P,C+1)&&(wt+=1),g.isDark(P+1,C+1)&&(wt+=1),(wt==0||wt==4)&&(S+=3)}for(var P=0;P<p;P+=1)for(var C=0;C<p-6;C+=1)g.isDark(P,C)&&!g.isDark(P,C+1)&&g.isDark(P,C+2)&&g.isDark(P,C+3)&&g.isDark(P,C+4)&&!g.isDark(P,C+5)&&g.isDark(P,C+6)&&(S+=40);for(var C=0;C<p;C+=1)for(var P=0;P<p-6;P+=1)g.isDark(P,C)&&!g.isDark(P+1,C)&&g.isDark(P+2,C)&&g.isDark(P+3,C)&&g.isDark(P+4,C)&&!g.isDark(P+5,C)&&g.isDark(P+6,C)&&(S+=40);for(var F=0,C=0;C<p;C+=1)for(var P=0;P<p;P+=1)g.isDark(P,C)&&(F+=1);var st=Math.abs(100*F/p/p-50)/5;return S+=st*10,S},w})(),d=(function(){for(var R=new Array(256),Z=new Array(256),B=0;B<8;B+=1)R[B]=1<<B;for(var B=8;B<256;B+=1)R[B]=R[B-4]^R[B-5]^R[B-6]^R[B-8];for(var B=0;B<255;B+=1)Z[R[B]]=B;var O={};return O.glog=function(w){if(w<1)throw"glog("+w+")";return Z[w]},O.gexp=function(w){for(;w<0;)w+=255;for(;w>=256;)w-=255;return R[w]},O})();function f(R,Z){if(typeof R.length>"u")throw R.length+"/"+Z;var B=(function(){for(var w=0;w<R.length&&R[w]==0;)w+=1;for(var E=new Array(R.length-w+Z),g=0;g<R.length-w;g+=1)E[g]=R[g+w];return E})(),O={};return O.getAt=function(w){return B[w]},O.getLength=function(){return B.length},O.multiply=function(w){for(var E=new Array(O.getLength()+w.getLength()-1),g=0;g<O.getLength();g+=1)for(var p=0;p<w.getLength();p+=1)E[g+p]^=d.gexp(d.glog(O.getAt(g))+d.glog(w.getAt(p)));return f(E,0)},O.mod=function(w){if(O.getLength()-w.getLength()<0)return O;for(var E=d.glog(O.getAt(0))-d.glog(w.getAt(0)),g=new Array(O.getLength()),p=0;p<O.getLength();p+=1)g[p]=O.getAt(p);for(var p=0;p<w.getLength();p+=1)g[p]^=d.gexp(d.glog(w.getAt(p))+E);return f(g,0).mod(w)},O}var z=(function(){var R=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],Z=function(w,E){var g={};return g.totalCount=w,g.dataCount=E,g},B={},O=function(w,E){switch(E){case r.L:return R[(w-1)*4+0];case r.M:return R[(w-1)*4+1];case r.Q:return R[(w-1)*4+2];case r.H:return R[(w-1)*4+3];default:return}};return B.getRSBlocks=function(w,E){var g=O(w,E);if(typeof g>"u")throw"bad rs block @ typeNumber:"+w+"/errorCorrectionLevel:"+E;for(var p=g.length/3,S=[],P=0;P<p;P+=1)for(var C=g[P*3+0],X=g[P*3+1],V=g[P*3+2],rt=0;rt<C;rt+=1)S.push(Z(X,V));return S},B})(),A=function(){var R=[],Z=0,B={};return B.getBuffer=function(){return R},B.getAt=function(O){var w=Math.floor(O/8);return(R[w]>>>7-O%8&1)==1},B.put=function(O,w){for(var E=0;E<w;E+=1)B.putBit((O>>>w-E-1&1)==1)},B.getLengthInBits=function(){return Z},B.putBit=function(O){var w=Math.floor(Z/8);R.length<=w&&R.push(0),O&&(R[w]|=128>>>Z%8),Z+=1},B},b=function(R){var Z=n.MODE_NUMBER,B=R,O={};O.getMode=function(){return Z},O.getLength=function(g){return B.length},O.write=function(g){for(var p=B,S=0;S+2<p.length;)g.put(w(p.substring(S,S+3)),10),S+=3;S<p.length&&(p.length-S==1?g.put(w(p.substring(S,S+1)),4):p.length-S==2&&g.put(w(p.substring(S,S+2)),7))};var w=function(g){for(var p=0,S=0;S<g.length;S+=1)p=p*10+E(g.charAt(S));return p},E=function(g){if("0"<=g&&g<="9")return g.charCodeAt(0)-48;throw"illegal char :"+g};return O},K=function(R){var Z=n.MODE_ALPHA_NUM,B=R,O={};O.getMode=function(){return Z},O.getLength=function(E){return B.length},O.write=function(E){for(var g=B,p=0;p+1<g.length;)E.put(w(g.charAt(p))*45+w(g.charAt(p+1)),11),p+=2;p<g.length&&E.put(w(g.charAt(p)),6)};var w=function(E){if("0"<=E&&E<="9")return E.charCodeAt(0)-48;if("A"<=E&&E<="Z")return E.charCodeAt(0)-65+10;switch(E){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+E}};return O},H=function(R){var Z=n.MODE_8BIT_BYTE,B=R,O=c.stringToBytes(R),w={};return w.getMode=function(){return Z},w.getLength=function(E){return O.length},w.write=function(E){for(var g=0;g<O.length;g+=1)E.put(O[g],8)},w},et=function(R){var Z=n.MODE_KANJI,B=R,O=c.stringToBytesFuncs.SJIS;if(!O)throw"sjis not supported.";(function(g,p){var S=O(g);if(S.length!=2||(S[0]<<8|S[1])!=p)throw"sjis not supported."})("\u53CB",38726);var w=O(R),E={};return E.getMode=function(){return Z},E.getLength=function(g){return~~(w.length/2)},E.write=function(g){for(var p=w,S=0;S+1<p.length;){var P=(255&p[S])<<8|255&p[S+1];if(33088<=P&&P<=40956)P-=33088;else if(57408<=P&&P<=60351)P-=49472;else throw"illegal char at "+(S+1)+"/"+P;P=(P>>>8&255)*192+(P&255),g.put(P,13),S+=2}if(S<p.length)throw"illegal char at "+(S+1)},E},U=function(){var R=[],Z={};return Z.writeByte=function(B){R.push(B&255)},Z.writeShort=function(B){Z.writeByte(B),Z.writeByte(B>>>8)},Z.writeBytes=function(B,O,w){O=O||0,w=w||B.length;for(var E=0;E<w;E+=1)Z.writeByte(B[E+O])},Z.writeString=function(B){for(var O=0;O<B.length;O+=1)Z.writeByte(B.charCodeAt(O))},Z.toByteArray=function(){return R},Z.toString=function(){var B="";B+="[";for(var O=0;O<R.length;O+=1)O>0&&(B+=","),B+=R[O];return B+="]",B},Z},Tt=function(){var R=0,Z=0,B=0,O="",w={},E=function(p){O+=String.fromCharCode(g(p&63))},g=function(p){if(!(p<0)){if(p<26)return 65+p;if(p<52)return 97+(p-26);if(p<62)return 48+(p-52);if(p==62)return 43;if(p==63)return 47}throw"n:"+p};return w.writeByte=function(p){for(R=R<<8|p&255,Z+=8,B+=1;Z>=6;)E(R>>>Z-6),Z-=6},w.flush=function(){if(Z>0&&(E(R<<6-Z),R=0,Z=0),B%3!=0)for(var p=3-B%3,S=0;S<p;S+=1)O+="="},w.toString=function(){return O},w},kt=function(R){var Z=R,B=0,O=0,w=0,E={};E.read=function(){for(;w<8;){if(B>=Z.length){if(w==0)return-1;throw"unexpected end of file./"+w}var p=Z.charAt(B);if(B+=1,p=="=")return w=0,-1;if(p.match(/^\s$/))continue;O=O<<6|g(p.charCodeAt(0)),w+=6}var S=O>>>w-8&255;return w-=8,S};var g=function(p){if(65<=p&&p<=90)return p-65;if(97<=p&&p<=122)return p-97+26;if(48<=p&&p<=57)return p-48+52;if(p==43)return 62;if(p==47)return 63;throw"c:"+p};return E},ei=function(R,Z){var B=R,O=Z,w=new Array(R*Z),E={};E.setPixel=function(P,C,X){w[C*B+P]=X},E.write=function(P){P.writeString("GIF87a"),P.writeShort(B),P.writeShort(O),P.writeByte(128),P.writeByte(0),P.writeByte(0),P.writeByte(0),P.writeByte(0),P.writeByte(0),P.writeByte(255),P.writeByte(255),P.writeByte(255),P.writeString(","),P.writeShort(0),P.writeShort(0),P.writeShort(B),P.writeShort(O),P.writeByte(0);var C=2,X=p(C);P.writeByte(C);for(var V=0;X.length-V>255;)P.writeByte(255),P.writeBytes(X,V,255),V+=255;P.writeByte(X.length-V),P.writeBytes(X,V,X.length-V),P.writeByte(0),P.writeString(";")};var g=function(P){var C=P,X=0,V=0,rt={};return rt.write=function(D,wt){if(D>>>wt)throw"length over";for(;X+wt>=8;)C.writeByte(255&(D<<X|V)),wt-=8-X,D>>>=8-X,V=0,X=0;V=D<<X|V,X=X+wt},rt.flush=function(){X>0&&C.writeByte(V)},rt},p=function(P){for(var C=1<<P,X=(1<<P)+1,V=P+1,rt=S(),D=0;D<C;D+=1)rt.add(String.fromCharCode(D));rt.add(String.fromCharCode(C)),rt.add(String.fromCharCode(X));var wt=U(),F=g(wt);F.write(C,V);var st=0,dt=String.fromCharCode(w[st]);for(st+=1;st<w.length;){var _t=String.fromCharCode(w[st]);st+=1,rt.contains(dt+_t)?dt=dt+_t:(F.write(rt.indexOf(dt),V),rt.size()<4095&&(rt.size()==1<<V&&(V+=1),rt.add(dt+_t)),dt=_t)}return F.write(rt.indexOf(dt),V),F.write(X,V),F.flush(),wt.toByteArray()},S=function(){var P={},C=0,X={};return X.add=function(V){if(X.contains(V))throw"dup key:"+V;P[V]=C,C+=1},X.size=function(){return C},X.indexOf=function(V){return P[V]},X.contains=function(V){return typeof P[V]<"u"},X};return E},Ct=function(R,Z,B){for(var O=ei(R,Z),w=0;w<Z;w+=1)for(var E=0;E<R;E+=1)O.setPixel(E,w,B(E,w));var g=U();O.write(g);for(var p=Tt(),S=g.toByteArray(),P=0;P<S.length;P+=1)p.writeByte(S[P]);return p.flush(),"data:image/gif;base64,"+p};return c})();(function(){yr.stringToBytesFuncs["UTF-8"]=function(c){function n(r){for(var a=[],h=0;h<r.length;h++){var d=r.charCodeAt(h);d<128?a.push(d):d<2048?a.push(192|d>>6,128|d&63):d<55296||d>=57344?a.push(224|d>>12,128|d>>6&63,128|d&63):(h++,d=65536+((d&1023)<<10|r.charCodeAt(h)&1023),a.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63))}return a}return n(c)}})();(function(c){typeof define=="function"&&define.amd?define([],c):typeof br=="object"&&(xr.exports=c())})(function(){return yr})});var bi=globalThis,xi=bi.ShadowRoot&&(bi.ShadyCSS===void 0||bi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,hn=Symbol(),Fo=new WeakMap,qe=class{constructor(n,r,a){if(this._$cssResult$=!0,a!==hn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=n,this.t=r}get styleSheet(){let n=this.o,r=this.t;if(xi&&n===void 0){let a=r!==void 0&&r.length===1;a&&(n=Fo.get(r)),n===void 0&&((this.o=n=new CSSStyleSheet).replaceSync(this.cssText),a&&Fo.set(r,n))}return n}toString(){return this.cssText}},wi=c=>new qe(typeof c=="string"?c:c+"",void 0,hn),ft=(c,...n)=>{let r=c.length===1?c[0]:n.reduce((a,h,d)=>a+(f=>{if(f._$cssResult$===!0)return f.cssText;if(typeof f=="number")return f;throw Error("Value passed to 'css' function must be a 'css' function result: "+f+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(h)+c[d+1],c[0]);return new qe(r,c,hn)},Wo=(c,n)=>{if(xi)c.adoptedStyleSheets=n.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of n){let a=document.createElement("style"),h=bi.litNonce;h!==void 0&&a.setAttribute("nonce",h),a.textContent=r.cssText,c.appendChild(a)}},cn=xi?c=>c:c=>c instanceof CSSStyleSheet?(n=>{let r="";for(let a of n.cssRules)r+=a.cssText;return wi(r)})(c):c;var{is:ea,defineProperty:ia,getOwnPropertyDescriptor:na,getOwnPropertyNames:oa,getOwnPropertySymbols:ra,getPrototypeOf:sa}=Object,ki=globalThis,qo=ki.trustedTypes,aa=qo?qo.emptyScript:"",la=ki.reactiveElementPolyfillSupport,Ve=(c,n)=>c,dn={toAttribute(c,n){switch(n){case Boolean:c=c?aa:null;break;case Object:case Array:c=c==null?c:JSON.stringify(c)}return c},fromAttribute(c,n){let r=c;switch(n){case Boolean:r=c!==null;break;case Number:r=c===null?null:Number(c);break;case Object:case Array:try{r=JSON.parse(c)}catch{r=null}}return r}},Ko=(c,n)=>!ea(c,n),Vo={attribute:!0,type:String,converter:dn,reflect:!1,useDefault:!1,hasChanged:Ko};Symbol.metadata??=Symbol("metadata"),ki.litPropertyMetadata??=new WeakMap;var Vt=class extends HTMLElement{static addInitializer(n){this._$Ei(),(this.l??=[]).push(n)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(n,r=Vo){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(n)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(n,r),!r.noAccessor){let a=Symbol(),h=this.getPropertyDescriptor(n,a,r);h!==void 0&&ia(this.prototype,n,h)}}static getPropertyDescriptor(n,r,a){let{get:h,set:d}=na(this.prototype,n)??{get(){return this[r]},set(f){this[r]=f}};return{get:h,set(f){let z=h?.call(this);d?.call(this,f),this.requestUpdate(n,z,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(n){return this.elementProperties.get(n)??Vo}static _$Ei(){if(this.hasOwnProperty(Ve("elementProperties")))return;let n=sa(this);n.finalize(),n.l!==void 0&&(this.l=[...n.l]),this.elementProperties=new Map(n.elementProperties)}static finalize(){if(this.hasOwnProperty(Ve("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ve("properties"))){let r=this.properties,a=[...oa(r),...ra(r)];for(let h of a)this.createProperty(h,r[h])}let n=this[Symbol.metadata];if(n!==null){let r=litPropertyMetadata.get(n);if(r!==void 0)for(let[a,h]of r)this.elementProperties.set(a,h)}this._$Eh=new Map;for(let[r,a]of this.elementProperties){let h=this._$Eu(r,a);h!==void 0&&this._$Eh.set(h,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(n){let r=[];if(Array.isArray(n)){let a=new Set(n.flat(1/0).reverse());for(let h of a)r.unshift(cn(h))}else n!==void 0&&r.push(cn(n));return r}static _$Eu(n,r){let a=r.attribute;return a===!1?void 0:typeof a=="string"?a:typeof n=="string"?n.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(n=>n(this))}addController(n){(this._$EO??=new Set).add(n),this.renderRoot!==void 0&&this.isConnected&&n.hostConnected?.()}removeController(n){this._$EO?.delete(n)}_$E_(){let n=new Map,r=this.constructor.elementProperties;for(let a of r.keys())this.hasOwnProperty(a)&&(n.set(a,this[a]),delete this[a]);n.size>0&&(this._$Ep=n)}createRenderRoot(){let n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Wo(n,this.constructor.elementStyles),n}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(n=>n.hostConnected?.())}enableUpdating(n){}disconnectedCallback(){this._$EO?.forEach(n=>n.hostDisconnected?.())}attributeChangedCallback(n,r,a){this._$AK(n,a)}_$ET(n,r){let a=this.constructor.elementProperties.get(n),h=this.constructor._$Eu(n,a);if(h!==void 0&&a.reflect===!0){let d=(a.converter?.toAttribute!==void 0?a.converter:dn).toAttribute(r,a.type);this._$Em=n,d==null?this.removeAttribute(h):this.setAttribute(h,d),this._$Em=null}}_$AK(n,r){let a=this.constructor,h=a._$Eh.get(n);if(h!==void 0&&this._$Em!==h){let d=a.getPropertyOptions(h),f=typeof d.converter=="function"?{fromAttribute:d.converter}:d.converter?.fromAttribute!==void 0?d.converter:dn;this._$Em=h;let z=f.fromAttribute(r,d.type);this[h]=z??this._$Ej?.get(h)??z,this._$Em=null}}requestUpdate(n,r,a,h=!1,d){if(n!==void 0){let f=this.constructor;if(h===!1&&(d=this[n]),a??=f.getPropertyOptions(n),!((a.hasChanged??Ko)(d,r)||a.useDefault&&a.reflect&&d===this._$Ej?.get(n)&&!this.hasAttribute(f._$Eu(n,a))))return;this.C(n,r,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(n,r,{useDefault:a,reflect:h,wrapped:d},f){a&&!(this._$Ej??=new Map).has(n)&&(this._$Ej.set(n,f??r??this[n]),d!==!0||f!==void 0)||(this._$AL.has(n)||(this.hasUpdated||a||(r=void 0),this._$AL.set(n,r)),h===!0&&this._$Em!==n&&(this._$Eq??=new Set).add(n))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let n=this.scheduleUpdate();return n!=null&&await n,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[h,d]of this._$Ep)this[h]=d;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[h,d]of a){let{wrapped:f}=d,z=this[h];f!==!0||this._$AL.has(h)||z===void 0||this.C(h,void 0,d,z)}}let n=!1,r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),this._$EO?.forEach(a=>a.hostUpdate?.()),this.update(r)):this._$EM()}catch(a){throw n=!1,this._$EM(),a}n&&this._$AE(r)}willUpdate(n){}_$AE(n){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(n)),this.updated(n)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(n){return!0}update(n){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(n){}firstUpdated(n){}};Vt.elementStyles=[],Vt.shadowRootOptions={mode:"open"},Vt[Ve("elementProperties")]=new Map,Vt[Ve("finalized")]=new Map,la?.({ReactiveElement:Vt}),(ki.reactiveElementVersions??=[]).push("2.1.2");var vn=globalThis,Go=c=>c,$i=vn.trustedTypes,Yo=$i?$i.createPolicy("lit-html",{createHTML:c=>c}):void 0,ir="$lit$",Xt=`lit$${Math.random().toFixed(9).slice(2)}$`,nr="?"+Xt,ha=`<${nr}>`,le=document,Ge=()=>le.createComment(""),Ye=c=>c===null||typeof c!="object"&&typeof c!="function",yn=Array.isArray,ca=c=>yn(c)||typeof c?.[Symbol.iterator]=="function",un=`[ 	
\f\r]`,Ke=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Jo=/-->/g,Xo=/>/g,se=RegExp(`>|${un}(?:([^\\s"'>=/]+)(${un}*=${un}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Qo=/'/g,tr=/"/g,or=/^(?:script|style|textarea|title)$/i,bn=c=>(n,...r)=>({_$litType$:c,strings:n,values:r}),v=bn(1),Ta=bn(2),za=bn(3),Kt=Symbol.for("lit-noChange"),vt=Symbol.for("lit-nothing"),er=new WeakMap,ae=le.createTreeWalker(le,129);function rr(c,n){if(!yn(c)||!c.hasOwnProperty("raw"))throw Error("invalid template strings array");return Yo!==void 0?Yo.createHTML(n):n}var da=(c,n)=>{let r=c.length-1,a=[],h,d=n===2?"<svg>":n===3?"<math>":"",f=Ke;for(let z=0;z<r;z++){let A=c[z],b,K,H=-1,et=0;for(;et<A.length&&(f.lastIndex=et,K=f.exec(A),K!==null);)et=f.lastIndex,f===Ke?K[1]==="!--"?f=Jo:K[1]!==void 0?f=Xo:K[2]!==void 0?(or.test(K[2])&&(h=RegExp("</"+K[2],"g")),f=se):K[3]!==void 0&&(f=se):f===se?K[0]===">"?(f=h??Ke,H=-1):K[1]===void 0?H=-2:(H=f.lastIndex-K[2].length,b=K[1],f=K[3]===void 0?se:K[3]==='"'?tr:Qo):f===tr||f===Qo?f=se:f===Jo||f===Xo?f=Ke:(f=se,h=void 0);let U=f===se&&c[z+1].startsWith("/>")?" ":"";d+=f===Ke?A+ha:H>=0?(a.push(b),A.slice(0,H)+ir+A.slice(H)+Xt+U):A+Xt+(H===-2?z:U)}return[rr(c,d+(c[r]||"<?>")+(n===2?"</svg>":n===3?"</math>":"")),a]},Je=class c{constructor({strings:n,_$litType$:r},a){let h;this.parts=[];let d=0,f=0,z=n.length-1,A=this.parts,[b,K]=da(n,r);if(this.el=c.createElement(b,a),ae.currentNode=this.el.content,r===2||r===3){let H=this.el.content.firstChild;H.replaceWith(...H.childNodes)}for(;(h=ae.nextNode())!==null&&A.length<z;){if(h.nodeType===1){if(h.hasAttributes())for(let H of h.getAttributeNames())if(H.endsWith(ir)){let et=K[f++],U=h.getAttribute(H).split(Xt),Tt=/([.?@])?(.*)/.exec(et);A.push({type:1,index:d,name:Tt[2],strings:U,ctor:Tt[1]==="."?pn:Tt[1]==="?"?mn:Tt[1]==="@"?_n:Pe}),h.removeAttribute(H)}else H.startsWith(Xt)&&(A.push({type:6,index:d}),h.removeAttribute(H));if(or.test(h.tagName)){let H=h.textContent.split(Xt),et=H.length-1;if(et>0){h.textContent=$i?$i.emptyScript:"";for(let U=0;U<et;U++)h.append(H[U],Ge()),ae.nextNode(),A.push({type:2,index:++d});h.append(H[et],Ge())}}}else if(h.nodeType===8)if(h.data===nr)A.push({type:2,index:d});else{let H=-1;for(;(H=h.data.indexOf(Xt,H+1))!==-1;)A.push({type:7,index:d}),H+=Xt.length-1}d++}}static createElement(n,r){let a=le.createElement("template");return a.innerHTML=n,a}};function $e(c,n,r=c,a){if(n===Kt)return n;let h=a!==void 0?r._$Co?.[a]:r._$Cl,d=Ye(n)?void 0:n._$litDirective$;return h?.constructor!==d&&(h?._$AO?.(!1),d===void 0?h=void 0:(h=new d(c),h._$AT(c,r,a)),a!==void 0?(r._$Co??=[])[a]=h:r._$Cl=h),h!==void 0&&(n=$e(c,h._$AS(c,n.values),h,a)),n}var fn=class{constructor(n,r){this._$AV=[],this._$AN=void 0,this._$AD=n,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(n){let{el:{content:r},parts:a}=this._$AD,h=(n?.creationScope??le).importNode(r,!0);ae.currentNode=h;let d=ae.nextNode(),f=0,z=0,A=a[0];for(;A!==void 0;){if(f===A.index){let b;A.type===2?b=new Xe(d,d.nextSibling,this,n):A.type===1?b=new A.ctor(d,A.name,A.strings,this,n):A.type===6&&(b=new gn(d,this,n)),this._$AV.push(b),A=a[++z]}f!==A?.index&&(d=ae.nextNode(),f++)}return ae.currentNode=le,h}p(n){let r=0;for(let a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(n,a,r),r+=a.strings.length-2):a._$AI(n[r])),r++}},Xe=class c{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(n,r,a,h){this.type=2,this._$AH=vt,this._$AN=void 0,this._$AA=n,this._$AB=r,this._$AM=a,this.options=h,this._$Cv=h?.isConnected??!0}get parentNode(){let n=this._$AA.parentNode,r=this._$AM;return r!==void 0&&n?.nodeType===11&&(n=r.parentNode),n}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(n,r=this){n=$e(this,n,r),Ye(n)?n===vt||n==null||n===""?(this._$AH!==vt&&this._$AR(),this._$AH=vt):n!==this._$AH&&n!==Kt&&this._(n):n._$litType$!==void 0?this.$(n):n.nodeType!==void 0?this.T(n):ca(n)?this.k(n):this._(n)}O(n){return this._$AA.parentNode.insertBefore(n,this._$AB)}T(n){this._$AH!==n&&(this._$AR(),this._$AH=this.O(n))}_(n){this._$AH!==vt&&Ye(this._$AH)?this._$AA.nextSibling.data=n:this.T(le.createTextNode(n)),this._$AH=n}$(n){let{values:r,_$litType$:a}=n,h=typeof a=="number"?this._$AC(n):(a.el===void 0&&(a.el=Je.createElement(rr(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===h)this._$AH.p(r);else{let d=new fn(h,this),f=d.u(this.options);d.p(r),this.T(f),this._$AH=d}}_$AC(n){let r=er.get(n.strings);return r===void 0&&er.set(n.strings,r=new Je(n)),r}k(n){yn(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,a,h=0;for(let d of n)h===r.length?r.push(a=new c(this.O(Ge()),this.O(Ge()),this,this.options)):a=r[h],a._$AI(d),h++;h<r.length&&(this._$AR(a&&a._$AB.nextSibling,h),r.length=h)}_$AR(n=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);n!==this._$AB;){let a=Go(n).nextSibling;Go(n).remove(),n=a}}setConnected(n){this._$AM===void 0&&(this._$Cv=n,this._$AP?.(n))}},Pe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(n,r,a,h,d){this.type=1,this._$AH=vt,this._$AN=void 0,this.element=n,this.name=r,this._$AM=h,this.options=d,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=vt}_$AI(n,r=this,a,h){let d=this.strings,f=!1;if(d===void 0)n=$e(this,n,r,0),f=!Ye(n)||n!==this._$AH&&n!==Kt,f&&(this._$AH=n);else{let z=n,A,b;for(n=d[0],A=0;A<d.length-1;A++)b=$e(this,z[a+A],r,A),b===Kt&&(b=this._$AH[A]),f||=!Ye(b)||b!==this._$AH[A],b===vt?n=vt:n!==vt&&(n+=(b??"")+d[A+1]),this._$AH[A]=b}f&&!h&&this.j(n)}j(n){n===vt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,n??"")}},pn=class extends Pe{constructor(){super(...arguments),this.type=3}j(n){this.element[this.name]=n===vt?void 0:n}},mn=class extends Pe{constructor(){super(...arguments),this.type=4}j(n){this.element.toggleAttribute(this.name,!!n&&n!==vt)}},_n=class extends Pe{constructor(n,r,a,h,d){super(n,r,a,h,d),this.type=5}_$AI(n,r=this){if((n=$e(this,n,r,0)??vt)===Kt)return;let a=this._$AH,h=n===vt&&a!==vt||n.capture!==a.capture||n.once!==a.once||n.passive!==a.passive,d=n!==vt&&(a===vt||h);h&&this.element.removeEventListener(this.name,this,a),d&&this.element.addEventListener(this.name,this,n),this._$AH=n}handleEvent(n){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,n):this._$AH.handleEvent(n)}},gn=class{constructor(n,r,a){this.element=n,this.type=6,this._$AN=void 0,this._$AM=r,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(n){$e(this,n)}};var ua=vn.litHtmlPolyfillSupport;ua?.(Je,Xe),(vn.litHtmlVersions??=[]).push("3.3.3");var sr=(c,n,r)=>{let a=r?.renderBefore??n,h=a._$litPart$;if(h===void 0){let d=r?.renderBefore??null;a._$litPart$=h=new Xe(n.insertBefore(Ge(),d),d,void 0,r??{})}return h._$AI(c),h};var xn=globalThis,ct=class extends Vt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let n=super.createRenderRoot();return this.renderOptions.renderBefore??=n.firstChild,n}update(n){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(n),this._$Do=sr(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Kt}};ct._$litElement$=!0,ct.finalized=!0,xn.litElementHydrateSupport?.({LitElement:ct});var fa=xn.litElementPolyfillSupport;fa?.({LitElement:ct});(xn.litElementVersions??=[]).push("4.2.2");var ar={tab_radio:"Radio",tab_messages:"Messages",tab_nodes:"Nodes",tab_map:"Map",tab_config:"Settings",connected:"Connected",disconnected:"Disconnected",connecting:"Connecting\u2026",no_entries:"No Meshtastic radio is configured. Add the Meshtastic Manager integration in Settings \u2192 Devices & services.",not_connected_hint:"The radio is not connected. Home Assistant keeps retrying in the background.",last_error:"Last error",device:"Device",status:"Status",long_name:"Long name",short_name:"Short name",node_id:"Node ID",hardware:"Hardware",firmware:"Firmware",role:"Role",region:"Region",preset:"Modem preset",connection:"Connection",uptime:"Uptime",battery:"Battery",powered:"External power",voltage:"Voltage",channel_util:"Channel utilization",air_util:"Airtime TX",packets:"Packets",sent:"sent",received:"received",bad:"bad",relayed:"relayed",nodes_online:"Nodes online",nodes_known:"Nodes known",channels:"Channels",channel:"Channel",primary:"Primary",secondary:"Secondary",disabled:"Disabled",psk:"Encryption",psk_none:"none",psk_default:"default key",psk_custom:"custom key",actions:"Actions",reconnect:"Reconnect",reboot:"Reboot",shutdown:"Shut down",set_time:"Sync clock",reset_nodedb:"Reset node database",factory_reset_config:"Factory reset (config)",factory_reset_device:"Factory reset (full)",reboot_ota:"Reboot to OTA",confirm:"Confirm",cancel:"Cancel",confirm_action:"Are you sure? This is sent to the radio immediately.",done:"Done",error:"Error",conversations:"Conversations",direct:"Direct messages",no_messages:"No messages yet.",type_message:"Type a message\u2026",send:"Send",bytes:"bytes",st_pending:"Sending\u2026",st_sent:"Sent (heard by the mesh)",st_delivered:"Delivered",st_failed:"Failed",st_unconfirmed:"Sent, no confirmation received",reply:"Reply",delete_conversation:"Delete history",select_conversation:"Select a conversation.",hops:"hops",direct_hop:"direct",via_mqtt:"via MQTT",search:"Search\u2026",name:"Name",last_heard:"Last heard",distance:"Distance",snr:"SNR",favorites_only:"Favorites only",heard_within:"Heard within",any_time:"any time",h1:"1 h",h24:"24 h",d7:"7 days",never:"never",ago:"ago",just_now:"just now",you:"this radio",send_dm:"Send message",traceroute:"Traceroute",request_position:"Request position",request_telemetry:"Request telemetry",exchange_info:"Exchange user info",favorite:"Favorite",unfavorite:"Unfavorite",ignore:"Ignore",unignore:"Unignore",remove_node:"Remove from database",request_sent:"Request sent; the answer will appear when the node responds.",position:"Position",altitude:"Altitude",metrics:"Device metrics",environment:"Environment",traceroutes:"Traceroutes",towards:"Towards",back:"Back",no_traceroutes:"No traceroutes yet.",public_key:"Public key",close:"Close",ignored:"ignored",no_positions:"No node has reported a position yet.",nodes_without_position:"nodes without position",owner:"Owner",licensed:"Licensed operator (HAM)",unmessagable:"Unmessageable",save:"Save",saved:"Saved. The radio may reboot to apply the change.",reboot_warning:"Saving some sections (LoRa, device, network, Bluetooth) reboots the radio.",config_sections:"Radio configuration",module_sections:"Modules",share_url:"Channel share URL",generate_key:"Random key",default_key:"Default key",no_key:"No encryption",admin_only:"Only administrators can change the radio configuration.",unsaved:"Unsaved changes",fixed_position:"Fixed position",set_fixed:"Set fixed position",remove_fixed:"Remove fixed position",latitude:"Latitude",longitude:"Longitude",use_home:"Use Home Assistant location",add_channel:"Add channel",join_link:"Join from link",share_all:"Share all",channels_full:"All 8 channel slots are in use. Delete a channel to add another.",share:"Share",edit:"Edit",delete:"Delete",off:"off",precise:"precise",muted:"Muted",position_precision:"Position shared on this channel",mqtt_uplink:"MQTT uplink (send to the internet)",mqtt_downlink:"MQTT downlink (receive from the internet)",err_name_required:"Enter a channel name.",err_name_long:"The name is too long (max 11 bytes; Polish letters take 2).",err_name_taken:"A channel with this name already exists.",err_key:"The key must be 0, 1, 16 or 32 bytes (base64).",saved_channel:"Channel saved.",channel_added:"Channel added. Share it so others can join.",channel_deleted:"Channel deleted. The following channels moved up by one.",delete_channel_q:"Delete channel",delete_channel_note:"Following channels move up one slot.",replace_warning:"This replaces ALL channels and the LoRa settings (region, preset) with the ones from the link. The radio will reboot.",added:"Added",skipped:"Skipped (already present or unnamed)",lora_applied:"LoRa settings applied, the radio is rebooting",copied:"Copied to clipboard",copy:"Copy",edit_channel:"Edit channel",primary_name_hint:"empty = modem preset name",key_keep:"Keep current",key_custom:"Own key",key_hint_default:"Public default key \u2014 everyone on the default channel can read it.",key_hint_none:"No encryption \u2014 anyone can read these messages.",key_hint_keep:"The current private key stays unchanged.",join_link_hint:"Paste a channel link from the Meshtastic app (Share channel / QR code).",import_add:"Add the channels from the link to mine",import_replace:"Replace all my channels and LoRa settings",join:"Join",all_channels:"all channels",share_hint:"Scan in the Meshtastic app to add this channel. The link contains the key \u2014 share it only with people who should read the channel.",share_all_hint:"Contains all channels and the LoRa settings. Scanning it replaces the channels on the other radio."},wn={tab_radio:"Radio",tab_messages:"Wiadomo\u015Bci",tab_nodes:"W\u0119z\u0142y",tab_map:"Mapa",tab_config:"Ustawienia",connected:"Po\u0142\u0105czono",disconnected:"Roz\u0142\u0105czono",connecting:"\u0141\u0105czenie\u2026",no_entries:"Nie skonfigurowano radia Meshtastic. Dodaj integracj\u0119 Meshtastic Manager w Ustawienia \u2192 Urz\u0105dzenia i us\u0142ugi.",not_connected_hint:"Radio nie jest po\u0142\u0105czone. Home Assistant ponawia pr\xF3by w tle.",last_error:"Ostatni b\u0142\u0105d",device:"Urz\u0105dzenie",status:"Stan",long_name:"Pe\u0142na nazwa",short_name:"Skr\xF3t",node_id:"ID w\u0119z\u0142a",hardware:"Sprz\u0119t",firmware:"Firmware",role:"Rola",region:"Region",preset:"Preset modemu",connection:"Po\u0142\u0105czenie",uptime:"Czas pracy",battery:"Bateria",powered:"Zasilanie zewn\u0119trzne",voltage:"Napi\u0119cie",channel_util:"Wykorzystanie kana\u0142u",air_util:"Czas nadawania TX",packets:"Pakiety",sent:"wys\u0142ane",received:"odebrane",bad:"b\u0142\u0119dne",relayed:"przekazane",nodes_online:"W\u0119z\u0142y online",nodes_known:"Znane w\u0119z\u0142y",channels:"Kana\u0142y",channel:"Kana\u0142",primary:"G\u0142\xF3wny",secondary:"Dodatkowy",disabled:"Wy\u0142\u0105czony",psk:"Szyfrowanie",psk_none:"brak",psk_default:"klucz domy\u015Blny",psk_custom:"w\u0142asny klucz",actions:"Akcje",reconnect:"Po\u0142\u0105cz ponownie",reboot:"Restart",shutdown:"Wy\u0142\u0105cz",set_time:"Synchronizuj zegar",reset_nodedb:"Wyczy\u015B\u0107 baz\u0119 w\u0119z\u0142\xF3w",factory_reset_config:"Reset fabryczny (konfiguracja)",factory_reset_device:"Reset fabryczny (pe\u0142ny)",reboot_ota:"Restart do OTA",confirm:"Potwierd\u017A",cancel:"Anuluj",confirm_action:"Na pewno? Polecenie zostanie od razu wys\u0142ane do radia.",done:"Gotowe",error:"B\u0142\u0105d",conversations:"Rozmowy",direct:"Wiadomo\u015Bci prywatne",no_messages:"Brak wiadomo\u015Bci.",type_message:"Napisz wiadomo\u015B\u0107\u2026",send:"Wy\u015Blij",bytes:"bajt\xF3w",st_pending:"Wysy\u0142anie\u2026",st_sent:"Wys\u0142ano (us\u0142yszane przez sie\u0107)",st_delivered:"Dostarczono",st_failed:"Nie dostarczono",st_unconfirmed:"Wys\u0142ano, brak potwierdzenia",reply:"Odpowiedz",delete_conversation:"Usu\u0144 histori\u0119",select_conversation:"Wybierz rozmow\u0119.",hops:"skok\xF3w",direct_hop:"bezpo\u015Brednio",via_mqtt:"przez MQTT",search:"Szukaj\u2026",name:"Nazwa",last_heard:"Ostatnio s\u0142yszany",distance:"Odleg\u0142o\u015B\u0107",snr:"SNR",favorites_only:"Tylko ulubione",heard_within:"S\u0142yszane w ci\u0105gu",any_time:"dowolnie",h1:"1 h",h24:"24 h",d7:"7 dni",never:"nigdy",ago:"temu",just_now:"przed chwil\u0105",you:"to radio",send_dm:"Wy\u015Blij wiadomo\u015B\u0107",traceroute:"Traceroute",request_position:"Popro\u015B o pozycj\u0119",request_telemetry:"Popro\u015B o telemetri\u0119",exchange_info:"Wymie\u0144 dane u\u017Cytkownika",favorite:"Dodaj do ulubionych",unfavorite:"Usu\u0144 z ulubionych",ignore:"Ignoruj",unignore:"Przesta\u0144 ignorowa\u0107",remove_node:"Usu\u0144 z bazy",request_sent:"Wys\u0142ano zapytanie \u2014 wynik pojawi si\u0119, gdy w\u0119ze\u0142 odpowie.",position:"Pozycja",altitude:"Wysoko\u015B\u0107",metrics:"Parametry urz\u0105dzenia",environment:"\u015Arodowisko",traceroutes:"Traceroute",towards:"Tam",back:"Z powrotem",no_traceroutes:"Brak wynik\xF3w traceroute.",public_key:"Klucz publiczny",close:"Zamknij",ignored:"ignorowany",no_positions:"\u017Baden w\u0119ze\u0142 nie poda\u0142 jeszcze pozycji.",nodes_without_position:"w\u0119z\u0142\xF3w bez pozycji",owner:"W\u0142a\u015Bciciel",licensed:"Licencjonowany kr\xF3tkofalowiec (HAM)",unmessagable:"Nie przyjmuje wiadomo\u015Bci",save:"Zapisz",saved:"Zapisano. Radio mo\u017Ce si\u0119 zrestartowa\u0107, \u017Ceby zastosowa\u0107 zmian\u0119.",reboot_warning:"Zapis niekt\xF3rych sekcji (LoRa, urz\u0105dzenie, sie\u0107, Bluetooth) restartuje radio.",config_sections:"Konfiguracja radia",module_sections:"Modu\u0142y",share_url:"Link do udost\u0119pnienia kana\u0142\xF3w",generate_key:"Losowy klucz",default_key:"Klucz domy\u015Blny",no_key:"Bez szyfrowania",admin_only:"Tylko administratorzy mog\u0105 zmienia\u0107 konfiguracj\u0119 radia.",unsaved:"Niezapisane zmiany",fixed_position:"Sta\u0142a pozycja",set_fixed:"Ustaw sta\u0142\u0105 pozycj\u0119",remove_fixed:"Usu\u0144 sta\u0142\u0105 pozycj\u0119",latitude:"Szeroko\u015B\u0107",longitude:"D\u0142ugo\u015B\u0107",use_home:"U\u017Cyj lokalizacji Home Assistant",add_channel:"Dodaj kana\u0142",join_link:"Do\u0142\u0105cz z linku",share_all:"Udost\u0119pnij wszystkie",channels_full:"Wszystkie 8 slot\xF3w kana\u0142\xF3w jest zaj\u0119tych. Usu\u0144 kana\u0142, \u017Ceby doda\u0107 nowy.",share:"Udost\u0119pnij",edit:"Edytuj",delete:"Usu\u0144",off:"wy\u0142\u0105czona",precise:"dok\u0142adna",muted:"Wyciszony",position_precision:"Pozycja wysy\u0142ana na tym kanale",mqtt_uplink:"MQTT uplink (wysy\u0142aj do internetu)",mqtt_downlink:"MQTT downlink (odbieraj z internetu)",err_name_required:"Podaj nazw\u0119 kana\u0142u.",err_name_long:"Nazwa jest za d\u0142uga (maks. 11 bajt\xF3w; polskie litery zajmuj\u0105 2).",err_name_taken:"Kana\u0142 o tej nazwie ju\u017C istnieje.",err_key:"Klucz musi mie\u0107 0, 1, 16 lub 32 bajty (base64).",saved_channel:"Zapisano kana\u0142.",channel_added:"Dodano kana\u0142. Udost\u0119pnij go, \u017Ceby inni mogli do\u0142\u0105czy\u0107.",channel_deleted:"Usuni\u0119to kana\u0142. Kolejne kana\u0142y przesun\u0119\u0142y si\u0119 o jeden w g\xF3r\u0119.",delete_channel_q:"Usun\u0105\u0107 kana\u0142",delete_channel_note:"Kolejne kana\u0142y przesun\u0105 si\u0119 o jedno miejsce w g\xF3r\u0119.",replace_warning:"To zast\u0105pi WSZYSTKIE kana\u0142y i ustawienia LoRa (region, preset) tymi z linku. Radio si\u0119 zrestartuje.",added:"Dodano",skipped:"Pomini\u0119to (ju\u017C s\u0105 albo bez nazwy)",lora_applied:"zastosowano ustawienia LoRa, radio si\u0119 restartuje",copied:"Skopiowano do schowka",copy:"Kopiuj",edit_channel:"Edycja kana\u0142u",primary_name_hint:"puste = nazwa presetu modemu",key_keep:"Zostaw obecny",key_custom:"W\u0142asny klucz",key_hint_default:"Publiczny klucz domy\u015Blny \u2014 ka\u017Cdy na kanale domy\u015Blnym mo\u017Ce czyta\u0107 te wiadomo\u015Bci.",key_hint_none:"Bez szyfrowania \u2014 ka\u017Cdy mo\u017Ce czyta\u0107 te wiadomo\u015Bci.",key_hint_keep:"Obecny prywatny klucz zostaje bez zmian.",join_link_hint:"Wklej link kana\u0142u z aplikacji Meshtastic (Udost\u0119pnij kana\u0142 / kod QR).",import_add:"Dodaj kana\u0142y z linku do moich",import_replace:"Zast\u0105p wszystkie moje kana\u0142y i ustawienia LoRa",join:"Do\u0142\u0105cz",all_channels:"wszystkie kana\u0142y",share_hint:"Zeskanuj w aplikacji Meshtastic, \u017Ceby doda\u0107 ten kana\u0142. Link zawiera klucz \u2014 udost\u0119pniaj go tylko osobom, kt\xF3re maj\u0105 czyta\u0107 kana\u0142.",share_all_hint:"Zawiera wszystkie kana\u0142y i ustawienia LoRa. Zeskanowanie zast\u0119puje kana\u0142y w drugim radiu."},lr={device:"Urz\u0105dzenie",position:"Pozycja",power:"Zasilanie",network:"Sie\u0107",display:"Wy\u015Bwietlacz",lora:"LoRa",bluetooth:"Bluetooth",security:"Bezpiecze\u0144stwo",mqtt:"MQTT",serial:"Port szeregowy",external_notification:"Powiadomienia zewn\u0119trzne",store_forward:"Store & Forward",range_test:"Test zasi\u0119gu",telemetry:"Telemetria",canned_message:"Gotowe wiadomo\u015Bci",audio:"Audio",remote_hardware:"Zdalny sprz\u0119t",neighbor_info:"Informacje o s\u0105siadach",ambient_lighting:"O\u015Bwietlenie",detection_sensor:"Czujnik detekcji",paxcounter:"Paxcounter",traffic_management:"Zarz\u0105dzanie ruchem",statusmessage:"Wiadomo\u015B\u0107 statusowa"};function hr(c){let n=c&&c.startsWith("pl")?wn:ar,r=a=>n[a]??ar[a]??a;return r.lang=n===wn?"pl":"en",r.section=a=>n===wn&&lr[a]?lr[a]:Qe(a),r}function Qe(c){let n=c.replace(/_/g," ");return n.charAt(0).toUpperCase()+n.slice(1)}var xt=ft`
  :host {
    color: var(--primary-text-color);
    font-family: var(--ha-font-family-body, Roboto, sans-serif);
  }
  .card {
    background: var(--card-background-color, #fff);
    border-radius: var(--ha-card-border-radius, 12px);
    border: 1px solid var(--ha-card-border-color, var(--divider-color, #e0e0e0));
    box-shadow: var(--ha-card-box-shadow, none);
    padding: 16px;
  }
  .card h2 {
    margin: 0 0 12px;
    font-size: 1.1em;
    font-weight: 500;
  }
  .muted {
    color: var(--secondary-text-color);
  }
  .small {
    font-size: 0.85em;
  }
  .row {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .grow {
    flex: 1;
    min-width: 0;
  }
  dl.kv {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 6px 16px;
    margin: 0;
  }
  dl.kv dt {
    color: var(--secondary-text-color);
  }
  dl.kv dd {
    margin: 0;
    overflow-wrap: anywhere;
  }
  button.btn {
    font: inherit;
    border: 1px solid var(--divider-color);
    background: var(--card-background-color);
    color: var(--primary-text-color);
    border-radius: 8px;
    padding: 6px 12px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  button.btn:hover:not(:disabled) {
    background: var(--secondary-background-color, rgba(127, 127, 127, 0.1));
  }
  button.btn:disabled {
    opacity: 0.5;
    cursor: default;
  }
  button.btn.primary {
    background: var(--primary-color);
    border-color: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }
  button.btn.danger {
    color: var(--error-color, #db4437);
    border-color: var(--error-color, #db4437);
  }
  button.icon {
    border: none;
    background: none;
    color: inherit;
    cursor: pointer;
    padding: 4px;
    border-radius: 50%;
    display: inline-flex;
  }
  input,
  select,
  textarea {
    font: inherit;
    color: var(--primary-text-color);
    background: var(--input-fill-color, var(--secondary-background-color, transparent));
    border: 1px solid var(--divider-color);
    border-radius: 6px;
    padding: 6px 8px;
    box-sizing: border-box;
  }
  input:focus,
  select:focus,
  textarea:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: -1px;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th,
  td {
    text-align: left;
    padding: 6px 8px;
    border-bottom: 1px solid var(--divider-color);
    white-space: nowrap;
  }
  th {
    font-weight: 500;
    color: var(--secondary-text-color);
    cursor: pointer;
    user-select: none;
  }
  tr.clickable {
    cursor: pointer;
  }
  tr.clickable:hover {
    background: var(--secondary-background-color, rgba(127, 127, 127, 0.08));
  }
  .badge {
    display: inline-block;
    min-width: 18px;
    padding: 0 6px;
    border-radius: 9px;
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
    font-size: 0.75em;
    line-height: 18px;
    text-align: center;
  }
  .chip {
    display: inline-block;
    padding: 1px 8px;
    border-radius: 10px;
    font-size: 0.8em;
    background: var(--secondary-background-color, rgba(127, 127, 127, 0.15));
  }
  .ok {
    color: var(--success-color, #43a047);
  }
  .warn {
    color: var(--warning-color, #ffa600);
  }
  .err {
    color: var(--error-color, #db4437);
  }
  .avatar {
    flex: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    font-weight: 600;
    color: #fff;
    overflow: hidden;
  }
`;function he(c){return`hsl(${(Math.imul(c>>>0,2654435761)>>>0)%360}, 55%, 45%)`}var Qt=c=>"!"+(c>>>0).toString(16).padStart(8,"0");function te(c,n){let r=c?.user;return r?.longName?r.longName:Qt(n??c?.num??0)}function Nt(c,n){let r=c?.user;return r?.shortName?r.shortName:Qt(n??c?.num??0).slice(-4)}function Le(c,n){if(!c)return n("never");let r=Math.max(0,Date.now()/1e3-c);if(r<60)return n("just_now");let a=n.lang==="pl"?[[86400,"d"],[3600,"h"],[60,"min"]]:[[86400,"d"],[3600,"h"],[60,"min"]];for(let[h,d]of a)if(r>=h)return`${Math.floor(r/h)} ${d} ${n("ago")}`;return n("just_now")}function Te(c,n){let r=new Date(c*1e3),a=new Date,h=r.toDateString()===a.toDateString(),d=r.toLocaleTimeString(n,{hour:"2-digit",minute:"2-digit"});return h?d:r.toLocaleDateString(n,{day:"numeric",month:"short"})+" "+d}function Pi(c){if(c==null)return"\u2014";let n=Math.floor(c/86400),r=Math.floor(c%86400/3600),a=Math.floor(c%3600/60);return n?`${n}d ${r}h`:r?`${r}h ${a}m`:`${a}m`}function Rt(c){let n=c?.position;if(!n)return null;let r=n.latitude??(n.latitudeI!=null?n.latitudeI*1e-7:null),a=n.longitude??(n.longitudeI!=null?n.longitudeI*1e-7:null);return r==null||a==null||r===0&&a===0?null:{lat:r,lon:a,alt:n.altitude}}function Li(c,n){if(!c||!n)return null;let r=6371,a=(n.lat-c.lat)*Math.PI/180,h=(n.lon-c.lon)*Math.PI/180,d=Math.sin(a/2)**2+Math.cos(c.lat*Math.PI/180)*Math.cos(n.lat*Math.PI/180)*Math.sin(h/2)**2;return 2*r*Math.asin(Math.sqrt(d))}function Ti(c){return c==null?"\u2014":c<1?`${Math.round(c*1e3)} m`:`${c.toFixed(c<10?1:0)} km`}var ze=c=>new TextEncoder().encode(c).length;function Gt(c,n,r){let a=c?.settings?.name;if(a)return a;if(c?.role==="PRIMARY"){let h=n?.modem_preset;return h?kn(h):r("primary")}return`${r("channel")} ${c?.index??""}`}function kn(c){return c.split("_").map(n=>n.charAt(0)+n.slice(1).toLowerCase()).join("")}function Me(c){return c?c.length<=4?c==="AA=="?"psk_none":"psk_default":"psk_custom":"psk_none"}function zi(){let c=new Uint8Array(32);return crypto.getRandomValues(c),btoa(String.fromCharCode(...c))}function Ae(c,n){if(c==null)return"";if(c===0)return n("direct_hop");if(n.lang!=="pl")return`${c} ${c===1?"hop":"hops"}`;let r=c%10,a=c%100,h=c===1?"skok":r>=2&&r<=4&&(a<12||a>14)?"skoki":"skok\xF3w";return`${c} ${h}`}var pa=2*3600,$n=class extends ct{static properties={panel:{attribute:!1},rev:{type:Number}};render(){let n=this.panel,r=n.t,a=n.data,h=n.myNode||{},d=h.user||{},f=h.deviceMetrics||{},z=a.local_stats||{},A=a.lora||{},b=a.metadata||{},K=Date.now()/1e3,H=[...n.nodes.values()].filter(kt=>kt.num!==n.myNum),et=H.filter(kt=>kt.lastHeard&&K-kt.lastHeard<pa).length,U=f.batteryLevel,Tt=(a.channels||[]).filter(kt=>kt.role&&kt.role!=="DISABLED");return v`
      <div class="grid">
        <div class="card">
          <h2>${r("device")}</h2>
          <dl class="kv">
            <dt>${r("long_name")}</dt><dd>${d.longName||"\u2014"}</dd>
            <dt>${r("short_name")}</dt><dd>${d.shortName||"\u2014"}</dd>
            <dt>${r("node_id")}</dt><dd>${n.myNum!=null?Qt(n.myNum):"\u2014"}</dd>
            <dt>${r("hardware")}</dt><dd>${d.hwModel||"\u2014"}</dd>
            <dt>${r("firmware")}</dt><dd>${b.firmware_version||"\u2014"}</dd>
            <dt>${r("role")}</dt><dd>${d.role||"CLIENT"}</dd>
            <dt>${r("region")}</dt><dd>${A.region||"\u2014"}</dd>
            <dt>${r("preset")}</dt><dd>${A.modem_preset?kn(A.modem_preset):"\u2014"}</dd>
          </dl>
        </div>

        <div class="card">
          <h2>${r("status")}</h2>
          <dl class="kv">
            <dt>${r("connection")}</dt>
            <dd>
              <span class=${a.status.connected?"ok":"err"}>
                ${a.status.connected?r("connected"):r("disconnected")}
              </span>
              <span class="muted small">${a.status.connection}</span>
            </dd>
            <dt>${r("uptime")}</dt><dd>${Pi(f.uptimeSeconds)}</dd>
            <dt>${r("battery")}</dt>
            <dd>${U==null?"\u2014":U>100?r("powered"):`${U}%`}</dd>
            <dt>${r("voltage")}</dt><dd>${f.voltage!=null?`${f.voltage.toFixed(2)} V`:"\u2014"}</dd>
            <dt>${r("channel_util")}</dt>
            <dd>${this._bar(f.channelUtilization,25,50)}</dd>
            <dt>${r("air_util")}</dt>
            <dd>${this._bar(f.airUtilTx,5,10)}</dd>
            <dt>${r("nodes_online")}</dt><dd>${et} / ${H.length}</dd>
            <dt>${r("packets")}</dt>
            <dd>
              ${z.numPacketsTx!=null?v`${z.numPacketsTx} ${r("sent")} · ${z.numPacketsRx??0} ${r("received")} ·
                    ${z.numPacketsRxBad??0} ${r("bad")} · ${z.numTxRelay??0} ${r("relayed")}`:"\u2014"}
            </dd>
          </dl>
        </div>

        <div class="card wide">
          <h2>${r("channels")}</h2>
          <table>
            <thead>
              <tr><th>#</th><th>${r("name")}</th><th>${r("role")}</th><th>${r("psk")}</th><th>MQTT</th></tr>
            </thead>
            <tbody>
              ${Tt.map(kt=>v`<tr>
                  <td>${kt.index}</td>
                  <td>${Gt(kt,A,r)}</td>
                  <td>${kt.role==="PRIMARY"?r("primary"):r("secondary")}</td>
                  <td>${r(Me(kt.settings?.psk))}</td>
                  <td class="muted small">
                    ${kt.settings?.uplink_enabled?"\u2191":""}${kt.settings?.downlink_enabled?"\u2193":""}
                  </td>
                </tr>`)}
            </tbody>
          </table>
        </div>

        ${n.isAdmin?v`<div class="card wide">
              <h2>${r("actions")}</h2>
              <div class="actions">
                <button class="btn" @click=${()=>this._reconnect()}>
                  <ha-icon icon="mdi:connection"></ha-icon>${r("reconnect")}
                </button>
                <button class="btn" ?disabled=${!a.status.connected} @click=${()=>n.action("set_time")}>
                  <ha-icon icon="mdi:clock-check-outline"></ha-icon>${r("set_time")}
                </button>
                <button
                  class="btn"
                  ?disabled=${!a.status.connected}
                  @click=${()=>n.action("reboot",{},{confirmText:`${r("reboot")}?`})}
                >
                  <ha-icon icon="mdi:restart"></ha-icon>${r("reboot")}
                </button>
                <button
                  class="btn"
                  ?disabled=${!a.status.connected}
                  @click=${()=>n.action("shutdown",{},{confirmText:`${r("shutdown")}? ${r("confirm_action")}`})}
                >
                  <ha-icon icon="mdi:power"></ha-icon>${r("shutdown")}
                </button>
                <button
                  class="btn danger"
                  ?disabled=${!a.status.connected}
                  @click=${()=>n.action("reset_nodedb",{},{confirmText:`${r("reset_nodedb")}? ${r("confirm_action")}`})}
                >
                  <ha-icon icon="mdi:database-remove"></ha-icon>${r("reset_nodedb")}
                </button>
                <button
                  class="btn danger"
                  ?disabled=${!a.status.connected}
                  @click=${()=>n.action("factory_reset_config",{},{confirmText:`${r("factory_reset_config")}? ${r("confirm_action")}`})}
                >
                  <ha-icon icon="mdi:backup-restore"></ha-icon>${r("factory_reset_config")}
                </button>
                <button
                  class="btn danger"
                  ?disabled=${!a.status.connected}
                  @click=${()=>n.action("factory_reset_device",{},{confirmText:`${r("factory_reset_device")}? ${r("confirm_action")}`})}
                >
                  <ha-icon icon="mdi:alert"></ha-icon>${r("factory_reset_device")}
                </button>
              </div>
            </div>`:""}
      </div>
    `}_bar(n,r,a){if(n==null)return"\u2014";let h=n>=a?"err":n>=r?"warn":"ok";return v`<div class="bar-wrap">
      <div class="bar"><div class="fill ${h}" style="width:${Math.min(100,n)}%"></div></div>
      <span>${n.toFixed(1)}%</span>
    </div>`}async _reconnect(){try{await this.panel.ws("reconnect"),this.panel.toast(this.panel.t("connecting"))}catch(n){this.panel.toast(`${this.panel.t("error")}: ${n.message||n}`,!0)}}static styles=[xt,ft`
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 16px;
        max-width: 1200px;
        margin: 0 auto;
      }
      .wide {
        grid-column: 1 / -1;
      }
      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .bar-wrap {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .bar {
        flex: 1;
        max-width: 160px;
        height: 8px;
        border-radius: 4px;
        background: var(--divider-color);
        overflow: hidden;
      }
      .fill {
        height: 100%;
      }
      .fill.ok {
        background: var(--success-color, #43a047);
      }
      .fill.warn {
        background: var(--warning-color, #ffa600);
      }
      .fill.err {
        background: var(--error-color, #db4437);
      }
      table {
        overflow-x: auto;
      }
    `]};customElements.define("mm-radio",$n);var Mi=200,cr={pending:"mdi:clock-outline",sent:"mdi:check",delivered:"mdi:check-all",failed:"mdi:alert-circle-outline",unconfirmed:"mdi:help-circle-outline"},Pn=class extends ct{static properties={panel:{attribute:!1},rev:{type:Number},_text:{state:!0},_sending:{state:!0},_replyTo:{state:!0}};constructor(){super(),this._text="",this._replyTo=null}get _conversations(){let n=this.panel,r=n.t,a=new Map((n.data.conversations||[]).map(z=>[z.key,z])),h=[];for(let z of n.data.channels||[]){if(!z.role||z.role==="DISABLED")continue;let A=`ch:${z.index}`;h.push({key:A,title:`# ${Gt(z,n.data.lora,r)}`,icon:"mdi:pound",summary:a.get(A)})}let d=[...a.values()].filter(z=>z.key.startsWith("dm:")),f=n.openConversation;f?.startsWith("dm:")&&!a.has(f)&&d.unshift({key:f});for(let z of d){let A=Number(z.key.slice(3));h.push({key:z.key,title:te(n.nodes.get(A),A),num:A,summary:z.last?z:null})}return h}updated(){let n=this.panel,r=n.openConversation;r&&!n.messages.has(r)&&this._loadingKey!==r&&(this._loadingKey=r,n.loadConversation(r).finally(()=>this._loadingKey=null),this._markRead(r));let a=this.renderRoot.querySelector(".list");a&&this._stickBottom!==!1&&(a.scrollTop=a.scrollHeight)}_open(n){this.panel.openConversation=n,this._replyTo=null,this._stickBottom=!0,this._markRead(n),this.panel.bump()}_markRead(n){let r=(this.panel.data.conversations||[]).find(a=>a.key===n);r&&r.unread&&(r.unread=0,this.panel.ws("mark_read",{conversation:n}).catch(()=>{}),this.panel.bump())}_onScroll(n){let r=n.target;this._stickBottom=r.scrollHeight-r.scrollTop-r.clientHeight<40}render(){let n=this.panel,r=n.t,a=this._conversations,h=n.openConversation,d=n.narrow||window.innerWidth<700,f=!d||!h,z=!d||h;return v`
      <div class="layout">
        ${f?v`<div class="sidebar">
              ${a.map(A=>this._renderItem(A,h))}
            </div>`:""}
        ${z?v`<div class="chat">${h?this._renderChat(h,d):v`<div class="empty muted">${r("select_conversation")}</div>`}</div>`:""}
      </div>
    `}_renderItem(n,r){let a=this.panel,h=n.summary?.last,d=n.summary?.unread||0,f="";return h&&(f=(h.dir==="out"?"":h.to===4294967295?`${Nt(a.nodes.get(h.from),h.from)}: `:"")+h.text),v`<button class="item ${r===n.key?"active":""}" @click=${()=>this._open(n.key)}>
      ${n.num!=null?v`<div class="avatar" style="background:${he(n.num)}">${Nt(a.nodes.get(n.num),n.num)}</div>`:v`<div class="avatar channel"><ha-icon icon=${n.icon}></ha-icon></div>`}
      <div class="grow">
        <div class="row">
          <span class="grow ellipsis ${d?"bold":""}">${n.title}</span>
          ${h?v`<span class="muted small">${Te(h.time,a.t.lang)}</span>`:""}
        </div>
        <div class="row">
          <span class="grow ellipsis muted small">${f}</span>
          ${d?v`<span class="badge">${d}</span>`:""}
        </div>
      </div>
    </button>`}_renderChat(n,r){let a=this.panel,h=a.t,d=a.messages.get(n)||[],f=n.startsWith("dm:"),z=f?Number(n.slice(3)):null,A=f?0:Number(n.slice(3)),b=(a.data.channels||[]).find(U=>U.index===A),K=f?te(a.nodes.get(z),z):`# ${Gt(b,a.data.lora,h)}`,H=ze(this._text),et=new Map(d.map(U=>[U.id,U]));return v`
      <div class="chat-head">
        ${r?v`<button class="icon" @click=${()=>this._open(null)}><ha-icon icon="mdi:arrow-left"></ha-icon></button>`:""}
        <div class="grow ellipsis title">${K}</div>
        ${f?v`<button class="icon" title=${h("tab_nodes")} @click=${()=>a.openNode(z)}>
              <ha-icon icon="mdi:information-outline"></ha-icon>
            </button>`:""}
        ${a.isAdmin?v`<button class="icon" title=${h("delete_conversation")} @click=${()=>this._delete(n)}>
              <ha-icon icon="mdi:delete-outline"></ha-icon>
            </button>`:""}
      </div>
      <div class="list" @scroll=${this._onScroll}>
        ${d.length?"":v`<div class="empty muted">${h("no_messages")}</div>`}
        ${d.map((U,Tt)=>this._renderMessage(U,d[Tt-1],et,f))}
      </div>
      ${this._replyTo?v`<div class="replying small">
            <ha-icon icon="mdi:reply"></ha-icon>
            <span class="grow ellipsis">${this._replyTo.text}</span>
            <button class="icon" @click=${()=>this._replyTo=null}><ha-icon icon="mdi:close"></ha-icon></button>
          </div>`:""}
      <div class="composer">
        <textarea
          rows="1"
          .value=${this._text}
          placeholder=${h("type_message")}
          ?disabled=${!a.data.status.connected}
          @input=${U=>this._text=U.target.value}
          @keydown=${U=>this._onKey(U,n)}
        ></textarea>
        <span class="counter small ${H>Mi?"err":"muted"}">${H}/${Mi}</span>
        <button
          class="btn primary"
          ?disabled=${!this._text.trim()||H>Mi||this._sending||!a.data.status.connected}
          @click=${()=>this._send(n)}
        >
          <ha-icon icon="mdi:send"></ha-icon>
        </button>
      </div>
    `}_renderMessage(n,r,a,h){let d=this.panel,f=d.t,z=n.dir==="out",A=d.nodes.get(n.from),b=!z&&!h&&(!r||r.from!==n.from||r.dir==="out"),K=n.reply_id?a.get(n.reply_id):null,H=[];return z||(n.hops!=null&&H.push(Ae(n.hops,f)),n.snr!=null&&H.push(`SNR ${n.snr}`),n.via_mqtt&&H.push(f("via_mqtt"))),v`<div class="msg ${z?"out":"in"}">
      ${!z&&!h?v`<div
            class="avatar mini ${b?"":"hidden"}"
            style="background:${he(n.from)}"
            @click=${()=>d.openNode(n.from)}
          >
            ${Nt(A,n.from)}
          </div>`:""}
      <div class="bubble" @dblclick=${()=>this._replyTo=n}>
        ${b?v`<div class="sender" @click=${()=>d.openNode(n.from)}>${te(A,n.from)}</div>`:""}
        ${K?v`<div class="quote small">${K.text}</div>`:""}
        <div class="text">${n.text}</div>
        <div class="meta small">
          ${H.join(" \xB7 ")} ${Te(n.time,f.lang)}
          ${z?v`<ha-icon
                class="status ${n.status}"
                icon=${cr[n.status]||cr.pending}
                title=${f(`st_${n.status}`)+(n.error&&n.error!=="NONE"?` (${n.error})`:"")}
              ></ha-icon>`:""}
          <button class="icon reply" title=${f("reply")} @click=${()=>this._replyTo=n}>
            <ha-icon icon="mdi:reply"></ha-icon>
          </button>
        </div>
      </div>
    </div>`}_onKey(n,r){n.key==="Enter"&&!n.shiftKey&&(n.preventDefault(),this._send(r))}async _send(n){let r=this.panel,a=this._text.trim();if(!a||ze(a)>Mi)return;let h={text:a};n.startsWith("dm:")?(h.to=Number(n.slice(3)),h.channel=0):h.channel=Number(n.slice(3)),this._replyTo?.id&&(h.reply_id=this._replyTo.id),this._sending=!0;try{await r.ws("send_text",h),this._text="",this._replyTo=null,this._stickBottom=!0,r.messages.has(n)||await r.loadConversation(n)}catch(d){r.toast(`${r.t("error")}: ${d.message||d}`,!0)}this._sending=!1}async _delete(n){let r=this.panel;await r.confirm(`${r.t("delete_conversation")}?`)&&(await r.ws("delete_conversation",{conversation:n}),r.messages.set(n,[]),r.data.conversations=(r.data.conversations||[]).filter(a=>a.key!==n),r.bump())}static styles=[xt,ft`
      :host {
        display: block;
        height: 100%;
      }
      .layout {
        display: flex;
        height: 100%;
      }
      .sidebar {
        width: 300px;
        flex: none;
        overflow-y: auto;
        border-right: 1px solid var(--divider-color);
        background: var(--card-background-color);
      }
      .layout > .sidebar:only-child {
        width: 100%;
        border-right: none;
      }
      .item {
        font: inherit;
        color: inherit;
        display: flex;
        gap: 10px;
        align-items: center;
        width: 100%;
        padding: 10px 12px;
        border: none;
        border-bottom: 1px solid var(--divider-color);
        background: none;
        text-align: left;
        cursor: pointer;
      }
      .item.active {
        background: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
      }
      .avatar.channel {
        background: var(--primary-color);
      }
      .ellipsis {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .bold {
        font-weight: 600;
      }
      .chat {
        flex: 1;
        display: flex;
        flex-direction: column;
        min-width: 0;
      }
      .chat-head {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        border-bottom: 1px solid var(--divider-color);
        background: var(--card-background-color);
      }
      .chat-head .title {
        font-weight: 500;
      }
      .list {
        flex: 1;
        overflow-y: auto;
        padding: 12px;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .empty {
        margin: auto;
        padding: 24px;
        text-align: center;
      }
      .msg {
        display: flex;
        gap: 6px;
        align-items: flex-end;
        max-width: 80%;
      }
      .msg.out {
        align-self: flex-end;
      }
      .avatar.mini {
        width: 32px;
        height: 32px;
        font-size: 0.7em;
        cursor: pointer;
      }
      .avatar.hidden {
        visibility: hidden;
      }
      .bubble {
        padding: 6px 10px;
        border-radius: 12px;
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        min-width: 60px;
      }
      .msg.out .bubble {
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
        border-color: transparent;
      }
      .sender {
        font-size: 0.8em;
        font-weight: 600;
        color: var(--primary-color);
        cursor: pointer;
      }
      .quote {
        border-left: 3px solid currentColor;
        padding-left: 6px;
        opacity: 0.75;
        margin-bottom: 2px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .text {
        white-space: pre-wrap;
        overflow-wrap: anywhere;
      }
      .meta {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 4px;
        opacity: 0.7;
        margin-top: 2px;
      }
      .meta ha-icon {
        --mdc-icon-size: 14px;
      }
      .status.failed {
        color: var(--error-color, #db4437);
        opacity: 1;
      }
      .msg.out .status.failed {
        color: #ffd0cc;
      }
      .reply {
        padding: 0;
        opacity: 0;
      }
      .bubble:hover .reply {
        opacity: 1;
      }
      .replying {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 4px 12px;
        border-top: 1px solid var(--divider-color);
        background: var(--card-background-color);
      }
      .composer {
        display: flex;
        align-items: flex-end;
        gap: 8px;
        padding: 8px 12px;
        border-top: 1px solid var(--divider-color);
        background: var(--card-background-color);
      }
      .composer textarea {
        flex: 1;
        resize: none;
        min-height: 38px;
        max-height: 120px;
      }
      .counter {
        align-self: center;
      }
    `]};customElements.define("mm-messages",Pn);var dr={any:0,h1:3600,h24:86400,d7:7*86400},Ln=class extends ct{static properties={panel:{attribute:!1},rev:{type:Number},_query:{state:!0},_sort:{state:!0},_desc:{state:!0},_window:{state:!0},_favorites:{state:!0}};constructor(){super(),this._query="",this._sort="lastHeard",this._desc=!0,this._window="any",this._favorites=!1}_rows(){let n=this.panel,r=Rt(n.myNode),a=Date.now()/1e3,h=this._query.trim().toLowerCase(),d=dr[this._window],f=[...n.nodes.values()].map(b=>({node:b,name:b.user?.longName||"",short:b.user?.shortName||"",id:Qt(b.num),lastHeard:b.num===n.myNum?a:b.lastHeard||0,hops:b.hopsAway??null,snr:b.snr??null,battery:b.deviceMetrics?.batteryLevel??null,distance:b.num===n.myNum?0:Li(r,Rt(b)),hw:b.user?.hwModel||"",role:b.user?.role||"CLIENT"}));h&&(f=f.filter(b=>`${b.name} ${b.short} ${b.id} ${b.hw}`.toLowerCase().includes(h))),d&&(f=f.filter(b=>b.lastHeard&&a-b.lastHeard<=d)),this._favorites&&(f=f.filter(b=>b.node.isFavorite||b.node.num===n.myNum));let z=this._sort,A=this._desc?-1:1;return f.sort((b,K)=>{if(b.node.num===n.myNum)return-1;if(K.node.num===n.myNum)return 1;if(!!b.node.isFavorite!=!!K.node.isFavorite)return b.node.isFavorite?-1:1;let H=b[z],et=K[z];return H==null&&et==null?0:H==null?1:et==null?-1:(typeof H=="string"?H.localeCompare(et):H-et)*A}),f}_sortBy(n){this._sort===n?this._desc=!this._desc:(this._sort=n,this._desc=n==="lastHeard"||n==="snr"||n==="battery")}render(){let n=this.panel,r=n.t,a=this._rows(),h=(d,f)=>v`<th @click=${()=>this._sortBy(d)}>
        ${f}${this._sort===d?this._desc?" \u25BE":" \u25B4":""}
      </th>`;return v`
      <div class="filters">
        <input class="search" type="search" placeholder=${r("search")} .value=${this._query} @input=${d=>this._query=d.target.value} />
        <label class="row small">
          ${r("heard_within")}
          <select @change=${d=>this._window=d.target.value}>
            ${Object.keys(dr).map(d=>v`<option value=${d} ?selected=${this._window===d}>${r(d==="any"?"any_time":d)}</option>`)}
          </select>
        </label>
        <label class="row small">
          <input type="checkbox" .checked=${this._favorites} @change=${d=>this._favorites=d.target.checked} />
          ${r("favorites_only")}
        </label>
        <span class="muted small count">${a.length} / ${n.nodes.size}</span>
      </div>
      <div class="card table-card">
        <table>
          <thead>
            <tr>
              <th></th>
              ${h("name",r("name"))}
              ${h("id",r("node_id"))}
              ${h("hw",r("hardware"))}
              ${h("role",r("role"))}
              ${h("hops","Hops")}
              ${h("snr",r("snr"))}
              ${h("battery",r("battery"))}
              ${h("distance",r("distance"))}
              ${h("lastHeard",r("last_heard"))}
            </tr>
          </thead>
          <tbody>
            ${a.map(d=>this._renderRow(d))}
          </tbody>
        </table>
      </div>
    `}_renderRow(n){let r=this.panel,a=r.t,h=n.node,d=h.num===r.myNum;return v`<tr class="clickable ${h.isIgnored?"ignored":""}" @click=${()=>r.openNode(h.num)}>
      <td>
        <div class="avatar mini" style="background:${he(h.num)}">${Nt(h)}</div>
      </td>
      <td class="name">
        ${h.isFavorite?v`<ha-icon class="star" icon="mdi:star"></ha-icon>`:""}
        ${n.name||n.id}
        ${d?v`<span class="chip">${a("you")}</span>`:""}
        ${h.isIgnored?v`<span class="chip">${a("ignored")}</span>`:""}
        ${h.viaMqtt?v`<span class="chip">MQTT</span>`:""}
      </td>
      <td class="muted mono">${n.id}</td>
      <td class="muted small">${n.hw}</td>
      <td class="muted small">${n.role}</td>
      <td>${d?"":Ae(n.hops,a)}</td>
      <td>${d||n.snr==null?"":`${n.snr} dB`}</td>
      <td>${n.battery==null?"":n.battery>100?"\u26A1":`${n.battery}%`}</td>
      <td>${d?"":Ti(n.distance)}</td>
      <td class="muted">${d?"":Le(n.lastHeard,a)}</td>
    </tr>`}static styles=[xt,ft`
      .filters {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 12px;
        margin-bottom: 12px;
      }
      .search {
        flex: 1;
        min-width: 200px;
        max-width: 400px;
      }
      .count {
        margin-left: auto;
      }
      .table-card {
        padding: 0;
        overflow-x: auto;
      }
      .avatar.mini {
        width: 32px;
        height: 32px;
        font-size: 0.7em;
      }
      td.name {
        font-weight: 500;
      }
      .star {
        --mdc-icon-size: 16px;
        color: var(--warning-color, #ffa600);
      }
      .mono {
        font-family: var(--code-font-family, monospace);
        font-size: 0.85em;
      }
      tr.ignored {
        opacity: 0.5;
      }
    `]};customElements.define("mm-nodes",Ln);var ce=jo(fr(),1);var pr=`/* required styles */\r
\r
.leaflet-pane,\r
.leaflet-tile,\r
.leaflet-marker-icon,\r
.leaflet-marker-shadow,\r
.leaflet-tile-container,\r
.leaflet-pane > svg,\r
.leaflet-pane > canvas,\r
.leaflet-zoom-box,\r
.leaflet-image-layer,\r
.leaflet-layer {\r
	position: absolute;\r
	left: 0;\r
	top: 0;\r
	}\r
.leaflet-container {\r
	overflow: hidden;\r
	}\r
.leaflet-tile,\r
.leaflet-marker-icon,\r
.leaflet-marker-shadow {\r
	-webkit-user-select: none;\r
	   -moz-user-select: none;\r
	        user-select: none;\r
	  -webkit-user-drag: none;\r
	}\r
/* Prevents IE11 from highlighting tiles in blue */\r
.leaflet-tile::selection {\r
	background: transparent;\r
}\r
/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\r
.leaflet-safari .leaflet-tile {\r
	image-rendering: -webkit-optimize-contrast;\r
	}\r
/* hack that prevents hw layers "stretching" when loading new tiles */\r
.leaflet-safari .leaflet-tile-container {\r
	width: 1600px;\r
	height: 1600px;\r
	-webkit-transform-origin: 0 0;\r
	}\r
.leaflet-marker-icon,\r
.leaflet-marker-shadow {\r
	display: block;\r
	}\r
/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\r
/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\r
.leaflet-container .leaflet-overlay-pane svg {\r
	max-width: none !important;\r
	max-height: none !important;\r
	}\r
.leaflet-container .leaflet-marker-pane img,\r
.leaflet-container .leaflet-shadow-pane img,\r
.leaflet-container .leaflet-tile-pane img,\r
.leaflet-container img.leaflet-image-layer,\r
.leaflet-container .leaflet-tile {\r
	max-width: none !important;\r
	max-height: none !important;\r
	width: auto;\r
	padding: 0;\r
	}\r
\r
.leaflet-container img.leaflet-tile {\r
	/* See: https://bugs.chromium.org/p/chromium/issues/detail?id=600120 */\r
	mix-blend-mode: plus-lighter;\r
}\r
\r
.leaflet-container.leaflet-touch-zoom {\r
	-ms-touch-action: pan-x pan-y;\r
	touch-action: pan-x pan-y;\r
	}\r
.leaflet-container.leaflet-touch-drag {\r
	-ms-touch-action: pinch-zoom;\r
	/* Fallback for FF which doesn't support pinch-zoom */\r
	touch-action: none;\r
	touch-action: pinch-zoom;\r
}\r
.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r
	-ms-touch-action: none;\r
	touch-action: none;\r
}\r
.leaflet-container {\r
	-webkit-tap-highlight-color: transparent;\r
}\r
.leaflet-container a {\r
	-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\r
}\r
.leaflet-tile {\r
	filter: inherit;\r
	visibility: hidden;\r
	}\r
.leaflet-tile-loaded {\r
	visibility: inherit;\r
	}\r
.leaflet-zoom-box {\r
	width: 0;\r
	height: 0;\r
	-moz-box-sizing: border-box;\r
	     box-sizing: border-box;\r
	z-index: 800;\r
	}\r
/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\r
.leaflet-overlay-pane svg {\r
	-moz-user-select: none;\r
	}\r
\r
.leaflet-pane         { z-index: 400; }\r
\r
.leaflet-tile-pane    { z-index: 200; }\r
.leaflet-overlay-pane { z-index: 400; }\r
.leaflet-shadow-pane  { z-index: 500; }\r
.leaflet-marker-pane  { z-index: 600; }\r
.leaflet-tooltip-pane   { z-index: 650; }\r
.leaflet-popup-pane   { z-index: 700; }\r
\r
.leaflet-map-pane canvas { z-index: 100; }\r
.leaflet-map-pane svg    { z-index: 200; }\r
\r
.leaflet-vml-shape {\r
	width: 1px;\r
	height: 1px;\r
	}\r
.lvml {\r
	behavior: url(#default#VML);\r
	display: inline-block;\r
	position: absolute;\r
	}\r
\r
\r
/* control positioning */\r
\r
.leaflet-control {\r
	position: relative;\r
	z-index: 800;\r
	pointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r
	pointer-events: auto;\r
	}\r
.leaflet-top,\r
.leaflet-bottom {\r
	position: absolute;\r
	z-index: 1000;\r
	pointer-events: none;\r
	}\r
.leaflet-top {\r
	top: 0;\r
	}\r
.leaflet-right {\r
	right: 0;\r
	}\r
.leaflet-bottom {\r
	bottom: 0;\r
	}\r
.leaflet-left {\r
	left: 0;\r
	}\r
.leaflet-control {\r
	float: left;\r
	clear: both;\r
	}\r
.leaflet-right .leaflet-control {\r
	float: right;\r
	}\r
.leaflet-top .leaflet-control {\r
	margin-top: 10px;\r
	}\r
.leaflet-bottom .leaflet-control {\r
	margin-bottom: 10px;\r
	}\r
.leaflet-left .leaflet-control {\r
	margin-left: 10px;\r
	}\r
.leaflet-right .leaflet-control {\r
	margin-right: 10px;\r
	}\r
\r
\r
/* zoom and fade animations */\r
\r
.leaflet-fade-anim .leaflet-popup {\r
	opacity: 0;\r
	-webkit-transition: opacity 0.2s linear;\r
	   -moz-transition: opacity 0.2s linear;\r
	        transition: opacity 0.2s linear;\r
	}\r
.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r
	opacity: 1;\r
	}\r
.leaflet-zoom-animated {\r
	-webkit-transform-origin: 0 0;\r
	    -ms-transform-origin: 0 0;\r
	        transform-origin: 0 0;\r
	}\r
svg.leaflet-zoom-animated {\r
	will-change: transform;\r
}\r
\r
.leaflet-zoom-anim .leaflet-zoom-animated {\r
	-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r
	   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);\r
	        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r
	}\r
.leaflet-zoom-anim .leaflet-tile,\r
.leaflet-pan-anim .leaflet-tile {\r
	-webkit-transition: none;\r
	   -moz-transition: none;\r
	        transition: none;\r
	}\r
\r
.leaflet-zoom-anim .leaflet-zoom-hide {\r
	visibility: hidden;\r
	}\r
\r
\r
/* cursors */\r
\r
.leaflet-interactive {\r
	cursor: pointer;\r
	}\r
.leaflet-grab {\r
	cursor: -webkit-grab;\r
	cursor:    -moz-grab;\r
	cursor:         grab;\r
	}\r
.leaflet-crosshair,\r
.leaflet-crosshair .leaflet-interactive {\r
	cursor: crosshair;\r
	}\r
.leaflet-popup-pane,\r
.leaflet-control {\r
	cursor: auto;\r
	}\r
.leaflet-dragging .leaflet-grab,\r
.leaflet-dragging .leaflet-grab .leaflet-interactive,\r
.leaflet-dragging .leaflet-marker-draggable {\r
	cursor: move;\r
	cursor: -webkit-grabbing;\r
	cursor:    -moz-grabbing;\r
	cursor:         grabbing;\r
	}\r
\r
/* marker & overlays interactivity */\r
.leaflet-marker-icon,\r
.leaflet-marker-shadow,\r
.leaflet-image-layer,\r
.leaflet-pane > svg path,\r
.leaflet-tile-container {\r
	pointer-events: none;\r
	}\r
\r
.leaflet-marker-icon.leaflet-interactive,\r
.leaflet-image-layer.leaflet-interactive,\r
.leaflet-pane > svg path.leaflet-interactive,\r
svg.leaflet-image-layer.leaflet-interactive path {\r
	pointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r
	pointer-events: auto;\r
	}\r
\r
/* visual tweaks */\r
\r
.leaflet-container {\r
	background: #ddd;\r
	outline-offset: 1px;\r
	}\r
.leaflet-container a {\r
	color: #0078A8;\r
	}\r
.leaflet-zoom-box {\r
	border: 2px dotted #38f;\r
	background: rgba(255,255,255,0.5);\r
	}\r
\r
\r
/* general typography */\r
.leaflet-container {\r
	font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;\r
	font-size: 12px;\r
	font-size: 0.75rem;\r
	line-height: 1.5;\r
	}\r
\r
\r
/* general toolbar styles */\r
\r
.leaflet-bar {\r
	box-shadow: 0 1px 5px rgba(0,0,0,0.65);\r
	border-radius: 4px;\r
	}\r
.leaflet-bar a {\r
	background-color: #fff;\r
	border-bottom: 1px solid #ccc;\r
	width: 26px;\r
	height: 26px;\r
	line-height: 26px;\r
	display: block;\r
	text-align: center;\r
	text-decoration: none;\r
	color: black;\r
	}\r
.leaflet-bar a,\r
.leaflet-control-layers-toggle {\r
	background-position: 50% 50%;\r
	background-repeat: no-repeat;\r
	display: block;\r
	}\r
.leaflet-bar a:hover,\r
.leaflet-bar a:focus {\r
	background-color: #f4f4f4;\r
	}\r
.leaflet-bar a:first-child {\r
	border-top-left-radius: 4px;\r
	border-top-right-radius: 4px;\r
	}\r
.leaflet-bar a:last-child {\r
	border-bottom-left-radius: 4px;\r
	border-bottom-right-radius: 4px;\r
	border-bottom: none;\r
	}\r
.leaflet-bar a.leaflet-disabled {\r
	cursor: default;\r
	background-color: #f4f4f4;\r
	color: #bbb;\r
	}\r
\r
.leaflet-touch .leaflet-bar a {\r
	width: 30px;\r
	height: 30px;\r
	line-height: 30px;\r
	}\r
.leaflet-touch .leaflet-bar a:first-child {\r
	border-top-left-radius: 2px;\r
	border-top-right-radius: 2px;\r
	}\r
.leaflet-touch .leaflet-bar a:last-child {\r
	border-bottom-left-radius: 2px;\r
	border-bottom-right-radius: 2px;\r
	}\r
\r
/* zoom control */\r
\r
.leaflet-control-zoom-in,\r
.leaflet-control-zoom-out {\r
	font: bold 18px 'Lucida Console', Monaco, monospace;\r
	text-indent: 1px;\r
	}\r
\r
.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r
	font-size: 22px;\r
	}\r
\r
\r
/* layers control */\r
\r
.leaflet-control-layers {\r
	box-shadow: 0 1px 5px rgba(0,0,0,0.4);\r
	background: #fff;\r
	border-radius: 5px;\r
	}\r
.leaflet-control-layers-toggle {\r
	background-image: url(images/layers.png);\r
	width: 36px;\r
	height: 36px;\r
	}\r
.leaflet-retina .leaflet-control-layers-toggle {\r
	background-image: url(images/layers-2x.png);\r
	background-size: 26px 26px;\r
	}\r
.leaflet-touch .leaflet-control-layers-toggle {\r
	width: 44px;\r
	height: 44px;\r
	}\r
.leaflet-control-layers .leaflet-control-layers-list,\r
.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r
	display: none;\r
	}\r
.leaflet-control-layers-expanded .leaflet-control-layers-list {\r
	display: block;\r
	position: relative;\r
	}\r
.leaflet-control-layers-expanded {\r
	padding: 6px 10px 6px 6px;\r
	color: #333;\r
	background: #fff;\r
	}\r
.leaflet-control-layers-scrollbar {\r
	overflow-y: scroll;\r
	overflow-x: hidden;\r
	padding-right: 5px;\r
	}\r
.leaflet-control-layers-selector {\r
	margin-top: 2px;\r
	position: relative;\r
	top: 1px;\r
	}\r
.leaflet-control-layers label {\r
	display: block;\r
	font-size: 13px;\r
	font-size: 1.08333em;\r
	}\r
.leaflet-control-layers-separator {\r
	height: 0;\r
	border-top: 1px solid #ddd;\r
	margin: 5px -10px 5px -6px;\r
	}\r
\r
/* Default icon URLs */\r
.leaflet-default-icon-path { /* used only in path-guessing heuristic, see L.Icon.Default */\r
	background-image: url(images/marker-icon.png);\r
	}\r
\r
\r
/* attribution and scale controls */\r
\r
.leaflet-container .leaflet-control-attribution {\r
	background: #fff;\r
	background: rgba(255, 255, 255, 0.8);\r
	margin: 0;\r
	}\r
.leaflet-control-attribution,\r
.leaflet-control-scale-line {\r
	padding: 0 5px;\r
	color: #333;\r
	line-height: 1.4;\r
	}\r
.leaflet-control-attribution a {\r
	text-decoration: none;\r
	}\r
.leaflet-control-attribution a:hover,\r
.leaflet-control-attribution a:focus {\r
	text-decoration: underline;\r
	}\r
.leaflet-attribution-flag {\r
	display: inline !important;\r
	vertical-align: baseline !important;\r
	width: 1em;\r
	height: 0.6669em;\r
	}\r
.leaflet-left .leaflet-control-scale {\r
	margin-left: 5px;\r
	}\r
.leaflet-bottom .leaflet-control-scale {\r
	margin-bottom: 5px;\r
	}\r
.leaflet-control-scale-line {\r
	border: 2px solid #777;\r
	border-top: none;\r
	line-height: 1.1;\r
	padding: 2px 5px 1px;\r
	white-space: nowrap;\r
	-moz-box-sizing: border-box;\r
	     box-sizing: border-box;\r
	background: rgba(255, 255, 255, 0.8);\r
	text-shadow: 1px 1px #fff;\r
	}\r
.leaflet-control-scale-line:not(:first-child) {\r
	border-top: 2px solid #777;\r
	border-bottom: none;\r
	margin-top: -2px;\r
	}\r
.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r
	border-bottom: 2px solid #777;\r
	}\r
\r
.leaflet-touch .leaflet-control-attribution,\r
.leaflet-touch .leaflet-control-layers,\r
.leaflet-touch .leaflet-bar {\r
	box-shadow: none;\r
	}\r
.leaflet-touch .leaflet-control-layers,\r
.leaflet-touch .leaflet-bar {\r
	border: 2px solid rgba(0,0,0,0.2);\r
	background-clip: padding-box;\r
	}\r
\r
\r
/* popup */\r
\r
.leaflet-popup {\r
	position: absolute;\r
	text-align: center;\r
	margin-bottom: 20px;\r
	}\r
.leaflet-popup-content-wrapper {\r
	padding: 1px;\r
	text-align: left;\r
	border-radius: 12px;\r
	}\r
.leaflet-popup-content {\r
	margin: 13px 24px 13px 20px;\r
	line-height: 1.3;\r
	font-size: 13px;\r
	font-size: 1.08333em;\r
	min-height: 1px;\r
	}\r
.leaflet-popup-content p {\r
	margin: 17px 0;\r
	margin: 1.3em 0;\r
	}\r
.leaflet-popup-tip-container {\r
	width: 40px;\r
	height: 20px;\r
	position: absolute;\r
	left: 50%;\r
	margin-top: -1px;\r
	margin-left: -20px;\r
	overflow: hidden;\r
	pointer-events: none;\r
	}\r
.leaflet-popup-tip {\r
	width: 17px;\r
	height: 17px;\r
	padding: 1px;\r
\r
	margin: -10px auto 0;\r
	pointer-events: auto;\r
\r
	-webkit-transform: rotate(45deg);\r
	   -moz-transform: rotate(45deg);\r
	    -ms-transform: rotate(45deg);\r
	        transform: rotate(45deg);\r
	}\r
.leaflet-popup-content-wrapper,\r
.leaflet-popup-tip {\r
	background: white;\r
	color: #333;\r
	box-shadow: 0 3px 14px rgba(0,0,0,0.4);\r
	}\r
.leaflet-container a.leaflet-popup-close-button {\r
	position: absolute;\r
	top: 0;\r
	right: 0;\r
	border: none;\r
	text-align: center;\r
	width: 24px;\r
	height: 24px;\r
	font: 16px/24px Tahoma, Verdana, sans-serif;\r
	color: #757575;\r
	text-decoration: none;\r
	background: transparent;\r
	}\r
.leaflet-container a.leaflet-popup-close-button:hover,\r
.leaflet-container a.leaflet-popup-close-button:focus {\r
	color: #585858;\r
	}\r
.leaflet-popup-scrolled {\r
	overflow: auto;\r
	}\r
\r
.leaflet-oldie .leaflet-popup-content-wrapper {\r
	-ms-zoom: 1;\r
	}\r
.leaflet-oldie .leaflet-popup-tip {\r
	width: 24px;\r
	margin: 0 auto;\r
\r
	-ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";\r
	filter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\r
	}\r
\r
.leaflet-oldie .leaflet-control-zoom,\r
.leaflet-oldie .leaflet-control-layers,\r
.leaflet-oldie .leaflet-popup-content-wrapper,\r
.leaflet-oldie .leaflet-popup-tip {\r
	border: 1px solid #999;\r
	}\r
\r
\r
/* div icon */\r
\r
.leaflet-div-icon {\r
	background: #fff;\r
	border: 1px solid #666;\r
	}\r
\r
\r
/* Tooltip */\r
/* Base styles for the element that has a tooltip */\r
.leaflet-tooltip {\r
	position: absolute;\r
	padding: 6px;\r
	background-color: #fff;\r
	border: 1px solid #fff;\r
	border-radius: 3px;\r
	color: #222;\r
	white-space: nowrap;\r
	-webkit-user-select: none;\r
	-moz-user-select: none;\r
	-ms-user-select: none;\r
	user-select: none;\r
	pointer-events: none;\r
	box-shadow: 0 1px 3px rgba(0,0,0,0.4);\r
	}\r
.leaflet-tooltip.leaflet-interactive {\r
	cursor: pointer;\r
	pointer-events: auto;\r
	}\r
.leaflet-tooltip-top:before,\r
.leaflet-tooltip-bottom:before,\r
.leaflet-tooltip-left:before,\r
.leaflet-tooltip-right:before {\r
	position: absolute;\r
	pointer-events: none;\r
	border: 6px solid transparent;\r
	background: transparent;\r
	content: "";\r
	}\r
\r
/* Directions */\r
\r
.leaflet-tooltip-bottom {\r
	margin-top: 6px;\r
}\r
.leaflet-tooltip-top {\r
	margin-top: -6px;\r
}\r
.leaflet-tooltip-bottom:before,\r
.leaflet-tooltip-top:before {\r
	left: 50%;\r
	margin-left: -6px;\r
	}\r
.leaflet-tooltip-top:before {\r
	bottom: 0;\r
	margin-bottom: -12px;\r
	border-top-color: #fff;\r
	}\r
.leaflet-tooltip-bottom:before {\r
	top: 0;\r
	margin-top: -12px;\r
	margin-left: -6px;\r
	border-bottom-color: #fff;\r
	}\r
.leaflet-tooltip-left {\r
	margin-left: -6px;\r
}\r
.leaflet-tooltip-right {\r
	margin-left: 6px;\r
}\r
.leaflet-tooltip-left:before,\r
.leaflet-tooltip-right:before {\r
	top: 50%;\r
	margin-top: -6px;\r
	}\r
.leaflet-tooltip-left:before {\r
	right: 0;\r
	margin-right: -12px;\r
	border-left-color: #fff;\r
	}\r
.leaflet-tooltip-right:before {\r
	left: 0;\r
	margin-left: -12px;\r
	border-right-color: #fff;\r
	}\r
\r
/* Printing */\r
\r
@media print {\r
	/* Prevent printers from removing background-images of controls. */\r
	.leaflet-control {\r
		-webkit-print-color-adjust: exact;\r
		print-color-adjust: exact;\r
		}\r
	}\r
`;var ga=2*3600,va=24*3600,Tn=class extends ct{static properties={panel:{attribute:!1},rev:{type:Number},_routes:{state:!0}};constructor(){super(),this._routes=!0,this._markers=new Map,this._fitted=!1}firstUpdated(){let n=this.renderRoot.querySelector("#map");this._map=ce.default.map(n,{zoomControl:!0,attributionControl:!0}).setView([52,19],6),this._addTiles(),this._routeLayer=ce.default.layerGroup().addTo(this._map),this._resize=new ResizeObserver(()=>this._map.invalidateSize()),this._resize.observe(n),this._sync()}async _addTiles(){let n='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',r=null;try{r=(await this.panel.hass.connection.sendMessagePromise({type:"map_tiles/access_token"})).token}catch{}this._map&&(r?(this._tiles=ce.default.tileLayer("/api/map_tiles/raster/{z}/{x}/{y}.png?token={token}",{attribution:n,maxZoom:20,maxNativeZoom:19,token:r}).addTo(this._map),this._tokenTimer=setInterval(async()=>{try{let a=await this.panel.hass.connection.sendMessagePromise({type:"map_tiles/access_token"});this._tiles.options.token=a.token}catch{}},1200*1e3)):ce.default.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:n,maxZoom:19,referrerPolicy:"origin"}).addTo(this._map))}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._tokenTimer),this._resize?.disconnect(),this._map?.remove(),this._map=null}updated(n){this._map&&(n.has("rev")||n.has("_routes"))&&this._sync()}_sync(){let n=this.panel,r=n.t,a=Date.now()/1e3,h=new Set,d=[];for(let f of n.nodes.values()){let z=Rt(f);if(!z)continue;h.add(f.num),d.push([z.lat,z.lon]);let A=f.num===n.myNum,b=A?0:a-(f.lastHeard||0),K=A?"#2196f3":b<ga?"#43a047":b<va?"#ffa600":"#9e9e9e",H=this._markers.get(f.num);H||(H=ce.default.circleMarker([z.lat,z.lon],{weight:2,fillOpacity:.8}).addTo(this._map),H.on("click",()=>n.openNode(f.num)),this._markers.set(f.num,H)),H.setLatLng([z.lat,z.lon]),H.setStyle({color:"#fff",fillColor:K,radius:A?10:8}),H.bindTooltip(`<b>${mr(Nt(f))}</b> ${mr(te(f))}<br>${A?r("you"):Le(f.lastHeard,r)}`,{direction:"top",offset:[0,-8]})}for(let[f,z]of this._markers)h.has(f)||(z.remove(),this._markers.delete(f));this._drawRoutes(),!this._fitted&&d.length&&(this._fitted=!0,d.length===1?this._map.setView(d[0],13):this._map.fitBounds(d,{padding:[40,40],maxZoom:14})),this._withoutPosition=n.nodes.size-h.size}_drawRoutes(){let n=this.panel;if(this._routeLayer.clearLayers(),!this._routes)return;let r=new Map;for(let a of n.traceroutes)r.set(a.target,a);for(let a of r.values()){let h=[n.myNum,...a.route,a.target].map(d=>Rt(n.nodes.get(d))).filter(Boolean).map(d=>[d.lat,d.lon]);h.length>1&&ce.default.polyline(h,{color:"#e040fb",weight:3,dashArray:"8 6",opacity:.9}).addTo(this._routeLayer)}}render(){let n=this.panel.t,r=this.panel.hass?.themes?.darkMode,a=this._withoutPosition??0;return v`
      <div class="wrap ${r?"dark":""}">
        <div id="map"></div>
        <div class="overlay card small">
          <label class="row">
            <input type="checkbox" .checked=${this._routes} @change=${h=>this._routes=h.target.checked} />
            ${n("traceroutes")}
          </label>
          ${a?v`<div class="muted">${a} ${n("nodes_without_position")}</div>`:""}
          ${this.panel.nodes.size&&a===this.panel.nodes.size?v`<div>${n("no_positions")}</div>`:""}
        </div>
      </div>
    `}static styles=[wi(pr),xt,ft`
      :host {
        display: block;
        height: 100%;
      }
      .wrap {
        position: relative;
        height: 100%;
      }
      #map {
        position: absolute;
        inset: 0;
        background: var(--secondary-background-color);
      }
      .wrap.dark .leaflet-tile-pane {
        filter: invert(0.9) hue-rotate(180deg) brightness(0.95) contrast(0.9);
      }
      .overlay {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 500;
        padding: 8px 12px;
      }
      .leaflet-tooltip {
        font-family: inherit;
      }
    `]};function mr(c){return String(c).replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[n])}customElements.define("mm-map",Tn);var _r=new Set(["private_key","password","psk"]),zn=class extends ct{static properties={schema:{attribute:!1},value:{attribute:!1},_reveal:{state:!0}};constructor(){super(),this._reveal=new Set}_emit(n){this.value=n,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:n}}))}_set(n,r){this._emit({...this.value||{},[n]:r})}render(){if(!this.schema)return v``;let n=this.value||{};return v`<div class="form">${this.schema.map(r=>this._field(r,n[r.name]))}</div>`}_field(n,r){let a=Qe(n.name);if(n.type==="message"&&!n.repeated)return v`<fieldset>
        <legend>${a}</legend>
        <mm-proto-form
          .schema=${n.fields}
          .value=${r||{}}
          @value-changed=${h=>{h.stopPropagation(),this._set(n.name,h.detail.value)}}
        ></mm-proto-form>
      </fieldset>`;if(n.repeated)return this._repeated(n,r||[],a);switch(n.type){case"bool":return v`<label class="field bool">
          <input type="checkbox" .checked=${!!r} @change=${h=>this._set(n.name,h.target.checked)} />
          <span>${a}</span>
        </label>`;case"enum":return v`<label class="field">
          <span>${a}</span>
          <select @change=${h=>this._set(n.name,h.target.value)}>
            ${n.options.map(h=>v`<option value=${h} ?selected=${h===r}>${h}</option>`)}
          </select>
        </label>`;case"int":case"uint":case"float":return v`<label class="field">
          <span>${a}</span>
          <input
            type="number"
            step=${n.type==="float"?"any":"1"}
            min=${n.type==="uint"?"0":""}
            .value=${r??0}
            @change=${h=>this._set(n.name,h.target.value===""?0:Number(h.target.value))}
          />
        </label>`;default:{let h=_r.has(n.name)&&!this._reveal.has(n.name);return v`<label class="field">
          <span>${a}${n.type==="bytes"?v` <span class="muted small">(base64)</span>`:""}</span>
          <span class="row">
            <input
              class="grow"
              type=${h?"password":"text"}
              .value=${r??""}
              @change=${d=>this._set(n.name,d.target.value)}
            />
            ${_r.has(n.name)?v`<button
                  class="icon"
                  type="button"
                  @click=${()=>{let d=new Set(this._reveal);d.has(n.name)?d.delete(n.name):d.add(n.name),this._reveal=d}}
                >
                  <ha-icon icon=${h?"mdi:eye":"mdi:eye-off"}></ha-icon>
                </button>`:""}
          </span>
        </label>`}}}_repeated(n,r,a){if(n.type==="message")return v`<label class="field">
        <span>${a} <span class="muted small">(JSON)</span></span>
        <textarea
          rows="3"
          .value=${JSON.stringify(r,null,1)}
          @change=${d=>{try{this._set(n.name,JSON.parse(d.target.value))}catch{}}}
        ></textarea>
      </label>`;let h=["int","uint","float"].includes(n.type);return v`<label class="field">
      <span>${a} <span class="muted small">(${n.type==="bytes"?"base64, ":""}one per line)</span></span>
      <textarea
        rows="2"
        .value=${r.join(`
`)}
        @change=${d=>{let f=d.target.value.split(`
`).map(z=>z.trim()).filter(Boolean).map(z=>h?Number(z):z);this._set(n.name,f)}}
      ></textarea>
    </label>`}static styles=[xt,ft`
      .form {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 12px 16px;
        align-items: end;
      }
      .field {
        display: flex;
        flex-direction: column;
        gap: 4px;
        min-width: 0;
      }
      .field > span:first-child {
        font-size: 0.85em;
        color: var(--secondary-text-color);
      }
      .field.bool {
        flex-direction: row;
        align-items: center;
        gap: 8px;
        min-height: 36px;
      }
      .field.bool > span {
        font-size: 1em;
        color: var(--primary-text-color);
      }
      fieldset {
        grid-column: 1 / -1;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        padding: 12px;
        margin: 0;
      }
      legend {
        padding: 0 6px;
        color: var(--secondary-text-color);
      }
      textarea {
        resize: vertical;
        font-family: var(--code-font-family, monospace);
        font-size: 0.85em;
      }
    `]};customElements.define("mm-proto-form",zn);var gr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Si=c=>(...n)=>({_$litDirective$:c,values:n}),Ci=class{constructor(n){}get _$AU(){return this._$AM._$AU}_$AT(n,r,a){this._$Ct=n,this._$AM=r,this._$Ci=a}_$AS(n,r){return this.update(n,r)}update(n,r){return this.render(...r)}};var de=class extends Ci{constructor(n){if(super(n),this.it=vt,n.type!==gr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(n){if(n===vt||n==null)return this._t=void 0,this.it=n;if(n===Kt)return n;if(typeof n!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(n===this.it)return this._t;this.it=n;let r=[n];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};de.directiveName="unsafeHTML",de.resultType=1;var dl=Si(de);var ti=class extends de{};ti.directiveName="unsafeSVG",ti.resultType=2;var vr=Si(ti);var Pr=jo(wr(),1);var Mn=11,kr=[[0,"off"],[10,"23 km"],[11,"12 km"],[12,"5.8 km"],[13,"2.9 km"],[14,"1.5 km"],[15,"730 m"],[16,"360 m"],[17,"180 m"],[18,"90 m"],[19,"45 m"],[32,"precise"]],ya=13;function $r(c){try{return atob(c||"").length}catch{return-1}}function ba(){return{name:"",keyMode:"random",psk:zi(),uplink:!1,downlink:!1,precision:ya,muted:!1}}var An=class extends ct{static properties={panel:{attribute:!1},rev:{type:Number},channels:{attribute:!1},lora:{attribute:!1},_dialog:{state:!0},_draft:{state:!0},_busy:{state:!0},_share:{state:!0},_importUrl:{state:!0},_importReplace:{state:!0}};get t(){return this.panel.t}get _connected(){return this.panel.data?.status?.connected}_active(){return(this.channels||[]).filter(n=>n.role&&n.role!=="DISABLED")}render(){let n=this.t,r=this._active(),a=r.length>=8;return v`
      <div class="card">
        <div class="row head">
          <h2 class="grow">${n("channels")} <span class="muted small">${r.length}/8</span></h2>
          <button class="btn" ?disabled=${!this._connected} @click=${()=>this._openShare(null)}>
            <ha-icon icon="mdi:share-variant"></ha-icon>${n("share_all")}
          </button>
          <button class="btn" ?disabled=${!this._connected||a} @click=${this._openImport}>
            <ha-icon icon="mdi:link-plus"></ha-icon>${n("join_link")}
          </button>
          <button class="btn primary" ?disabled=${!this._connected||a} @click=${this._openAdd}>
            <ha-icon icon="mdi:plus"></ha-icon>${n("add_channel")}
          </button>
        </div>
        ${a?v`<div class="muted small">${n("channels_full")}</div>`:""}
        <div class="list">${r.map(h=>this._renderChannel(h))}</div>
      </div>
      ${this._renderDialog()}
    `}_renderChannel(n){let r=this.t,a=n.settings||{},h=Me(a.psk),d=a.module_settings?.position_precision??0;return v`<div class="channel">
      <div class="avatar ${n.role==="PRIMARY"?"primary":""}"><ha-icon icon="mdi:pound"></ha-icon></div>
      <div class="grow">
        <div class="name">${Gt(n,this.lora,r)} <span class="chip">${n.role==="PRIMARY"?r("primary"):r("secondary")}</span></div>
        <div class="muted small">
          #${n.index} ·
          <ha-icon class="mini ${h==="psk_custom"?"ok":h==="psk_none"?"err":"warn"}"
            icon=${h==="psk_none"?"mdi:lock-open-variant":"mdi:lock"}></ha-icon>
          ${r(h)}
          ${a.uplink_enabled||a.downlink_enabled?v` · MQTT ${a.uplink_enabled?"\u2191":""}${a.downlink_enabled?"\u2193":""}`:""}
          · ${r("position")}: ${this._precisionLabel(d)}
          ${a.module_settings?.is_muted?v` · ${r("muted")}`:""}
        </div>
      </div>
      <button class="icon" title=${r("share")} ?disabled=${!this._connected} @click=${()=>this._openShare(n.index)}>
        <ha-icon icon="mdi:qrcode"></ha-icon>
      </button>
      <button class="icon" title=${r("edit")} ?disabled=${!this._connected} @click=${()=>this._openEdit(n)}>
        <ha-icon icon="mdi:pencil"></ha-icon>
      </button>
      ${n.role==="SECONDARY"?v`<button class="icon danger" title=${r("delete")} ?disabled=${!this._connected} @click=${()=>this._delete(n)}>
            <ha-icon icon="mdi:delete"></ha-icon>
          </button>`:v`<span class="icon-space"></span>`}
    </div>`}_precisionLabel(n){let r=kr.find(([h])=>h===n),a=r?r[1]:`${n}`;return a==="off"?this.t("off"):a==="precise"?this.t("precise"):`~${a}`}_openAdd(){this._draft=ba(),this._dialog={mode:"add"}}_openEdit(n){let r=n.settings||{},a=Me(r.psk);this._draft={name:r.name||"",keyMode:a==="psk_none"?"none":a==="psk_default"?"default":"keep",psk:r.psk||"",original:r,uplink:!!r.uplink_enabled,downlink:!!r.downlink_enabled,precision:r.module_settings?.position_precision??0,muted:!!r.module_settings?.is_muted},this._dialog={mode:"edit",index:n.index,role:n.role}}_openImport(){this._importUrl="",this._importReplace=!1,this._dialog={mode:"import"}}async _openShare(n){this._share=null,this._dialog={mode:"share",index:n};try{let{url:r}=await this.panel.ws("channel_url",n==null?{}:{index:n});this._share=r}catch(r){this._fail(r),this._dialog=null}}_close(){this._dialog=null}_fail(n){this.panel.toast(`${this.t("error")}: ${n.message||n}`,!0)}_psk(n){switch(n.keyMode){case"none":return"";case"default":return"AQ==";case"keep":return n.original?.psk||"";default:return n.psk}}_settingsFromDraft(n){return{...n.original||{},name:n.name.trim(),psk:this._psk(n),uplink_enabled:n.uplink,downlink_enabled:n.downlink,module_settings:{...n.original?.module_settings||{},position_precision:Number(n.precision),is_muted:n.muted}}}_draftError(n,r){let a=this.t,h=n.name.trim();if(r&&!h)return a("err_name_required");if(ze(h)>Mn)return a("err_name_long");if(r&&this._active().some(f=>f.index!==this._dialog?.index&&f.settings?.name===h))return a("err_name_taken");let d=$r(this._psk(n));return[0,1,16,32].includes(d)?null:a("err_key")}async _submitChannel(){let n=this.panel,r=this._draft,a=this._dialog.mode==="edit",h=this._settingsFromDraft(r);this._busy=!0;try{a?await n.ws("channel_set",{index:this._dialog.index,role:this._dialog.role,settings:h}):await n.ws("channel_add",{settings:h}),n.toast(this.t(a?"saved_channel":"channel_added")),this._dialog=null}catch(d){this._fail(d)}this._busy=!1}async _submitImport(){let n=this.panel,r=this.t;if(!(this._importReplace&&!await n.confirm(r("replace_warning")))){this._busy=!0;try{let a=await n.ws("channel_import",{url:this._importUrl.trim(),replace:this._importReplace}),h=[];a.added.length&&h.push(`${r("added")}: ${a.added.join(", ")}`),a.skipped.length&&h.push(`${r("skipped")}: ${a.skipped.join(", ")}`),a.lora_changed&&h.push(r("lora_applied")),n.toast(h.join(" \xB7 ")||r("done")),this._dialog=null}catch(a){this._fail(a)}this._busy=!1}}async _delete(n){let r=this.panel,a=this.t;if(await r.confirm(`${a("delete_channel_q")} \u201E${Gt(n,this.lora,a)}\u201D? ${a("delete_channel_note")}`))try{await r.ws("channel_delete",{index:n.index}),r.toast(a("channel_deleted"))}catch(h){this._fail(h)}}async _copy(n){try{await navigator.clipboard.writeText(n),this.panel.toast(this.t("copied"))}catch{this.renderRoot.querySelector(".share-url")?.select()}}_renderDialog(){if(!this._dialog)return"";let n=this._dialog.mode,r;return n==="share"?r=this._renderShare():n==="import"?r=this._renderImport():r=this._renderForm(),v`<div class="backdrop" @click=${this._close}></div>
      <div class="dialog" role="dialog">${r}</div>`}_renderForm(){let n=this.t,r=this._draft,a=this._dialog.role==="PRIMARY",h=(b,K)=>this._draft={...r,[b]:K},d=this._draftError(r,!a),f=d===n("err_name_required")&&!r.touched?null:d,z=ze(r.name.trim()),A=$r(this._psk(r));return v`
      <h2>${this._dialog.mode==="edit"?`${n("edit_channel")} #${this._dialog.index}`:n("add_channel")}</h2>
      <label class="field">
        <span>${n("name")} <span class="small ${z>Mn?"err":"muted"}">${z}/${Mn} ${n("bytes")}</span></span>
        <input
          .value=${r.name}
          placeholder=${a?n("primary_name_hint"):""}
          @input=${b=>this._draft={...r,name:b.target.value,touched:!0}}
        />
      </label>
      <div class="field">
        <span>${n("psk")}</span>
        <div class="segmented">
          ${[...this._dialog.mode==="edit"&&Me(r.original?.psk)==="psk_custom"?[["keep",n("key_keep")]]:[],["random",n("generate_key")],["default",n("default_key")],["none",n("no_key")],["custom",n("key_custom")]].map(([b,K])=>v`<button
              type="button"
              class=${r.keyMode===b?"active":""}
              @click=${()=>this._draft={...r,keyMode:b,psk:b==="random"?zi():r.psk}}
            >
              ${K}
            </button>`)}
        </div>
        ${r.keyMode==="random"||r.keyMode==="custom"?v`<div class="row">
              <input
                class="grow mono"
                .value=${r.psk}
                ?readonly=${r.keyMode==="random"}
                placeholder="base64"
                @input=${b=>h("psk",b.target.value.trim())}
              />
              ${r.keyMode==="random"?v`<button class="icon" title=${n("generate_key")} @click=${()=>h("psk",zi())}>
                    <ha-icon icon="mdi:refresh"></ha-icon>
                  </button>`:""}
            </div>
            <span class="small muted">${A>=0?`${A} ${n("bytes")} (AES-${A===16?"128":A===32?"256":"?"})`:""}</span>`:v`<span class="small ${r.keyMode==="none"?"err":"muted"}">${n(`key_hint_${r.keyMode}`)}</span>`}
      </div>
      <label class="field">
        <span>${n("position_precision")}</span>
        <select @change=${b=>h("precision",Number(b.target.value))}>
          ${kr.map(([b])=>v`<option value=${b} ?selected=${Number(r.precision)===b}>${this._precisionLabel(b)}</option>`)}
        </select>
      </label>
      <label class="row"><input type="checkbox" .checked=${r.uplink} @change=${b=>h("uplink",b.target.checked)} />${n("mqtt_uplink")}</label>
      <label class="row"><input type="checkbox" .checked=${r.downlink} @change=${b=>h("downlink",b.target.checked)} />${n("mqtt_downlink")}</label>
      <label class="row"><input type="checkbox" .checked=${r.muted} @change=${b=>h("muted",b.target.checked)} />${n("muted")}</label>
      ${f?v`<div class="err small">${f}</div>`:""}
      <div class="buttons">
        <button class="btn" @click=${this._close}>${n("cancel")}</button>
        <button class="btn primary" ?disabled=${!!d||this._busy} @click=${this._submitChannel}>
          ${this._dialog.mode==="edit"?n("save"):n("add_channel")}
        </button>
      </div>
    `}_renderImport(){let n=this.t,r=this._importUrl||"",a=/^https?:\/\/[^#]*#[A-Za-z0-9_\-+/=]+$/.test(r.trim());return v`
      <h2>${n("join_link")}</h2>
      <div class="muted small">${n("join_link_hint")}</div>
      <textarea
        rows="3"
        class="mono"
        placeholder="https://meshtastic.org/e/#…"
        .value=${r}
        @input=${h=>this._importUrl=h.target.value}
      ></textarea>
      <label class="row"><input type="radio" name="mode" .checked=${!this._importReplace} @change=${()=>this._importReplace=!1} />${n("import_add")}</label>
      <label class="row"><input type="radio" name="mode" .checked=${this._importReplace} @change=${()=>this._importReplace=!0} />${n("import_replace")}</label>
      ${this._importReplace?v`<div class="warn small">${n("replace_warning")}</div>`:""}
      <div class="buttons">
        <button class="btn" @click=${this._close}>${n("cancel")}</button>
        <button class="btn primary" ?disabled=${!a||this._busy} @click=${this._submitImport}>${n("join")}</button>
      </div>
    `}_renderShare(){let n=this.t,r=this._dialog.index,a=r==null?null:(this.channels||[]).find(d=>d.index===r),h="";if(this._share){let d=(0,Pr.default)(0,"M");d.addData(this._share),d.make(),h=d.createSvgTag({cellSize:5,margin:3,scalable:!0})}return v`
      <h2>${n("share")}: ${a?Gt(a,this.lora,n):n("all_channels")}</h2>
      <div class="muted small">${n(r==null?"share_all_hint":"share_hint")}</div>
      <div class="qr">${this._share?vr(h):n("connecting")}</div>
      ${this._share?v`<div class="row">
            <input class="grow mono share-url" readonly .value=${this._share} @focus=${d=>d.target.select()} />
            <button class="btn" @click=${()=>this._copy(this._share)}><ha-icon icon="mdi:content-copy"></ha-icon>${n("copy")}</button>
          </div>`:""}
      <div class="buttons"><button class="btn" @click=${this._close}>${n("close")}</button></div>
    `}static styles=[xt,ft`
      .head {
        flex-wrap: wrap;
        margin-bottom: 12px;
      }
      .head h2 {
        margin: 0;
      }
      .list {
        display: flex;
        flex-direction: column;
      }
      .channel {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 0;
        border-top: 1px solid var(--divider-color);
      }
      .channel .avatar {
        background: var(--secondary-text-color);
      }
      .channel .avatar.primary {
        background: var(--primary-color);
      }
      .name {
        font-weight: 500;
      }
      ha-icon.mini {
        --mdc-icon-size: 14px;
        vertical-align: -2px;
      }
      .icon.danger {
        color: var(--error-color, #db4437);
      }
      .icon-space {
        width: 32px;
      }
      .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 100;
      }
      .dialog {
        position: fixed;
        z-index: 101;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: min(480px, 94vw);
        max-height: 90vh;
        overflow-y: auto;
        box-sizing: border-box;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .dialog h2 {
        margin: 0;
        font-size: 1.2em;
        font-weight: 500;
      }
      .field {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .field > span:first-child {
        font-size: 0.85em;
        color: var(--secondary-text-color);
      }
      .segmented {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
      }
      .segmented button {
        font: inherit;
        font-size: 0.85em;
        padding: 4px 10px;
        border-radius: 14px;
        border: 1px solid var(--divider-color);
        background: none;
        color: inherit;
        cursor: pointer;
      }
      .segmented button.active {
        background: var(--primary-color);
        border-color: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }
      .mono {
        font-family: var(--code-font-family, monospace);
        font-size: 0.85em;
      }
      textarea {
        resize: vertical;
        width: 100%;
      }
      .buttons {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
      }
      .qr {
        align-self: center;
        width: min(260px, 70vw);
        background: #fff;
        border-radius: 8px;
        padding: 4px;
        color: #000;
        text-align: center;
      }
      .qr svg {
        display: block;
        width: 100%;
        height: auto;
      }
    `]};customElements.define("mm-channels",An);var Cn=class extends ct{static properties={panel:{attribute:!1},rev:{type:Number},_cfg:{state:!0},_section:{state:!0},_draft:{state:!0},_dirty:{state:!0},_saving:{state:!0},_error:{state:!0}};constructor(){super(),this._section="owner",this._draft=null,this._dirty=!1}connectedCallback(){super.connectedCallback(),this.panel&&(this.panel.configStale=!1),this.panel?.isAdmin&&this.panel?.data?.status?.connected&&this._load()}updated(n){let r=this.panel?.data?.status?.connected;this.panel?.configStale&&this._cfg&&!this._dirty&&r&&(this.panel.configStale=!1,this._cfg=null),n.has("rev")&&r&&!this._cfg&&!this._loading&&this.panel.isAdmin&&this._load()}async _load(){this._loading=!0;try{this._cfg=await this.panel.ws("config_get"),this._error=null,this._select(this._section,!0)}catch(n){this._error=n.message||String(n)}this._loading=!1}async _select(n,r=!1){if(!r&&this._dirty&&!await this.panel.confirm(`${this.panel.t("unsaved")}. ${this.panel.t("cancel")}?`))return;this._section=n,this._dirty=!1;let a=this._cfg;if(a)if(n==="owner"){let h=a.owner||{};this._draft={long_name:h.longName||"",short_name:h.shortName||"",is_licensed:!!h.isLicensed,is_unmessagable:!!h.isUnmessagable}}else if(n==="channels")this._draft={};else if(n==="fixed"){let h=Rt(this.panel.myNode);this._draft={latitude:h?.lat??"",longitude:h?.lon??"",altitude:h?.alt??0}}else{let[h,d]=n.split(":");this._draft=structuredClone(a.values[h][d])}}_change(n){this._draft=n,this._dirty=!0}async _run(n){let r=this.panel;this._saving=!0;try{await n(),this._dirty=!1,r.toast(r.t("saved"))}catch(a){r.toast(`${r.t("error")}: ${a.message||a}`,!0)}this._saving=!1}async _save(){let n=this.panel,r=this._section;if(r==="owner"){await this._run(()=>n.ws("owner_set",this._draft));let d=n.myNode;d?.user&&(d.user={...d.user,longName:this._draft.long_name,shortName:this._draft.short_name},n.bump()),this._cfg.owner={...this._cfg.owner,longName:this._draft.long_name,shortName:this._draft.short_name,isLicensed:this._draft.is_licensed,isUnmessagable:this._draft.is_unmessagable};return}let[a,h]=r.split(":");await this._run(()=>n.ws("config_set",{sections:[{kind:a,section:h,values:this._draft}]})),this._cfg.values[a][h]=structuredClone(this._draft)}render(){let n=this.panel,r=n.t;if(!n.isAdmin)return v`<div class="card">${r("admin_only")}</div>`;if(!n.data.status.connected&&!this._cfg)return v``;if(this._error)return v`<div class="card err">${r("error")}: ${this._error}</div>`;if(!this._cfg)return v`<div class="muted">${r("connecting")}</div>`;let a=this._cfg,h=(d,f,z)=>v`<button class="nav ${this._section===d?"active":""}" @click=${()=>this._select(d)}>
        ${z?v`<ha-icon icon=${z}></ha-icon>`:""}<span>${f}</span>
      </button>`;return v`
      <div class="layout">
        <div class="sidebar card">
          ${h("owner",r("owner"),"mdi:account")}
          ${h("channels",r("channels"),"mdi:pound")}
          ${h("fixed",r("fixed_position"),"mdi:map-marker")}
          <div class="group">${r("config_sections")}</div>
          ${Object.keys(a.schema.config).map(d=>h(`config:${d}`,r.section(d)))}
          <div class="group">${r("module_sections")}</div>
          ${Object.keys(a.schema.module).map(d=>h(`module:${d}`,r.section(d)))}
        </div>
        <div class="editor">${this._renderEditor()}</div>
      </div>
    `}_renderEditor(){let n=this.panel,r=n.t,a=this._section;if(!this._draft)return v``;if(a==="channels")return this._renderChannels();if(a==="fixed")return this._renderFixed();let h,d;if(a==="owner"){d=r("owner");let f=this._draft;h=v`<div class="owner">
        <label class="field"><span>${r("long_name")}</span>
          <input maxlength="39" .value=${f.long_name} @input=${z=>this._change({...f,long_name:z.target.value})} />
        </label>
        <label class="field"><span>${r("short_name")}</span>
          <input maxlength="4" .value=${f.short_name} @input=${z=>this._change({...f,short_name:z.target.value})} />
        </label>
        <label class="row"><input type="checkbox" .checked=${f.is_licensed} @change=${z=>this._change({...f,is_licensed:z.target.checked})} />${r("licensed")}</label>
        <label class="row"><input type="checkbox" .checked=${f.is_unmessagable} @change=${z=>this._change({...f,is_unmessagable:z.target.checked})} />${r("unmessagable")}</label>
      </div>`}else{let[f,z]=a.split(":");d=r.section(z),h=v`<mm-proto-form
        .schema=${this._cfg.schema[f][z]}
        .value=${this._draft}
        @value-changed=${A=>this._change(A.detail.value)}
      ></mm-proto-form>`}return v`<div class="card">
      <div class="row head">
        <h2 class="grow">${d}</h2>
        ${this._dirty?v`<span class="warn small">${r("unsaved")}</span>`:""}
        <button class="btn primary" ?disabled=${!this._dirty||this._saving||!n.data.status.connected} @click=${this._save}>
          <ha-icon icon="mdi:content-save"></ha-icon>${r("save")}
        </button>
      </div>
      ${a.startsWith("config:")?v`<div class="muted small note">${r("reboot_warning")}</div>`:""}
      ${h}
    </div>`}_renderChannels(){let n=this.panel;return v`<mm-channels
      .panel=${n}
      .rev=${this.rev}
      .channels=${n.data.channels}
      .lora=${n.data.lora}
    ></mm-channels>`}_renderFixed(){let n=this.panel,r=n.t,a=this._draft,h=(f,z)=>this._change({...a,[f]:z}),d=a.latitude!==""&&a.longitude!==""&&!isNaN(a.latitude)&&!isNaN(a.longitude);return v`<div class="card">
      <h2>${r("fixed_position")}</h2>
      <div class="owner">
        <label class="field"><span>${r("latitude")}</span>
          <input type="number" step="any" .value=${String(a.latitude)} @input=${f=>h("latitude",f.target.value)} />
        </label>
        <label class="field"><span>${r("longitude")}</span>
          <input type="number" step="any" .value=${String(a.longitude)} @input=${f=>h("longitude",f.target.value)} />
        </label>
        <label class="field"><span>${r("altitude")} (m)</span>
          <input type="number" step="1" .value=${String(a.altitude)} @input=${f=>h("altitude",f.target.value)} />
        </label>
      </div>
      <div class="row actions">
        <button
          class="btn"
          @click=${()=>this._change({latitude:n.hass.config.latitude,longitude:n.hass.config.longitude,altitude:Math.round(n.hass.config.elevation||0)})}
        >
          <ha-icon icon="mdi:home-map-marker"></ha-icon>${r("use_home")}
        </button>
        <button
          class="btn primary"
          ?disabled=${!d||this._saving||!n.data.status.connected}
          @click=${()=>this._run(()=>n.ws("fixed_position",{latitude:Number(a.latitude),longitude:Number(a.longitude),altitude:Number(a.altitude)||0}))}
        >
          <ha-icon icon="mdi:map-marker-check"></ha-icon>${r("set_fixed")}
        </button>
        <button
          class="btn danger"
          ?disabled=${this._saving||!n.data.status.connected}
          @click=${()=>this._run(()=>n.ws("device_action",{action:"remove_fixed_position"}))}
        >
          <ha-icon icon="mdi:map-marker-remove"></ha-icon>${r("remove_fixed")}
        </button>
      </div>
    </div>`}static styles=[xt,ft`
      .layout {
        display: flex;
        gap: 16px;
        align-items: flex-start;
        max-width: 1300px;
        margin: 0 auto;
      }
      .sidebar {
        width: 230px;
        flex: none;
        padding: 8px 0;
        position: sticky;
        top: 0;
        max-height: calc(100vh - 160px);
        overflow-y: auto;
      }
      .editor {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      @media (max-width: 760px) {
        .layout {
          flex-direction: column;
        }
        .sidebar {
          width: 100%;
          position: static;
          max-height: 220px;
        }
      }
      .nav {
        font: inherit;
        color: inherit;
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        padding: 8px 16px;
        background: none;
        border: none;
        text-align: left;
        cursor: pointer;
      }
      .nav ha-icon {
        --mdc-icon-size: 18px;
        color: var(--secondary-text-color);
      }
      .nav.active {
        background: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
        color: var(--primary-color);
        font-weight: 500;
      }
      .group {
        padding: 12px 16px 4px;
        font-size: 0.8em;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--secondary-text-color);
      }
      .head {
        margin-bottom: 12px;
      }
      .head h2 {
        margin: 0;
      }
      .note {
        margin-bottom: 12px;
      }
      .owner {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 12px 16px;
        align-items: end;
      }
      .field {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .field > span {
        font-size: 0.85em;
        color: var(--secondary-text-color);
      }
      .psk {
        flex-wrap: wrap;
        margin-bottom: 12px;
      }
      .actions {
        flex-wrap: wrap;
        margin-top: 16px;
      }
      .url input {
        width: 100%;
        font-family: var(--code-font-family, monospace);
        font-size: 0.85em;
      }
    `]};customElements.define("mm-config",Cn);var Sn=class extends ct{static properties={panel:{attribute:!1},rev:{type:Number},num:{type:Number},_busy:{state:!0}};_close(){this.dispatchEvent(new CustomEvent("closed"))}async _request(n){let r=this.panel;this._busy=n;try{await r.ws("node_request",{node:this.num,request:n}),r.toast(r.t("request_sent"))}catch(a){r.toast(`${r.t("error")}: ${a.message||a}`,!0)}this._busy=null}async _action(n,r){await this.panel.action(n,{node:this.num},{confirmText:r})&&n==="remove_node"&&this._close()}render(){if(this.num==null||!this.panel)return v``;let n=this.panel,r=n.t,a=n.nodes.get(this.num)||{num:this.num},h=a.user||{},d=this.num===n.myNum,f=Rt(a),z=d?null:Li(Rt(n.myNode),f),A=a.deviceMetrics||{},b=a.environmentMetrics||{},K=n.traceroutes.filter(et=>et.target===this.num).slice(-5).reverse(),H=n.data?.status?.connected;return v`
      <div class="backdrop" @click=${this._close}></div>
      <div class="dialog" role="dialog">
        <div class="head">
          <div class="avatar" style="background:${he(this.num)}">${Nt(a,this.num)}</div>
          <div class="grow">
            <div class="name">${te(a,this.num)}</div>
            <div class="muted small">${Qt(this.num)} · ${h.hwModel||"?"} · ${h.role||"CLIENT"}</div>
          </div>
          <button class="icon" @click=${this._close} title=${r("close")}><ha-icon icon="mdi:close"></ha-icon></button>
        </div>
        <div class="body">
          ${d?"":v`<div class="actions">
                <button class="btn primary" @click=${()=>n.openDm(this.num)}>
                  <ha-icon icon="mdi:message-text"></ha-icon>${r("send_dm")}
                </button>
                ${[["traceroute","mdi:routes","traceroute"],["position","mdi:crosshairs-gps","request_position"],["telemetry","mdi:chart-line","request_telemetry"],["nodeinfo","mdi:account-sync","exchange_info"]].map(([et,U,Tt])=>v`<button
                    class="btn"
                    ?disabled=${!H||this._busy}
                    @click=${()=>this._request(et)}
                  >
                    <ha-icon icon=${U}></ha-icon>${r(Tt)}
                  </button>`)}
              </div>`}

          <dl class="kv">
            <dt>${r("last_heard")}</dt>
            <dd>${d?r("you"):a.lastHeard?v`${Le(a.lastHeard,r)} <span class="muted small">(${Te(a.lastHeard,r.lang)})</span>`:r("never")}</dd>
            ${d?"":v`<dt>Hops</dt><dd>${Ae(a.hopsAway,r)||"\u2014"}${a.viaMqtt?v` <span class="chip">MQTT</span>`:""}</dd>
                  <dt>${r("snr")}</dt><dd>${a.snr!=null?`${a.snr} dB`:"\u2014"}${a.rssi!=null?` \xB7 RSSI ${a.rssi} dBm`:""}</dd>`}
            ${h.publicKey?v`<dt>${r("public_key")}</dt><dd class="mono small">${h.publicKey}</dd>`:""}
          </dl>

          ${f?v`<h3>${r("position")}</h3>
                <dl class="kv">
                  <dt>${r("latitude")} / ${r("longitude")}</dt>
                  <dd>
                    <a href="https://www.openstreetmap.org/?mlat=${f.lat}&mlon=${f.lon}#map=14/${f.lat}/${f.lon}" target="_blank" rel="noreferrer">
                      ${f.lat.toFixed(5)}, ${f.lon.toFixed(5)}
                    </a>
                  </dd>
                  ${f.alt!=null?v`<dt>${r("altitude")}</dt><dd>${f.alt} m</dd>`:""}
                  ${z!=null?v`<dt>${r("distance")}</dt><dd>${Ti(z)}</dd>`:""}
                </dl>`:""}

          ${Object.keys(A).length?v`<h3>${r("metrics")}</h3>
                <dl class="kv">
                  ${A.batteryLevel!=null?v`<dt>${r("battery")}</dt><dd>${A.batteryLevel>100?r("powered"):`${A.batteryLevel}%`}</dd>`:""}
                  ${A.voltage!=null?v`<dt>${r("voltage")}</dt><dd>${A.voltage.toFixed(2)} V</dd>`:""}
                  ${A.channelUtilization!=null?v`<dt>${r("channel_util")}</dt><dd>${A.channelUtilization.toFixed(1)}%</dd>`:""}
                  ${A.airUtilTx!=null?v`<dt>${r("air_util")}</dt><dd>${A.airUtilTx.toFixed(2)}%</dd>`:""}
                  ${A.uptimeSeconds!=null?v`<dt>${r("uptime")}</dt><dd>${Pi(A.uptimeSeconds)}</dd>`:""}
                </dl>`:""}

          ${Object.keys(b).length?v`<h3>${r("environment")}</h3>
                <dl class="kv">
                  ${Object.entries(b).map(([et,U])=>v`<dt>${Qe(et.replace(/([A-Z])/g,"_$1").toLowerCase())}</dt>
                      <dd>${typeof U=="number"?Math.round(U*100)/100:U}</dd>`)}
                </dl>`:""}

          ${d?"":v`<h3>${r("traceroutes")}</h3>
                ${K.length?K.map(et=>this._renderTrace(et)):v`<div class="muted small">${r("no_traceroutes")}</div>`}`}

          ${n.isAdmin&&!d?v`<div class="actions admin">
                <button class="btn" ?disabled=${!H} @click=${()=>this._action(a.isFavorite?"unfavorite":"favorite")}>
                  <ha-icon icon=${a.isFavorite?"mdi:star-off":"mdi:star"}></ha-icon>${r(a.isFavorite?"unfavorite":"favorite")}
                </button>
                <button class="btn" ?disabled=${!H} @click=${()=>this._action(a.isIgnored?"unignore":"ignore")}>
                  <ha-icon icon=${a.isIgnored?"mdi:eye":"mdi:eye-off"}></ha-icon>${r(a.isIgnored?"unignore":"ignore")}
                </button>
                <button class="btn danger" ?disabled=${!H} @click=${()=>this._action("remove_node",`${r("remove_node")}?`)}>
                  <ha-icon icon="mdi:delete"></ha-icon>${r("remove_node")}
                </button>
              </div>`:""}
        </div>
      </div>
    `}_renderTrace(n){let r=this.panel,a=r.t,h=A=>Nt(r.nodes.get(A),A),d=(A,b)=>A&&A[b]!=null&&A[b]!==-128?` (${(A[b]/4).toFixed(1)} dB)`:"",f=[r.myNum,...n.route,n.target],z=[n.target,...n.route_back,r.myNum];return v`<div class="trace">
      <div class="muted small">${Te(n.time,a.lang)}</div>
      <div><span class="muted small">${a("towards")}:</span> ${f.map((A,b)=>`${b?" \u2192 ":""}${h(A)}${b?d(n.snr_towards,b-1):""}`).join("")}</div>
      ${n.snr_back?.length||n.route_back?.length?v`<div><span class="muted small">${a("back")}:</span> ${z.map((A,b)=>`${b?" \u2192 ":""}${h(A)}${b?d(n.snr_back,b-1):""}`).join("")}</div>`:""}
    </div>`}static styles=[xt,ft`
      .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 100;
      }
      .dialog {
        position: fixed;
        z-index: 101;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: min(560px, 100vw);
        max-height: min(85vh, 100%);
        display: flex;
        flex-direction: column;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        border-radius: 16px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
        overflow: hidden;
      }
      @media (max-width: 600px) {
        .dialog {
          max-height: 100%;
          height: 100%;
          border-radius: 0;
        }
      }
      .head {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px;
        border-bottom: 1px solid var(--divider-color);
      }
      .name {
        font-size: 1.2em;
        font-weight: 500;
      }
      .body {
        padding: 16px;
        overflow-y: auto;
      }
      h3 {
        font-size: 1em;
        font-weight: 500;
        margin: 16px 0 8px;
      }
      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 16px;
      }
      .actions.admin {
        margin: 16px 0 0;
        padding-top: 16px;
        border-top: 1px solid var(--divider-color);
      }
      .mono {
        font-family: var(--code-font-family, monospace);
      }
      .trace {
        padding: 6px 0;
        border-bottom: 1px solid var(--divider-color);
      }
      a {
        color: var(--primary-color);
      }
    `]};customElements.define("mm-node-dialog",Sn);var En=class extends ct{static properties={t:{attribute:!1},_text:{state:!0}};ask(n){return this._text=n,new Promise(r=>this._resolve=r)}_answer(n){this._text=null,this._resolve?.(n),this._resolve=null}render(){return this._text?v`
      <div class="backdrop" @click=${()=>this._answer(!1)}></div>
      <div class="dialog" role="alertdialog">
        <div class="text">${this._text}</div>
        <div class="buttons">
          <button class="btn" @click=${()=>this._answer(!1)}>${this.t("cancel")}</button>
          <button class="btn primary" @click=${()=>this._answer(!0)}>${this.t("confirm")}</button>
        </div>
      </div>
    `:v``}static styles=[xt,ft`
      .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 200;
      }
      .dialog {
        position: fixed;
        z-index: 201;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: min(420px, 92vw);
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
      }
      .buttons {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        margin-top: 20px;
      }
    `]};customElements.define("mm-confirm-dialog",En);var Bn="meshtastic_manager",xa=[["radio","mdi:radio-handheld"],["messages","mdi:message-text"],["nodes","mdi:account-group"],["map","mdi:map"],["config","mdi:cog"]];function Lr(c){try{return localStorage.getItem(c)}catch{return null}}function Tr(c,n){try{localStorage.setItem(c,n)}catch{}}var On=class extends ct{static properties={hass:{attribute:!1},narrow:{type:Boolean},panel:{attribute:!1},route:{attribute:!1},_entries:{state:!0},_entryId:{state:!0},_tab:{state:!0},_rev:{state:!0},_loading:{state:!0},_error:{state:!0},_dialogNode:{state:!0},_toast:{state:!0}};constructor(){super(),this._entries=null,this._entryId=Lr("meshtastic_manager.entry"),this._tab=Lr("meshtastic_manager.tab")||"radio",this._rev=0,this.data=null,this.nodes=new Map,this.messages=new Map,this.traceroutes=[],this.openConversation=null,this._unsub=null}get t(){let n=this.hass?.locale?.language||this.hass?.language;return(!this._t||this._t.forLang!==n)&&(this._t=hr(n),this._t.forLang=n),this._t}get isAdmin(){return!!this.hass?.user?.is_admin}get myNum(){return this.data?.status?.my_num??null}get myNode(){return this.myNum!=null?this.nodes.get(this.myNum):null}connectedCallback(){super.connectedCallback(),this.hass&&this._entries===null?this._loadEntries():this._entryId&&!this._unsub&&this._entries&&this._selectEntry(this._entryId)}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribe()}updated(n){n.has("hass")&&this.hass&&this._entries===null&&!this._loadingEntries&&this._loadEntries()}ws(n,r={}){return this.hass.callWS({type:`${Bn}/${n}`,entry_id:this._entryId,...r})}bump(){this._rev++}toast(n,r=!1){this._toast={text:n,error:r},clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>this._toast=null,r?8e3:4e3)}async _loadEntries(){this._loadingEntries=!0;try{this._entries=await this.hass.callWS({type:`${Bn}/entries`})}catch(a){this._error=a.message||String(a),this._entries=[]}this._loadingEntries=!1;let n=this._entries.filter(a=>a.state==="loaded"),r=n.find(a=>a.entry_id===this._entryId)||n[0];r&&await this._selectEntry(r.entry_id)}async _selectEntry(n){this._unsubscribe(),this._entryId=n,Tr("meshtastic_manager.entry",n),this.messages=new Map,this.traceroutes=[],this.data=null,await this.reload();try{this._unsub=await this.hass.connection.subscribeMessage(r=>this._onEvent(r),{type:`${Bn}/subscribe`,entry_id:n})}catch(r){this._error=r.message||String(r)}}_unsubscribe(){this._unsub&&(this._unsub().catch?.(()=>{}),this._unsub=null)}async reload(){this._loading=!0;try{let n=await this.ws("snapshot");this.data=n,this.nodes=new Map(n.nodes.map(r=>[r.num,r])),this.traceroutes=await this.ws("traceroutes"),this.configStale=!0,this._error=null}catch(n){this._error=n.message||String(n)}this._loading=!1,this.bump()}async refreshConversations(){try{let n=await this.ws("snapshot");this.data={...this.data,conversations:n.conversations},this.bump()}catch{}}_onEvent(n){if(n.entry_id===this._entryId){switch(n.type){case"status":{let r=this.data?.status?.connected;this.data&&(this.data.status=n.status),!r&&n.status.connected&&this.reload();break}case"snapshot":case"channels":this.reload();return;case"node":n.node&&this.nodes.set(n.node.num,n.node);break;case"node_removed":this.nodes.delete(n.num);break;case"message":this._onMessage(n.message);break;case"message_status":{for(let r of this.messages.values()){let a=r.find(h=>h.dir==="out"&&h.id===n.id);a&&(a.status=n.status,a.error=n.error)}break}case"traceroute":this.traceroutes=[...this.traceroutes,n.traceroute],this.toast(this._tracerouteText(n.traceroute));break;default:return}this.bump()}}_tracerouteText(n){let r=h=>this.nodes.get(h)?.user?.shortName||(h>>>0).toString(16).slice(-4),a=[this.myNum,...n.route,n.target].map(r).join(" \u2192 ");return`${this.t("traceroute")}: ${a}`}_onMessage(n){let r=n.conversation,a=this.messages.get(r);a&&!a.some(f=>f.id===n.id&&f.from===n.from&&f.dir===n.dir)&&a.push(n);let h=this.data?.conversations||[],d=h.find(f=>f.key===r);d||(d={key:r,count:0,unread:0},h.push(d)),d.count++,d.last=n,n.dir==="in"&&!(this._tab==="messages"&&this.openConversation===r&&document.visibilityState==="visible")?d.unread++:n.dir==="in"&&this.ws("mark_read",{conversation:r}).catch(()=>{}),h.sort((f,z)=>z.last.time-f.last.time),this.data&&(this.data.conversations=h)}async loadConversation(n){let r=await this.ws("messages",{conversation:n,limit:500});this.messages.set(n,r),this.bump()}openNode(n){this._dialogNode=n}openDm(n){this._dialogNode=null,this.openConversation=`dm:${n}`,this._setTab("messages")}confirm(n){return this.shadowRoot.querySelector("mm-confirm-dialog").ask(n)}async action(n,r={},{confirmText:a}={}){if(a&&!await this.confirm(a))return!1;try{return await this.ws("device_action",{action:n,...r}),this.toast(this.t("done")),!0}catch(h){return this.toast(`${this.t("error")}: ${h.message||h}`,!0),!1}}_setTab(n){this._tab=n,Tr("meshtastic_manager.tab",n)}render(){let n=this.t,r=this.data?.status?.connected,a=(this.data?.conversations||[]).reduce((h,d)=>h+(d.unread||0),0);return v`
      <div class="toolbar">
        <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
        <div class="title">Meshtastic</div>
        ${this._entries&&this._entries.length>1?v`<select @change=${h=>this._selectEntry(h.target.value)}>
              ${this._entries.map(h=>v`<option value=${h.entry_id} ?selected=${h.entry_id===this._entryId}>${h.title}</option>`)}
            </select>`:v`<div class="entry-title">${this.data?.title||""}</div>`}
        ${this.data?v`<span class="conn ${r?"ok":"err"}" title=${this.data.status.connection}>
              <ha-icon icon=${r?"mdi:lan-connect":"mdi:lan-disconnect"}></ha-icon>
              ${this.narrow?"":n(r?"connected":"disconnected")}
            </span>`:""}
      </div>
      <div class="tabs" role="tablist">
        ${xa.map(([h,d])=>v`<button
            role="tab"
            class=${this._tab===h?"active":""}
            @click=${()=>this._setTab(h)}
          >
            <ha-icon icon=${d}></ha-icon>
            <span class="label">${n(`tab_${h}`)}</span>
            ${h==="messages"&&a?v`<span class="badge">${a}</span>`:""}
          </button>`)}
      </div>
      <div class="content ${this._tab==="map"||this._tab==="messages"?"full":""}">${this._renderContent()}</div>
      <mm-node-dialog
        .panel=${this}
        .rev=${this._rev}
        .num=${this._dialogNode}
        @closed=${()=>this._dialogNode=null}
      ></mm-node-dialog>
      <mm-confirm-dialog .t=${n}></mm-confirm-dialog>
      ${this._toast?v`<div class="toast ${this._toast.error?"error":""}">${this._toast.text}</div>`:""}
    `}_renderContent(){let n=this.t;if(this._entries===null)return v`<div class="center muted">${n("connecting")}</div>`;if(!this._entries.length)return v`<div class="center card">${n("no_entries")}</div>`;if(!this.data)return v`<div class="center muted">${this._error?`${n("error")}: ${this._error}`:n("connecting")}</div>`;let r=this.data.status.connected?"":v`<div class="banner">
          ${n("not_connected_hint")}
          ${this.data.status.last_error?v`<div class="small">${n("last_error")}: ${this.data.status.last_error}</div>`:""}
        </div>`,a=(()=>{switch(this._tab){case"messages":return v`<mm-messages .panel=${this} .rev=${this._rev}></mm-messages>`;case"nodes":return v`<mm-nodes .panel=${this} .rev=${this._rev}></mm-nodes>`;case"map":return v`<mm-map .panel=${this} .rev=${this._rev}></mm-map>`;case"config":return v`<mm-config .panel=${this} .rev=${this._rev}></mm-config>`;default:return v`<mm-radio .panel=${this} .rev=${this._rev}></mm-radio>`}})();return v`${r}${a}`}static styles=[xt,ft`
      :host {
        display: flex;
        flex-direction: column;
        height: 100vh;
        background: var(--primary-background-color);
        position: relative;
      }
      .toolbar {
        display: flex;
        align-items: center;
        gap: 12px;
        height: var(--header-height, 56px);
        padding: 0 12px;
        box-sizing: border-box;
        background: var(--app-header-background-color, var(--primary-color));
        color: var(--app-header-text-color, var(--text-primary-color, #fff));
        flex: none;
      }
      .toolbar .title {
        font-size: 20px;
        font-weight: 400;
      }
      .toolbar .entry-title {
        opacity: 0.85;
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .toolbar select {
        flex: 1;
        max-width: 280px;
        color: inherit;
        background: transparent;
        border-color: currentColor;
      }
      .toolbar select option {
        color: var(--primary-text-color);
        background: var(--card-background-color);
      }
      .conn {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        margin-left: auto;
        font-size: 0.9em;
        color: inherit;
      }
      .conn.err ha-icon {
        color: var(--error-color, #db4437);
      }
      .tabs {
        display: flex;
        flex: none;
        overflow-x: auto;
        background: var(--app-header-background-color, var(--primary-color));
        color: var(--app-header-text-color, var(--text-primary-color, #fff));
      }
      .tabs button {
        font: inherit;
        flex: 1;
        min-width: 72px;
        background: none;
        border: none;
        color: inherit;
        opacity: 0.75;
        padding: 10px 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        border-bottom: 2px solid transparent;
      }
      .tabs button.active {
        opacity: 1;
        border-bottom-color: currentColor;
      }
      .tabs .badge {
        background: var(--error-color, #db4437);
      }
      .content {
        flex: 1;
        overflow: auto;
        padding: 16px;
        box-sizing: border-box;
      }
      .content.full {
        padding: 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }
      .content.full > :last-child {
        flex: 1;
        min-height: 0;
      }
      .center {
        max-width: 600px;
        margin: 48px auto;
        text-align: center;
      }
      .banner {
        background: var(--warning-color, #ffa600);
        color: #000;
        padding: 8px 16px;
        margin: 0 0 12px;
        border-radius: 8px;
      }
      .content.full .banner {
        margin: 0;
        border-radius: 0;
        flex: none;
      }
      .toast {
        position: fixed;
        left: 50%;
        bottom: 24px;
        transform: translateX(-50%);
        background: var(--primary-text-color);
        color: var(--primary-background-color);
        padding: 10px 18px;
        border-radius: 8px;
        z-index: 1000;
        max-width: 90vw;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      }
      .toast.error {
        background: var(--error-color, #db4437);
        color: #fff;
      }
      @media (max-width: 600px) {
        .tabs .label {
          display: none;
        }
      }
    `]};customElements.define("meshtastic-manager-panel",On);
/*! Bundled license information:

leaflet/dist/leaflet-src.js:
  (* @preserve
   * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
   * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
lit-html/directive.js:
lit-html/directives/unsafe-html.js:
lit-html/directives/unsafe-svg.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
