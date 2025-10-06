function Bb(i,n){for(var r=0;r<n.length;r++){const c=n[r];if(typeof c!="string"&&!Array.isArray(c)){for(const u in c)if(u!=="default"&&!(u in i)){const f=Object.getOwnPropertyDescriptor(c,u);f&&Object.defineProperty(i,u,f.get?f:{enumerable:!0,get:()=>c[u]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))c(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function r(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(u){if(u.ep)return;u.ep=!0;const f=r(u);fetch(u.href,f)}})();function Lb(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var uu={exports:{}},Zn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function jb(){if(Kp)return Zn;Kp=1;var i=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(c,u,f){var h=null;if(f!==void 0&&(h=""+f),u.key!==void 0&&(h=""+u.key),"key"in u){f={};for(var y in u)y!=="key"&&(f[y]=u[y])}else f=u;return u=f.ref,{$$typeof:i,type:c,key:h,ref:u!==void 0?u:null,props:f}}return Zn.Fragment=n,Zn.jsx=r,Zn.jsxs=r,Zn}var Fp;function Vb(){return Fp||(Fp=1,uu.exports=jb()),uu.exports}var E=Vb(),du={exports:{}},ot={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function qb(){if(Jp)return ot;Jp=1;var i=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),k=Symbol.iterator;function N(x){return x===null||typeof x!="object"?null:(x=k&&x[k]||x["@@iterator"],typeof x=="function"?x:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,V={};function Y(x,H,P){this.props=x,this.context=H,this.refs=V,this.updater=P||O}Y.prototype.isReactComponent={},Y.prototype.setState=function(x,H){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,H,"setState")},Y.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function F(){}F.prototype=Y.prototype;function J(x,H,P){this.props=x,this.context=H,this.refs=V,this.updater=P||O}var Q=J.prototype=new F;Q.constructor=J,U(Q,Y.prototype),Q.isPureReactComponent=!0;var at=Array.isArray,q={H:null,A:null,T:null,S:null},it=Object.prototype.hasOwnProperty;function St(x,H,P,B,L,ct){return P=ct.ref,{$$typeof:i,type:x,key:H,ref:P!==void 0?P:null,props:ct}}function Pt(x,H){return St(x.type,H,void 0,void 0,void 0,x.props)}function X(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function lt(x){var H={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(P){return H[P]})}var Vt=/\/+/g;function Gt(x,H){return typeof x=="object"&&x!==null&&x.key!=null?lt(""+x.key):H.toString(36)}function te(){}function Ot(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(te,te):(x.status="pending",x.then(function(H){x.status==="pending"&&(x.status="fulfilled",x.value=H)},function(H){x.status==="pending"&&(x.status="rejected",x.reason=H)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function qt(x,H,P,B,L){var ct=typeof x;(ct==="undefined"||ct==="boolean")&&(x=null);var ut=!1;if(x===null)ut=!0;else switch(ct){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(x.$$typeof){case i:case n:ut=!0;break;case C:return ut=x._init,qt(ut(x._payload),H,P,B,L)}}if(ut)return L=L(x),ut=B===""?"."+Gt(x,0):B,at(L)?(P="",ut!=null&&(P=ut.replace(Vt,"$&/")+"/"),qt(L,H,P,"",function(le){return le})):L!=null&&(X(L)&&(L=Pt(L,P+(L.key==null||x&&x.key===L.key?"":(""+L.key).replace(Vt,"$&/")+"/")+ut)),H.push(L)),1;ut=0;var ke=B===""?".":B+":";if(at(x))for(var zt=0;zt<x.length;zt++)B=x[zt],ct=ke+Gt(B,zt),ut+=qt(B,H,P,ct,L);else if(zt=N(x),typeof zt=="function")for(x=zt.call(x),zt=0;!(B=x.next()).done;)B=B.value,ct=ke+Gt(B,zt++),ut+=qt(B,H,P,ct,L);else if(ct==="object"){if(typeof x.then=="function")return qt(Ot(x),H,P,B,L);throw H=String(x),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return ut}function j(x,H,P){if(x==null)return x;var B=[],L=0;return qt(x,B,"","",function(ct){return H.call(P,ct,L++)}),B}function I(x){if(x._status===-1){var H=x._result;H=H(),H.then(function(P){(x._status===0||x._status===-1)&&(x._status=1,x._result=P)},function(P){(x._status===0||x._status===-1)&&(x._status=2,x._result=P)}),x._status===-1&&(x._status=0,x._result=H)}if(x._status===1)return x._result.default;throw x._result}var Z=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function mt(){}return ot.Children={map:j,forEach:function(x,H,P){j(x,function(){H.apply(this,arguments)},P)},count:function(x){var H=0;return j(x,function(){H++}),H},toArray:function(x){return j(x,function(H){return H})||[]},only:function(x){if(!X(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ot.Component=Y,ot.Fragment=r,ot.Profiler=u,ot.PureComponent=J,ot.StrictMode=c,ot.Suspense=v,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,ot.act=function(){throw Error("act(...) is not supported in production builds of React.")},ot.cache=function(x){return function(){return x.apply(null,arguments)}},ot.cloneElement=function(x,H,P){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var B=U({},x.props),L=x.key,ct=void 0;if(H!=null)for(ut in H.ref!==void 0&&(ct=void 0),H.key!==void 0&&(L=""+H.key),H)!it.call(H,ut)||ut==="key"||ut==="__self"||ut==="__source"||ut==="ref"&&H.ref===void 0||(B[ut]=H[ut]);var ut=arguments.length-2;if(ut===1)B.children=P;else if(1<ut){for(var ke=Array(ut),zt=0;zt<ut;zt++)ke[zt]=arguments[zt+2];B.children=ke}return St(x.type,L,void 0,void 0,ct,B)},ot.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:f,_context:x},x},ot.createElement=function(x,H,P){var B,L={},ct=null;if(H!=null)for(B in H.key!==void 0&&(ct=""+H.key),H)it.call(H,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(L[B]=H[B]);var ut=arguments.length-2;if(ut===1)L.children=P;else if(1<ut){for(var ke=Array(ut),zt=0;zt<ut;zt++)ke[zt]=arguments[zt+2];L.children=ke}if(x&&x.defaultProps)for(B in ut=x.defaultProps,ut)L[B]===void 0&&(L[B]=ut[B]);return St(x,ct,void 0,void 0,null,L)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(x){return{$$typeof:y,render:x}},ot.isValidElement=X,ot.lazy=function(x){return{$$typeof:C,_payload:{_status:-1,_result:x},_init:I}},ot.memo=function(x,H){return{$$typeof:g,type:x,compare:H===void 0?null:H}},ot.startTransition=function(x){var H=q.T,P={};q.T=P;try{var B=x(),L=q.S;L!==null&&L(P,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then(mt,Z)}catch(ct){Z(ct)}finally{q.T=H}},ot.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},ot.use=function(x){return q.H.use(x)},ot.useActionState=function(x,H,P){return q.H.useActionState(x,H,P)},ot.useCallback=function(x,H){return q.H.useCallback(x,H)},ot.useContext=function(x){return q.H.useContext(x)},ot.useDebugValue=function(){},ot.useDeferredValue=function(x,H){return q.H.useDeferredValue(x,H)},ot.useEffect=function(x,H){return q.H.useEffect(x,H)},ot.useId=function(){return q.H.useId()},ot.useImperativeHandle=function(x,H,P){return q.H.useImperativeHandle(x,H,P)},ot.useInsertionEffect=function(x,H){return q.H.useInsertionEffect(x,H)},ot.useLayoutEffect=function(x,H){return q.H.useLayoutEffect(x,H)},ot.useMemo=function(x,H){return q.H.useMemo(x,H)},ot.useOptimistic=function(x,H){return q.H.useOptimistic(x,H)},ot.useReducer=function(x,H,P){return q.H.useReducer(x,H,P)},ot.useRef=function(x){return q.H.useRef(x)},ot.useState=function(x){return q.H.useState(x)},ot.useSyncExternalStore=function(x,H,P){return q.H.useSyncExternalStore(x,H,P)},ot.useTransition=function(){return q.H.useTransition()},ot.version="19.0.0",ot}var Wp;function Lu(){return Wp||(Wp=1,du.exports=qb()),du.exports}var Ct=Lu();const Yb=Lb(Ct),Jt=Bb({__proto__:null,default:Yb},[Ct]);var fu={exports:{}},Kn={},hu={exports:{}},pu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function Xb(){return Ip||(Ip=1,function(i){function n(j,I){var Z=j.length;j.push(I);t:for(;0<Z;){var mt=Z-1>>>1,x=j[mt];if(0<u(x,I))j[mt]=I,j[Z]=x,Z=mt;else break t}}function r(j){return j.length===0?null:j[0]}function c(j){if(j.length===0)return null;var I=j[0],Z=j.pop();if(Z!==I){j[0]=Z;t:for(var mt=0,x=j.length,H=x>>>1;mt<H;){var P=2*(mt+1)-1,B=j[P],L=P+1,ct=j[L];if(0>u(B,Z))L<x&&0>u(ct,B)?(j[mt]=ct,j[L]=Z,mt=L):(j[mt]=B,j[P]=Z,mt=P);else if(L<x&&0>u(ct,Z))j[mt]=ct,j[L]=Z,mt=L;else break t}}return I}function u(j,I){var Z=j.sortIndex-I.sortIndex;return Z!==0?Z:j.id-I.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;i.unstable_now=function(){return f.now()}}else{var h=Date,y=h.now();i.unstable_now=function(){return h.now()-y}}var v=[],g=[],C=1,k=null,N=3,O=!1,U=!1,V=!1,Y=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function Q(j){for(var I=r(g);I!==null;){if(I.callback===null)c(g);else if(I.startTime<=j)c(g),I.sortIndex=I.expirationTime,n(v,I);else break;I=r(g)}}function at(j){if(V=!1,Q(j),!U)if(r(v)!==null)U=!0,Ot();else{var I=r(g);I!==null&&qt(at,I.startTime-j)}}var q=!1,it=-1,St=5,Pt=-1;function X(){return!(i.unstable_now()-Pt<St)}function lt(){if(q){var j=i.unstable_now();Pt=j;var I=!0;try{t:{U=!1,V&&(V=!1,F(it),it=-1),O=!0;var Z=N;try{e:{for(Q(j),k=r(v);k!==null&&!(k.expirationTime>j&&X());){var mt=k.callback;if(typeof mt=="function"){k.callback=null,N=k.priorityLevel;var x=mt(k.expirationTime<=j);if(j=i.unstable_now(),typeof x=="function"){k.callback=x,Q(j),I=!0;break e}k===r(v)&&c(v),Q(j)}else c(v);k=r(v)}if(k!==null)I=!0;else{var H=r(g);H!==null&&qt(at,H.startTime-j),I=!1}}break t}finally{k=null,N=Z,O=!1}I=void 0}}finally{I?Vt():q=!1}}}var Vt;if(typeof J=="function")Vt=function(){J(lt)};else if(typeof MessageChannel<"u"){var Gt=new MessageChannel,te=Gt.port2;Gt.port1.onmessage=lt,Vt=function(){te.postMessage(null)}}else Vt=function(){Y(lt,0)};function Ot(){q||(q=!0,Vt())}function qt(j,I){it=Y(function(){j(i.unstable_now())},I)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(j){j.callback=null},i.unstable_continueExecution=function(){U||O||(U=!0,Ot())},i.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):St=0<j?Math.floor(1e3/j):5},i.unstable_getCurrentPriorityLevel=function(){return N},i.unstable_getFirstCallbackNode=function(){return r(v)},i.unstable_next=function(j){switch(N){case 1:case 2:case 3:var I=3;break;default:I=N}var Z=N;N=I;try{return j()}finally{N=Z}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(j,I){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var Z=N;N=j;try{return I()}finally{N=Z}},i.unstable_scheduleCallback=function(j,I,Z){var mt=i.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?mt+Z:mt):Z=mt,j){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=Z+x,j={id:C++,callback:I,priorityLevel:j,startTime:Z,expirationTime:x,sortIndex:-1},Z>mt?(j.sortIndex=Z,n(g,j),r(v)===null&&j===r(g)&&(V?(F(it),it=-1):V=!0,qt(at,Z-mt))):(j.sortIndex=x,n(v,j),U||O||(U=!0,Ot())),j},i.unstable_shouldYield=X,i.unstable_wrapCallback=function(j){var I=N;return function(){var Z=N;N=I;try{return j.apply(this,arguments)}finally{N=Z}}}}(pu)),pu}var Pp;function Gb(){return Pp||(Pp=1,hu.exports=Xb()),hu.exports}var mu={exports:{}},Ae={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0;function Qb(){if(t0)return Ae;t0=1;var i=Lu();function n(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)g+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var c={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(v,g,C){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:k==null?null:""+k,children:v,containerInfo:g,implementation:C}}var h=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Ae.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Ae.createPortal=function(v,g){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(n(299));return f(v,g,null,C)},Ae.flushSync=function(v){var g=h.T,C=c.p;try{if(h.T=null,c.p=2,v)return v()}finally{h.T=g,c.p=C,c.d.f()}},Ae.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(v,g))},Ae.prefetchDNS=function(v){typeof v=="string"&&c.d.D(v)},Ae.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var C=g.as,k=y(C,g.crossOrigin),N=typeof g.integrity=="string"?g.integrity:void 0,O=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;C==="style"?c.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:k,integrity:N,fetchPriority:O}):C==="script"&&c.d.X(v,{crossOrigin:k,integrity:N,fetchPriority:O,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Ae.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var C=y(g.as,g.crossOrigin);c.d.M(v,{crossOrigin:C,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(v)},Ae.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var C=g.as,k=y(C,g.crossOrigin);c.d.L(v,C,{crossOrigin:k,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Ae.preloadModule=function(v,g){if(typeof v=="string")if(g){var C=y(g.as,g.crossOrigin);c.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:C,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(v)},Ae.requestFormReset=function(v){c.d.r(v)},Ae.unstable_batchedUpdates=function(v,g){return v(g)},Ae.useFormState=function(v,g,C){return h.H.useFormState(v,g,C)},Ae.useFormStatus=function(){return h.H.useHostTransitionStatus()},Ae.version="19.0.0",Ae}var e0;function Zb(){if(e0)return mu.exports;e0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(n){console.error(n)}}return i(),mu.exports=Qb(),mu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0;function Kb(){if(l0)return Kn;l0=1;var i=Gb(),n=Lu(),r=Zb();function c(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var f=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),O=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),at=Symbol.for("react.memo_cache_sentinel"),q=Symbol.iterator;function it(t){return t===null||typeof t!="object"?null:(t=q&&t[q]||t["@@iterator"],typeof t=="function"?t:null)}var St=Symbol.for("react.client.reference");function Pt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===St?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case v:return"Fragment";case y:return"Portal";case C:return"Profiler";case g:return"StrictMode";case V:return"Suspense";case Y:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case O:return(t.displayName||"Context")+".Provider";case N:return(t._context.displayName||"Context")+".Consumer";case U:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return e=t.displayName||null,e!==null?e:Pt(t.type)||"Memo";case J:e=t._payload,t=t._init;try{return Pt(t(e))}catch{}}return null}var X=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lt=Object.assign,Vt,Gt;function te(t){if(Vt===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Vt=e&&e[1]||"",Gt=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vt+t+Gt}var Ot=!1;function qt(t,e){if(!t||Ot)return"";Ot=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(D){var T=D}Reflect.construct(t,[],M)}else{try{M.call()}catch(D){T=D}t.call(M.prototype)}}else{try{throw Error()}catch(D){T=D}(M=t())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(D){if(D&&T&&typeof D.stack=="string")return[D.stack,T.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=a.DetermineComponentFrameRoot(),d=o[0],p=o[1];if(d&&p){var b=d.split(`
`),S=p.split(`
`);for(s=a=0;a<b.length&&!b[a].includes("DetermineComponentFrameRoot");)a++;for(;s<S.length&&!S[s].includes("DetermineComponentFrameRoot");)s++;if(a===b.length||s===S.length)for(a=b.length-1,s=S.length-1;1<=a&&0<=s&&b[a]!==S[s];)s--;for(;1<=a&&0<=s;a--,s--)if(b[a]!==S[s]){if(a!==1||s!==1)do if(a--,s--,0>s||b[a]!==S[s]){var R=`
`+b[a].replace(" at new "," at ");return t.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",t.displayName)),R}while(1<=a&&0<=s);break}}}finally{Ot=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?te(l):""}function j(t){switch(t.tag){case 26:case 27:case 5:return te(t.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 15:return t=qt(t.type,!1),t;case 11:return t=qt(t.type.render,!1),t;case 1:return t=qt(t.type,!0),t;default:return""}}function I(t){try{var e="";do e+=j(t),t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function Z(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function mt(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function x(t){if(Z(t)!==t)throw Error(c(188))}function H(t){var e=t.alternate;if(!e){if(e=Z(t),e===null)throw Error(c(188));return e!==t?null:t}for(var l=t,a=e;;){var s=l.return;if(s===null)break;var o=s.alternate;if(o===null){if(a=s.return,a!==null){l=a;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===l)return x(s),t;if(o===a)return x(s),e;o=o.sibling}throw Error(c(188))}if(l.return!==a.return)l=s,a=o;else{for(var d=!1,p=s.child;p;){if(p===l){d=!0,l=s,a=o;break}if(p===a){d=!0,a=s,l=o;break}p=p.sibling}if(!d){for(p=o.child;p;){if(p===l){d=!0,l=o,a=s;break}if(p===a){d=!0,a=o,l=s;break}p=p.sibling}if(!d)throw Error(c(189))}}if(l.alternate!==a)throw Error(c(190))}if(l.tag!==3)throw Error(c(188));return l.stateNode.current===l?t:e}function P(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=P(t),e!==null)return e;t=t.sibling}return null}var B=Array.isArray,L=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ct={pending:!1,data:null,method:null,action:null},ut=[],ke=-1;function zt(t){return{current:t}}function le(t){0>ke||(t.current=ut[ke],ut[ke]=null,ke--)}function Lt(t,e){ke++,ut[ke]=t.current,t.current=e}var pl=zt(null),Fi=zt(null),Xl=zt(null),_s=zt(null);function xs(t,e){switch(Lt(Xl,e),Lt(Fi,t),Lt(pl,null),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)&&(e=e.namespaceURI)?Sp(e):0;break;default:if(t=t===8?e.parentNode:e,e=t.tagName,t=t.namespaceURI)t=Sp(t),e=zp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}le(pl),Lt(pl,e)}function Pa(){le(pl),le(Fi),le(Xl)}function er(t){t.memoizedState!==null&&Lt(_s,t);var e=pl.current,l=zp(e,t.type);e!==l&&(Lt(Fi,t),Lt(pl,l))}function ws(t){Fi.current===t&&(le(pl),le(Fi)),_s.current===t&&(le(_s),qn._currentValue=ct)}var lr=Object.prototype.hasOwnProperty,ar=i.unstable_scheduleCallback,ir=i.unstable_cancelCallback,gm=i.unstable_shouldYield,bm=i.unstable_requestPaint,ml=i.unstable_now,vm=i.unstable_getCurrentPriorityLevel,dd=i.unstable_ImmediatePriority,fd=i.unstable_UserBlockingPriority,Ss=i.unstable_NormalPriority,ym=i.unstable_LowPriority,hd=i.unstable_IdlePriority,_m=i.log,xm=i.unstable_setDisableYieldValue,Ji=null,He=null;function wm(t){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Ji,t,void 0,(t.current.flags&128)===128)}catch{}}function Gl(t){if(typeof _m=="function"&&xm(t),He&&typeof He.setStrictMode=="function")try{He.setStrictMode(Ji,t)}catch{}}var Be=Math.clz32?Math.clz32:Cm,Sm=Math.log,zm=Math.LN2;function Cm(t){return t>>>=0,t===0?32:31-(Sm(t)/zm|0)|0}var zs=128,Cs=4194304;function Sa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function As(t,e){var l=t.pendingLanes;if(l===0)return 0;var a=0,s=t.suspendedLanes,o=t.pingedLanes,d=t.warmLanes;t=t.finishedLanes!==0;var p=l&134217727;return p!==0?(l=p&~s,l!==0?a=Sa(l):(o&=p,o!==0?a=Sa(o):t||(d=p&~d,d!==0&&(a=Sa(d))))):(p=l&~s,p!==0?a=Sa(p):o!==0?a=Sa(o):t||(d=l&~d,d!==0&&(a=Sa(d)))),a===0?0:e!==0&&e!==a&&!(e&s)&&(s=a&-a,d=e&-e,s>=d||s===32&&(d&4194176)!==0)?e:a}function Wi(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Am(t,e){switch(t){case 1:case 2:case 4:case 8:return e+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pd(){var t=zs;return zs<<=1,!(zs&4194176)&&(zs=128),t}function md(){var t=Cs;return Cs<<=1,!(Cs&62914560)&&(Cs=4194304),t}function nr(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Ii(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Em(t,e,l,a,s,o){var d=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var p=t.entanglements,b=t.expirationTimes,S=t.hiddenUpdates;for(l=d&~l;0<l;){var R=31-Be(l),M=1<<R;p[R]=0,b[R]=-1;var T=S[R];if(T!==null)for(S[R]=null,R=0;R<T.length;R++){var D=T[R];D!==null&&(D.lane&=-536870913)}l&=~M}a!==0&&gd(t,a,0),o!==0&&s===0&&t.tag!==0&&(t.suspendedLanes|=o&~(d&~e))}function gd(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-Be(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&4194218}function bd(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-Be(l),s=1<<a;s&e|t[a]&e&&(t[a]|=e),l&=~s}}function vd(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function yd(){var t=L.p;return t!==0?t:(t=window.event,t===void 0?32:qp(t.type))}function Tm(t,e){var l=L.p;try{return L.p=t,e()}finally{L.p=l}}var Ql=Math.random().toString(36).slice(2),ze="__reactFiber$"+Ql,Re="__reactProps$"+Ql,ti="__reactContainer$"+Ql,sr="__reactEvents$"+Ql,km="__reactListeners$"+Ql,Om="__reactHandles$"+Ql,_d="__reactResources$"+Ql,Pi="__reactMarker$"+Ql;function or(t){delete t[ze],delete t[Re],delete t[sr],delete t[km],delete t[Om]}function za(t){var e=t[ze];if(e)return e;for(var l=t.parentNode;l;){if(e=l[ti]||l[ze]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=Ep(t);t!==null;){if(l=t[ze])return l;t=Ep(t)}return e}t=l,l=t.parentNode}return null}function ei(t){if(t=t[ze]||t[ti]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function tn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(c(33))}function li(t){var e=t[_d];return e||(e=t[_d]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function he(t){t[Pi]=!0}var xd=new Set,wd={};function Ca(t,e){ai(t,e),ai(t+"Capture",e)}function ai(t,e){for(wd[t]=e,t=0;t<e.length;t++)xd.add(e[t])}var El=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Sd={},zd={};function Rm(t){return lr.call(zd,t)?!0:lr.call(Sd,t)?!1:Dm.test(t)?zd[t]=!0:(Sd[t]=!0,!1)}function Es(t,e,l){if(Rm(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Ts(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function Tl(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function Ke(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Cd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $m(t){var e=Cd(t)?"checked":"value",l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var s=l.get,o=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(d){a=""+d,o.call(this,d)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ks(t){t._valueTracker||(t._valueTracker=$m(t))}function Ad(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=Cd(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Os(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Nm=/[\n"\\]/g;function Fe(t){return t.replace(Nm,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function rr(t,e,l,a,s,o,d,p){t.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.type=d:t.removeAttribute("type"),e!=null?d==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ke(e)):t.value!==""+Ke(e)&&(t.value=""+Ke(e)):d!=="submit"&&d!=="reset"||t.removeAttribute("value"),e!=null?cr(t,d,Ke(e)):l!=null?cr(t,d,Ke(l)):a!=null&&t.removeAttribute("value"),s==null&&o!=null&&(t.defaultChecked=!!o),s!=null&&(t.checked=s&&typeof s!="function"&&typeof s!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?t.name=""+Ke(p):t.removeAttribute("name")}function Ed(t,e,l,a,s,o,d,p){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.type=o),e!=null||l!=null){if(!(o!=="submit"&&o!=="reset"||e!=null))return;l=l!=null?""+Ke(l):"",e=e!=null?""+Ke(e):l,p||e===t.value||(t.value=e),t.defaultValue=e}a=a??s,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=p?t.checked:!!a,t.defaultChecked=!!a,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.name=d)}function cr(t,e,l){e==="number"&&Os(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function ii(t,e,l,a){if(t=t.options,e){e={};for(var s=0;s<l.length;s++)e["$"+l[s]]=!0;for(l=0;l<t.length;l++)s=e.hasOwnProperty("$"+t[l].value),t[l].selected!==s&&(t[l].selected=s),s&&a&&(t[l].defaultSelected=!0)}else{for(l=""+Ke(l),e=null,s=0;s<t.length;s++){if(t[s].value===l){t[s].selected=!0,a&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Td(t,e,l){if(e!=null&&(e=""+Ke(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+Ke(l):""}function kd(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(c(92));if(B(a)){if(1<a.length)throw Error(c(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=Ke(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a)}function ni(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var Mm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Od(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||Mm.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Dd(t,e,l){if(e!=null&&typeof e!="object")throw Error(c(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var s in e)a=e[s],e.hasOwnProperty(s)&&l[s]!==a&&Od(t,s,a)}else for(var o in e)e.hasOwnProperty(o)&&Od(t,o,e[o])}function ur(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Um=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ds(t){return Hm.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var dr=null;function fr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var si=null,oi=null;function Rd(t){var e=ei(t);if(e&&(t=e.stateNode)){var l=t[Re]||null;t:switch(t=e.stateNode,e.type){case"input":if(rr(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Fe(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var s=a[Re]||null;if(!s)throw Error(c(90));rr(a,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&Ad(a)}break t;case"textarea":Td(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&ii(t,!!l.multiple,e,!1)}}}var hr=!1;function $d(t,e,l){if(hr)return t(e,l);hr=!0;try{var a=t(e);return a}finally{if(hr=!1,(si!==null||oi!==null)&&(mo(),si&&(e=si,t=oi,oi=si=null,Rd(e),t)))for(e=0;e<t.length;e++)Rd(t[e])}}function en(t,e){var l=t.stateNode;if(l===null)return null;var a=l[Re]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(c(231,e,typeof l));return l}var pr=!1;if(El)try{var ln={};Object.defineProperty(ln,"passive",{get:function(){pr=!0}}),window.addEventListener("test",ln,ln),window.removeEventListener("test",ln,ln)}catch{pr=!1}var Zl=null,mr=null,Rs=null;function Nd(){if(Rs)return Rs;var t,e=mr,l=e.length,a,s="value"in Zl?Zl.value:Zl.textContent,o=s.length;for(t=0;t<l&&e[t]===s[t];t++);var d=l-t;for(a=1;a<=d&&e[l-a]===s[o-a];a++);return Rs=s.slice(t,1<a?1-a:void 0)}function $s(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ns(){return!0}function Md(){return!1}function $e(t){function e(l,a,s,o,d){this._reactName=l,this._targetInst=s,this.type=a,this.nativeEvent=o,this.target=d,this.currentTarget=null;for(var p in t)t.hasOwnProperty(p)&&(l=t[p],this[p]=l?l(o):o[p]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ns:Md,this.isPropagationStopped=Md,this}return lt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ns)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ns)},persist:function(){},isPersistent:Ns}),e}var Aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ms=$e(Aa),an=lt({},Aa,{view:0,detail:0}),Bm=$e(an),gr,br,nn,Us=lt({},an,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==nn&&(nn&&t.type==="mousemove"?(gr=t.screenX-nn.screenX,br=t.screenY-nn.screenY):br=gr=0,nn=t),gr)},movementY:function(t){return"movementY"in t?t.movementY:br}}),Ud=$e(Us),Lm=lt({},Us,{dataTransfer:0}),jm=$e(Lm),Vm=lt({},an,{relatedTarget:0}),vr=$e(Vm),qm=lt({},Aa,{animationName:0,elapsedTime:0,pseudoElement:0}),Ym=$e(qm),Xm=lt({},Aa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Gm=$e(Xm),Qm=lt({},Aa,{data:0}),Hd=$e(Qm),Zm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Km={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Fm[t])?!!e[t]:!1}function yr(){return Jm}var Wm=lt({},an,{key:function(t){if(t.key){var e=Zm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$s(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Km[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yr,charCode:function(t){return t.type==="keypress"?$s(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$s(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Im=$e(Wm),Pm=lt({},Us,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bd=$e(Pm),tg=lt({},an,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yr}),eg=$e(tg),lg=lt({},Aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),ag=$e(lg),ig=lt({},Us,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ng=$e(ig),sg=lt({},Aa,{newState:0,oldState:0}),og=$e(sg),rg=[9,13,27,32],_r=El&&"CompositionEvent"in window,sn=null;El&&"documentMode"in document&&(sn=document.documentMode);var cg=El&&"TextEvent"in window&&!sn,Ld=El&&(!_r||sn&&8<sn&&11>=sn),jd=" ",Vd=!1;function qd(t,e){switch(t){case"keyup":return rg.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ri=!1;function ug(t,e){switch(t){case"compositionend":return Yd(e);case"keypress":return e.which!==32?null:(Vd=!0,jd);case"textInput":return t=e.data,t===jd&&Vd?null:t;default:return null}}function dg(t,e){if(ri)return t==="compositionend"||!_r&&qd(t,e)?(t=Nd(),Rs=mr=Zl=null,ri=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ld&&e.locale!=="ko"?null:e.data;default:return null}}var fg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fg[t.type]:e==="textarea"}function Gd(t,e,l,a){si?oi?oi.push(a):oi=[a]:si=a,e=_o(e,"onChange"),0<e.length&&(l=new Ms("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var on=null,rn=null;function hg(t){vp(t,0)}function Hs(t){var e=tn(t);if(Ad(e))return t}function Qd(t,e){if(t==="change")return e}var Zd=!1;if(El){var xr;if(El){var wr="oninput"in document;if(!wr){var Kd=document.createElement("div");Kd.setAttribute("oninput","return;"),wr=typeof Kd.oninput=="function"}xr=wr}else xr=!1;Zd=xr&&(!document.documentMode||9<document.documentMode)}function Fd(){on&&(on.detachEvent("onpropertychange",Jd),rn=on=null)}function Jd(t){if(t.propertyName==="value"&&Hs(rn)){var e=[];Gd(e,rn,t,fr(t)),$d(hg,e)}}function pg(t,e,l){t==="focusin"?(Fd(),on=e,rn=l,on.attachEvent("onpropertychange",Jd)):t==="focusout"&&Fd()}function mg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hs(rn)}function gg(t,e){if(t==="click")return Hs(e)}function bg(t,e){if(t==="input"||t==="change")return Hs(e)}function vg(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Le=typeof Object.is=="function"?Object.is:vg;function cn(t,e){if(Le(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var s=l[a];if(!lr.call(e,s)||!Le(t[s],e[s]))return!1}return!0}function Wd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Id(t,e){var l=Wd(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=Wd(l)}}function Pd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Pd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function tf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Os(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Os(t.document)}return e}function Sr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yg(t,e){var l=tf(e);e=t.focusedElem;var a=t.selectionRange;if(l!==e&&e&&e.ownerDocument&&Pd(e.ownerDocument.documentElement,e)){if(a!==null&&Sr(e)){if(t=a.start,l=a.end,l===void 0&&(l=t),"selectionStart"in e)e.selectionStart=t,e.selectionEnd=Math.min(l,e.value.length);else if(l=(t=e.ownerDocument||document)&&t.defaultView||window,l.getSelection){l=l.getSelection();var s=e.textContent.length,o=Math.min(a.start,s);a=a.end===void 0?o:Math.min(a.end,s),!l.extend&&o>a&&(s=a,a=o,o=s),s=Id(e,o);var d=Id(e,a);s&&d&&(l.rangeCount!==1||l.anchorNode!==s.node||l.anchorOffset!==s.offset||l.focusNode!==d.node||l.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),l.removeAllRanges(),o>a?(l.addRange(t),l.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),l.addRange(t)))}}for(t=[],l=e;l=l.parentNode;)l.nodeType===1&&t.push({element:l,left:l.scrollLeft,top:l.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<t.length;e++)l=t[e],l.element.scrollLeft=l.left,l.element.scrollTop=l.top}}var _g=El&&"documentMode"in document&&11>=document.documentMode,ci=null,zr=null,un=null,Cr=!1;function ef(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Cr||ci==null||ci!==Os(a)||(a=ci,"selectionStart"in a&&Sr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),un&&cn(un,a)||(un=a,a=_o(zr,"onSelect"),0<a.length&&(e=new Ms("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=ci)))}function Ea(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var ui={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionrun:Ea("Transition","TransitionRun"),transitionstart:Ea("Transition","TransitionStart"),transitioncancel:Ea("Transition","TransitionCancel"),transitionend:Ea("Transition","TransitionEnd")},Ar={},lf={};El&&(lf=document.createElement("div").style,"AnimationEvent"in window||(delete ui.animationend.animation,delete ui.animationiteration.animation,delete ui.animationstart.animation),"TransitionEvent"in window||delete ui.transitionend.transition);function Ta(t){if(Ar[t])return Ar[t];if(!ui[t])return t;var e=ui[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in lf)return Ar[t]=e[l];return t}var af=Ta("animationend"),nf=Ta("animationiteration"),sf=Ta("animationstart"),xg=Ta("transitionrun"),wg=Ta("transitionstart"),Sg=Ta("transitioncancel"),of=Ta("transitionend"),rf=new Map,cf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ol(t,e){rf.set(t,e),Ca(e,[t])}var Je=[],di=0,Er=0;function Bs(){for(var t=di,e=Er=di=0;e<t;){var l=Je[e];Je[e++]=null;var a=Je[e];Je[e++]=null;var s=Je[e];Je[e++]=null;var o=Je[e];if(Je[e++]=null,a!==null&&s!==null){var d=a.pending;d===null?s.next=s:(s.next=d.next,d.next=s),a.pending=s}o!==0&&uf(l,s,o)}}function Ls(t,e,l,a){Je[di++]=t,Je[di++]=e,Je[di++]=l,Je[di++]=a,Er|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Tr(t,e,l,a){return Ls(t,e,l,a),js(t)}function Kl(t,e){return Ls(t,null,null,e),js(t)}function uf(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var s=!1,o=t.return;o!==null;)o.childLanes|=l,a=o.alternate,a!==null&&(a.childLanes|=l),o.tag===22&&(t=o.stateNode,t===null||t._visibility&1||(s=!0)),t=o,o=o.return;s&&e!==null&&t.tag===3&&(o=t.stateNode,s=31-Be(l),o=o.hiddenUpdates,t=o[s],t===null?o[s]=[e]:t.push(e),e.lane=l|536870912)}function js(t){if(50<Mn)throw Mn=0,Nc=null,Error(c(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var fi={},df=new WeakMap;function We(t,e){if(typeof t=="object"&&t!==null){var l=df.get(t);return l!==void 0?l:(e={value:t,source:e,stack:I(e)},df.set(t,e),e)}return{value:t,source:e,stack:I(e)}}var hi=[],pi=0,Vs=null,qs=0,Ie=[],Pe=0,ka=null,kl=1,Ol="";function Oa(t,e){hi[pi++]=qs,hi[pi++]=Vs,Vs=t,qs=e}function ff(t,e,l){Ie[Pe++]=kl,Ie[Pe++]=Ol,Ie[Pe++]=ka,ka=t;var a=kl;t=Ol;var s=32-Be(a)-1;a&=~(1<<s),l+=1;var o=32-Be(e)+s;if(30<o){var d=s-s%5;o=(a&(1<<d)-1).toString(32),a>>=d,s-=d,kl=1<<32-Be(e)+s|l<<s|a,Ol=o+t}else kl=1<<o|l<<s|a,Ol=t}function kr(t){t.return!==null&&(Oa(t,1),ff(t,1,0))}function Or(t){for(;t===Vs;)Vs=hi[--pi],hi[pi]=null,qs=hi[--pi],hi[pi]=null;for(;t===ka;)ka=Ie[--Pe],Ie[Pe]=null,Ol=Ie[--Pe],Ie[Pe]=null,kl=Ie[--Pe],Ie[Pe]=null}var Oe=null,_e=null,xt=!1,rl=null,gl=!1,Dr=Error(c(519));function Da(t){var e=Error(c(418,""));throw hn(We(e,t)),Dr}function hf(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[ze]=t,e[Re]=a,l){case"dialog":vt("cancel",e),vt("close",e);break;case"iframe":case"object":case"embed":vt("load",e);break;case"video":case"audio":for(l=0;l<Hn.length;l++)vt(Hn[l],e);break;case"source":vt("error",e);break;case"img":case"image":case"link":vt("error",e),vt("load",e);break;case"details":vt("toggle",e);break;case"input":vt("invalid",e),Ed(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),ks(e);break;case"select":vt("invalid",e);break;case"textarea":vt("invalid",e),kd(e,a.value,a.defaultValue,a.children),ks(e)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||wp(e.textContent,l)?(a.popover!=null&&(vt("beforetoggle",e),vt("toggle",e)),a.onScroll!=null&&vt("scroll",e),a.onScrollEnd!=null&&vt("scrollend",e),a.onClick!=null&&(e.onclick=xo),e=!0):e=!1,e||Da(t)}function pf(t){for(Oe=t.return;Oe;)switch(Oe.tag){case 3:case 27:gl=!0;return;case 5:case 13:gl=!1;return;default:Oe=Oe.return}}function dn(t){if(t!==Oe)return!1;if(!xt)return pf(t),xt=!0,!1;var e=!1,l;if((l=t.tag!==3&&t.tag!==27)&&((l=t.tag===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Wc(t.type,t.memoizedProps)),l=!l),l&&(e=!0),e&&_e&&Da(t),pf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(l=t.data,l==="/$"){if(e===0){_e=ul(t.nextSibling);break t}e--}else l!=="$"&&l!=="$!"&&l!=="$?"||e++;t=t.nextSibling}_e=null}}else _e=Oe?ul(t.stateNode.nextSibling):null;return!0}function fn(){_e=Oe=null,xt=!1}function hn(t){rl===null?rl=[t]:rl.push(t)}var pn=Error(c(460)),mf=Error(c(474)),Rr={then:function(){}};function gf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ys(){}function bf(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(Ys,Ys),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===pn?Error(c(483)):t;default:if(typeof e.status=="string")e.then(Ys,Ys);else{if(t=$t,t!==null&&100<t.shellSuspendCounter)throw Error(c(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var s=e;s.status="fulfilled",s.value=a}},function(a){if(e.status==="pending"){var s=e;s.status="rejected",s.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===pn?Error(c(483)):t}throw mn=e,pn}}var mn=null;function vf(){if(mn===null)throw Error(c(459));var t=mn;return mn=null,t}var mi=null,gn=0;function Xs(t){var e=gn;return gn+=1,mi===null&&(mi=[]),bf(mi,t,e)}function bn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Gs(t,e){throw e.$$typeof===f?Error(c(525)):(t=Object.prototype.toString.call(e),Error(c(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function yf(t){var e=t._init;return e(t._payload)}function _f(t){function e(z,w){if(t){var A=z.deletions;A===null?(z.deletions=[w],z.flags|=16):A.push(w)}}function l(z,w){if(!t)return null;for(;w!==null;)e(z,w),w=w.sibling;return null}function a(z){for(var w=new Map;z!==null;)z.key!==null?w.set(z.key,z):w.set(z.index,z),z=z.sibling;return w}function s(z,w){return z=sa(z,w),z.index=0,z.sibling=null,z}function o(z,w,A){return z.index=A,t?(A=z.alternate,A!==null?(A=A.index,A<w?(z.flags|=33554434,w):A):(z.flags|=33554434,w)):(z.flags|=1048576,w)}function d(z){return t&&z.alternate===null&&(z.flags|=33554434),z}function p(z,w,A,$){return w===null||w.tag!==6?(w=Ac(A,z.mode,$),w.return=z,w):(w=s(w,A),w.return=z,w)}function b(z,w,A,$){var G=A.type;return G===v?R(z,w,A.props.children,$,A.key):w!==null&&(w.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===J&&yf(G)===w.type)?(w=s(w,A.props),bn(w,A),w.return=z,w):(w=co(A.type,A.key,A.props,null,z.mode,$),bn(w,A),w.return=z,w)}function S(z,w,A,$){return w===null||w.tag!==4||w.stateNode.containerInfo!==A.containerInfo||w.stateNode.implementation!==A.implementation?(w=Ec(A,z.mode,$),w.return=z,w):(w=s(w,A.children||[]),w.return=z,w)}function R(z,w,A,$,G){return w===null||w.tag!==7?(w=Va(A,z.mode,$,G),w.return=z,w):(w=s(w,A),w.return=z,w)}function M(z,w,A){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return w=Ac(""+w,z.mode,A),w.return=z,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case h:return A=co(w.type,w.key,w.props,null,z.mode,A),bn(A,w),A.return=z,A;case y:return w=Ec(w,z.mode,A),w.return=z,w;case J:var $=w._init;return w=$(w._payload),M(z,w,A)}if(B(w)||it(w))return w=Va(w,z.mode,A,null),w.return=z,w;if(typeof w.then=="function")return M(z,Xs(w),A);if(w.$$typeof===O)return M(z,so(z,w),A);Gs(z,w)}return null}function T(z,w,A,$){var G=w!==null?w.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return G!==null?null:p(z,w,""+A,$);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case h:return A.key===G?b(z,w,A,$):null;case y:return A.key===G?S(z,w,A,$):null;case J:return G=A._init,A=G(A._payload),T(z,w,A,$)}if(B(A)||it(A))return G!==null?null:R(z,w,A,$,null);if(typeof A.then=="function")return T(z,w,Xs(A),$);if(A.$$typeof===O)return T(z,w,so(z,A),$);Gs(z,A)}return null}function D(z,w,A,$,G){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return z=z.get(A)||null,p(w,z,""+$,G);if(typeof $=="object"&&$!==null){switch($.$$typeof){case h:return z=z.get($.key===null?A:$.key)||null,b(w,z,$,G);case y:return z=z.get($.key===null?A:$.key)||null,S(w,z,$,G);case J:var ht=$._init;return $=ht($._payload),D(z,w,A,$,G)}if(B($)||it($))return z=z.get(A)||null,R(w,z,$,G,null);if(typeof $.then=="function")return D(z,w,A,Xs($),G);if($.$$typeof===O)return D(z,w,A,so(w,$),G);Gs(w,$)}return null}function K(z,w,A,$){for(var G=null,ht=null,W=w,tt=w=0,ge=null;W!==null&&tt<A.length;tt++){W.index>tt?(ge=W,W=null):ge=W.sibling;var wt=T(z,W,A[tt],$);if(wt===null){W===null&&(W=ge);break}t&&W&&wt.alternate===null&&e(z,W),w=o(wt,w,tt),ht===null?G=wt:ht.sibling=wt,ht=wt,W=ge}if(tt===A.length)return l(z,W),xt&&Oa(z,tt),G;if(W===null){for(;tt<A.length;tt++)W=M(z,A[tt],$),W!==null&&(w=o(W,w,tt),ht===null?G=W:ht.sibling=W,ht=W);return xt&&Oa(z,tt),G}for(W=a(W);tt<A.length;tt++)ge=D(W,z,tt,A[tt],$),ge!==null&&(t&&ge.alternate!==null&&W.delete(ge.key===null?tt:ge.key),w=o(ge,w,tt),ht===null?G=ge:ht.sibling=ge,ht=ge);return t&&W.forEach(function(ha){return e(z,ha)}),xt&&Oa(z,tt),G}function nt(z,w,A,$){if(A==null)throw Error(c(151));for(var G=null,ht=null,W=w,tt=w=0,ge=null,wt=A.next();W!==null&&!wt.done;tt++,wt=A.next()){W.index>tt?(ge=W,W=null):ge=W.sibling;var ha=T(z,W,wt.value,$);if(ha===null){W===null&&(W=ge);break}t&&W&&ha.alternate===null&&e(z,W),w=o(ha,w,tt),ht===null?G=ha:ht.sibling=ha,ht=ha,W=ge}if(wt.done)return l(z,W),xt&&Oa(z,tt),G;if(W===null){for(;!wt.done;tt++,wt=A.next())wt=M(z,wt.value,$),wt!==null&&(w=o(wt,w,tt),ht===null?G=wt:ht.sibling=wt,ht=wt);return xt&&Oa(z,tt),G}for(W=a(W);!wt.done;tt++,wt=A.next())wt=D(W,z,tt,wt.value,$),wt!==null&&(t&&wt.alternate!==null&&W.delete(wt.key===null?tt:wt.key),w=o(wt,w,tt),ht===null?G=wt:ht.sibling=wt,ht=wt);return t&&W.forEach(function(Hb){return e(z,Hb)}),xt&&Oa(z,tt),G}function Kt(z,w,A,$){if(typeof A=="object"&&A!==null&&A.type===v&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case h:t:{for(var G=A.key;w!==null;){if(w.key===G){if(G=A.type,G===v){if(w.tag===7){l(z,w.sibling),$=s(w,A.props.children),$.return=z,z=$;break t}}else if(w.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===J&&yf(G)===w.type){l(z,w.sibling),$=s(w,A.props),bn($,A),$.return=z,z=$;break t}l(z,w);break}else e(z,w);w=w.sibling}A.type===v?($=Va(A.props.children,z.mode,$,A.key),$.return=z,z=$):($=co(A.type,A.key,A.props,null,z.mode,$),bn($,A),$.return=z,z=$)}return d(z);case y:t:{for(G=A.key;w!==null;){if(w.key===G)if(w.tag===4&&w.stateNode.containerInfo===A.containerInfo&&w.stateNode.implementation===A.implementation){l(z,w.sibling),$=s(w,A.children||[]),$.return=z,z=$;break t}else{l(z,w);break}else e(z,w);w=w.sibling}$=Ec(A,z.mode,$),$.return=z,z=$}return d(z);case J:return G=A._init,A=G(A._payload),Kt(z,w,A,$)}if(B(A))return K(z,w,A,$);if(it(A)){if(G=it(A),typeof G!="function")throw Error(c(150));return A=G.call(A),nt(z,w,A,$)}if(typeof A.then=="function")return Kt(z,w,Xs(A),$);if(A.$$typeof===O)return Kt(z,w,so(z,A),$);Gs(z,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,w!==null&&w.tag===6?(l(z,w.sibling),$=s(w,A),$.return=z,z=$):(l(z,w),$=Ac(A,z.mode,$),$.return=z,z=$),d(z)):l(z,w)}return function(z,w,A,$){try{gn=0;var G=Kt(z,w,A,$);return mi=null,G}catch(W){if(W===pn)throw W;var ht=al(29,W,null,z.mode);return ht.lanes=$,ht.return=z,ht}finally{}}}var Ra=_f(!0),xf=_f(!1),gi=zt(null),Qs=zt(0);function wf(t,e){t=Vl,Lt(Qs,t),Lt(gi,e),Vl=t|e.baseLanes}function $r(){Lt(Qs,Vl),Lt(gi,gi.current)}function Nr(){Vl=Qs.current,le(gi),le(Qs)}var tl=zt(null),bl=null;function Fl(t){var e=t.alternate;Lt(re,re.current&1),Lt(tl,t),bl===null&&(e===null||gi.current!==null||e.memoizedState!==null)&&(bl=t)}function Sf(t){if(t.tag===22){if(Lt(re,re.current),Lt(tl,t),bl===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(bl=t)}}else Jl()}function Jl(){Lt(re,re.current),Lt(tl,tl.current)}function Dl(t){le(tl),bl===t&&(bl=null),le(re)}var re=zt(0);function Zs(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zg=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Cg=i.unstable_scheduleCallback,Ag=i.unstable_NormalPriority,ce={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mr(){return{controller:new zg,data:new Map,refCount:0}}function vn(t){t.refCount--,t.refCount===0&&Cg(Ag,function(){t.controller.abort()})}var yn=null,Ur=0,bi=0,vi=null;function Eg(t,e){if(yn===null){var l=yn=[];Ur=0,bi=qc(),vi={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Ur++,e.then(zf,zf),e}function zf(){if(--Ur===0&&yn!==null){vi!==null&&(vi.status="fulfilled");var t=yn;yn=null,bi=0,vi=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Tg(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(s){l.push(s)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var s=0;s<l.length;s++)(0,l[s])(e)},function(s){for(a.status="rejected",a.reason=s,s=0;s<l.length;s++)(0,l[s])(void 0)}),a}var Cf=X.S;X.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Eg(t,e),Cf!==null&&Cf(t,e)};var $a=zt(null);function Hr(){var t=$a.current;return t!==null?t:$t.pooledCache}function Ks(t,e){e===null?Lt($a,$a.current):Lt($a,e.pool)}function Af(){var t=Hr();return t===null?null:{parent:ce._currentValue,pool:t}}var Wl=0,dt=null,Et=null,ae=null,Fs=!1,yi=!1,Na=!1,Js=0,_n=0,_i=null,kg=0;function ee(){throw Error(c(321))}function Br(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!Le(t[l],e[l]))return!1;return!0}function Lr(t,e,l,a,s,o){return Wl=o,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,X.H=t===null||t.memoizedState===null?Ma:Il,Na=!1,o=l(a,s),Na=!1,yi&&(o=Tf(e,l,a,s)),Ef(t),o}function Ef(t){X.H=vl;var e=Et!==null&&Et.next!==null;if(Wl=0,ae=Et=dt=null,Fs=!1,_n=0,_i=null,e)throw Error(c(300));t===null||pe||(t=t.dependencies,t!==null&&no(t)&&(pe=!0))}function Tf(t,e,l,a){dt=t;var s=0;do{if(yi&&(_i=null),_n=0,yi=!1,25<=s)throw Error(c(301));if(s+=1,ae=Et=null,t.updateQueue!=null){var o=t.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}X.H=Ua,o=e(l,a)}while(yi);return o}function Og(){var t=X.H,e=t.useState()[0];return e=typeof e.then=="function"?xn(e):e,t=t.useState()[0],(Et!==null?Et.memoizedState:null)!==t&&(dt.flags|=1024),e}function jr(){var t=Js!==0;return Js=0,t}function Vr(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function qr(t){if(Fs){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Fs=!1}Wl=0,ae=Et=dt=null,yi=!1,_n=Js=0,_i=null}function Ne(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?dt.memoizedState=ae=t:ae=ae.next=t,ae}function ie(){if(Et===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=ae===null?dt.memoizedState:ae.next;if(e!==null)ae=e,Et=t;else{if(t===null)throw dt.alternate===null?Error(c(467)):Error(c(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},ae===null?dt.memoizedState=ae=t:ae=ae.next=t}return ae}var Ws;Ws=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function xn(t){var e=_n;return _n+=1,_i===null&&(_i=[]),t=bf(_i,t,e),e=dt,(ae===null?e.memoizedState:ae.next)===null&&(e=e.alternate,X.H=e===null||e.memoizedState===null?Ma:Il),t}function Is(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return xn(t);if(t.$$typeof===O)return Ce(t)}throw Error(c(438,String(t)))}function Yr(t){var e=null,l=dt.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=dt.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(s){return s.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=Ws(),dt.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=at;return e.index++,l}function Rl(t,e){return typeof e=="function"?e(t):e}function Ps(t){var e=ie();return Xr(e,Et,t)}function Xr(t,e,l){var a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=l;var s=t.baseQueue,o=a.pending;if(o!==null){if(s!==null){var d=s.next;s.next=o.next,o.next=d}e.baseQueue=s=o,a.pending=null}if(o=t.baseState,s===null)t.memoizedState=o;else{e=s.next;var p=d=null,b=null,S=e,R=!1;do{var M=S.lane&-536870913;if(M!==S.lane?(yt&M)===M:(Wl&M)===M){var T=S.revertLane;if(T===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),M===bi&&(R=!0);else if((Wl&T)===T){S=S.next,T===bi&&(R=!0);continue}else M={lane:0,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},b===null?(p=b=M,d=o):b=b.next=M,dt.lanes|=T,oa|=T;M=S.action,Na&&l(o,M),o=S.hasEagerState?S.eagerState:l(o,M)}else T={lane:M,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},b===null?(p=b=T,d=o):b=b.next=T,dt.lanes|=M,oa|=M;S=S.next}while(S!==null&&S!==e);if(b===null?d=o:b.next=p,!Le(o,t.memoizedState)&&(pe=!0,R&&(l=vi,l!==null)))throw l;t.memoizedState=o,t.baseState=d,t.baseQueue=b,a.lastRenderedState=o}return s===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Gr(t){var e=ie(),l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=t;var a=l.dispatch,s=l.pending,o=e.memoizedState;if(s!==null){l.pending=null;var d=s=s.next;do o=t(o,d.action),d=d.next;while(d!==s);Le(o,e.memoizedState)||(pe=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),l.lastRenderedState=o}return[o,a]}function kf(t,e,l){var a=dt,s=ie(),o=xt;if(o){if(l===void 0)throw Error(c(407));l=l()}else l=e();var d=!Le((Et||s).memoizedState,l);if(d&&(s.memoizedState=l,pe=!0),s=s.queue,Kr(Rf.bind(null,a,s,t),[t]),s.getSnapshot!==e||d||ae!==null&&ae.memoizedState.tag&1){if(a.flags|=2048,xi(9,Df.bind(null,a,s,l,e),{destroy:void 0},null),$t===null)throw Error(c(349));o||Wl&60||Of(a,e,l)}return l}function Of(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=dt.updateQueue,e===null?(e=Ws(),dt.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Df(t,e,l,a){e.value=l,e.getSnapshot=a,$f(e)&&Nf(t)}function Rf(t,e,l){return l(function(){$f(e)&&Nf(t)})}function $f(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!Le(t,l)}catch{return!0}}function Nf(t){var e=Kl(t,2);e!==null&&De(e,t,2)}function Qr(t){var e=Ne();if(typeof t=="function"){var l=t;if(t=l(),Na){Gl(!0);try{l()}finally{Gl(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rl,lastRenderedState:t},e}function Mf(t,e,l,a){return t.baseState=l,Xr(t,Et,typeof a=="function"?a:Rl)}function Dg(t,e,l,a,s){if(lo(t))throw Error(c(485));if(t=e.action,t!==null){var o={payload:s,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){o.listeners.push(d)}};X.T!==null?l(!0):o.isTransition=!1,a(o),l=e.pending,l===null?(o.next=e.pending=o,Uf(e,o)):(o.next=l.next,e.pending=l.next=o)}}function Uf(t,e){var l=e.action,a=e.payload,s=t.state;if(e.isTransition){var o=X.T,d={};X.T=d;try{var p=l(s,a),b=X.S;b!==null&&b(d,p),Hf(t,e,p)}catch(S){Zr(t,e,S)}finally{X.T=o}}else try{o=l(s,a),Hf(t,e,o)}catch(S){Zr(t,e,S)}}function Hf(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Bf(t,e,a)},function(a){return Zr(t,e,a)}):Bf(t,e,l)}function Bf(t,e,l){e.status="fulfilled",e.value=l,Lf(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Uf(t,l)))}function Zr(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,Lf(e),e=e.next;while(e!==a)}t.action=null}function Lf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function jf(t,e){return e}function Vf(t,e){if(xt){var l=$t.formState;if(l!==null){t:{var a=dt;if(xt){if(_e){e:{for(var s=_e,o=gl;s.nodeType!==8;){if(!o){s=null;break e}if(s=ul(s.nextSibling),s===null){s=null;break e}}o=s.data,s=o==="F!"||o==="F"?s:null}if(s){_e=ul(s.nextSibling),a=s.data==="F!";break t}}Da(a)}a=!1}a&&(e=l[0])}}return l=Ne(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jf,lastRenderedState:e},l.queue=a,l=nh.bind(null,dt,a),a.dispatch=l,a=Qr(!1),o=Pr.bind(null,dt,!1,a.queue),a=Ne(),s={state:e,dispatch:null,action:t,pending:null},a.queue=s,l=Dg.bind(null,dt,s,o,l),s.dispatch=l,a.memoizedState=t,[e,l,!1]}function qf(t){var e=ie();return Yf(e,Et,t)}function Yf(t,e,l){e=Xr(t,e,jf)[0],t=Ps(Rl)[0],e=typeof e=="object"&&e!==null&&typeof e.then=="function"?xn(e):e;var a=ie(),s=a.queue,o=s.dispatch;return l!==a.memoizedState&&(dt.flags|=2048,xi(9,Rg.bind(null,s,l),{destroy:void 0},null)),[e,o,t]}function Rg(t,e){t.action=e}function Xf(t){var e=ie(),l=Et;if(l!==null)return Yf(e,l,t);ie(),e=e.memoizedState,l=ie();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function xi(t,e,l,a){return t={tag:t,create:e,inst:l,deps:a,next:null},e=dt.updateQueue,e===null&&(e=Ws(),dt.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function Gf(){return ie().memoizedState}function to(t,e,l,a){var s=Ne();dt.flags|=t,s.memoizedState=xi(1|e,l,{destroy:void 0},a===void 0?null:a)}function eo(t,e,l,a){var s=ie();a=a===void 0?null:a;var o=s.memoizedState.inst;Et!==null&&a!==null&&Br(a,Et.memoizedState.deps)?s.memoizedState=xi(e,l,o,a):(dt.flags|=t,s.memoizedState=xi(1|e,l,o,a))}function Qf(t,e){to(8390656,8,t,e)}function Kr(t,e){eo(2048,8,t,e)}function Zf(t,e){return eo(4,2,t,e)}function Kf(t,e){return eo(4,4,t,e)}function Ff(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Jf(t,e,l){l=l!=null?l.concat([t]):null,eo(4,4,Ff.bind(null,e,t),l)}function Fr(){}function Wf(t,e){var l=ie();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&Br(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function If(t,e){var l=ie();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&Br(e,a[1]))return a[0];if(a=t(),Na){Gl(!0);try{t()}finally{Gl(!1)}}return l.memoizedState=[a,e],a}function Jr(t,e,l){return l===void 0||Wl&1073741824?t.memoizedState=e:(t.memoizedState=l,t=tp(),dt.lanes|=t,oa|=t,l)}function Pf(t,e,l,a){return Le(l,e)?l:gi.current!==null?(t=Jr(t,l,a),Le(t,e)||(pe=!0),t):Wl&42?(t=tp(),dt.lanes|=t,oa|=t,e):(pe=!0,t.memoizedState=l)}function th(t,e,l,a,s){var o=L.p;L.p=o!==0&&8>o?o:8;var d=X.T,p={};X.T=p,Pr(t,!1,e,l);try{var b=s(),S=X.S;if(S!==null&&S(p,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var R=Tg(b,a);wn(t,e,R,Ye(t))}else wn(t,e,a,Ye(t))}catch(M){wn(t,e,{then:function(){},status:"rejected",reason:M},Ye())}finally{L.p=o,X.T=d}}function $g(){}function Wr(t,e,l,a){if(t.tag!==5)throw Error(c(476));var s=eh(t).queue;th(t,s,e,ct,l===null?$g:function(){return lh(t),l(a)})}function eh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:ct,baseState:ct,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rl,lastRenderedState:ct},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rl,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function lh(t){var e=eh(t).next.queue;wn(t,e,{},Ye())}function Ir(){return Ce(qn)}function ah(){return ie().memoizedState}function ih(){return ie().memoizedState}function Ng(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=Ye();t=ea(l);var a=la(e,t,l);a!==null&&(De(a,e,l),Cn(a,e,l)),e={cache:Mr()},t.payload=e;return}e=e.return}}function Mg(t,e,l){var a=Ye();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},lo(t)?sh(e,l):(l=Tr(t,e,l,a),l!==null&&(De(l,t,a),oh(l,e,a)))}function nh(t,e,l){var a=Ye();wn(t,e,l,a)}function wn(t,e,l,a){var s={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(lo(t))sh(e,s);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var d=e.lastRenderedState,p=o(d,l);if(s.hasEagerState=!0,s.eagerState=p,Le(p,d))return Ls(t,e,s,0),$t===null&&Bs(),!1}catch{}finally{}if(l=Tr(t,e,s,a),l!==null)return De(l,t,a),oh(l,e,a),!0}return!1}function Pr(t,e,l,a){if(a={lane:2,revertLane:qc(),action:a,hasEagerState:!1,eagerState:null,next:null},lo(t)){if(e)throw Error(c(479))}else e=Tr(t,l,a,2),e!==null&&De(e,t,2)}function lo(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function sh(t,e){yi=Fs=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function oh(t,e,l){if(l&4194176){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,bd(t,l)}}var vl={readContext:Ce,use:Is,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useLayoutEffect:ee,useInsertionEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useSyncExternalStore:ee,useId:ee};vl.useCacheRefresh=ee,vl.useMemoCache=ee,vl.useHostTransitionStatus=ee,vl.useFormState=ee,vl.useActionState=ee,vl.useOptimistic=ee;var Ma={readContext:Ce,use:Is,useCallback:function(t,e){return Ne().memoizedState=[t,e===void 0?null:e],t},useContext:Ce,useEffect:Qf,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,to(4194308,4,Ff.bind(null,e,t),l)},useLayoutEffect:function(t,e){return to(4194308,4,t,e)},useInsertionEffect:function(t,e){to(4,2,t,e)},useMemo:function(t,e){var l=Ne();e=e===void 0?null:e;var a=t();if(Na){Gl(!0);try{t()}finally{Gl(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=Ne();if(l!==void 0){var s=l(e);if(Na){Gl(!0);try{l(e)}finally{Gl(!1)}}}else s=e;return a.memoizedState=a.baseState=s,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},a.queue=t,t=t.dispatch=Mg.bind(null,dt,t),[a.memoizedState,t]},useRef:function(t){var e=Ne();return t={current:t},e.memoizedState=t},useState:function(t){t=Qr(t);var e=t.queue,l=nh.bind(null,dt,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:Fr,useDeferredValue:function(t,e){var l=Ne();return Jr(l,t,e)},useTransition:function(){var t=Qr(!1);return t=th.bind(null,dt,t.queue,!0,!1),Ne().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=dt,s=Ne();if(xt){if(l===void 0)throw Error(c(407));l=l()}else{if(l=e(),$t===null)throw Error(c(349));yt&60||Of(a,e,l)}s.memoizedState=l;var o={value:l,getSnapshot:e};return s.queue=o,Qf(Rf.bind(null,a,o,t),[t]),a.flags|=2048,xi(9,Df.bind(null,a,o,l,e),{destroy:void 0},null),l},useId:function(){var t=Ne(),e=$t.identifierPrefix;if(xt){var l=Ol,a=kl;l=(a&~(1<<32-Be(a)-1)).toString(32)+l,e=":"+e+"R"+l,l=Js++,0<l&&(e+="H"+l.toString(32)),e+=":"}else l=kg++,e=":"+e+"r"+l.toString(32)+":";return t.memoizedState=e},useCacheRefresh:function(){return Ne().memoizedState=Ng.bind(null,dt)}};Ma.useMemoCache=Yr,Ma.useHostTransitionStatus=Ir,Ma.useFormState=Vf,Ma.useActionState=Vf,Ma.useOptimistic=function(t){var e=Ne();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=Pr.bind(null,dt,!0,l),l.dispatch=e,[t,e]};var Il={readContext:Ce,use:Is,useCallback:Wf,useContext:Ce,useEffect:Kr,useImperativeHandle:Jf,useInsertionEffect:Zf,useLayoutEffect:Kf,useMemo:If,useReducer:Ps,useRef:Gf,useState:function(){return Ps(Rl)},useDebugValue:Fr,useDeferredValue:function(t,e){var l=ie();return Pf(l,Et.memoizedState,t,e)},useTransition:function(){var t=Ps(Rl)[0],e=ie().memoizedState;return[typeof t=="boolean"?t:xn(t),e]},useSyncExternalStore:kf,useId:ah};Il.useCacheRefresh=ih,Il.useMemoCache=Yr,Il.useHostTransitionStatus=Ir,Il.useFormState=qf,Il.useActionState=qf,Il.useOptimistic=function(t,e){var l=ie();return Mf(l,Et,t,e)};var Ua={readContext:Ce,use:Is,useCallback:Wf,useContext:Ce,useEffect:Kr,useImperativeHandle:Jf,useInsertionEffect:Zf,useLayoutEffect:Kf,useMemo:If,useReducer:Gr,useRef:Gf,useState:function(){return Gr(Rl)},useDebugValue:Fr,useDeferredValue:function(t,e){var l=ie();return Et===null?Jr(l,t,e):Pf(l,Et.memoizedState,t,e)},useTransition:function(){var t=Gr(Rl)[0],e=ie().memoizedState;return[typeof t=="boolean"?t:xn(t),e]},useSyncExternalStore:kf,useId:ah};Ua.useCacheRefresh=ih,Ua.useMemoCache=Yr,Ua.useHostTransitionStatus=Ir,Ua.useFormState=Xf,Ua.useActionState=Xf,Ua.useOptimistic=function(t,e){var l=ie();return Et!==null?Mf(l,Et,t,e):(l.baseState=t,[t,l.queue.dispatch])};function tc(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:lt({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var ec={isMounted:function(t){return(t=t._reactInternals)?Z(t)===t:!1},enqueueSetState:function(t,e,l){t=t._reactInternals;var a=Ye(),s=ea(a);s.payload=e,l!=null&&(s.callback=l),e=la(t,s,a),e!==null&&(De(e,t,a),Cn(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=Ye(),s=ea(a);s.tag=1,s.payload=e,l!=null&&(s.callback=l),e=la(t,s,a),e!==null&&(De(e,t,a),Cn(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=Ye(),a=ea(l);a.tag=2,e!=null&&(a.callback=e),e=la(t,a,l),e!==null&&(De(e,t,l),Cn(e,t,l))}};function rh(t,e,l,a,s,o,d){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,o,d):e.prototype&&e.prototype.isPureReactComponent?!cn(l,a)||!cn(s,o):!0}function ch(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&ec.enqueueReplaceState(e,e.state,null)}function Ha(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=lt({},l));for(var s in t)l[s]===void 0&&(l[s]=t[s])}return l}var ao=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function uh(t){ao(t)}function dh(t){console.error(t)}function fh(t){ao(t)}function io(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function hh(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function lc(t,e,l){return l=ea(l),l.tag=3,l.payload={element:null},l.callback=function(){io(t,e)},l}function ph(t){return t=ea(t),t.tag=3,t}function mh(t,e,l,a){var s=l.type.getDerivedStateFromError;if(typeof s=="function"){var o=a.value;t.payload=function(){return s(o)},t.callback=function(){hh(e,l,a)}}var d=l.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(t.callback=function(){hh(e,l,a),typeof s!="function"&&(ra===null?ra=new Set([this]):ra.add(this));var p=a.stack;this.componentDidCatch(a.value,{componentStack:p!==null?p:""})})}function Ug(t,e,l,a,s){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&zn(e,l,s,!0),l=tl.current,l!==null){switch(l.tag){case 13:return bl===null?Hc():l.alternate===null&&Zt===0&&(Zt=3),l.flags&=-257,l.flags|=65536,l.lanes=s,a===Rr?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),Lc(t,a,s)),!1;case 22:return l.flags|=65536,a===Rr?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),Lc(t,a,s)),!1}throw Error(c(435,l.tag))}return Lc(t,a,s),Hc(),!1}if(xt)return e=tl.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=s,a!==Dr&&(t=Error(c(422),{cause:a}),hn(We(t,l)))):(a!==Dr&&(e=Error(c(423),{cause:a}),hn(We(e,l))),t=t.current.alternate,t.flags|=65536,s&=-s,t.lanes|=s,a=We(a,l),s=lc(t.stateNode,a,s),bc(t,s),Zt!==4&&(Zt=2)),!1;var o=Error(c(520),{cause:a});if(o=We(o,l),$n===null?$n=[o]:$n.push(o),Zt!==4&&(Zt=2),e===null)return!0;a=We(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=s&-s,l.lanes|=t,t=lc(l.stateNode,a,t),bc(l,t),!1;case 1:if(e=l.type,o=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(ra===null||!ra.has(o))))return l.flags|=65536,s&=-s,l.lanes|=s,s=ph(s),mh(s,t,l,a),bc(l,s),!1}l=l.return}while(l!==null);return!1}var gh=Error(c(461)),pe=!1;function xe(t,e,l,a){e.child=t===null?xf(e,null,l,a):Ra(e,t.child,l,a)}function bh(t,e,l,a,s){l=l.render;var o=e.ref;if("ref"in a){var d={};for(var p in a)p!=="ref"&&(d[p]=a[p])}else d=a;return La(e),a=Lr(t,e,l,d,o,s),p=jr(),t!==null&&!pe?(Vr(t,e,s),$l(t,e,s)):(xt&&p&&kr(e),e.flags|=1,xe(t,e,a,s),e.child)}function vh(t,e,l,a,s){if(t===null){var o=l.type;return typeof o=="function"&&!Cc(o)&&o.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=o,yh(t,e,o,a,s)):(t=co(l.type,null,a,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!dc(t,s)){var d=o.memoizedProps;if(l=l.compare,l=l!==null?l:cn,l(d,a)&&t.ref===e.ref)return $l(t,e,s)}return e.flags|=1,t=sa(o,a),t.ref=e.ref,t.return=e,e.child=t}function yh(t,e,l,a,s){if(t!==null){var o=t.memoizedProps;if(cn(o,a)&&t.ref===e.ref)if(pe=!1,e.pendingProps=a=o,dc(t,s))t.flags&131072&&(pe=!0);else return e.lanes=t.lanes,$l(t,e,s)}return ac(t,e,l,a,s)}function _h(t,e,l){var a=e.pendingProps,s=a.children,o=(e.stateNode._pendingVisibility&2)!==0,d=t!==null?t.memoizedState:null;if(Sn(t,e),a.mode==="hidden"||o){if(e.flags&128){if(a=d!==null?d.baseLanes|l:l,t!==null){for(s=e.child=t.child,o=0;s!==null;)o=o|s.lanes|s.childLanes,s=s.sibling;e.childLanes=o&~a}else e.childLanes=0,e.child=null;return xh(t,e,a,l)}if(l&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ks(e,d!==null?d.cachePool:null),d!==null?wf(e,d):$r(),Sf(e);else return e.lanes=e.childLanes=536870912,xh(t,e,d!==null?d.baseLanes|l:l,l)}else d!==null?(Ks(e,d.cachePool),wf(e,d),Jl(),e.memoizedState=null):(t!==null&&Ks(e,null),$r(),Jl());return xe(t,e,s,l),e.child}function xh(t,e,l,a){var s=Hr();return s=s===null?null:{parent:ce._currentValue,pool:s},e.memoizedState={baseLanes:l,cachePool:s},t!==null&&Ks(e,null),$r(),Sf(e),t!==null&&zn(t,e,a,!0),null}function Sn(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=2097664);else{if(typeof l!="function"&&typeof l!="object")throw Error(c(284));(t===null||t.ref!==l)&&(e.flags|=2097664)}}function ac(t,e,l,a,s){return La(e),l=Lr(t,e,l,a,void 0,s),a=jr(),t!==null&&!pe?(Vr(t,e,s),$l(t,e,s)):(xt&&a&&kr(e),e.flags|=1,xe(t,e,l,s),e.child)}function wh(t,e,l,a,s,o){return La(e),e.updateQueue=null,l=Tf(e,a,l,s),Ef(t),a=jr(),t!==null&&!pe?(Vr(t,e,o),$l(t,e,o)):(xt&&a&&kr(e),e.flags|=1,xe(t,e,l,o),e.child)}function Sh(t,e,l,a,s){if(La(e),e.stateNode===null){var o=fi,d=l.contextType;typeof d=="object"&&d!==null&&(o=Ce(d)),o=new l(a,o),e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=ec,e.stateNode=o,o._reactInternals=e,o=e.stateNode,o.props=a,o.state=e.memoizedState,o.refs={},mc(e),d=l.contextType,o.context=typeof d=="object"&&d!==null?Ce(d):fi,o.state=e.memoizedState,d=l.getDerivedStateFromProps,typeof d=="function"&&(tc(e,l,d,a),o.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(d=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),d!==o.state&&ec.enqueueReplaceState(o,o.state,null),En(e,a,o,s),An(),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){o=e.stateNode;var p=e.memoizedProps,b=Ha(l,p);o.props=b;var S=o.context,R=l.contextType;d=fi,typeof R=="object"&&R!==null&&(d=Ce(R));var M=l.getDerivedStateFromProps;R=typeof M=="function"||typeof o.getSnapshotBeforeUpdate=="function",p=e.pendingProps!==p,R||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(p||S!==d)&&ch(e,o,a,d),ta=!1;var T=e.memoizedState;o.state=T,En(e,a,o,s),An(),S=e.memoizedState,p||T!==S||ta?(typeof M=="function"&&(tc(e,l,M,a),S=e.memoizedState),(b=ta||rh(e,l,b,a,T,S,d))?(R||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=S),o.props=a,o.state=S,o.context=d,a=b):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{o=e.stateNode,gc(t,e),d=e.memoizedProps,R=Ha(l,d),o.props=R,M=e.pendingProps,T=o.context,S=l.contextType,b=fi,typeof S=="object"&&S!==null&&(b=Ce(S)),p=l.getDerivedStateFromProps,(S=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(d!==M||T!==b)&&ch(e,o,a,b),ta=!1,T=e.memoizedState,o.state=T,En(e,a,o,s),An();var D=e.memoizedState;d!==M||T!==D||ta||t!==null&&t.dependencies!==null&&no(t.dependencies)?(typeof p=="function"&&(tc(e,l,p,a),D=e.memoizedState),(R=ta||rh(e,l,R,a,T,D,b)||t!==null&&t.dependencies!==null&&no(t.dependencies))?(S||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,D,b),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,D,b)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||d===t.memoizedProps&&T===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===t.memoizedProps&&T===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=D),o.props=a,o.state=D,o.context=b,a=R):(typeof o.componentDidUpdate!="function"||d===t.memoizedProps&&T===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===t.memoizedProps&&T===t.memoizedState||(e.flags|=1024),a=!1)}return o=a,Sn(t,e),a=(e.flags&128)!==0,o||a?(o=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:o.render(),e.flags|=1,t!==null&&a?(e.child=Ra(e,t.child,null,s),e.child=Ra(e,null,l,s)):xe(t,e,l,s),e.memoizedState=o.state,t=e.child):t=$l(t,e,s),t}function zh(t,e,l,a){return fn(),e.flags|=256,xe(t,e,l,a),e.child}var ic={dehydrated:null,treeContext:null,retryLane:0};function nc(t){return{baseLanes:t,cachePool:Af()}}function sc(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=il),t}function Ch(t,e,l){var a=e.pendingProps,s=!1,o=(e.flags&128)!==0,d;if((d=o)||(d=t!==null&&t.memoizedState===null?!1:(re.current&2)!==0),d&&(s=!0,e.flags&=-129),d=(e.flags&32)!==0,e.flags&=-33,t===null){if(xt){if(s?Fl(e):Jl(),xt){var p=_e,b;if(b=p){t:{for(b=p,p=gl;b.nodeType!==8;){if(!p){p=null;break t}if(b=ul(b.nextSibling),b===null){p=null;break t}}p=b}p!==null?(e.memoizedState={dehydrated:p,treeContext:ka!==null?{id:kl,overflow:Ol}:null,retryLane:536870912},b=al(18,null,null,0),b.stateNode=p,b.return=e,e.child=b,Oe=e,_e=null,b=!0):b=!1}b||Da(e)}if(p=e.memoizedState,p!==null&&(p=p.dehydrated,p!==null))return p.data==="$!"?e.lanes=16:e.lanes=536870912,null;Dl(e)}return p=a.children,a=a.fallback,s?(Jl(),s=e.mode,p=rc({mode:"hidden",children:p},s),a=Va(a,s,l,null),p.return=e,a.return=e,p.sibling=a,e.child=p,s=e.child,s.memoizedState=nc(l),s.childLanes=sc(t,d,l),e.memoizedState=ic,a):(Fl(e),oc(e,p))}if(b=t.memoizedState,b!==null&&(p=b.dehydrated,p!==null)){if(o)e.flags&256?(Fl(e),e.flags&=-257,e=cc(t,e,l)):e.memoizedState!==null?(Jl(),e.child=t.child,e.flags|=128,e=null):(Jl(),s=a.fallback,p=e.mode,a=rc({mode:"visible",children:a.children},p),s=Va(s,p,l,null),s.flags|=2,a.return=e,s.return=e,a.sibling=s,e.child=a,Ra(e,t.child,null,l),a=e.child,a.memoizedState=nc(l),a.childLanes=sc(t,d,l),e.memoizedState=ic,e=s);else if(Fl(e),p.data==="$!"){if(d=p.nextSibling&&p.nextSibling.dataset,d)var S=d.dgst;d=S,a=Error(c(419)),a.stack="",a.digest=d,hn({value:a,source:null,stack:null}),e=cc(t,e,l)}else if(pe||zn(t,e,l,!1),d=(l&t.childLanes)!==0,pe||d){if(d=$t,d!==null){if(a=l&-l,a&42)a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(a=a&(d.suspendedLanes|l)?0:a,a!==0&&a!==b.retryLane)throw b.retryLane=a,Kl(t,a),De(d,t,a),gh}p.data==="$?"||Hc(),e=cc(t,e,l)}else p.data==="$?"?(e.flags|=128,e.child=t.child,e=Wg.bind(null,t),p._reactRetry=e,e=null):(t=b.treeContext,_e=ul(p.nextSibling),Oe=e,xt=!0,rl=null,gl=!1,t!==null&&(Ie[Pe++]=kl,Ie[Pe++]=Ol,Ie[Pe++]=ka,kl=t.id,Ol=t.overflow,ka=e),e=oc(e,a.children),e.flags|=4096);return e}return s?(Jl(),s=a.fallback,p=e.mode,b=t.child,S=b.sibling,a=sa(b,{mode:"hidden",children:a.children}),a.subtreeFlags=b.subtreeFlags&31457280,S!==null?s=sa(S,s):(s=Va(s,p,l,null),s.flags|=2),s.return=e,a.return=e,a.sibling=s,e.child=a,a=s,s=e.child,p=t.child.memoizedState,p===null?p=nc(l):(b=p.cachePool,b!==null?(S=ce._currentValue,b=b.parent!==S?{parent:S,pool:S}:b):b=Af(),p={baseLanes:p.baseLanes|l,cachePool:b}),s.memoizedState=p,s.childLanes=sc(t,d,l),e.memoizedState=ic,a):(Fl(e),l=t.child,t=l.sibling,l=sa(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(d=e.deletions,d===null?(e.deletions=[t],e.flags|=16):d.push(t)),e.child=l,e.memoizedState=null,l)}function oc(t,e){return e=rc({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function rc(t,e){return Wh(t,e,0,null)}function cc(t,e,l){return Ra(e,t.child,null,l),t=oc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ah(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),hc(t.return,e,l)}function uc(t,e,l,a,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=l,o.tailMode=s)}function Eh(t,e,l){var a=e.pendingProps,s=a.revealOrder,o=a.tail;if(xe(t,e,a.children,l),a=re.current,a&2)a=a&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ah(t,l,e);else if(t.tag===19)Ah(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(Lt(re,a),s){case"forwards":for(l=e.child,s=null;l!==null;)t=l.alternate,t!==null&&Zs(t)===null&&(s=l),l=l.sibling;l=s,l===null?(s=e.child,e.child=null):(s=l.sibling,l.sibling=null),uc(e,!1,s,l,o);break;case"backwards":for(l=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Zs(t)===null){e.child=s;break}t=s.sibling,s.sibling=l,l=s,s=t}uc(e,!0,l,null,o);break;case"together":uc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $l(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),oa|=e.lanes,!(l&e.childLanes))if(t!==null){if(zn(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(c(153));if(e.child!==null){for(t=e.child,l=sa(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=sa(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function dc(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&no(t)))}function Hg(t,e,l){switch(e.tag){case 3:xs(e,e.stateNode.containerInfo),Pl(e,ce,t.memoizedState.cache),fn();break;case 27:case 5:er(e);break;case 4:xs(e,e.stateNode.containerInfo);break;case 10:Pl(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(Fl(e),e.flags|=128,null):l&e.child.childLanes?Ch(t,e,l):(Fl(e),t=$l(t,e,l),t!==null?t.sibling:null);Fl(e);break;case 19:var s=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(zn(t,e,l,!1),a=(l&e.childLanes)!==0),s){if(a)return Eh(t,e,l);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Lt(re,re.current),a)break;return null;case 22:case 23:return e.lanes=0,_h(t,e,l);case 24:Pl(e,ce,t.memoizedState.cache)}return $l(t,e,l)}function Th(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)pe=!0;else{if(!dc(t,l)&&!(e.flags&128))return pe=!1,Hg(t,e,l);pe=!!(t.flags&131072)}else pe=!1,xt&&e.flags&1048576&&ff(e,qs,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,s=a._init;if(a=s(a._payload),e.type=a,typeof a=="function")Cc(a)?(t=Ha(a,t),e.tag=1,e=Sh(null,e,a,t,l)):(e.tag=0,e=ac(null,e,a,t,l));else{if(a!=null){if(s=a.$$typeof,s===U){e.tag=11,e=bh(null,e,a,t,l);break t}else if(s===F){e.tag=14,e=vh(null,e,a,t,l);break t}}throw e=Pt(a)||a,Error(c(306,e,""))}}return e;case 0:return ac(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,s=Ha(a,e.pendingProps),Sh(t,e,a,s,l);case 3:t:{if(xs(e,e.stateNode.containerInfo),t===null)throw Error(c(387));var o=e.pendingProps;s=e.memoizedState,a=s.element,gc(t,e),En(e,o,null,l);var d=e.memoizedState;if(o=d.cache,Pl(e,ce,o),o!==s.cache&&pc(e,[ce],l,!0),An(),o=d.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:d.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=zh(t,e,o,l);break t}else if(o!==a){a=We(Error(c(424)),e),hn(a),e=zh(t,e,o,l);break t}else for(_e=ul(e.stateNode.containerInfo.firstChild),Oe=e,xt=!0,rl=null,gl=!0,l=xf(e,null,o,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(fn(),o===a){e=$l(t,e,l);break t}xe(t,e,o,l)}e=e.child}return e;case 26:return Sn(t,e),t===null?(l=Dp(e.type,null,e.pendingProps,null))?e.memoizedState=l:xt||(l=e.type,t=e.pendingProps,a=wo(Xl.current).createElement(l),a[ze]=e,a[Re]=t,we(a,l,t),he(a),e.stateNode=a):e.memoizedState=Dp(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return er(e),t===null&&xt&&(a=e.stateNode=Tp(e.type,e.pendingProps,Xl.current),Oe=e,gl=!0,_e=ul(a.firstChild)),a=e.pendingProps.children,t!==null||xt?xe(t,e,a,l):e.child=Ra(e,null,a,l),Sn(t,e),e.child;case 5:return t===null&&xt&&((s=a=_e)&&(a=hb(a,e.type,e.pendingProps,gl),a!==null?(e.stateNode=a,Oe=e,_e=ul(a.firstChild),gl=!1,s=!0):s=!1),s||Da(e)),er(e),s=e.type,o=e.pendingProps,d=t!==null?t.memoizedProps:null,a=o.children,Wc(s,o)?a=null:d!==null&&Wc(s,d)&&(e.flags|=32),e.memoizedState!==null&&(s=Lr(t,e,Og,null,null,l),qn._currentValue=s),Sn(t,e),xe(t,e,a,l),e.child;case 6:return t===null&&xt&&((t=l=_e)&&(l=pb(l,e.pendingProps,gl),l!==null?(e.stateNode=l,Oe=e,_e=null,t=!0):t=!1),t||Da(e)),null;case 13:return Ch(t,e,l);case 4:return xs(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Ra(e,null,a,l):xe(t,e,a,l),e.child;case 11:return bh(t,e,e.type,e.pendingProps,l);case 7:return xe(t,e,e.pendingProps,l),e.child;case 8:return xe(t,e,e.pendingProps.children,l),e.child;case 12:return xe(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,Pl(e,e.type,a.value),xe(t,e,a.children,l),e.child;case 9:return s=e.type._context,a=e.pendingProps.children,La(e),s=Ce(s),a=a(s),e.flags|=1,xe(t,e,a,l),e.child;case 14:return vh(t,e,e.type,e.pendingProps,l);case 15:return yh(t,e,e.type,e.pendingProps,l);case 19:return Eh(t,e,l);case 22:return _h(t,e,l);case 24:return La(e),a=Ce(ce),t===null?(s=Hr(),s===null&&(s=$t,o=Mr(),s.pooledCache=o,o.refCount++,o!==null&&(s.pooledCacheLanes|=l),s=o),e.memoizedState={parent:a,cache:s},mc(e),Pl(e,ce,s)):(t.lanes&l&&(gc(t,e),En(e,null,null,l),An()),s=t.memoizedState,o=e.memoizedState,s.parent!==a?(s={parent:a,cache:a},e.memoizedState=s,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=s),Pl(e,ce,a)):(a=o.cache,Pl(e,ce,a),a!==s.cache&&pc(e,[ce],l,!0))),xe(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(c(156,e.tag))}var fc=zt(null),Ba=null,Nl=null;function Pl(t,e,l){Lt(fc,e._currentValue),e._currentValue=l}function Ml(t){t._currentValue=fc.current,le(fc)}function hc(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function pc(t,e,l,a){var s=t.child;for(s!==null&&(s.return=t);s!==null;){var o=s.dependencies;if(o!==null){var d=s.child;o=o.firstContext;t:for(;o!==null;){var p=o;o=s;for(var b=0;b<e.length;b++)if(p.context===e[b]){o.lanes|=l,p=o.alternate,p!==null&&(p.lanes|=l),hc(o.return,l,t),a||(d=null);break t}o=p.next}}else if(s.tag===18){if(d=s.return,d===null)throw Error(c(341));d.lanes|=l,o=d.alternate,o!==null&&(o.lanes|=l),hc(d,l,t),d=null}else d=s.child;if(d!==null)d.return=s;else for(d=s;d!==null;){if(d===t){d=null;break}if(s=d.sibling,s!==null){s.return=d.return,d=s;break}d=d.return}s=d}}function zn(t,e,l,a){t=null;for(var s=e,o=!1;s!==null;){if(!o){if(s.flags&524288)o=!0;else if(s.flags&262144)break}if(s.tag===10){var d=s.alternate;if(d===null)throw Error(c(387));if(d=d.memoizedProps,d!==null){var p=s.type;Le(s.pendingProps.value,d.value)||(t!==null?t.push(p):t=[p])}}else if(s===_s.current){if(d=s.alternate,d===null)throw Error(c(387));d.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(t!==null?t.push(qn):t=[qn])}s=s.return}t!==null&&pc(e,t,l,a),e.flags|=262144}function no(t){for(t=t.firstContext;t!==null;){if(!Le(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function La(t){Ba=t,Nl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ce(t){return kh(Ba,t)}function so(t,e){return Ba===null&&La(t),kh(t,e)}function kh(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},Nl===null){if(t===null)throw Error(c(308));Nl=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Nl=Nl.next=e;return l}var ta=!1;function mc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ea(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function la(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,Xt&2){var s=a.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),a.pending=e,e=js(t),uf(t,null,l),e}return Ls(t,a,e,l),js(t)}function Cn(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194176)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,bd(t,l)}}function bc(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var s=null,o=null;if(l=l.firstBaseUpdate,l!==null){do{var d={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};o===null?s=o=d:o=o.next=d,l=l.next}while(l!==null);o===null?s=o=e:o=o.next=e}else s=o=e;l={baseState:a.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var vc=!1;function An(){if(vc){var t=vi;if(t!==null)throw t}}function En(t,e,l,a){vc=!1;var s=t.updateQueue;ta=!1;var o=s.firstBaseUpdate,d=s.lastBaseUpdate,p=s.shared.pending;if(p!==null){s.shared.pending=null;var b=p,S=b.next;b.next=null,d===null?o=S:d.next=S,d=b;var R=t.alternate;R!==null&&(R=R.updateQueue,p=R.lastBaseUpdate,p!==d&&(p===null?R.firstBaseUpdate=S:p.next=S,R.lastBaseUpdate=b))}if(o!==null){var M=s.baseState;d=0,R=S=b=null,p=o;do{var T=p.lane&-536870913,D=T!==p.lane;if(D?(yt&T)===T:(a&T)===T){T!==0&&T===bi&&(vc=!0),R!==null&&(R=R.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});t:{var K=t,nt=p;T=e;var Kt=l;switch(nt.tag){case 1:if(K=nt.payload,typeof K=="function"){M=K.call(Kt,M,T);break t}M=K;break t;case 3:K.flags=K.flags&-65537|128;case 0:if(K=nt.payload,T=typeof K=="function"?K.call(Kt,M,T):K,T==null)break t;M=lt({},M,T);break t;case 2:ta=!0}}T=p.callback,T!==null&&(t.flags|=64,D&&(t.flags|=8192),D=s.callbacks,D===null?s.callbacks=[T]:D.push(T))}else D={lane:T,tag:p.tag,payload:p.payload,callback:p.callback,next:null},R===null?(S=R=D,b=M):R=R.next=D,d|=T;if(p=p.next,p===null){if(p=s.shared.pending,p===null)break;D=p,p=D.next,D.next=null,s.lastBaseUpdate=D,s.shared.pending=null}}while(!0);R===null&&(b=M),s.baseState=b,s.firstBaseUpdate=S,s.lastBaseUpdate=R,o===null&&(s.shared.lanes=0),oa|=d,t.lanes=d,t.memoizedState=M}}function Oh(t,e){if(typeof t!="function")throw Error(c(191,t));t.call(e)}function Dh(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Oh(l[t],e)}function Tn(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var s=a.next;l=s;do{if((l.tag&t)===t){a=void 0;var o=l.create,d=l.inst;a=o(),d.destroy=a}l=l.next}while(l!==s)}}catch(p){Dt(e,e.return,p)}}function aa(t,e,l){try{var a=e.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var o=s.next;a=o;do{if((a.tag&t)===t){var d=a.inst,p=d.destroy;if(p!==void 0){d.destroy=void 0,s=e;var b=l;try{p()}catch(S){Dt(s,b,S)}}}a=a.next}while(a!==o)}}catch(S){Dt(e,e.return,S)}}function Rh(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Dh(e,l)}catch(a){Dt(t,t.return,a)}}}function $h(t,e,l){l.props=Ha(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){Dt(t,e,a)}}function ja(t,e){try{var l=t.ref;if(l!==null){var a=t.stateNode;switch(t.tag){case 26:case 27:case 5:var s=a;break;default:s=a}typeof l=="function"?t.refCleanup=l(s):l.current=s}}catch(o){Dt(t,e,o)}}function je(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(s){Dt(t,e,s)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(s){Dt(t,e,s)}else l.current=null}function Nh(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(s){Dt(t,t.return,s)}}function Mh(t,e,l){try{var a=t.stateNode;rb(a,t.type,l,e),a[Re]=e}catch(s){Dt(t,t.return,s)}}function Uh(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function yc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Uh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _c(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.nodeType===8?l.parentNode.insertBefore(t,e):l.insertBefore(t,e):(l.nodeType===8?(e=l.parentNode,e.insertBefore(t,l)):(e=l,e.appendChild(t)),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=xo));else if(a!==4&&a!==27&&(t=t.child,t!==null))for(_c(t,e,l),t=t.sibling;t!==null;)_c(t,e,l),t=t.sibling}function oo(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&a!==27&&(t=t.child,t!==null))for(oo(t,e,l),t=t.sibling;t!==null;)oo(t,e,l),t=t.sibling}var Ul=!1,Qt=!1,xc=!1,Hh=typeof WeakSet=="function"?WeakSet:Set,me=null,Bh=!1;function Bg(t,e){if(t=t.containerInfo,Fc=To,t=tf(t),Sr(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var s=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{l.nodeType,o.nodeType}catch{l=null;break t}var d=0,p=-1,b=-1,S=0,R=0,M=t,T=null;e:for(;;){for(var D;M!==l||s!==0&&M.nodeType!==3||(p=d+s),M!==o||a!==0&&M.nodeType!==3||(b=d+a),M.nodeType===3&&(d+=M.nodeValue.length),(D=M.firstChild)!==null;)T=M,M=D;for(;;){if(M===t)break e;if(T===l&&++S===s&&(p=d),T===o&&++R===a&&(b=d),(D=M.nextSibling)!==null)break;M=T,T=M.parentNode}M=D}l=p===-1||b===-1?null:{start:p,end:b}}else l=null}l=l||{start:0,end:0}}else l=null;for(Jc={focusedElem:t,selectionRange:l},To=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){switch(e=me,o=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&o!==null){t=void 0,l=e,s=o.memoizedProps,o=o.memoizedState,a=l.stateNode;try{var K=Ha(l.type,s,l.elementType===l.type);t=a.getSnapshotBeforeUpdate(K,o),a.__reactInternalSnapshotBeforeUpdate=t}catch(nt){Dt(l,l.return,nt)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)tu(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":tu(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(c(163))}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return K=Bh,Bh=!1,K}function Lh(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Bl(t,l),a&4&&Tn(5,l);break;case 1:if(Bl(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(p){Dt(l,l.return,p)}else{var s=Ha(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(s,e,t.__reactInternalSnapshotBeforeUpdate)}catch(p){Dt(l,l.return,p)}}a&64&&Rh(l),a&512&&ja(l,l.return);break;case 3:if(Bl(t,l),a&64&&(a=l.updateQueue,a!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Dh(a,t)}catch(p){Dt(l,l.return,p)}}break;case 26:Bl(t,l),a&512&&ja(l,l.return);break;case 27:case 5:Bl(t,l),e===null&&a&4&&Nh(l),a&512&&ja(l,l.return);break;case 12:Bl(t,l);break;case 13:Bl(t,l),a&4&&qh(t,l);break;case 22:if(s=l.memoizedState!==null||Ul,!s){e=e!==null&&e.memoizedState!==null||Qt;var o=Ul,d=Qt;Ul=s,(Qt=e)&&!d?ia(t,l,(l.subtreeFlags&8772)!==0):Bl(t,l),Ul=o,Qt=d}a&512&&(l.memoizedProps.mode==="manual"?ja(l,l.return):je(l,l.return));break;default:Bl(t,l)}}function jh(t){var e=t.alternate;e!==null&&(t.alternate=null,jh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&or(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ne=null,Ve=!1;function Hl(t,e,l){for(l=l.child;l!==null;)Vh(t,e,l),l=l.sibling}function Vh(t,e,l){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Ji,l)}catch{}switch(l.tag){case 26:Qt||je(l,e),Hl(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Qt||je(l,e);var a=ne,s=Ve;for(ne=l.stateNode,Hl(t,e,l),l=l.stateNode,e=l.attributes;e.length;)l.removeAttributeNode(e[0]);or(l),ne=a,Ve=s;break;case 5:Qt||je(l,e);case 6:s=ne;var o=Ve;if(ne=null,Hl(t,e,l),ne=s,Ve=o,ne!==null)if(Ve)try{t=ne,a=l.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)}catch(d){Dt(l,e,d)}else try{ne.removeChild(l.stateNode)}catch(d){Dt(l,e,d)}break;case 18:ne!==null&&(Ve?(e=ne,l=l.stateNode,e.nodeType===8?Pc(e.parentNode,l):e.nodeType===1&&Pc(e,l),Qn(e)):Pc(ne,l.stateNode));break;case 4:a=ne,s=Ve,ne=l.stateNode.containerInfo,Ve=!0,Hl(t,e,l),ne=a,Ve=s;break;case 0:case 11:case 14:case 15:Qt||aa(2,l,e),Qt||aa(4,l,e),Hl(t,e,l);break;case 1:Qt||(je(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&$h(l,e,a)),Hl(t,e,l);break;case 21:Hl(t,e,l);break;case 22:Qt||je(l,e),Qt=(a=Qt)||l.memoizedState!==null,Hl(t,e,l),Qt=a;break;default:Hl(t,e,l)}}function qh(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Qn(t)}catch(l){Dt(e,e.return,l)}}function Lg(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Hh),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Hh),e;default:throw Error(c(435,t.tag))}}function wc(t,e){var l=Lg(t);e.forEach(function(a){var s=Ig.bind(null,t,a);l.has(a)||(l.add(a),a.then(s,s))})}function el(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var s=l[a],o=t,d=e,p=d;t:for(;p!==null;){switch(p.tag){case 27:case 5:ne=p.stateNode,Ve=!1;break t;case 3:ne=p.stateNode.containerInfo,Ve=!0;break t;case 4:ne=p.stateNode.containerInfo,Ve=!0;break t}p=p.return}if(ne===null)throw Error(c(160));Vh(o,d,s),ne=null,Ve=!1,o=s.alternate,o!==null&&(o.return=null),s.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Yh(e,t),e=e.sibling}var cl=null;function Yh(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:el(e,t),ll(t),a&4&&(aa(3,t,t.return),Tn(3,t),aa(5,t,t.return));break;case 1:el(e,t),ll(t),a&512&&(Qt||l===null||je(l,l.return)),a&64&&Ul&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var s=cl;if(el(e,t),ll(t),a&512&&(Qt||l===null||je(l,l.return)),a&4){var o=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,s=s.ownerDocument||s;e:switch(a){case"title":o=s.getElementsByTagName("title")[0],(!o||o[Pi]||o[ze]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=s.createElement(a),s.head.insertBefore(o,s.querySelector("head > title"))),we(o,a,l),o[ze]=t,he(o),a=o;break t;case"link":var d=Np("link","href",s).get(a+(l.href||""));if(d){for(var p=0;p<d.length;p++)if(o=d[p],o.getAttribute("href")===(l.href==null?null:l.href)&&o.getAttribute("rel")===(l.rel==null?null:l.rel)&&o.getAttribute("title")===(l.title==null?null:l.title)&&o.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){d.splice(p,1);break e}}o=s.createElement(a),we(o,a,l),s.head.appendChild(o);break;case"meta":if(d=Np("meta","content",s).get(a+(l.content||""))){for(p=0;p<d.length;p++)if(o=d[p],o.getAttribute("content")===(l.content==null?null:""+l.content)&&o.getAttribute("name")===(l.name==null?null:l.name)&&o.getAttribute("property")===(l.property==null?null:l.property)&&o.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&o.getAttribute("charset")===(l.charSet==null?null:l.charSet)){d.splice(p,1);break e}}o=s.createElement(a),we(o,a,l),s.head.appendChild(o);break;default:throw Error(c(468,a))}o[ze]=t,he(o),a=o}t.stateNode=a}else Mp(s,t.type,t.stateNode);else t.stateNode=$p(s,a,t.memoizedProps);else o!==a?(o===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):o.count--,a===null?Mp(s,t.type,t.stateNode):$p(s,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Mh(t,t.memoizedProps,l.memoizedProps)}break;case 27:if(a&4&&t.alternate===null){s=t.stateNode,o=t.memoizedProps;try{for(var b=s.firstChild;b;){var S=b.nextSibling,R=b.nodeName;b[Pi]||R==="HEAD"||R==="BODY"||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&b.rel.toLowerCase()==="stylesheet"||s.removeChild(b),b=S}for(var M=t.type,T=s.attributes;T.length;)s.removeAttributeNode(T[0]);we(s,M,o),s[ze]=t,s[Re]=o}catch(K){Dt(t,t.return,K)}}case 5:if(el(e,t),ll(t),a&512&&(Qt||l===null||je(l,l.return)),t.flags&32){s=t.stateNode;try{ni(s,"")}catch(K){Dt(t,t.return,K)}}a&4&&t.stateNode!=null&&(s=t.memoizedProps,Mh(t,s,l!==null?l.memoizedProps:s)),a&1024&&(xc=!0);break;case 6:if(el(e,t),ll(t),a&4){if(t.stateNode===null)throw Error(c(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(K){Dt(t,t.return,K)}}break;case 3:if(Co=null,s=cl,cl=So(e.containerInfo),el(e,t),cl=s,ll(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Qn(e.containerInfo)}catch(K){Dt(t,t.return,K)}xc&&(xc=!1,Xh(t));break;case 4:a=cl,cl=So(t.stateNode.containerInfo),el(e,t),ll(t),cl=a;break;case 12:el(e,t),ll(t);break;case 13:el(e,t),ll(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Dc=ml()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,wc(t,a)));break;case 22:if(a&512&&(Qt||l===null||je(l,l.return)),b=t.memoizedState!==null,S=l!==null&&l.memoizedState!==null,R=Ul,M=Qt,Ul=R||b,Qt=M||S,el(e,t),Qt=M,Ul=R,ll(t),e=t.stateNode,e._current=t,e._visibility&=-3,e._visibility|=e._pendingVisibility&2,a&8192&&(e._visibility=b?e._visibility&-2:e._visibility|1,b&&(e=Ul||Qt,l===null||S||e||wi(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(l=null,e=t;;){if(e.tag===5||e.tag===26||e.tag===27){if(l===null){S=l=e;try{if(s=S.stateNode,b)o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{d=S.stateNode,p=S.memoizedProps.style;var D=p!=null&&p.hasOwnProperty("display")?p.display:null;d.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(K){Dt(S,S.return,K)}}}else if(e.tag===6){if(l===null){S=e;try{S.stateNode.nodeValue=b?"":S.memoizedProps}catch(K){Dt(S,S.return,K)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,wc(t,l))));break;case 19:el(e,t),ll(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,wc(t,a)));break;case 21:break;default:el(e,t),ll(t)}}function ll(t){var e=t.flags;if(e&2){try{if(t.tag!==27){t:{for(var l=t.return;l!==null;){if(Uh(l)){var a=l;break t}l=l.return}throw Error(c(160))}switch(a.tag){case 27:var s=a.stateNode,o=yc(t);oo(t,o,s);break;case 5:var d=a.stateNode;a.flags&32&&(ni(d,""),a.flags&=-33);var p=yc(t);oo(t,p,d);break;case 3:case 4:var b=a.stateNode.containerInfo,S=yc(t);_c(t,S,b);break;default:throw Error(c(161))}}}catch(R){Dt(t,t.return,R)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Xh(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Xh(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Bl(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Lh(t,e.alternate,e),e=e.sibling}function wi(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:aa(4,e,e.return),wi(e);break;case 1:je(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&$h(e,e.return,l),wi(e);break;case 26:case 27:case 5:je(e,e.return),wi(e);break;case 22:je(e,e.return),e.memoizedState===null&&wi(e);break;default:wi(e)}t=t.sibling}}function ia(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,s=t,o=e,d=o.flags;switch(o.tag){case 0:case 11:case 15:ia(s,o,l),Tn(4,o);break;case 1:if(ia(s,o,l),a=o,s=a.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(S){Dt(a,a.return,S)}if(a=o,s=a.updateQueue,s!==null){var p=a.stateNode;try{var b=s.shared.hiddenCallbacks;if(b!==null)for(s.shared.hiddenCallbacks=null,s=0;s<b.length;s++)Oh(b[s],p)}catch(S){Dt(a,a.return,S)}}l&&d&64&&Rh(o),ja(o,o.return);break;case 26:case 27:case 5:ia(s,o,l),l&&a===null&&d&4&&Nh(o),ja(o,o.return);break;case 12:ia(s,o,l);break;case 13:ia(s,o,l),l&&d&4&&qh(s,o);break;case 22:o.memoizedState===null&&ia(s,o,l),ja(o,o.return);break;default:ia(s,o,l)}e=e.sibling}}function Sc(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&vn(l))}function zc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&vn(t))}function na(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gh(t,e,l,a),e=e.sibling}function Gh(t,e,l,a){var s=e.flags;switch(e.tag){case 0:case 11:case 15:na(t,e,l,a),s&2048&&Tn(9,e);break;case 3:na(t,e,l,a),s&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&vn(t)));break;case 12:if(s&2048){na(t,e,l,a),t=e.stateNode;try{var o=e.memoizedProps,d=o.id,p=o.onPostCommit;typeof p=="function"&&p(d,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(b){Dt(e,e.return,b)}}else na(t,e,l,a);break;case 23:break;case 22:o=e.stateNode,e.memoizedState!==null?o._visibility&4?na(t,e,l,a):kn(t,e):o._visibility&4?na(t,e,l,a):(o._visibility|=4,Si(t,e,l,a,(e.subtreeFlags&10256)!==0)),s&2048&&Sc(e.alternate,e);break;case 24:na(t,e,l,a),s&2048&&zc(e.alternate,e);break;default:na(t,e,l,a)}}function Si(t,e,l,a,s){for(s=s&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var o=t,d=e,p=l,b=a,S=d.flags;switch(d.tag){case 0:case 11:case 15:Si(o,d,p,b,s),Tn(8,d);break;case 23:break;case 22:var R=d.stateNode;d.memoizedState!==null?R._visibility&4?Si(o,d,p,b,s):kn(o,d):(R._visibility|=4,Si(o,d,p,b,s)),s&&S&2048&&Sc(d.alternate,d);break;case 24:Si(o,d,p,b,s),s&&S&2048&&zc(d.alternate,d);break;default:Si(o,d,p,b,s)}e=e.sibling}}function kn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,s=a.flags;switch(a.tag){case 22:kn(l,a),s&2048&&Sc(a.alternate,a);break;case 24:kn(l,a),s&2048&&zc(a.alternate,a);break;default:kn(l,a)}e=e.sibling}}var On=8192;function zi(t){if(t.subtreeFlags&On)for(t=t.child;t!==null;)Qh(t),t=t.sibling}function Qh(t){switch(t.tag){case 26:zi(t),t.flags&On&&t.memoizedState!==null&&Eb(cl,t.memoizedState,t.memoizedProps);break;case 5:zi(t);break;case 3:case 4:var e=cl;cl=So(t.stateNode.containerInfo),zi(t),cl=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=On,On=16777216,zi(t),On=e):zi(t));break;default:zi(t)}}function Zh(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Dn(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];me=a,Fh(a,t)}Zh(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Kh(t),t=t.sibling}function Kh(t){switch(t.tag){case 0:case 11:case 15:Dn(t),t.flags&2048&&aa(9,t,t.return);break;case 3:Dn(t);break;case 12:Dn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&4&&(t.return===null||t.return.tag!==13)?(e._visibility&=-5,ro(t)):Dn(t);break;default:Dn(t)}}function ro(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];me=a,Fh(a,t)}Zh(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:aa(8,e,e.return),ro(e);break;case 22:l=e.stateNode,l._visibility&4&&(l._visibility&=-5,ro(e));break;default:ro(e)}t=t.sibling}}function Fh(t,e){for(;me!==null;){var l=me;switch(l.tag){case 0:case 11:case 15:aa(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:vn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,me=a;else t:for(l=t;me!==null;){a=me;var s=a.sibling,o=a.return;if(jh(a),a===l){me=null;break t}if(s!==null){s.return=o,me=s;break t}me=o}}}function jg(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function al(t,e,l,a){return new jg(t,e,l,a)}function Cc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sa(t,e){var l=t.alternate;return l===null?(l=al(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&31457280,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function Jh(t,e){t.flags&=31457282;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function co(t,e,l,a,s,o){var d=0;if(a=t,typeof t=="function")Cc(t)&&(d=1);else if(typeof t=="string")d=Cb(t,l,pl.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case v:return Va(l.children,s,o,e);case g:d=8,s|=24;break;case C:return t=al(12,l,e,s|2),t.elementType=C,t.lanes=o,t;case V:return t=al(13,l,e,s),t.elementType=V,t.lanes=o,t;case Y:return t=al(19,l,e,s),t.elementType=Y,t.lanes=o,t;case Q:return Wh(l,s,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k:case O:d=10;break t;case N:d=9;break t;case U:d=11;break t;case F:d=14;break t;case J:d=16,a=null;break t}d=29,l=Error(c(130,t===null?"null":typeof t,"")),a=null}return e=al(d,l,e,s),e.elementType=t,e.type=a,e.lanes=o,e}function Va(t,e,l,a){return t=al(7,t,a,e),t.lanes=l,t}function Wh(t,e,l,a){t=al(22,t,a,e),t.elementType=Q,t.lanes=l;var s={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var o=s._current;if(o===null)throw Error(c(456));if(!(s._pendingVisibility&2)){var d=Kl(o,2);d!==null&&(s._pendingVisibility|=2,De(d,o,2))}},attach:function(){var o=s._current;if(o===null)throw Error(c(456));if(s._pendingVisibility&2){var d=Kl(o,2);d!==null&&(s._pendingVisibility&=-3,De(d,o,2))}}};return t.stateNode=s,t}function Ac(t,e,l){return t=al(6,t,null,e),t.lanes=l,t}function Ec(t,e,l){return e=al(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ll(t){t.flags|=4}function Ih(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!Up(e)){if(e=tl.current,e!==null&&((yt&4194176)===yt?bl!==null:(yt&62914560)!==yt&&!(yt&536870912)||e!==bl))throw mn=Rr,mf;t.flags|=8192}}function uo(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?md():536870912,t.lanes|=e,Ai|=e)}function Rn(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var s=t.child;s!==null;)l|=s.lanes|s.childLanes,a|=s.subtreeFlags&31457280,a|=s.flags&31457280,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)l|=s.lanes|s.childLanes,a|=s.subtreeFlags,a|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function Vg(t,e,l){var a=e.pendingProps;switch(Or(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return Yt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ml(ce),Pa(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(dn(e)?Ll(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rl!==null&&(Mc(rl),rl=null))),Yt(e),null;case 26:return l=e.memoizedState,t===null?(Ll(e),l!==null?(Yt(e),Ih(e,l)):(Yt(e),e.flags&=-16777217)):l?l!==t.memoizedState?(Ll(e),Yt(e),Ih(e,l)):(Yt(e),e.flags&=-16777217):(t.memoizedProps!==a&&Ll(e),Yt(e),e.flags&=-16777217),null;case 27:ws(e),l=Xl.current;var s=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ll(e);else{if(!a){if(e.stateNode===null)throw Error(c(166));return Yt(e),null}t=pl.current,dn(e)?hf(e):(t=Tp(s,a,l),e.stateNode=t,Ll(e))}return Yt(e),null;case 5:if(ws(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ll(e);else{if(!a){if(e.stateNode===null)throw Error(c(166));return Yt(e),null}if(t=pl.current,dn(e))hf(e);else{switch(s=wo(Xl.current),t){case 1:t=s.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:t=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":t=s.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":t=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?s.createElement("select",{is:a.is}):s.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?s.createElement(l,{is:a.is}):s.createElement(l)}}t[ze]=e,t[Re]=a;t:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break t;for(;s.sibling===null;){if(s.return===null||s.return===e)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=t;t:switch(we(t,l,a),l){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Ll(e)}}return Yt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&Ll(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(c(166));if(t=Xl.current,dn(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,s=Oe,s!==null)switch(s.tag){case 27:case 5:a=s.memoizedProps}t[ze]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||wp(t.nodeValue,l)),t||Da(e)}else t=wo(t).createTextNode(a),t[ze]=e,e.stateNode=t}return Yt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(s=dn(e),a!==null&&a.dehydrated!==null){if(t===null){if(!s)throw Error(c(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(c(317));s[ze]=e}else fn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else rl!==null&&(Mc(rl),rl=null),s=!0;if(!s)return e.flags&256?(Dl(e),e):(Dl(e),null)}if(Dl(e),e.flags&128)return e.lanes=l,e;if(l=a!==null,t=t!==null&&t.memoizedState!==null,l){a=e.child,s=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(s=a.alternate.memoizedState.cachePool.pool);var o=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==s&&(a.flags|=2048)}return l!==t&&l&&(e.child.flags|=8192),uo(e,e.updateQueue),Yt(e),null;case 4:return Pa(),t===null&&Qc(e.stateNode.containerInfo),Yt(e),null;case 10:return Ml(e.type),Yt(e),null;case 19:if(le(re),s=e.memoizedState,s===null)return Yt(e),null;if(a=(e.flags&128)!==0,o=s.rendering,o===null)if(a)Rn(s,!1);else{if(Zt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Zs(t),o!==null){for(e.flags|=128,Rn(s,!1),t=o.updateQueue,e.updateQueue=t,uo(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)Jh(l,t),l=l.sibling;return Lt(re,re.current&1|2),e.child}t=t.sibling}s.tail!==null&&ml()>fo&&(e.flags|=128,a=!0,Rn(s,!1),e.lanes=4194304)}else{if(!a)if(t=Zs(o),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,uo(e,t),Rn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xt)return Yt(e),null}else 2*ml()-s.renderingStartTime>fo&&l!==536870912&&(e.flags|=128,a=!0,Rn(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ml(),e.sibling=null,t=re.current,Lt(re,a?t&1|2:t&1),e):(Yt(e),null);case 22:case 23:return Dl(e),Nr(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?l&536870912&&!(e.flags&128)&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),l=e.updateQueue,l!==null&&uo(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&le($a),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Ml(ce),Yt(e),null;case 25:return null}throw Error(c(156,e.tag))}function qg(t,e){switch(Or(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ml(ce),Pa(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ws(e),null;case 13:if(Dl(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(c(340));fn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return le(re),null;case 4:return Pa(),null;case 10:return Ml(e.type),null;case 22:case 23:return Dl(e),Nr(),t!==null&&le($a),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ml(ce),null;case 25:return null;default:return null}}function Ph(t,e){switch(Or(e),e.tag){case 3:Ml(ce),Pa();break;case 26:case 27:case 5:ws(e);break;case 4:Pa();break;case 13:Dl(e);break;case 19:le(re);break;case 10:Ml(e.type);break;case 22:case 23:Dl(e),Nr(),t!==null&&le($a);break;case 24:Ml(ce)}}var Yg={getCacheForType:function(t){var e=Ce(ce),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l}},Xg=typeof WeakMap=="function"?WeakMap:Map,Xt=0,$t=null,gt=null,yt=0,Nt=0,qe=null,jl=!1,Ci=!1,Tc=!1,Vl=0,Zt=0,oa=0,qa=0,kc=0,il=0,Ai=0,$n=null,yl=null,Oc=!1,Dc=0,fo=1/0,ho=null,ra=null,po=!1,Ya=null,Nn=0,Rc=0,$c=null,Mn=0,Nc=null;function Ye(){if(Xt&2&&yt!==0)return yt&-yt;if(X.T!==null){var t=bi;return t!==0?t:qc()}return yd()}function tp(){il===0&&(il=!(yt&536870912)||xt?pd():536870912);var t=tl.current;return t!==null&&(t.flags|=32),il}function De(t,e,l){(t===$t&&Nt===2||t.cancelPendingCommit!==null)&&(Ei(t,0),ql(t,yt,il,!1)),Ii(t,l),(!(Xt&2)||t!==$t)&&(t===$t&&(!(Xt&2)&&(qa|=l),Zt===4&&ql(t,yt,il,!1)),_l(t))}function ep(t,e,l){if(Xt&6)throw Error(c(327));var a=!l&&(e&60)===0&&(e&t.expiredLanes)===0||Wi(t,e),s=a?Zg(t,e):Bc(t,e,!0),o=a;do{if(s===0){Ci&&!a&&ql(t,e,0,!1);break}else if(s===6)ql(t,e,0,!jl);else{if(l=t.current.alternate,o&&!Gg(l)){s=Bc(t,e,!1),o=!1;continue}if(s===2){if(o=e,t.errorRecoveryDisabledLanes&o)var d=0;else d=t.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){e=d;t:{var p=t;s=$n;var b=p.current.memoizedState.isDehydrated;if(b&&(Ei(p,d).flags|=256),d=Bc(p,d,!1),d!==2){if(Tc&&!b){p.errorRecoveryDisabledLanes|=o,qa|=o,s=4;break t}o=yl,yl=s,o!==null&&Mc(o)}s=d}if(o=!1,s!==2)continue}}if(s===1){Ei(t,0),ql(t,e,0,!0);break}t:{switch(a=t,s){case 0:case 1:throw Error(c(345));case 4:if((e&4194176)===e){ql(a,e,il,!jl);break t}break;case 2:yl=null;break;case 3:case 5:break;default:throw Error(c(329))}if(a.finishedWork=l,a.finishedLanes=e,(e&62914560)===e&&(o=Dc+300-ml(),10<o)){if(ql(a,e,il,!jl),As(a,0)!==0)break t;a.timeoutHandle=Cp(lp.bind(null,a,l,yl,ho,Oc,e,il,qa,Ai,jl,2,-0,0),o);break t}lp(a,l,yl,ho,Oc,e,il,qa,Ai,jl,0,-0,0)}}break}while(!0);_l(t)}function Mc(t){yl===null?yl=t:yl.push.apply(yl,t)}function lp(t,e,l,a,s,o,d,p,b,S,R,M,T){var D=e.subtreeFlags;if((D&8192||(D&16785408)===16785408)&&(Vn={stylesheets:null,count:0,unsuspend:Ab},Qh(e),e=Tb(),e!==null)){t.cancelPendingCommit=e(cp.bind(null,t,l,a,s,d,p,b,1,M,T)),ql(t,o,d,!S);return}cp(t,l,a,s,d,p,b,R,M,T)}function Gg(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var s=l[a],o=s.getSnapshot;s=s.value;try{if(!Le(o(),s))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ql(t,e,l,a){e&=~kc,e&=~qa,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var s=e;0<s;){var o=31-Be(s),d=1<<o;a[o]=-1,s&=~d}l!==0&&gd(t,l,e)}function mo(){return Xt&6?!0:(Un(0),!1)}function Uc(){if(gt!==null){if(Nt===0)var t=gt.return;else t=gt,Nl=Ba=null,qr(t),mi=null,gn=0,t=gt;for(;t!==null;)Ph(t.alternate,t),t=t.return;gt=null}}function Ei(t,e){t.finishedWork=null,t.finishedLanes=0;var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,ub(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Uc(),$t=t,gt=l=sa(t.current,null),yt=e,Nt=0,qe=null,jl=!1,Ci=Wi(t,e),Tc=!1,Ai=il=kc=qa=oa=Zt=0,yl=$n=null,Oc=!1,e&8&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var s=31-Be(a),o=1<<s;e|=t[s],a&=~o}return Vl=e,Bs(),l}function ap(t,e){dt=null,X.H=vl,e===pn?(e=vf(),Nt=3):e===mf?(e=vf(),Nt=4):Nt=e===gh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,qe=e,gt===null&&(Zt=1,io(t,We(e,t.current)))}function ip(){var t=X.H;return X.H=vl,t===null?vl:t}function np(){var t=X.A;return X.A=Yg,t}function Hc(){Zt=4,jl||(yt&4194176)!==yt&&tl.current!==null||(Ci=!0),!(oa&134217727)&&!(qa&134217727)||$t===null||ql($t,yt,il,!1)}function Bc(t,e,l){var a=Xt;Xt|=2;var s=ip(),o=np();($t!==t||yt!==e)&&(ho=null,Ei(t,e)),e=!1;var d=Zt;t:do try{if(Nt!==0&&gt!==null){var p=gt,b=qe;switch(Nt){case 8:Uc(),d=6;break t;case 3:case 2:case 6:tl.current===null&&(e=!0);var S=Nt;if(Nt=0,qe=null,Ti(t,p,b,S),l&&Ci){d=0;break t}break;default:S=Nt,Nt=0,qe=null,Ti(t,p,b,S)}}Qg(),d=Zt;break}catch(R){ap(t,R)}while(!0);return e&&t.shellSuspendCounter++,Nl=Ba=null,Xt=a,X.H=s,X.A=o,gt===null&&($t=null,yt=0,Bs()),d}function Qg(){for(;gt!==null;)sp(gt)}function Zg(t,e){var l=Xt;Xt|=2;var a=ip(),s=np();$t!==t||yt!==e?(ho=null,fo=ml()+500,Ei(t,e)):Ci=Wi(t,e);t:do try{if(Nt!==0&&gt!==null){e=gt;var o=qe;e:switch(Nt){case 1:Nt=0,qe=null,Ti(t,e,o,1);break;case 2:if(gf(o)){Nt=0,qe=null,op(e);break}e=function(){Nt===2&&$t===t&&(Nt=7),_l(t)},o.then(e,e);break t;case 3:Nt=7;break t;case 4:Nt=5;break t;case 7:gf(o)?(Nt=0,qe=null,op(e)):(Nt=0,qe=null,Ti(t,e,o,7));break;case 5:var d=null;switch(gt.tag){case 26:d=gt.memoizedState;case 5:case 27:var p=gt;if(!d||Up(d)){Nt=0,qe=null;var b=p.sibling;if(b!==null)gt=b;else{var S=p.return;S!==null?(gt=S,go(S)):gt=null}break e}}Nt=0,qe=null,Ti(t,e,o,5);break;case 6:Nt=0,qe=null,Ti(t,e,o,6);break;case 8:Uc(),Zt=6;break t;default:throw Error(c(462))}}Kg();break}catch(R){ap(t,R)}while(!0);return Nl=Ba=null,X.H=a,X.A=s,Xt=l,gt!==null?0:($t=null,yt=0,Bs(),Zt)}function Kg(){for(;gt!==null&&!gm();)sp(gt)}function sp(t){var e=Th(t.alternate,t,Vl);t.memoizedProps=t.pendingProps,e===null?go(t):gt=e}function op(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=wh(l,e,e.pendingProps,e.type,void 0,yt);break;case 11:e=wh(l,e,e.pendingProps,e.type.render,e.ref,yt);break;case 5:qr(e);default:Ph(l,e),e=gt=Jh(e,Vl),e=Th(l,e,Vl)}t.memoizedProps=t.pendingProps,e===null?go(t):gt=e}function Ti(t,e,l,a){Nl=Ba=null,qr(e),mi=null,gn=0;var s=e.return;try{if(Ug(t,s,e,l,yt)){Zt=1,io(t,We(l,t.current)),gt=null;return}}catch(o){if(s!==null)throw gt=s,o;Zt=1,io(t,We(l,t.current)),gt=null;return}e.flags&32768?(xt||a===1?t=!0:Ci||yt&536870912?t=!1:(jl=t=!0,(a===2||a===3||a===6)&&(a=tl.current,a!==null&&a.tag===13&&(a.flags|=16384))),rp(e,t)):go(e)}function go(t){var e=t;do{if(e.flags&32768){rp(e,jl);return}t=e.return;var l=Vg(e.alternate,e,Vl);if(l!==null){gt=l;return}if(e=e.sibling,e!==null){gt=e;return}gt=e=t}while(e!==null);Zt===0&&(Zt=5)}function rp(t,e){do{var l=qg(t.alternate,t);if(l!==null){l.flags&=32767,gt=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){gt=t;return}gt=t=l}while(t!==null);Zt=6,gt=null}function cp(t,e,l,a,s,o,d,p,b,S){var R=X.T,M=L.p;try{L.p=2,X.T=null,Fg(t,e,l,a,M,s,o,d,p,b,S)}finally{X.T=R,L.p=M}}function Fg(t,e,l,a,s,o,d,p){do ki();while(Ya!==null);if(Xt&6)throw Error(c(327));var b=t.finishedWork;if(a=t.finishedLanes,b===null)return null;if(t.finishedWork=null,t.finishedLanes=0,b===t.current)throw Error(c(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var S=b.lanes|b.childLanes;if(S|=Er,Em(t,a,S,o,d,p),t===$t&&(gt=$t=null,yt=0),!(b.subtreeFlags&10256)&&!(b.flags&10256)||po||(po=!0,Rc=S,$c=l,Pg(Ss,function(){return ki(),null})),l=(b.flags&15990)!==0,b.subtreeFlags&15990||l?(l=X.T,X.T=null,o=L.p,L.p=2,d=Xt,Xt|=4,Bg(t,b),Yh(b,t),yg(Jc,t.containerInfo),To=!!Fc,Jc=Fc=null,t.current=b,Lh(t,b.alternate,b),bm(),Xt=d,L.p=o,X.T=l):t.current=b,po?(po=!1,Ya=t,Nn=a):up(t,S),S=t.pendingLanes,S===0&&(ra=null),wm(b.stateNode),_l(t),e!==null)for(s=t.onRecoverableError,b=0;b<e.length;b++)S=e[b],s(S.value,{componentStack:S.stack});return Nn&3&&ki(),S=t.pendingLanes,a&4194218&&S&42?t===Nc?Mn++:(Mn=0,Nc=t):Mn=0,Un(0),null}function up(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,vn(e)))}function ki(){if(Ya!==null){var t=Ya,e=Rc;Rc=0;var l=vd(Nn),a=X.T,s=L.p;try{if(L.p=32>l?32:l,X.T=null,Ya===null)var o=!1;else{l=$c,$c=null;var d=Ya,p=Nn;if(Ya=null,Nn=0,Xt&6)throw Error(c(331));var b=Xt;if(Xt|=4,Kh(d.current),Gh(d,d.current,p,l),Xt=b,Un(0,!1),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Ji,d)}catch{}o=!0}return o}finally{L.p=s,X.T=a,up(t,e)}}return!1}function dp(t,e,l){e=We(l,e),e=lc(t.stateNode,e,2),t=la(t,e,2),t!==null&&(Ii(t,2),_l(t))}function Dt(t,e,l){if(t.tag===3)dp(t,t,l);else for(;e!==null;){if(e.tag===3){dp(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ra===null||!ra.has(a))){t=We(l,t),l=ph(2),a=la(e,l,2),a!==null&&(mh(l,a,e,t),Ii(a,2),_l(a));break}}e=e.return}}function Lc(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new Xg;var s=new Set;a.set(e,s)}else s=a.get(e),s===void 0&&(s=new Set,a.set(e,s));s.has(l)||(Tc=!0,s.add(l),t=Jg.bind(null,t,e,l),e.then(t,t))}function Jg(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,$t===t&&(yt&l)===l&&(Zt===4||Zt===3&&(yt&62914560)===yt&&300>ml()-Dc?!(Xt&2)&&Ei(t,0):kc|=l,Ai===yt&&(Ai=0)),_l(t)}function fp(t,e){e===0&&(e=md()),t=Kl(t,e),t!==null&&(Ii(t,e),_l(t))}function Wg(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),fp(t,l)}function Ig(t,e){var l=0;switch(t.tag){case 13:var a=t.stateNode,s=t.memoizedState;s!==null&&(l=s.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(e),fp(t,l)}function Pg(t,e){return ar(t,e)}var bo=null,Oi=null,jc=!1,vo=!1,Vc=!1,Xa=0;function _l(t){t!==Oi&&t.next===null&&(Oi===null?bo=Oi=t:Oi=Oi.next=t),vo=!0,jc||(jc=!0,eb(tb))}function Un(t,e){if(!Vc&&vo){Vc=!0;do for(var l=!1,a=bo;a!==null;){if(t!==0){var s=a.pendingLanes;if(s===0)var o=0;else{var d=a.suspendedLanes,p=a.pingedLanes;o=(1<<31-Be(42|t)+1)-1,o&=s&~(d&~p),o=o&201326677?o&201326677|1:o?o|2:0}o!==0&&(l=!0,mp(a,o))}else o=yt,o=As(a,a===$t?o:0),!(o&3)||Wi(a,o)||(l=!0,mp(a,o));a=a.next}while(l);Vc=!1}}function tb(){vo=jc=!1;var t=0;Xa!==0&&(cb()&&(t=Xa),Xa=0);for(var e=ml(),l=null,a=bo;a!==null;){var s=a.next,o=hp(a,e);o===0?(a.next=null,l===null?bo=s:l.next=s,s===null&&(Oi=l)):(l=a,(t!==0||o&3)&&(vo=!0)),a=s}Un(t)}function hp(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes&-62914561;0<o;){var d=31-Be(o),p=1<<d,b=s[d];b===-1?(!(p&l)||p&a)&&(s[d]=Am(p,e)):b<=e&&(t.expiredLanes|=p),o&=~p}if(e=$t,l=yt,l=As(t,t===e?l:0),a=t.callbackNode,l===0||t===e&&Nt===2||t.cancelPendingCommit!==null)return a!==null&&a!==null&&ir(a),t.callbackNode=null,t.callbackPriority=0;if(!(l&3)||Wi(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&ir(a),vd(l)){case 2:case 8:l=fd;break;case 32:l=Ss;break;case 268435456:l=hd;break;default:l=Ss}return a=pp.bind(null,t),l=ar(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&ir(a),t.callbackPriority=2,t.callbackNode=null,2}function pp(t,e){var l=t.callbackNode;if(ki()&&t.callbackNode!==l)return null;var a=yt;return a=As(t,t===$t?a:0),a===0?null:(ep(t,a,e),hp(t,ml()),t.callbackNode!=null&&t.callbackNode===l?pp.bind(null,t):null)}function mp(t,e){if(ki())return null;ep(t,e,!0)}function eb(t){db(function(){Xt&6?ar(dd,t):t()})}function qc(){return Xa===0&&(Xa=pd()),Xa}function gp(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ds(""+t)}function bp(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function lb(t,e,l,a,s){if(e==="submit"&&l&&l.stateNode===s){var o=gp((s[Re]||null).action),d=a.submitter;d&&(e=(e=d[Re]||null)?gp(e.formAction):d.getAttribute("formAction"),e!==null&&(o=e,d=null));var p=new Ms("action","action",null,a,s);t.push({event:p,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Xa!==0){var b=d?bp(s,d):new FormData(s);Wr(l,{pending:!0,data:b,method:s.method,action:o},null,b)}}else typeof o=="function"&&(p.preventDefault(),b=d?bp(s,d):new FormData(s),Wr(l,{pending:!0,data:b,method:s.method,action:o},o,b))},currentTarget:s}]})}}for(var Yc=0;Yc<cf.length;Yc++){var Xc=cf[Yc],ab=Xc.toLowerCase(),ib=Xc[0].toUpperCase()+Xc.slice(1);ol(ab,"on"+ib)}ol(af,"onAnimationEnd"),ol(nf,"onAnimationIteration"),ol(sf,"onAnimationStart"),ol("dblclick","onDoubleClick"),ol("focusin","onFocus"),ol("focusout","onBlur"),ol(xg,"onTransitionRun"),ol(wg,"onTransitionStart"),ol(Sg,"onTransitionCancel"),ol(of,"onTransitionEnd"),ai("onMouseEnter",["mouseout","mouseover"]),ai("onMouseLeave",["mouseout","mouseover"]),ai("onPointerEnter",["pointerout","pointerover"]),ai("onPointerLeave",["pointerout","pointerover"]),Ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hn));function vp(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],s=a.event;a=a.listeners;t:{var o=void 0;if(e)for(var d=a.length-1;0<=d;d--){var p=a[d],b=p.instance,S=p.currentTarget;if(p=p.listener,b!==o&&s.isPropagationStopped())break t;o=p,s.currentTarget=S;try{o(s)}catch(R){ao(R)}s.currentTarget=null,o=b}else for(d=0;d<a.length;d++){if(p=a[d],b=p.instance,S=p.currentTarget,p=p.listener,b!==o&&s.isPropagationStopped())break t;o=p,s.currentTarget=S;try{o(s)}catch(R){ao(R)}s.currentTarget=null,o=b}}}}function vt(t,e){var l=e[sr];l===void 0&&(l=e[sr]=new Set);var a=t+"__bubble";l.has(a)||(yp(e,t,2,!1),l.add(a))}function Gc(t,e,l){var a=0;e&&(a|=4),yp(l,t,a,e)}var yo="_reactListening"+Math.random().toString(36).slice(2);function Qc(t){if(!t[yo]){t[yo]=!0,xd.forEach(function(l){l!=="selectionchange"&&(nb.has(l)||Gc(l,!1,t),Gc(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[yo]||(e[yo]=!0,Gc("selectionchange",!1,e))}}function yp(t,e,l,a){switch(qp(e)){case 2:var s=Db;break;case 8:s=Rb;break;default:s=nu}l=s.bind(null,e,l,t),s=void 0,!pr||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),a?s!==void 0?t.addEventListener(e,l,{capture:!0,passive:s}):t.addEventListener(e,l,!0):s!==void 0?t.addEventListener(e,l,{passive:s}):t.addEventListener(e,l,!1)}function Zc(t,e,l,a,s){var o=a;if(!(e&1)&&!(e&2)&&a!==null)t:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var p=a.stateNode.containerInfo;if(p===s||p.nodeType===8&&p.parentNode===s)break;if(d===4)for(d=a.return;d!==null;){var b=d.tag;if((b===3||b===4)&&(b=d.stateNode.containerInfo,b===s||b.nodeType===8&&b.parentNode===s))return;d=d.return}for(;p!==null;){if(d=za(p),d===null)return;if(b=d.tag,b===5||b===6||b===26||b===27){a=o=d;continue t}p=p.parentNode}}a=a.return}$d(function(){var S=o,R=fr(l),M=[];t:{var T=rf.get(t);if(T!==void 0){var D=Ms,K=t;switch(t){case"keypress":if($s(l)===0)break t;case"keydown":case"keyup":D=Im;break;case"focusin":K="focus",D=vr;break;case"focusout":K="blur",D=vr;break;case"beforeblur":case"afterblur":D=vr;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=jm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=eg;break;case af:case nf:case sf:D=Ym;break;case of:D=ag;break;case"scroll":case"scrollend":D=Bm;break;case"wheel":D=ng;break;case"copy":case"cut":case"paste":D=Gm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Bd;break;case"toggle":case"beforetoggle":D=og}var nt=(e&4)!==0,Kt=!nt&&(t==="scroll"||t==="scrollend"),z=nt?T!==null?T+"Capture":null:T;nt=[];for(var w=S,A;w!==null;){var $=w;if(A=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||A===null||z===null||($=en(w,z),$!=null&&nt.push(Bn(w,$,A))),Kt)break;w=w.return}0<nt.length&&(T=new D(T,K,null,l,R),M.push({event:T,listeners:nt}))}}if(!(e&7)){t:{if(T=t==="mouseover"||t==="pointerover",D=t==="mouseout"||t==="pointerout",T&&l!==dr&&(K=l.relatedTarget||l.fromElement)&&(za(K)||K[ti]))break t;if((D||T)&&(T=R.window===R?R:(T=R.ownerDocument)?T.defaultView||T.parentWindow:window,D?(K=l.relatedTarget||l.toElement,D=S,K=K?za(K):null,K!==null&&(Kt=Z(K),nt=K.tag,K!==Kt||nt!==5&&nt!==27&&nt!==6)&&(K=null)):(D=null,K=S),D!==K)){if(nt=Ud,$="onMouseLeave",z="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(nt=Bd,$="onPointerLeave",z="onPointerEnter",w="pointer"),Kt=D==null?T:tn(D),A=K==null?T:tn(K),T=new nt($,w+"leave",D,l,R),T.target=Kt,T.relatedTarget=A,$=null,za(R)===S&&(nt=new nt(z,w+"enter",K,l,R),nt.target=A,nt.relatedTarget=Kt,$=nt),Kt=$,D&&K)e:{for(nt=D,z=K,w=0,A=nt;A;A=Di(A))w++;for(A=0,$=z;$;$=Di($))A++;for(;0<w-A;)nt=Di(nt),w--;for(;0<A-w;)z=Di(z),A--;for(;w--;){if(nt===z||z!==null&&nt===z.alternate)break e;nt=Di(nt),z=Di(z)}nt=null}else nt=null;D!==null&&_p(M,T,D,nt,!1),K!==null&&Kt!==null&&_p(M,Kt,K,nt,!0)}}t:{if(T=S?tn(S):window,D=T.nodeName&&T.nodeName.toLowerCase(),D==="select"||D==="input"&&T.type==="file")var G=Qd;else if(Xd(T))if(Zd)G=bg;else{G=mg;var ht=pg}else D=T.nodeName,!D||D.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?S&&ur(S.elementType)&&(G=Qd):G=gg;if(G&&(G=G(t,S))){Gd(M,G,l,R);break t}ht&&ht(t,T,S),t==="focusout"&&S&&T.type==="number"&&S.memoizedProps.value!=null&&cr(T,"number",T.value)}switch(ht=S?tn(S):window,t){case"focusin":(Xd(ht)||ht.contentEditable==="true")&&(ci=ht,zr=S,un=null);break;case"focusout":un=zr=ci=null;break;case"mousedown":Cr=!0;break;case"contextmenu":case"mouseup":case"dragend":Cr=!1,ef(M,l,R);break;case"selectionchange":if(_g)break;case"keydown":case"keyup":ef(M,l,R)}var W;if(_r)t:{switch(t){case"compositionstart":var tt="onCompositionStart";break t;case"compositionend":tt="onCompositionEnd";break t;case"compositionupdate":tt="onCompositionUpdate";break t}tt=void 0}else ri?qd(t,l)&&(tt="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(tt="onCompositionStart");tt&&(Ld&&l.locale!=="ko"&&(ri||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&ri&&(W=Nd()):(Zl=R,mr="value"in Zl?Zl.value:Zl.textContent,ri=!0)),ht=_o(S,tt),0<ht.length&&(tt=new Hd(tt,t,null,l,R),M.push({event:tt,listeners:ht}),W?tt.data=W:(W=Yd(l),W!==null&&(tt.data=W)))),(W=cg?ug(t,l):dg(t,l))&&(tt=_o(S,"onBeforeInput"),0<tt.length&&(ht=new Hd("onBeforeInput","beforeinput",null,l,R),M.push({event:ht,listeners:tt}),ht.data=W)),lb(M,t,S,l,R)}vp(M,e)})}function Bn(t,e,l){return{instance:t,listener:e,currentTarget:l}}function _o(t,e){for(var l=e+"Capture",a=[];t!==null;){var s=t,o=s.stateNode;s=s.tag,s!==5&&s!==26&&s!==27||o===null||(s=en(t,l),s!=null&&a.unshift(Bn(t,s,o)),s=en(t,e),s!=null&&a.push(Bn(t,s,o))),t=t.return}return a}function Di(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function _p(t,e,l,a,s){for(var o=e._reactName,d=[];l!==null&&l!==a;){var p=l,b=p.alternate,S=p.stateNode;if(p=p.tag,b!==null&&b===a)break;p!==5&&p!==26&&p!==27||S===null||(b=S,s?(S=en(l,o),S!=null&&d.unshift(Bn(l,S,b))):s||(S=en(l,o),S!=null&&d.push(Bn(l,S,b)))),l=l.return}d.length!==0&&t.push({event:e,listeners:d})}var sb=/\r\n?/g,ob=/\u0000|\uFFFD/g;function xp(t){return(typeof t=="string"?t:""+t).replace(sb,`
`).replace(ob,"")}function wp(t,e){return e=xp(e),xp(t)===e}function xo(){}function Tt(t,e,l,a,s,o){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||ni(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&ni(t,""+a);break;case"className":Ts(t,"class",a);break;case"tabIndex":Ts(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ts(t,l,a);break;case"style":Dd(t,a,o);break;case"data":if(e!=="object"){Ts(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Ds(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(l==="formAction"?(e!=="input"&&Tt(t,e,"name",s.name,s,null),Tt(t,e,"formEncType",s.formEncType,s,null),Tt(t,e,"formMethod",s.formMethod,s,null),Tt(t,e,"formTarget",s.formTarget,s,null)):(Tt(t,e,"encType",s.encType,s,null),Tt(t,e,"method",s.method,s,null),Tt(t,e,"target",s.target,s,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Ds(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=xo);break;case"onScroll":a!=null&&vt("scroll",t);break;case"onScrollEnd":a!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(l=a.__html,l!=null){if(s.children!=null)throw Error(c(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Ds(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":vt("beforetoggle",t),vt("toggle",t),Es(t,"popover",a);break;case"xlinkActuate":Tl(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Tl(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Tl(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Tl(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Tl(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Tl(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Tl(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Tl(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Tl(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Es(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Um.get(l)||l,Es(t,l,a))}}function Kc(t,e,l,a,s,o){switch(l){case"style":Dd(t,a,o);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(l=a.__html,l!=null){if(s.children!=null)throw Error(c(60));t.innerHTML=l}}break;case"children":typeof a=="string"?ni(t,a):(typeof a=="number"||typeof a=="bigint")&&ni(t,""+a);break;case"onScroll":a!=null&&vt("scroll",t);break;case"onScrollEnd":a!=null&&vt("scrollend",t);break;case"onClick":a!=null&&(t.onclick=xo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!wd.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(s=l.endsWith("Capture"),e=l.slice(2,s?l.length-7:void 0),o=t[Re]||null,o=o!=null?o[l]:null,typeof o=="function"&&t.removeEventListener(e,o,s),typeof a=="function")){typeof o!="function"&&o!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,s);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Es(t,l,a)}}}function we(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var a=!1,s=!1,o;for(o in l)if(l.hasOwnProperty(o)){var d=l[o];if(d!=null)switch(o){case"src":a=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,e));default:Tt(t,e,o,d,l,null)}}s&&Tt(t,e,"srcSet",l.srcSet,l,null),a&&Tt(t,e,"src",l.src,l,null);return;case"input":vt("invalid",t);var p=o=d=s=null,b=null,S=null;for(a in l)if(l.hasOwnProperty(a)){var R=l[a];if(R!=null)switch(a){case"name":s=R;break;case"type":d=R;break;case"checked":b=R;break;case"defaultChecked":S=R;break;case"value":o=R;break;case"defaultValue":p=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,e));break;default:Tt(t,e,a,R,l,null)}}Ed(t,o,p,b,S,d,s,!1),ks(t);return;case"select":vt("invalid",t),a=d=o=null;for(s in l)if(l.hasOwnProperty(s)&&(p=l[s],p!=null))switch(s){case"value":o=p;break;case"defaultValue":d=p;break;case"multiple":a=p;default:Tt(t,e,s,p,l,null)}e=o,l=d,t.multiple=!!a,e!=null?ii(t,!!a,e,!1):l!=null&&ii(t,!!a,l,!0);return;case"textarea":vt("invalid",t),o=s=a=null;for(d in l)if(l.hasOwnProperty(d)&&(p=l[d],p!=null))switch(d){case"value":a=p;break;case"defaultValue":s=p;break;case"children":o=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(c(91));break;default:Tt(t,e,d,p,l,null)}kd(t,a,s,o),ks(t);return;case"option":for(b in l)if(l.hasOwnProperty(b)&&(a=l[b],a!=null))switch(b){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Tt(t,e,b,a,l,null)}return;case"dialog":vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(a=0;a<Hn.length;a++)vt(Hn[a],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in l)if(l.hasOwnProperty(S)&&(a=l[S],a!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,e));default:Tt(t,e,S,a,l,null)}return;default:if(ur(e)){for(R in l)l.hasOwnProperty(R)&&(a=l[R],a!==void 0&&Kc(t,e,R,a,l,void 0));return}}for(p in l)l.hasOwnProperty(p)&&(a=l[p],a!=null&&Tt(t,e,p,a,l,null))}function rb(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,o=null,d=null,p=null,b=null,S=null,R=null;for(D in l){var M=l[D];if(l.hasOwnProperty(D)&&M!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":b=M;default:a.hasOwnProperty(D)||Tt(t,e,D,null,a,M)}}for(var T in a){var D=a[T];if(M=l[T],a.hasOwnProperty(T)&&(D!=null||M!=null))switch(T){case"type":o=D;break;case"name":s=D;break;case"checked":S=D;break;case"defaultChecked":R=D;break;case"value":d=D;break;case"defaultValue":p=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,e));break;default:D!==M&&Tt(t,e,T,D,a,M)}}rr(t,d,p,b,S,R,o,s);return;case"select":D=d=p=T=null;for(o in l)if(b=l[o],l.hasOwnProperty(o)&&b!=null)switch(o){case"value":break;case"multiple":D=b;default:a.hasOwnProperty(o)||Tt(t,e,o,null,a,b)}for(s in a)if(o=a[s],b=l[s],a.hasOwnProperty(s)&&(o!=null||b!=null))switch(s){case"value":T=o;break;case"defaultValue":p=o;break;case"multiple":d=o;default:o!==b&&Tt(t,e,s,o,a,b)}e=p,l=d,a=D,T!=null?ii(t,!!l,T,!1):!!a!=!!l&&(e!=null?ii(t,!!l,e,!0):ii(t,!!l,l?[]:"",!1));return;case"textarea":D=T=null;for(p in l)if(s=l[p],l.hasOwnProperty(p)&&s!=null&&!a.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:Tt(t,e,p,null,a,s)}for(d in a)if(s=a[d],o=l[d],a.hasOwnProperty(d)&&(s!=null||o!=null))switch(d){case"value":T=s;break;case"defaultValue":D=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(c(91));break;default:s!==o&&Tt(t,e,d,s,a,o)}Td(t,T,D);return;case"option":for(var K in l)if(T=l[K],l.hasOwnProperty(K)&&T!=null&&!a.hasOwnProperty(K))switch(K){case"selected":t.selected=!1;break;default:Tt(t,e,K,null,a,T)}for(b in a)if(T=a[b],D=l[b],a.hasOwnProperty(b)&&T!==D&&(T!=null||D!=null))switch(b){case"selected":t.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:Tt(t,e,b,T,a,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in l)T=l[nt],l.hasOwnProperty(nt)&&T!=null&&!a.hasOwnProperty(nt)&&Tt(t,e,nt,null,a,T);for(S in a)if(T=a[S],D=l[S],a.hasOwnProperty(S)&&T!==D&&(T!=null||D!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(c(137,e));break;default:Tt(t,e,S,T,a,D)}return;default:if(ur(e)){for(var Kt in l)T=l[Kt],l.hasOwnProperty(Kt)&&T!==void 0&&!a.hasOwnProperty(Kt)&&Kc(t,e,Kt,void 0,a,T);for(R in a)T=a[R],D=l[R],!a.hasOwnProperty(R)||T===D||T===void 0&&D===void 0||Kc(t,e,R,T,a,D);return}}for(var z in l)T=l[z],l.hasOwnProperty(z)&&T!=null&&!a.hasOwnProperty(z)&&Tt(t,e,z,null,a,T);for(M in a)T=a[M],D=l[M],!a.hasOwnProperty(M)||T===D||T==null&&D==null||Tt(t,e,M,T,a,D)}var Fc=null,Jc=null;function wo(t){return t.nodeType===9?t:t.ownerDocument}function Sp(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zp(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Wc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ic=null;function cb(){var t=window.event;return t&&t.type==="popstate"?t===Ic?!1:(Ic=t,!0):(Ic=null,!1)}var Cp=typeof setTimeout=="function"?setTimeout:void 0,ub=typeof clearTimeout=="function"?clearTimeout:void 0,Ap=typeof Promise=="function"?Promise:void 0,db=typeof queueMicrotask=="function"?queueMicrotask:typeof Ap<"u"?function(t){return Ap.resolve(null).then(t).catch(fb)}:Cp;function fb(t){setTimeout(function(){throw t})}function Pc(t,e){var l=e,a=0;do{var s=l.nextSibling;if(t.removeChild(l),s&&s.nodeType===8)if(l=s.data,l==="/$"){if(a===0){t.removeChild(s),Qn(e);return}a--}else l!=="$"&&l!=="$?"&&l!=="$!"||a++;l=s}while(l);Qn(e)}function tu(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":tu(l),or(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function hb(t,e,l,a){for(;t.nodeType===1;){var s=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Pi])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(o=t.getAttribute("rel"),o==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(o!==s.rel||t.getAttribute("href")!==(s.href==null?null:s.href)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||t.getAttribute("title")!==(s.title==null?null:s.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(o=t.getAttribute("src"),(o!==(s.src==null?null:s.src)||t.getAttribute("type")!==(s.type==null?null:s.type)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&o&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var o=s.name==null?null:""+s.name;if(s.type==="hidden"&&t.getAttribute("name")===o)return t}else return t;if(t=ul(t.nextSibling),t===null)break}return null}function pb(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=ul(t.nextSibling),t===null))return null;return t}function ul(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}function Ep(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"){if(e===0)return t;e--}else l==="/$"&&e++}t=t.previousSibling}return null}function Tp(t,e,l){switch(e=wo(l),t){case"html":if(t=e.documentElement,!t)throw Error(c(452));return t;case"head":if(t=e.head,!t)throw Error(c(453));return t;case"body":if(t=e.body,!t)throw Error(c(454));return t;default:throw Error(c(451))}}var nl=new Map,kp=new Set;function So(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var Yl=L.d;L.d={f:mb,r:gb,D:bb,C:vb,L:yb,m:_b,X:wb,S:xb,M:Sb};function mb(){var t=Yl.f(),e=mo();return t||e}function gb(t){var e=ei(t);e!==null&&e.tag===5&&e.type==="form"?lh(e):Yl.r(t)}var Ri=typeof document>"u"?null:document;function Op(t,e,l){var a=Ri;if(a&&typeof e=="string"&&e){var s=Fe(e);s='link[rel="'+t+'"][href="'+s+'"]',typeof l=="string"&&(s+='[crossorigin="'+l+'"]'),kp.has(s)||(kp.add(s),t={rel:t,crossOrigin:l,href:e},a.querySelector(s)===null&&(e=a.createElement("link"),we(e,"link",t),he(e),a.head.appendChild(e)))}}function bb(t){Yl.D(t),Op("dns-prefetch",t,null)}function vb(t,e){Yl.C(t,e),Op("preconnect",t,e)}function yb(t,e,l){Yl.L(t,e,l);var a=Ri;if(a&&t&&e){var s='link[rel="preload"][as="'+Fe(e)+'"]';e==="image"&&l&&l.imageSrcSet?(s+='[imagesrcset="'+Fe(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(s+='[imagesizes="'+Fe(l.imageSizes)+'"]')):s+='[href="'+Fe(t)+'"]';var o=s;switch(e){case"style":o=$i(t);break;case"script":o=Ni(t)}nl.has(o)||(t=lt({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),nl.set(o,t),a.querySelector(s)!==null||e==="style"&&a.querySelector(Ln(o))||e==="script"&&a.querySelector(jn(o))||(e=a.createElement("link"),we(e,"link",t),he(e),a.head.appendChild(e)))}}function _b(t,e){Yl.m(t,e);var l=Ri;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",s='link[rel="modulepreload"][as="'+Fe(a)+'"][href="'+Fe(t)+'"]',o=s;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Ni(t)}if(!nl.has(o)&&(t=lt({rel:"modulepreload",href:t},e),nl.set(o,t),l.querySelector(s)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(jn(o)))return}a=l.createElement("link"),we(a,"link",t),he(a),l.head.appendChild(a)}}}function xb(t,e,l){Yl.S(t,e,l);var a=Ri;if(a&&t){var s=li(a).hoistableStyles,o=$i(t);e=e||"default";var d=s.get(o);if(!d){var p={loading:0,preload:null};if(d=a.querySelector(Ln(o)))p.loading=5;else{t=lt({rel:"stylesheet",href:t,"data-precedence":e},l),(l=nl.get(o))&&eu(t,l);var b=d=a.createElement("link");he(b),we(b,"link",t),b._p=new Promise(function(S,R){b.onload=S,b.onerror=R}),b.addEventListener("load",function(){p.loading|=1}),b.addEventListener("error",function(){p.loading|=2}),p.loading|=4,zo(d,e,a)}d={type:"stylesheet",instance:d,count:1,state:p},s.set(o,d)}}}function wb(t,e){Yl.X(t,e);var l=Ri;if(l&&t){var a=li(l).hoistableScripts,s=Ni(t),o=a.get(s);o||(o=l.querySelector(jn(s)),o||(t=lt({src:t,async:!0},e),(e=nl.get(s))&&lu(t,e),o=l.createElement("script"),he(o),we(o,"link",t),l.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(s,o))}}function Sb(t,e){Yl.M(t,e);var l=Ri;if(l&&t){var a=li(l).hoistableScripts,s=Ni(t),o=a.get(s);o||(o=l.querySelector(jn(s)),o||(t=lt({src:t,async:!0,type:"module"},e),(e=nl.get(s))&&lu(t,e),o=l.createElement("script"),he(o),we(o,"link",t),l.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(s,o))}}function Dp(t,e,l,a){var s=(s=Xl.current)?So(s):null;if(!s)throw Error(c(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=$i(l.href),l=li(s).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=$i(l.href);var o=li(s).hoistableStyles,d=o.get(t);if(d||(s=s.ownerDocument||s,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(t,d),(o=s.querySelector(Ln(t)))&&!o._p&&(d.instance=o,d.state.loading=5),nl.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},nl.set(t,l),o||zb(s,t,l,d.state))),e&&a===null)throw Error(c(528,""));return d}if(e&&a!==null)throw Error(c(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ni(l),l=li(s).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,t))}}function $i(t){return'href="'+Fe(t)+'"'}function Ln(t){return'link[rel="stylesheet"]['+t+"]"}function Rp(t){return lt({},t,{"data-precedence":t.precedence,precedence:null})}function zb(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),we(e,"link",l),he(e),t.head.appendChild(e))}function Ni(t){return'[src="'+Fe(t)+'"]'}function jn(t){return"script[async]"+t}function $p(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+Fe(l.href)+'"]');if(a)return e.instance=a,he(a),a;var s=lt({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),he(a),we(a,"style",s),zo(a,l.precedence,t),e.instance=a;case"stylesheet":s=$i(l.href);var o=t.querySelector(Ln(s));if(o)return e.state.loading|=4,e.instance=o,he(o),o;a=Rp(l),(s=nl.get(s))&&eu(a,s),o=(t.ownerDocument||t).createElement("link"),he(o);var d=o;return d._p=new Promise(function(p,b){d.onload=p,d.onerror=b}),we(o,"link",a),e.state.loading|=4,zo(o,l.precedence,t),e.instance=o;case"script":return o=Ni(l.src),(s=t.querySelector(jn(o)))?(e.instance=s,he(s),s):(a=l,(s=nl.get(o))&&(a=lt({},l),lu(a,s)),t=t.ownerDocument||t,s=t.createElement("script"),he(s),we(s,"link",a),t.head.appendChild(s),e.instance=s);case"void":return null;default:throw Error(c(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(a=e.instance,e.state.loading|=4,zo(a,l.precedence,t));return e.instance}function zo(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=a.length?a[a.length-1]:null,o=s,d=0;d<a.length;d++){var p=a[d];if(p.dataset.precedence===e)o=p;else if(o!==s)break}o?o.parentNode.insertBefore(t,o.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function eu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function lu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Co=null;function Np(t,e,l){if(Co===null){var a=new Map,s=Co=new Map;s.set(l,a)}else s=Co,a=s.get(l),a||(a=new Map,s.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),s=0;s<l.length;s++){var o=l[s];if(!(o[Pi]||o[ze]||t==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var d=o.getAttribute(e)||"";d=t+d;var p=a.get(d);p?p.push(o):a.set(d,[o])}}return a}function Mp(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Cb(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Up(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var Vn=null;function Ab(){}function Eb(t,e,l){if(Vn===null)throw Error(c(475));var a=Vn;if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&!(e.state.loading&4)){if(e.instance===null){var s=$i(l.href),o=t.querySelector(Ln(s));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=Ao.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=o,he(o);return}o=t.ownerDocument||t,l=Rp(l),(s=nl.get(s))&&eu(l,s),o=o.createElement("link"),he(o);var d=o;d._p=new Promise(function(p,b){d.onload=p,d.onerror=b}),we(o,"link",l),e.instance=o}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&!(e.state.loading&3)&&(a.count++,e=Ao.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function Tb(){if(Vn===null)throw Error(c(475));var t=Vn;return t.stylesheets&&t.count===0&&au(t,t.stylesheets),0<t.count?function(e){var l=setTimeout(function(){if(t.stylesheets&&au(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l)}}:null}function Ao(){if(this.count--,this.count===0){if(this.stylesheets)au(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Eo=null;function au(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Eo=new Map,e.forEach(kb,t),Eo=null,Ao.call(t))}function kb(t,e){if(!(e.state.loading&4)){var l=Eo.get(t);if(l)var a=l.get(null);else{l=new Map,Eo.set(t,l);for(var s=t.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<s.length;o++){var d=s[o];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(l.set(d.dataset.precedence,d),a=d)}a&&l.set(null,a)}s=e.instance,d=s.getAttribute("data-precedence"),o=l.get(d)||a,o===a&&l.set(null,s),l.set(d,s),this.count++,a=Ao.bind(this),s.addEventListener("load",a),s.addEventListener("error",a),o?o.parentNode.insertBefore(s,o.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(s,t.firstChild)),e.state.loading|=4}}var qn={$$typeof:O,Provider:null,Consumer:null,_currentValue:ct,_currentValue2:ct,_threadCount:0};function Ob(t,e,l,a,s,o,d,p){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nr(0),this.hiddenUpdates=nr(null),this.identifierPrefix=a,this.onUncaughtError=s,this.onCaughtError=o,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Hp(t,e,l,a,s,o,d,p,b,S,R,M){return t=new Ob(t,e,l,d,p,b,S,M),e=1,o===!0&&(e|=24),o=al(3,null,null,e),t.current=o,o.stateNode=t,e=Mr(),e.refCount++,t.pooledCache=e,e.refCount++,o.memoizedState={element:a,isDehydrated:l,cache:e},mc(o),t}function Bp(t){return t?(t=fi,t):fi}function Lp(t,e,l,a,s,o){s=Bp(s),a.context===null?a.context=s:a.pendingContext=s,a=ea(e),a.payload={element:l},o=o===void 0?null:o,o!==null&&(a.callback=o),l=la(t,a,e),l!==null&&(De(l,t,e),Cn(l,t,e))}function jp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function iu(t,e){jp(t,e),(t=t.alternate)&&jp(t,e)}function Vp(t){if(t.tag===13){var e=Kl(t,67108864);e!==null&&De(e,t,67108864),iu(t,67108864)}}var To=!0;function Db(t,e,l,a){var s=X.T;X.T=null;var o=L.p;try{L.p=2,nu(t,e,l,a)}finally{L.p=o,X.T=s}}function Rb(t,e,l,a){var s=X.T;X.T=null;var o=L.p;try{L.p=8,nu(t,e,l,a)}finally{L.p=o,X.T=s}}function nu(t,e,l,a){if(To){var s=su(a);if(s===null)Zc(t,e,a,ko,l),Yp(t,a);else if(Nb(s,t,e,l,a))a.stopPropagation();else if(Yp(t,a),e&4&&-1<$b.indexOf(t)){for(;s!==null;){var o=ei(s);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var d=Sa(o.pendingLanes);if(d!==0){var p=o;for(p.pendingLanes|=2,p.entangledLanes|=2;d;){var b=1<<31-Be(d);p.entanglements[1]|=b,d&=~b}_l(o),!(Xt&6)&&(fo=ml()+500,Un(0))}}break;case 13:p=Kl(o,2),p!==null&&De(p,o,2),mo(),iu(o,2)}if(o=su(a),o===null&&Zc(t,e,a,ko,l),o===s)break;s=o}s!==null&&a.stopPropagation()}else Zc(t,e,a,null,l)}}function su(t){return t=fr(t),ou(t)}var ko=null;function ou(t){if(ko=null,t=za(t),t!==null){var e=Z(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=mt(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return ko=t,null}function qp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vm()){case dd:return 2;case fd:return 8;case Ss:case ym:return 32;case hd:return 268435456;default:return 32}default:return 32}}var ru=!1,ca=null,ua=null,da=null,Yn=new Map,Xn=new Map,fa=[],$b="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yp(t,e){switch(t){case"focusin":case"focusout":ca=null;break;case"dragenter":case"dragleave":ua=null;break;case"mouseover":case"mouseout":da=null;break;case"pointerover":case"pointerout":Yn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(e.pointerId)}}function Gn(t,e,l,a,s,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:o,targetContainers:[s]},e!==null&&(e=ei(e),e!==null&&Vp(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Nb(t,e,l,a,s){switch(e){case"focusin":return ca=Gn(ca,t,e,l,a,s),!0;case"dragenter":return ua=Gn(ua,t,e,l,a,s),!0;case"mouseover":return da=Gn(da,t,e,l,a,s),!0;case"pointerover":var o=s.pointerId;return Yn.set(o,Gn(Yn.get(o)||null,t,e,l,a,s)),!0;case"gotpointercapture":return o=s.pointerId,Xn.set(o,Gn(Xn.get(o)||null,t,e,l,a,s)),!0}return!1}function Xp(t){var e=za(t.target);if(e!==null){var l=Z(e);if(l!==null){if(e=l.tag,e===13){if(e=mt(l),e!==null){t.blockedOn=e,Tm(t.priority,function(){if(l.tag===13){var a=Ye(),s=Kl(l,a);s!==null&&De(s,l,a),iu(l,a)}});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Oo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=su(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);dr=a,l.target.dispatchEvent(a),dr=null}else return e=ei(l),e!==null&&Vp(e),t.blockedOn=l,!1;e.shift()}return!0}function Gp(t,e,l){Oo(t)&&l.delete(e)}function Mb(){ru=!1,ca!==null&&Oo(ca)&&(ca=null),ua!==null&&Oo(ua)&&(ua=null),da!==null&&Oo(da)&&(da=null),Yn.forEach(Gp),Xn.forEach(Gp)}function Do(t,e){t.blockedOn===e&&(t.blockedOn=null,ru||(ru=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Mb)))}var Ro=null;function Qp(t){Ro!==t&&(Ro=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Ro===t&&(Ro=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],s=t[e+2];if(typeof a!="function"){if(ou(a||l)===null)continue;break}var o=ei(l);o!==null&&(t.splice(e,3),e-=3,Wr(o,{pending:!0,data:s,method:l.method,action:a},a,s))}}))}function Qn(t){function e(b){return Do(b,t)}ca!==null&&Do(ca,t),ua!==null&&Do(ua,t),da!==null&&Do(da,t),Yn.forEach(e),Xn.forEach(e);for(var l=0;l<fa.length;l++){var a=fa[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<fa.length&&(l=fa[0],l.blockedOn===null);)Xp(l),l.blockedOn===null&&fa.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var s=l[a],o=l[a+1],d=s[Re]||null;if(typeof o=="function")d||Qp(l);else if(d){var p=null;if(o&&o.hasAttribute("formAction")){if(s=o,d=o[Re]||null)p=d.formAction;else if(ou(s)!==null)continue}else p=d.action;typeof p=="function"?l[a+1]=p:(l.splice(a,3),a-=3),Qp(l)}}}function cu(t){this._internalRoot=t}$o.prototype.render=cu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(c(409));var l=e.current,a=Ye();Lp(l,a,t,e,null,null)},$o.prototype.unmount=cu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;t.tag===0&&ki(),Lp(t.current,2,null,t,null,null),mo(),e[ti]=null}};function $o(t){this._internalRoot=t}$o.prototype.unstable_scheduleHydration=function(t){if(t){var e=yd();t={blockedOn:null,target:t,priority:e};for(var l=0;l<fa.length&&e!==0&&e<fa[l].priority;l++);fa.splice(l,0,t),l===0&&Xp(t)}};var Zp=n.version;if(Zp!=="19.0.0")throw Error(c(527,Zp,"19.0.0"));L.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(c(188)):(t=Object.keys(t).join(","),Error(c(268,t)));return t=H(e),t=t!==null?P(t):null,t=t===null?null:t.stateNode,t};var Ub={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:X,findFiberByHostInstance:za,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var No=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!No.isDisabled&&No.supportsFiber)try{Ji=No.inject(Ub),He=No}catch{}}return Kn.createRoot=function(t,e){if(!u(t))throw Error(c(299));var l=!1,a="",s=uh,o=dh,d=fh,p=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(s=e.onUncaughtError),e.onCaughtError!==void 0&&(o=e.onCaughtError),e.onRecoverableError!==void 0&&(d=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(p=e.unstable_transitionCallbacks)),e=Hp(t,1,!1,null,null,l,a,s,o,d,p,null),t[ti]=e.current,Qc(t.nodeType===8?t.parentNode:t),new cu(e)},Kn.hydrateRoot=function(t,e,l){if(!u(t))throw Error(c(299));var a=!1,s="",o=uh,d=dh,p=fh,b=null,S=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(s=l.identifierPrefix),l.onUncaughtError!==void 0&&(o=l.onUncaughtError),l.onCaughtError!==void 0&&(d=l.onCaughtError),l.onRecoverableError!==void 0&&(p=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(b=l.unstable_transitionCallbacks),l.formState!==void 0&&(S=l.formState)),e=Hp(t,1,!0,e,l??null,a,s,o,d,p,b,S),e.context=Bp(null),l=e.current,a=Ye(),s=ea(a),s.callback=null,la(l,s,a),e.current.lanes=a,Ii(e,a),_l(e),t[ti]=e.current,Qc(t),new $o(e)},Kn.version="19.0.0",Kn}var a0;function Fb(){if(a0)return fu.exports;a0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(n){console.error(n)}}return i(),fu.exports=Kb(),fu.exports}var Jb=Fb();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lo=globalThis,ju=Lo.ShadowRoot&&(Lo.ShadyCSS===void 0||Lo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vu=Symbol(),i0=new WeakMap;let U0=class{constructor(n,r,c){if(this._$cssResult$=!0,c!==Vu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=n,this.t=r}get styleSheet(){let n=this.o;const r=this.t;if(ju&&n===void 0){const c=r!==void 0&&r.length===1;c&&(n=i0.get(r)),n===void 0&&((this.o=n=new CSSStyleSheet).replaceSync(this.cssText),c&&i0.set(r,n))}return n}toString(){return this.cssText}};const Wb=i=>new U0(typeof i=="string"?i:i+"",void 0,Vu),Ut=(i,...n)=>{const r=i.length===1?i[0]:n.reduce((c,u,f)=>c+(h=>{if(h._$cssResult$===!0)return h.cssText;if(typeof h=="number")return h;throw Error("Value passed to 'css' function must be a 'css' function result: "+h+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(u)+i[f+1],i[0]);return new U0(r,i,Vu)},Ib=(i,n)=>{if(ju)i.adoptedStyleSheets=n.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of n){const c=document.createElement("style"),u=Lo.litNonce;u!==void 0&&c.setAttribute("nonce",u),c.textContent=r.cssText,i.appendChild(c)}},n0=ju?i=>i:i=>i instanceof CSSStyleSheet?(n=>{let r="";for(const c of n.cssRules)r+=c.cssText;return Wb(r)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Pb,defineProperty:tv,getOwnPropertyDescriptor:ev,getOwnPropertyNames:lv,getOwnPropertySymbols:av,getPrototypeOf:iv}=Object,ba=globalThis,s0=ba.trustedTypes,nv=s0?s0.emptyScript:"",gu=ba.reactiveElementPolyfillSupport,is=(i,n)=>i,Li={toAttribute(i,n){switch(n){case Boolean:i=i?nv:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,n){let r=i;switch(n){case Boolean:r=i!==null;break;case Number:r=i===null?null:Number(i);break;case Object:case Array:try{r=JSON.parse(i)}catch{r=null}}return r}},qu=(i,n)=>!Pb(i,n),o0={attribute:!0,type:String,converter:Li,reflect:!1,hasChanged:qu};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ba.litPropertyMetadata??(ba.litPropertyMetadata=new WeakMap);class Mi extends HTMLElement{static addInitializer(n){this._$Ei(),(this.l??(this.l=[])).push(n)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(n,r=o0){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(n,r),!r.noAccessor){const c=Symbol(),u=this.getPropertyDescriptor(n,c,r);u!==void 0&&tv(this.prototype,n,u)}}static getPropertyDescriptor(n,r,c){const{get:u,set:f}=ev(this.prototype,n)??{get(){return this[r]},set(h){this[r]=h}};return{get(){return u==null?void 0:u.call(this)},set(h){const y=u==null?void 0:u.call(this);f.call(this,h),this.requestUpdate(n,y,c)},configurable:!0,enumerable:!0}}static getPropertyOptions(n){return this.elementProperties.get(n)??o0}static _$Ei(){if(this.hasOwnProperty(is("elementProperties")))return;const n=iv(this);n.finalize(),n.l!==void 0&&(this.l=[...n.l]),this.elementProperties=new Map(n.elementProperties)}static finalize(){if(this.hasOwnProperty(is("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(is("properties"))){const r=this.properties,c=[...lv(r),...av(r)];for(const u of c)this.createProperty(u,r[u])}const n=this[Symbol.metadata];if(n!==null){const r=litPropertyMetadata.get(n);if(r!==void 0)for(const[c,u]of r)this.elementProperties.set(c,u)}this._$Eh=new Map;for(const[r,c]of this.elementProperties){const u=this._$Eu(r,c);u!==void 0&&this._$Eh.set(u,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(n){const r=[];if(Array.isArray(n)){const c=new Set(n.flat(1/0).reverse());for(const u of c)r.unshift(n0(u))}else n!==void 0&&r.push(n0(n));return r}static _$Eu(n,r){const c=r.attribute;return c===!1?void 0:typeof c=="string"?c:typeof n=="string"?n.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var n;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(n=this.constructor.l)==null||n.forEach(r=>r(this))}addController(n){var r;(this._$EO??(this._$EO=new Set)).add(n),this.renderRoot!==void 0&&this.isConnected&&((r=n.hostConnected)==null||r.call(n))}removeController(n){var r;(r=this._$EO)==null||r.delete(n)}_$E_(){const n=new Map,r=this.constructor.elementProperties;for(const c of r.keys())this.hasOwnProperty(c)&&(n.set(c,this[c]),delete this[c]);n.size>0&&(this._$Ep=n)}createRenderRoot(){const n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ib(n,this.constructor.elementStyles),n}connectedCallback(){var n;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(n=this._$EO)==null||n.forEach(r=>{var c;return(c=r.hostConnected)==null?void 0:c.call(r)})}enableUpdating(n){}disconnectedCallback(){var n;(n=this._$EO)==null||n.forEach(r=>{var c;return(c=r.hostDisconnected)==null?void 0:c.call(r)})}attributeChangedCallback(n,r,c){this._$AK(n,c)}_$EC(n,r){var f;const c=this.constructor.elementProperties.get(n),u=this.constructor._$Eu(n,c);if(u!==void 0&&c.reflect===!0){const h=(((f=c.converter)==null?void 0:f.toAttribute)!==void 0?c.converter:Li).toAttribute(r,c.type);this._$Em=n,h==null?this.removeAttribute(u):this.setAttribute(u,h),this._$Em=null}}_$AK(n,r){var f;const c=this.constructor,u=c._$Eh.get(n);if(u!==void 0&&this._$Em!==u){const h=c.getPropertyOptions(u),y=typeof h.converter=="function"?{fromAttribute:h.converter}:((f=h.converter)==null?void 0:f.fromAttribute)!==void 0?h.converter:Li;this._$Em=u,this[u]=y.fromAttribute(r,h.type),this._$Em=null}}requestUpdate(n,r,c){if(n!==void 0){if(c??(c=this.constructor.getPropertyOptions(n)),!(c.hasChanged??qu)(this[n],r))return;this.P(n,r,c)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(n,r,c){this._$AL.has(n)||this._$AL.set(n,r),c.reflect===!0&&this._$Em!==n&&(this._$Ej??(this._$Ej=new Set)).add(n)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const n=this.scheduleUpdate();return n!=null&&await n,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var c;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[f,h]of this._$Ep)this[f]=h;this._$Ep=void 0}const u=this.constructor.elementProperties;if(u.size>0)for(const[f,h]of u)h.wrapped!==!0||this._$AL.has(f)||this[f]===void 0||this.P(f,this[f],h)}let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(c=this._$EO)==null||c.forEach(u=>{var f;return(f=u.hostUpdate)==null?void 0:f.call(u)}),this.update(r)):this._$EU()}catch(u){throw n=!1,this._$EU(),u}n&&this._$AE(r)}willUpdate(n){}_$AE(n){var r;(r=this._$EO)==null||r.forEach(c=>{var u;return(u=c.hostUpdated)==null?void 0:u.call(c)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(n)),this.updated(n)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(n){return!0}update(n){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(n){}firstUpdated(n){}}Mi.elementStyles=[],Mi.shadowRootOptions={mode:"open"},Mi[is("elementProperties")]=new Map,Mi[is("finalized")]=new Map,gu==null||gu({ReactiveElement:Mi}),(ba.reactiveElementVersions??(ba.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ns=globalThis,Yo=ns.trustedTypes,r0=Yo?Yo.createPolicy("lit-html",{createHTML:i=>i}):void 0,H0="$lit$",ma=`lit$${Math.random().toFixed(9).slice(2)}$`,B0="?"+ma,sv=`<${B0}>`,Fa=document,cs=()=>Fa.createComment(""),us=i=>i===null||typeof i!="object"&&typeof i!="function",Yu=Array.isArray,ov=i=>Yu(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",bu=`[ 	
\f\r]`,Fn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,c0=/-->/g,u0=/>/g,Ga=RegExp(`>|${bu}(?:([^\\s"'>=/]+)(${bu}*=${bu}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),d0=/'/g,f0=/"/g,L0=/^(?:script|style|textarea|title)$/i,rv=i=>(n,...r)=>({_$litType$:i,strings:n,values:r}),st=rv(1),sl=Symbol.for("lit-noChange"),Ft=Symbol.for("lit-nothing"),h0=new WeakMap,Ka=Fa.createTreeWalker(Fa,129);function j0(i,n){if(!Yu(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return r0!==void 0?r0.createHTML(n):n}const cv=(i,n)=>{const r=i.length-1,c=[];let u,f=n===2?"<svg>":n===3?"<math>":"",h=Fn;for(let y=0;y<r;y++){const v=i[y];let g,C,k=-1,N=0;for(;N<v.length&&(h.lastIndex=N,C=h.exec(v),C!==null);)N=h.lastIndex,h===Fn?C[1]==="!--"?h=c0:C[1]!==void 0?h=u0:C[2]!==void 0?(L0.test(C[2])&&(u=RegExp("</"+C[2],"g")),h=Ga):C[3]!==void 0&&(h=Ga):h===Ga?C[0]===">"?(h=u??Fn,k=-1):C[1]===void 0?k=-2:(k=h.lastIndex-C[2].length,g=C[1],h=C[3]===void 0?Ga:C[3]==='"'?f0:d0):h===f0||h===d0?h=Ga:h===c0||h===u0?h=Fn:(h=Ga,u=void 0);const O=h===Ga&&i[y+1].startsWith("/>")?" ":"";f+=h===Fn?v+sv:k>=0?(c.push(g),v.slice(0,k)+H0+v.slice(k)+ma+O):v+ma+(k===-2?y:O)}return[j0(i,f+(i[r]||"<?>")+(n===2?"</svg>":n===3?"</math>":"")),c]};class ds{constructor({strings:n,_$litType$:r},c){let u;this.parts=[];let f=0,h=0;const y=n.length-1,v=this.parts,[g,C]=cv(n,r);if(this.el=ds.createElement(g,c),Ka.currentNode=this.el.content,r===2||r===3){const k=this.el.content.firstChild;k.replaceWith(...k.childNodes)}for(;(u=Ka.nextNode())!==null&&v.length<y;){if(u.nodeType===1){if(u.hasAttributes())for(const k of u.getAttributeNames())if(k.endsWith(H0)){const N=C[h++],O=u.getAttribute(k).split(ma),U=/([.?@])?(.*)/.exec(N);v.push({type:1,index:f,name:U[2],strings:O,ctor:U[1]==="."?dv:U[1]==="?"?fv:U[1]==="@"?hv:Fo}),u.removeAttribute(k)}else k.startsWith(ma)&&(v.push({type:6,index:f}),u.removeAttribute(k));if(L0.test(u.tagName)){const k=u.textContent.split(ma),N=k.length-1;if(N>0){u.textContent=Yo?Yo.emptyScript:"";for(let O=0;O<N;O++)u.append(k[O],cs()),Ka.nextNode(),v.push({type:2,index:++f});u.append(k[N],cs())}}}else if(u.nodeType===8)if(u.data===B0)v.push({type:2,index:f});else{let k=-1;for(;(k=u.data.indexOf(ma,k+1))!==-1;)v.push({type:7,index:f}),k+=ma.length-1}f++}}static createElement(n,r){const c=Fa.createElement("template");return c.innerHTML=n,c}}function ji(i,n,r=i,c){var h,y;if(n===sl)return n;let u=c!==void 0?(h=r._$Co)==null?void 0:h[c]:r._$Cl;const f=us(n)?void 0:n._$litDirective$;return(u==null?void 0:u.constructor)!==f&&((y=u==null?void 0:u._$AO)==null||y.call(u,!1),f===void 0?u=void 0:(u=new f(i),u._$AT(i,r,c)),c!==void 0?(r._$Co??(r._$Co=[]))[c]=u:r._$Cl=u),u!==void 0&&(n=ji(i,u._$AS(i,n.values),u,c)),n}class uv{constructor(n,r){this._$AV=[],this._$AN=void 0,this._$AD=n,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(n){const{el:{content:r},parts:c}=this._$AD,u=((n==null?void 0:n.creationScope)??Fa).importNode(r,!0);Ka.currentNode=u;let f=Ka.nextNode(),h=0,y=0,v=c[0];for(;v!==void 0;){if(h===v.index){let g;v.type===2?g=new ps(f,f.nextSibling,this,n):v.type===1?g=new v.ctor(f,v.name,v.strings,this,n):v.type===6&&(g=new pv(f,this,n)),this._$AV.push(g),v=c[++y]}h!==(v==null?void 0:v.index)&&(f=Ka.nextNode(),h++)}return Ka.currentNode=Fa,u}p(n){let r=0;for(const c of this._$AV)c!==void 0&&(c.strings!==void 0?(c._$AI(n,c,r),r+=c.strings.length-2):c._$AI(n[r])),r++}}class ps{get _$AU(){var n;return((n=this._$AM)==null?void 0:n._$AU)??this._$Cv}constructor(n,r,c,u){this.type=2,this._$AH=Ft,this._$AN=void 0,this._$AA=n,this._$AB=r,this._$AM=c,this.options=u,this._$Cv=(u==null?void 0:u.isConnected)??!0}get parentNode(){let n=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(n==null?void 0:n.nodeType)===11&&(n=r.parentNode),n}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(n,r=this){n=ji(this,n,r),us(n)?n===Ft||n==null||n===""?(this._$AH!==Ft&&this._$AR(),this._$AH=Ft):n!==this._$AH&&n!==sl&&this._(n):n._$litType$!==void 0?this.$(n):n.nodeType!==void 0?this.T(n):ov(n)?this.k(n):this._(n)}O(n){return this._$AA.parentNode.insertBefore(n,this._$AB)}T(n){this._$AH!==n&&(this._$AR(),this._$AH=this.O(n))}_(n){this._$AH!==Ft&&us(this._$AH)?this._$AA.nextSibling.data=n:this.T(Fa.createTextNode(n)),this._$AH=n}$(n){var f;const{values:r,_$litType$:c}=n,u=typeof c=="number"?this._$AC(n):(c.el===void 0&&(c.el=ds.createElement(j0(c.h,c.h[0]),this.options)),c);if(((f=this._$AH)==null?void 0:f._$AD)===u)this._$AH.p(r);else{const h=new uv(u,this),y=h.u(this.options);h.p(r),this.T(y),this._$AH=h}}_$AC(n){let r=h0.get(n.strings);return r===void 0&&h0.set(n.strings,r=new ds(n)),r}k(n){Yu(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let c,u=0;for(const f of n)u===r.length?r.push(c=new ps(this.O(cs()),this.O(cs()),this,this.options)):c=r[u],c._$AI(f),u++;u<r.length&&(this._$AR(c&&c._$AB.nextSibling,u),r.length=u)}_$AR(n=this._$AA.nextSibling,r){var c;for((c=this._$AP)==null?void 0:c.call(this,!1,!0,r);n&&n!==this._$AB;){const u=n.nextSibling;n.remove(),n=u}}setConnected(n){var r;this._$AM===void 0&&(this._$Cv=n,(r=this._$AP)==null||r.call(this,n))}}class Fo{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(n,r,c,u,f){this.type=1,this._$AH=Ft,this._$AN=void 0,this.element=n,this.name=r,this._$AM=u,this.options=f,c.length>2||c[0]!==""||c[1]!==""?(this._$AH=Array(c.length-1).fill(new String),this.strings=c):this._$AH=Ft}_$AI(n,r=this,c,u){const f=this.strings;let h=!1;if(f===void 0)n=ji(this,n,r,0),h=!us(n)||n!==this._$AH&&n!==sl,h&&(this._$AH=n);else{const y=n;let v,g;for(n=f[0],v=0;v<f.length-1;v++)g=ji(this,y[c+v],r,v),g===sl&&(g=this._$AH[v]),h||(h=!us(g)||g!==this._$AH[v]),g===Ft?n=Ft:n!==Ft&&(n+=(g??"")+f[v+1]),this._$AH[v]=g}h&&!u&&this.j(n)}j(n){n===Ft?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,n??"")}}class dv extends Fo{constructor(){super(...arguments),this.type=3}j(n){this.element[this.name]=n===Ft?void 0:n}}class fv extends Fo{constructor(){super(...arguments),this.type=4}j(n){this.element.toggleAttribute(this.name,!!n&&n!==Ft)}}class hv extends Fo{constructor(n,r,c,u,f){super(n,r,c,u,f),this.type=5}_$AI(n,r=this){if((n=ji(this,n,r,0)??Ft)===sl)return;const c=this._$AH,u=n===Ft&&c!==Ft||n.capture!==c.capture||n.once!==c.once||n.passive!==c.passive,f=n!==Ft&&(c===Ft||u);u&&this.element.removeEventListener(this.name,this,c),f&&this.element.addEventListener(this.name,this,n),this._$AH=n}handleEvent(n){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,n):this._$AH.handleEvent(n)}}class pv{constructor(n,r,c){this.element=n,this.type=6,this._$AN=void 0,this._$AM=r,this.options=c}get _$AU(){return this._$AM._$AU}_$AI(n){ji(this,n)}}const vu=ns.litHtmlPolyfillSupport;vu==null||vu(ds,ps),(ns.litHtmlVersions??(ns.litHtmlVersions=[])).push("3.2.1");const mv=(i,n,r)=>{const c=(r==null?void 0:r.renderBefore)??n;let u=c._$litPart$;if(u===void 0){const f=(r==null?void 0:r.renderBefore)??null;c._$litPart$=u=new ps(n.insertBefore(cs(),f),f,void 0,r??{})}return u._$AI(i),u};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ss=class extends Mi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const n=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=n.firstChild),n}update(n){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(n),this._$Do=mv(r,this.renderRoot,this.renderOptions)}connectedCallback(){var n;super.connectedCallback(),(n=this._$Do)==null||n.setConnected(!0)}disconnectedCallback(){var n;super.disconnectedCallback(),(n=this._$Do)==null||n.setConnected(!1)}render(){return sl}};var M0;ss._$litElement$=!0,ss.finalized=!0,(M0=globalThis.litElementHydrateSupport)==null||M0.call(globalThis,{LitElement:ss});const yu=globalThis.litElementPolyfillSupport;yu==null||yu({LitElement:ss});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");var gv=Ut`
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
`;const Tu=new Set,Ui=new Map;let Za,Xu="ltr",Gu="en";const V0=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(V0){const i=new MutationObserver(Y0);Xu=document.documentElement.dir||"ltr",Gu=document.documentElement.lang||navigator.language,i.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function q0(...i){i.map(n=>{const r=n.$code.toLowerCase();Ui.has(r)?Ui.set(r,Object.assign(Object.assign({},Ui.get(r)),n)):Ui.set(r,n),Za||(Za=n)}),Y0()}function Y0(){V0&&(Xu=document.documentElement.dir||"ltr",Gu=document.documentElement.lang||navigator.language),[...Tu.keys()].map(i=>{typeof i.requestUpdate=="function"&&i.requestUpdate()})}let bv=class{constructor(n){this.host=n,this.host.addController(this)}hostConnected(){Tu.add(this.host)}hostDisconnected(){Tu.delete(this.host)}dir(){return`${this.host.dir||Xu}`.toLowerCase()}lang(){return`${this.host.lang||Gu}`.toLowerCase()}getTranslationData(n){var r,c;const u=new Intl.Locale(n.replace(/_/g,"-")),f=u==null?void 0:u.language.toLowerCase(),h=(c=(r=u==null?void 0:u.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&c!==void 0?c:"",y=Ui.get(`${f}-${h}`),v=Ui.get(f);return{locale:u,language:f,region:h,primary:y,secondary:v}}exists(n,r){var c;const{primary:u,secondary:f}=this.getTranslationData((c=r.lang)!==null&&c!==void 0?c:this.lang());return r=Object.assign({includeFallback:!1},r),!!(u&&u[n]||f&&f[n]||r.includeFallback&&Za&&Za[n])}term(n,...r){const{primary:c,secondary:u}=this.getTranslationData(this.lang());let f;if(c&&c[n])f=c[n];else if(u&&u[n])f=u[n];else if(Za&&Za[n])f=Za[n];else return console.error(`No translation found for: ${String(n)}`),String(n);return typeof f=="function"?f(...r):f}date(n,r){return n=new Date(n),new Intl.DateTimeFormat(this.lang(),r).format(n)}number(n,r){return n=Number(n),isNaN(n)?"":new Intl.NumberFormat(this.lang(),r).format(n)}relativeTime(n,r,c){return new Intl.RelativeTimeFormat(this.lang(),c).format(n,r)}};var X0={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(i,n)=>`Go to slide ${i} of ${n}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:i=>i===0?"No options selected":i===1?"1 option selected":`${i} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:i=>`Slide ${i}`,toggleColorFormat:"Toggle color format"};q0(X0);var vv=X0,Me=class extends bv{};q0(vv);var jt=Ut`
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
`,G0=Object.defineProperty,yv=Object.defineProperties,_v=Object.getOwnPropertyDescriptor,xv=Object.getOwnPropertyDescriptors,p0=Object.getOwnPropertySymbols,wv=Object.prototype.hasOwnProperty,Sv=Object.prototype.propertyIsEnumerable,_u=(i,n)=>(n=Symbol[i])?n:Symbol.for("Symbol."+i),Qu=i=>{throw TypeError(i)},m0=(i,n,r)=>n in i?G0(i,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[n]=r,xa=(i,n)=>{for(var r in n||(n={}))wv.call(n,r)&&m0(i,r,n[r]);if(p0)for(var r of p0(n))Sv.call(n,r)&&m0(i,r,n[r]);return i},ms=(i,n)=>yv(i,xv(n)),m=(i,n,r,c)=>{for(var u=c>1?void 0:c?_v(n,r):n,f=i.length-1,h;f>=0;f--)(h=i[f])&&(u=(c?h(n,r,u):h(u))||u);return c&&u&&G0(n,r,u),u},Q0=(i,n,r)=>n.has(i)||Qu("Cannot "+r),zv=(i,n,r)=>(Q0(i,n,"read from private field"),n.get(i)),Cv=(i,n,r)=>n.has(i)?Qu("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(i):n.set(i,r),Av=(i,n,r,c)=>(Q0(i,n,"write to private field"),n.set(i,r),r),Ev=function(i,n){this[0]=i,this[1]=n},Tv=i=>{var n=i[_u("asyncIterator")],r=!1,c,u={};return n==null?(n=i[_u("iterator")](),c=f=>u[f]=h=>n[f](h)):(n=n.call(i),c=f=>u[f]=h=>{if(r){if(r=!1,f==="throw")throw h;return h}return r=!0,{done:!1,value:new Ev(new Promise(y=>{var v=n[f](h);v instanceof Object||Qu("Object expected"),y(v)}),1)}}),u[_u("iterator")]=()=>u,c("next"),"throw"in n?c("throw"):u.throw=f=>{throw f},"return"in n&&c("return"),u};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kv={attribute:!0,type:String,converter:Li,reflect:!1,hasChanged:qu},Ov=(i=kv,n,r)=>{const{kind:c,metadata:u}=r;let f=globalThis.litPropertyMetadata.get(u);if(f===void 0&&globalThis.litPropertyMetadata.set(u,f=new Map),f.set(r.name,i),c==="accessor"){const{name:h}=r;return{set(y){const v=n.get.call(this);n.set.call(this,y),this.requestUpdate(h,v,i)},init(y){return y!==void 0&&this.P(h,void 0,i),y}}}if(c==="setter"){const{name:h}=r;return function(y){const v=this[h];n.call(this,y),this.requestUpdate(h,v,i)}}throw Error("Unsupported decorator location: "+c)};function _(i){return(n,r)=>typeof r=="object"?Ov(i,n,r):((c,u,f)=>{const h=u.hasOwnProperty(f);return u.constructor.createProperty(f,h?{...c,wrapped:!0}:c),h?Object.getOwnPropertyDescriptor(u,f):void 0})(i,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Bt(i){return _({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z0=(i,n,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof n!="object"&&Object.defineProperty(i,n,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ft(i,n){return(r,c,u)=>{const f=h=>{var y;return((y=h.renderRoot)==null?void 0:y.querySelector(i))??null};return Z0(r,c,{get(){return f(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Dv(i){return(n,r)=>Z0(n,r,{async get(){var c;return await this.updateComplete,((c=this.renderRoot)==null?void 0:c.querySelector(i))??null}})}var jo,kt=class extends ss{constructor(){super(),Cv(this,jo,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([i,n])=>{this.constructor.define(i,n)})}emit(i,n){const r=new CustomEvent(i,xa({bubbles:!0,cancelable:!1,composed:!0,detail:{}},n));return this.dispatchEvent(r),r}static define(i,n=this,r={}){const c=customElements.get(i);if(!c){try{customElements.define(i,n,r)}catch{customElements.define(i,class extends n{},r)}return}let u=" (unknown version)",f=u;"version"in n&&n.version&&(u=" v"+n.version),"version"in c&&c.version&&(f=" v"+c.version),!(u&&f&&u===f)&&console.warn(`Attempted to register <${i}>${u}, but <${i}>${f} has already been registered.`)}attributeChangedCallback(i,n,r){zv(this,jo)||(this.constructor.elementProperties.forEach((c,u)=>{c.reflect&&this[u]!=null&&this.initialReflectedProperties.set(u,this[u])}),Av(this,jo,!0)),super.attributeChangedCallback(i,n,r)}willUpdate(i){super.willUpdate(i),this.initialReflectedProperties.forEach((n,r)=>{i.has(r)&&this[r]==null&&(this[r]=n)})}};jo=new WeakMap;kt.version="2.20.0";kt.dependencies={};m([_()],kt.prototype,"dir",2);m([_()],kt.prototype,"lang",2);var gs=class extends kt{constructor(){super(...arguments),this.localize=new Me(this)}render(){return st`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};gs.styles=[jt,gv];var Jn=new WeakMap,Wn=new WeakMap,In=new WeakMap,xu=new WeakSet,Mo=new WeakMap,Yi=class{constructor(i,n){this.handleFormData=r=>{const c=this.options.disabled(this.host),u=this.options.name(this.host),f=this.options.value(this.host),h=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!c&&!h&&typeof u=="string"&&u.length>0&&typeof f<"u"&&(Array.isArray(f)?f.forEach(y=>{r.formData.append(u,y.toString())}):r.formData.append(u,f.toString()))},this.handleFormSubmit=r=>{var c;const u=this.options.disabled(this.host),f=this.options.reportValidity;this.form&&!this.form.noValidate&&((c=Jn.get(this.form))==null||c.forEach(h=>{this.setUserInteracted(h,!0)})),this.form&&!this.form.noValidate&&!u&&!f(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Mo.set(this.host,[])},this.handleInteraction=r=>{const c=Mo.get(this.host);c.includes(r.type)||c.push(r.type),c.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const c of r)if(typeof c.checkValidity=="function"&&!c.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const c of r)if(typeof c.reportValidity=="function"&&!c.reportValidity())return!1}return!0},(this.host=i).addController(this),this.options=xa({form:r=>{const c=r.form;if(c){const f=r.getRootNode().querySelector(`#${c}`);if(f)return f}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var c;return(c=r.disabled)!=null?c:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,c)=>r.value=c,assumeInteractionOn:["sl-input"]},n)}hostConnected(){const i=this.options.form(this.host);i&&this.attachForm(i),Mo.set(this.host,[]),this.options.assumeInteractionOn.forEach(n=>{this.host.addEventListener(n,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Mo.delete(this.host),this.options.assumeInteractionOn.forEach(i=>{this.host.removeEventListener(i,this.handleInteraction)})}hostUpdated(){const i=this.options.form(this.host);i||this.detachForm(),i&&this.form!==i&&(this.detachForm(),this.attachForm(i)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(i){i?(this.form=i,Jn.has(this.form)?Jn.get(this.form).add(this.host):Jn.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Wn.has(this.form)||(Wn.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),In.has(this.form)||(In.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const i=Jn.get(this.form);i&&(i.delete(this.host),i.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Wn.has(this.form)&&(this.form.reportValidity=Wn.get(this.form),Wn.delete(this.form)),In.has(this.form)&&(this.form.checkValidity=In.get(this.form),In.delete(this.form)),this.form=void 0))}setUserInteracted(i,n){n?xu.add(i):xu.delete(i),i.requestUpdate()}doAction(i,n){if(this.form){const r=document.createElement("button");r.type=i,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",n&&(r.name=n.name,r.value=n.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(c=>{n.hasAttribute(c)&&r.setAttribute(c,n.getAttribute(c))})),this.form.append(r),r.click(),r.remove()}}getForm(){var i;return(i=this.form)!=null?i:null}reset(i){this.doAction("reset",i)}submit(i){this.doAction("submit",i)}setValidity(i){const n=this.host,r=!!xu.has(n),c=!!n.required;n.toggleAttribute("data-required",c),n.toggleAttribute("data-optional",!c),n.toggleAttribute("data-invalid",!i),n.toggleAttribute("data-valid",i),n.toggleAttribute("data-user-invalid",!i&&r),n.toggleAttribute("data-user-valid",i&&r)}updateValidity(){const i=this.host;this.setValidity(i.validity.valid)}emitInvalidEvent(i){const n=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});i||n.preventDefault(),this.host.dispatchEvent(n)||i==null||i.preventDefault()}},Zu=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(ms(xa({},Zu),{valid:!1,valueMissing:!0}));Object.freeze(ms(xa({},Zu),{valid:!1,customError:!0}));var Rv=Ut`
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
`,Cl=class{constructor(i,...n){this.slotNames=[],this.handleSlotChange=r=>{const c=r.target;(this.slotNames.includes("[default]")&&!c.name||c.name&&this.slotNames.includes(c.name))&&this.host.requestUpdate()},(this.host=i).addController(this),this.slotNames=n}hasDefaultSlot(){return[...this.host.childNodes].some(i=>{if(i.nodeType===i.TEXT_NODE&&i.textContent.trim()!=="")return!0;if(i.nodeType===i.ELEMENT_NODE){const n=i;if(n.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!n.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(i){return this.host.querySelector(`:scope > [slot="${i}"]`)!==null}test(i){return i==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(i)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},ku="";function Ou(i){ku=i}function $v(i=""){if(!ku){const n=[...document.getElementsByTagName("script")],r=n.find(c=>c.hasAttribute("data-shoelace"));if(r)Ou(r.getAttribute("data-shoelace"));else{const c=n.find(f=>/shoelace(\.min)?\.js($|\?)/.test(f.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(f.src));let u="";c&&(u=c.getAttribute("src")),Ou(u.split("/").slice(0,-1).join("/"))}}return ku.replace(/\/$/,"")+(i?`/${i.replace(/^\//,"")}`:"")}var Nv={name:"default",resolver:i=>$v(`assets/icons/${i}.svg`)},Mv=Nv,g0={caret:`
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
  `},Uv={name:"system",resolver:i=>i in g0?`data:image/svg+xml,${encodeURIComponent(g0[i])}`:""},Hv=Uv,Bv=[Mv,Hv],Du=[];function Lv(i){Du.push(i)}function jv(i){Du=Du.filter(n=>n!==i)}function b0(i){return Bv.find(n=>n.name===i)}var Vv=Ut`
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
`;function pt(i,n){const r=xa({waitUntilFirstUpdate:!1},n);return(c,u)=>{const{update:f}=c,h=Array.isArray(i)?i:[i];c.update=function(y){h.forEach(v=>{const g=v;if(y.has(g)){const C=y.get(g),k=this[g];C!==k&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[u](C,k)}}),f.call(this,y)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qv=(i,n)=>(i==null?void 0:i._$litType$)!==void 0,Yv=i=>i.strings===void 0,Xv={},Gv=(i,n=Xv)=>i._$AH=n;var Pn=Symbol(),Uo=Symbol(),wu,Su=new Map,ve=class extends kt{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(i,n){var r;let c;if(n!=null&&n.spriteSheet)return this.svg=st`<svg part="svg">
        <use part="use" href="${i}"></use>
      </svg>`,this.svg;try{if(c=await fetch(i,{mode:"cors"}),!c.ok)return c.status===410?Pn:Uo}catch{return Uo}try{const u=document.createElement("div");u.innerHTML=await c.text();const f=u.firstElementChild;if(((r=f==null?void 0:f.tagName)==null?void 0:r.toLowerCase())!=="svg")return Pn;wu||(wu=new DOMParser);const y=wu.parseFromString(f.outerHTML,"text/html").body.querySelector("svg");return y?(y.part.add("svg"),document.adoptNode(y)):Pn}catch{return Pn}}connectedCallback(){super.connectedCallback(),Lv(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),jv(this)}getIconSource(){const i=b0(this.library);return this.name&&i?{url:i.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var i;const{url:n,fromLibrary:r}=this.getIconSource(),c=r?b0(this.library):void 0;if(!n){this.svg=null;return}let u=Su.get(n);if(u||(u=this.resolveIcon(n,c),Su.set(n,u)),!this.initialRender)return;const f=await u;if(f===Uo&&Su.delete(n),n===this.getIconSource().url){if(qv(f)){if(this.svg=f,c){await this.updateComplete;const h=this.shadowRoot.querySelector("[part='svg']");typeof c.mutator=="function"&&h&&c.mutator(h)}return}switch(f){case Uo:case Pn:this.svg=null,this.emit("sl-error");break;default:this.svg=f.cloneNode(!0),(i=c==null?void 0:c.mutator)==null||i.call(c,this.svg),this.emit("sl-load")}}}render(){return this.svg}};ve.styles=[jt,Vv];m([Bt()],ve.prototype,"svg",2);m([_({reflect:!0})],ve.prototype,"name",2);m([_()],ve.prototype,"src",2);m([_()],ve.prototype,"label",2);m([_({reflect:!0})],ve.prototype,"library",2);m([pt("label")],ve.prototype,"handleLabelChange",1);m([pt(["name","src","library"])],ve.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pa={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Ku=i=>(...n)=>({_$litDirective$:i,values:n});let Fu=class{constructor(n){}get _$AU(){return this._$AM._$AU}_$AT(n,r,c){this._$Ct=n,this._$AM=r,this._$Ci=c}_$AS(n,r){return this.update(n,r)}update(n,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=Ku(class extends Fu{constructor(i){var n;if(super(i),i.type!==pa.ATTRIBUTE||i.name!=="class"||((n=i.strings)==null?void 0:n.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(n=>i[n]).join(" ")+" "}update(i,[n]){var c,u;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(f=>f!=="")));for(const f in n)n[f]&&!((c=this.nt)!=null&&c.has(f))&&this.st.add(f);return this.render(n)}const r=i.element.classList;for(const f of this.st)f in n||(r.remove(f),this.st.delete(f));for(const f in n){const h=!!n[f];h===this.st.has(f)||(u=this.nt)!=null&&u.has(f)||(h?(r.add(f),this.st.add(f)):(r.remove(f),this.st.delete(f)))}return sl}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K0=Symbol.for(""),Qv=i=>{if((i==null?void 0:i.r)===K0)return i==null?void 0:i._$litStatic$},Xo=(i,...n)=>({_$litStatic$:n.reduce((r,c,u)=>r+(f=>{if(f._$litStatic$!==void 0)return f._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${f}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(c)+i[u+1],i[0]),r:K0}),v0=new Map,Zv=i=>(n,...r)=>{const c=r.length;let u,f;const h=[],y=[];let v,g=0,C=!1;for(;g<c;){for(v=n[g];g<c&&(f=r[g],(u=Qv(f))!==void 0);)v+=u+n[++g],C=!0;g!==c&&y.push(f),h.push(v),g++}if(g===c&&h.push(n[c]),C){const k=h.join("$$lit$$");(n=v0.get(k))===void 0&&(h.raw=h,v0.set(k,n=h)),r=y}return i(n,...r)},Vo=Zv(st);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=i=>i??Ft;var At=class extends kt{constructor(){super(...arguments),this.formControlController=new Yi(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Cl(this,"[default]","prefix","suffix"),this.localize=new Me(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Zu}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(i){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(i)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(i){this.button.focus(i)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(i){this.isButton()&&(this.button.setCustomValidity(i),this.formControlController.updateValidity())}render(){const i=this.isLink(),n=i?Xo`a`:Xo`button`;return Vo`
      <${n}
        part="base"
        class=${Mt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${et(i?void 0:this.disabled)}
        type=${et(i?void 0:this.type)}
        title=${this.title}
        name=${et(i?void 0:this.name)}
        value=${et(i?void 0:this.value)}
        href=${et(i&&!this.disabled?this.href:void 0)}
        target=${et(i?this.target:void 0)}
        download=${et(i?this.download:void 0)}
        rel=${et(i?this.rel:void 0)}
        role=${et(i?void 0:"button")}
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
        ${this.caret?Vo` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Vo`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${n}>
    `}};At.styles=[jt,Rv];At.dependencies={"sl-icon":ve,"sl-spinner":gs};m([ft(".button")],At.prototype,"button",2);m([Bt()],At.prototype,"hasFocus",2);m([Bt()],At.prototype,"invalid",2);m([_()],At.prototype,"title",2);m([_({reflect:!0})],At.prototype,"variant",2);m([_({reflect:!0})],At.prototype,"size",2);m([_({type:Boolean,reflect:!0})],At.prototype,"caret",2);m([_({type:Boolean,reflect:!0})],At.prototype,"disabled",2);m([_({type:Boolean,reflect:!0})],At.prototype,"loading",2);m([_({type:Boolean,reflect:!0})],At.prototype,"outline",2);m([_({type:Boolean,reflect:!0})],At.prototype,"pill",2);m([_({type:Boolean,reflect:!0})],At.prototype,"circle",2);m([_()],At.prototype,"type",2);m([_()],At.prototype,"name",2);m([_()],At.prototype,"value",2);m([_()],At.prototype,"href",2);m([_()],At.prototype,"target",2);m([_()],At.prototype,"rel",2);m([_()],At.prototype,"download",2);m([_()],At.prototype,"form",2);m([_({attribute:"formaction"})],At.prototype,"formAction",2);m([_({attribute:"formenctype"})],At.prototype,"formEnctype",2);m([_({attribute:"formmethod"})],At.prototype,"formMethod",2);m([_({attribute:"formnovalidate",type:Boolean})],At.prototype,"formNoValidate",2);m([_({attribute:"formtarget"})],At.prototype,"formTarget",2);m([pt("disabled",{waitUntilFirstUpdate:!0})],At.prototype,"handleDisabledChange",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kv=new Set(["children","localName","ref","style","className"]),y0=new WeakMap,_0=(i,n,r,c,u)=>{const f=u==null?void 0:u[n];f===void 0?(i[n]=r,r==null&&n in HTMLElement.prototype&&i.removeAttribute(n)):r!==c&&((h,y,v)=>{let g=y0.get(h);g===void 0&&y0.set(h,g=new Map);let C=g.get(y);v!==void 0?C===void 0?(g.set(y,C={handleEvent:v}),h.addEventListener(y,C)):C.handleEvent=v:C!==void 0&&(g.delete(y),h.removeEventListener(y,C))})(i,f,r)},Wt=({react:i,tagName:n,elementClass:r,events:c,displayName:u})=>{const f=new Set(Object.keys(c??{})),h=i.forwardRef((y,v)=>{const g=i.useRef(new Map),C=i.useRef(null),k={},N={};for(const[O,U]of Object.entries(y))Kv.has(O)?k[O==="className"?"class":O]=U:f.has(O)||O in r.prototype?N[O]=U:k[O]=U;return i.useLayoutEffect(()=>{if(C.current===null)return;const O=new Map;for(const U in N)_0(C.current,U,y[U],g.current.get(U),c),g.current.delete(U),O.set(U,y[U]);for(const[U,V]of g.current)_0(C.current,U,void 0,V,c);g.current=O}),i.useLayoutEffect(()=>{var O;(O=C.current)==null||O.removeAttribute("defer-hydration")},[]),k.suppressHydrationWarning=!0,i.createElement(n,{...k,ref:i.useCallback(O=>{C.current=O,typeof v=="function"?v(O):v!==null&&(v.current=O)},[v])})});return h.displayName=u??r.name,h};var Fv="sl-button";At.define("sl-button");var Jv=Wt({tagName:Fv,elementClass:At,react:Jt,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlButton"}),Ee=Jv,Wv=Ut`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Xi=class extends kt{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(i){const n=ts(i.target);n==null||n.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(i){const n=ts(i.target);n==null||n.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(i){const n=ts(i.target);n==null||n.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(i){const n=ts(i.target);n==null||n.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const i=[...this.defaultSlot.assignedElements({flatten:!0})];i.forEach(n=>{const r=i.indexOf(n),c=ts(n);c&&(c.toggleAttribute("data-sl-button-group__button",!0),c.toggleAttribute("data-sl-button-group__button--first",r===0),c.toggleAttribute("data-sl-button-group__button--inner",r>0&&r<i.length-1),c.toggleAttribute("data-sl-button-group__button--last",r===i.length-1),c.toggleAttribute("data-sl-button-group__button--radio",c.tagName.toLowerCase()==="sl-radio-button"))})}render(){return st`
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
    `}};Xi.styles=[jt,Wv];m([ft("slot")],Xi.prototype,"defaultSlot",2);m([Bt()],Xi.prototype,"disableRole",2);m([_()],Xi.prototype,"label",2);function ts(i){var n;const r="sl-button, sl-radio-button";return(n=i.closest(r))!=null?n:i.querySelector(r)}var Iv="sl-button-group";Xi.define("sl-button-group");var Pv=Wt({tagName:Iv,elementClass:Xi,react:Jt,events:{},displayName:"SlButtonGroup"}),Ju=Pv,ty="sl-icon";ve.define("sl-icon");var ey=Wt({tagName:ty,elementClass:ve,react:Jt,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlIcon"}),xl=ey,ly=Ut`
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
`,ye=class extends kt{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(i){this.disabled&&(i.preventDefault(),i.stopPropagation())}click(){this.button.click()}focus(i){this.button.focus(i)}blur(){this.button.blur()}render(){const i=!!this.href,n=i?Xo`a`:Xo`button`;return Vo`
      <${n}
        part="base"
        class=${Mt({"icon-button":!0,"icon-button--disabled":!i&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${et(i?void 0:this.disabled)}
        type=${et(i?void 0:"button")}
        href=${et(i?this.href:void 0)}
        target=${et(i?this.target:void 0)}
        download=${et(i?this.download:void 0)}
        rel=${et(i&&this.target?"noreferrer noopener":void 0)}
        role=${et(i?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${et(this.name)}
          library=${et(this.library)}
          src=${et(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${n}>
    `}};ye.styles=[jt,ly];ye.dependencies={"sl-icon":ve};m([ft(".icon-button")],ye.prototype,"button",2);m([Bt()],ye.prototype,"hasFocus",2);m([_()],ye.prototype,"name",2);m([_()],ye.prototype,"library",2);m([_()],ye.prototype,"src",2);m([_()],ye.prototype,"href",2);m([_()],ye.prototype,"target",2);m([_()],ye.prototype,"download",2);m([_()],ye.prototype,"label",2);m([_({type:Boolean,reflect:!0})],ye.prototype,"disabled",2);var ay="sl-icon-button";ye.define("sl-icon-button");var iy=Wt({tagName:ay,elementClass:ye,react:Jt,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlIconButton"}),zu=iy,ny=Ut`
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
`,x0=new WeakMap;function F0(i){let n=x0.get(i);return n||(n=window.getComputedStyle(i,null),x0.set(i,n)),n}function sy(i){if(typeof i.checkVisibility=="function")return i.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const n=F0(i);return n.visibility!=="hidden"&&n.display!=="none"}function oy(i){const n=F0(i),{overflowY:r,overflowX:c}=n;return r==="scroll"||c==="scroll"?!0:r!=="auto"||c!=="auto"?!1:i.scrollHeight>i.clientHeight&&r==="auto"||i.scrollWidth>i.clientWidth&&c==="auto"}function ry(i){const n=i.tagName.toLowerCase(),r=Number(i.getAttribute("tabindex"));if(i.hasAttribute("tabindex")&&(isNaN(r)||r<=-1)||i.hasAttribute("disabled")||i.closest("[inert]"))return!1;if(n==="input"&&i.getAttribute("type")==="radio"){const f=i.getRootNode(),h=`input[type='radio'][name="${i.getAttribute("name")}"]`,y=f.querySelector(`${h}:checked`);return y?y===i:f.querySelector(h)===i}return sy(i)?(n==="audio"||n==="video")&&i.hasAttribute("controls")||i.hasAttribute("tabindex")||i.hasAttribute("contenteditable")&&i.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(n)?!0:oy(i):!1}function cy(i,n){var r;return((r=i.getRootNode({composed:!0}))==null?void 0:r.host)!==n}function w0(i){const n=new WeakMap,r=[];function c(u){if(u instanceof Element){if(u.hasAttribute("inert")||u.closest("[inert]")||n.has(u))return;n.set(u,!0),!r.includes(u)&&ry(u)&&r.push(u),u instanceof HTMLSlotElement&&cy(u,i)&&u.assignedElements({flatten:!0}).forEach(f=>{c(f)}),u.shadowRoot!==null&&u.shadowRoot.mode==="open"&&c(u.shadowRoot)}for(const f of u.children)c(f)}return c(i),r.sort((u,f)=>{const h=Number(u.getAttribute("tabindex"))||0;return(Number(f.getAttribute("tabindex"))||0)-h})}function*Wu(i=document.activeElement){i!=null&&(yield i,"shadowRoot"in i&&i.shadowRoot&&i.shadowRoot.mode!=="closed"&&(yield*Tv(Wu(i.shadowRoot.activeElement))))}function uy(){return[...Wu()].pop()}var es=[],J0=class{constructor(i){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=n=>{var r;if(n.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const c=uy();if(this.previousFocus=c,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;n.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const u=w0(this.element);let f=u.findIndex(y=>y===c);this.previousFocus=this.currentFocus;const h=this.tabDirection==="forward"?1:-1;for(;;){f+h>=u.length?f=0:f+h<0?f=u.length-1:f+=h,this.previousFocus=this.currentFocus;const y=u[f];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||y&&this.possiblyHasTabbableChildren(y))return;n.preventDefault(),this.currentFocus=y,(r=this.currentFocus)==null||r.focus({preventScroll:!1});const v=[...Wu()];if(v.includes(this.currentFocus)||!v.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=i,this.elementsWithTabbableControls=["iframe"]}activate(){es.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){es=es.filter(i=>i!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return es[es.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const i=w0(this.element);if(!this.element.matches(":focus-within")){const n=i[0],r=i[i.length-1],c=this.tabDirection==="forward"?n:r;typeof(c==null?void 0:c.focus)=="function"&&(this.currentFocus=c,c.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(i){return this.elementsWithTabbableControls.includes(i.tagName.toLowerCase())||i.hasAttribute("controls")}};function dy(i,n){return{top:Math.round(i.getBoundingClientRect().top-n.getBoundingClientRect().top),left:Math.round(i.getBoundingClientRect().left-n.getBoundingClientRect().left)}}var Ru=new Set;function fy(){const i=document.documentElement.clientWidth;return Math.abs(window.innerWidth-i)}function hy(){const i=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(i)||!i?0:i}function os(i){if(Ru.add(i),!document.documentElement.classList.contains("sl-scroll-lock")){const n=fy()+hy();let r=getComputedStyle(document.documentElement).scrollbarGutter;(!r||r==="auto")&&(r="stable"),n<2&&(r=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",r),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${n}px`)}}function rs(i){Ru.delete(i),Ru.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function py(i,n,r="vertical",c="smooth"){const u=dy(i,n),f=u.top+n.scrollTop,h=u.left+n.scrollLeft,y=n.scrollLeft,v=n.scrollLeft+n.offsetWidth,g=n.scrollTop,C=n.scrollTop+n.offsetHeight;(r==="horizontal"||r==="both")&&(h<y?n.scrollTo({left:h,behavior:c}):h+i.clientWidth>v&&n.scrollTo({left:h-n.offsetWidth+i.clientWidth,behavior:c})),(r==="vertical"||r==="both")&&(f<g?n.scrollTo({top:f,behavior:c}):f+i.clientHeight>C&&n.scrollTo({top:f-n.offsetHeight+i.clientHeight,behavior:c}))}var W0=new Map,my=new WeakMap;function gy(i){return i??{keyframes:[],options:{duration:0}}}function S0(i,n){return n.toLowerCase()==="rtl"?{keyframes:i.rtlKeyframes||i.keyframes,options:i.options}:i}function Ht(i,n){W0.set(i,gy(n))}function se(i,n,r){const c=my.get(i);if(c!=null&&c[n])return S0(c[n],r.dir);const u=W0.get(n);return u?S0(u,r.dir):{keyframes:[],options:{duration:0}}}function Sl(i,n){return new Promise(r=>{function c(u){u.target===i&&(i.removeEventListener(n,c),r())}i.addEventListener(n,c)})}function be(i,n,r){return new Promise(c=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const u=i.animate(n,ms(xa({},r),{duration:by()?0:r.duration}));u.addEventListener("cancel",c,{once:!0}),u.addEventListener("finish",c,{once:!0})})}function z0(i){return i=i.toString().toLowerCase(),i.indexOf("ms")>-1?parseFloat(i):i.indexOf("s")>-1?parseFloat(i)*1e3:parseFloat(i)}function by(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Te(i){return Promise.all(i.getAnimations().map(n=>new Promise(r=>{n.cancel(),requestAnimationFrame(r)})))}function C0(i,n){return i.map(r=>ms(xa({},r),{height:r.height==="auto"?`${n}px`:r.height}))}function A0(i){return i.charAt(0).toUpperCase()+i.slice(1)}var Ue=class extends kt{constructor(){super(...arguments),this.hasSlotController=new Cl(this,"footer"),this.localize=new Me(this),this.modal=new J0(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=i=>{this.contained||i.key==="Escape"&&this.modal.isActive()&&this.open&&(i.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),os(this)))}disconnectedCallback(){super.disconnectedCallback(),rs(this),this.removeOpenListeners()}requestClose(i){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:i}}).defaultPrevented){const r=se(this,"drawer.denyClose",{dir:this.localize.dir()});be(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var i;"CloseWatcher"in window?((i=this.closeWatcher)==null||i.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var i;document.removeEventListener("keydown",this.handleDocumentKeyDown),(i=this.closeWatcher)==null||i.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),os(this));const i=this.querySelector("[autofocus]");i&&i.removeAttribute("autofocus"),await Promise.all([Te(this.drawer),Te(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(i?i.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),i&&i.setAttribute("autofocus","")});const n=se(this,`drawer.show${A0(this.placement)}`,{dir:this.localize.dir()}),r=se(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([be(this.panel,n.keyframes,n.options),be(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),rs(this)),await Promise.all([Te(this.drawer),Te(this.overlay)]);const i=se(this,`drawer.hide${A0(this.placement)}`,{dir:this.localize.dir()}),n=se(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([be(this.overlay,n.keyframes,n.options).then(()=>{this.overlay.hidden=!0}),be(this.panel,i.keyframes,i.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),os(this)),this.open&&this.contained&&(this.modal.deactivate(),rs(this))}async show(){if(!this.open)return this.open=!0,Sl(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Sl(this,"sl-after-hide")}render(){return st`
      <div
        part="base"
        class=${Mt({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${et(this.noHeader?this.label:void 0)}
          aria-labelledby=${et(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":st`
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
    `}};Ue.styles=[jt,ny];Ue.dependencies={"sl-icon-button":ye};m([ft(".drawer")],Ue.prototype,"drawer",2);m([ft(".drawer__panel")],Ue.prototype,"panel",2);m([ft(".drawer__overlay")],Ue.prototype,"overlay",2);m([_({type:Boolean,reflect:!0})],Ue.prototype,"open",2);m([_({reflect:!0})],Ue.prototype,"label",2);m([_({reflect:!0})],Ue.prototype,"placement",2);m([_({type:Boolean,reflect:!0})],Ue.prototype,"contained",2);m([_({attribute:"no-header",type:Boolean,reflect:!0})],Ue.prototype,"noHeader",2);m([pt("open",{waitUntilFirstUpdate:!0})],Ue.prototype,"handleOpenChange",1);m([pt("contained",{waitUntilFirstUpdate:!0})],Ue.prototype,"handleNoModalChange",1);Ht("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});Ht("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});Ht("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});Ht("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});Ht("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});Ht("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});Ht("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});Ht("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});Ht("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});Ht("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Ht("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var vy="sl-drawer";Ue.define("sl-drawer");Wt({tagName:vy,elementClass:Ue,react:Jt,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDrawer"});var yy=Ut`
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
`,Qe=class Qa extends kt{constructor(){super(...arguments),this.hasSlotController=new Cl(this,"icon","suffix"),this.localize=new Me(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var n;(n=this.countdownAnimation)==null||n.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var n;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(n=this.countdownAnimation)==null||n.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:n}=this,r="100%",c="0";this.countdownAnimation=n.animate([{width:r},{width:c}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Te(this.base),this.base.hidden=!1;const{keyframes:n,options:r}=se(this,"alert.show",{dir:this.localize.dir()});await be(this.base,n,r),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await Te(this.base);const{keyframes:n,options:r}=se(this,"alert.hide",{dir:this.localize.dir()});await be(this.base,n,r),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Sl(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Sl(this,"sl-after-hide")}async toast(){return new Promise(n=>{this.handleCountdownChange(),Qa.toastStack.parentElement===null&&document.body.append(Qa.toastStack),Qa.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Qa.toastStack.removeChild(this),n(),Qa.toastStack.querySelector("sl-alert")===null&&Qa.toastStack.remove()},{once:!0})})}render(){return st`
      <div
        part="base"
        class=${Mt({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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

        ${this.closable?st`
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

        ${this.countdown?st`
              <div
                class=${Mt({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};Qe.styles=[jt,yy];Qe.dependencies={"sl-icon-button":ye};m([ft('[part~="base"]')],Qe.prototype,"base",2);m([ft(".alert__countdown-elapsed")],Qe.prototype,"countdownElement",2);m([_({type:Boolean,reflect:!0})],Qe.prototype,"open",2);m([_({type:Boolean,reflect:!0})],Qe.prototype,"closable",2);m([_({reflect:!0})],Qe.prototype,"variant",2);m([_({type:Number})],Qe.prototype,"duration",2);m([_({type:String,reflect:!0})],Qe.prototype,"countdown",2);m([Bt()],Qe.prototype,"remainingTime",2);m([pt("open",{waitUntilFirstUpdate:!0})],Qe.prototype,"handleOpenChange",1);m([pt("duration")],Qe.prototype,"handleDurationChange",1);var I0=Qe;Ht("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Ht("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var _y="sl-alert";I0.define("sl-alert");var xy=Wt({tagName:_y,elementClass:I0,react:Jt,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlAlert"}),P0=xy,wy=Ut`
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
`,hl=class extends kt{constructor(){super(...arguments),this.hasSlotController=new Cl(this,"footer"),this.localize=new Me(this),this.modal=new J0(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=i=>{i.key==="Escape"&&this.modal.isActive()&&this.open&&(i.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),os(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),rs(this),this.removeOpenListeners()}requestClose(i){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:i}}).defaultPrevented){const r=se(this,"dialog.denyClose",{dir:this.localize.dir()});be(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var i;"CloseWatcher"in window?((i=this.closeWatcher)==null||i.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var i;(i=this.closeWatcher)==null||i.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),os(this);const i=this.querySelector("[autofocus]");i&&i.removeAttribute("autofocus"),await Promise.all([Te(this.dialog),Te(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(i?i.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),i&&i.setAttribute("autofocus","")});const n=se(this,"dialog.show",{dir:this.localize.dir()}),r=se(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([be(this.panel,n.keyframes,n.options),be(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Te(this.dialog),Te(this.overlay)]);const i=se(this,"dialog.hide",{dir:this.localize.dir()}),n=se(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([be(this.overlay,n.keyframes,n.options).then(()=>{this.overlay.hidden=!0}),be(this.panel,i.keyframes,i.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,rs(this);const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Sl(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Sl(this,"sl-after-hide")}render(){return st`
      <div
        part="base"
        class=${Mt({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${et(this.noHeader?this.label:void 0)}
          aria-labelledby=${et(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":st`
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
    `}};hl.styles=[jt,wy];hl.dependencies={"sl-icon-button":ye};m([ft(".dialog")],hl.prototype,"dialog",2);m([ft(".dialog__panel")],hl.prototype,"panel",2);m([ft(".dialog__overlay")],hl.prototype,"overlay",2);m([_({type:Boolean,reflect:!0})],hl.prototype,"open",2);m([_({reflect:!0})],hl.prototype,"label",2);m([_({attribute:"no-header",type:Boolean,reflect:!0})],hl.prototype,"noHeader",2);m([pt("open",{waitUntilFirstUpdate:!0})],hl.prototype,"handleOpenChange",1);Ht("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Ht("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Ht("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});Ht("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Ht("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Sy="sl-dialog";hl.define("sl-dialog");var zy=Wt({tagName:Sy,elementClass:hl,react:Jt,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDialog"}),Iu=zy,Cy=Ut`
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
`,Jo=(i="value")=>(n,r)=>{const c=n.constructor,u=c.prototype.attributeChangedCallback;c.prototype.attributeChangedCallback=function(f,h,y){var v;const g=c.getPropertyOptions(i),C=typeof g.attribute=="string"?g.attribute:i;if(f===C){const k=g.converter||Li,O=(typeof k=="function"?k:(v=k==null?void 0:k.fromAttribute)!=null?v:Li.fromAttribute)(y,g.type);this[i]!==O&&(this[r]=O)}u.call(this,f,h,y)}},bs=Ut`
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
 */const Vi=Ku(class extends Fu{constructor(i){if(super(i),i.type!==pa.PROPERTY&&i.type!==pa.ATTRIBUTE&&i.type!==pa.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Yv(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[n]){if(n===sl||n===Ft)return n;const r=i.element,c=i.name;if(i.type===pa.PROPERTY){if(n===r[c])return sl}else if(i.type===pa.BOOLEAN_ATTRIBUTE){if(!!n===r.hasAttribute(c))return sl}else if(i.type===pa.ATTRIBUTE&&r.getAttribute(c)===n+"")return sl;return Gv(i),n}});var rt=class extends kt{constructor(){super(...arguments),this.formControlController=new Yi(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Cl(this,"help-text","label"),this.localize=new Me(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var i;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((i=this.input)==null?void 0:i.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(i){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=i,this.value=this.__dateInput.value}get valueAsNumber(){var i;return this.__numberInput.value=this.value,((i=this.input)==null?void 0:i.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(i){this.__numberInput.valueAsNumber=i,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(i){i.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(i){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(i)}handleKeyDown(i){const n=i.metaKey||i.ctrlKey||i.shiftKey||i.altKey;i.key==="Enter"&&!n&&setTimeout(()=>{!i.defaultPrevented&&!i.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(i){this.input.focus(i)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(i,n,r="none"){this.input.setSelectionRange(i,n,r)}setRangeText(i,n,r,c="preserve"){const u=n??this.input.selectionStart,f=r??this.input.selectionEnd;this.input.setRangeText(i,u,f,c),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(i){this.input.setCustomValidity(i),this.formControlController.updateValidity()}render(){const i=this.hasSlotController.test("label"),n=this.hasSlotController.test("help-text"),r=this.label?!0:!!i,c=this.helpText?!0:!!n,f=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return st`
      <div
        part="form-control"
        class=${Mt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":c})}
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
            class=${Mt({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${et(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${et(this.placeholder)}
              minlength=${et(this.minlength)}
              maxlength=${et(this.maxlength)}
              min=${et(this.min)}
              max=${et(this.max)}
              step=${et(this.step)}
              .value=${Vi(this.value)}
              autocapitalize=${et(this.autocapitalize)}
              autocomplete=${et(this.autocomplete)}
              autocorrect=${et(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${et(this.pattern)}
              enterkeyhint=${et(this.enterkeyhint)}
              inputmode=${et(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${f?st`
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
            ${this.passwordToggle&&!this.disabled?st`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?st`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:st`
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
    `}};rt.styles=[jt,bs,Cy];rt.dependencies={"sl-icon":ve};m([ft(".input__control")],rt.prototype,"input",2);m([Bt()],rt.prototype,"hasFocus",2);m([_()],rt.prototype,"title",2);m([_({reflect:!0})],rt.prototype,"type",2);m([_()],rt.prototype,"name",2);m([_()],rt.prototype,"value",2);m([Jo()],rt.prototype,"defaultValue",2);m([_({reflect:!0})],rt.prototype,"size",2);m([_({type:Boolean,reflect:!0})],rt.prototype,"filled",2);m([_({type:Boolean,reflect:!0})],rt.prototype,"pill",2);m([_()],rt.prototype,"label",2);m([_({attribute:"help-text"})],rt.prototype,"helpText",2);m([_({type:Boolean})],rt.prototype,"clearable",2);m([_({type:Boolean,reflect:!0})],rt.prototype,"disabled",2);m([_()],rt.prototype,"placeholder",2);m([_({type:Boolean,reflect:!0})],rt.prototype,"readonly",2);m([_({attribute:"password-toggle",type:Boolean})],rt.prototype,"passwordToggle",2);m([_({attribute:"password-visible",type:Boolean})],rt.prototype,"passwordVisible",2);m([_({attribute:"no-spin-buttons",type:Boolean})],rt.prototype,"noSpinButtons",2);m([_({reflect:!0})],rt.prototype,"form",2);m([_({type:Boolean,reflect:!0})],rt.prototype,"required",2);m([_()],rt.prototype,"pattern",2);m([_({type:Number})],rt.prototype,"minlength",2);m([_({type:Number})],rt.prototype,"maxlength",2);m([_()],rt.prototype,"min",2);m([_()],rt.prototype,"max",2);m([_()],rt.prototype,"step",2);m([_()],rt.prototype,"autocapitalize",2);m([_()],rt.prototype,"autocorrect",2);m([_()],rt.prototype,"autocomplete",2);m([_({type:Boolean})],rt.prototype,"autofocus",2);m([_()],rt.prototype,"enterkeyhint",2);m([_({type:Boolean,converter:{fromAttribute:i=>!(!i||i==="false"),toAttribute:i=>i?"true":"false"}})],rt.prototype,"spellcheck",2);m([_()],rt.prototype,"inputmode",2);m([pt("disabled",{waitUntilFirstUpdate:!0})],rt.prototype,"handleDisabledChange",1);m([pt("step",{waitUntilFirstUpdate:!0})],rt.prototype,"handleStepChange",1);m([pt("value",{waitUntilFirstUpdate:!0})],rt.prototype,"handleValueChange",1);var Ay="sl-input";rt.define("sl-input");var Ey=Wt({tagName:Ay,elementClass:rt,react:Jt,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlClear:"sl-clear",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlInput"}),fs=Ey,Ty=Ut`
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
`,_t=class extends kt{constructor(){super(...arguments),this.formControlController=new Yi(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Cl(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var i;super.disconnectedCallback(),this.input&&((i=this.resizeObserver)==null||i.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(i){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(i)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(i){this.input.focus(i)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(i){if(i){typeof i.top=="number"&&(this.input.scrollTop=i.top),typeof i.left=="number"&&(this.input.scrollLeft=i.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(i,n,r="none"){this.input.setSelectionRange(i,n,r)}setRangeText(i,n,r,c="preserve"){const u=n??this.input.selectionStart,f=r??this.input.selectionEnd;this.input.setRangeText(i,u,f,c),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(i){this.input.setCustomValidity(i),this.formControlController.updateValidity()}render(){const i=this.hasSlotController.test("label"),n=this.hasSlotController.test("help-text"),r=this.label?!0:!!i,c=this.helpText?!0:!!n;return st`
      <div
        part="form-control"
        class=${Mt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":c})}
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
            class=${Mt({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${et(this.name)}
              .value=${Vi(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${et(this.placeholder)}
              rows=${et(this.rows)}
              minlength=${et(this.minlength)}
              maxlength=${et(this.maxlength)}
              autocapitalize=${et(this.autocapitalize)}
              autocorrect=${et(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${et(this.spellcheck)}
              enterkeyhint=${et(this.enterkeyhint)}
              inputmode=${et(this.inputmode)}
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
    `}};_t.styles=[jt,bs,Ty];m([ft(".textarea__control")],_t.prototype,"input",2);m([ft(".textarea__size-adjuster")],_t.prototype,"sizeAdjuster",2);m([Bt()],_t.prototype,"hasFocus",2);m([_()],_t.prototype,"title",2);m([_()],_t.prototype,"name",2);m([_()],_t.prototype,"value",2);m([_({reflect:!0})],_t.prototype,"size",2);m([_({type:Boolean,reflect:!0})],_t.prototype,"filled",2);m([_()],_t.prototype,"label",2);m([_({attribute:"help-text"})],_t.prototype,"helpText",2);m([_()],_t.prototype,"placeholder",2);m([_({type:Number})],_t.prototype,"rows",2);m([_()],_t.prototype,"resize",2);m([_({type:Boolean,reflect:!0})],_t.prototype,"disabled",2);m([_({type:Boolean,reflect:!0})],_t.prototype,"readonly",2);m([_({reflect:!0})],_t.prototype,"form",2);m([_({type:Boolean,reflect:!0})],_t.prototype,"required",2);m([_({type:Number})],_t.prototype,"minlength",2);m([_({type:Number})],_t.prototype,"maxlength",2);m([_()],_t.prototype,"autocapitalize",2);m([_()],_t.prototype,"autocorrect",2);m([_()],_t.prototype,"autocomplete",2);m([_({type:Boolean})],_t.prototype,"autofocus",2);m([_()],_t.prototype,"enterkeyhint",2);m([_({type:Boolean,converter:{fromAttribute:i=>!(!i||i==="false"),toAttribute:i=>i?"true":"false"}})],_t.prototype,"spellcheck",2);m([_()],_t.prototype,"inputmode",2);m([Jo()],_t.prototype,"defaultValue",2);m([pt("disabled",{waitUntilFirstUpdate:!0})],_t.prototype,"handleDisabledChange",1);m([pt("rows",{waitUntilFirstUpdate:!0})],_t.prototype,"handleRowsChange",1);m([pt("value",{waitUntilFirstUpdate:!0})],_t.prototype,"handleValueChange",1);var ky="sl-textarea";_t.define("sl-textarea");var Oy=Wt({tagName:ky,elementClass:_t,react:Jt,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlTextarea"}),Dy=Oy,Ry=Ut`
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
`,vs=class extends kt{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};vs.styles=[jt,Ry];m([_({type:Boolean,reflect:!0})],vs.prototype,"vertical",2);m([pt("vertical")],vs.prototype,"handleVerticalChange",1);var $y="sl-divider";vs.define("sl-divider");Wt({tagName:$y,elementClass:vs,react:Jt,events:{},displayName:"SlDivider"});var Ny=Ut`
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
`,Se=class extends kt{constructor(){super(...arguments),this.formControlController=new Yi(this,{value:i=>i.checked?i.value||"on":void 0,defaultValue:i=>i.defaultChecked,setValue:(i,n)=>i.checked=n}),this.hasSlotController=new Cl(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(i){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(i)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(i){i.key==="ArrowLeft"&&(i.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),i.key==="ArrowRight"&&(i.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(i){this.input.focus(i)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(i){this.input.setCustomValidity(i),this.formControlController.updateValidity()}render(){const i=this.hasSlotController.test("help-text"),n=this.helpText?!0:!!i;return st`
      <div
        class=${Mt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":n})}
      >
        <label
          part="base"
          class=${Mt({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${et(this.value)}
            .checked=${Vi(this.checked)}
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
    `}};Se.styles=[jt,bs,Ny];m([ft('input[type="checkbox"]')],Se.prototype,"input",2);m([Bt()],Se.prototype,"hasFocus",2);m([_()],Se.prototype,"title",2);m([_()],Se.prototype,"name",2);m([_()],Se.prototype,"value",2);m([_({reflect:!0})],Se.prototype,"size",2);m([_({type:Boolean,reflect:!0})],Se.prototype,"disabled",2);m([_({type:Boolean,reflect:!0})],Se.prototype,"checked",2);m([Jo("checked")],Se.prototype,"defaultChecked",2);m([_({reflect:!0})],Se.prototype,"form",2);m([_({type:Boolean,reflect:!0})],Se.prototype,"required",2);m([_({attribute:"help-text"})],Se.prototype,"helpText",2);m([pt("checked",{waitUntilFirstUpdate:!0})],Se.prototype,"handleCheckedChange",1);m([pt("disabled",{waitUntilFirstUpdate:!0})],Se.prototype,"handleDisabledChange",1);var My="sl-switch";Se.define("sl-switch");var Uy=Wt({tagName:My,elementClass:Se,react:Jt,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlSwitch"}),Ho=Uy,Hy=Ut`
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
`,oe=class extends kt{constructor(){super(...arguments),this.formControlController=new Yi(this,{value:i=>i.checked?i.value||"on":void 0,defaultValue:i=>i.defaultChecked,setValue:(i,n)=>i.checked=n}),this.hasSlotController=new Cl(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(i){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(i)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(i){this.input.focus(i)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(i){this.input.setCustomValidity(i),this.formControlController.updateValidity()}render(){const i=this.hasSlotController.test("help-text"),n=this.helpText?!0:!!i;return st`
      <div
        class=${Mt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":n})}
      >
        <label
          part="base"
          class=${Mt({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${et(this.value)}
            .indeterminate=${Vi(this.indeterminate)}
            .checked=${Vi(this.checked)}
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
            ${this.checked?st`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?st`
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
    `}};oe.styles=[jt,bs,Hy];oe.dependencies={"sl-icon":ve};m([ft('input[type="checkbox"]')],oe.prototype,"input",2);m([Bt()],oe.prototype,"hasFocus",2);m([_()],oe.prototype,"title",2);m([_()],oe.prototype,"name",2);m([_()],oe.prototype,"value",2);m([_({reflect:!0})],oe.prototype,"size",2);m([_({type:Boolean,reflect:!0})],oe.prototype,"disabled",2);m([_({type:Boolean,reflect:!0})],oe.prototype,"checked",2);m([_({type:Boolean,reflect:!0})],oe.prototype,"indeterminate",2);m([Jo("checked")],oe.prototype,"defaultChecked",2);m([_({reflect:!0})],oe.prototype,"form",2);m([_({type:Boolean,reflect:!0})],oe.prototype,"required",2);m([_({attribute:"help-text"})],oe.prototype,"helpText",2);m([pt("disabled",{waitUntilFirstUpdate:!0})],oe.prototype,"handleDisabledChange",1);m([pt(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],oe.prototype,"handleStateChange",1);var By="sl-checkbox";oe.define("sl-checkbox");var Ly=Wt({tagName:By,elementClass:oe,react:Jt,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlCheckbox"}),tm=Ly,jy=Ut`
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
`,Ia=class extends kt{constructor(){super(...arguments),this.localize=new Me(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return st`
      <span
        part="base"
        class=${Mt({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?st`
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
    `}};Ia.styles=[jt,jy];Ia.dependencies={"sl-icon-button":ye};m([_({reflect:!0})],Ia.prototype,"variant",2);m([_({reflect:!0})],Ia.prototype,"size",2);m([_({type:Boolean,reflect:!0})],Ia.prototype,"pill",2);m([_({type:Boolean})],Ia.prototype,"removable",2);var Vy=Ut`
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
`,qy=Ut`
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
`;const va=Math.min,Xe=Math.max,Go=Math.round,Bo=Math.floor,wl=i=>({x:i,y:i}),Yy={left:"right",right:"left",bottom:"top",top:"bottom"},Xy={start:"end",end:"start"};function $u(i,n,r){return Xe(i,va(n,r))}function Gi(i,n){return typeof i=="function"?i(n):i}function ya(i){return i.split("-")[0]}function Qi(i){return i.split("-")[1]}function em(i){return i==="x"?"y":"x"}function Pu(i){return i==="y"?"height":"width"}function Ja(i){return["top","bottom"].includes(ya(i))?"y":"x"}function td(i){return em(Ja(i))}function Gy(i,n,r){r===void 0&&(r=!1);const c=Qi(i),u=td(i),f=Pu(u);let h=u==="x"?c===(r?"end":"start")?"right":"left":c==="start"?"bottom":"top";return n.reference[f]>n.floating[f]&&(h=Qo(h)),[h,Qo(h)]}function Qy(i){const n=Qo(i);return[Nu(i),n,Nu(n)]}function Nu(i){return i.replace(/start|end/g,n=>Xy[n])}function Zy(i,n,r){const c=["left","right"],u=["right","left"],f=["top","bottom"],h=["bottom","top"];switch(i){case"top":case"bottom":return r?n?u:c:n?c:u;case"left":case"right":return n?f:h;default:return[]}}function Ky(i,n,r,c){const u=Qi(i);let f=Zy(ya(i),r==="start",c);return u&&(f=f.map(h=>h+"-"+u),n&&(f=f.concat(f.map(Nu)))),f}function Qo(i){return i.replace(/left|right|bottom|top/g,n=>Yy[n])}function Fy(i){return{top:0,right:0,bottom:0,left:0,...i}}function lm(i){return typeof i!="number"?Fy(i):{top:i,right:i,bottom:i,left:i}}function Zo(i){const{x:n,y:r,width:c,height:u}=i;return{width:c,height:u,top:r,left:n,right:n+c,bottom:r+u,x:n,y:r}}function E0(i,n,r){let{reference:c,floating:u}=i;const f=Ja(n),h=td(n),y=Pu(h),v=ya(n),g=f==="y",C=c.x+c.width/2-u.width/2,k=c.y+c.height/2-u.height/2,N=c[y]/2-u[y]/2;let O;switch(v){case"top":O={x:C,y:c.y-u.height};break;case"bottom":O={x:C,y:c.y+c.height};break;case"right":O={x:c.x+c.width,y:k};break;case"left":O={x:c.x-u.width,y:k};break;default:O={x:c.x,y:c.y}}switch(Qi(n)){case"start":O[h]-=N*(r&&g?-1:1);break;case"end":O[h]+=N*(r&&g?-1:1);break}return O}const Jy=async(i,n,r)=>{const{placement:c="bottom",strategy:u="absolute",middleware:f=[],platform:h}=r,y=f.filter(Boolean),v=await(h.isRTL==null?void 0:h.isRTL(n));let g=await h.getElementRects({reference:i,floating:n,strategy:u}),{x:C,y:k}=E0(g,c,v),N=c,O={},U=0;for(let V=0;V<y.length;V++){const{name:Y,fn:F}=y[V],{x:J,y:Q,data:at,reset:q}=await F({x:C,y:k,initialPlacement:c,placement:N,strategy:u,middlewareData:O,rects:g,platform:h,elements:{reference:i,floating:n}});C=J??C,k=Q??k,O={...O,[Y]:{...O[Y],...at}},q&&U<=50&&(U++,typeof q=="object"&&(q.placement&&(N=q.placement),q.rects&&(g=q.rects===!0?await h.getElementRects({reference:i,floating:n,strategy:u}):q.rects),{x:C,y:k}=E0(g,N,v)),V=-1)}return{x:C,y:k,placement:N,strategy:u,middlewareData:O}};async function ed(i,n){var r;n===void 0&&(n={});const{x:c,y:u,platform:f,rects:h,elements:y,strategy:v}=i,{boundary:g="clippingAncestors",rootBoundary:C="viewport",elementContext:k="floating",altBoundary:N=!1,padding:O=0}=Gi(n,i),U=lm(O),Y=y[N?k==="floating"?"reference":"floating":k],F=Zo(await f.getClippingRect({element:(r=await(f.isElement==null?void 0:f.isElement(Y)))==null||r?Y:Y.contextElement||await(f.getDocumentElement==null?void 0:f.getDocumentElement(y.floating)),boundary:g,rootBoundary:C,strategy:v})),J=k==="floating"?{x:c,y:u,width:h.floating.width,height:h.floating.height}:h.reference,Q=await(f.getOffsetParent==null?void 0:f.getOffsetParent(y.floating)),at=await(f.isElement==null?void 0:f.isElement(Q))?await(f.getScale==null?void 0:f.getScale(Q))||{x:1,y:1}:{x:1,y:1},q=Zo(f.convertOffsetParentRelativeRectToViewportRelativeRect?await f.convertOffsetParentRelativeRectToViewportRelativeRect({elements:y,rect:J,offsetParent:Q,strategy:v}):J);return{top:(F.top-q.top+U.top)/at.y,bottom:(q.bottom-F.bottom+U.bottom)/at.y,left:(F.left-q.left+U.left)/at.x,right:(q.right-F.right+U.right)/at.x}}const Wy=i=>({name:"arrow",options:i,async fn(n){const{x:r,y:c,placement:u,rects:f,platform:h,elements:y,middlewareData:v}=n,{element:g,padding:C=0}=Gi(i,n)||{};if(g==null)return{};const k=lm(C),N={x:r,y:c},O=td(u),U=Pu(O),V=await h.getDimensions(g),Y=O==="y",F=Y?"top":"left",J=Y?"bottom":"right",Q=Y?"clientHeight":"clientWidth",at=f.reference[U]+f.reference[O]-N[O]-f.floating[U],q=N[O]-f.reference[O],it=await(h.getOffsetParent==null?void 0:h.getOffsetParent(g));let St=it?it[Q]:0;(!St||!await(h.isElement==null?void 0:h.isElement(it)))&&(St=y.floating[Q]||f.floating[U]);const Pt=at/2-q/2,X=St/2-V[U]/2-1,lt=va(k[F],X),Vt=va(k[J],X),Gt=lt,te=St-V[U]-Vt,Ot=St/2-V[U]/2+Pt,qt=$u(Gt,Ot,te),j=!v.arrow&&Qi(u)!=null&&Ot!==qt&&f.reference[U]/2-(Ot<Gt?lt:Vt)-V[U]/2<0,I=j?Ot<Gt?Ot-Gt:Ot-te:0;return{[O]:N[O]+I,data:{[O]:qt,centerOffset:Ot-qt-I,...j&&{alignmentOffset:I}},reset:j}}}),Iy=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(n){var r,c;const{placement:u,middlewareData:f,rects:h,initialPlacement:y,platform:v,elements:g}=n,{mainAxis:C=!0,crossAxis:k=!0,fallbackPlacements:N,fallbackStrategy:O="bestFit",fallbackAxisSideDirection:U="none",flipAlignment:V=!0,...Y}=Gi(i,n);if((r=f.arrow)!=null&&r.alignmentOffset)return{};const F=ya(u),J=Ja(y),Q=ya(y)===y,at=await(v.isRTL==null?void 0:v.isRTL(g.floating)),q=N||(Q||!V?[Qo(y)]:Qy(y)),it=U!=="none";!N&&it&&q.push(...Ky(y,V,U,at));const St=[y,...q],Pt=await ed(n,Y),X=[];let lt=((c=f.flip)==null?void 0:c.overflows)||[];if(C&&X.push(Pt[F]),k){const Ot=Gy(u,h,at);X.push(Pt[Ot[0]],Pt[Ot[1]])}if(lt=[...lt,{placement:u,overflows:X}],!X.every(Ot=>Ot<=0)){var Vt,Gt;const Ot=(((Vt=f.flip)==null?void 0:Vt.index)||0)+1,qt=St[Ot];if(qt)return{data:{index:Ot,overflows:lt},reset:{placement:qt}};let j=(Gt=lt.filter(I=>I.overflows[0]<=0).sort((I,Z)=>I.overflows[1]-Z.overflows[1])[0])==null?void 0:Gt.placement;if(!j)switch(O){case"bestFit":{var te;const I=(te=lt.filter(Z=>{if(it){const mt=Ja(Z.placement);return mt===J||mt==="y"}return!0}).map(Z=>[Z.placement,Z.overflows.filter(mt=>mt>0).reduce((mt,x)=>mt+x,0)]).sort((Z,mt)=>Z[1]-mt[1])[0])==null?void 0:te[0];I&&(j=I);break}case"initialPlacement":j=y;break}if(u!==j)return{reset:{placement:j}}}return{}}}};async function Py(i,n){const{placement:r,platform:c,elements:u}=i,f=await(c.isRTL==null?void 0:c.isRTL(u.floating)),h=ya(r),y=Qi(r),v=Ja(r)==="y",g=["left","top"].includes(h)?-1:1,C=f&&v?-1:1,k=Gi(n,i);let{mainAxis:N,crossAxis:O,alignmentAxis:U}=typeof k=="number"?{mainAxis:k,crossAxis:0,alignmentAxis:null}:{mainAxis:k.mainAxis||0,crossAxis:k.crossAxis||0,alignmentAxis:k.alignmentAxis};return y&&typeof U=="number"&&(O=y==="end"?U*-1:U),v?{x:O*C,y:N*g}:{x:N*g,y:O*C}}const t1=function(i){return i===void 0&&(i=0),{name:"offset",options:i,async fn(n){var r,c;const{x:u,y:f,placement:h,middlewareData:y}=n,v=await Py(n,i);return h===((r=y.offset)==null?void 0:r.placement)&&(c=y.arrow)!=null&&c.alignmentOffset?{}:{x:u+v.x,y:f+v.y,data:{...v,placement:h}}}}},e1=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(n){const{x:r,y:c,placement:u}=n,{mainAxis:f=!0,crossAxis:h=!1,limiter:y={fn:Y=>{let{x:F,y:J}=Y;return{x:F,y:J}}},...v}=Gi(i,n),g={x:r,y:c},C=await ed(n,v),k=Ja(ya(u)),N=em(k);let O=g[N],U=g[k];if(f){const Y=N==="y"?"top":"left",F=N==="y"?"bottom":"right",J=O+C[Y],Q=O-C[F];O=$u(J,O,Q)}if(h){const Y=k==="y"?"top":"left",F=k==="y"?"bottom":"right",J=U+C[Y],Q=U-C[F];U=$u(J,U,Q)}const V=y.fn({...n,[N]:O,[k]:U});return{...V,data:{x:V.x-r,y:V.y-c,enabled:{[N]:f,[k]:h}}}}}},l1=function(i){return i===void 0&&(i={}),{name:"size",options:i,async fn(n){var r,c;const{placement:u,rects:f,platform:h,elements:y}=n,{apply:v=()=>{},...g}=Gi(i,n),C=await ed(n,g),k=ya(u),N=Qi(u),O=Ja(u)==="y",{width:U,height:V}=f.floating;let Y,F;k==="top"||k==="bottom"?(Y=k,F=N===(await(h.isRTL==null?void 0:h.isRTL(y.floating))?"start":"end")?"left":"right"):(F=k,Y=N==="end"?"top":"bottom");const J=V-C.top-C.bottom,Q=U-C.left-C.right,at=va(V-C[Y],J),q=va(U-C[F],Q),it=!n.middlewareData.shift;let St=at,Pt=q;if((r=n.middlewareData.shift)!=null&&r.enabled.x&&(Pt=Q),(c=n.middlewareData.shift)!=null&&c.enabled.y&&(St=J),it&&!N){const lt=Xe(C.left,0),Vt=Xe(C.right,0),Gt=Xe(C.top,0),te=Xe(C.bottom,0);O?Pt=U-2*(lt!==0||Vt!==0?lt+Vt:Xe(C.left,C.right)):St=V-2*(Gt!==0||te!==0?Gt+te:Xe(C.top,C.bottom))}await v({...n,availableWidth:Pt,availableHeight:St});const X=await h.getDimensions(y.floating);return U!==X.width||V!==X.height?{reset:{rects:!0}}:{}}}};function Wo(){return typeof window<"u"}function Zi(i){return am(i)?(i.nodeName||"").toLowerCase():"#document"}function Ge(i){var n;return(i==null||(n=i.ownerDocument)==null?void 0:n.defaultView)||window}function Al(i){var n;return(n=(am(i)?i.ownerDocument:i.document)||window.document)==null?void 0:n.documentElement}function am(i){return Wo()?i instanceof Node||i instanceof Ge(i).Node:!1}function dl(i){return Wo()?i instanceof Element||i instanceof Ge(i).Element:!1}function zl(i){return Wo()?i instanceof HTMLElement||i instanceof Ge(i).HTMLElement:!1}function T0(i){return!Wo()||typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof Ge(i).ShadowRoot}function ys(i){const{overflow:n,overflowX:r,overflowY:c,display:u}=fl(i);return/auto|scroll|overlay|hidden|clip/.test(n+c+r)&&!["inline","contents"].includes(u)}function a1(i){return["table","td","th"].includes(Zi(i))}function Io(i){return[":popover-open",":modal"].some(n=>{try{return i.matches(n)}catch{return!1}})}function Po(i){const n=ld(),r=dl(i)?fl(i):i;return["transform","translate","scale","rotate","perspective"].some(c=>r[c]?r[c]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!n&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!n&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(c=>(r.willChange||"").includes(c))||["paint","layout","strict","content"].some(c=>(r.contain||"").includes(c))}function i1(i){let n=_a(i);for(;zl(n)&&!qi(n);){if(Po(n))return n;if(Io(n))return null;n=_a(n)}return null}function ld(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function qi(i){return["html","body","#document"].includes(Zi(i))}function fl(i){return Ge(i).getComputedStyle(i)}function tr(i){return dl(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.scrollX,scrollTop:i.scrollY}}function _a(i){if(Zi(i)==="html")return i;const n=i.assignedSlot||i.parentNode||T0(i)&&i.host||Al(i);return T0(n)?n.host:n}function im(i){const n=_a(i);return qi(n)?i.ownerDocument?i.ownerDocument.body:i.body:zl(n)&&ys(n)?n:im(n)}function hs(i,n,r){var c;n===void 0&&(n=[]),r===void 0&&(r=!0);const u=im(i),f=u===((c=i.ownerDocument)==null?void 0:c.body),h=Ge(u);if(f){const y=Mu(h);return n.concat(h,h.visualViewport||[],ys(u)?u:[],y&&r?hs(y):[])}return n.concat(u,hs(u,[],r))}function Mu(i){return i.parent&&Object.getPrototypeOf(i.parent)?i.frameElement:null}function nm(i){const n=fl(i);let r=parseFloat(n.width)||0,c=parseFloat(n.height)||0;const u=zl(i),f=u?i.offsetWidth:r,h=u?i.offsetHeight:c,y=Go(r)!==f||Go(c)!==h;return y&&(r=f,c=h),{width:r,height:c,$:y}}function ad(i){return dl(i)?i:i.contextElement}function Hi(i){const n=ad(i);if(!zl(n))return wl(1);const r=n.getBoundingClientRect(),{width:c,height:u,$:f}=nm(n);let h=(f?Go(r.width):r.width)/c,y=(f?Go(r.height):r.height)/u;return(!h||!Number.isFinite(h))&&(h=1),(!y||!Number.isFinite(y))&&(y=1),{x:h,y}}const n1=wl(0);function sm(i){const n=Ge(i);return!ld()||!n.visualViewport?n1:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function s1(i,n,r){return n===void 0&&(n=!1),!r||n&&r!==Ge(i)?!1:n}function Wa(i,n,r,c){n===void 0&&(n=!1),r===void 0&&(r=!1);const u=i.getBoundingClientRect(),f=ad(i);let h=wl(1);n&&(c?dl(c)&&(h=Hi(c)):h=Hi(i));const y=s1(f,r,c)?sm(f):wl(0);let v=(u.left+y.x)/h.x,g=(u.top+y.y)/h.y,C=u.width/h.x,k=u.height/h.y;if(f){const N=Ge(f),O=c&&dl(c)?Ge(c):c;let U=N,V=Mu(U);for(;V&&c&&O!==U;){const Y=Hi(V),F=V.getBoundingClientRect(),J=fl(V),Q=F.left+(V.clientLeft+parseFloat(J.paddingLeft))*Y.x,at=F.top+(V.clientTop+parseFloat(J.paddingTop))*Y.y;v*=Y.x,g*=Y.y,C*=Y.x,k*=Y.y,v+=Q,g+=at,U=Ge(V),V=Mu(U)}}return Zo({width:C,height:k,x:v,y:g})}function id(i,n){const r=tr(i).scrollLeft;return n?n.left+r:Wa(Al(i)).left+r}function om(i,n,r){r===void 0&&(r=!1);const c=i.getBoundingClientRect(),u=c.left+n.scrollLeft-(r?0:id(i,c)),f=c.top+n.scrollTop;return{x:u,y:f}}function o1(i){let{elements:n,rect:r,offsetParent:c,strategy:u}=i;const f=u==="fixed",h=Al(c),y=n?Io(n.floating):!1;if(c===h||y&&f)return r;let v={scrollLeft:0,scrollTop:0},g=wl(1);const C=wl(0),k=zl(c);if((k||!k&&!f)&&((Zi(c)!=="body"||ys(h))&&(v=tr(c)),zl(c))){const O=Wa(c);g=Hi(c),C.x=O.x+c.clientLeft,C.y=O.y+c.clientTop}const N=h&&!k&&!f?om(h,v,!0):wl(0);return{width:r.width*g.x,height:r.height*g.y,x:r.x*g.x-v.scrollLeft*g.x+C.x+N.x,y:r.y*g.y-v.scrollTop*g.y+C.y+N.y}}function r1(i){return Array.from(i.getClientRects())}function c1(i){const n=Al(i),r=tr(i),c=i.ownerDocument.body,u=Xe(n.scrollWidth,n.clientWidth,c.scrollWidth,c.clientWidth),f=Xe(n.scrollHeight,n.clientHeight,c.scrollHeight,c.clientHeight);let h=-r.scrollLeft+id(i);const y=-r.scrollTop;return fl(c).direction==="rtl"&&(h+=Xe(n.clientWidth,c.clientWidth)-u),{width:u,height:f,x:h,y}}function u1(i,n){const r=Ge(i),c=Al(i),u=r.visualViewport;let f=c.clientWidth,h=c.clientHeight,y=0,v=0;if(u){f=u.width,h=u.height;const g=ld();(!g||g&&n==="fixed")&&(y=u.offsetLeft,v=u.offsetTop)}return{width:f,height:h,x:y,y:v}}function d1(i,n){const r=Wa(i,!0,n==="fixed"),c=r.top+i.clientTop,u=r.left+i.clientLeft,f=zl(i)?Hi(i):wl(1),h=i.clientWidth*f.x,y=i.clientHeight*f.y,v=u*f.x,g=c*f.y;return{width:h,height:y,x:v,y:g}}function k0(i,n,r){let c;if(n==="viewport")c=u1(i,r);else if(n==="document")c=c1(Al(i));else if(dl(n))c=d1(n,r);else{const u=sm(i);c={x:n.x-u.x,y:n.y-u.y,width:n.width,height:n.height}}return Zo(c)}function rm(i,n){const r=_a(i);return r===n||!dl(r)||qi(r)?!1:fl(r).position==="fixed"||rm(r,n)}function f1(i,n){const r=n.get(i);if(r)return r;let c=hs(i,[],!1).filter(y=>dl(y)&&Zi(y)!=="body"),u=null;const f=fl(i).position==="fixed";let h=f?_a(i):i;for(;dl(h)&&!qi(h);){const y=fl(h),v=Po(h);!v&&y.position==="fixed"&&(u=null),(f?!v&&!u:!v&&y.position==="static"&&!!u&&["absolute","fixed"].includes(u.position)||ys(h)&&!v&&rm(i,h))?c=c.filter(C=>C!==h):u=y,h=_a(h)}return n.set(i,c),c}function h1(i){let{element:n,boundary:r,rootBoundary:c,strategy:u}=i;const h=[...r==="clippingAncestors"?Io(n)?[]:f1(n,this._c):[].concat(r),c],y=h[0],v=h.reduce((g,C)=>{const k=k0(n,C,u);return g.top=Xe(k.top,g.top),g.right=va(k.right,g.right),g.bottom=va(k.bottom,g.bottom),g.left=Xe(k.left,g.left),g},k0(n,y,u));return{width:v.right-v.left,height:v.bottom-v.top,x:v.left,y:v.top}}function p1(i){const{width:n,height:r}=nm(i);return{width:n,height:r}}function m1(i,n,r){const c=zl(n),u=Al(n),f=r==="fixed",h=Wa(i,!0,f,n);let y={scrollLeft:0,scrollTop:0};const v=wl(0);if(c||!c&&!f)if((Zi(n)!=="body"||ys(u))&&(y=tr(n)),c){const N=Wa(n,!0,f,n);v.x=N.x+n.clientLeft,v.y=N.y+n.clientTop}else u&&(v.x=id(u));const g=u&&!c&&!f?om(u,y):wl(0),C=h.left+y.scrollLeft-v.x-g.x,k=h.top+y.scrollTop-v.y-g.y;return{x:C,y:k,width:h.width,height:h.height}}function Cu(i){return fl(i).position==="static"}function O0(i,n){if(!zl(i)||fl(i).position==="fixed")return null;if(n)return n(i);let r=i.offsetParent;return Al(i)===r&&(r=r.ownerDocument.body),r}function cm(i,n){const r=Ge(i);if(Io(i))return r;if(!zl(i)){let u=_a(i);for(;u&&!qi(u);){if(dl(u)&&!Cu(u))return u;u=_a(u)}return r}let c=O0(i,n);for(;c&&a1(c)&&Cu(c);)c=O0(c,n);return c&&qi(c)&&Cu(c)&&!Po(c)?r:c||i1(i)||r}const g1=async function(i){const n=this.getOffsetParent||cm,r=this.getDimensions,c=await r(i.floating);return{reference:m1(i.reference,await n(i.floating),i.strategy),floating:{x:0,y:0,width:c.width,height:c.height}}};function b1(i){return fl(i).direction==="rtl"}const qo={convertOffsetParentRelativeRectToViewportRelativeRect:o1,getDocumentElement:Al,getClippingRect:h1,getOffsetParent:cm,getElementRects:g1,getClientRects:r1,getDimensions:p1,getScale:Hi,isElement:dl,isRTL:b1};function um(i,n){return i.x===n.x&&i.y===n.y&&i.width===n.width&&i.height===n.height}function v1(i,n){let r=null,c;const u=Al(i);function f(){var y;clearTimeout(c),(y=r)==null||y.disconnect(),r=null}function h(y,v){y===void 0&&(y=!1),v===void 0&&(v=1),f();const g=i.getBoundingClientRect(),{left:C,top:k,width:N,height:O}=g;if(y||n(),!N||!O)return;const U=Bo(k),V=Bo(u.clientWidth-(C+N)),Y=Bo(u.clientHeight-(k+O)),F=Bo(C),Q={rootMargin:-U+"px "+-V+"px "+-Y+"px "+-F+"px",threshold:Xe(0,va(1,v))||1};let at=!0;function q(it){const St=it[0].intersectionRatio;if(St!==v){if(!at)return h();St?h(!1,St):c=setTimeout(()=>{h(!1,1e-7)},1e3)}St===1&&!um(g,i.getBoundingClientRect())&&h(),at=!1}try{r=new IntersectionObserver(q,{...Q,root:u.ownerDocument})}catch{r=new IntersectionObserver(q,Q)}r.observe(i)}return h(!0),f}function y1(i,n,r,c){c===void 0&&(c={});const{ancestorScroll:u=!0,ancestorResize:f=!0,elementResize:h=typeof ResizeObserver=="function",layoutShift:y=typeof IntersectionObserver=="function",animationFrame:v=!1}=c,g=ad(i),C=u||f?[...g?hs(g):[],...hs(n)]:[];C.forEach(F=>{u&&F.addEventListener("scroll",r,{passive:!0}),f&&F.addEventListener("resize",r)});const k=g&&y?v1(g,r):null;let N=-1,O=null;h&&(O=new ResizeObserver(F=>{let[J]=F;J&&J.target===g&&O&&(O.unobserve(n),cancelAnimationFrame(N),N=requestAnimationFrame(()=>{var Q;(Q=O)==null||Q.observe(n)})),r()}),g&&!v&&O.observe(g),O.observe(n));let U,V=v?Wa(i):null;v&&Y();function Y(){const F=Wa(i);V&&!um(V,F)&&r(),V=F,U=requestAnimationFrame(Y)}return r(),()=>{var F;C.forEach(J=>{u&&J.removeEventListener("scroll",r),f&&J.removeEventListener("resize",r)}),k==null||k(),(F=O)==null||F.disconnect(),O=null,v&&cancelAnimationFrame(U)}}const _1=t1,x1=e1,w1=Iy,D0=l1,S1=Wy,z1=(i,n,r)=>{const c=new Map,u={platform:qo,...r},f={...u.platform,_c:c};return Jy(i,n,{...u,platform:f})};function C1(i){return A1(i)}function Au(i){return i.assignedSlot?i.assignedSlot:i.parentNode instanceof ShadowRoot?i.parentNode.host:i.parentNode}function A1(i){for(let n=i;n;n=Au(n))if(n instanceof Element&&getComputedStyle(n).display==="none")return null;for(let n=Au(i);n;n=Au(n)){if(!(n instanceof Element))continue;const r=getComputedStyle(n);if(r.display!=="contents"&&(r.position!=="static"||Po(r)||n.tagName==="BODY"))return n}return null}function E1(i){return i!==null&&typeof i=="object"&&"getBoundingClientRect"in i&&("contextElement"in i?i instanceof Element:!0)}var Rt=class extends kt{constructor(){super(...arguments),this.localize=new Me(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const i=this.anchorEl.getBoundingClientRect(),n=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom");let c=0,u=0,f=0,h=0,y=0,v=0,g=0,C=0;r?i.top<n.top?(c=i.left,u=i.bottom,f=i.right,h=i.bottom,y=n.left,v=n.top,g=n.right,C=n.top):(c=n.left,u=n.bottom,f=n.right,h=n.bottom,y=i.left,v=i.top,g=i.right,C=i.top):i.left<n.left?(c=i.right,u=i.top,f=n.left,h=n.top,y=i.right,v=i.bottom,g=n.left,C=n.bottom):(c=n.right,u=n.top,f=i.left,h=i.top,y=n.right,v=n.bottom,g=i.left,C=i.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${c}px`),this.style.setProperty("--hover-bridge-top-left-y",`${u}px`),this.style.setProperty("--hover-bridge-top-right-x",`${f}px`),this.style.setProperty("--hover-bridge-top-right-y",`${h}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${y}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${v}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${g}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${C}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(i){super.updated(i),i.has("active")&&(this.active?this.start():this.stop()),i.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const i=this.getRootNode();this.anchorEl=i.getElementById(this.anchor)}else this.anchor instanceof Element||E1(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=y1(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(i=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>i())):i()})}reposition(){if(!this.active||!this.anchorEl)return;const i=[_1({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?i.push(D0({apply:({rects:r})=>{const c=this.sync==="width"||this.sync==="both",u=this.sync==="height"||this.sync==="both";this.popup.style.width=c?`${r.reference.width}px`:"",this.popup.style.height=u?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&i.push(w1({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&i.push(x1({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?i.push(D0({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:c})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${c}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&i.push(S1({element:this.arrowEl,padding:this.arrowPadding}));const n=this.strategy==="absolute"?r=>qo.getOffsetParent(r,C1):qo.getOffsetParent;z1(this.anchorEl,this.popup,{placement:this.placement,middleware:i,strategy:this.strategy,platform:ms(xa({},qo),{getOffsetParent:n})}).then(({x:r,y:c,middlewareData:u,placement:f})=>{const h=this.localize.dir()==="rtl",y={top:"bottom",right:"left",bottom:"top",left:"right"}[f.split("-")[0]];if(this.setAttribute("data-current-placement",f),Object.assign(this.popup.style,{left:`${r}px`,top:`${c}px`}),this.arrow){const v=u.arrow.x,g=u.arrow.y;let C="",k="",N="",O="";if(this.arrowPlacement==="start"){const U=typeof v=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";C=typeof g=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",k=h?U:"",O=h?"":U}else if(this.arrowPlacement==="end"){const U=typeof v=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";k=h?"":U,O=h?U:"",N=typeof g=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(O=typeof v=="number"?"calc(50% - var(--arrow-size-diagonal))":"",C=typeof g=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(O=typeof v=="number"?`${v}px`:"",C=typeof g=="number"?`${g}px`:"");Object.assign(this.arrowEl.style,{top:C,right:k,bottom:N,left:O,[y]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return st`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Mt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Mt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?st`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};Rt.styles=[jt,qy];m([ft(".popup")],Rt.prototype,"popup",2);m([ft(".popup__arrow")],Rt.prototype,"arrowEl",2);m([_()],Rt.prototype,"anchor",2);m([_({type:Boolean,reflect:!0})],Rt.prototype,"active",2);m([_({reflect:!0})],Rt.prototype,"placement",2);m([_({reflect:!0})],Rt.prototype,"strategy",2);m([_({type:Number})],Rt.prototype,"distance",2);m([_({type:Number})],Rt.prototype,"skidding",2);m([_({type:Boolean})],Rt.prototype,"arrow",2);m([_({attribute:"arrow-placement"})],Rt.prototype,"arrowPlacement",2);m([_({attribute:"arrow-padding",type:Number})],Rt.prototype,"arrowPadding",2);m([_({type:Boolean})],Rt.prototype,"flip",2);m([_({attribute:"flip-fallback-placements",converter:{fromAttribute:i=>i.split(" ").map(n=>n.trim()).filter(n=>n!==""),toAttribute:i=>i.join(" ")}})],Rt.prototype,"flipFallbackPlacements",2);m([_({attribute:"flip-fallback-strategy"})],Rt.prototype,"flipFallbackStrategy",2);m([_({type:Object})],Rt.prototype,"flipBoundary",2);m([_({attribute:"flip-padding",type:Number})],Rt.prototype,"flipPadding",2);m([_({type:Boolean})],Rt.prototype,"shift",2);m([_({type:Object})],Rt.prototype,"shiftBoundary",2);m([_({attribute:"shift-padding",type:Number})],Rt.prototype,"shiftPadding",2);m([_({attribute:"auto-size"})],Rt.prototype,"autoSize",2);m([_()],Rt.prototype,"sync",2);m([_({type:Object})],Rt.prototype,"autoSizeBoundary",2);m([_({attribute:"auto-size-padding",type:Number})],Rt.prototype,"autoSizePadding",2);m([_({attribute:"hover-bridge",type:Boolean})],Rt.prototype,"hoverBridge",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Uu extends Fu{constructor(n){if(super(n),this.it=Ft,n.type!==pa.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(n){if(n===Ft||n==null)return this._t=void 0,this.it=n;if(n===sl)return n;if(typeof n!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(n===this.it)return this._t;this.it=n;const r=[n];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Uu.directiveName="unsafeHTML",Uu.resultType=1;const T1=Ku(Uu);var bt=class extends kt{constructor(){super(...arguments),this.formControlController=new Yi(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Cl(this,"help-text","label"),this.localize=new Me(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=i=>st`
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
    `,this.handleDocumentFocusIn=i=>{const n=i.composedPath();this&&!n.includes(this)&&this.hide()},this.handleDocumentKeyDown=i=>{const n=i.target,r=n.closest(".select__clear")!==null,c=n.closest("sl-icon-button")!==null;if(!(r||c)){if(i.key==="Escape"&&this.open&&!this.closeWatcher&&(i.preventDefault(),i.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),i.key==="Enter"||i.key===" "&&this.typeToSelectString===""){if(i.preventDefault(),i.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(i.key)){const u=this.getAllOptions(),f=u.indexOf(this.currentOption);let h=Math.max(0,f);if(i.preventDefault(),!this.open&&(this.show(),this.currentOption))return;i.key==="ArrowDown"?(h=f+1,h>u.length-1&&(h=0)):i.key==="ArrowUp"?(h=f-1,h<0&&(h=u.length-1)):i.key==="Home"?h=0:i.key==="End"&&(h=u.length-1),this.setCurrentOption(u[h])}if(i.key&&i.key.length===1||i.key==="Backspace"){const u=this.getAllOptions();if(i.metaKey||i.ctrlKey||i.altKey)return;if(!this.open){if(i.key==="Backspace")return;this.show()}i.stopPropagation(),i.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),i.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=i.key.toLowerCase();for(const f of u)if(f.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(f);break}}}},this.handleDocumentMouseDown=i=>{const n=i.composedPath();this&&!n.includes(this)&&this.hide()}}get value(){return this._value}set value(i){this.multiple?i=Array.isArray(i)?i:i.split(" "):i=Array.isArray(i)?i.join(" "):i,this._value!==i&&(this.valueHasChanged=!0,this._value=i)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var i;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((i=this.closeWatcher)==null||i.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var i;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(i=this.closeWatcher)==null||i.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(i){const r=i.composedPath().some(c=>c instanceof Element&&c.tagName.toLowerCase()==="sl-icon-button");this.disabled||r||(i.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(i){i.key!=="Tab"&&(i.stopPropagation(),this.handleDocumentKeyDown(i))}handleClearClick(i){i.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(i){i.stopPropagation(),i.preventDefault()}handleOptionClick(i){const r=i.target.closest("sl-option"),c=this.value;r&&!r.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(r):this.setSelectedOptions(r),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==c&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const i=this.getAllOptions(),n=this.valueHasChanged?this.value:this.defaultValue,r=Array.isArray(n)?n:[n],c=[];i.forEach(u=>c.push(u.value)),this.setSelectedOptions(i.filter(u=>r.includes(u.value)))}handleTagRemove(i,n){i.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(n,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(i){this.getAllOptions().forEach(r=>{r.current=!1,r.tabIndex=-1}),i&&(this.currentOption=i,i.current=!0,i.tabIndex=0,i.focus())}setSelectedOptions(i){const n=this.getAllOptions(),r=Array.isArray(i)?i:[i];n.forEach(c=>c.selected=!1),r.length&&r.forEach(c=>c.selected=!0),this.selectionChanged()}toggleOptionSelection(i,n){n===!0||n===!1?i.selected=n:i.selected=!i.selected,this.selectionChanged()}selectionChanged(){var i,n,r;const c=this.getAllOptions();this.selectedOptions=c.filter(f=>f.selected);const u=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(f=>f.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const f=this.selectedOptions[0];this.value=(i=f==null?void 0:f.value)!=null?i:"",this.displayLabel=(r=(n=f==null?void 0:f.getTextLabel)==null?void 0:n.call(f))!=null?r:""}this.valueHasChanged=u,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((i,n)=>{if(n<this.maxOptionsVisible||this.maxOptionsVisible<=0){const r=this.getTag(i,n);return st`<div @sl-remove=${c=>this.handleTagRemove(c,i)}>
          ${typeof r=="string"?T1(r):r}
        </div>`}else if(n===this.maxOptionsVisible)return st`<sl-tag size=${this.size}>+${this.selectedOptions.length-n}</sl-tag>`;return st``})}handleInvalid(i){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(i)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(i,n,r){if(super.attributeChangedCallback(i,n,r),i==="value"){const c=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=c}}handleValueChange(){if(!this.valueHasChanged){const r=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=r}const i=this.getAllOptions(),n=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(i.filter(r=>n.includes(r.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Te(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:i,options:n}=se(this,"select.show",{dir:this.localize.dir()});await be(this.popup.popup,i,n),this.currentOption&&py(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Te(this);const{keyframes:i,options:n}=se(this,"select.hide",{dir:this.localize.dir()});await be(this.popup.popup,i,n),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Sl(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Sl(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(i){this.valueInput.setCustomValidity(i),this.formControlController.updateValidity()}focus(i){this.displayInput.focus(i)}blur(){this.displayInput.blur()}render(){const i=this.hasSlotController.test("label"),n=this.hasSlotController.test("help-text"),r=this.label?!0:!!i,c=this.helpText?!0:!!n,u=this.clearable&&!this.disabled&&this.value.length>0,f=this.placeholder&&this.value&&this.value.length<=0;return st`
      <div
        part="form-control"
        class=${Mt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":c})}
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
            class=${Mt({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":f,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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

              ${this.multiple?st`<div part="tags" class="select__tags">${this.tags}</div>`:""}

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

              ${u?st`
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
    `}};bt.styles=[jt,bs,Vy];bt.dependencies={"sl-icon":ve,"sl-popup":Rt,"sl-tag":Ia};m([ft(".select")],bt.prototype,"popup",2);m([ft(".select__combobox")],bt.prototype,"combobox",2);m([ft(".select__display-input")],bt.prototype,"displayInput",2);m([ft(".select__value-input")],bt.prototype,"valueInput",2);m([ft(".select__listbox")],bt.prototype,"listbox",2);m([Bt()],bt.prototype,"hasFocus",2);m([Bt()],bt.prototype,"displayLabel",2);m([Bt()],bt.prototype,"currentOption",2);m([Bt()],bt.prototype,"selectedOptions",2);m([Bt()],bt.prototype,"valueHasChanged",2);m([_()],bt.prototype,"name",2);m([Bt()],bt.prototype,"value",1);m([_({attribute:"value"})],bt.prototype,"defaultValue",2);m([_({reflect:!0})],bt.prototype,"size",2);m([_()],bt.prototype,"placeholder",2);m([_({type:Boolean,reflect:!0})],bt.prototype,"multiple",2);m([_({attribute:"max-options-visible",type:Number})],bt.prototype,"maxOptionsVisible",2);m([_({type:Boolean,reflect:!0})],bt.prototype,"disabled",2);m([_({type:Boolean})],bt.prototype,"clearable",2);m([_({type:Boolean,reflect:!0})],bt.prototype,"open",2);m([_({type:Boolean})],bt.prototype,"hoist",2);m([_({type:Boolean,reflect:!0})],bt.prototype,"filled",2);m([_({type:Boolean,reflect:!0})],bt.prototype,"pill",2);m([_()],bt.prototype,"label",2);m([_({reflect:!0})],bt.prototype,"placement",2);m([_({attribute:"help-text"})],bt.prototype,"helpText",2);m([_({reflect:!0})],bt.prototype,"form",2);m([_({type:Boolean,reflect:!0})],bt.prototype,"required",2);m([_()],bt.prototype,"getTag",2);m([pt("disabled",{waitUntilFirstUpdate:!0})],bt.prototype,"handleDisabledChange",1);m([pt(["defaultValue","value"],{waitUntilFirstUpdate:!0})],bt.prototype,"handleValueChange",1);m([pt("open",{waitUntilFirstUpdate:!0})],bt.prototype,"handleOpenChange",1);Ht("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Ht("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var k1="sl-select";bt.define("sl-select");var O1=Wt({tagName:k1,elementClass:bt,react:Jt,events:{onSlChange:"sl-change",onSlClear:"sl-clear",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlBlur:"sl-blur",onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInvalid:"sl-invalid"},displayName:"SlSelect"}),Ko=O1,D1=Ut`
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
`,Ze=class extends kt{constructor(){super(...arguments),this.localize=new Me(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const i=this.closest("sl-select");i&&i.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const i=this.childNodes;let n="";return[...i].forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&(r.hasAttribute("slot")||(n+=r.textContent)),r.nodeType===Node.TEXT_NODE&&(n+=r.textContent)}),n.trim()}render(){return st`
      <div
        part="base"
        class=${Mt({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Ze.styles=[jt,D1];Ze.dependencies={"sl-icon":ve};m([ft(".option__label")],Ze.prototype,"defaultSlot",2);m([Bt()],Ze.prototype,"current",2);m([Bt()],Ze.prototype,"selected",2);m([Bt()],Ze.prototype,"hasHover",2);m([_({reflect:!0})],Ze.prototype,"value",2);m([_({type:Boolean,reflect:!0})],Ze.prototype,"disabled",2);m([pt("disabled")],Ze.prototype,"handleDisabledChange",1);m([pt("selected")],Ze.prototype,"handleSelectedChange",1);m([pt("value")],Ze.prototype,"handleValueChange",1);var R1="sl-option";Ze.define("sl-option");var $1=Wt({tagName:R1,elementClass:Ze,react:Jt,events:{},displayName:"SlOption"}),ga=$1,N1="sl-spinner";gs.define("sl-spinner");Wt({tagName:N1,elementClass:gs,react:Jt,events:{},displayName:"SlSpinner"});var M1=Ut`
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
`,Ki=class extends kt{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return st`
      <span
        part="base"
        class=${Mt({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Ki.styles=[jt,M1];m([_({reflect:!0})],Ki.prototype,"variant",2);m([_({type:Boolean,reflect:!0})],Ki.prototype,"pill",2);m([_({type:Boolean,reflect:!0})],Ki.prototype,"pulse",2);var U1="sl-badge";Ki.define("sl-badge");var H1=Wt({tagName:U1,elementClass:Ki,react:Jt,events:{},displayName:"SlBadge"}),B1=H1,L1=Ut`
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
`,ue=class extends kt{constructor(){super(),this.localize=new Me(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=i=>{i.key==="Escape"&&(i.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const i=z0(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),i)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const i=z0(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),i)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.closeWatcher)==null||i.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(i){return this.trigger.split(" ").includes(i)}async handleOpenChange(){var i,n;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((i=this.closeWatcher)==null||i.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Te(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:r,options:c}=se(this,"tooltip.show",{dir:this.localize.dir()});await be(this.popup.popup,r,c),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(n=this.closeWatcher)==null||n.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Te(this.body);const{keyframes:r,options:c}=se(this,"tooltip.hide",{dir:this.localize.dir()});await be(this.popup.popup,r,c),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Sl(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Sl(this,"sl-after-hide")}render(){return st`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Mt({tooltip:!0,"tooltip--open":this.open})}
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
    `}};ue.styles=[jt,L1];ue.dependencies={"sl-popup":Rt};m([ft("slot:not([name])")],ue.prototype,"defaultSlot",2);m([ft(".tooltip__body")],ue.prototype,"body",2);m([ft("sl-popup")],ue.prototype,"popup",2);m([_()],ue.prototype,"content",2);m([_()],ue.prototype,"placement",2);m([_({type:Boolean,reflect:!0})],ue.prototype,"disabled",2);m([_({type:Number})],ue.prototype,"distance",2);m([_({type:Boolean,reflect:!0})],ue.prototype,"open",2);m([_({type:Number})],ue.prototype,"skidding",2);m([_()],ue.prototype,"trigger",2);m([_({type:Boolean})],ue.prototype,"hoist",2);m([pt("open",{waitUntilFirstUpdate:!0})],ue.prototype,"handleOpenChange",1);m([pt(["content","distance","hoist","placement","skidding"])],ue.prototype,"handleOptionsChange",1);m([pt("disabled")],ue.prototype,"handleDisabledChange",1);Ht("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});Ht("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var j1="sl-tooltip";ue.define("sl-tooltip");var V1=Wt({tagName:j1,elementClass:ue,react:Jt,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlTooltip"}),q1=V1,Y1=Ut`
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
`,X1=Ut`
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
 */function R0(i,n,r){return i?n(i):r==null?void 0:r(i)}var It=class Hu extends kt{constructor(){super(...arguments),this.localize=new Me(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(n){return n instanceof Element&&n.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await Te(this.childrenContainer);const{keyframes:n,options:r}=se(this,"tree-item.collapse",{dir:this.localize.dir()});await be(this.childrenContainer,C0(n,this.childrenContainer.scrollHeight),r),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const n=this.parentElement;return!!n&&Hu.isTreeItem(n)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(n){n.has("selected")&&!n.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await Te(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:n,options:r}=se(this,"tree-item.expand",{dir:this.localize.dir()});await be(this.childrenContainer,C0(n,this.childrenContainer.scrollHeight),r),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:n=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(r=>Hu.isTreeItem(r)&&(n||!r.disabled)):[]}render(){const n=this.localize.dir()==="rtl",r=!this.loading&&(!this.isLeaf||this.lazy);return st`
      <div
        part="base"
        class="${Mt({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":r,"tree-item--rtl":this.localize.dir()==="rtl"})}"
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
            class=${Mt({"tree-item__expand-button":!0,"tree-item__expand-button--visible":r})}
            aria-hidden="true"
          >
            ${R0(this.loading,()=>st` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${n?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${n?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${R0(this.selectable,()=>st`
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
                ?checked="${Vi(this.selected)}"
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
    `}};It.styles=[jt,X1];It.dependencies={"sl-checkbox":oe,"sl-icon":ve,"sl-spinner":gs};m([Bt()],It.prototype,"indeterminate",2);m([Bt()],It.prototype,"isLeaf",2);m([Bt()],It.prototype,"loading",2);m([Bt()],It.prototype,"selectable",2);m([_({type:Boolean,reflect:!0})],It.prototype,"expanded",2);m([_({type:Boolean,reflect:!0})],It.prototype,"selected",2);m([_({type:Boolean,reflect:!0})],It.prototype,"disabled",2);m([_({type:Boolean,reflect:!0})],It.prototype,"lazy",2);m([ft("slot:not([name])")],It.prototype,"defaultSlot",2);m([ft("slot[name=children]")],It.prototype,"childrenSlot",2);m([ft(".tree-item__item")],It.prototype,"itemElement",2);m([ft(".tree-item__children")],It.prototype,"childrenContainer",2);m([ft(".tree-item__expand-button slot")],It.prototype,"expandButtonSlot",2);m([pt("loading",{waitUntilFirstUpdate:!0})],It.prototype,"handleLoadingChange",1);m([pt("disabled")],It.prototype,"handleDisabledChange",1);m([pt("selected")],It.prototype,"handleSelectedChange",1);m([pt("expanded",{waitUntilFirstUpdate:!0})],It.prototype,"handleExpandedChange",1);m([pt("expanded",{waitUntilFirstUpdate:!0})],It.prototype,"handleExpandAnimation",1);m([pt("lazy",{waitUntilFirstUpdate:!0})],It.prototype,"handleLazyChange",1);var Bi=It;Ht("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});Ht("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});function G1(i,n,r){const c=u=>Object.is(u,-0)?0:u;return i<n?c(n):i>r?c(r):c(i)}function $0(i,n=!1){function r(f){const h=f.getChildrenItems({includeDisabled:!1});if(h.length){const y=h.every(g=>g.selected),v=h.every(g=>!g.selected&&!g.indeterminate);f.selected=y,f.indeterminate=!y&&!v}}function c(f){const h=f.parentElement;Bi.isTreeItem(h)&&(r(h),c(h))}function u(f){for(const h of f.getChildrenItems())h.selected=n?f.selected||h.selected:!h.disabled&&f.selected,u(h);n&&r(f)}u(i),c(i)}var wa=class extends kt{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new Me(this),this.initTreeItem=i=>{i.selectable=this.selection==="multiple",["expand","collapse"].filter(n=>!!this.querySelector(`[slot="${n}-icon"]`)).forEach(n=>{const r=i.querySelector(`[slot="${n}-icon"]`),c=this.getExpandButtonIcon(n);c&&(r===null?i.append(c):r.hasAttribute("data-default")&&r.replaceWith(c))})},this.handleTreeChanged=i=>{for(const n of i){const r=[...n.addedNodes].filter(Bi.isTreeItem),c=[...n.removedNodes].filter(Bi.isTreeItem);r.forEach(this.initTreeItem),this.lastFocusedItem&&c.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=i=>{const n=i.relatedTarget;(!n||!this.contains(n))&&(this.tabIndex=0)},this.handleFocusIn=i=>{const n=i.target;i.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Bi.isTreeItem(n)&&!n.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=n,this.tabIndex=-1,n.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.mutationObserver)==null||i.disconnect()}getExpandButtonIcon(i){const r=(i==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(r){const c=r.cloneNode(!0);return[c,...c.querySelectorAll("[id]")].forEach(u=>u.removeAttribute("id")),c.setAttribute("data-default",""),c.slot=`${i}-icon`,c}return null}selectItem(i){const n=[...this.selectedItems];if(this.selection==="multiple")i.selected=!i.selected,i.lazy&&(i.expanded=!0),$0(i);else if(this.selection==="single"||i.isLeaf){const c=this.getAllTreeItems();for(const u of c)u.selected=u===i}else this.selection==="leaf"&&(i.expanded=!i.expanded);const r=this.selectedItems;(n.length!==r.length||r.some(c=>!n.includes(c)))&&Promise.all(r.map(c=>c.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:r}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(i){i==null||i.focus()}handleKeyDown(i){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(i.key)||i.composedPath().some(u=>{var f;return["input","textarea"].includes((f=u==null?void 0:u.tagName)==null?void 0:f.toLowerCase())}))return;const n=this.getFocusableItems(),r=this.localize.dir()==="ltr",c=this.localize.dir()==="rtl";if(n.length>0){i.preventDefault();const u=n.findIndex(v=>v.matches(":focus")),f=n[u],h=v=>{const g=n[G1(v,0,n.length-1)];this.focusItem(g)},y=v=>{f.expanded=v};i.key==="ArrowDown"?h(u+1):i.key==="ArrowUp"?h(u-1):r&&i.key==="ArrowRight"||c&&i.key==="ArrowLeft"?!f||f.disabled||f.expanded||f.isLeaf&&!f.lazy?h(u+1):y(!0):r&&i.key==="ArrowLeft"||c&&i.key==="ArrowRight"?!f||f.disabled||f.isLeaf||!f.expanded?h(u-1):y(!1):i.key==="Home"?h(0):i.key==="End"?h(n.length-1):(i.key==="Enter"||i.key===" ")&&(f.disabled||this.selectItem(f))}}handleClick(i){const n=i.target,r=n.closest("sl-tree-item"),c=i.composedPath().some(u=>{var f;return(f=u==null?void 0:u.classList)==null?void 0:f.contains("tree-item__expand-button")});!r||r.disabled||n!==this.clickTarget||(c?r.expanded=!r.expanded:this.selectItem(r))}handleMouseDown(i){this.clickTarget=i.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const i=this.selection==="multiple",n=this.getAllTreeItems();this.setAttribute("aria-multiselectable",i?"true":"false");for(const r of n)r.selectable=i;i&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(r=>$0(r,!0)))}get selectedItems(){const i=this.getAllTreeItems(),n=r=>r.selected;return i.filter(n)}getFocusableItems(){const i=this.getAllTreeItems(),n=new Set;return i.filter(r=>{var c;if(r.disabled)return!1;const u=(c=r.parentElement)==null?void 0:c.closest("[role=treeitem]");return u&&(!u.expanded||u.loading||n.has(u))&&n.add(r),!n.has(r)})}render(){return st`
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
    `}};wa.styles=[jt,Y1];m([ft("slot:not([name])")],wa.prototype,"defaultSlot",2);m([ft("slot[name=expand-icon]")],wa.prototype,"expandedIconSlot",2);m([ft("slot[name=collapse-icon]")],wa.prototype,"collapsedIconSlot",2);m([_()],wa.prototype,"selection",2);m([pt("selection")],wa.prototype,"handleSelectionChange",1);var Q1="sl-tree";wa.define("sl-tree");Wt({tagName:Q1,elementClass:wa,react:Jt,events:{onSlSelectionChange:"sl-selection-change"},displayName:"SlTree"});var Z1="sl-tree-item";Bi.define("sl-tree-item");Wt({tagName:Z1,elementClass:Bi,react:Jt,events:{onSlExpand:"sl-expand",onSlAfterExpand:"sl-after-expand",onSlCollapse:"sl-collapse",onSlAfterCollapse:"sl-after-collapse",onSlLazyChange:"sl-lazy-change",onSlLazyLoad:"sl-lazy-load"},displayName:"SlTreeItem"});var K1=Ut`
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
`,de=class extends kt{constructor(){super(...arguments),this.localize=new Me(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let i=this.value;if(this.from){const n=this.getRootNode(),r=this.from.includes("."),c=this.from.includes("[")&&this.from.includes("]");let u=this.from,f="";r?[u,f]=this.from.trim().split("."):c&&([u,f]=this.from.trim().replace(/\]$/,"").split("["));const h="getElementById"in n?n.getElementById(u):null;h?c?i=h.getAttribute(f)||"":r?i=h[f]||"":i=h.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!i)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(i),this.showStatus("success"),this.emit("sl-copy",{detail:{value:i}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(i){const n=this.copyLabel||this.localize.term("copy"),r=this.successLabel||this.localize.term("copied"),c=this.errorLabel||this.localize.term("error"),u=i==="success"?this.successIcon:this.errorIcon,f=se(this,"copy.in",{dir:"ltr"}),h=se(this,"copy.out",{dir:"ltr"});this.tooltip.content=i==="success"?r:c,await this.copyIcon.animate(h.keyframes,h.options).finished,this.copyIcon.hidden=!0,this.status=i,u.hidden=!1,await u.animate(f.keyframes,f.options).finished,setTimeout(async()=>{await u.animate(h.keyframes,h.options).finished,u.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(f.keyframes,f.options).finished,this.tooltip.content=n,this.isCopying=!1},this.feedbackDuration)}render(){const i=this.copyLabel||this.localize.term("copy");return st`
      <sl-tooltip
        class=${Mt({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
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
    `}};de.styles=[jt,K1];de.dependencies={"sl-icon":ve,"sl-tooltip":ue};m([ft('slot[name="copy-icon"]')],de.prototype,"copyIcon",2);m([ft('slot[name="success-icon"]')],de.prototype,"successIcon",2);m([ft('slot[name="error-icon"]')],de.prototype,"errorIcon",2);m([ft("sl-tooltip")],de.prototype,"tooltip",2);m([Bt()],de.prototype,"isCopying",2);m([Bt()],de.prototype,"status",2);m([_()],de.prototype,"value",2);m([_()],de.prototype,"from",2);m([_({type:Boolean,reflect:!0})],de.prototype,"disabled",2);m([_({attribute:"copy-label"})],de.prototype,"copyLabel",2);m([_({attribute:"success-label"})],de.prototype,"successLabel",2);m([_({attribute:"error-label"})],de.prototype,"errorLabel",2);m([_({attribute:"feedback-duration",type:Number})],de.prototype,"feedbackDuration",2);m([_({attribute:"tooltip-placement"})],de.prototype,"tooltipPlacement",2);m([_({type:Boolean})],de.prototype,"hoist",2);Ht("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});Ht("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});var F1="sl-copy-button";de.define("sl-copy-button");var J1=Wt({tagName:F1,elementClass:de,react:Jt,events:{onSlCopy:"sl-copy",onSlError:"sl-error"},displayName:"SlCopyButton"}),dm=J1,W1=Ut`
  :host {
    display: contents;
  }
`;const I1=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],P1=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],t_=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],e_=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],l_=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],a_=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],i_=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],n_=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],s_=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],o_=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],r_=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],c_=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],u_=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],d_=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],f_=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],h_=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],p_=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],m_=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],g_=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],b_=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],v_=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],y_=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],__=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],x_=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],w_=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],S_=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],z_=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],C_=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],A_=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],E_=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],T_=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],k_=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],O_=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],D_=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],R_=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],$_=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],N_=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],M_=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],U_=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],H_=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],B_=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],L_=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],j_=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],V_=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],q_=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],Y_=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],X_=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],G_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],Q_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],Z_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],K_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],F_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],J_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],W_=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],I_=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],P_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],tx=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],ex=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],lx=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],ax=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],ix=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],nx=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],sx=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],ox=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],rx=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],cx=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],ux=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],dx=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],fx=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],hx=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],px=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],mx=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],gx=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],bx=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],vx=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],yx=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],_x=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],xx=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],wx=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Sx=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],zx=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],Cx=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],Ax=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],Ex=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],Tx=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],kx=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],Ox=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Dx=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],Rx=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],$x=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Nx=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Mx=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Ux=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Hx=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],Bx=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Lx=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],jx=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],Vx=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],fm={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},qx=Object.freeze(Object.defineProperty({__proto__:null,backInDown:d_,backInLeft:f_,backInRight:h_,backInUp:p_,backOutDown:m_,backOutLeft:g_,backOutRight:b_,backOutUp:v_,bounce:I1,bounceIn:y_,bounceInDown:__,bounceInLeft:x_,bounceInRight:w_,bounceInUp:S_,bounceOut:z_,bounceOutDown:C_,bounceOutLeft:A_,bounceOutRight:E_,bounceOutUp:T_,easings:fm,fadeIn:k_,fadeInBottomLeft:O_,fadeInBottomRight:D_,fadeInDown:R_,fadeInDownBig:$_,fadeInLeft:N_,fadeInLeftBig:M_,fadeInRight:U_,fadeInRightBig:H_,fadeInTopLeft:B_,fadeInTopRight:L_,fadeInUp:j_,fadeInUpBig:V_,fadeOut:q_,fadeOutBottomLeft:Y_,fadeOutBottomRight:X_,fadeOutDown:G_,fadeOutDownBig:Q_,fadeOutLeft:Z_,fadeOutLeftBig:K_,fadeOutRight:F_,fadeOutRightBig:J_,fadeOutTopLeft:W_,fadeOutTopRight:I_,fadeOutUp:P_,fadeOutUpBig:tx,flash:P1,flip:ex,flipInX:lx,flipInY:ax,flipOutX:ix,flipOutY:nx,headShake:t_,heartBeat:e_,hinge:Tx,jackInTheBox:kx,jello:l_,lightSpeedInLeft:sx,lightSpeedInRight:ox,lightSpeedOutLeft:rx,lightSpeedOutRight:cx,pulse:a_,rollIn:Ox,rollOut:Dx,rotateIn:ux,rotateInDownLeft:dx,rotateInDownRight:fx,rotateInUpLeft:hx,rotateInUpRight:px,rotateOut:mx,rotateOutDownLeft:gx,rotateOutDownRight:bx,rotateOutUpLeft:vx,rotateOutUpRight:yx,rubberBand:i_,shake:n_,shakeX:s_,shakeY:o_,slideInDown:_x,slideInLeft:xx,slideInRight:wx,slideInUp:Sx,slideOutDown:zx,slideOutLeft:Cx,slideOutRight:Ax,slideOutUp:Ex,swing:r_,tada:c_,wobble:u_,zoomIn:Rx,zoomInDown:$x,zoomInLeft:Nx,zoomInRight:Mx,zoomInUp:Ux,zoomOut:Hx,zoomOutDown:Bx,zoomOutLeft:Lx,zoomOutRight:jx,zoomOutUp:Vx},Symbol.toStringTag,{value:"Module"}));var fe=class extends kt{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var i,n;return(n=(i=this.animation)==null?void 0:i.currentTime)!=null?n:0}set currentTime(i){this.animation&&(this.animation.currentTime=i)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var i,n;const r=(i=fm[this.easing])!=null?i:this.easing,c=(n=this.keyframes)!=null?n:qx[this.name],f=(await this.defaultSlot).assignedElements()[0];return!f||!c?!1:(this.destroyAnimation(),this.animation=f.animate(c,{delay:this.delay,direction:this.direction,duration:this.duration,easing:r,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var i;(i=this.animation)==null||i.cancel()}finish(){var i;(i=this.animation)==null||i.finish()}render(){return st` <slot @slotchange=${this.handleSlotChange}></slot> `}};fe.styles=[jt,W1];m([Dv("slot")],fe.prototype,"defaultSlot",2);m([_()],fe.prototype,"name",2);m([_({type:Boolean,reflect:!0})],fe.prototype,"play",2);m([_({type:Number})],fe.prototype,"delay",2);m([_()],fe.prototype,"direction",2);m([_({type:Number})],fe.prototype,"duration",2);m([_()],fe.prototype,"easing",2);m([_({attribute:"end-delay",type:Number})],fe.prototype,"endDelay",2);m([_()],fe.prototype,"fill",2);m([_({type:Number})],fe.prototype,"iterations",2);m([_({attribute:"iteration-start",type:Number})],fe.prototype,"iterationStart",2);m([_({attribute:!1})],fe.prototype,"keyframes",2);m([_({attribute:"playback-rate",type:Number})],fe.prototype,"playbackRate",2);m([pt(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],fe.prototype,"handleAnimationChange",1);m([pt("play")],fe.prototype,"handlePlayChange",1);m([pt("playbackRate")],fe.prototype,"handlePlaybackRateChange",1);var Yx="sl-animation";fe.define("sl-animation");var Xx=Wt({tagName:Yx,elementClass:fe,react:Jt,events:{onSlCancel:"sl-cancel",onSlFinish:"sl-finish",onSlStart:"sl-start"},displayName:"SlAnimation"}),hm=Xx,Gx=Ut`
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
`,nd=class extends kt{constructor(){super(...arguments),this.hasSlotController=new Cl(this,"footer","header","image")}render(){return st`
      <div
        part="base"
        class=${Mt({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};nd.styles=[jt,Gx];var Qx="sl-card";nd.define("sl-card");Wt({tagName:Qx,elementClass:nd,react:Jt,events:{},displayName:"SlCard"});function pm(i){const n=document.querySelector("html"),r="sl-theme-dark",c="sl-theme-light";i==="dark"&&(n.classList.contains(r)||n.classList.add(r),n.classList.remove(c)),i==="light"&&(n.classList.contains(c)||n.classList.add(c),n.classList.remove(r))}const sd="STANDARD",Zx="http://",Kx="https://",od="HTTP",rd="IMAGE",cd="NUMBER",ud="UUID",mm=[sd,od,rd,cd,ud];function Fx(i,n=!1){const r=/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i,c=/^([0-9]|#|\+|\*|-|,|\s)+$/gm,u=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/g;let f=sd;return r.test(i)&&(f=rd),(i.includes(Kx)||i.includes(Zx))&&(f=od),c.test(i)&&(f=cd),u.test(i)&&(f=ud),{text:i,date:new Date().toLocaleDateString(),type:f,isFavorite:n}}function Jx(i,n,r){let c;return r?c=i.filter(u=>u.type!==n):c=i.filter(u=>u.type!==n||u.type===n&&u.isFavorite),c}const Wx=i=>i===sd?"bag-plus-fill":i===od?"router-fill":i===rd?"image-fill":i===cd?"1-square-fill":i===ud?"database-fill":"";function Ix(i){let n=!0,r;console.log("data",i);try{r=JSON.parse(i)}catch{n=!1}if(r){typeof r=="object"&&Object.keys(r).length===0&&(n=!1),typeof r!="object"&&(n=!1);for(let[c,u]of Object.entries(r)){if(console.log("key",c),c==="version"&&typeof u!="number"&&(n=!1),c==="history")if(Array.isArray(u))for(let f=0;f<u.length;f++)Object.keys(u[f]).forEach(y=>{y==="text"&&typeof u[f][y]!="string"&&(n=!1),y==="date"&&typeof u[f][y]!="string"&&(u[f][y]="na/na/na"),y==="type"&&typeof u[f][y]!="string"&&(u[f][y]="STANDARD"),y==="isFavorite"&&typeof u[f][y]!="boolean"&&(u[f][y]=!1)});else n=!1;c==="ui"&&(typeof u=="object"&&u!==null?Object.keys(u).forEach(h=>{h==="theme"&&(u[h]!=="dark"||u[h]!=="light")&&(u[h]="dark"),h==="lineClamp"&&typeof u[h]!="boolean"&&(u[h]=!0),h==="historyLength"&&typeof u[h]!="number"&&(u[h]=100),h==="showDates"&&typeof u[h]!="boolean"&&(u[h]=!0),h==="showType"&&typeof u[h]!="boolean"&&(u[h]=!0),h==="showType"&&(u[h]!=="strict"||u[h]!=="loose")&&(u[h]="strict"),h==="showTypes"&&typeof u[h]!="boolean"&&(u[h]=!0)}):n=!1)}}return console.log("isValid",n),console.log("toValidate",r),{isValid:n,data:r}}const Bu="/assets/icon-Ca8nZqDW.png",Px=({data:i,handleSaveUI:n,clearHistory:r,clearHistoryType:c})=>{const[u,f]=Ct.useState(!1),[h,y]=Ct.useState(!1),[v,g]=Ct.useState(!1),[C,k]=Ct.useState(!1),[N,O]=Ct.useState(""),[U,V]=Ct.useState(i.ui.historyLength),[Y,F]=Ct.useState(i.ui.lineClamp),[J,Q]=Ct.useState(i.ui.showDates),[at,q]=Ct.useState(i.ui.showTypes),[it,St]=Ct.useState(i.ui.stackActions),Pt=i.ui.searchRule;Ct.useEffect(()=>{const B=document.querySelector("body"),L=ct=>{ct.key==="E"&&f(!0)};return B.addEventListener("keypress",L),()=>B.removeEventListener("keypress",L)},[]);const X=()=>{r(C)},lt=B=>{c(B,C)},Vt=B=>{const L=B.target.value,ct=parseInt(L,10);if(!ct){V(10);return}if(ct>300){V(300);return}V(ct)},Gt=()=>{let B=U;if(!U){B=10,V(10);return}if(B>300){B=300,V(300);return}n(B,"historyLength")},te=B=>{const L=B.target.checked;F(L),n(L,"lineClamp")},Ot=B=>{const L=B.target.checked;Q(L),n(L,"showDates")},qt=B=>{const L=B.target.checked;q(L),n(L,"showTypes")},j=B=>{const L=B.target.checked;St(L),n(L,"stackActions")},I=B=>{const L=B.target.value;n(L,"searchRule")},Z=B=>{const L=B.target.value;pm(L),n(L,"theme")},mt=B=>{B.target.localName==="sl-select"||B.target.localName==="sl-copy-button"||(g(!1),y(!1),f(!1))},x=()=>{const B=document.querySelector("#zpCore");B.scrollTop=0},H=B=>{const L=B.target.checked;k(L)},P=()=>{const B=Ix(N);console.log("data",B)};return E.jsxs(E.Fragment,{children:[E.jsxs("header",{className:"zp-header",children:[E.jsx("img",{src:Bu,alt:"Zipboard Logo",className:"zp-header-logo"}),E.jsx("div",{className:"zp-h-title",children:"Zipboard"}),E.jsxs("div",{className:"zp-h-actions",children:[E.jsx(Ee,{onClick:x,size:"small",circle:!0,children:E.jsx(xl,{name:"arrow-bar-up"})}),E.jsx(Ee,{onClick:()=>f(!0),size:"small",circle:!0,children:E.jsx(xl,{name:"gear-wide-connected"})})]})]}),E.jsxs(Iu,{label:"App Settings",open:u,onSlAfterHide:mt,children:[!h&&!v&&E.jsxs("div",{children:[E.jsxs("div",{children:[E.jsx("div",{className:"zp-theme-select",children:E.jsxs(Ko,{label:"Theme",size:"small",value:i.ui.theme,onSlChange:Z,children:[E.jsxs(ga,{value:"dark",children:[E.jsx(xl,{name:"moon",slot:"suffix"}),"Dark"]}),E.jsxs(ga,{value:"light",children:[E.jsx(xl,{name:"brightness-high",slot:"suffix"}),"Light"]})]})}),E.jsx("div",{className:"zp-divider"}),E.jsx("div",{className:"zp-mg-bt",children:E.jsxs(Ko,{label:"Search Rule",size:"small",value:Pt,onSlChange:I,children:[E.jsx(ga,{value:"strict",children:"Strict"}),E.jsx(ga,{value:"loose",children:"Loose"})]})}),E.jsxs("div",{className:"zp-flex zp-flex--end",children:[E.jsx("div",{className:"zp-flex-fill",children:E.jsx(fs,{label:"History",type:"number",size:"small",min:"10",max:"300",value:U,onSlInput:Vt})}),E.jsx(Ee,{size:"small",onClick:Gt,children:"Update"})]}),E.jsx("div",{className:"zp-text-small zp-text-small--dim",children:"If your history exceeds the length it will be trimmed and saved"})]}),E.jsx("div",{className:"zp-divider"}),E.jsx("div",{className:"zp-mg-bt",children:E.jsx(Ho,{checked:Y,onSlChange:te,size:"small",children:"Line Clamp"})}),E.jsx("div",{className:"zp-mg-bt",children:E.jsx(Ho,{checked:J,onSlChange:Ot,size:"small",children:"Show Dates"})}),E.jsx("div",{className:"zp-mg-bt",children:E.jsx(Ho,{checked:at,onSlChange:qt,size:"small",children:"Show Types"})}),E.jsx("div",{children:E.jsx(Ho,{checked:it,onSlChange:j,size:"small",children:"Stack Actions"})}),E.jsx("div",{className:"zp-divider"}),E.jsx("div",{className:"zp-mg-bt",children:E.jsx(Ee,{size:"small",variant:"warning",outline:!0,onClick:()=>y(!0),disabled:i.history.length===0,children:"Manage History"})}),E.jsx("div",{children:E.jsx(Ee,{size:"small",variant:"danger",outline:!0,onClick:()=>g(!0),children:"View Data"})})]}),h&&E.jsxs("div",{children:[E.jsx("div",{className:"zp-logo-history",children:E.jsx(hm,{name:"bounce",duration:2e3,play:!0,children:E.jsx("img",{src:Bu,alt:"Zipboard Logo"})})}),E.jsx("div",{className:"zp-mg-bt",children:"This will remove all or some of your history, are you sure?"}),E.jsx("div",{className:"zp-mg-bt",children:E.jsx(tm,{checked:C,onSlChange:H,children:"Remove Favorites on Clear"})}),E.jsx("div",{className:"zp-btn-full zp-mg-bt",children:E.jsx(Ee,{size:"small",variant:"warning",outline:!0,onClick:X,disabled:i.history.length===0,children:"Clear ALL History"})}),mm.map(B=>E.jsx("div",{className:"zp-btn-full zp-mg-bt",children:E.jsxs(Ee,{size:"small",variant:"neutral",outline:!0,onClick:()=>lt(B),disabled:i.history.length===0,children:["Clear ",B]})},B))]}),v&&E.jsxs("div",{children:[E.jsxs("div",{className:"zp-mg-bt",children:["You are entering the ",E.jsx("strong",{className:"zp-text-danger",children:"DANGER ZONE."})]}),E.jsxs("div",{className:"zp-data-display",children:[E.jsx(dm,{value:JSON.stringify(i,null,"  "),"copy-label":"Copy saved data"}),E.jsx("div",{className:"zp-data-text-area",children:E.jsx(Dy,{size:"small",placeholder:"Paste your saved history data to use...",onSlInput:B=>O(B.target.value),rows:12,resize:"none"})}),E.jsx(Ee,{onClick:P,disabled:N.length===0,size:"small",children:"Validate and Save (BETA)"})]})]}),E.jsxs(Ju,{slot:"footer",children:[(h||v)&&E.jsx(Ee,{size:"small",variant:"default",onClick:()=>{y(!1),g(!1)},children:"Back"}),E.jsx(Ee,{size:"small",variant:"primary",onClick:()=>f(!1),children:"Close"})]})]})]})};function t2(i,n){return n==="loose"?i.toLowerCase():i}const e2=({isOpen:i,list:n,editData:r,currentIndex:c,positionMove:u,closeEdit:f,handleSave:h})=>{const[y,v]=Ct.useState(r??{}),[g,C]=Ct.useState(!1),[k,N]=Ct.useState(c??0),O=Array.from({length:u??0}),U=Q=>{C(Q.target.checked)},V=Q=>{const at=Q.target.value;N(parseInt(at,10))},Y=(Q,at)=>{v(q=>({...q,[at]:Q}))},F=Q=>{if(!(Q.target.localName==="sl-select"||Q.target.localName==="sl-copy-button")){if(c!==k)n.splice(c,1),n.splice(k,0,y),h(n);else{const at=n.map((q,it)=>it===c?y:q);h(at)}f==null||f()}},J=Q=>{Q.target.localName==="sl-select"||Q.target.localName==="sl-copy-button"||(v({}),C(!1),f==null||f())};return E.jsxs(Iu,{label:"Edit",open:i,onSlAfterHide:J,children:[E.jsx("div",{className:"zp-mg-bt",children:E.jsx(fs,{label:"Saved Data",value:(y==null?void 0:y.text)??"",onSlInput:Q=>Y(Q.target.value,"text"),size:"small"})}),E.jsx("div",{className:"zp-mg-bt",children:E.jsx(fs,{label:"Add tooltip",value:(y==null?void 0:y.tooltip)??"",onSlInput:Q=>Y(Q.target.value,"tooltip"),size:"small"})}),E.jsx("div",{className:"zp-mg-bt",children:E.jsx(tm,{checked:g,onSlChange:U,children:"Move to"})}),E.jsx("div",{className:"zp-mg-bt",children:E.jsx(Ko,{size:"small","help-text":`Current position is ${c+1}`,onSlChange:V,disabled:!g,children:u!==null&&O.map((Q,at)=>E.jsxs(ga,{value:at,disabled:at===c,children:["Position - ",at]},at))})}),E.jsxs(Ju,{slot:"footer",children:[E.jsx(Ee,{variant:"default",size:"small",onClick:J,children:"Close"}),E.jsx(Ee,{variant:"primary",size:"small",onClick:F,children:"Update"})]})]})},l2=({isOpen:i,itemToDelete:n,deleteItem:r,closeDelete:c})=>{const u=()=>{r==null||r(n),c==null||c()},f=()=>{c==null||c()};return E.jsxs(Iu,{label:"Edit",open:i,onSlAfterHide:f,children:[E.jsx("div",{className:"zp-mg-bt",children:"Are you sure you want to delete this item?"}),E.jsxs(Ju,{slot:"footer",children:[E.jsx(Ee,{variant:"default",size:"small",onClick:f,children:"Close"}),E.jsx(Ee,{variant:"primary",size:"small",onClick:u,children:"Update"})]})]})},a2=({data:i,list:n,handleSave:r,isSearching:c})=>{const[u,f]=Ct.useState(null),[h,y]=Ct.useState(null),v=i.ui.lineClamp,g=i.ui.showDates,C=i.ui.showTypes,k=i.ui.stackActions??!1,N=V=>{const Y=n.filter((F,J)=>J!==V);r(Y)},O=(V,Y)=>{const F=n.map((J,Q)=>{const at=Q===V?Y:J.isFavorite;return{...J,isFavorite:at}});r(F)},U=V=>{f(V)};return E.jsx("div",{children:E.jsxs("div",{className:`zp-list ${g?"show-dates":""} ${C?"show-types":""}`,children:[n.length===0&&E.jsxs(P0,{open:!0,children:[E.jsx(xl,{slot:"icon",name:"info-circle"}),c?E.jsx(E.Fragment,{children:"No results from search"}):E.jsx(E.Fragment,{children:"Start adding Zipboards from the input or Tray option. Enjoy."})]}),n.length>0&&n.map((V,Y)=>E.jsxs("div",{className:`zp-flex zp-list-anchor ${k?"zp-list-stacked":""}`,children:[E.jsxs("div",{className:"zp-flex-fill",children:[E.jsx("div",{className:"zp-list-info",children:E.jsxs(q1,{content:V.tooltip,trigger:"click",placement:"left",disabled:!V.tooltip,children:[E.jsx("div",{className:`zp-list-dot dot-${V.type}`}),E.jsx("div",{className:`zp-list-text ${v?"zp-list-text--clamped":""}`,title:V.text,children:V.text})]})}),E.jsx("div",{className:"zp-addon zp-date",children:V.date}),E.jsx("div",{className:"zp-addon zp-type",children:V.type})]}),E.jsxs("div",{className:"zp-fav-btns",children:[E.jsxs("div",{className:"zp-fav-copy",children:[E.jsx(zu,{className:"zp-fav-btn",name:`${V.isFavorite?"suit-heart-fill":"suit-heart"}`,onClick:()=>{const F=!V.isFavorite;O(Y,F)}}),E.jsx(dm,{value:V.text,className:"zp-copy-btn"})]}),E.jsxs("div",{className:"zp-fav-action",children:[E.jsx(zu,{name:"pencil-fill",label:"Open Panel",onClick:()=>U(Y)}),E.jsx(zu,{name:"trash2-fill",onClick:()=>y(Y)})]})]})]},Y)),u!==null&&E.jsx(e2,{isOpen:u!==null,list:n,editData:n[u],currentIndex:u,positionMove:n==null?void 0:n.length,closeEdit:()=>U(null),handleSave:r}),h!=null&&E.jsx(l2,{isOpen:h!=null,itemToDelete:h,deleteItem:N,closeDelete:()=>y(null)})]})})},ls="ALL",Eu="FAVORITE";function i2(i,n=300){let r;return(...c)=>{clearTimeout(r),r=setTimeout(()=>{i.apply(this,c)},n)}}const n2=({data:i,saveData:n})=>{const[r,c]=Ct.useState(""),[u,f]=Ct.useState(!1),[h,y]=Ct.useState(!1),[v,g]=Ct.useState(""),[C,k]=Ct.useState(ls),N=i.history||[],O=i.ui.historyLength,U=i.ui.searchRule,V=Ct.useMemo(()=>{let q=N;return C!==ls&&(C===Eu?q=q.filter(it=>it.isFavorite):q=q.filter(it=>it.type===C)),v&&(q=q.filter(it=>t2(it.text,U).includes(v))),q},[v,C,i,N]),Y=i2(q=>g(q.target.value)),F=q=>{const it=q.target.value;k(it)},J=q=>{const it=q.target.value;c(it)},Q=()=>{if(!r)return;const it=[Fx(r),...N];if(it.length>O){f(!0);const St=it.filter((Pt,X)=>X<O);n(St);return}n(it),c("")},at=q=>{q.preventDefault(),Q()};return E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"zp-item-handle",children:[E.jsx("form",{onSubmit:at,children:E.jsxs("div",{className:"zp-flex",children:[E.jsx("div",{className:"zp-flex-fill",children:E.jsx(fs,{clearable:!0,size:"small","help-text":"Paste a link to save",onSlInput:J,value:r,placeholder:"Something cool to reuse"})}),E.jsx(Ee,{size:"small",onClick:Q,disabled:r.length===0,children:"Add"}),E.jsxs(Ee,{name:"search-heart",label:"Search",size:"small",type:"submit",onClick:()=>y(!h),children:[E.jsx(xl,{name:"search-heart"}),!h&&(C!==ls||v)&&E.jsx(B1,{variant:"warning",pill:!0})]})]})}),E.jsxs(P0,{variant:"danger",open:u,closable:!0,onSlAfterHide:()=>f(!1),children:[E.jsx(xl,{slot:"icon",name:"exclamation-octagon"}),E.jsx("strong",{children:"History length."}),E.jsx("p",{children:"The last item(s) have been removed."})]}),E.jsx("div",{className:"zp-search",children:h&&E.jsx("div",{className:"zp-mg-tp",children:E.jsxs("div",{className:"zp-flex zp-flex--min-block",children:[E.jsx("div",{className:"zp-flex-fill",children:E.jsxs(Ko,{label:"Filter Type",size:"small",value:C,onSlChange:F,children:[E.jsxs(ga,{value:ls,children:[E.jsx(xl,{name:"wallet-fill",slot:"suffix"}),ls]}),E.jsxs(ga,{value:Eu,children:[E.jsx(xl,{name:"suit-heart-fill",slot:"suffix"}),Eu]}),mm.map(q=>E.jsxs(ga,{value:q,children:[E.jsx(xl,{name:Wx(q),slot:"suffix"}),q]},q))]})}),E.jsx("div",{className:"zp-flex-fill",children:E.jsx(fs,{label:"Search History",clearable:!0,size:"small",onSlInput:Y,value:v,placeholder:"Search your history"})})]})})})]}),E.jsx("div",{id:"zpCore",className:"zp-core",children:E.jsx("div",{className:"zp-cinner",children:E.jsx(a2,{data:i,list:V,handleSave:n,isSearching:h})})})]})},s2=({data:i})=>E.jsxs("div",{className:"zp-footer",children:[E.jsxs("div",{className:"zp-text-small",children:["History: ",i.history.length]}),E.jsx("div",{className:"zp-text-small",children:"Created by Jason Jacobson"})]}),N0={version:1,history:[],ui:{theme:"dark",lineClamp:!0,historyLength:100,showDates:!0,showType:!1,searchRule:"strict",showTypes:!0,stackActions:!1}};function o2(){const i=window.localStorage.getItem("zipboard");if(i){const n=JSON.parse(i);return console.log("has data",n),n}else{console.log("has NO data");const n=JSON.stringify(N0);return window.localStorage.setItem("zipboard",n),N0}}function as(i){const n=JSON.stringify(i);window.localStorage.setItem("zipboard",n)}function r2(){const[i,n]=Ct.useState(null),[r,c]=Ct.useState(!1),[u,f]=Ct.useState(!1);Ct.useEffect(()=>{if(!u){f(!0);const C=o2();setTimeout(()=>{n(C),r||c(!0)},1500)}},[u,r]),Ct.useEffect(()=>{if(r){const C=i.ui.theme;pm(C)}},[r]);const h=(C,k)=>{if(console.log("saving UI"),k==="historyLength"&&i.history.length>C){const O=i.history.filter((U,V)=>V<C);n(U=>{const V={...U,ui:{...U.ui,[k]:C},history:O};return as(N),V});return}const N={...i};N.ui[k]=C,as(N),n(N)},y=C=>{const k={...i,history:C};as(k),n(k)},v=(C=!1)=>{let k=[];C||(k=i.history.filter(O=>O.isFavorite));const N={...i,history:k};as(N),n(N)},g=(C,k=!1)=>{const N=Jx(i.history,C,k),O={...i,history:N};as(O),n(O)};return E.jsxs("div",{className:`zp-app ${i?"":"is-loading"}`,children:[!i&&E.jsx("div",{className:"zp-app-loader",children:E.jsx(hm,{name:"bounce",duration:2e3,play:!0,children:E.jsx("img",{src:Bu,alt:"Zipboard Logo",className:"zp-header-logo"})})}),i&&E.jsxs(E.Fragment,{children:[E.jsx(Px,{data:i,handleSaveUI:h,clearHistory:v,clearHistoryType:g}),E.jsx(n2,{data:i,saveData:y}),E.jsx(s2,{data:i})]})]})}Ou("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.0/cdn/");Jb.createRoot(document.getElementById("root")).render(E.jsx(Ct.StrictMode,{children:E.jsx(r2,{})}));
