(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function xI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var R_={exports:{}},ru={},C_={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jo=Symbol.for("react.element"),VI=Symbol.for("react.portal"),OI=Symbol.for("react.fragment"),MI=Symbol.for("react.strict_mode"),LI=Symbol.for("react.profiler"),bI=Symbol.for("react.provider"),UI=Symbol.for("react.context"),FI=Symbol.for("react.forward_ref"),jI=Symbol.for("react.suspense"),BI=Symbol.for("react.memo"),zI=Symbol.for("react.lazy"),Cm=Symbol.iterator;function $I(t){return t===null||typeof t!="object"?null:(t=Cm&&t[Cm]||t["@@iterator"],typeof t=="function"?t:null)}var k_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P_=Object.assign,N_={};function cs(t,e,n){this.props=t,this.context=e,this.refs=N_,this.updater=n||k_}cs.prototype.isReactComponent={};cs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};cs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function D_(){}D_.prototype=cs.prototype;function Id(t,e,n){this.props=t,this.context=e,this.refs=N_,this.updater=n||k_}var Sd=Id.prototype=new D_;Sd.constructor=Id;P_(Sd,cs.prototype);Sd.isPureReactComponent=!0;var km=Array.isArray,x_=Object.prototype.hasOwnProperty,Ad={current:null},V_={key:!0,ref:!0,__self:!0,__source:!0};function O_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)x_.call(e,r)&&!V_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:jo,type:t,key:s,ref:o,props:i,_owner:Ad.current}}function qI(t,e){return{$$typeof:jo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rd(t){return typeof t=="object"&&t!==null&&t.$$typeof===jo}function HI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pm=/\/+/g;function fc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?HI(""+t.key):e.toString(36)}function Ha(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case jo:case VI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+fc(o,0):r,km(i)?(n="",t!=null&&(n=t.replace(Pm,"$&/")+"/"),Ha(i,e,n,"",function(h){return h})):i!=null&&(Rd(i)&&(i=qI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Pm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",km(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+fc(s,l);o+=Ha(s,e,n,u,i)}else if(u=$I(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+fc(s,l++),o+=Ha(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wa(t,e,n){if(t==null)return t;var r=[],i=0;return Ha(t,r,"","",function(s){return e.call(n,s,i++)}),r}function WI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pt={current:null},Wa={transition:null},KI={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:Wa,ReactCurrentOwner:Ad};function M_(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:wa,forEach:function(t,e,n){wa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wa(t,function(){e++}),e},toArray:function(t){return wa(t,function(e){return e})||[]},only:function(t){if(!Rd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=cs;ee.Fragment=OI;ee.Profiler=LI;ee.PureComponent=Id;ee.StrictMode=MI;ee.Suspense=jI;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KI;ee.act=M_;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=P_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ad.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)x_.call(e,u)&&!V_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:jo,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:UI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bI,_context:t},t.Consumer=t};ee.createElement=O_;ee.createFactory=function(t){var e=O_.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:FI,render:t}};ee.isValidElement=Rd;ee.lazy=function(t){return{$$typeof:zI,_payload:{_status:-1,_result:t},_init:WI}};ee.memo=function(t,e){return{$$typeof:BI,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Wa.transition;Wa.transition={};try{t()}finally{Wa.transition=e}};ee.unstable_act=M_;ee.useCallback=function(t,e){return pt.current.useCallback(t,e)};ee.useContext=function(t){return pt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return pt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return pt.current.useEffect(t,e)};ee.useId=function(){return pt.current.useId()};ee.useImperativeHandle=function(t,e,n){return pt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return pt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return pt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return pt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return pt.current.useReducer(t,e,n)};ee.useRef=function(t){return pt.current.useRef(t)};ee.useState=function(t){return pt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return pt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return pt.current.useTransition()};ee.version="18.3.1";C_.exports=ee;var K=C_.exports;const GI=xI(K);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QI=K,XI=Symbol.for("react.element"),YI=Symbol.for("react.fragment"),JI=Object.prototype.hasOwnProperty,ZI=QI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,e1={key:!0,ref:!0,__self:!0,__source:!0};function L_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)JI.call(e,r)&&!e1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:XI,type:t,key:s,ref:o,props:i,_owner:ZI.current}}ru.Fragment=YI;ru.jsx=L_;ru.jsxs=L_;R_.exports=ru;var M=R_.exports,nh={},b_={exports:{}},Vt={},U_={exports:{}},F_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,G){var Z=B.length;B.push(G);e:for(;0<Z;){var ve=Z-1>>>1,ue=B[ve];if(0<i(ue,G))B[ve]=G,B[Z]=ue,Z=ve;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var G=B[0],Z=B.pop();if(Z!==G){B[0]=Z;e:for(var ve=0,ue=B.length,Ne=ue>>>1;ve<Ne;){var vn=2*(ve+1)-1,wn=B[vn],En=vn+1,rn=B[En];if(0>i(wn,Z))En<ue&&0>i(rn,wn)?(B[ve]=rn,B[En]=Z,ve=En):(B[ve]=wn,B[vn]=Z,ve=vn);else if(En<ue&&0>i(rn,Z))B[ve]=rn,B[En]=Z,ve=En;else break e}}return G}function i(B,G){var Z=B.sortIndex-G.sortIndex;return Z!==0?Z:B.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,m=null,p=3,A=!1,C=!1,N=!1,V=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(B){for(var G=n(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=B)r(h),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(h)}}function D(B){if(N=!1,E(B),!C)if(n(u)!==null)C=!0,Ue(U);else{var G=n(h);G!==null&&Pe(D,G.startTime-B)}}function U(B,G){C=!1,N&&(N=!1,S(y),y=-1),A=!0;var Z=p;try{for(E(G),m=n(u);m!==null&&(!(m.expirationTime>G)||B&&!R());){var ve=m.callback;if(typeof ve=="function"){m.callback=null,p=m.priorityLevel;var ue=ve(m.expirationTime<=G);G=t.unstable_now(),typeof ue=="function"?m.callback=ue:m===n(u)&&r(u),E(G)}else r(u);m=n(u)}if(m!==null)var Ne=!0;else{var vn=n(h);vn!==null&&Pe(D,vn.startTime-G),Ne=!1}return Ne}finally{m=null,p=Z,A=!1}}var F=!1,w=null,y=-1,v=5,T=-1;function R(){return!(t.unstable_now()-T<v)}function P(){if(w!==null){var B=t.unstable_now();T=B;var G=!0;try{G=w(!0,B)}finally{G?I():(F=!1,w=null)}}else F=!1}var I;if(typeof _=="function")I=function(){_(P)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,fe=H.port2;H.port1.onmessage=P,I=function(){fe.postMessage(null)}}else I=function(){V(P,0)};function Ue(B){w=B,F||(F=!0,I())}function Pe(B,G){y=V(function(){B(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){C||A||(C=!0,Ue(U))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(p){case 1:case 2:case 3:var G=3;break;default:G=p}var Z=p;p=G;try{return B()}finally{p=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Z=p;p=B;try{return G()}finally{p=Z}},t.unstable_scheduleCallback=function(B,G,Z){var ve=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ve+Z:ve):Z=ve,B){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=Z+ue,B={id:f++,callback:G,priorityLevel:B,startTime:Z,expirationTime:ue,sortIndex:-1},Z>ve?(B.sortIndex=Z,e(h,B),n(u)===null&&B===n(h)&&(N?(S(y),y=-1):N=!0,Pe(D,Z-ve))):(B.sortIndex=ue,e(u,B),C||A||(C=!0,Ue(U))),B},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(B){var G=p;return function(){var Z=p;p=G;try{return B.apply(this,arguments)}finally{p=Z}}}})(F_);U_.exports=F_;var t1=U_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n1=K,xt=t1;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j_=new Set,fo={};function ui(t,e){Qi(t,e),Qi(t+"Capture",e)}function Qi(t,e){for(fo[t]=e,t=0;t<e.length;t++)j_.add(e[t])}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rh=Object.prototype.hasOwnProperty,r1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nm={},Dm={};function i1(t){return rh.call(Dm,t)?!0:rh.call(Nm,t)?!1:r1.test(t)?Dm[t]=!0:(Nm[t]=!0,!1)}function s1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function o1(t,e,n,r){if(e===null||typeof e>"u"||s1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xe[t]=new mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xe[e]=new mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xe[t]=new mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xe[t]=new mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xe[t]=new mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xe[t]=new mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xe[t]=new mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xe[t]=new mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xe[t]=new mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cd=/[\-:]([a-z])/g;function kd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cd,kd);Xe[e]=new mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cd,kd);Xe[e]=new mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cd,kd);Xe[e]=new mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xe[t]=new mt(t,1,!1,t.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xe[t]=new mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pd(t,e,n,r){var i=Xe.hasOwnProperty(e)?Xe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(o1(e,n,i,r)&&(n=null),r||i===null?i1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jn=n1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ea=Symbol.for("react.element"),Ai=Symbol.for("react.portal"),Ri=Symbol.for("react.fragment"),Nd=Symbol.for("react.strict_mode"),ih=Symbol.for("react.profiler"),B_=Symbol.for("react.provider"),z_=Symbol.for("react.context"),Dd=Symbol.for("react.forward_ref"),sh=Symbol.for("react.suspense"),oh=Symbol.for("react.suspense_list"),xd=Symbol.for("react.memo"),Wn=Symbol.for("react.lazy"),$_=Symbol.for("react.offscreen"),xm=Symbol.iterator;function xs(t){return t===null||typeof t!="object"?null:(t=xm&&t[xm]||t["@@iterator"],typeof t=="function"?t:null)}var Te=Object.assign,pc;function Bs(t){if(pc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pc=e&&e[1]||""}return`
`+pc+t}var mc=!1;function gc(t,e){if(!t||mc)return"";mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bs(t):""}function a1(t){switch(t.tag){case 5:return Bs(t.type);case 16:return Bs("Lazy");case 13:return Bs("Suspense");case 19:return Bs("SuspenseList");case 0:case 2:case 15:return t=gc(t.type,!1),t;case 11:return t=gc(t.type.render,!1),t;case 1:return t=gc(t.type,!0),t;default:return""}}function ah(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ri:return"Fragment";case Ai:return"Portal";case ih:return"Profiler";case Nd:return"StrictMode";case sh:return"Suspense";case oh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z_:return(t.displayName||"Context")+".Consumer";case B_:return(t._context.displayName||"Context")+".Provider";case Dd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xd:return e=t.displayName||null,e!==null?e:ah(t.type)||"Memo";case Wn:e=t._payload,t=t._init;try{return ah(t(e))}catch{}}return null}function l1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ah(e);case 8:return e===Nd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function q_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function u1(t){var e=q_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ta(t){t._valueTracker||(t._valueTracker=u1(t))}function H_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=q_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lh(t,e){var n=e.checked;return Te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function W_(t,e){e=e.checked,e!=null&&Pd(t,"checked",e,!1)}function uh(t,e){W_(t,e);var n=yr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ch(t,e.type,n):e.hasOwnProperty("defaultValue")&&ch(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Om(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ch(t,e,n){(e!=="number"||fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var zs=Array.isArray;function Ui(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function hh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return Te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Mm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(zs(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function K_(t,e){var n=yr(e.value),r=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Lm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function G_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?G_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ia,Q_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ia=Ia||document.createElement("div"),Ia.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ia.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function po(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Qs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},c1=["Webkit","ms","Moz","O"];Object.keys(Qs).forEach(function(t){c1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Qs[e]=Qs[t]})});function X_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Qs.hasOwnProperty(t)&&Qs[t]?(""+e).trim():e+"px"}function Y_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=X_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var h1=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fh(t,e){if(e){if(h1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function ph(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mh=null;function Vd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gh=null,Fi=null,ji=null;function bm(t){if(t=$o(t)){if(typeof gh!="function")throw Error(b(280));var e=t.stateNode;e&&(e=lu(e),gh(t.stateNode,t.type,e))}}function J_(t){Fi?ji?ji.push(t):ji=[t]:Fi=t}function Z_(){if(Fi){var t=Fi,e=ji;if(ji=Fi=null,bm(t),e)for(t=0;t<e.length;t++)bm(e[t])}}function ev(t,e){return t(e)}function tv(){}var yc=!1;function nv(t,e,n){if(yc)return t(e,n);yc=!0;try{return ev(t,e,n)}finally{yc=!1,(Fi!==null||ji!==null)&&(tv(),Z_())}}function mo(t,e){var n=t.stateNode;if(n===null)return null;var r=lu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var yh=!1;if(Dn)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){yh=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{yh=!1}function d1(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Xs=!1,pl=null,ml=!1,_h=null,f1={onError:function(t){Xs=!0,pl=t}};function p1(t,e,n,r,i,s,o,l,u){Xs=!1,pl=null,d1.apply(f1,arguments)}function m1(t,e,n,r,i,s,o,l,u){if(p1.apply(this,arguments),Xs){if(Xs){var h=pl;Xs=!1,pl=null}else throw Error(b(198));ml||(ml=!0,_h=h)}}function ci(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Um(t){if(ci(t)!==t)throw Error(b(188))}function g1(t){var e=t.alternate;if(!e){if(e=ci(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Um(i),t;if(s===r)return Um(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function iv(t){return t=g1(t),t!==null?sv(t):null}function sv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=sv(t);if(e!==null)return e;t=t.sibling}return null}var ov=xt.unstable_scheduleCallback,Fm=xt.unstable_cancelCallback,y1=xt.unstable_shouldYield,_1=xt.unstable_requestPaint,xe=xt.unstable_now,v1=xt.unstable_getCurrentPriorityLevel,Od=xt.unstable_ImmediatePriority,av=xt.unstable_UserBlockingPriority,gl=xt.unstable_NormalPriority,w1=xt.unstable_LowPriority,lv=xt.unstable_IdlePriority,iu=null,cn=null;function E1(t){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(iu,t,void 0,(t.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:S1,T1=Math.log,I1=Math.LN2;function S1(t){return t>>>=0,t===0?32:31-(T1(t)/I1|0)|0}var Sa=64,Aa=4194304;function $s(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=$s(l):(s&=o,s!==0&&(r=$s(s)))}else o=n&~i,o!==0?r=$s(o):s!==0&&(r=$s(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Yt(e),i=1<<n,r|=t[n],e&=~i;return r}function A1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function R1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Yt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=A1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function vh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function uv(){var t=Sa;return Sa<<=1,!(Sa&4194240)&&(Sa=64),t}function _c(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Bo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yt(e),t[e]=n}function C1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Yt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Md(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Yt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var le=0;function cv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var hv,Ld,dv,fv,pv,wh=!1,Ra=[],ir=null,sr=null,or=null,go=new Map,yo=new Map,Gn=[],k1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jm(t,e){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(e.pointerId)}}function Os(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=$o(e),e!==null&&Ld(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function P1(t,e,n,r,i){switch(e){case"focusin":return ir=Os(ir,t,e,n,r,i),!0;case"dragenter":return sr=Os(sr,t,e,n,r,i),!0;case"mouseover":return or=Os(or,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return go.set(s,Os(go.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,yo.set(s,Os(yo.get(s)||null,t,e,n,r,i)),!0}return!1}function mv(t){var e=Br(t.target);if(e!==null){var n=ci(e);if(n!==null){if(e=n.tag,e===13){if(e=rv(n),e!==null){t.blockedOn=e,pv(t.priority,function(){dv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ka(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Eh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);mh=r,n.target.dispatchEvent(r),mh=null}else return e=$o(n),e!==null&&Ld(e),t.blockedOn=n,!1;e.shift()}return!0}function Bm(t,e,n){Ka(t)&&n.delete(e)}function N1(){wh=!1,ir!==null&&Ka(ir)&&(ir=null),sr!==null&&Ka(sr)&&(sr=null),or!==null&&Ka(or)&&(or=null),go.forEach(Bm),yo.forEach(Bm)}function Ms(t,e){t.blockedOn===e&&(t.blockedOn=null,wh||(wh=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,N1)))}function _o(t){function e(i){return Ms(i,t)}if(0<Ra.length){Ms(Ra[0],t);for(var n=1;n<Ra.length;n++){var r=Ra[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ir!==null&&Ms(ir,t),sr!==null&&Ms(sr,t),or!==null&&Ms(or,t),go.forEach(e),yo.forEach(e),n=0;n<Gn.length;n++)r=Gn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Gn.length&&(n=Gn[0],n.blockedOn===null);)mv(n),n.blockedOn===null&&Gn.shift()}var Bi=jn.ReactCurrentBatchConfig,_l=!0;function D1(t,e,n,r){var i=le,s=Bi.transition;Bi.transition=null;try{le=1,bd(t,e,n,r)}finally{le=i,Bi.transition=s}}function x1(t,e,n,r){var i=le,s=Bi.transition;Bi.transition=null;try{le=4,bd(t,e,n,r)}finally{le=i,Bi.transition=s}}function bd(t,e,n,r){if(_l){var i=Eh(t,e,n,r);if(i===null)kc(t,e,r,vl,n),jm(t,r);else if(P1(i,t,e,n,r))r.stopPropagation();else if(jm(t,r),e&4&&-1<k1.indexOf(t)){for(;i!==null;){var s=$o(i);if(s!==null&&hv(s),s=Eh(t,e,n,r),s===null&&kc(t,e,r,vl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else kc(t,e,r,null,n)}}var vl=null;function Eh(t,e,n,r){if(vl=null,t=Vd(r),t=Br(t),t!==null)if(e=ci(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vl=t,null}function gv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(v1()){case Od:return 1;case av:return 4;case gl:case w1:return 16;case lv:return 536870912;default:return 16}default:return 16}}var tr=null,Ud=null,Ga=null;function yv(){if(Ga)return Ga;var t,e=Ud,n=e.length,r,i="value"in tr?tr.value:tr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ga=i.slice(t,1<r?1-r:void 0)}function Qa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ca(){return!0}function zm(){return!1}function Ot(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ca:zm,this.isPropagationStopped=zm,this}return Te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),e}var hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fd=Ot(hs),zo=Te({},hs,{view:0,detail:0}),V1=Ot(zo),vc,wc,Ls,su=Te({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ls&&(Ls&&t.type==="mousemove"?(vc=t.screenX-Ls.screenX,wc=t.screenY-Ls.screenY):wc=vc=0,Ls=t),vc)},movementY:function(t){return"movementY"in t?t.movementY:wc}}),$m=Ot(su),O1=Te({},su,{dataTransfer:0}),M1=Ot(O1),L1=Te({},zo,{relatedTarget:0}),Ec=Ot(L1),b1=Te({},hs,{animationName:0,elapsedTime:0,pseudoElement:0}),U1=Ot(b1),F1=Te({},hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),j1=Ot(F1),B1=Te({},hs,{data:0}),qm=Ot(B1),z1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function H1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=q1[t])?!!e[t]:!1}function jd(){return H1}var W1=Te({},zo,{key:function(t){if(t.key){var e=z1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jd,charCode:function(t){return t.type==="keypress"?Qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),K1=Ot(W1),G1=Te({},su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hm=Ot(G1),Q1=Te({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jd}),X1=Ot(Q1),Y1=Te({},hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),J1=Ot(Y1),Z1=Te({},su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),eS=Ot(Z1),tS=[9,13,27,32],Bd=Dn&&"CompositionEvent"in window,Ys=null;Dn&&"documentMode"in document&&(Ys=document.documentMode);var nS=Dn&&"TextEvent"in window&&!Ys,_v=Dn&&(!Bd||Ys&&8<Ys&&11>=Ys),Wm=String.fromCharCode(32),Km=!1;function vv(t,e){switch(t){case"keyup":return tS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ci=!1;function rS(t,e){switch(t){case"compositionend":return wv(e);case"keypress":return e.which!==32?null:(Km=!0,Wm);case"textInput":return t=e.data,t===Wm&&Km?null:t;default:return null}}function iS(t,e){if(Ci)return t==="compositionend"||!Bd&&vv(t,e)?(t=yv(),Ga=Ud=tr=null,Ci=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _v&&e.locale!=="ko"?null:e.data;default:return null}}var sS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sS[t.type]:e==="textarea"}function Ev(t,e,n,r){J_(r),e=wl(e,"onChange"),0<e.length&&(n=new Fd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Js=null,vo=null;function oS(t){xv(t,0)}function ou(t){var e=Ni(t);if(H_(e))return t}function aS(t,e){if(t==="change")return e}var Tv=!1;if(Dn){var Tc;if(Dn){var Ic="oninput"in document;if(!Ic){var Qm=document.createElement("div");Qm.setAttribute("oninput","return;"),Ic=typeof Qm.oninput=="function"}Tc=Ic}else Tc=!1;Tv=Tc&&(!document.documentMode||9<document.documentMode)}function Xm(){Js&&(Js.detachEvent("onpropertychange",Iv),vo=Js=null)}function Iv(t){if(t.propertyName==="value"&&ou(vo)){var e=[];Ev(e,vo,t,Vd(t)),nv(oS,e)}}function lS(t,e,n){t==="focusin"?(Xm(),Js=e,vo=n,Js.attachEvent("onpropertychange",Iv)):t==="focusout"&&Xm()}function uS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ou(vo)}function cS(t,e){if(t==="click")return ou(e)}function hS(t,e){if(t==="input"||t==="change")return ou(e)}function dS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var en=typeof Object.is=="function"?Object.is:dS;function wo(t,e){if(en(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!rh.call(e,i)||!en(t[i],e[i]))return!1}return!0}function Ym(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jm(t,e){var n=Ym(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ym(n)}}function Sv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Av(){for(var t=window,e=fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fl(t.document)}return e}function zd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fS(t){var e=Av(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Sv(n.ownerDocument.documentElement,n)){if(r!==null&&zd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Jm(n,s);var o=Jm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pS=Dn&&"documentMode"in document&&11>=document.documentMode,ki=null,Th=null,Zs=null,Ih=!1;function Zm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ih||ki==null||ki!==fl(r)||(r=ki,"selectionStart"in r&&zd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zs&&wo(Zs,r)||(Zs=r,r=wl(Th,"onSelect"),0<r.length&&(e=new Fd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ki)))}function ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Pi={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionend:ka("Transition","TransitionEnd")},Sc={},Rv={};Dn&&(Rv=document.createElement("div").style,"AnimationEvent"in window||(delete Pi.animationend.animation,delete Pi.animationiteration.animation,delete Pi.animationstart.animation),"TransitionEvent"in window||delete Pi.transitionend.transition);function au(t){if(Sc[t])return Sc[t];if(!Pi[t])return t;var e=Pi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Rv)return Sc[t]=e[n];return t}var Cv=au("animationend"),kv=au("animationiteration"),Pv=au("animationstart"),Nv=au("transitionend"),Dv=new Map,eg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(t,e){Dv.set(t,e),ui(e,[t])}for(var Ac=0;Ac<eg.length;Ac++){var Rc=eg[Ac],mS=Rc.toLowerCase(),gS=Rc[0].toUpperCase()+Rc.slice(1);Rr(mS,"on"+gS)}Rr(Cv,"onAnimationEnd");Rr(kv,"onAnimationIteration");Rr(Pv,"onAnimationStart");Rr("dblclick","onDoubleClick");Rr("focusin","onFocus");Rr("focusout","onBlur");Rr(Nv,"onTransitionEnd");Qi("onMouseEnter",["mouseout","mouseover"]);Qi("onMouseLeave",["mouseout","mouseover"]);Qi("onPointerEnter",["pointerout","pointerover"]);Qi("onPointerLeave",["pointerout","pointerover"]);ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ui("onBeforeInput",["compositionend","keypress","textInput","paste"]);ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yS=new Set("cancel close invalid load scroll toggle".split(" ").concat(qs));function tg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,m1(r,e,void 0,t),t.currentTarget=null}function xv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;tg(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;tg(i,l,h),s=u}}}if(ml)throw t=_h,ml=!1,_h=null,t}function me(t,e){var n=e[kh];n===void 0&&(n=e[kh]=new Set);var r=t+"__bubble";n.has(r)||(Vv(e,t,2,!1),n.add(r))}function Cc(t,e,n){var r=0;e&&(r|=4),Vv(n,t,r,e)}var Pa="_reactListening"+Math.random().toString(36).slice(2);function Eo(t){if(!t[Pa]){t[Pa]=!0,j_.forEach(function(n){n!=="selectionchange"&&(yS.has(n)||Cc(n,!1,t),Cc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pa]||(e[Pa]=!0,Cc("selectionchange",!1,e))}}function Vv(t,e,n,r){switch(gv(e)){case 1:var i=D1;break;case 4:i=x1;break;default:i=bd}n=i.bind(null,e,n,t),i=void 0,!yh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function kc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Br(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}nv(function(){var h=s,f=Vd(n),m=[];e:{var p=Dv.get(t);if(p!==void 0){var A=Fd,C=t;switch(t){case"keypress":if(Qa(n)===0)break e;case"keydown":case"keyup":A=K1;break;case"focusin":C="focus",A=Ec;break;case"focusout":C="blur",A=Ec;break;case"beforeblur":case"afterblur":A=Ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=$m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=M1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=X1;break;case Cv:case kv:case Pv:A=U1;break;case Nv:A=J1;break;case"scroll":A=V1;break;case"wheel":A=eS;break;case"copy":case"cut":case"paste":A=j1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Hm}var N=(e&4)!==0,V=!N&&t==="scroll",S=N?p!==null?p+"Capture":null:p;N=[];for(var _=h,E;_!==null;){E=_;var D=E.stateNode;if(E.tag===5&&D!==null&&(E=D,S!==null&&(D=mo(_,S),D!=null&&N.push(To(_,D,E)))),V)break;_=_.return}0<N.length&&(p=new A(p,C,null,n,f),m.push({event:p,listeners:N}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",p&&n!==mh&&(C=n.relatedTarget||n.fromElement)&&(Br(C)||C[xn]))break e;if((A||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,A?(C=n.relatedTarget||n.toElement,A=h,C=C?Br(C):null,C!==null&&(V=ci(C),C!==V||C.tag!==5&&C.tag!==6)&&(C=null)):(A=null,C=h),A!==C)){if(N=$m,D="onMouseLeave",S="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(N=Hm,D="onPointerLeave",S="onPointerEnter",_="pointer"),V=A==null?p:Ni(A),E=C==null?p:Ni(C),p=new N(D,_+"leave",A,n,f),p.target=V,p.relatedTarget=E,D=null,Br(f)===h&&(N=new N(S,_+"enter",C,n,f),N.target=E,N.relatedTarget=V,D=N),V=D,A&&C)t:{for(N=A,S=C,_=0,E=N;E;E=wi(E))_++;for(E=0,D=S;D;D=wi(D))E++;for(;0<_-E;)N=wi(N),_--;for(;0<E-_;)S=wi(S),E--;for(;_--;){if(N===S||S!==null&&N===S.alternate)break t;N=wi(N),S=wi(S)}N=null}else N=null;A!==null&&ng(m,p,A,N,!1),C!==null&&V!==null&&ng(m,V,C,N,!0)}}e:{if(p=h?Ni(h):window,A=p.nodeName&&p.nodeName.toLowerCase(),A==="select"||A==="input"&&p.type==="file")var U=aS;else if(Gm(p))if(Tv)U=hS;else{U=uS;var F=lS}else(A=p.nodeName)&&A.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(U=cS);if(U&&(U=U(t,h))){Ev(m,U,n,f);break e}F&&F(t,p,h),t==="focusout"&&(F=p._wrapperState)&&F.controlled&&p.type==="number"&&ch(p,"number",p.value)}switch(F=h?Ni(h):window,t){case"focusin":(Gm(F)||F.contentEditable==="true")&&(ki=F,Th=h,Zs=null);break;case"focusout":Zs=Th=ki=null;break;case"mousedown":Ih=!0;break;case"contextmenu":case"mouseup":case"dragend":Ih=!1,Zm(m,n,f);break;case"selectionchange":if(pS)break;case"keydown":case"keyup":Zm(m,n,f)}var w;if(Bd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ci?vv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(_v&&n.locale!=="ko"&&(Ci||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ci&&(w=yv()):(tr=f,Ud="value"in tr?tr.value:tr.textContent,Ci=!0)),F=wl(h,y),0<F.length&&(y=new qm(y,t,null,n,f),m.push({event:y,listeners:F}),w?y.data=w:(w=wv(n),w!==null&&(y.data=w)))),(w=nS?rS(t,n):iS(t,n))&&(h=wl(h,"onBeforeInput"),0<h.length&&(f=new qm("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=w))}xv(m,e)})}function To(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=mo(t,n),s!=null&&r.unshift(To(t,s,i)),s=mo(t,e),s!=null&&r.push(To(t,s,i))),t=t.return}return r}function wi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ng(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=mo(n,s),u!=null&&o.unshift(To(n,u,l))):i||(u=mo(n,s),u!=null&&o.push(To(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var _S=/\r\n?/g,vS=/\u0000|\uFFFD/g;function rg(t){return(typeof t=="string"?t:""+t).replace(_S,`
`).replace(vS,"")}function Na(t,e,n){if(e=rg(e),rg(t)!==e&&n)throw Error(b(425))}function El(){}var Sh=null,Ah=null;function Rh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ch=typeof setTimeout=="function"?setTimeout:void 0,wS=typeof clearTimeout=="function"?clearTimeout:void 0,ig=typeof Promise=="function"?Promise:void 0,ES=typeof queueMicrotask=="function"?queueMicrotask:typeof ig<"u"?function(t){return ig.resolve(null).then(t).catch(TS)}:Ch;function TS(t){setTimeout(function(){throw t})}function Pc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),_o(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_o(e)}function ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function sg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ds=Math.random().toString(36).slice(2),ln="__reactFiber$"+ds,Io="__reactProps$"+ds,xn="__reactContainer$"+ds,kh="__reactEvents$"+ds,IS="__reactListeners$"+ds,SS="__reactHandles$"+ds;function Br(t){var e=t[ln];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xn]||n[ln]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=sg(t);t!==null;){if(n=t[ln])return n;t=sg(t)}return e}t=n,n=t.parentNode}return null}function $o(t){return t=t[ln]||t[xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ni(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function lu(t){return t[Io]||null}var Ph=[],Di=-1;function Cr(t){return{current:t}}function ye(t){0>Di||(t.current=Ph[Di],Ph[Di]=null,Di--)}function de(t,e){Di++,Ph[Di]=t.current,t.current=e}var _r={},at=Cr(_r),wt=Cr(!1),Jr=_r;function Xi(t,e){var n=t.type.contextTypes;if(!n)return _r;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Et(t){return t=t.childContextTypes,t!=null}function Tl(){ye(wt),ye(at)}function og(t,e,n){if(at.current!==_r)throw Error(b(168));de(at,e),de(wt,n)}function Ov(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,l1(t)||"Unknown",i));return Te({},n,r)}function Il(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_r,Jr=at.current,de(at,t),de(wt,wt.current),!0}function ag(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=Ov(t,e,Jr),r.__reactInternalMemoizedMergedChildContext=t,ye(wt),ye(at),de(at,t)):ye(wt),de(wt,n)}var An=null,uu=!1,Nc=!1;function Mv(t){An===null?An=[t]:An.push(t)}function AS(t){uu=!0,Mv(t)}function kr(){if(!Nc&&An!==null){Nc=!0;var t=0,e=le;try{var n=An;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}An=null,uu=!1}catch(i){throw An!==null&&(An=An.slice(t+1)),ov(Od,kr),i}finally{le=e,Nc=!1}}return null}var xi=[],Vi=0,Sl=null,Al=0,Mt=[],Lt=0,Zr=null,Rn=1,Cn="";function Ur(t,e){xi[Vi++]=Al,xi[Vi++]=Sl,Sl=t,Al=e}function Lv(t,e,n){Mt[Lt++]=Rn,Mt[Lt++]=Cn,Mt[Lt++]=Zr,Zr=t;var r=Rn;t=Cn;var i=32-Yt(r)-1;r&=~(1<<i),n+=1;var s=32-Yt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rn=1<<32-Yt(e)+i|n<<i|r,Cn=s+t}else Rn=1<<s|n<<i|r,Cn=t}function $d(t){t.return!==null&&(Ur(t,1),Lv(t,1,0))}function qd(t){for(;t===Sl;)Sl=xi[--Vi],xi[Vi]=null,Al=xi[--Vi],xi[Vi]=null;for(;t===Zr;)Zr=Mt[--Lt],Mt[Lt]=null,Cn=Mt[--Lt],Mt[Lt]=null,Rn=Mt[--Lt],Mt[Lt]=null}var Nt=null,Ct=null,_e=!1,Gt=null;function bv(t,e){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function lg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nt=t,Ct=ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nt=t,Ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zr!==null?{id:Rn,overflow:Cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nt=t,Ct=null,!0):!1;default:return!1}}function Nh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Dh(t){if(_e){var e=Ct;if(e){var n=e;if(!lg(t,e)){if(Nh(t))throw Error(b(418));e=ar(n.nextSibling);var r=Nt;e&&lg(t,e)?bv(r,n):(t.flags=t.flags&-4097|2,_e=!1,Nt=t)}}else{if(Nh(t))throw Error(b(418));t.flags=t.flags&-4097|2,_e=!1,Nt=t}}}function ug(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nt=t}function Da(t){if(t!==Nt)return!1;if(!_e)return ug(t),_e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Rh(t.type,t.memoizedProps)),e&&(e=Ct)){if(Nh(t))throw Uv(),Error(b(418));for(;e;)bv(t,e),e=ar(e.nextSibling)}if(ug(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ct=ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ct=null}}else Ct=Nt?ar(t.stateNode.nextSibling):null;return!0}function Uv(){for(var t=Ct;t;)t=ar(t.nextSibling)}function Yi(){Ct=Nt=null,_e=!1}function Hd(t){Gt===null?Gt=[t]:Gt.push(t)}var RS=jn.ReactCurrentBatchConfig;function bs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function xa(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function cg(t){var e=t._init;return e(t._payload)}function Fv(t){function e(S,_){if(t){var E=S.deletions;E===null?(S.deletions=[_],S.flags|=16):E.push(_)}}function n(S,_){if(!t)return null;for(;_!==null;)e(S,_),_=_.sibling;return null}function r(S,_){for(S=new Map;_!==null;)_.key!==null?S.set(_.key,_):S.set(_.index,_),_=_.sibling;return S}function i(S,_){return S=hr(S,_),S.index=0,S.sibling=null,S}function s(S,_,E){return S.index=E,t?(E=S.alternate,E!==null?(E=E.index,E<_?(S.flags|=2,_):E):(S.flags|=2,_)):(S.flags|=1048576,_)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,_,E,D){return _===null||_.tag!==6?(_=bc(E,S.mode,D),_.return=S,_):(_=i(_,E),_.return=S,_)}function u(S,_,E,D){var U=E.type;return U===Ri?f(S,_,E.props.children,D,E.key):_!==null&&(_.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Wn&&cg(U)===_.type)?(D=i(_,E.props),D.ref=bs(S,_,E),D.return=S,D):(D=nl(E.type,E.key,E.props,null,S.mode,D),D.ref=bs(S,_,E),D.return=S,D)}function h(S,_,E,D){return _===null||_.tag!==4||_.stateNode.containerInfo!==E.containerInfo||_.stateNode.implementation!==E.implementation?(_=Uc(E,S.mode,D),_.return=S,_):(_=i(_,E.children||[]),_.return=S,_)}function f(S,_,E,D,U){return _===null||_.tag!==7?(_=Kr(E,S.mode,D,U),_.return=S,_):(_=i(_,E),_.return=S,_)}function m(S,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return _=bc(""+_,S.mode,E),_.return=S,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ea:return E=nl(_.type,_.key,_.props,null,S.mode,E),E.ref=bs(S,null,_),E.return=S,E;case Ai:return _=Uc(_,S.mode,E),_.return=S,_;case Wn:var D=_._init;return m(S,D(_._payload),E)}if(zs(_)||xs(_))return _=Kr(_,S.mode,E,null),_.return=S,_;xa(S,_)}return null}function p(S,_,E,D){var U=_!==null?_.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return U!==null?null:l(S,_,""+E,D);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ea:return E.key===U?u(S,_,E,D):null;case Ai:return E.key===U?h(S,_,E,D):null;case Wn:return U=E._init,p(S,_,U(E._payload),D)}if(zs(E)||xs(E))return U!==null?null:f(S,_,E,D,null);xa(S,E)}return null}function A(S,_,E,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return S=S.get(E)||null,l(_,S,""+D,U);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ea:return S=S.get(D.key===null?E:D.key)||null,u(_,S,D,U);case Ai:return S=S.get(D.key===null?E:D.key)||null,h(_,S,D,U);case Wn:var F=D._init;return A(S,_,E,F(D._payload),U)}if(zs(D)||xs(D))return S=S.get(E)||null,f(_,S,D,U,null);xa(_,D)}return null}function C(S,_,E,D){for(var U=null,F=null,w=_,y=_=0,v=null;w!==null&&y<E.length;y++){w.index>y?(v=w,w=null):v=w.sibling;var T=p(S,w,E[y],D);if(T===null){w===null&&(w=v);break}t&&w&&T.alternate===null&&e(S,w),_=s(T,_,y),F===null?U=T:F.sibling=T,F=T,w=v}if(y===E.length)return n(S,w),_e&&Ur(S,y),U;if(w===null){for(;y<E.length;y++)w=m(S,E[y],D),w!==null&&(_=s(w,_,y),F===null?U=w:F.sibling=w,F=w);return _e&&Ur(S,y),U}for(w=r(S,w);y<E.length;y++)v=A(w,S,y,E[y],D),v!==null&&(t&&v.alternate!==null&&w.delete(v.key===null?y:v.key),_=s(v,_,y),F===null?U=v:F.sibling=v,F=v);return t&&w.forEach(function(R){return e(S,R)}),_e&&Ur(S,y),U}function N(S,_,E,D){var U=xs(E);if(typeof U!="function")throw Error(b(150));if(E=U.call(E),E==null)throw Error(b(151));for(var F=U=null,w=_,y=_=0,v=null,T=E.next();w!==null&&!T.done;y++,T=E.next()){w.index>y?(v=w,w=null):v=w.sibling;var R=p(S,w,T.value,D);if(R===null){w===null&&(w=v);break}t&&w&&R.alternate===null&&e(S,w),_=s(R,_,y),F===null?U=R:F.sibling=R,F=R,w=v}if(T.done)return n(S,w),_e&&Ur(S,y),U;if(w===null){for(;!T.done;y++,T=E.next())T=m(S,T.value,D),T!==null&&(_=s(T,_,y),F===null?U=T:F.sibling=T,F=T);return _e&&Ur(S,y),U}for(w=r(S,w);!T.done;y++,T=E.next())T=A(w,S,y,T.value,D),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?y:T.key),_=s(T,_,y),F===null?U=T:F.sibling=T,F=T);return t&&w.forEach(function(P){return e(S,P)}),_e&&Ur(S,y),U}function V(S,_,E,D){if(typeof E=="object"&&E!==null&&E.type===Ri&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Ea:e:{for(var U=E.key,F=_;F!==null;){if(F.key===U){if(U=E.type,U===Ri){if(F.tag===7){n(S,F.sibling),_=i(F,E.props.children),_.return=S,S=_;break e}}else if(F.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Wn&&cg(U)===F.type){n(S,F.sibling),_=i(F,E.props),_.ref=bs(S,F,E),_.return=S,S=_;break e}n(S,F);break}else e(S,F);F=F.sibling}E.type===Ri?(_=Kr(E.props.children,S.mode,D,E.key),_.return=S,S=_):(D=nl(E.type,E.key,E.props,null,S.mode,D),D.ref=bs(S,_,E),D.return=S,S=D)}return o(S);case Ai:e:{for(F=E.key;_!==null;){if(_.key===F)if(_.tag===4&&_.stateNode.containerInfo===E.containerInfo&&_.stateNode.implementation===E.implementation){n(S,_.sibling),_=i(_,E.children||[]),_.return=S,S=_;break e}else{n(S,_);break}else e(S,_);_=_.sibling}_=Uc(E,S.mode,D),_.return=S,S=_}return o(S);case Wn:return F=E._init,V(S,_,F(E._payload),D)}if(zs(E))return C(S,_,E,D);if(xs(E))return N(S,_,E,D);xa(S,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,_!==null&&_.tag===6?(n(S,_.sibling),_=i(_,E),_.return=S,S=_):(n(S,_),_=bc(E,S.mode,D),_.return=S,S=_),o(S)):n(S,_)}return V}var Ji=Fv(!0),jv=Fv(!1),Rl=Cr(null),Cl=null,Oi=null,Wd=null;function Kd(){Wd=Oi=Cl=null}function Gd(t){var e=Rl.current;ye(Rl),t._currentValue=e}function xh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function zi(t,e){Cl=t,Wd=Oi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vt=!0),t.firstContext=null)}function jt(t){var e=t._currentValue;if(Wd!==t)if(t={context:t,memoizedValue:e,next:null},Oi===null){if(Cl===null)throw Error(b(308));Oi=t,Cl.dependencies={lanes:0,firstContext:t}}else Oi=Oi.next=t;return e}var zr=null;function Qd(t){zr===null?zr=[t]:zr.push(t)}function Bv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Qd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Vn(t,r)}function Vn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Kn=!1;function Xd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Vn(t,n)}return i=r.interleaved,i===null?(e.next=e,Qd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Vn(t,n)}function Xa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Md(t,n)}}function hg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function kl(t,e,n,r){var i=t.updateQueue;Kn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=h=u=null,l=s;do{var p=l.lane,A=l.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,N=l;switch(p=e,A=n,N.tag){case 1:if(C=N.payload,typeof C=="function"){m=C.call(A,m,p);break e}m=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=N.payload,p=typeof C=="function"?C.call(A,m,p):C,p==null)break e;m=Te({},m,p);break e;case 2:Kn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else A={eventTime:A,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=A,u=m):f=f.next=A,o|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ti|=o,t.lanes=o,t.memoizedState=m}}function dg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var qo={},hn=Cr(qo),So=Cr(qo),Ao=Cr(qo);function $r(t){if(t===qo)throw Error(b(174));return t}function Yd(t,e){switch(de(Ao,e),de(So,t),de(hn,qo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:dh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=dh(e,t)}ye(hn),de(hn,e)}function Zi(){ye(hn),ye(So),ye(Ao)}function $v(t){$r(Ao.current);var e=$r(hn.current),n=dh(e,t.type);e!==n&&(de(So,t),de(hn,n))}function Jd(t){So.current===t&&(ye(hn),ye(So))}var we=Cr(0);function Pl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Dc=[];function Zd(){for(var t=0;t<Dc.length;t++)Dc[t]._workInProgressVersionPrimary=null;Dc.length=0}var Ya=jn.ReactCurrentDispatcher,xc=jn.ReactCurrentBatchConfig,ei=0,Ee=null,Fe=null,$e=null,Nl=!1,eo=!1,Ro=0,CS=0;function tt(){throw Error(b(321))}function ef(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!en(t[n],e[n]))return!1;return!0}function tf(t,e,n,r,i,s){if(ei=s,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ya.current=t===null||t.memoizedState===null?DS:xS,t=n(r,i),eo){s=0;do{if(eo=!1,Ro=0,25<=s)throw Error(b(301));s+=1,$e=Fe=null,e.updateQueue=null,Ya.current=VS,t=n(r,i)}while(eo)}if(Ya.current=Dl,e=Fe!==null&&Fe.next!==null,ei=0,$e=Fe=Ee=null,Nl=!1,e)throw Error(b(300));return t}function nf(){var t=Ro!==0;return Ro=0,t}function on(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Ee.memoizedState=$e=t:$e=$e.next=t,$e}function Bt(){if(Fe===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=$e===null?Ee.memoizedState:$e.next;if(e!==null)$e=e,Fe=t;else{if(t===null)throw Error(b(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},$e===null?Ee.memoizedState=$e=t:$e=$e.next=t}return $e}function Co(t,e){return typeof e=="function"?e(t):e}function Vc(t){var e=Bt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((ei&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Ee.lanes|=f,ti|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,en(r,e.memoizedState)||(vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ee.lanes|=s,ti|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Oc(t){var e=Bt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);en(s,e.memoizedState)||(vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function qv(){}function Hv(t,e){var n=Ee,r=Bt(),i=e(),s=!en(r.memoizedState,i);if(s&&(r.memoizedState=i,vt=!0),r=r.queue,rf(Gv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,ko(9,Kv.bind(null,n,r,i,e),void 0,null),qe===null)throw Error(b(349));ei&30||Wv(n,e,i)}return i}function Wv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Kv(t,e,n,r){e.value=n,e.getSnapshot=r,Qv(e)&&Xv(t)}function Gv(t,e,n){return n(function(){Qv(e)&&Xv(t)})}function Qv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!en(t,n)}catch{return!0}}function Xv(t){var e=Vn(t,1);e!==null&&Jt(e,t,1,-1)}function fg(t){var e=on();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:t},e.queue=t,t=t.dispatch=NS.bind(null,Ee,t),[e.memoizedState,t]}function ko(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Yv(){return Bt().memoizedState}function Ja(t,e,n,r){var i=on();Ee.flags|=t,i.memoizedState=ko(1|e,n,void 0,r===void 0?null:r)}function cu(t,e,n,r){var i=Bt();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&ef(r,o.deps)){i.memoizedState=ko(e,n,s,r);return}}Ee.flags|=t,i.memoizedState=ko(1|e,n,s,r)}function pg(t,e){return Ja(8390656,8,t,e)}function rf(t,e){return cu(2048,8,t,e)}function Jv(t,e){return cu(4,2,t,e)}function Zv(t,e){return cu(4,4,t,e)}function ew(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function tw(t,e,n){return n=n!=null?n.concat([t]):null,cu(4,4,ew.bind(null,e,t),n)}function sf(){}function nw(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ef(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function rw(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ef(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function iw(t,e,n){return ei&21?(en(n,e)||(n=uv(),Ee.lanes|=n,ti|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vt=!0),t.memoizedState=n)}function kS(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=xc.transition;xc.transition={};try{t(!1),e()}finally{le=n,xc.transition=r}}function sw(){return Bt().memoizedState}function PS(t,e,n){var r=cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ow(t))aw(e,n);else if(n=Bv(t,e,n,r),n!==null){var i=ft();Jt(n,t,r,i),lw(n,e,r)}}function NS(t,e,n){var r=cr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ow(t))aw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,en(l,o)){var u=e.interleaved;u===null?(i.next=i,Qd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Bv(t,e,i,r),n!==null&&(i=ft(),Jt(n,t,r,i),lw(n,e,r))}}function ow(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function aw(t,e){eo=Nl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function lw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Md(t,n)}}var Dl={readContext:jt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},DS={readContext:jt,useCallback:function(t,e){return on().memoizedState=[t,e===void 0?null:e],t},useContext:jt,useEffect:pg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ja(4194308,4,ew.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ja(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ja(4,2,t,e)},useMemo:function(t,e){var n=on();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=on();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=PS.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=on();return t={current:t},e.memoizedState=t},useState:fg,useDebugValue:sf,useDeferredValue:function(t){return on().memoizedState=t},useTransition:function(){var t=fg(!1),e=t[0];return t=kS.bind(null,t[1]),on().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,i=on();if(_e){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),qe===null)throw Error(b(349));ei&30||Wv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,pg(Gv.bind(null,r,s,t),[t]),r.flags|=2048,ko(9,Kv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=on(),e=qe.identifierPrefix;if(_e){var n=Cn,r=Rn;n=(r&~(1<<32-Yt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ro++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=CS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},xS={readContext:jt,useCallback:nw,useContext:jt,useEffect:rf,useImperativeHandle:tw,useInsertionEffect:Jv,useLayoutEffect:Zv,useMemo:rw,useReducer:Vc,useRef:Yv,useState:function(){return Vc(Co)},useDebugValue:sf,useDeferredValue:function(t){var e=Bt();return iw(e,Fe.memoizedState,t)},useTransition:function(){var t=Vc(Co)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:qv,useSyncExternalStore:Hv,useId:sw,unstable_isNewReconciler:!1},VS={readContext:jt,useCallback:nw,useContext:jt,useEffect:rf,useImperativeHandle:tw,useInsertionEffect:Jv,useLayoutEffect:Zv,useMemo:rw,useReducer:Oc,useRef:Yv,useState:function(){return Oc(Co)},useDebugValue:sf,useDeferredValue:function(t){var e=Bt();return Fe===null?e.memoizedState=t:iw(e,Fe.memoizedState,t)},useTransition:function(){var t=Oc(Co)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:qv,useSyncExternalStore:Hv,useId:sw,unstable_isNewReconciler:!1};function Wt(t,e){if(t&&t.defaultProps){e=Te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Vh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hu={isMounted:function(t){return(t=t._reactInternals)?ci(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ft(),i=cr(t),s=Nn(r,i);s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,i),e!==null&&(Jt(e,t,i,r),Xa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ft(),i=cr(t),s=Nn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,i),e!==null&&(Jt(e,t,i,r),Xa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ft(),r=cr(t),i=Nn(n,r);i.tag=2,e!=null&&(i.callback=e),e=lr(t,i,r),e!==null&&(Jt(e,t,r,n),Xa(e,t,r))}};function mg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!wo(n,r)||!wo(i,s):!0}function uw(t,e,n){var r=!1,i=_r,s=e.contextType;return typeof s=="object"&&s!==null?s=jt(s):(i=Et(e)?Jr:at.current,r=e.contextTypes,s=(r=r!=null)?Xi(t,i):_r),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function gg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&hu.enqueueReplaceState(e,e.state,null)}function Oh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Xd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=jt(s):(s=Et(e)?Jr:at.current,i.context=Xi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&hu.enqueueReplaceState(i,i.state,null),kl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function es(t,e){try{var n="",r=e;do n+=a1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Mc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Mh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var OS=typeof WeakMap=="function"?WeakMap:Map;function cw(t,e,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Vl||(Vl=!0,Hh=r),Mh(t,e)},n}function hw(t,e,n){n=Nn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Mh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Mh(t,e),typeof r!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function yg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new OS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=GS.bind(null,t,e,n),e.then(t,t))}function _g(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nn(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var MS=jn.ReactCurrentOwner,vt=!1;function dt(t,e,n,r){e.child=t===null?jv(e,null,n,r):Ji(e,t.child,n,r)}function wg(t,e,n,r,i){n=n.render;var s=e.ref;return zi(e,i),r=tf(t,e,n,r,s,i),n=nf(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,On(t,e,i)):(_e&&n&&$d(e),e.flags|=1,dt(t,e,r,i),e.child)}function Eg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ff(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,dw(t,e,s,r,i)):(t=nl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:wo,n(o,r)&&t.ref===e.ref)return On(t,e,i)}return e.flags|=1,t=hr(s,r),t.ref=e.ref,t.return=e,e.child=t}function dw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(wo(s,r)&&t.ref===e.ref)if(vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(vt=!0);else return e.lanes=t.lanes,On(t,e,i)}return Lh(t,e,n,r,i)}function fw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Li,Rt),Rt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(Li,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(Li,Rt),Rt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(Li,Rt),Rt|=r;return dt(t,e,i,n),e.child}function pw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Lh(t,e,n,r,i){var s=Et(n)?Jr:at.current;return s=Xi(e,s),zi(e,i),n=tf(t,e,n,r,s,i),r=nf(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,On(t,e,i)):(_e&&r&&$d(e),e.flags|=1,dt(t,e,n,i),e.child)}function Tg(t,e,n,r,i){if(Et(n)){var s=!0;Il(e)}else s=!1;if(zi(e,i),e.stateNode===null)Za(t,e),uw(e,n,r),Oh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=jt(h):(h=Et(n)?Jr:at.current,h=Xi(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&gg(e,o,r,h),Kn=!1;var p=e.memoizedState;o.state=p,kl(e,r,o,i),u=e.memoizedState,l!==r||p!==u||wt.current||Kn?(typeof f=="function"&&(Vh(e,n,f,r),u=e.memoizedState),(l=Kn||mg(e,n,l,r,p,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,zv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Wt(e.type,l),o.props=h,m=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=jt(u):(u=Et(n)?Jr:at.current,u=Xi(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||p!==u)&&gg(e,o,r,u),Kn=!1,p=e.memoizedState,o.state=p,kl(e,r,o,i);var C=e.memoizedState;l!==m||p!==C||wt.current||Kn?(typeof A=="function"&&(Vh(e,n,A,r),C=e.memoizedState),(h=Kn||mg(e,n,h,r,p,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return bh(t,e,n,r,s,i)}function bh(t,e,n,r,i,s){pw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ag(e,n,!1),On(t,e,s);r=e.stateNode,MS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ji(e,t.child,null,s),e.child=Ji(e,null,l,s)):dt(t,e,l,s),e.memoizedState=r.state,i&&ag(e,n,!0),e.child}function mw(t){var e=t.stateNode;e.pendingContext?og(t,e.pendingContext,e.pendingContext!==e.context):e.context&&og(t,e.context,!1),Yd(t,e.containerInfo)}function Ig(t,e,n,r,i){return Yi(),Hd(i),e.flags|=256,dt(t,e,n,r),e.child}var Uh={dehydrated:null,treeContext:null,retryLane:0};function Fh(t){return{baseLanes:t,cachePool:null,transitions:null}}function gw(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(we,i&1),t===null)return Dh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pu(o,r,0,null),t=Kr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Fh(n),e.memoizedState=Uh,t):of(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return LS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=hr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=hr(l,s):(s=Kr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Fh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Uh,r}return s=t.child,t=s.sibling,r=hr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function of(t,e){return e=pu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Va(t,e,n,r){return r!==null&&Hd(r),Ji(e,t.child,null,n),t=of(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function LS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Mc(Error(b(422))),Va(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=pu({mode:"visible",children:r.children},i,0,null),s=Kr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ji(e,t.child,null,o),e.child.memoizedState=Fh(o),e.memoizedState=Uh,s);if(!(e.mode&1))return Va(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(b(419)),r=Mc(s,r,void 0),Va(t,e,o,r)}if(l=(o&t.childLanes)!==0,vt||l){if(r=qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Vn(t,i),Jt(r,t,i,-1))}return df(),r=Mc(Error(b(421))),Va(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=QS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ct=ar(i.nextSibling),Nt=e,_e=!0,Gt=null,t!==null&&(Mt[Lt++]=Rn,Mt[Lt++]=Cn,Mt[Lt++]=Zr,Rn=t.id,Cn=t.overflow,Zr=e),e=of(e,r.children),e.flags|=4096,e)}function Sg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),xh(t.return,e,n)}function Lc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function yw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(dt(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sg(t,n,e);else if(t.tag===19)Sg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Pl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Lc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Pl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Lc(e,!0,n,null,s);break;case"together":Lc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Za(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function On(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ti|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=hr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bS(t,e,n){switch(e.tag){case 3:mw(e),Yi();break;case 5:$v(e);break;case 1:Et(e.type)&&Il(e);break;case 4:Yd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(Rl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?gw(t,e,n):(de(we,we.current&1),t=On(t,e,n),t!==null?t.sibling:null);de(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return yw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,fw(t,e,n)}return On(t,e,n)}var _w,jh,vw,ww;_w=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jh=function(){};vw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,$r(hn.current);var s=null;switch(n){case"input":i=lh(t,i),r=lh(t,r),s=[];break;case"select":i=Te({},i,{value:void 0}),r=Te({},r,{value:void 0}),s=[];break;case"textarea":i=hh(t,i),r=hh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=El)}fh(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(fo.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(fo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&me("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};ww=function(t,e,n,r){n!==r&&(e.flags|=4)};function Us(t,e){if(!_e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function US(t,e,n){var r=e.pendingProps;switch(qd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(e),null;case 1:return Et(e.type)&&Tl(),nt(e),null;case 3:return r=e.stateNode,Zi(),ye(wt),ye(at),Zd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Da(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gt!==null&&(Gh(Gt),Gt=null))),jh(t,e),nt(e),null;case 5:Jd(e);var i=$r(Ao.current);if(n=e.type,t!==null&&e.stateNode!=null)vw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return nt(e),null}if(t=$r(hn.current),Da(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ln]=e,r[Io]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<qs.length;i++)me(qs[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Vm(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":Mm(r,s),me("invalid",r)}fh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Na(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Na(r.textContent,l,t),i=["children",""+l]):fo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":Ta(r),Om(r,s,!0);break;case"textarea":Ta(r),Lm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=El)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=G_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ln]=e,t[Io]=r,_w(t,e,!1,!1),e.stateNode=t;e:{switch(o=ph(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<qs.length;i++)me(qs[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":Vm(t,r),i=lh(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Te({},r,{value:void 0}),me("invalid",t);break;case"textarea":Mm(t,r),i=hh(t,r),me("invalid",t);break;default:i=r}fh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Y_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Q_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&po(t,u):typeof u=="number"&&po(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&me("scroll",t):u!=null&&Pd(t,s,u,o))}switch(n){case"input":Ta(t),Om(t,r,!1);break;case"textarea":Ta(t),Lm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+yr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ui(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ui(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=El)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nt(e),null;case 6:if(t&&e.stateNode!=null)ww(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=$r(Ao.current),$r(hn.current),Da(e)){if(r=e.stateNode,n=e.memoizedProps,r[ln]=e,(s=r.nodeValue!==n)&&(t=Nt,t!==null))switch(t.tag){case 3:Na(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Na(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ln]=e,e.stateNode=r}return nt(e),null;case 13:if(ye(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_e&&Ct!==null&&e.mode&1&&!(e.flags&128))Uv(),Yi(),e.flags|=98560,s=!1;else if(s=Da(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[ln]=e}else Yi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nt(e),s=!1}else Gt!==null&&(Gh(Gt),Gt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?je===0&&(je=3):df())),e.updateQueue!==null&&(e.flags|=4),nt(e),null);case 4:return Zi(),jh(t,e),t===null&&Eo(e.stateNode.containerInfo),nt(e),null;case 10:return Gd(e.type._context),nt(e),null;case 17:return Et(e.type)&&Tl(),nt(e),null;case 19:if(ye(we),s=e.memoizedState,s===null)return nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Us(s,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Pl(t),o!==null){for(e.flags|=128,Us(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&xe()>ts&&(e.flags|=128,r=!0,Us(s,!1),e.lanes=4194304)}else{if(!r)if(t=Pl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Us(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_e)return nt(e),null}else 2*xe()-s.renderingStartTime>ts&&n!==1073741824&&(e.flags|=128,r=!0,Us(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xe(),e.sibling=null,n=we.current,de(we,r?n&1|2:n&1),e):(nt(e),null);case 22:case 23:return hf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(nt(e),e.subtreeFlags&6&&(e.flags|=8192)):nt(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function FS(t,e){switch(qd(e),e.tag){case 1:return Et(e.type)&&Tl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zi(),ye(wt),ye(at),Zd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jd(e),null;case 13:if(ye(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));Yi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(we),null;case 4:return Zi(),null;case 10:return Gd(e.type._context),null;case 22:case 23:return hf(),null;case 24:return null;default:return null}}var Oa=!1,st=!1,jS=typeof WeakSet=="function"?WeakSet:Set,q=null;function Mi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function Bh(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var Ag=!1;function BS(t,e){if(Sh=_l,t=Av(),zd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,m=t,p=null;t:for(;;){for(var A;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(A=m.firstChild)!==null;)p=m,m=A;for(;;){if(m===t)break t;if(p===n&&++h===i&&(l=o),p===s&&++f===r&&(u=o),(A=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ah={focusedElem:t,selectionRange:n},_l=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var N=C.memoizedProps,V=C.memoizedState,S=e.stateNode,_=S.getSnapshotBeforeUpdate(e.elementType===e.type?N:Wt(e.type,N),V);S.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(D){Ae(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return C=Ag,Ag=!1,C}function to(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Bh(e,n,s)}i=i.next}while(i!==r)}}function du(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function zh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ew(t){var e=t.alternate;e!==null&&(t.alternate=null,Ew(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ln],delete e[Io],delete e[kh],delete e[IS],delete e[SS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Tw(t){return t.tag===5||t.tag===3||t.tag===4}function Rg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $h(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=El));else if(r!==4&&(t=t.child,t!==null))for($h(t,e,n),t=t.sibling;t!==null;)$h(t,e,n),t=t.sibling}function qh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(qh(t,e,n),t=t.sibling;t!==null;)qh(t,e,n),t=t.sibling}var We=null,Kt=!1;function qn(t,e,n){for(n=n.child;n!==null;)Iw(t,e,n),n=n.sibling}function Iw(t,e,n){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(iu,n)}catch{}switch(n.tag){case 5:st||Mi(n,e);case 6:var r=We,i=Kt;We=null,qn(t,e,n),We=r,Kt=i,We!==null&&(Kt?(t=We,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Kt?(t=We,n=n.stateNode,t.nodeType===8?Pc(t.parentNode,n):t.nodeType===1&&Pc(t,n),_o(t)):Pc(We,n.stateNode));break;case 4:r=We,i=Kt,We=n.stateNode.containerInfo,Kt=!0,qn(t,e,n),We=r,Kt=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Bh(n,e,o),i=i.next}while(i!==r)}qn(t,e,n);break;case 1:if(!st&&(Mi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ae(n,e,l)}qn(t,e,n);break;case 21:qn(t,e,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,qn(t,e,n),st=r):qn(t,e,n);break;default:qn(t,e,n)}}function Cg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new jS),e.forEach(function(r){var i=XS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ht(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:We=l.stateNode,Kt=!1;break e;case 3:We=l.stateNode.containerInfo,Kt=!0;break e;case 4:We=l.stateNode.containerInfo,Kt=!0;break e}l=l.return}if(We===null)throw Error(b(160));Iw(s,o,i),We=null,Kt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Ae(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Sw(e,t),e=e.sibling}function Sw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ht(e,t),sn(t),r&4){try{to(3,t,t.return),du(3,t)}catch(N){Ae(t,t.return,N)}try{to(5,t,t.return)}catch(N){Ae(t,t.return,N)}}break;case 1:Ht(e,t),sn(t),r&512&&n!==null&&Mi(n,n.return);break;case 5:if(Ht(e,t),sn(t),r&512&&n!==null&&Mi(n,n.return),t.flags&32){var i=t.stateNode;try{po(i,"")}catch(N){Ae(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&W_(i,s),ph(l,o);var h=ph(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?Y_(i,m):f==="dangerouslySetInnerHTML"?Q_(i,m):f==="children"?po(i,m):Pd(i,f,m,h)}switch(l){case"input":uh(i,s);break;case"textarea":K_(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?Ui(i,!!s.multiple,A,!1):p!==!!s.multiple&&(s.defaultValue!=null?Ui(i,!!s.multiple,s.defaultValue,!0):Ui(i,!!s.multiple,s.multiple?[]:"",!1))}i[Io]=s}catch(N){Ae(t,t.return,N)}}break;case 6:if(Ht(e,t),sn(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Ae(t,t.return,N)}}break;case 3:if(Ht(e,t),sn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_o(e.containerInfo)}catch(N){Ae(t,t.return,N)}break;case 4:Ht(e,t),sn(t);break;case 13:Ht(e,t),sn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(uf=xe())),r&4&&Cg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(st=(h=st)||f,Ht(e,t),st=h):Ht(e,t),sn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(q=t,f=t.child;f!==null;){for(m=q=f;q!==null;){switch(p=q,A=p.child,p.tag){case 0:case 11:case 14:case 15:to(4,p,p.return);break;case 1:Mi(p,p.return);var C=p.stateNode;if(typeof C.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(N){Ae(r,n,N)}}break;case 5:Mi(p,p.return);break;case 22:if(p.memoizedState!==null){Pg(m);continue}}A!==null?(A.return=p,q=A):Pg(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=X_("display",o))}catch(N){Ae(t,t.return,N)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(N){Ae(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ht(e,t),sn(t),r&4&&Cg(t);break;case 21:break;default:Ht(e,t),sn(t)}}function sn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Tw(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(po(i,""),r.flags&=-33);var s=Rg(t);qh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Rg(t);$h(t,l,o);break;default:throw Error(b(161))}}catch(u){Ae(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zS(t,e,n){q=t,Aw(t)}function Aw(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Oa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||st;l=Oa;var h=st;if(Oa=o,(st=u)&&!h)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?Ng(i):u!==null?(u.return=o,q=u):Ng(i);for(;s!==null;)q=s,Aw(s),s=s.sibling;q=i,Oa=l,st=h}kg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):kg(t)}}function kg(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:st||du(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Wt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&dg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}dg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&_o(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}st||e.flags&512&&zh(e)}catch(p){Ae(e,e.return,p)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Pg(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Ng(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{du(4,e)}catch(u){Ae(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ae(e,i,u)}}var s=e.return;try{zh(e)}catch(u){Ae(e,s,u)}break;case 5:var o=e.return;try{zh(e)}catch(u){Ae(e,o,u)}}}catch(u){Ae(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var $S=Math.ceil,xl=jn.ReactCurrentDispatcher,af=jn.ReactCurrentOwner,Ft=jn.ReactCurrentBatchConfig,se=0,qe=null,Oe=null,Qe=0,Rt=0,Li=Cr(0),je=0,Po=null,ti=0,fu=0,lf=0,no=null,yt=null,uf=0,ts=1/0,Sn=null,Vl=!1,Hh=null,ur=null,Ma=!1,nr=null,Ol=0,ro=0,Wh=null,el=-1,tl=0;function ft(){return se&6?xe():el!==-1?el:el=xe()}function cr(t){return t.mode&1?se&2&&Qe!==0?Qe&-Qe:RS.transition!==null?(tl===0&&(tl=uv()),tl):(t=le,t!==0||(t=window.event,t=t===void 0?16:gv(t.type)),t):1}function Jt(t,e,n,r){if(50<ro)throw ro=0,Wh=null,Error(b(185));Bo(t,n,r),(!(se&2)||t!==qe)&&(t===qe&&(!(se&2)&&(fu|=n),je===4&&Qn(t,Qe)),Tt(t,r),n===1&&se===0&&!(e.mode&1)&&(ts=xe()+500,uu&&kr()))}function Tt(t,e){var n=t.callbackNode;R1(t,e);var r=yl(t,t===qe?Qe:0);if(r===0)n!==null&&Fm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Fm(n),e===1)t.tag===0?AS(Dg.bind(null,t)):Mv(Dg.bind(null,t)),ES(function(){!(se&6)&&kr()}),n=null;else{switch(cv(r)){case 1:n=Od;break;case 4:n=av;break;case 16:n=gl;break;case 536870912:n=lv;break;default:n=gl}n=Vw(n,Rw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Rw(t,e){if(el=-1,tl=0,se&6)throw Error(b(327));var n=t.callbackNode;if($i()&&t.callbackNode!==n)return null;var r=yl(t,t===qe?Qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ml(t,r);else{e=r;var i=se;se|=2;var s=kw();(qe!==t||Qe!==e)&&(Sn=null,ts=xe()+500,Wr(t,e));do try{WS();break}catch(l){Cw(t,l)}while(1);Kd(),xl.current=s,se=i,Oe!==null?e=0:(qe=null,Qe=0,e=je)}if(e!==0){if(e===2&&(i=vh(t),i!==0&&(r=i,e=Kh(t,i))),e===1)throw n=Po,Wr(t,0),Qn(t,r),Tt(t,xe()),n;if(e===6)Qn(t,r);else{if(i=t.current.alternate,!(r&30)&&!qS(i)&&(e=Ml(t,r),e===2&&(s=vh(t),s!==0&&(r=s,e=Kh(t,s))),e===1))throw n=Po,Wr(t,0),Qn(t,r),Tt(t,xe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:Fr(t,yt,Sn);break;case 3:if(Qn(t,r),(r&130023424)===r&&(e=uf+500-xe(),10<e)){if(yl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ft(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ch(Fr.bind(null,t,yt,Sn),e);break}Fr(t,yt,Sn);break;case 4:if(Qn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Yt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$S(r/1960))-r,10<r){t.timeoutHandle=Ch(Fr.bind(null,t,yt,Sn),r);break}Fr(t,yt,Sn);break;case 5:Fr(t,yt,Sn);break;default:throw Error(b(329))}}}return Tt(t,xe()),t.callbackNode===n?Rw.bind(null,t):null}function Kh(t,e){var n=no;return t.current.memoizedState.isDehydrated&&(Wr(t,e).flags|=256),t=Ml(t,e),t!==2&&(e=yt,yt=n,e!==null&&Gh(e)),t}function Gh(t){yt===null?yt=t:yt.push.apply(yt,t)}function qS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!en(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qn(t,e){for(e&=~lf,e&=~fu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yt(e),r=1<<n;t[n]=-1,e&=~r}}function Dg(t){if(se&6)throw Error(b(327));$i();var e=yl(t,0);if(!(e&1))return Tt(t,xe()),null;var n=Ml(t,e);if(t.tag!==0&&n===2){var r=vh(t);r!==0&&(e=r,n=Kh(t,r))}if(n===1)throw n=Po,Wr(t,0),Qn(t,e),Tt(t,xe()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fr(t,yt,Sn),Tt(t,xe()),null}function cf(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(ts=xe()+500,uu&&kr())}}function ni(t){nr!==null&&nr.tag===0&&!(se&6)&&$i();var e=se;se|=1;var n=Ft.transition,r=le;try{if(Ft.transition=null,le=1,t)return t()}finally{le=r,Ft.transition=n,se=e,!(se&6)&&kr()}}function hf(){Rt=Li.current,ye(Li)}function Wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wS(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(qd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Tl();break;case 3:Zi(),ye(wt),ye(at),Zd();break;case 5:Jd(r);break;case 4:Zi();break;case 13:ye(we);break;case 19:ye(we);break;case 10:Gd(r.type._context);break;case 22:case 23:hf()}n=n.return}if(qe=t,Oe=t=hr(t.current,null),Qe=Rt=e,je=0,Po=null,lf=fu=ti=0,yt=no=null,zr!==null){for(e=0;e<zr.length;e++)if(n=zr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}zr=null}return t}function Cw(t,e){do{var n=Oe;try{if(Kd(),Ya.current=Dl,Nl){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Nl=!1}if(ei=0,$e=Fe=Ee=null,eo=!1,Ro=0,af.current=null,n===null||n.return===null){je=1,Po=e,Oe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Qe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=_g(o);if(A!==null){A.flags&=-257,vg(A,o,l,s,e),A.mode&1&&yg(s,h,e),e=A,u=h;var C=e.updateQueue;if(C===null){var N=new Set;N.add(u),e.updateQueue=N}else C.add(u);break e}else{if(!(e&1)){yg(s,h,e),df();break e}u=Error(b(426))}}else if(_e&&l.mode&1){var V=_g(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),vg(V,o,l,s,e),Hd(es(u,l));break e}}s=u=es(u,l),je!==4&&(je=2),no===null?no=[s]:no.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=cw(s,u,e);hg(s,S);break e;case 1:l=u;var _=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(ur===null||!ur.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=hw(s,l,e);hg(s,D);break e}}s=s.return}while(s!==null)}Nw(n)}catch(U){e=U,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(1)}function kw(){var t=xl.current;return xl.current=Dl,t===null?Dl:t}function df(){(je===0||je===3||je===2)&&(je=4),qe===null||!(ti&268435455)&&!(fu&268435455)||Qn(qe,Qe)}function Ml(t,e){var n=se;se|=2;var r=kw();(qe!==t||Qe!==e)&&(Sn=null,Wr(t,e));do try{HS();break}catch(i){Cw(t,i)}while(1);if(Kd(),se=n,xl.current=r,Oe!==null)throw Error(b(261));return qe=null,Qe=0,je}function HS(){for(;Oe!==null;)Pw(Oe)}function WS(){for(;Oe!==null&&!y1();)Pw(Oe)}function Pw(t){var e=xw(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?Nw(t):Oe=e,af.current=null}function Nw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=FS(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,Oe=null;return}}else if(n=US(n,e,Rt),n!==null){Oe=n;return}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);je===0&&(je=5)}function Fr(t,e,n){var r=le,i=Ft.transition;try{Ft.transition=null,le=1,KS(t,e,n,r)}finally{Ft.transition=i,le=r}return null}function KS(t,e,n,r){do $i();while(nr!==null);if(se&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(C1(t,s),t===qe&&(Oe=qe=null,Qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ma||(Ma=!0,Vw(gl,function(){return $i(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ft.transition,Ft.transition=null;var o=le;le=1;var l=se;se|=4,af.current=null,BS(t,n),Sw(n,t),fS(Ah),_l=!!Sh,Ah=Sh=null,t.current=n,zS(n),_1(),se=l,le=o,Ft.transition=s}else t.current=n;if(Ma&&(Ma=!1,nr=t,Ol=i),s=t.pendingLanes,s===0&&(ur=null),E1(n.stateNode),Tt(t,xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vl)throw Vl=!1,t=Hh,Hh=null,t;return Ol&1&&t.tag!==0&&$i(),s=t.pendingLanes,s&1?t===Wh?ro++:(ro=0,Wh=t):ro=0,kr(),null}function $i(){if(nr!==null){var t=cv(Ol),e=Ft.transition,n=le;try{if(Ft.transition=null,le=16>t?16:t,nr===null)var r=!1;else{if(t=nr,nr=null,Ol=0,se&6)throw Error(b(331));var i=se;for(se|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(q=h;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:to(8,f,s)}var m=f.child;if(m!==null)m.return=f,q=m;else for(;q!==null;){f=q;var p=f.sibling,A=f.return;if(Ew(f),f===h){q=null;break}if(p!==null){p.return=A,q=p;break}q=A}}}var C=s.alternate;if(C!==null){var N=C.child;if(N!==null){C.child=null;do{var V=N.sibling;N.sibling=null,N=V}while(N!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:to(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,q=S;break e}q=s.return}}var _=t.current;for(q=_;q!==null;){o=q;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,q=E;else e:for(o=_;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:du(9,l)}}catch(U){Ae(l,l.return,U)}if(l===o){q=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,q=D;break e}q=l.return}}if(se=i,kr(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(iu,t)}catch{}r=!0}return r}finally{le=n,Ft.transition=e}}return!1}function xg(t,e,n){e=es(n,e),e=cw(t,e,1),t=lr(t,e,1),e=ft(),t!==null&&(Bo(t,1,e),Tt(t,e))}function Ae(t,e,n){if(t.tag===3)xg(t,t,n);else for(;e!==null;){if(e.tag===3){xg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ur===null||!ur.has(r))){t=es(n,t),t=hw(e,t,1),e=lr(e,t,1),t=ft(),e!==null&&(Bo(e,1,t),Tt(e,t));break}}e=e.return}}function GS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ft(),t.pingedLanes|=t.suspendedLanes&n,qe===t&&(Qe&n)===n&&(je===4||je===3&&(Qe&130023424)===Qe&&500>xe()-uf?Wr(t,0):lf|=n),Tt(t,e)}function Dw(t,e){e===0&&(t.mode&1?(e=Aa,Aa<<=1,!(Aa&130023424)&&(Aa=4194304)):e=1);var n=ft();t=Vn(t,e),t!==null&&(Bo(t,e,n),Tt(t,n))}function QS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Dw(t,n)}function XS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),Dw(t,n)}var xw;xw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wt.current)vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vt=!1,bS(t,e,n);vt=!!(t.flags&131072)}else vt=!1,_e&&e.flags&1048576&&Lv(e,Al,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Za(t,e),t=e.pendingProps;var i=Xi(e,at.current);zi(e,n),i=tf(null,e,r,t,i,n);var s=nf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Et(r)?(s=!0,Il(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xd(e),i.updater=hu,e.stateNode=i,i._reactInternals=e,Oh(e,r,t,n),e=bh(null,e,r,!0,s,n)):(e.tag=0,_e&&s&&$d(e),dt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Za(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=JS(r),t=Wt(r,t),i){case 0:e=Lh(null,e,r,t,n);break e;case 1:e=Tg(null,e,r,t,n);break e;case 11:e=wg(null,e,r,t,n);break e;case 14:e=Eg(null,e,r,Wt(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Lh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Tg(t,e,r,i,n);case 3:e:{if(mw(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,zv(t,e),kl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=es(Error(b(423)),e),e=Ig(t,e,r,n,i);break e}else if(r!==i){i=es(Error(b(424)),e),e=Ig(t,e,r,n,i);break e}else for(Ct=ar(e.stateNode.containerInfo.firstChild),Nt=e,_e=!0,Gt=null,n=jv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yi(),r===i){e=On(t,e,n);break e}dt(t,e,r,n)}e=e.child}return e;case 5:return $v(e),t===null&&Dh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Rh(r,i)?o=null:s!==null&&Rh(r,s)&&(e.flags|=32),pw(t,e),dt(t,e,o,n),e.child;case 6:return t===null&&Dh(e),null;case 13:return gw(t,e,n);case 4:return Yd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ji(e,null,r,n):dt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),wg(t,e,r,i,n);case 7:return dt(t,e,e.pendingProps,n),e.child;case 8:return dt(t,e,e.pendingProps.children,n),e.child;case 12:return dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(Rl,r._currentValue),r._currentValue=o,s!==null)if(en(s.value,o)){if(s.children===i.children&&!wt.current){e=On(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Nn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),xh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),xh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,zi(e,n),i=jt(i),r=r(i),e.flags|=1,dt(t,e,r,n),e.child;case 14:return r=e.type,i=Wt(r,e.pendingProps),i=Wt(r.type,i),Eg(t,e,r,i,n);case 15:return dw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Za(t,e),e.tag=1,Et(r)?(t=!0,Il(e)):t=!1,zi(e,n),uw(e,r,i),Oh(e,r,i,n),bh(null,e,r,!0,t,n);case 19:return yw(t,e,n);case 22:return fw(t,e,n)}throw Error(b(156,e.tag))};function Vw(t,e){return ov(t,e)}function YS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,e,n,r){return new YS(t,e,n,r)}function ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function JS(t){if(typeof t=="function")return ff(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Dd)return 11;if(t===xd)return 14}return 2}function hr(t,e){var n=t.alternate;return n===null?(n=Ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ff(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ri:return Kr(n.children,i,s,e);case Nd:o=8,i|=8;break;case ih:return t=Ut(12,n,e,i|2),t.elementType=ih,t.lanes=s,t;case sh:return t=Ut(13,n,e,i),t.elementType=sh,t.lanes=s,t;case oh:return t=Ut(19,n,e,i),t.elementType=oh,t.lanes=s,t;case $_:return pu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B_:o=10;break e;case z_:o=9;break e;case Dd:o=11;break e;case xd:o=14;break e;case Wn:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=Ut(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Kr(t,e,n,r){return t=Ut(7,t,r,e),t.lanes=n,t}function pu(t,e,n,r){return t=Ut(22,t,r,e),t.elementType=$_,t.lanes=n,t.stateNode={isHidden:!1},t}function bc(t,e,n){return t=Ut(6,t,null,e),t.lanes=n,t}function Uc(t,e,n){return e=Ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ZS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_c(0),this.expirationTimes=_c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_c(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pf(t,e,n,r,i,s,o,l,u){return t=new ZS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ut(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xd(s),t}function eA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ai,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Ow(t){if(!t)return _r;t=t._reactInternals;e:{if(ci(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Et(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(Et(n))return Ov(t,n,e)}return e}function Mw(t,e,n,r,i,s,o,l,u){return t=pf(n,r,!0,t,i,s,o,l,u),t.context=Ow(null),n=t.current,r=ft(),i=cr(n),s=Nn(r,i),s.callback=e??null,lr(n,s,i),t.current.lanes=i,Bo(t,i,r),Tt(t,r),t}function mu(t,e,n,r){var i=e.current,s=ft(),o=cr(i);return n=Ow(n),e.context===null?e.context=n:e.pendingContext=n,e=Nn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=lr(i,e,o),t!==null&&(Jt(t,i,o,s),Xa(t,i,o)),o}function Ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mf(t,e){Vg(t,e),(t=t.alternate)&&Vg(t,e)}function tA(){return null}var Lw=typeof reportError=="function"?reportError:function(t){console.error(t)};function gf(t){this._internalRoot=t}gu.prototype.render=gf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));mu(t,e,null,null)};gu.prototype.unmount=gf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ni(function(){mu(null,t,null,null)}),e[xn]=null}};function gu(t){this._internalRoot=t}gu.prototype.unstable_scheduleHydration=function(t){if(t){var e=fv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gn.length&&e!==0&&e<Gn[n].priority;n++);Gn.splice(n,0,t),n===0&&mv(t)}};function yf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Og(){}function nA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Ll(o);s.call(h)}}var o=Mw(e,r,t,0,null,!1,!1,"",Og);return t._reactRootContainer=o,t[xn]=o.current,Eo(t.nodeType===8?t.parentNode:t),ni(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Ll(u);l.call(h)}}var u=pf(t,0,!1,null,null,!1,!1,"",Og);return t._reactRootContainer=u,t[xn]=u.current,Eo(t.nodeType===8?t.parentNode:t),ni(function(){mu(e,u,n,r)}),u}function _u(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Ll(o);l.call(u)}}mu(e,o,t,i)}else o=nA(n,e,t,i,r);return Ll(o)}hv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$s(e.pendingLanes);n!==0&&(Md(e,n|1),Tt(e,xe()),!(se&6)&&(ts=xe()+500,kr()))}break;case 13:ni(function(){var r=Vn(t,1);if(r!==null){var i=ft();Jt(r,t,1,i)}}),mf(t,1)}};Ld=function(t){if(t.tag===13){var e=Vn(t,134217728);if(e!==null){var n=ft();Jt(e,t,134217728,n)}mf(t,134217728)}};dv=function(t){if(t.tag===13){var e=cr(t),n=Vn(t,e);if(n!==null){var r=ft();Jt(n,t,e,r)}mf(t,e)}};fv=function(){return le};pv=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};gh=function(t,e,n){switch(e){case"input":if(uh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=lu(r);if(!i)throw Error(b(90));H_(r),uh(r,i)}}}break;case"textarea":K_(t,n);break;case"select":e=n.value,e!=null&&Ui(t,!!n.multiple,e,!1)}};ev=cf;tv=ni;var rA={usingClientEntryPoint:!1,Events:[$o,Ni,lu,J_,Z_,cf]},Fs={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iA={bundleType:Fs.bundleType,version:Fs.version,rendererPackageName:Fs.rendererPackageName,rendererConfig:Fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=iv(t),t===null?null:t.stateNode},findFiberByHostInstance:Fs.findFiberByHostInstance||tA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var La=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!La.isDisabled&&La.supportsFiber)try{iu=La.inject(iA),cn=La}catch{}}Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rA;Vt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yf(e))throw Error(b(200));return eA(t,e,null,n)};Vt.createRoot=function(t,e){if(!yf(t))throw Error(b(299));var n=!1,r="",i=Lw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=pf(t,1,!1,null,null,n,!1,r,i),t[xn]=e.current,Eo(t.nodeType===8?t.parentNode:t),new gf(e)};Vt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=iv(e),t=t===null?null:t.stateNode,t};Vt.flushSync=function(t){return ni(t)};Vt.hydrate=function(t,e,n){if(!yu(e))throw Error(b(200));return _u(null,t,e,!0,n)};Vt.hydrateRoot=function(t,e,n){if(!yf(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Lw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Mw(e,null,t,1,n??null,i,!1,s,o),t[xn]=e.current,Eo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new gu(e)};Vt.render=function(t,e,n){if(!yu(e))throw Error(b(200));return _u(null,t,e,!1,n)};Vt.unmountComponentAtNode=function(t){if(!yu(t))throw Error(b(40));return t._reactRootContainer?(ni(function(){_u(null,null,t,!1,function(){t._reactRootContainer=null,t[xn]=null})}),!0):!1};Vt.unstable_batchedUpdates=cf;Vt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!yu(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return _u(t,e,n,!1,r)};Vt.version="18.3.1-next-f1338f8080-20240426";function bw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bw)}catch(t){console.error(t)}}bw(),b_.exports=Vt;var sA=b_.exports,Mg=sA;nh.createRoot=Mg.createRoot,nh.hydrateRoot=Mg.hydrateRoot;const oA=({room:t,onRoomSelect:e})=>M.jsxs("div",{className:"room-item",onClick:()=>e(t),children:[M.jsx("h3",{children:t.name}),M.jsxs("p",{children:["Last message: ",new Date(t.lastMessage).toLocaleTimeString()]})]});const aA=({rooms:t,onRoomSelect:e})=>M.jsx("div",{className:"room-list",children:t.map(n=>M.jsx(oA,{room:n,onRoomSelect:e},n.id))}),lA=({onClick:t})=>M.jsx("button",{onClick:t,children:"Create New Room"}),uA=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},cA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Fw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let p=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(p=64)),r.push(n[f],n[m],n[p],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Uw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new hA;const p=s<<2|l>>4;if(r.push(p),h!==64){const A=l<<4&240|h>>2;if(r.push(A),m!==64){const C=h<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dA=function(t){const e=Uw(t);return Fw.encodeByteArray(e,!0)},bl=function(t){return dA(t).replace(/\./g,"")},jw=function(t){try{return Fw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=()=>fA().__FIREBASE_DEFAULTS__,mA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&jw(t[1]);return e&&JSON.parse(e)},vu=()=>{try{return uA()||pA()||mA()||gA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Bw=t=>{var e,n;return(n=(e=vu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},zw=t=>{const e=Bw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},$w=()=>{var t;return(t=vu())==null?void 0:t.config},qw=t=>{var e;return(e=vu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _f(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},l="";return[bl(JSON.stringify(n)),bl(JSON.stringify(o)),l].join(".")}const io={};function _A(){const t={prod:[],emulator:[]};for(const e of Object.keys(io))io[e]?t.emulator.push(e):t.prod.push(e);return t}function vA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Lg=!1;function vf(t,e){if(typeof window>"u"||typeof document>"u"||!Pr(window.location.host)||io[t]===e||io[t]||Lg)return;io[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",s=_A().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function l(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function u(p,A){p.setAttribute("width","24"),p.setAttribute("id",A),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function h(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{Lg=!0,o()},p}function f(p,A){p.setAttribute("id",A),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function m(){const p=vA(r),A=n("text"),C=document.getElementById(A)||document.createElement("span"),N=n("learnmore"),V=document.getElementById(N)||document.createElement("a"),S=n("preprendIcon"),_=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const E=p.element;l(E),f(V,N);const D=h();u(_,S),E.append(_,C,V,D),document.body.appendChild(E)}s?(C.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function EA(){var e;const t=(e=vu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function TA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ww(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function IA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function SA(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function AA(){return!EA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Kw(){try{return typeof indexedDB=="object"}catch{return!1}}function Gw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function RA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="FirebaseError";class $t extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=CA,Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hi.prototype.create)}}class hi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?kA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new $t(i,l,r)}}function kA(t,e){return t.replace(PA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const PA=/\{\$([^}]+)}/g;function NA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(bg(s)&&bg(o)){if(!vr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function bg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function DA(t,e){const n=new xA(t,e);return n.subscribe.bind(n)}class xA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");VA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Fc),i.error===void 0&&(i.error=Fc),i.complete===void 0&&(i.complete=Fc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA=1e3,MA=2,LA=4*60*60*1e3,bA=.5;function Ug(t,e=OA,n=MA){const r=e*Math.pow(n,t),i=Math.round(bA*r*(Math.random()-.5)*2);return Math.min(LA,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(t){return t&&t._delegate?t._delegate:t}class zt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new yA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jA(e))try{this.getOrInitializeService({instanceIdentifier:jr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jr){return this.instances.has(e)}getOptions(e=jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:FA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jr){return this.component?this.component.multipleInstances?e:jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FA(t){return t===jr?void 0:t}function jA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new UA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const zA={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},$A=te.INFO,qA={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},HA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=qA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wu{constructor(e){this.name=e,this._logLevel=$A,this._logHandler=HA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const WA=(t,e)=>e.some(n=>t instanceof n);let Fg,jg;function KA(){return Fg||(Fg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GA(){return jg||(jg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qw=new WeakMap,Qh=new WeakMap,Xw=new WeakMap,jc=new WeakMap,wf=new WeakMap;function QA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(dr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Qw.set(n,t)}).catch(()=>{}),wf.set(e,t),e}function XA(t){if(Qh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Qh.set(t,e)}let Xh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function YA(t){Xh=t(Xh)}function JA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bc(this),e,...n);return Xw.set(r,e.sort?e.sort():[e]),dr(r)}:GA().includes(t)?function(...e){return t.apply(Bc(this),e),dr(Qw.get(this))}:function(...e){return dr(t.apply(Bc(this),e))}}function ZA(t){return typeof t=="function"?JA(t):(t instanceof IDBTransaction&&XA(t),WA(t,KA())?new Proxy(t,Xh):t)}function dr(t){if(t instanceof IDBRequest)return QA(t);if(jc.has(t))return jc.get(t);const e=ZA(t);return e!==t&&(jc.set(t,e),wf.set(e,t)),e}const Bc=t=>wf.get(t);function Yw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=dr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(dr(o.result),u.oldVersion,u.newVersion,dr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const eR=["get","getKey","getAll","getAllKeys","count"],tR=["put","add","delete","clear"],zc=new Map;function Bg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zc.get(e))return zc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=tR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eR.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return zc.set(e,s),s}YA(t=>({...t,get:(e,n,r)=>Bg(e,n)||t.get(e,n,r),has:(e,n)=>!!Bg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yh="@firebase/app",zg="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new wu("@firebase/app"),iR="@firebase/app-compat",sR="@firebase/analytics-compat",oR="@firebase/analytics",aR="@firebase/app-check-compat",lR="@firebase/app-check",uR="@firebase/auth",cR="@firebase/auth-compat",hR="@firebase/database",dR="@firebase/data-connect",fR="@firebase/database-compat",pR="@firebase/functions",mR="@firebase/functions-compat",gR="@firebase/installations",yR="@firebase/installations-compat",_R="@firebase/messaging",vR="@firebase/messaging-compat",wR="@firebase/performance",ER="@firebase/performance-compat",TR="@firebase/remote-config",IR="@firebase/remote-config-compat",SR="@firebase/storage",AR="@firebase/storage-compat",RR="@firebase/firestore",CR="@firebase/ai",kR="@firebase/firestore-compat",PR="firebase",NR="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="[DEFAULT]",DR={[Yh]:"fire-core",[iR]:"fire-core-compat",[oR]:"fire-analytics",[sR]:"fire-analytics-compat",[lR]:"fire-app-check",[aR]:"fire-app-check-compat",[uR]:"fire-auth",[cR]:"fire-auth-compat",[hR]:"fire-rtdb",[dR]:"fire-data-connect",[fR]:"fire-rtdb-compat",[pR]:"fire-fn",[mR]:"fire-fn-compat",[gR]:"fire-iid",[yR]:"fire-iid-compat",[_R]:"fire-fcm",[vR]:"fire-fcm-compat",[wR]:"fire-perf",[ER]:"fire-perf-compat",[TR]:"fire-rc",[IR]:"fire-rc-compat",[SR]:"fire-gcs",[AR]:"fire-gcs-compat",[RR]:"fire-fst",[kR]:"fire-fst-compat",[CR]:"fire-vertex","fire-js":"fire-js",[PR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=new Map,xR=new Map,Zh=new Map;function $g(t,e){try{t.container.addComponent(e)}catch(n){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function tn(t){const e=t.name;if(Zh.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;Zh.set(e,t);for(const n of Ul.values())$g(n,t);for(const n of xR.values())$g(n,t);return!0}function Nr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fr=new hi("app","Firebase",VR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=NR;function Jw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Jh,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw fr.create("bad-app-name",{appName:String(i)});if(n||(n=$w()),!n)throw fr.create("no-options");const s=Ul.get(i);if(s){if(vr(n,s.options)&&vr(r,s.config))return s;throw fr.create("duplicate-app",{appName:i})}const o=new BA(i);for(const u of Zh.values())o.addComponent(u);const l=new OR(n,r,o);return Ul.set(i,l),l}function Eu(t=Jh){const e=Ul.get(t);if(!e&&t===Jh&&$w())return Jw();if(!e)throw fr.create("no-app",{appName:t});return e}function It(t,e,n){let r=DR[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(o.join(" "));return}tn(new zt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR="firebase-heartbeat-database",LR=1,No="firebase-heartbeat-store";let $c=null;function Zw(){return $c||($c=Yw(MR,LR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(No)}catch(n){console.warn(n)}}}}).catch(t=>{throw fr.create("idb-open",{originalErrorMessage:t.message})})),$c}async function bR(t){try{const n=(await Zw()).transaction(No),r=await n.objectStore(No).get(eE(t));return await n.done,r}catch(e){if(e instanceof $t)Mn.warn(e.message);else{const n=fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mn.warn(n.message)}}}async function qg(t,e){try{const r=(await Zw()).transaction(No,"readwrite");await r.objectStore(No).put(e,eE(t)),await r.done}catch(n){if(n instanceof $t)Mn.warn(n.message);else{const r=fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mn.warn(r.message)}}}function eE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=1024,FR=30;class jR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Hg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>FR){const o=$R(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Mn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hg(),{heartbeatsToSend:r,unsentEntries:i}=BR(this._heartbeatsCache.heartbeats),s=bl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Mn.warn(n),""}}}function Hg(){return new Date().toISOString().substring(0,10)}function BR(t,e=UR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Wg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kw()?Gw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return qg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return qg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Wg(t){return bl(JSON.stringify({version:2,heartbeats:t})).length}function $R(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(t){tn(new zt("platform-logger",e=>new nR(e),"PRIVATE")),tn(new zt("heartbeat",e=>new jR(e),"PRIVATE")),It(Yh,zg,t),It(Yh,zg,"esm2020"),It("fire-js","")}qR("");var HR="firebase",WR="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It(HR,WR,"app");const tE="@firebase/installations",Ef="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=1e4,rE=`w:${Ef}`,iE="FIS_v2",KR="https://firebaseinstallations.googleapis.com/v1",GR=60*60*1e3,QR="installations",XR="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ri=new hi(QR,XR,YR);function sE(t){return t instanceof $t&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE({projectId:t}){return`${KR}/projects/${t}/installations`}function aE(t){return{token:t.token,requestStatus:2,expiresIn:ZR(t.expiresIn),creationTime:Date.now()}}async function lE(t,e){const r=(await e.json()).error;return ri.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function uE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function JR(t,{refreshToken:e}){const n=uE(t);return n.append("Authorization",eC(e)),n}async function cE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function ZR(t){return Number(t.replace("s","000"))}function eC(t){return`${iE} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=oE(t),i=uE(t),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={fid:n,authVersion:iE,appId:t.appId,sdkVersion:rE},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await cE(()=>fetch(r,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:aE(h.authToken)}}else throw await lE("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=/^[cdef][\w-]{21}$/,ed="";function iC(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=sC(t);return rC.test(n)?n:ed}catch{return ed}}function sC(t){return nC(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=new Map;function fE(t,e){const n=Tu(t);pE(n,e),oC(n,e)}function pE(t,e){const n=dE.get(t);if(n)for(const r of n)r(e)}function oC(t,e){const n=aC();n&&n.postMessage({key:t,fid:e}),lC()}let qr=null;function aC(){return!qr&&"BroadcastChannel"in self&&(qr=new BroadcastChannel("[Firebase] FID Change"),qr.onmessage=t=>{pE(t.data.key,t.data.fid)}),qr}function lC(){dE.size===0&&qr&&(qr.close(),qr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC="firebase-installations-database",cC=1,ii="firebase-installations-store";let qc=null;function Tf(){return qc||(qc=Yw(uC,cC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ii)}}})),qc}async function Fl(t,e){const n=Tu(t),i=(await Tf()).transaction(ii,"readwrite"),s=i.objectStore(ii),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&fE(t,e.fid),e}async function mE(t){const e=Tu(t),r=(await Tf()).transaction(ii,"readwrite");await r.objectStore(ii).delete(e),await r.done}async function Iu(t,e){const n=Tu(t),i=(await Tf()).transaction(ii,"readwrite"),s=i.objectStore(ii),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&fE(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function If(t){let e;const n=await Iu(t.appConfig,r=>{const i=hC(r),s=dC(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===ed?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function hC(t){const e=t||{fid:iC(),registrationStatus:0};return gE(e)}function dC(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ri.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=fC(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:pC(t)}:{installationEntry:e}}async function fC(t,e){try{const n=await tC(t,e);return Fl(t.appConfig,n)}catch(n){throw sE(n)&&n.customData.serverCode===409?await mE(t.appConfig):await Fl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function pC(t){let e=await Kg(t.appConfig);for(;e.registrationStatus===1;)await hE(100),e=await Kg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await If(t);return r||n}return e}function Kg(t){return Iu(t,e=>{if(!e)throw ri.create("installation-not-found");return gE(e)})}function gE(t){return mC(t)?{fid:t.fid,registrationStatus:0}:t}function mC(t){return t.registrationStatus===1&&t.registrationTime+nE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gC({appConfig:t,heartbeatServiceProvider:e},n){const r=yC(t,n),i=JR(t,n),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={installation:{sdkVersion:rE,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await cE(()=>fetch(r,l));if(u.ok){const h=await u.json();return aE(h)}else throw await lE("Generate Auth Token",u)}function yC(t,{fid:e}){return`${oE(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sf(t,e=!1){let n;const r=await Iu(t.appConfig,s=>{if(!yE(s))throw ri.create("not-registered");const o=s.authToken;if(!e&&wC(o))return s;if(o.requestStatus===1)return n=_C(t,e),s;{if(!navigator.onLine)throw ri.create("app-offline");const l=TC(s);return n=vC(t,l),l}});return n?await n:r.authToken}async function _C(t,e){let n=await Gg(t.appConfig);for(;n.authToken.requestStatus===1;)await hE(100),n=await Gg(t.appConfig);const r=n.authToken;return r.requestStatus===0?Sf(t,e):r}function Gg(t){return Iu(t,e=>{if(!yE(e))throw ri.create("not-registered");const n=e.authToken;return IC(n)?{...e,authToken:{requestStatus:0}}:e})}async function vC(t,e){try{const n=await gC(t,e),r={...e,authToken:n};return await Fl(t.appConfig,r),n}catch(n){if(sE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await mE(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Fl(t.appConfig,r)}throw n}}function yE(t){return t!==void 0&&t.registrationStatus===2}function wC(t){return t.requestStatus===2&&!EC(t)}function EC(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+GR}function TC(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function IC(t){return t.requestStatus===1&&t.requestTime+nE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SC(t){const e=t,{installationEntry:n,registrationPromise:r}=await If(e);return r?r.catch(console.error):Sf(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AC(t,e=!1){const n=t;return await RC(n),(await Sf(n,e)).token}async function RC(t){const{registrationPromise:e}=await If(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(t){if(!t||!t.options)throw Hc("App Configuration");if(!t.name)throw Hc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Hc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Hc(t){return ri.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="installations",kC="installations-internal",PC=t=>{const e=t.getProvider("app").getImmediate(),n=CC(e),r=Nr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},NC=t=>{const e=t.getProvider("app").getImmediate(),n=Nr(e,_E).getImmediate();return{getId:()=>SC(n),getToken:i=>AC(n,i)}};function DC(){tn(new zt(_E,PC,"PUBLIC")),tn(new zt(kC,NC,"PRIVATE"))}DC();It(tE,Ef);It(tE,Ef,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="analytics",xC="firebase_id",VC="origin",OC=60*1e3,MC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Af="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=new wu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Dt=new hi("analytics","Analytics",LC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(t){if(!t.startsWith(Af)){const e=Dt.create("invalid-gtag-resource",{gtagURL:t});return St.warn(e.message),""}return t}function vE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function UC(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function FC(t,e){const n=UC("firebase-js-sdk-policy",{createScriptURL:bC}),r=document.createElement("script"),i=`${Af}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function jC(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function BC(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await vE(n)).find(h=>h.measurementId===i);u&&await e[u.appId]}}catch(l){St.error(l)}t("config",i,s)}async function zC(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await vE(n);for(const u of o){const h=l.find(m=>m.measurementId===u),f=h&&e[h.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){St.error(s)}}function $C(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await zC(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await BC(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,h]=o;t("get",l,u,h)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){St.error(l)}}return i}function qC(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=$C(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function HC(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Af)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=30,KC=1e3;class GC{constructor(e={},n=KC){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const wE=new GC;function QC(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function XC(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:QC(n)},i=MC.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let l="";try{const u=await s.json();(o=u.error)!=null&&o.message&&(l=u.error.message)}catch{}throw Dt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:l})}return s.json()}async function YC(t,e=wE,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Dt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Dt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new ek;return setTimeout(async()=>{l.abort()},n!==void 0?n:OC),EE({appId:r,apiKey:i,measurementId:s},o,l,e)}async function EE(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=wE){var l;const{appId:s,measurementId:o}=t;try{await JC(r,e)}catch(u){if(o)return St.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:o};throw u}try{const u=await XC(t);return i.deleteThrottleMetadata(s),u}catch(u){const h=u;if(!ZC(h)){if(i.deleteThrottleMetadata(s),o)return St.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:s,measurementId:o};throw u}const f=Number((l=h==null?void 0:h.customData)==null?void 0:l.httpStatus)===503?Ug(n,i.intervalMillis,WC):Ug(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,m),St.debug(`Calling attemptFetch again in ${f} millis`),EE(t,m,r,i)}}function JC(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Dt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ZC(t){if(!(t instanceof $t)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class ek{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function tk(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nk(){if(Kw())try{await Gw()}catch(t){return St.warn(Dt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return St.warn(Dt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function rk(t,e,n,r,i,s,o){const l=YC(t);l.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&St.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>St.error(p)),e.push(l);const u=nk().then(p=>{if(p)return r.getId()}),[h,f]=await Promise.all([l,u]);HC(s)||FC(s,h.measurementId),i("js",new Date);const m=(o==null?void 0:o.config)??{};return m[VC]="firebase",m.update=!0,f!=null&&(m[xC]=f),i("config",h.measurementId,m),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e){this.app=e}_delete(){return delete so[this.app.options.appId],Promise.resolve()}}let so={},Qg=[];const Xg={};let Wc="dataLayer",sk="gtag",Yg,TE,Jg=!1;function ok(){const t=[];if(Ww()&&t.push("This is a browser extension environment."),RA()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Dt.create("invalid-analytics-context",{errorInfo:e});St.warn(n.message)}}function ak(t,e,n){ok();const r=t.options.appId;if(!r)throw Dt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)St.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Dt.create("no-api-key");if(so[r]!=null)throw Dt.create("already-exists",{id:r});if(!Jg){jC(Wc);const{wrappedGtag:s,gtagCore:o}=qC(so,Qg,Xg,Wc,sk);TE=s,Yg=o,Jg=!0}return so[r]=rk(t,Qg,Xg,e,Yg,Wc,n),new ik(t)}function lk(t=Eu()){t=Re(t);const e=Nr(t,jl);return e.isInitialized()?e.getImmediate():uk(t)}function uk(t,e={}){const n=Nr(t,jl);if(n.isInitialized()){const i=n.getImmediate();if(vr(e,n.getOptions()))return i;throw Dt.create("already-initialized")}return n.initialize({options:e})}function ck(t,e,n,r){t=Re(t),tk(TE,so[t.app.options.appId],e,n,r).catch(i=>St.error(i))}const Zg="@firebase/analytics",ey="0.10.18";function hk(){tn(new zt(jl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return ak(r,i,n)},"PUBLIC")),tn(new zt("analytics-internal",t,"PRIVATE")),It(Zg,ey),It(Zg,ey,"esm2020");function t(e){try{const n=e.getProvider(jl).getImmediate();return{logEvent:(r,i,s)=>ck(n,r,i,s)}}catch(n){throw Dt.create("interop-component-reg-failed",{reason:n})}}}hk();function IE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dk=IE,SE=new hi("auth","Firebase",IE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=new wu("@firebase/auth");function fk(t,...e){Bl.logLevel<=te.WARN&&Bl.warn(`Auth (${di}): ${t}`,...e)}function rl(t,...e){Bl.logLevel<=te.ERROR&&Bl.error(`Auth (${di}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,...e){throw Rf(t,...e)}function dn(t,...e){return Rf(t,...e)}function AE(t,e,n){const r={...dk(),[e]:n};return new hi("auth","Firebase",r).create(e,{appName:t.name})}function Gr(t){return AE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return SE.create(t,...e)}function X(t,e,...n){if(!t)throw Rf(e,...n)}function kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rl(e),new Error(e)}function bn(t,e){t||kn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function pk(){return ty()==="http:"||ty()==="https:"}function ty(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pk()||Ww()||"connection"in navigator)?navigator.onLine:!0}function gk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n){this.shortDelay=e,this.longDelay=n,bn(n>e,"Short delay should be less than long delay!"),this.isMobile=wA()||IA()}get(){return mk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(t,e){bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vk=new Wo(3e4,6e4);function kf(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function fs(t,e,n,r,i={}){return CE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ho({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...s};return TA()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Pr(t.emulatorConfig.host)&&(h.credentials="include"),RE.fetch()(await kE(t,t.config.apiHost,n,l),h)})}async function CE(t,e,n){t._canInitEmulator=!1;const r={...yk,...e};try{const i=new Ek(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ba(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ba(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ba(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ba(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw AE(t,f,h);Ln(t,f)}}catch(i){if(i instanceof $t)throw i;Ln(t,"network-request-failed",{message:String(i)})}}async function wk(t,e,n,r,i={}){const s=await fs(t,e,n,r,i);return"mfaPendingCredential"in s&&Ln(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function kE(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Cf(t.config,i):`${t.config.apiScheme}://${i}`;return _k.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class Ek{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dn(this.auth,"network-request-failed")),vk.get())})}}function ba(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=dn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tk(t,e){return fs(t,"POST","/v1/accounts:delete",e)}async function zl(t,e){return fs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ik(t,e=!1){const n=Re(t),r=await n.getIdToken(e),i=Pf(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:oo(Kc(i.auth_time)),issuedAtTime:oo(Kc(i.iat)),expirationTime:oo(Kc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Kc(t){return Number(t)*1e3}function Pf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return rl("JWT malformed, contained fewer than 3 sections"),null;try{const i=jw(n);return i?JSON.parse(i):(rl("Failed to decode base64 JWT payload"),null)}catch(i){return rl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ny(t){const e=Pf(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $t&&Sk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Sk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=oo(this.lastLoginAt),this.creationTime=oo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $l(t){var m;const e=t.auth,n=await t.getIdToken(),r=await Do(t,zl(e,{idToken:n}));X(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?PE(i.providerUserInfo):[],o=Ck(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new nd(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function Rk(t){const e=Re(t);await $l(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ck(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function PE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kk(t,e){const n=await CE(t,{},async()=>{const r=Ho({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await kE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Pr(t.emulatorConfig.host)&&(u.credentials="include"),RE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Pk(t,e){return fs(t,"POST","/v2/accounts:revokeToken",kf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ny(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=ny(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await kk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new qi;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qi,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Ak(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new nd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Do(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ik(this,e)}reload(){return Rk(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $l(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qt(this.auth.app))return Promise.reject(Gr(this.auth));const e=await this.getIdToken();return await Do(this,Tk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:p,isAnonymous:A,providerData:C,stsTokenManager:N}=n;X(m&&N,e,"internal-error");const V=qi.fromJSON(this.name,N);X(typeof m=="string",e,"internal-error"),Hn(r,e.name),Hn(i,e.name),X(typeof p=="boolean",e,"internal-error"),X(typeof A=="boolean",e,"internal-error"),Hn(s,e.name),Hn(o,e.name),Hn(l,e.name),Hn(u,e.name),Hn(h,e.name),Hn(f,e.name);const S=new Xt({uid:m,auth:e,email:i,emailVerified:p,displayName:r,isAnonymous:A,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:V,createdAt:h,lastLoginAt:f});return C&&Array.isArray(C)&&(S.providerData=C.map(_=>({..._}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new qi;i.updateFromServerResponse(n);const s=new Xt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $l(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?PE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new qi;l.updateFromIdToken(r);const u=new Xt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new nd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=new Map;function Pn(t){bn(t instanceof Function,"Expected a class definition");let e=ry.get(t);return e?(bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ry.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}NE.type="NONE";const iy=NE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(t,e,n){return`firebase:${t}:${e}:${n}`}class Hi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=il(this.userKey,i.apiKey,s),this.fullPersistenceKey=il("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await zl(this.auth,{idToken:e}).catch(()=>{});return n?Xt._fromGetAccountInfoResponse(this.auth,n,e):null}return Xt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hi(Pn(iy),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Pn(iy);const o=il(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let m;if(typeof f=="string"){const p=await zl(e,{idToken:f}).catch(()=>{});if(!p)break;m=await Xt._fromGetAccountInfoResponse(e,p,f)}else m=Xt._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Hi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Hi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(OE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(DE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(LE(e))return"Blackberry";if(bE(e))return"Webos";if(xE(e))return"Safari";if((e.includes("chrome/")||VE(e))&&!e.includes("edge/"))return"Chrome";if(ME(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function DE(t=lt()){return/firefox\//i.test(t)}function xE(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function VE(t=lt()){return/crios\//i.test(t)}function OE(t=lt()){return/iemobile/i.test(t)}function ME(t=lt()){return/android/i.test(t)}function LE(t=lt()){return/blackberry/i.test(t)}function bE(t=lt()){return/webos/i.test(t)}function Nf(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Nk(t=lt()){var e;return Nf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Dk(){return SA()&&document.documentMode===10}function UE(t=lt()){return Nf(t)||ME(t)||bE(t)||LE(t)||/windows phone/i.test(t)||OE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(t,e=[]){let n;switch(t){case"Browser":n=sy(lt());break;case"Worker":n=`${sy(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${di}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vk(t,e={}){return fs(t,"GET","/v2/passwordPolicy",kf(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok=6;class Mk{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Ok,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oy(this),this.idTokenSubscription=new oy(this),this.beforeStateQueue=new xk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=SE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Hi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await zl(this,{idToken:e}),r=await Xt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Qt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $l(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qt(this.app))return Promise.reject(Gr(this));const n=e?Re(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qt(this.app)?Promise.reject(Gr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qt(this.app)?Promise.reject(Gr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Vk(this),n=new Mk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new hi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Pk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Hi.create(this,[Pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=FE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&fk(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Df(t){return Re(t)}class oy{constructor(e){this.auth=e,this.observer=null,this.addObserver=DA(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bk(t){xf=t}function Uk(t){return xf.loadJS(t)}function Fk(){return xf.gapiScript}function jk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(t,e){const n=Nr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(vr(s,e??{}))return i;Ln(i,"already-initialized")}return n.initialize({options:e})}function zk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $k(t,e,n){const r=Df(t);X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=jE(e),{host:o,port:l}=qk(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){X(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),X(vr(h,r.config.emulator)&&vr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Pr(o)?(_f(`${s}//${o}${u}`),vf("Auth",!0)):i||Hk()}function jE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qk(t){const e=jE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ay(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ay(o)}}}function ay(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Hk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kn("not implemented")}_getIdTokenResponse(e){return kn("not implemented")}_linkToIdToken(e,n){return kn("not implemented")}_getReauthenticationResolver(e){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(t,e){return wk(t,"POST","/v1/accounts:signInWithIdp",kf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk="http://localhost";class si extends BE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new si(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new si(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wi(e,n)}buildRequest(){const e={requestUri:Wk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ho(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends zE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Ko{constructor(){super("facebook.com")}static credential(e){return si._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return si._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Ko{constructor(){super("github.com")}static credential(e){return si._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Ko{constructor(){super("twitter.com")}static credential(e,n){return si._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Xt._fromIdTokenResponse(e,r,i),o=ly(r);return new ns({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ly(r);return new ns({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ly(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends $t{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ql.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ql(e,n,r,i)}}function $E(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ql._fromErrorAndOperation(t,s,e,r):s})}async function Kk(t,e,n=!1){const r=await Do(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ns._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gk(t,e,n=!1){const{auth:r}=t;if(Qt(r.app))return Promise.reject(Gr(r));const i="reauthenticate";try{const s=await Do(t,$E(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=Pf(s.idToken);X(o,r,"internal-error");const{sub:l}=o;return X(t.uid===l,r,"user-mismatch"),ns._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ln(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qk(t,e,n=!1){if(Qt(t.app))return Promise.reject(Gr(t));const r="signIn",i=await $E(t,r,e),s=await ns._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Xk(t,e,n,r){return Re(t).onIdTokenChanged(e,n,r)}function Yk(t,e,n){return Re(t).beforeAuthStateChanged(e,n)}const Hl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hl,"1"),this.storage.removeItem(Hl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=1e3,Zk=10;class HE extends qE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=UE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Dk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Zk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Jk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}HE.type="LOCAL";const eP=HE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE extends qE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}WE.type="SESSION";const KE=WE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Su(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await tP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Su.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Vf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const p=m;if(p.data.eventId===h)switch(p.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(p.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){return window}function rP(t){fn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(){return typeof fn().WorkerGlobalScope<"u"&&typeof fn().importScripts=="function"}async function iP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function oP(){return GE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE="firebaseLocalStorageDb",aP=1,Wl="firebaseLocalStorage",XE="fbase_key";class Go{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Au(t,e){return t.transaction([Wl],e?"readwrite":"readonly").objectStore(Wl)}function lP(){const t=indexedDB.deleteDatabase(QE);return new Go(t).toPromise()}function rd(){const t=indexedDB.open(QE,aP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wl,{keyPath:XE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wl)?e(r):(r.close(),await lP(),e(await rd()))})})}async function uy(t,e,n){const r=Au(t,!0).put({[XE]:e,value:n});return new Go(r).toPromise()}async function uP(t,e){const n=Au(t,!1).get(e),r=await new Go(n).toPromise();return r===void 0?null:r.value}function cy(t,e){const n=Au(t,!0).delete(e);return new Go(n).toPromise()}const cP=800,hP=3;class YE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>hP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return GE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Su._getInstance(oP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await iP(),!this.activeServiceWorker)return;this.sender=new nP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rd();return await uy(e,Hl,"1"),await cy(e,Hl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>uy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>uP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Au(i,!1).getAll();return new Go(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}YE.type="LOCAL";const dP=YE;new Wo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(t,e){return e?Pn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of extends BE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function pP(t){return Qk(t.auth,new Of(t),t.bypassAuthState)}function mP(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),Gk(n,new Of(t),t.bypassAuthState)}async function gP(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),Kk(n,new Of(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pP;case"linkViaPopup":case"linkViaRedirect":return gP;case"reauthViaPopup":case"reauthViaRedirect":return mP;default:Ln(this.auth,"internal-error")}}resolve(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP=new Wo(2e3,1e4);class bi extends JE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,bi.currentPopupAction&&bi.currentPopupAction.cancel(),bi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const e=Vf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yP.get())};e()}}bi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P="pendingRedirect",sl=new Map;class vP extends JE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=sl.get(this.auth._key());if(!e){try{const r=await wP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}sl.set(this.auth._key(),e)}return this.bypassAuthState||sl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wP(t,e){const n=IP(e),r=TP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function EP(t,e){sl.set(t._key(),e)}function TP(t){return Pn(t._redirectPersistence)}function IP(t){return il(_P,t.config.apiKey,t.name)}async function SP(t,e,n=!1){if(Qt(t.app))return Promise.reject(Gr(t));const r=Df(t),i=fP(r,e),o=await new vP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=10*60*1e3;class RP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ZE(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AP&&this.cachedEventUids.clear(),this.cachedEventUids.has(hy(e))}saveEventToCache(e){this.cachedEventUids.add(hy(e)),this.lastProcessedEventTime=Date.now()}}function hy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ZE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ZE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kP(t,e={}){return fs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NP=/^https?/;async function DP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await kP(t);for(const n of e)try{if(xP(n))return}catch{}Ln(t,"unauthorized-domain")}function xP(t){const e=td(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!NP.test(n))return!1;if(PP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP=new Wo(3e4,6e4);function dy(){const t=fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function OP(t){return new Promise((e,n)=>{var i,s,o;function r(){dy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dy(),n(dn(t,"network-request-failed"))},timeout:VP.get()})}if((s=(i=fn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=fn().gapi)!=null&&o.load)r();else{const l=jk("iframefcb");return fn()[l]=()=>{gapi.load?r():n(dn(t,"network-request-failed"))},Uk(`${Fk()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ol=null,e})}let ol=null;function MP(t){return ol=ol||OP(t),ol}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=new Wo(5e3,15e3),bP="__/auth/iframe",UP="emulator/auth/iframe",FP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BP(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cf(e,UP):`https://${t.config.authDomain}/${bP}`,r={apiKey:e.apiKey,appName:t.name,v:di},i=jP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ho(r).slice(1)}`}async function zP(t){const e=await MP(t),n=fn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:BP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=dn(t,"network-request-failed"),l=fn().setTimeout(()=>{s(o)},LP.get());function u(){fn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qP=500,HP=600,WP="_blank",KP="http://localhost";class fy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GP(t,e,n,r=qP,i=HP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...$P,width:r.toString(),height:i.toString(),top:s,left:o},h=lt().toLowerCase();n&&(l=VE(h)?WP:n),DE(h)&&(e=e||KP,u.scrollbars="yes");const f=Object.entries(u).reduce((p,[A,C])=>`${p}${A}=${C},`,"");if(Nk(h)&&l!=="_self")return QP(e||"",l),new fy(null);const m=window.open(e||"",l,f);X(m,t,"popup-blocked");try{m.focus()}catch{}return new fy(m)}function QP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XP="__/auth/handler",YP="emulator/auth/handler",JP=encodeURIComponent("fac");async function py(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:di,eventId:i};if(e instanceof zE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",NA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries(s||{}))o[f]=m}if(e instanceof Ko){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${JP}=${encodeURIComponent(u)}`:"";return`${ZP(t)}?${Ho(l).slice(1)}${h}`}function ZP({config:t}){return t.emulator?Cf(t,YP):`https://${t.authDomain}/${XP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="webStorageSupport";class eN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=KE,this._completeRedirectFn=SP,this._overrideRedirectResult=EP}async _openPopup(e,n,r,i){var o;bn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await py(e,n,r,td(),i);return GP(e,s,Vf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await py(e,n,r,td(),i);return rP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(bn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zP(e),r=new RP(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gc,{type:Gc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Gc];s!==void 0&&n(!!s),Ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return UE()||xE()||Nf()}}const tN=eN;var my="@firebase/auth",gy="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iN(t){tn(new zt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:FE(t)},h=new Lk(r,i,s,u);return zk(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),tn(new zt("auth-internal",e=>{const n=Df(e.getProvider("auth").getImmediate());return(r=>new nN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),It(my,gy,rN(t)),It(my,gy,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN=5*60,oN=qw("authIdTokenMaxAge")||sN;let yy=null;const aN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oN)return;const i=n==null?void 0:n.token;yy!==i&&(yy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function lN(t=Eu()){const e=Nr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Bk(t,{popupRedirectResolver:tN,persistence:[dP,eP,KE]}),r=qw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=aN(s.toString());Yk(n,o,()=>o(n.currentUser)),Xk(n,l=>o(l))}}const i=Bw("auth");return i&&$k(n,`http://${i}`),n}function uN(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}bk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=dn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",uN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iN("Browser");var _y=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pr,e0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function v(){}v.prototype=y.prototype,w.D=y.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(T,R,P){for(var I=Array(arguments.length-2),H=2;H<arguments.length;H++)I[H-2]=arguments[H];return y.prototype[R].apply(T,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,v){v||(v=0);var T=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)T[R]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(R=0;16>R;++R)T[R]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=w.g[0],v=w.g[1],R=w.g[2];var P=w.g[3],I=y+(P^v&(R^P))+T[0]+3614090360&4294967295;y=v+(I<<7&4294967295|I>>>25),I=P+(R^y&(v^R))+T[1]+3905402710&4294967295,P=y+(I<<12&4294967295|I>>>20),I=R+(v^P&(y^v))+T[2]+606105819&4294967295,R=P+(I<<17&4294967295|I>>>15),I=v+(y^R&(P^y))+T[3]+3250441966&4294967295,v=R+(I<<22&4294967295|I>>>10),I=y+(P^v&(R^P))+T[4]+4118548399&4294967295,y=v+(I<<7&4294967295|I>>>25),I=P+(R^y&(v^R))+T[5]+1200080426&4294967295,P=y+(I<<12&4294967295|I>>>20),I=R+(v^P&(y^v))+T[6]+2821735955&4294967295,R=P+(I<<17&4294967295|I>>>15),I=v+(y^R&(P^y))+T[7]+4249261313&4294967295,v=R+(I<<22&4294967295|I>>>10),I=y+(P^v&(R^P))+T[8]+1770035416&4294967295,y=v+(I<<7&4294967295|I>>>25),I=P+(R^y&(v^R))+T[9]+2336552879&4294967295,P=y+(I<<12&4294967295|I>>>20),I=R+(v^P&(y^v))+T[10]+4294925233&4294967295,R=P+(I<<17&4294967295|I>>>15),I=v+(y^R&(P^y))+T[11]+2304563134&4294967295,v=R+(I<<22&4294967295|I>>>10),I=y+(P^v&(R^P))+T[12]+1804603682&4294967295,y=v+(I<<7&4294967295|I>>>25),I=P+(R^y&(v^R))+T[13]+4254626195&4294967295,P=y+(I<<12&4294967295|I>>>20),I=R+(v^P&(y^v))+T[14]+2792965006&4294967295,R=P+(I<<17&4294967295|I>>>15),I=v+(y^R&(P^y))+T[15]+1236535329&4294967295,v=R+(I<<22&4294967295|I>>>10),I=y+(R^P&(v^R))+T[1]+4129170786&4294967295,y=v+(I<<5&4294967295|I>>>27),I=P+(v^R&(y^v))+T[6]+3225465664&4294967295,P=y+(I<<9&4294967295|I>>>23),I=R+(y^v&(P^y))+T[11]+643717713&4294967295,R=P+(I<<14&4294967295|I>>>18),I=v+(P^y&(R^P))+T[0]+3921069994&4294967295,v=R+(I<<20&4294967295|I>>>12),I=y+(R^P&(v^R))+T[5]+3593408605&4294967295,y=v+(I<<5&4294967295|I>>>27),I=P+(v^R&(y^v))+T[10]+38016083&4294967295,P=y+(I<<9&4294967295|I>>>23),I=R+(y^v&(P^y))+T[15]+3634488961&4294967295,R=P+(I<<14&4294967295|I>>>18),I=v+(P^y&(R^P))+T[4]+3889429448&4294967295,v=R+(I<<20&4294967295|I>>>12),I=y+(R^P&(v^R))+T[9]+568446438&4294967295,y=v+(I<<5&4294967295|I>>>27),I=P+(v^R&(y^v))+T[14]+3275163606&4294967295,P=y+(I<<9&4294967295|I>>>23),I=R+(y^v&(P^y))+T[3]+4107603335&4294967295,R=P+(I<<14&4294967295|I>>>18),I=v+(P^y&(R^P))+T[8]+1163531501&4294967295,v=R+(I<<20&4294967295|I>>>12),I=y+(R^P&(v^R))+T[13]+2850285829&4294967295,y=v+(I<<5&4294967295|I>>>27),I=P+(v^R&(y^v))+T[2]+4243563512&4294967295,P=y+(I<<9&4294967295|I>>>23),I=R+(y^v&(P^y))+T[7]+1735328473&4294967295,R=P+(I<<14&4294967295|I>>>18),I=v+(P^y&(R^P))+T[12]+2368359562&4294967295,v=R+(I<<20&4294967295|I>>>12),I=y+(v^R^P)+T[5]+4294588738&4294967295,y=v+(I<<4&4294967295|I>>>28),I=P+(y^v^R)+T[8]+2272392833&4294967295,P=y+(I<<11&4294967295|I>>>21),I=R+(P^y^v)+T[11]+1839030562&4294967295,R=P+(I<<16&4294967295|I>>>16),I=v+(R^P^y)+T[14]+4259657740&4294967295,v=R+(I<<23&4294967295|I>>>9),I=y+(v^R^P)+T[1]+2763975236&4294967295,y=v+(I<<4&4294967295|I>>>28),I=P+(y^v^R)+T[4]+1272893353&4294967295,P=y+(I<<11&4294967295|I>>>21),I=R+(P^y^v)+T[7]+4139469664&4294967295,R=P+(I<<16&4294967295|I>>>16),I=v+(R^P^y)+T[10]+3200236656&4294967295,v=R+(I<<23&4294967295|I>>>9),I=y+(v^R^P)+T[13]+681279174&4294967295,y=v+(I<<4&4294967295|I>>>28),I=P+(y^v^R)+T[0]+3936430074&4294967295,P=y+(I<<11&4294967295|I>>>21),I=R+(P^y^v)+T[3]+3572445317&4294967295,R=P+(I<<16&4294967295|I>>>16),I=v+(R^P^y)+T[6]+76029189&4294967295,v=R+(I<<23&4294967295|I>>>9),I=y+(v^R^P)+T[9]+3654602809&4294967295,y=v+(I<<4&4294967295|I>>>28),I=P+(y^v^R)+T[12]+3873151461&4294967295,P=y+(I<<11&4294967295|I>>>21),I=R+(P^y^v)+T[15]+530742520&4294967295,R=P+(I<<16&4294967295|I>>>16),I=v+(R^P^y)+T[2]+3299628645&4294967295,v=R+(I<<23&4294967295|I>>>9),I=y+(R^(v|~P))+T[0]+4096336452&4294967295,y=v+(I<<6&4294967295|I>>>26),I=P+(v^(y|~R))+T[7]+1126891415&4294967295,P=y+(I<<10&4294967295|I>>>22),I=R+(y^(P|~v))+T[14]+2878612391&4294967295,R=P+(I<<15&4294967295|I>>>17),I=v+(P^(R|~y))+T[5]+4237533241&4294967295,v=R+(I<<21&4294967295|I>>>11),I=y+(R^(v|~P))+T[12]+1700485571&4294967295,y=v+(I<<6&4294967295|I>>>26),I=P+(v^(y|~R))+T[3]+2399980690&4294967295,P=y+(I<<10&4294967295|I>>>22),I=R+(y^(P|~v))+T[10]+4293915773&4294967295,R=P+(I<<15&4294967295|I>>>17),I=v+(P^(R|~y))+T[1]+2240044497&4294967295,v=R+(I<<21&4294967295|I>>>11),I=y+(R^(v|~P))+T[8]+1873313359&4294967295,y=v+(I<<6&4294967295|I>>>26),I=P+(v^(y|~R))+T[15]+4264355552&4294967295,P=y+(I<<10&4294967295|I>>>22),I=R+(y^(P|~v))+T[6]+2734768916&4294967295,R=P+(I<<15&4294967295|I>>>17),I=v+(P^(R|~y))+T[13]+1309151649&4294967295,v=R+(I<<21&4294967295|I>>>11),I=y+(R^(v|~P))+T[4]+4149444226&4294967295,y=v+(I<<6&4294967295|I>>>26),I=P+(v^(y|~R))+T[11]+3174756917&4294967295,P=y+(I<<10&4294967295|I>>>22),I=R+(y^(P|~v))+T[2]+718787259&4294967295,R=P+(I<<15&4294967295|I>>>17),I=v+(P^(R|~y))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(R+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+P&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var v=y-this.blockSize,T=this.B,R=this.h,P=0;P<y;){if(R==0)for(;P<=v;)i(this,w,P),P+=this.blockSize;if(typeof w=="string"){for(;P<y;)if(T[R++]=w.charCodeAt(P++),R==this.blockSize){i(this,T),R=0;break}}else for(;P<y;)if(T[R++]=w[P++],R==this.blockSize){i(this,T),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var v=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=v&255,v/=256;for(this.u(w),w=Array(16),y=v=0;4>y;++y)for(var T=0;32>T;T+=8)w[v++]=this.g[y]>>>T&255;return w};function s(w,y){var v=l;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=y(w)}function o(w,y){this.h=y;for(var v=[],T=!0,R=w.length-1;0<=R;R--){var P=w[R]|0;T&&P==y||(v[R]=P,T=!1)}this.g=v}var l={};function u(w){return-128<=w&&128>w?s(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return V(h(-w));for(var y=[],v=1,T=0;w>=v;T++)y[T]=w/v|0,v*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return V(f(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(y,8)),T=m,R=0;R<w.length;R+=8){var P=Math.min(8,w.length-R),I=parseInt(w.substring(R,R+P),y);8>P?(P=h(Math.pow(y,P)),T=T.j(P).add(h(I))):(T=T.j(v),T=T.add(h(I)))}return T}var m=u(0),p=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-V(this).m();for(var w=0,y=1,v=0;v<this.g.length;v++){var T=this.i(v);w+=(0<=T?T:4294967296+T)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(N(this))return"-"+V(this).toString(w);for(var y=h(Math.pow(w,6)),v=this,T="";;){var R=D(v,y).g;v=S(v,R.j(y));var P=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=R,C(v))return P+T;for(;6>P.length;)P="0"+P;T=P+T}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function N(w){return w.h==-1}t.l=function(w){return w=S(this,w),N(w)?-1:C(w)?0:1};function V(w){for(var y=w.g.length,v=[],T=0;T<y;T++)v[T]=~w.g[T];return new o(v,~w.h).add(p)}t.abs=function(){return N(this)?V(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],T=0,R=0;R<=y;R++){var P=T+(this.i(R)&65535)+(w.i(R)&65535),I=(P>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);T=I>>>16,P&=65535,I&=65535,v[R]=I<<16|P}return new o(v,v[v.length-1]&-2147483648?-1:0)};function S(w,y){return w.add(V(y))}t.j=function(w){if(C(this)||C(w))return m;if(N(this))return N(w)?V(this).j(V(w)):V(V(this).j(w));if(N(w))return V(this.j(V(w)));if(0>this.l(A)&&0>w.l(A))return h(this.m()*w.m());for(var y=this.g.length+w.g.length,v=[],T=0;T<2*y;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var R=0;R<w.g.length;R++){var P=this.i(T)>>>16,I=this.i(T)&65535,H=w.i(R)>>>16,fe=w.i(R)&65535;v[2*T+2*R]+=I*fe,_(v,2*T+2*R),v[2*T+2*R+1]+=P*fe,_(v,2*T+2*R+1),v[2*T+2*R+1]+=I*H,_(v,2*T+2*R+1),v[2*T+2*R+2]+=P*H,_(v,2*T+2*R+2)}for(T=0;T<y;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=y;T<2*y;T++)v[T]=0;return new o(v,0)};function _(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function E(w,y){this.g=w,this.h=y}function D(w,y){if(C(y))throw Error("division by zero");if(C(w))return new E(m,m);if(N(w))return y=D(V(w),y),new E(V(y.g),V(y.h));if(N(y))return y=D(w,V(y)),new E(V(y.g),y.h);if(30<w.g.length){if(N(w)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var v=p,T=y;0>=T.l(w);)v=U(v),T=U(T);var R=F(v,1),P=F(T,1);for(T=F(T,2),v=F(v,2);!C(T);){var I=P.add(T);0>=I.l(w)&&(R=R.add(v),P=I),T=F(T,1),v=F(v,1)}return y=S(w,R.j(y)),new E(R,y)}for(R=m;0<=w.l(y);){for(v=Math.max(1,Math.floor(w.m()/y.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),P=h(v),I=P.j(y);N(I)||0<I.l(w);)v-=T,P=h(v),I=P.j(y);C(P)&&(P=p),R=R.add(P),w=S(w,I)}return new E(R,w)}t.A=function(w){return D(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)&w.i(T);return new o(v,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)|w.i(T);return new o(v,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)^w.i(T);return new o(v,this.h^w.h)};function U(w){for(var y=w.g.length+1,v=[],T=0;T<y;T++)v[T]=w.i(T)<<1|w.i(T-1)>>>31;return new o(v,w.h)}function F(w,y){var v=y>>5;y%=32;for(var T=w.g.length-v,R=[],P=0;P<T;P++)R[P]=0<y?w.i(P+v)>>>y|w.i(P+v+1)<<32-y:w.i(P+v);return new o(R,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,e0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,pr=o}).apply(typeof _y<"u"?_y:typeof self<"u"?self:typeof window<"u"?window:{});var Ua=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var t0,Hs,n0,al,id,r0,i0,s0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ua=="object"&&Ua];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];if(!(k in d))break e;d=d[k]}a=a[a.length-1],g=d[a],c=c(g),c!=g&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,g=!1,k={next:function(){if(!g&&d<a.length){var x=d++;return{value:c(x,a[x]),done:!1}}return g=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function m(a,c,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,g),a.apply(c,k)}}return function(){return a.apply(c,arguments)}}function p(a,c,d){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,p.apply(null,arguments)}function A(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,k,x){for(var j=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)j[ce-2]=arguments[ce];return c.prototype[k].apply(g,j)}}function N(a){const c=a.length;if(0<c){const d=Array(c);for(let g=0;g<c;g++)d[g]=a[g];return d}return[]}function V(a,c){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const k=a.length||0,x=g.length||0;a.length=k+x;for(let j=0;j<x;j++)a[k+j]=g[j]}else a.push(g)}}class S{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(a){return/^[\s\xa0]*$/.test(a)}function E(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var U=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function F(a,c,d){for(const g in a)c.call(d,a[g],g,a)}function w(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function y(a){const c={};for(const d in a)c[d]=a[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,c){let d,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(d in g)a[d]=g[d];for(let x=0;x<v.length;x++)d=v[x],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function R(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function P(a){l.setTimeout(()=>{throw a},0)}function I(){var a=G;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class H{constructor(){this.h=this.g=null}add(c,d){const g=fe.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var fe=new S(()=>new Ue,a=>a.reset());class Ue{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Pe,B=!1,G=new H,Z=()=>{const a=l.Promise.resolve(void 0);Pe=()=>{a.then(ve)}};var ve=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(d){P(d)}var c=fe;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}B=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ne(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var vn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function wn(a,c){if(Ne.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(U){e:{try{D(c.nodeName);var k=!0;break e}catch{}k=!1}k||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:En[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&wn.aa.h.call(this)}}C(wn,Ne);var En={2:"touch",3:"pen",4:"mouse"};wn.prototype.h=function(){wn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var rn="closure_listenable_"+(1e6*Math.random()|0),nI=0;function rI(a,c,d,g,k){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=k,this.key=++nI,this.da=this.fa=!1}function na(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ra(a){this.src=a,this.g={},this.h=0}ra.prototype.add=function(a,c,d,g,k){var x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);var j=qu(a,c,g,k);return-1<j?(c=a[j],d||(c.fa=!1)):(c=new rI(c,this.src,x,!!g,k),c.fa=d,a.push(c)),c};function $u(a,c){var d=c.type;if(d in a.g){var g=a.g[d],k=Array.prototype.indexOf.call(g,c,void 0),x;(x=0<=k)&&Array.prototype.splice.call(g,k,1),x&&(na(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function qu(a,c,d,g){for(var k=0;k<a.length;++k){var x=a[k];if(!x.da&&x.listener==c&&x.capture==!!d&&x.ha==g)return k}return-1}var Hu="closure_lm_"+(1e6*Math.random()|0),Wu={};function Cp(a,c,d,g,k){if(g&&g.once)return Pp(a,c,d,g,k);if(Array.isArray(c)){for(var x=0;x<c.length;x++)Cp(a,c[x],d,g,k);return null}return d=Xu(d),a&&a[rn]?a.K(c,d,h(g)?!!g.capture:!!g,k):kp(a,c,d,!1,g,k)}function kp(a,c,d,g,k,x){if(!c)throw Error("Invalid event type");var j=h(k)?!!k.capture:!!k,ce=Gu(a);if(ce||(a[Hu]=ce=new ra(a)),d=ce.add(c,d,g,j,x),d.proxy)return d;if(g=iI(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)vn||(k=j),k===void 0&&(k=!1),a.addEventListener(c.toString(),g,k);else if(a.attachEvent)a.attachEvent(Dp(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function iI(){function a(d){return c.call(a.src,a.listener,d)}const c=sI;return a}function Pp(a,c,d,g,k){if(Array.isArray(c)){for(var x=0;x<c.length;x++)Pp(a,c[x],d,g,k);return null}return d=Xu(d),a&&a[rn]?a.L(c,d,h(g)?!!g.capture:!!g,k):kp(a,c,d,!0,g,k)}function Np(a,c,d,g,k){if(Array.isArray(c))for(var x=0;x<c.length;x++)Np(a,c[x],d,g,k);else g=h(g)?!!g.capture:!!g,d=Xu(d),a&&a[rn]?(a=a.i,c=String(c).toString(),c in a.g&&(x=a.g[c],d=qu(x,d,g,k),-1<d&&(na(x[d]),Array.prototype.splice.call(x,d,1),x.length==0&&(delete a.g[c],a.h--)))):a&&(a=Gu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=qu(c,d,g,k)),(d=-1<a?c[a]:null)&&Ku(d))}function Ku(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[rn])$u(c.i,a);else{var d=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(d,g,a.capture):c.detachEvent?c.detachEvent(Dp(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=Gu(c))?($u(d,a),d.h==0&&(d.src=null,c[Hu]=null)):na(a)}}}function Dp(a){return a in Wu?Wu[a]:Wu[a]="on"+a}function sI(a,c){if(a.da)a=!0;else{c=new wn(c,this);var d=a.listener,g=a.ha||a.src;a.fa&&Ku(a),a=d.call(g,c)}return a}function Gu(a){return a=a[Hu],a instanceof ra?a:null}var Qu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xu(a){return typeof a=="function"?a:(a[Qu]||(a[Qu]=function(c){return a.handleEvent(c)}),a[Qu])}function Je(){ue.call(this),this.i=new ra(this),this.M=this,this.F=null}C(Je,ue),Je.prototype[rn]=!0,Je.prototype.removeEventListener=function(a,c,d,g){Np(this,a,c,d,g)};function ut(a,c){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new Ne(c,a);else if(c instanceof Ne)c.target=c.target||a;else{var k=c;c=new Ne(g,a),T(c,k)}if(k=!0,d)for(var x=d.length-1;0<=x;x--){var j=c.g=d[x];k=ia(j,g,!0,c)&&k}if(j=c.g=a,k=ia(j,g,!0,c)&&k,k=ia(j,g,!1,c)&&k,d)for(x=0;x<d.length;x++)j=c.g=d[x],k=ia(j,g,!1,c)&&k}Je.prototype.N=function(){if(Je.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],g=0;g<d.length;g++)na(d[g]);delete a.g[c],a.h--}}this.F=null},Je.prototype.K=function(a,c,d,g){return this.i.add(String(a),c,!1,d,g)},Je.prototype.L=function(a,c,d,g){return this.i.add(String(a),c,!0,d,g)};function ia(a,c,d,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var k=!0,x=0;x<c.length;++x){var j=c[x];if(j&&!j.da&&j.capture==d){var ce=j.listener,He=j.ha||j.src;j.fa&&$u(a.i,j),k=ce.call(He,g)!==!1&&k}}return k&&!g.defaultPrevented}function xp(a,c,d){if(typeof a=="function")d&&(a=p(a,d));else if(a&&typeof a.handleEvent=="function")a=p(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Vp(a){a.g=xp(()=>{a.g=null,a.i&&(a.i=!1,Vp(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class oI extends ue{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Vp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vs(a){ue.call(this),this.h=a,this.g={}}C(vs,ue);var Op=[];function Mp(a){F(a.g,function(c,d){this.g.hasOwnProperty(d)&&Ku(c)},a),a.g={}}vs.prototype.N=function(){vs.aa.N.call(this),Mp(this)},vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Yu=l.JSON.stringify,aI=l.JSON.parse,lI=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ju(){}Ju.prototype.h=null;function Lp(a){return a.h||(a.h=a.i())}function bp(){}var ws={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Zu(){Ne.call(this,"d")}C(Zu,Ne);function ec(){Ne.call(this,"c")}C(ec,Ne);var Or={},Up=null;function sa(){return Up=Up||new Je}Or.La="serverreachability";function Fp(a){Ne.call(this,Or.La,a)}C(Fp,Ne);function Es(a){const c=sa();ut(c,new Fp(c))}Or.STAT_EVENT="statevent";function jp(a,c){Ne.call(this,Or.STAT_EVENT,a),this.stat=c}C(jp,Ne);function ct(a){const c=sa();ut(c,new jp(c,a))}Or.Ma="timingevent";function Bp(a,c){Ne.call(this,Or.Ma,a),this.size=c}C(Bp,Ne);function Ts(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Is(){this.g=!0}Is.prototype.xa=function(){this.g=!1};function uI(a,c,d,g,k,x){a.info(function(){if(a.g)if(x)for(var j="",ce=x.split("&"),He=0;He<ce.length;He++){var oe=ce[He].split("=");if(1<oe.length){var Ze=oe[0];oe=oe[1];var et=Ze.split("_");j=2<=et.length&&et[1]=="type"?j+(Ze+"="+oe+"&"):j+(Ze+"=redacted&")}}else j=null;else j=x;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+c+`
`+d+`
`+j})}function cI(a,c,d,g,k,x,j){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+c+`
`+d+`
`+x+" "+j})}function gi(a,c,d,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+dI(a,d)+(g?" "+g:"")})}function hI(a,c){a.info(function(){return"TIMEOUT: "+c})}Is.prototype.info=function(){};function dI(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var k=g[1];if(Array.isArray(k)&&!(1>k.length)){var x=k[0];if(x!="noop"&&x!="stop"&&x!="close")for(var j=1;j<k.length;j++)k[j]=""}}}}return Yu(d)}catch{return c}}var oa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},zp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},tc;function aa(){}C(aa,Ju),aa.prototype.g=function(){return new XMLHttpRequest},aa.prototype.i=function(){return{}},tc=new aa;function Bn(a,c,d,g){this.j=a,this.i=c,this.l=d,this.R=g||1,this.U=new vs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $p}function $p(){this.i=null,this.g="",this.h=!1}var qp={},nc={};function rc(a,c,d){a.L=1,a.v=ha(Tn(c)),a.m=d,a.P=!0,Hp(a,null)}function Hp(a,c){a.F=Date.now(),la(a),a.A=Tn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),sm(d.i,"t",g),a.C=0,d=a.j.J,a.h=new $p,a.g=Im(a.j,d?c:null,!a.m),0<a.O&&(a.M=new oI(p(a.Y,a,a.g),a.O)),c=a.U,d=a.g,g=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(Op[0]=k.toString()),k=Op);for(var x=0;x<k.length;x++){var j=Cp(d,k[x],g||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Es(),uI(a.i,a.u,a.A,a.l,a.R,a.m)}Bn.prototype.ca=function(a){a=a.target;const c=this.M;c&&In(a)==3?c.j():this.Y(a)},Bn.prototype.Y=function(a){try{if(a==this.g)e:{const et=In(this.g);var c=this.g.Ba();const vi=this.g.Z();if(!(3>et)&&(et!=3||this.g&&(this.h.h||this.g.oa()||dm(this.g)))){this.J||et!=4||c==7||(c==8||0>=vi?Es(3):Es(2)),ic(this);var d=this.g.Z();this.X=d;t:if(Wp(this)){var g=dm(this.g);a="";var k=g.length,x=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mr(this),Ss(this);var j="";break t}this.h.i=new l.TextDecoder}for(c=0;c<k;c++)this.h.h=!0,a+=this.h.i.decode(g[c],{stream:!(x&&c==k-1)});g.length=0,this.h.g+=a,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,cI(this.i,this.u,this.A,this.l,this.R,et,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ce,He=this.g;if((ce=He.g?He.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ce)){var oe=ce;break t}}oe=null}if(d=oe)gi(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sc(this,d);else{this.o=!1,this.s=3,ct(12),Mr(this),Ss(this);break e}}if(this.P){d=!0;let qt;for(;!this.J&&this.C<j.length;)if(qt=fI(this,j),qt==nc){et==4&&(this.s=4,ct(14),d=!1),gi(this.i,this.l,null,"[Incomplete Response]");break}else if(qt==qp){this.s=4,ct(15),gi(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else gi(this.i,this.l,qt,null),sc(this,qt);if(Wp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),et!=4||j.length!=0||this.h.h||(this.s=1,ct(16),d=!1),this.o=this.o&&d,!d)gi(this.i,this.l,j,"[Invalid Chunked Response]"),Mr(this),Ss(this);else if(0<j.length&&!this.W){this.W=!0;var Ze=this.j;Ze.g==this&&Ze.ba&&!Ze.M&&(Ze.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),hc(Ze),Ze.M=!0,ct(11))}}else gi(this.i,this.l,j,null),sc(this,j);et==4&&Mr(this),this.o&&!this.J&&(et==4?vm(this.j,this):(this.o=!1,la(this)))}else NI(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),Mr(this),Ss(this)}}}catch{}finally{}};function Wp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function fI(a,c){var d=a.C,g=c.indexOf(`
`,d);return g==-1?nc:(d=Number(c.substring(d,g)),isNaN(d)?qp:(g+=1,g+d>c.length?nc:(c=c.slice(g,g+d),a.C=g+d,c)))}Bn.prototype.cancel=function(){this.J=!0,Mr(this)};function la(a){a.S=Date.now()+a.I,Kp(a,a.I)}function Kp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ts(p(a.ba,a),c)}function ic(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Bn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(hI(this.i,this.A),this.L!=2&&(Es(),ct(17)),Mr(this),this.s=2,Ss(this)):Kp(this,this.S-a)};function Ss(a){a.j.G==0||a.J||vm(a.j,a)}function Mr(a){ic(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Mp(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function sc(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||oc(d.h,a))){if(!a.K&&oc(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ya(d),ma(d);else break e;cc(d),ct(18)}}else d.za=k[1],0<d.za-d.T&&37500>k[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ts(p(d.Za,d),6e3));if(1>=Xp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else br(d,11)}else if((a.K||d.g==a)&&ya(d),!_(c))for(k=d.Da.g.parse(c),c=0;c<k.length;c++){let oe=k[c];if(d.T=oe[0],oe=oe[1],d.G==2)if(oe[0]=="c"){d.K=oe[1],d.ia=oe[2];const Ze=oe[3];Ze!=null&&(d.la=Ze,d.j.info("VER="+d.la));const et=oe[4];et!=null&&(d.Aa=et,d.j.info("SVER="+d.Aa));const vi=oe[5];vi!=null&&typeof vi=="number"&&0<vi&&(g=1.5*vi,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const qt=a.g;if(qt){const va=qt.g?qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(va){var x=g.h;x.g||va.indexOf("spdy")==-1&&va.indexOf("quic")==-1&&va.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(ac(x,x.h),x.h=null))}if(g.D){const dc=qt.g?qt.g.getResponseHeader("X-HTTP-Session-Id"):null;dc&&(g.ya=dc,pe(g.I,g.D,dc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var j=a;if(g.qa=Tm(g,g.J?g.ia:null,g.W),j.K){Yp(g.h,j);var ce=j,He=g.L;He&&(ce.I=He),ce.B&&(ic(ce),la(ce)),g.g=j}else ym(g);0<d.i.length&&ga(d)}else oe[0]!="stop"&&oe[0]!="close"||br(d,7);else d.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?br(d,7):uc(d):oe[0]!="noop"&&d.l&&d.l.ta(oe),d.v=0)}}Es(4)}catch{}}var pI=class{constructor(a,c){this.g=a,this.map=c}};function Gp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Xp(a){return a.h?1:a.g?a.g.size:0}function oc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function ac(a,c){a.g?a.g.add(c):a.h=c}function Yp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Gp.prototype.cancel=function(){if(this.i=Jp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Jp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return N(a.i)}function mI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,g=0;g<d;g++)c.push(a[g]);return c}c=[],d=0;for(g in a)c[d++]=a[g];return c}function gI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const g in a)c[d++]=g;return c}}}function Zp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=gI(a),g=mI(a),k=g.length,x=0;x<k;x++)c.call(void 0,g[x],d&&d[x],a)}var em=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yI(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),k=null;if(0<=g){var x=a[d].substring(0,g);k=a[d].substring(g+1)}else x=a[d];c(x,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Lr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Lr){this.h=a.h,ua(this,a.j),this.o=a.o,this.g=a.g,ca(this,a.s),this.l=a.l;var c=a.i,d=new Cs;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),tm(this,d),this.m=a.m}else a&&(c=String(a).match(em))?(this.h=!1,ua(this,c[1]||"",!0),this.o=As(c[2]||""),this.g=As(c[3]||"",!0),ca(this,c[4]),this.l=As(c[5]||"",!0),tm(this,c[6]||"",!0),this.m=As(c[7]||"")):(this.h=!1,this.i=new Cs(null,this.h))}Lr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Rs(c,nm,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Rs(c,nm,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Rs(d,d.charAt(0)=="/"?wI:vI,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Rs(d,TI)),a.join("")};function Tn(a){return new Lr(a)}function ua(a,c,d){a.j=d?As(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function ca(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function tm(a,c,d){c instanceof Cs?(a.i=c,II(a.i,a.h)):(d||(c=Rs(c,EI)),a.i=new Cs(c,a.h))}function pe(a,c,d){a.i.set(c,d)}function ha(a){return pe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function As(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Rs(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,_I),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function _I(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var nm=/[#\/\?@]/g,vI=/[#\?:]/g,wI=/[#\?]/g,EI=/[#\?@]/g,TI=/#/g;function Cs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function zn(a){a.g||(a.g=new Map,a.h=0,a.i&&yI(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Cs.prototype,t.add=function(a,c){zn(this),this.i=null,a=yi(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function rm(a,c){zn(a),c=yi(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function im(a,c){return zn(a),c=yi(a,c),a.g.has(c)}t.forEach=function(a,c){zn(this),this.g.forEach(function(d,g){d.forEach(function(k){a.call(c,k,g,this)},this)},this)},t.na=function(){zn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let g=0;g<c.length;g++){const k=a[g];for(let x=0;x<k.length;x++)d.push(c[g])}return d},t.V=function(a){zn(this);let c=[];if(typeof a=="string")im(this,a)&&(c=c.concat(this.g.get(yi(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return zn(this),this.i=null,a=yi(this,a),im(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function sm(a,c,d){rm(a,c),0<d.length&&(a.i=null,a.g.set(yi(a,c),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var g=c[d];const x=encodeURIComponent(String(g)),j=this.V(g);for(g=0;g<j.length;g++){var k=x;j[g]!==""&&(k+="="+encodeURIComponent(String(j[g]))),a.push(k)}}return this.i=a.join("&")};function yi(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function II(a,c){c&&!a.j&&(zn(a),a.i=null,a.g.forEach(function(d,g){var k=g.toLowerCase();g!=k&&(rm(this,g),sm(this,k,d))},a)),a.j=c}function SI(a,c){const d=new Is;if(l.Image){const g=new Image;g.onload=A($n,d,"TestLoadImage: loaded",!0,c,g),g.onerror=A($n,d,"TestLoadImage: error",!1,c,g),g.onabort=A($n,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=A($n,d,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function AI(a,c){const d=new Is,g=new AbortController,k=setTimeout(()=>{g.abort(),$n(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(x=>{clearTimeout(k),x.ok?$n(d,"TestPingServer: ok",!0,c):$n(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(k),$n(d,"TestPingServer: error",!1,c)})}function $n(a,c,d,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(d)}catch{}}function RI(){this.g=new lI}function CI(a,c,d){const g=d||"";try{Zp(a,function(k,x){let j=k;h(k)&&(j=Yu(k)),c.push(g+x+"="+encodeURIComponent(j))})}catch(k){throw c.push(g+"type="+encodeURIComponent("_badmap")),k}}function da(a){this.l=a.Ub||null,this.j=a.eb||!1}C(da,Ju),da.prototype.g=function(){return new fa(this.l,this.j)},da.prototype.i=function(a){return function(){return a}}({});function fa(a,c){Je.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(fa,Je),t=fa.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Ps(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ks(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ps(this)),this.g&&(this.readyState=3,Ps(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;om(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function om(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ks(this):Ps(this),this.readyState==3&&om(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ks(this))},t.Qa=function(a){this.g&&(this.response=a,ks(this))},t.ga=function(){this.g&&ks(this)};function ks(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ps(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Ps(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(fa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function am(a){let c="";return F(a,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function lc(a,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=am(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):pe(a,c,d))}function Se(a){Je.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Se,Je);var kI=/^https?$/i,PI=["POST","PUT"];t=Se.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():tc.g(),this.v=this.o?Lp(this.o):Lp(tc),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(x){lm(this,x);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)d.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const x of g.keys())d.set(x,g.get(x));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(PI,c,void 0))||g||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,j]of d)this.g.setRequestHeader(x,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hm(this),this.u=!0,this.g.send(a),this.u=!1}catch(x){lm(this,x)}};function lm(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,um(a),pa(a)}function um(a){a.A||(a.A=!0,ut(a,"complete"),ut(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ut(this,"complete"),ut(this,"abort"),pa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pa(this,!0)),Se.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?cm(this):this.bb())},t.bb=function(){cm(this)};function cm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||In(a)!=4||a.Z()!=2)){if(a.u&&In(a)==4)xp(a.Ea,0,a);else if(ut(a,"readystatechange"),In(a)==4){a.h=!1;try{const j=a.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=j===0){var k=String(a.D).match(em)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),g=!kI.test(k?k.toLowerCase():"")}d=g}if(d)ut(a,"complete"),ut(a,"success");else{a.m=6;try{var x=2<In(a)?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.Z()+"]",um(a)}}finally{pa(a)}}}}function pa(a,c){if(a.g){hm(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||ut(a,"ready");try{d.onreadystatechange=g}catch{}}}function hm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function In(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),aI(c)}};function dm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function NI(a){const c={};a=(a.g&&2<=In(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var d=R(a[g]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=c[k]||[];c[k]=x,x.push(d)}w(c,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ns(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function fm(a){this.Aa=0,this.i=[],this.j=new Is,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ns("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ns("baseRetryDelayMs",5e3,a),this.cb=Ns("retryDelaySeedMs",1e4,a),this.Wa=Ns("forwardChannelMaxRetries",2,a),this.wa=Ns("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Gp(a&&a.concurrentRequestLimit),this.Da=new RI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=fm.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,g){ct(0),this.W=a,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Tm(this,null,this.W),ga(this)};function uc(a){if(pm(a),a.G==3){var c=a.U++,d=Tn(a.I);if(pe(d,"SID",a.K),pe(d,"RID",c),pe(d,"TYPE","terminate"),Ds(a,d),c=new Bn(a,a.j,c),c.L=2,c.v=ha(Tn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Im(c.j,null),c.g.ea(c.v)),c.F=Date.now(),la(c)}Em(a)}function ma(a){a.g&&(hc(a),a.g.cancel(),a.g=null)}function pm(a){ma(a),a.u&&(l.clearTimeout(a.u),a.u=null),ya(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ga(a){if(!Qp(a.h)&&!a.s){a.s=!0;var c=a.Ga;Pe||Z(),B||(Pe(),B=!0),G.add(c,a),a.B=0}}function DI(a,c){return Xp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ts(p(a.Ga,a,c),wm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new Bn(this,this.j,a);let x=this.o;if(this.S&&(x?(x=y(x),T(x,this.S)):x=this.S),this.m!==null||this.O||(k.H=x,x=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=gm(this,k,c),d=Tn(this.I),pe(d,"RID",a),pe(d,"CVER",22),this.D&&pe(d,"X-HTTP-Session-Id",this.D),Ds(this,d),x&&(this.O?c="headers="+encodeURIComponent(String(am(x)))+"&"+c:this.m&&lc(d,this.m,x)),ac(this.h,k),this.Ua&&pe(d,"TYPE","init"),this.P?(pe(d,"$req",c),pe(d,"SID","null"),k.T=!0,rc(k,d,null)):rc(k,d,c),this.G=2}}else this.G==3&&(a?mm(this,a):this.i.length==0||Qp(this.h)||mm(this))};function mm(a,c){var d;c?d=c.l:d=a.U++;const g=Tn(a.I);pe(g,"SID",a.K),pe(g,"RID",d),pe(g,"AID",a.T),Ds(a,g),a.m&&a.o&&lc(g,a.m,a.o),d=new Bn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=gm(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ac(a.h,d),rc(d,g,c)}function Ds(a,c){a.H&&F(a.H,function(d,g){pe(c,g,d)}),a.l&&Zp({},function(d,g){pe(c,g,d)})}function gm(a,c,d){d=Math.min(a.i.length,d);var g=a.l?p(a.l.Na,a.l,a):null;e:{var k=a.i;let x=-1;for(;;){const j=["count="+d];x==-1?0<d?(x=k[0].g,j.push("ofs="+x)):x=0:j.push("ofs="+x);let ce=!0;for(let He=0;He<d;He++){let oe=k[He].g;const Ze=k[He].map;if(oe-=x,0>oe)x=Math.max(0,k[He].g-100),ce=!1;else try{CI(Ze,j,"req"+oe+"_")}catch{g&&g(Ze)}}if(ce){g=j.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,g}function ym(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Pe||Z(),B||(Pe(),B=!0),G.add(c,a),a.v=0}}function cc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ts(p(a.Fa,a),wm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,_m(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ts(p(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),ma(this),_m(this))};function hc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function _m(a){a.g=new Bn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=Tn(a.qa);pe(c,"RID","rpc"),pe(c,"SID",a.K),pe(c,"AID",a.T),pe(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&pe(c,"TO",a.ja),pe(c,"TYPE","xmlhttp"),Ds(a,c),a.m&&a.o&&lc(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ha(Tn(c)),d.m=null,d.P=!0,Hp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,ma(this),cc(this),ct(19))};function ya(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function vm(a,c){var d=null;if(a.g==c){ya(a),hc(a),a.g=null;var g=2}else if(oc(a.h,c))d=c.D,Yp(a.h,c),g=1;else return;if(a.G!=0){if(c.o)if(g==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var k=a.B;g=sa(),ut(g,new Bp(g,d)),ga(a)}else ym(a);else if(k=c.s,k==3||k==0&&0<c.X||!(g==1&&DI(a,c)||g==2&&cc(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),k){case 1:br(a,5);break;case 4:br(a,10);break;case 3:br(a,6);break;default:br(a,2)}}}function wm(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function br(a,c){if(a.j.info("Error code "+c),c==2){var d=p(a.fb,a),g=a.Xa;const k=!g;g=new Lr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ua(g,"https"),ha(g),k?SI(g.toString(),d):AI(g.toString(),d)}else ct(2);a.G=0,a.l&&a.l.sa(c),Em(a),pm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function Em(a){if(a.G=0,a.ka=[],a.l){const c=Jp(a.h);(c.length!=0||a.i.length!=0)&&(V(a.ka,c),V(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Tm(a,c,d){var g=d instanceof Lr?Tn(d):new Lr(d);if(g.g!="")c&&(g.g=c+"."+g.g),ca(g,g.s);else{var k=l.location;g=k.protocol,c=c?c+"."+k.hostname:k.hostname,k=+k.port;var x=new Lr(null);g&&ua(x,g),c&&(x.g=c),k&&ca(x,k),d&&(x.l=d),g=x}return d=a.D,c=a.ya,d&&c&&pe(g,d,c),pe(g,"VER",a.la),Ds(a,g),g}function Im(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Se(new da({eb:d})):new Se(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sm(){}t=Sm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function _a(){}_a.prototype.g=function(a,c){return new At(a,c)};function At(a,c){Je.call(this),this.g=new fm(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!_(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new _i(this)}C(At,Je),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){uc(this.g)},At.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Yu(a),a=d);c.i.push(new pI(c.Ya++,a)),c.G==3&&ga(c)},At.prototype.N=function(){this.g.l=null,delete this.j,uc(this.g),delete this.g,At.aa.N.call(this)};function Am(a){Zu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}C(Am,Zu);function Rm(){ec.call(this),this.status=1}C(Rm,ec);function _i(a){this.g=a}C(_i,Sm),_i.prototype.ua=function(){ut(this.g,"a")},_i.prototype.ta=function(a){ut(this.g,new Am(a))},_i.prototype.sa=function(a){ut(this.g,new Rm)},_i.prototype.ra=function(){ut(this.g,"b")},_a.prototype.createWebChannel=_a.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,s0=function(){return new _a},i0=function(){return sa()},r0=Or,id={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},oa.NO_ERROR=0,oa.TIMEOUT=8,oa.HTTP_ERROR=6,al=oa,zp.COMPLETE="complete",n0=zp,bp.EventType=ws,ws.OPEN="a",ws.CLOSE="b",ws.ERROR="c",ws.MESSAGE="d",Je.prototype.listen=Je.prototype.K,Hs=bp,Se.prototype.listenOnce=Se.prototype.L,Se.prototype.getLastError=Se.prototype.Ka,Se.prototype.getLastErrorCode=Se.prototype.Ba,Se.prototype.getStatus=Se.prototype.Z,Se.prototype.getResponseJson=Se.prototype.Oa,Se.prototype.getResponseText=Se.prototype.oa,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Ha,t0=Se}).apply(typeof Ua<"u"?Ua:typeof self<"u"?self:typeof window<"u"?window:{});const vy="@firebase/firestore",wy="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new wu("@firebase/firestore");function Ei(){return oi.logLevel}function $(t,...e){if(oi.logLevel<=te.DEBUG){const n=e.map(Mf);oi.debug(`Firestore (${ps}): ${t}`,...n)}}function Un(t,...e){if(oi.logLevel<=te.ERROR){const n=e.map(Mf);oi.error(`Firestore (${ps}): ${t}`,...n)}}function rs(t,...e){if(oi.logLevel<=te.WARN){const n=e.map(Mf);oi.warn(`Firestore (${ps}): ${t}`,...n)}}function Mf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,o0(t,r,n)}function o0(t,e,n){let r=`FIRESTORE (${ps}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Un(r),new Error(r)}function ae(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||o0(e,i,r)}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends $t{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class hN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class dN{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ae(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Qr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Qr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Qr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string",31837,{l:r}),new a0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string",2055,{h:e}),new it(e)}}class fN{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class pN{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new fN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ey{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Qt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ae(this.o===void 0,3512);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ey(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Ey(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=gN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function sd(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Qc(i)===Qc(s)?ne(i,s):Qc(i)?1:-1}return ne(t.length,e.length)}const yN=55296,_N=57343;function Qc(t){const e=t.charCodeAt(0);return e>=yN&&e<=_N}function is(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="__name__";class an{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return an.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof an?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=an.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ne(e.length,n.length)}static compareSegments(e,n){const r=an.isNumericId(e),i=an.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?an.extractNumericId(e).compare(an.extractNumericId(n)):sd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return pr.fromString(e.substring(4,e.length-2))}}class he extends an{construct(e,n,r){return new he(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new he(n)}static emptyPath(){return new he([])}}const vN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends an{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return vN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ty}static keyField(){return new Ge([Ty])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new z(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new z(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(he.fromString(e))}static fromName(e){return new W(he.fromString(e).popFirst(5))}static empty(){return new W(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return he.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new he(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(t,e,n){if(!n)throw new z(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function wN(t,e,n,r){if(e===!0&&r===!0)throw new z(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Iy(t){if(!W.isDocumentKey(t))throw new z(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Sy(t){if(W.isDocumentKey(t))throw new z(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function u0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Ru(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q(12329,{type:typeof t})}function mr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ru(t);throw new z(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t,e){const n={typeString:t};return e&&(n.value=e),n}function Qo(t,e){if(!u0(t))throw new z(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new z(O.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=-62135596800,Ry=1e6;class ge{static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Ry);return new ge(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Ay)throw new z(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ry}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Qo(e,ge._jsonSchema))return new ge(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ay;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ge._jsonSchemaVersion="firestore/timestamp/1.0",ge._jsonSchema={type:Le("string",ge._jsonSchemaVersion),seconds:Le("number"),nanoseconds:Le("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new ge(0,0))}static max(){return new Y(new ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=-1;function EN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new ge(n+1,0):new ge(n,r));return new wr(i,W.empty(),e)}function TN(t){return new wr(t.readTime,t.key,xo)}class wr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new wr(Y.min(),W.empty(),xo)}static max(){return new wr(Y.max(),W.empty(),xo)}}function IN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ms(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==SN)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function RN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function gs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Cu.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=-1;function ku(t){return t==null}function Kl(t){return t===0&&1/t==-1/0}function CN(t){return typeof t=="number"&&Number.isInteger(t)&&!Kl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0="";function kN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Cy(e)),e=PN(t.get(n),e);return Cy(e)}function PN(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case c0:n+="";break;default:n+=s}}return n}function Cy(t){return t+c0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Dr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function h0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fa(this.root,e,this.comparator,!0)}}class Fa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ke.RED,this.left=i??Ke.EMPTY,this.right=s??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ke(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ke.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ke(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Py(this.data.getIterator())}getIteratorFrom(e){return new Py(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Be(this.comparator);return n.data=e,n}}class Py{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new kt([])}unionWith(e){let n=new Be(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return is(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new d0("Invalid base64 string: "+s):s}}(e);return new Ye(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const NN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Er(t){if(ae(!!t,39018),typeof t=="string"){let e=0;const n=NN.exec(t);if(ae(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Tr(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="server_timestamp",p0="__type__",m0="__previous_value__",g0="__local_write_time__";function Uf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[p0])==null?void 0:r.stringValue)===f0}function Pu(t){const e=t.mapValue.fields[m0];return Uf(e)?Pu(e):e}function Vo(t){const e=Er(t.mapValue.fields[g0].timestampValue);return new ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e,n,r,i,s,o,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const Gl="(default)";class Oo{constructor(e,n){this.projectId=e,this.database=n||Gl}static empty(){return new Oo("","")}get isDefaultDatabase(){return this.database===Gl}isEqual(e){return e instanceof Oo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0="__type__",_0="__max__",ja={mapValue:{fields:{__type__:{stringValue:_0}}}},v0="__vector__",Ql="value";function Ir(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Uf(t)?4:VN(t)?9007199254740991:xN(t)?10:11:Q(28295,{value:t})}function _n(t,e){if(t===e)return!0;const n=Ir(t);if(n!==Ir(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vo(t).isEqual(Vo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Er(i.timestampValue),l=Er(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Tr(i.bytesValue).isEqual(Tr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return De(i.geoPointValue.latitude)===De(s.geoPointValue.latitude)&&De(i.geoPointValue.longitude)===De(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return De(i.integerValue)===De(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=De(i.doubleValue),l=De(s.doubleValue);return o===l?Kl(o)===Kl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return is(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(ky(o)!==ky(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!_n(o[u],l[u])))return!1;return!0}(t,e);default:return Q(52216,{left:t})}}function Mo(t,e){return(t.values||[]).find(n=>_n(n,e))!==void 0}function ss(t,e){if(t===e)return 0;const n=Ir(t),r=Ir(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=De(s.integerValue||s.doubleValue),u=De(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Ny(t.timestampValue,e.timestampValue);case 4:return Ny(Vo(t),Vo(e));case 5:return sd(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Tr(s),u=Tr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ne(l[h],u[h]);if(f!==0)return f}return ne(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ne(De(s.latitude),De(o.latitude));return l!==0?l:ne(De(s.longitude),De(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Dy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var p,A,C,N;const l=s.fields||{},u=o.fields||{},h=(p=l[Ql])==null?void 0:p.arrayValue,f=(A=u[Ql])==null?void 0:A.arrayValue,m=ne(((C=h==null?void 0:h.values)==null?void 0:C.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return m!==0?m:Dy(h,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ja.mapValue&&o===ja.mapValue)return 0;if(s===ja.mapValue)return 1;if(o===ja.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const p=sd(u[m],f[m]);if(p!==0)return p;const A=ss(l[u[m]],h[f[m]]);if(A!==0)return A}return ne(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Q(23264,{he:n})}}function Ny(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=Er(t),r=Er(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function Dy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ss(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function os(t){return od(t)}function od(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Er(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Tr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=od(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${od(n.fields[o])}`;return i+"}"}(t.mapValue):Q(61005,{value:t})}function ll(t){switch(Ir(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Pu(t);return e?16+ll(e):16;case 5:return 2*t.stringValue.length;case 6:return Tr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ll(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Dr(r.fields,(s,o)=>{i+=s.length+ll(o)}),i}(t.mapValue);default:throw Q(13486,{value:t})}}function xy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ad(t){return!!t&&"integerValue"in t}function Ff(t){return!!t&&"arrayValue"in t}function Vy(t){return!!t&&"nullValue"in t}function Oy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ul(t){return!!t&&"mapValue"in t}function xN(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[y0])==null?void 0:r.stringValue)===v0}function ao(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Dr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ao(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ao(t.arrayValue.values[n]);return e}return{...t}}function VN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===_0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ul(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ao(n)}setAll(e){let n=Ge.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ao(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ul(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ul(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Dr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new _t(ao(this.value))}}function w0(t){const e=[];return Dr(t.fields,(n,r)=>{const i=new Ge([n]);if(ul(r)){const s=w0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ot(e,0,Y.min(),Y.min(),Y.min(),_t.empty(),0)}static newFoundDocument(e,n,r,i){return new ot(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new ot(e,2,n,Y.min(),Y.min(),_t.empty(),0)}static newUnknownDocument(e,n){return new ot(e,3,n,Y.min(),Y.min(),_t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n){this.position=e,this.inclusive=n}}function My(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=ss(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ly(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n="asc"){this.field=e,this.dir=n}}function ON(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{}class Me extends E0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new LN(e,n,r):n==="array-contains"?new FN(e,r):n==="in"?new jN(e,r):n==="not-in"?new BN(e,r):n==="array-contains-any"?new zN(e,r):new Me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new bN(e,r):new UN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ss(n,this.value)):n!==null&&Ir(this.value)===Ir(n)&&this.matchesComparison(ss(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nn extends E0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new nn(e,n)}matches(e){return T0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function T0(t){return t.op==="and"}function I0(t){return MN(t)&&T0(t)}function MN(t){for(const e of t.filters)if(e instanceof nn)return!1;return!0}function ld(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+os(t.value);if(I0(t))return t.filters.map(e=>ld(e)).join(",");{const e=t.filters.map(n=>ld(n)).join(",");return`${t.op}(${e})`}}function S0(t,e){return t instanceof Me?function(r,i){return i instanceof Me&&r.op===i.op&&r.field.isEqual(i.field)&&_n(r.value,i.value)}(t,e):t instanceof nn?function(r,i){return i instanceof nn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&S0(o,i.filters[l]),!0):!1}(t,e):void Q(19439)}function A0(t){return t instanceof Me?function(n){return`${n.field.canonicalString()} ${n.op} ${os(n.value)}`}(t):t instanceof nn?function(n){return n.op.toString()+" {"+n.getFilters().map(A0).join(" ,")+"}"}(t):"Filter"}class LN extends Me{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class bN extends Me{constructor(e,n){super(e,"in",n),this.keys=R0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class UN extends Me{constructor(e,n){super(e,"not-in",n),this.keys=R0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function R0(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class FN extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ff(n)&&Mo(n.arrayValue,this.value)}}class jN extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Mo(this.value.arrayValue,n)}}class BN extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(Mo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Mo(this.value.arrayValue,n)}}class zN extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ff(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Mo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function by(t,e=null,n=[],r=[],i=null,s=null,o=null){return new $N(t,e,n,r,i,s,o)}function jf(t){const e=J(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ld(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ku(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>os(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>os(r)).join(",")),e.Te=n}return e.Te}function Bf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ON(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!S0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ly(t.startAt,e.startAt)&&Ly(t.endAt,e.endAt)}function ud(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function qN(t,e,n,r,i,s,o,l){return new ys(t,e,n,r,i,s,o,l)}function zf(t){return new ys(t)}function Uy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function C0(t){return t.collectionGroup!==null}function lo(t){const e=J(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Be(Ge.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Lo(s,r))}),n.has(Ge.keyField().canonicalString())||e.Ie.push(new Lo(Ge.keyField(),r))}return e.Ie}function pn(t){const e=J(t);return e.Ee||(e.Ee=HN(e,lo(t))),e.Ee}function HN(t,e){if(t.limitType==="F")return by(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Lo(i.field,s)});const n=t.endAt?new Xl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Xl(t.startAt.position,t.startAt.inclusive):null;return by(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function cd(t,e){const n=t.filters.concat([e]);return new ys(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function hd(t,e,n){return new ys(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nu(t,e){return Bf(pn(t),pn(e))&&t.limitType===e.limitType}function k0(t){return`${jf(pn(t))}|lt:${t.limitType}`}function Ti(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>A0(i)).join(", ")}]`),ku(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>os(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>os(i)).join(",")),`Target(${r})`}(pn(t))}; limitType=${t.limitType})`}function Du(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of lo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=My(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,lo(r),i)||r.endAt&&!function(o,l,u){const h=My(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,lo(r),i))}(t,e)}function WN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function P0(t){return(e,n)=>{let r=!1;for(const i of lo(t)){const s=KN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function KN(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?ss(u,h):Q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Dr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return h0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN=new Ie(W.comparator);function Fn(){return GN}const N0=new Ie(W.comparator);function Ws(...t){let e=N0;for(const n of t)e=e.insert(n.key,n);return e}function D0(t){let e=N0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Hr(){return uo()}function x0(){return uo()}function uo(){return new fi(t=>t.toString(),(t,e)=>t.isEqual(e))}const QN=new Ie(W.comparator),XN=new Be(W.comparator);function re(...t){let e=XN;for(const n of t)e=e.add(n);return e}const YN=new Be(ne);function JN(){return YN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kl(e)?"-0":e}}function V0(t){return{integerValue:""+t}}function ZN(t,e){return CN(e)?V0(e):$f(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(){this._=void 0}}function eD(t,e,n){return t instanceof bo?function(i,s){const o={fields:{[p0]:{stringValue:f0},[g0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Uf(s)&&(s=Pu(s)),s&&(o.fields[m0]=s),{mapValue:o}}(n,e):t instanceof Uo?M0(t,e):t instanceof Fo?L0(t,e):function(i,s){const o=O0(i,s),l=Fy(o)+Fy(i.Ae);return ad(o)&&ad(i.Ae)?V0(l):$f(i.serializer,l)}(t,e)}function tD(t,e,n){return t instanceof Uo?M0(t,e):t instanceof Fo?L0(t,e):n}function O0(t,e){return t instanceof Yl?function(r){return ad(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class bo extends xu{}class Uo extends xu{constructor(e){super(),this.elements=e}}function M0(t,e){const n=b0(e);for(const r of t.elements)n.some(i=>_n(i,r))||n.push(r);return{arrayValue:{values:n}}}class Fo extends xu{constructor(e){super(),this.elements=e}}function L0(t,e){let n=b0(e);for(const r of t.elements)n=n.filter(i=>!_n(i,r));return{arrayValue:{values:n}}}class Yl extends xu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Fy(t){return De(t.integerValue||t.doubleValue)}function b0(t){return Ff(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,n){this.field=e,this.transform=n}}function rD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Uo&&i instanceof Uo||r instanceof Fo&&i instanceof Fo?is(r.elements,i.elements,_n):r instanceof Yl&&i instanceof Yl?_n(r.Ae,i.Ae):r instanceof bo&&i instanceof bo}(t.transform,e.transform)}class iD{constructor(e,n){this.version=e,this.transformResults=n}}class Zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vu{}function U0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new qf(t.key,Zt.none()):new Xo(t.key,t.data,Zt.none());{const n=t.data,r=_t.empty();let i=new Be(Ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new xr(t.key,r,new kt(i.toArray()),Zt.none())}}function sD(t,e,n){t instanceof Xo?function(i,s,o){const l=i.value.clone(),u=By(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof xr?function(i,s,o){if(!cl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=By(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(F0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function co(t,e,n,r){return t instanceof Xo?function(s,o,l,u){if(!cl(s.precondition,o))return l;const h=s.value.clone(),f=zy(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof xr?function(s,o,l,u){if(!cl(s.precondition,o))return l;const h=zy(s.fieldTransforms,u,o),f=o.data;return f.setAll(F0(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return cl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function oD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=O0(r.transform,i||null);s!=null&&(n===null&&(n=_t.empty()),n.set(r.field,s))}return n||null}function jy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&is(r,i,(s,o)=>rD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Xo extends Vu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class xr extends Vu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function F0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function By(t,e,n){const r=new Map;ae(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,tD(o,l,n[i]))}return r}function zy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,eD(s,o,e))}return r}class qf extends Vu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aD extends Vu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&sD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=co(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=co(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=x0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=U0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&is(this.mutations,e.mutations,(n,r)=>jy(n,r))&&is(this.baseMutations,e.baseMutations,(n,r)=>jy(n,r))}}class Hf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return QN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Hf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,ie;function hD(t){switch(t){case O.OK:return Q(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return Q(15467,{code:t})}}function j0(t){if(t===void 0)return Un("GRPC error has no .code"),O.UNKNOWN;switch(t){case Ve.OK:return O.OK;case Ve.CANCELLED:return O.CANCELLED;case Ve.UNKNOWN:return O.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return O.INTERNAL;case Ve.UNAVAILABLE:return O.UNAVAILABLE;case Ve.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Ve.NOT_FOUND:return O.NOT_FOUND;case Ve.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Ve.ABORTED:return O.ABORTED;case Ve.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Ve.DATA_LOSS:return O.DATA_LOSS;default:return Q(39323,{code:t})}}(ie=Ve||(Ve={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD=new pr([4294967295,4294967295],0);function $y(t){const e=dD().encode(t),n=new e0;return n.update(e),new Uint8Array(n.digest())}function qy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new pr([n,r],0),new pr([i,s],0)]}class Wf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ks(`Invalid padding: ${n}`);if(r<0)throw new Ks(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ks(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ks(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=pr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(pr.fromNumber(r)));return i.compare(fD)===1&&(i=new pr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=$y(e),[r,i]=qy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Wf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=$y(e),[r,i]=qy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ks extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Yo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ou(Y.min(),i,new Ie(ne),Fn(),re())}}class Yo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Yo(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class B0{constructor(e,n){this.targetId=e,this.Ce=n}}class z0{constructor(e,n,r=Ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Hy{constructor(){this.ve=0,this.Fe=Wy(),this.Me=Ye.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),r=re();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q(38017,{changeType:s})}}),new Yo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Wy()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ae(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class pD{constructor(e){this.Ge=e,this.ze=new Map,this.je=Fn(),this.Je=Ba(),this.He=Ba(),this.Ye=new Ie(ne)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(ud(s))if(r===0){const o=new W(s.path);this.et(n,o,ot.newNoDocument(o,Y.min()))}else ae(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Tr(r).toUint8Array()}catch(u){if(u instanceof d0)return rs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Wf(o,i,s)}catch(u){return rs(u instanceof Ks?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&ud(l.target)){const u=new W(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,ot.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=re();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Ou(e,n,this.Ye,this.je,r);return this.je=Fn(),this.Je=Ba(),this.He=Ba(),this.Ye=new Ie(ne),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Hy,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Be(ne),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Be(ne),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Hy),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ba(){return new Ie(W.comparator)}function Wy(){return new Ie(W.comparator)}const mD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),gD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),yD=(()=>({and:"AND",or:"OR"}))();class _D{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function dd(t,e){return t.useProto3Json||ku(e)?e:{value:e}}function Jl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function vD(t,e){return Jl(t,e.toTimestamp())}function mn(t){return ae(!!t,49232),Y.fromTimestamp(function(n){const r=Er(n);return new ge(r.seconds,r.nanos)}(t))}function Kf(t,e){return fd(t,e).canonicalString()}function fd(t,e){const n=function(i){return new he(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function q0(t){const e=he.fromString(t);return ae(Q0(e),10190,{key:e.toString()}),e}function pd(t,e){return Kf(t.databaseId,e.path)}function Xc(t,e){const n=q0(e);if(n.get(1)!==t.databaseId.projectId)throw new z(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(W0(n))}function H0(t,e){return Kf(t.databaseId,e)}function wD(t){const e=q0(t);return e.length===4?he.emptyPath():W0(e)}function md(t){return new he(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function W0(t){return ae(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Ky(t,e,n){return{name:pd(t,e),fields:n.value.mapValue.fields}}function ED(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Q(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ae(f===void 0||typeof f=="string",58123),Ye.fromBase64String(f||"")):(ae(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ye.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?O.UNKNOWN:j0(h.code);return new z(f,h.message||"")}(o);n=new z0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Xc(t,r.document.name),s=mn(r.document.updateTime),o=r.document.createTime?mn(r.document.createTime):Y.min(),l=new _t({mapValue:{fields:r.document.fields}}),u=ot.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new hl(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Xc(t,r.document),s=r.readTime?mn(r.readTime):Y.min(),o=ot.newNoDocument(i,s),l=r.removedTargetIds||[];n=new hl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Xc(t,r.document),s=r.removedTargetIds||[];n=new hl([],s,i,null)}else{if(!("filter"in e))return Q(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new cD(i,s),l=r.targetId;n=new B0(l,o)}}return n}function TD(t,e){let n;if(e instanceof Xo)n={update:Ky(t,e.key,e.value)};else if(e instanceof qf)n={delete:pd(t,e.key)};else if(e instanceof xr)n={update:Ky(t,e.key,e.data),updateMask:DD(e.fieldMask)};else{if(!(e instanceof aD))return Q(16599,{Vt:e.type});n={verify:pd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof bo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Uo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Fo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Yl)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:vD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q(27497)}(t,e.precondition)),n}function ID(t,e){return t&&t.length>0?(ae(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?mn(i.updateTime):mn(s);return o.isEqual(Y.min())&&(o=mn(s)),new iD(o,i.transformResults||[])}(n,e))):[]}function SD(t,e){return{documents:[H0(t,e.path)]}}function AD(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=H0(t,i);const s=function(h){if(h.length!==0)return G0(nn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(p){return{field:Ii(p.field),direction:kD(p.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=dd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:i}}function RD(t){let e=wD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const p=K0(m);return p instanceof nn&&I0(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(p=>function(C){return new Lo(Si(C.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(p))}(n.orderBy));let l=null;n.limit&&(l=function(m){let p;return p=typeof m=="object"?m.value:m,ku(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(m){const p=!!m.before,A=m.values||[];return new Xl(A,p)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const p=!m.before,A=m.values||[];return new Xl(A,p)}(n.endAt)),qN(e,i,o,s,l,"F",u,h)}function CD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function K0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Si(n.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Si(n.unaryFilter.field);return Me.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Si(n.unaryFilter.field);return Me.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Si(n.unaryFilter.field);return Me.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(t):t.fieldFilter!==void 0?function(n){return Me.create(Si(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return nn.create(n.compositeFilter.filters.map(r=>K0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(t):Q(30097,{filter:t})}function kD(t){return mD[t]}function PD(t){return gD[t]}function ND(t){return yD[t]}function Ii(t){return{fieldPath:t.canonicalString()}}function Si(t){return Ge.fromServerFormat(t.fieldPath)}function G0(t){return t instanceof Me?function(n){if(n.op==="=="){if(Oy(n.value))return{unaryFilter:{field:Ii(n.field),op:"IS_NAN"}};if(Vy(n.value))return{unaryFilter:{field:Ii(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Oy(n.value))return{unaryFilter:{field:Ii(n.field),op:"IS_NOT_NAN"}};if(Vy(n.value))return{unaryFilter:{field:Ii(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ii(n.field),op:PD(n.op),value:n.value}}}(t):t instanceof nn?function(n){const r=n.getFilters().map(i=>G0(i));return r.length===1?r[0]:{compositeFilter:{op:ND(n.op),filters:r}}}(t):Q(54877,{filter:t})}function DD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Q0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=Ye.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e){this.yt=e}}function VD(t){const e=RD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?hd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(){this.Cn=new MD}addToCollectionParentIndex(e,n){return this.Cn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(wr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(wr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class MD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Be(he.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Be(he.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},X0=41943040;class gt{static withCacheSize(e){return new gt(e,gt.DEFAULT_COLLECTION_PERCENTILE,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gt.DEFAULT_COLLECTION_PERCENTILE=10,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,gt.DEFAULT=new gt(X0,gt.DEFAULT_COLLECTION_PERCENTILE,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),gt.DISABLED=new gt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new as(0)}static cr(){return new as(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy="LruGarbageCollector",LD=1048576;function Xy([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class bD{constructor(e){this.Ir=e,this.buffer=new Be(Xy),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Xy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class UD{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){$(Qy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){gs(n)?$(Qy,"Ignoring IndexedDB error during garbage collection: ",n):await ms(n)}await this.Vr(3e5)})}}class FD{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Cu.ce);const r=new bD(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Gy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Gy):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),Ei()<=te.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function jD(t,e){return new FD(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(){this.changes=new fi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&co(r.mutation,i,kt.empty(),ge.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=Hr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ws();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Hr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Fn();const o=uo(),l=function(){return uo()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof xr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),co(f.mutation,h,f.mutation.getFieldMask(),ge.now())):o.set(h.key,kt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new zD(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=uo();let i=new Ie((o,l)=>o-l),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||kt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||re()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=x0();f.forEach(p=>{if(!s.has(p)){const A=U0(n.get(p),r.get(p));A!==null&&m.set(p,A),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):C0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Hr());let l=xo,u=s;return o.next(h=>L.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(p=>{u=u.insert(f,p)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,re())).next(f=>({batchId:l,changes:D0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=Ws();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ws();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const h=function(m,p){return new ys(p,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,p)=>{o=o.insert(m,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ot.newInvalidDocument(f)))});let l=Ws();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&co(f.mutation,h,kt.empty(),ge.now()),Du(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return L.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:mn(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:VD(i.bundledQuery),readTime:mn(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(){this.overlays=new Ie(W.comparator),this.qr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Hr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Hr(),s=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ie((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Hr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Hr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return L.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new uD(n,r));let s=this.qr.get(n);s===void 0&&(s=re(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(){this.sessionToken=Ye.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(){this.Qr=new Be(ze.$r),this.Ur=new Be(ze.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new ze(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new W(new he([])),r=new ze(n,e),i=new ze(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new W(new he([])),r=new ze(n,e),i=new ze(n,e+1);let s=re();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ze(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return W.comparator(e.key,n.key)||ne(e.Yr,n.Yr)}static Kr(e,n){return ne(e.Yr,n.Yr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Be(ze.$r)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lD(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new ze(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?bf:this.tr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),i=new ze(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Be(ne);return n.forEach(i=>{const s=new ze(i,0),o=new ze(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),L.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new ze(new W(s),0);let l=new Be(ne);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Yr)),!0)},o),L.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return L.forEach(n.mutations,i=>{const s=new ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new ze(n,0),i=this.Zr.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(e){this.ri=e,this.docs=function(){return new Ie(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(e,n){let r=Fn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ot.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Fn();const o=n.path,l=new W(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||IN(TN(f),r)<=0||(i.has(f.key)||Du(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q(9500)}ii(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new QD(this)}getSize(e){return L.resolve(this.size)}}class QD extends BD{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e){this.persistence=e,this.si=new fi(n=>jf(n),Bf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.oi=0,this._i=new Gf,this.targetCount=0,this.ai=as.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),L.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new as(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Pr(n),L.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e,n){this.ui={},this.overlays={},this.ci=new Cu(0),this.li=!1,this.li=!0,this.hi=new WD,this.referenceDelegate=e(this),this.Pi=new XD(this),this.indexManager=new OD,this.remoteDocumentCache=function(i){return new GD(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new xD(n),this.Ii=new qD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new KD(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new YD(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return L.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class YD extends AN{constructor(e){super(),this.currentSequenceNumber=e}}class Qf{constructor(e){this.persistence=e,this.Ri=new Gf,this.Vi=null}static mi(e){return new Qf(e)}get fi(){if(this.Vi)return this.Vi;throw Q(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.fi,r=>{const i=W.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Zl{constructor(e,n){this.persistence=e,this.pi=new fi(r=>kN(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=jD(this,n)}static mi(e,n){return new Zl(e,n)}Ei(){}di(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return L.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?L.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ll(e.data.value)),n}br(e,n,r){return L.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return L.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Xf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return AA()?8:RN(lt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new JD;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(Ei()<=te.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Ti(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),L.resolve()):(Ei()<=te.DEBUG&&$("QueryEngine","Query:",Ti(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Ei()<=te.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Ti(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pn(n))):L.resolve())}ys(e,n){if(Uy(n))return L.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=hd(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(n,l);return this.Cs(n,h,o,u.readTime)?this.ys(e,hd(n,null,"F")):this.vs(e,h,n,u)}))})))}ws(e,n,r,i){return Uy(n)||i.isEqual(Y.min())?L.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?L.resolve(null):(Ei()<=te.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ti(n)),this.vs(e,o,n,EN(i,xo)).next(l=>l))})}Ds(e,n){let r=new Be(P0(e));return n.forEach((i,s)=>{Du(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return Ei()<=te.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Ti(n)),this.ps.getDocumentsMatchingQuery(e,n,wr.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf="LocalStore",e2=3e8;class t2{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new Ie(ne),this.xs=new fi(s=>jf(s),Bf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $D(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function n2(t,e,n,r){return new t2(t,e,n,r)}async function J0(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=re();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:o,addedBatchIds:l}))})})}function r2(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,p=m.keys();let A=L.resolve();return p.forEach(C=>{A=A.next(()=>f.getEntry(u,C)).next(N=>{const V=h.docVersions.get(C);ae(V!==null,48541),N.version.compareTo(V)<0&&(m.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Z0(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function i2(t,e){const n=J(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((f,m)=>{const p=i.get(m);if(!p)return;l.push(n.Pi.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Pi.addMatchingKeys(s,f.addedDocuments,m)));let A=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(Ye.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(m,A),function(N,V,S){return N.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=e2?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(p,A,f)&&l.push(n.Pi.updateTargetData(s,A))});let u=Fn(),h=re();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(s2(s,o,e.documentUpdates).next(f=>{u=f.ks,h=f.qs})),!r.isEqual(Y.min())){const f=n.Pi.getLastRemoteSnapshotVersion(s).next(m=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.Ms=i,s))}function s2(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Fn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$(Yf,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{ks:o,qs:i}})}function o2(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=bf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function a2(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new rr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function gd(t,e,n){const r=J(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!gs(o))throw o;$(Yf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function Yy(t,e,n){const r=J(t);let i=Y.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=J(u),p=m.xs.get(f);return p!==void 0?L.resolve(m.Ms.get(p)):m.Pi.getTargetData(h,f)}(r,o,pn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:re())).next(l=>(l2(r,WN(e),l),{documents:l,Qs:s})))}function l2(t,e,n){let r=t.Os.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class Jy{constructor(){this.activeTargetIds=JN()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class u2{constructor(){this.Mo=new Jy,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Jy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy="ConnectivityMonitor";class e_{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){$(Zy,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){$(Zy,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let za=null;function yd(){return za===null?za=function(){return 268435456+Math.round(2147483648*Math.random())}():za++,"0x"+za.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="RestConnection",h2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class d2{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Gl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=yd(),l=this.zo(e,n.toUriEncodedString());$(Yc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:h}=new URL(l),f=Pr(h);return this.Jo(e,l,u,r,f).then(m=>($(Yc,`Received RPC '${e}' ${o}: `,m),m),m=>{throw rs(Yc,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ps}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=h2[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="WebChannelConnection";class p2 extends d2{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=yd();return new Promise((l,u)=>{const h=new t0;h.setWithCredentials(!0),h.listenOnce(n0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case al.NO_ERROR:const m=h.getResponseJson();$(rt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case al.TIMEOUT:$(rt,`RPC '${e}' ${o} timed out`),u(new z(O.DEADLINE_EXCEEDED,"Request time out"));break;case al.HTTP_ERROR:const p=h.getStatus();if($(rt,`RPC '${e}' ${o} failed with status:`,p,"response text:",h.getResponseText()),p>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const C=A==null?void 0:A.error;if(C&&C.status&&C.message){const N=function(S){const _=S.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(_)>=0?_:O.UNKNOWN}(C.status);u(new z(N,C.message))}else u(new z(O.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new z(O.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{$(rt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);$(rt,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}T_(e,n,r){const i=yd(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=s0(),l=i0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");$(rt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);this.I_(m);let p=!1,A=!1;const C=new f2({Yo:V=>{A?$(rt,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(p||($(rt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),p=!0),$(rt,`RPC '${e}' stream ${i} sending:`,V),m.send(V))},Zo:()=>m.close()}),N=(V,S,_)=>{V.listen(S,E=>{try{_(E)}catch(D){setTimeout(()=>{throw D},0)}})};return N(m,Hs.EventType.OPEN,()=>{A||($(rt,`RPC '${e}' stream ${i} transport opened.`),C.o_())}),N(m,Hs.EventType.CLOSE,()=>{A||(A=!0,$(rt,`RPC '${e}' stream ${i} transport closed`),C.a_(),this.E_(m))}),N(m,Hs.EventType.ERROR,V=>{A||(A=!0,rs(rt,`RPC '${e}' stream ${i} transport errored. Name:`,V.name,"Message:",V.message),C.a_(new z(O.UNAVAILABLE,"The operation could not be completed")))}),N(m,Hs.EventType.MESSAGE,V=>{var S;if(!A){const _=V.data[0];ae(!!_,16349);const E=_,D=(E==null?void 0:E.error)||((S=E[0])==null?void 0:S.error);if(D){$(rt,`RPC '${e}' stream ${i} received error:`,D);const U=D.status;let F=function(v){const T=Ve[v];if(T!==void 0)return j0(T)}(U),w=D.message;F===void 0&&(F=O.INTERNAL,w="Unknown error status: "+U+" with message "+D.message),A=!0,C.a_(new z(F,w)),m.close()}else $(rt,`RPC '${e}' stream ${i} received:`,_),C.u_(_)}}),N(l,r0.STAT_EVENT,V=>{V.stat===id.PROXY?$(rt,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===id.NOPROXY&&$(rt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.__()},0),C}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Jc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(t){return new _D(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_="PersistentStream";class tT{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new eT(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Un(n.toString()),Un("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new z(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return $(t_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():($(t_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class m2 extends tT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=ED(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?mn(o.readTime):Y.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=md(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=ud(u)?{documents:SD(s,u)}:{query:AD(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=$0(s,o.resumeToken);const h=dd(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=Jl(s,o.snapshotVersion.toTimestamp());const h=dd(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=CD(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=md(this.serializer),n.removeTarget=e,this.q_(n)}}class g2 extends tT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ae(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ae(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=ID(e.writeResults,e.commitTime),r=mn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=md(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>TD(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{}class _2 extends y2{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new z(O.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,fd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(O.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,fd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(O.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class v2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Un(n),this.aa=!1):$("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai="RemoteStore";class w2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{pi(this)&&($(ai,"Restarting streams for network reachability change."),await async function(u){const h=J(u);h.Ea.add(4),await Jo(h),h.Ra.set("Unknown"),h.Ea.delete(4),await Lu(h)}(this))})}),this.Ra=new v2(r,i)}}async function Lu(t){if(pi(t))for(const e of t.da)await e(!0)}async function Jo(t){for(const e of t.da)await e(!1)}function nT(t,e){const n=J(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),tp(n)?ep(n):_s(n).O_()&&Zf(n,e))}function Jf(t,e){const n=J(t),r=_s(n);n.Ia.delete(e),r.O_()&&rT(n,e),n.Ia.size===0&&(r.O_()?r.L_():pi(n)&&n.Ra.set("Unknown"))}function Zf(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}_s(t).Y_(e)}function rT(t,e){t.Va.Ue(e),_s(t).Z_(e)}function ep(t){t.Va=new pD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),_s(t).start(),t.Ra.ua()}function tp(t){return pi(t)&&!_s(t).x_()&&t.Ia.size>0}function pi(t){return J(t).Ea.size===0}function iT(t){t.Va=void 0}async function E2(t){t.Ra.set("Online")}async function T2(t){t.Ia.forEach((e,n)=>{Zf(t,e)})}async function I2(t,e){iT(t),tp(t)?(t.Ra.ha(e),ep(t)):t.Ra.set("Unknown")}async function S2(t,e,n){if(t.Ra.set("Online"),e instanceof z0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){$(ai,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await eu(t,r)}else if(e instanceof hl?t.Va.Ze(e):e instanceof B0?t.Va.st(e):t.Va.tt(e),!n.isEqual(Y.min()))try{const r=await Z0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ia.get(h);f&&s.Ia.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.Ia.get(u);if(!f)return;s.Ia.set(u,f.withResumeToken(Ye.EMPTY_BYTE_STRING,f.snapshotVersion)),rT(s,u);const m=new rr(f.target,u,h,f.sequenceNumber);Zf(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){$(ai,"Failed to raise snapshot:",r),await eu(t,r)}}async function eu(t,e,n){if(!gs(e))throw e;t.Ea.add(1),await Jo(t),t.Ra.set("Offline"),n||(n=()=>Z0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$(ai,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Lu(t)})}function sT(t,e){return e().catch(n=>eu(t,n,e))}async function bu(t){const e=J(t),n=Sr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:bf;for(;A2(e);)try{const i=await o2(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,R2(e,i)}catch(i){await eu(e,i)}oT(e)&&aT(e)}function A2(t){return pi(t)&&t.Ta.length<10}function R2(t,e){t.Ta.push(e);const n=Sr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function oT(t){return pi(t)&&!Sr(t).x_()&&t.Ta.length>0}function aT(t){Sr(t).start()}async function C2(t){Sr(t).ra()}async function k2(t){const e=Sr(t);for(const n of t.Ta)e.ea(n.mutations)}async function P2(t,e,n){const r=t.Ta.shift(),i=Hf.from(r,e,n);await sT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await bu(t)}async function N2(t,e){e&&Sr(t).X_&&await async function(r,i){if(function(o){return hD(o)&&o!==O.ABORTED}(i.code)){const s=r.Ta.shift();Sr(r).B_(),await sT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await bu(r)}}(t,e),oT(t)&&aT(t)}async function n_(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),$(ai,"RemoteStore received new credentials");const r=pi(n);n.Ea.add(3),await Jo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Lu(n)}async function D2(t,e){const n=J(t);e?(n.Ea.delete(2),await Lu(n)):e||(n.Ea.add(2),await Jo(n),n.Ra.set("Unknown"))}function _s(t){return t.ma||(t.ma=function(n,r,i){const s=J(n);return s.sa(),new m2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:E2.bind(null,t),t_:T2.bind(null,t),r_:I2.bind(null,t),H_:S2.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),tp(t)?ep(t):t.Ra.set("Unknown")):(await t.ma.stop(),iT(t))})),t.ma}function Sr(t){return t.fa||(t.fa=function(n,r,i){const s=J(n);return s.sa(),new g2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:C2.bind(null,t),r_:N2.bind(null,t),ta:k2.bind(null,t),na:P2.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await bu(t)):(await t.fa.stop(),t.Ta.length>0&&($(ai,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new np(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rp(t,e){if(Un("AsyncQueue",`${e}: ${t}`),gs(t))return new z(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{static emptySet(e){return new Ki(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Ws(),this.sortedSet=new Ie(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ki)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ki;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(){this.ga=new Ie(W.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Q(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class ls{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ls(e,n,Ki.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class V2{constructor(){this.queries=i_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=i_(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new z(O.ABORTED,"Firestore shutting down"))}}function i_(){return new fi(t=>k0(t),Nu)}async function O2(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new x2,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=rp(o,`Initialization of query '${Ti(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&ip(n)}async function M2(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function L2(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&ip(n)}function b2(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function ip(t){t.Ca.forEach(e=>{e.next()})}var _d,s_;(s_=_d||(_d={})).Ma="default",s_.Cache="cache";class U2{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ls(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=ls.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==_d.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e){this.key=e}}class uT{constructor(e){this.key=e}}class F2{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=re(),this.mutatedKeys=re(),this.eu=P0(e),this.tu=new Ki(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new r_,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const p=i.get(f),A=Du(this.query,m)?m:null,C=!!p&&this.mutatedKeys.has(p.key),N=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let V=!1;p&&A?p.data.isEqual(A.data)?C!==N&&(r.track({type:3,doc:A}),V=!0):this.su(p,A)||(r.track({type:2,doc:A}),V=!0,(u&&this.eu(A,u)>0||h&&this.eu(A,h)<0)&&(l=!0)):!p&&A?(r.track({type:0,doc:A}),V=!0):p&&!A&&(r.track({type:1,doc:p}),V=!0,(u||h)&&(l=!0)),V&&(A?(o=o.add(A),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(A,C){const N=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Rt:V})}};return N(A)-N(C)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,h=u!==this.Za;return this.Za=u,o.length!==0||h?{snapshot:new ls(this.query,e.tu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new r_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=re(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new uT(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new lT(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=re();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return ls.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const sp="SyncEngine";class j2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class B2{constructor(e){this.key=e,this.hu=!1}}class z2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new fi(l=>k0(l),Nu),this.Iu=new Map,this.Eu=new Set,this.du=new Ie(W.comparator),this.Au=new Map,this.Ru=new Gf,this.Vu={},this.mu=new Map,this.fu=as.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function $2(t,e,n=!0){const r=mT(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await cT(r,e,n,!0),i}async function q2(t,e){const n=mT(t);await cT(n,e,!0,!1)}async function cT(t,e,n,r){const i=await a2(t.localStore,pn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await H2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&nT(t.remoteStore,i),l}async function H2(t,e,n,r,i){t.pu=(m,p,A)=>async function(N,V,S,_){let E=V.view.ru(S);E.Cs&&(E=await Yy(N.localStore,V.query,!1).then(({documents:w})=>V.view.ru(w,E)));const D=_&&_.targetChanges.get(V.targetId),U=_&&_.targetMismatches.get(V.targetId)!=null,F=V.view.applyChanges(E,N.isPrimaryClient,D,U);return a_(N,V.targetId,F.au),F.snapshot}(t,m,p,A);const s=await Yy(t.localStore,e,!0),o=new F2(e,s.Qs),l=o.ru(s.documents),u=Yo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);a_(t,n,h.au);const f=new j2(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function W2(t,e,n){const r=J(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!Nu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await gd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Jf(r.remoteStore,i.targetId),vd(r,i.targetId)}).catch(ms)):(vd(r,i.targetId),await gd(r.localStore,i.targetId,!0))}async function K2(t,e){const n=J(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Jf(n.remoteStore,r.targetId))}async function G2(t,e,n){const r=tx(t);try{const i=await function(o,l){const u=J(o),h=ge.now(),f=l.reduce((A,C)=>A.add(C.key),re());let m,p;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let C=Fn(),N=re();return u.Ns.getEntries(A,f).next(V=>{C=V,C.forEach((S,_)=>{_.isValidDocument()||(N=N.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,C)).next(V=>{m=V;const S=[];for(const _ of l){const E=oD(_,m.get(_.key).overlayedDocument);E!=null&&S.push(new xr(_.key,E,w0(E.value.mapValue),Zt.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,S,l)}).next(V=>{p=V;const S=V.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(A,V.batchId,S)})}).then(()=>({batchId:p.batchId,changes:D0(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Vu[o.currentUser.toKey()];h||(h=new Ie(ne)),h=h.insert(l,u),o.Vu[o.currentUser.toKey()]=h}(r,i.batchId,n),await Zo(r,i.changes),await bu(r.remoteStore)}catch(i){const s=rp(i,"Failed to persist write");n.reject(s)}}async function hT(t,e){const n=J(t);try{const r=await i2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?ae(o.hu,14607):i.removedDocuments.size>0&&(ae(o.hu,42227),o.hu=!1))}),await Zo(n,r,e)}catch(r){await ms(r)}}function o_(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const p of m.Sa)p.va(l)&&(h=!0)}),h&&ip(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Q2(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Ie(W.comparator);o=o.insert(s,ot.newNoDocument(s,Y.min()));const l=re().add(s),u=new Ou(Y.min(),new Map,new Ie(ne),o,l);await hT(r,u),r.du=r.du.remove(s),r.Au.delete(e),op(r)}else await gd(r.localStore,e,!1).then(()=>vd(r,e,n)).catch(ms)}async function X2(t,e){const n=J(t),r=e.batch.batchId;try{const i=await r2(n.localStore,e);fT(n,r,null),dT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zo(n,i)}catch(i){await ms(i)}}async function Y2(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(ae(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);fT(r,e,n),dT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Zo(r,i)}catch(i){await ms(i)}}function dT(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function fT(t,e,n){const r=J(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function vd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||pT(t,r)})}function pT(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Jf(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),op(t))}function a_(t,e,n){for(const r of n)r instanceof lT?(t.Ru.addReference(r.key,e),J2(t,r)):r instanceof uT?($(sp,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||pT(t,r.key)):Q(19791,{wu:r})}function J2(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||($(sp,"New document in limbo: "+n),t.Eu.add(r),op(t))}function op(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new W(he.fromString(e)),r=t.fu.next();t.Au.set(r,new B2(n)),t.du=t.du.insert(n,r),nT(t.remoteStore,new rr(pn(zf(n.path)),r,"TargetPurposeLimboResolution",Cu.ce))}}async function Zo(t,e,n){const r=J(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=Xf.As(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,h){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>L.forEach(h,p=>L.forEach(p.Es,A=>f.persistence.referenceDelegate.addReference(m,p.targetId,A)).next(()=>L.forEach(p.ds,A=>f.persistence.referenceDelegate.removeReference(m,p.targetId,A)))))}catch(m){if(!gs(m))throw m;$(Yf,"Failed to update sequence numbers: "+m)}for(const m of h){const p=m.targetId;if(!m.fromCache){const A=f.Ms.get(p),C=A.snapshotVersion,N=A.withLastLimboFreeSnapshotVersion(C);f.Ms=f.Ms.insert(p,N)}}}(r.localStore,s))}async function Z2(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){$(sp,"User change. New user:",e.toKey());const r=await J0(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new z(O.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zo(n,r.Ls)}}function ex(t,e){const n=J(t),r=n.Au.get(e);if(r&&r.hu)return re().add(r.key);{let i=re();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function mT(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ex.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Q2.bind(null,e),e.Pu.H_=L2.bind(null,e.eventManager),e.Pu.yu=b2.bind(null,e.eventManager),e}function tx(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=X2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Y2.bind(null,e),e}class tu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Mu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return n2(this.persistence,new ZD,e.initialUser,this.serializer)}Cu(e){return new Y0(Qf.mi,this.serializer)}Du(e){return new u2}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}tu.provider={build:()=>new tu};class nx extends tu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ae(this.persistence.referenceDelegate instanceof Zl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new UD(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?gt.withCacheSize(this.cacheSizeBytes):gt.DEFAULT;return new Y0(r=>Zl.mi(r,n),this.serializer)}}class wd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>o_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Z2.bind(null,this.syncEngine),await D2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new V2}()}createDatastore(e){const n=Mu(e.databaseInfo.databaseId),r=function(s){return new p2(s)}(e.databaseInfo);return function(s,o,l,u){return new _2(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new w2(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>o_(this.syncEngine,n,0),function(){return e_.v()?new e_:new c2}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const m=new z2(i,s,o,l,u,h);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);$(ai,"RemoteStore shutting down."),s.Ea.add(5),await Jo(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}wd.provider={build:()=>new wd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Un("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="FirestoreClient";class ix{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=Lf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$(Ar,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($(Ar,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=rp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Zc(t,e){t.asyncQueue.verifyOperationInProgress(),$(Ar,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await J0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function l_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await sx(t);$(Ar,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>n_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>n_(e.remoteStore,i)),t._onlineComponents=e}async function sx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$(Ar,"Using user provided OfflineComponentProvider");try{await Zc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;rs("Error using user provided cache. Falling back to memory cache: "+n),await Zc(t,new tu)}}else $(Ar,"Using default OfflineComponentProvider"),await Zc(t,new nx(void 0));return t._offlineComponents}async function gT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($(Ar,"Using user provided OnlineComponentProvider"),await l_(t,t._uninitializedComponentsProvider._online)):($(Ar,"Using default OnlineComponentProvider"),await l_(t,new wd))),t._onlineComponents}function ox(t){return gT(t).then(e=>e.syncEngine)}async function u_(t){const e=await gT(t),n=e.eventManager;return n.onListen=$2.bind(null,e.syncEngine),n.onUnlisten=W2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=q2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=K2.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T="firestore.googleapis.com",h_=!0;class d_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_T,this.ssl=h_}else this.host=e.host,this.ssl=e.ssl??h_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=X0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<LD)throw new z(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yT(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Uu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new d_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new d_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cN;switch(r.type){case"firstParty":return new pN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=c_.get(n);r&&($("ComponentProvider","Removing Datastore"),c_.delete(n),r.terminate())}(this),Promise.resolve()}}function ax(t,e,n,r={}){var h;t=mr(t,Uu);const i=Pr(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(_f(`https://${l}`),vf("Firestore",!0)),s.host!==_T&&s.host!==l&&rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!vr(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=it.MOCK_USER;else{f=Hw(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new z(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new it(p)}t._authCredentials=new hN(new a0(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new mi(this.firestore,e,this._query)}}class be{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new be(this.firestore,e,this._key)}toJSON(){return{type:be._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Qo(n,be._jsonSchema))return new be(e,r||null,new W(he.fromString(n.referencePath)))}}be._jsonSchemaVersion="firestore/documentReference/1.0",be._jsonSchema={type:Le("string",be._jsonSchemaVersion),referencePath:Le("string")};class gr extends mi{constructor(e,n,r){super(e,n,zf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new W(e))}withConverter(e){return new gr(this.firestore,e,this._path)}}function ea(t,e,...n){if(t=Re(t),l0("collection","path",e),t instanceof Uu){const r=he.fromString(e,...n);return Sy(r),new gr(t,null,r)}{if(!(t instanceof be||t instanceof gr))throw new z(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return Sy(r),new gr(t.firestore,null,r)}}function Fu(t,e,...n){if(t=Re(t),arguments.length===1&&(e=Lf.newId()),l0("doc","path",e),t instanceof Uu){const r=he.fromString(e,...n);return Iy(r),new be(t,null,new W(r))}{if(!(t instanceof be||t instanceof gr))throw new z(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return Iy(r),new be(t.firestore,t instanceof gr?t.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_="AsyncQueue";class p_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new eT(this,"async_queue_retry"),this._c=()=>{const r=Jc();r&&$(f_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Jc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Jc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Qr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!gs(e))throw e;$(f_,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Un("INTERNAL UNHANDLED ERROR: ",m_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=np.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&Q(47125,{Pc:m_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function m_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class us extends Uu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new p_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new p_(e),this._firestoreClient=void 0,await e}}}function lx(t,e){const n=typeof t=="object"?t:Eu(),r=typeof t=="string"?t:e||Gl,i=Nr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=zw("firestore");s&&ax(i,...s)}return i}function vT(t){if(t._terminated)throw new z(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||ux(t),t._firestoreClient}function ux(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,h,f){return new DN(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,yT(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new ix(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bt(Ye.fromBase64String(e))}catch(n){throw new z(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bt(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Qo(e,bt._jsonSchema))return bt.fromBase64String(e.bytes)}}bt._jsonSchemaVersion="firestore/bytes/1.0",bt._jsonSchema={type:Le("string",bt._jsonSchemaVersion),bytes:Le("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gn._jsonSchemaVersion}}static fromJSON(e){if(Qo(e,gn._jsonSchema))return new gn(e.latitude,e.longitude)}}gn._jsonSchemaVersion="firestore/geoPoint/1.0",gn._jsonSchema={type:Le("string",gn._jsonSchemaVersion),latitude:Le("number"),longitude:Le("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:yn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Qo(e,yn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new yn(e.vectorValues);throw new z(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}yn._jsonSchemaVersion="firestore/vectorValue/1.0",yn._jsonSchema={type:Le("string",yn._jsonSchemaVersion),vectorValues:Le("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=/^__.*__$/;class hx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new xr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Xo(e,this.data,n,this.fieldTransforms)}}class wT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new xr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ET(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{Ac:t})}}class ap{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ap({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return nu(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(ET(this.Ac)&&cx.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class dx{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Mu(e)}Cc(e,n,r,i=!1){return new ap({Ac:e,methodName:n,Dc:r,path:Ge.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lp(t){const e=t._freezeSettings(),n=Mu(t._databaseId);return new dx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fx(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);cp("Data must be an object, but it was:",o,r);const l=TT(r,o);let u,h;if(s.merge)u=new kt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const p=Ed(e,m,n);if(!o.contains(p))throw new z(O.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);ST(f,p)||f.push(p)}u=new kt(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new hx(new _t(l),u,h)}class zu extends Bu{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zu}}class up extends Bu{_toFieldTransform(e){return new nD(e.path,new bo)}isEqual(e){return e instanceof up}}function px(t,e,n,r){const i=t.Cc(1,e,n);cp("Data must be an object, but it was:",i,r);const s=[],o=_t.empty();Dr(r,(u,h)=>{const f=hp(e,u,n);h=Re(h);const m=i.yc(f);if(h instanceof zu)s.push(f);else{const p=ta(h,m);p!=null&&(s.push(f),o.set(f,p))}});const l=new kt(s);return new wT(o,l,i.fieldTransforms)}function mx(t,e,n,r,i,s){const o=t.Cc(1,e,n),l=[Ed(e,r,n)],u=[i];if(s.length%2!=0)throw new z(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)l.push(Ed(e,s[p])),u.push(s[p+1]);const h=[],f=_t.empty();for(let p=l.length-1;p>=0;--p)if(!ST(h,l[p])){const A=l[p];let C=u[p];C=Re(C);const N=o.yc(A);if(C instanceof zu)h.push(A);else{const V=ta(C,N);V!=null&&(h.push(A),f.set(A,V))}}const m=new kt(h);return new wT(f,m,o.fieldTransforms)}function gx(t,e,n,r=!1){return ta(n,t.Cc(r?4:3,e))}function ta(t,e){if(IT(t=Re(t)))return cp("Unsupported field value:",e,t),TT(t,e);if(t instanceof Bu)return function(r,i){if(!ET(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=ta(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ZN(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ge.fromDate(r);return{timestampValue:Jl(i.serializer,s)}}if(r instanceof ge){const s=new ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Jl(i.serializer,s)}}if(r instanceof gn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bt)return{bytesValue:$0(i.serializer,r._byteString)};if(r instanceof be){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Kf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof yn)return function(o,l){return{mapValue:{fields:{[y0]:{stringValue:v0},[Ql]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return $f(l.serializer,h)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${Ru(r)}`)}(t,e)}function TT(t,e){const n={};return h0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Dr(t,(r,i)=>{const s=ta(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function IT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ge||t instanceof gn||t instanceof bt||t instanceof be||t instanceof Bu||t instanceof yn)}function cp(t,e,n){if(!IT(n)||!u0(n)){const r=Ru(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Ed(t,e,n){if((e=Re(e))instanceof ju)return e._internalPath;if(typeof e=="string")return hp(t,e);throw nu("Field path arguments must be of type string or ",t,!1,void 0,n)}const yx=new RegExp("[~\\*/\\[\\]]");function hp(t,e,n){if(e.search(yx)>=0)throw nu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ju(...e.split("."))._internalPath}catch{throw nu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new z(O.INVALID_ARGUMENT,l+t+u)}function ST(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _x(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(dp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _x extends AT{data(){return super.data()}}function dp(t,e){return typeof e=="string"?hp(t,e):e instanceof ju?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fp{}class RT extends fp{}function CT(t,e,...n){let r=[];e instanceof fp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof mp).length,l=s.filter(u=>u instanceof pp).length;if(o>1||o>0&&l>0)throw new z(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class pp extends RT{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new pp(e,n,r)}_apply(e){const n=this._parse(e);return PT(e._query,n),new mi(e.firestore,e.converter,cd(e._query,n))}_parse(e){const n=lp(e.firestore);return function(s,o,l,u,h,f,m){let p;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new z(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){__(m,f);const C=[];for(const N of m)C.push(y_(u,s,N));p={arrayValue:{values:C}}}else p=y_(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||__(m,f),p=gx(l,o,m,f==="in"||f==="not-in");return Me.create(h,f,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class mp extends fp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new mp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:nn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)PT(o,u),o=cd(o,u)}(e._query,n),new mi(e.firestore,e.converter,cd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class gp extends RT{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new gp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new z(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Lo(s,o)}(e._query,this._field,this._direction);return new mi(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ys(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function kT(t,e="asc"){const n=e,r=dp("orderBy",t);return gp._create(r,n)}function y_(t,e,n){if(typeof(n=Re(n))=="string"){if(n==="")throw new z(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!C0(e)&&n.indexOf("/")!==-1)throw new z(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(he.fromString(n));if(!W.isDocumentKey(r))throw new z(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return xy(t,new W(r))}if(n instanceof be)return xy(t,n._key);throw new z(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ru(n)}.`)}function __(t,e){if(!Array.isArray(t)||t.length===0)throw new z(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function PT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class wx{convertValue(e,n="none"){switch(Ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Dr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Ql].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>De(o.doubleValue));return new yn(n)}convertGeoPoint(e){return new gn(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Pu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Vo(e));default:return null}}convertTimestamp(e){const n=Er(e);return new ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=he.fromString(e);ae(Q0(r),9688,{name:e});const i=new Oo(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||Un(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ex(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Gs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xr extends AT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new dl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(dp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Xr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Xr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Xr._jsonSchema={type:Le("string",Xr._jsonSchemaVersion),bundleSource:Le("string","DocumentSnapshot"),bundleName:Le("string"),bundle:Le("string")};class dl extends Xr{data(e={}){return super.data(e)}}class Gi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Gs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new dl(this._firestore,this._userDataWriter,r.key,r,new Gs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new dl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Gs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new dl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Gs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:Tx(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Gi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Lf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Tx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:t})}}Gi._jsonSchemaVersion="firestore/querySnapshot/1.0",Gi._jsonSchema={type:Le("string",Gi._jsonSchemaVersion),bundleSource:Le("string","QuerySnapshot"),bundleName:Le("string"),bundle:Le("string")};class NT extends wx{constructor(e){super(),this.firestore=e}convertBytes(e){return new bt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,n)}}function Ix(t,e,n,...r){t=mr(t,be);const i=mr(t.firestore,us),s=lp(i);let o;return o=typeof(e=Re(e))=="string"||e instanceof ju?mx(s,"updateDoc",t._key,e,n,r):px(s,"updateDoc",t._key,e),vp(i,[o.toMutation(t._key,Zt.exists(!0))])}function DT(t){return vp(mr(t.firestore,us),[new qf(t._key,Zt.none())])}function yp(t,e){const n=mr(t.firestore,us),r=Fu(t),i=Ex(t.converter,e);return vp(n,[fx(lp(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Zt.exists(!1))]).then(()=>r)}function _p(t,...e){var u,h,f;t=Re(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||g_(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(g_(e[r])){const m=e[r];e[r]=(u=m.next)==null?void 0:u.bind(m),e[r+1]=(h=m.error)==null?void 0:h.bind(m),e[r+2]=(f=m.complete)==null?void 0:f.bind(m)}let s,o,l;if(t instanceof be)o=mr(t.firestore,us),l=zf(t._key.path),s={next:m=>{e[r]&&e[r](Sx(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=mr(t,mi);o=mr(m.firestore,us),l=m._query;const p=new NT(o);s={next:A=>{e[r]&&e[r](new Gi(o,p,m,A))},error:e[r+1],complete:e[r+2]},vx(t._query)}return function(p,A,C,N){const V=new rx(N),S=new U2(A,V,C);return p.asyncQueue.enqueueAndForget(async()=>O2(await u_(p),S)),()=>{V.Nu(),p.asyncQueue.enqueueAndForget(async()=>M2(await u_(p),S))}}(vT(o),l,i,s)}function vp(t,e){return function(r,i){const s=new Qr;return r.asyncQueue.enqueueAndForget(async()=>G2(await ox(r),i,s)),s.promise}(vT(t),e)}function Sx(t,e,n){const r=n.docs.get(e._key),i=new NT(t);return new Xr(t,i,e._key,r,new Gs(n.hasPendingWrites,n.fromCache),e.converter)}function wp(){return new up("serverTimestamp")}(function(e,n=!0){(function(i){ps=i})(di),tn(new zt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new us(new dN(r.getProvider("auth-internal")),new mN(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new z(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oo(h.options.projectId,f)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),It(vy,wy,e),It(vy,wy,"esm2020")})();const Ax={apiKey:"AIzaSyDPKu4gv6YMrCNaDmDldLanWiepiyTvuSg",authDomain:"line-clone-fe1c3.firebaseapp.com",projectId:"line-clone-fe1c3",storageBucket:"line-clone-fe1c3.firebasestorage.app",messagingSenderId:"112575941355",appId:"1:112575941355:web:b7f98a6b15d77e76094cae",measurementId:"G-1FX3DM6SQE"},Ep=Jw(Ax);lk(Ep);lN(Ep);const Vr=lx(Ep);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT="firebasestorage.googleapis.com",VT="storageBucket",Rx=2*60*1e3,Cx=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends $t{constructor(e,n,r=0){super(eh(e),`Firebase Storage: ${n} (${eh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ke.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return eh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ce;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ce||(Ce={}));function eh(t){return"storage/"+t}function Tp(){const t="An unknown error occurred, please check the error payload for server response.";return new ke(Ce.UNKNOWN,t)}function kx(t){return new ke(Ce.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Px(t){return new ke(Ce.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Nx(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ke(Ce.UNAUTHENTICATED,t)}function Dx(){return new ke(Ce.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function xx(t){return new ke(Ce.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Vx(){return new ke(Ce.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ox(){return new ke(Ce.CANCELED,"User canceled the upload/download.")}function Mx(t){return new ke(Ce.INVALID_URL,"Invalid URL '"+t+"'.")}function Lx(t){return new ke(Ce.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function bx(){return new ke(Ce.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+VT+"' property when initializing the app?")}function Ux(){return new ke(Ce.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Fx(){return new ke(Ce.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function jx(t){return new ke(Ce.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Td(t){return new ke(Ce.INVALID_ARGUMENT,t)}function OT(){return new ke(Ce.APP_DELETED,"The Firebase app was deleted.")}function Bx(t){return new ke(Ce.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ho(t,e){return new ke(Ce.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function js(t){throw new ke(Ce.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Pt.makeFromUrl(e,n)}catch{return new Pt(e,"")}if(r.path==="")return r;throw Lx(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function h(D){D.path_=decodeURIComponent(D.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",A=new RegExp(`^https?://${m}/${f}/b/${i}/o${p}`,"i"),C={bucket:1,path:3},N=n===xT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,V="([^?#]*)",S=new RegExp(`^https?://${N}/${i}/${V}`,"i"),E=[{regex:l,indices:u,postModify:s},{regex:A,indices:C,postModify:h},{regex:S,indices:{bucket:1,path:2},postModify:h}];for(let D=0;D<E.length;D++){const U=E[D],F=U.regex.exec(e);if(F){const w=F[U.indices.bucket];let y=F[U.indices.path];y||(y=""),r=new Pt(w,y),U.postModify(r);break}}if(r==null)throw Mx(e);return r}}class zx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $x(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let h=!1;function f(...V){h||(h=!0,e.apply(null,V))}function m(V){i=setTimeout(()=>{i=null,t(A,u())},V)}function p(){s&&clearTimeout(s)}function A(V,...S){if(h){p();return}if(V){p(),f.call(null,V,...S);return}if(u()||o){p(),f.call(null,V,...S);return}r<64&&(r*=2);let E;l===1?(l=2,E=0):E=(r+Math.random())*1e3,m(E)}let C=!1;function N(V){C||(C=!0,p(),!h&&(i!==null?(V||(l=2),clearTimeout(i),m(0)):V||(l=1)))}return m(0),s=setTimeout(()=>{o=!0,N(!0)},n),N}function qx(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hx(t){return t!==void 0}function Wx(t){return typeof t=="object"&&!Array.isArray(t)}function Ip(t){return typeof t=="string"||t instanceof String}function v_(t){return Sp()&&t instanceof Blob}function Sp(){return typeof Blob<"u"}function w_(t,e,n,r){if(r<e)throw Td(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Td(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function MT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Yr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Yr||(Yr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e,n,r,i,s,o,l,u,h,f,m,p=!0,A=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=m,this.retry=p,this.isUsingEmulator=A,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,N)=>{this.resolve_=C,this.reject_=N,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new $a(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Yr.NO_ERROR,u=s.getStatus();if(!l||Kx(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Yr.ABORT;r(!1,new $a(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new $a(h,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Hx(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=Tp();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?OT():Ox();o(u)}else{const u=Vx();o(u)}};this.canceled_?n(!1,new $a(!1,null,!0)):this.backoffId_=$x(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&qx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class $a{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Qx(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Xx(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Yx(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Jx(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Zx(t,e,n,r,i,s,o=!0,l=!1){const u=MT(t.urlParams),h=t.url+u,f=Object.assign({},t.headers);return Yx(f,e),Qx(f,n),Xx(f,s),Jx(f,r),new Gx(h,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eV(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function tV(...t){const e=eV();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Sp())return new Blob(t);throw new ke(Ce.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function nV(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rV(t){if(typeof atob>"u")throw jx("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class th{constructor(e,n){this.data=e,this.contentType=n||null}}function iV(t,e){switch(t){case un.RAW:return new th(LT(e));case un.BASE64:case un.BASE64URL:return new th(bT(t,e));case un.DATA_URL:return new th(oV(e),aV(e))}throw Tp()}function LT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function sV(t){let e;try{e=decodeURIComponent(t)}catch{throw ho(un.DATA_URL,"Malformed data URL.")}return LT(e)}function bT(t,e){switch(t){case un.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ho(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case un.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ho(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=rV(e)}catch(i){throw i.message.includes("polyfill")?i:ho(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class UT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ho(un.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=lV(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function oV(t){const e=new UT(t);return e.base64?bT(un.BASE64,e.rest):sV(e.rest)}function aV(t){return new UT(t).contentType}function lV(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n){let r=0,i="";v_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(v_(this.data_)){const r=this.data_,i=nV(r,e,n);return i===null?null:new er(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new er(r,!0)}}static getBlob(...e){if(Sp()){const n=e.map(r=>r instanceof er?r.data_:r);return new er(tV.apply(null,n))}else{const n=e.map(o=>Ip(o)?iV(un.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new er(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(t){let e;try{e=JSON.parse(t)}catch{return null}return Wx(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function cV(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function jT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hV(t,e){return e}class ht{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||hV}}let qa=null;function dV(t){return!Ip(t)||t.length<2?t:jT(t)}function BT(){if(qa)return qa;const t=[];t.push(new ht("bucket")),t.push(new ht("generation")),t.push(new ht("metageneration")),t.push(new ht("name","fullPath",!0));function e(s,o){return dV(o)}const n=new ht("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ht("size");return i.xform=r,t.push(i),t.push(new ht("timeCreated")),t.push(new ht("updated")),t.push(new ht("md5Hash",null,!0)),t.push(new ht("cacheControl",null,!0)),t.push(new ht("contentDisposition",null,!0)),t.push(new ht("contentEncoding",null,!0)),t.push(new ht("contentLanguage",null,!0)),t.push(new ht("contentType",null,!0)),t.push(new ht("metadata","customMetadata",!0)),qa=t,qa}function fV(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Pt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function pV(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return fV(r,t),r}function zT(t,e,n){const r=FT(e);return r===null?null:pV(t,r,n)}function mV(t,e,n,r){const i=FT(e);if(i===null||!Ip(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(h=>{const f=t.bucket,m=t.fullPath,p="/b/"+o(f)+"/o/"+o(m),A=Ap(p,n,r),C=MT({alt:"media",token:h});return A+C})[0]}function gV(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class $T{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(t){if(!t)throw Tp()}function yV(t,e){function n(r,i){const s=zT(t,i,e);return qT(s!==null),s}return n}function _V(t,e){function n(r,i){const s=zT(t,i,e);return qT(s!==null),mV(s,i,t.host,t._protocol)}return n}function HT(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Dx():i=Nx():n.getStatus()===402?i=Px(t.bucket):n.getStatus()===403?i=xx(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function vV(t){const e=HT(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=kx(t.path)),s.serverResponse=i.serverResponse,s}return n}function wV(t,e,n){const r=e.fullServerUrl(),i=Ap(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new $T(i,s,_V(t,n),o);return l.errorHandler=vV(e),l}function EV(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function TV(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=EV(null,e)),r}function IV(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let E="";for(let D=0;D<2;D++)E=E+Math.random().toString().slice(2);return E}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const h=TV(e,r,i),f=gV(h,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,p=`\r
--`+u+"--",A=er.getBlob(m,r,p);if(A===null)throw Ux();const C={name:h.fullPath},N=Ap(s,t.host,t._protocol),V="POST",S=t.maxUploadRetryTime,_=new $T(N,V,yV(t,n),S);return _.urlParams=C,_.headers=o,_.body=A.uploadData(),_.errorHandler=HT(e),_}class SV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Yr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Yr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Yr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw js("cannot .send() more than once");if(Pr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw js("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw js("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw js("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw js("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class AV extends SV{initXhr(){this.xhr_.responseType="text"}}function WT(){return new AV}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n){this._service=e,n instanceof Pt?this._location=n:this._location=Pt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new li(e,n)}get root(){const e=new Pt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return jT(this._location.path)}get storage(){return this._service}get parent(){const e=uV(this._location.path);if(e===null)return null;const n=new Pt(this._location.bucket,e);return new li(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Bx(e)}}function RV(t,e,n){t._throwIfRoot("uploadBytes");const r=IV(t.storage,t._location,BT(),new er(e,!0),n);return t.storage.makeRequestWithTokens(r,WT).then(i=>({metadata:i,ref:t}))}function CV(t){t._throwIfRoot("getDownloadURL");const e=wV(t.storage,t._location,BT());return t.storage.makeRequestWithTokens(e,WT).then(n=>{if(n===null)throw Fx();return n})}function kV(t,e){const n=cV(t._location.path,e),r=new Pt(t._location.bucket,n);return new li(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PV(t){return/^[A-Za-z]+:\/\//.test(t)}function NV(t,e){return new li(t,e)}function KT(t,e){if(t instanceof Rp){const n=t;if(n._bucket==null)throw bx();const r=new li(n,n._bucket);return e!=null?KT(r,e):r}else return e!==void 0?kV(t,e):t}function DV(t,e){if(e&&PV(e)){if(t instanceof Rp)return NV(t,e);throw Td("To use ref(service, url), the first argument must be a Storage instance.")}else return KT(t,e)}function E_(t,e){const n=e==null?void 0:e[VT];return n==null?null:Pt.makeFromBucketSpec(n,t)}function xV(t,e,n,r={}){t.host=`${e}:${n}`;const i=Pr(e);i&&(_f(`https://${t.host}/b`),vf("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Hw(s,t.app.options.projectId))}class Rp{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=xT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Rx,this._maxUploadRetryTime=Cx,this._requests=new Set,i!=null?this._bucket=Pt.makeFromBucketSpec(i,this._host):this._bucket=E_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Pt.makeFromBucketSpec(this._url,e):this._bucket=E_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){w_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){w_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new li(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new zx(OT());{const o=Zx(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const T_="@firebase/storage",I_="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT="storage";function VV(t,e,n){return t=Re(t),RV(t,e,n)}function OV(t){return t=Re(t),CV(t)}function MV(t,e){return t=Re(t),DV(t,e)}function LV(t=Eu(),e){t=Re(t);const r=Nr(t,GT).getImmediate({identifier:e}),i=zw("storage");return i&&bV(r,...i),r}function bV(t,e,n,r={}){xV(t,e,n,r)}function UV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Rp(n,r,i,e,di)}function FV(){tn(new zt(GT,UV,"PUBLIC").setMultipleInstances(!0)),It(T_,I_,""),It(T_,I_,"esm2020")}FV();const QT=ea(Vr,"users"),jV=LV(),BV={id:"narration-user",name:"ナレーション",avatar:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="},zV=async(t,e)=>{let n="";if(e){const s=MV(jV,`avatars/${e.name}_${Date.now()}`),o={contentType:e.type,customMetadata:{userName:t,uploadTime:new Date().toISOString()}};await VV(s,e,o),n=await OV(s)}const r={name:t,avatar:n};return{id:(await yp(QT,r)).id,...r}},XT=t=>_p(QT,n=>{const r=n.docs.map(s=>({id:s.id,...s.data()})),i=[BV,...r];t(i)}),$V=async t=>{const e=Fu(Vr,"users",t);await DT(e)};const qV=({onUserAdded:t,onCancel:e})=>{const[n,r]=K.useState(""),[i,s]=K.useState(null),[o,l]=K.useState(!1),[u,h]=K.useState(null),f=async m=>{m.preventDefault(),l(!0),h(null);try{await zV(n,i),r(""),s(null),t()}catch(p){h(p.message),console.error("Error adding user:",p)}finally{l(!1)}};return M.jsxs("form",{onSubmit:f,className:"add-user-form",children:[M.jsx("h3",{children:"Add New User"}),u&&M.jsx("p",{className:"error-message",children:u}),M.jsx("input",{type:"text",placeholder:"User Name",value:n,onChange:m=>r(m.target.value),required:!0}),M.jsx("input",{type:"file",accept:"image/*",onChange:m=>s(m.target.files[0])}),M.jsxs("div",{className:"form-actions",children:[M.jsx("button",{type:"submit",disabled:o,children:o?"Adding...":"Add User"}),M.jsx("button",{type:"button",onClick:e,disabled:o,children:"Cancel"})]})]})},HV=({users:t})=>{const e=async n=>{if(window.confirm("Are you sure you want to delete this user?"))try{await $V(n),alert("User deleted successfully!")}catch(r){console.error("Error deleting user:",r),alert("Failed to delete user.")}};return M.jsxs("div",{className:"user-list-container",children:[M.jsx("h3",{children:"Manage Users"}),t.length===0?M.jsx("p",{children:"No users added yet."}):M.jsx("ul",{className:"user-list",children:t.map(n=>M.jsxs("li",{className:"user-item",children:[M.jsx("img",{src:n.avatar||"https://via.placeholder.com/40",alt:n.name,className:"user-avatar"}),M.jsx("span",{children:n.name}),M.jsx("button",{onClick:()=>e(n.id),className:"delete-button",children:"🗑️"})]},n.id))})]})};const WV=({onRoomSelect:t,rooms:e,onAddRoom:n,onLogout:r})=>{const[i,s]=K.useState(!1),[o,l]=K.useState(""),[u,h]=K.useState(!1),[f,m]=K.useState([]);K.useEffect(()=>{const N=XT(V=>{m(V)});return()=>N()},[]);const p=()=>{s(!0),h(!1)},A=N=>{N.preventDefault(),o.trim()&&(n(o),l(""),s(!1))},C=()=>{h(!0),s(!1)};return M.jsxs("div",{className:"chat-select-screen",children:[M.jsxs("header",{className:"chat-select-header",children:[M.jsx("h2",{children:"Chats"}),M.jsx("div",{children:M.jsx("button",{onClick:C,className:"manage-users-button",children:"Manage Users"})})]}),M.jsx(aA,{rooms:e,onRoomSelect:t}),!i&&!u&&M.jsx(lA,{onClick:p}),i&&M.jsxs("form",{onSubmit:A,className:"create-room-form",children:[M.jsx("input",{type:"text",value:o,onChange:N=>l(N.target.value),placeholder:"Enter room name",className:"create-room-input"}),M.jsx("button",{type:"submit",className:"create-room-submit-button",children:"Add Room"}),M.jsx("button",{type:"button",onClick:()=>s(!1),className:"create-room-cancel-button",children:"Cancel"})]}),u&&M.jsxs("div",{className:"user-management-section",children:[M.jsx(qV,{onUserAdded:()=>h(!1),onCancel:()=>h(!1)}),M.jsx(HV,{users:f})]})]})};const YT={デフォルト:[{action:"テキスト入力中にステートを移行",mainKey:"Space",altKey:"numpad0"},{action:"設定画面",mainKey:"Ctrl+Space",altKey:""}],テキスト入力中:[{action:"改行",mainKey:"Enter",altKey:""},{action:"投稿",mainKey:"Ctrl+Enter",altKey:""}]},JT=({onClose:t})=>{const[e,n]=K.useState(()=>{const s=localStorage.getItem("userKeyMaps");return s?JSON.parse(s):YT}),r=(s,o,l,u)=>{n(h=>{const f={...h};return f[s]=f[s].map((m,p)=>p===o?{...m,[l]:u}:m),f})},i=()=>{localStorage.setItem("userKeyMaps",JSON.stringify(e)),console.log("適用されたキーマップ:",e),t()};return M.jsx("div",{className:"keymap-overlay",children:M.jsxs("div",{className:"keymap-container",children:[M.jsx("h3",{children:"キーマップ設定"}),Object.entries(e).map(([s,o])=>M.jsxs("div",{className:"keymap-section",children:[M.jsx("h4",{children:s}),M.jsxs("table",{className:"keymap-table",children:[M.jsx("thead",{children:M.jsxs("tr",{children:[M.jsx("th",{children:"処理"}),M.jsx("th",{children:"メインキー"}),M.jsx("th",{children:"代替キー"})]})}),M.jsx("tbody",{children:o.map((l,u)=>M.jsxs("tr",{children:[M.jsx("td",{children:l.action}),M.jsx("td",{children:M.jsx("input",{type:"text",value:l.mainKey,onChange:h=>r(s,u,"mainKey",h.target.value),className:"keymap-input"})}),M.jsx("td",{children:M.jsx("input",{type:"text",value:l.altKey,onChange:h=>r(s,u,"altKey",h.target.value),className:"keymap-input"})})]},u))})]})]},s)),M.jsxs("div",{className:"keymap-actions",children:[M.jsx("button",{className:"keymap-apply-button",onClick:i,children:"適用"}),M.jsx("button",{onClick:t,className:"keymap-close-button",children:"閉じる"})]})]})})},ZT=async(t,e,n)=>{try{await yp(ea(Vr,`rooms/${t}/messages`),{senderId:e,text:n,timestamp:wp()})}catch(r){console.error("Error adding document: ",r)}},KV=(t,e)=>{const n=CT(ea(Vr,`rooms/${t}/messages`),kT("timestamp"));return _p(n,i=>{const s=[];i.forEach(o=>{s.push({id:o.id,...o.data()})}),e(s)})},S_=async(t,e,n)=>{try{const r=Fu(Vr,`rooms/${t}/messages`,e);await Ix(r,{text:n,updatedAt:wp()})}catch(r){console.error("Error updating message: ",r)}},A_=async(t,e)=>{try{const n=Fu(Vr,`rooms/${t}/messages`,e);await DT(n)}catch(n){console.error("Error deleting message: ",n)}},GV=async t=>{try{return(await yp(ea(Vr,"rooms"),{name:t,createdAt:wp()})).id}catch(e){console.error("Error creating room: ",e)}},QV=t=>{const e=CT(ea(Vr,"rooms"),kT("createdAt"));return _p(e,r=>{const i=[];r.forEach(s=>{i.push({id:s.id,...s.data()})}),t(i)})};const XV=({messages:t,users:e,currentUser:n,room:r,onDeleteMessage:i,onDeleteSelectedMessages:s})=>{const[o,l]=K.useState(null),[u,h]=K.useState(""),[f,m]=K.useState(null),[p,A]=K.useState(null),[C,N]=K.useState([]),V=K.useRef(null),S=K.useRef(null),_=K.useRef(null),E=["😀","😂","😊","😍","😢","😡","🤔","👍"],D=H=>{const fe=e.find(Ue=>Ue.id===H);return fe||{name:"Unknown User",avatar:"https://via.placeholder.com/40"}},U=H=>{p||(l(H.id),h(H.text))},F=async H=>{if(u.trim()===""){alert("メッセージは空にできません。"),l(null);return}await S_(r.id,H,u),l(null),h("")},w=H=>{m(f===H?null:H)},y=async(H,fe)=>{const Ue=t.find(Pe=>Pe.id===H);if(Ue){const Pe=`${Ue.text} ${fe}`;await S_(r.id,H,Pe)}m(null)},v=H=>{V.current=setTimeout(()=>{A(H),N([H])},500)},T=()=>{clearTimeout(V.current),V.current=null},R=()=>{C.length>0?window.confirm(`${C.length}件のメッセージを削除してもよろしいですか？`)&&(s(C),A(null),N([])):p&&window.confirm("このメッセージを削除してもよろしいですか？")&&(i(p),A(null),N([]))},P=H=>{N(fe=>fe.includes(H)?fe.filter(Ue=>Ue!==H):[...fe,H])},I=async H=>{var B;if(t.findIndex(G=>G.id===H)===-1)return;const Ue=n?n.uid:(B=e[0])==null?void 0:B.id;if(!Ue){alert("メッセージを追加するユーザーが選択されていません。");return}const Pe="";await ZT(r.id,Ue,Pe),l(null),h("")};return K.useEffect(()=>{var H;(H=S.current)==null||H.scrollIntoView({behavior:"smooth"})},[t]),K.useEffect(()=>{const H=fe=>{if(p&&_.current&&!_.current.contains(fe.target)){const Ue=fe.target.closest(".delete-icon"),Pe=fe.target.closest(".message-checkbox");!Ue&&!Pe&&(A(null),N([]))}};return document.addEventListener("mousedown",H),document.addEventListener("touchstart",H),()=>{document.removeEventListener("mousedown",H),document.removeEventListener("touchstart",H)}},[p]),M.jsxs("div",{className:"novel-talk-display",ref:_,children:[" ",t.map(H=>{const fe=D(H.senderId),Ue=o===H.id;H.id;const Pe=C.includes(H.id);return M.jsxs("div",{className:`novel-talk-message ${Pe?"selected":""}`,onMouseDown:B=>{p||v(H.id)},onMouseUp:T,onMouseLeave:T,onTouchStart:B=>{p||v(H.id)},onTouchEnd:T,onTouchCancel:T,children:[M.jsxs("div",{className:"novel-talk-avatar-container",children:[M.jsx("img",{src:fe.avatar||"https://via.placeholder.com/40",alt:fe.name,className:"novel-talk-avatar",onClick:()=>w(H.id)}),f===H.id&&M.jsx("div",{className:"emoji-picker",children:E.map((B,G)=>M.jsx("span",{className:"emoji-item",onClick:()=>y(H.id,B),children:B},G))})]}),M.jsxs("div",{className:"novel-talk-content",children:[M.jsx("div",{className:"novel-talk-sender",children:fe.name}),Ue?M.jsxs(M.Fragment,{children:[M.jsx("textarea",{className:"novel-talk-edit-area",value:u,onChange:B=>h(B.target.value),onBlur:()=>F(H.id),autoFocus:!0,maxLength:60}),p&&M.jsx("div",{className:"message-checkbox-container",children:M.jsx("input",{type:"checkbox",className:"message-checkbox",checked:Pe,onChange:()=>P(H.id)})}),M.jsx("button",{className:"add-textbox-button",onClick:()=>I(H.id),children:"+"})]}):M.jsxs("div",{className:"novel-talk-text",onClick:()=>U(H),children:[H.text,p&&M.jsx("div",{className:"message-checkbox-container",children:M.jsx("input",{type:"checkbox",className:"message-checkbox",checked:Pe,onChange:()=>P(H.id)})})]})]}),p&&M.jsx("div",{className:"delete-icon",onClick:R,children:"🗑️"})]},H.id)}),M.jsx("div",{ref:S})]})};const eI=K.createContext(),YV=({children:t})=>{const[e,n]=K.useState("デフォルト");return M.jsx(eI.Provider,{value:{appState:e,setAppState:n},children:t})},tI=()=>K.useContext(eI),JV=({onSendMessage:t,shouldFocus:e})=>{const[n,r]=K.useState(""),{setAppState:i}=tI(),s=K.useRef(null);K.useEffect(()=>{e&&s.current&&s.current.focus()},[e]);const o=u=>{u.key==="Enter"&&!u.ctrlKey&&u.stopPropagation()},l=u=>{u.preventDefault(),n.trim()&&(t(n),r(""))};return M.jsxs("form",{className:"message-input-form",onSubmit:l,children:[M.jsx("input",{ref:s,type:"text",value:n,onChange:u=>r(u.target.value),placeholder:"Type a message...",className:"message-input-field",onFocus:()=>i("テキスト入力中"),onBlur:()=>i("デフォルト"),onKeyDown:o}),M.jsx("button",{type:"submit",className:"message-send-button",children:"Send"})]})};const ZV=({users:t,selectedSender:e,onSelectUser:n})=>M.jsx("div",{className:"user-selection-bar",children:t.map(r=>M.jsx("div",{className:`user-selection-item ${e&&e.id===r.id?"selected":""}`,onClick:()=>n(r),children:M.jsx("img",{src:r.avatar||"https://via.placeholder.com/40",alt:r.name,className:"user-selection-avatar"})},r.id))});const eO=({room:t,onBack:e,currentUser:n,users:r,onSendMessage:i,shouldFocusInput:s})=>{const[o,l]=K.useState([]),[u,h]=K.useState(null),[f,m]=K.useState(!1),[p,A]=K.useState(!1);K.useEffect(()=>{const E=KV(t.id,D=>{l(D)});return()=>E()},[t.id]);const C=E=>{h(E)},N=async E=>{if(!u){alert("Please select a user to send message.");return}await ZT(t.id,u.id,E)},V=async E=>{await A_(t.id,E)},S=async E=>{for(const D of E)await A_(t.id,D)},_=()=>{m(E=>!E)};return M.jsxs("div",{className:"chat-screen",children:[M.jsxs("header",{className:"chat-header",children:[M.jsx("button",{onClick:e,children:"←"}),M.jsx("h2",{children:t.name}),M.jsx("button",{onClick:_,className:"keymap-icon-button",children:"⌨️ "})]}),f?M.jsx(JT,{onClose:_,isInputFocused:p}):M.jsxs(M.Fragment,{children:[M.jsx(XV,{messages:o,users:r,currentUser:u,room:t,onDeleteMessage:V,onDeleteSelectedMessages:S}),M.jsx(ZV,{users:r,selectedSender:u,onSelectUser:C}),M.jsx(JV,{onSendMessage:N,shouldFocus:s})]})]})},tO=({currentUser:t,onSendMessage:e,shouldFocusInput:n})=>{const[r,i]=K.useState(null),[s,o]=K.useState([]),[l,u]=K.useState([]);K.useEffect(()=>{const p=QV(C=>{o(C)}),A=XT(C=>{u(C)});return()=>{p(),A()}},[]);const h=p=>{i(p)},f=()=>{i(null)},m=async p=>{await GV(p)};return M.jsx(M.Fragment,{children:r?M.jsx(eO,{room:r,onBack:f,currentUser:t,users:l,onSendMessage:e,shouldFocusInput:n}):M.jsx(WV,{onRoomSelect:h,rooms:s,onAddRoom:m,users:l})})},nO=({show:t,onClose:e,title:n,message:r})=>t?M.jsx("div",{className:"keymap-overlay",children:M.jsxs("div",{className:"keymap-container",children:[M.jsx("h3",{children:n}),M.jsx("p",{children:r}),M.jsx("div",{className:"keymap-actions",children:M.jsx("button",{onClick:e,className:"keymap-close-button",children:"閉じる"})})]})}):null;const rO=()=>{const{appState:t,setAppState:e}=tI(),[n,r]=K.useState(!1),[i,s]=K.useState(!1),[o,l]=K.useState({title:"",message:""}),[u,h]=K.useState(""),[f,m]=K.useState(!1),p=K.useCallback(()=>r(!0),[]),A=K.useCallback(()=>r(!1),[]),C=K.useCallback(()=>{console.log("Message posted:",u),h("")},[u]),N=K.useCallback(()=>{console.log("Newline action triggered")},[]),V=K.useCallback(()=>{m(!0),setTimeout(()=>m(!1),0)},[]),S={設定画面:p,投稿:C,改行:N,テキスト入力中にステートを移行:V},_=K.useCallback(E=>{const D=S[E];D?D():(l({title:"未定義のアクション",message:`アクション「${E}」は定義されていません。`}),s(!0))},[S]);return K.useEffect(()=>{const E=D=>{const U=localStorage.getItem("userKeyMaps"),w=(U?JSON.parse(U):YT)[t]||[];for(const y of w){const v=y.mainKey.split("+"),T=v.includes("Ctrl"),R=v[v.length-1];if(D.code===R&&D.ctrlKey===T){D.preventDefault(),_(y.action);return}}};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[t,_]),M.jsxs("div",{className:"app-container",children:[M.jsx("div",{className:"chat-manager",children:M.jsx(tO,{currentUser:{uid:"test-user-id",email:"test@example.com"},onSendMessage:C,shouldFocusInput:f})}),n&&M.jsx(JT,{onClose:A}),M.jsx(nO,{show:i,onClose:()=>s(!1),title:o.title,message:o.message})]})};function iO(){return M.jsx(YV,{children:M.jsx(rO,{})})}nh.createRoot(document.getElementById("root")).render(M.jsx(GI.StrictMode,{children:M.jsx(iO,{})}));
