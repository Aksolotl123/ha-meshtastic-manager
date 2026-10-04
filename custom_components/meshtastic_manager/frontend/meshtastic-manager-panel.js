var Er=Object.create;var zo=Object.defineProperty;var Ar=Object.getOwnPropertyDescriptor;var Or=Object.getOwnPropertyNames;var Ir=Object.getPrototypeOf,Nr=Object.prototype.hasOwnProperty;var Zr=(c,o)=>()=>{try{return o||c((o={exports:{}}).exports,o),o.exports}catch(r){throw o=0,r}};var Br=(c,o,r,l)=>{if(o&&typeof o=="object"||typeof o=="function")for(let h of Or(o))!Nr.call(c,h)&&h!==r&&zo(c,h,{get:()=>o[h],enumerable:!(l=Ar(o,h))||l.enumerable});return c};var Rr=(c,o,r)=>(r=c!=null?Er(Ir(c)):{},Br(o||!c||!c.__esModule?zo(r,"default",{value:c,enumerable:!0}):r,c));var ts=Zr((ei,Qo)=>{(function(c,o){typeof ei=="object"&&typeof Qo<"u"?o(ei):typeof define=="function"&&define.amd?define(["exports"],o):(c=typeof globalThis<"u"?globalThis:c||self,o(c.leaflet={}))})(ei,(function(c){"use strict";var o="1.9.4";function r(t){var e,i,n,s;for(i=1,n=arguments.length;i<n;i++){s=arguments[i];for(e in s)t[e]=s[e]}return t}var l=Object.create||(function(){function t(){}return function(e){return t.prototype=e,new t}})();function h(t,e){var i=Array.prototype.slice;if(t.bind)return t.bind.apply(t,i.call(arguments,1));var n=i.call(arguments,2);return function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)}}var u=0;function f(t){return"_leaflet_id"in t||(t._leaflet_id=++u),t._leaflet_id}function v(t,e,i){var n,s,a,d;return d=function(){n=!1,s&&(a.apply(i,s),s=!1)},a=function(){n?s=arguments:(t.apply(i,arguments),setTimeout(d,e),n=!0)},a}function y(t,e,i){var n=e[1],s=e[0],a=n-s;return t===n&&i?t:((t-s)%a+a)%a+s}function b(){return!1}function $(t,e){if(e===!1)return t;var i=Math.pow(10,e===void 0?6:e);return Math.round(t*i)/i}function w(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function A(t){return w(t).split(/\s+/)}function k(t,e){Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?l(t.options):{});for(var i in e)t.options[i]=e[i];return t.options}function nt(t,e,i){var n=[];for(var s in t)n.push(encodeURIComponent(i?s.toUpperCase():s)+"="+encodeURIComponent(t[s]));return(!e||e.indexOf("?")===-1?"?":"&")+n.join("&")}var J=/\{ *([\w_ -]+) *\}/g;function un(t,e){return t.replace(J,function(i,n){var s=e[n];if(s===void 0)throw new Error("No value provided for variable "+i);return typeof s=="function"&&(s=s(e)),s})}var ht=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"};function ii(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1}var Le="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function ni(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var fn=0;function pn(t){var e=+new Date,i=Math.max(0,16-(e-fn));return fn=e+i,window.setTimeout(t,i)}var oi=window.requestAnimationFrame||ni("RequestAnimationFrame")||pn,mn=window.cancelAnimationFrame||ni("CancelAnimationFrame")||ni("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function Q(t,e,i){if(i&&oi===pn)t.call(e);else return oi.call(window,h(t,e))}function st(t){t&&mn.call(window,t)}var rs={__proto__:null,extend:r,create:l,bind:h,get lastId(){return u},stamp:f,throttle:v,wrapNum:y,falseFn:b,formatNum:$,trim:w,splitWords:A,setOptions:k,getParamString:nt,template:un,isArray:ht,indexOf:ii,emptyImageUrl:Le,requestFn:oi,cancelFn:mn,requestAnimFrame:Q,cancelAnimFrame:st};function vt(){}vt.extend=function(t){var e=function(){k(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},i=e.__super__=this.prototype,n=l(i);n.constructor=e,e.prototype=n;for(var s in this)Object.prototype.hasOwnProperty.call(this,s)&&s!=="prototype"&&s!=="__super__"&&(e[s]=this[s]);return t.statics&&r(e,t.statics),t.includes&&(as(t.includes),r.apply(null,[n].concat(t.includes))),r(n,t),delete n.statics,delete n.includes,n.options&&(n.options=i.options?l(i.options):{},r(n.options,t.options)),n._initHooks=[],n.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var a=0,d=n._initHooks.length;a<d;a++)n._initHooks[a].call(this)}},e},vt.include=function(t){var e=this.prototype.options;return r(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},vt.mergeOptions=function(t){return r(this.prototype.options,t),this},vt.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i=typeof t=="function"?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};function as(t){if(!(typeof L>"u"||!L||!L.Mixin)){t=ht(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var ot={on:function(t,e,i){if(typeof t=="object")for(var n in t)this._on(n,t[n],e);else{t=A(t);for(var s=0,a=t.length;s<a;s++)this._on(t[s],e,i)}return this},off:function(t,e,i){if(!arguments.length)delete this._events;else if(typeof t=="object")for(var n in t)this._off(n,t[n],e);else{t=A(t);for(var s=arguments.length===1,a=0,d=t.length;a<d;a++)s?this._off(t[a]):this._off(t[a],e,i)}return this},_on:function(t,e,i,n){if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}if(this._listens(t,e,i)===!1){i===this&&(i=void 0);var s={fn:e,ctx:i};n&&(s.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(s)}},_off:function(t,e,i){var n,s,a;if(this._events&&(n=this._events[t],!!n)){if(arguments.length===1){if(this._firingCount)for(s=0,a=n.length;s<a;s++)n[s].fn=b;delete this._events[t];return}if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}var d=this._listens(t,e,i);if(d!==!1){var p=n[d];this._firingCount&&(p.fn=b,this._events[t]=n=n.slice()),n.splice(d,1)}}},fire:function(t,e,i){if(!this.listens(t,i))return this;var n=r({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var s=this._events[t];if(s){this._firingCount=this._firingCount+1||1;for(var a=0,d=s.length;a<d;a++){var p=s[a],m=p.fn;p.once&&this.off(t,m,p.ctx),m.call(p.ctx||this,n)}this._firingCount--}}return i&&this._propagateEvent(n),this},listens:function(t,e,i,n){typeof t!="string"&&console.warn('"string" type argument expected');var s=e;typeof e!="function"&&(n=!!e,s=void 0,i=void 0);var a=this._events&&this._events[t];if(a&&a.length&&this._listens(t,s,i)!==!1)return!0;if(n){for(var d in this._eventParents)if(this._eventParents[d].listens(t,e,i,n))return!0}return!1},_listens:function(t,e,i){if(!this._events)return!1;var n=this._events[t]||[];if(!e)return!!n.length;i===this&&(i=void 0);for(var s=0,a=n.length;s<a;s++)if(n[s].fn===e&&n[s].ctx===i)return s;return!1},once:function(t,e,i){if(typeof t=="object")for(var n in t)this._on(n,t[n],e,!0);else{t=A(t);for(var s=0,a=t.length;s<a;s++)this._on(t[s],e,i,!0)}return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[f(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[f(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,r({layer:t.target,propagatedFrom:t.target},t),!0)}};ot.addEventListener=ot.on,ot.removeEventListener=ot.clearAllEventListeners=ot.off,ot.addOneTimeEventListener=ot.once,ot.fireEvent=ot.fire,ot.hasEventListeners=ot.listens;var ne=vt.extend(ot);function S(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e}var _n=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};S.prototype={clone:function(){return new S(this.x,this.y)},add:function(t){return this.clone()._add(z(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(z(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new S(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new S(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=_n(this.x),this.y=_n(this.y),this},distanceTo:function(t){t=z(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t=z(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=z(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+$(this.x)+", "+$(this.y)+")"}};function z(t,e,i){return t instanceof S?t:ht(t)?new S(t[0],t[1]):t==null?t:typeof t=="object"&&"x"in t&&"y"in t?new S(t.x,t.y):new S(t,e,i)}function D(t,e){if(t)for(var i=e?[t,e]:t,n=0,s=i.length;n<s;n++)this.extend(i[n])}D.prototype={extend:function(t){var e,i;if(!t)return this;if(t instanceof S||typeof t[0]=="number"||"x"in t)e=i=z(t);else if(t=tt(t),e=t.min,i=t.max,!e||!i)return this;return!this.min&&!this.max?(this.min=e.clone(),this.max=i.clone()):(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)),this},getCenter:function(t){return z((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return z(this.min.x,this.max.y)},getTopRight:function(){return z(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return typeof t[0]=="number"||t instanceof S?t=z(t):t=tt(t),t instanceof D?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=tt(t);var e=this.min,i=this.max,n=t.min,s=t.max,a=s.x>=e.x&&n.x<=i.x,d=s.y>=e.y&&n.y<=i.y;return a&&d},overlaps:function(t){t=tt(t);var e=this.min,i=this.max,n=t.min,s=t.max,a=s.x>e.x&&n.x<i.x,d=s.y>e.y&&n.y<i.y;return a&&d},isValid:function(){return!!(this.min&&this.max)},pad:function(t){var e=this.min,i=this.max,n=Math.abs(e.x-i.x)*t,s=Math.abs(e.y-i.y)*t;return tt(z(e.x-n,e.y-s),z(i.x+n,i.y+s))},equals:function(t){return t?(t=tt(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight())):!1}};function tt(t,e){return!t||t instanceof D?t:new D(t,e)}function et(t,e){if(t)for(var i=e?[t,e]:t,n=0,s=i.length;n<s;n++)this.extend(i[n])}et.prototype={extend:function(t){var e=this._southWest,i=this._northEast,n,s;if(t instanceof Z)n=t,s=t;else if(t instanceof et){if(n=t._southWest,s=t._northEast,!n||!s)return this}else return t?this.extend(O(t)||U(t)):this;return!e&&!i?(this._southWest=new Z(n.lat,n.lng),this._northEast=new Z(s.lat,s.lng)):(e.lat=Math.min(n.lat,e.lat),e.lng=Math.min(n.lng,e.lng),i.lat=Math.max(s.lat,i.lat),i.lng=Math.max(s.lng,i.lng)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,s=Math.abs(e.lng-i.lng)*t;return new et(new Z(e.lat-n,e.lng-s),new Z(i.lat+n,i.lng+s))},getCenter:function(){return new Z((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new Z(this.getNorth(),this.getWest())},getSouthEast:function(){return new Z(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){typeof t[0]=="number"||t instanceof Z||"lat"in t?t=O(t):t=U(t);var e=this._southWest,i=this._northEast,n,s;return t instanceof et?(n=t.getSouthWest(),s=t.getNorthEast()):n=s=t,n.lat>=e.lat&&s.lat<=i.lat&&n.lng>=e.lng&&s.lng<=i.lng},intersects:function(t){t=U(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),a=s.lat>=e.lat&&n.lat<=i.lat,d=s.lng>=e.lng&&n.lng<=i.lng;return a&&d},overlaps:function(t){t=U(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),a=s.lat>e.lat&&n.lat<i.lat,d=s.lng>e.lng&&n.lng<i.lng;return a&&d},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return t?(t=U(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function U(t,e){return t instanceof et?t:new et(t,e)}function Z(t,e,i){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,i!==void 0&&(this.alt=+i)}Z.prototype={equals:function(t,e){if(!t)return!1;t=O(t);var i=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return i<=(e===void 0?1e-9:e)},toString:function(t){return"LatLng("+$(this.lat,t)+", "+$(this.lng,t)+")"},distanceTo:function(t){return kt.distance(this,O(t))},wrap:function(){return kt.wrapLatLng(this)},toBounds:function(t){var e=180*t/40075017,i=e/Math.cos(Math.PI/180*this.lat);return U([this.lat-e,this.lng-i],[this.lat+e,this.lng+i])},clone:function(){return new Z(this.lat,this.lng,this.alt)}};function O(t,e,i){return t instanceof Z?t:ht(t)&&typeof t[0]!="object"?t.length===3?new Z(t[0],t[1],t[2]):t.length===2?new Z(t[0],t[1]):null:t==null?t:typeof t=="object"&&"lat"in t?new Z(t.lat,"lng"in t?t.lng:t.lon,t.alt):e===void 0?null:new Z(t,e,i)}var yt={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,i=this.scale(t),n=this.transformation.transform(e.min,i),s=this.transformation.transform(e.max,i);return new D(n,s)},infinite:!1,wrapLatLng:function(t){var e=this.wrapLng?y(t.lng,this.wrapLng,!0):t.lng,i=this.wrapLat?y(t.lat,this.wrapLat,!0):t.lat,n=t.alt;return new Z(i,e,n)},wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),n=e.lat-i.lat,s=e.lng-i.lng;if(n===0&&s===0)return t;var a=t.getSouthWest(),d=t.getNorthEast(),p=new Z(a.lat-n,a.lng-s),m=new Z(d.lat-n,d.lng-s);return new et(p,m)}},kt=r({},yt,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var i=Math.PI/180,n=t.lat*i,s=e.lat*i,a=Math.sin((e.lat-t.lat)*i/2),d=Math.sin((e.lng-t.lng)*i/2),p=a*a+Math.cos(n)*Math.cos(s)*d*d,m=2*Math.atan2(Math.sqrt(p),Math.sqrt(1-p));return this.R*m}}),gn=6378137,si={R:gn,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=Math.sin(n*e);return new S(this.R*t.lng*e,this.R*Math.log((1+s)/(1-s))/2)},unproject:function(t){var e=180/Math.PI;return new Z((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:(function(){var t=gn*Math.PI;return new D([-t,-t],[t,t])})()};function ri(t,e,i,n){if(ht(t)){this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=e,this._c=i,this._d=n}ri.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new S((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};function oe(t,e,i,n){return new ri(t,e,i,n)}var ai=r({},kt,{code:"EPSG:3857",projection:si,transformation:(function(){var t=.5/(Math.PI*si.R);return oe(t,.5,-t,.5)})()}),ls=r({},ai,{code:"EPSG:900913"});function vn(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function yn(t,e){var i="",n,s,a,d,p,m;for(n=0,a=t.length;n<a;n++){for(p=t[n],s=0,d=p.length;s<d;s++)m=p[s],i+=(s?"L":"M")+m.x+" "+m.y;i+=e?P.svg?"z":"x":""}return i||"M0 0"}var li=document.documentElement.style,Te="ActiveXObject"in window,hs=Te&&!document.addEventListener,bn="msLaunchUri"in navigator&&!("documentMode"in document),hi=pt("webkit"),xn=pt("android"),wn=pt("android 2")||pt("android 3"),cs=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),ds=xn&&pt("Google")&&cs<537&&!("AudioNode"in window),ci=!!window.opera,$n=!bn&&pt("chrome"),Pn=pt("gecko")&&!hi&&!ci&&!Te,us=!$n&&pt("safari"),kn=pt("phantom"),Ln="OTransition"in li,fs=navigator.platform.indexOf("Win")===0,Tn=Te&&"transition"in li,di="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!wn,zn="MozPerspective"in li,ps=!window.L_DISABLE_3D&&(Tn||di||zn)&&!Ln&&!kn,se=typeof orientation<"u"||pt("mobile"),ms=se&&hi,_s=se&&di,Sn=!window.PointerEvent&&window.MSPointerEvent,Cn=!!(window.PointerEvent||Sn),Mn="ontouchstart"in window||!!window.TouchEvent,gs=!window.L_NO_TOUCH&&(Mn||Cn),vs=se&&ci,ys=se&&Pn,bs=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,xs=(function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",b,e),window.removeEventListener("testPassiveEventSupport",b,e)}catch{}return t})(),ws=(function(){return!!document.createElement("canvas").getContext})(),ui=!!(document.createElementNS&&vn("svg").createSVGRect),$s=!!ui&&(function(){var t=document.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),Ps=!ui&&(function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&typeof e.adj=="object"}catch{return!1}})(),ks=navigator.platform.indexOf("Mac")===0,Ls=navigator.platform.indexOf("Linux")===0;function pt(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var P={ie:Te,ielt9:hs,edge:bn,webkit:hi,android:xn,android23:wn,androidStock:ds,opera:ci,chrome:$n,gecko:Pn,safari:us,phantom:kn,opera12:Ln,win:fs,ie3d:Tn,webkit3d:di,gecko3d:zn,any3d:ps,mobile:se,mobileWebkit:ms,mobileWebkit3d:_s,msPointer:Sn,pointer:Cn,touch:gs,touchNative:Mn,mobileOpera:vs,mobileGecko:ys,retina:bs,passiveEvents:xs,canvas:ws,svg:ui,vml:Ps,inlineSvg:$s,mac:ks,linux:Ls},En=P.msPointer?"MSPointerDown":"pointerdown",An=P.msPointer?"MSPointerMove":"pointermove",On=P.msPointer?"MSPointerUp":"pointerup",In=P.msPointer?"MSPointerCancel":"pointercancel",fi={touchstart:En,touchmove:An,touchend:On,touchcancel:In},Nn={touchstart:Es,touchmove:ze,touchend:ze,touchcancel:ze},Ft={},Zn=!1;function Ts(t,e,i){return e==="touchstart"&&Ms(),Nn[e]?(i=Nn[e].bind(this,i),t.addEventListener(fi[e],i,!1),i):(console.warn("wrong event specified:",e),b)}function zs(t,e,i){if(!fi[e]){console.warn("wrong event specified:",e);return}t.removeEventListener(fi[e],i,!1)}function Ss(t){Ft[t.pointerId]=t}function Cs(t){Ft[t.pointerId]&&(Ft[t.pointerId]=t)}function Bn(t){delete Ft[t.pointerId]}function Ms(){Zn||(document.addEventListener(En,Ss,!0),document.addEventListener(An,Cs,!0),document.addEventListener(On,Bn,!0),document.addEventListener(In,Bn,!0),Zn=!0)}function ze(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){e.touches=[];for(var i in Ft)e.touches.push(Ft[i]);e.changedTouches=[e],t(e)}}function Es(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&Y(e),ze(t,e)}function As(t){var e={},i,n;for(n in t)i=t[n],e[n]=i&&i.bind?i.bind(t):i;return t=e,e.type="dblclick",e.detail=2,e.isTrusted=!1,e._simulated=!0,e}var Os=200;function Is(t,e){t.addEventListener("dblclick",e);var i=0,n;function s(a){if(a.detail!==1){n=a.detail;return}if(!(a.pointerType==="mouse"||a.sourceCapabilities&&!a.sourceCapabilities.firesTouchEvents)){var d=Fn(a);if(!(d.some(function(m){return m instanceof HTMLLabelElement&&m.attributes.for})&&!d.some(function(m){return m instanceof HTMLInputElement||m instanceof HTMLSelectElement}))){var p=Date.now();p-i<=Os?(n++,n===2&&e(As(a))):n=1,i=p}}}return t.addEventListener("click",s),{dblclick:e,simDblclick:s}}function Ns(t,e){t.removeEventListener("dblclick",e.dblclick),t.removeEventListener("click",e.simDblclick)}var pi=Me(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),re=Me(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Rn=re==="webkitTransition"||re==="OTransition"?re+"End":"transitionend";function Dn(t){return typeof t=="string"?document.getElementById(t):t}function ae(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!i||i==="auto")&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);i=n?n[e]:null}return i==="auto"?null:i}function N(t,e,i){var n=document.createElement(t);return n.className=e||"",i&&i.appendChild(n),n}function H(t){var e=t.parentNode;e&&e.removeChild(t)}function Se(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function Ut(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function jt(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function mi(t,e){if(t.classList!==void 0)return t.classList.contains(e);var i=Ce(t);return i.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(i)}function M(t,e){if(t.classList!==void 0)for(var i=A(e),n=0,s=i.length;n<s;n++)t.classList.add(i[n]);else if(!mi(t,e)){var a=Ce(t);_i(t,(a?a+" ":"")+e)}}function W(t,e){t.classList!==void 0?t.classList.remove(e):_i(t,w((" "+Ce(t)+" ").replace(" "+e+" "," ")))}function _i(t,e){t.className.baseVal===void 0?t.className=e:t.className.baseVal=e}function Ce(t){return t.correspondingElement&&(t=t.correspondingElement),t.className.baseVal===void 0?t.className:t.className.baseVal}function rt(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&Zs(t,e)}function Zs(t,e){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch{if(e===1)return}e=Math.round(e*100),i?(i.Enabled=e!==100,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}function Me(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}function Mt(t,e,i){var n=e||new S(0,0);t.style[pi]=(P.ie3d?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(i?" scale("+i+")":"")}function j(t,e){t._leaflet_pos=e,P.any3d?Mt(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function Et(t){return t._leaflet_pos||new S(0,0)}var le,he,gi;if("onselectstart"in document)le=function(){C(window,"selectstart",Y)},he=function(){B(window,"selectstart",Y)};else{var ce=Me(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);le=function(){if(ce){var t=document.documentElement.style;gi=t[ce],t[ce]="none"}},he=function(){ce&&(document.documentElement.style[ce]=gi,gi=void 0)}}function vi(){C(window,"dragstart",Y)}function yi(){B(window,"dragstart",Y)}var Ee,bi;function xi(t){for(;t.tabIndex===-1;)t=t.parentNode;t.style&&(Ae(),Ee=t,bi=t.style.outlineStyle,t.style.outlineStyle="none",C(window,"keydown",Ae))}function Ae(){Ee&&(Ee.style.outlineStyle=bi,Ee=void 0,bi=void 0,B(window,"keydown",Ae))}function Hn(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body);return t}function wi(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}var Bs={__proto__:null,TRANSFORM:pi,TRANSITION:re,TRANSITION_END:Rn,get:Dn,getStyle:ae,create:N,remove:H,empty:Se,toFront:Ut,toBack:jt,hasClass:mi,addClass:M,removeClass:W,setClass:_i,getClass:Ce,setOpacity:rt,testProp:Me,setTransform:Mt,setPosition:j,getPosition:Et,get disableTextSelection(){return le},get enableTextSelection(){return he},disableImageDrag:vi,enableImageDrag:yi,preventOutline:xi,restoreOutline:Ae,getSizedParentNode:Hn,getScale:wi};function C(t,e,i,n){if(e&&typeof e=="object")for(var s in e)Pi(t,s,e[s],i);else{e=A(e);for(var a=0,d=e.length;a<d;a++)Pi(t,e[a],i,n)}return this}var mt="_leaflet_events";function B(t,e,i,n){if(arguments.length===1)Wn(t),delete t[mt];else if(e&&typeof e=="object")for(var s in e)ki(t,s,e[s],i);else if(e=A(e),arguments.length===2)Wn(t,function(p){return ii(e,p)!==-1});else for(var a=0,d=e.length;a<d;a++)ki(t,e[a],i,n);return this}function Wn(t,e){for(var i in t[mt]){var n=i.split(/\d/)[0];(!e||e(n))&&ki(t,n,null,null,i)}}var $i={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Pi(t,e,i,n){var s=e+f(i)+(n?"_"+f(n):"");if(t[mt]&&t[mt][s])return this;var a=function(p){return i.call(n||t,p||window.event)},d=a;!P.touchNative&&P.pointer&&e.indexOf("touch")===0?a=Ts(t,e,a):P.touch&&e==="dblclick"?a=Is(t,a):"addEventListener"in t?e==="touchstart"||e==="touchmove"||e==="wheel"||e==="mousewheel"?t.addEventListener($i[e]||e,a,P.passiveEvents?{passive:!1}:!1):e==="mouseenter"||e==="mouseleave"?(a=function(p){p=p||window.event,Ti(t,p)&&d(p)},t.addEventListener($i[e],a,!1)):t.addEventListener(e,d,!1):t.attachEvent("on"+e,a),t[mt]=t[mt]||{},t[mt][s]=a}function ki(t,e,i,n,s){s=s||e+f(i)+(n?"_"+f(n):"");var a=t[mt]&&t[mt][s];if(!a)return this;!P.touchNative&&P.pointer&&e.indexOf("touch")===0?zs(t,e,a):P.touch&&e==="dblclick"?Ns(t,a):"removeEventListener"in t?t.removeEventListener($i[e]||e,a,!1):t.detachEvent("on"+e,a),t[mt][s]=null}function At(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function Li(t){return Pi(t,"wheel",At),this}function de(t){return C(t,"mousedown touchstart dblclick contextmenu",At),t._leaflet_disable_click=!0,this}function Y(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Ot(t){return Y(t),At(t),this}function Fn(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;)e.push(i),i=i.parentNode;return e}function Un(t,e){if(!e)return new S(t.clientX,t.clientY);var i=wi(e),n=i.boundingClientRect;return new S((t.clientX-n.left)/i.x-e.clientLeft,(t.clientY-n.top)/i.y-e.clientTop)}var Rs=P.linux&&P.chrome?window.devicePixelRatio:P.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function jn(t){return P.edge?t.wheelDeltaY/2:t.deltaY&&t.deltaMode===0?-t.deltaY/Rs:t.deltaY&&t.deltaMode===1?-t.deltaY*20:t.deltaY&&t.deltaMode===2?-t.deltaY*60:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?-t.detail*20:t.detail?t.detail/-32765*60:0}function Ti(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch{return!1}return i!==t}var Ds={__proto__:null,on:C,off:B,stopPropagation:At,disableScrollPropagation:Li,disableClickPropagation:de,preventDefault:Y,stop:Ot,getPropagationPath:Fn,getMousePosition:Un,getWheelDelta:jn,isExternalTarget:Ti,addListener:C,removeListener:B},qn=ne.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=Et(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=Q(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=this._duration*1e3;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var i=this._startPos.add(this._offset.multiplyBy(t));e&&i._round(),j(this._el,i),this.fire("step")},_complete:function(){st(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),I=ne.extend({options:{crs:ai,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=k(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=h(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.zoom!==void 0&&(this._zoom=this._limitZoom(e.zoom)),e.center&&e.zoom!==void 0&&this.setView(O(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=re&&P.any3d&&!P.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),C(this._proxy,Rn,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,i){if(e=e===void 0?this._zoom:this._limitZoom(e),t=this._limitCenter(O(t),e,this.options.maxBounds),i=i||{},this._stop(),this._loaded&&!i.reset&&i!==!0){i.animate!==void 0&&(i.zoom=r({animate:i.animate},i.zoom),i.pan=r({animate:i.animate,duration:i.duration},i.pan));var n=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,i.zoom):this._tryAnimatedPan(t,i.pan);if(n)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e,i.pan&&i.pan.noMoveStart),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(P.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(P.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),s=this.getSize().divideBy(2),a=t instanceof S?t:this.latLngToContainerPoint(t),d=a.subtract(s).multiplyBy(1-1/n),p=this.containerPointToLatLng(s.add(d));return this.setView(p,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():U(t);var i=z(e.paddingTopLeft||e.padding||[0,0]),n=z(e.paddingBottomRight||e.padding||[0,0]),s=this.getBoundsZoom(t,!1,i.add(n));if(s=typeof e.maxZoom=="number"?Math.min(e.maxZoom,s):s,s===1/0)return{center:t.getCenter(),zoom:s};var a=n.subtract(i).divideBy(2),d=this.project(t.getSouthWest(),s),p=this.project(t.getNorthEast(),s),m=this.unproject(d.add(p).divideBy(2).add(a),s);return{center:m,zoom:s}},fitBounds:function(t,e){if(t=U(t),!t.isValid())throw new Error("Bounds are not valid.");var i=this._getBoundsCenterZoom(t,e);return this.setView(i.center,i.zoom,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){if(t=z(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend");if(e.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new qn,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){M(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,e,i){if(i=i||{},i.animate===!1||!P.any3d)return this.setView(t,e,i);this._stop();var n=this.project(this.getCenter()),s=this.project(t),a=this.getSize(),d=this._zoom;t=O(t),e=e===void 0?d:e;var p=Math.max(a.x,a.y),m=p*this.getZoomScale(d,e),g=s.distanceTo(n)||1,x=1.42,T=x*x;function E(q){var je=q?-1:1,zr=q?m:p,Sr=m*m-p*p+je*T*T*g*g,Cr=2*zr*T*g,Bi=Sr/Cr,To=Math.sqrt(Bi*Bi+1)-Bi,Mr=To<1e-9?-18:Math.log(To);return Mr}function X(q){return(Math.exp(q)-Math.exp(-q))/2}function V(q){return(Math.exp(q)+Math.exp(-q))/2}function lt(q){return X(q)/V(q)}var it=E(0);function Jt(q){return p*(V(it)/V(it+x*q))}function Pr(q){return p*(V(it)*lt(it+x*q)-X(it))/T}function kr(q){return 1-Math.pow(1-q,1.5)}var Lr=Date.now(),ko=(E(1)-it)/x,Tr=i.duration?1e3*i.duration:1e3*ko*.8;function Lo(){var q=(Date.now()-Lr)/Tr,je=kr(q)*ko;q<=1?(this._flyToFrame=Q(Lo,this),this._move(this.unproject(n.add(s.subtract(n).multiplyBy(Pr(je)/g)),d),this.getScaleZoom(p/Jt(je),d),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}return this._moveStart(!0,i.noMoveStart),Lo.call(this),this},flyToBounds:function(t,e){var i=this._getBoundsCenterZoom(t,e);return this.flyTo(i.center,i.zoom,e)},setMaxBounds:function(t){return t=U(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),n=this._limitCenter(i,this._zoom,U(t));return i.equals(n)||this.panTo(n,e),this._enforcingBounds=!1,this},panInside:function(t,e){e=e||{};var i=z(e.paddingTopLeft||e.padding||[0,0]),n=z(e.paddingBottomRight||e.padding||[0,0]),s=this.project(this.getCenter()),a=this.project(t),d=this.getPixelBounds(),p=tt([d.min.add(i),d.max.subtract(n)]),m=p.getSize();if(!p.contains(a)){this._enforcingBounds=!0;var g=a.subtract(p.getCenter()),x=p.extend(a).getSize().subtract(m);s.x+=g.x<0?-x.x:x.x,s.y+=g.y<0?-x.y:x.y,this.panTo(this.unproject(s),e),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=r({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var i=this.getSize(),n=e.divideBy(2).round(),s=i.divideBy(2).round(),a=n.subtract(s);return!a.x&&!a.y?this:(t.animate&&t.pan?this.panBy(a):(t.pan&&this._rawPanBy(a),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(h(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=r({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=h(this._handleGeolocationResponse,this),i=h(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var e=t.code,i=t.message||(e===1?"permission denied":e===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e=t.coords.latitude,i=t.coords.longitude,n=new Z(e,i),s=n.toBounds(t.coords.accuracy*2),a=this._locateOptions;if(a.setView){var d=this.getBoundsZoom(s);this.setView(n,a.maxZoom?Math.min(d,a.maxZoom):d)}var p={latlng:n,bounds:s,timestamp:t.timestamp};for(var m in t.coords)typeof t.coords[m]=="number"&&(p[m]=t.coords[m]);this.fire("locationfound",p)}},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),H(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(st(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)H(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){var i="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),n=N("div",i,e||this._mapPane);return t&&(this._panes[t]=n),n},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new et(e,i)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=U(t),i=z(i||[0,0]);var n=this.getZoom()||0,s=this.getMinZoom(),a=this.getMaxZoom(),d=t.getNorthWest(),p=t.getSouthEast(),m=this.getSize().subtract(i),g=tt(this.project(p,n),this.project(d,n)).getSize(),x=P.any3d?this.options.zoomSnap:1,T=m.x/g.x,E=m.y/g.y,X=e?Math.max(T,E):Math.min(T,E);return n=this.getScaleZoom(X,n),x&&(n=Math.round(n/(x/100))*(x/100),n=e?Math.ceil(n/x)*x:Math.floor(n/x)*x),Math.max(s,Math.min(a,n))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new S(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){var i=this._getTopLeftPoint(t,e);return new D(i,i.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(t===void 0?this.getZoom():t)},getPane:function(t){return typeof t=="string"?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var i=this.options.crs;return e=e===void 0?this._zoom:e,i.scale(t)/i.scale(e)},getScaleZoom:function(t,e){var i=this.options.crs;e=e===void 0?this._zoom:e;var n=i.zoom(t*i.scale(e));return isNaN(n)?1/0:n},project:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.latLngToPoint(O(t),e)},unproject:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.pointToLatLng(z(t),e)},layerPointToLatLng:function(t){var e=z(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(O(t))._round();return e._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(O(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(U(t))},distance:function(t,e){return this.options.crs.distance(O(t),O(e))},containerPointToLayerPoint:function(t){return z(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return z(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(z(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(O(t)))},mouseEventToContainerPoint:function(t){return Un(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=Dn(t);if(e){if(e._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");C(e,"scroll",this._onScroll,this),this._containerId=f(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&P.any3d,M(t,"leaflet-container"+(P.touch?" leaflet-touch":"")+(P.retina?" leaflet-retina":"")+(P.ielt9?" leaflet-oldie":"")+(P.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=ae(t,"position");e!=="absolute"&&e!=="relative"&&e!=="fixed"&&e!=="sticky"&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),j(this._mapPane,new S(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(M(t.markerPane,"leaflet-zoom-hide"),M(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e,i){j(this._mapPane,new S(0,0));var n=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var s=this._zoom!==e;this._moveStart(s,i)._move(t,e)._moveEnd(s),this.fire("viewreset"),n&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,i,n){e===void 0&&(e=this._zoom);var s=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),n?i&&i.pinch&&this.fire("zoom",i):((s||i&&i.pinch)&&this.fire("zoom",i),this.fire("move",i)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return st(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){j(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[f(this._container)]=this;var e=t?B:C;e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),P.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){st(this._resizeRequest),this._resizeRequest=Q(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i=[],n,s=e==="mouseout"||e==="mouseover",a=t.target||t.srcElement,d=!1;a;){if(n=this._targets[f(a)],n&&(e==="click"||e==="preclick")&&this._draggableMoved(n)){d=!0;break}if(n&&n.listens(e,!0)&&(s&&!Ti(a,t)||(i.push(n),s))||a===this._container)break;a=a.parentNode}return!i.length&&!d&&!s&&this.listens(e,!0)&&(i=[this]),i},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e=t.target||t.srcElement;if(!(!this._loaded||e._leaflet_disable_events||t.type==="click"&&this._isClickDisabled(e))){var i=t.type;i==="mousedown"&&xi(e),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,i){if(t.type==="click"){var n=r({},t);n.type="preclick",this._fireDOMEvent(n,n.type,i)}var s=this._findEventTargets(t,e);if(i){for(var a=[],d=0;d<i.length;d++)i[d].listens(e,!0)&&a.push(i[d]);s=a.concat(s)}if(s.length){e==="contextmenu"&&Y(t);var p=s[0],m={originalEvent:t};if(t.type!=="keypress"&&t.type!=="keydown"&&t.type!=="keyup"){var g=p.getLatLng&&(!p._radius||p._radius<=10);m.containerPoint=g?this.latLngToContainerPoint(p.getLatLng()):this.mouseEventToContainerPoint(t),m.layerPoint=this.containerPointToLayerPoint(m.containerPoint),m.latlng=g?p.getLatLng():this.layerPointToLatLng(m.layerPoint)}for(d=0;d<s.length;d++)if(s[d].fire(e,m,!0),m.originalEvent._stopped||s[d].options.bubblingMouseEvents===!1&&ii(this._mouseEvents,e)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return Et(this._mapPane)||new S(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){var i=t&&e!==void 0?this._getNewPixelOrigin(t,e):this.getPixelOrigin();return i.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return tt([this.project(t.getSouthWest(),e)._subtract(n),this.project(t.getNorthWest(),e)._subtract(n),this.project(t.getSouthEast(),e)._subtract(n),this.project(t.getNorthEast(),e)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),s=this.getSize().divideBy(2),a=new D(n.subtract(s),n.add(s)),d=this._getBoundsOffset(a,i,e);return Math.abs(d.x)<=1&&Math.abs(d.y)<=1?t:this.unproject(n.add(d),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new D(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},_getBoundsOffset:function(t,e,i){var n=tt(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),s=n.min.subtract(t.min),a=n.max.subtract(t.max),d=this._rebound(s.x,-a.x),p=this._rebound(s.y,-a.y);return new S(d,p)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),n=P.any3d?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){W(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._trunc();return(e&&e.animate)!==!0&&!this.getSize().contains(i)?!1:(this.panBy(i,e),!0)},_createAnimProxy:function(){var t=this._proxy=N("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(e){var i=pi,n=this._proxy.style[i];Mt(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),n===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){H(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();Mt(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),s=this._getCenterOffset(t)._divideBy(1-1/n);return i.animate!==!0&&!this.getSize().contains(s)?!1:(Q(function(){this._moveStart(!0,i.noMoveStart||!1)._animateZoom(t,e,!0)},this),!0)},_animateZoom:function(t,e,i,n){this._mapPane&&(i&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,M(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:n}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(h(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&W(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Hs(t,e){return new I(t,e)}var ct=vt.extend({options:{position:"topright"},initialize:function(t){k(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return M(e,"leaflet-control"),i.indexOf("bottom")!==-1?n.insertBefore(e,n.firstChild):n.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(H(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),ue=function(t){return new ct(t)};I.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",i=this._controlContainer=N("div",e+"control-container",this._container);function n(s,a){var d=e+s+" "+e+a;t[s+a]=N("div",d,i)}n("top","left"),n("top","right"),n("bottom","left"),n("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)H(this._controlCorners[t]);H(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Vn=ct.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,i,n){return i<n?-1:n<i?1:0}},initialize:function(t,e,i){k(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return ct.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(f(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){M(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(M(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):W(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return W(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=N("div",t),i=this.options.collapsed;e.setAttribute("aria-haspopup",!0),de(e),Li(e);var n=this._section=N("section",t+"-list");i&&(this._map.on("click",this.collapse,this),C(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var s=this._layersLink=N("a",t+"-toggle",e);s.href="#",s.title="Layers",s.setAttribute("role","button"),C(s,{keydown:function(a){a.keyCode===13&&this._expandSafely()},click:function(a){Y(a),this._expandSafely()}},this),i||this.expand(),this._baseLayersList=N("div",t+"-base",n),this._separator=N("div",t+"-separator",n),this._overlaysList=N("div",t+"-overlays",n),e.appendChild(n)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&f(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(h(function(n,s){return this.options.sortFunction(n.layer,s.layer,n.name,s.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Se(this._baseLayersList),Se(this._overlaysList),this._layerControlInputs=[];var t,e,i,n,s=0;for(i=0;i<this._layers.length;i++)n=this._layers[i],this._addItem(n),e=e||n.overlay,t=t||!n.overlay,s+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&s>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(f(t.target)),i=e.overlay?t.type==="add"?"overlayadd":"overlayremove":t.type==="add"?"baselayerchange":null;i&&this._map.fire(i,e)},_createRadioElement:function(t,e){var i='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=i,n.firstChild},_addItem:function(t){var e=document.createElement("label"),i=this._map.hasLayer(t.layer),n;t.overlay?(n=document.createElement("input"),n.type="checkbox",n.className="leaflet-control-layers-selector",n.defaultChecked=i):n=this._createRadioElement("leaflet-base-layers_"+f(this),i),this._layerControlInputs.push(n),n.layerId=f(t.layer),C(n,"click",this._onInputClick,this);var s=document.createElement("span");s.innerHTML=" "+t.name;var a=document.createElement("span");e.appendChild(a),a.appendChild(n),a.appendChild(s);var d=t.overlay?this._overlaysList:this._baseLayersList;return d.appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){if(!this._preventClick){var t=this._layerControlInputs,e,i,n=[],s=[];this._handlingClick=!0;for(var a=t.length-1;a>=0;a--)e=t[a],i=this._getLayer(e.layerId).layer,e.checked?n.push(i):e.checked||s.push(i);for(a=0;a<s.length;a++)this._map.hasLayer(s[a])&&this._map.removeLayer(s[a]);for(a=0;a<n.length;a++)this._map.hasLayer(n[a])||this._map.addLayer(n[a]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t=this._layerControlInputs,e,i,n=this._map.getZoom(),s=t.length-1;s>=0;s--)e=t[s],i=this._getLayer(e.layerId).layer,e.disabled=i.options.minZoom!==void 0&&n<i.options.minZoom||i.options.maxZoom!==void 0&&n>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,C(t,"click",Y),this.expand();var e=this;setTimeout(function(){B(t,"click",Y),e._preventClick=!1})}}),Ws=function(t,e,i){return new Vn(t,e,i)},zi=ct.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=N("div",e+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,n,s){var a=N("a",i,n);return a.innerHTML=t,a.href="#",a.title=e,a.setAttribute("role","button"),a.setAttribute("aria-label",e),de(a),C(a,"click",Ot),C(a,"click",s,this),C(a,"click",this._refocusOnMap,this),a},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";W(this._zoomInButton,e),W(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(M(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(M(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}});I.mergeOptions({zoomControl:!0}),I.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new zi,this.addControl(this.zoomControl))});var Fs=function(t){return new zi(t)},Gn=ct.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",i=N("div",e),n=this.options;return this._addScales(n,e+"-line",i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=N("div",e,i)),t.imperial&&(this._iScale=N("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,i=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(i)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),i=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,i,e/t)},_updateImperial:function(t){var e=t*3.2808399,i,n,s;e>5280?(i=e/5280,n=this._getRoundNum(i),this._updateScale(this._iScale,n+" mi",n/i)):(s=this._getRoundNum(e),this._updateScale(this._iScale,s+" ft",s/e))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),Us=function(t){return new Gn(t)},js='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Si=ct.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(P.inlineSvg?js+" ":"")+"Leaflet</a>"},initialize:function(t){k(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=N("div","leaflet-control-attribution"),de(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(' <span aria-hidden="true">|</span> ')}}});I.mergeOptions({attributionControl:!0}),I.addInitHook(function(){this.options.attributionControl&&new Si().addTo(this)});var qs=function(t){return new Si(t)};ct.Layers=Vn,ct.Zoom=zi,ct.Scale=Gn,ct.Attribution=Si,ue.layers=Ws,ue.zoom=Fs,ue.scale=Us,ue.attribution=qs;var _t=vt.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});_t.addTo=function(t,e){return t.addHandler(e,this),this};var Vs={Events:ot},Kn=P.touch?"touchstart mousedown":"mousedown",Lt=ne.extend({options:{clickTolerance:3},initialize:function(t,e,i,n){k(this,n),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},enable:function(){this._enabled||(C(this._dragStartTarget,Kn,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Lt._dragging===this&&this.finishDrag(!0),B(this._dragStartTarget,Kn,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(this._enabled&&(this._moved=!1,!mi(this._element,"leaflet-zoom-anim"))){if(t.touches&&t.touches.length!==1){Lt._dragging===this&&this.finishDrag();return}if(!(Lt._dragging||t.shiftKey||t.which!==1&&t.button!==1&&!t.touches)&&(Lt._dragging=this,this._preventOutline&&xi(this._element),vi(),le(),!this._moving)){this.fire("down");var e=t.touches?t.touches[0]:t,i=Hn(this._element);this._startPoint=new S(e.clientX,e.clientY),this._startPos=Et(this._element),this._parentScale=wi(i);var n=t.type==="mousedown";C(document,n?"mousemove":"touchmove",this._onMove,this),C(document,n?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var e=t.touches&&t.touches.length===1?t.touches[0]:t,i=new S(e.clientX,e.clientY)._subtract(this._startPoint);!i.x&&!i.y||Math.abs(i.x)+Math.abs(i.y)<this.options.clickTolerance||(i.x/=this._parentScale.x,i.y/=this._parentScale.y,Y(t),this._moved||(this.fire("dragstart"),this._moved=!0,M(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),M(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(i),this._moving=!0,this._lastEvent=t,this._updatePosition())}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),j(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){W(document.body,"leaflet-dragging"),this._lastTarget&&(W(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),B(document,"mousemove touchmove",this._onMove,this),B(document,"mouseup touchend touchcancel",this._onUp,this),yi(),he();var e=this._moved&&this._moving;this._moving=!1,Lt._dragging=!1,e&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function Yn(t,e,i){var n,s=[1,4,2,8],a,d,p,m,g,x,T,E;for(a=0,x=t.length;a<x;a++)t[a]._code=It(t[a],e);for(p=0;p<4;p++){for(T=s[p],n=[],a=0,x=t.length,d=x-1;a<x;d=a++)m=t[a],g=t[d],m._code&T?g._code&T||(E=Oe(g,m,T,e,i),E._code=It(E,e),n.push(E)):(g._code&T&&(E=Oe(g,m,T,e,i),E._code=It(E,e),n.push(E)),n.push(m));t=n}return t}function Jn(t,e){var i,n,s,a,d,p,m,g,x;if(!t||t.length===0)throw new Error("latlngs not passed");at(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var T=O([0,0]),E=U(t),X=E.getNorthWest().distanceTo(E.getSouthWest())*E.getNorthEast().distanceTo(E.getNorthWest());X<1700&&(T=Ci(t));var V=t.length,lt=[];for(i=0;i<V;i++){var it=O(t[i]);lt.push(e.project(O([it.lat-T.lat,it.lng-T.lng])))}for(p=m=g=0,i=0,n=V-1;i<V;n=i++)s=lt[i],a=lt[n],d=s.y*a.x-a.y*s.x,m+=(s.x+a.x)*d,g+=(s.y+a.y)*d,p+=d*3;p===0?x=lt[0]:x=[m/p,g/p];var Jt=e.unproject(z(x));return O([Jt.lat+T.lat,Jt.lng+T.lng])}function Ci(t){for(var e=0,i=0,n=0,s=0;s<t.length;s++){var a=O(t[s]);e+=a.lat,i+=a.lng,n++}return O([e/n,i/n])}var Gs={__proto__:null,clipPolygon:Yn,polygonCenter:Jn,centroid:Ci};function Xn(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=Js(t,i),t=Ys(t,i),t}function Qn(t,e,i){return Math.sqrt(fe(t,e,i,!0))}function Ks(t,e,i){return fe(t,e,i)}function Ys(t,e){var i=t.length,n=typeof Uint8Array<"u"?Uint8Array:Array,s=new n(i);s[0]=s[i-1]=1,Mi(t,s,e,0,i-1);var a,d=[];for(a=0;a<i;a++)s[a]&&d.push(t[a]);return d}function Mi(t,e,i,n,s){var a=0,d,p,m;for(p=n+1;p<=s-1;p++)m=fe(t[p],t[n],t[s],!0),m>a&&(d=p,a=m);a>i&&(e[d]=1,Mi(t,e,i,n,d),Mi(t,e,i,d,s))}function Js(t,e){for(var i=[t[0]],n=1,s=0,a=t.length;n<a;n++)Xs(t[n],t[s])>e&&(i.push(t[n]),s=n);return s<a-1&&i.push(t[a-1]),i}var to;function eo(t,e,i,n,s){var a=n?to:It(t,i),d=It(e,i),p,m,g;for(to=d;;){if(!(a|d))return[t,e];if(a&d)return!1;p=a||d,m=Oe(t,e,p,i,s),g=It(m,i),p===a?(t=m,a=g):(e=m,d=g)}}function Oe(t,e,i,n,s){var a=e.x-t.x,d=e.y-t.y,p=n.min,m=n.max,g,x;return i&8?(g=t.x+a*(m.y-t.y)/d,x=m.y):i&4?(g=t.x+a*(p.y-t.y)/d,x=p.y):i&2?(g=m.x,x=t.y+d*(m.x-t.x)/a):i&1&&(g=p.x,x=t.y+d*(p.x-t.x)/a),new S(g,x,s)}function It(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}function Xs(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n}function fe(t,e,i,n){var s=e.x,a=e.y,d=i.x-s,p=i.y-a,m=d*d+p*p,g;return m>0&&(g=((t.x-s)*d+(t.y-a)*p)/m,g>1?(s=i.x,a=i.y):g>0&&(s+=d*g,a+=p*g)),d=t.x-s,p=t.y-a,n?d*d+p*p:new S(s,a)}function at(t){return!ht(t[0])||typeof t[0][0]!="object"&&typeof t[0][0]<"u"}function io(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),at(t)}function no(t,e){var i,n,s,a,d,p,m,g;if(!t||t.length===0)throw new Error("latlngs not passed");at(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var x=O([0,0]),T=U(t),E=T.getNorthWest().distanceTo(T.getSouthWest())*T.getNorthEast().distanceTo(T.getNorthWest());E<1700&&(x=Ci(t));var X=t.length,V=[];for(i=0;i<X;i++){var lt=O(t[i]);V.push(e.project(O([lt.lat-x.lat,lt.lng-x.lng])))}for(i=0,n=0;i<X-1;i++)n+=V[i].distanceTo(V[i+1])/2;if(n===0)g=V[0];else for(i=0,a=0;i<X-1;i++)if(d=V[i],p=V[i+1],s=d.distanceTo(p),a+=s,a>n){m=(a-n)/s,g=[p.x-m*(p.x-d.x),p.y-m*(p.y-d.y)];break}var it=e.unproject(z(g));return O([it.lat+x.lat,it.lng+x.lng])}var Qs={__proto__:null,simplify:Xn,pointToSegmentDistance:Qn,closestPointOnSegment:Ks,clipSegment:eo,_getEdgeIntersection:Oe,_getBitCode:It,_sqClosestPointOnSegment:fe,isFlat:at,_flat:io,polylineCenter:no},Ei={project:function(t){return new S(t.lng,t.lat)},unproject:function(t){return new Z(t.y,t.x)},bounds:new D([-180,-90],[180,90])},Ai={R:6378137,R_MINOR:6356752314245179e-9,bounds:new D([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(t){var e=Math.PI/180,i=this.R,n=t.lat*e,s=this.R_MINOR/i,a=Math.sqrt(1-s*s),d=a*Math.sin(n),p=Math.tan(Math.PI/4-n/2)/Math.pow((1-d)/(1+d),a/2);return n=-i*Math.log(Math.max(p,1e-10)),new S(t.lng*e*i,n)},unproject:function(t){for(var e=180/Math.PI,i=this.R,n=this.R_MINOR/i,s=Math.sqrt(1-n*n),a=Math.exp(-t.y/i),d=Math.PI/2-2*Math.atan(a),p=0,m=.1,g;p<15&&Math.abs(m)>1e-7;p++)g=s*Math.sin(d),g=Math.pow((1-g)/(1+g),s/2),m=Math.PI/2-2*Math.atan(a*g)-d,d+=m;return new Z(d*e,t.x*e/i)}},tr={__proto__:null,LonLat:Ei,Mercator:Ai,SphericalMercator:si},er=r({},kt,{code:"EPSG:3395",projection:Ai,transformation:(function(){var t=.5/(Math.PI*Ai.R);return oe(t,.5,-t,.5)})()}),oo=r({},kt,{code:"EPSG:4326",projection:Ei,transformation:oe(1/180,1,-1/180,.5)}),ir=r({},yt,{projection:Ei,transformation:oe(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,n=e.lat-t.lat;return Math.sqrt(i*i+n*n)},infinite:!0});yt.Earth=kt,yt.EPSG3395=er,yt.EPSG3857=ai,yt.EPSG900913=ls,yt.EPSG4326=oo,yt.Simple=ir;var dt=ne.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[f(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[f(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var i=this.getEvents();e.on(i,this),this.once("remove",function(){e.off(i,this)},this)}this.onAdd(e),this.fire("add"),e.fire("layeradd",{layer:this})}}});I.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var e=f(t);return this._layers[e]?this:(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var e=f(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return f(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){t=t?ht(t)?t:[t]:[];for(var e=0,i=t.length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){(!isNaN(t.options.maxZoom)||!isNaN(t.options.minZoom))&&(this._zoomBoundLayers[f(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=f(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,i=this._getZoomSpan();for(var n in this._zoomBoundLayers){var s=this._zoomBoundLayers[n].options;t=s.minZoom===void 0?t:Math.min(t,s.minZoom),e=s.maxZoom===void 0?e:Math.max(e,s.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,i!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var qt=dt.extend({initialize:function(t,e){k(this,e),this._layers={};var i,n;if(t)for(i=0,n=t.length;i<n;i++)this.addLayer(t[i])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){var e=typeof t=="number"?t:this.getLayerId(t);return e in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e=Array.prototype.slice.call(arguments,1),i,n;for(i in this._layers)n=this._layers[i],n[t]&&n[t].apply(n,e);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return f(t)}}),nr=function(t,e){return new qt(t,e)},bt=qt.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),qt.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),qt.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new et;for(var e in this._layers){var i=this._layers[e];t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t}}),or=function(t,e){return new bt(t,e)},Vt=vt.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){k(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if(t==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(i,e&&e.tagName==="IMG"?e:null);return this._setIconStyles(n,t),(this.options.crossOrigin||this.options.crossOrigin==="")&&(n.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),n},_setIconStyles:function(t,e){var i=this.options,n=i[e+"Size"];typeof n=="number"&&(n=[n,n]);var s=z(n),a=z(e==="shadow"&&i.shadowAnchor||i.iconAnchor||s&&s.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),a&&(t.style.marginLeft=-a.x+"px",t.style.marginTop=-a.y+"px"),s&&(t.style.width=s.x+"px",t.style.height=s.y+"px")},_createImg:function(t,e){return e=e||document.createElement("img"),e.src=t,e},_getIconUrl:function(t){return P.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});function sr(t){return new Vt(t)}var pe=Vt.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return typeof pe.imagePath!="string"&&(pe.imagePath=this._detectIconPath()),(this.options.imagePath||pe.imagePath)+Vt.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var e=function(i,n,s){var a=n.exec(i);return a&&a[s]};return t=e(t,/^url\((['"])?(.+)\1\)$/,2),t&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=N("div","leaflet-default-icon-path",document.body),e=ae(t,"background-image")||ae(t,"backgroundImage");if(document.body.removeChild(t),e=this._stripUrl(e),e)return e;var i=document.querySelector('link[href$="leaflet.css"]');return i?i.href.substring(0,i.href.length-11-1):""}}),so=_t.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new Lt(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),M(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&W(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,n=this._marker.options.autoPanSpeed,s=this._marker.options.autoPanPadding,a=Et(e._icon),d=i.getPixelBounds(),p=i.getPixelOrigin(),m=tt(d.min._subtract(p).add(s),d.max._subtract(p).subtract(s));if(!m.contains(a)){var g=z((Math.max(m.max.x,a.x)-m.max.x)/(d.max.x-m.max.x)-(Math.min(m.min.x,a.x)-m.min.x)/(d.min.x-m.min.x),(Math.max(m.max.y,a.y)-m.max.y)/(d.max.y-m.max.y)-(Math.min(m.min.y,a.y)-m.min.y)/(d.min.y-m.min.y)).multiplyBy(n);i.panBy(g,{animate:!1}),this._draggable._newPos._add(g),this._draggable._startPos._add(g),j(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=Q(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(st(this._panRequest),this._panRequest=Q(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,n=Et(e._icon),s=e._map.layerPointToLatLng(n);i&&j(i,n),e._latlng=s,t.latlng=s,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){st(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),Ie=dt.extend({options:{icon:new pe,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){k(this,e),this._latlng=O(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=O(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),n=!1;i!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(i.title=t.title),i.tagName==="IMG"&&(i.alt=t.alt||"")),M(i,e),t.keyboard&&(i.tabIndex="0",i.setAttribute("role","button")),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&C(i,"focus",this._panOnFocus,this);var s=t.icon.createShadow(this._shadow),a=!1;s!==this._shadow&&(this._removeShadow(),a=!0),s&&(M(s,e),s.alt=""),this._shadow=s,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),s&&a&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&B(this._icon,"focus",this._panOnFocus,this),H(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&H(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&j(this._icon,t),this._shadow&&j(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(M(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),so)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new so(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&rt(this._icon,t),this._shadow&&rt(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var e=this.options.icon.options,i=e.iconSize?z(e.iconSize):z(0,0),n=e.iconAnchor?z(e.iconAnchor):z(0,0);t.panInside(this._latlng,{paddingTopLeft:n,paddingBottomRight:i.subtract(n)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function rr(t,e){return new Ie(t,e)}var Tt=dt.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return k(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Ne=Tt.extend({options:{fill:!0,radius:10},initialize:function(t,e){k(this,e),this._latlng=O(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=O(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return Tt.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),n=[t+i,e+i];this._pxBounds=new D(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function ar(t,e){return new Ne(t,e)}var Oi=Ne.extend({initialize:function(t,e,i){if(typeof e=="number"&&(e=r({},i,{radius:e})),k(this,e),this._latlng=O(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new et(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:Tt.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,i=this._map,n=i.options.crs;if(n.distance===kt.distance){var s=Math.PI/180,a=this._mRadius/kt.R/s,d=i.project([e+a,t]),p=i.project([e-a,t]),m=d.add(p).divideBy(2),g=i.unproject(m).lat,x=Math.acos((Math.cos(a*s)-Math.sin(e*s)*Math.sin(g*s))/(Math.cos(e*s)*Math.cos(g*s)))/s;(isNaN(x)||x===0)&&(x=a/Math.cos(Math.PI/180*e)),this._point=m.subtract(i.getPixelOrigin()),this._radius=isNaN(x)?0:m.x-i.project([g,t-x]).x,this._radiusY=m.y-d.y}else{var T=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=i.latLngToLayerPoint(this._latlng),this._radius=this._point.x-i.latLngToLayerPoint(T).x}this._updateBounds()}});function lr(t,e,i){return new Oi(t,e,i)}var xt=Tt.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){k(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e=1/0,i=null,n=fe,s,a,d=0,p=this._parts.length;d<p;d++)for(var m=this._parts[d],g=1,x=m.length;g<x;g++){s=m[g-1],a=m[g];var T=n(t,s,a,!0);T<e&&(e=T,i=n(t,s,a))}return i&&(i.distance=Math.sqrt(e)),i},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return no(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=O(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new et,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return at(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],i=at(t),n=0,s=t.length;n<s;n++)i?(e[n]=O(t[n]),this._bounds.extend(e[n])):e[n]=this._convertLatLngs(t[n]);return e},_project:function(){var t=new D;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new S(t,t);this._rawPxBounds&&(this._pxBounds=new D([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)]))},_projectLatlngs:function(t,e,i){var n=t[0]instanceof Z,s=t.length,a,d;if(n){for(d=[],a=0;a<s;a++)d[a]=this._map.latLngToLayerPoint(t[a]),i.extend(d[a]);e.push(d)}else for(a=0;a<s;a++)this._projectLatlngs(t[a],e,i)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}var e=this._parts,i,n,s,a,d,p,m;for(i=0,s=0,a=this._rings.length;i<a;i++)for(m=this._rings[i],n=0,d=m.length;n<d-1;n++)p=eo(m[n],m[n+1],t,n,!0),p&&(e[s]=e[s]||[],e[s].push(p[0]),(p[1]!==m[n+1]||n===d-2)&&(e[s].push(p[1]),s++))}},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,n=t.length;i<n;i++)t[i]=Xn(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var i,n,s,a,d,p,m=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(i=0,a=this._parts.length;i<a;i++)for(p=this._parts[i],n=0,d=p.length,s=d-1;n<d;s=n++)if(!(!e&&n===0)&&Qn(t,p[s],p[n])<=m)return!0;return!1}});function hr(t,e){return new xt(t,e)}xt._flat=io;var Gt=xt.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Jn(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var e=xt.prototype._convertLatLngs.call(this,t),i=e.length;return i>=2&&e[0]instanceof Z&&e[0].equals(e[i-1])&&e.pop(),e},_setLatLngs:function(t){xt.prototype._setLatLngs.call(this,t),at(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return at(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,i=new S(e,e);if(t=new D(t.min.subtract(i),t.max.add(i)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}for(var n=0,s=this._rings.length,a;n<s;n++)a=Yn(this._rings[n],t,!0),a.length&&this._parts.push(a)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e=!1,i,n,s,a,d,p,m,g;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(a=0,m=this._parts.length;a<m;a++)for(i=this._parts[a],d=0,g=i.length,p=g-1;d<g;p=d++)n=i[d],s=i[p],n.y>t.y!=s.y>t.y&&t.x<(s.x-n.x)*(t.y-n.y)/(s.y-n.y)+n.x&&(e=!e);return e||xt.prototype._containsPoint.call(this,t,!0)}});function cr(t,e){return new Gt(t,e)}var wt=bt.extend({initialize:function(t,e){k(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e=ht(t)?t:t.features,i,n,s;if(e){for(i=0,n=e.length;i<n;i++)s=e[i],(s.geometries||s.geometry||s.features||s.coordinates)&&this.addData(s);return this}var a=this.options;if(a.filter&&!a.filter(t))return this;var d=Ze(t,a);return d?(d.feature=De(t),d.defaultOptions=d.options,this.resetStyle(d),a.onEachFeature&&a.onEachFeature(t,d),this.addLayer(d)):this},resetStyle:function(t){return t===void 0?this.eachLayer(this.resetStyle,this):(t.options=r({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){t.setStyle&&(typeof e=="function"&&(e=e(t.feature)),t.setStyle(e))}});function Ze(t,e){var i=t.type==="Feature"?t.geometry:t,n=i?i.coordinates:null,s=[],a=e&&e.pointToLayer,d=e&&e.coordsToLatLng||Ii,p,m,g,x;if(!n&&!i)return null;switch(i.type){case"Point":return p=d(n),ro(a,t,p,e);case"MultiPoint":for(g=0,x=n.length;g<x;g++)p=d(n[g]),s.push(ro(a,t,p,e));return new bt(s);case"LineString":case"MultiLineString":return m=Be(n,i.type==="LineString"?0:1,d),new xt(m,e);case"Polygon":case"MultiPolygon":return m=Be(n,i.type==="Polygon"?1:2,d),new Gt(m,e);case"GeometryCollection":for(g=0,x=i.geometries.length;g<x;g++){var T=Ze({geometry:i.geometries[g],type:"Feature",properties:t.properties},e);T&&s.push(T)}return new bt(s);case"FeatureCollection":for(g=0,x=i.features.length;g<x;g++){var E=Ze(i.features[g],e);E&&s.push(E)}return new bt(s);default:throw new Error("Invalid GeoJSON object.")}}function ro(t,e,i,n){return t?t(e,i):new Ie(i,n&&n.markersInheritOptions&&n)}function Ii(t){return new Z(t[1],t[0],t[2])}function Be(t,e,i){for(var n=[],s=0,a=t.length,d;s<a;s++)d=e?Be(t[s],e-1,i):(i||Ii)(t[s]),n.push(d);return n}function Ni(t,e){return t=O(t),t.alt!==void 0?[$(t.lng,e),$(t.lat,e),$(t.alt,e)]:[$(t.lng,e),$(t.lat,e)]}function Re(t,e,i,n){for(var s=[],a=0,d=t.length;a<d;a++)s.push(e?Re(t[a],at(t[a])?0:e-1,i,n):Ni(t[a],n));return!e&&i&&s.length>0&&s.push(s[0].slice()),s}function Kt(t,e){return t.feature?r({},t.feature,{geometry:e}):De(e)}function De(t){return t.type==="Feature"||t.type==="FeatureCollection"?t:{type:"Feature",properties:{},geometry:t}}var Zi={toGeoJSON:function(t){return Kt(this,{type:"Point",coordinates:Ni(this.getLatLng(),t)})}};Ie.include(Zi),Oi.include(Zi),Ne.include(Zi),xt.include({toGeoJSON:function(t){var e=!at(this._latlngs),i=Re(this._latlngs,e?1:0,!1,t);return Kt(this,{type:(e?"Multi":"")+"LineString",coordinates:i})}}),Gt.include({toGeoJSON:function(t){var e=!at(this._latlngs),i=e&&!at(this._latlngs[0]),n=Re(this._latlngs,i?2:e?1:0,!0,t);return e||(n=[n]),Kt(this,{type:(i?"Multi":"")+"Polygon",coordinates:n})}}),qt.include({toMultiPoint:function(t){var e=[];return this.eachLayer(function(i){e.push(i.toGeoJSON(t).geometry.coordinates)}),Kt(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(e==="MultiPoint")return this.toMultiPoint(t);var i=e==="GeometryCollection",n=[];return this.eachLayer(function(s){if(s.toGeoJSON){var a=s.toGeoJSON(t);if(i)n.push(a.geometry);else{var d=De(a);d.type==="FeatureCollection"?n.push.apply(n,d.features):n.push(d)}}}),i?Kt(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}});function ao(t,e){return new wt(t,e)}var dr=ao,He=dt.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,i){this._url=t,this._bounds=U(e),k(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(M(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){H(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&Ut(this._image),this},bringToBack:function(){return this._map&&jt(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=U(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._url.tagName==="IMG",e=this._image=t?this._url:N("img");if(M(e,"leaflet-image-layer"),this._zoomAnimated&&M(e,"leaflet-zoom-animated"),this.options.className&&M(e,this.options.className),e.onselectstart=b,e.onmousemove=b,e.onload=h(this.fire,this,"load"),e.onerror=h(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(e.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=e.src;return}e.src=this._url,e.alt=this.options.alt},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),i=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;Mt(this._image,i,e)},_reset:function(){var t=this._image,e=new D(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();j(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){rt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),ur=function(t,e,i){return new He(t,e,i)},lo=He.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t=this._url.tagName==="VIDEO",e=this._image=t?this._url:N("video");if(M(e,"leaflet-image-layer"),this._zoomAnimated&&M(e,"leaflet-zoom-animated"),this.options.className&&M(e,this.options.className),e.onselectstart=b,e.onmousemove=b,e.onloadeddata=h(this.fire,this,"load"),t){for(var i=e.getElementsByTagName("source"),n=[],s=0;s<i.length;s++)n.push(i[s].src);this._url=i.length>0?n:[e.src];return}ht(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var a=0;a<this._url.length;a++){var d=N("source");d.src=this._url[a],e.appendChild(d)}}});function fr(t,e,i){return new lo(t,e,i)}var ho=He.extend({_initImage:function(){var t=this._image=this._url;M(t,"leaflet-image-layer"),this._zoomAnimated&&M(t,"leaflet-zoom-animated"),this.options.className&&M(t,this.options.className),t.onselectstart=b,t.onmousemove=b}});function pr(t,e,i){return new ho(t,e,i)}var gt=dt.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,e){t&&(t instanceof Z||ht(t))?(this._latlng=O(t),k(this,e)):(k(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&rt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&rt(this._container,1),this.bringToFront(),this.options.interactive&&(M(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(rt(this._container,0),this._removeTimeout=setTimeout(h(H,void 0,this._container),200)):H(this._container),this.options.interactive&&(W(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=O(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Ut(this._container),this},bringToBack:function(){return this._map&&jt(this._container),this},_prepareOpen:function(t){var e=this._source;if(!e._map)return!1;if(e instanceof bt){e=null;var i=this._source._layers;for(var n in i)if(i[n]._map){e=i[n];break}if(!e)return!1;this._source=e}if(!t)if(e.getCenter)t=e.getCenter();else if(e.getLatLng)t=e.getLatLng();else if(e.getBounds)t=e.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof e=="string")t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=z(this.options.offset),i=this._getAnchor();this._zoomAnimated?j(this._container,t.add(i)):e=e.add(t).add(i);var n=this._containerBottom=-e.y,s=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;this._container.style.bottom=n+"px",this._container.style.left=s+"px"}},_getAnchor:function(){return[0,0]}});I.include({_initOverlay:function(t,e,i,n){var s=e;return s instanceof t||(s=new t(n).setContent(e)),i&&s.setLatLng(i),s}}),dt.include({_initOverlay:function(t,e,i,n){var s=i;return s instanceof t?(k(s,n),s._source=this):(s=e&&!n?e:new t(n,this),s.setContent(i)),s}});var We=gt.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,gt.prototype.openOn.call(this,t)},onAdd:function(t){gt.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Tt||this._source.on("preclick",At))},onRemove:function(t){gt.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Tt||this._source.off("preclick",At))},getEvents:function(){var t=gt.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=N("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=N("div",t+"-content-wrapper",e);if(this._contentNode=N("div",t+"-content",i),de(e),Li(this._contentNode),C(e,"contextmenu",At),this._tipContainer=N("div",t+"-tip-container",e),this._tip=N("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=N("a",t+"-close-button",e);n.setAttribute("role","button"),n.setAttribute("aria-label","Close popup"),n.href="#close",n.innerHTML='<span aria-hidden="true">&#215;</span>',C(n,"click",function(s){Y(s),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,s=this.options.maxHeight,a="leaflet-popup-scrolled";s&&n>s?(e.height=s+"px",M(t,a)):W(t,a),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),i=this._getAnchor();j(this._container,e.add(i))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,e=parseInt(ae(this._container,"marginBottom"),10)||0,i=this._container.offsetHeight+e,n=this._containerWidth,s=new S(this._containerLeft,-i-this._containerBottom);s._add(Et(this._container));var a=t.layerPointToContainerPoint(s),d=z(this.options.autoPanPadding),p=z(this.options.autoPanPaddingTopLeft||d),m=z(this.options.autoPanPaddingBottomRight||d),g=t.getSize(),x=0,T=0;a.x+n+m.x>g.x&&(x=a.x+n-g.x+m.x),a.x-x-p.x<0&&(x=a.x-p.x),a.y+i+m.y>g.y&&(T=a.y+i-g.y+m.y),a.y-T-p.y<0&&(T=a.y-p.y),(x||T)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([x,T]))}},_getAnchor:function(){return z(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),mr=function(t,e){return new We(t,e)};I.mergeOptions({closePopupOnClick:!0}),I.include({openPopup:function(t,e,i){return this._initOverlay(We,t,e,i).openOn(this),this},closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),dt.include({bindPopup:function(t,e){return this._popup=this._initOverlay(We,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof bt||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){if(!(!this._popup||!this._map)){Ot(t);var e=t.layer||t.target;if(this._popup._source===e&&!(e instanceof Tt)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=e,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){t.originalEvent.keyCode===13&&this._openPopup(t)}});var Fe=gt.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){gt.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){gt.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=gt.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip",e=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=N("div",e),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+f(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,i,n=this._map,s=this._container,a=n.latLngToContainerPoint(n.getCenter()),d=n.layerPointToContainerPoint(t),p=this.options.direction,m=s.offsetWidth,g=s.offsetHeight,x=z(this.options.offset),T=this._getAnchor();p==="top"?(e=m/2,i=g):p==="bottom"?(e=m/2,i=0):p==="center"?(e=m/2,i=g/2):p==="right"?(e=0,i=g/2):p==="left"?(e=m,i=g/2):d.x<a.x?(p="right",e=0,i=g/2):(p="left",e=m+(x.x+T.x)*2,i=g/2),t=t.subtract(z(e,i,!0)).add(x).add(T),W(s,"leaflet-tooltip-right"),W(s,"leaflet-tooltip-left"),W(s,"leaflet-tooltip-top"),W(s,"leaflet-tooltip-bottom"),M(s,"leaflet-tooltip-"+p),j(s,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&rt(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){return z(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),_r=function(t,e){return new Fe(t,e)};I.include({openTooltip:function(t,e,i){return this._initOverlay(Fe,t,e,i).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),dt.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Fe,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(!(!t&&this._tooltipHandlersAdded)){var e=t?"off":"on",i={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,i.click=this._openTooltip,this._map?this._addFocusListeners():i.add=this._addFocusListeners),this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),this[e](i),this._tooltipHandlersAdded=!t}},openTooltip:function(t){return this._tooltip&&(this instanceof bt||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&(C(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),C(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&e.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var e=this;this._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var e=t.latlng,i,n;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),n=this._map.containerPointToLayerPoint(i),e=this._map.layerPointToLatLng(n)),this._tooltip.setLatLng(e)}});var co=Vt.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&t.tagName==="DIV"?t:document.createElement("div"),i=this.options;if(i.html instanceof Element?(Se(e),e.appendChild(i.html)):e.innerHTML=i.html!==!1?i.html:"",i.bgPos){var n=z(i.bgPos);e.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});function gr(t){return new co(t)}Vt.Default=pe;var me=dt.extend({options:{tileSize:256,opacity:1,updateWhenIdle:P.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){k(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),H(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Ut(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(jt(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=v(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof S?t:new S(t,t)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e=this.getPane().children,i=-t(-1/0,1/0),n=0,s=e.length,a;n<s;n++)a=e[n].style.zIndex,e[n]!==this._container&&a&&(i=t(i,+a));isFinite(i)&&(this.options.zIndex=i+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!P.ielt9){rt(this._container,this.options.opacity);var t=+new Date,e=!1,i=!1;for(var n in this._tiles){var s=this._tiles[n];if(!(!s.current||!s.loaded)){var a=Math.min(1,(t-s.loaded)/200);rt(s.el,a),a<1?e=!0:(s.active?i=!0:this._onOpaqueTile(s),s.active=!0)}}i&&!this._noPrune&&this._pruneTiles(),e&&(st(this._fadeFrame),this._fadeFrame=Q(this._updateOpacity,this))}},_onOpaqueTile:b,_initContainer:function(){this._container||(this._container=N("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(t!==void 0){for(var i in this._levels)i=Number(i),this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(H(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var n=this._levels[t],s=this._map;return n||(n=this._levels[t]={},n.el=N("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=e,n.origin=s.project(s.unproject(s.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,s.getCenter(),s.getZoom()),b(n.el.offsetWidth),this._onCreateLevel(n)),this._level=n,n}},_onUpdateLevel:b,_onRemoveLevel:b,_onCreateLevel:b,_pruneTiles:function(){if(this._map){var t,e,i=this._map.getZoom();if(i>this.options.maxZoom||i<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)e=this._tiles[t],e.retain=e.current;for(t in this._tiles)if(e=this._tiles[t],e.current&&!e.active){var n=e.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)H(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,n){var s=Math.floor(t/2),a=Math.floor(e/2),d=i-1,p=new S(+s,+a);p.z=+d;var m=this._tileCoordsToKey(p),g=this._tiles[m];return g&&g.active?(g.retain=!0,!0):(g&&g.loaded&&(g.retain=!0),d>n?this._retainParent(s,a,d,n):!1)},_retainChildren:function(t,e,i,n){for(var s=2*t;s<2*t+2;s++)for(var a=2*e;a<2*e+2;a++){var d=new S(s,a);d.z=i+1;var p=this._tileCoordsToKey(d),m=this._tiles[p];if(m&&m.active){m.retain=!0;continue}else m&&m.loaded&&(m.retain=!0);i+1<n&&this._retainChildren(s,a,i+1,n)}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return e.minNativeZoom!==void 0&&t<e.minNativeZoom?e.minNativeZoom:e.maxNativeZoom!==void 0&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,n){var s=Math.round(e);this.options.maxZoom!==void 0&&s>this.options.maxZoom||this.options.minZoom!==void 0&&s<this.options.minZoom?s=void 0:s=this._clampZoom(s);var a=this.options.updateWhenZooming&&s!==this._tileZoom;(!n||a)&&(this._tileZoom=s,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),s!==void 0&&this._update(t),i||this._pruneTiles(),this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var n=this._map.getZoomScale(i,t.zoom),s=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e,i)).round();P.any3d?Mt(t.el,s,n):j(t.el,s)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),n=this._tileZoom,s=this._map.getPixelWorldBounds(this._tileZoom);s&&(this._globalTileRange=this._pxBoundsToTileRange(s)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],n).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],n).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],n).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],n).y/i.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),n=e.getZoomScale(i,this._tileZoom),s=e.project(t,this._tileZoom).floor(),a=e.getSize().divideBy(n*2);return new D(s.subtract(a),s.add(a))},_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(t===void 0&&(t=e.getCenter()),this._tileZoom!==void 0){var n=this._getTiledPixelBounds(t),s=this._pxBoundsToTileRange(n),a=s.getCenter(),d=[],p=this.options.keepBuffer,m=new D(s.getBottomLeft().subtract([p,-p]),s.getTopRight().add([p,-p]));if(!(isFinite(s.min.x)&&isFinite(s.min.y)&&isFinite(s.max.x)&&isFinite(s.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var g in this._tiles){var x=this._tiles[g].coords;(x.z!==this._tileZoom||!m.contains(new S(x.x,x.y)))&&(this._tiles[g].current=!1)}if(Math.abs(i-this._tileZoom)>1){this._setView(t,i);return}for(var T=s.min.y;T<=s.max.y;T++)for(var E=s.min.x;E<=s.max.x;E++){var X=new S(E,T);if(X.z=this._tileZoom,!!this._isValidTile(X)){var V=this._tiles[this._tileCoordsToKey(X)];V?V.current=!0:d.push(X)}}if(d.sort(function(it,Jt){return it.distanceTo(a)-Jt.distanceTo(a)}),d.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var lt=document.createDocumentFragment();for(E=0;E<d.length;E++)this._addTile(d[E],lt);this._level.el.appendChild(lt)}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return U(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),n=t.scaleBy(i),s=n.add(i),a=e.unproject(n,t.z),d=e.unproject(s,t.z);return[a,d]},_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),i=new et(e[0],e[1]);return this.options.noWrap||(i=this._map.wrapLatLngBounds(i)),i},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var e=t.split(":"),i=new S(+e[0],+e[1]);return i.z=+e[2],i},_removeTile:function(t){var e=this._tiles[t];e&&(H(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){M(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=b,t.onmousemove=b,P.ielt9&&this.options.opacity<1&&rt(t,this.options.opacity)},_addTile:function(t,e){var i=this._getTilePos(t),n=this._tileCoordsToKey(t),s=this.createTile(this._wrapCoords(t),h(this._tileReady,this,t));this._initTile(s),this.createTile.length<2&&Q(h(this._tileReady,this,t,null,s)),j(s,i),this._tiles[n]={el:s,coords:t,current:!0},e.appendChild(s),this.fire("tileloadstart",{tile:s,coords:t})},_tileReady:function(t,e,i){e&&this.fire("tileerror",{error:e,tile:i,coords:t});var n=this._tileCoordsToKey(t);i=this._tiles[n],i&&(i.loaded=+new Date,this._map._fadeAnimated?(rt(i.el,0),st(this._fadeFrame),this._fadeFrame=Q(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(M(i.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),P.ielt9||!this._map._fadeAnimated?Q(this._pruneTiles,this):setTimeout(h(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new S(this._wrapX?y(t.x,this._wrapX):t.x,this._wrapY?y(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new D(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});function vr(t){return new me(t)}var Yt=me.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,e=k(this,e),e.detectRetina&&P.retina&&e.maxZoom>0?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),typeof e.subdomains=="string"&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&e===void 0&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var i=document.createElement("img");return C(i,"load",h(this._tileOnLoad,this,e,i)),C(i,"error",h(this._tileOnError,this,e,i)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(i.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(i.referrerPolicy=this.options.referrerPolicy),i.alt="",i.src=this.getTileUrl(t),i},getTileUrl:function(t){var e={r:P.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var i=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=i),e["-y"]=i}return un(this._url,r(e,this.options))},_tileOnLoad:function(t,e){P.ielt9?setTimeout(h(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var n=this.options.errorTileUrl;n&&e.getAttribute("src")!==n&&(e.src=n),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,i=this.options.zoomReverse,n=this.options.zoomOffset;return i&&(t=e-t),t+n},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_abortLoading:function(){var t,e;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&(e=this._tiles[t].el,e.onload=b,e.onerror=b,!e.complete)){e.src=Le;var i=this._tiles[t].coords;H(e),delete this._tiles[t],this.fire("tileabort",{tile:e,coords:i})}},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute("src",Le),me.prototype._removeTile.call(this,t)},_tileReady:function(t,e,i){if(!(!this._map||i&&i.getAttribute("src")===Le))return me.prototype._tileReady.call(this,t,e,i)}});function uo(t,e){return new Yt(t,e)}var fo=Yt.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var i=r({},this.defaultWmsParams);for(var n in e)n in this.options||(i[n]=e[n]);e=k(this,e);var s=e.detectRetina&&P.retina?2:1,a=this.getTileSize();i.width=a.x*s,i.height=a.y*s,this.wmsParams=i},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,Yt.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,n=tt(i.project(e[0]),i.project(e[1])),s=n.min,a=n.max,d=(this._wmsVersion>=1.3&&this._crs===oo?[s.y,s.x,a.y,a.x]:[s.x,s.y,a.x,a.y]).join(","),p=Yt.prototype.getTileUrl.call(this,t);return p+nt(this.wmsParams,p,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+d},setParams:function(t,e){return r(this.wmsParams,t),e||this.redraw(),this}});function yr(t,e){return new fo(t,e)}Yt.WMS=fo,uo.wms=yr;var $t=dt.extend({options:{padding:.1},initialize:function(t){k(this,t),f(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),M(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),n=this._map.getSize().multiplyBy(.5+this.options.padding),s=this._map.project(this._center,e),a=n.multiplyBy(-i).add(s).subtract(this._map._getNewPixelOrigin(t,e));P.any3d?Mt(this._container,a,i):j(this._container,a)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new D(i,i.add(e.multiplyBy(1+t*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),po=$t.extend({options:{tolerance:0},getEvents:function(){var t=$t.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){$t.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");C(t,"mousemove",this._onMouseMove,this),C(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),C(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){st(this._redrawRequest),delete this._ctx,H(this._container),B(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var e in this._layers)t=this._layers[e],t._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){$t.prototype._update.call(this);var t=this._bounds,e=this._container,i=t.getSize(),n=P.retina?2:1;j(e,t.min),e.width=n*i.x,e.height=n*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",P.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){$t.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[f(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,n=e.prev;i?i.prev=n:this._drawLast=n,n?n.next=i:this._drawFirst=i,delete t._order,delete this._layers[f(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(typeof t.options.dashArray=="string"){var e=t.options.dashArray.split(/[, ]+/),i=[],n,s;for(s=0;s<e.length;s++){if(n=Number(e[s]),isNaN(n))return;i.push(n)}t.options._dashArray=i}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||Q(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new D,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var i=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,i.x,i.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,n,s,a,d=t._parts,p=d.length,m=this._ctx;if(p){for(m.beginPath(),i=0;i<p;i++){for(n=0,s=d[i].length;n<s;n++)a=d[i][n],m[n?"lineTo":"moveTo"](a.x,a.y);e&&m.closePath()}this._fillStroke(m,t)}}},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var e=t._point,i=this._ctx,n=Math.max(Math.round(t._radius),1),s=(Math.max(Math.round(t._radiusY),1)||n)/n;s!==1&&(i.save(),i.scale(1,s)),i.beginPath(),i.arc(e.x,e.y/s,n,0,Math.PI*2,!1),s!==1&&i.restore(),this._fillStroke(i,t)}},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&i.weight!==0&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},_onClick:function(t){for(var e=this._map.mouseEventToLayerPoint(t),i,n,s=this._drawFirst;s;s=s.next)i=s.layer,i.options.interactive&&i._containsPoint(e)&&(!(t.type==="click"||t.type==="preclick")||!this._map._draggableMoved(i))&&(n=i);this._fireEvent(n?[n]:!1,t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(W(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var i,n,s=this._drawFirst;s;s=s.next)i=s.layer,i.options.interactive&&i._containsPoint(e)&&(n=i);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(M(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,t),this._mouseHoverThrottled=!0,setTimeout(h(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(i)i.prev=n;else return;n?n.next=i:i&&(this._drawFirst=i),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t)}},_bringToBack:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(n)n.next=i;else return;i?i.prev=n:n&&(this._drawLast=n),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t)}}});function mo(t){return P.canvas?new po(t):null}var _e=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch{}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),br={_initContainer:function(){this._container=N("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||($t.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=_e("shape");M(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=_e("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[f(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;H(e),t.removeInteractiveTarget(e),delete this._layers[f(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,n=t.options,s=t._container;s.stroked=!!n.stroke,s.filled=!!n.fill,n.stroke?(e||(e=t._stroke=_e("stroke")),s.appendChild(e),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=ht(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=n.lineCap.replace("butt","flat"),e.joinstyle=n.lineJoin):e&&(s.removeChild(e),t._stroke=null),n.fill?(i||(i=t._fill=_e("fill")),s.appendChild(i),i.color=n.fillColor||n.color,i.opacity=n.fillOpacity):i&&(s.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),n=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+n+" 0,"+65535*360)},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){Ut(t._container)},_bringToBack:function(t){jt(t._container)}},Ue=P.vml?_e:vn,ge=$t.extend({_initContainer:function(){this._container=Ue("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Ue("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){H(this._container),B(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){$t.prototype._update.call(this);var t=this._bounds,e=t.getSize(),i=this._container;(!this._svgSize||!this._svgSize.equals(e))&&(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),j(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){var e=t._path=Ue("path");t.options.className&&M(e,t.options.className),t.options.interactive&&M(e,"leaflet-interactive"),this._updateStyle(t),this._layers[f(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){H(t._path),t.removeInteractiveTarget(t._path),delete this._layers[f(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,i=t.options;e&&(i.stroke?(e.setAttribute("stroke",i.color),e.setAttribute("stroke-opacity",i.opacity),e.setAttribute("stroke-width",i.weight),e.setAttribute("stroke-linecap",i.lineCap),e.setAttribute("stroke-linejoin",i.lineJoin),i.dashArray?e.setAttribute("stroke-dasharray",i.dashArray):e.removeAttribute("stroke-dasharray"),i.dashOffset?e.setAttribute("stroke-dashoffset",i.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),i.fill?(e.setAttribute("fill",i.fillColor||i.color),e.setAttribute("fill-opacity",i.fillOpacity),e.setAttribute("fill-rule",i.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,yn(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),n=Math.max(Math.round(t._radiusY),1)||i,s="a"+i+","+n+" 0 1,0 ",a=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+s+i*2+",0 "+s+-i*2+",0 ";this._setPath(t,a)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){Ut(t._path)},_bringToBack:function(t){jt(t._path)}});P.vml&&ge.include(br);function _o(t){return P.svg||P.vml?new ge(t):null}I.include({getRenderer:function(t){var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if(t==="overlayPane"||t===void 0)return!1;var e=this._paneRenderers[t];return e===void 0&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){return this.options.preferCanvas&&mo(t)||_o(t)}});var go=Gt.extend({initialize:function(t,e){Gt.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=U(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});function xr(t,e){return new go(t,e)}ge.create=Ue,ge.pointsToPath=yn,wt.geometryToLayer=Ze,wt.coordsToLatLng=Ii,wt.coordsToLatLngs=Be,wt.latLngToCoords=Ni,wt.latLngsToCoords=Re,wt.getFeature=Kt,wt.asFeature=De,I.mergeOptions({boxZoom:!0});var vo=_t.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){C(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){B(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){H(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||t.which!==1&&t.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),le(),vi(),this._startPoint=this._map.mouseEventToContainerPoint(t),C(document,{contextmenu:Ot,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=N("div","leaflet-zoom-box",this._container),M(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new D(this._point,this._startPoint),i=e.getSize();j(this._box,e.min),this._box.style.width=i.x+"px",this._box.style.height=i.y+"px"},_finish:function(){this._moved&&(H(this._box),W(this._container,"leaflet-crosshair")),he(),yi(),B(document,{contextmenu:Ot,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if(!(t.which!==1&&t.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(h(this._resetState,this),0);var e=new et(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){t.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});I.addInitHook("addHandler","boxZoom",vo),I.mergeOptions({doubleClickZoom:!0});var yo=_t.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),n=e.options.zoomDelta,s=t.originalEvent.shiftKey?i-n:i+n;e.options.doubleClickZoom==="center"?e.setZoom(s):e.setZoomAround(t.containerPoint,s)}});I.addInitHook("addHandler","doubleClickZoom",yo),I.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var bo=_t.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new Lt(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}M(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){W(this._map._container,"leaflet-grab"),W(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=U(this._map.options.maxBounds);this._offsetLimit=tt(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(i),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,s=(n-e+i)%t+e-i,a=(n+e+i)%t-e-i,d=Math.abs(s+i)<Math.abs(a+i)?s:a;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=d},_onDragEnd:function(t){var e=this._map,i=e.options,n=!i.inertia||t.noInertia||this._times.length<2;if(e.fire("dragend",t),n)e.fire("moveend");else{this._prunePositions(+new Date);var s=this._lastPos.subtract(this._positions[0]),a=(this._lastTime-this._times[0])/1e3,d=i.easeLinearity,p=s.multiplyBy(d/a),m=p.distanceTo([0,0]),g=Math.min(i.inertiaMaxSpeed,m),x=p.multiplyBy(g/m),T=g/(i.inertiaDeceleration*d),E=x.multiplyBy(-T/2).round();!E.x&&!E.y?e.fire("moveend"):(E=e._limitOffset(E,e.options.maxBounds),Q(function(){e.panBy(E,{duration:T,easeLinearity:d,noMoveStart:!0,animate:!0})}))}}});I.addInitHook("addHandler","dragging",bo),I.mergeOptions({keyboard:!0,keyboardPanDelta:80});var xo=_t.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),C(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),B(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,i=t.scrollTop||e.scrollTop,n=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(n,i)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e=this._panKeys={},i=this.keyCodes,n,s;for(n=0,s=i.left.length;n<s;n++)e[i.left[n]]=[-1*t,0];for(n=0,s=i.right.length;n<s;n++)e[i.right[n]]=[t,0];for(n=0,s=i.down.length;n<s;n++)e[i.down[n]]=[0,t];for(n=0,s=i.up.length;n<s;n++)e[i.up[n]]=[0,-1*t]},_setZoomDelta:function(t){var e=this._zoomKeys={},i=this.keyCodes,n,s;for(n=0,s=i.zoomIn.length;n<s;n++)e[i.zoomIn[n]]=t;for(n=0,s=i.zoomOut.length;n<s;n++)e[i.zoomOut[n]]=-t},_addHooks:function(){C(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){B(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e=t.keyCode,i=this._map,n;if(e in this._panKeys){if(!i._panAnim||!i._panAnim._inProgress)if(n=this._panKeys[e],t.shiftKey&&(n=z(n).multiplyBy(3)),i.options.maxBounds&&(n=i._limitOffset(z(n),i.options.maxBounds)),i.options.worldCopyJump){var s=i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(n)));i.panTo(s)}else i.panBy(n)}else if(e in this._zoomKeys)i.setZoom(i.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else if(e===27&&i._popup&&i._popup.options.closeOnEscapeKey)i.closePopup();else return;Ot(t)}}});I.addInitHook("addHandler","keyboard",xo),I.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var wo=_t.extend({addHooks:function(){C(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){B(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=jn(t),i=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var n=Math.max(i-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(h(this._performZoom,this),n),Ot(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(this._map.options.wheelPxPerZoomLevel*4),s=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,a=i?Math.ceil(s/i)*i:s,d=t._limitZoom(e+(this._delta>0?a:-a))-e;this._delta=0,this._startTime=null,d&&(t.options.scrollWheelZoom==="center"?t.setZoom(e+d):t.setZoomAround(this._lastMousePos,e+d))}});I.addInitHook("addHandler","scrollWheelZoom",wo);var wr=600;I.mergeOptions({tapHold:P.touchNative&&P.safari&&P.mobile,tapTolerance:15});var $o=_t.extend({addHooks:function(){C(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){B(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),t.touches.length===1){var e=t.touches[0];this._startPos=this._newPos=new S(e.clientX,e.clientY),this._holdTimeout=setTimeout(h(function(){this._cancel(),this._isTapValid()&&(C(document,"touchend",Y),C(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),wr),C(document,"touchend touchcancel contextmenu",this._cancel,this),C(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){B(document,"touchend",Y),B(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),B(document,"touchend touchcancel contextmenu",this._cancel,this),B(document,"touchmove",this._onMove,this)},_onMove:function(t){var e=t.touches[0];this._newPos=new S(e.clientX,e.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){var i=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});i._simulated=!0,e.target.dispatchEvent(i)}});I.addInitHook("addHandler","tapHold",$o),I.mergeOptions({touchZoom:P.touch,bounceAtZoomLimits:!0});var Po=_t.extend({addHooks:function(){M(this._map._container,"leaflet-touch-zoom"),C(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){W(this._map._container,"leaflet-touch-zoom"),B(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(!(!t.touches||t.touches.length!==2||e._animatingZoom||this._zooming)){var i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),e.options.touchZoom!=="center"&&(this._pinchStartLatLng=e.containerPointToLatLng(i.add(n)._divideBy(2))),this._startDist=i.distanceTo(n),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),C(document,"touchmove",this._onTouchMove,this),C(document,"touchend touchcancel",this._onTouchEnd,this),Y(t)}},_onTouchMove:function(t){if(!(!t.touches||t.touches.length!==2||!this._zooming)){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]),s=i.distanceTo(n)/this._startDist;if(this._zoom=e.getScaleZoom(s,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&s<1||this._zoom>e.getMaxZoom()&&s>1)&&(this._zoom=e._limitZoom(this._zoom)),e.options.touchZoom==="center"){if(this._center=this._startLatLng,s===1)return}else{var a=i._add(n)._divideBy(2)._subtract(this._centerPoint);if(s===1&&a.x===0&&a.y===0)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(a),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),st(this._animRequest);var d=h(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=Q(d,this,!0),Y(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,st(this._animRequest),B(document,"touchmove",this._onTouchMove,this),B(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});I.addInitHook("addHandler","touchZoom",Po),I.BoxZoom=vo,I.DoubleClickZoom=yo,I.Drag=bo,I.Keyboard=xo,I.ScrollWheelZoom=wo,I.TapHold=$o,I.TouchZoom=Po,c.Bounds=D,c.Browser=P,c.CRS=yt,c.Canvas=po,c.Circle=Oi,c.CircleMarker=Ne,c.Class=vt,c.Control=ct,c.DivIcon=co,c.DivOverlay=gt,c.DomEvent=Ds,c.DomUtil=Bs,c.Draggable=Lt,c.Evented=ne,c.FeatureGroup=bt,c.GeoJSON=wt,c.GridLayer=me,c.Handler=_t,c.Icon=Vt,c.ImageOverlay=He,c.LatLng=Z,c.LatLngBounds=et,c.Layer=dt,c.LayerGroup=qt,c.LineUtil=Qs,c.Map=I,c.Marker=Ie,c.Mixin=Vs,c.Path=Tt,c.Point=S,c.PolyUtil=Gs,c.Polygon=Gt,c.Polyline=xt,c.Popup=We,c.PosAnimation=qn,c.Projection=tr,c.Rectangle=go,c.Renderer=$t,c.SVG=ge,c.SVGOverlay=ho,c.TileLayer=Yt,c.Tooltip=Fe,c.Transformation=ri,c.Util=rs,c.VideoOverlay=lo,c.bind=h,c.bounds=tt,c.canvas=mo,c.circle=lr,c.circleMarker=ar,c.control=ue,c.divIcon=gr,c.extend=r,c.featureGroup=or,c.geoJSON=ao,c.geoJson=dr,c.gridLayer=vr,c.icon=sr,c.imageOverlay=ur,c.latLng=O,c.latLngBounds=U,c.layerGroup=nr,c.map=Hs,c.marker=rr,c.point=z,c.polygon=cr,c.polyline=hr,c.popup=mr,c.rectangle=xr,c.setOptions=k,c.stamp=f,c.svg=_o,c.svgOverlay=pr,c.tileLayer=uo,c.tooltip=_r,c.transformation=oe,c.version=o,c.videoOverlay=fr;var $r=window.L;c.noConflict=function(){return window.L=$r,this},window.L=c}))});var qe=globalThis,Ve=qe.ShadowRoot&&(qe.ShadyCSS===void 0||qe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ri=Symbol(),So=new WeakMap,ve=class{constructor(o,r,l){if(this._$cssResult$=!0,l!==Ri)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=o,this.t=r}get styleSheet(){let o=this.o,r=this.t;if(Ve&&o===void 0){let l=r!==void 0&&r.length===1;l&&(o=So.get(r)),o===void 0&&((this.o=o=new CSSStyleSheet).replaceSync(this.cssText),l&&So.set(r,o))}return o}toString(){return this.cssText}},Ge=c=>new ve(typeof c=="string"?c:c+"",void 0,Ri),F=(c,...o)=>{let r=c.length===1?c[0]:o.reduce((l,h,u)=>l+(f=>{if(f._$cssResult$===!0)return f.cssText;if(typeof f=="number")return f;throw Error("Value passed to 'css' function must be a 'css' function result: "+f+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(h)+c[u+1],c[0]);return new ve(r,c,Ri)},Co=(c,o)=>{if(Ve)c.adoptedStyleSheets=o.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of o){let l=document.createElement("style"),h=qe.litNonce;h!==void 0&&l.setAttribute("nonce",h),l.textContent=r.cssText,c.appendChild(l)}},Di=Ve?c=>c:c=>c instanceof CSSStyleSheet?(o=>{let r="";for(let l of o.cssRules)r+=l.cssText;return Ge(r)})(c):c;var{is:Dr,defineProperty:Hr,getOwnPropertyDescriptor:Wr,getOwnPropertyNames:Fr,getOwnPropertySymbols:Ur,getPrototypeOf:jr}=Object,Ke=globalThis,Mo=Ke.trustedTypes,qr=Mo?Mo.emptyScript:"",Vr=Ke.reactiveElementPolyfillSupport,ye=(c,o)=>c,Hi={toAttribute(c,o){switch(o){case Boolean:c=c?qr:null;break;case Object:case Array:c=c==null?c:JSON.stringify(c)}return c},fromAttribute(c,o){let r=c;switch(o){case Boolean:r=c!==null;break;case Number:r=c===null?null:Number(c);break;case Object:case Array:try{r=JSON.parse(c)}catch{r=null}}return r}},Ao=(c,o)=>!Dr(c,o),Eo={attribute:!0,type:String,converter:Hi,reflect:!1,useDefault:!1,hasChanged:Ao};Symbol.metadata??=Symbol("metadata"),Ke.litPropertyMetadata??=new WeakMap;var Pt=class extends HTMLElement{static addInitializer(o){this._$Ei(),(this.l??=[]).push(o)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(o,r=Eo){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(o)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(o,r),!r.noAccessor){let l=Symbol(),h=this.getPropertyDescriptor(o,l,r);h!==void 0&&Hr(this.prototype,o,h)}}static getPropertyDescriptor(o,r,l){let{get:h,set:u}=Wr(this.prototype,o)??{get(){return this[r]},set(f){this[r]=f}};return{get:h,set(f){let v=h?.call(this);u?.call(this,f),this.requestUpdate(o,v,l)},configurable:!0,enumerable:!0}}static getPropertyOptions(o){return this.elementProperties.get(o)??Eo}static _$Ei(){if(this.hasOwnProperty(ye("elementProperties")))return;let o=jr(this);o.finalize(),o.l!==void 0&&(this.l=[...o.l]),this.elementProperties=new Map(o.elementProperties)}static finalize(){if(this.hasOwnProperty(ye("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ye("properties"))){let r=this.properties,l=[...Fr(r),...Ur(r)];for(let h of l)this.createProperty(h,r[h])}let o=this[Symbol.metadata];if(o!==null){let r=litPropertyMetadata.get(o);if(r!==void 0)for(let[l,h]of r)this.elementProperties.set(l,h)}this._$Eh=new Map;for(let[r,l]of this.elementProperties){let h=this._$Eu(r,l);h!==void 0&&this._$Eh.set(h,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(o){let r=[];if(Array.isArray(o)){let l=new Set(o.flat(1/0).reverse());for(let h of l)r.unshift(Di(h))}else o!==void 0&&r.push(Di(o));return r}static _$Eu(o,r){let l=r.attribute;return l===!1?void 0:typeof l=="string"?l:typeof o=="string"?o.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(o=>o(this))}addController(o){(this._$EO??=new Set).add(o),this.renderRoot!==void 0&&this.isConnected&&o.hostConnected?.()}removeController(o){this._$EO?.delete(o)}_$E_(){let o=new Map,r=this.constructor.elementProperties;for(let l of r.keys())this.hasOwnProperty(l)&&(o.set(l,this[l]),delete this[l]);o.size>0&&(this._$Ep=o)}createRenderRoot(){let o=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Co(o,this.constructor.elementStyles),o}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(o=>o.hostConnected?.())}enableUpdating(o){}disconnectedCallback(){this._$EO?.forEach(o=>o.hostDisconnected?.())}attributeChangedCallback(o,r,l){this._$AK(o,l)}_$ET(o,r){let l=this.constructor.elementProperties.get(o),h=this.constructor._$Eu(o,l);if(h!==void 0&&l.reflect===!0){let u=(l.converter?.toAttribute!==void 0?l.converter:Hi).toAttribute(r,l.type);this._$Em=o,u==null?this.removeAttribute(h):this.setAttribute(h,u),this._$Em=null}}_$AK(o,r){let l=this.constructor,h=l._$Eh.get(o);if(h!==void 0&&this._$Em!==h){let u=l.getPropertyOptions(h),f=typeof u.converter=="function"?{fromAttribute:u.converter}:u.converter?.fromAttribute!==void 0?u.converter:Hi;this._$Em=h;let v=f.fromAttribute(r,u.type);this[h]=v??this._$Ej?.get(h)??v,this._$Em=null}}requestUpdate(o,r,l,h=!1,u){if(o!==void 0){let f=this.constructor;if(h===!1&&(u=this[o]),l??=f.getPropertyOptions(o),!((l.hasChanged??Ao)(u,r)||l.useDefault&&l.reflect&&u===this._$Ej?.get(o)&&!this.hasAttribute(f._$Eu(o,l))))return;this.C(o,r,l)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(o,r,{useDefault:l,reflect:h,wrapped:u},f){l&&!(this._$Ej??=new Map).has(o)&&(this._$Ej.set(o,f??r??this[o]),u!==!0||f!==void 0)||(this._$AL.has(o)||(this.hasUpdated||l||(r=void 0),this._$AL.set(o,r)),h===!0&&this._$Em!==o&&(this._$Eq??=new Set).add(o))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let o=this.scheduleUpdate();return o!=null&&await o,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[h,u]of this._$Ep)this[h]=u;this._$Ep=void 0}let l=this.constructor.elementProperties;if(l.size>0)for(let[h,u]of l){let{wrapped:f}=u,v=this[h];f!==!0||this._$AL.has(h)||v===void 0||this.C(h,void 0,u,v)}}let o=!1,r=this._$AL;try{o=this.shouldUpdate(r),o?(this.willUpdate(r),this._$EO?.forEach(l=>l.hostUpdate?.()),this.update(r)):this._$EM()}catch(l){throw o=!1,this._$EM(),l}o&&this._$AE(r)}willUpdate(o){}_$AE(o){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(o)),this.updated(o)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(o){return!0}update(o){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(o){}firstUpdated(o){}};Pt.elementStyles=[],Pt.shadowRootOptions={mode:"open"},Pt[ye("elementProperties")]=new Map,Pt[ye("finalized")]=new Map,Vr?.({ReactiveElement:Pt}),(Ke.reactiveElementVersions??=[]).push("2.1.2");var Gi=globalThis,Oo=c=>c,Ye=Gi.trustedTypes,Io=Ye?Ye.createPolicy("lit-html",{createHTML:c=>c}):void 0,Ho="$lit$",zt=`lit$${Math.random().toFixed(9).slice(2)}$`,Wo="?"+zt,Gr=`<${Wo}>`,Bt=document,xe=()=>Bt.createComment(""),we=c=>c===null||typeof c!="object"&&typeof c!="function",Ki=Array.isArray,Kr=c=>Ki(c)||typeof c?.[Symbol.iterator]=="function",Wi=`[ 	
\f\r]`,be=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,No=/-->/g,Zo=/>/g,Nt=RegExp(`>|${Wi}(?:([^\\s"'>=/]+)(${Wi}*=${Wi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Bo=/'/g,Ro=/"/g,Fo=/^(?:script|style|textarea|title)$/i,Yi=c=>(o,...r)=>({_$litType$:c,strings:o,values:r}),_=Yi(1),da=Yi(2),ua=Yi(3),Rt=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),Do=new WeakMap,Zt=Bt.createTreeWalker(Bt,129);function Uo(c,o){if(!Ki(c)||!c.hasOwnProperty("raw"))throw Error("invalid template strings array");return Io!==void 0?Io.createHTML(o):o}var Yr=(c,o)=>{let r=c.length-1,l=[],h,u=o===2?"<svg>":o===3?"<math>":"",f=be;for(let v=0;v<r;v++){let y=c[v],b,$,w=-1,A=0;for(;A<y.length&&(f.lastIndex=A,$=f.exec(y),$!==null);)A=f.lastIndex,f===be?$[1]==="!--"?f=No:$[1]!==void 0?f=Zo:$[2]!==void 0?(Fo.test($[2])&&(h=RegExp("</"+$[2],"g")),f=Nt):$[3]!==void 0&&(f=Nt):f===Nt?$[0]===">"?(f=h??be,w=-1):$[1]===void 0?w=-2:(w=f.lastIndex-$[2].length,b=$[1],f=$[3]===void 0?Nt:$[3]==='"'?Ro:Bo):f===Ro||f===Bo?f=Nt:f===No||f===Zo?f=be:(f=Nt,h=void 0);let k=f===Nt&&c[v+1].startsWith("/>")?" ":"";u+=f===be?y+Gr:w>=0?(l.push(b),y.slice(0,w)+Ho+y.slice(w)+zt+k):y+zt+(w===-2?v:k)}return[Uo(c,u+(c[r]||"<?>")+(o===2?"</svg>":o===3?"</math>":"")),l]},$e=class c{constructor({strings:o,_$litType$:r},l){let h;this.parts=[];let u=0,f=0,v=o.length-1,y=this.parts,[b,$]=Yr(o,r);if(this.el=c.createElement(b,l),Zt.currentNode=this.el.content,r===2||r===3){let w=this.el.content.firstChild;w.replaceWith(...w.childNodes)}for(;(h=Zt.nextNode())!==null&&y.length<v;){if(h.nodeType===1){if(h.hasAttributes())for(let w of h.getAttributeNames())if(w.endsWith(Ho)){let A=$[f++],k=h.getAttribute(w).split(zt),nt=/([.?@])?(.*)/.exec(A);y.push({type:1,index:u,name:nt[2],strings:k,ctor:nt[1]==="."?Ui:nt[1]==="?"?ji:nt[1]==="@"?qi:Qt}),h.removeAttribute(w)}else w.startsWith(zt)&&(y.push({type:6,index:u}),h.removeAttribute(w));if(Fo.test(h.tagName)){let w=h.textContent.split(zt),A=w.length-1;if(A>0){h.textContent=Ye?Ye.emptyScript:"";for(let k=0;k<A;k++)h.append(w[k],xe()),Zt.nextNode(),y.push({type:2,index:++u});h.append(w[A],xe())}}}else if(h.nodeType===8)if(h.data===Wo)y.push({type:2,index:u});else{let w=-1;for(;(w=h.data.indexOf(zt,w+1))!==-1;)y.push({type:7,index:u}),w+=zt.length-1}u++}}static createElement(o,r){let l=Bt.createElement("template");return l.innerHTML=o,l}};function Xt(c,o,r=c,l){if(o===Rt)return o;let h=l!==void 0?r._$Co?.[l]:r._$Cl,u=we(o)?void 0:o._$litDirective$;return h?.constructor!==u&&(h?._$AO?.(!1),u===void 0?h=void 0:(h=new u(c),h._$AT(c,r,l)),l!==void 0?(r._$Co??=[])[l]=h:r._$Cl=h),h!==void 0&&(o=Xt(c,h._$AS(c,o.values),h,l)),o}var Fi=class{constructor(o,r){this._$AV=[],this._$AN=void 0,this._$AD=o,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(o){let{el:{content:r},parts:l}=this._$AD,h=(o?.creationScope??Bt).importNode(r,!0);Zt.currentNode=h;let u=Zt.nextNode(),f=0,v=0,y=l[0];for(;y!==void 0;){if(f===y.index){let b;y.type===2?b=new Pe(u,u.nextSibling,this,o):y.type===1?b=new y.ctor(u,y.name,y.strings,this,o):y.type===6&&(b=new Vi(u,this,o)),this._$AV.push(b),y=l[++v]}f!==y?.index&&(u=Zt.nextNode(),f++)}return Zt.currentNode=Bt,h}p(o){let r=0;for(let l of this._$AV)l!==void 0&&(l.strings!==void 0?(l._$AI(o,l,r),r+=l.strings.length-2):l._$AI(o[r])),r++}},Pe=class c{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(o,r,l,h){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=o,this._$AB=r,this._$AM=l,this.options=h,this._$Cv=h?.isConnected??!0}get parentNode(){let o=this._$AA.parentNode,r=this._$AM;return r!==void 0&&o?.nodeType===11&&(o=r.parentNode),o}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(o,r=this){o=Xt(this,o,r),we(o)?o===G||o==null||o===""?(this._$AH!==G&&this._$AR(),this._$AH=G):o!==this._$AH&&o!==Rt&&this._(o):o._$litType$!==void 0?this.$(o):o.nodeType!==void 0?this.T(o):Kr(o)?this.k(o):this._(o)}O(o){return this._$AA.parentNode.insertBefore(o,this._$AB)}T(o){this._$AH!==o&&(this._$AR(),this._$AH=this.O(o))}_(o){this._$AH!==G&&we(this._$AH)?this._$AA.nextSibling.data=o:this.T(Bt.createTextNode(o)),this._$AH=o}$(o){let{values:r,_$litType$:l}=o,h=typeof l=="number"?this._$AC(o):(l.el===void 0&&(l.el=$e.createElement(Uo(l.h,l.h[0]),this.options)),l);if(this._$AH?._$AD===h)this._$AH.p(r);else{let u=new Fi(h,this),f=u.u(this.options);u.p(r),this.T(f),this._$AH=u}}_$AC(o){let r=Do.get(o.strings);return r===void 0&&Do.set(o.strings,r=new $e(o)),r}k(o){Ki(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,l,h=0;for(let u of o)h===r.length?r.push(l=new c(this.O(xe()),this.O(xe()),this,this.options)):l=r[h],l._$AI(u),h++;h<r.length&&(this._$AR(l&&l._$AB.nextSibling,h),r.length=h)}_$AR(o=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);o!==this._$AB;){let l=Oo(o).nextSibling;Oo(o).remove(),o=l}}setConnected(o){this._$AM===void 0&&(this._$Cv=o,this._$AP?.(o))}},Qt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(o,r,l,h,u){this.type=1,this._$AH=G,this._$AN=void 0,this.element=o,this.name=r,this._$AM=h,this.options=u,l.length>2||l[0]!==""||l[1]!==""?(this._$AH=Array(l.length-1).fill(new String),this.strings=l):this._$AH=G}_$AI(o,r=this,l,h){let u=this.strings,f=!1;if(u===void 0)o=Xt(this,o,r,0),f=!we(o)||o!==this._$AH&&o!==Rt,f&&(this._$AH=o);else{let v=o,y,b;for(o=u[0],y=0;y<u.length-1;y++)b=Xt(this,v[l+y],r,y),b===Rt&&(b=this._$AH[y]),f||=!we(b)||b!==this._$AH[y],b===G?o=G:o!==G&&(o+=(b??"")+u[y+1]),this._$AH[y]=b}f&&!h&&this.j(o)}j(o){o===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,o??"")}},Ui=class extends Qt{constructor(){super(...arguments),this.type=3}j(o){this.element[this.name]=o===G?void 0:o}},ji=class extends Qt{constructor(){super(...arguments),this.type=4}j(o){this.element.toggleAttribute(this.name,!!o&&o!==G)}},qi=class extends Qt{constructor(o,r,l,h,u){super(o,r,l,h,u),this.type=5}_$AI(o,r=this){if((o=Xt(this,o,r,0)??G)===Rt)return;let l=this._$AH,h=o===G&&l!==G||o.capture!==l.capture||o.once!==l.once||o.passive!==l.passive,u=o!==G&&(l===G||h);h&&this.element.removeEventListener(this.name,this,l),u&&this.element.addEventListener(this.name,this,o),this._$AH=o}handleEvent(o){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,o):this._$AH.handleEvent(o)}},Vi=class{constructor(o,r,l){this.element=o,this.type=6,this._$AN=void 0,this._$AM=r,this.options=l}get _$AU(){return this._$AM._$AU}_$AI(o){Xt(this,o)}};var Jr=Gi.litHtmlPolyfillSupport;Jr?.($e,Pe),(Gi.litHtmlVersions??=[]).push("3.3.3");var jo=(c,o,r)=>{let l=r?.renderBefore??o,h=l._$litPart$;if(h===void 0){let u=r?.renderBefore??null;l._$litPart$=h=new Pe(o.insertBefore(xe(),u),u,void 0,r??{})}return h._$AI(c),h};var Ji=globalThis,R=class extends Pt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let o=super.createRenderRoot();return this.renderOptions.renderBefore??=o.firstChild,o}update(o){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(o),this._$Do=jo(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Rt}};R._$litElement$=!0,R.finalized=!0,Ji.litElementHydrateSupport?.({LitElement:R});var Xr=Ji.litElementPolyfillSupport;Xr?.({LitElement:R});(Ji.litElementVersions??=[]).push("4.2.2");var qo={tab_radio:"Radio",tab_messages:"Messages",tab_nodes:"Nodes",tab_map:"Map",tab_config:"Settings",connected:"Connected",disconnected:"Disconnected",connecting:"Connecting\u2026",no_entries:"No Meshtastic radio is configured. Add the Meshtastic Manager integration in Settings \u2192 Devices & services.",not_connected_hint:"The radio is not connected. Home Assistant keeps retrying in the background.",last_error:"Last error",device:"Device",status:"Status",long_name:"Long name",short_name:"Short name",node_id:"Node ID",hardware:"Hardware",firmware:"Firmware",role:"Role",region:"Region",preset:"Modem preset",connection:"Connection",uptime:"Uptime",battery:"Battery",powered:"External power",voltage:"Voltage",channel_util:"Channel utilization",air_util:"Airtime TX",packets:"Packets",sent:"sent",received:"received",bad:"bad",relayed:"relayed",nodes_online:"Nodes online",nodes_known:"Nodes known",channels:"Channels",channel:"Channel",primary:"Primary",secondary:"Secondary",disabled:"Disabled",psk:"Encryption",psk_none:"none",psk_default:"default key",psk_custom:"custom key",actions:"Actions",reconnect:"Reconnect",reboot:"Reboot",shutdown:"Shut down",set_time:"Sync clock",reset_nodedb:"Reset node database",factory_reset_config:"Factory reset (config)",factory_reset_device:"Factory reset (full)",reboot_ota:"Reboot to OTA",confirm:"Confirm",cancel:"Cancel",confirm_action:"Are you sure? This is sent to the radio immediately.",done:"Done",error:"Error",conversations:"Conversations",direct:"Direct messages",no_messages:"No messages yet.",type_message:"Type a message\u2026",send:"Send",bytes:"bytes",st_pending:"Sending\u2026",st_sent:"Sent (heard by the mesh)",st_delivered:"Delivered",st_failed:"Failed",st_unconfirmed:"Sent, no confirmation received",reply:"Reply",delete_conversation:"Delete history",select_conversation:"Select a conversation.",hops:"hops",direct_hop:"direct",via_mqtt:"via MQTT",search:"Search\u2026",name:"Name",last_heard:"Last heard",distance:"Distance",snr:"SNR",favorites_only:"Favorites only",heard_within:"Heard within",any_time:"any time",h1:"1 h",h24:"24 h",d7:"7 days",never:"never",ago:"ago",just_now:"just now",you:"this radio",send_dm:"Send message",traceroute:"Traceroute",request_position:"Request position",request_telemetry:"Request telemetry",exchange_info:"Exchange user info",favorite:"Favorite",unfavorite:"Unfavorite",ignore:"Ignore",unignore:"Unignore",remove_node:"Remove from database",request_sent:"Request sent; the answer will appear when the node responds.",position:"Position",altitude:"Altitude",metrics:"Device metrics",environment:"Environment",traceroutes:"Traceroutes",towards:"Towards",back:"Back",no_traceroutes:"No traceroutes yet.",public_key:"Public key",close:"Close",ignored:"ignored",no_positions:"No node has reported a position yet.",nodes_without_position:"nodes without position",owner:"Owner",licensed:"Licensed operator (HAM)",unmessagable:"Unmessageable",save:"Save",saved:"Saved. The radio may reboot to apply the change.",reboot_warning:"Saving some sections (LoRa, device, network, Bluetooth) reboots the radio.",config_sections:"Radio configuration",module_sections:"Modules",share_url:"Channel share URL",generate_key:"Random key",default_key:"Default key",no_key:"No encryption",admin_only:"Only administrators can change the radio configuration.",unsaved:"Unsaved changes",fixed_position:"Fixed position",set_fixed:"Set fixed position",remove_fixed:"Remove fixed position",latitude:"Latitude",longitude:"Longitude",use_home:"Use Home Assistant location"},Xi={tab_radio:"Radio",tab_messages:"Wiadomo\u015Bci",tab_nodes:"W\u0119z\u0142y",tab_map:"Mapa",tab_config:"Ustawienia",connected:"Po\u0142\u0105czono",disconnected:"Roz\u0142\u0105czono",connecting:"\u0141\u0105czenie\u2026",no_entries:"Nie skonfigurowano radia Meshtastic. Dodaj integracj\u0119 Meshtastic Manager w Ustawienia \u2192 Urz\u0105dzenia i us\u0142ugi.",not_connected_hint:"Radio nie jest po\u0142\u0105czone. Home Assistant ponawia pr\xF3by w tle.",last_error:"Ostatni b\u0142\u0105d",device:"Urz\u0105dzenie",status:"Stan",long_name:"Pe\u0142na nazwa",short_name:"Skr\xF3t",node_id:"ID w\u0119z\u0142a",hardware:"Sprz\u0119t",firmware:"Firmware",role:"Rola",region:"Region",preset:"Preset modemu",connection:"Po\u0142\u0105czenie",uptime:"Czas pracy",battery:"Bateria",powered:"Zasilanie zewn\u0119trzne",voltage:"Napi\u0119cie",channel_util:"Wykorzystanie kana\u0142u",air_util:"Czas nadawania TX",packets:"Pakiety",sent:"wys\u0142ane",received:"odebrane",bad:"b\u0142\u0119dne",relayed:"przekazane",nodes_online:"W\u0119z\u0142y online",nodes_known:"Znane w\u0119z\u0142y",channels:"Kana\u0142y",channel:"Kana\u0142",primary:"G\u0142\xF3wny",secondary:"Dodatkowy",disabled:"Wy\u0142\u0105czony",psk:"Szyfrowanie",psk_none:"brak",psk_default:"klucz domy\u015Blny",psk_custom:"w\u0142asny klucz",actions:"Akcje",reconnect:"Po\u0142\u0105cz ponownie",reboot:"Restart",shutdown:"Wy\u0142\u0105cz",set_time:"Synchronizuj zegar",reset_nodedb:"Wyczy\u015B\u0107 baz\u0119 w\u0119z\u0142\xF3w",factory_reset_config:"Reset fabryczny (konfiguracja)",factory_reset_device:"Reset fabryczny (pe\u0142ny)",reboot_ota:"Restart do OTA",confirm:"Potwierd\u017A",cancel:"Anuluj",confirm_action:"Na pewno? Polecenie zostanie od razu wys\u0142ane do radia.",done:"Gotowe",error:"B\u0142\u0105d",conversations:"Rozmowy",direct:"Wiadomo\u015Bci prywatne",no_messages:"Brak wiadomo\u015Bci.",type_message:"Napisz wiadomo\u015B\u0107\u2026",send:"Wy\u015Blij",bytes:"bajt\xF3w",st_pending:"Wysy\u0142anie\u2026",st_sent:"Wys\u0142ano (us\u0142yszane przez sie\u0107)",st_delivered:"Dostarczono",st_failed:"Nie dostarczono",st_unconfirmed:"Wys\u0142ano, brak potwierdzenia",reply:"Odpowiedz",delete_conversation:"Usu\u0144 histori\u0119",select_conversation:"Wybierz rozmow\u0119.",hops:"skok\xF3w",direct_hop:"bezpo\u015Brednio",via_mqtt:"przez MQTT",search:"Szukaj\u2026",name:"Nazwa",last_heard:"Ostatnio s\u0142yszany",distance:"Odleg\u0142o\u015B\u0107",snr:"SNR",favorites_only:"Tylko ulubione",heard_within:"S\u0142yszane w ci\u0105gu",any_time:"dowolnie",h1:"1 h",h24:"24 h",d7:"7 dni",never:"nigdy",ago:"temu",just_now:"przed chwil\u0105",you:"to radio",send_dm:"Wy\u015Blij wiadomo\u015B\u0107",traceroute:"Traceroute",request_position:"Popro\u015B o pozycj\u0119",request_telemetry:"Popro\u015B o telemetri\u0119",exchange_info:"Wymie\u0144 dane u\u017Cytkownika",favorite:"Dodaj do ulubionych",unfavorite:"Usu\u0144 z ulubionych",ignore:"Ignoruj",unignore:"Przesta\u0144 ignorowa\u0107",remove_node:"Usu\u0144 z bazy",request_sent:"Wys\u0142ano zapytanie \u2014 wynik pojawi si\u0119, gdy w\u0119ze\u0142 odpowie.",position:"Pozycja",altitude:"Wysoko\u015B\u0107",metrics:"Parametry urz\u0105dzenia",environment:"\u015Arodowisko",traceroutes:"Traceroute",towards:"Tam",back:"Z powrotem",no_traceroutes:"Brak wynik\xF3w traceroute.",public_key:"Klucz publiczny",close:"Zamknij",ignored:"ignorowany",no_positions:"\u017Baden w\u0119ze\u0142 nie poda\u0142 jeszcze pozycji.",nodes_without_position:"w\u0119z\u0142\xF3w bez pozycji",owner:"W\u0142a\u015Bciciel",licensed:"Licencjonowany kr\xF3tkofalowiec (HAM)",unmessagable:"Nie przyjmuje wiadomo\u015Bci",save:"Zapisz",saved:"Zapisano. Radio mo\u017Ce si\u0119 zrestartowa\u0107, \u017Ceby zastosowa\u0107 zmian\u0119.",reboot_warning:"Zapis niekt\xF3rych sekcji (LoRa, urz\u0105dzenie, sie\u0107, Bluetooth) restartuje radio.",config_sections:"Konfiguracja radia",module_sections:"Modu\u0142y",share_url:"Link do udost\u0119pnienia kana\u0142\xF3w",generate_key:"Losowy klucz",default_key:"Klucz domy\u015Blny",no_key:"Bez szyfrowania",admin_only:"Tylko administratorzy mog\u0105 zmienia\u0107 konfiguracj\u0119 radia.",unsaved:"Niezapisane zmiany",fixed_position:"Sta\u0142a pozycja",set_fixed:"Ustaw sta\u0142\u0105 pozycj\u0119",remove_fixed:"Usu\u0144 sta\u0142\u0105 pozycj\u0119",latitude:"Szeroko\u015B\u0107",longitude:"D\u0142ugo\u015B\u0107",use_home:"U\u017Cyj lokalizacji Home Assistant"},Vo={device:"Urz\u0105dzenie",position:"Pozycja",power:"Zasilanie",network:"Sie\u0107",display:"Wy\u015Bwietlacz",lora:"LoRa",bluetooth:"Bluetooth",security:"Bezpiecze\u0144stwo",mqtt:"MQTT",serial:"Port szeregowy",external_notification:"Powiadomienia zewn\u0119trzne",store_forward:"Store & Forward",range_test:"Test zasi\u0119gu",telemetry:"Telemetria",canned_message:"Gotowe wiadomo\u015Bci",audio:"Audio",remote_hardware:"Zdalny sprz\u0119t",neighbor_info:"Informacje o s\u0105siadach",ambient_lighting:"O\u015Bwietlenie",detection_sensor:"Czujnik detekcji",paxcounter:"Paxcounter",traffic_management:"Zarz\u0105dzanie ruchem",statusmessage:"Wiadomo\u015B\u0107 statusowa"};function Go(c){let o=c&&c.startsWith("pl")?Xi:qo,r=l=>o[l]??qo[l]??l;return r.lang=o===Xi?"pl":"en",r.section=l=>o===Xi&&Vo[l]?Vo[l]:ke(l),r}function ke(c){let o=c.replace(/_/g," ");return o.charAt(0).toUpperCase()+o.slice(1)}var K=F`
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
`;function Dt(c){return`hsl(${(Math.imul(c>>>0,2654435761)>>>0)%360}, 55%, 45%)`}var St=c=>"!"+(c>>>0).toString(16).padStart(8,"0");function Ct(c,o){let r=c?.user;return r?.longName?r.longName:St(o??c?.num??0)}function ut(c,o){let r=c?.user;return r?.shortName?r.shortName:St(o??c?.num??0).slice(-4)}function te(c,o){if(!c)return o("never");let r=Math.max(0,Date.now()/1e3-c);if(r<60)return o("just_now");let l=o.lang==="pl"?[[86400,"d"],[3600,"h"],[60,"min"]]:[[86400,"d"],[3600,"h"],[60,"min"]];for(let[h,u]of l)if(r>=h)return`${Math.floor(r/h)} ${u} ${o("ago")}`;return o("just_now")}function ee(c,o){let r=new Date(c*1e3),l=new Date,h=r.toDateString()===l.toDateString(),u=r.toLocaleTimeString(o,{hour:"2-digit",minute:"2-digit"});return h?u:r.toLocaleDateString(o,{day:"numeric",month:"short"})+" "+u}function Je(c){if(c==null)return"\u2014";let o=Math.floor(c/86400),r=Math.floor(c%86400/3600),l=Math.floor(c%3600/60);return o?`${o}d ${r}h`:r?`${r}h ${l}m`:`${l}m`}function ft(c){let o=c?.position;if(!o)return null;let r=o.latitude??(o.latitudeI!=null?o.latitudeI*1e-7:null),l=o.longitude??(o.longitudeI!=null?o.longitudeI*1e-7:null);return r==null||l==null||r===0&&l===0?null:{lat:r,lon:l,alt:o.altitude}}function Xe(c,o){if(!c||!o)return null;let r=6371,l=(o.lat-c.lat)*Math.PI/180,h=(o.lon-c.lon)*Math.PI/180,u=Math.sin(l/2)**2+Math.cos(c.lat*Math.PI/180)*Math.cos(o.lat*Math.PI/180)*Math.sin(h/2)**2;return 2*r*Math.asin(Math.sqrt(u))}function Qe(c){return c==null?"\u2014":c<1?`${Math.round(c*1e3)} m`:`${c.toFixed(c<10?1:0)} km`}var Qi=c=>new TextEncoder().encode(c).length;function Ht(c,o,r){let l=c?.settings?.name;if(l)return l;if(c?.role==="PRIMARY"){let h=o?.modem_preset;return h?tn(h):r("primary")}return`${r("channel")} ${c?.index??""}`}function tn(c){return c.split("_").map(o=>o.charAt(0)+o.slice(1).toLowerCase()).join("")}function Ko(c){return c?c.length<=4?c==="AA=="?"psk_none":"psk_default":"psk_custom":"psk_none"}function Yo(){let c=new Uint8Array(32);return crypto.getRandomValues(c),btoa(String.fromCharCode(...c))}function ie(c,o){if(c==null)return"";if(c===0)return o("direct_hop");if(o.lang!=="pl")return`${c} ${c===1?"hop":"hops"}`;let r=c%10,l=c%100,h=c===1?"skok":r>=2&&r<=4&&(l<12||l>14)?"skoki":"skok\xF3w";return`${c} ${h}`}var Qr=2*3600,en=class extends R{static properties={panel:{attribute:!1},rev:{type:Number}};render(){let o=this.panel,r=o.t,l=o.data,h=o.myNode||{},u=h.user||{},f=h.deviceMetrics||{},v=l.local_stats||{},y=l.lora||{},b=l.metadata||{},$=Date.now()/1e3,w=[...o.nodes.values()].filter(J=>J.num!==o.myNum),A=w.filter(J=>J.lastHeard&&$-J.lastHeard<Qr).length,k=f.batteryLevel,nt=(l.channels||[]).filter(J=>J.role&&J.role!=="DISABLED");return _`
      <div class="grid">
        <div class="card">
          <h2>${r("device")}</h2>
          <dl class="kv">
            <dt>${r("long_name")}</dt><dd>${u.longName||"\u2014"}</dd>
            <dt>${r("short_name")}</dt><dd>${u.shortName||"\u2014"}</dd>
            <dt>${r("node_id")}</dt><dd>${o.myNum!=null?St(o.myNum):"\u2014"}</dd>
            <dt>${r("hardware")}</dt><dd>${u.hwModel||"\u2014"}</dd>
            <dt>${r("firmware")}</dt><dd>${b.firmware_version||"\u2014"}</dd>
            <dt>${r("role")}</dt><dd>${u.role||"CLIENT"}</dd>
            <dt>${r("region")}</dt><dd>${y.region||"\u2014"}</dd>
            <dt>${r("preset")}</dt><dd>${y.modem_preset?tn(y.modem_preset):"\u2014"}</dd>
          </dl>
        </div>

        <div class="card">
          <h2>${r("status")}</h2>
          <dl class="kv">
            <dt>${r("connection")}</dt>
            <dd>
              <span class=${l.status.connected?"ok":"err"}>
                ${l.status.connected?r("connected"):r("disconnected")}
              </span>
              <span class="muted small">${l.status.connection}</span>
            </dd>
            <dt>${r("uptime")}</dt><dd>${Je(f.uptimeSeconds)}</dd>
            <dt>${r("battery")}</dt>
            <dd>${k==null?"\u2014":k>100?r("powered"):`${k}%`}</dd>
            <dt>${r("voltage")}</dt><dd>${f.voltage!=null?`${f.voltage.toFixed(2)} V`:"\u2014"}</dd>
            <dt>${r("channel_util")}</dt>
            <dd>${this._bar(f.channelUtilization,25,50)}</dd>
            <dt>${r("air_util")}</dt>
            <dd>${this._bar(f.airUtilTx,5,10)}</dd>
            <dt>${r("nodes_online")}</dt><dd>${A} / ${w.length}</dd>
            <dt>${r("packets")}</dt>
            <dd>
              ${v.numPacketsTx!=null?_`${v.numPacketsTx} ${r("sent")} · ${v.numPacketsRx??0} ${r("received")} ·
                    ${v.numPacketsRxBad??0} ${r("bad")} · ${v.numTxRelay??0} ${r("relayed")}`:"\u2014"}
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
              ${nt.map(J=>_`<tr>
                  <td>${J.index}</td>
                  <td>${Ht(J,y,r)}</td>
                  <td>${J.role==="PRIMARY"?r("primary"):r("secondary")}</td>
                  <td>${r(Ko(J.settings?.psk))}</td>
                  <td class="muted small">
                    ${J.settings?.uplink_enabled?"\u2191":""}${J.settings?.downlink_enabled?"\u2193":""}
                  </td>
                </tr>`)}
            </tbody>
          </table>
        </div>

        ${o.isAdmin?_`<div class="card wide">
              <h2>${r("actions")}</h2>
              <div class="actions">
                <button class="btn" @click=${()=>this._reconnect()}>
                  <ha-icon icon="mdi:connection"></ha-icon>${r("reconnect")}
                </button>
                <button class="btn" ?disabled=${!l.status.connected} @click=${()=>o.action("set_time")}>
                  <ha-icon icon="mdi:clock-check-outline"></ha-icon>${r("set_time")}
                </button>
                <button
                  class="btn"
                  ?disabled=${!l.status.connected}
                  @click=${()=>o.action("reboot",{},{confirmText:`${r("reboot")}?`})}
                >
                  <ha-icon icon="mdi:restart"></ha-icon>${r("reboot")}
                </button>
                <button
                  class="btn"
                  ?disabled=${!l.status.connected}
                  @click=${()=>o.action("shutdown",{},{confirmText:`${r("shutdown")}? ${r("confirm_action")}`})}
                >
                  <ha-icon icon="mdi:power"></ha-icon>${r("shutdown")}
                </button>
                <button
                  class="btn danger"
                  ?disabled=${!l.status.connected}
                  @click=${()=>o.action("reset_nodedb",{},{confirmText:`${r("reset_nodedb")}? ${r("confirm_action")}`})}
                >
                  <ha-icon icon="mdi:database-remove"></ha-icon>${r("reset_nodedb")}
                </button>
                <button
                  class="btn danger"
                  ?disabled=${!l.status.connected}
                  @click=${()=>o.action("factory_reset_config",{},{confirmText:`${r("factory_reset_config")}? ${r("confirm_action")}`})}
                >
                  <ha-icon icon="mdi:backup-restore"></ha-icon>${r("factory_reset_config")}
                </button>
                <button
                  class="btn danger"
                  ?disabled=${!l.status.connected}
                  @click=${()=>o.action("factory_reset_device",{},{confirmText:`${r("factory_reset_device")}? ${r("confirm_action")}`})}
                >
                  <ha-icon icon="mdi:alert"></ha-icon>${r("factory_reset_device")}
                </button>
              </div>
            </div>`:""}
      </div>
    `}_bar(o,r,l){if(o==null)return"\u2014";let h=o>=l?"err":o>=r?"warn":"ok";return _`<div class="bar-wrap">
      <div class="bar"><div class="fill ${h}" style="width:${Math.min(100,o)}%"></div></div>
      <span>${o.toFixed(1)}%</span>
    </div>`}async _reconnect(){try{await this.panel.ws("reconnect"),this.panel.toast(this.panel.t("connecting"))}catch(o){this.panel.toast(`${this.panel.t("error")}: ${o.message||o}`,!0)}}static styles=[K,F`
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
    `]};customElements.define("mm-radio",en);var ti=200,Jo={pending:"mdi:clock-outline",sent:"mdi:check",delivered:"mdi:check-all",failed:"mdi:alert-circle-outline",unconfirmed:"mdi:help-circle-outline"},nn=class extends R{static properties={panel:{attribute:!1},rev:{type:Number},_text:{state:!0},_sending:{state:!0},_replyTo:{state:!0}};constructor(){super(),this._text="",this._replyTo=null}get _conversations(){let o=this.panel,r=o.t,l=new Map((o.data.conversations||[]).map(v=>[v.key,v])),h=[];for(let v of o.data.channels||[]){if(!v.role||v.role==="DISABLED")continue;let y=`ch:${v.index}`;h.push({key:y,title:`# ${Ht(v,o.data.lora,r)}`,icon:"mdi:pound",summary:l.get(y)})}let u=[...l.values()].filter(v=>v.key.startsWith("dm:")),f=o.openConversation;f?.startsWith("dm:")&&!l.has(f)&&u.unshift({key:f});for(let v of u){let y=Number(v.key.slice(3));h.push({key:v.key,title:Ct(o.nodes.get(y),y),num:y,summary:v.last?v:null})}return h}updated(){let o=this.panel,r=o.openConversation;r&&!o.messages.has(r)&&this._loadingKey!==r&&(this._loadingKey=r,o.loadConversation(r).finally(()=>this._loadingKey=null),this._markRead(r));let l=this.renderRoot.querySelector(".list");l&&this._stickBottom!==!1&&(l.scrollTop=l.scrollHeight)}_open(o){this.panel.openConversation=o,this._replyTo=null,this._stickBottom=!0,this._markRead(o),this.panel.bump()}_markRead(o){let r=(this.panel.data.conversations||[]).find(l=>l.key===o);r&&r.unread&&(r.unread=0,this.panel.ws("mark_read",{conversation:o}).catch(()=>{}),this.panel.bump())}_onScroll(o){let r=o.target;this._stickBottom=r.scrollHeight-r.scrollTop-r.clientHeight<40}render(){let o=this.panel,r=o.t,l=this._conversations,h=o.openConversation,u=o.narrow||window.innerWidth<700,f=!u||!h,v=!u||h;return _`
      <div class="layout">
        ${f?_`<div class="sidebar">
              ${l.map(y=>this._renderItem(y,h))}
            </div>`:""}
        ${v?_`<div class="chat">${h?this._renderChat(h,u):_`<div class="empty muted">${r("select_conversation")}</div>`}</div>`:""}
      </div>
    `}_renderItem(o,r){let l=this.panel,h=o.summary?.last,u=o.summary?.unread||0,f="";return h&&(f=(h.dir==="out"?"":h.to===4294967295?`${ut(l.nodes.get(h.from),h.from)}: `:"")+h.text),_`<button class="item ${r===o.key?"active":""}" @click=${()=>this._open(o.key)}>
      ${o.num!=null?_`<div class="avatar" style="background:${Dt(o.num)}">${ut(l.nodes.get(o.num),o.num)}</div>`:_`<div class="avatar channel"><ha-icon icon=${o.icon}></ha-icon></div>`}
      <div class="grow">
        <div class="row">
          <span class="grow ellipsis ${u?"bold":""}">${o.title}</span>
          ${h?_`<span class="muted small">${ee(h.time,l.t.lang)}</span>`:""}
        </div>
        <div class="row">
          <span class="grow ellipsis muted small">${f}</span>
          ${u?_`<span class="badge">${u}</span>`:""}
        </div>
      </div>
    </button>`}_renderChat(o,r){let l=this.panel,h=l.t,u=l.messages.get(o)||[],f=o.startsWith("dm:"),v=f?Number(o.slice(3)):null,y=f?0:Number(o.slice(3)),b=(l.data.channels||[]).find(k=>k.index===y),$=f?Ct(l.nodes.get(v),v):`# ${Ht(b,l.data.lora,h)}`,w=Qi(this._text),A=new Map(u.map(k=>[k.id,k]));return _`
      <div class="chat-head">
        ${r?_`<button class="icon" @click=${()=>this._open(null)}><ha-icon icon="mdi:arrow-left"></ha-icon></button>`:""}
        <div class="grow ellipsis title">${$}</div>
        ${f?_`<button class="icon" title=${h("tab_nodes")} @click=${()=>l.openNode(v)}>
              <ha-icon icon="mdi:information-outline"></ha-icon>
            </button>`:""}
        ${l.isAdmin?_`<button class="icon" title=${h("delete_conversation")} @click=${()=>this._delete(o)}>
              <ha-icon icon="mdi:delete-outline"></ha-icon>
            </button>`:""}
      </div>
      <div class="list" @scroll=${this._onScroll}>
        ${u.length?"":_`<div class="empty muted">${h("no_messages")}</div>`}
        ${u.map((k,nt)=>this._renderMessage(k,u[nt-1],A,f))}
      </div>
      ${this._replyTo?_`<div class="replying small">
            <ha-icon icon="mdi:reply"></ha-icon>
            <span class="grow ellipsis">${this._replyTo.text}</span>
            <button class="icon" @click=${()=>this._replyTo=null}><ha-icon icon="mdi:close"></ha-icon></button>
          </div>`:""}
      <div class="composer">
        <textarea
          rows="1"
          .value=${this._text}
          placeholder=${h("type_message")}
          ?disabled=${!l.data.status.connected}
          @input=${k=>this._text=k.target.value}
          @keydown=${k=>this._onKey(k,o)}
        ></textarea>
        <span class="counter small ${w>ti?"err":"muted"}">${w}/${ti}</span>
        <button
          class="btn primary"
          ?disabled=${!this._text.trim()||w>ti||this._sending||!l.data.status.connected}
          @click=${()=>this._send(o)}
        >
          <ha-icon icon="mdi:send"></ha-icon>
        </button>
      </div>
    `}_renderMessage(o,r,l,h){let u=this.panel,f=u.t,v=o.dir==="out",y=u.nodes.get(o.from),b=!v&&!h&&(!r||r.from!==o.from||r.dir==="out"),$=o.reply_id?l.get(o.reply_id):null,w=[];return v||(o.hops!=null&&w.push(ie(o.hops,f)),o.snr!=null&&w.push(`SNR ${o.snr}`),o.via_mqtt&&w.push(f("via_mqtt"))),_`<div class="msg ${v?"out":"in"}">
      ${!v&&!h?_`<div
            class="avatar mini ${b?"":"hidden"}"
            style="background:${Dt(o.from)}"
            @click=${()=>u.openNode(o.from)}
          >
            ${ut(y,o.from)}
          </div>`:""}
      <div class="bubble" @dblclick=${()=>this._replyTo=o}>
        ${b?_`<div class="sender" @click=${()=>u.openNode(o.from)}>${Ct(y,o.from)}</div>`:""}
        ${$?_`<div class="quote small">${$.text}</div>`:""}
        <div class="text">${o.text}</div>
        <div class="meta small">
          ${w.join(" \xB7 ")} ${ee(o.time,f.lang)}
          ${v?_`<ha-icon
                class="status ${o.status}"
                icon=${Jo[o.status]||Jo.pending}
                title=${f(`st_${o.status}`)+(o.error&&o.error!=="NONE"?` (${o.error})`:"")}
              ></ha-icon>`:""}
          <button class="icon reply" title=${f("reply")} @click=${()=>this._replyTo=o}>
            <ha-icon icon="mdi:reply"></ha-icon>
          </button>
        </div>
      </div>
    </div>`}_onKey(o,r){o.key==="Enter"&&!o.shiftKey&&(o.preventDefault(),this._send(r))}async _send(o){let r=this.panel,l=this._text.trim();if(!l||Qi(l)>ti)return;let h={text:l};o.startsWith("dm:")?(h.to=Number(o.slice(3)),h.channel=0):h.channel=Number(o.slice(3)),this._replyTo?.id&&(h.reply_id=this._replyTo.id),this._sending=!0;try{await r.ws("send_text",h),this._text="",this._replyTo=null,this._stickBottom=!0,r.messages.has(o)||await r.loadConversation(o)}catch(u){r.toast(`${r.t("error")}: ${u.message||u}`,!0)}this._sending=!1}async _delete(o){let r=this.panel;await r.confirm(`${r.t("delete_conversation")}?`)&&(await r.ws("delete_conversation",{conversation:o}),r.messages.set(o,[]),r.data.conversations=(r.data.conversations||[]).filter(l=>l.key!==o),r.bump())}static styles=[K,F`
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
    `]};customElements.define("mm-messages",nn);var Xo={any:0,h1:3600,h24:86400,d7:7*86400},on=class extends R{static properties={panel:{attribute:!1},rev:{type:Number},_query:{state:!0},_sort:{state:!0},_desc:{state:!0},_window:{state:!0},_favorites:{state:!0}};constructor(){super(),this._query="",this._sort="lastHeard",this._desc=!0,this._window="any",this._favorites=!1}_rows(){let o=this.panel,r=ft(o.myNode),l=Date.now()/1e3,h=this._query.trim().toLowerCase(),u=Xo[this._window],f=[...o.nodes.values()].map(b=>({node:b,name:b.user?.longName||"",short:b.user?.shortName||"",id:St(b.num),lastHeard:b.num===o.myNum?l:b.lastHeard||0,hops:b.hopsAway??null,snr:b.snr??null,battery:b.deviceMetrics?.batteryLevel??null,distance:b.num===o.myNum?0:Xe(r,ft(b)),hw:b.user?.hwModel||"",role:b.user?.role||"CLIENT"}));h&&(f=f.filter(b=>`${b.name} ${b.short} ${b.id} ${b.hw}`.toLowerCase().includes(h))),u&&(f=f.filter(b=>b.lastHeard&&l-b.lastHeard<=u)),this._favorites&&(f=f.filter(b=>b.node.isFavorite||b.node.num===o.myNum));let v=this._sort,y=this._desc?-1:1;return f.sort((b,$)=>{if(b.node.num===o.myNum)return-1;if($.node.num===o.myNum)return 1;if(!!b.node.isFavorite!=!!$.node.isFavorite)return b.node.isFavorite?-1:1;let w=b[v],A=$[v];return w==null&&A==null?0:w==null?1:A==null?-1:(typeof w=="string"?w.localeCompare(A):w-A)*y}),f}_sortBy(o){this._sort===o?this._desc=!this._desc:(this._sort=o,this._desc=o==="lastHeard"||o==="snr"||o==="battery")}render(){let o=this.panel,r=o.t,l=this._rows(),h=(u,f)=>_`<th @click=${()=>this._sortBy(u)}>
        ${f}${this._sort===u?this._desc?" \u25BE":" \u25B4":""}
      </th>`;return _`
      <div class="filters">
        <input class="search" type="search" placeholder=${r("search")} .value=${this._query} @input=${u=>this._query=u.target.value} />
        <label class="row small">
          ${r("heard_within")}
          <select @change=${u=>this._window=u.target.value}>
            ${Object.keys(Xo).map(u=>_`<option value=${u} ?selected=${this._window===u}>${r(u==="any"?"any_time":u)}</option>`)}
          </select>
        </label>
        <label class="row small">
          <input type="checkbox" .checked=${this._favorites} @change=${u=>this._favorites=u.target.checked} />
          ${r("favorites_only")}
        </label>
        <span class="muted small count">${l.length} / ${o.nodes.size}</span>
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
            ${l.map(u=>this._renderRow(u))}
          </tbody>
        </table>
      </div>
    `}_renderRow(o){let r=this.panel,l=r.t,h=o.node,u=h.num===r.myNum;return _`<tr class="clickable ${h.isIgnored?"ignored":""}" @click=${()=>r.openNode(h.num)}>
      <td>
        <div class="avatar mini" style="background:${Dt(h.num)}">${ut(h)}</div>
      </td>
      <td class="name">
        ${h.isFavorite?_`<ha-icon class="star" icon="mdi:star"></ha-icon>`:""}
        ${o.name||o.id}
        ${u?_`<span class="chip">${l("you")}</span>`:""}
        ${h.isIgnored?_`<span class="chip">${l("ignored")}</span>`:""}
        ${h.viaMqtt?_`<span class="chip">MQTT</span>`:""}
      </td>
      <td class="muted mono">${o.id}</td>
      <td class="muted small">${o.hw}</td>
      <td class="muted small">${o.role}</td>
      <td>${u?"":ie(o.hops,l)}</td>
      <td>${u||o.snr==null?"":`${o.snr} dB`}</td>
      <td>${o.battery==null?"":o.battery>100?"\u26A1":`${o.battery}%`}</td>
      <td>${u?"":Qe(o.distance)}</td>
      <td class="muted">${u?"":te(o.lastHeard,l)}</td>
    </tr>`}static styles=[K,F`
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
    `]};customElements.define("mm-nodes",on);var Wt=Rr(ts(),1);var es=`/* required styles */\r
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
`;var ia=2*3600,na=24*3600,sn=class extends R{static properties={panel:{attribute:!1},rev:{type:Number},_routes:{state:!0}};constructor(){super(),this._routes=!0,this._markers=new Map,this._fitted=!1}firstUpdated(){let o=this.renderRoot.querySelector("#map");this._map=Wt.default.map(o,{zoomControl:!0,attributionControl:!0}).setView([52,19],6),this._addTiles(),this._routeLayer=Wt.default.layerGroup().addTo(this._map),this._resize=new ResizeObserver(()=>this._map.invalidateSize()),this._resize.observe(o),this._sync()}async _addTiles(){let o='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',r=null;try{r=(await this.panel.hass.connection.sendMessagePromise({type:"map_tiles/access_token"})).token}catch{}this._map&&(r?(this._tiles=Wt.default.tileLayer("/api/map_tiles/raster/{z}/{x}/{y}.png?token={token}",{attribution:o,maxZoom:20,maxNativeZoom:19,token:r}).addTo(this._map),this._tokenTimer=setInterval(async()=>{try{let l=await this.panel.hass.connection.sendMessagePromise({type:"map_tiles/access_token"});this._tiles.options.token=l.token}catch{}},1200*1e3)):Wt.default.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:o,maxZoom:19,referrerPolicy:"origin"}).addTo(this._map))}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._tokenTimer),this._resize?.disconnect(),this._map?.remove(),this._map=null}updated(o){this._map&&(o.has("rev")||o.has("_routes"))&&this._sync()}_sync(){let o=this.panel,r=o.t,l=Date.now()/1e3,h=new Set,u=[];for(let f of o.nodes.values()){let v=ft(f);if(!v)continue;h.add(f.num),u.push([v.lat,v.lon]);let y=f.num===o.myNum,b=y?0:l-(f.lastHeard||0),$=y?"#2196f3":b<ia?"#43a047":b<na?"#ffa600":"#9e9e9e",w=this._markers.get(f.num);w||(w=Wt.default.circleMarker([v.lat,v.lon],{weight:2,fillOpacity:.8}).addTo(this._map),w.on("click",()=>o.openNode(f.num)),this._markers.set(f.num,w)),w.setLatLng([v.lat,v.lon]),w.setStyle({color:"#fff",fillColor:$,radius:y?10:8}),w.bindTooltip(`<b>${is(ut(f))}</b> ${is(Ct(f))}<br>${y?r("you"):te(f.lastHeard,r)}`,{direction:"top",offset:[0,-8]})}for(let[f,v]of this._markers)h.has(f)||(v.remove(),this._markers.delete(f));this._drawRoutes(),!this._fitted&&u.length&&(this._fitted=!0,u.length===1?this._map.setView(u[0],13):this._map.fitBounds(u,{padding:[40,40],maxZoom:14})),this._withoutPosition=o.nodes.size-h.size}_drawRoutes(){let o=this.panel;if(this._routeLayer.clearLayers(),!this._routes)return;let r=new Map;for(let l of o.traceroutes)r.set(l.target,l);for(let l of r.values()){let h=[o.myNum,...l.route,l.target].map(u=>ft(o.nodes.get(u))).filter(Boolean).map(u=>[u.lat,u.lon]);h.length>1&&Wt.default.polyline(h,{color:"#e040fb",weight:3,dashArray:"8 6",opacity:.9}).addTo(this._routeLayer)}}render(){let o=this.panel.t,r=this.panel.hass?.themes?.darkMode,l=this._withoutPosition??0;return _`
      <div class="wrap ${r?"dark":""}">
        <div id="map"></div>
        <div class="overlay card small">
          <label class="row">
            <input type="checkbox" .checked=${this._routes} @change=${h=>this._routes=h.target.checked} />
            ${o("traceroutes")}
          </label>
          ${l?_`<div class="muted">${l} ${o("nodes_without_position")}</div>`:""}
          ${this.panel.nodes.size&&l===this.panel.nodes.size?_`<div>${o("no_positions")}</div>`:""}
        </div>
      </div>
    `}static styles=[Ge(es),K,F`
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
    `]};function is(c){return String(c).replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[o])}customElements.define("mm-map",sn);var ns=new Set(["private_key","password","psk"]),rn=class extends R{static properties={schema:{attribute:!1},value:{attribute:!1},_reveal:{state:!0}};constructor(){super(),this._reveal=new Set}_emit(o){this.value=o,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:o}}))}_set(o,r){this._emit({...this.value||{},[o]:r})}render(){if(!this.schema)return _``;let o=this.value||{};return _`<div class="form">${this.schema.map(r=>this._field(r,o[r.name]))}</div>`}_field(o,r){let l=ke(o.name);if(o.type==="message"&&!o.repeated)return _`<fieldset>
        <legend>${l}</legend>
        <mm-proto-form
          .schema=${o.fields}
          .value=${r||{}}
          @value-changed=${h=>{h.stopPropagation(),this._set(o.name,h.detail.value)}}
        ></mm-proto-form>
      </fieldset>`;if(o.repeated)return this._repeated(o,r||[],l);switch(o.type){case"bool":return _`<label class="field bool">
          <input type="checkbox" .checked=${!!r} @change=${h=>this._set(o.name,h.target.checked)} />
          <span>${l}</span>
        </label>`;case"enum":return _`<label class="field">
          <span>${l}</span>
          <select @change=${h=>this._set(o.name,h.target.value)}>
            ${o.options.map(h=>_`<option value=${h} ?selected=${h===r}>${h}</option>`)}
          </select>
        </label>`;case"int":case"uint":case"float":return _`<label class="field">
          <span>${l}</span>
          <input
            type="number"
            step=${o.type==="float"?"any":"1"}
            min=${o.type==="uint"?"0":""}
            .value=${r??0}
            @change=${h=>this._set(o.name,h.target.value===""?0:Number(h.target.value))}
          />
        </label>`;default:{let h=ns.has(o.name)&&!this._reveal.has(o.name);return _`<label class="field">
          <span>${l}${o.type==="bytes"?_` <span class="muted small">(base64)</span>`:""}</span>
          <span class="row">
            <input
              class="grow"
              type=${h?"password":"text"}
              .value=${r??""}
              @change=${u=>this._set(o.name,u.target.value)}
            />
            ${ns.has(o.name)?_`<button
                  class="icon"
                  type="button"
                  @click=${()=>{let u=new Set(this._reveal);u.has(o.name)?u.delete(o.name):u.add(o.name),this._reveal=u}}
                >
                  <ha-icon icon=${h?"mdi:eye":"mdi:eye-off"}></ha-icon>
                </button>`:""}
          </span>
        </label>`}}}_repeated(o,r,l){if(o.type==="message")return _`<label class="field">
        <span>${l} <span class="muted small">(JSON)</span></span>
        <textarea
          rows="3"
          .value=${JSON.stringify(r,null,1)}
          @change=${u=>{try{this._set(o.name,JSON.parse(u.target.value))}catch{}}}
        ></textarea>
      </label>`;let h=["int","uint","float"].includes(o.type);return _`<label class="field">
      <span>${l} <span class="muted small">(${o.type==="bytes"?"base64, ":""}one per line)</span></span>
      <textarea
        rows="2"
        .value=${r.join(`
`)}
        @change=${u=>{let f=u.target.value.split(`
`).map(v=>v.trim()).filter(Boolean).map(v=>h?Number(v):v);this._set(o.name,f)}}
      ></textarea>
    </label>`}static styles=[K,F`
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
    `]};customElements.define("mm-proto-form",rn);var oa=["DISABLED","PRIMARY","SECONDARY"],an=class extends R{static properties={panel:{attribute:!1},rev:{type:Number},_cfg:{state:!0},_section:{state:!0},_draft:{state:!0},_dirty:{state:!0},_saving:{state:!0},_error:{state:!0}};constructor(){super(),this._section="owner",this._draft=null,this._dirty=!1}connectedCallback(){super.connectedCallback(),this.panel&&(this.panel.configStale=!1),this.panel?.isAdmin&&this.panel?.data?.status?.connected&&this._load()}updated(o){let r=this.panel?.data?.status?.connected;this.panel?.configStale&&this._cfg&&!this._dirty&&r&&(this.panel.configStale=!1,this._cfg=null),o.has("rev")&&r&&!this._cfg&&!this._loading&&this.panel.isAdmin&&this._load()}async _load(){this._loading=!0;try{this._cfg=await this.panel.ws("config_get"),this._error=null,this._select(this._section,!0)}catch(o){this._error=o.message||String(o)}this._loading=!1}async _select(o,r=!1){if(!r&&this._dirty&&!await this.panel.confirm(`${this.panel.t("unsaved")}. ${this.panel.t("cancel")}?`))return;this._section=o,this._dirty=!1;let l=this._cfg;if(l)if(o==="owner"){let h=l.owner||{};this._draft={long_name:h.longName||"",short_name:h.shortName||"",is_licensed:!!h.isLicensed,is_unmessagable:!!h.isUnmessagable}}else if(o==="channels")this._draft=structuredClone(l.channels);else if(o==="fixed"){let h=ft(this.panel.myNode);this._draft={latitude:h?.lat??"",longitude:h?.lon??"",altitude:h?.alt??0}}else{let[h,u]=o.split(":");this._draft=structuredClone(l.values[h][u])}}_change(o){this._draft=o,this._dirty=!0}async _run(o){let r=this.panel;this._saving=!0;try{await o(),this._dirty=!1,r.toast(r.t("saved"))}catch(l){r.toast(`${r.t("error")}: ${l.message||l}`,!0)}this._saving=!1}async _save(){let o=this.panel,r=this._section;if(r==="owner"){await this._run(()=>o.ws("owner_set",this._draft));let u=o.myNode;u?.user&&(u.user={...u.user,longName:this._draft.long_name,shortName:this._draft.short_name},o.bump()),this._cfg.owner={...this._cfg.owner,longName:this._draft.long_name,shortName:this._draft.short_name,isLicensed:this._draft.is_licensed,isUnmessagable:this._draft.is_unmessagable};return}let[l,h]=r.split(":");await this._run(()=>o.ws("config_set",{sections:[{kind:l,section:h,values:this._draft}]})),this._cfg.values[l][h]=structuredClone(this._draft)}async _saveChannel(o){let r=this.panel,l=this._draft[o];await this._run(()=>r.ws("channel_set",{index:o,role:l.role,settings:l.settings||{}})),this._cfg.channels[o]=structuredClone(l),r.data.channels=structuredClone(this._draft),r.bump()}render(){let o=this.panel,r=o.t;if(!o.isAdmin)return _`<div class="card">${r("admin_only")}</div>`;if(!o.data.status.connected&&!this._cfg)return _``;if(this._error)return _`<div class="card err">${r("error")}: ${this._error}</div>`;if(!this._cfg)return _`<div class="muted">${r("connecting")}</div>`;let l=this._cfg,h=(u,f,v)=>_`<button class="nav ${this._section===u?"active":""}" @click=${()=>this._select(u)}>
        ${v?_`<ha-icon icon=${v}></ha-icon>`:""}<span>${f}</span>
      </button>`;return _`
      <div class="layout">
        <div class="sidebar card">
          ${h("owner",r("owner"),"mdi:account")}
          ${h("channels",r("channels"),"mdi:pound")}
          ${h("fixed",r("fixed_position"),"mdi:map-marker")}
          <div class="group">${r("config_sections")}</div>
          ${Object.keys(l.schema.config).map(u=>h(`config:${u}`,r.section(u)))}
          <div class="group">${r("module_sections")}</div>
          ${Object.keys(l.schema.module).map(u=>h(`module:${u}`,r.section(u)))}
        </div>
        <div class="editor">${this._renderEditor()}</div>
      </div>
    `}_renderEditor(){let o=this.panel,r=o.t,l=this._section;if(!this._draft)return _``;if(l==="channels")return this._renderChannels();if(l==="fixed")return this._renderFixed();let h,u;if(l==="owner"){u=r("owner");let f=this._draft;h=_`<div class="owner">
        <label class="field"><span>${r("long_name")}</span>
          <input maxlength="39" .value=${f.long_name} @input=${v=>this._change({...f,long_name:v.target.value})} />
        </label>
        <label class="field"><span>${r("short_name")}</span>
          <input maxlength="4" .value=${f.short_name} @input=${v=>this._change({...f,short_name:v.target.value})} />
        </label>
        <label class="row"><input type="checkbox" .checked=${f.is_licensed} @change=${v=>this._change({...f,is_licensed:v.target.checked})} />${r("licensed")}</label>
        <label class="row"><input type="checkbox" .checked=${f.is_unmessagable} @change=${v=>this._change({...f,is_unmessagable:v.target.checked})} />${r("unmessagable")}</label>
      </div>`}else{let[f,v]=l.split(":");u=r.section(v),h=_`<mm-proto-form
        .schema=${this._cfg.schema[f][v]}
        .value=${this._draft}
        @value-changed=${y=>this._change(y.detail.value)}
      ></mm-proto-form>`}return _`<div class="card">
      <div class="row head">
        <h2 class="grow">${u}</h2>
        ${this._dirty?_`<span class="warn small">${r("unsaved")}</span>`:""}
        <button class="btn primary" ?disabled=${!this._dirty||this._saving||!o.data.status.connected} @click=${this._save}>
          <ha-icon icon="mdi:content-save"></ha-icon>${r("save")}
        </button>
      </div>
      ${l.startsWith("config:")?_`<div class="muted small note">${r("reboot_warning")}</div>`:""}
      ${h}
    </div>`}_renderChannels(){let o=this.panel,r=o.t,l=this._cfg.values.config.lora;return _`
      ${this._cfg.url?_`<div class="card url">
            <h2>${r("share_url")}</h2>
            <input readonly .value=${this._cfg.url} @focus=${h=>h.target.select()} />
          </div>`:""}
      ${this._draft.map((h,u)=>{let f=h.role||"DISABLED",v=$=>{let w=structuredClone(this._draft);w[u]={...w[u],...$},this._change(w)},y=$=>v({settings:{...h.settings||{},psk:$}}),b=JSON.stringify(h)!==JSON.stringify(this._cfg.channels[u]);return _`<div class="card channel">
          <div class="row head">
            <h2 class="grow">#${u} ${f!=="DISABLED"?Ht(h,l,r):""}</h2>
            <select .value=${f} @change=${$=>v({role:$.target.value})}>
              ${oa.map($=>_`<option value=${$} ?selected=${$===f} ?disabled=${$==="PRIMARY"!=(u===0)}>
                  ${r($.toLowerCase())}
                </option>`)}
            </select>
            <button class="btn primary" ?disabled=${!b||this._saving||!o.data.status.connected} @click=${()=>this._saveChannel(u)}>
              <ha-icon icon="mdi:content-save"></ha-icon>${r("save")}
            </button>
          </div>
          ${f!=="DISABLED"?_`<div class="row psk">
                  <button class="btn" @click=${()=>y(Yo())}><ha-icon icon="mdi:key-plus"></ha-icon>${r("generate_key")}</button>
                  <button class="btn" @click=${()=>y("AQ==")}><ha-icon icon="mdi:key"></ha-icon>${r("default_key")}</button>
                  <button class="btn" @click=${()=>y("")}><ha-icon icon="mdi:key-remove"></ha-icon>${r("no_key")}</button>
                </div>
                <mm-proto-form
                  .schema=${this._cfg.schema.channel}
                  .value=${h.settings||{}}
                  @value-changed=${$=>v({settings:$.detail.value})}
                ></mm-proto-form>`:""}
        </div>`})}
    `}_renderFixed(){let o=this.panel,r=o.t,l=this._draft,h=(f,v)=>this._change({...l,[f]:v}),u=l.latitude!==""&&l.longitude!==""&&!isNaN(l.latitude)&&!isNaN(l.longitude);return _`<div class="card">
      <h2>${r("fixed_position")}</h2>
      <div class="owner">
        <label class="field"><span>${r("latitude")}</span>
          <input type="number" step="any" .value=${String(l.latitude)} @input=${f=>h("latitude",f.target.value)} />
        </label>
        <label class="field"><span>${r("longitude")}</span>
          <input type="number" step="any" .value=${String(l.longitude)} @input=${f=>h("longitude",f.target.value)} />
        </label>
        <label class="field"><span>${r("altitude")} (m)</span>
          <input type="number" step="1" .value=${String(l.altitude)} @input=${f=>h("altitude",f.target.value)} />
        </label>
      </div>
      <div class="row actions">
        <button
          class="btn"
          @click=${()=>this._change({latitude:o.hass.config.latitude,longitude:o.hass.config.longitude,altitude:Math.round(o.hass.config.elevation||0)})}
        >
          <ha-icon icon="mdi:home-map-marker"></ha-icon>${r("use_home")}
        </button>
        <button
          class="btn primary"
          ?disabled=${!u||this._saving||!o.data.status.connected}
          @click=${()=>this._run(()=>o.ws("fixed_position",{latitude:Number(l.latitude),longitude:Number(l.longitude),altitude:Number(l.altitude)||0}))}
        >
          <ha-icon icon="mdi:map-marker-check"></ha-icon>${r("set_fixed")}
        </button>
        <button
          class="btn danger"
          ?disabled=${this._saving||!o.data.status.connected}
          @click=${()=>this._run(()=>o.ws("device_action",{action:"remove_fixed_position"}))}
        >
          <ha-icon icon="mdi:map-marker-remove"></ha-icon>${r("remove_fixed")}
        </button>
      </div>
    </div>`}static styles=[K,F`
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
    `]};customElements.define("mm-config",an);var ln=class extends R{static properties={panel:{attribute:!1},rev:{type:Number},num:{type:Number},_busy:{state:!0}};_close(){this.dispatchEvent(new CustomEvent("closed"))}async _request(o){let r=this.panel;this._busy=o;try{await r.ws("node_request",{node:this.num,request:o}),r.toast(r.t("request_sent"))}catch(l){r.toast(`${r.t("error")}: ${l.message||l}`,!0)}this._busy=null}async _action(o,r){await this.panel.action(o,{node:this.num},{confirmText:r})&&o==="remove_node"&&this._close()}render(){if(this.num==null||!this.panel)return _``;let o=this.panel,r=o.t,l=o.nodes.get(this.num)||{num:this.num},h=l.user||{},u=this.num===o.myNum,f=ft(l),v=u?null:Xe(ft(o.myNode),f),y=l.deviceMetrics||{},b=l.environmentMetrics||{},$=o.traceroutes.filter(A=>A.target===this.num).slice(-5).reverse(),w=o.data?.status?.connected;return _`
      <div class="backdrop" @click=${this._close}></div>
      <div class="dialog" role="dialog">
        <div class="head">
          <div class="avatar" style="background:${Dt(this.num)}">${ut(l,this.num)}</div>
          <div class="grow">
            <div class="name">${Ct(l,this.num)}</div>
            <div class="muted small">${St(this.num)} · ${h.hwModel||"?"} · ${h.role||"CLIENT"}</div>
          </div>
          <button class="icon" @click=${this._close} title=${r("close")}><ha-icon icon="mdi:close"></ha-icon></button>
        </div>
        <div class="body">
          ${u?"":_`<div class="actions">
                <button class="btn primary" @click=${()=>o.openDm(this.num)}>
                  <ha-icon icon="mdi:message-text"></ha-icon>${r("send_dm")}
                </button>
                ${[["traceroute","mdi:routes","traceroute"],["position","mdi:crosshairs-gps","request_position"],["telemetry","mdi:chart-line","request_telemetry"],["nodeinfo","mdi:account-sync","exchange_info"]].map(([A,k,nt])=>_`<button
                    class="btn"
                    ?disabled=${!w||this._busy}
                    @click=${()=>this._request(A)}
                  >
                    <ha-icon icon=${k}></ha-icon>${r(nt)}
                  </button>`)}
              </div>`}

          <dl class="kv">
            <dt>${r("last_heard")}</dt>
            <dd>${u?r("you"):l.lastHeard?_`${te(l.lastHeard,r)} <span class="muted small">(${ee(l.lastHeard,r.lang)})</span>`:r("never")}</dd>
            ${u?"":_`<dt>Hops</dt><dd>${ie(l.hopsAway,r)||"\u2014"}${l.viaMqtt?_` <span class="chip">MQTT</span>`:""}</dd>
                  <dt>${r("snr")}</dt><dd>${l.snr!=null?`${l.snr} dB`:"\u2014"}${l.rssi!=null?` \xB7 RSSI ${l.rssi} dBm`:""}</dd>`}
            ${h.publicKey?_`<dt>${r("public_key")}</dt><dd class="mono small">${h.publicKey}</dd>`:""}
          </dl>

          ${f?_`<h3>${r("position")}</h3>
                <dl class="kv">
                  <dt>${r("latitude")} / ${r("longitude")}</dt>
                  <dd>
                    <a href="https://www.openstreetmap.org/?mlat=${f.lat}&mlon=${f.lon}#map=14/${f.lat}/${f.lon}" target="_blank" rel="noreferrer">
                      ${f.lat.toFixed(5)}, ${f.lon.toFixed(5)}
                    </a>
                  </dd>
                  ${f.alt!=null?_`<dt>${r("altitude")}</dt><dd>${f.alt} m</dd>`:""}
                  ${v!=null?_`<dt>${r("distance")}</dt><dd>${Qe(v)}</dd>`:""}
                </dl>`:""}

          ${Object.keys(y).length?_`<h3>${r("metrics")}</h3>
                <dl class="kv">
                  ${y.batteryLevel!=null?_`<dt>${r("battery")}</dt><dd>${y.batteryLevel>100?r("powered"):`${y.batteryLevel}%`}</dd>`:""}
                  ${y.voltage!=null?_`<dt>${r("voltage")}</dt><dd>${y.voltage.toFixed(2)} V</dd>`:""}
                  ${y.channelUtilization!=null?_`<dt>${r("channel_util")}</dt><dd>${y.channelUtilization.toFixed(1)}%</dd>`:""}
                  ${y.airUtilTx!=null?_`<dt>${r("air_util")}</dt><dd>${y.airUtilTx.toFixed(2)}%</dd>`:""}
                  ${y.uptimeSeconds!=null?_`<dt>${r("uptime")}</dt><dd>${Je(y.uptimeSeconds)}</dd>`:""}
                </dl>`:""}

          ${Object.keys(b).length?_`<h3>${r("environment")}</h3>
                <dl class="kv">
                  ${Object.entries(b).map(([A,k])=>_`<dt>${ke(A.replace(/([A-Z])/g,"_$1").toLowerCase())}</dt>
                      <dd>${typeof k=="number"?Math.round(k*100)/100:k}</dd>`)}
                </dl>`:""}

          ${u?"":_`<h3>${r("traceroutes")}</h3>
                ${$.length?$.map(A=>this._renderTrace(A)):_`<div class="muted small">${r("no_traceroutes")}</div>`}`}

          ${o.isAdmin&&!u?_`<div class="actions admin">
                <button class="btn" ?disabled=${!w} @click=${()=>this._action(l.isFavorite?"unfavorite":"favorite")}>
                  <ha-icon icon=${l.isFavorite?"mdi:star-off":"mdi:star"}></ha-icon>${r(l.isFavorite?"unfavorite":"favorite")}
                </button>
                <button class="btn" ?disabled=${!w} @click=${()=>this._action(l.isIgnored?"unignore":"ignore")}>
                  <ha-icon icon=${l.isIgnored?"mdi:eye":"mdi:eye-off"}></ha-icon>${r(l.isIgnored?"unignore":"ignore")}
                </button>
                <button class="btn danger" ?disabled=${!w} @click=${()=>this._action("remove_node",`${r("remove_node")}?`)}>
                  <ha-icon icon="mdi:delete"></ha-icon>${r("remove_node")}
                </button>
              </div>`:""}
        </div>
      </div>
    `}_renderTrace(o){let r=this.panel,l=r.t,h=y=>ut(r.nodes.get(y),y),u=(y,b)=>y&&y[b]!=null&&y[b]!==-128?` (${(y[b]/4).toFixed(1)} dB)`:"",f=[r.myNum,...o.route,o.target],v=[o.target,...o.route_back,r.myNum];return _`<div class="trace">
      <div class="muted small">${ee(o.time,l.lang)}</div>
      <div><span class="muted small">${l("towards")}:</span> ${f.map((y,b)=>`${b?" \u2192 ":""}${h(y)}${b?u(o.snr_towards,b-1):""}`).join("")}</div>
      ${o.snr_back?.length||o.route_back?.length?_`<div><span class="muted small">${l("back")}:</span> ${v.map((y,b)=>`${b?" \u2192 ":""}${h(y)}${b?u(o.snr_back,b-1):""}`).join("")}</div>`:""}
    </div>`}static styles=[K,F`
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
    `]};customElements.define("mm-node-dialog",ln);var hn=class extends R{static properties={t:{attribute:!1},_text:{state:!0}};ask(o){return this._text=o,new Promise(r=>this._resolve=r)}_answer(o){this._text=null,this._resolve?.(o),this._resolve=null}render(){return this._text?_`
      <div class="backdrop" @click=${()=>this._answer(!1)}></div>
      <div class="dialog" role="alertdialog">
        <div class="text">${this._text}</div>
        <div class="buttons">
          <button class="btn" @click=${()=>this._answer(!1)}>${this.t("cancel")}</button>
          <button class="btn primary" @click=${()=>this._answer(!0)}>${this.t("confirm")}</button>
        </div>
      </div>
    `:_``}static styles=[K,F`
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
    `]};customElements.define("mm-confirm-dialog",hn);var cn="meshtastic_manager",sa=[["radio","mdi:radio-handheld"],["messages","mdi:message-text"],["nodes","mdi:account-group"],["map","mdi:map"],["config","mdi:cog"]];function os(c){try{return localStorage.getItem(c)}catch{return null}}function ss(c,o){try{localStorage.setItem(c,o)}catch{}}var dn=class extends R{static properties={hass:{attribute:!1},narrow:{type:Boolean},panel:{attribute:!1},route:{attribute:!1},_entries:{state:!0},_entryId:{state:!0},_tab:{state:!0},_rev:{state:!0},_loading:{state:!0},_error:{state:!0},_dialogNode:{state:!0},_toast:{state:!0}};constructor(){super(),this._entries=null,this._entryId=os("meshtastic_manager.entry"),this._tab=os("meshtastic_manager.tab")||"radio",this._rev=0,this.data=null,this.nodes=new Map,this.messages=new Map,this.traceroutes=[],this.openConversation=null,this._unsub=null}get t(){let o=this.hass?.locale?.language||this.hass?.language;return(!this._t||this._t.forLang!==o)&&(this._t=Go(o),this._t.forLang=o),this._t}get isAdmin(){return!!this.hass?.user?.is_admin}get myNum(){return this.data?.status?.my_num??null}get myNode(){return this.myNum!=null?this.nodes.get(this.myNum):null}connectedCallback(){super.connectedCallback(),this.hass&&this._entries===null?this._loadEntries():this._entryId&&!this._unsub&&this._entries&&this._selectEntry(this._entryId)}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribe()}updated(o){o.has("hass")&&this.hass&&this._entries===null&&!this._loadingEntries&&this._loadEntries()}ws(o,r={}){return this.hass.callWS({type:`${cn}/${o}`,entry_id:this._entryId,...r})}bump(){this._rev++}toast(o,r=!1){this._toast={text:o,error:r},clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>this._toast=null,r?8e3:4e3)}async _loadEntries(){this._loadingEntries=!0;try{this._entries=await this.hass.callWS({type:`${cn}/entries`})}catch(l){this._error=l.message||String(l),this._entries=[]}this._loadingEntries=!1;let o=this._entries.filter(l=>l.state==="loaded"),r=o.find(l=>l.entry_id===this._entryId)||o[0];r&&await this._selectEntry(r.entry_id)}async _selectEntry(o){this._unsubscribe(),this._entryId=o,ss("meshtastic_manager.entry",o),this.messages=new Map,this.traceroutes=[],this.data=null,await this.reload();try{this._unsub=await this.hass.connection.subscribeMessage(r=>this._onEvent(r),{type:`${cn}/subscribe`,entry_id:o})}catch(r){this._error=r.message||String(r)}}_unsubscribe(){this._unsub&&(this._unsub().catch?.(()=>{}),this._unsub=null)}async reload(){this._loading=!0;try{let o=await this.ws("snapshot");this.data=o,this.nodes=new Map(o.nodes.map(r=>[r.num,r])),this.traceroutes=await this.ws("traceroutes"),this.configStale=!0,this._error=null}catch(o){this._error=o.message||String(o)}this._loading=!1,this.bump()}async refreshConversations(){try{let o=await this.ws("snapshot");this.data={...this.data,conversations:o.conversations},this.bump()}catch{}}_onEvent(o){if(o.entry_id===this._entryId){switch(o.type){case"status":{let r=this.data?.status?.connected;this.data&&(this.data.status=o.status),!r&&o.status.connected&&this.reload();break}case"snapshot":this.reload();return;case"node":o.node&&this.nodes.set(o.node.num,o.node);break;case"node_removed":this.nodes.delete(o.num);break;case"message":this._onMessage(o.message);break;case"message_status":{for(let r of this.messages.values()){let l=r.find(h=>h.dir==="out"&&h.id===o.id);l&&(l.status=o.status,l.error=o.error)}break}case"traceroute":this.traceroutes=[...this.traceroutes,o.traceroute],this.toast(this._tracerouteText(o.traceroute));break;default:return}this.bump()}}_tracerouteText(o){let r=h=>this.nodes.get(h)?.user?.shortName||(h>>>0).toString(16).slice(-4),l=[this.myNum,...o.route,o.target].map(r).join(" \u2192 ");return`${this.t("traceroute")}: ${l}`}_onMessage(o){let r=o.conversation,l=this.messages.get(r);l&&!l.some(f=>f.id===o.id&&f.from===o.from&&f.dir===o.dir)&&l.push(o);let h=this.data?.conversations||[],u=h.find(f=>f.key===r);u||(u={key:r,count:0,unread:0},h.push(u)),u.count++,u.last=o,o.dir==="in"&&!(this._tab==="messages"&&this.openConversation===r&&document.visibilityState==="visible")?u.unread++:o.dir==="in"&&this.ws("mark_read",{conversation:r}).catch(()=>{}),h.sort((f,v)=>v.last.time-f.last.time),this.data&&(this.data.conversations=h)}async loadConversation(o){let r=await this.ws("messages",{conversation:o,limit:500});this.messages.set(o,r),this.bump()}openNode(o){this._dialogNode=o}openDm(o){this._dialogNode=null,this.openConversation=`dm:${o}`,this._setTab("messages")}confirm(o){return this.shadowRoot.querySelector("mm-confirm-dialog").ask(o)}async action(o,r={},{confirmText:l}={}){if(l&&!await this.confirm(l))return!1;try{return await this.ws("device_action",{action:o,...r}),this.toast(this.t("done")),!0}catch(h){return this.toast(`${this.t("error")}: ${h.message||h}`,!0),!1}}_setTab(o){this._tab=o,ss("meshtastic_manager.tab",o)}render(){let o=this.t,r=this.data?.status?.connected,l=(this.data?.conversations||[]).reduce((h,u)=>h+(u.unread||0),0);return _`
      <div class="toolbar">
        <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
        <div class="title">Meshtastic</div>
        ${this._entries&&this._entries.length>1?_`<select @change=${h=>this._selectEntry(h.target.value)}>
              ${this._entries.map(h=>_`<option value=${h.entry_id} ?selected=${h.entry_id===this._entryId}>${h.title}</option>`)}
            </select>`:_`<div class="entry-title">${this.data?.title||""}</div>`}
        ${this.data?_`<span class="conn ${r?"ok":"err"}" title=${this.data.status.connection}>
              <ha-icon icon=${r?"mdi:lan-connect":"mdi:lan-disconnect"}></ha-icon>
              ${this.narrow?"":o(r?"connected":"disconnected")}
            </span>`:""}
      </div>
      <div class="tabs" role="tablist">
        ${sa.map(([h,u])=>_`<button
            role="tab"
            class=${this._tab===h?"active":""}
            @click=${()=>this._setTab(h)}
          >
            <ha-icon icon=${u}></ha-icon>
            <span class="label">${o(`tab_${h}`)}</span>
            ${h==="messages"&&l?_`<span class="badge">${l}</span>`:""}
          </button>`)}
      </div>
      <div class="content ${this._tab==="map"||this._tab==="messages"?"full":""}">${this._renderContent()}</div>
      <mm-node-dialog
        .panel=${this}
        .rev=${this._rev}
        .num=${this._dialogNode}
        @closed=${()=>this._dialogNode=null}
      ></mm-node-dialog>
      <mm-confirm-dialog .t=${o}></mm-confirm-dialog>
      ${this._toast?_`<div class="toast ${this._toast.error?"error":""}">${this._toast.text}</div>`:""}
    `}_renderContent(){let o=this.t;if(this._entries===null)return _`<div class="center muted">${o("connecting")}</div>`;if(!this._entries.length)return _`<div class="center card">${o("no_entries")}</div>`;if(!this.data)return _`<div class="center muted">${this._error?`${o("error")}: ${this._error}`:o("connecting")}</div>`;let r=this.data.status.connected?"":_`<div class="banner">
          ${o("not_connected_hint")}
          ${this.data.status.last_error?_`<div class="small">${o("last_error")}: ${this.data.status.last_error}</div>`:""}
        </div>`,l=(()=>{switch(this._tab){case"messages":return _`<mm-messages .panel=${this} .rev=${this._rev}></mm-messages>`;case"nodes":return _`<mm-nodes .panel=${this} .rev=${this._rev}></mm-nodes>`;case"map":return _`<mm-map .panel=${this} .rev=${this._rev}></mm-map>`;case"config":return _`<mm-config .panel=${this} .rev=${this._rev}></mm-config>`;default:return _`<mm-radio .panel=${this} .rev=${this._rev}></mm-radio>`}})();return _`${r}${l}`}static styles=[K,F`
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
    `]};customElements.define("meshtastic-manager-panel",dn);
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
