function Bb(i,n){for(var r=0;r<n.length;r++){const c=n[r];if(typeof c!="string"&&!Array.isArray(c)){for(const u in c)if(u!=="default"&&!(u in i)){const f=Object.getOwnPropertyDescriptor(c,u);f&&Object.defineProperty(i,u,f.get?f:{enumerable:!0,get:()=>c[u]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))c(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function r(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(u){if(u.ep)return;u.ep=!0;const f=r(u);fetch(u.href,f)}})();function Lb(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var uu={exports:{}},Fn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function jb(){if(Kp)return Fn;Kp=1;var i=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(c,u,f){var h=null;if(f!==void 0&&(h=""+f),u.key!==void 0&&(h=""+u.key),"key"in u){f={};for(var y in u)y!=="key"&&(f[y]=u[y])}else f=u;return u=f.ref,{$$typeof:i,type:c,key:h,ref:u!==void 0?u:null,props:f}}return Fn.Fragment=n,Fn.jsx=r,Fn.jsxs=r,Fn}var Fp;function Vb(){return Fp||(Fp=1,uu.exports=jb()),uu.exports}var A=Vb(),du={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function qb(){if(Jp)return ut;Jp=1;var i=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),k=Symbol.iterator;function N(x){return x===null||typeof x!="object"?null:(x=k&&x[k]||x["@@iterator"],typeof x=="function"?x:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,L={};function q(x,H,P){this.props=x,this.context=H,this.refs=L,this.updater=P||O}q.prototype.isReactComponent={},q.prototype.setState=function(x,H){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,H,"setState")},q.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function K(){}K.prototype=q.prototype;function F(x,H,P){this.props=x,this.context=H,this.refs=L,this.updater=P||O}var G=F.prototype=new K;G.constructor=F,U(G,q.prototype),G.isPureReactComponent=!0;var it=Array.isArray,X={H:null,A:null,T:null,S:null},wt=Object.prototype.hasOwnProperty;function kt(x,H,P,I,V,vt){return P=vt.ref,{$$typeof:i,type:x,key:H,ref:P!==void 0?P:null,props:vt}}function st(x,H){return kt(x.type,H,void 0,void 0,void 0,x.props)}function j(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function lt(x){var H={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(P){return H[P]})}var Yt=/\/+/g;function Xt(x,H){return typeof x=="object"&&x!==null&&x.key!=null?lt(""+x.key):H.toString(36)}function ae(){}function $t(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(ae,ae):(x.status="pending",x.then(function(H){x.status==="pending"&&(x.status="fulfilled",x.value=H)},function(H){x.status==="pending"&&(x.status="rejected",x.reason=H)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function Qt(x,H,P,I,V){var vt=typeof x;(vt==="undefined"||vt==="boolean")&&(x=null);var rt=!1;if(x===null)rt=!0;else switch(vt){case"bigint":case"string":case"number":rt=!0;break;case"object":switch(x.$$typeof){case i:case n:rt=!0;break;case C:return rt=x._init,Qt(rt(x._payload),H,P,I,V)}}if(rt)return V=V(x),rt=I===""?"."+Xt(x,0):I,it(V)?(P="",rt!=null&&(P=rt.replace(Yt,"$&/")+"/"),Qt(V,H,P,"",function(Ft){return Ft})):V!=null&&(j(V)&&(V=st(V,P+(V.key==null||x&&x.key===V.key?"":(""+V.key).replace(Yt,"$&/")+"/")+rt)),H.push(V)),1;rt=0;var we=I===""?".":I+":";if(it(x))for(var Ct=0;Ct<x.length;Ct++)I=x[Ct],vt=we+Xt(I,Ct),rt+=Qt(I,H,P,vt,V);else if(Ct=N(x),typeof Ct=="function")for(x=Ct.call(x),Ct=0;!(I=x.next()).done;)I=I.value,vt=we+Xt(I,Ct++),rt+=Qt(I,H,P,vt,V);else if(vt==="object"){if(typeof x.then=="function")return Qt($t(x),H,P,I,V);throw H=String(x),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return rt}function B(x,H,P){if(x==null)return x;var I=[],V=0;return Qt(x,I,"","",function(vt){return H.call(P,vt,V++)}),I}function W(x){if(x._status===-1){var H=x._result;H=H(),H.then(function(P){(x._status===0||x._status===-1)&&(x._status=1,x._result=P)},function(P){(x._status===0||x._status===-1)&&(x._status=2,x._result=P)}),x._status===-1&&(x._status=0,x._result=H)}if(x._status===1)return x._result.default;throw x._result}var Q=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function gt(){}return ut.Children={map:B,forEach:function(x,H,P){B(x,function(){H.apply(this,arguments)},P)},count:function(x){var H=0;return B(x,function(){H++}),H},toArray:function(x){return B(x,function(H){return H})||[]},only:function(x){if(!j(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ut.Component=q,ut.Fragment=r,ut.Profiler=u,ut.PureComponent=F,ut.StrictMode=c,ut.Suspense=v,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,ut.act=function(){throw Error("act(...) is not supported in production builds of React.")},ut.cache=function(x){return function(){return x.apply(null,arguments)}},ut.cloneElement=function(x,H,P){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var I=U({},x.props),V=x.key,vt=void 0;if(H!=null)for(rt in H.ref!==void 0&&(vt=void 0),H.key!==void 0&&(V=""+H.key),H)!wt.call(H,rt)||rt==="key"||rt==="__self"||rt==="__source"||rt==="ref"&&H.ref===void 0||(I[rt]=H[rt]);var rt=arguments.length-2;if(rt===1)I.children=P;else if(1<rt){for(var we=Array(rt),Ct=0;Ct<rt;Ct++)we[Ct]=arguments[Ct+2];I.children=we}return kt(x.type,V,void 0,void 0,vt,I)},ut.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:f,_context:x},x},ut.createElement=function(x,H,P){var I,V={},vt=null;if(H!=null)for(I in H.key!==void 0&&(vt=""+H.key),H)wt.call(H,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(V[I]=H[I]);var rt=arguments.length-2;if(rt===1)V.children=P;else if(1<rt){for(var we=Array(rt),Ct=0;Ct<rt;Ct++)we[Ct]=arguments[Ct+2];V.children=we}if(x&&x.defaultProps)for(I in rt=x.defaultProps,rt)V[I]===void 0&&(V[I]=rt[I]);return kt(x,vt,void 0,void 0,null,V)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(x){return{$$typeof:y,render:x}},ut.isValidElement=j,ut.lazy=function(x){return{$$typeof:C,_payload:{_status:-1,_result:x},_init:W}},ut.memo=function(x,H){return{$$typeof:g,type:x,compare:H===void 0?null:H}},ut.startTransition=function(x){var H=X.T,P={};X.T=P;try{var I=x(),V=X.S;V!==null&&V(P,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then(gt,Q)}catch(vt){Q(vt)}finally{X.T=H}},ut.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},ut.use=function(x){return X.H.use(x)},ut.useActionState=function(x,H,P){return X.H.useActionState(x,H,P)},ut.useCallback=function(x,H){return X.H.useCallback(x,H)},ut.useContext=function(x){return X.H.useContext(x)},ut.useDebugValue=function(){},ut.useDeferredValue=function(x,H){return X.H.useDeferredValue(x,H)},ut.useEffect=function(x,H){return X.H.useEffect(x,H)},ut.useId=function(){return X.H.useId()},ut.useImperativeHandle=function(x,H,P){return X.H.useImperativeHandle(x,H,P)},ut.useInsertionEffect=function(x,H){return X.H.useInsertionEffect(x,H)},ut.useLayoutEffect=function(x,H){return X.H.useLayoutEffect(x,H)},ut.useMemo=function(x,H){return X.H.useMemo(x,H)},ut.useOptimistic=function(x,H){return X.H.useOptimistic(x,H)},ut.useReducer=function(x,H,P){return X.H.useReducer(x,H,P)},ut.useRef=function(x){return X.H.useRef(x)},ut.useState=function(x){return X.H.useState(x)},ut.useSyncExternalStore=function(x,H,P){return X.H.useSyncExternalStore(x,H,P)},ut.useTransition=function(){return X.H.useTransition()},ut.version="19.0.0",ut}var Wp;function Lu(){return Wp||(Wp=1,du.exports=qb()),du.exports}var St=Lu();const Yb=Lb(St),te=Bb({__proto__:null,default:Yb},[St]);var fu={exports:{}},Jn={},hu={exports:{}},pu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function Xb(){return Ip||(Ip=1,function(i){function n(B,W){var Q=B.length;B.push(W);t:for(;0<Q;){var gt=Q-1>>>1,x=B[gt];if(0<u(x,W))B[gt]=W,B[Q]=x,Q=gt;else break t}}function r(B){return B.length===0?null:B[0]}function c(B){if(B.length===0)return null;var W=B[0],Q=B.pop();if(Q!==W){B[0]=Q;t:for(var gt=0,x=B.length,H=x>>>1;gt<H;){var P=2*(gt+1)-1,I=B[P],V=P+1,vt=B[V];if(0>u(I,Q))V<x&&0>u(vt,I)?(B[gt]=vt,B[V]=Q,gt=V):(B[gt]=I,B[P]=Q,gt=P);else if(V<x&&0>u(vt,Q))B[gt]=vt,B[V]=Q,gt=V;else break t}}return W}function u(B,W){var Q=B.sortIndex-W.sortIndex;return Q!==0?Q:B.id-W.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;i.unstable_now=function(){return f.now()}}else{var h=Date,y=h.now();i.unstable_now=function(){return h.now()-y}}var v=[],g=[],C=1,k=null,N=3,O=!1,U=!1,L=!1,q=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function G(B){for(var W=r(g);W!==null;){if(W.callback===null)c(g);else if(W.startTime<=B)c(g),W.sortIndex=W.expirationTime,n(v,W);else break;W=r(g)}}function it(B){if(L=!1,G(B),!U)if(r(v)!==null)U=!0,$t();else{var W=r(g);W!==null&&Qt(it,W.startTime-B)}}var X=!1,wt=-1,kt=5,st=-1;function j(){return!(i.unstable_now()-st<kt)}function lt(){if(X){var B=i.unstable_now();st=B;var W=!0;try{t:{U=!1,L&&(L=!1,K(wt),wt=-1),O=!0;var Q=N;try{e:{for(G(B),k=r(v);k!==null&&!(k.expirationTime>B&&j());){var gt=k.callback;if(typeof gt=="function"){k.callback=null,N=k.priorityLevel;var x=gt(k.expirationTime<=B);if(B=i.unstable_now(),typeof x=="function"){k.callback=x,G(B),W=!0;break e}k===r(v)&&c(v),G(B)}else c(v);k=r(v)}if(k!==null)W=!0;else{var H=r(g);H!==null&&Qt(it,H.startTime-B),W=!1}}break t}finally{k=null,N=Q,O=!1}W=void 0}}finally{W?Yt():X=!1}}}var Yt;if(typeof F=="function")Yt=function(){F(lt)};else if(typeof MessageChannel<"u"){var Xt=new MessageChannel,ae=Xt.port2;Xt.port1.onmessage=lt,Yt=function(){ae.postMessage(null)}}else Yt=function(){q(lt,0)};function $t(){X||(X=!0,Yt())}function Qt(B,W){wt=q(function(){B(i.unstable_now())},W)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(B){B.callback=null},i.unstable_continueExecution=function(){U||O||(U=!0,$t())},i.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):kt=0<B?Math.floor(1e3/B):5},i.unstable_getCurrentPriorityLevel=function(){return N},i.unstable_getFirstCallbackNode=function(){return r(v)},i.unstable_next=function(B){switch(N){case 1:case 2:case 3:var W=3;break;default:W=N}var Q=N;N=W;try{return B()}finally{N=Q}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(B,W){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=N;N=B;try{return W()}finally{N=Q}},i.unstable_scheduleCallback=function(B,W,Q){var gt=i.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?gt+Q:gt):Q=gt,B){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=Q+x,B={id:C++,callback:W,priorityLevel:B,startTime:Q,expirationTime:x,sortIndex:-1},Q>gt?(B.sortIndex=Q,n(g,B),r(v)===null&&B===r(g)&&(L?(K(wt),wt=-1):L=!0,Qt(it,Q-gt))):(B.sortIndex=x,n(v,B),U||O||(U=!0,$t())),B},i.unstable_shouldYield=j,i.unstable_wrapCallback=function(B){var W=N;return function(){var Q=N;N=W;try{return B.apply(this,arguments)}finally{N=Q}}}}(pu)),pu}var Pp;function Gb(){return Pp||(Pp=1,hu.exports=Xb()),hu.exports}var mu={exports:{}},ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0;function Qb(){if(t0)return ke;t0=1;var i=Lu();function n(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)g+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var c={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(v,g,C){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:k==null?null:""+k,children:v,containerInfo:g,implementation:C}}var h=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ke.createPortal=function(v,g){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(n(299));return f(v,g,null,C)},ke.flushSync=function(v){var g=h.T,C=c.p;try{if(h.T=null,c.p=2,v)return v()}finally{h.T=g,c.p=C,c.d.f()}},ke.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(v,g))},ke.prefetchDNS=function(v){typeof v=="string"&&c.d.D(v)},ke.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var C=g.as,k=y(C,g.crossOrigin),N=typeof g.integrity=="string"?g.integrity:void 0,O=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;C==="style"?c.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:k,integrity:N,fetchPriority:O}):C==="script"&&c.d.X(v,{crossOrigin:k,integrity:N,fetchPriority:O,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ke.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var C=y(g.as,g.crossOrigin);c.d.M(v,{crossOrigin:C,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(v)},ke.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var C=g.as,k=y(C,g.crossOrigin);c.d.L(v,C,{crossOrigin:k,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ke.preloadModule=function(v,g){if(typeof v=="string")if(g){var C=y(g.as,g.crossOrigin);c.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:C,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(v)},ke.requestFormReset=function(v){c.d.r(v)},ke.unstable_batchedUpdates=function(v,g){return v(g)},ke.useFormState=function(v,g,C){return h.H.useFormState(v,g,C)},ke.useFormStatus=function(){return h.H.useHostTransitionStatus()},ke.version="19.0.0",ke}var e0;function Zb(){if(e0)return mu.exports;e0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(n){console.error(n)}}return i(),mu.exports=Qb(),mu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0;function Kb(){if(l0)return Jn;l0=1;var i=Gb(),n=Lu(),r=Zb();function c(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var f=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),O=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen"),it=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function wt(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var kt=Symbol.for("react.client.reference");function st(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===kt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case v:return"Fragment";case y:return"Portal";case C:return"Profiler";case g:return"StrictMode";case L:return"Suspense";case q:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case O:return(t.displayName||"Context")+".Provider";case N:return(t._context.displayName||"Context")+".Consumer";case U:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case K:return e=t.displayName||null,e!==null?e:st(t.type)||"Memo";case F:e=t._payload,t=t._init;try{return st(t(e))}catch{}}return null}var j=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lt=Object.assign,Yt,Xt;function ae(t){if(Yt===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Yt=e&&e[1]||"",Xt=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yt+t+Xt}var $t=!1;function Qt(t,e){if(!t||$t)return"";$t=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(D){var T=D}Reflect.construct(t,[],M)}else{try{M.call()}catch(D){T=D}t.call(M.prototype)}}else{try{throw Error()}catch(D){T=D}(M=t())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(D){if(D&&T&&typeof D.stack=="string")return[D.stack,T.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=a.DetermineComponentFrameRoot(),d=o[0],p=o[1];if(d&&p){var b=d.split(`
`),S=p.split(`
`);for(s=a=0;a<b.length&&!b[a].includes("DetermineComponentFrameRoot");)a++;for(;s<S.length&&!S[s].includes("DetermineComponentFrameRoot");)s++;if(a===b.length||s===S.length)for(a=b.length-1,s=S.length-1;1<=a&&0<=s&&b[a]!==S[s];)s--;for(;1<=a&&0<=s;a--,s--)if(b[a]!==S[s]){if(a!==1||s!==1)do if(a--,s--,0>s||b[a]!==S[s]){var R=`
`+b[a].replace(" at new "," at ");return t.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",t.displayName)),R}while(1<=a&&0<=s);break}}}finally{$t=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?ae(l):""}function B(t){switch(t.tag){case 26:case 27:case 5:return ae(t.type);case 16:return ae("Lazy");case 13:return ae("Suspense");case 19:return ae("SuspenseList");case 0:case 15:return t=Qt(t.type,!1),t;case 11:return t=Qt(t.type.render,!1),t;case 1:return t=Qt(t.type,!0),t;default:return""}}function W(t){try{var e="";do e+=B(t),t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function Q(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function gt(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function x(t){if(Q(t)!==t)throw Error(c(188))}function H(t){var e=t.alternate;if(!e){if(e=Q(t),e===null)throw Error(c(188));return e!==t?null:t}for(var l=t,a=e;;){var s=l.return;if(s===null)break;var o=s.alternate;if(o===null){if(a=s.return,a!==null){l=a;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===l)return x(s),t;if(o===a)return x(s),e;o=o.sibling}throw Error(c(188))}if(l.return!==a.return)l=s,a=o;else{for(var d=!1,p=s.child;p;){if(p===l){d=!0,l=s,a=o;break}if(p===a){d=!0,a=s,l=o;break}p=p.sibling}if(!d){for(p=o.child;p;){if(p===l){d=!0,l=o,a=s;break}if(p===a){d=!0,a=o,l=s;break}p=p.sibling}if(!d)throw Error(c(189))}}if(l.alternate!==a)throw Error(c(190))}if(l.tag!==3)throw Error(c(188));return l.stateNode.current===l?t:e}function P(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=P(t),e!==null)return e;t=t.sibling}return null}var I=Array.isArray,V=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,vt={pending:!1,data:null,method:null,action:null},rt=[],we=-1;function Ct(t){return{current:t}}function Ft(t){0>we||(t.current=rt[we],rt[we]=null,we--)}function Ut(t,e){we++,rt[we]=t.current,t.current=e}var We=Ct(null),tt=Ct(null),ct=Ct(null),yl=Ct(null);function Ss(t,e){switch(Ut(ct,e),Ut(tt,t),Ut(We,null),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)&&(e=e.namespaceURI)?Sp(e):0;break;default:if(t=t===8?e.parentNode:e,e=t.tagName,t=t.namespaceURI)t=Sp(t),e=zp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ft(We),Ut(We,e)}function ei(){Ft(We),Ft(tt),Ft(ct)}function er(t){t.memoizedState!==null&&Ut(yl,t);var e=We.current,l=zp(e,t.type);e!==l&&(Ut(tt,t),Ut(We,l))}function zs(t){tt.current===t&&(Ft(We),Ft(tt)),yl.current===t&&(Ft(yl),Xn._currentValue=vt)}var lr=Object.prototype.hasOwnProperty,ar=i.unstable_scheduleCallback,ir=i.unstable_cancelCallback,gm=i.unstable_shouldYield,bm=i.unstable_requestPaint,_l=i.unstable_now,vm=i.unstable_getCurrentPriorityLevel,dd=i.unstable_ImmediatePriority,fd=i.unstable_UserBlockingPriority,Cs=i.unstable_NormalPriority,ym=i.unstable_LowPriority,hd=i.unstable_IdlePriority,_m=i.log,xm=i.unstable_setDisableYieldValue,Ii=null,Le=null;function wm(t){if(Le&&typeof Le.onCommitFiberRoot=="function")try{Le.onCommitFiberRoot(Ii,t,void 0,(t.current.flags&128)===128)}catch{}}function Kl(t){if(typeof _m=="function"&&xm(t),Le&&typeof Le.setStrictMode=="function")try{Le.setStrictMode(Ii,t)}catch{}}var je=Math.clz32?Math.clz32:Cm,Sm=Math.log,zm=Math.LN2;function Cm(t){return t>>>=0,t===0?32:31-(Sm(t)/zm|0)|0}var As=128,Es=4194304;function Ca(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ts(t,e){var l=t.pendingLanes;if(l===0)return 0;var a=0,s=t.suspendedLanes,o=t.pingedLanes,d=t.warmLanes;t=t.finishedLanes!==0;var p=l&134217727;return p!==0?(l=p&~s,l!==0?a=Ca(l):(o&=p,o!==0?a=Ca(o):t||(d=p&~d,d!==0&&(a=Ca(d))))):(p=l&~s,p!==0?a=Ca(p):o!==0?a=Ca(o):t||(d=l&~d,d!==0&&(a=Ca(d)))),a===0?0:e!==0&&e!==a&&!(e&s)&&(s=a&-a,d=e&-e,s>=d||s===32&&(d&4194176)!==0)?e:a}function Pi(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Am(t,e){switch(t){case 1:case 2:case 4:case 8:return e+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pd(){var t=As;return As<<=1,!(As&4194176)&&(As=128),t}function md(){var t=Es;return Es<<=1,!(Es&62914560)&&(Es=4194304),t}function nr(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function tn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Em(t,e,l,a,s,o){var d=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var p=t.entanglements,b=t.expirationTimes,S=t.hiddenUpdates;for(l=d&~l;0<l;){var R=31-je(l),M=1<<R;p[R]=0,b[R]=-1;var T=S[R];if(T!==null)for(S[R]=null,R=0;R<T.length;R++){var D=T[R];D!==null&&(D.lane&=-536870913)}l&=~M}a!==0&&gd(t,a,0),o!==0&&s===0&&t.tag!==0&&(t.suspendedLanes|=o&~(d&~e))}function gd(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-je(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&4194218}function bd(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-je(l),s=1<<a;s&e|t[a]&e&&(t[a]|=e),l&=~s}}function vd(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function yd(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:qp(t.type))}function Tm(t,e){var l=V.p;try{return V.p=t,e()}finally{V.p=l}}var Fl=Math.random().toString(36).slice(2),Ee="__reactFiber$"+Fl,Ne="__reactProps$"+Fl,li="__reactContainer$"+Fl,sr="__reactEvents$"+Fl,km="__reactListeners$"+Fl,Om="__reactHandles$"+Fl,_d="__reactResources$"+Fl,en="__reactMarker$"+Fl;function or(t){delete t[Ee],delete t[Ne],delete t[sr],delete t[km],delete t[Om]}function Aa(t){var e=t[Ee];if(e)return e;for(var l=t.parentNode;l;){if(e=l[li]||l[Ee]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=Ep(t);t!==null;){if(l=t[Ee])return l;t=Ep(t)}return e}t=l,l=t.parentNode}return null}function ai(t){if(t=t[Ee]||t[li]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function ln(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(c(33))}function ii(t){var e=t[_d];return e||(e=t[_d]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function me(t){t[en]=!0}var xd=new Set,wd={};function Ea(t,e){ni(t,e),ni(t+"Capture",e)}function ni(t,e){for(wd[t]=e,t=0;t<e.length;t++)xd.add(e[t])}var Dl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Sd={},zd={};function Rm(t){return lr.call(zd,t)?!0:lr.call(Sd,t)?!1:Dm.test(t)?zd[t]=!0:(Sd[t]=!0,!1)}function ks(t,e,l){if(Rm(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Os(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function Rl(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function Ie(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Cd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $m(t){var e=Cd(t)?"checked":"value",l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var s=l.get,o=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(d){a=""+d,o.call(this,d)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ds(t){t._valueTracker||(t._valueTracker=$m(t))}function Ad(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=Cd(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Rs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Nm=/[\n"\\]/g;function Pe(t){return t.replace(Nm,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function rr(t,e,l,a,s,o,d,p){t.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.type=d:t.removeAttribute("type"),e!=null?d==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ie(e)):t.value!==""+Ie(e)&&(t.value=""+Ie(e)):d!=="submit"&&d!=="reset"||t.removeAttribute("value"),e!=null?cr(t,d,Ie(e)):l!=null?cr(t,d,Ie(l)):a!=null&&t.removeAttribute("value"),s==null&&o!=null&&(t.defaultChecked=!!o),s!=null&&(t.checked=s&&typeof s!="function"&&typeof s!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?t.name=""+Ie(p):t.removeAttribute("name")}function Ed(t,e,l,a,s,o,d,p){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.type=o),e!=null||l!=null){if(!(o!=="submit"&&o!=="reset"||e!=null))return;l=l!=null?""+Ie(l):"",e=e!=null?""+Ie(e):l,p||e===t.value||(t.value=e),t.defaultValue=e}a=a??s,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=p?t.checked:!!a,t.defaultChecked=!!a,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.name=d)}function cr(t,e,l){e==="number"&&Rs(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function si(t,e,l,a){if(t=t.options,e){e={};for(var s=0;s<l.length;s++)e["$"+l[s]]=!0;for(l=0;l<t.length;l++)s=e.hasOwnProperty("$"+t[l].value),t[l].selected!==s&&(t[l].selected=s),s&&a&&(t[l].defaultSelected=!0)}else{for(l=""+Ie(l),e=null,s=0;s<t.length;s++){if(t[s].value===l){t[s].selected=!0,a&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Td(t,e,l){if(e!=null&&(e=""+Ie(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+Ie(l):""}function kd(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(c(92));if(I(a)){if(1<a.length)throw Error(c(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=Ie(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a)}function oi(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var Mm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Od(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||Mm.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Dd(t,e,l){if(e!=null&&typeof e!="object")throw Error(c(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var s in e)a=e[s],e.hasOwnProperty(s)&&l[s]!==a&&Od(t,s,a)}else for(var o in e)e.hasOwnProperty(o)&&Od(t,o,e[o])}function ur(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Um=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $s(t){return Hm.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var dr=null;function fr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ri=null,ci=null;function Rd(t){var e=ai(t);if(e&&(t=e.stateNode)){var l=t[Ne]||null;t:switch(t=e.stateNode,e.type){case"input":if(rr(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Pe(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var s=a[Ne]||null;if(!s)throw Error(c(90));rr(a,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&Ad(a)}break t;case"textarea":Td(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&si(t,!!l.multiple,e,!1)}}}var hr=!1;function $d(t,e,l){if(hr)return t(e,l);hr=!0;try{var a=t(e);return a}finally{if(hr=!1,(ri!==null||ci!==null)&&(bo(),ri&&(e=ri,t=ci,ci=ri=null,Rd(e),t)))for(e=0;e<t.length;e++)Rd(t[e])}}function an(t,e){var l=t.stateNode;if(l===null)return null;var a=l[Ne]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(c(231,e,typeof l));return l}var pr=!1;if(Dl)try{var nn={};Object.defineProperty(nn,"passive",{get:function(){pr=!0}}),window.addEventListener("test",nn,nn),window.removeEventListener("test",nn,nn)}catch{pr=!1}var Jl=null,mr=null,Ns=null;function Nd(){if(Ns)return Ns;var t,e=mr,l=e.length,a,s="value"in Jl?Jl.value:Jl.textContent,o=s.length;for(t=0;t<l&&e[t]===s[t];t++);var d=l-t;for(a=1;a<=d&&e[l-a]===s[o-a];a++);return Ns=s.slice(t,1<a?1-a:void 0)}function Ms(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Us(){return!0}function Md(){return!1}function Me(t){function e(l,a,s,o,d){this._reactName=l,this._targetInst=s,this.type=a,this.nativeEvent=o,this.target=d,this.currentTarget=null;for(var p in t)t.hasOwnProperty(p)&&(l=t[p],this[p]=l?l(o):o[p]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Us:Md,this.isPropagationStopped=Md,this}return lt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Us)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Us)},persist:function(){},isPersistent:Us}),e}var Ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hs=Me(Ta),sn=lt({},Ta,{view:0,detail:0}),Bm=Me(sn),gr,br,on,Bs=lt({},sn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==on&&(on&&t.type==="mousemove"?(gr=t.screenX-on.screenX,br=t.screenY-on.screenY):br=gr=0,on=t),gr)},movementY:function(t){return"movementY"in t?t.movementY:br}}),Ud=Me(Bs),Lm=lt({},Bs,{dataTransfer:0}),jm=Me(Lm),Vm=lt({},sn,{relatedTarget:0}),vr=Me(Vm),qm=lt({},Ta,{animationName:0,elapsedTime:0,pseudoElement:0}),Ym=Me(qm),Xm=lt({},Ta,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Gm=Me(Xm),Qm=lt({},Ta,{data:0}),Hd=Me(Qm),Zm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Km={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Fm[t])?!!e[t]:!1}function yr(){return Jm}var Wm=lt({},sn,{key:function(t){if(t.key){var e=Zm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ms(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Km[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yr,charCode:function(t){return t.type==="keypress"?Ms(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ms(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Im=Me(Wm),Pm=lt({},Bs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bd=Me(Pm),tg=lt({},sn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yr}),eg=Me(tg),lg=lt({},Ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),ag=Me(lg),ig=lt({},Bs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ng=Me(ig),sg=lt({},Ta,{newState:0,oldState:0}),og=Me(sg),rg=[9,13,27,32],_r=Dl&&"CompositionEvent"in window,rn=null;Dl&&"documentMode"in document&&(rn=document.documentMode);var cg=Dl&&"TextEvent"in window&&!rn,Ld=Dl&&(!_r||rn&&8<rn&&11>=rn),jd=" ",Vd=!1;function qd(t,e){switch(t){case"keyup":return rg.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ui=!1;function ug(t,e){switch(t){case"compositionend":return Yd(e);case"keypress":return e.which!==32?null:(Vd=!0,jd);case"textInput":return t=e.data,t===jd&&Vd?null:t;default:return null}}function dg(t,e){if(ui)return t==="compositionend"||!_r&&qd(t,e)?(t=Nd(),Ns=mr=Jl=null,ui=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ld&&e.locale!=="ko"?null:e.data;default:return null}}var fg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fg[t.type]:e==="textarea"}function Gd(t,e,l,a){ri?ci?ci.push(a):ci=[a]:ri=a,e=wo(e,"onChange"),0<e.length&&(l=new Hs("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var cn=null,un=null;function hg(t){vp(t,0)}function Ls(t){var e=ln(t);if(Ad(e))return t}function Qd(t,e){if(t==="change")return e}var Zd=!1;if(Dl){var xr;if(Dl){var wr="oninput"in document;if(!wr){var Kd=document.createElement("div");Kd.setAttribute("oninput","return;"),wr=typeof Kd.oninput=="function"}xr=wr}else xr=!1;Zd=xr&&(!document.documentMode||9<document.documentMode)}function Fd(){cn&&(cn.detachEvent("onpropertychange",Jd),un=cn=null)}function Jd(t){if(t.propertyName==="value"&&Ls(un)){var e=[];Gd(e,un,t,fr(t)),$d(hg,e)}}function pg(t,e,l){t==="focusin"?(Fd(),cn=e,un=l,cn.attachEvent("onpropertychange",Jd)):t==="focusout"&&Fd()}function mg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ls(un)}function gg(t,e){if(t==="click")return Ls(e)}function bg(t,e){if(t==="input"||t==="change")return Ls(e)}function vg(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ve=typeof Object.is=="function"?Object.is:vg;function dn(t,e){if(Ve(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var s=l[a];if(!lr.call(e,s)||!Ve(t[s],e[s]))return!1}return!0}function Wd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Id(t,e){var l=Wd(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=Wd(l)}}function Pd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Pd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function tf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Rs(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Rs(t.document)}return e}function Sr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yg(t,e){var l=tf(e);e=t.focusedElem;var a=t.selectionRange;if(l!==e&&e&&e.ownerDocument&&Pd(e.ownerDocument.documentElement,e)){if(a!==null&&Sr(e)){if(t=a.start,l=a.end,l===void 0&&(l=t),"selectionStart"in e)e.selectionStart=t,e.selectionEnd=Math.min(l,e.value.length);else if(l=(t=e.ownerDocument||document)&&t.defaultView||window,l.getSelection){l=l.getSelection();var s=e.textContent.length,o=Math.min(a.start,s);a=a.end===void 0?o:Math.min(a.end,s),!l.extend&&o>a&&(s=a,a=o,o=s),s=Id(e,o);var d=Id(e,a);s&&d&&(l.rangeCount!==1||l.anchorNode!==s.node||l.anchorOffset!==s.offset||l.focusNode!==d.node||l.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),l.removeAllRanges(),o>a?(l.addRange(t),l.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),l.addRange(t)))}}for(t=[],l=e;l=l.parentNode;)l.nodeType===1&&t.push({element:l,left:l.scrollLeft,top:l.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<t.length;e++)l=t[e],l.element.scrollLeft=l.left,l.element.scrollTop=l.top}}var _g=Dl&&"documentMode"in document&&11>=document.documentMode,di=null,zr=null,fn=null,Cr=!1;function ef(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Cr||di==null||di!==Rs(a)||(a=di,"selectionStart"in a&&Sr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),fn&&dn(fn,a)||(fn=a,a=wo(zr,"onSelect"),0<a.length&&(e=new Hs("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=di)))}function ka(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var fi={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionrun:ka("Transition","TransitionRun"),transitionstart:ka("Transition","TransitionStart"),transitioncancel:ka("Transition","TransitionCancel"),transitionend:ka("Transition","TransitionEnd")},Ar={},lf={};Dl&&(lf=document.createElement("div").style,"AnimationEvent"in window||(delete fi.animationend.animation,delete fi.animationiteration.animation,delete fi.animationstart.animation),"TransitionEvent"in window||delete fi.transitionend.transition);function Oa(t){if(Ar[t])return Ar[t];if(!fi[t])return t;var e=fi[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in lf)return Ar[t]=e[l];return t}var af=Oa("animationend"),nf=Oa("animationiteration"),sf=Oa("animationstart"),xg=Oa("transitionrun"),wg=Oa("transitionstart"),Sg=Oa("transitioncancel"),of=Oa("transitionend"),rf=new Map,cf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function dl(t,e){rf.set(t,e),Ea(e,[t])}var tl=[],hi=0,Er=0;function js(){for(var t=hi,e=Er=hi=0;e<t;){var l=tl[e];tl[e++]=null;var a=tl[e];tl[e++]=null;var s=tl[e];tl[e++]=null;var o=tl[e];if(tl[e++]=null,a!==null&&s!==null){var d=a.pending;d===null?s.next=s:(s.next=d.next,d.next=s),a.pending=s}o!==0&&uf(l,s,o)}}function Vs(t,e,l,a){tl[hi++]=t,tl[hi++]=e,tl[hi++]=l,tl[hi++]=a,Er|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Tr(t,e,l,a){return Vs(t,e,l,a),qs(t)}function Wl(t,e){return Vs(t,null,null,e),qs(t)}function uf(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var s=!1,o=t.return;o!==null;)o.childLanes|=l,a=o.alternate,a!==null&&(a.childLanes|=l),o.tag===22&&(t=o.stateNode,t===null||t._visibility&1||(s=!0)),t=o,o=o.return;s&&e!==null&&t.tag===3&&(o=t.stateNode,s=31-je(l),o=o.hiddenUpdates,t=o[s],t===null?o[s]=[e]:t.push(e),e.lane=l|536870912)}function qs(t){if(50<Hn)throw Hn=0,Nc=null,Error(c(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var pi={},df=new WeakMap;function el(t,e){if(typeof t=="object"&&t!==null){var l=df.get(t);return l!==void 0?l:(e={value:t,source:e,stack:W(e)},df.set(t,e),e)}return{value:t,source:e,stack:W(e)}}var mi=[],gi=0,Ys=null,Xs=0,ll=[],al=0,Da=null,$l=1,Nl="";function Ra(t,e){mi[gi++]=Xs,mi[gi++]=Ys,Ys=t,Xs=e}function ff(t,e,l){ll[al++]=$l,ll[al++]=Nl,ll[al++]=Da,Da=t;var a=$l;t=Nl;var s=32-je(a)-1;a&=~(1<<s),l+=1;var o=32-je(e)+s;if(30<o){var d=s-s%5;o=(a&(1<<d)-1).toString(32),a>>=d,s-=d,$l=1<<32-je(e)+s|l<<s|a,Nl=o+t}else $l=1<<o|l<<s|a,Nl=t}function kr(t){t.return!==null&&(Ra(t,1),ff(t,1,0))}function Or(t){for(;t===Ys;)Ys=mi[--gi],mi[gi]=null,Xs=mi[--gi],mi[gi]=null;for(;t===Da;)Da=ll[--al],ll[al]=null,Nl=ll[--al],ll[al]=null,$l=ll[--al],ll[al]=null}var Re=null,Se=null,At=!1,fl=null,xl=!1,Dr=Error(c(519));function $a(t){var e=Error(c(418,""));throw mn(el(e,t)),Dr}function hf(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[Ee]=t,e[Ne]=a,l){case"dialog":_t("cancel",e),_t("close",e);break;case"iframe":case"object":case"embed":_t("load",e);break;case"video":case"audio":for(l=0;l<Ln.length;l++)_t(Ln[l],e);break;case"source":_t("error",e);break;case"img":case"image":case"link":_t("error",e),_t("load",e);break;case"details":_t("toggle",e);break;case"input":_t("invalid",e),Ed(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Ds(e);break;case"select":_t("invalid",e);break;case"textarea":_t("invalid",e),kd(e,a.value,a.defaultValue,a.children),Ds(e)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||wp(e.textContent,l)?(a.popover!=null&&(_t("beforetoggle",e),_t("toggle",e)),a.onScroll!=null&&_t("scroll",e),a.onScrollEnd!=null&&_t("scrollend",e),a.onClick!=null&&(e.onclick=So),e=!0):e=!1,e||$a(t)}function pf(t){for(Re=t.return;Re;)switch(Re.tag){case 3:case 27:xl=!0;return;case 5:case 13:xl=!1;return;default:Re=Re.return}}function hn(t){if(t!==Re)return!1;if(!At)return pf(t),At=!0,!1;var e=!1,l;if((l=t.tag!==3&&t.tag!==27)&&((l=t.tag===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Wc(t.type,t.memoizedProps)),l=!l),l&&(e=!0),e&&Se&&$a(t),pf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(l=t.data,l==="/$"){if(e===0){Se=pl(t.nextSibling);break t}e--}else l!=="$"&&l!=="$!"&&l!=="$?"||e++;t=t.nextSibling}Se=null}}else Se=Re?pl(t.stateNode.nextSibling):null;return!0}function pn(){Se=Re=null,At=!1}function mn(t){fl===null?fl=[t]:fl.push(t)}var gn=Error(c(460)),mf=Error(c(474)),Rr={then:function(){}};function gf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Gs(){}function bf(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(Gs,Gs),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===gn?Error(c(483)):t;default:if(typeof e.status=="string")e.then(Gs,Gs);else{if(t=Ht,t!==null&&100<t.shellSuspendCounter)throw Error(c(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var s=e;s.status="fulfilled",s.value=a}},function(a){if(e.status==="pending"){var s=e;s.status="rejected",s.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===gn?Error(c(483)):t}throw bn=e,gn}}var bn=null;function vf(){if(bn===null)throw Error(c(459));var t=bn;return bn=null,t}var bi=null,vn=0;function Qs(t){var e=vn;return vn+=1,bi===null&&(bi=[]),bf(bi,t,e)}function yn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Zs(t,e){throw e.$$typeof===f?Error(c(525)):(t=Object.prototype.toString.call(e),Error(c(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function yf(t){var e=t._init;return e(t._payload)}function _f(t){function e(z,w){if(t){var E=z.deletions;E===null?(z.deletions=[w],z.flags|=16):E.push(w)}}function l(z,w){if(!t)return null;for(;w!==null;)e(z,w),w=w.sibling;return null}function a(z){for(var w=new Map;z!==null;)z.key!==null?w.set(z.key,z):w.set(z.index,z),z=z.sibling;return w}function s(z,w){return z=ca(z,w),z.index=0,z.sibling=null,z}function o(z,w,E){return z.index=E,t?(E=z.alternate,E!==null?(E=E.index,E<w?(z.flags|=33554434,w):E):(z.flags|=33554434,w)):(z.flags|=1048576,w)}function d(z){return t&&z.alternate===null&&(z.flags|=33554434),z}function p(z,w,E,$){return w===null||w.tag!==6?(w=Ac(E,z.mode,$),w.return=z,w):(w=s(w,E),w.return=z,w)}function b(z,w,E,$){var Y=E.type;return Y===v?R(z,w,E.props.children,$,E.key):w!==null&&(w.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===F&&yf(Y)===w.type)?(w=s(w,E.props),yn(w,E),w.return=z,w):(w=fo(E.type,E.key,E.props,null,z.mode,$),yn(w,E),w.return=z,w)}function S(z,w,E,$){return w===null||w.tag!==4||w.stateNode.containerInfo!==E.containerInfo||w.stateNode.implementation!==E.implementation?(w=Ec(E,z.mode,$),w.return=z,w):(w=s(w,E.children||[]),w.return=z,w)}function R(z,w,E,$,Y){return w===null||w.tag!==7?(w=Ya(E,z.mode,$,Y),w.return=z,w):(w=s(w,E),w.return=z,w)}function M(z,w,E){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return w=Ac(""+w,z.mode,E),w.return=z,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case h:return E=fo(w.type,w.key,w.props,null,z.mode,E),yn(E,w),E.return=z,E;case y:return w=Ec(w,z.mode,E),w.return=z,w;case F:var $=w._init;return w=$(w._payload),M(z,w,E)}if(I(w)||wt(w))return w=Ya(w,z.mode,E,null),w.return=z,w;if(typeof w.then=="function")return M(z,Qs(w),E);if(w.$$typeof===O)return M(z,ro(z,w),E);Zs(z,w)}return null}function T(z,w,E,$){var Y=w!==null?w.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return Y!==null?null:p(z,w,""+E,$);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case h:return E.key===Y?b(z,w,E,$):null;case y:return E.key===Y?S(z,w,E,$):null;case F:return Y=E._init,E=Y(E._payload),T(z,w,E,$)}if(I(E)||wt(E))return Y!==null?null:R(z,w,E,$,null);if(typeof E.then=="function")return T(z,w,Qs(E),$);if(E.$$typeof===O)return T(z,w,ro(z,E),$);Zs(z,E)}return null}function D(z,w,E,$,Y){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return z=z.get(E)||null,p(w,z,""+$,Y);if(typeof $=="object"&&$!==null){switch($.$$typeof){case h:return z=z.get($.key===null?E:$.key)||null,b(w,z,$,Y);case y:return z=z.get($.key===null?E:$.key)||null,S(w,z,$,Y);case F:var pt=$._init;return $=pt($._payload),D(z,w,E,$,Y)}if(I($)||wt($))return z=z.get(E)||null,R(w,z,$,Y,null);if(typeof $.then=="function")return D(z,w,E,Qs($),Y);if($.$$typeof===O)return D(z,w,E,ro(w,$),Y);Zs(w,$)}return null}function Z(z,w,E,$){for(var Y=null,pt=null,J=w,et=w=0,ve=null;J!==null&&et<E.length;et++){J.index>et?(ve=J,J=null):ve=J.sibling;var Et=T(z,J,E[et],$);if(Et===null){J===null&&(J=ve);break}t&&J&&Et.alternate===null&&e(z,J),w=o(Et,w,et),pt===null?Y=Et:pt.sibling=Et,pt=Et,J=ve}if(et===E.length)return l(z,J),At&&Ra(z,et),Y;if(J===null){for(;et<E.length;et++)J=M(z,E[et],$),J!==null&&(w=o(J,w,et),pt===null?Y=J:pt.sibling=J,pt=J);return At&&Ra(z,et),Y}for(J=a(J);et<E.length;et++)ve=D(J,z,et,E[et],$),ve!==null&&(t&&ve.alternate!==null&&J.delete(ve.key===null?et:ve.key),w=o(ve,w,et),pt===null?Y=ve:pt.sibling=ve,pt=ve);return t&&J.forEach(function(ga){return e(z,ga)}),At&&Ra(z,et),Y}function nt(z,w,E,$){if(E==null)throw Error(c(151));for(var Y=null,pt=null,J=w,et=w=0,ve=null,Et=E.next();J!==null&&!Et.done;et++,Et=E.next()){J.index>et?(ve=J,J=null):ve=J.sibling;var ga=T(z,J,Et.value,$);if(ga===null){J===null&&(J=ve);break}t&&J&&ga.alternate===null&&e(z,J),w=o(ga,w,et),pt===null?Y=ga:pt.sibling=ga,pt=ga,J=ve}if(Et.done)return l(z,J),At&&Ra(z,et),Y;if(J===null){for(;!Et.done;et++,Et=E.next())Et=M(z,Et.value,$),Et!==null&&(w=o(Et,w,et),pt===null?Y=Et:pt.sibling=Et,pt=Et);return At&&Ra(z,et),Y}for(J=a(J);!Et.done;et++,Et=E.next())Et=D(J,z,et,Et.value,$),Et!==null&&(t&&Et.alternate!==null&&J.delete(Et.key===null?et:Et.key),w=o(Et,w,et),pt===null?Y=Et:pt.sibling=Et,pt=Et);return t&&J.forEach(function(Hb){return e(z,Hb)}),At&&Ra(z,et),Y}function It(z,w,E,$){if(typeof E=="object"&&E!==null&&E.type===v&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case h:t:{for(var Y=E.key;w!==null;){if(w.key===Y){if(Y=E.type,Y===v){if(w.tag===7){l(z,w.sibling),$=s(w,E.props.children),$.return=z,z=$;break t}}else if(w.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===F&&yf(Y)===w.type){l(z,w.sibling),$=s(w,E.props),yn($,E),$.return=z,z=$;break t}l(z,w);break}else e(z,w);w=w.sibling}E.type===v?($=Ya(E.props.children,z.mode,$,E.key),$.return=z,z=$):($=fo(E.type,E.key,E.props,null,z.mode,$),yn($,E),$.return=z,z=$)}return d(z);case y:t:{for(Y=E.key;w!==null;){if(w.key===Y)if(w.tag===4&&w.stateNode.containerInfo===E.containerInfo&&w.stateNode.implementation===E.implementation){l(z,w.sibling),$=s(w,E.children||[]),$.return=z,z=$;break t}else{l(z,w);break}else e(z,w);w=w.sibling}$=Ec(E,z.mode,$),$.return=z,z=$}return d(z);case F:return Y=E._init,E=Y(E._payload),It(z,w,E,$)}if(I(E))return Z(z,w,E,$);if(wt(E)){if(Y=wt(E),typeof Y!="function")throw Error(c(150));return E=Y.call(E),nt(z,w,E,$)}if(typeof E.then=="function")return It(z,w,Qs(E),$);if(E.$$typeof===O)return It(z,w,ro(z,E),$);Zs(z,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,w!==null&&w.tag===6?(l(z,w.sibling),$=s(w,E),$.return=z,z=$):(l(z,w),$=Ac(E,z.mode,$),$.return=z,z=$),d(z)):l(z,w)}return function(z,w,E,$){try{vn=0;var Y=It(z,w,E,$);return bi=null,Y}catch(J){if(J===gn)throw J;var pt=ol(29,J,null,z.mode);return pt.lanes=$,pt.return=z,pt}finally{}}}var Na=_f(!0),xf=_f(!1),vi=Ct(null),Ks=Ct(0);function wf(t,e){t=Gl,Ut(Ks,t),Ut(vi,e),Gl=t|e.baseLanes}function $r(){Ut(Ks,Gl),Ut(vi,vi.current)}function Nr(){Gl=Ks.current,Ft(vi),Ft(Ks)}var il=Ct(null),wl=null;function Il(t){var e=t.alternate;Ut(ue,ue.current&1),Ut(il,t),wl===null&&(e===null||vi.current!==null||e.memoizedState!==null)&&(wl=t)}function Sf(t){if(t.tag===22){if(Ut(ue,ue.current),Ut(il,t),wl===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(wl=t)}}else Pl()}function Pl(){Ut(ue,ue.current),Ut(il,il.current)}function Ml(t){Ft(il),wl===t&&(wl=null),Ft(ue)}var ue=Ct(0);function Fs(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zg=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Cg=i.unstable_scheduleCallback,Ag=i.unstable_NormalPriority,de={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mr(){return{controller:new zg,data:new Map,refCount:0}}function _n(t){t.refCount--,t.refCount===0&&Cg(Ag,function(){t.controller.abort()})}var xn=null,Ur=0,yi=0,_i=null;function Eg(t,e){if(xn===null){var l=xn=[];Ur=0,yi=qc(),_i={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Ur++,e.then(zf,zf),e}function zf(){if(--Ur===0&&xn!==null){_i!==null&&(_i.status="fulfilled");var t=xn;xn=null,yi=0,_i=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Tg(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(s){l.push(s)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var s=0;s<l.length;s++)(0,l[s])(e)},function(s){for(a.status="rejected",a.reason=s,s=0;s<l.length;s++)(0,l[s])(void 0)}),a}var Cf=j.S;j.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Eg(t,e),Cf!==null&&Cf(t,e)};var Ma=Ct(null);function Hr(){var t=Ma.current;return t!==null?t:Ht.pooledCache}function Js(t,e){e===null?Ut(Ma,Ma.current):Ut(Ma,e.pool)}function Af(){var t=Hr();return t===null?null:{parent:de._currentValue,pool:t}}var ta=0,ft=null,Ot=null,ne=null,Ws=!1,xi=!1,Ua=!1,Is=0,wn=0,wi=null,kg=0;function ie(){throw Error(c(321))}function Br(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!Ve(t[l],e[l]))return!1;return!0}function Lr(t,e,l,a,s,o){return ta=o,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,j.H=t===null||t.memoizedState===null?Ha:ea,Ua=!1,o=l(a,s),Ua=!1,xi&&(o=Tf(e,l,a,s)),Ef(t),o}function Ef(t){j.H=Sl;var e=Ot!==null&&Ot.next!==null;if(ta=0,ne=Ot=ft=null,Ws=!1,wn=0,wi=null,e)throw Error(c(300));t===null||ge||(t=t.dependencies,t!==null&&oo(t)&&(ge=!0))}function Tf(t,e,l,a){ft=t;var s=0;do{if(xi&&(wi=null),wn=0,xi=!1,25<=s)throw Error(c(301));if(s+=1,ne=Ot=null,t.updateQueue!=null){var o=t.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}j.H=Ba,o=e(l,a)}while(xi);return o}function Og(){var t=j.H,e=t.useState()[0];return e=typeof e.then=="function"?Sn(e):e,t=t.useState()[0],(Ot!==null?Ot.memoizedState:null)!==t&&(ft.flags|=1024),e}function jr(){var t=Is!==0;return Is=0,t}function Vr(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function qr(t){if(Ws){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Ws=!1}ta=0,ne=Ot=ft=null,xi=!1,wn=Is=0,wi=null}function Ue(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?ft.memoizedState=ne=t:ne=ne.next=t,ne}function se(){if(Ot===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=ne===null?ft.memoizedState:ne.next;if(e!==null)ne=e,Ot=t;else{if(t===null)throw ft.alternate===null?Error(c(467)):Error(c(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},ne===null?ft.memoizedState=ne=t:ne=ne.next=t}return ne}var Ps;Ps=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Sn(t){var e=wn;return wn+=1,wi===null&&(wi=[]),t=bf(wi,t,e),e=ft,(ne===null?e.memoizedState:ne.next)===null&&(e=e.alternate,j.H=e===null||e.memoizedState===null?Ha:ea),t}function to(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Sn(t);if(t.$$typeof===O)return Te(t)}throw Error(c(438,String(t)))}function Yr(t){var e=null,l=ft.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=ft.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(s){return s.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=Ps(),ft.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=it;return e.index++,l}function Ul(t,e){return typeof e=="function"?e(t):e}function eo(t){var e=se();return Xr(e,Ot,t)}function Xr(t,e,l){var a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=l;var s=t.baseQueue,o=a.pending;if(o!==null){if(s!==null){var d=s.next;s.next=o.next,o.next=d}e.baseQueue=s=o,a.pending=null}if(o=t.baseState,s===null)t.memoizedState=o;else{e=s.next;var p=d=null,b=null,S=e,R=!1;do{var M=S.lane&-536870913;if(M!==S.lane?(xt&M)===M:(ta&M)===M){var T=S.revertLane;if(T===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),M===yi&&(R=!0);else if((ta&T)===T){S=S.next,T===yi&&(R=!0);continue}else M={lane:0,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},b===null?(p=b=M,d=o):b=b.next=M,ft.lanes|=T,ua|=T;M=S.action,Ua&&l(o,M),o=S.hasEagerState?S.eagerState:l(o,M)}else T={lane:M,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},b===null?(p=b=T,d=o):b=b.next=T,ft.lanes|=M,ua|=M;S=S.next}while(S!==null&&S!==e);if(b===null?d=o:b.next=p,!Ve(o,t.memoizedState)&&(ge=!0,R&&(l=_i,l!==null)))throw l;t.memoizedState=o,t.baseState=d,t.baseQueue=b,a.lastRenderedState=o}return s===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Gr(t){var e=se(),l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=t;var a=l.dispatch,s=l.pending,o=e.memoizedState;if(s!==null){l.pending=null;var d=s=s.next;do o=t(o,d.action),d=d.next;while(d!==s);Ve(o,e.memoizedState)||(ge=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),l.lastRenderedState=o}return[o,a]}function kf(t,e,l){var a=ft,s=se(),o=At;if(o){if(l===void 0)throw Error(c(407));l=l()}else l=e();var d=!Ve((Ot||s).memoizedState,l);if(d&&(s.memoizedState=l,ge=!0),s=s.queue,Kr(Rf.bind(null,a,s,t),[t]),s.getSnapshot!==e||d||ne!==null&&ne.memoizedState.tag&1){if(a.flags|=2048,Si(9,Df.bind(null,a,s,l,e),{destroy:void 0},null),Ht===null)throw Error(c(349));o||ta&60||Of(a,e,l)}return l}function Of(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=ft.updateQueue,e===null?(e=Ps(),ft.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Df(t,e,l,a){e.value=l,e.getSnapshot=a,$f(e)&&Nf(t)}function Rf(t,e,l){return l(function(){$f(e)&&Nf(t)})}function $f(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!Ve(t,l)}catch{return!0}}function Nf(t){var e=Wl(t,2);e!==null&&$e(e,t,2)}function Qr(t){var e=Ue();if(typeof t=="function"){var l=t;if(t=l(),Ua){Kl(!0);try{l()}finally{Kl(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ul,lastRenderedState:t},e}function Mf(t,e,l,a){return t.baseState=l,Xr(t,Ot,typeof a=="function"?a:Ul)}function Dg(t,e,l,a,s){if(io(t))throw Error(c(485));if(t=e.action,t!==null){var o={payload:s,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){o.listeners.push(d)}};j.T!==null?l(!0):o.isTransition=!1,a(o),l=e.pending,l===null?(o.next=e.pending=o,Uf(e,o)):(o.next=l.next,e.pending=l.next=o)}}function Uf(t,e){var l=e.action,a=e.payload,s=t.state;if(e.isTransition){var o=j.T,d={};j.T=d;try{var p=l(s,a),b=j.S;b!==null&&b(d,p),Hf(t,e,p)}catch(S){Zr(t,e,S)}finally{j.T=o}}else try{o=l(s,a),Hf(t,e,o)}catch(S){Zr(t,e,S)}}function Hf(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Bf(t,e,a)},function(a){return Zr(t,e,a)}):Bf(t,e,l)}function Bf(t,e,l){e.status="fulfilled",e.value=l,Lf(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Uf(t,l)))}function Zr(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,Lf(e),e=e.next;while(e!==a)}t.action=null}function Lf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function jf(t,e){return e}function Vf(t,e){if(At){var l=Ht.formState;if(l!==null){t:{var a=ft;if(At){if(Se){e:{for(var s=Se,o=xl;s.nodeType!==8;){if(!o){s=null;break e}if(s=pl(s.nextSibling),s===null){s=null;break e}}o=s.data,s=o==="F!"||o==="F"?s:null}if(s){Se=pl(s.nextSibling),a=s.data==="F!";break t}}$a(a)}a=!1}a&&(e=l[0])}}return l=Ue(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jf,lastRenderedState:e},l.queue=a,l=nh.bind(null,ft,a),a.dispatch=l,a=Qr(!1),o=Pr.bind(null,ft,!1,a.queue),a=Ue(),s={state:e,dispatch:null,action:t,pending:null},a.queue=s,l=Dg.bind(null,ft,s,o,l),s.dispatch=l,a.memoizedState=t,[e,l,!1]}function qf(t){var e=se();return Yf(e,Ot,t)}function Yf(t,e,l){e=Xr(t,e,jf)[0],t=eo(Ul)[0],e=typeof e=="object"&&e!==null&&typeof e.then=="function"?Sn(e):e;var a=se(),s=a.queue,o=s.dispatch;return l!==a.memoizedState&&(ft.flags|=2048,Si(9,Rg.bind(null,s,l),{destroy:void 0},null)),[e,o,t]}function Rg(t,e){t.action=e}function Xf(t){var e=se(),l=Ot;if(l!==null)return Yf(e,l,t);se(),e=e.memoizedState,l=se();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function Si(t,e,l,a){return t={tag:t,create:e,inst:l,deps:a,next:null},e=ft.updateQueue,e===null&&(e=Ps(),ft.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function Gf(){return se().memoizedState}function lo(t,e,l,a){var s=Ue();ft.flags|=t,s.memoizedState=Si(1|e,l,{destroy:void 0},a===void 0?null:a)}function ao(t,e,l,a){var s=se();a=a===void 0?null:a;var o=s.memoizedState.inst;Ot!==null&&a!==null&&Br(a,Ot.memoizedState.deps)?s.memoizedState=Si(e,l,o,a):(ft.flags|=t,s.memoizedState=Si(1|e,l,o,a))}function Qf(t,e){lo(8390656,8,t,e)}function Kr(t,e){ao(2048,8,t,e)}function Zf(t,e){return ao(4,2,t,e)}function Kf(t,e){return ao(4,4,t,e)}function Ff(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Jf(t,e,l){l=l!=null?l.concat([t]):null,ao(4,4,Ff.bind(null,e,t),l)}function Fr(){}function Wf(t,e){var l=se();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&Br(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function If(t,e){var l=se();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&Br(e,a[1]))return a[0];if(a=t(),Ua){Kl(!0);try{t()}finally{Kl(!1)}}return l.memoizedState=[a,e],a}function Jr(t,e,l){return l===void 0||ta&1073741824?t.memoizedState=e:(t.memoizedState=l,t=tp(),ft.lanes|=t,ua|=t,l)}function Pf(t,e,l,a){return Ve(l,e)?l:vi.current!==null?(t=Jr(t,l,a),Ve(t,e)||(ge=!0),t):ta&42?(t=tp(),ft.lanes|=t,ua|=t,e):(ge=!0,t.memoizedState=l)}function th(t,e,l,a,s){var o=V.p;V.p=o!==0&&8>o?o:8;var d=j.T,p={};j.T=p,Pr(t,!1,e,l);try{var b=s(),S=j.S;if(S!==null&&S(p,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var R=Tg(b,a);zn(t,e,R,Ge(t))}else zn(t,e,a,Ge(t))}catch(M){zn(t,e,{then:function(){},status:"rejected",reason:M},Ge())}finally{V.p=o,j.T=d}}function $g(){}function Wr(t,e,l,a){if(t.tag!==5)throw Error(c(476));var s=eh(t).queue;th(t,s,e,vt,l===null?$g:function(){return lh(t),l(a)})}function eh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:vt,baseState:vt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ul,lastRenderedState:vt},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ul,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function lh(t){var e=eh(t).next.queue;zn(t,e,{},Ge())}function Ir(){return Te(Xn)}function ah(){return se().memoizedState}function ih(){return se().memoizedState}function Ng(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=Ge();t=ia(l);var a=na(e,t,l);a!==null&&($e(a,e,l),En(a,e,l)),e={cache:Mr()},t.payload=e;return}e=e.return}}function Mg(t,e,l){var a=Ge();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},io(t)?sh(e,l):(l=Tr(t,e,l,a),l!==null&&($e(l,t,a),oh(l,e,a)))}function nh(t,e,l){var a=Ge();zn(t,e,l,a)}function zn(t,e,l,a){var s={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(io(t))sh(e,s);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var d=e.lastRenderedState,p=o(d,l);if(s.hasEagerState=!0,s.eagerState=p,Ve(p,d))return Vs(t,e,s,0),Ht===null&&js(),!1}catch{}finally{}if(l=Tr(t,e,s,a),l!==null)return $e(l,t,a),oh(l,e,a),!0}return!1}function Pr(t,e,l,a){if(a={lane:2,revertLane:qc(),action:a,hasEagerState:!1,eagerState:null,next:null},io(t)){if(e)throw Error(c(479))}else e=Tr(t,l,a,2),e!==null&&$e(e,t,2)}function io(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function sh(t,e){xi=Ws=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function oh(t,e,l){if(l&4194176){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,bd(t,l)}}var Sl={readContext:Te,use:to,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useLayoutEffect:ie,useInsertionEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useSyncExternalStore:ie,useId:ie};Sl.useCacheRefresh=ie,Sl.useMemoCache=ie,Sl.useHostTransitionStatus=ie,Sl.useFormState=ie,Sl.useActionState=ie,Sl.useOptimistic=ie;var Ha={readContext:Te,use:to,useCallback:function(t,e){return Ue().memoizedState=[t,e===void 0?null:e],t},useContext:Te,useEffect:Qf,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,lo(4194308,4,Ff.bind(null,e,t),l)},useLayoutEffect:function(t,e){return lo(4194308,4,t,e)},useInsertionEffect:function(t,e){lo(4,2,t,e)},useMemo:function(t,e){var l=Ue();e=e===void 0?null:e;var a=t();if(Ua){Kl(!0);try{t()}finally{Kl(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=Ue();if(l!==void 0){var s=l(e);if(Ua){Kl(!0);try{l(e)}finally{Kl(!1)}}}else s=e;return a.memoizedState=a.baseState=s,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},a.queue=t,t=t.dispatch=Mg.bind(null,ft,t),[a.memoizedState,t]},useRef:function(t){var e=Ue();return t={current:t},e.memoizedState=t},useState:function(t){t=Qr(t);var e=t.queue,l=nh.bind(null,ft,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:Fr,useDeferredValue:function(t,e){var l=Ue();return Jr(l,t,e)},useTransition:function(){var t=Qr(!1);return t=th.bind(null,ft,t.queue,!0,!1),Ue().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=ft,s=Ue();if(At){if(l===void 0)throw Error(c(407));l=l()}else{if(l=e(),Ht===null)throw Error(c(349));xt&60||Of(a,e,l)}s.memoizedState=l;var o={value:l,getSnapshot:e};return s.queue=o,Qf(Rf.bind(null,a,o,t),[t]),a.flags|=2048,Si(9,Df.bind(null,a,o,l,e),{destroy:void 0},null),l},useId:function(){var t=Ue(),e=Ht.identifierPrefix;if(At){var l=Nl,a=$l;l=(a&~(1<<32-je(a)-1)).toString(32)+l,e=":"+e+"R"+l,l=Is++,0<l&&(e+="H"+l.toString(32)),e+=":"}else l=kg++,e=":"+e+"r"+l.toString(32)+":";return t.memoizedState=e},useCacheRefresh:function(){return Ue().memoizedState=Ng.bind(null,ft)}};Ha.useMemoCache=Yr,Ha.useHostTransitionStatus=Ir,Ha.useFormState=Vf,Ha.useActionState=Vf,Ha.useOptimistic=function(t){var e=Ue();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=Pr.bind(null,ft,!0,l),l.dispatch=e,[t,e]};var ea={readContext:Te,use:to,useCallback:Wf,useContext:Te,useEffect:Kr,useImperativeHandle:Jf,useInsertionEffect:Zf,useLayoutEffect:Kf,useMemo:If,useReducer:eo,useRef:Gf,useState:function(){return eo(Ul)},useDebugValue:Fr,useDeferredValue:function(t,e){var l=se();return Pf(l,Ot.memoizedState,t,e)},useTransition:function(){var t=eo(Ul)[0],e=se().memoizedState;return[typeof t=="boolean"?t:Sn(t),e]},useSyncExternalStore:kf,useId:ah};ea.useCacheRefresh=ih,ea.useMemoCache=Yr,ea.useHostTransitionStatus=Ir,ea.useFormState=qf,ea.useActionState=qf,ea.useOptimistic=function(t,e){var l=se();return Mf(l,Ot,t,e)};var Ba={readContext:Te,use:to,useCallback:Wf,useContext:Te,useEffect:Kr,useImperativeHandle:Jf,useInsertionEffect:Zf,useLayoutEffect:Kf,useMemo:If,useReducer:Gr,useRef:Gf,useState:function(){return Gr(Ul)},useDebugValue:Fr,useDeferredValue:function(t,e){var l=se();return Ot===null?Jr(l,t,e):Pf(l,Ot.memoizedState,t,e)},useTransition:function(){var t=Gr(Ul)[0],e=se().memoizedState;return[typeof t=="boolean"?t:Sn(t),e]},useSyncExternalStore:kf,useId:ah};Ba.useCacheRefresh=ih,Ba.useMemoCache=Yr,Ba.useHostTransitionStatus=Ir,Ba.useFormState=Xf,Ba.useActionState=Xf,Ba.useOptimistic=function(t,e){var l=se();return Ot!==null?Mf(l,Ot,t,e):(l.baseState=t,[t,l.queue.dispatch])};function tc(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:lt({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var ec={isMounted:function(t){return(t=t._reactInternals)?Q(t)===t:!1},enqueueSetState:function(t,e,l){t=t._reactInternals;var a=Ge(),s=ia(a);s.payload=e,l!=null&&(s.callback=l),e=na(t,s,a),e!==null&&($e(e,t,a),En(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=Ge(),s=ia(a);s.tag=1,s.payload=e,l!=null&&(s.callback=l),e=na(t,s,a),e!==null&&($e(e,t,a),En(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=Ge(),a=ia(l);a.tag=2,e!=null&&(a.callback=e),e=na(t,a,l),e!==null&&($e(e,t,l),En(e,t,l))}};function rh(t,e,l,a,s,o,d){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,o,d):e.prototype&&e.prototype.isPureReactComponent?!dn(l,a)||!dn(s,o):!0}function ch(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&ec.enqueueReplaceState(e,e.state,null)}function La(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=lt({},l));for(var s in t)l[s]===void 0&&(l[s]=t[s])}return l}var no=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function uh(t){no(t)}function dh(t){console.error(t)}function fh(t){no(t)}function so(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function hh(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function lc(t,e,l){return l=ia(l),l.tag=3,l.payload={element:null},l.callback=function(){so(t,e)},l}function ph(t){return t=ia(t),t.tag=3,t}function mh(t,e,l,a){var s=l.type.getDerivedStateFromError;if(typeof s=="function"){var o=a.value;t.payload=function(){return s(o)},t.callback=function(){hh(e,l,a)}}var d=l.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(t.callback=function(){hh(e,l,a),typeof s!="function"&&(da===null?da=new Set([this]):da.add(this));var p=a.stack;this.componentDidCatch(a.value,{componentStack:p!==null?p:""})})}function Ug(t,e,l,a,s){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&An(e,l,s,!0),l=il.current,l!==null){switch(l.tag){case 13:return wl===null?Hc():l.alternate===null&&Wt===0&&(Wt=3),l.flags&=-257,l.flags|=65536,l.lanes=s,a===Rr?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),Lc(t,a,s)),!1;case 22:return l.flags|=65536,a===Rr?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),Lc(t,a,s)),!1}throw Error(c(435,l.tag))}return Lc(t,a,s),Hc(),!1}if(At)return e=il.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=s,a!==Dr&&(t=Error(c(422),{cause:a}),mn(el(t,l)))):(a!==Dr&&(e=Error(c(423),{cause:a}),mn(el(e,l))),t=t.current.alternate,t.flags|=65536,s&=-s,t.lanes|=s,a=el(a,l),s=lc(t.stateNode,a,s),bc(t,s),Wt!==4&&(Wt=2)),!1;var o=Error(c(520),{cause:a});if(o=el(o,l),Mn===null?Mn=[o]:Mn.push(o),Wt!==4&&(Wt=2),e===null)return!0;a=el(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=s&-s,l.lanes|=t,t=lc(l.stateNode,a,t),bc(l,t),!1;case 1:if(e=l.type,o=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(da===null||!da.has(o))))return l.flags|=65536,s&=-s,l.lanes|=s,s=ph(s),mh(s,t,l,a),bc(l,s),!1}l=l.return}while(l!==null);return!1}var gh=Error(c(461)),ge=!1;function ze(t,e,l,a){e.child=t===null?xf(e,null,l,a):Na(e,t.child,l,a)}function bh(t,e,l,a,s){l=l.render;var o=e.ref;if("ref"in a){var d={};for(var p in a)p!=="ref"&&(d[p]=a[p])}else d=a;return Va(e),a=Lr(t,e,l,d,o,s),p=jr(),t!==null&&!ge?(Vr(t,e,s),Hl(t,e,s)):(At&&p&&kr(e),e.flags|=1,ze(t,e,a,s),e.child)}function vh(t,e,l,a,s){if(t===null){var o=l.type;return typeof o=="function"&&!Cc(o)&&o.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=o,yh(t,e,o,a,s)):(t=fo(l.type,null,a,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!dc(t,s)){var d=o.memoizedProps;if(l=l.compare,l=l!==null?l:dn,l(d,a)&&t.ref===e.ref)return Hl(t,e,s)}return e.flags|=1,t=ca(o,a),t.ref=e.ref,t.return=e,e.child=t}function yh(t,e,l,a,s){if(t!==null){var o=t.memoizedProps;if(dn(o,a)&&t.ref===e.ref)if(ge=!1,e.pendingProps=a=o,dc(t,s))t.flags&131072&&(ge=!0);else return e.lanes=t.lanes,Hl(t,e,s)}return ac(t,e,l,a,s)}function _h(t,e,l){var a=e.pendingProps,s=a.children,o=(e.stateNode._pendingVisibility&2)!==0,d=t!==null?t.memoizedState:null;if(Cn(t,e),a.mode==="hidden"||o){if(e.flags&128){if(a=d!==null?d.baseLanes|l:l,t!==null){for(s=e.child=t.child,o=0;s!==null;)o=o|s.lanes|s.childLanes,s=s.sibling;e.childLanes=o&~a}else e.childLanes=0,e.child=null;return xh(t,e,a,l)}if(l&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Js(e,d!==null?d.cachePool:null),d!==null?wf(e,d):$r(),Sf(e);else return e.lanes=e.childLanes=536870912,xh(t,e,d!==null?d.baseLanes|l:l,l)}else d!==null?(Js(e,d.cachePool),wf(e,d),Pl(),e.memoizedState=null):(t!==null&&Js(e,null),$r(),Pl());return ze(t,e,s,l),e.child}function xh(t,e,l,a){var s=Hr();return s=s===null?null:{parent:de._currentValue,pool:s},e.memoizedState={baseLanes:l,cachePool:s},t!==null&&Js(e,null),$r(),Sf(e),t!==null&&An(t,e,a,!0),null}function Cn(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=2097664);else{if(typeof l!="function"&&typeof l!="object")throw Error(c(284));(t===null||t.ref!==l)&&(e.flags|=2097664)}}function ac(t,e,l,a,s){return Va(e),l=Lr(t,e,l,a,void 0,s),a=jr(),t!==null&&!ge?(Vr(t,e,s),Hl(t,e,s)):(At&&a&&kr(e),e.flags|=1,ze(t,e,l,s),e.child)}function wh(t,e,l,a,s,o){return Va(e),e.updateQueue=null,l=Tf(e,a,l,s),Ef(t),a=jr(),t!==null&&!ge?(Vr(t,e,o),Hl(t,e,o)):(At&&a&&kr(e),e.flags|=1,ze(t,e,l,o),e.child)}function Sh(t,e,l,a,s){if(Va(e),e.stateNode===null){var o=pi,d=l.contextType;typeof d=="object"&&d!==null&&(o=Te(d)),o=new l(a,o),e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=ec,e.stateNode=o,o._reactInternals=e,o=e.stateNode,o.props=a,o.state=e.memoizedState,o.refs={},mc(e),d=l.contextType,o.context=typeof d=="object"&&d!==null?Te(d):pi,o.state=e.memoizedState,d=l.getDerivedStateFromProps,typeof d=="function"&&(tc(e,l,d,a),o.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(d=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),d!==o.state&&ec.enqueueReplaceState(o,o.state,null),kn(e,a,o,s),Tn(),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){o=e.stateNode;var p=e.memoizedProps,b=La(l,p);o.props=b;var S=o.context,R=l.contextType;d=pi,typeof R=="object"&&R!==null&&(d=Te(R));var M=l.getDerivedStateFromProps;R=typeof M=="function"||typeof o.getSnapshotBeforeUpdate=="function",p=e.pendingProps!==p,R||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(p||S!==d)&&ch(e,o,a,d),aa=!1;var T=e.memoizedState;o.state=T,kn(e,a,o,s),Tn(),S=e.memoizedState,p||T!==S||aa?(typeof M=="function"&&(tc(e,l,M,a),S=e.memoizedState),(b=aa||rh(e,l,b,a,T,S,d))?(R||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=S),o.props=a,o.state=S,o.context=d,a=b):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{o=e.stateNode,gc(t,e),d=e.memoizedProps,R=La(l,d),o.props=R,M=e.pendingProps,T=o.context,S=l.contextType,b=pi,typeof S=="object"&&S!==null&&(b=Te(S)),p=l.getDerivedStateFromProps,(S=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(d!==M||T!==b)&&ch(e,o,a,b),aa=!1,T=e.memoizedState,o.state=T,kn(e,a,o,s),Tn();var D=e.memoizedState;d!==M||T!==D||aa||t!==null&&t.dependencies!==null&&oo(t.dependencies)?(typeof p=="function"&&(tc(e,l,p,a),D=e.memoizedState),(R=aa||rh(e,l,R,a,T,D,b)||t!==null&&t.dependencies!==null&&oo(t.dependencies))?(S||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,D,b),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,D,b)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||d===t.memoizedProps&&T===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===t.memoizedProps&&T===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=D),o.props=a,o.state=D,o.context=b,a=R):(typeof o.componentDidUpdate!="function"||d===t.memoizedProps&&T===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===t.memoizedProps&&T===t.memoizedState||(e.flags|=1024),a=!1)}return o=a,Cn(t,e),a=(e.flags&128)!==0,o||a?(o=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:o.render(),e.flags|=1,t!==null&&a?(e.child=Na(e,t.child,null,s),e.child=Na(e,null,l,s)):ze(t,e,l,s),e.memoizedState=o.state,t=e.child):t=Hl(t,e,s),t}function zh(t,e,l,a){return pn(),e.flags|=256,ze(t,e,l,a),e.child}var ic={dehydrated:null,treeContext:null,retryLane:0};function nc(t){return{baseLanes:t,cachePool:Af()}}function sc(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=rl),t}function Ch(t,e,l){var a=e.pendingProps,s=!1,o=(e.flags&128)!==0,d;if((d=o)||(d=t!==null&&t.memoizedState===null?!1:(ue.current&2)!==0),d&&(s=!0,e.flags&=-129),d=(e.flags&32)!==0,e.flags&=-33,t===null){if(At){if(s?Il(e):Pl(),At){var p=Se,b;if(b=p){t:{for(b=p,p=xl;b.nodeType!==8;){if(!p){p=null;break t}if(b=pl(b.nextSibling),b===null){p=null;break t}}p=b}p!==null?(e.memoizedState={dehydrated:p,treeContext:Da!==null?{id:$l,overflow:Nl}:null,retryLane:536870912},b=ol(18,null,null,0),b.stateNode=p,b.return=e,e.child=b,Re=e,Se=null,b=!0):b=!1}b||$a(e)}if(p=e.memoizedState,p!==null&&(p=p.dehydrated,p!==null))return p.data==="$!"?e.lanes=16:e.lanes=536870912,null;Ml(e)}return p=a.children,a=a.fallback,s?(Pl(),s=e.mode,p=rc({mode:"hidden",children:p},s),a=Ya(a,s,l,null),p.return=e,a.return=e,p.sibling=a,e.child=p,s=e.child,s.memoizedState=nc(l),s.childLanes=sc(t,d,l),e.memoizedState=ic,a):(Il(e),oc(e,p))}if(b=t.memoizedState,b!==null&&(p=b.dehydrated,p!==null)){if(o)e.flags&256?(Il(e),e.flags&=-257,e=cc(t,e,l)):e.memoizedState!==null?(Pl(),e.child=t.child,e.flags|=128,e=null):(Pl(),s=a.fallback,p=e.mode,a=rc({mode:"visible",children:a.children},p),s=Ya(s,p,l,null),s.flags|=2,a.return=e,s.return=e,a.sibling=s,e.child=a,Na(e,t.child,null,l),a=e.child,a.memoizedState=nc(l),a.childLanes=sc(t,d,l),e.memoizedState=ic,e=s);else if(Il(e),p.data==="$!"){if(d=p.nextSibling&&p.nextSibling.dataset,d)var S=d.dgst;d=S,a=Error(c(419)),a.stack="",a.digest=d,mn({value:a,source:null,stack:null}),e=cc(t,e,l)}else if(ge||An(t,e,l,!1),d=(l&t.childLanes)!==0,ge||d){if(d=Ht,d!==null){if(a=l&-l,a&42)a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(a=a&(d.suspendedLanes|l)?0:a,a!==0&&a!==b.retryLane)throw b.retryLane=a,Wl(t,a),$e(d,t,a),gh}p.data==="$?"||Hc(),e=cc(t,e,l)}else p.data==="$?"?(e.flags|=128,e.child=t.child,e=Wg.bind(null,t),p._reactRetry=e,e=null):(t=b.treeContext,Se=pl(p.nextSibling),Re=e,At=!0,fl=null,xl=!1,t!==null&&(ll[al++]=$l,ll[al++]=Nl,ll[al++]=Da,$l=t.id,Nl=t.overflow,Da=e),e=oc(e,a.children),e.flags|=4096);return e}return s?(Pl(),s=a.fallback,p=e.mode,b=t.child,S=b.sibling,a=ca(b,{mode:"hidden",children:a.children}),a.subtreeFlags=b.subtreeFlags&31457280,S!==null?s=ca(S,s):(s=Ya(s,p,l,null),s.flags|=2),s.return=e,a.return=e,a.sibling=s,e.child=a,a=s,s=e.child,p=t.child.memoizedState,p===null?p=nc(l):(b=p.cachePool,b!==null?(S=de._currentValue,b=b.parent!==S?{parent:S,pool:S}:b):b=Af(),p={baseLanes:p.baseLanes|l,cachePool:b}),s.memoizedState=p,s.childLanes=sc(t,d,l),e.memoizedState=ic,a):(Il(e),l=t.child,t=l.sibling,l=ca(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(d=e.deletions,d===null?(e.deletions=[t],e.flags|=16):d.push(t)),e.child=l,e.memoizedState=null,l)}function oc(t,e){return e=rc({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function rc(t,e){return Wh(t,e,0,null)}function cc(t,e,l){return Na(e,t.child,null,l),t=oc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ah(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),hc(t.return,e,l)}function uc(t,e,l,a,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=l,o.tailMode=s)}function Eh(t,e,l){var a=e.pendingProps,s=a.revealOrder,o=a.tail;if(ze(t,e,a.children,l),a=ue.current,a&2)a=a&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ah(t,l,e);else if(t.tag===19)Ah(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(Ut(ue,a),s){case"forwards":for(l=e.child,s=null;l!==null;)t=l.alternate,t!==null&&Fs(t)===null&&(s=l),l=l.sibling;l=s,l===null?(s=e.child,e.child=null):(s=l.sibling,l.sibling=null),uc(e,!1,s,l,o);break;case"backwards":for(l=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Fs(t)===null){e.child=s;break}t=s.sibling,s.sibling=l,l=s,s=t}uc(e,!0,l,null,o);break;case"together":uc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Hl(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),ua|=e.lanes,!(l&e.childLanes))if(t!==null){if(An(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(c(153));if(e.child!==null){for(t=e.child,l=ca(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=ca(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function dc(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&oo(t)))}function Hg(t,e,l){switch(e.tag){case 3:Ss(e,e.stateNode.containerInfo),la(e,de,t.memoizedState.cache),pn();break;case 27:case 5:er(e);break;case 4:Ss(e,e.stateNode.containerInfo);break;case 10:la(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(Il(e),e.flags|=128,null):l&e.child.childLanes?Ch(t,e,l):(Il(e),t=Hl(t,e,l),t!==null?t.sibling:null);Il(e);break;case 19:var s=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(An(t,e,l,!1),a=(l&e.childLanes)!==0),s){if(a)return Eh(t,e,l);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ut(ue,ue.current),a)break;return null;case 22:case 23:return e.lanes=0,_h(t,e,l);case 24:la(e,de,t.memoizedState.cache)}return Hl(t,e,l)}function Th(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)ge=!0;else{if(!dc(t,l)&&!(e.flags&128))return ge=!1,Hg(t,e,l);ge=!!(t.flags&131072)}else ge=!1,At&&e.flags&1048576&&ff(e,Xs,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,s=a._init;if(a=s(a._payload),e.type=a,typeof a=="function")Cc(a)?(t=La(a,t),e.tag=1,e=Sh(null,e,a,t,l)):(e.tag=0,e=ac(null,e,a,t,l));else{if(a!=null){if(s=a.$$typeof,s===U){e.tag=11,e=bh(null,e,a,t,l);break t}else if(s===K){e.tag=14,e=vh(null,e,a,t,l);break t}}throw e=st(a)||a,Error(c(306,e,""))}}return e;case 0:return ac(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,s=La(a,e.pendingProps),Sh(t,e,a,s,l);case 3:t:{if(Ss(e,e.stateNode.containerInfo),t===null)throw Error(c(387));var o=e.pendingProps;s=e.memoizedState,a=s.element,gc(t,e),kn(e,o,null,l);var d=e.memoizedState;if(o=d.cache,la(e,de,o),o!==s.cache&&pc(e,[de],l,!0),Tn(),o=d.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:d.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=zh(t,e,o,l);break t}else if(o!==a){a=el(Error(c(424)),e),mn(a),e=zh(t,e,o,l);break t}else for(Se=pl(e.stateNode.containerInfo.firstChild),Re=e,At=!0,fl=null,xl=!0,l=xf(e,null,o,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(pn(),o===a){e=Hl(t,e,l);break t}ze(t,e,o,l)}e=e.child}return e;case 26:return Cn(t,e),t===null?(l=Dp(e.type,null,e.pendingProps,null))?e.memoizedState=l:At||(l=e.type,t=e.pendingProps,a=zo(ct.current).createElement(l),a[Ee]=e,a[Ne]=t,Ce(a,l,t),me(a),e.stateNode=a):e.memoizedState=Dp(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return er(e),t===null&&At&&(a=e.stateNode=Tp(e.type,e.pendingProps,ct.current),Re=e,xl=!0,Se=pl(a.firstChild)),a=e.pendingProps.children,t!==null||At?ze(t,e,a,l):e.child=Na(e,null,a,l),Cn(t,e),e.child;case 5:return t===null&&At&&((s=a=Se)&&(a=hb(a,e.type,e.pendingProps,xl),a!==null?(e.stateNode=a,Re=e,Se=pl(a.firstChild),xl=!1,s=!0):s=!1),s||$a(e)),er(e),s=e.type,o=e.pendingProps,d=t!==null?t.memoizedProps:null,a=o.children,Wc(s,o)?a=null:d!==null&&Wc(s,d)&&(e.flags|=32),e.memoizedState!==null&&(s=Lr(t,e,Og,null,null,l),Xn._currentValue=s),Cn(t,e),ze(t,e,a,l),e.child;case 6:return t===null&&At&&((t=l=Se)&&(l=pb(l,e.pendingProps,xl),l!==null?(e.stateNode=l,Re=e,Se=null,t=!0):t=!1),t||$a(e)),null;case 13:return Ch(t,e,l);case 4:return Ss(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Na(e,null,a,l):ze(t,e,a,l),e.child;case 11:return bh(t,e,e.type,e.pendingProps,l);case 7:return ze(t,e,e.pendingProps,l),e.child;case 8:return ze(t,e,e.pendingProps.children,l),e.child;case 12:return ze(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,la(e,e.type,a.value),ze(t,e,a.children,l),e.child;case 9:return s=e.type._context,a=e.pendingProps.children,Va(e),s=Te(s),a=a(s),e.flags|=1,ze(t,e,a,l),e.child;case 14:return vh(t,e,e.type,e.pendingProps,l);case 15:return yh(t,e,e.type,e.pendingProps,l);case 19:return Eh(t,e,l);case 22:return _h(t,e,l);case 24:return Va(e),a=Te(de),t===null?(s=Hr(),s===null&&(s=Ht,o=Mr(),s.pooledCache=o,o.refCount++,o!==null&&(s.pooledCacheLanes|=l),s=o),e.memoizedState={parent:a,cache:s},mc(e),la(e,de,s)):(t.lanes&l&&(gc(t,e),kn(e,null,null,l),Tn()),s=t.memoizedState,o=e.memoizedState,s.parent!==a?(s={parent:a,cache:a},e.memoizedState=s,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=s),la(e,de,a)):(a=o.cache,la(e,de,a),a!==s.cache&&pc(e,[de],l,!0))),ze(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(c(156,e.tag))}var fc=Ct(null),ja=null,Bl=null;function la(t,e,l){Ut(fc,e._currentValue),e._currentValue=l}function Ll(t){t._currentValue=fc.current,Ft(fc)}function hc(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function pc(t,e,l,a){var s=t.child;for(s!==null&&(s.return=t);s!==null;){var o=s.dependencies;if(o!==null){var d=s.child;o=o.firstContext;t:for(;o!==null;){var p=o;o=s;for(var b=0;b<e.length;b++)if(p.context===e[b]){o.lanes|=l,p=o.alternate,p!==null&&(p.lanes|=l),hc(o.return,l,t),a||(d=null);break t}o=p.next}}else if(s.tag===18){if(d=s.return,d===null)throw Error(c(341));d.lanes|=l,o=d.alternate,o!==null&&(o.lanes|=l),hc(d,l,t),d=null}else d=s.child;if(d!==null)d.return=s;else for(d=s;d!==null;){if(d===t){d=null;break}if(s=d.sibling,s!==null){s.return=d.return,d=s;break}d=d.return}s=d}}function An(t,e,l,a){t=null;for(var s=e,o=!1;s!==null;){if(!o){if(s.flags&524288)o=!0;else if(s.flags&262144)break}if(s.tag===10){var d=s.alternate;if(d===null)throw Error(c(387));if(d=d.memoizedProps,d!==null){var p=s.type;Ve(s.pendingProps.value,d.value)||(t!==null?t.push(p):t=[p])}}else if(s===yl.current){if(d=s.alternate,d===null)throw Error(c(387));d.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(t!==null?t.push(Xn):t=[Xn])}s=s.return}t!==null&&pc(e,t,l,a),e.flags|=262144}function oo(t){for(t=t.firstContext;t!==null;){if(!Ve(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Va(t){ja=t,Bl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Te(t){return kh(ja,t)}function ro(t,e){return ja===null&&Va(t),kh(t,e)}function kh(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},Bl===null){if(t===null)throw Error(c(308));Bl=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Bl=Bl.next=e;return l}var aa=!1;function mc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ia(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function na(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,Kt&2){var s=a.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),a.pending=e,e=qs(t),uf(t,null,l),e}return Vs(t,a,e,l),qs(t)}function En(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194176)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,bd(t,l)}}function bc(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var s=null,o=null;if(l=l.firstBaseUpdate,l!==null){do{var d={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};o===null?s=o=d:o=o.next=d,l=l.next}while(l!==null);o===null?s=o=e:o=o.next=e}else s=o=e;l={baseState:a.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var vc=!1;function Tn(){if(vc){var t=_i;if(t!==null)throw t}}function kn(t,e,l,a){vc=!1;var s=t.updateQueue;aa=!1;var o=s.firstBaseUpdate,d=s.lastBaseUpdate,p=s.shared.pending;if(p!==null){s.shared.pending=null;var b=p,S=b.next;b.next=null,d===null?o=S:d.next=S,d=b;var R=t.alternate;R!==null&&(R=R.updateQueue,p=R.lastBaseUpdate,p!==d&&(p===null?R.firstBaseUpdate=S:p.next=S,R.lastBaseUpdate=b))}if(o!==null){var M=s.baseState;d=0,R=S=b=null,p=o;do{var T=p.lane&-536870913,D=T!==p.lane;if(D?(xt&T)===T:(a&T)===T){T!==0&&T===yi&&(vc=!0),R!==null&&(R=R.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});t:{var Z=t,nt=p;T=e;var It=l;switch(nt.tag){case 1:if(Z=nt.payload,typeof Z=="function"){M=Z.call(It,M,T);break t}M=Z;break t;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=nt.payload,T=typeof Z=="function"?Z.call(It,M,T):Z,T==null)break t;M=lt({},M,T);break t;case 2:aa=!0}}T=p.callback,T!==null&&(t.flags|=64,D&&(t.flags|=8192),D=s.callbacks,D===null?s.callbacks=[T]:D.push(T))}else D={lane:T,tag:p.tag,payload:p.payload,callback:p.callback,next:null},R===null?(S=R=D,b=M):R=R.next=D,d|=T;if(p=p.next,p===null){if(p=s.shared.pending,p===null)break;D=p,p=D.next,D.next=null,s.lastBaseUpdate=D,s.shared.pending=null}}while(!0);R===null&&(b=M),s.baseState=b,s.firstBaseUpdate=S,s.lastBaseUpdate=R,o===null&&(s.shared.lanes=0),ua|=d,t.lanes=d,t.memoizedState=M}}function Oh(t,e){if(typeof t!="function")throw Error(c(191,t));t.call(e)}function Dh(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Oh(l[t],e)}function On(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var s=a.next;l=s;do{if((l.tag&t)===t){a=void 0;var o=l.create,d=l.inst;a=o(),d.destroy=a}l=l.next}while(l!==s)}}catch(p){Nt(e,e.return,p)}}function sa(t,e,l){try{var a=e.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var o=s.next;a=o;do{if((a.tag&t)===t){var d=a.inst,p=d.destroy;if(p!==void 0){d.destroy=void 0,s=e;var b=l;try{p()}catch(S){Nt(s,b,S)}}}a=a.next}while(a!==o)}}catch(S){Nt(e,e.return,S)}}function Rh(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Dh(e,l)}catch(a){Nt(t,t.return,a)}}}function $h(t,e,l){l.props=La(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){Nt(t,e,a)}}function qa(t,e){try{var l=t.ref;if(l!==null){var a=t.stateNode;switch(t.tag){case 26:case 27:case 5:var s=a;break;default:s=a}typeof l=="function"?t.refCleanup=l(s):l.current=s}}catch(o){Nt(t,e,o)}}function qe(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(s){Nt(t,e,s)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(s){Nt(t,e,s)}else l.current=null}function Nh(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(s){Nt(t,t.return,s)}}function Mh(t,e,l){try{var a=t.stateNode;rb(a,t.type,l,e),a[Ne]=e}catch(s){Nt(t,t.return,s)}}function Uh(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function yc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Uh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _c(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.nodeType===8?l.parentNode.insertBefore(t,e):l.insertBefore(t,e):(l.nodeType===8?(e=l.parentNode,e.insertBefore(t,l)):(e=l,e.appendChild(t)),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=So));else if(a!==4&&a!==27&&(t=t.child,t!==null))for(_c(t,e,l),t=t.sibling;t!==null;)_c(t,e,l),t=t.sibling}function co(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&a!==27&&(t=t.child,t!==null))for(co(t,e,l),t=t.sibling;t!==null;)co(t,e,l),t=t.sibling}var jl=!1,Jt=!1,xc=!1,Hh=typeof WeakSet=="function"?WeakSet:Set,be=null,Bh=!1;function Bg(t,e){if(t=t.containerInfo,Fc=Oo,t=tf(t),Sr(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var s=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{l.nodeType,o.nodeType}catch{l=null;break t}var d=0,p=-1,b=-1,S=0,R=0,M=t,T=null;e:for(;;){for(var D;M!==l||s!==0&&M.nodeType!==3||(p=d+s),M!==o||a!==0&&M.nodeType!==3||(b=d+a),M.nodeType===3&&(d+=M.nodeValue.length),(D=M.firstChild)!==null;)T=M,M=D;for(;;){if(M===t)break e;if(T===l&&++S===s&&(p=d),T===o&&++R===a&&(b=d),(D=M.nextSibling)!==null)break;M=T,T=M.parentNode}M=D}l=p===-1||b===-1?null:{start:p,end:b}}else l=null}l=l||{start:0,end:0}}else l=null;for(Jc={focusedElem:t,selectionRange:l},Oo=!1,be=e;be!==null;)if(e=be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,be=t;else for(;be!==null;){switch(e=be,o=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&o!==null){t=void 0,l=e,s=o.memoizedProps,o=o.memoizedState,a=l.stateNode;try{var Z=La(l.type,s,l.elementType===l.type);t=a.getSnapshotBeforeUpdate(Z,o),a.__reactInternalSnapshotBeforeUpdate=t}catch(nt){Nt(l,l.return,nt)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)tu(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":tu(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(c(163))}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}return Z=Bh,Bh=!1,Z}function Lh(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:ql(t,l),a&4&&On(5,l);break;case 1:if(ql(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(p){Nt(l,l.return,p)}else{var s=La(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(s,e,t.__reactInternalSnapshotBeforeUpdate)}catch(p){Nt(l,l.return,p)}}a&64&&Rh(l),a&512&&qa(l,l.return);break;case 3:if(ql(t,l),a&64&&(a=l.updateQueue,a!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Dh(a,t)}catch(p){Nt(l,l.return,p)}}break;case 26:ql(t,l),a&512&&qa(l,l.return);break;case 27:case 5:ql(t,l),e===null&&a&4&&Nh(l),a&512&&qa(l,l.return);break;case 12:ql(t,l);break;case 13:ql(t,l),a&4&&qh(t,l);break;case 22:if(s=l.memoizedState!==null||jl,!s){e=e!==null&&e.memoizedState!==null||Jt;var o=jl,d=Jt;jl=s,(Jt=e)&&!d?oa(t,l,(l.subtreeFlags&8772)!==0):ql(t,l),jl=o,Jt=d}a&512&&(l.memoizedProps.mode==="manual"?qa(l,l.return):qe(l,l.return));break;default:ql(t,l)}}function jh(t){var e=t.alternate;e!==null&&(t.alternate=null,jh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&or(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var oe=null,Ye=!1;function Vl(t,e,l){for(l=l.child;l!==null;)Vh(t,e,l),l=l.sibling}function Vh(t,e,l){if(Le&&typeof Le.onCommitFiberUnmount=="function")try{Le.onCommitFiberUnmount(Ii,l)}catch{}switch(l.tag){case 26:Jt||qe(l,e),Vl(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Jt||qe(l,e);var a=oe,s=Ye;for(oe=l.stateNode,Vl(t,e,l),l=l.stateNode,e=l.attributes;e.length;)l.removeAttributeNode(e[0]);or(l),oe=a,Ye=s;break;case 5:Jt||qe(l,e);case 6:s=oe;var o=Ye;if(oe=null,Vl(t,e,l),oe=s,Ye=o,oe!==null)if(Ye)try{t=oe,a=l.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)}catch(d){Nt(l,e,d)}else try{oe.removeChild(l.stateNode)}catch(d){Nt(l,e,d)}break;case 18:oe!==null&&(Ye?(e=oe,l=l.stateNode,e.nodeType===8?Pc(e.parentNode,l):e.nodeType===1&&Pc(e,l),Kn(e)):Pc(oe,l.stateNode));break;case 4:a=oe,s=Ye,oe=l.stateNode.containerInfo,Ye=!0,Vl(t,e,l),oe=a,Ye=s;break;case 0:case 11:case 14:case 15:Jt||sa(2,l,e),Jt||sa(4,l,e),Vl(t,e,l);break;case 1:Jt||(qe(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&$h(l,e,a)),Vl(t,e,l);break;case 21:Vl(t,e,l);break;case 22:Jt||qe(l,e),Jt=(a=Jt)||l.memoizedState!==null,Vl(t,e,l),Jt=a;break;default:Vl(t,e,l)}}function qh(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Kn(t)}catch(l){Nt(e,e.return,l)}}function Lg(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Hh),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Hh),e;default:throw Error(c(435,t.tag))}}function wc(t,e){var l=Lg(t);e.forEach(function(a){var s=Ig.bind(null,t,a);l.has(a)||(l.add(a),a.then(s,s))})}function nl(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var s=l[a],o=t,d=e,p=d;t:for(;p!==null;){switch(p.tag){case 27:case 5:oe=p.stateNode,Ye=!1;break t;case 3:oe=p.stateNode.containerInfo,Ye=!0;break t;case 4:oe=p.stateNode.containerInfo,Ye=!0;break t}p=p.return}if(oe===null)throw Error(c(160));Vh(o,d,s),oe=null,Ye=!1,o=s.alternate,o!==null&&(o.return=null),s.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Yh(e,t),e=e.sibling}var hl=null;function Yh(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:nl(e,t),sl(t),a&4&&(sa(3,t,t.return),On(3,t),sa(5,t,t.return));break;case 1:nl(e,t),sl(t),a&512&&(Jt||l===null||qe(l,l.return)),a&64&&jl&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var s=hl;if(nl(e,t),sl(t),a&512&&(Jt||l===null||qe(l,l.return)),a&4){var o=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,s=s.ownerDocument||s;e:switch(a){case"title":o=s.getElementsByTagName("title")[0],(!o||o[en]||o[Ee]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=s.createElement(a),s.head.insertBefore(o,s.querySelector("head > title"))),Ce(o,a,l),o[Ee]=t,me(o),a=o;break t;case"link":var d=Np("link","href",s).get(a+(l.href||""));if(d){for(var p=0;p<d.length;p++)if(o=d[p],o.getAttribute("href")===(l.href==null?null:l.href)&&o.getAttribute("rel")===(l.rel==null?null:l.rel)&&o.getAttribute("title")===(l.title==null?null:l.title)&&o.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){d.splice(p,1);break e}}o=s.createElement(a),Ce(o,a,l),s.head.appendChild(o);break;case"meta":if(d=Np("meta","content",s).get(a+(l.content||""))){for(p=0;p<d.length;p++)if(o=d[p],o.getAttribute("content")===(l.content==null?null:""+l.content)&&o.getAttribute("name")===(l.name==null?null:l.name)&&o.getAttribute("property")===(l.property==null?null:l.property)&&o.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&o.getAttribute("charset")===(l.charSet==null?null:l.charSet)){d.splice(p,1);break e}}o=s.createElement(a),Ce(o,a,l),s.head.appendChild(o);break;default:throw Error(c(468,a))}o[Ee]=t,me(o),a=o}t.stateNode=a}else Mp(s,t.type,t.stateNode);else t.stateNode=$p(s,a,t.memoizedProps);else o!==a?(o===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):o.count--,a===null?Mp(s,t.type,t.stateNode):$p(s,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Mh(t,t.memoizedProps,l.memoizedProps)}break;case 27:if(a&4&&t.alternate===null){s=t.stateNode,o=t.memoizedProps;try{for(var b=s.firstChild;b;){var S=b.nextSibling,R=b.nodeName;b[en]||R==="HEAD"||R==="BODY"||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&b.rel.toLowerCase()==="stylesheet"||s.removeChild(b),b=S}for(var M=t.type,T=s.attributes;T.length;)s.removeAttributeNode(T[0]);Ce(s,M,o),s[Ee]=t,s[Ne]=o}catch(Z){Nt(t,t.return,Z)}}case 5:if(nl(e,t),sl(t),a&512&&(Jt||l===null||qe(l,l.return)),t.flags&32){s=t.stateNode;try{oi(s,"")}catch(Z){Nt(t,t.return,Z)}}a&4&&t.stateNode!=null&&(s=t.memoizedProps,Mh(t,s,l!==null?l.memoizedProps:s)),a&1024&&(xc=!0);break;case 6:if(nl(e,t),sl(t),a&4){if(t.stateNode===null)throw Error(c(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(Z){Nt(t,t.return,Z)}}break;case 3:if(Eo=null,s=hl,hl=Co(e.containerInfo),nl(e,t),hl=s,sl(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Kn(e.containerInfo)}catch(Z){Nt(t,t.return,Z)}xc&&(xc=!1,Xh(t));break;case 4:a=hl,hl=Co(t.stateNode.containerInfo),nl(e,t),sl(t),hl=a;break;case 12:nl(e,t),sl(t);break;case 13:nl(e,t),sl(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Dc=_l()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,wc(t,a)));break;case 22:if(a&512&&(Jt||l===null||qe(l,l.return)),b=t.memoizedState!==null,S=l!==null&&l.memoizedState!==null,R=jl,M=Jt,jl=R||b,Jt=M||S,nl(e,t),Jt=M,jl=R,sl(t),e=t.stateNode,e._current=t,e._visibility&=-3,e._visibility|=e._pendingVisibility&2,a&8192&&(e._visibility=b?e._visibility&-2:e._visibility|1,b&&(e=jl||Jt,l===null||S||e||zi(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(l=null,e=t;;){if(e.tag===5||e.tag===26||e.tag===27){if(l===null){S=l=e;try{if(s=S.stateNode,b)o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{d=S.stateNode,p=S.memoizedProps.style;var D=p!=null&&p.hasOwnProperty("display")?p.display:null;d.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(Z){Nt(S,S.return,Z)}}}else if(e.tag===6){if(l===null){S=e;try{S.stateNode.nodeValue=b?"":S.memoizedProps}catch(Z){Nt(S,S.return,Z)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,wc(t,l))));break;case 19:nl(e,t),sl(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,wc(t,a)));break;case 21:break;default:nl(e,t),sl(t)}}function sl(t){var e=t.flags;if(e&2){try{if(t.tag!==27){t:{for(var l=t.return;l!==null;){if(Uh(l)){var a=l;break t}l=l.return}throw Error(c(160))}switch(a.tag){case 27:var s=a.stateNode,o=yc(t);co(t,o,s);break;case 5:var d=a.stateNode;a.flags&32&&(oi(d,""),a.flags&=-33);var p=yc(t);co(t,p,d);break;case 3:case 4:var b=a.stateNode.containerInfo,S=yc(t);_c(t,S,b);break;default:throw Error(c(161))}}}catch(R){Nt(t,t.return,R)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Xh(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Xh(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ql(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Lh(t,e.alternate,e),e=e.sibling}function zi(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:sa(4,e,e.return),zi(e);break;case 1:qe(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&$h(e,e.return,l),zi(e);break;case 26:case 27:case 5:qe(e,e.return),zi(e);break;case 22:qe(e,e.return),e.memoizedState===null&&zi(e);break;default:zi(e)}t=t.sibling}}function oa(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,s=t,o=e,d=o.flags;switch(o.tag){case 0:case 11:case 15:oa(s,o,l),On(4,o);break;case 1:if(oa(s,o,l),a=o,s=a.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(S){Nt(a,a.return,S)}if(a=o,s=a.updateQueue,s!==null){var p=a.stateNode;try{var b=s.shared.hiddenCallbacks;if(b!==null)for(s.shared.hiddenCallbacks=null,s=0;s<b.length;s++)Oh(b[s],p)}catch(S){Nt(a,a.return,S)}}l&&d&64&&Rh(o),qa(o,o.return);break;case 26:case 27:case 5:oa(s,o,l),l&&a===null&&d&4&&Nh(o),qa(o,o.return);break;case 12:oa(s,o,l);break;case 13:oa(s,o,l),l&&d&4&&qh(s,o);break;case 22:o.memoizedState===null&&oa(s,o,l),qa(o,o.return);break;default:oa(s,o,l)}e=e.sibling}}function Sc(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&_n(l))}function zc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&_n(t))}function ra(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gh(t,e,l,a),e=e.sibling}function Gh(t,e,l,a){var s=e.flags;switch(e.tag){case 0:case 11:case 15:ra(t,e,l,a),s&2048&&On(9,e);break;case 3:ra(t,e,l,a),s&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&_n(t)));break;case 12:if(s&2048){ra(t,e,l,a),t=e.stateNode;try{var o=e.memoizedProps,d=o.id,p=o.onPostCommit;typeof p=="function"&&p(d,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(b){Nt(e,e.return,b)}}else ra(t,e,l,a);break;case 23:break;case 22:o=e.stateNode,e.memoizedState!==null?o._visibility&4?ra(t,e,l,a):Dn(t,e):o._visibility&4?ra(t,e,l,a):(o._visibility|=4,Ci(t,e,l,a,(e.subtreeFlags&10256)!==0)),s&2048&&Sc(e.alternate,e);break;case 24:ra(t,e,l,a),s&2048&&zc(e.alternate,e);break;default:ra(t,e,l,a)}}function Ci(t,e,l,a,s){for(s=s&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var o=t,d=e,p=l,b=a,S=d.flags;switch(d.tag){case 0:case 11:case 15:Ci(o,d,p,b,s),On(8,d);break;case 23:break;case 22:var R=d.stateNode;d.memoizedState!==null?R._visibility&4?Ci(o,d,p,b,s):Dn(o,d):(R._visibility|=4,Ci(o,d,p,b,s)),s&&S&2048&&Sc(d.alternate,d);break;case 24:Ci(o,d,p,b,s),s&&S&2048&&zc(d.alternate,d);break;default:Ci(o,d,p,b,s)}e=e.sibling}}function Dn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,s=a.flags;switch(a.tag){case 22:Dn(l,a),s&2048&&Sc(a.alternate,a);break;case 24:Dn(l,a),s&2048&&zc(a.alternate,a);break;default:Dn(l,a)}e=e.sibling}}var Rn=8192;function Ai(t){if(t.subtreeFlags&Rn)for(t=t.child;t!==null;)Qh(t),t=t.sibling}function Qh(t){switch(t.tag){case 26:Ai(t),t.flags&Rn&&t.memoizedState!==null&&Eb(hl,t.memoizedState,t.memoizedProps);break;case 5:Ai(t);break;case 3:case 4:var e=hl;hl=Co(t.stateNode.containerInfo),Ai(t),hl=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Rn,Rn=16777216,Ai(t),Rn=e):Ai(t));break;default:Ai(t)}}function Zh(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function $n(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];be=a,Fh(a,t)}Zh(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Kh(t),t=t.sibling}function Kh(t){switch(t.tag){case 0:case 11:case 15:$n(t),t.flags&2048&&sa(9,t,t.return);break;case 3:$n(t);break;case 12:$n(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&4&&(t.return===null||t.return.tag!==13)?(e._visibility&=-5,uo(t)):$n(t);break;default:$n(t)}}function uo(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];be=a,Fh(a,t)}Zh(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:sa(8,e,e.return),uo(e);break;case 22:l=e.stateNode,l._visibility&4&&(l._visibility&=-5,uo(e));break;default:uo(e)}t=t.sibling}}function Fh(t,e){for(;be!==null;){var l=be;switch(l.tag){case 0:case 11:case 15:sa(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:_n(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,be=a;else t:for(l=t;be!==null;){a=be;var s=a.sibling,o=a.return;if(jh(a),a===l){be=null;break t}if(s!==null){s.return=o,be=s;break t}be=o}}}function jg(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ol(t,e,l,a){return new jg(t,e,l,a)}function Cc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ca(t,e){var l=t.alternate;return l===null?(l=ol(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&31457280,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function Jh(t,e){t.flags&=31457282;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function fo(t,e,l,a,s,o){var d=0;if(a=t,typeof t=="function")Cc(t)&&(d=1);else if(typeof t=="string")d=Cb(t,l,We.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case v:return Ya(l.children,s,o,e);case g:d=8,s|=24;break;case C:return t=ol(12,l,e,s|2),t.elementType=C,t.lanes=o,t;case L:return t=ol(13,l,e,s),t.elementType=L,t.lanes=o,t;case q:return t=ol(19,l,e,s),t.elementType=q,t.lanes=o,t;case G:return Wh(l,s,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k:case O:d=10;break t;case N:d=9;break t;case U:d=11;break t;case K:d=14;break t;case F:d=16,a=null;break t}d=29,l=Error(c(130,t===null?"null":typeof t,"")),a=null}return e=ol(d,l,e,s),e.elementType=t,e.type=a,e.lanes=o,e}function Ya(t,e,l,a){return t=ol(7,t,a,e),t.lanes=l,t}function Wh(t,e,l,a){t=ol(22,t,a,e),t.elementType=G,t.lanes=l;var s={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var o=s._current;if(o===null)throw Error(c(456));if(!(s._pendingVisibility&2)){var d=Wl(o,2);d!==null&&(s._pendingVisibility|=2,$e(d,o,2))}},attach:function(){var o=s._current;if(o===null)throw Error(c(456));if(s._pendingVisibility&2){var d=Wl(o,2);d!==null&&(s._pendingVisibility&=-3,$e(d,o,2))}}};return t.stateNode=s,t}function Ac(t,e,l){return t=ol(6,t,null,e),t.lanes=l,t}function Ec(t,e,l){return e=ol(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Yl(t){t.flags|=4}function Ih(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!Up(e)){if(e=il.current,e!==null&&((xt&4194176)===xt?wl!==null:(xt&62914560)!==xt&&!(xt&536870912)||e!==wl))throw bn=Rr,mf;t.flags|=8192}}function ho(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?md():536870912,t.lanes|=e,Ti|=e)}function Nn(t,e){if(!At)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var s=t.child;s!==null;)l|=s.lanes|s.childLanes,a|=s.subtreeFlags&31457280,a|=s.flags&31457280,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)l|=s.lanes|s.childLanes,a|=s.subtreeFlags,a|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function Vg(t,e,l){var a=e.pendingProps;switch(Or(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return Zt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ll(de),ei(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(hn(e)?Yl(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fl!==null&&(Mc(fl),fl=null))),Zt(e),null;case 26:return l=e.memoizedState,t===null?(Yl(e),l!==null?(Zt(e),Ih(e,l)):(Zt(e),e.flags&=-16777217)):l?l!==t.memoizedState?(Yl(e),Zt(e),Ih(e,l)):(Zt(e),e.flags&=-16777217):(t.memoizedProps!==a&&Yl(e),Zt(e),e.flags&=-16777217),null;case 27:zs(e),l=ct.current;var s=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Yl(e);else{if(!a){if(e.stateNode===null)throw Error(c(166));return Zt(e),null}t=We.current,hn(e)?hf(e):(t=Tp(s,a,l),e.stateNode=t,Yl(e))}return Zt(e),null;case 5:if(zs(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Yl(e);else{if(!a){if(e.stateNode===null)throw Error(c(166));return Zt(e),null}if(t=We.current,hn(e))hf(e);else{switch(s=zo(ct.current),t){case 1:t=s.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:t=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":t=s.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":t=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?s.createElement("select",{is:a.is}):s.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?s.createElement(l,{is:a.is}):s.createElement(l)}}t[Ee]=e,t[Ne]=a;t:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break t;for(;s.sibling===null;){if(s.return===null||s.return===e)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=t;t:switch(Ce(t,l,a),l){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Yl(e)}}return Zt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&Yl(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(c(166));if(t=ct.current,hn(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,s=Re,s!==null)switch(s.tag){case 27:case 5:a=s.memoizedProps}t[Ee]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||wp(t.nodeValue,l)),t||$a(e)}else t=zo(t).createTextNode(a),t[Ee]=e,e.stateNode=t}return Zt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(s=hn(e),a!==null&&a.dehydrated!==null){if(t===null){if(!s)throw Error(c(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(c(317));s[Ee]=e}else pn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Zt(e),s=!1}else fl!==null&&(Mc(fl),fl=null),s=!0;if(!s)return e.flags&256?(Ml(e),e):(Ml(e),null)}if(Ml(e),e.flags&128)return e.lanes=l,e;if(l=a!==null,t=t!==null&&t.memoizedState!==null,l){a=e.child,s=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(s=a.alternate.memoizedState.cachePool.pool);var o=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==s&&(a.flags|=2048)}return l!==t&&l&&(e.child.flags|=8192),ho(e,e.updateQueue),Zt(e),null;case 4:return ei(),t===null&&Qc(e.stateNode.containerInfo),Zt(e),null;case 10:return Ll(e.type),Zt(e),null;case 19:if(Ft(ue),s=e.memoizedState,s===null)return Zt(e),null;if(a=(e.flags&128)!==0,o=s.rendering,o===null)if(a)Nn(s,!1);else{if(Wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Fs(t),o!==null){for(e.flags|=128,Nn(s,!1),t=o.updateQueue,e.updateQueue=t,ho(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)Jh(l,t),l=l.sibling;return Ut(ue,ue.current&1|2),e.child}t=t.sibling}s.tail!==null&&_l()>po&&(e.flags|=128,a=!0,Nn(s,!1),e.lanes=4194304)}else{if(!a)if(t=Fs(o),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,ho(e,t),Nn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!At)return Zt(e),null}else 2*_l()-s.renderingStartTime>po&&l!==536870912&&(e.flags|=128,a=!0,Nn(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_l(),e.sibling=null,t=ue.current,Ut(ue,a?t&1|2:t&1),e):(Zt(e),null);case 22:case 23:return Ml(e),Nr(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?l&536870912&&!(e.flags&128)&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),l=e.updateQueue,l!==null&&ho(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&Ft(Ma),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Ll(de),Zt(e),null;case 25:return null}throw Error(c(156,e.tag))}function qg(t,e){switch(Or(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ll(de),ei(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return zs(e),null;case 13:if(Ml(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(c(340));pn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ft(ue),null;case 4:return ei(),null;case 10:return Ll(e.type),null;case 22:case 23:return Ml(e),Nr(),t!==null&&Ft(Ma),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ll(de),null;case 25:return null;default:return null}}function Ph(t,e){switch(Or(e),e.tag){case 3:Ll(de),ei();break;case 26:case 27:case 5:zs(e);break;case 4:ei();break;case 13:Ml(e);break;case 19:Ft(ue);break;case 10:Ll(e.type);break;case 22:case 23:Ml(e),Nr(),t!==null&&Ft(Ma);break;case 24:Ll(de)}}var Yg={getCacheForType:function(t){var e=Te(de),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l}},Xg=typeof WeakMap=="function"?WeakMap:Map,Kt=0,Ht=null,bt=null,xt=0,Bt=0,Xe=null,Xl=!1,Ei=!1,Tc=!1,Gl=0,Wt=0,ua=0,Xa=0,kc=0,rl=0,Ti=0,Mn=null,zl=null,Oc=!1,Dc=0,po=1/0,mo=null,da=null,go=!1,Ga=null,Un=0,Rc=0,$c=null,Hn=0,Nc=null;function Ge(){if(Kt&2&&xt!==0)return xt&-xt;if(j.T!==null){var t=yi;return t!==0?t:qc()}return yd()}function tp(){rl===0&&(rl=!(xt&536870912)||At?pd():536870912);var t=il.current;return t!==null&&(t.flags|=32),rl}function $e(t,e,l){(t===Ht&&Bt===2||t.cancelPendingCommit!==null)&&(ki(t,0),Ql(t,xt,rl,!1)),tn(t,l),(!(Kt&2)||t!==Ht)&&(t===Ht&&(!(Kt&2)&&(Xa|=l),Wt===4&&Ql(t,xt,rl,!1)),Cl(t))}function ep(t,e,l){if(Kt&6)throw Error(c(327));var a=!l&&(e&60)===0&&(e&t.expiredLanes)===0||Pi(t,e),s=a?Zg(t,e):Bc(t,e,!0),o=a;do{if(s===0){Ei&&!a&&Ql(t,e,0,!1);break}else if(s===6)Ql(t,e,0,!Xl);else{if(l=t.current.alternate,o&&!Gg(l)){s=Bc(t,e,!1),o=!1;continue}if(s===2){if(o=e,t.errorRecoveryDisabledLanes&o)var d=0;else d=t.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){e=d;t:{var p=t;s=Mn;var b=p.current.memoizedState.isDehydrated;if(b&&(ki(p,d).flags|=256),d=Bc(p,d,!1),d!==2){if(Tc&&!b){p.errorRecoveryDisabledLanes|=o,Xa|=o,s=4;break t}o=zl,zl=s,o!==null&&Mc(o)}s=d}if(o=!1,s!==2)continue}}if(s===1){ki(t,0),Ql(t,e,0,!0);break}t:{switch(a=t,s){case 0:case 1:throw Error(c(345));case 4:if((e&4194176)===e){Ql(a,e,rl,!Xl);break t}break;case 2:zl=null;break;case 3:case 5:break;default:throw Error(c(329))}if(a.finishedWork=l,a.finishedLanes=e,(e&62914560)===e&&(o=Dc+300-_l(),10<o)){if(Ql(a,e,rl,!Xl),Ts(a,0)!==0)break t;a.timeoutHandle=Cp(lp.bind(null,a,l,zl,mo,Oc,e,rl,Xa,Ti,Xl,2,-0,0),o);break t}lp(a,l,zl,mo,Oc,e,rl,Xa,Ti,Xl,0,-0,0)}}break}while(!0);Cl(t)}function Mc(t){zl===null?zl=t:zl.push.apply(zl,t)}function lp(t,e,l,a,s,o,d,p,b,S,R,M,T){var D=e.subtreeFlags;if((D&8192||(D&16785408)===16785408)&&(Yn={stylesheets:null,count:0,unsuspend:Ab},Qh(e),e=Tb(),e!==null)){t.cancelPendingCommit=e(cp.bind(null,t,l,a,s,d,p,b,1,M,T)),Ql(t,o,d,!S);return}cp(t,l,a,s,d,p,b,R,M,T)}function Gg(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var s=l[a],o=s.getSnapshot;s=s.value;try{if(!Ve(o(),s))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ql(t,e,l,a){e&=~kc,e&=~Xa,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var s=e;0<s;){var o=31-je(s),d=1<<o;a[o]=-1,s&=~d}l!==0&&gd(t,l,e)}function bo(){return Kt&6?!0:(Bn(0),!1)}function Uc(){if(bt!==null){if(Bt===0)var t=bt.return;else t=bt,Bl=ja=null,qr(t),bi=null,vn=0,t=bt;for(;t!==null;)Ph(t.alternate,t),t=t.return;bt=null}}function ki(t,e){t.finishedWork=null,t.finishedLanes=0;var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,ub(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Uc(),Ht=t,bt=l=ca(t.current,null),xt=e,Bt=0,Xe=null,Xl=!1,Ei=Pi(t,e),Tc=!1,Ti=rl=kc=Xa=ua=Wt=0,zl=Mn=null,Oc=!1,e&8&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var s=31-je(a),o=1<<s;e|=t[s],a&=~o}return Gl=e,js(),l}function ap(t,e){ft=null,j.H=Sl,e===gn?(e=vf(),Bt=3):e===mf?(e=vf(),Bt=4):Bt=e===gh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Xe=e,bt===null&&(Wt=1,so(t,el(e,t.current)))}function ip(){var t=j.H;return j.H=Sl,t===null?Sl:t}function np(){var t=j.A;return j.A=Yg,t}function Hc(){Wt=4,Xl||(xt&4194176)!==xt&&il.current!==null||(Ei=!0),!(ua&134217727)&&!(Xa&134217727)||Ht===null||Ql(Ht,xt,rl,!1)}function Bc(t,e,l){var a=Kt;Kt|=2;var s=ip(),o=np();(Ht!==t||xt!==e)&&(mo=null,ki(t,e)),e=!1;var d=Wt;t:do try{if(Bt!==0&&bt!==null){var p=bt,b=Xe;switch(Bt){case 8:Uc(),d=6;break t;case 3:case 2:case 6:il.current===null&&(e=!0);var S=Bt;if(Bt=0,Xe=null,Oi(t,p,b,S),l&&Ei){d=0;break t}break;default:S=Bt,Bt=0,Xe=null,Oi(t,p,b,S)}}Qg(),d=Wt;break}catch(R){ap(t,R)}while(!0);return e&&t.shellSuspendCounter++,Bl=ja=null,Kt=a,j.H=s,j.A=o,bt===null&&(Ht=null,xt=0,js()),d}function Qg(){for(;bt!==null;)sp(bt)}function Zg(t,e){var l=Kt;Kt|=2;var a=ip(),s=np();Ht!==t||xt!==e?(mo=null,po=_l()+500,ki(t,e)):Ei=Pi(t,e);t:do try{if(Bt!==0&&bt!==null){e=bt;var o=Xe;e:switch(Bt){case 1:Bt=0,Xe=null,Oi(t,e,o,1);break;case 2:if(gf(o)){Bt=0,Xe=null,op(e);break}e=function(){Bt===2&&Ht===t&&(Bt=7),Cl(t)},o.then(e,e);break t;case 3:Bt=7;break t;case 4:Bt=5;break t;case 7:gf(o)?(Bt=0,Xe=null,op(e)):(Bt=0,Xe=null,Oi(t,e,o,7));break;case 5:var d=null;switch(bt.tag){case 26:d=bt.memoizedState;case 5:case 27:var p=bt;if(!d||Up(d)){Bt=0,Xe=null;var b=p.sibling;if(b!==null)bt=b;else{var S=p.return;S!==null?(bt=S,vo(S)):bt=null}break e}}Bt=0,Xe=null,Oi(t,e,o,5);break;case 6:Bt=0,Xe=null,Oi(t,e,o,6);break;case 8:Uc(),Wt=6;break t;default:throw Error(c(462))}}Kg();break}catch(R){ap(t,R)}while(!0);return Bl=ja=null,j.H=a,j.A=s,Kt=l,bt!==null?0:(Ht=null,xt=0,js(),Wt)}function Kg(){for(;bt!==null&&!gm();)sp(bt)}function sp(t){var e=Th(t.alternate,t,Gl);t.memoizedProps=t.pendingProps,e===null?vo(t):bt=e}function op(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=wh(l,e,e.pendingProps,e.type,void 0,xt);break;case 11:e=wh(l,e,e.pendingProps,e.type.render,e.ref,xt);break;case 5:qr(e);default:Ph(l,e),e=bt=Jh(e,Gl),e=Th(l,e,Gl)}t.memoizedProps=t.pendingProps,e===null?vo(t):bt=e}function Oi(t,e,l,a){Bl=ja=null,qr(e),bi=null,vn=0;var s=e.return;try{if(Ug(t,s,e,l,xt)){Wt=1,so(t,el(l,t.current)),bt=null;return}}catch(o){if(s!==null)throw bt=s,o;Wt=1,so(t,el(l,t.current)),bt=null;return}e.flags&32768?(At||a===1?t=!0:Ei||xt&536870912?t=!1:(Xl=t=!0,(a===2||a===3||a===6)&&(a=il.current,a!==null&&a.tag===13&&(a.flags|=16384))),rp(e,t)):vo(e)}function vo(t){var e=t;do{if(e.flags&32768){rp(e,Xl);return}t=e.return;var l=Vg(e.alternate,e,Gl);if(l!==null){bt=l;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);Wt===0&&(Wt=5)}function rp(t,e){do{var l=qg(t.alternate,t);if(l!==null){l.flags&=32767,bt=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){bt=t;return}bt=t=l}while(t!==null);Wt=6,bt=null}function cp(t,e,l,a,s,o,d,p,b,S){var R=j.T,M=V.p;try{V.p=2,j.T=null,Fg(t,e,l,a,M,s,o,d,p,b,S)}finally{j.T=R,V.p=M}}function Fg(t,e,l,a,s,o,d,p){do Di();while(Ga!==null);if(Kt&6)throw Error(c(327));var b=t.finishedWork;if(a=t.finishedLanes,b===null)return null;if(t.finishedWork=null,t.finishedLanes=0,b===t.current)throw Error(c(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var S=b.lanes|b.childLanes;if(S|=Er,Em(t,a,S,o,d,p),t===Ht&&(bt=Ht=null,xt=0),!(b.subtreeFlags&10256)&&!(b.flags&10256)||go||(go=!0,Rc=S,$c=l,Pg(Cs,function(){return Di(),null})),l=(b.flags&15990)!==0,b.subtreeFlags&15990||l?(l=j.T,j.T=null,o=V.p,V.p=2,d=Kt,Kt|=4,Bg(t,b),Yh(b,t),yg(Jc,t.containerInfo),Oo=!!Fc,Jc=Fc=null,t.current=b,Lh(t,b.alternate,b),bm(),Kt=d,V.p=o,j.T=l):t.current=b,go?(go=!1,Ga=t,Un=a):up(t,S),S=t.pendingLanes,S===0&&(da=null),wm(b.stateNode),Cl(t),e!==null)for(s=t.onRecoverableError,b=0;b<e.length;b++)S=e[b],s(S.value,{componentStack:S.stack});return Un&3&&Di(),S=t.pendingLanes,a&4194218&&S&42?t===Nc?Hn++:(Hn=0,Nc=t):Hn=0,Bn(0),null}function up(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,_n(e)))}function Di(){if(Ga!==null){var t=Ga,e=Rc;Rc=0;var l=vd(Un),a=j.T,s=V.p;try{if(V.p=32>l?32:l,j.T=null,Ga===null)var o=!1;else{l=$c,$c=null;var d=Ga,p=Un;if(Ga=null,Un=0,Kt&6)throw Error(c(331));var b=Kt;if(Kt|=4,Kh(d.current),Gh(d,d.current,p,l),Kt=b,Bn(0,!1),Le&&typeof Le.onPostCommitFiberRoot=="function")try{Le.onPostCommitFiberRoot(Ii,d)}catch{}o=!0}return o}finally{V.p=s,j.T=a,up(t,e)}}return!1}function dp(t,e,l){e=el(l,e),e=lc(t.stateNode,e,2),t=na(t,e,2),t!==null&&(tn(t,2),Cl(t))}function Nt(t,e,l){if(t.tag===3)dp(t,t,l);else for(;e!==null;){if(e.tag===3){dp(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(da===null||!da.has(a))){t=el(l,t),l=ph(2),a=na(e,l,2),a!==null&&(mh(l,a,e,t),tn(a,2),Cl(a));break}}e=e.return}}function Lc(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new Xg;var s=new Set;a.set(e,s)}else s=a.get(e),s===void 0&&(s=new Set,a.set(e,s));s.has(l)||(Tc=!0,s.add(l),t=Jg.bind(null,t,e,l),e.then(t,t))}function Jg(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,Ht===t&&(xt&l)===l&&(Wt===4||Wt===3&&(xt&62914560)===xt&&300>_l()-Dc?!(Kt&2)&&ki(t,0):kc|=l,Ti===xt&&(Ti=0)),Cl(t)}function fp(t,e){e===0&&(e=md()),t=Wl(t,e),t!==null&&(tn(t,e),Cl(t))}function Wg(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),fp(t,l)}function Ig(t,e){var l=0;switch(t.tag){case 13:var a=t.stateNode,s=t.memoizedState;s!==null&&(l=s.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(e),fp(t,l)}function Pg(t,e){return ar(t,e)}var yo=null,Ri=null,jc=!1,_o=!1,Vc=!1,Qa=0;function Cl(t){t!==Ri&&t.next===null&&(Ri===null?yo=Ri=t:Ri=Ri.next=t),_o=!0,jc||(jc=!0,eb(tb))}function Bn(t,e){if(!Vc&&_o){Vc=!0;do for(var l=!1,a=yo;a!==null;){if(t!==0){var s=a.pendingLanes;if(s===0)var o=0;else{var d=a.suspendedLanes,p=a.pingedLanes;o=(1<<31-je(42|t)+1)-1,o&=s&~(d&~p),o=o&201326677?o&201326677|1:o?o|2:0}o!==0&&(l=!0,mp(a,o))}else o=xt,o=Ts(a,a===Ht?o:0),!(o&3)||Pi(a,o)||(l=!0,mp(a,o));a=a.next}while(l);Vc=!1}}function tb(){_o=jc=!1;var t=0;Qa!==0&&(cb()&&(t=Qa),Qa=0);for(var e=_l(),l=null,a=yo;a!==null;){var s=a.next,o=hp(a,e);o===0?(a.next=null,l===null?yo=s:l.next=s,s===null&&(Ri=l)):(l=a,(t!==0||o&3)&&(_o=!0)),a=s}Bn(t)}function hp(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes&-62914561;0<o;){var d=31-je(o),p=1<<d,b=s[d];b===-1?(!(p&l)||p&a)&&(s[d]=Am(p,e)):b<=e&&(t.expiredLanes|=p),o&=~p}if(e=Ht,l=xt,l=Ts(t,t===e?l:0),a=t.callbackNode,l===0||t===e&&Bt===2||t.cancelPendingCommit!==null)return a!==null&&a!==null&&ir(a),t.callbackNode=null,t.callbackPriority=0;if(!(l&3)||Pi(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&ir(a),vd(l)){case 2:case 8:l=fd;break;case 32:l=Cs;break;case 268435456:l=hd;break;default:l=Cs}return a=pp.bind(null,t),l=ar(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&ir(a),t.callbackPriority=2,t.callbackNode=null,2}function pp(t,e){var l=t.callbackNode;if(Di()&&t.callbackNode!==l)return null;var a=xt;return a=Ts(t,t===Ht?a:0),a===0?null:(ep(t,a,e),hp(t,_l()),t.callbackNode!=null&&t.callbackNode===l?pp.bind(null,t):null)}function mp(t,e){if(Di())return null;ep(t,e,!0)}function eb(t){db(function(){Kt&6?ar(dd,t):t()})}function qc(){return Qa===0&&(Qa=pd()),Qa}function gp(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:$s(""+t)}function bp(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function lb(t,e,l,a,s){if(e==="submit"&&l&&l.stateNode===s){var o=gp((s[Ne]||null).action),d=a.submitter;d&&(e=(e=d[Ne]||null)?gp(e.formAction):d.getAttribute("formAction"),e!==null&&(o=e,d=null));var p=new Hs("action","action",null,a,s);t.push({event:p,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Qa!==0){var b=d?bp(s,d):new FormData(s);Wr(l,{pending:!0,data:b,method:s.method,action:o},null,b)}}else typeof o=="function"&&(p.preventDefault(),b=d?bp(s,d):new FormData(s),Wr(l,{pending:!0,data:b,method:s.method,action:o},o,b))},currentTarget:s}]})}}for(var Yc=0;Yc<cf.length;Yc++){var Xc=cf[Yc],ab=Xc.toLowerCase(),ib=Xc[0].toUpperCase()+Xc.slice(1);dl(ab,"on"+ib)}dl(af,"onAnimationEnd"),dl(nf,"onAnimationIteration"),dl(sf,"onAnimationStart"),dl("dblclick","onDoubleClick"),dl("focusin","onFocus"),dl("focusout","onBlur"),dl(xg,"onTransitionRun"),dl(wg,"onTransitionStart"),dl(Sg,"onTransitionCancel"),dl(of,"onTransitionEnd"),ni("onMouseEnter",["mouseout","mouseover"]),ni("onMouseLeave",["mouseout","mouseover"]),ni("onPointerEnter",["pointerout","pointerover"]),ni("onPointerLeave",["pointerout","pointerover"]),Ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ln));function vp(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],s=a.event;a=a.listeners;t:{var o=void 0;if(e)for(var d=a.length-1;0<=d;d--){var p=a[d],b=p.instance,S=p.currentTarget;if(p=p.listener,b!==o&&s.isPropagationStopped())break t;o=p,s.currentTarget=S;try{o(s)}catch(R){no(R)}s.currentTarget=null,o=b}else for(d=0;d<a.length;d++){if(p=a[d],b=p.instance,S=p.currentTarget,p=p.listener,b!==o&&s.isPropagationStopped())break t;o=p,s.currentTarget=S;try{o(s)}catch(R){no(R)}s.currentTarget=null,o=b}}}}function _t(t,e){var l=e[sr];l===void 0&&(l=e[sr]=new Set);var a=t+"__bubble";l.has(a)||(yp(e,t,2,!1),l.add(a))}function Gc(t,e,l){var a=0;e&&(a|=4),yp(l,t,a,e)}var xo="_reactListening"+Math.random().toString(36).slice(2);function Qc(t){if(!t[xo]){t[xo]=!0,xd.forEach(function(l){l!=="selectionchange"&&(nb.has(l)||Gc(l,!1,t),Gc(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xo]||(e[xo]=!0,Gc("selectionchange",!1,e))}}function yp(t,e,l,a){switch(qp(e)){case 2:var s=Db;break;case 8:s=Rb;break;default:s=nu}l=s.bind(null,e,l,t),s=void 0,!pr||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),a?s!==void 0?t.addEventListener(e,l,{capture:!0,passive:s}):t.addEventListener(e,l,!0):s!==void 0?t.addEventListener(e,l,{passive:s}):t.addEventListener(e,l,!1)}function Zc(t,e,l,a,s){var o=a;if(!(e&1)&&!(e&2)&&a!==null)t:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var p=a.stateNode.containerInfo;if(p===s||p.nodeType===8&&p.parentNode===s)break;if(d===4)for(d=a.return;d!==null;){var b=d.tag;if((b===3||b===4)&&(b=d.stateNode.containerInfo,b===s||b.nodeType===8&&b.parentNode===s))return;d=d.return}for(;p!==null;){if(d=Aa(p),d===null)return;if(b=d.tag,b===5||b===6||b===26||b===27){a=o=d;continue t}p=p.parentNode}}a=a.return}$d(function(){var S=o,R=fr(l),M=[];t:{var T=rf.get(t);if(T!==void 0){var D=Hs,Z=t;switch(t){case"keypress":if(Ms(l)===0)break t;case"keydown":case"keyup":D=Im;break;case"focusin":Z="focus",D=vr;break;case"focusout":Z="blur",D=vr;break;case"beforeblur":case"afterblur":D=vr;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=jm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=eg;break;case af:case nf:case sf:D=Ym;break;case of:D=ag;break;case"scroll":case"scrollend":D=Bm;break;case"wheel":D=ng;break;case"copy":case"cut":case"paste":D=Gm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Bd;break;case"toggle":case"beforetoggle":D=og}var nt=(e&4)!==0,It=!nt&&(t==="scroll"||t==="scrollend"),z=nt?T!==null?T+"Capture":null:T;nt=[];for(var w=S,E;w!==null;){var $=w;if(E=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||E===null||z===null||($=an(w,z),$!=null&&nt.push(jn(w,$,E))),It)break;w=w.return}0<nt.length&&(T=new D(T,Z,null,l,R),M.push({event:T,listeners:nt}))}}if(!(e&7)){t:{if(T=t==="mouseover"||t==="pointerover",D=t==="mouseout"||t==="pointerout",T&&l!==dr&&(Z=l.relatedTarget||l.fromElement)&&(Aa(Z)||Z[li]))break t;if((D||T)&&(T=R.window===R?R:(T=R.ownerDocument)?T.defaultView||T.parentWindow:window,D?(Z=l.relatedTarget||l.toElement,D=S,Z=Z?Aa(Z):null,Z!==null&&(It=Q(Z),nt=Z.tag,Z!==It||nt!==5&&nt!==27&&nt!==6)&&(Z=null)):(D=null,Z=S),D!==Z)){if(nt=Ud,$="onMouseLeave",z="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(nt=Bd,$="onPointerLeave",z="onPointerEnter",w="pointer"),It=D==null?T:ln(D),E=Z==null?T:ln(Z),T=new nt($,w+"leave",D,l,R),T.target=It,T.relatedTarget=E,$=null,Aa(R)===S&&(nt=new nt(z,w+"enter",Z,l,R),nt.target=E,nt.relatedTarget=It,$=nt),It=$,D&&Z)e:{for(nt=D,z=Z,w=0,E=nt;E;E=$i(E))w++;for(E=0,$=z;$;$=$i($))E++;for(;0<w-E;)nt=$i(nt),w--;for(;0<E-w;)z=$i(z),E--;for(;w--;){if(nt===z||z!==null&&nt===z.alternate)break e;nt=$i(nt),z=$i(z)}nt=null}else nt=null;D!==null&&_p(M,T,D,nt,!1),Z!==null&&It!==null&&_p(M,It,Z,nt,!0)}}t:{if(T=S?ln(S):window,D=T.nodeName&&T.nodeName.toLowerCase(),D==="select"||D==="input"&&T.type==="file")var Y=Qd;else if(Xd(T))if(Zd)Y=bg;else{Y=mg;var pt=pg}else D=T.nodeName,!D||D.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?S&&ur(S.elementType)&&(Y=Qd):Y=gg;if(Y&&(Y=Y(t,S))){Gd(M,Y,l,R);break t}pt&&pt(t,T,S),t==="focusout"&&S&&T.type==="number"&&S.memoizedProps.value!=null&&cr(T,"number",T.value)}switch(pt=S?ln(S):window,t){case"focusin":(Xd(pt)||pt.contentEditable==="true")&&(di=pt,zr=S,fn=null);break;case"focusout":fn=zr=di=null;break;case"mousedown":Cr=!0;break;case"contextmenu":case"mouseup":case"dragend":Cr=!1,ef(M,l,R);break;case"selectionchange":if(_g)break;case"keydown":case"keyup":ef(M,l,R)}var J;if(_r)t:{switch(t){case"compositionstart":var et="onCompositionStart";break t;case"compositionend":et="onCompositionEnd";break t;case"compositionupdate":et="onCompositionUpdate";break t}et=void 0}else ui?qd(t,l)&&(et="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(et="onCompositionStart");et&&(Ld&&l.locale!=="ko"&&(ui||et!=="onCompositionStart"?et==="onCompositionEnd"&&ui&&(J=Nd()):(Jl=R,mr="value"in Jl?Jl.value:Jl.textContent,ui=!0)),pt=wo(S,et),0<pt.length&&(et=new Hd(et,t,null,l,R),M.push({event:et,listeners:pt}),J?et.data=J:(J=Yd(l),J!==null&&(et.data=J)))),(J=cg?ug(t,l):dg(t,l))&&(et=wo(S,"onBeforeInput"),0<et.length&&(pt=new Hd("onBeforeInput","beforeinput",null,l,R),M.push({event:pt,listeners:et}),pt.data=J)),lb(M,t,S,l,R)}vp(M,e)})}function jn(t,e,l){return{instance:t,listener:e,currentTarget:l}}function wo(t,e){for(var l=e+"Capture",a=[];t!==null;){var s=t,o=s.stateNode;s=s.tag,s!==5&&s!==26&&s!==27||o===null||(s=an(t,l),s!=null&&a.unshift(jn(t,s,o)),s=an(t,e),s!=null&&a.push(jn(t,s,o))),t=t.return}return a}function $i(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function _p(t,e,l,a,s){for(var o=e._reactName,d=[];l!==null&&l!==a;){var p=l,b=p.alternate,S=p.stateNode;if(p=p.tag,b!==null&&b===a)break;p!==5&&p!==26&&p!==27||S===null||(b=S,s?(S=an(l,o),S!=null&&d.unshift(jn(l,S,b))):s||(S=an(l,o),S!=null&&d.push(jn(l,S,b)))),l=l.return}d.length!==0&&t.push({event:e,listeners:d})}var sb=/\r\n?/g,ob=/\u0000|\uFFFD/g;function xp(t){return(typeof t=="string"?t:""+t).replace(sb,`
`).replace(ob,"")}function wp(t,e){return e=xp(e),xp(t)===e}function So(){}function Dt(t,e,l,a,s,o){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||oi(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&oi(t,""+a);break;case"className":Os(t,"class",a);break;case"tabIndex":Os(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Os(t,l,a);break;case"style":Dd(t,a,o);break;case"data":if(e!=="object"){Os(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=$s(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(l==="formAction"?(e!=="input"&&Dt(t,e,"name",s.name,s,null),Dt(t,e,"formEncType",s.formEncType,s,null),Dt(t,e,"formMethod",s.formMethod,s,null),Dt(t,e,"formTarget",s.formTarget,s,null)):(Dt(t,e,"encType",s.encType,s,null),Dt(t,e,"method",s.method,s,null),Dt(t,e,"target",s.target,s,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=$s(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=So);break;case"onScroll":a!=null&&_t("scroll",t);break;case"onScrollEnd":a!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(l=a.__html,l!=null){if(s.children!=null)throw Error(c(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=$s(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":_t("beforetoggle",t),_t("toggle",t),ks(t,"popover",a);break;case"xlinkActuate":Rl(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Rl(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Rl(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Rl(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Rl(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Rl(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Rl(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Rl(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Rl(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ks(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Um.get(l)||l,ks(t,l,a))}}function Kc(t,e,l,a,s,o){switch(l){case"style":Dd(t,a,o);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(l=a.__html,l!=null){if(s.children!=null)throw Error(c(60));t.innerHTML=l}}break;case"children":typeof a=="string"?oi(t,a):(typeof a=="number"||typeof a=="bigint")&&oi(t,""+a);break;case"onScroll":a!=null&&_t("scroll",t);break;case"onScrollEnd":a!=null&&_t("scrollend",t);break;case"onClick":a!=null&&(t.onclick=So);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!wd.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(s=l.endsWith("Capture"),e=l.slice(2,s?l.length-7:void 0),o=t[Ne]||null,o=o!=null?o[l]:null,typeof o=="function"&&t.removeEventListener(e,o,s),typeof a=="function")){typeof o!="function"&&o!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,s);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):ks(t,l,a)}}}function Ce(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var a=!1,s=!1,o;for(o in l)if(l.hasOwnProperty(o)){var d=l[o];if(d!=null)switch(o){case"src":a=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,e));default:Dt(t,e,o,d,l,null)}}s&&Dt(t,e,"srcSet",l.srcSet,l,null),a&&Dt(t,e,"src",l.src,l,null);return;case"input":_t("invalid",t);var p=o=d=s=null,b=null,S=null;for(a in l)if(l.hasOwnProperty(a)){var R=l[a];if(R!=null)switch(a){case"name":s=R;break;case"type":d=R;break;case"checked":b=R;break;case"defaultChecked":S=R;break;case"value":o=R;break;case"defaultValue":p=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,e));break;default:Dt(t,e,a,R,l,null)}}Ed(t,o,p,b,S,d,s,!1),Ds(t);return;case"select":_t("invalid",t),a=d=o=null;for(s in l)if(l.hasOwnProperty(s)&&(p=l[s],p!=null))switch(s){case"value":o=p;break;case"defaultValue":d=p;break;case"multiple":a=p;default:Dt(t,e,s,p,l,null)}e=o,l=d,t.multiple=!!a,e!=null?si(t,!!a,e,!1):l!=null&&si(t,!!a,l,!0);return;case"textarea":_t("invalid",t),o=s=a=null;for(d in l)if(l.hasOwnProperty(d)&&(p=l[d],p!=null))switch(d){case"value":a=p;break;case"defaultValue":s=p;break;case"children":o=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(c(91));break;default:Dt(t,e,d,p,l,null)}kd(t,a,s,o),Ds(t);return;case"option":for(b in l)if(l.hasOwnProperty(b)&&(a=l[b],a!=null))switch(b){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Dt(t,e,b,a,l,null)}return;case"dialog":_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(a=0;a<Ln.length;a++)_t(Ln[a],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in l)if(l.hasOwnProperty(S)&&(a=l[S],a!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,e));default:Dt(t,e,S,a,l,null)}return;default:if(ur(e)){for(R in l)l.hasOwnProperty(R)&&(a=l[R],a!==void 0&&Kc(t,e,R,a,l,void 0));return}}for(p in l)l.hasOwnProperty(p)&&(a=l[p],a!=null&&Dt(t,e,p,a,l,null))}function rb(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,o=null,d=null,p=null,b=null,S=null,R=null;for(D in l){var M=l[D];if(l.hasOwnProperty(D)&&M!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":b=M;default:a.hasOwnProperty(D)||Dt(t,e,D,null,a,M)}}for(var T in a){var D=a[T];if(M=l[T],a.hasOwnProperty(T)&&(D!=null||M!=null))switch(T){case"type":o=D;break;case"name":s=D;break;case"checked":S=D;break;case"defaultChecked":R=D;break;case"value":d=D;break;case"defaultValue":p=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,e));break;default:D!==M&&Dt(t,e,T,D,a,M)}}rr(t,d,p,b,S,R,o,s);return;case"select":D=d=p=T=null;for(o in l)if(b=l[o],l.hasOwnProperty(o)&&b!=null)switch(o){case"value":break;case"multiple":D=b;default:a.hasOwnProperty(o)||Dt(t,e,o,null,a,b)}for(s in a)if(o=a[s],b=l[s],a.hasOwnProperty(s)&&(o!=null||b!=null))switch(s){case"value":T=o;break;case"defaultValue":p=o;break;case"multiple":d=o;default:o!==b&&Dt(t,e,s,o,a,b)}e=p,l=d,a=D,T!=null?si(t,!!l,T,!1):!!a!=!!l&&(e!=null?si(t,!!l,e,!0):si(t,!!l,l?[]:"",!1));return;case"textarea":D=T=null;for(p in l)if(s=l[p],l.hasOwnProperty(p)&&s!=null&&!a.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:Dt(t,e,p,null,a,s)}for(d in a)if(s=a[d],o=l[d],a.hasOwnProperty(d)&&(s!=null||o!=null))switch(d){case"value":T=s;break;case"defaultValue":D=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(c(91));break;default:s!==o&&Dt(t,e,d,s,a,o)}Td(t,T,D);return;case"option":for(var Z in l)if(T=l[Z],l.hasOwnProperty(Z)&&T!=null&&!a.hasOwnProperty(Z))switch(Z){case"selected":t.selected=!1;break;default:Dt(t,e,Z,null,a,T)}for(b in a)if(T=a[b],D=l[b],a.hasOwnProperty(b)&&T!==D&&(T!=null||D!=null))switch(b){case"selected":t.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:Dt(t,e,b,T,a,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in l)T=l[nt],l.hasOwnProperty(nt)&&T!=null&&!a.hasOwnProperty(nt)&&Dt(t,e,nt,null,a,T);for(S in a)if(T=a[S],D=l[S],a.hasOwnProperty(S)&&T!==D&&(T!=null||D!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(c(137,e));break;default:Dt(t,e,S,T,a,D)}return;default:if(ur(e)){for(var It in l)T=l[It],l.hasOwnProperty(It)&&T!==void 0&&!a.hasOwnProperty(It)&&Kc(t,e,It,void 0,a,T);for(R in a)T=a[R],D=l[R],!a.hasOwnProperty(R)||T===D||T===void 0&&D===void 0||Kc(t,e,R,T,a,D);return}}for(var z in l)T=l[z],l.hasOwnProperty(z)&&T!=null&&!a.hasOwnProperty(z)&&Dt(t,e,z,null,a,T);for(M in a)T=a[M],D=l[M],!a.hasOwnProperty(M)||T===D||T==null&&D==null||Dt(t,e,M,T,a,D)}var Fc=null,Jc=null;function zo(t){return t.nodeType===9?t:t.ownerDocument}function Sp(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zp(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Wc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ic=null;function cb(){var t=window.event;return t&&t.type==="popstate"?t===Ic?!1:(Ic=t,!0):(Ic=null,!1)}var Cp=typeof setTimeout=="function"?setTimeout:void 0,ub=typeof clearTimeout=="function"?clearTimeout:void 0,Ap=typeof Promise=="function"?Promise:void 0,db=typeof queueMicrotask=="function"?queueMicrotask:typeof Ap<"u"?function(t){return Ap.resolve(null).then(t).catch(fb)}:Cp;function fb(t){setTimeout(function(){throw t})}function Pc(t,e){var l=e,a=0;do{var s=l.nextSibling;if(t.removeChild(l),s&&s.nodeType===8)if(l=s.data,l==="/$"){if(a===0){t.removeChild(s),Kn(e);return}a--}else l!=="$"&&l!=="$?"&&l!=="$!"||a++;l=s}while(l);Kn(e)}function tu(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":tu(l),or(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function hb(t,e,l,a){for(;t.nodeType===1;){var s=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[en])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(o=t.getAttribute("rel"),o==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(o!==s.rel||t.getAttribute("href")!==(s.href==null?null:s.href)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||t.getAttribute("title")!==(s.title==null?null:s.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(o=t.getAttribute("src"),(o!==(s.src==null?null:s.src)||t.getAttribute("type")!==(s.type==null?null:s.type)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&o&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var o=s.name==null?null:""+s.name;if(s.type==="hidden"&&t.getAttribute("name")===o)return t}else return t;if(t=pl(t.nextSibling),t===null)break}return null}function pb(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=pl(t.nextSibling),t===null))return null;return t}function pl(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}function Ep(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"){if(e===0)return t;e--}else l==="/$"&&e++}t=t.previousSibling}return null}function Tp(t,e,l){switch(e=zo(l),t){case"html":if(t=e.documentElement,!t)throw Error(c(452));return t;case"head":if(t=e.head,!t)throw Error(c(453));return t;case"body":if(t=e.body,!t)throw Error(c(454));return t;default:throw Error(c(451))}}var cl=new Map,kp=new Set;function Co(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var Zl=V.d;V.d={f:mb,r:gb,D:bb,C:vb,L:yb,m:_b,X:wb,S:xb,M:Sb};function mb(){var t=Zl.f(),e=bo();return t||e}function gb(t){var e=ai(t);e!==null&&e.tag===5&&e.type==="form"?lh(e):Zl.r(t)}var Ni=typeof document>"u"?null:document;function Op(t,e,l){var a=Ni;if(a&&typeof e=="string"&&e){var s=Pe(e);s='link[rel="'+t+'"][href="'+s+'"]',typeof l=="string"&&(s+='[crossorigin="'+l+'"]'),kp.has(s)||(kp.add(s),t={rel:t,crossOrigin:l,href:e},a.querySelector(s)===null&&(e=a.createElement("link"),Ce(e,"link",t),me(e),a.head.appendChild(e)))}}function bb(t){Zl.D(t),Op("dns-prefetch",t,null)}function vb(t,e){Zl.C(t,e),Op("preconnect",t,e)}function yb(t,e,l){Zl.L(t,e,l);var a=Ni;if(a&&t&&e){var s='link[rel="preload"][as="'+Pe(e)+'"]';e==="image"&&l&&l.imageSrcSet?(s+='[imagesrcset="'+Pe(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(s+='[imagesizes="'+Pe(l.imageSizes)+'"]')):s+='[href="'+Pe(t)+'"]';var o=s;switch(e){case"style":o=Mi(t);break;case"script":o=Ui(t)}cl.has(o)||(t=lt({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),cl.set(o,t),a.querySelector(s)!==null||e==="style"&&a.querySelector(Vn(o))||e==="script"&&a.querySelector(qn(o))||(e=a.createElement("link"),Ce(e,"link",t),me(e),a.head.appendChild(e)))}}function _b(t,e){Zl.m(t,e);var l=Ni;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",s='link[rel="modulepreload"][as="'+Pe(a)+'"][href="'+Pe(t)+'"]',o=s;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Ui(t)}if(!cl.has(o)&&(t=lt({rel:"modulepreload",href:t},e),cl.set(o,t),l.querySelector(s)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(qn(o)))return}a=l.createElement("link"),Ce(a,"link",t),me(a),l.head.appendChild(a)}}}function xb(t,e,l){Zl.S(t,e,l);var a=Ni;if(a&&t){var s=ii(a).hoistableStyles,o=Mi(t);e=e||"default";var d=s.get(o);if(!d){var p={loading:0,preload:null};if(d=a.querySelector(Vn(o)))p.loading=5;else{t=lt({rel:"stylesheet",href:t,"data-precedence":e},l),(l=cl.get(o))&&eu(t,l);var b=d=a.createElement("link");me(b),Ce(b,"link",t),b._p=new Promise(function(S,R){b.onload=S,b.onerror=R}),b.addEventListener("load",function(){p.loading|=1}),b.addEventListener("error",function(){p.loading|=2}),p.loading|=4,Ao(d,e,a)}d={type:"stylesheet",instance:d,count:1,state:p},s.set(o,d)}}}function wb(t,e){Zl.X(t,e);var l=Ni;if(l&&t){var a=ii(l).hoistableScripts,s=Ui(t),o=a.get(s);o||(o=l.querySelector(qn(s)),o||(t=lt({src:t,async:!0},e),(e=cl.get(s))&&lu(t,e),o=l.createElement("script"),me(o),Ce(o,"link",t),l.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(s,o))}}function Sb(t,e){Zl.M(t,e);var l=Ni;if(l&&t){var a=ii(l).hoistableScripts,s=Ui(t),o=a.get(s);o||(o=l.querySelector(qn(s)),o||(t=lt({src:t,async:!0,type:"module"},e),(e=cl.get(s))&&lu(t,e),o=l.createElement("script"),me(o),Ce(o,"link",t),l.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(s,o))}}function Dp(t,e,l,a){var s=(s=ct.current)?Co(s):null;if(!s)throw Error(c(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Mi(l.href),l=ii(s).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Mi(l.href);var o=ii(s).hoistableStyles,d=o.get(t);if(d||(s=s.ownerDocument||s,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(t,d),(o=s.querySelector(Vn(t)))&&!o._p&&(d.instance=o,d.state.loading=5),cl.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},cl.set(t,l),o||zb(s,t,l,d.state))),e&&a===null)throw Error(c(528,""));return d}if(e&&a!==null)throw Error(c(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ui(l),l=ii(s).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,t))}}function Mi(t){return'href="'+Pe(t)+'"'}function Vn(t){return'link[rel="stylesheet"]['+t+"]"}function Rp(t){return lt({},t,{"data-precedence":t.precedence,precedence:null})}function zb(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Ce(e,"link",l),me(e),t.head.appendChild(e))}function Ui(t){return'[src="'+Pe(t)+'"]'}function qn(t){return"script[async]"+t}function $p(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+Pe(l.href)+'"]');if(a)return e.instance=a,me(a),a;var s=lt({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),me(a),Ce(a,"style",s),Ao(a,l.precedence,t),e.instance=a;case"stylesheet":s=Mi(l.href);var o=t.querySelector(Vn(s));if(o)return e.state.loading|=4,e.instance=o,me(o),o;a=Rp(l),(s=cl.get(s))&&eu(a,s),o=(t.ownerDocument||t).createElement("link"),me(o);var d=o;return d._p=new Promise(function(p,b){d.onload=p,d.onerror=b}),Ce(o,"link",a),e.state.loading|=4,Ao(o,l.precedence,t),e.instance=o;case"script":return o=Ui(l.src),(s=t.querySelector(qn(o)))?(e.instance=s,me(s),s):(a=l,(s=cl.get(o))&&(a=lt({},l),lu(a,s)),t=t.ownerDocument||t,s=t.createElement("script"),me(s),Ce(s,"link",a),t.head.appendChild(s),e.instance=s);case"void":return null;default:throw Error(c(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(a=e.instance,e.state.loading|=4,Ao(a,l.precedence,t));return e.instance}function Ao(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=a.length?a[a.length-1]:null,o=s,d=0;d<a.length;d++){var p=a[d];if(p.dataset.precedence===e)o=p;else if(o!==s)break}o?o.parentNode.insertBefore(t,o.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function eu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function lu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Eo=null;function Np(t,e,l){if(Eo===null){var a=new Map,s=Eo=new Map;s.set(l,a)}else s=Eo,a=s.get(l),a||(a=new Map,s.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),s=0;s<l.length;s++){var o=l[s];if(!(o[en]||o[Ee]||t==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var d=o.getAttribute(e)||"";d=t+d;var p=a.get(d);p?p.push(o):a.set(d,[o])}}return a}function Mp(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Cb(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Up(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var Yn=null;function Ab(){}function Eb(t,e,l){if(Yn===null)throw Error(c(475));var a=Yn;if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&!(e.state.loading&4)){if(e.instance===null){var s=Mi(l.href),o=t.querySelector(Vn(s));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=To.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=o,me(o);return}o=t.ownerDocument||t,l=Rp(l),(s=cl.get(s))&&eu(l,s),o=o.createElement("link"),me(o);var d=o;d._p=new Promise(function(p,b){d.onload=p,d.onerror=b}),Ce(o,"link",l),e.instance=o}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&!(e.state.loading&3)&&(a.count++,e=To.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function Tb(){if(Yn===null)throw Error(c(475));var t=Yn;return t.stylesheets&&t.count===0&&au(t,t.stylesheets),0<t.count?function(e){var l=setTimeout(function(){if(t.stylesheets&&au(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l)}}:null}function To(){if(this.count--,this.count===0){if(this.stylesheets)au(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ko=null;function au(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ko=new Map,e.forEach(kb,t),ko=null,To.call(t))}function kb(t,e){if(!(e.state.loading&4)){var l=ko.get(t);if(l)var a=l.get(null);else{l=new Map,ko.set(t,l);for(var s=t.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<s.length;o++){var d=s[o];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(l.set(d.dataset.precedence,d),a=d)}a&&l.set(null,a)}s=e.instance,d=s.getAttribute("data-precedence"),o=l.get(d)||a,o===a&&l.set(null,s),l.set(d,s),this.count++,a=To.bind(this),s.addEventListener("load",a),s.addEventListener("error",a),o?o.parentNode.insertBefore(s,o.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(s,t.firstChild)),e.state.loading|=4}}var Xn={$$typeof:O,Provider:null,Consumer:null,_currentValue:vt,_currentValue2:vt,_threadCount:0};function Ob(t,e,l,a,s,o,d,p){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nr(0),this.hiddenUpdates=nr(null),this.identifierPrefix=a,this.onUncaughtError=s,this.onCaughtError=o,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Hp(t,e,l,a,s,o,d,p,b,S,R,M){return t=new Ob(t,e,l,d,p,b,S,M),e=1,o===!0&&(e|=24),o=ol(3,null,null,e),t.current=o,o.stateNode=t,e=Mr(),e.refCount++,t.pooledCache=e,e.refCount++,o.memoizedState={element:a,isDehydrated:l,cache:e},mc(o),t}function Bp(t){return t?(t=pi,t):pi}function Lp(t,e,l,a,s,o){s=Bp(s),a.context===null?a.context=s:a.pendingContext=s,a=ia(e),a.payload={element:l},o=o===void 0?null:o,o!==null&&(a.callback=o),l=na(t,a,e),l!==null&&($e(l,t,e),En(l,t,e))}function jp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function iu(t,e){jp(t,e),(t=t.alternate)&&jp(t,e)}function Vp(t){if(t.tag===13){var e=Wl(t,67108864);e!==null&&$e(e,t,67108864),iu(t,67108864)}}var Oo=!0;function Db(t,e,l,a){var s=j.T;j.T=null;var o=V.p;try{V.p=2,nu(t,e,l,a)}finally{V.p=o,j.T=s}}function Rb(t,e,l,a){var s=j.T;j.T=null;var o=V.p;try{V.p=8,nu(t,e,l,a)}finally{V.p=o,j.T=s}}function nu(t,e,l,a){if(Oo){var s=su(a);if(s===null)Zc(t,e,a,Do,l),Yp(t,a);else if(Nb(s,t,e,l,a))a.stopPropagation();else if(Yp(t,a),e&4&&-1<$b.indexOf(t)){for(;s!==null;){var o=ai(s);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var d=Ca(o.pendingLanes);if(d!==0){var p=o;for(p.pendingLanes|=2,p.entangledLanes|=2;d;){var b=1<<31-je(d);p.entanglements[1]|=b,d&=~b}Cl(o),!(Kt&6)&&(po=_l()+500,Bn(0))}}break;case 13:p=Wl(o,2),p!==null&&$e(p,o,2),bo(),iu(o,2)}if(o=su(a),o===null&&Zc(t,e,a,Do,l),o===s)break;s=o}s!==null&&a.stopPropagation()}else Zc(t,e,a,null,l)}}function su(t){return t=fr(t),ou(t)}var Do=null;function ou(t){if(Do=null,t=Aa(t),t!==null){var e=Q(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=gt(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Do=t,null}function qp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vm()){case dd:return 2;case fd:return 8;case Cs:case ym:return 32;case hd:return 268435456;default:return 32}default:return 32}}var ru=!1,fa=null,ha=null,pa=null,Gn=new Map,Qn=new Map,ma=[],$b="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yp(t,e){switch(t){case"focusin":case"focusout":fa=null;break;case"dragenter":case"dragleave":ha=null;break;case"mouseover":case"mouseout":pa=null;break;case"pointerover":case"pointerout":Gn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qn.delete(e.pointerId)}}function Zn(t,e,l,a,s,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:o,targetContainers:[s]},e!==null&&(e=ai(e),e!==null&&Vp(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Nb(t,e,l,a,s){switch(e){case"focusin":return fa=Zn(fa,t,e,l,a,s),!0;case"dragenter":return ha=Zn(ha,t,e,l,a,s),!0;case"mouseover":return pa=Zn(pa,t,e,l,a,s),!0;case"pointerover":var o=s.pointerId;return Gn.set(o,Zn(Gn.get(o)||null,t,e,l,a,s)),!0;case"gotpointercapture":return o=s.pointerId,Qn.set(o,Zn(Qn.get(o)||null,t,e,l,a,s)),!0}return!1}function Xp(t){var e=Aa(t.target);if(e!==null){var l=Q(e);if(l!==null){if(e=l.tag,e===13){if(e=gt(l),e!==null){t.blockedOn=e,Tm(t.priority,function(){if(l.tag===13){var a=Ge(),s=Wl(l,a);s!==null&&$e(s,l,a),iu(l,a)}});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ro(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=su(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);dr=a,l.target.dispatchEvent(a),dr=null}else return e=ai(l),e!==null&&Vp(e),t.blockedOn=l,!1;e.shift()}return!0}function Gp(t,e,l){Ro(t)&&l.delete(e)}function Mb(){ru=!1,fa!==null&&Ro(fa)&&(fa=null),ha!==null&&Ro(ha)&&(ha=null),pa!==null&&Ro(pa)&&(pa=null),Gn.forEach(Gp),Qn.forEach(Gp)}function $o(t,e){t.blockedOn===e&&(t.blockedOn=null,ru||(ru=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Mb)))}var No=null;function Qp(t){No!==t&&(No=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){No===t&&(No=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],s=t[e+2];if(typeof a!="function"){if(ou(a||l)===null)continue;break}var o=ai(l);o!==null&&(t.splice(e,3),e-=3,Wr(o,{pending:!0,data:s,method:l.method,action:a},a,s))}}))}function Kn(t){function e(b){return $o(b,t)}fa!==null&&$o(fa,t),ha!==null&&$o(ha,t),pa!==null&&$o(pa,t),Gn.forEach(e),Qn.forEach(e);for(var l=0;l<ma.length;l++){var a=ma[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<ma.length&&(l=ma[0],l.blockedOn===null);)Xp(l),l.blockedOn===null&&ma.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var s=l[a],o=l[a+1],d=s[Ne]||null;if(typeof o=="function")d||Qp(l);else if(d){var p=null;if(o&&o.hasAttribute("formAction")){if(s=o,d=o[Ne]||null)p=d.formAction;else if(ou(s)!==null)continue}else p=d.action;typeof p=="function"?l[a+1]=p:(l.splice(a,3),a-=3),Qp(l)}}}function cu(t){this._internalRoot=t}Mo.prototype.render=cu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(c(409));var l=e.current,a=Ge();Lp(l,a,t,e,null,null)},Mo.prototype.unmount=cu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;t.tag===0&&Di(),Lp(t.current,2,null,t,null,null),bo(),e[li]=null}};function Mo(t){this._internalRoot=t}Mo.prototype.unstable_scheduleHydration=function(t){if(t){var e=yd();t={blockedOn:null,target:t,priority:e};for(var l=0;l<ma.length&&e!==0&&e<ma[l].priority;l++);ma.splice(l,0,t),l===0&&Xp(t)}};var Zp=n.version;if(Zp!=="19.0.0")throw Error(c(527,Zp,"19.0.0"));V.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(c(188)):(t=Object.keys(t).join(","),Error(c(268,t)));return t=H(e),t=t!==null?P(t):null,t=t===null?null:t.stateNode,t};var Ub={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:j,findFiberByHostInstance:Aa,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uo.isDisabled&&Uo.supportsFiber)try{Ii=Uo.inject(Ub),Le=Uo}catch{}}return Jn.createRoot=function(t,e){if(!u(t))throw Error(c(299));var l=!1,a="",s=uh,o=dh,d=fh,p=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(s=e.onUncaughtError),e.onCaughtError!==void 0&&(o=e.onCaughtError),e.onRecoverableError!==void 0&&(d=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(p=e.unstable_transitionCallbacks)),e=Hp(t,1,!1,null,null,l,a,s,o,d,p,null),t[li]=e.current,Qc(t.nodeType===8?t.parentNode:t),new cu(e)},Jn.hydrateRoot=function(t,e,l){if(!u(t))throw Error(c(299));var a=!1,s="",o=uh,d=dh,p=fh,b=null,S=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(s=l.identifierPrefix),l.onUncaughtError!==void 0&&(o=l.onUncaughtError),l.onCaughtError!==void 0&&(d=l.onCaughtError),l.onRecoverableError!==void 0&&(p=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(b=l.unstable_transitionCallbacks),l.formState!==void 0&&(S=l.formState)),e=Hp(t,1,!0,e,l??null,a,s,o,d,p,b,S),e.context=Bp(null),l=e.current,a=Ge(),s=ia(a),s.callback=null,na(l,s,a),e.current.lanes=a,tn(e,a),Cl(e),t[li]=e.current,Qc(t),new Mo(e)},Jn.version="19.0.0",Jn}var a0;function Fb(){if(a0)return fu.exports;a0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(n){console.error(n)}}return i(),fu.exports=Kb(),fu.exports}var Jb=Fb();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jo=globalThis,ju=jo.ShadowRoot&&(jo.ShadyCSS===void 0||jo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vu=Symbol(),i0=new WeakMap;let U0=class{constructor(n,r,c){if(this._$cssResult$=!0,c!==Vu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=n,this.t=r}get styleSheet(){let n=this.o;const r=this.t;if(ju&&n===void 0){const c=r!==void 0&&r.length===1;c&&(n=i0.get(r)),n===void 0&&((this.o=n=new CSSStyleSheet).replaceSync(this.cssText),c&&i0.set(r,n))}return n}toString(){return this.cssText}};const Wb=i=>new U0(typeof i=="string"?i:i+"",void 0,Vu),jt=(i,...n)=>{const r=i.length===1?i[0]:n.reduce((c,u,f)=>c+(h=>{if(h._$cssResult$===!0)return h.cssText;if(typeof h=="number")return h;throw Error("Value passed to 'css' function must be a 'css' function result: "+h+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(u)+i[f+1],i[0]);return new U0(r,i,Vu)},Ib=(i,n)=>{if(ju)i.adoptedStyleSheets=n.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of n){const c=document.createElement("style"),u=jo.litNonce;u!==void 0&&c.setAttribute("nonce",u),c.textContent=r.cssText,i.appendChild(c)}},n0=ju?i=>i:i=>i instanceof CSSStyleSheet?(n=>{let r="";for(const c of n.cssRules)r+=c.cssText;return Wb(r)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Pb,defineProperty:tv,getOwnPropertyDescriptor:ev,getOwnPropertyNames:lv,getOwnPropertySymbols:av,getPrototypeOf:iv}=Object,ya=globalThis,s0=ya.trustedTypes,nv=s0?s0.emptyScript:"",gu=ya.reactiveElementPolyfillSupport,ss=(i,n)=>i,qi={toAttribute(i,n){switch(n){case Boolean:i=i?nv:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,n){let r=i;switch(n){case Boolean:r=i!==null;break;case Number:r=i===null?null:Number(i);break;case Object:case Array:try{r=JSON.parse(i)}catch{r=null}}return r}},qu=(i,n)=>!Pb(i,n),o0={attribute:!0,type:String,converter:qi,reflect:!1,hasChanged:qu};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ya.litPropertyMetadata??(ya.litPropertyMetadata=new WeakMap);class Bi extends HTMLElement{static addInitializer(n){this._$Ei(),(this.l??(this.l=[])).push(n)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(n,r=o0){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(n,r),!r.noAccessor){const c=Symbol(),u=this.getPropertyDescriptor(n,c,r);u!==void 0&&tv(this.prototype,n,u)}}static getPropertyDescriptor(n,r,c){const{get:u,set:f}=ev(this.prototype,n)??{get(){return this[r]},set(h){this[r]=h}};return{get(){return u==null?void 0:u.call(this)},set(h){const y=u==null?void 0:u.call(this);f.call(this,h),this.requestUpdate(n,y,c)},configurable:!0,enumerable:!0}}static getPropertyOptions(n){return this.elementProperties.get(n)??o0}static _$Ei(){if(this.hasOwnProperty(ss("elementProperties")))return;const n=iv(this);n.finalize(),n.l!==void 0&&(this.l=[...n.l]),this.elementProperties=new Map(n.elementProperties)}static finalize(){if(this.hasOwnProperty(ss("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ss("properties"))){const r=this.properties,c=[...lv(r),...av(r)];for(const u of c)this.createProperty(u,r[u])}const n=this[Symbol.metadata];if(n!==null){const r=litPropertyMetadata.get(n);if(r!==void 0)for(const[c,u]of r)this.elementProperties.set(c,u)}this._$Eh=new Map;for(const[r,c]of this.elementProperties){const u=this._$Eu(r,c);u!==void 0&&this._$Eh.set(u,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(n){const r=[];if(Array.isArray(n)){const c=new Set(n.flat(1/0).reverse());for(const u of c)r.unshift(n0(u))}else n!==void 0&&r.push(n0(n));return r}static _$Eu(n,r){const c=r.attribute;return c===!1?void 0:typeof c=="string"?c:typeof n=="string"?n.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var n;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(n=this.constructor.l)==null||n.forEach(r=>r(this))}addController(n){var r;(this._$EO??(this._$EO=new Set)).add(n),this.renderRoot!==void 0&&this.isConnected&&((r=n.hostConnected)==null||r.call(n))}removeController(n){var r;(r=this._$EO)==null||r.delete(n)}_$E_(){const n=new Map,r=this.constructor.elementProperties;for(const c of r.keys())this.hasOwnProperty(c)&&(n.set(c,this[c]),delete this[c]);n.size>0&&(this._$Ep=n)}createRenderRoot(){const n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ib(n,this.constructor.elementStyles),n}connectedCallback(){var n;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(n=this._$EO)==null||n.forEach(r=>{var c;return(c=r.hostConnected)==null?void 0:c.call(r)})}enableUpdating(n){}disconnectedCallback(){var n;(n=this._$EO)==null||n.forEach(r=>{var c;return(c=r.hostDisconnected)==null?void 0:c.call(r)})}attributeChangedCallback(n,r,c){this._$AK(n,c)}_$EC(n,r){var f;const c=this.constructor.elementProperties.get(n),u=this.constructor._$Eu(n,c);if(u!==void 0&&c.reflect===!0){const h=(((f=c.converter)==null?void 0:f.toAttribute)!==void 0?c.converter:qi).toAttribute(r,c.type);this._$Em=n,h==null?this.removeAttribute(u):this.setAttribute(u,h),this._$Em=null}}_$AK(n,r){var f;const c=this.constructor,u=c._$Eh.get(n);if(u!==void 0&&this._$Em!==u){const h=c.getPropertyOptions(u),y=typeof h.converter=="function"?{fromAttribute:h.converter}:((f=h.converter)==null?void 0:f.fromAttribute)!==void 0?h.converter:qi;this._$Em=u,this[u]=y.fromAttribute(r,h.type),this._$Em=null}}requestUpdate(n,r,c){if(n!==void 0){if(c??(c=this.constructor.getPropertyOptions(n)),!(c.hasChanged??qu)(this[n],r))return;this.P(n,r,c)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(n,r,c){this._$AL.has(n)||this._$AL.set(n,r),c.reflect===!0&&this._$Em!==n&&(this._$Ej??(this._$Ej=new Set)).add(n)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const n=this.scheduleUpdate();return n!=null&&await n,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var c;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[f,h]of this._$Ep)this[f]=h;this._$Ep=void 0}const u=this.constructor.elementProperties;if(u.size>0)for(const[f,h]of u)h.wrapped!==!0||this._$AL.has(f)||this[f]===void 0||this.P(f,this[f],h)}let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(c=this._$EO)==null||c.forEach(u=>{var f;return(f=u.hostUpdate)==null?void 0:f.call(u)}),this.update(r)):this._$EU()}catch(u){throw n=!1,this._$EU(),u}n&&this._$AE(r)}willUpdate(n){}_$AE(n){var r;(r=this._$EO)==null||r.forEach(c=>{var u;return(u=c.hostUpdated)==null?void 0:u.call(c)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(n)),this.updated(n)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(n){return!0}update(n){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(n){}firstUpdated(n){}}Bi.elementStyles=[],Bi.shadowRootOptions={mode:"open"},Bi[ss("elementProperties")]=new Map,Bi[ss("finalized")]=new Map,gu==null||gu({ReactiveElement:Bi}),(ya.reactiveElementVersions??(ya.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const os=globalThis,Xo=os.trustedTypes,r0=Xo?Xo.createPolicy("lit-html",{createHTML:i=>i}):void 0,H0="$lit$",va=`lit$${Math.random().toFixed(9).slice(2)}$`,B0="?"+va,sv=`<${B0}>`,Wa=document,fs=()=>Wa.createComment(""),hs=i=>i===null||typeof i!="object"&&typeof i!="function",Yu=Array.isArray,ov=i=>Yu(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",bu=`[ 	
\f\r]`,Wn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,c0=/-->/g,u0=/>/g,Za=RegExp(`>|${bu}(?:([^\\s"'>=/]+)(${bu}*=${bu}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),d0=/'/g,f0=/"/g,L0=/^(?:script|style|textarea|title)$/i,rv=i=>(n,...r)=>({_$litType$:i,strings:n,values:r}),ot=rv(1),ul=Symbol.for("lit-noChange"),Pt=Symbol.for("lit-nothing"),h0=new WeakMap,Ja=Wa.createTreeWalker(Wa,129);function j0(i,n){if(!Yu(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return r0!==void 0?r0.createHTML(n):n}const cv=(i,n)=>{const r=i.length-1,c=[];let u,f=n===2?"<svg>":n===3?"<math>":"",h=Wn;for(let y=0;y<r;y++){const v=i[y];let g,C,k=-1,N=0;for(;N<v.length&&(h.lastIndex=N,C=h.exec(v),C!==null);)N=h.lastIndex,h===Wn?C[1]==="!--"?h=c0:C[1]!==void 0?h=u0:C[2]!==void 0?(L0.test(C[2])&&(u=RegExp("</"+C[2],"g")),h=Za):C[3]!==void 0&&(h=Za):h===Za?C[0]===">"?(h=u??Wn,k=-1):C[1]===void 0?k=-2:(k=h.lastIndex-C[2].length,g=C[1],h=C[3]===void 0?Za:C[3]==='"'?f0:d0):h===f0||h===d0?h=Za:h===c0||h===u0?h=Wn:(h=Za,u=void 0);const O=h===Za&&i[y+1].startsWith("/>")?" ":"";f+=h===Wn?v+sv:k>=0?(c.push(g),v.slice(0,k)+H0+v.slice(k)+va+O):v+va+(k===-2?y:O)}return[j0(i,f+(i[r]||"<?>")+(n===2?"</svg>":n===3?"</math>":"")),c]};class ps{constructor({strings:n,_$litType$:r},c){let u;this.parts=[];let f=0,h=0;const y=n.length-1,v=this.parts,[g,C]=cv(n,r);if(this.el=ps.createElement(g,c),Ja.currentNode=this.el.content,r===2||r===3){const k=this.el.content.firstChild;k.replaceWith(...k.childNodes)}for(;(u=Ja.nextNode())!==null&&v.length<y;){if(u.nodeType===1){if(u.hasAttributes())for(const k of u.getAttributeNames())if(k.endsWith(H0)){const N=C[h++],O=u.getAttribute(k).split(va),U=/([.?@])?(.*)/.exec(N);v.push({type:1,index:f,name:U[2],strings:O,ctor:U[1]==="."?dv:U[1]==="?"?fv:U[1]==="@"?hv:Fo}),u.removeAttribute(k)}else k.startsWith(va)&&(v.push({type:6,index:f}),u.removeAttribute(k));if(L0.test(u.tagName)){const k=u.textContent.split(va),N=k.length-1;if(N>0){u.textContent=Xo?Xo.emptyScript:"";for(let O=0;O<N;O++)u.append(k[O],fs()),Ja.nextNode(),v.push({type:2,index:++f});u.append(k[N],fs())}}}else if(u.nodeType===8)if(u.data===B0)v.push({type:2,index:f});else{let k=-1;for(;(k=u.data.indexOf(va,k+1))!==-1;)v.push({type:7,index:f}),k+=va.length-1}f++}}static createElement(n,r){const c=Wa.createElement("template");return c.innerHTML=n,c}}function Yi(i,n,r=i,c){var h,y;if(n===ul)return n;let u=c!==void 0?(h=r._$Co)==null?void 0:h[c]:r._$Cl;const f=hs(n)?void 0:n._$litDirective$;return(u==null?void 0:u.constructor)!==f&&((y=u==null?void 0:u._$AO)==null||y.call(u,!1),f===void 0?u=void 0:(u=new f(i),u._$AT(i,r,c)),c!==void 0?(r._$Co??(r._$Co=[]))[c]=u:r._$Cl=u),u!==void 0&&(n=Yi(i,u._$AS(i,n.values),u,c)),n}class uv{constructor(n,r){this._$AV=[],this._$AN=void 0,this._$AD=n,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(n){const{el:{content:r},parts:c}=this._$AD,u=((n==null?void 0:n.creationScope)??Wa).importNode(r,!0);Ja.currentNode=u;let f=Ja.nextNode(),h=0,y=0,v=c[0];for(;v!==void 0;){if(h===v.index){let g;v.type===2?g=new bs(f,f.nextSibling,this,n):v.type===1?g=new v.ctor(f,v.name,v.strings,this,n):v.type===6&&(g=new pv(f,this,n)),this._$AV.push(g),v=c[++y]}h!==(v==null?void 0:v.index)&&(f=Ja.nextNode(),h++)}return Ja.currentNode=Wa,u}p(n){let r=0;for(const c of this._$AV)c!==void 0&&(c.strings!==void 0?(c._$AI(n,c,r),r+=c.strings.length-2):c._$AI(n[r])),r++}}class bs{get _$AU(){var n;return((n=this._$AM)==null?void 0:n._$AU)??this._$Cv}constructor(n,r,c,u){this.type=2,this._$AH=Pt,this._$AN=void 0,this._$AA=n,this._$AB=r,this._$AM=c,this.options=u,this._$Cv=(u==null?void 0:u.isConnected)??!0}get parentNode(){let n=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(n==null?void 0:n.nodeType)===11&&(n=r.parentNode),n}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(n,r=this){n=Yi(this,n,r),hs(n)?n===Pt||n==null||n===""?(this._$AH!==Pt&&this._$AR(),this._$AH=Pt):n!==this._$AH&&n!==ul&&this._(n):n._$litType$!==void 0?this.$(n):n.nodeType!==void 0?this.T(n):ov(n)?this.k(n):this._(n)}O(n){return this._$AA.parentNode.insertBefore(n,this._$AB)}T(n){this._$AH!==n&&(this._$AR(),this._$AH=this.O(n))}_(n){this._$AH!==Pt&&hs(this._$AH)?this._$AA.nextSibling.data=n:this.T(Wa.createTextNode(n)),this._$AH=n}$(n){var f;const{values:r,_$litType$:c}=n,u=typeof c=="number"?this._$AC(n):(c.el===void 0&&(c.el=ps.createElement(j0(c.h,c.h[0]),this.options)),c);if(((f=this._$AH)==null?void 0:f._$AD)===u)this._$AH.p(r);else{const h=new uv(u,this),y=h.u(this.options);h.p(r),this.T(y),this._$AH=h}}_$AC(n){let r=h0.get(n.strings);return r===void 0&&h0.set(n.strings,r=new ps(n)),r}k(n){Yu(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let c,u=0;for(const f of n)u===r.length?r.push(c=new bs(this.O(fs()),this.O(fs()),this,this.options)):c=r[u],c._$AI(f),u++;u<r.length&&(this._$AR(c&&c._$AB.nextSibling,u),r.length=u)}_$AR(n=this._$AA.nextSibling,r){var c;for((c=this._$AP)==null?void 0:c.call(this,!1,!0,r);n&&n!==this._$AB;){const u=n.nextSibling;n.remove(),n=u}}setConnected(n){var r;this._$AM===void 0&&(this._$Cv=n,(r=this._$AP)==null||r.call(this,n))}}class Fo{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(n,r,c,u,f){this.type=1,this._$AH=Pt,this._$AN=void 0,this.element=n,this.name=r,this._$AM=u,this.options=f,c.length>2||c[0]!==""||c[1]!==""?(this._$AH=Array(c.length-1).fill(new String),this.strings=c):this._$AH=Pt}_$AI(n,r=this,c,u){const f=this.strings;let h=!1;if(f===void 0)n=Yi(this,n,r,0),h=!hs(n)||n!==this._$AH&&n!==ul,h&&(this._$AH=n);else{const y=n;let v,g;for(n=f[0],v=0;v<f.length-1;v++)g=Yi(this,y[c+v],r,v),g===ul&&(g=this._$AH[v]),h||(h=!hs(g)||g!==this._$AH[v]),g===Pt?n=Pt:n!==Pt&&(n+=(g??"")+f[v+1]),this._$AH[v]=g}h&&!u&&this.j(n)}j(n){n===Pt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,n??"")}}class dv extends Fo{constructor(){super(...arguments),this.type=3}j(n){this.element[this.name]=n===Pt?void 0:n}}class fv extends Fo{constructor(){super(...arguments),this.type=4}j(n){this.element.toggleAttribute(this.name,!!n&&n!==Pt)}}class hv extends Fo{constructor(n,r,c,u,f){super(n,r,c,u,f),this.type=5}_$AI(n,r=this){if((n=Yi(this,n,r,0)??Pt)===ul)return;const c=this._$AH,u=n===Pt&&c!==Pt||n.capture!==c.capture||n.once!==c.once||n.passive!==c.passive,f=n!==Pt&&(c===Pt||u);u&&this.element.removeEventListener(this.name,this,c),f&&this.element.addEventListener(this.name,this,n),this._$AH=n}handleEvent(n){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,n):this._$AH.handleEvent(n)}}class pv{constructor(n,r,c){this.element=n,this.type=6,this._$AN=void 0,this._$AM=r,this.options=c}get _$AU(){return this._$AM._$AU}_$AI(n){Yi(this,n)}}const vu=os.litHtmlPolyfillSupport;vu==null||vu(ps,bs),(os.litHtmlVersions??(os.litHtmlVersions=[])).push("3.2.1");const mv=(i,n,r)=>{const c=(r==null?void 0:r.renderBefore)??n;let u=c._$litPart$;if(u===void 0){const f=(r==null?void 0:r.renderBefore)??null;c._$litPart$=u=new bs(n.insertBefore(fs(),f),f,void 0,r??{})}return u._$AI(i),u};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let rs=class extends Bi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const n=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=n.firstChild),n}update(n){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(n),this._$Do=mv(r,this.renderRoot,this.renderOptions)}connectedCallback(){var n;super.connectedCallback(),(n=this._$Do)==null||n.setConnected(!0)}disconnectedCallback(){var n;super.disconnectedCallback(),(n=this._$Do)==null||n.setConnected(!1)}render(){return ul}};var M0;rs._$litElement$=!0,rs.finalized=!0,(M0=globalThis.litElementHydrateSupport)==null||M0.call(globalThis,{LitElement:rs});const yu=globalThis.litElementPolyfillSupport;yu==null||yu({LitElement:rs});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");var gv=jt`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const Tu=new Set,Li=new Map;let Fa,Xu="ltr",Gu="en";const V0=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(V0){const i=new MutationObserver(Y0);Xu=document.documentElement.dir||"ltr",Gu=document.documentElement.lang||navigator.language,i.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function q0(...i){i.map(n=>{const r=n.$code.toLowerCase();Li.has(r)?Li.set(r,Object.assign(Object.assign({},Li.get(r)),n)):Li.set(r,n),Fa||(Fa=n)}),Y0()}function Y0(){V0&&(Xu=document.documentElement.dir||"ltr",Gu=document.documentElement.lang||navigator.language),[...Tu.keys()].map(i=>{typeof i.requestUpdate=="function"&&i.requestUpdate()})}let bv=class{constructor(n){this.host=n,this.host.addController(this)}hostConnected(){Tu.add(this.host)}hostDisconnected(){Tu.delete(this.host)}dir(){return`${this.host.dir||Xu}`.toLowerCase()}lang(){return`${this.host.lang||Gu}`.toLowerCase()}getTranslationData(n){var r,c;const u=new Intl.Locale(n.replace(/_/g,"-")),f=u==null?void 0:u.language.toLowerCase(),h=(c=(r=u==null?void 0:u.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&c!==void 0?c:"",y=Li.get(`${f}-${h}`),v=Li.get(f);return{locale:u,language:f,region:h,primary:y,secondary:v}}exists(n,r){var c;const{primary:u,secondary:f}=this.getTranslationData((c=r.lang)!==null&&c!==void 0?c:this.lang());return r=Object.assign({includeFallback:!1},r),!!(u&&u[n]||f&&f[n]||r.includeFallback&&Fa&&Fa[n])}term(n,...r){const{primary:c,secondary:u}=this.getTranslationData(this.lang());let f;if(c&&c[n])f=c[n];else if(u&&u[n])f=u[n];else if(Fa&&Fa[n])f=Fa[n];else return console.error(`No translation found for: ${String(n)}`),String(n);return typeof f=="function"?f(...r):f}date(n,r){return n=new Date(n),new Intl.DateTimeFormat(this.lang(),r).format(n)}number(n,r){return n=Number(n),isNaN(n)?"":new Intl.NumberFormat(this.lang(),r).format(n)}relativeTime(n,r,c){return new Intl.RelativeTimeFormat(this.lang(),c).format(n,r)}};var X0={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(i,n)=>`Go to slide ${i} of ${n}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:i=>i===0?"No options selected":i===1?"1 option selected":`${i} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:i=>`Slide ${i}`,toggleColorFormat:"Toggle color format"};q0(X0);var vv=X0,He=class extends bv{};q0(vv);var Gt=jt`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,G0=Object.defineProperty,yv=Object.defineProperties,_v=Object.getOwnPropertyDescriptor,xv=Object.getOwnPropertyDescriptors,p0=Object.getOwnPropertySymbols,wv=Object.prototype.hasOwnProperty,Sv=Object.prototype.propertyIsEnumerable,_u=(i,n)=>(n=Symbol[i])?n:Symbol.for("Symbol."+i),Qu=i=>{throw TypeError(i)},m0=(i,n,r)=>n in i?G0(i,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[n]=r,Sa=(i,n)=>{for(var r in n||(n={}))wv.call(n,r)&&m0(i,r,n[r]);if(p0)for(var r of p0(n))Sv.call(n,r)&&m0(i,r,n[r]);return i},vs=(i,n)=>yv(i,xv(n)),m=(i,n,r,c)=>{for(var u=c>1?void 0:c?_v(n,r):n,f=i.length-1,h;f>=0;f--)(h=i[f])&&(u=(c?h(n,r,u):h(u))||u);return c&&u&&G0(n,r,u),u},Q0=(i,n,r)=>n.has(i)||Qu("Cannot "+r),zv=(i,n,r)=>(Q0(i,n,"read from private field"),n.get(i)),Cv=(i,n,r)=>n.has(i)?Qu("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(i):n.set(i,r),Av=(i,n,r,c)=>(Q0(i,n,"write to private field"),n.set(i,r),r),Ev=function(i,n){this[0]=i,this[1]=n},Tv=i=>{var n=i[_u("asyncIterator")],r=!1,c,u={};return n==null?(n=i[_u("iterator")](),c=f=>u[f]=h=>n[f](h)):(n=n.call(i),c=f=>u[f]=h=>{if(r){if(r=!1,f==="throw")throw h;return h}return r=!0,{done:!1,value:new Ev(new Promise(y=>{var v=n[f](h);v instanceof Object||Qu("Object expected"),y(v)}),1)}}),u[_u("iterator")]=()=>u,c("next"),"throw"in n?c("throw"):u.throw=f=>{throw f},"return"in n&&c("return"),u};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kv={attribute:!0,type:String,converter:qi,reflect:!1,hasChanged:qu},Ov=(i=kv,n,r)=>{const{kind:c,metadata:u}=r;let f=globalThis.litPropertyMetadata.get(u);if(f===void 0&&globalThis.litPropertyMetadata.set(u,f=new Map),f.set(r.name,i),c==="accessor"){const{name:h}=r;return{set(y){const v=n.get.call(this);n.set.call(this,y),this.requestUpdate(h,v,i)},init(y){return y!==void 0&&this.P(h,void 0,i),y}}}if(c==="setter"){const{name:h}=r;return function(y){const v=this[h];n.call(this,y),this.requestUpdate(h,v,i)}}throw Error("Unsupported decorator location: "+c)};function _(i){return(n,r)=>typeof r=="object"?Ov(i,n,r):((c,u,f)=>{const h=u.hasOwnProperty(f);return u.constructor.createProperty(f,h?{...c,wrapped:!0}:c),h?Object.getOwnPropertyDescriptor(u,f):void 0})(i,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qt(i){return _({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z0=(i,n,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof n!="object"&&Object.defineProperty(i,n,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(i,n){return(r,c,u)=>{const f=h=>{var y;return((y=h.renderRoot)==null?void 0:y.querySelector(i))??null};return Z0(r,c,{get(){return f(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Dv(i){return(n,r)=>Z0(n,r,{async get(){var c;return await this.updateComplete,((c=this.renderRoot)==null?void 0:c.querySelector(i))??null}})}var Vo,Rt=class extends rs{constructor(){super(),Cv(this,Vo,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([i,n])=>{this.constructor.define(i,n)})}emit(i,n){const r=new CustomEvent(i,Sa({bubbles:!0,cancelable:!1,composed:!0,detail:{}},n));return this.dispatchEvent(r),r}static define(i,n=this,r={}){const c=customElements.get(i);if(!c){try{customElements.define(i,n,r)}catch{customElements.define(i,class extends n{},r)}return}let u=" (unknown version)",f=u;"version"in n&&n.version&&(u=" v"+n.version),"version"in c&&c.version&&(f=" v"+c.version),!(u&&f&&u===f)&&console.warn(`Attempted to register <${i}>${u}, but <${i}>${f} has already been registered.`)}attributeChangedCallback(i,n,r){zv(this,Vo)||(this.constructor.elementProperties.forEach((c,u)=>{c.reflect&&this[u]!=null&&this.initialReflectedProperties.set(u,this[u])}),Av(this,Vo,!0)),super.attributeChangedCallback(i,n,r)}willUpdate(i){super.willUpdate(i),this.initialReflectedProperties.forEach((n,r)=>{i.has(r)&&this[r]==null&&(this[r]=n)})}};Vo=new WeakMap;Rt.version="2.20.0";Rt.dependencies={};m([_()],Rt.prototype,"dir",2);m([_()],Rt.prototype,"lang",2);var ys=class extends Rt{constructor(){super(...arguments),this.localize=new He(this)}render(){return ot`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};ys.styles=[Gt,gv];var In=new WeakMap,Pn=new WeakMap,ts=new WeakMap,xu=new WeakSet,Ho=new WeakMap,Qi=class{constructor(i,n){this.handleFormData=r=>{const c=this.options.disabled(this.host),u=this.options.name(this.host),f=this.options.value(this.host),h=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!c&&!h&&typeof u=="string"&&u.length>0&&typeof f<"u"&&(Array.isArray(f)?f.forEach(y=>{r.formData.append(u,y.toString())}):r.formData.append(u,f.toString()))},this.handleFormSubmit=r=>{var c;const u=this.options.disabled(this.host),f=this.options.reportValidity;this.form&&!this.form.noValidate&&((c=In.get(this.form))==null||c.forEach(h=>{this.setUserInteracted(h,!0)})),this.form&&!this.form.noValidate&&!u&&!f(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Ho.set(this.host,[])},this.handleInteraction=r=>{const c=Ho.get(this.host);c.includes(r.type)||c.push(r.type),c.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const c of r)if(typeof c.checkValidity=="function"&&!c.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const c of r)if(typeof c.reportValidity=="function"&&!c.reportValidity())return!1}return!0},(this.host=i).addController(this),this.options=Sa({form:r=>{const c=r.form;if(c){const f=r.getRootNode().querySelector(`#${c}`);if(f)return f}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var c;return(c=r.disabled)!=null?c:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,c)=>r.value=c,assumeInteractionOn:["sl-input"]},n)}hostConnected(){const i=this.options.form(this.host);i&&this.attachForm(i),Ho.set(this.host,[]),this.options.assumeInteractionOn.forEach(n=>{this.host.addEventListener(n,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Ho.delete(this.host),this.options.assumeInteractionOn.forEach(i=>{this.host.removeEventListener(i,this.handleInteraction)})}hostUpdated(){const i=this.options.form(this.host);i||this.detachForm(),i&&this.form!==i&&(this.detachForm(),this.attachForm(i)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(i){i?(this.form=i,In.has(this.form)?In.get(this.form).add(this.host):In.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Pn.has(this.form)||(Pn.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),ts.has(this.form)||(ts.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const i=In.get(this.form);i&&(i.delete(this.host),i.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Pn.has(this.form)&&(this.form.reportValidity=Pn.get(this.form),Pn.delete(this.form)),ts.has(this.form)&&(this.form.checkValidity=ts.get(this.form),ts.delete(this.form)),this.form=void 0))}setUserInteracted(i,n){n?xu.add(i):xu.delete(i),i.requestUpdate()}doAction(i,n){if(this.form){const r=document.createElement("button");r.type=i,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",n&&(r.name=n.name,r.value=n.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(c=>{n.hasAttribute(c)&&r.setAttribute(c,n.getAttribute(c))})),this.form.append(r),r.click(),r.remove()}}getForm(){var i;return(i=this.form)!=null?i:null}reset(i){this.doAction("reset",i)}submit(i){this.doAction("submit",i)}setValidity(i){const n=this.host,r=!!xu.has(n),c=!!n.required;n.toggleAttribute("data-required",c),n.toggleAttribute("data-optional",!c),n.toggleAttribute("data-invalid",!i),n.toggleAttribute("data-valid",i),n.toggleAttribute("data-user-invalid",!i&&r),n.toggleAttribute("data-user-valid",i&&r)}updateValidity(){const i=this.host;this.setValidity(i.validity.valid)}emitInvalidEvent(i){const n=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});i||n.preventDefault(),this.host.dispatchEvent(n)||i==null||i.preventDefault()}},Zu=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(vs(Sa({},Zu),{valid:!1,valueMissing:!0}));Object.freeze(vs(Sa({},Zu),{valid:!1,customError:!0}));var Rv=jt`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,kl=class{constructor(i,...n){this.slotNames=[],this.handleSlotChange=r=>{const c=r.target;(this.slotNames.includes("[default]")&&!c.name||c.name&&this.slotNames.includes(c.name))&&this.host.requestUpdate()},(this.host=i).addController(this),this.slotNames=n}hasDefaultSlot(){return[...this.host.childNodes].some(i=>{if(i.nodeType===i.TEXT_NODE&&i.textContent.trim()!=="")return!0;if(i.nodeType===i.ELEMENT_NODE){const n=i;if(n.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!n.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(i){return this.host.querySelector(`:scope > [slot="${i}"]`)!==null}test(i){return i==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(i)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},ku="";function Ou(i){ku=i}function $v(i=""){if(!ku){const n=[...document.getElementsByTagName("script")],r=n.find(c=>c.hasAttribute("data-shoelace"));if(r)Ou(r.getAttribute("data-shoelace"));else{const c=n.find(f=>/shoelace(\.min)?\.js($|\?)/.test(f.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(f.src));let u="";c&&(u=c.getAttribute("src")),Ou(u.split("/").slice(0,-1).join("/"))}}return ku.replace(/\/$/,"")+(i?`/${i.replace(/^\//,"")}`:"")}var Nv={name:"default",resolver:i=>$v(`assets/icons/${i}.svg`)},Mv=Nv,g0={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Uv={name:"system",resolver:i=>i in g0?`data:image/svg+xml,${encodeURIComponent(g0[i])}`:""},Hv=Uv,Bv=[Mv,Hv],Du=[];function Lv(i){Du.push(i)}function jv(i){Du=Du.filter(n=>n!==i)}function b0(i){return Bv.find(n=>n.name===i)}var Vv=jt`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function mt(i,n){const r=Sa({waitUntilFirstUpdate:!1},n);return(c,u)=>{const{update:f}=c,h=Array.isArray(i)?i:[i];c.update=function(y){h.forEach(v=>{const g=v;if(y.has(g)){const C=y.get(g),k=this[g];C!==k&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[u](C,k)}}),f.call(this,y)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qv=(i,n)=>(i==null?void 0:i._$litType$)!==void 0,Yv=i=>i.strings===void 0,Xv={},Gv=(i,n=Xv)=>i._$AH=n;var es=Symbol(),Bo=Symbol(),wu,Su=new Map,_e=class extends Rt{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(i,n){var r;let c;if(n!=null&&n.spriteSheet)return this.svg=ot`<svg part="svg">
        <use part="use" href="${i}"></use>
      </svg>`,this.svg;try{if(c=await fetch(i,{mode:"cors"}),!c.ok)return c.status===410?es:Bo}catch{return Bo}try{const u=document.createElement("div");u.innerHTML=await c.text();const f=u.firstElementChild;if(((r=f==null?void 0:f.tagName)==null?void 0:r.toLowerCase())!=="svg")return es;wu||(wu=new DOMParser);const y=wu.parseFromString(f.outerHTML,"text/html").body.querySelector("svg");return y?(y.part.add("svg"),document.adoptNode(y)):es}catch{return es}}connectedCallback(){super.connectedCallback(),Lv(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),jv(this)}getIconSource(){const i=b0(this.library);return this.name&&i?{url:i.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var i;const{url:n,fromLibrary:r}=this.getIconSource(),c=r?b0(this.library):void 0;if(!n){this.svg=null;return}let u=Su.get(n);if(u||(u=this.resolveIcon(n,c),Su.set(n,u)),!this.initialRender)return;const f=await u;if(f===Bo&&Su.delete(n),n===this.getIconSource().url){if(qv(f)){if(this.svg=f,c){await this.updateComplete;const h=this.shadowRoot.querySelector("[part='svg']");typeof c.mutator=="function"&&h&&c.mutator(h)}return}switch(f){case Bo:case es:this.svg=null,this.emit("sl-error");break;default:this.svg=f.cloneNode(!0),(i=c==null?void 0:c.mutator)==null||i.call(c,this.svg),this.emit("sl-load")}}}render(){return this.svg}};_e.styles=[Gt,Vv];m([qt()],_e.prototype,"svg",2);m([_({reflect:!0})],_e.prototype,"name",2);m([_()],_e.prototype,"src",2);m([_()],_e.prototype,"label",2);m([_({reflect:!0})],_e.prototype,"library",2);m([mt("label")],_e.prototype,"handleLabelChange",1);m([mt(["name","src","library"])],_e.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ba={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Ku=i=>(...n)=>({_$litDirective$:i,values:n});let Fu=class{constructor(n){}get _$AU(){return this._$AM._$AU}_$AT(n,r,c){this._$Ct=n,this._$AM=r,this._$Ci=c}_$AS(n,r){return this.update(n,r)}update(n,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=Ku(class extends Fu{constructor(i){var n;if(super(i),i.type!==ba.ATTRIBUTE||i.name!=="class"||((n=i.strings)==null?void 0:n.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(n=>i[n]).join(" ")+" "}update(i,[n]){var c,u;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(f=>f!=="")));for(const f in n)n[f]&&!((c=this.nt)!=null&&c.has(f))&&this.st.add(f);return this.render(n)}const r=i.element.classList;for(const f of this.st)f in n||(r.remove(f),this.st.delete(f));for(const f in n){const h=!!n[f];h===this.st.has(f)||(u=this.nt)!=null&&u.has(f)||(h?(r.add(f),this.st.add(f)):(r.remove(f),this.st.delete(f)))}return ul}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K0=Symbol.for(""),Qv=i=>{if((i==null?void 0:i.r)===K0)return i==null?void 0:i._$litStatic$},Go=(i,...n)=>({_$litStatic$:n.reduce((r,c,u)=>r+(f=>{if(f._$litStatic$!==void 0)return f._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${f}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(c)+i[u+1],i[0]),r:K0}),v0=new Map,Zv=i=>(n,...r)=>{const c=r.length;let u,f;const h=[],y=[];let v,g=0,C=!1;for(;g<c;){for(v=n[g];g<c&&(f=r[g],(u=Qv(f))!==void 0);)v+=u+n[++g],C=!0;g!==c&&y.push(f),h.push(v),g++}if(g===c&&h.push(n[c]),C){const k=h.join("$$lit$$");(n=v0.get(k))===void 0&&(h.raw=h,v0.set(k,n=h)),r=y}return i(n,...r)},qo=Zv(ot);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=i=>i??Pt;var Tt=class extends Rt{constructor(){super(...arguments),this.formControlController=new Qi(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new kl(this,"[default]","prefix","suffix"),this.localize=new He(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Zu}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(i){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(i)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(i){this.button.focus(i)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(i){this.isButton()&&(this.button.setCustomValidity(i),this.formControlController.updateValidity())}render(){const i=this.isLink(),n=i?Go`a`:Go`button`;return qo`
      <${n}
        part="base"
        class=${Lt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${at(i?void 0:this.disabled)}
        type=${at(i?void 0:this.type)}
        title=${this.title}
        name=${at(i?void 0:this.name)}
        value=${at(i?void 0:this.value)}
        href=${at(i&&!this.disabled?this.href:void 0)}
        target=${at(i?this.target:void 0)}
        download=${at(i?this.download:void 0)}
        rel=${at(i?this.rel:void 0)}
        role=${at(i?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?qo` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?qo`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${n}>
    `}};Tt.styles=[Gt,Rv];Tt.dependencies={"sl-icon":_e,"sl-spinner":ys};m([ht(".button")],Tt.prototype,"button",2);m([qt()],Tt.prototype,"hasFocus",2);m([qt()],Tt.prototype,"invalid",2);m([_()],Tt.prototype,"title",2);m([_({reflect:!0})],Tt.prototype,"variant",2);m([_({reflect:!0})],Tt.prototype,"size",2);m([_({type:Boolean,reflect:!0})],Tt.prototype,"caret",2);m([_({type:Boolean,reflect:!0})],Tt.prototype,"disabled",2);m([_({type:Boolean,reflect:!0})],Tt.prototype,"loading",2);m([_({type:Boolean,reflect:!0})],Tt.prototype,"outline",2);m([_({type:Boolean,reflect:!0})],Tt.prototype,"pill",2);m([_({type:Boolean,reflect:!0})],Tt.prototype,"circle",2);m([_()],Tt.prototype,"type",2);m([_()],Tt.prototype,"name",2);m([_()],Tt.prototype,"value",2);m([_()],Tt.prototype,"href",2);m([_()],Tt.prototype,"target",2);m([_()],Tt.prototype,"rel",2);m([_()],Tt.prototype,"download",2);m([_()],Tt.prototype,"form",2);m([_({attribute:"formaction"})],Tt.prototype,"formAction",2);m([_({attribute:"formenctype"})],Tt.prototype,"formEnctype",2);m([_({attribute:"formmethod"})],Tt.prototype,"formMethod",2);m([_({attribute:"formnovalidate",type:Boolean})],Tt.prototype,"formNoValidate",2);m([_({attribute:"formtarget"})],Tt.prototype,"formTarget",2);m([mt("disabled",{waitUntilFirstUpdate:!0})],Tt.prototype,"handleDisabledChange",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kv=new Set(["children","localName","ref","style","className"]),y0=new WeakMap,_0=(i,n,r,c,u)=>{const f=u==null?void 0:u[n];f===void 0?(i[n]=r,r==null&&n in HTMLElement.prototype&&i.removeAttribute(n)):r!==c&&((h,y,v)=>{let g=y0.get(h);g===void 0&&y0.set(h,g=new Map);let C=g.get(y);v!==void 0?C===void 0?(g.set(y,C={handleEvent:v}),h.addEventListener(y,C)):C.handleEvent=v:C!==void 0&&(g.delete(y),h.removeEventListener(y,C))})(i,f,r)},ee=({react:i,tagName:n,elementClass:r,events:c,displayName:u})=>{const f=new Set(Object.keys(c??{})),h=i.forwardRef((y,v)=>{const g=i.useRef(new Map),C=i.useRef(null),k={},N={};for(const[O,U]of Object.entries(y))Kv.has(O)?k[O==="className"?"class":O]=U:f.has(O)||O in r.prototype?N[O]=U:k[O]=U;return i.useLayoutEffect(()=>{if(C.current===null)return;const O=new Map;for(const U in N)_0(C.current,U,y[U],g.current.get(U),c),g.current.delete(U),O.set(U,y[U]);for(const[U,L]of g.current)_0(C.current,U,void 0,L,c);g.current=O}),i.useLayoutEffect(()=>{var O;(O=C.current)==null||O.removeAttribute("defer-hydration")},[]),k.suppressHydrationWarning=!0,i.createElement(n,{...k,ref:i.useCallback(O=>{C.current=O,typeof v=="function"?v(O):v!==null&&(v.current=O)},[v])})});return h.displayName=u??r.name,h};var Fv="sl-button";Tt.define("sl-button");var Jv=ee({tagName:Fv,elementClass:Tt,react:te,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlButton"}),Oe=Jv,Wv=jt`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Zi=class extends Rt{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(i){const n=ls(i.target);n==null||n.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(i){const n=ls(i.target);n==null||n.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(i){const n=ls(i.target);n==null||n.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(i){const n=ls(i.target);n==null||n.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const i=[...this.defaultSlot.assignedElements({flatten:!0})];i.forEach(n=>{const r=i.indexOf(n),c=ls(n);c&&(c.toggleAttribute("data-sl-button-group__button",!0),c.toggleAttribute("data-sl-button-group__button--first",r===0),c.toggleAttribute("data-sl-button-group__button--inner",r>0&&r<i.length-1),c.toggleAttribute("data-sl-button-group__button--last",r===i.length-1),c.toggleAttribute("data-sl-button-group__button--radio",c.tagName.toLowerCase()==="sl-radio-button"))})}render(){return ot`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Zi.styles=[Gt,Wv];m([ht("slot")],Zi.prototype,"defaultSlot",2);m([qt()],Zi.prototype,"disableRole",2);m([_()],Zi.prototype,"label",2);function ls(i){var n;const r="sl-button, sl-radio-button";return(n=i.closest(r))!=null?n:i.querySelector(r)}var Iv="sl-button-group";Zi.define("sl-button-group");var Pv=ee({tagName:Iv,elementClass:Zi,react:te,events:{},displayName:"SlButtonGroup"}),Ju=Pv,ty="sl-icon";_e.define("sl-icon");var ey=ee({tagName:ty,elementClass:_e,react:te,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlIcon"}),Qe=ey,ly=jt`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,xe=class extends Rt{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(i){this.disabled&&(i.preventDefault(),i.stopPropagation())}click(){this.button.click()}focus(i){this.button.focus(i)}blur(){this.button.blur()}render(){const i=!!this.href,n=i?Go`a`:Go`button`;return qo`
      <${n}
        part="base"
        class=${Lt({"icon-button":!0,"icon-button--disabled":!i&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${at(i?void 0:this.disabled)}
        type=${at(i?void 0:"button")}
        href=${at(i?this.href:void 0)}
        target=${at(i?this.target:void 0)}
        download=${at(i?this.download:void 0)}
        rel=${at(i&&this.target?"noreferrer noopener":void 0)}
        role=${at(i?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${at(this.name)}
          library=${at(this.library)}
          src=${at(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${n}>
    `}};xe.styles=[Gt,ly];xe.dependencies={"sl-icon":_e};m([ht(".icon-button")],xe.prototype,"button",2);m([qt()],xe.prototype,"hasFocus",2);m([_()],xe.prototype,"name",2);m([_()],xe.prototype,"library",2);m([_()],xe.prototype,"src",2);m([_()],xe.prototype,"href",2);m([_()],xe.prototype,"target",2);m([_()],xe.prototype,"download",2);m([_()],xe.prototype,"label",2);m([_({type:Boolean,reflect:!0})],xe.prototype,"disabled",2);var ay="sl-icon-button";xe.define("sl-icon-button");var iy=ee({tagName:ay,elementClass:xe,react:te,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlIconButton"}),zu=iy,ny=jt`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,x0=new WeakMap;function F0(i){let n=x0.get(i);return n||(n=window.getComputedStyle(i,null),x0.set(i,n)),n}function sy(i){if(typeof i.checkVisibility=="function")return i.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const n=F0(i);return n.visibility!=="hidden"&&n.display!=="none"}function oy(i){const n=F0(i),{overflowY:r,overflowX:c}=n;return r==="scroll"||c==="scroll"?!0:r!=="auto"||c!=="auto"?!1:i.scrollHeight>i.clientHeight&&r==="auto"||i.scrollWidth>i.clientWidth&&c==="auto"}function ry(i){const n=i.tagName.toLowerCase(),r=Number(i.getAttribute("tabindex"));if(i.hasAttribute("tabindex")&&(isNaN(r)||r<=-1)||i.hasAttribute("disabled")||i.closest("[inert]"))return!1;if(n==="input"&&i.getAttribute("type")==="radio"){const f=i.getRootNode(),h=`input[type='radio'][name="${i.getAttribute("name")}"]`,y=f.querySelector(`${h}:checked`);return y?y===i:f.querySelector(h)===i}return sy(i)?(n==="audio"||n==="video")&&i.hasAttribute("controls")||i.hasAttribute("tabindex")||i.hasAttribute("contenteditable")&&i.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(n)?!0:oy(i):!1}function cy(i,n){var r;return((r=i.getRootNode({composed:!0}))==null?void 0:r.host)!==n}function w0(i){const n=new WeakMap,r=[];function c(u){if(u instanceof Element){if(u.hasAttribute("inert")||u.closest("[inert]")||n.has(u))return;n.set(u,!0),!r.includes(u)&&ry(u)&&r.push(u),u instanceof HTMLSlotElement&&cy(u,i)&&u.assignedElements({flatten:!0}).forEach(f=>{c(f)}),u.shadowRoot!==null&&u.shadowRoot.mode==="open"&&c(u.shadowRoot)}for(const f of u.children)c(f)}return c(i),r.sort((u,f)=>{const h=Number(u.getAttribute("tabindex"))||0;return(Number(f.getAttribute("tabindex"))||0)-h})}function*Wu(i=document.activeElement){i!=null&&(yield i,"shadowRoot"in i&&i.shadowRoot&&i.shadowRoot.mode!=="closed"&&(yield*Tv(Wu(i.shadowRoot.activeElement))))}function uy(){return[...Wu()].pop()}var as=[],J0=class{constructor(i){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=n=>{var r;if(n.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const c=uy();if(this.previousFocus=c,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;n.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const u=w0(this.element);let f=u.findIndex(y=>y===c);this.previousFocus=this.currentFocus;const h=this.tabDirection==="forward"?1:-1;for(;;){f+h>=u.length?f=0:f+h<0?f=u.length-1:f+=h,this.previousFocus=this.currentFocus;const y=u[f];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||y&&this.possiblyHasTabbableChildren(y))return;n.preventDefault(),this.currentFocus=y,(r=this.currentFocus)==null||r.focus({preventScroll:!1});const v=[...Wu()];if(v.includes(this.currentFocus)||!v.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=i,this.elementsWithTabbableControls=["iframe"]}activate(){as.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){as=as.filter(i=>i!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return as[as.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const i=w0(this.element);if(!this.element.matches(":focus-within")){const n=i[0],r=i[i.length-1],c=this.tabDirection==="forward"?n:r;typeof(c==null?void 0:c.focus)=="function"&&(this.currentFocus=c,c.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(i){return this.elementsWithTabbableControls.includes(i.tagName.toLowerCase())||i.hasAttribute("controls")}};function dy(i,n){return{top:Math.round(i.getBoundingClientRect().top-n.getBoundingClientRect().top),left:Math.round(i.getBoundingClientRect().left-n.getBoundingClientRect().left)}}var Ru=new Set;function fy(){const i=document.documentElement.clientWidth;return Math.abs(window.innerWidth-i)}function hy(){const i=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(i)||!i?0:i}function cs(i){if(Ru.add(i),!document.documentElement.classList.contains("sl-scroll-lock")){const n=fy()+hy();let r=getComputedStyle(document.documentElement).scrollbarGutter;(!r||r==="auto")&&(r="stable"),n<2&&(r=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",r),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${n}px`)}}function us(i){Ru.delete(i),Ru.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function py(i,n,r="vertical",c="smooth"){const u=dy(i,n),f=u.top+n.scrollTop,h=u.left+n.scrollLeft,y=n.scrollLeft,v=n.scrollLeft+n.offsetWidth,g=n.scrollTop,C=n.scrollTop+n.offsetHeight;(r==="horizontal"||r==="both")&&(h<y?n.scrollTo({left:h,behavior:c}):h+i.clientWidth>v&&n.scrollTo({left:h-n.offsetWidth+i.clientWidth,behavior:c})),(r==="vertical"||r==="both")&&(f<g?n.scrollTo({top:f,behavior:c}):f+i.clientHeight>C&&n.scrollTo({top:f-n.offsetHeight+i.clientHeight,behavior:c}))}var W0=new Map,my=new WeakMap;function gy(i){return i??{keyframes:[],options:{duration:0}}}function S0(i,n){return n.toLowerCase()==="rtl"?{keyframes:i.rtlKeyframes||i.keyframes,options:i.options}:i}function Vt(i,n){W0.set(i,gy(n))}function re(i,n,r){const c=my.get(i);if(c!=null&&c[n])return S0(c[n],r.dir);const u=W0.get(n);return u?S0(u,r.dir):{keyframes:[],options:{duration:0}}}function El(i,n){return new Promise(r=>{function c(u){u.target===i&&(i.removeEventListener(n,c),r())}i.addEventListener(n,c)})}function ye(i,n,r){return new Promise(c=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const u=i.animate(n,vs(Sa({},r),{duration:by()?0:r.duration}));u.addEventListener("cancel",c,{once:!0}),u.addEventListener("finish",c,{once:!0})})}function z0(i){return i=i.toString().toLowerCase(),i.indexOf("ms")>-1?parseFloat(i):i.indexOf("s")>-1?parseFloat(i)*1e3:parseFloat(i)}function by(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function De(i){return Promise.all(i.getAnimations().map(n=>new Promise(r=>{n.cancel(),requestAnimationFrame(r)})))}function C0(i,n){return i.map(r=>vs(Sa({},r),{height:r.height==="auto"?`${n}px`:r.height}))}function A0(i){return i.charAt(0).toUpperCase()+i.slice(1)}var Be=class extends Rt{constructor(){super(...arguments),this.hasSlotController=new kl(this,"footer"),this.localize=new He(this),this.modal=new J0(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=i=>{this.contained||i.key==="Escape"&&this.modal.isActive()&&this.open&&(i.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),cs(this)))}disconnectedCallback(){super.disconnectedCallback(),us(this),this.removeOpenListeners()}requestClose(i){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:i}}).defaultPrevented){const r=re(this,"drawer.denyClose",{dir:this.localize.dir()});ye(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var i;"CloseWatcher"in window?((i=this.closeWatcher)==null||i.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var i;document.removeEventListener("keydown",this.handleDocumentKeyDown),(i=this.closeWatcher)==null||i.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),cs(this));const i=this.querySelector("[autofocus]");i&&i.removeAttribute("autofocus"),await Promise.all([De(this.drawer),De(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(i?i.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),i&&i.setAttribute("autofocus","")});const n=re(this,`drawer.show${A0(this.placement)}`,{dir:this.localize.dir()}),r=re(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([ye(this.panel,n.keyframes,n.options),ye(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),us(this)),await Promise.all([De(this.drawer),De(this.overlay)]);const i=re(this,`drawer.hide${A0(this.placement)}`,{dir:this.localize.dir()}),n=re(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([ye(this.overlay,n.keyframes,n.options).then(()=>{this.overlay.hidden=!0}),ye(this.panel,i.keyframes,i.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),cs(this)),this.open&&this.contained&&(this.modal.deactivate(),us(this))}async show(){if(!this.open)return this.open=!0,El(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,El(this,"sl-after-hide")}render(){return ot`
      <div
        part="base"
        class=${Lt({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${at(this.noHeader?this.label:void 0)}
          aria-labelledby=${at(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":ot`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Be.styles=[Gt,ny];Be.dependencies={"sl-icon-button":xe};m([ht(".drawer")],Be.prototype,"drawer",2);m([ht(".drawer__panel")],Be.prototype,"panel",2);m([ht(".drawer__overlay")],Be.prototype,"overlay",2);m([_({type:Boolean,reflect:!0})],Be.prototype,"open",2);m([_({reflect:!0})],Be.prototype,"label",2);m([_({reflect:!0})],Be.prototype,"placement",2);m([_({type:Boolean,reflect:!0})],Be.prototype,"contained",2);m([_({attribute:"no-header",type:Boolean,reflect:!0})],Be.prototype,"noHeader",2);m([mt("open",{waitUntilFirstUpdate:!0})],Be.prototype,"handleOpenChange",1);m([mt("contained",{waitUntilFirstUpdate:!0})],Be.prototype,"handleNoModalChange",1);Vt("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});Vt("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});Vt("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});Vt("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});Vt("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});Vt("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});Vt("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});Vt("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});Vt("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});Vt("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Vt("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var vy="sl-drawer";Be.define("sl-drawer");ee({tagName:vy,elementClass:Be,react:te,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDrawer"});var yy=jt`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,Fe=class Ka extends Rt{constructor(){super(...arguments),this.hasSlotController=new kl(this,"icon","suffix"),this.localize=new He(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var n;(n=this.countdownAnimation)==null||n.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var n;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(n=this.countdownAnimation)==null||n.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:n}=this,r="100%",c="0";this.countdownAnimation=n.animate([{width:r},{width:c}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await De(this.base),this.base.hidden=!1;const{keyframes:n,options:r}=re(this,"alert.show",{dir:this.localize.dir()});await ye(this.base,n,r),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await De(this.base);const{keyframes:n,options:r}=re(this,"alert.hide",{dir:this.localize.dir()});await ye(this.base,n,r),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,El(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,El(this,"sl-after-hide")}async toast(){return new Promise(n=>{this.handleCountdownChange(),Ka.toastStack.parentElement===null&&document.body.append(Ka.toastStack),Ka.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Ka.toastStack.removeChild(this),n(),Ka.toastStack.querySelector("sl-alert")===null&&Ka.toastStack.remove()},{once:!0})})}render(){return ot`
      <div
        part="base"
        class=${Lt({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?ot`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?ot`
              <div
                class=${Lt({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};Fe.styles=[Gt,yy];Fe.dependencies={"sl-icon-button":xe};m([ht('[part~="base"]')],Fe.prototype,"base",2);m([ht(".alert__countdown-elapsed")],Fe.prototype,"countdownElement",2);m([_({type:Boolean,reflect:!0})],Fe.prototype,"open",2);m([_({type:Boolean,reflect:!0})],Fe.prototype,"closable",2);m([_({reflect:!0})],Fe.prototype,"variant",2);m([_({type:Number})],Fe.prototype,"duration",2);m([_({type:String,reflect:!0})],Fe.prototype,"countdown",2);m([qt()],Fe.prototype,"remainingTime",2);m([mt("open",{waitUntilFirstUpdate:!0})],Fe.prototype,"handleOpenChange",1);m([mt("duration")],Fe.prototype,"handleDurationChange",1);var I0=Fe;Vt("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Vt("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var _y="sl-alert";I0.define("sl-alert");var xy=ee({tagName:_y,elementClass:I0,react:te,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlAlert"}),P0=xy,wy=jt`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,vl=class extends Rt{constructor(){super(...arguments),this.hasSlotController=new kl(this,"footer"),this.localize=new He(this),this.modal=new J0(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=i=>{i.key==="Escape"&&this.modal.isActive()&&this.open&&(i.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),cs(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),us(this),this.removeOpenListeners()}requestClose(i){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:i}}).defaultPrevented){const r=re(this,"dialog.denyClose",{dir:this.localize.dir()});ye(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var i;"CloseWatcher"in window?((i=this.closeWatcher)==null||i.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var i;(i=this.closeWatcher)==null||i.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),cs(this);const i=this.querySelector("[autofocus]");i&&i.removeAttribute("autofocus"),await Promise.all([De(this.dialog),De(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(i?i.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),i&&i.setAttribute("autofocus","")});const n=re(this,"dialog.show",{dir:this.localize.dir()}),r=re(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([ye(this.panel,n.keyframes,n.options),ye(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([De(this.dialog),De(this.overlay)]);const i=re(this,"dialog.hide",{dir:this.localize.dir()}),n=re(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([ye(this.overlay,n.keyframes,n.options).then(()=>{this.overlay.hidden=!0}),ye(this.panel,i.keyframes,i.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,us(this);const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,El(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,El(this,"sl-after-hide")}render(){return ot`
      <div
        part="base"
        class=${Lt({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${at(this.noHeader?this.label:void 0)}
          aria-labelledby=${at(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":ot`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};vl.styles=[Gt,wy];vl.dependencies={"sl-icon-button":xe};m([ht(".dialog")],vl.prototype,"dialog",2);m([ht(".dialog__panel")],vl.prototype,"panel",2);m([ht(".dialog__overlay")],vl.prototype,"overlay",2);m([_({type:Boolean,reflect:!0})],vl.prototype,"open",2);m([_({reflect:!0})],vl.prototype,"label",2);m([_({attribute:"no-header",type:Boolean,reflect:!0})],vl.prototype,"noHeader",2);m([mt("open",{waitUntilFirstUpdate:!0})],vl.prototype,"handleOpenChange",1);Vt("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Vt("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Vt("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});Vt("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Vt("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Sy="sl-dialog";vl.define("sl-dialog");var zy=ee({tagName:Sy,elementClass:vl,react:te,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDialog"}),Iu=zy,Cy=jt`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,Jo=(i="value")=>(n,r)=>{const c=n.constructor,u=c.prototype.attributeChangedCallback;c.prototype.attributeChangedCallback=function(f,h,y){var v;const g=c.getPropertyOptions(i),C=typeof g.attribute=="string"?g.attribute:i;if(f===C){const k=g.converter||qi,O=(typeof k=="function"?k:(v=k==null?void 0:k.fromAttribute)!=null?v:qi.fromAttribute)(y,g.type);this[i]!==O&&(this[r]=O)}u.call(this,f,h,y)}},_s=jt`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xi=Ku(class extends Fu{constructor(i){if(super(i),i.type!==ba.PROPERTY&&i.type!==ba.ATTRIBUTE&&i.type!==ba.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Yv(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[n]){if(n===ul||n===Pt)return n;const r=i.element,c=i.name;if(i.type===ba.PROPERTY){if(n===r[c])return ul}else if(i.type===ba.BOOLEAN_ATTRIBUTE){if(!!n===r.hasAttribute(c))return ul}else if(i.type===ba.ATTRIBUTE&&r.getAttribute(c)===n+"")return ul;return Gv(i),n}});var dt=class extends Rt{constructor(){super(...arguments),this.formControlController=new Qi(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new kl(this,"help-text","label"),this.localize=new He(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var i;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((i=this.input)==null?void 0:i.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(i){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=i,this.value=this.__dateInput.value}get valueAsNumber(){var i;return this.__numberInput.value=this.value,((i=this.input)==null?void 0:i.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(i){this.__numberInput.valueAsNumber=i,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(i){i.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(i){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(i)}handleKeyDown(i){const n=i.metaKey||i.ctrlKey||i.shiftKey||i.altKey;i.key==="Enter"&&!n&&setTimeout(()=>{!i.defaultPrevented&&!i.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(i){this.input.focus(i)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(i,n,r="none"){this.input.setSelectionRange(i,n,r)}setRangeText(i,n,r,c="preserve"){const u=n??this.input.selectionStart,f=r??this.input.selectionEnd;this.input.setRangeText(i,u,f,c),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(i){this.input.setCustomValidity(i),this.formControlController.updateValidity()}render(){const i=this.hasSlotController.test("label"),n=this.hasSlotController.test("help-text"),r=this.label?!0:!!i,c=this.helpText?!0:!!n,f=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return ot`
      <div
        part="form-control"
        class=${Lt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":c})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Lt({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${at(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${at(this.placeholder)}
              minlength=${at(this.minlength)}
              maxlength=${at(this.maxlength)}
              min=${at(this.min)}
              max=${at(this.max)}
              step=${at(this.step)}
              .value=${Xi(this.value)}
              autocapitalize=${at(this.autocapitalize)}
              autocomplete=${at(this.autocomplete)}
              autocorrect=${at(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${at(this.pattern)}
              enterkeyhint=${at(this.enterkeyhint)}
              inputmode=${at(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${f?ot`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?ot`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?ot`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:ot`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${c?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};dt.styles=[Gt,_s,Cy];dt.dependencies={"sl-icon":_e};m([ht(".input__control")],dt.prototype,"input",2);m([qt()],dt.prototype,"hasFocus",2);m([_()],dt.prototype,"title",2);m([_({reflect:!0})],dt.prototype,"type",2);m([_()],dt.prototype,"name",2);m([_()],dt.prototype,"value",2);m([Jo()],dt.prototype,"defaultValue",2);m([_({reflect:!0})],dt.prototype,"size",2);m([_({type:Boolean,reflect:!0})],dt.prototype,"filled",2);m([_({type:Boolean,reflect:!0})],dt.prototype,"pill",2);m([_()],dt.prototype,"label",2);m([_({attribute:"help-text"})],dt.prototype,"helpText",2);m([_({type:Boolean})],dt.prototype,"clearable",2);m([_({type:Boolean,reflect:!0})],dt.prototype,"disabled",2);m([_()],dt.prototype,"placeholder",2);m([_({type:Boolean,reflect:!0})],dt.prototype,"readonly",2);m([_({attribute:"password-toggle",type:Boolean})],dt.prototype,"passwordToggle",2);m([_({attribute:"password-visible",type:Boolean})],dt.prototype,"passwordVisible",2);m([_({attribute:"no-spin-buttons",type:Boolean})],dt.prototype,"noSpinButtons",2);m([_({reflect:!0})],dt.prototype,"form",2);m([_({type:Boolean,reflect:!0})],dt.prototype,"required",2);m([_()],dt.prototype,"pattern",2);m([_({type:Number})],dt.prototype,"minlength",2);m([_({type:Number})],dt.prototype,"maxlength",2);m([_()],dt.prototype,"min",2);m([_()],dt.prototype,"max",2);m([_()],dt.prototype,"step",2);m([_()],dt.prototype,"autocapitalize",2);m([_()],dt.prototype,"autocorrect",2);m([_()],dt.prototype,"autocomplete",2);m([_({type:Boolean})],dt.prototype,"autofocus",2);m([_()],dt.prototype,"enterkeyhint",2);m([_({type:Boolean,converter:{fromAttribute:i=>!(!i||i==="false"),toAttribute:i=>i?"true":"false"}})],dt.prototype,"spellcheck",2);m([_()],dt.prototype,"inputmode",2);m([mt("disabled",{waitUntilFirstUpdate:!0})],dt.prototype,"handleDisabledChange",1);m([mt("step",{waitUntilFirstUpdate:!0})],dt.prototype,"handleStepChange",1);m([mt("value",{waitUntilFirstUpdate:!0})],dt.prototype,"handleValueChange",1);var Ay="sl-input";dt.define("sl-input");var Ey=ee({tagName:Ay,elementClass:dt,react:te,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlClear:"sl-clear",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlInput"}),ms=Ey,Ty=jt`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,zt=class extends Rt{constructor(){super(...arguments),this.formControlController=new Qi(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new kl(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var i;super.disconnectedCallback(),this.input&&((i=this.resizeObserver)==null||i.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(i){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(i)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(i){this.input.focus(i)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(i){if(i){typeof i.top=="number"&&(this.input.scrollTop=i.top),typeof i.left=="number"&&(this.input.scrollLeft=i.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(i,n,r="none"){this.input.setSelectionRange(i,n,r)}setRangeText(i,n,r,c="preserve"){const u=n??this.input.selectionStart,f=r??this.input.selectionEnd;this.input.setRangeText(i,u,f,c),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(i){this.input.setCustomValidity(i),this.formControlController.updateValidity()}render(){const i=this.hasSlotController.test("label"),n=this.hasSlotController.test("help-text"),r=this.label?!0:!!i,c=this.helpText?!0:!!n;return ot`
      <div
        part="form-control"
        class=${Lt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":c})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Lt({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${at(this.name)}
              .value=${Xi(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${at(this.placeholder)}
              rows=${at(this.rows)}
              minlength=${at(this.minlength)}
              maxlength=${at(this.maxlength)}
              autocapitalize=${at(this.autocapitalize)}
              autocorrect=${at(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${at(this.spellcheck)}
              enterkeyhint=${at(this.enterkeyhint)}
              inputmode=${at(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!=="auto"}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${c?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};zt.styles=[Gt,_s,Ty];m([ht(".textarea__control")],zt.prototype,"input",2);m([ht(".textarea__size-adjuster")],zt.prototype,"sizeAdjuster",2);m([qt()],zt.prototype,"hasFocus",2);m([_()],zt.prototype,"title",2);m([_()],zt.prototype,"name",2);m([_()],zt.prototype,"value",2);m([_({reflect:!0})],zt.prototype,"size",2);m([_({type:Boolean,reflect:!0})],zt.prototype,"filled",2);m([_()],zt.prototype,"label",2);m([_({attribute:"help-text"})],zt.prototype,"helpText",2);m([_()],zt.prototype,"placeholder",2);m([_({type:Number})],zt.prototype,"rows",2);m([_()],zt.prototype,"resize",2);m([_({type:Boolean,reflect:!0})],zt.prototype,"disabled",2);m([_({type:Boolean,reflect:!0})],zt.prototype,"readonly",2);m([_({reflect:!0})],zt.prototype,"form",2);m([_({type:Boolean,reflect:!0})],zt.prototype,"required",2);m([_({type:Number})],zt.prototype,"minlength",2);m([_({type:Number})],zt.prototype,"maxlength",2);m([_()],zt.prototype,"autocapitalize",2);m([_()],zt.prototype,"autocorrect",2);m([_()],zt.prototype,"autocomplete",2);m([_({type:Boolean})],zt.prototype,"autofocus",2);m([_()],zt.prototype,"enterkeyhint",2);m([_({type:Boolean,converter:{fromAttribute:i=>!(!i||i==="false"),toAttribute:i=>i?"true":"false"}})],zt.prototype,"spellcheck",2);m([_()],zt.prototype,"inputmode",2);m([Jo()],zt.prototype,"defaultValue",2);m([mt("disabled",{waitUntilFirstUpdate:!0})],zt.prototype,"handleDisabledChange",1);m([mt("rows",{waitUntilFirstUpdate:!0})],zt.prototype,"handleRowsChange",1);m([mt("value",{waitUntilFirstUpdate:!0})],zt.prototype,"handleValueChange",1);var ky="sl-textarea";zt.define("sl-textarea");var Oy=ee({tagName:ky,elementClass:zt,react:te,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlTextarea"}),Dy=Oy,Ry=jt`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,xs=class extends Rt{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};xs.styles=[Gt,Ry];m([_({type:Boolean,reflect:!0})],xs.prototype,"vertical",2);m([mt("vertical")],xs.prototype,"handleVerticalChange",1);var $y="sl-divider";xs.define("sl-divider");ee({tagName:$y,elementClass:xs,react:te,events:{},displayName:"SlDivider"});var Ny=jt`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,Ae=class extends Rt{constructor(){super(...arguments),this.formControlController=new Qi(this,{value:i=>i.checked?i.value||"on":void 0,defaultValue:i=>i.defaultChecked,setValue:(i,n)=>i.checked=n}),this.hasSlotController=new kl(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(i){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(i)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(i){i.key==="ArrowLeft"&&(i.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),i.key==="ArrowRight"&&(i.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(i){this.input.focus(i)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(i){this.input.setCustomValidity(i),this.formControlController.updateValidity()}render(){const i=this.hasSlotController.test("help-text"),n=this.helpText?!0:!!i;return ot`
      <div
        class=${Lt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":n})}
      >
        <label
          part="base"
          class=${Lt({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${at(this.value)}
            .checked=${Xi(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${n?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Ae.styles=[Gt,_s,Ny];m([ht('input[type="checkbox"]')],Ae.prototype,"input",2);m([qt()],Ae.prototype,"hasFocus",2);m([_()],Ae.prototype,"title",2);m([_()],Ae.prototype,"name",2);m([_()],Ae.prototype,"value",2);m([_({reflect:!0})],Ae.prototype,"size",2);m([_({type:Boolean,reflect:!0})],Ae.prototype,"disabled",2);m([_({type:Boolean,reflect:!0})],Ae.prototype,"checked",2);m([Jo("checked")],Ae.prototype,"defaultChecked",2);m([_({reflect:!0})],Ae.prototype,"form",2);m([_({type:Boolean,reflect:!0})],Ae.prototype,"required",2);m([_({attribute:"help-text"})],Ae.prototype,"helpText",2);m([mt("checked",{waitUntilFirstUpdate:!0})],Ae.prototype,"handleCheckedChange",1);m([mt("disabled",{waitUntilFirstUpdate:!0})],Ae.prototype,"handleDisabledChange",1);var My="sl-switch";Ae.define("sl-switch");var Uy=ee({tagName:My,elementClass:Ae,react:te,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlSwitch"}),Hi=Uy,Hy=jt`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,ce=class extends Rt{constructor(){super(...arguments),this.formControlController=new Qi(this,{value:i=>i.checked?i.value||"on":void 0,defaultValue:i=>i.defaultChecked,setValue:(i,n)=>i.checked=n}),this.hasSlotController=new kl(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(i){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(i)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(i){this.input.focus(i)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(i){this.input.setCustomValidity(i),this.formControlController.updateValidity()}render(){const i=this.hasSlotController.test("help-text"),n=this.helpText?!0:!!i;return ot`
      <div
        class=${Lt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":n})}
      >
        <label
          part="base"
          class=${Lt({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${at(this.value)}
            .indeterminate=${Xi(this.indeterminate)}
            .checked=${Xi(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?ot`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?ot`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${n?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ce.styles=[Gt,_s,Hy];ce.dependencies={"sl-icon":_e};m([ht('input[type="checkbox"]')],ce.prototype,"input",2);m([qt()],ce.prototype,"hasFocus",2);m([_()],ce.prototype,"title",2);m([_()],ce.prototype,"name",2);m([_()],ce.prototype,"value",2);m([_({reflect:!0})],ce.prototype,"size",2);m([_({type:Boolean,reflect:!0})],ce.prototype,"disabled",2);m([_({type:Boolean,reflect:!0})],ce.prototype,"checked",2);m([_({type:Boolean,reflect:!0})],ce.prototype,"indeterminate",2);m([Jo("checked")],ce.prototype,"defaultChecked",2);m([_({reflect:!0})],ce.prototype,"form",2);m([_({type:Boolean,reflect:!0})],ce.prototype,"required",2);m([_({attribute:"help-text"})],ce.prototype,"helpText",2);m([mt("disabled",{waitUntilFirstUpdate:!0})],ce.prototype,"handleDisabledChange",1);m([mt(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],ce.prototype,"handleStateChange",1);var By="sl-checkbox";ce.define("sl-checkbox");var Ly=ee({tagName:By,elementClass:ce,react:te,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlCheckbox"}),tm=Ly,jy=jt`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,ti=class extends Rt{constructor(){super(...arguments),this.localize=new He(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return ot`
      <span
        part="base"
        class=${Lt({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?ot`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};ti.styles=[Gt,jy];ti.dependencies={"sl-icon-button":xe};m([_({reflect:!0})],ti.prototype,"variant",2);m([_({reflect:!0})],ti.prototype,"size",2);m([_({type:Boolean,reflect:!0})],ti.prototype,"pill",2);m([_({type:Boolean})],ti.prototype,"removable",2);var Vy=jt`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`,qy=jt`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const _a=Math.min,Ze=Math.max,Qo=Math.round,Lo=Math.floor,Al=i=>({x:i,y:i}),Yy={left:"right",right:"left",bottom:"top",top:"bottom"},Xy={start:"end",end:"start"};function $u(i,n,r){return Ze(i,_a(n,r))}function Ki(i,n){return typeof i=="function"?i(n):i}function xa(i){return i.split("-")[0]}function Fi(i){return i.split("-")[1]}function em(i){return i==="x"?"y":"x"}function Pu(i){return i==="y"?"height":"width"}function Ia(i){return["top","bottom"].includes(xa(i))?"y":"x"}function td(i){return em(Ia(i))}function Gy(i,n,r){r===void 0&&(r=!1);const c=Fi(i),u=td(i),f=Pu(u);let h=u==="x"?c===(r?"end":"start")?"right":"left":c==="start"?"bottom":"top";return n.reference[f]>n.floating[f]&&(h=Zo(h)),[h,Zo(h)]}function Qy(i){const n=Zo(i);return[Nu(i),n,Nu(n)]}function Nu(i){return i.replace(/start|end/g,n=>Xy[n])}function Zy(i,n,r){const c=["left","right"],u=["right","left"],f=["top","bottom"],h=["bottom","top"];switch(i){case"top":case"bottom":return r?n?u:c:n?c:u;case"left":case"right":return n?f:h;default:return[]}}function Ky(i,n,r,c){const u=Fi(i);let f=Zy(xa(i),r==="start",c);return u&&(f=f.map(h=>h+"-"+u),n&&(f=f.concat(f.map(Nu)))),f}function Zo(i){return i.replace(/left|right|bottom|top/g,n=>Yy[n])}function Fy(i){return{top:0,right:0,bottom:0,left:0,...i}}function lm(i){return typeof i!="number"?Fy(i):{top:i,right:i,bottom:i,left:i}}function Ko(i){const{x:n,y:r,width:c,height:u}=i;return{width:c,height:u,top:r,left:n,right:n+c,bottom:r+u,x:n,y:r}}function E0(i,n,r){let{reference:c,floating:u}=i;const f=Ia(n),h=td(n),y=Pu(h),v=xa(n),g=f==="y",C=c.x+c.width/2-u.width/2,k=c.y+c.height/2-u.height/2,N=c[y]/2-u[y]/2;let O;switch(v){case"top":O={x:C,y:c.y-u.height};break;case"bottom":O={x:C,y:c.y+c.height};break;case"right":O={x:c.x+c.width,y:k};break;case"left":O={x:c.x-u.width,y:k};break;default:O={x:c.x,y:c.y}}switch(Fi(n)){case"start":O[h]-=N*(r&&g?-1:1);break;case"end":O[h]+=N*(r&&g?-1:1);break}return O}const Jy=async(i,n,r)=>{const{placement:c="bottom",strategy:u="absolute",middleware:f=[],platform:h}=r,y=f.filter(Boolean),v=await(h.isRTL==null?void 0:h.isRTL(n));let g=await h.getElementRects({reference:i,floating:n,strategy:u}),{x:C,y:k}=E0(g,c,v),N=c,O={},U=0;for(let L=0;L<y.length;L++){const{name:q,fn:K}=y[L],{x:F,y:G,data:it,reset:X}=await K({x:C,y:k,initialPlacement:c,placement:N,strategy:u,middlewareData:O,rects:g,platform:h,elements:{reference:i,floating:n}});C=F??C,k=G??k,O={...O,[q]:{...O[q],...it}},X&&U<=50&&(U++,typeof X=="object"&&(X.placement&&(N=X.placement),X.rects&&(g=X.rects===!0?await h.getElementRects({reference:i,floating:n,strategy:u}):X.rects),{x:C,y:k}=E0(g,N,v)),L=-1)}return{x:C,y:k,placement:N,strategy:u,middlewareData:O}};async function ed(i,n){var r;n===void 0&&(n={});const{x:c,y:u,platform:f,rects:h,elements:y,strategy:v}=i,{boundary:g="clippingAncestors",rootBoundary:C="viewport",elementContext:k="floating",altBoundary:N=!1,padding:O=0}=Ki(n,i),U=lm(O),q=y[N?k==="floating"?"reference":"floating":k],K=Ko(await f.getClippingRect({element:(r=await(f.isElement==null?void 0:f.isElement(q)))==null||r?q:q.contextElement||await(f.getDocumentElement==null?void 0:f.getDocumentElement(y.floating)),boundary:g,rootBoundary:C,strategy:v})),F=k==="floating"?{x:c,y:u,width:h.floating.width,height:h.floating.height}:h.reference,G=await(f.getOffsetParent==null?void 0:f.getOffsetParent(y.floating)),it=await(f.isElement==null?void 0:f.isElement(G))?await(f.getScale==null?void 0:f.getScale(G))||{x:1,y:1}:{x:1,y:1},X=Ko(f.convertOffsetParentRelativeRectToViewportRelativeRect?await f.convertOffsetParentRelativeRectToViewportRelativeRect({elements:y,rect:F,offsetParent:G,strategy:v}):F);return{top:(K.top-X.top+U.top)/it.y,bottom:(X.bottom-K.bottom+U.bottom)/it.y,left:(K.left-X.left+U.left)/it.x,right:(X.right-K.right+U.right)/it.x}}const Wy=i=>({name:"arrow",options:i,async fn(n){const{x:r,y:c,placement:u,rects:f,platform:h,elements:y,middlewareData:v}=n,{element:g,padding:C=0}=Ki(i,n)||{};if(g==null)return{};const k=lm(C),N={x:r,y:c},O=td(u),U=Pu(O),L=await h.getDimensions(g),q=O==="y",K=q?"top":"left",F=q?"bottom":"right",G=q?"clientHeight":"clientWidth",it=f.reference[U]+f.reference[O]-N[O]-f.floating[U],X=N[O]-f.reference[O],wt=await(h.getOffsetParent==null?void 0:h.getOffsetParent(g));let kt=wt?wt[G]:0;(!kt||!await(h.isElement==null?void 0:h.isElement(wt)))&&(kt=y.floating[G]||f.floating[U]);const st=it/2-X/2,j=kt/2-L[U]/2-1,lt=_a(k[K],j),Yt=_a(k[F],j),Xt=lt,ae=kt-L[U]-Yt,$t=kt/2-L[U]/2+st,Qt=$u(Xt,$t,ae),B=!v.arrow&&Fi(u)!=null&&$t!==Qt&&f.reference[U]/2-($t<Xt?lt:Yt)-L[U]/2<0,W=B?$t<Xt?$t-Xt:$t-ae:0;return{[O]:N[O]+W,data:{[O]:Qt,centerOffset:$t-Qt-W,...B&&{alignmentOffset:W}},reset:B}}}),Iy=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(n){var r,c;const{placement:u,middlewareData:f,rects:h,initialPlacement:y,platform:v,elements:g}=n,{mainAxis:C=!0,crossAxis:k=!0,fallbackPlacements:N,fallbackStrategy:O="bestFit",fallbackAxisSideDirection:U="none",flipAlignment:L=!0,...q}=Ki(i,n);if((r=f.arrow)!=null&&r.alignmentOffset)return{};const K=xa(u),F=Ia(y),G=xa(y)===y,it=await(v.isRTL==null?void 0:v.isRTL(g.floating)),X=N||(G||!L?[Zo(y)]:Qy(y)),wt=U!=="none";!N&&wt&&X.push(...Ky(y,L,U,it));const kt=[y,...X],st=await ed(n,q),j=[];let lt=((c=f.flip)==null?void 0:c.overflows)||[];if(C&&j.push(st[K]),k){const $t=Gy(u,h,it);j.push(st[$t[0]],st[$t[1]])}if(lt=[...lt,{placement:u,overflows:j}],!j.every($t=>$t<=0)){var Yt,Xt;const $t=(((Yt=f.flip)==null?void 0:Yt.index)||0)+1,Qt=kt[$t];if(Qt)return{data:{index:$t,overflows:lt},reset:{placement:Qt}};let B=(Xt=lt.filter(W=>W.overflows[0]<=0).sort((W,Q)=>W.overflows[1]-Q.overflows[1])[0])==null?void 0:Xt.placement;if(!B)switch(O){case"bestFit":{var ae;const W=(ae=lt.filter(Q=>{if(wt){const gt=Ia(Q.placement);return gt===F||gt==="y"}return!0}).map(Q=>[Q.placement,Q.overflows.filter(gt=>gt>0).reduce((gt,x)=>gt+x,0)]).sort((Q,gt)=>Q[1]-gt[1])[0])==null?void 0:ae[0];W&&(B=W);break}case"initialPlacement":B=y;break}if(u!==B)return{reset:{placement:B}}}return{}}}};async function Py(i,n){const{placement:r,platform:c,elements:u}=i,f=await(c.isRTL==null?void 0:c.isRTL(u.floating)),h=xa(r),y=Fi(r),v=Ia(r)==="y",g=["left","top"].includes(h)?-1:1,C=f&&v?-1:1,k=Ki(n,i);let{mainAxis:N,crossAxis:O,alignmentAxis:U}=typeof k=="number"?{mainAxis:k,crossAxis:0,alignmentAxis:null}:{mainAxis:k.mainAxis||0,crossAxis:k.crossAxis||0,alignmentAxis:k.alignmentAxis};return y&&typeof U=="number"&&(O=y==="end"?U*-1:U),v?{x:O*C,y:N*g}:{x:N*g,y:O*C}}const t1=function(i){return i===void 0&&(i=0),{name:"offset",options:i,async fn(n){var r,c;const{x:u,y:f,placement:h,middlewareData:y}=n,v=await Py(n,i);return h===((r=y.offset)==null?void 0:r.placement)&&(c=y.arrow)!=null&&c.alignmentOffset?{}:{x:u+v.x,y:f+v.y,data:{...v,placement:h}}}}},e1=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(n){const{x:r,y:c,placement:u}=n,{mainAxis:f=!0,crossAxis:h=!1,limiter:y={fn:q=>{let{x:K,y:F}=q;return{x:K,y:F}}},...v}=Ki(i,n),g={x:r,y:c},C=await ed(n,v),k=Ia(xa(u)),N=em(k);let O=g[N],U=g[k];if(f){const q=N==="y"?"top":"left",K=N==="y"?"bottom":"right",F=O+C[q],G=O-C[K];O=$u(F,O,G)}if(h){const q=k==="y"?"top":"left",K=k==="y"?"bottom":"right",F=U+C[q],G=U-C[K];U=$u(F,U,G)}const L=y.fn({...n,[N]:O,[k]:U});return{...L,data:{x:L.x-r,y:L.y-c,enabled:{[N]:f,[k]:h}}}}}},l1=function(i){return i===void 0&&(i={}),{name:"size",options:i,async fn(n){var r,c;const{placement:u,rects:f,platform:h,elements:y}=n,{apply:v=()=>{},...g}=Ki(i,n),C=await ed(n,g),k=xa(u),N=Fi(u),O=Ia(u)==="y",{width:U,height:L}=f.floating;let q,K;k==="top"||k==="bottom"?(q=k,K=N===(await(h.isRTL==null?void 0:h.isRTL(y.floating))?"start":"end")?"left":"right"):(K=k,q=N==="end"?"top":"bottom");const F=L-C.top-C.bottom,G=U-C.left-C.right,it=_a(L-C[q],F),X=_a(U-C[K],G),wt=!n.middlewareData.shift;let kt=it,st=X;if((r=n.middlewareData.shift)!=null&&r.enabled.x&&(st=G),(c=n.middlewareData.shift)!=null&&c.enabled.y&&(kt=F),wt&&!N){const lt=Ze(C.left,0),Yt=Ze(C.right,0),Xt=Ze(C.top,0),ae=Ze(C.bottom,0);O?st=U-2*(lt!==0||Yt!==0?lt+Yt:Ze(C.left,C.right)):kt=L-2*(Xt!==0||ae!==0?Xt+ae:Ze(C.top,C.bottom))}await v({...n,availableWidth:st,availableHeight:kt});const j=await h.getDimensions(y.floating);return U!==j.width||L!==j.height?{reset:{rects:!0}}:{}}}};function Wo(){return typeof window<"u"}function Ji(i){return am(i)?(i.nodeName||"").toLowerCase():"#document"}function Ke(i){var n;return(i==null||(n=i.ownerDocument)==null?void 0:n.defaultView)||window}function Ol(i){var n;return(n=(am(i)?i.ownerDocument:i.document)||window.document)==null?void 0:n.documentElement}function am(i){return Wo()?i instanceof Node||i instanceof Ke(i).Node:!1}function gl(i){return Wo()?i instanceof Element||i instanceof Ke(i).Element:!1}function Tl(i){return Wo()?i instanceof HTMLElement||i instanceof Ke(i).HTMLElement:!1}function T0(i){return!Wo()||typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof Ke(i).ShadowRoot}function ws(i){const{overflow:n,overflowX:r,overflowY:c,display:u}=bl(i);return/auto|scroll|overlay|hidden|clip/.test(n+c+r)&&!["inline","contents"].includes(u)}function a1(i){return["table","td","th"].includes(Ji(i))}function Io(i){return[":popover-open",":modal"].some(n=>{try{return i.matches(n)}catch{return!1}})}function Po(i){const n=ld(),r=gl(i)?bl(i):i;return["transform","translate","scale","rotate","perspective"].some(c=>r[c]?r[c]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!n&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!n&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(c=>(r.willChange||"").includes(c))||["paint","layout","strict","content"].some(c=>(r.contain||"").includes(c))}function i1(i){let n=wa(i);for(;Tl(n)&&!Gi(n);){if(Po(n))return n;if(Io(n))return null;n=wa(n)}return null}function ld(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Gi(i){return["html","body","#document"].includes(Ji(i))}function bl(i){return Ke(i).getComputedStyle(i)}function tr(i){return gl(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.scrollX,scrollTop:i.scrollY}}function wa(i){if(Ji(i)==="html")return i;const n=i.assignedSlot||i.parentNode||T0(i)&&i.host||Ol(i);return T0(n)?n.host:n}function im(i){const n=wa(i);return Gi(n)?i.ownerDocument?i.ownerDocument.body:i.body:Tl(n)&&ws(n)?n:im(n)}function gs(i,n,r){var c;n===void 0&&(n=[]),r===void 0&&(r=!0);const u=im(i),f=u===((c=i.ownerDocument)==null?void 0:c.body),h=Ke(u);if(f){const y=Mu(h);return n.concat(h,h.visualViewport||[],ws(u)?u:[],y&&r?gs(y):[])}return n.concat(u,gs(u,[],r))}function Mu(i){return i.parent&&Object.getPrototypeOf(i.parent)?i.frameElement:null}function nm(i){const n=bl(i);let r=parseFloat(n.width)||0,c=parseFloat(n.height)||0;const u=Tl(i),f=u?i.offsetWidth:r,h=u?i.offsetHeight:c,y=Qo(r)!==f||Qo(c)!==h;return y&&(r=f,c=h),{width:r,height:c,$:y}}function ad(i){return gl(i)?i:i.contextElement}function ji(i){const n=ad(i);if(!Tl(n))return Al(1);const r=n.getBoundingClientRect(),{width:c,height:u,$:f}=nm(n);let h=(f?Qo(r.width):r.width)/c,y=(f?Qo(r.height):r.height)/u;return(!h||!Number.isFinite(h))&&(h=1),(!y||!Number.isFinite(y))&&(y=1),{x:h,y}}const n1=Al(0);function sm(i){const n=Ke(i);return!ld()||!n.visualViewport?n1:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function s1(i,n,r){return n===void 0&&(n=!1),!r||n&&r!==Ke(i)?!1:n}function Pa(i,n,r,c){n===void 0&&(n=!1),r===void 0&&(r=!1);const u=i.getBoundingClientRect(),f=ad(i);let h=Al(1);n&&(c?gl(c)&&(h=ji(c)):h=ji(i));const y=s1(f,r,c)?sm(f):Al(0);let v=(u.left+y.x)/h.x,g=(u.top+y.y)/h.y,C=u.width/h.x,k=u.height/h.y;if(f){const N=Ke(f),O=c&&gl(c)?Ke(c):c;let U=N,L=Mu(U);for(;L&&c&&O!==U;){const q=ji(L),K=L.getBoundingClientRect(),F=bl(L),G=K.left+(L.clientLeft+parseFloat(F.paddingLeft))*q.x,it=K.top+(L.clientTop+parseFloat(F.paddingTop))*q.y;v*=q.x,g*=q.y,C*=q.x,k*=q.y,v+=G,g+=it,U=Ke(L),L=Mu(U)}}return Ko({width:C,height:k,x:v,y:g})}function id(i,n){const r=tr(i).scrollLeft;return n?n.left+r:Pa(Ol(i)).left+r}function om(i,n,r){r===void 0&&(r=!1);const c=i.getBoundingClientRect(),u=c.left+n.scrollLeft-(r?0:id(i,c)),f=c.top+n.scrollTop;return{x:u,y:f}}function o1(i){let{elements:n,rect:r,offsetParent:c,strategy:u}=i;const f=u==="fixed",h=Ol(c),y=n?Io(n.floating):!1;if(c===h||y&&f)return r;let v={scrollLeft:0,scrollTop:0},g=Al(1);const C=Al(0),k=Tl(c);if((k||!k&&!f)&&((Ji(c)!=="body"||ws(h))&&(v=tr(c)),Tl(c))){const O=Pa(c);g=ji(c),C.x=O.x+c.clientLeft,C.y=O.y+c.clientTop}const N=h&&!k&&!f?om(h,v,!0):Al(0);return{width:r.width*g.x,height:r.height*g.y,x:r.x*g.x-v.scrollLeft*g.x+C.x+N.x,y:r.y*g.y-v.scrollTop*g.y+C.y+N.y}}function r1(i){return Array.from(i.getClientRects())}function c1(i){const n=Ol(i),r=tr(i),c=i.ownerDocument.body,u=Ze(n.scrollWidth,n.clientWidth,c.scrollWidth,c.clientWidth),f=Ze(n.scrollHeight,n.clientHeight,c.scrollHeight,c.clientHeight);let h=-r.scrollLeft+id(i);const y=-r.scrollTop;return bl(c).direction==="rtl"&&(h+=Ze(n.clientWidth,c.clientWidth)-u),{width:u,height:f,x:h,y}}function u1(i,n){const r=Ke(i),c=Ol(i),u=r.visualViewport;let f=c.clientWidth,h=c.clientHeight,y=0,v=0;if(u){f=u.width,h=u.height;const g=ld();(!g||g&&n==="fixed")&&(y=u.offsetLeft,v=u.offsetTop)}return{width:f,height:h,x:y,y:v}}function d1(i,n){const r=Pa(i,!0,n==="fixed"),c=r.top+i.clientTop,u=r.left+i.clientLeft,f=Tl(i)?ji(i):Al(1),h=i.clientWidth*f.x,y=i.clientHeight*f.y,v=u*f.x,g=c*f.y;return{width:h,height:y,x:v,y:g}}function k0(i,n,r){let c;if(n==="viewport")c=u1(i,r);else if(n==="document")c=c1(Ol(i));else if(gl(n))c=d1(n,r);else{const u=sm(i);c={x:n.x-u.x,y:n.y-u.y,width:n.width,height:n.height}}return Ko(c)}function rm(i,n){const r=wa(i);return r===n||!gl(r)||Gi(r)?!1:bl(r).position==="fixed"||rm(r,n)}function f1(i,n){const r=n.get(i);if(r)return r;let c=gs(i,[],!1).filter(y=>gl(y)&&Ji(y)!=="body"),u=null;const f=bl(i).position==="fixed";let h=f?wa(i):i;for(;gl(h)&&!Gi(h);){const y=bl(h),v=Po(h);!v&&y.position==="fixed"&&(u=null),(f?!v&&!u:!v&&y.position==="static"&&!!u&&["absolute","fixed"].includes(u.position)||ws(h)&&!v&&rm(i,h))?c=c.filter(C=>C!==h):u=y,h=wa(h)}return n.set(i,c),c}function h1(i){let{element:n,boundary:r,rootBoundary:c,strategy:u}=i;const h=[...r==="clippingAncestors"?Io(n)?[]:f1(n,this._c):[].concat(r),c],y=h[0],v=h.reduce((g,C)=>{const k=k0(n,C,u);return g.top=Ze(k.top,g.top),g.right=_a(k.right,g.right),g.bottom=_a(k.bottom,g.bottom),g.left=Ze(k.left,g.left),g},k0(n,y,u));return{width:v.right-v.left,height:v.bottom-v.top,x:v.left,y:v.top}}function p1(i){const{width:n,height:r}=nm(i);return{width:n,height:r}}function m1(i,n,r){const c=Tl(n),u=Ol(n),f=r==="fixed",h=Pa(i,!0,f,n);let y={scrollLeft:0,scrollTop:0};const v=Al(0);if(c||!c&&!f)if((Ji(n)!=="body"||ws(u))&&(y=tr(n)),c){const N=Pa(n,!0,f,n);v.x=N.x+n.clientLeft,v.y=N.y+n.clientTop}else u&&(v.x=id(u));const g=u&&!c&&!f?om(u,y):Al(0),C=h.left+y.scrollLeft-v.x-g.x,k=h.top+y.scrollTop-v.y-g.y;return{x:C,y:k,width:h.width,height:h.height}}function Cu(i){return bl(i).position==="static"}function O0(i,n){if(!Tl(i)||bl(i).position==="fixed")return null;if(n)return n(i);let r=i.offsetParent;return Ol(i)===r&&(r=r.ownerDocument.body),r}function cm(i,n){const r=Ke(i);if(Io(i))return r;if(!Tl(i)){let u=wa(i);for(;u&&!Gi(u);){if(gl(u)&&!Cu(u))return u;u=wa(u)}return r}let c=O0(i,n);for(;c&&a1(c)&&Cu(c);)c=O0(c,n);return c&&Gi(c)&&Cu(c)&&!Po(c)?r:c||i1(i)||r}const g1=async function(i){const n=this.getOffsetParent||cm,r=this.getDimensions,c=await r(i.floating);return{reference:m1(i.reference,await n(i.floating),i.strategy),floating:{x:0,y:0,width:c.width,height:c.height}}};function b1(i){return bl(i).direction==="rtl"}const Yo={convertOffsetParentRelativeRectToViewportRelativeRect:o1,getDocumentElement:Ol,getClippingRect:h1,getOffsetParent:cm,getElementRects:g1,getClientRects:r1,getDimensions:p1,getScale:ji,isElement:gl,isRTL:b1};function um(i,n){return i.x===n.x&&i.y===n.y&&i.width===n.width&&i.height===n.height}function v1(i,n){let r=null,c;const u=Ol(i);function f(){var y;clearTimeout(c),(y=r)==null||y.disconnect(),r=null}function h(y,v){y===void 0&&(y=!1),v===void 0&&(v=1),f();const g=i.getBoundingClientRect(),{left:C,top:k,width:N,height:O}=g;if(y||n(),!N||!O)return;const U=Lo(k),L=Lo(u.clientWidth-(C+N)),q=Lo(u.clientHeight-(k+O)),K=Lo(C),G={rootMargin:-U+"px "+-L+"px "+-q+"px "+-K+"px",threshold:Ze(0,_a(1,v))||1};let it=!0;function X(wt){const kt=wt[0].intersectionRatio;if(kt!==v){if(!it)return h();kt?h(!1,kt):c=setTimeout(()=>{h(!1,1e-7)},1e3)}kt===1&&!um(g,i.getBoundingClientRect())&&h(),it=!1}try{r=new IntersectionObserver(X,{...G,root:u.ownerDocument})}catch{r=new IntersectionObserver(X,G)}r.observe(i)}return h(!0),f}function y1(i,n,r,c){c===void 0&&(c={});const{ancestorScroll:u=!0,ancestorResize:f=!0,elementResize:h=typeof ResizeObserver=="function",layoutShift:y=typeof IntersectionObserver=="function",animationFrame:v=!1}=c,g=ad(i),C=u||f?[...g?gs(g):[],...gs(n)]:[];C.forEach(K=>{u&&K.addEventListener("scroll",r,{passive:!0}),f&&K.addEventListener("resize",r)});const k=g&&y?v1(g,r):null;let N=-1,O=null;h&&(O=new ResizeObserver(K=>{let[F]=K;F&&F.target===g&&O&&(O.unobserve(n),cancelAnimationFrame(N),N=requestAnimationFrame(()=>{var G;(G=O)==null||G.observe(n)})),r()}),g&&!v&&O.observe(g),O.observe(n));let U,L=v?Pa(i):null;v&&q();function q(){const K=Pa(i);L&&!um(L,K)&&r(),L=K,U=requestAnimationFrame(q)}return r(),()=>{var K;C.forEach(F=>{u&&F.removeEventListener("scroll",r),f&&F.removeEventListener("resize",r)}),k==null||k(),(K=O)==null||K.disconnect(),O=null,v&&cancelAnimationFrame(U)}}const _1=t1,x1=e1,w1=Iy,D0=l1,S1=Wy,z1=(i,n,r)=>{const c=new Map,u={platform:Yo,...r},f={...u.platform,_c:c};return Jy(i,n,{...u,platform:f})};function C1(i){return A1(i)}function Au(i){return i.assignedSlot?i.assignedSlot:i.parentNode instanceof ShadowRoot?i.parentNode.host:i.parentNode}function A1(i){for(let n=i;n;n=Au(n))if(n instanceof Element&&getComputedStyle(n).display==="none")return null;for(let n=Au(i);n;n=Au(n)){if(!(n instanceof Element))continue;const r=getComputedStyle(n);if(r.display!=="contents"&&(r.position!=="static"||Po(r)||n.tagName==="BODY"))return n}return null}function E1(i){return i!==null&&typeof i=="object"&&"getBoundingClientRect"in i&&("contextElement"in i?i instanceof Element:!0)}var Mt=class extends Rt{constructor(){super(...arguments),this.localize=new He(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const i=this.anchorEl.getBoundingClientRect(),n=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom");let c=0,u=0,f=0,h=0,y=0,v=0,g=0,C=0;r?i.top<n.top?(c=i.left,u=i.bottom,f=i.right,h=i.bottom,y=n.left,v=n.top,g=n.right,C=n.top):(c=n.left,u=n.bottom,f=n.right,h=n.bottom,y=i.left,v=i.top,g=i.right,C=i.top):i.left<n.left?(c=i.right,u=i.top,f=n.left,h=n.top,y=i.right,v=i.bottom,g=n.left,C=n.bottom):(c=n.right,u=n.top,f=i.left,h=i.top,y=n.right,v=n.bottom,g=i.left,C=i.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${c}px`),this.style.setProperty("--hover-bridge-top-left-y",`${u}px`),this.style.setProperty("--hover-bridge-top-right-x",`${f}px`),this.style.setProperty("--hover-bridge-top-right-y",`${h}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${y}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${v}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${g}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${C}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(i){super.updated(i),i.has("active")&&(this.active?this.start():this.stop()),i.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const i=this.getRootNode();this.anchorEl=i.getElementById(this.anchor)}else this.anchor instanceof Element||E1(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=y1(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(i=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>i())):i()})}reposition(){if(!this.active||!this.anchorEl)return;const i=[_1({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?i.push(D0({apply:({rects:r})=>{const c=this.sync==="width"||this.sync==="both",u=this.sync==="height"||this.sync==="both";this.popup.style.width=c?`${r.reference.width}px`:"",this.popup.style.height=u?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&i.push(w1({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&i.push(x1({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?i.push(D0({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:c})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${c}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&i.push(S1({element:this.arrowEl,padding:this.arrowPadding}));const n=this.strategy==="absolute"?r=>Yo.getOffsetParent(r,C1):Yo.getOffsetParent;z1(this.anchorEl,this.popup,{placement:this.placement,middleware:i,strategy:this.strategy,platform:vs(Sa({},Yo),{getOffsetParent:n})}).then(({x:r,y:c,middlewareData:u,placement:f})=>{const h=this.localize.dir()==="rtl",y={top:"bottom",right:"left",bottom:"top",left:"right"}[f.split("-")[0]];if(this.setAttribute("data-current-placement",f),Object.assign(this.popup.style,{left:`${r}px`,top:`${c}px`}),this.arrow){const v=u.arrow.x,g=u.arrow.y;let C="",k="",N="",O="";if(this.arrowPlacement==="start"){const U=typeof v=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";C=typeof g=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",k=h?U:"",O=h?"":U}else if(this.arrowPlacement==="end"){const U=typeof v=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";k=h?"":U,O=h?U:"",N=typeof g=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(O=typeof v=="number"?"calc(50% - var(--arrow-size-diagonal))":"",C=typeof g=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(O=typeof v=="number"?`${v}px`:"",C=typeof g=="number"?`${g}px`:"");Object.assign(this.arrowEl.style,{top:C,right:k,bottom:N,left:O,[y]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return ot`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Lt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Lt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ot`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};Mt.styles=[Gt,qy];m([ht(".popup")],Mt.prototype,"popup",2);m([ht(".popup__arrow")],Mt.prototype,"arrowEl",2);m([_()],Mt.prototype,"anchor",2);m([_({type:Boolean,reflect:!0})],Mt.prototype,"active",2);m([_({reflect:!0})],Mt.prototype,"placement",2);m([_({reflect:!0})],Mt.prototype,"strategy",2);m([_({type:Number})],Mt.prototype,"distance",2);m([_({type:Number})],Mt.prototype,"skidding",2);m([_({type:Boolean})],Mt.prototype,"arrow",2);m([_({attribute:"arrow-placement"})],Mt.prototype,"arrowPlacement",2);m([_({attribute:"arrow-padding",type:Number})],Mt.prototype,"arrowPadding",2);m([_({type:Boolean})],Mt.prototype,"flip",2);m([_({attribute:"flip-fallback-placements",converter:{fromAttribute:i=>i.split(" ").map(n=>n.trim()).filter(n=>n!==""),toAttribute:i=>i.join(" ")}})],Mt.prototype,"flipFallbackPlacements",2);m([_({attribute:"flip-fallback-strategy"})],Mt.prototype,"flipFallbackStrategy",2);m([_({type:Object})],Mt.prototype,"flipBoundary",2);m([_({attribute:"flip-padding",type:Number})],Mt.prototype,"flipPadding",2);m([_({type:Boolean})],Mt.prototype,"shift",2);m([_({type:Object})],Mt.prototype,"shiftBoundary",2);m([_({attribute:"shift-padding",type:Number})],Mt.prototype,"shiftPadding",2);m([_({attribute:"auto-size"})],Mt.prototype,"autoSize",2);m([_()],Mt.prototype,"sync",2);m([_({type:Object})],Mt.prototype,"autoSizeBoundary",2);m([_({attribute:"auto-size-padding",type:Number})],Mt.prototype,"autoSizePadding",2);m([_({attribute:"hover-bridge",type:Boolean})],Mt.prototype,"hoverBridge",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Uu extends Fu{constructor(n){if(super(n),this.it=Pt,n.type!==ba.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(n){if(n===Pt||n==null)return this._t=void 0,this.it=n;if(n===ul)return n;if(typeof n!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(n===this.it)return this._t;this.it=n;const r=[n];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Uu.directiveName="unsafeHTML",Uu.resultType=1;const T1=Ku(Uu);var yt=class extends Rt{constructor(){super(...arguments),this.formControlController=new Qi(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new kl(this,"help-text","label"),this.localize=new He(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=i=>ot`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${n=>this.handleTagRemove(n,i)}
      >
        ${i.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=i=>{const n=i.composedPath();this&&!n.includes(this)&&this.hide()},this.handleDocumentKeyDown=i=>{const n=i.target,r=n.closest(".select__clear")!==null,c=n.closest("sl-icon-button")!==null;if(!(r||c)){if(i.key==="Escape"&&this.open&&!this.closeWatcher&&(i.preventDefault(),i.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),i.key==="Enter"||i.key===" "&&this.typeToSelectString===""){if(i.preventDefault(),i.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(i.key)){const u=this.getAllOptions(),f=u.indexOf(this.currentOption);let h=Math.max(0,f);if(i.preventDefault(),!this.open&&(this.show(),this.currentOption))return;i.key==="ArrowDown"?(h=f+1,h>u.length-1&&(h=0)):i.key==="ArrowUp"?(h=f-1,h<0&&(h=u.length-1)):i.key==="Home"?h=0:i.key==="End"&&(h=u.length-1),this.setCurrentOption(u[h])}if(i.key&&i.key.length===1||i.key==="Backspace"){const u=this.getAllOptions();if(i.metaKey||i.ctrlKey||i.altKey)return;if(!this.open){if(i.key==="Backspace")return;this.show()}i.stopPropagation(),i.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),i.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=i.key.toLowerCase();for(const f of u)if(f.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(f);break}}}},this.handleDocumentMouseDown=i=>{const n=i.composedPath();this&&!n.includes(this)&&this.hide()}}get value(){return this._value}set value(i){this.multiple?i=Array.isArray(i)?i:i.split(" "):i=Array.isArray(i)?i.join(" "):i,this._value!==i&&(this.valueHasChanged=!0,this._value=i)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var i;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((i=this.closeWatcher)==null||i.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var i;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(i=this.closeWatcher)==null||i.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(i){const r=i.composedPath().some(c=>c instanceof Element&&c.tagName.toLowerCase()==="sl-icon-button");this.disabled||r||(i.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(i){i.key!=="Tab"&&(i.stopPropagation(),this.handleDocumentKeyDown(i))}handleClearClick(i){i.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(i){i.stopPropagation(),i.preventDefault()}handleOptionClick(i){const r=i.target.closest("sl-option"),c=this.value;r&&!r.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(r):this.setSelectedOptions(r),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==c&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const i=this.getAllOptions(),n=this.valueHasChanged?this.value:this.defaultValue,r=Array.isArray(n)?n:[n],c=[];i.forEach(u=>c.push(u.value)),this.setSelectedOptions(i.filter(u=>r.includes(u.value)))}handleTagRemove(i,n){i.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(n,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(i){this.getAllOptions().forEach(r=>{r.current=!1,r.tabIndex=-1}),i&&(this.currentOption=i,i.current=!0,i.tabIndex=0,i.focus())}setSelectedOptions(i){const n=this.getAllOptions(),r=Array.isArray(i)?i:[i];n.forEach(c=>c.selected=!1),r.length&&r.forEach(c=>c.selected=!0),this.selectionChanged()}toggleOptionSelection(i,n){n===!0||n===!1?i.selected=n:i.selected=!i.selected,this.selectionChanged()}selectionChanged(){var i,n,r;const c=this.getAllOptions();this.selectedOptions=c.filter(f=>f.selected);const u=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(f=>f.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const f=this.selectedOptions[0];this.value=(i=f==null?void 0:f.value)!=null?i:"",this.displayLabel=(r=(n=f==null?void 0:f.getTextLabel)==null?void 0:n.call(f))!=null?r:""}this.valueHasChanged=u,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((i,n)=>{if(n<this.maxOptionsVisible||this.maxOptionsVisible<=0){const r=this.getTag(i,n);return ot`<div @sl-remove=${c=>this.handleTagRemove(c,i)}>
          ${typeof r=="string"?T1(r):r}
        </div>`}else if(n===this.maxOptionsVisible)return ot`<sl-tag size=${this.size}>+${this.selectedOptions.length-n}</sl-tag>`;return ot``})}handleInvalid(i){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(i)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(i,n,r){if(super.attributeChangedCallback(i,n,r),i==="value"){const c=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=c}}handleValueChange(){if(!this.valueHasChanged){const r=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=r}const i=this.getAllOptions(),n=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(i.filter(r=>n.includes(r.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await De(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:i,options:n}=re(this,"select.show",{dir:this.localize.dir()});await ye(this.popup.popup,i,n),this.currentOption&&py(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await De(this);const{keyframes:i,options:n}=re(this,"select.hide",{dir:this.localize.dir()});await ye(this.popup.popup,i,n),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,El(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,El(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(i){this.valueInput.setCustomValidity(i),this.formControlController.updateValidity()}focus(i){this.displayInput.focus(i)}blur(){this.displayInput.blur()}render(){const i=this.hasSlotController.test("label"),n=this.hasSlotController.test("help-text"),r=this.label?!0:!!i,c=this.helpText?!0:!!n,u=this.clearable&&!this.disabled&&this.value.length>0,f=this.placeholder&&this.value&&this.value.length<=0;return ot`
      <div
        part="form-control"
        class=${Lt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":c})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${Lt({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":f,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?ot`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${u?ot`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${c?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};yt.styles=[Gt,_s,Vy];yt.dependencies={"sl-icon":_e,"sl-popup":Mt,"sl-tag":ti};m([ht(".select")],yt.prototype,"popup",2);m([ht(".select__combobox")],yt.prototype,"combobox",2);m([ht(".select__display-input")],yt.prototype,"displayInput",2);m([ht(".select__value-input")],yt.prototype,"valueInput",2);m([ht(".select__listbox")],yt.prototype,"listbox",2);m([qt()],yt.prototype,"hasFocus",2);m([qt()],yt.prototype,"displayLabel",2);m([qt()],yt.prototype,"currentOption",2);m([qt()],yt.prototype,"selectedOptions",2);m([qt()],yt.prototype,"valueHasChanged",2);m([_()],yt.prototype,"name",2);m([qt()],yt.prototype,"value",1);m([_({attribute:"value"})],yt.prototype,"defaultValue",2);m([_({reflect:!0})],yt.prototype,"size",2);m([_()],yt.prototype,"placeholder",2);m([_({type:Boolean,reflect:!0})],yt.prototype,"multiple",2);m([_({attribute:"max-options-visible",type:Number})],yt.prototype,"maxOptionsVisible",2);m([_({type:Boolean,reflect:!0})],yt.prototype,"disabled",2);m([_({type:Boolean})],yt.prototype,"clearable",2);m([_({type:Boolean,reflect:!0})],yt.prototype,"open",2);m([_({type:Boolean})],yt.prototype,"hoist",2);m([_({type:Boolean,reflect:!0})],yt.prototype,"filled",2);m([_({type:Boolean,reflect:!0})],yt.prototype,"pill",2);m([_()],yt.prototype,"label",2);m([_({reflect:!0})],yt.prototype,"placement",2);m([_({attribute:"help-text"})],yt.prototype,"helpText",2);m([_({reflect:!0})],yt.prototype,"form",2);m([_({type:Boolean,reflect:!0})],yt.prototype,"required",2);m([_()],yt.prototype,"getTag",2);m([mt("disabled",{waitUntilFirstUpdate:!0})],yt.prototype,"handleDisabledChange",1);m([mt(["defaultValue","value"],{waitUntilFirstUpdate:!0})],yt.prototype,"handleValueChange",1);m([mt("open",{waitUntilFirstUpdate:!0})],yt.prototype,"handleOpenChange",1);Vt("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Vt("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var k1="sl-select";yt.define("sl-select");var O1=ee({tagName:k1,elementClass:yt,react:te,events:{onSlChange:"sl-change",onSlClear:"sl-clear",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlBlur:"sl-blur",onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInvalid:"sl-invalid"},displayName:"SlSelect"}),ds=O1,D1=jt`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,Je=class extends Rt{constructor(){super(...arguments),this.localize=new He(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const i=this.closest("sl-select");i&&i.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const i=this.childNodes;let n="";return[...i].forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&(r.hasAttribute("slot")||(n+=r.textContent)),r.nodeType===Node.TEXT_NODE&&(n+=r.textContent)}),n.trim()}render(){return ot`
      <div
        part="base"
        class=${Lt({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Je.styles=[Gt,D1];Je.dependencies={"sl-icon":_e};m([ht(".option__label")],Je.prototype,"defaultSlot",2);m([qt()],Je.prototype,"current",2);m([qt()],Je.prototype,"selected",2);m([qt()],Je.prototype,"hasHover",2);m([_({reflect:!0})],Je.prototype,"value",2);m([_({type:Boolean,reflect:!0})],Je.prototype,"disabled",2);m([mt("disabled")],Je.prototype,"handleDisabledChange",1);m([mt("selected")],Je.prototype,"handleSelectedChange",1);m([mt("value")],Je.prototype,"handleValueChange",1);var R1="sl-option";Je.define("sl-option");var $1=ee({tagName:R1,elementClass:Je,react:te,events:{},displayName:"SlOption"}),ml=$1,N1="sl-spinner";ys.define("sl-spinner");ee({tagName:N1,elementClass:ys,react:te,events:{},displayName:"SlSpinner"});var M1=jt`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,Wi=class extends Rt{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return ot`
      <span
        part="base"
        class=${Lt({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Wi.styles=[Gt,M1];m([_({reflect:!0})],Wi.prototype,"variant",2);m([_({type:Boolean,reflect:!0})],Wi.prototype,"pill",2);m([_({type:Boolean,reflect:!0})],Wi.prototype,"pulse",2);var U1="sl-badge";Wi.define("sl-badge");var H1=ee({tagName:U1,elementClass:Wi,react:te,events:{},displayName:"SlBadge"}),B1=H1,L1=jt`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,fe=class extends Rt{constructor(){super(),this.localize=new He(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=i=>{i.key==="Escape"&&(i.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const i=z0(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),i)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const i=z0(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),i)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.closeWatcher)==null||i.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(i){return this.trigger.split(" ").includes(i)}async handleOpenChange(){var i,n;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((i=this.closeWatcher)==null||i.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await De(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:r,options:c}=re(this,"tooltip.show",{dir:this.localize.dir()});await ye(this.popup.popup,r,c),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(n=this.closeWatcher)==null||n.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await De(this.body);const{keyframes:r,options:c}=re(this,"tooltip.hide",{dir:this.localize.dir()});await ye(this.popup.popup,r,c),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,El(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,El(this,"sl-after-hide")}render(){return ot`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Lt({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};fe.styles=[Gt,L1];fe.dependencies={"sl-popup":Mt};m([ht("slot:not([name])")],fe.prototype,"defaultSlot",2);m([ht(".tooltip__body")],fe.prototype,"body",2);m([ht("sl-popup")],fe.prototype,"popup",2);m([_()],fe.prototype,"content",2);m([_()],fe.prototype,"placement",2);m([_({type:Boolean,reflect:!0})],fe.prototype,"disabled",2);m([_({type:Number})],fe.prototype,"distance",2);m([_({type:Boolean,reflect:!0})],fe.prototype,"open",2);m([_({type:Number})],fe.prototype,"skidding",2);m([_()],fe.prototype,"trigger",2);m([_({type:Boolean})],fe.prototype,"hoist",2);m([mt("open",{waitUntilFirstUpdate:!0})],fe.prototype,"handleOpenChange",1);m([mt(["content","distance","hoist","placement","skidding"])],fe.prototype,"handleOptionsChange",1);m([mt("disabled")],fe.prototype,"handleDisabledChange",1);Vt("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});Vt("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var j1="sl-tooltip";fe.define("sl-tooltip");var V1=ee({tagName:j1,elementClass:fe,react:te,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlTooltip"}),q1=V1,Y1=jt`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`,X1=jt`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function R0(i,n,r){return i?n(i):r==null?void 0:r(i)}var le=class Hu extends Rt{constructor(){super(...arguments),this.localize=new He(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(n){return n instanceof Element&&n.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await De(this.childrenContainer);const{keyframes:n,options:r}=re(this,"tree-item.collapse",{dir:this.localize.dir()});await ye(this.childrenContainer,C0(n,this.childrenContainer.scrollHeight),r),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const n=this.parentElement;return!!n&&Hu.isTreeItem(n)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(n){n.has("selected")&&!n.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await De(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:n,options:r}=re(this,"tree-item.expand",{dir:this.localize.dir()});await ye(this.childrenContainer,C0(n,this.childrenContainer.scrollHeight),r),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:n=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(r=>Hu.isTreeItem(r)&&(n||!r.disabled)):[]}render(){const n=this.localize.dir()==="rtl",r=!this.loading&&(!this.isLeaf||this.lazy);return ot`
      <div
        part="base"
        class="${Lt({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":r,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${Lt({"tree-item__expand-button":!0,"tree-item__expand-button--visible":r})}
            aria-hidden="true"
          >
            ${R0(this.loading,()=>ot` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${n?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${n?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${R0(this.selectable,()=>ot`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${Xi(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};le.styles=[Gt,X1];le.dependencies={"sl-checkbox":ce,"sl-icon":_e,"sl-spinner":ys};m([qt()],le.prototype,"indeterminate",2);m([qt()],le.prototype,"isLeaf",2);m([qt()],le.prototype,"loading",2);m([qt()],le.prototype,"selectable",2);m([_({type:Boolean,reflect:!0})],le.prototype,"expanded",2);m([_({type:Boolean,reflect:!0})],le.prototype,"selected",2);m([_({type:Boolean,reflect:!0})],le.prototype,"disabled",2);m([_({type:Boolean,reflect:!0})],le.prototype,"lazy",2);m([ht("slot:not([name])")],le.prototype,"defaultSlot",2);m([ht("slot[name=children]")],le.prototype,"childrenSlot",2);m([ht(".tree-item__item")],le.prototype,"itemElement",2);m([ht(".tree-item__children")],le.prototype,"childrenContainer",2);m([ht(".tree-item__expand-button slot")],le.prototype,"expandButtonSlot",2);m([mt("loading",{waitUntilFirstUpdate:!0})],le.prototype,"handleLoadingChange",1);m([mt("disabled")],le.prototype,"handleDisabledChange",1);m([mt("selected")],le.prototype,"handleSelectedChange",1);m([mt("expanded",{waitUntilFirstUpdate:!0})],le.prototype,"handleExpandedChange",1);m([mt("expanded",{waitUntilFirstUpdate:!0})],le.prototype,"handleExpandAnimation",1);m([mt("lazy",{waitUntilFirstUpdate:!0})],le.prototype,"handleLazyChange",1);var Vi=le;Vt("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});Vt("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});function G1(i,n,r){const c=u=>Object.is(u,-0)?0:u;return i<n?c(n):i>r?c(r):c(i)}function $0(i,n=!1){function r(f){const h=f.getChildrenItems({includeDisabled:!1});if(h.length){const y=h.every(g=>g.selected),v=h.every(g=>!g.selected&&!g.indeterminate);f.selected=y,f.indeterminate=!y&&!v}}function c(f){const h=f.parentElement;Vi.isTreeItem(h)&&(r(h),c(h))}function u(f){for(const h of f.getChildrenItems())h.selected=n?f.selected||h.selected:!h.disabled&&f.selected,u(h);n&&r(f)}u(i),c(i)}var za=class extends Rt{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new He(this),this.initTreeItem=i=>{i.selectable=this.selection==="multiple",["expand","collapse"].filter(n=>!!this.querySelector(`[slot="${n}-icon"]`)).forEach(n=>{const r=i.querySelector(`[slot="${n}-icon"]`),c=this.getExpandButtonIcon(n);c&&(r===null?i.append(c):r.hasAttribute("data-default")&&r.replaceWith(c))})},this.handleTreeChanged=i=>{for(const n of i){const r=[...n.addedNodes].filter(Vi.isTreeItem),c=[...n.removedNodes].filter(Vi.isTreeItem);r.forEach(this.initTreeItem),this.lastFocusedItem&&c.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=i=>{const n=i.relatedTarget;(!n||!this.contains(n))&&(this.tabIndex=0)},this.handleFocusIn=i=>{const n=i.target;i.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Vi.isTreeItem(n)&&!n.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=n,this.tabIndex=-1,n.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.mutationObserver)==null||i.disconnect()}getExpandButtonIcon(i){const r=(i==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(r){const c=r.cloneNode(!0);return[c,...c.querySelectorAll("[id]")].forEach(u=>u.removeAttribute("id")),c.setAttribute("data-default",""),c.slot=`${i}-icon`,c}return null}selectItem(i){const n=[...this.selectedItems];if(this.selection==="multiple")i.selected=!i.selected,i.lazy&&(i.expanded=!0),$0(i);else if(this.selection==="single"||i.isLeaf){const c=this.getAllTreeItems();for(const u of c)u.selected=u===i}else this.selection==="leaf"&&(i.expanded=!i.expanded);const r=this.selectedItems;(n.length!==r.length||r.some(c=>!n.includes(c)))&&Promise.all(r.map(c=>c.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:r}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(i){i==null||i.focus()}handleKeyDown(i){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(i.key)||i.composedPath().some(u=>{var f;return["input","textarea"].includes((f=u==null?void 0:u.tagName)==null?void 0:f.toLowerCase())}))return;const n=this.getFocusableItems(),r=this.localize.dir()==="ltr",c=this.localize.dir()==="rtl";if(n.length>0){i.preventDefault();const u=n.findIndex(v=>v.matches(":focus")),f=n[u],h=v=>{const g=n[G1(v,0,n.length-1)];this.focusItem(g)},y=v=>{f.expanded=v};i.key==="ArrowDown"?h(u+1):i.key==="ArrowUp"?h(u-1):r&&i.key==="ArrowRight"||c&&i.key==="ArrowLeft"?!f||f.disabled||f.expanded||f.isLeaf&&!f.lazy?h(u+1):y(!0):r&&i.key==="ArrowLeft"||c&&i.key==="ArrowRight"?!f||f.disabled||f.isLeaf||!f.expanded?h(u-1):y(!1):i.key==="Home"?h(0):i.key==="End"?h(n.length-1):(i.key==="Enter"||i.key===" ")&&(f.disabled||this.selectItem(f))}}handleClick(i){const n=i.target,r=n.closest("sl-tree-item"),c=i.composedPath().some(u=>{var f;return(f=u==null?void 0:u.classList)==null?void 0:f.contains("tree-item__expand-button")});!r||r.disabled||n!==this.clickTarget||(c?r.expanded=!r.expanded:this.selectItem(r))}handleMouseDown(i){this.clickTarget=i.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const i=this.selection==="multiple",n=this.getAllTreeItems();this.setAttribute("aria-multiselectable",i?"true":"false");for(const r of n)r.selectable=i;i&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(r=>$0(r,!0)))}get selectedItems(){const i=this.getAllTreeItems(),n=r=>r.selected;return i.filter(n)}getFocusableItems(){const i=this.getAllTreeItems(),n=new Set;return i.filter(r=>{var c;if(r.disabled)return!1;const u=(c=r.parentElement)==null?void 0:c.closest("[role=treeitem]");return u&&(!u.expanded||u.loading||n.has(u))&&n.add(r),!n.has(r)})}render(){return ot`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};za.styles=[Gt,Y1];m([ht("slot:not([name])")],za.prototype,"defaultSlot",2);m([ht("slot[name=expand-icon]")],za.prototype,"expandedIconSlot",2);m([ht("slot[name=collapse-icon]")],za.prototype,"collapsedIconSlot",2);m([_()],za.prototype,"selection",2);m([mt("selection")],za.prototype,"handleSelectionChange",1);var Q1="sl-tree";za.define("sl-tree");ee({tagName:Q1,elementClass:za,react:te,events:{onSlSelectionChange:"sl-selection-change"},displayName:"SlTree"});var Z1="sl-tree-item";Vi.define("sl-tree-item");ee({tagName:Z1,elementClass:Vi,react:te,events:{onSlExpand:"sl-expand",onSlAfterExpand:"sl-after-expand",onSlCollapse:"sl-collapse",onSlAfterCollapse:"sl-after-collapse",onSlLazyChange:"sl-lazy-change",onSlLazyLoad:"sl-lazy-load"},displayName:"SlTreeItem"});var K1=jt`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,he=class extends Rt{constructor(){super(...arguments),this.localize=new He(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let i=this.value;if(this.from){const n=this.getRootNode(),r=this.from.includes("."),c=this.from.includes("[")&&this.from.includes("]");let u=this.from,f="";r?[u,f]=this.from.trim().split("."):c&&([u,f]=this.from.trim().replace(/\]$/,"").split("["));const h="getElementById"in n?n.getElementById(u):null;h?c?i=h.getAttribute(f)||"":r?i=h[f]||"":i=h.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!i)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(i),this.showStatus("success"),this.emit("sl-copy",{detail:{value:i}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(i){const n=this.copyLabel||this.localize.term("copy"),r=this.successLabel||this.localize.term("copied"),c=this.errorLabel||this.localize.term("error"),u=i==="success"?this.successIcon:this.errorIcon,f=re(this,"copy.in",{dir:"ltr"}),h=re(this,"copy.out",{dir:"ltr"});this.tooltip.content=i==="success"?r:c,await this.copyIcon.animate(h.keyframes,h.options).finished,this.copyIcon.hidden=!0,this.status=i,u.hidden=!1,await u.animate(f.keyframes,f.options).finished,setTimeout(async()=>{await u.animate(h.keyframes,h.options).finished,u.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(f.keyframes,f.options).finished,this.tooltip.content=n,this.isCopying=!1},this.feedbackDuration)}render(){const i=this.copyLabel||this.localize.term("copy");return ot`
      <sl-tooltip
        class=${Lt({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${i}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};he.styles=[Gt,K1];he.dependencies={"sl-icon":_e,"sl-tooltip":fe};m([ht('slot[name="copy-icon"]')],he.prototype,"copyIcon",2);m([ht('slot[name="success-icon"]')],he.prototype,"successIcon",2);m([ht('slot[name="error-icon"]')],he.prototype,"errorIcon",2);m([ht("sl-tooltip")],he.prototype,"tooltip",2);m([qt()],he.prototype,"isCopying",2);m([qt()],he.prototype,"status",2);m([_()],he.prototype,"value",2);m([_()],he.prototype,"from",2);m([_({type:Boolean,reflect:!0})],he.prototype,"disabled",2);m([_({attribute:"copy-label"})],he.prototype,"copyLabel",2);m([_({attribute:"success-label"})],he.prototype,"successLabel",2);m([_({attribute:"error-label"})],he.prototype,"errorLabel",2);m([_({attribute:"feedback-duration",type:Number})],he.prototype,"feedbackDuration",2);m([_({attribute:"tooltip-placement"})],he.prototype,"tooltipPlacement",2);m([_({type:Boolean})],he.prototype,"hoist",2);Vt("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});Vt("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});var F1="sl-copy-button";he.define("sl-copy-button");var J1=ee({tagName:F1,elementClass:he,react:te,events:{onSlCopy:"sl-copy",onSlError:"sl-error"},displayName:"SlCopyButton"}),dm=J1,W1=jt`
  :host {
    display: contents;
  }
`;const I1=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],P1=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],t_=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],e_=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],l_=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],a_=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],i_=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],n_=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],s_=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],o_=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],r_=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],c_=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],u_=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],d_=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],f_=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],h_=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],p_=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],m_=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],g_=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],b_=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],v_=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],y_=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],__=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],x_=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],w_=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],S_=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],z_=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],C_=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],A_=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],E_=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],T_=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],k_=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],O_=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],D_=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],R_=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],$_=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],N_=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],M_=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],U_=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],H_=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],B_=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],L_=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],j_=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],V_=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],q_=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],Y_=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],X_=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],G_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],Q_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],Z_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],K_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],F_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],J_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],W_=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],I_=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],P_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],tx=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],ex=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],lx=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],ax=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],ix=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],nx=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],sx=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],ox=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],rx=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],cx=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],ux=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],dx=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],fx=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],hx=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],px=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],mx=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],gx=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],bx=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],vx=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],yx=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],_x=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],xx=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],wx=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Sx=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],zx=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],Cx=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],Ax=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],Ex=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],Tx=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],kx=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],Ox=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Dx=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],Rx=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],$x=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Nx=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Mx=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Ux=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Hx=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],Bx=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Lx=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],jx=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],Vx=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],fm={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},qx=Object.freeze(Object.defineProperty({__proto__:null,backInDown:d_,backInLeft:f_,backInRight:h_,backInUp:p_,backOutDown:m_,backOutLeft:g_,backOutRight:b_,backOutUp:v_,bounce:I1,bounceIn:y_,bounceInDown:__,bounceInLeft:x_,bounceInRight:w_,bounceInUp:S_,bounceOut:z_,bounceOutDown:C_,bounceOutLeft:A_,bounceOutRight:E_,bounceOutUp:T_,easings:fm,fadeIn:k_,fadeInBottomLeft:O_,fadeInBottomRight:D_,fadeInDown:R_,fadeInDownBig:$_,fadeInLeft:N_,fadeInLeftBig:M_,fadeInRight:U_,fadeInRightBig:H_,fadeInTopLeft:B_,fadeInTopRight:L_,fadeInUp:j_,fadeInUpBig:V_,fadeOut:q_,fadeOutBottomLeft:Y_,fadeOutBottomRight:X_,fadeOutDown:G_,fadeOutDownBig:Q_,fadeOutLeft:Z_,fadeOutLeftBig:K_,fadeOutRight:F_,fadeOutRightBig:J_,fadeOutTopLeft:W_,fadeOutTopRight:I_,fadeOutUp:P_,fadeOutUpBig:tx,flash:P1,flip:ex,flipInX:lx,flipInY:ax,flipOutX:ix,flipOutY:nx,headShake:t_,heartBeat:e_,hinge:Tx,jackInTheBox:kx,jello:l_,lightSpeedInLeft:sx,lightSpeedInRight:ox,lightSpeedOutLeft:rx,lightSpeedOutRight:cx,pulse:a_,rollIn:Ox,rollOut:Dx,rotateIn:ux,rotateInDownLeft:dx,rotateInDownRight:fx,rotateInUpLeft:hx,rotateInUpRight:px,rotateOut:mx,rotateOutDownLeft:gx,rotateOutDownRight:bx,rotateOutUpLeft:vx,rotateOutUpRight:yx,rubberBand:i_,shake:n_,shakeX:s_,shakeY:o_,slideInDown:_x,slideInLeft:xx,slideInRight:wx,slideInUp:Sx,slideOutDown:zx,slideOutLeft:Cx,slideOutRight:Ax,slideOutUp:Ex,swing:r_,tada:c_,wobble:u_,zoomIn:Rx,zoomInDown:$x,zoomInLeft:Nx,zoomInRight:Mx,zoomInUp:Ux,zoomOut:Hx,zoomOutDown:Bx,zoomOutLeft:Lx,zoomOutRight:jx,zoomOutUp:Vx},Symbol.toStringTag,{value:"Module"}));var pe=class extends Rt{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var i,n;return(n=(i=this.animation)==null?void 0:i.currentTime)!=null?n:0}set currentTime(i){this.animation&&(this.animation.currentTime=i)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var i,n;const r=(i=fm[this.easing])!=null?i:this.easing,c=(n=this.keyframes)!=null?n:qx[this.name],f=(await this.defaultSlot).assignedElements()[0];return!f||!c?!1:(this.destroyAnimation(),this.animation=f.animate(c,{delay:this.delay,direction:this.direction,duration:this.duration,easing:r,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var i;(i=this.animation)==null||i.cancel()}finish(){var i;(i=this.animation)==null||i.finish()}render(){return ot` <slot @slotchange=${this.handleSlotChange}></slot> `}};pe.styles=[Gt,W1];m([Dv("slot")],pe.prototype,"defaultSlot",2);m([_()],pe.prototype,"name",2);m([_({type:Boolean,reflect:!0})],pe.prototype,"play",2);m([_({type:Number})],pe.prototype,"delay",2);m([_()],pe.prototype,"direction",2);m([_({type:Number})],pe.prototype,"duration",2);m([_()],pe.prototype,"easing",2);m([_({attribute:"end-delay",type:Number})],pe.prototype,"endDelay",2);m([_()],pe.prototype,"fill",2);m([_({type:Number})],pe.prototype,"iterations",2);m([_({attribute:"iteration-start",type:Number})],pe.prototype,"iterationStart",2);m([_({attribute:!1})],pe.prototype,"keyframes",2);m([_({attribute:"playback-rate",type:Number})],pe.prototype,"playbackRate",2);m([mt(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],pe.prototype,"handleAnimationChange",1);m([mt("play")],pe.prototype,"handlePlayChange",1);m([mt("playbackRate")],pe.prototype,"handlePlaybackRateChange",1);var Yx="sl-animation";pe.define("sl-animation");var Xx=ee({tagName:Yx,elementClass:pe,react:te,events:{onSlCancel:"sl-cancel",onSlFinish:"sl-finish",onSlStart:"sl-start"},displayName:"SlAnimation"}),hm=Xx,Gx=jt`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,nd=class extends Rt{constructor(){super(...arguments),this.hasSlotController=new kl(this,"footer","header","image")}render(){return ot`
      <div
        part="base"
        class=${Lt({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};nd.styles=[Gt,Gx];var Qx="sl-card";nd.define("sl-card");ee({tagName:Qx,elementClass:nd,react:te,events:{},displayName:"SlCard"});function pm(i){const n=document.querySelector("html"),r="sl-theme-dark",c="sl-theme-light";i==="dark"&&(n.classList.contains(r)||n.classList.add(r),n.classList.remove(c)),i==="light"&&(n.classList.contains(c)||n.classList.add(c),n.classList.remove(r))}const sd="STANDARD",Zx="http://",Kx="https://",od="HTTP",rd="IMAGE",cd="NUMBER",ud="UUID",mm=[sd,od,rd,cd,ud];function Fx(i,n=!1){const r=/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i,c=/^([0-9]|#|\+|\*|-|,|\s)+$/gm,u=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/g;let f=sd;return r.test(i)&&(f=rd),(i.includes(Kx)||i.includes(Zx))&&(f=od),c.test(i)&&(f=cd),u.test(i)&&(f=ud),{text:i,date:new Date().toLocaleDateString(),type:f,isFavorite:n}}function Jx(i,n,r){let c;return r?c=i.filter(u=>u.type!==n):c=i.filter(u=>u.type!==n||u.type===n&&u.isFavorite),c}const Wx=i=>i===sd?"bag-plus-fill":i===od?"router-fill":i===rd?"image-fill":i===cd?"1-square-fill":i===ud?"database-fill":"";function Ix(i){let n=!0,r;console.log("data",i);try{r=JSON.parse(i)}catch{n=!1}if(r){typeof r=="object"&&Object.keys(r).length===0&&(n=!1),typeof r!="object"&&(n=!1);for(let[c,u]of Object.entries(r)){if(console.log("key",c),c==="version"&&typeof u!="number"&&(n=!1),c==="history")if(Array.isArray(u))for(let f=0;f<u.length;f++)Object.keys(u[f]).forEach(y=>{y==="text"&&typeof u[f][y]!="string"&&(n=!1),y==="date"&&typeof u[f][y]!="string"&&(u[f][y]="na/na/na"),y==="type"&&typeof u[f][y]!="string"&&(u[f][y]="STANDARD"),y==="isFavorite"&&typeof u[f][y]!="boolean"&&(u[f][y]=!1)});else n=!1;c==="ui"&&(typeof u=="object"&&u!==null?Object.keys(u).forEach(h=>{h==="theme"&&(u[h]!=="dark"||u[h]!=="light")&&(u[h]="dark"),h==="lineClamp"&&typeof u[h]!="boolean"&&(u[h]=!0),h==="historyLength"&&typeof u[h]!="number"&&(u[h]=100),h==="showDates"&&typeof u[h]!="boolean"&&(u[h]=!0),h==="showType"&&typeof u[h]!="boolean"&&(u[h]=!0),h==="showType"&&(u[h]!=="strict"||u[h]!=="loose")&&(u[h]="strict"),h==="showTypes"&&typeof u[h]!="boolean"&&(u[h]=!0)}):n=!1)}}return console.log("isValid",n),console.log("toValidate",r),{isValid:n,data:r}}const Bu="/zipboard-web/assets/icon-Ca8nZqDW.png",Px=({data:i,handleSaveUI:n,clearHistory:r,clearHistoryType:c})=>{const[u,f]=St.useState(!1),[h,y]=St.useState(!1),[v,g]=St.useState(!1),[C,k]=St.useState(!1),[N,O]=St.useState(""),[U,L]=St.useState(i.ui.historyLength),[q,K]=St.useState(i.ui.lineClamp),[F,G]=St.useState(i.ui.showDates),[it,X]=St.useState(i.ui.showTypes),[wt,kt]=St.useState(i.ui.stackActions),[st,j]=St.useState(i.ui.smallView??!1),[lt,Yt]=St.useState(i.ui.viewAlign??"left"),[Xt,ae]=St.useState(i.ui.hasColumns??!1),$t=i.ui.searchRule;St.useEffect(()=>{const tt=document.querySelector("body"),ct=yl=>{yl.key==="E"&&f(!0)};return tt.addEventListener("keypress",ct),()=>tt.removeEventListener("keypress",ct)},[]);const Qt=()=>{r(C)},B=tt=>{c(tt,C)},W=tt=>{const ct=tt.target.value,yl=parseInt(ct,10);if(!yl){L(10);return}if(yl>300){L(300);return}L(yl)},Q=()=>{let tt=U;if(!U){tt=10,L(10);return}if(tt>300){tt=300,L(300);return}n(tt,"historyLength")},gt=tt=>{const ct=tt.target.checked;K(ct),n(ct,"lineClamp")},x=tt=>{const ct=tt.target.checked;G(ct),n(ct,"showDates")},H=tt=>{const ct=tt.target.checked;X(ct),n(ct,"showTypes")},P=tt=>{const ct=tt.target.checked;kt(ct),n(ct,"stackActions")},I=tt=>{const ct=tt.target.value;n(ct,"searchRule")},V=tt=>{const ct=tt.target.value;pm(ct),n(ct,"theme")},vt=tt=>{tt.target.localName==="sl-select"||tt.target.localName==="sl-copy-button"||(g(!1),y(!1),f(!1))},rt=()=>{const tt=document.querySelector("#zpCore");tt.scrollTop=0},we=tt=>{const ct=tt.target.checked;k(ct)},Ct=()=>{const tt=Ix(N);console.log("data",tt)},Ft=tt=>{const ct=tt.target.checked;j(ct),n(ct,"smallView")},Ut=tt=>{const ct=tt.target.value;Yt(ct),n(ct,"viewAlign")},We=tt=>{const ct=tt.target.checked;ae(ct),n(ct,"hasColumns")};return A.jsxs(A.Fragment,{children:[A.jsxs("header",{className:"zp-header",children:[A.jsx("img",{src:Bu,alt:"Zipboard Logo",className:"zp-header-logo"}),A.jsx("div",{className:"zp-h-title",children:"Zipboard"}),A.jsxs("div",{className:"zp-h-actions",children:[A.jsx(Oe,{onClick:rt,size:"small",circle:!0,children:A.jsx(Qe,{name:"arrow-bar-up"})}),A.jsx(Oe,{onClick:()=>f(!0),size:"small",circle:!0,children:A.jsx(Qe,{name:"gear-wide-connected"})})]})]}),A.jsxs(Iu,{label:"App Settings",open:u,onSlAfterHide:vt,children:[!h&&!v&&A.jsxs("div",{children:[A.jsxs("div",{children:[A.jsx("div",{className:"zp-theme-select",children:A.jsxs(ds,{label:"Theme",size:"small",value:i.ui.theme,onSlChange:V,children:[A.jsxs(ml,{value:"dark",children:[A.jsx(Qe,{name:"moon",slot:"suffix"}),"Dark"]}),A.jsxs(ml,{value:"light",children:[A.jsx(Qe,{name:"brightness-high",slot:"suffix"}),"Light"]})]})}),A.jsx("div",{className:"zp-divider"}),A.jsx("div",{className:"zp-mg-bt",children:A.jsxs(ds,{label:"Search Rule",size:"small",value:$t,onSlChange:I,children:[A.jsx(ml,{value:"strict",children:"Strict"}),A.jsx(ml,{value:"loose",children:"Loose"})]})}),A.jsxs("div",{className:"zp-flex zp-flex--end",children:[A.jsx("div",{className:"zp-flex-fill",children:A.jsx(ms,{label:"History",type:"number",size:"small",min:"10",max:"300",value:U,onSlInput:W})}),A.jsx(Oe,{size:"small",onClick:Q,children:"Update"})]}),A.jsx("div",{className:"zp-text-small zp-text-small--dim",children:"If your history exceeds the length it will be trimmed and saved"})]}),A.jsx("div",{className:"zp-divider"}),A.jsx("div",{className:"zp-mg-bt",children:A.jsx(Hi,{checked:q,onSlChange:gt,size:"small",children:"Line Clamp"})}),A.jsx("div",{className:"zp-mg-bt",children:A.jsx(Hi,{checked:F,onSlChange:x,size:"small",children:"Show Dates"})}),A.jsx("div",{className:"zp-mg-bt",children:A.jsx(Hi,{checked:it,onSlChange:H,size:"small",children:"Show Types"})}),A.jsx("div",{children:A.jsx(Hi,{checked:wt,onSlChange:P,size:"small",children:"Stack Actions"})}),A.jsx("div",{className:"zp-divider"}),A.jsx("div",{children:"(Web Only)"}),A.jsxs("div",{className:"zp-input-flex",children:[A.jsx("div",{children:A.jsx(Hi,{checked:st,onSlChange:Ft,size:"small",children:"Small View"})}),A.jsx("div",{children:A.jsxs(ds,{size:"small",value:lt,onSlChange:Ut,children:[A.jsxs(ml,{value:"left",children:[A.jsx(Qe,{name:"justify-left",slot:"suffix"}),"left"]}),A.jsxs(ml,{value:"center",children:[A.jsx(Qe,{name:"justify",slot:"suffix"}),"middle"]}),A.jsxs(ml,{value:"right",children:[A.jsx(Qe,{name:"justify-right",slot:"suffix"}),"right"]})]})})]}),A.jsx("div",{children:A.jsxs("div",{children:[A.jsx(Hi,{label:"Columns",checked:Xt,onSlChange:We,size:"small",children:"Columns (experimental)"}),A.jsx("div",{className:"zp-text-small zp-text-small--dim",children:"Works above 760px width, item might wrap weird, horizontal overflow scroll. It might also has strange behavior with other UI options."})]})}),A.jsx("div",{className:"zp-divider"}),A.jsx("div",{className:"zp-mg-bt",children:A.jsx(Oe,{size:"small",variant:"warning",outline:!0,onClick:()=>y(!0),disabled:i.history.length===0,children:"Manage History"})}),A.jsx("div",{children:A.jsx(Oe,{size:"small",variant:"danger",outline:!0,onClick:()=>g(!0),children:"View Data"})})]}),h&&A.jsxs("div",{children:[A.jsx("div",{className:"zp-logo-history",children:A.jsx(hm,{name:"bounce",duration:2e3,play:!0,children:A.jsx("img",{src:Bu,alt:"Zipboard Logo"})})}),A.jsx("div",{className:"zp-mg-bt",children:"This will remove all or some of your history, are you sure?"}),A.jsx("div",{className:"zp-mg-bt",children:A.jsx(tm,{checked:C,onSlChange:we,children:"Remove Favorites on Clear"})}),A.jsx("div",{className:"zp-btn-full zp-mg-bt",children:A.jsx(Oe,{size:"small",variant:"warning",outline:!0,onClick:Qt,disabled:i.history.length===0,children:"Clear ALL History"})}),mm.map(tt=>A.jsx("div",{className:"zp-btn-full zp-mg-bt",children:A.jsxs(Oe,{size:"small",variant:"neutral",outline:!0,onClick:()=>B(tt),disabled:i.history.length===0,children:["Clear ",tt]})},tt))]}),v&&A.jsxs("div",{children:[A.jsxs("div",{className:"zp-mg-bt",children:["You are entering the ",A.jsx("strong",{className:"zp-text-danger",children:"DANGER ZONE."})]}),A.jsxs("div",{className:"zp-data-display",children:[A.jsx(dm,{value:JSON.stringify(i,null,"  "),"copy-label":"Copy saved data"}),A.jsx("div",{className:"zp-data-text-area",children:A.jsx(Dy,{size:"small",placeholder:"Paste your saved history data to use...",onSlInput:tt=>O(tt.target.value),rows:12,resize:"none"})}),A.jsx(Oe,{onClick:Ct,disabled:N.length===0,size:"small",children:"Validate and Save (BETA)"})]})]}),A.jsxs(Ju,{slot:"footer",children:[(h||v)&&A.jsx(Oe,{size:"small",variant:"default",onClick:()=>{y(!1),g(!1)},children:"Back"}),A.jsx(Oe,{size:"small",variant:"primary",onClick:()=>f(!1),children:"Close"})]})]})]})};function tw(i,n){return n==="loose"?i.toLowerCase():i}const ew=({isOpen:i,list:n,editData:r,currentIndex:c,positionMove:u,closeEdit:f,handleSave:h})=>{const[y,v]=St.useState(r??{}),[g,C]=St.useState(!1),[k,N]=St.useState(c??0),O=Array.from({length:u??0}),U=G=>{C(G.target.checked)},L=G=>{const it=G.target.value;N(parseInt(it,10))},q=(G,it)=>{v(X=>({...X,[it]:G}))},K=G=>{if(!(G.target.localName==="sl-select"||G.target.localName==="sl-copy-button")){if(c!==k)n.splice(c,1),n.splice(k,0,y),h(n);else{const it=n.map((X,wt)=>wt===c?y:X);h(it)}f==null||f()}},F=G=>{G.target.localName==="sl-select"||G.target.localName==="sl-copy-button"||(v({}),C(!1),f==null||f())};return A.jsxs(Iu,{label:"Edit",open:i,onSlAfterHide:F,children:[A.jsx("div",{className:"zp-mg-bt",children:A.jsx(ms,{label:"Saved Data",value:(y==null?void 0:y.text)??"",onSlInput:G=>q(G.target.value,"text"),size:"small"})}),A.jsx("div",{className:"zp-mg-bt",children:A.jsx(ms,{label:"Add tooltip",value:(y==null?void 0:y.tooltip)??"",onSlInput:G=>q(G.target.value,"tooltip"),size:"small"})}),A.jsx("div",{className:"zp-mg-bt",children:A.jsx(tm,{checked:g,onSlChange:U,children:"Move to"})}),A.jsx("div",{className:"zp-mg-bt",children:A.jsx(ds,{size:"small","help-text":`Current position is ${c+1}`,onSlChange:L,disabled:!g,children:u!==null&&O.map((G,it)=>A.jsxs(ml,{value:it,disabled:it===c,children:["Position - ",it]},it))})}),A.jsxs(Ju,{slot:"footer",children:[A.jsx(Oe,{variant:"default",size:"small",onClick:F,children:"Close"}),A.jsx(Oe,{variant:"primary",size:"small",onClick:K,children:"Update"})]})]})},lw=({isOpen:i,itemToDelete:n,deleteItem:r,closeDelete:c})=>{const u=()=>{r==null||r(n),c==null||c()},f=()=>{c==null||c()};return A.jsxs(Iu,{label:"Delete",open:i,onSlAfterHide:f,children:[A.jsx("div",{className:"zp-mg-bt",children:"Are you sure you want to delete this item?"}),A.jsxs(Ju,{slot:"footer",children:[A.jsx(Oe,{variant:"default",size:"small",onClick:f,children:"Close"}),A.jsx(Oe,{variant:"primary",size:"small",onClick:u,children:"Update"})]})]})},aw=({data:i,list:n,handleSave:r,isSearching:c})=>{const[u,f]=St.useState(null),[h,y]=St.useState(null),v=i.ui.lineClamp,g=i.ui.showDates,C=i.ui.showTypes,k=i.ui.stackActions??!1,N=L=>{const q=n.filter((K,F)=>F!==L);r(q)},O=(L,q)=>{const K=n.map((F,G)=>{const it=G===L?q:F.isFavorite;return{...F,isFavorite:it}});r(K)},U=L=>{f(L)};return A.jsx("div",{children:A.jsxs("div",{className:`zp-list ${g?"show-dates":""} ${C?"show-types":""}`,children:[n.length===0&&A.jsxs(P0,{open:!0,children:[A.jsx(Qe,{slot:"icon",name:"info-circle"}),c?A.jsx(A.Fragment,{children:"No results from search"}):A.jsx(A.Fragment,{children:"Start adding Zipboards from the input or Tray option. Enjoy."})]}),n.length>0&&n.map((L,q)=>A.jsxs("div",{className:`zp-flex zp-list-anchor ${k?"zp-list-stacked":""}`,children:[A.jsxs("div",{className:"zp-flex-fill",children:[A.jsx("div",{className:"zp-list-info",children:A.jsxs(q1,{content:L.tooltip,trigger:"click",placement:"left",disabled:!L.tooltip,children:[A.jsx("div",{className:`zp-list-dot dot-${L.type}`}),A.jsx("div",{className:`zp-list-text ${v?"zp-list-text--clamped":""}`,title:L.text,children:L.text})]})}),A.jsx("div",{className:"zp-addon zp-date",children:L.date}),A.jsx("div",{className:"zp-addon zp-type",children:L.type})]}),A.jsxs("div",{className:"zp-fav-btns",children:[A.jsxs("div",{className:"zp-fav-copy",children:[A.jsx(zu,{className:"zp-fav-btn",name:`${L.isFavorite?"suit-heart-fill":"suit-heart"}`,onClick:()=>{const K=!L.isFavorite;O(q,K)}}),A.jsx(dm,{value:L.text,className:"zp-copy-btn"})]}),A.jsxs("div",{className:"zp-fav-action",children:[A.jsx(zu,{name:"pencil-fill",label:"Open Panel",onClick:()=>U(q)}),A.jsx(zu,{name:"trash2-fill",onClick:()=>y(q)})]})]})]},q)),u!==null&&A.jsx(ew,{isOpen:u!==null,list:n,editData:n[u],currentIndex:u,positionMove:n==null?void 0:n.length,closeEdit:()=>U(null),handleSave:r}),h!=null&&A.jsx(lw,{isOpen:h!=null,itemToDelete:h,deleteItem:N,closeDelete:()=>y(null)})]})})},is="ALL",Eu="FAVORITE";function iw(i,n=300){let r;return(...c)=>{clearTimeout(r),r=setTimeout(()=>{i.apply(this,c)},n)}}function nw({smallView:i,viewAlign:n,hasColumns:r}){if(r)return"zp-core--hascolumns";if(i){let c="zp-core--smallview";return n==="left"&&(c+=" zp-core--left"),n==="center"&&(c+=" zp-core--center"),n==="right"&&(c+=" zp-core--right"),c}return""}const sw=({data:i,saveData:n})=>{const[r,c]=St.useState(""),[u,f]=St.useState(!1),[h,y]=St.useState(!1),[v,g]=St.useState(""),[C,k]=St.useState(is),N=i.history||[],O=i.ui.historyLength,U=i.ui.searchRule,L=i.ui.smallView??!1,q=i.ui.viewAlign??"left",K=i.ui.hasColumns??!1,F=St.useMemo(()=>{let st=N;return C!==is&&(C===Eu?st=st.filter(j=>j.isFavorite):st=st.filter(j=>j.type===C)),v&&(st=st.filter(j=>tw(j.text,U).includes(v))),st},[v,C,i,N]),G=iw(st=>g(st.target.value)),it=st=>{const j=st.target.value;k(j)},X=st=>{const j=st.target.value;c(j)},wt=()=>{if(!r)return;const j=[Fx(r),...N];if(j.length>O){f(!0);const lt=j.filter((Yt,Xt)=>Xt<O);n(lt);return}n(j),c("")},kt=st=>{st.preventDefault(),wt()};return A.jsxs(A.Fragment,{children:[A.jsxs("div",{className:"zp-item-handle",children:[A.jsx("form",{onSubmit:kt,children:A.jsxs("div",{className:"zp-flex",children:[A.jsx("div",{className:"zp-flex-fill",children:A.jsx(ms,{clearable:!0,size:"small","help-text":"Paste a link to save",onSlInput:X,value:r,placeholder:"Something cool to reuse"})}),A.jsx(Oe,{size:"small",onClick:wt,disabled:r.length===0,children:"Add"}),A.jsxs(Oe,{name:"search-heart",label:"Search",size:"small",type:"submit",onClick:()=>y(!h),children:[A.jsx(Qe,{name:"search-heart"}),!h&&(C!==is||v)&&A.jsx(B1,{variant:"warning",pill:!0})]})]})}),A.jsxs(P0,{variant:"danger",open:u,closable:!0,onSlAfterHide:()=>f(!1),children:[A.jsx(Qe,{slot:"icon",name:"exclamation-octagon"}),A.jsx("strong",{children:"History length."}),A.jsx("p",{children:"The last item(s) have been removed."})]}),A.jsx("div",{className:"zp-search",children:h&&A.jsx("div",{className:"zp-mg-tp",children:A.jsxs("div",{className:"zp-flex zp-flex--min-block",children:[A.jsx("div",{className:"zp-flex-fill",children:A.jsxs(ds,{label:"Filter Type",size:"small",value:C,onSlChange:it,children:[A.jsxs(ml,{value:is,children:[A.jsx(Qe,{name:"wallet-fill",slot:"suffix"}),is]}),A.jsxs(ml,{value:Eu,children:[A.jsx(Qe,{name:"suit-heart-fill",slot:"suffix"}),Eu]}),mm.map(st=>A.jsxs(ml,{value:st,children:[A.jsx(Qe,{name:Wx(st),slot:"suffix"}),st]},st))]})}),A.jsx("div",{className:"zp-flex-fill",children:A.jsx(ms,{label:"Search History",clearable:!0,size:"small",onSlInput:G,value:v,placeholder:"Search your history"})})]})})})]}),A.jsx("div",{id:"zpCore",className:`zp-core ${nw({smallView:L,viewAlign:q,hasColumns:K})}`,children:A.jsx("div",{className:"zp-cinner",children:A.jsx(aw,{data:i,list:F,handleSave:n,isSearching:h})})})]})},ow=({data:i})=>A.jsxs("div",{className:"zp-footer",children:[A.jsxs("div",{className:"zp-text-small",children:["History: ",i.history.length]}),A.jsx("div",{className:"zp-text-small",children:"Created by Jason Jacobson"})]}),N0={version:1,history:[],ui:{theme:"dark",lineClamp:!0,historyLength:100,showDates:!0,showType:!1,searchRule:"strict",showTypes:!0,stackActions:!1}};function rw(){const i=window.localStorage.getItem("zipboard");if(i){const n=JSON.parse(i);return console.log("has data",n),n}else{console.log("has NO data");const n=JSON.stringify(N0);return window.localStorage.setItem("zipboard",n),N0}}function ns(i){const n=JSON.stringify(i);window.localStorage.setItem("zipboard",n)}function cw(){const[i,n]=St.useState(null),[r,c]=St.useState(!1),[u,f]=St.useState(!1);St.useEffect(()=>{if(!u){f(!0);const C=rw();setTimeout(()=>{n(C),r||c(!0)},1500)}},[u,r]),St.useEffect(()=>{if(r){const C=i.ui.theme;pm(C)}},[r]);const h=(C,k)=>{if(console.log("saving UI"),k==="historyLength"&&i.history.length>C){const O=i.history.filter((U,L)=>L<C);n(U=>{const L={...U,ui:{...U.ui,[k]:C},history:O};return ns(N),L});return}const N={...i};N.ui[k]=C,ns(N),n(N)},y=C=>{const k={...i,history:C};ns(k),n(k)},v=(C=!1)=>{let k=[];C||(k=i.history.filter(O=>O.isFavorite));const N={...i,history:k};ns(N),n(N)},g=(C,k=!1)=>{const N=Jx(i.history,C,k),O={...i,history:N};ns(O),n(O)};return A.jsxs("div",{className:`zp-app ${i?"":"is-loading"}`,children:[!i&&A.jsx("div",{className:"zp-app-loader",children:A.jsx(hm,{name:"bounce",duration:2e3,play:!0,children:A.jsx("img",{src:Bu,alt:"Zipboard Logo",className:"zp-header-logo"})})}),i&&A.jsxs(A.Fragment,{children:[A.jsx(Px,{data:i,handleSaveUI:h,clearHistory:v,clearHistoryType:g}),A.jsx(sw,{data:i,saveData:y}),A.jsx(ow,{data:i})]})]})}Ou("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.0/cdn/");Jb.createRoot(document.getElementById("root")).render(A.jsx(St.StrictMode,{children:A.jsx(cw,{})}));
