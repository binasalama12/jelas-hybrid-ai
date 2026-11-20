var aE=Object.defineProperty;var BE=(r,e,t)=>e in r?aE(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var G=(r,e,t)=>BE(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const cE=()=>{};var uh={};/**
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
 */const uE={SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const zB=function(r,e){if(!r)throw lE(e)},lE=function(r){return new Error("Firebase Database ("+uE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
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
 */const Gd=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},hE=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],B=r[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|B&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Sc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,B=o?r[s+1]:0,c=s+2<r.length,u=c?r[s+2]:0,h=i>>2,d=(i&3)<<4|B>>4;let p=(B&15)<<2|u>>6,E=u&63;c||(E=64,o||(p=64)),n.push(t[h],t[d],t[p],t[E])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Gd(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):hE(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],B=s<r.length?t[r.charAt(s)]:0;++s;const u=s<r.length?t[r.charAt(s)]:64;++s;const d=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||B==null||u==null||d==null)throw new fE;const p=i<<2|B>>4;if(n.push(p),u!==64){const E=B<<4&240|u>>2;if(n.push(E),d!==64){const _=u<<6&192|d;n.push(_)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class fE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dE=function(r){const e=Gd(r);return Sc.encodeByteArray(e,!0)},Oo=function(r){return dE(r).replace(/\./g,"")},Hd=function(r){try{return Sc.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Pc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const CE=()=>Pc().__FIREBASE_DEFAULTS__,pE=()=>{if(typeof process>"u"||typeof uh>"u")return;const r=uh.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},gE=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Hd(r[1]);return e&&JSON.parse(e)},ia=()=>{try{return cE()||CE()||pE()||gE()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Ud=r=>{var e,t;return(t=(e=ia())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},mE=r=>{const e=Ud(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},jd=()=>{var r;return(r=ia())==null?void 0:r.config},Jd=r=>{var e;return(e=ia())==null?void 0:e[`_${r}`]};/**
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
 */class Ys{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function EE(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Oo(JSON.stringify(t)),Oo(JSON.stringify(o)),""].join(".")}/**
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
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _E(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function DE(){var e;const r=(e=ia())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function IE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TE(){const r=rt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function AE(){return!DE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function oa(){try{return typeof indexedDB=="object"}catch{return!1}}function RE(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const vE="FirebaseError";class bt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=vE,Object.setPrototypeOf(this,bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nr.prototype.create)}}class nr{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?bE(i,n):"Error",B=`${this.serviceName}: ${o} (${s}).`;return new bt(s,B,n)}}function bE(r,e){try{let t=0,n="";for(;t<r.length;){const s=r.indexOf("{$",t);if(s===-1){n+=r.substring(t);break}const i=r.indexOf("}",s+2);if(i===-1){n+=r.substring(t);break}const o=r.substring(s+2,i),B=e[o];n+=r.substring(t,s)+(B!=null?String(B):`<${o}?>`),t=i+1}return n}catch{return r}}function SE(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function jn(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(lh(i)&&lh(o)){if(!jn(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function lh(r){return r!==null&&typeof r=="object"}/**
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
 */function _i(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function PE(r,e){const t=new OE(r,e);return t.subscribe.bind(t)}class OE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");NE(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=BB),s.error===void 0&&(s.error=BB),s.complete===void 0&&(s.complete=BB);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function NE(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function BB(){}/**
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
 */const LE=1e3,FE=2,kE=4*60*60*1e3,ME=.5;function Oc(r,e=LE,t=FE){const n=e*Math.pow(t,r),s=Math.round(ME*n*(Math.random()-.5)*2);return Math.min(kE,n+s)}/**
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
 */function be(r){return r&&r._delegate?r._delegate:r}/**
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
 */function Di(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function qd(r){return(await fetch(r,{credentials:"include"})).ok}class vt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ur="[DEFAULT]";/**
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
 */class xE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Ys;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GE(e))try{this.getOrInitializeService({instanceIdentifier:ur})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ur){return this.instances.has(e)}getOptions(e=ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const B=this.normalizeInstanceIdentifier(i);n===B&&o.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&e(i,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:VE(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=ur){return this.component?this.component.multipleInstances?e:ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function VE(r){return r===ur?void 0:r}function GE(r){return r.instantiationMode==="EAGER"}/**
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
 */class HE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new xE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ue||(ue={}));const UE={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},jE=ue.INFO,JE={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},qE=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=JE[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class as{constructor(e){this.name=e,this._logLevel=jE,this._logHandler=qE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?UE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const KE=(r,e)=>e.some(t=>r instanceof t);let hh,fh;function $E(){return hh||(hh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zE(){return fh||(fh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kd=new WeakMap,WB=new WeakMap,$d=new WeakMap,cB=new WeakMap,Nc=new WeakMap;function WE(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(kn(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Kd.set(t,r)}).catch(()=>{}),Nc.set(e,r),e}function QE(r){if(WB.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});WB.set(r,e)}let QB={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return WB.get(r);if(e==="objectStoreNames")return r.objectStoreNames||$d.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return kn(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function YE(r){QB=r(QB)}function XE(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(uB(this),e,...t);return $d.set(n,e.sort?e.sort():[e]),kn(n)}:zE().includes(r)?function(...e){return r.apply(uB(this),e),kn(Kd.get(this))}:function(...e){return kn(r.apply(uB(this),e))}}function ZE(r){return typeof r=="function"?XE(r):(r instanceof IDBTransaction&&QE(r),KE(r,$E())?new Proxy(r,QB):r)}function kn(r){if(r instanceof IDBRequest)return WE(r);if(cB.has(r))return cB.get(r);const e=ZE(r);return e!==r&&(cB.set(r,e),Nc.set(e,r)),e}const uB=r=>Nc.get(r);function zd(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),B=kn(o);return n&&o.addEventListener("upgradeneeded",c=>{n(kn(o.result),c.oldVersion,c.newVersion,kn(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),B.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),B}const e_=["get","getKey","getAll","getAllKeys","count"],t_=["put","add","delete","clear"],lB=new Map;function dh(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(lB.get(e))return lB.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=t_.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||e_.includes(t)))return;const i=async function(o,...B){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return n&&(u=u.index(B.shift())),(await Promise.all([u[t](...B),s&&c.done]))[0]};return lB.set(e,i),i}YE(r=>({...r,get:(e,t,n)=>dh(e,t)||r.get(e,t,n),has:(e,t)=>!!dh(e,t)||r.has(e,t)}));/**
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
 */class n_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(r_(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function r_(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const YB="@firebase/app",Ch="0.16.2";/**
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
 */const fn=new as("@firebase/app"),s_="@firebase/app-compat",i_="@firebase/analytics-compat",o_="@firebase/analytics",a_="@firebase/app-check-compat",B_="@firebase/app-check",c_="@firebase/auth",u_="@firebase/auth-compat",l_="@firebase/database",h_="@firebase/data-connect",f_="@firebase/database-compat",d_="@firebase/functions",C_="@firebase/functions-compat",p_="@firebase/installations",g_="@firebase/installations-compat",m_="@firebase/messaging",E_="@firebase/messaging-compat",__="@firebase/performance",D_="@firebase/performance-compat",w_="@firebase/remote-config",y_="@firebase/remote-config-compat",I_="@firebase/storage",T_="@firebase/storage-compat",A_="@firebase/firestore",R_="@firebase/ai",v_="@firebase/firestore-compat",b_="firebase",S_="12.19.0";/**
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
 */const XB="[DEFAULT]",P_={[YB]:"fire-core",[s_]:"fire-core-compat",[o_]:"fire-analytics",[i_]:"fire-analytics-compat",[B_]:"fire-app-check",[a_]:"fire-app-check-compat",[c_]:"fire-auth",[u_]:"fire-auth-compat",[l_]:"fire-rtdb",[h_]:"fire-data-connect",[f_]:"fire-rtdb-compat",[d_]:"fire-fn",[C_]:"fire-fn-compat",[p_]:"fire-iid",[g_]:"fire-iid-compat",[m_]:"fire-fcm",[E_]:"fire-fcm-compat",[__]:"fire-perf",[D_]:"fire-perf-compat",[w_]:"fire-rc",[y_]:"fire-rc-compat",[I_]:"fire-gcs",[T_]:"fire-gcs-compat",[A_]:"fire-fst",[v_]:"fire-fst-compat",[R_]:"fire-vertex","fire-js":"fire-js",[b_]:"fire-js-all"};/**
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
 */const No=new Map,O_=new Map,ZB=new Map;function ph(r,e){try{r.container.addComponent(e)}catch(t){fn.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Ft(r){const e=r.name;if(ZB.has(e))return fn.debug(`There were multiple attempts to register component ${e}.`),!1;ZB.set(e,r);for(const t of No.values())ph(t,r);for(const t of O_.values())ph(t,r);return!0}function mn(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Ot(r){return r==null?!1:r.settings!==void 0}/**
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
 */const N_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},an=new nr("app","Firebase",N_);/**
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
 */class L_{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
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
 */const Jn=S_;function Wd(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:XB,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw an.create("bad-app-name",{appName:String(s)});if(t||(t=jd()),!t)throw an.create("no-options");const i=No.get(s);if(i)if(jn(t,i.options)){if(jn(n,i.config))return i;throw an.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(n)})}else throw an.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const o=new HE(s);for(const c of ZB.values())o.addComponent(c);const B=new L_(t,n,o);return No.set(s,B),B}function wi(r=XB){const e=No.get(r);if(!e&&r===XB&&jd())return Wd();if(!e)throw an.create("no-app",{appName:r});return e}function ct(r,e,t){let n=P_[r]??r;t&&(n+=`-${t}`);const s=n.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${n}" with version "${e}":`];s&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fn.warn(o.join(" "));return}Ft(new vt(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const F_="firebase-heartbeat-database",k_=1,Xs="firebase-heartbeat-store";let hB=null;function Qd(){return hB||(hB=zd(F_,k_,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Xs)}catch(t){console.warn(t)}}}}).catch(r=>{throw an.create("idb-open",{originalErrorMessage:r.message})})),hB}async function M_(r){try{const t=(await Qd()).transaction(Xs),n=await t.objectStore(Xs).get(Yd(r));return await t.done,n}catch(e){if(e instanceof bt)fn.warn(e.message);else{const t=an.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fn.warn(t.message)}}}async function gh(r,e){try{const n=(await Qd()).transaction(Xs,"readwrite");await n.objectStore(Xs).put(e,Yd(r)),await n.done}catch(t){if(t instanceof bt)fn.warn(t.message);else{const n=an.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});fn.warn(n.message)}}}function Yd(r){return`${r.name}!${r.options.appId}`}/**
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
 */const x_=1024,V_=30;class G_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new U_(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=mh();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>V_){const o=j_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){fn.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=mh(),{heartbeatsToSend:n,unsentEntries:s}=H_(this._heartbeatsCache.heartbeats),i=Oo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return fn.warn(t),""}}}function mh(){return new Date().toISOString().substring(0,10)}function H_(r,e=x_){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Eh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Eh(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class U_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oa()?RE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await M_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return gh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return gh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Eh(r){return Oo(JSON.stringify({version:2,heartbeats:r})).length}function j_(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
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
 */function J_(r){Ft(new vt("platform-logger",e=>new n_(e),"PRIVATE")),Ft(new vt("heartbeat",e=>new G_(e),"PRIVATE")),ct(YB,Ch,r),ct(YB,Ch,"esm2020"),ct("fire-js","")}/**
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
 */J_("");var _h="@firebase/ai",ec="2.16.0";/**
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
 */const Er="AI",q_="us-central1",K_="global",$_="firebasevertexai.googleapis.com",Zr="v1beta",Dh=ec,z_="gl-js",W_="hybrid",Q_=180*1e3,Y_="gemini-2.5-flash-lite";/**
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
 */class re extends bt{constructor(e,t,n){const s=Er,i=`${s}/${e}`,o=`${s}: ${t} (${i})`;super(e,o),this.code=e,this.customErrorData=n,Error.captureStackTrace&&Error.captureStackTrace(this,re),Object.setPrototypeOf(this,re.prototype),this.toString=()=>o}}/**
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
 */const wh=["user","model","function","system"],Xd={HARM_SEVERITY_UNSUPPORTED:"HARM_SEVERITY_UNSUPPORTED"},Ze={SAFETY:"SAFETY",RECITATION:"RECITATION",BLOCKLIST:"BLOCKLIST",PROHIBITED_CONTENT:"PROHIBITED_CONTENT",SPII:"SPII",MALFORMED_FUNCTION_CALL:"MALFORMED_FUNCTION_CALL",IMAGE_SAFETY:"IMAGE_SAFETY",IMAGE_PROHIBITED_CONTENT:"IMAGE_PROHIBITED_CONTENT",IMAGE_OTHER:"IMAGE_OTHER",NO_IMAGE:"NO_IMAGE",IMAGE_RECITATION:"IMAGE_RECITATION",LANGUAGE:"LANGUAGE",UNEXPECTED_TOOL_CALL:"UNEXPECTED_TOOL_CALL",TOO_MANY_TOOL_CALLS:"TOO_MANY_TOOL_CALLS",MISSING_THOUGHT_SIGNATURE:"MISSING_THOUGHT_SIGNATURE",MALFORMED_RESPONSE:"MALFORMED_RESPONSE"},Tt={PREFER_ON_DEVICE:"prefer_on_device",ONLY_ON_DEVICE:"only_on_device",ONLY_IN_CLOUD:"only_in_cloud",PREFER_IN_CLOUD:"prefer_in_cloud"},Rn={ON_DEVICE:"on_device",IN_CLOUD:"in_cloud"};/**
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
 */const ne={ERROR:"error",REQUEST_ERROR:"request-error",RESPONSE_ERROR:"response-error",FETCH_ERROR:"fetch-error",SESSION_CLOSED:"session-closed",INVALID_CONTENT:"invalid-content",API_NOT_ENABLED:"api-not-enabled",INVALID_SCHEMA:"invalid-schema",NO_API_KEY:"no-api-key",NO_APP_ID:"no-app-id",NO_MODEL:"no-model",NO_PROJECT_ID:"no-project-id",PARSE_FAILED:"parse-failed",UNSUPPORTED:"unsupported"};/**
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
 */const sn={AGENT_PLATFORM:"AGENT_PLATFORM",VERTEX_AI:"VERTEX_AI",GOOGLE_AI:"GOOGLE_AI"};/**
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
 */class Lc{constructor(e){this.backendType=e}}class aa extends Lc{constructor(){super(sn.GOOGLE_AI)}_getModelPath(e,t){return`/${Zr}/projects/${e}/${t}`}_getTemplatePath(e,t){return`/${Zr}/projects/${e}/templates/${t}`}}class Fc extends Lc{constructor(e){super(sn.VERTEX_AI),this.location=q_,e&&(this.location=e)}_getModelPath(e,t){return`/${Zr}/projects/${e}/locations/${this.location}/${t}`}_getTemplatePath(e,t){return`/${Zr}/projects/${e}/locations/${this.location}/templates/${t}`}}class kc extends Lc{constructor(e){super(sn.AGENT_PLATFORM),this.location=K_,e&&(this.location=e)}_getModelPath(e,t){return`/${Zr}/projects/${e}/locations/${this.location}/${t}`}_getTemplatePath(e,t){return`/${Zr}/projects/${e}/locations/${this.location}/templates/${t}`}}/**
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
 */function X_(r){if(r instanceof aa)return`${Er}/googleai`;if(r instanceof Fc)return`${Er}/vertexai/${r.location}`;if(r instanceof kc)return`${Er}/agentplatform/${r.location}`;throw new re(ne.ERROR,`Invalid backend: ${JSON.stringify(r.backendType)}`)}function Z_(r){const e=r.split("/");if(e[0]!==Er)throw new re(ne.ERROR,`Invalid instance identifier, unknown prefix '${e[0]}'`);switch(e[1]){case"vertexai":const n=e[2];if(!n)throw new re(ne.ERROR,`Invalid instance identifier, unknown location '${r}'`);return new Fc(n);case"agentplatform":const s=e[2];if(!s)throw new re(ne.ERROR,`Invalid instance identifier, unknown location '${r}'`);return new kc(s);case"googleai":return new aa;default:throw new re(ne.ERROR,`Invalid instance identifier string: '${r}'`)}}/**
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
 */const je=new as("@firebase/vertexai");var on;(function(r){r.UNAVAILABLE="unavailable",r.DOWNLOADABLE="downloadable",r.DOWNLOADING="downloading",r.AVAILABLE="available"})(on||(on={}));/**
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
 */const Zd={type:"text",languages:["en"]},fB=[Zd,{type:"image"}],dB=[Zd];class Mt{constructor(e,t,n){this.languageModelProvider=e,this.mode=t,this.downloadPromise=null,this.onDeviceParams={createOptions:{expectedInputs:fB,expectedOutputs:dB}},n&&(this.onDeviceParams=n,this.onDeviceParams.createOptions?(this.onDeviceParams.createOptions.expectedInputs||(this.onDeviceParams.createOptions.expectedInputs=fB),this.onDeviceParams.createOptions.expectedOutputs||(this.onDeviceParams.createOptions.expectedOutputs=dB)):this.onDeviceParams.createOptions={expectedInputs:fB,expectedOutputs:dB})}async isAvailable(e){var n;if(!this.mode)return je.debug("On-device inference unavailable because mode is undefined."),!1;if(this.mode===Tt.ONLY_IN_CLOUD)return je.debug('On-device inference unavailable because mode is "only_in_cloud".'),!1;const t=await((n=this.languageModelProvider)==null?void 0:n.availability(this.onDeviceParams.createOptions));if(this.mode===Tt.ONLY_ON_DEVICE){if(t===on.UNAVAILABLE)throw new re(ne.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");if(t===on.DOWNLOADABLE||t===on.DOWNLOADING){je.debug("Waiting for download of LanguageModel to complete.");try{await this.downloadPromise}catch(s){throw new re(ne.ERROR,s.message)}return!0}return!0}return t!==on.AVAILABLE?(je.debug(`On-device inference unavailable because availability is "${t}".`),!1):Mt.isOnDeviceRequest(e)?!0:(je.debug("On-device inference unavailable because request is incompatible."),!1)}async generateContent(e){const t=await this.createSession(),n=await Promise.all(e.contents.map(Mt.toLanguageModelMessage)),s=await t.prompt(n,this.onDeviceParams.promptOptions);return Mt.toResponse(s)}async generateContentStream(e){const t=await this.createSession(),n=await Promise.all(e.contents.map(Mt.toLanguageModelMessage)),s=t.promptStreaming(n,this.onDeviceParams.promptOptions);return Mt.toStreamResponse(s)}async countTokens(e){throw new re(ne.REQUEST_ERROR,"Count Tokens is not yet available for on-device model.")}static isOnDeviceRequest(e){if(e.contents.length===0)return je.debug("Empty prompt rejected for on-device inference."),!1;for(const t of e.contents){if(t.parts.some(n=>"functionResponse"in n))return je.debug("Content with a function response part rejected for on-device inference."),!1;for(const n of t.parts)if(n.inlineData&&Mt.SUPPORTED_MIME_TYPES.indexOf(n.inlineData.mimeType)===-1)return je.debug(`Unsupported mime type "${n.inlineData.mimeType}" rejected for on-device inference.`),!1}return!0}async downloadIfAvailable(e){var n;const t=await((n=this.languageModelProvider)==null?void 0:n.availability(this.onDeviceParams.createOptions));return(t===on.DOWNLOADABLE||t===on.DOWNLOADING)&&this.download(e),t}download(e){var n;if(this.downloadPromise)return;const t={...this.onDeviceParams.createOptions};t&&!t.monitor&&e&&(t.monitor=s=>{s.addEventListener("downloadprogress",i=>{e(i.loaded)})}),this.downloadPromise=(n=this.languageModelProvider)==null?void 0:n.create(t).finally(()=>{this.downloadPromise=null})}static async toLanguageModelMessage(e){const t=await Promise.all(e.parts.map(Mt.toLanguageModelMessageContent));return{role:Mt.toLanguageModelMessageRole(e.role),content:t}}static async toLanguageModelMessageContent(e){if(e.text)return{type:"text",value:e.text};if(e.inlineData){const n=await(await fetch(`data:${e.inlineData.mimeType};base64,${e.inlineData.data}`)).blob();return{type:"image",value:await createImageBitmap(n)}}throw new re(ne.REQUEST_ERROR,"Processing of this Part type is not currently supported.")}static toLanguageModelMessageRole(e){return e==="model"?"assistant":"user"}async createSession(){if(!this.languageModelProvider)throw new re(ne.UNSUPPORTED,"Chrome AI requested for unsupported browser version.");const e=await this.languageModelProvider.create(this.onDeviceParams.createOptions);return this.oldSession&&this.oldSession.destroy(),this.oldSession=e,e}static toResponse(e){return{json:async()=>({candidates:[{content:{parts:[{text:e}]}}]})}}static toStreamResponse(e){const t=new TextEncoder;return{body:e.pipeThrough(new TransformStream({transform(n,s){const i=JSON.stringify({candidates:[{content:{role:"model",parts:[{text:n}]}}]});s.enqueue(t.encode(`data: ${i}

`))}}))}}}Mt.SUPPORTED_MIME_TYPES=["image/jpeg","image/png"];function eD(r,e,t){const s=(e||Pc()).LanguageModel;if(s&&r)return new Mt(s,r,t)}/**
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
 */class tD{constructor(e,t,n,s,i){this.app=e,this.backend=t,this.chromeAdapterFactory=i;const o=s==null?void 0:s.getImmediate({optional:!0}),B=n==null?void 0:n.getImmediate({optional:!0});this.auth=B||null,this.appCheck=o||null,t instanceof Fc||t instanceof kc?this.location=t.location:this.location=""}_delete(){return Promise.resolve()}set options(e){this._options=e}get options(){return this._options}}/**
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
 */function nD(r,{instanceIdentifier:e}){if(!e)throw new re(ne.ERROR,"AIService instance identifier is undefined.");const t=Z_(e),n=r.getProvider("app").getImmediate(),s=r.getProvider("auth-internal"),i=r.getProvider("app-check-internal");return new tD(n,t,s,i,eD)}/**
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
 */function rD(r){var t,n,s,i,o,B,c;if((n=(t=r.app)==null?void 0:t.options)!=null&&n.apiKey)if((i=(s=r.app)==null?void 0:s.options)!=null&&i.projectId){if(!((B=(o=r.app)==null?void 0:o.options)!=null&&B.appId))throw new re(ne.NO_APP_ID,'The "appId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid app ID.')}else throw new re(ne.NO_PROJECT_ID,'The "projectId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid project ID.');else throw new re(ne.NO_API_KEY,'The "apiKey" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid API key.');const e={apiKey:r.app.options.apiKey,project:r.app.options.projectId,appId:r.app.options.appId,automaticDataCollectionEnabled:r.app.automaticDataCollectionEnabled,location:r.location,backend:r.backend};if(Ot(r.app)&&r.app.settings.appCheckToken){const u=r.app.settings.appCheckToken;e.getAppCheckToken=()=>Promise.resolve({token:u})}else r.appCheck&&((c=r.options)!=null&&c.useLimitedUseAppCheckTokens?e.getAppCheckToken=()=>r.appCheck.getLimitedUseToken():e.getAppCheckToken=()=>r.appCheck.getToken());return r.auth&&(e.getAuthToken=()=>r.auth.getToken()),e}/**
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
 */class Hs{constructor(e,t){this._apiSettings=rD(e),this.model=Hs.normalizeModelName(t,this._apiSettings.backend.backendType)}static normalizeModelName(e,t){return t===sn.GOOGLE_AI?Hs.normalizeGoogleAIModelName(e):Hs.normalizeVertexAIModelName(e)}static normalizeGoogleAIModelName(e){return`models/${e}`}static normalizeVertexAIModelName(e){let t;return e.includes("/")?e.startsWith("models/")?t=`publishers/google/${e}`:t=e:t=`publishers/google/models/${e}`,t}}/**
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
 */const sD="Timeout has expired.",CB="AbortError";class iD{constructor(e){this.params=e}toString(){const e=new URL(this.baseUrl);return e.pathname=this.pathname,e.search=this.queryParams.toString(),e.toString()}get pathname(){return this.params.templateId?`${this.params.apiSettings.backend._getTemplatePath(this.params.apiSettings.project,this.params.templateId)}:${this.params.task}`:`${this.params.apiSettings.backend._getModelPath(this.params.apiSettings.project,this.params.model)}:${this.params.task}`}get baseUrl(){var e;return((e=this.params.singleRequestOptions)==null?void 0:e.baseUrl)??`https://${$_}`}get queryParams(){const e=new URLSearchParams;return this.params.stream&&e.set("alt","sse"),e}}function oD(r){const e=[];return e.push(`${z_}/${Dh}`),e.push(`fire/${Dh}`),(r.params.apiSettings.inferenceMode===Tt.PREFER_ON_DEVICE||r.params.apiSettings.inferenceMode===Tt.PREFER_IN_CLOUD)&&e.push(W_),e.join(" ")}async function aD(r){const e=new Headers;if(e.append("Content-Type","application/json"),e.append("x-goog-api-client",oD(r)),e.append("x-goog-api-key",r.params.apiSettings.apiKey),r.params.apiSettings.automaticDataCollectionEnabled&&e.append("X-Firebase-Appid",r.params.apiSettings.appId),r.params.apiSettings.getAppCheckToken){const t=await r.params.apiSettings.getAppCheckToken();t&&(e.append("X-Firebase-AppCheck",t.token),t.error&&je.warn(`Unable to obtain a valid App Check token: ${t.error.message}`))}if(r.params.apiSettings.getAuthToken){const t=await r.params.apiSettings.getAuthToken();t&&e.append("Authorization",`Firebase ${t.accessToken}`)}return e}async function Mc(r,e){var u,h;const t=new iD(r);let n;const s=(u=r.singleRequestOptions)==null?void 0:u.signal,i=((h=r.singleRequestOptions)==null?void 0:h.timeout)!=null&&r.singleRequestOptions.timeout>=0?r.singleRequestOptions.timeout:Q_,o=new AbortController,B=setTimeout(()=>{o.abort(new DOMException(sD,CB)),je.debug(`Aborting request to ${t} due to timeout (${i}ms)`)},i),c=AbortSignal.any(s?[s,o.signal]:[o.signal]);if(s&&s.aborted)throw clearTimeout(B),new DOMException(s.reason??"Aborted externally before fetch",CB);try{const d={method:"POST",headers:await aD(t),signal:c,body:e};if(n=await fetch(t.toString(),d),!n.ok){let p="",E;try{const _=await n.json();p=_.error.message,_.error.details&&(p+=` ${JSON.stringify(_.error.details)}`,E=_.error.details)}catch{}throw n.status===403&&E&&E.some(_=>_.reason==="SERVICE_DISABLED")&&E.some(_=>{var S,L;return(L=(S=_.links)==null?void 0:S[0])==null?void 0:L.description.includes("Google developers console API activation")})?new re(ne.API_NOT_ENABLED,`The Firebase AI SDK requires the Firebase AI API ('firebasevertexai.googleapis.com') to be enabled in your Firebase project. Enable this API by visiting the Firebase Console at https://console.firebase.google.com/project/${t.params.apiSettings.project}/ailogic/ and clicking "Get started". If you enabled this API recently, wait a few minutes for the action to propagate to our systems and then retry.`,{status:n.status,statusText:n.statusText,errorDetails:E}):new re(ne.FETCH_ERROR,`Error fetching from ${t}: [${n.status} ${n.statusText}] ${p}`,{status:n.status,statusText:n.statusText,errorDetails:E})}}catch(d){let p=d;throw d.code!==ne.FETCH_ERROR&&d.code!==ne.API_NOT_ENABLED&&d instanceof Error&&d.name!==CB&&(p=new re(ne.ERROR,`Error fetching from ${t.toString()}: ${d.message}`),p.stack=d.stack),p}finally{clearTimeout(B)}return n}/**
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
 */function Zi(r){if(r.candidates&&r.candidates.length>0){if(r.candidates.length>1&&je.warn(`This response had ${r.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),tC(r.candidates[0]))throw new re(ne.RESPONSE_ERROR,`Response error: ${fr(r)}. Response body stored in error.response`,{response:r});return!0}else return!1}function Lo(r,e=Rn.IN_CLOUD){r.candidates&&!r.candidates[0].hasOwnProperty("index")&&(r.candidates[0].index=0);const t=BD(r);return t.inferenceSource=e,t}function BD(r){return r.text=()=>{if(Zi(r))return yh(r,e=>!e.thought);if(r.promptFeedback)throw new re(ne.RESPONSE_ERROR,`Text not available. ${fr(r)}`,{response:r});return""},r.thoughtSummary=()=>{if(Zi(r)){const e=yh(r,t=>!!t.thought);return e===""?void 0:e}else if(r.promptFeedback)throw new re(ne.RESPONSE_ERROR,`Thought summary not available. ${fr(r)}`,{response:r})},r.inlineDataParts=()=>{if(Zi(r))return cD(r);if(r.promptFeedback)throw new re(ne.RESPONSE_ERROR,`Data not available. ${fr(r)}`,{response:r})},r.functionCalls=()=>{if(Zi(r))return eC(r);if(r.promptFeedback)throw new re(ne.RESPONSE_ERROR,`Function call not available. ${fr(r)}`,{response:r})},r}function yh(r,e){var n,s,i,o;const t=[];if((s=(n=r.candidates)==null?void 0:n[0].content)!=null&&s.parts)for(const B of(o=(i=r.candidates)==null?void 0:i[0].content)==null?void 0:o.parts)B.text&&e(B)&&t.push(B.text);return t.length>0?t.join(""):""}function eC(r){var t,n,s,i;if(!r)return;const e=[];if((n=(t=r.candidates)==null?void 0:t[0].content)!=null&&n.parts)for(const o of(i=(s=r.candidates)==null?void 0:s[0].content)==null?void 0:i.parts)o.functionCall&&e.push(o.functionCall);if(e.length>0)return e}function cD(r){var t,n,s,i;const e=[];if((n=(t=r.candidates)==null?void 0:t[0].content)!=null&&n.parts)for(const o of(i=(s=r.candidates)==null?void 0:s[0].content)==null?void 0:i.parts)o.inlineData&&e.push(o);if(e.length>0)return e}const uD=[Ze.RECITATION,Ze.SAFETY,Ze.BLOCKLIST,Ze.PROHIBITED_CONTENT,Ze.SPII,Ze.MALFORMED_FUNCTION_CALL,Ze.IMAGE_SAFETY,Ze.IMAGE_PROHIBITED_CONTENT,Ze.IMAGE_OTHER,Ze.NO_IMAGE,Ze.IMAGE_RECITATION,Ze.LANGUAGE,Ze.UNEXPECTED_TOOL_CALL,Ze.TOO_MANY_TOOL_CALLS,Ze.MISSING_THOUGHT_SIGNATURE,Ze.MALFORMED_RESPONSE];function tC(r){return!!r.finishReason&&uD.some(e=>e===r.finishReason)}function fr(r){var t,n,s;let e="";if((!r.candidates||r.candidates.length===0)&&r.promptFeedback)e+="Response was blocked",(t=r.promptFeedback)!=null&&t.blockReason&&(e+=` due to ${r.promptFeedback.blockReason}`),(n=r.promptFeedback)!=null&&n.blockReasonMessage&&(e+=`: ${r.promptFeedback.blockReasonMessage}`);else if((s=r.candidates)!=null&&s[0]){const i=r.candidates[0];tC(i)&&(e+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(e+=`: ${i.finishMessage}`))}return e}/**
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
 */function nC(r){var e,t;if((e=r.safetySettings)==null||e.forEach(n=>{if(n.method)throw new re(ne.UNSUPPORTED,"SafetySetting.method is not supported in the the Gemini Developer API. Please remove this property.")}),(t=r.generationConfig)!=null&&t.topK){const n=Math.round(r.generationConfig.topK);n!==r.generationConfig.topK&&(je.warn("topK in GenerationConfig has been rounded to the nearest integer to match the format for requests to the Gemini Developer API."),r.generationConfig.topK=n)}return r}function xc(r){return{candidates:r.candidates?hD(r.candidates):void 0,prompt:r.promptFeedback?fD(r.promptFeedback):void 0,usageMetadata:r.usageMetadata}}function lD(r,e){return{generateContentRequest:{model:e,...r}}}function hD(r){const e=[];let t;return e&&r.forEach(n=>{var o,B;let s;if(n.citationMetadata&&(s={citations:n.citationMetadata.citationSources}),n.safetyRatings&&(t=n.safetyRatings.map(c=>({...c,severity:c.severity??Xd.HARM_SEVERITY_UNSUPPORTED,probabilityScore:c.probabilityScore??0,severityScore:c.severityScore??0}))),(B=(o=n.content)==null?void 0:o.parts)!=null&&B.some(c=>c==null?void 0:c.videoMetadata))throw new re(ne.UNSUPPORTED,"Part.videoMetadata is not supported in the Gemini Developer API. Please remove this property.");const i={index:n.index,content:n.content,finishReason:n.finishReason,finishMessage:n.finishMessage,safetyRatings:t,citationMetadata:s,groundingMetadata:n.groundingMetadata,urlContextMetadata:n.urlContextMetadata};e.push(i)}),e}function fD(r){const e=[];return r.safetyRatings.forEach(n=>{e.push({category:n.category,probability:n.probability,severity:n.severity??Xd.HARM_SEVERITY_UNSUPPORTED,probabilityScore:n.probabilityScore??0,severityScore:n.severityScore??0,blocked:n.blocked})}),{blockReason:r.blockReason,safetyRatings:e,blockReasonMessage:r.blockReasonMessage}}/**
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
 */const Ih=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function dD(r,e,t){const n=r.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),s=mD(n),[i,o]=s.tee(),{response:B,firstValue:c}=await CD(o,e,t);return{stream:gD(i,e,t),response:B,firstValue:c}}async function CD(r,e,t){const[n,s]=r.tee(),i=n.getReader(),{value:o}=await i.read();return{firstValue:o,response:pD(s,e,t)}}async function pD(r,e,t){const n=[],s=r.getReader();for(;;){const{done:i,value:o}=await s.read();if(i){let B=ED(n);return e.backend.backendType===sn.GOOGLE_AI&&(B=xc(B)),Lo(B,t)}n.push(o)}}async function*gD(r,e,t){var s,i;const n=r.getReader();for(;;){const{value:o,done:B}=await n.read();if(B)break;let c;e.backend.backendType===sn.GOOGLE_AI?c=Lo(xc(o),t):c=Lo(o,t);const u=(s=c.candidates)==null?void 0:s[0];!((i=u==null?void 0:u.content)!=null&&i.parts)&&!(u!=null&&u.finishReason)&&!(u!=null&&u.citationMetadata)&&!(u!=null&&u.urlContextMetadata)||(yield c)}}function mD(r){const e=r.getReader();return new ReadableStream({start(n){let s="";return i();function i(){return e.read().then(({value:o,done:B})=>{if(B){if(s.trim()){n.error(new re(ne.PARSE_FAILED,"Failed to parse stream"));return}n.close();return}s+=o;let c=s.match(Ih),u;for(;c;){try{u=JSON.parse(c[1])}catch{n.error(new re(ne.PARSE_FAILED,`Error parsing JSON response: "${c[1]}`));return}n.enqueue(u),s=s.substring(c[0].length),c=s.match(Ih)}return i()})}}})}function ED(r){const e=r[r.length-1],t={promptFeedback:e==null?void 0:e.promptFeedback};for(const n of r)if(n.candidates)for(const s of n.candidates){const i=s.index||0;t.candidates||(t.candidates=[]),t.candidates[i]||(t.candidates[i]={index:s.index}),t.candidates[i].citationMetadata=s.citationMetadata,t.candidates[i].finishReason=s.finishReason,t.candidates[i].finishMessage=s.finishMessage,t.candidates[i].safetyRatings=s.safetyRatings,t.candidates[i].groundingMetadata=s.groundingMetadata;const o=s.urlContextMetadata;if(typeof o=="object"&&o!==null&&Object.keys(o).length>0&&(t.candidates[i].urlContextMetadata=o),s.content){if(!s.content.parts)continue;t.candidates[i].content||(t.candidates[i].content={role:s.content.role||"user",parts:[]});for(const B of s.content.parts){const c={...B};B.text!==""&&Object.keys(c).length>0&&t.candidates[i].content.parts.push(c)}}}return t}/**
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
 */const _D=[ne.FETCH_ERROR,ne.ERROR,ne.API_NOT_ENABLED];async function rC(r,e,t,n){if(!e)return{response:await n(),inferenceSource:Rn.IN_CLOUD};switch(e.mode){case Tt.ONLY_ON_DEVICE:if(await e.isAvailable(r))return{response:await t(),inferenceSource:Rn.ON_DEVICE};throw new re(ne.UNSUPPORTED,"Inference mode is ONLY_ON_DEVICE, but an on-device model is not available.");case Tt.ONLY_IN_CLOUD:return{response:await n(),inferenceSource:Rn.IN_CLOUD};case Tt.PREFER_IN_CLOUD:try{return{response:await n(),inferenceSource:Rn.IN_CLOUD}}catch(s){if(s instanceof re&&_D.includes(s.code)&&await e.isAvailable(r))return{response:await t(),inferenceSource:Rn.ON_DEVICE};throw s}case Tt.PREFER_ON_DEVICE:return await e.isAvailable(r)?{response:await t(),inferenceSource:Rn.ON_DEVICE}:{response:await n(),inferenceSource:Rn.IN_CLOUD};default:throw new re(ne.ERROR,`Unexpected infererence mode: ${e.mode}`)}}/**
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
 */async function DD(r,e,t,n){return r.backend.backendType===sn.GOOGLE_AI&&(t=nC(t)),Mc({task:"streamGenerateContent",model:e,apiSettings:r,stream:!0,singleRequestOptions:n},JSON.stringify(t))}async function sC(r,e,t,n,s){const i=await rC(t,n,()=>n.generateContentStream(t),()=>DD(r,e,t,s));return dD(i.response,r,i.inferenceSource)}async function wD(r,e,t,n){return r.backend.backendType===sn.GOOGLE_AI&&(t=nC(t)),Mc({model:e,task:"generateContent",apiSettings:r,stream:!1,singleRequestOptions:n},JSON.stringify(t))}async function iC(r,e,t,n,s){const i=await rC(t,n,()=>n.generateContent(t),()=>wD(r,e,t,s)),o=await yD(i.response,r);return{response:Lo(o,i.inferenceSource)}}async function yD(r,e){const t=await r.json();return e.backend.backendType===sn.GOOGLE_AI?xc(t):t}/**
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
 */function Vc(r){if(r!=null){if(typeof r=="string")return{role:"system",parts:[{text:r}]};if(r.text)return{role:"system",parts:[r]};if(r.parts)return r.role?r:{role:"system",parts:r.parts}}}function Ms(r){let e=[];if(typeof r=="string")e=[{text:r}];else for(const t of r)typeof t=="string"?e.push({text:t}):e.push(t);return ID(e)}function ID(r){const e={role:"user",parts:[]};let t=!1,n=!1;for(const s of r)"functionResponse"in s?n=!0:t=!0,e.parts.push(s);if(t&&n)throw new re(ne.INVALID_CONTENT,"Within a single message, FunctionResponse cannot be mixed with other type of Part in the request for sending chat message.");if(!t&&!n)throw new re(ne.INVALID_CONTENT,"No Content is provided for sending chat message.");return e}function pB(r){let e;return r.contents?e=r:e={contents:[Ms(r)]},r.systemInstruction&&(e.systemInstruction=Vc(r.systemInstruction)),e}/**
 * @license
 * Copyright 2026 Google LLC
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
 */const Th="SILENT_ERROR",Ah=10;class TD{constructor(e,t,n){this.params=t,this.requestOptions=n,this._history=[],this._sendPromise=Promise.resolve(),this._apiSettings=e}async getHistory(){return await this._sendPromise,this._history}async _sendMessage(e,t){let n={};await this._sendPromise;const s=[];return this._sendPromise=this._sendPromise.then(async()=>{var c,u,h;let i,o=0;const B=((c=this.requestOptions)==null?void 0:c.maxSequentialFunctionCalls)??Ah;do{let d;if(i){o++;const _=await this._callFunctionsAsNeeded(i);d=Ms(_)}else d=Ms(e);const p=this._formatRequest(d,[...s]);s.push(d);const E=await this._callGenerateContent(p,t);if(E)if(n=E,i=this._getCallableFunctionCalls(E.response),E.response.candidates&&E.response.candidates.length>0){const _={parts:((u=E.response.candidates)==null?void 0:u[0].content.parts)||[],role:((h=E.response.candidates)==null?void 0:h[0].content.role)||"model"};s.push(_)}else{const _=fr(E.response);_&&je.warn(`sendMessage() was unsuccessful. ${_}. Inspect response object for details.`)}else i=void 0}while(i&&o<B);i&&o>=B&&je.warn(`Automatic function calling exceeded the limit of ${B} function calls. Returning last model response.`)}),await this._sendPromise,this._history=this._history.concat(s),n}async _sendMessageStream(e,t){await this._sendPromise;const n=[],i=(async()=>{var h;let o,B=0;const c=((h=this.requestOptions)==null?void 0:h.maxSequentialFunctionCalls)??Ah;let u;do{let d;if(o){B++;const E=await this._callFunctionsAsNeeded(o);d=Ms(E)}else d=Ms(e);const p=this._formatRequest(d,[...n]);if(n.push(d),u=await this._callGenerateContentStream(p,t),o=this._getCallableFunctionCalls(u.firstValue),o&&u.firstValue&&u.firstValue.candidates&&u.firstValue.candidates.length>0){const E={...u.firstValue.candidates[0].content};E.role||(E.role="model"),n.push(E)}}while(o&&B<c);return o&&B>=c&&je.warn(`Automatic function calling exceeded the limit of ${c} function calls. Returning last model response.`),{stream:u.stream,response:u.response}})();return this._sendPromise=this._sendPromise.then(async()=>i).catch(o=>{throw new Error(Th)}).then(o=>o.response).then(o=>{if(o.candidates&&o.candidates.length>0){this._history=this._history.concat(n);const B={...o.candidates[0].content};B.role||(B.role="model"),this._history.push(B)}else{const B=fr(o);B&&je.warn(`sendMessageStream() was unsuccessful. ${B}. Inspect response object for details.`)}}).catch(o=>{o.message!==Th&&o.name!=="AbortError"&&je.error(o)}),i}_getCallableFunctionCalls(e){var s,i,o;const t=(i=(s=this.params)==null?void 0:s.tools)==null?void 0:i.find(B=>B.functionDeclarations);if(!(t!=null&&t.functionDeclarations))return;const n=eC(e);if(n){for(const B of n)if(!((o=t.functionDeclarations)==null?void 0:o.some(u=>u.name===B.name&&typeof u.functionReference=="function")))return;return n}}async _callFunctionsAsNeeded(e){var i,o;const t=[],n=[],s=(o=(i=this.params)==null?void 0:i.tools)==null?void 0:o.find(B=>B.functionDeclarations);if(s&&s.functionDeclarations){for(const c of e){const u=s.functionDeclarations.find(h=>h.name===c.name);if(u!=null&&u.functionReference){const h=Promise.resolve(u.functionReference(c.args)).catch(d=>{const p=new re(ne.ERROR,`Error in user-defined function "${u.name}": ${d.message}`);throw p.stack=d.stack,p});t.push({name:c.name,id:c.id,results:h}),n.push(h)}}await Promise.all(n);const B=[];for(const{name:c,id:u,results:h}of t){const d={name:c,response:await h};u&&(d.id=u),B.push({functionResponse:d})}return B}else throw new re(ne.REQUEST_ERROR,'No function declarations were provided in "tools".')}}/**
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
 */const Rh=["text","inlineData","functionCall","functionResponse","thought","thoughtSignature"],AD={user:["text","inlineData","functionResponse"],function:["functionResponse"],model:["text","functionCall","thought","thoughtSignature"],system:["text"]},vh={user:["model"],function:["model"],model:["user","function"],system:[]};function RD(r){let e=null;for(const t of r){const{role:n,parts:s}=t;if(!e&&n!=="user")throw new re(ne.INVALID_CONTENT,`First Content should be with role 'user', got ${n}`);if(!wh.includes(n))throw new re(ne.INVALID_CONTENT,`Each item should include role field. Got ${n} but valid roles are: ${JSON.stringify(wh)}`);if(!Array.isArray(s))throw new re(ne.INVALID_CONTENT,"Content should have 'parts' property with an array of Parts");if(s.length===0)throw new re(ne.INVALID_CONTENT,"Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,thought:0,thoughtSignature:0,executableCode:0,codeExecutionResult:0};for(const B of s)for(const c of Rh)c in B&&(i[c]+=1);const o=AD[n];for(const B of Rh)if(!o.includes(B)&&i[B]>0)throw new re(ne.INVALID_CONTENT,`Content with role '${n}' can't contain '${B}' part`);if(e&&!vh[n].includes(e.role))throw new re(ne.INVALID_CONTENT,`Content with role '${n}' can't follow '${e.role}'. Valid previous roles: ${JSON.stringify(vh)}`);e=t}}/**
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
 */class vD extends TD{constructor(e,t,n,s,i){var o;super(e,s,i),this.model=t,this.chromeAdapter=n,this.params=s,this.requestOptions=i,s!=null&&s.history&&(RD(s.history),this._history=s.history),((o=this.params)==null?void 0:o.systemInstruction)!=null&&(this.params={...this.params,systemInstruction:Vc(this.params.systemInstruction)})}_formatRequest(e,t){var n,s,i,o,B;return{safetySettings:(n=this.params)==null?void 0:n.safetySettings,generationConfig:(s=this.params)==null?void 0:s.generationConfig,tools:(i=this.params)==null?void 0:i.tools,toolConfig:(o=this.params)==null?void 0:o.toolConfig,systemInstruction:(B=this.params)==null?void 0:B.systemInstruction,contents:[...this._history,...t,e]}}_callGenerateContent(e,t){return iC(this._apiSettings,this.model,e,this.chromeAdapter,{...this.requestOptions,...t})}_callGenerateContentStream(e,t){return sC(this._apiSettings,this.model,e,this.chromeAdapter,{...this.requestOptions,...t})}async sendMessage(e,t){return this._sendMessage(e,t)}async sendMessageStream(e,t){return this._sendMessageStream(e,t)}}/**
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
 */async function bD(r,e,t,n){let s="";if(r.backend.backendType===sn.GOOGLE_AI){const o=lD(t,e);s=JSON.stringify(o)}else s=JSON.stringify(t);return(await Mc({model:e,task:"countTokens",apiSettings:r,stream:!1,singleRequestOptions:n},s)).json()}async function SD(r,e,t,n,s){if((n==null?void 0:n.mode)===Tt.ONLY_ON_DEVICE)throw new re(ne.UNSUPPORTED,"countTokens() is not supported for on-device models.");return bD(r,e,t,s)}/**
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
 */class PD extends Hs{constructor(e,t,n,s){super(e,t.model),this.chromeAdapter=s,this.generationConfig=t.generationConfig||{},OD(this.generationConfig),this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=Vc(t.systemInstruction),this.requestOptions=n||{}}async initializeDeviceModel(e){if(!this.chromeAdapter||this.chromeAdapter.mode===Tt.ONLY_IN_CLOUD)return;if(await this.chromeAdapter.downloadIfAvailable(e)===on.UNAVAILABLE){const n=new re(ne.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");if(this.chromeAdapter.mode===Tt.ONLY_ON_DEVICE)throw n;je.debug(n.message)}await this.chromeAdapter.downloadPromise}async generateContent(e,t){const n=pB(e);return iC(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...n},this.chromeAdapter,{...this.requestOptions,...t})}async generateContentStream(e,t){const n=pB(e),{stream:s,response:i}=await sC(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...n},this.chromeAdapter,{...this.requestOptions,...t});return{stream:s,response:i}}startChat(e){return new vD(this._apiSettings,this.model,this.chromeAdapter,{tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,generationConfig:this.generationConfig,safetySettings:this.safetySettings,...e},this.requestOptions)}async countTokens(e,t){const n=pB(e);return SD(this._apiSettings,this.model,n,this.chromeAdapter,{...this.requestOptions,...t})}}function OD(r){var e,t;if(((e=r.thinkingConfig)==null?void 0:e.thinkingBudget)!=null&&((t=r.thinkingConfig)!=null&&t.thinkingLevel))throw new re(ne.UNSUPPORTED,"Cannot set both thinkingBudget and thinkingLevel in a config.");if(r.responseSchema!=null&&r.responseJsonSchema!=null)throw new re(ne.UNSUPPORTED,"Cannot set both responseSchema and responseJsonSchema in a config.");if((r.responseSchema!=null||r.responseJsonSchema!=null)&&r.responseMimeType!=="application/json"&&r.responseMimeType!=="text/x.enum")throw new re(ne.UNSUPPORTED,'responseMimeType must be set to "application/json" or "text/x.enum" if responseSchema or responseJsonSchema are set.')}/**
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
 */function ND(r=wi(),e){r=be(r);const t=mn(r,Er),n=(e==null?void 0:e.backend)??new aa,s={useLimitedUseAppCheckTokens:(e==null?void 0:e.useLimitedUseAppCheckTokens)??!1},i=X_(n),o=t.getImmediate({identifier:i});return o.options=s,o}const LD=["mode","onDeviceParams","inCloudParams"];function gB(r,e,t){var B;const n=e;let s;if(n.mode){for(const c of Object.keys(e))LD.includes(c)||je.warn(`When a hybrid inference mode is specified (mode is currently set to ${n.mode}), "${c}" cannot be configured at the top level. Configuration for in-cloud and on-device must be done separately in inCloudParams and onDeviceParams. Configuration values set outside of inCloudParams and onDeviceParams will be ignored.`);s=n.inCloudParams||{model:Y_}}else s=e;if(!s.model)throw new re(ne.NO_MODEL,"Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })");const i=(B=r.chromeAdapterFactory)==null?void 0:B.call(r,n.mode,typeof window>"u"?void 0:window,n.onDeviceParams),o=new PD(r,s,t,i);return o._apiSettings.inferenceMode=n.mode,o}/**
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
 */function FD(){Ft(new vt(Er,nD,"PUBLIC").setMultipleInstances(!0)),ct(_h,ec),ct(_h,ec,"esm2020")}FD();var kD="firebase",MD="12.19.0";/**
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
 */ct(kD,MD,"app");/**
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
 */const tc=new Map,oC={activated:!1,tokenObservers:[]},xD={initialized:!1,enabled:!1};function Ke(r){return tc.get(r)||{...oC}}function VD(r,e){return tc.set(r,e),tc.get(r)}function Ba(){return xD}/**
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
 */const aC="https://content-firebaseappcheck.googleapis.com/v1",GD="exchangeRecaptchaEnterpriseToken",HD="exchangeDebugToken",bh={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},UD=24*60*60*1e3;/**
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
 */class jD{constructor(e,t,n,s,i){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=n,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Ys,this.pending.promise.catch(t=>{}),await JD(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Ys,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function JD(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */const qD={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},ft=new nr("appCheck","AppCheck",qD);/**
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
 */function Sh(r=!1){var e;return r?(e=self.grecaptcha)==null?void 0:e.enterprise:self.grecaptcha}function Gc(r){if(!Ke(r).activated)throw ft.create("use-before-activation",{appName:r.name})}function BC(r){const e=Math.round(r/1e3),t=Math.floor(e/(3600*24)),n=Math.floor((e-t*3600*24)/3600),s=Math.floor((e-t*3600*24-n*3600)/60),i=e-t*3600*24-n*3600-s*60;let o="";return t&&(o+=eo(t)+"d:"),n&&(o+=eo(n)+"h:"),o+=eo(s)+"m:"+eo(i)+"s",o}function eo(r){return r===0?"00":r>=10?r.toString():"0"+r}/**
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
 */async function Hc({url:r,body:e},t){const n={"Content-Type":"application/json"},s=t.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&(n["X-Firebase-Client"]=d)}const i={method:"POST",body:JSON.stringify(e),headers:n};let o;try{o=await fetch(r,i)}catch(d){throw ft.create("fetch-network-error",{originalErrorMessage:d==null?void 0:d.message})}if(o.status!==200)throw ft.create("fetch-status-error",{httpStatus:o.status});let B;try{B=await o.json()}catch(d){throw ft.create("fetch-parse-error",{originalErrorMessage:d==null?void 0:d.message})}const c=B.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw ft.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${B.ttl}`});const u=Number(c[1])*1e3,h=Date.now();return{token:B.token,expireTimeMillis:h+u,issuedAtTimeMillis:h}}function KD(r,e){const{projectId:t,appId:n,apiKey:s}=r.options;return{url:`${aC}/projects/${t}/apps/${n}:${GD}?key=${s}`,body:{recaptcha_enterprise_token:e}}}function cC(r,e){const{projectId:t,appId:n,apiKey:s}=r.options;return{url:`${aC}/projects/${t}/apps/${n}:${HD}?key=${s}`,body:{debug_token:e}}}/**
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
 */const $D="firebase-app-check-database",zD=1,Zs="firebase-app-check-store",uC="debug-token";let to=null;function lC(){return to||(to=new Promise((r,e)=>{try{const t=indexedDB.open($D,zD);t.onsuccess=n=>{r(n.target.result)},t.onerror=n=>{var s;e(ft.create("storage-open",{originalErrorMessage:(s=n.target.error)==null?void 0:s.message}))},t.onupgradeneeded=n=>{const s=n.target.result;switch(n.oldVersion){case 0:s.createObjectStore(Zs,{keyPath:"compositeKey"})}}}catch(t){e(ft.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),to)}function WD(r){return fC(dC(r))}function QD(r,e){return hC(dC(r),e)}function YD(r){return hC(uC,r)}function XD(){return fC(uC)}async function hC(r,e){const n=(await lC()).transaction(Zs,"readwrite"),i=n.objectStore(Zs).put({compositeKey:r,value:e});return new Promise((o,B)=>{i.onsuccess=c=>{o()},n.onerror=c=>{var u;B(ft.create("storage-set",{originalErrorMessage:(u=c.target.error)==null?void 0:u.message}))}})}async function fC(r){const t=(await lC()).transaction(Zs,"readonly"),s=t.objectStore(Zs).get(r);return new Promise((i,o)=>{s.onsuccess=B=>{const c=B.target.result;i(c?c.value:void 0)},t.onerror=B=>{var c;o(ft.create("storage-get",{originalErrorMessage:(c=B.target.error)==null?void 0:c.message}))}})}function dC(r){return`${r.options.appId}-${r.name}`}/**
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
 */const Ln=new as("@firebase/app-check");/**
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
 */async function ZD(r){if(oa()){let e;try{e=await WD(r)}catch(t){Ln.warn(`Failed to read token from IndexedDB. Error: ${t}`)}return e}}function mB(r,e){return oa()?QD(r,e).catch(t=>{Ln.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}async function ew(r){let e;try{e=await XD()}catch{}if(e)return e;{const t=crypto.randomUUID();let n=`To use this token for app debugging, register it with your project.

Firebase App Check debug token: ${t}

`;const s=r==null?void 0:r.options.appId,i=r==null?void 0:r.options.projectId;return i&&s?n+=`You can do so in the Firebase Console:
https://console.firebase.google.com/project/${i}/appcheck/apps?selectedAppId=${s}

Or using the Firebase CLI:
firebase appcheck:debugtokens:create ${t} --project ${i} --app ${s}

`:n+=`You will need to add it to your app's App Check settings in the Firebase Console for it to work.

`,n+=`Note: To keep your project secure, please revoke and delete this token using the
Firebase Console or the CLI (\`firebase appcheck:debugtokens:delete\`) when you finish debugging.

Warning: This debug token is a secret and should not be shared or uploaded to source code.

Debug Token Guide: https://firebase.google.com/docs/app-check/web/debug-provider
Firebase CLI install instructions: https://firebase.google.com/docs/cli
`,console.log(n),YD(t).catch(o=>Ln.warn(`Failed to persist debug token to IndexedDB. Error: ${o}`)),t}}/**
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
 */function Uc(){return Ba().enabled}async function jc(){const r=Ba();if(r.enabled&&r.token)return r.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function tw(r){const e=Pc(),t=Ba();if(t.initialized=!0,typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&e.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;t.enabled=!0;const n=new Ys;t.token=n,typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(e.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(ew(r))}/**
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
 */const nw={error:"UNKNOWN_ERROR"};function rw(r){return Sc.encodeString(JSON.stringify(r),!1)}async function nc(r,e=!1,t=!1){const n=r.app;Gc(n);const s=Ke(n);let i=s.token,o;if(i&&!Kr(i)&&(s.token=void 0,i=void 0),!i){const u=await s.cachedTokenPromise;u&&(Kr(u)?i=u:await mB(n,void 0))}if(!e&&i&&Kr(i))return{token:i.token};let B=!1;if(Uc())try{const u=await jc();s.exchangeTokenPromise||(s.exchangeTokenPromise=Hc(cC(n,u),r.heartbeatServiceProvider).finally(()=>{s.exchangeTokenPromise=void 0}),B=!0);const h=await s.exchangeTokenPromise;return await mB(n,h),s.token=h,{token:h.token}}catch(u){return u.code==="appCheck/throttled"||u.code==="appCheck/initial-throttle"?Ln.warn(u.message):t&&Ln.error(u),EB(u)}try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),B=!0),i=await Ke(n).exchangeTokenPromise}catch(u){u.code==="appCheck/throttled"||u.code==="appCheck/initial-throttle"?Ln.warn(u.message):t&&Ln.error(u),o=u}let c;return i?o?Kr(i)?c={token:i.token,internalError:o}:c=EB(o):(c={token:i.token},s.token=i,await mB(n,i)):c=EB(o),B&&gC(n,c),c}async function sw(r){const e=r.app;Gc(e);const{provider:t}=Ke(e);if(Uc()){const n=await jc(),s=cC(e,n);s.body.limited_use=!0;const{token:i}=await Hc(s,r.heartbeatServiceProvider);return{token:i}}else{const{token:n}=await t.getToken(!0);return{token:n}}}function CC(r,e,t,n){const{app:s}=r,i=Ke(s),o={next:t,error:n,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Kr(i.token)){const B=i.token;Promise.resolve().then(()=>{t({token:B.token}),Ph(r)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Ph(r))}function pC(r,e){const t=Ke(r),n=t.tokenObservers.filter(s=>s.next!==e);n.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=n}function Ph(r){const{app:e}=r,t=Ke(e);let n=t.tokenRefresher;n||(n=iw(r),t.tokenRefresher=n),!n.isRunning()&&t.isTokenAutoRefreshEnabled&&n.start()}function iw(r){const{app:e}=r;return new jD(async()=>{const t=Ke(e);let n;if(t.token?n=await nc(r,!0):n=await nc(r),n.error)throw n.error;if(n.internalError)throw n.internalError},()=>!0,()=>{const t=Ke(e);if(t.token){let n=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const s=t.token.expireTimeMillis-5*60*1e3;return n=Math.min(n,s),Math.max(0,n-Date.now())}else return 0},bh.RETRIAL_MIN_WAIT,bh.RETRIAL_MAX_WAIT)}function gC(r,e){const t=Ke(r).tokenObservers;for(const n of t)try{n.type==="EXTERNAL"&&e.error!=null?n.error(e.error):n.next(e)}catch{}}function Kr(r){return r.expireTimeMillis-Date.now()>0}function EB(r){return{token:rw(nw),error:r}}/**
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
 */class ow{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=Ke(this.app);for(const t of e)pC(this.app,t.next);return Promise.resolve()}}function aw(r,e){return new ow(r,e)}function Bw(r){return{getToken:e=>nc(r,e),getLimitedUseToken:()=>sw(r),addTokenListener:e=>CC(r,"INTERNAL",e),removeTokenListener:e=>pC(r.app,e)}}const cw="@firebase/app-check",uw="0.13.1",lw="https://www.google.com/recaptcha/enterprise.js";function hw(r,e){const t=new Ys,n=Ke(r);n.reCAPTCHAState={initialized:t};const s=fw(r),i=Sh(!0);return i?Oh(r,e,i,s,t):pw(()=>{const o=Sh(!0);if(!o)throw new Error("no recaptcha");Oh(r,e,o,s,t)}),t.promise}function Oh(r,e,t,n,s){t.ready(()=>{Cw(r,e,t,n),s.resolve(t)})}function fw(r){const e=`fire_app_check_${r.name}`,t=document.createElement("div");return t.id=e,t.style.display="none",document.body.appendChild(t),e}async function dw(r){Gc(r);const t=await Ke(r).reCAPTCHAState.initialized.promise;return new Promise((n,s)=>{const i=Ke(r).reCAPTCHAState;t.ready(()=>{n(t.execute(i.widgetId,{action:"fire_app_check"}))})})}function Cw(r,e,t,n){const s=t.render(n,{sitekey:e,size:"invisible",callback:()=>{Ke(r).reCAPTCHAState.succeeded=!0},"error-callback":()=>{Ke(r).reCAPTCHAState.succeeded=!1}}),i=Ke(r);i.reCAPTCHAState={...i.reCAPTCHAState,widgetId:s}}function pw(r){const e=document.createElement("script");e.src=lw+"?render=explicit",e.onload=r,document.head.appendChild(e)}class Jc{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(e=!1){var s,i,o;mw(this._throttleData);const t=await dw(this._app).catch(B=>{throw ft.create("recaptcha-error")});if(!((s=Ke(this._app).reCAPTCHAState)!=null&&s.succeeded))throw ft.create("recaptcha-error");let n;try{const B=KD(this._app,t);e&&(B.body.limited_use=!0),n=await Hc(B,this._heartbeatServiceProvider)}catch(B){throw(i=B.code)!=null&&i.includes("fetch-status-error")?(this._throttleData=gw(Number((o=B.customData)==null?void 0:o.httpStatus),this._throttleData),ft.create("initial-throttle",{time:BC(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):B}return this._throttleData=null,n}initialize(e){this._app=e,this._heartbeatServiceProvider=mn(e,"heartbeat"),hw(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof Jc?this._siteKey===e._siteKey:!1}}function gw(r,e){if(r===404||r===403)return{backoffCount:1,allowRequestsAfter:Date.now()+UD,httpStatus:r};{const t=e?e.backoffCount:0,n=Oc(t,1e3,2);return{backoffCount:t+1,allowRequestsAfter:Date.now()+n,httpStatus:r}}}function mw(r){if(r&&Date.now()-r.allowRequestsAfter<=0)throw ft.create("throttled",{time:BC(r.allowRequestsAfter-Date.now()),httpStatus:r.httpStatus})}/**
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
 */function Ew(r=wi(),e){var s;r=be(r);const t=mn(r,"app-check");if(Ba().initialized||tw(r),Uc()&&jc().then(i=>{console.log(`Firebase App Check debug token: ${i}`)}),t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(o&&!!o.isTokenAutoRefreshEnabled==!!e.isTokenAutoRefreshEnabled&&((s=o.provider)!=null&&s.isEqual(e.provider)))return i;throw ft.create("already-initialized",{appName:r.name})}const n=t.initialize({options:e});return _w(r,e.provider,e.isTokenAutoRefreshEnabled),Ke(r).isTokenAutoRefreshEnabled&&CC(n,"INTERNAL",()=>{}),n}function _w(r,e,t=!1){const n=VD(r,{...oC});n.activated=!0,n.provider=e,n.cachedTokenPromise=ZD(r).then(s=>(s&&Kr(s)&&(n.token=s,gC(r,{token:s.token})),s)),n.isTokenAutoRefreshEnabled=t&&r.automaticDataCollectionEnabled,!r.automaticDataCollectionEnabled&&t&&Ln.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),n.provider.initialize(r)}/**
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
 */const Dw="app-check",Nh="app-check-internal";function ww(){Ft(new vt(Dw,r=>{const e=r.getProvider("app").getImmediate(),t=r.getProvider("heartbeat");return aw(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((r,e,t)=>{r.getProvider(Nh).initialize()})),Ft(new vt(Nh,r=>{const e=r.getProvider("app-check").getImmediate();return Bw(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),ct(cw,uw)}ww();function mC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yw=mC,EC=new nr("auth","Firebase",mC());/**
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
 */const Fo=new as("@firebase/auth");function go(r,...e){Fo.logLevel<=ue.WARN&&Fo.warn(`Auth (${Jn}): ${r}`,...e)}function mo(r,...e){Fo.logLevel<=ue.ERROR&&Fo.error(`Auth (${Jn}): ${r}`,...e)}/**
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
 */function dn(r,...e){throw Kc(r,...e)}function Wt(r,...e){return Kc(r,...e)}function qc(r,e,t){const n={...yw(),[e]:t};return new nr("auth","Firebase",n).create(e,{appName:r.name})}function Mn(r){return qc(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kc(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return EC.create(r,...e)}function se(r,e,...t){if(!r)throw Kc(e,...t)}function Bn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw mo(e),new Error(e)}function Cn(r,e){r||Bn(e)}/**
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
 */function rc(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function Iw(){return Lh()==="http:"||Lh()==="https:"}function Lh(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function Tw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Iw()||yE()||"connection"in navigator)?navigator.onLine:!0}function Aw(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class yi{constructor(e,t){this.shortDelay=e,this.longDelay=t,Cn(t>e,"Short delay should be less than long delay!"),this.isMobile=_E()||IE()}get(){return Tw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $c(r,e){Cn(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class _C{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Rw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],bw=new yi(3e4,6e4);function ca(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Bs(r,e,t,n,s={}){return DC(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const B=_i({...o,key:r.config.apiKey}).slice(1),c=await r._getAdditionalHeaders();c["Content-Type"]="application/json",r.languageCode&&(c["X-Firebase-Locale"]=r.languageCode);const u={method:e,headers:c,...i};return wE()||(u.referrerPolicy="strict-origin-when-cross-origin"),r.emulatorConfig&&Di(r.emulatorConfig.host)&&(u.credentials="include"),_C.fetch()(await yC(r,r.config.apiHost,t,B),u)})}async function DC(r,e,t){r._canInitEmulator=!1;const n={...Rw,...e};try{const s=new Sw(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw no(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const B=i.ok?o.errorMessage:o.error.message,[c,u]=B.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw no(r,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw no(r,"email-already-in-use",o);if(c==="USER_DISABLED")throw no(r,"user-disabled",o);const h=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw qc(r,h,u);dn(r,h)}}catch(s){if(s instanceof bt)throw s;dn(r,"network-request-failed",{message:String(s)})}}async function wC(r,e,t,n,s={}){const i=await Bs(r,e,t,n,s);return"mfaPendingCredential"in i&&dn(r,"multi-factor-auth-required",{_serverResponse:i}),i}async function yC(r,e,t,n){const s=`${e}${t}?${n}`,i=r,o=i.config.emulator?$c(r.config,s):`${r.config.apiScheme}://${s}`;return vw.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class Sw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Wt(this.auth,"network-request-failed")),bw.get())})}}function no(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=Wt(r,e,n);return s.customData._tokenResponse=t,s}/**
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
 */async function Pw(r,e){return Bs(r,"POST","/v1/accounts:delete",e)}async function ko(r,e){return Bs(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Us(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ow(r,e=!1){const t=be(r),n=await t.getIdToken(e),s=zc(n);se(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:Us(_B(s.auth_time)),issuedAtTime:Us(_B(s.iat)),expirationTime:Us(_B(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function _B(r){return Number(r)*1e3}function zc(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return mo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hd(t);return s?JSON.parse(s):(mo("Failed to decode base64 JWT payload"),null)}catch(s){return mo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Fh(r){const e=zc(r);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ei(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof bt&&Nw(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function Nw({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class Lw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class sc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Us(this.lastLoginAt),this.creationTime=Us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Mo(r){var d;const e=r.auth,t=await r.getIdToken(),n=await ei(r,ko(e,{idToken:t}));se(n==null?void 0:n.users.length,e,"internal-error");const s=n.users[0];r._notifyReloadListener(s);const i=(d=s.providerUserInfo)!=null&&d.length?IC(s.providerUserInfo):[],o=kw(r.providerData,i),B=r.isAnonymous,c=!(r.email&&s.passwordHash)&&!(o!=null&&o.length),u=B?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new sc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(r,h)}async function Fw(r){const e=be(r);await Mo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kw(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function IC(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Mw(r,e){const t=await DC(r,{},async()=>{const n=_i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=await yC(r,s,"/v1/token",`key=${i}`),B=await r._getAdditionalHeaders();B["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:B,body:n};return r.emulatorConfig&&Di(r.emulatorConfig.host)&&(c.credentials="include"),_C.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function xw(r,e){return Bs(r,"POST","/v2/accounts:revokeToken",ca(r,e))}/**
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
 */class zr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){se(e.length!==0,"internal-error");const t=Fh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await Mw(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new zr;return n&&(se(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(se(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(se(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zr,this.toJSON())}_performRefresh(){return Bn("not implemented")}}/**
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
 */function Tn(r,e){se(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Gt{constructor({uid:e,auth:t,stsTokenManager:n,...s}){this.providerId="firebase",this.proactiveRefresh=new Lw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ei(this,this.stsTokenManager.getToken(this.auth,e));return se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ow(this,e)}reload(){return Fw(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Gt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Mo(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(Mn(this.auth));const e=await this.getIdToken();return await ei(this,Pw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,B=t.tenantId??void 0,c=t._redirectEventId??void 0,u=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:d,emailVerified:p,isAnonymous:E,providerData:_,stsTokenManager:S}=t;se(d&&S,e,"internal-error");const L=zr.fromJSON(this.name,S);se(typeof d=="string",e,"internal-error"),Tn(n,e.name),Tn(s,e.name),se(typeof p=="boolean",e,"internal-error"),se(typeof E=="boolean",e,"internal-error"),Tn(i,e.name),Tn(o,e.name),Tn(B,e.name),Tn(c,e.name),Tn(u,e.name),Tn(h,e.name);const H=new Gt({uid:d,auth:e,email:s,emailVerified:p,displayName:n,isAnonymous:E,photoURL:o,phoneNumber:i,tenantId:B,stsTokenManager:L,createdAt:u,lastLoginAt:h});return _&&Array.isArray(_)&&(H.providerData=_.map(W=>({...W}))),c&&(H._redirectEventId=c),H}static async _fromIdTokenResponse(e,t,n=!1){const s=new zr;s.updateFromServerResponse(t);const i=new Gt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await Mo(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];se(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?IC(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),B=new zr;B.updateFromIdToken(n);const c=new Gt({uid:s.localId,auth:e,stsTokenManager:B,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new sc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const kh=new Map;function cn(r){Cn(r instanceof Function,"Expected a class definition");let e=kh.get(r);return e?(Cn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,kh.set(r,e),e)}/**
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
 */class TC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}TC.type="NONE";const Mh=TC;/**
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
 */function Eo(r,e,t){return`firebase:${r}:${e}:${t}`}class _r{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=Eo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Eo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ko(this.auth,{idToken:e}).catch(()=>{});return t?Gt._fromGetAccountInfoResponse(this.auth,t,e):null}return Gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,n="authUser"){if(!t.length)return new _r(cn(Mh),e,n);const s=(await Promise.all(t.map(async u=>{try{if(await u._isAvailable())return u}catch{return}}))).filter(u=>u);let i=s[0]||cn(Mh);const o=Eo(n,e.config.apiKey,e.name);let B=null;for(const u of t)try{const h=await u._get(o);if(h){let d;if(typeof h=="string"){const p=await ko(e,{idToken:h}).catch(()=>{});if(!p)break;d=await Gt._fromGetAccountInfoResponse(e,p,h)}else d=Gt._fromJSON(e,h);u!==i&&(B=d),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new _r(i,e,n):(i=c[0],B&&await i._set(o,B.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new _r(i,e,n))}}/**
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
 */function xh(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(AC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(PC(e))return"Blackberry";if(OC(e))return"Webos";if(RC(e))return"Safari";if((e.includes("chrome/")||vC(e))&&!e.includes("edge/"))return"Chrome";if(SC(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function AC(r=rt()){return/firefox\//i.test(r)}function RC(r=rt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vC(r=rt()){return/crios\//i.test(r)}function bC(r=rt()){return/iemobile/i.test(r)}function SC(r=rt()){return/android/i.test(r)}function PC(r=rt()){return/blackberry/i.test(r)}function OC(r=rt()){return/webos/i.test(r)}function Wc(r=rt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Vw(r=rt()){var e;return Wc(r)&&!!((e=window.navigator)!=null&&e.standalone)}function Gw(){return TE()&&document.documentMode===10}function NC(r=rt()){return Wc(r)||SC(r)||OC(r)||PC(r)||/windows phone/i.test(r)||bC(r)}/**
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
 */function LC(r,e=[]){let t;switch(r){case"Browser":t=xh(rt());break;case"Worker":t=`${xh(rt())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Jn}/${n}`}/**
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
 */class Hw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,B)=>{try{const c=e(i);o(c)}catch(c){B(c)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function Uw(r,e={}){return Bs(r,"GET","/v2/passwordPolicy",ca(r,e))}/**
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
 */const jw=6;class Jw{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??jw,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class qw{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vh(this),this.idTokenSubscription=new Vh(this),this.beforeStateQueue=new Hw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=EC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=cn(t)),this._initializationPromise=this.queue(async()=>{var n,s,i;if(!this._deleted){try{this.persistenceManager=await _r.create(this,e)}catch(o){go(`Failed to initialize persistence: ${o}`),this.persistenceManager=await _r.create(this,[])}finally{(n=this._resolvePersistenceManagerAvailable)==null||n.call(this)}if(!this._deleted){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(o){go(`Failed to initialize current user: ${o}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ko(this,{idToken:e}),n=await Gt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ot(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(B=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(B,B))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,B=n==null?void 0:n._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===B)&&(c!=null&&c.user)&&(n=c.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(n)}catch(o){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Mo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Aw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ot(this.app))return Promise.reject(Mn(this));const t=e?be(e):null;return t&&se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(Mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ot(this.app)?Promise.reject(Mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Uw(this),t=new Jw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new nr("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await xw(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&cn(e)||this._popupRedirectResolver;se(t,this,"argument-error"),this.redirectPersistenceManager=await _r.create(this,[cn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const B=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(B,this,"internal-error"),B.then(()=>{o||i(this.currentUser)}).catch(c=>{if(!o)if(typeof t!="function"&&t.error)t.error(c);else if(n)n(c);else throw c}),typeof t=="function"){const c=e.addObserver(t,n,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){const n=(t==null?void 0:t.message)||String(t),s=qc(this,"internal-error",`An internal AuthError has occurred: ${n}`);throw s.customData={originalError:t},s}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=LC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(Ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&go(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ua(r){return be(r)}class Vh{constructor(e){this.auth=e,this.observer=null,this.addObserver=PE(t=>this.observer=t)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Qc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Kw(r){Qc=r}function $w(r){return Qc.loadJS(r)}function zw(){return Qc.gapiScript}function Ww(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Qw(r,e){const t=mn(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(jn(i,e??{}))return s;dn(s,"already-initialized")}return t.initialize({options:e})}function Yw(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(cn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Xw(r,e,t){const n=ua(r);se(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=FC(e),{host:o,port:B}=Zw(e),c=B===null?"":`:${B}`,u={url:`${i}//${o}${c}/`},h=Object.freeze({host:o,port:B,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){se(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),se(jn(u,n.config.emulator)&&jn(h,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=u,n.emulatorConfig=h,n.settings.appVerificationDisabledForTesting=!0,Di(o)?qd(`${i}//${o}${c}`):ey()}function FC(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Zw(r){const e=FC(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:Gh(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:Gh(o)}}}function Gh(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function ey(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class kC{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Bn("not implemented")}_getIdTokenResponse(e){return Bn("not implemented")}_linkToIdToken(e,t){return Bn("not implemented")}_getReauthenticationResolver(e){return Bn("not implemented")}}/**
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
 */async function Wr(r,e){return wC(r,"POST","/v1/accounts:signInWithIdp",ca(r,e))}/**
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
 */const ty="http://localhost";class Ir extends kC{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):dn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s,...i}=t;if(!n||!s)return null;const o=new Ir(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Wr(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Wr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Wr(e,t)}buildRequest(){const e={requestUri:ty,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=_i(t)}return e}}/**
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
 */class MC{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ii extends MC{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class bn extends Ii{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";bn.PROVIDER_ID="facebook.com";/**
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
 */class Sn extends Ii{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ir._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Sn.credential(t,n)}catch{return null}}}Sn.GOOGLE_SIGN_IN_METHOD="google.com";Sn.PROVIDER_ID="google.com";/**
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
 */class Pn extends Ii{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.GITHUB_SIGN_IN_METHOD="github.com";Pn.PROVIDER_ID="github.com";/**
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
 */class On extends Ii{constructor(){super("twitter.com")}static credential(e,t){return Ir._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return On.credential(t,n)}catch{return null}}}On.TWITTER_SIGN_IN_METHOD="twitter.com";On.PROVIDER_ID="twitter.com";/**
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
 */async function ny(r,e){return wC(r,"POST","/v1/accounts:signUp",ca(r,e))}/**
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
 */class qn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await Gt._fromIdTokenResponse(e,n,s),o=Hh(n);return new qn({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=Hh(n);return new qn({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function Hh(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */async function ry(r){var s;if(Ot(r.app))return Promise.reject(Mn(r));const e=ua(r);if(await e._initializationPromise,(s=e.currentUser)!=null&&s.isAnonymous)return new qn({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await ny(e,{returnSecureToken:!0}),n=await qn._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(n.user),n}/**
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
 */class xo extends bt{constructor(e,t,n,s){super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,xo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new xo(e,t,n,s)}}function xC(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xo._fromErrorAndOperation(r,i,e,n):i})}async function sy(r,e,t=!1){const n=await ei(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return qn._forOperation(r,"link",n)}/**
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
 */async function iy(r,e,t=!1){const{auth:n}=r;if(Ot(n.app))return Promise.reject(Mn(n));const s="reauthenticate";try{const i=await ei(r,xC(n,s,e,r),t);se(i.idToken,n,"internal-error");const o=zc(i.idToken);se(o,n,"internal-error");const{sub:B}=o;return se(r.uid===B,n,"user-mismatch"),qn._forOperation(r,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&dn(n,"user-mismatch"),i}}/**
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
 */async function oy(r,e,t=!1){if(Ot(r.app))return Promise.reject(Mn(r));const n="signIn",s=await xC(r,n,e),i=await qn._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}function ay(r,e,t,n){return be(r).onIdTokenChanged(e,t,n)}function By(r,e,t){return be(r).beforeAuthStateChanged(e,t)}function cy(r,e,t,n){return be(r).onAuthStateChanged(e,t,n)}const Vo="__sak";/**
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
 */class VC{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Vo,"1"),this.storage.removeItem(Vo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const uy=1e3,ly=10;class GC extends VC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=NC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,B,c)=>{this.notifyListeners(o,c)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);Gw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ly):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},uy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}GC.type="LOCAL";const hy=GC;/**
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
 */class HC extends VC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}HC.type="SESSION";const UC=HC;/**
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
 */function fy(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class la{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new la(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const B=Array.from(o).map(async u=>u(t.origin,i)),c=await fy(B);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}la.receivers=[];/**
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
 */function Yc(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class dy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((B,c)=>{const u=Yc("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),B(p.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Qt(){return window}function Cy(r){Qt().location.href=r}/**
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
 */function jC(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function py(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gy(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function my(){return jC()?self:null}/**
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
 */const JC="firebaseLocalStorageDb",Ey=1,Go="firebaseLocalStorage",qC="fbase_key";class Ti{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ha(r,e){return r.transaction([Go],e?"readwrite":"readonly").objectStore(Go)}function _y(){const r=indexedDB.deleteDatabase(JC);return new Ti(r).toPromise()}function KC(){const r=indexedDB.open(JC,Ey);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Go,{keyPath:qC})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Go)?e(n):(n.close(),await _y(),e(await KC()))})})}async function Uh(r,e,t){const n=ha(r,!0).put({[qC]:e,value:t});return new Ti(n).toPromise()}async function Dy(r,e){const t=ha(r,!1).get(e),n=await new Ti(t).toPromise();return n===void 0?null:n.value}function jh(r,e){const t=ha(r,!0).delete(e);return new Ti(t).toPromise()}const wy=800,yy=3;class $C{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=KC(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>yy)throw n;if(this.dbPromise){const s=this.dbPromise;this.dbPromise=null;try{(await s).close()}catch{}}}}async initializeServiceWorkerMessaging(){return jC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=la._getInstance(my()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await py(),!this.activeServiceWorker)return;this.sender=new dy(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Uh(e,Vo,"1"),await jh(e,Vo)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Uh(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Dy(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>jh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(s=>{const i=ha(s,!1).getAll();return new Ti(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}catch(e){return this.isClosing||go(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}$C.type="LOCAL";const Iy=$C;new yi(3e4,6e4);/**
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
 */function Ty(r,e){return e?cn(e):(se(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Xc extends kC{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Wr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Wr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ay(r){return oy(r.auth,new Xc(r),r.bypassAuthState)}function Ry(r){const{auth:e,user:t}=r;return se(t,e,"internal-error"),iy(t,new Xc(r),r.bypassAuthState)}async function vy(r){const{auth:e,user:t}=r;return se(t,e,"internal-error"),sy(t,new Xc(r),r.bypassAuthState)}/**
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
 */class zC{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:B}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(B)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ay;case"linkViaPopup":case"linkViaRedirect":return vy;case"reauthViaPopup":case"reauthViaRedirect":return Ry;default:dn(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const by=new yi(2e3,1e4);class $r extends zC{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,$r.currentPopupAction&&$r.currentPopupAction.cancel(),$r.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Yc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$r.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,by.get())};e()}}$r.currentPopupAction=null;/**
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
 */const Sy="pendingRedirect",_o=new Map;class Py extends zC{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=_o.get(this.auth._key());if(!e){try{const n=await Oy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}_o.set(this.auth._key(),e)}return this.bypassAuthState||_o.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Oy(r,e){const t=Fy(e),n=Ly(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function Ny(r,e){_o.set(r._key(),e)}function Ly(r){return cn(r._redirectPersistence)}function Fy(r){return Eo(Sy,r.config.apiKey,r.name)}async function ky(r,e,t=!1){if(Ot(r.app))return Promise.reject(Mn(r));const n=ua(r),s=Ty(n,e),o=await new Py(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
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
 */const My=10*60*1e3;class xy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Vy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!WC(e)){const s=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(Wt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=My&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jh(e))}saveEventToCache(e){this.cachedEventUids.add(Jh(e)),this.lastProcessedEventTime=Date.now()}}function Jh(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function WC({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Vy(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return WC(r);default:return!1}}/**
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
 */async function Gy(r,e={}){return Bs(r,"GET","/v1/projects",e)}/**
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
 */const Hy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Uy=/^https?/;async function jy(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Gy(r);for(const t of e)try{if(Jy(t))return}catch{}dn(r,"unauthorized-domain")}function Jy(r){const e=rc(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!Uy.test(t))return!1;if(Hy.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
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
 */const qy=new yi(3e4,6e4);function qh(){const r=Qt().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function Ky(r){return new Promise((e,t)=>{var s,i,o;function n(){qh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qh(),t(Wt(r,"network-request-failed"))},timeout:qy.get()})}if((i=(s=Qt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Qt().gapi)!=null&&o.load)n();else{const B=Ww("iframefcb");return Qt()[B]=()=>{gapi.load?n():t(Wt(r,"network-request-failed"))},$w(`${zw()}?onload=${B}`).catch(c=>t(c))}}).catch(e=>{throw Do=null,e})}let Do=null;function $y(r){return Do=Do||Ky(r),Do}/**
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
 */const zy=new yi(5e3,15e3),Wy="__/auth/iframe",Qy="emulator/auth/iframe",Yy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zy(r){const e=r.config;se(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?$c(e,Qy):`https://${r.config.authDomain}/${Wy}`,n={apiKey:e.apiKey,appName:r.name,v:Jn},s=Xy.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${_i(n).slice(1)}`}async function eI(r){const e=await $y(r),t=Qt().gapi;return se(t,r,"internal-error"),e.open({where:document.body,url:Zy(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yy,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=Wt(r,"network-request-failed"),B=Qt().setTimeout(()=>{i(o)},zy.get());function c(){Qt().clearTimeout(B),s(n)}n.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const tI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nI=500,rI=600,sI="_blank",iI="http://localhost";class Kh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oI(r,e,t,n=nI,s=rI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let B="";const c={...tI,width:n.toString(),height:s.toString(),top:i,left:o},u=rt().toLowerCase();t&&(B=vC(u)?sI:t),AC(u)&&(e=e||iI,c.scrollbars="yes");const h=Object.entries(c).reduce((p,[E,_])=>`${p}${E}=${_},`,"");if(Vw(u)&&B!=="_self")return aI(e||"",B),new Kh(null);const d=window.open(e||"",B,h);se(d,r,"popup-blocked");try{d.focus()}catch{}return new Kh(d)}function aI(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const BI="__/auth/handler",cI="emulator/auth/handler",uI=encodeURIComponent("fac");async function $h(r,e,t,n,s,i){se(r.config.authDomain,r,"auth-domain-config-required"),se(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Jn,eventId:s};if(e instanceof MC){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",SE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Ii){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}r.tenantId&&(o.tid=r.tenantId);const B=o;for(const h of Object.keys(B))B[h]===void 0&&delete B[h];const c=await r._getAppCheckToken(),u=c?`#${uI}=${encodeURIComponent(c)}`:"";return`${lI(r)}?${_i(B).slice(1)}${u}`}function lI({config:r}){return r.emulator?$c(r,cI):`https://${r.authDomain}/${BI}`}/**
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
 */const DB="webStorageSupport";class hI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=UC,this._completeRedirectFn=ky,this._overrideRedirectResult=Ny}async _openPopup(e,t,n,s){var o;Cn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await $h(e,t,n,rc(),s);return oI(e,i,Yc())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await $h(e,t,n,rc(),s);return Cy(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Cn(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await eI(e),n=new xy(e);return t.register("authEvent",s=>(se(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(DB,{type:DB},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[DB];i!==void 0&&t(!!i),dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=jy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return NC()||RC()||Wc()}}const fI=hI;var zh="@firebase/auth",Wh="1.13.6";/**
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
 */class dI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function CI(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pI(r){Ft(new vt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:B}=n.options;se(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:o,authDomain:B,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:LC(r)},u=new qw(n,s,i,c);return Yw(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Ft(new vt("auth-internal",e=>{const t=ua(e.getProvider("auth").getImmediate());return(n=>new dI(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ct(zh,Wh,CI(r)),ct(zh,Wh,"esm2020")}/**
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
 */const gI=5*60,mI=Jd("authIdTokenMaxAge")||gI;let Qh=null;const EI=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>mI)return;const s=t==null?void 0:t.token;Qh!==s&&(Qh=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _I(r=wi()){const e=mn(r,"auth");if(e.isInitialized())return e.getImmediate();const t=Qw(r,{popupRedirectResolver:fI,persistence:[Iy,hy,UC]}),n=Jd("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=EI(i.toString());By(t,o,()=>o(t.currentUser)),ay(t,B=>o(B))}}const s=Ud("auth");return s&&Xw(t,`http://${s}`),t}function DI(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}Kw({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=Wt("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",DI().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pI("Browser");var Yh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xn,QC;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,D){function y(){}y.prototype=D.prototype,R.F=D.prototype,R.prototype=new y,R.prototype.constructor=R,R.D=function(v,A,P){for(var w=Array(arguments.length-2),ut=2;ut<arguments.length;ut++)w[ut-2]=arguments[ut];return D.prototype[A].apply(v,w)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,D,y){y||(y=0);const v=Array(16);if(typeof D=="string")for(var A=0;A<16;++A)v[A]=D.charCodeAt(y++)|D.charCodeAt(y++)<<8|D.charCodeAt(y++)<<16|D.charCodeAt(y++)<<24;else for(A=0;A<16;++A)v[A]=D[y++]|D[y++]<<8|D[y++]<<16|D[y++]<<24;D=R.g[0],y=R.g[1],A=R.g[2];let P=R.g[3],w;w=D+(P^y&(A^P))+v[0]+3614090360&4294967295,D=y+(w<<7&4294967295|w>>>25),w=P+(A^D&(y^A))+v[1]+3905402710&4294967295,P=D+(w<<12&4294967295|w>>>20),w=A+(y^P&(D^y))+v[2]+606105819&4294967295,A=P+(w<<17&4294967295|w>>>15),w=y+(D^A&(P^D))+v[3]+3250441966&4294967295,y=A+(w<<22&4294967295|w>>>10),w=D+(P^y&(A^P))+v[4]+4118548399&4294967295,D=y+(w<<7&4294967295|w>>>25),w=P+(A^D&(y^A))+v[5]+1200080426&4294967295,P=D+(w<<12&4294967295|w>>>20),w=A+(y^P&(D^y))+v[6]+2821735955&4294967295,A=P+(w<<17&4294967295|w>>>15),w=y+(D^A&(P^D))+v[7]+4249261313&4294967295,y=A+(w<<22&4294967295|w>>>10),w=D+(P^y&(A^P))+v[8]+1770035416&4294967295,D=y+(w<<7&4294967295|w>>>25),w=P+(A^D&(y^A))+v[9]+2336552879&4294967295,P=D+(w<<12&4294967295|w>>>20),w=A+(y^P&(D^y))+v[10]+4294925233&4294967295,A=P+(w<<17&4294967295|w>>>15),w=y+(D^A&(P^D))+v[11]+2304563134&4294967295,y=A+(w<<22&4294967295|w>>>10),w=D+(P^y&(A^P))+v[12]+1804603682&4294967295,D=y+(w<<7&4294967295|w>>>25),w=P+(A^D&(y^A))+v[13]+4254626195&4294967295,P=D+(w<<12&4294967295|w>>>20),w=A+(y^P&(D^y))+v[14]+2792965006&4294967295,A=P+(w<<17&4294967295|w>>>15),w=y+(D^A&(P^D))+v[15]+1236535329&4294967295,y=A+(w<<22&4294967295|w>>>10),w=D+(A^P&(y^A))+v[1]+4129170786&4294967295,D=y+(w<<5&4294967295|w>>>27),w=P+(y^A&(D^y))+v[6]+3225465664&4294967295,P=D+(w<<9&4294967295|w>>>23),w=A+(D^y&(P^D))+v[11]+643717713&4294967295,A=P+(w<<14&4294967295|w>>>18),w=y+(P^D&(A^P))+v[0]+3921069994&4294967295,y=A+(w<<20&4294967295|w>>>12),w=D+(A^P&(y^A))+v[5]+3593408605&4294967295,D=y+(w<<5&4294967295|w>>>27),w=P+(y^A&(D^y))+v[10]+38016083&4294967295,P=D+(w<<9&4294967295|w>>>23),w=A+(D^y&(P^D))+v[15]+3634488961&4294967295,A=P+(w<<14&4294967295|w>>>18),w=y+(P^D&(A^P))+v[4]+3889429448&4294967295,y=A+(w<<20&4294967295|w>>>12),w=D+(A^P&(y^A))+v[9]+568446438&4294967295,D=y+(w<<5&4294967295|w>>>27),w=P+(y^A&(D^y))+v[14]+3275163606&4294967295,P=D+(w<<9&4294967295|w>>>23),w=A+(D^y&(P^D))+v[3]+4107603335&4294967295,A=P+(w<<14&4294967295|w>>>18),w=y+(P^D&(A^P))+v[8]+1163531501&4294967295,y=A+(w<<20&4294967295|w>>>12),w=D+(A^P&(y^A))+v[13]+2850285829&4294967295,D=y+(w<<5&4294967295|w>>>27),w=P+(y^A&(D^y))+v[2]+4243563512&4294967295,P=D+(w<<9&4294967295|w>>>23),w=A+(D^y&(P^D))+v[7]+1735328473&4294967295,A=P+(w<<14&4294967295|w>>>18),w=y+(P^D&(A^P))+v[12]+2368359562&4294967295,y=A+(w<<20&4294967295|w>>>12),w=D+(y^A^P)+v[5]+4294588738&4294967295,D=y+(w<<4&4294967295|w>>>28),w=P+(D^y^A)+v[8]+2272392833&4294967295,P=D+(w<<11&4294967295|w>>>21),w=A+(P^D^y)+v[11]+1839030562&4294967295,A=P+(w<<16&4294967295|w>>>16),w=y+(A^P^D)+v[14]+4259657740&4294967295,y=A+(w<<23&4294967295|w>>>9),w=D+(y^A^P)+v[1]+2763975236&4294967295,D=y+(w<<4&4294967295|w>>>28),w=P+(D^y^A)+v[4]+1272893353&4294967295,P=D+(w<<11&4294967295|w>>>21),w=A+(P^D^y)+v[7]+4139469664&4294967295,A=P+(w<<16&4294967295|w>>>16),w=y+(A^P^D)+v[10]+3200236656&4294967295,y=A+(w<<23&4294967295|w>>>9),w=D+(y^A^P)+v[13]+681279174&4294967295,D=y+(w<<4&4294967295|w>>>28),w=P+(D^y^A)+v[0]+3936430074&4294967295,P=D+(w<<11&4294967295|w>>>21),w=A+(P^D^y)+v[3]+3572445317&4294967295,A=P+(w<<16&4294967295|w>>>16),w=y+(A^P^D)+v[6]+76029189&4294967295,y=A+(w<<23&4294967295|w>>>9),w=D+(y^A^P)+v[9]+3654602809&4294967295,D=y+(w<<4&4294967295|w>>>28),w=P+(D^y^A)+v[12]+3873151461&4294967295,P=D+(w<<11&4294967295|w>>>21),w=A+(P^D^y)+v[15]+530742520&4294967295,A=P+(w<<16&4294967295|w>>>16),w=y+(A^P^D)+v[2]+3299628645&4294967295,y=A+(w<<23&4294967295|w>>>9),w=D+(A^(y|~P))+v[0]+4096336452&4294967295,D=y+(w<<6&4294967295|w>>>26),w=P+(y^(D|~A))+v[7]+1126891415&4294967295,P=D+(w<<10&4294967295|w>>>22),w=A+(D^(P|~y))+v[14]+2878612391&4294967295,A=P+(w<<15&4294967295|w>>>17),w=y+(P^(A|~D))+v[5]+4237533241&4294967295,y=A+(w<<21&4294967295|w>>>11),w=D+(A^(y|~P))+v[12]+1700485571&4294967295,D=y+(w<<6&4294967295|w>>>26),w=P+(y^(D|~A))+v[3]+2399980690&4294967295,P=D+(w<<10&4294967295|w>>>22),w=A+(D^(P|~y))+v[10]+4293915773&4294967295,A=P+(w<<15&4294967295|w>>>17),w=y+(P^(A|~D))+v[1]+2240044497&4294967295,y=A+(w<<21&4294967295|w>>>11),w=D+(A^(y|~P))+v[8]+1873313359&4294967295,D=y+(w<<6&4294967295|w>>>26),w=P+(y^(D|~A))+v[15]+4264355552&4294967295,P=D+(w<<10&4294967295|w>>>22),w=A+(D^(P|~y))+v[6]+2734768916&4294967295,A=P+(w<<15&4294967295|w>>>17),w=y+(P^(A|~D))+v[13]+1309151649&4294967295,y=A+(w<<21&4294967295|w>>>11),w=D+(A^(y|~P))+v[4]+4149444226&4294967295,D=y+(w<<6&4294967295|w>>>26),w=P+(y^(D|~A))+v[11]+3174756917&4294967295,P=D+(w<<10&4294967295|w>>>22),w=A+(D^(P|~y))+v[2]+718787259&4294967295,A=P+(w<<15&4294967295|w>>>17),w=y+(P^(A|~D))+v[9]+3951481745&4294967295,R.g[0]=R.g[0]+D&4294967295,R.g[1]=R.g[1]+(A+(w<<21&4294967295|w>>>11))&4294967295,R.g[2]=R.g[2]+A&4294967295,R.g[3]=R.g[3]+P&4294967295}n.prototype.v=function(R,D){D===void 0&&(D=R.length);const y=D-this.blockSize,v=this.C;let A=this.h,P=0;for(;P<D;){if(A==0)for(;P<=y;)s(this,R,P),P+=this.blockSize;if(typeof R=="string"){for(;P<D;)if(v[A++]=R.charCodeAt(P++),A==this.blockSize){s(this,v),A=0;break}}else for(;P<D;)if(v[A++]=R[P++],A==this.blockSize){s(this,v),A=0;break}}this.h=A,this.o+=D},n.prototype.A=function(){var R=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);R[0]=128;for(var D=1;D<R.length-8;++D)R[D]=0;D=this.o*8;for(var y=R.length-8;y<R.length;++y)R[y]=D&255,D/=256;for(this.v(R),R=Array(16),D=0,y=0;y<4;++y)for(let v=0;v<32;v+=8)R[D++]=this.g[y]>>>v&255;return R};function i(R,D){var y=B;return Object.prototype.hasOwnProperty.call(y,R)?y[R]:y[R]=D(R)}function o(R,D){this.h=D;const y=[];let v=!0;for(let A=R.length-1;A>=0;A--){const P=R[A]|0;v&&P==D||(y[A]=P,v=!1)}this.g=y}var B={};function c(R){return-128<=R&&R<128?i(R,function(D){return new o([D|0],D<0?-1:0)}):new o([R|0],R<0?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return d;if(R<0)return L(u(-R));const D=[];let y=1;for(let v=0;R>=y;v++)D[v]=R/y|0,y*=4294967296;return new o(D,0)}function h(R,D){if(R.length==0)throw Error("number format error: empty string");if(D=D||10,D<2||36<D)throw Error("radix out of range: "+D);if(R.charAt(0)=="-")return L(h(R.substring(1),D));if(R.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=u(Math.pow(D,8));let v=d;for(let P=0;P<R.length;P+=8){var A=Math.min(8,R.length-P);const w=parseInt(R.substring(P,P+A),D);A<8?(A=u(Math.pow(D,A)),v=v.j(A).add(u(w))):(v=v.j(y),v=v.add(u(w)))}return v}var d=c(0),p=c(1),E=c(16777216);r=o.prototype,r.m=function(){if(S(this))return-L(this).m();let R=0,D=1;for(let y=0;y<this.g.length;y++){const v=this.i(y);R+=(v>=0?v:4294967296+v)*D,D*=4294967296}return R},r.toString=function(R){if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(_(this))return"0";if(S(this))return"-"+L(this).toString(R);const D=u(Math.pow(R,6));var y=this;let v="";for(;;){const A=Ce(y,D).g;y=H(y,A.j(D));let P=((y.g.length>0?y.g[0]:y.h)>>>0).toString(R);if(y=A,_(y))return P+v;for(;P.length<6;)P="0"+P;v=P+v}},r.i=function(R){return R<0?0:R<this.g.length?this.g[R]:this.h};function _(R){if(R.h!=0)return!1;for(let D=0;D<R.g.length;D++)if(R.g[D]!=0)return!1;return!0}function S(R){return R.h==-1}r.l=function(R){return R=H(this,R),S(R)?-1:_(R)?0:1};function L(R){const D=R.g.length,y=[];for(let v=0;v<D;v++)y[v]=~R.g[v];return new o(y,~R.h).add(p)}r.abs=function(){return S(this)?L(this):this},r.add=function(R){const D=Math.max(this.g.length,R.g.length),y=[];let v=0;for(let A=0;A<=D;A++){let P=v+(this.i(A)&65535)+(R.i(A)&65535),w=(P>>>16)+(this.i(A)>>>16)+(R.i(A)>>>16);v=w>>>16,P&=65535,w&=65535,y[A]=w<<16|P}return new o(y,y[y.length-1]&-2147483648?-1:0)};function H(R,D){return R.add(L(D))}r.j=function(R){if(_(this)||_(R))return d;if(S(this))return S(R)?L(this).j(L(R)):L(L(this).j(R));if(S(R))return L(this.j(L(R)));if(this.l(E)<0&&R.l(E)<0)return u(this.m()*R.m());const D=this.g.length+R.g.length,y=[];for(var v=0;v<2*D;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(let A=0;A<R.g.length;A++){const P=this.i(v)>>>16,w=this.i(v)&65535,ut=R.i(A)>>>16,rr=R.i(A)&65535;y[2*v+2*A]+=w*rr,W(y,2*v+2*A),y[2*v+2*A+1]+=P*rr,W(y,2*v+2*A+1),y[2*v+2*A+1]+=w*ut,W(y,2*v+2*A+1),y[2*v+2*A+2]+=P*ut,W(y,2*v+2*A+2)}for(R=0;R<D;R++)y[R]=y[2*R+1]<<16|y[2*R];for(R=D;R<2*D;R++)y[R]=0;return new o(y,0)};function W(R,D){for(;(R[D]&65535)!=R[D];)R[D+1]+=R[D]>>>16,R[D]&=65535,D++}function ee(R,D){this.g=R,this.h=D}function Ce(R,D){if(_(D))throw Error("division by zero");if(_(R))return new ee(d,d);if(S(R))return D=Ce(L(R),D),new ee(L(D.g),L(D.h));if(S(D))return D=Ce(R,L(D)),new ee(L(D.g),D.h);if(R.g.length>30){if(S(R)||S(D))throw Error("slowDivide_ only works with positive integers.");for(var y=p,v=D;v.l(R)<=0;)y=Ae(y),v=Ae(v);var A=Se(y,1),P=Se(v,1);for(v=Se(v,2),y=Se(y,2);!_(v);){var w=P.add(v);w.l(R)<=0&&(A=A.add(y),P=w),v=Se(v,1),y=Se(y,1)}return D=H(R,A.j(D)),new ee(A,D)}for(A=d;R.l(D)>=0;){for(y=Math.max(1,Math.floor(R.m()/D.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),P=u(y),w=P.j(D);S(w)||w.l(R)>0;)y-=v,P=u(y),w=P.j(D);_(P)&&(P=p),A=A.add(P),R=H(R,w)}return new ee(A,R)}r.B=function(R){return Ce(this,R).h},r.and=function(R){const D=Math.max(this.g.length,R.g.length),y=[];for(let v=0;v<D;v++)y[v]=this.i(v)&R.i(v);return new o(y,this.h&R.h)},r.or=function(R){const D=Math.max(this.g.length,R.g.length),y=[];for(let v=0;v<D;v++)y[v]=this.i(v)|R.i(v);return new o(y,this.h|R.h)},r.xor=function(R){const D=Math.max(this.g.length,R.g.length),y=[];for(let v=0;v<D;v++)y[v]=this.i(v)^R.i(v);return new o(y,this.h^R.h)};function Ae(R){const D=R.g.length+1,y=[];for(let v=0;v<D;v++)y[v]=R.i(v)<<1|R.i(v-1)>>>31;return new o(y,R.h)}function Se(R,D){const y=D>>5;D%=32;const v=R.g.length-y,A=[];for(let P=0;P<v;P++)A[P]=D>0?R.i(P+y)>>>D|R.i(P+y+1)<<32-D:R.i(P+y);return new o(A,R.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,QC=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,xn=o}).apply(typeof Yh<"u"?Yh:typeof self<"u"?self:typeof window<"u"?window:{});var ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var YC,xs,XC,wo,ic,ZC,ep,tp;(function(){var r,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ro=="object"&&ro];for(var l=0;l<a.length;++l){var f=a[l];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var n=t(this);function s(a,l){if(l)e:{var f=n;a=a.split(".");for(var C=0;C<a.length-1;C++){var b=a[C];if(!(b in f))break e;f=f[b]}a=a[a.length-1],C=f[a],l=l(C),l!=C&&l!=null&&e(f,a,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(l){var f=[],C;for(C in l)Object.prototype.hasOwnProperty.call(l,C)&&f.push([C,l[C]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function B(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function c(a,l,f){return a.call.apply(a.bind,arguments)}function u(a,l,f){return u=c,u.apply(null,arguments)}function h(a,l){var f=Array.prototype.slice.call(arguments,1);return function(){var C=f.slice();return C.push.apply(C,arguments),a.apply(this,C)}}function d(a,l){function f(){}f.prototype=l.prototype,a.Z=l.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(C,b,O){for(var q=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)q[ae-2]=arguments[ae];return l.prototype[b].apply(C,q)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function E(a){const l=a.length;if(l>0){const f=Array(l);for(let C=0;C<l;C++)f[C]=a[C];return f}return[]}function _(a,l){for(let C=1;C<arguments.length;C++){const b=arguments[C];var f=typeof b;if(f=f!="object"?f:b?Array.isArray(b)?"array":f:"null",f=="array"||f=="object"&&typeof b.length=="number"){f=a.length||0;const O=b.length||0;a.length=f+O;for(let q=0;q<O;q++)a[f+q]=b[q]}else a.push(b)}}class S{constructor(l,f){this.i=l,this.j=f,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function L(a){o.setTimeout(()=>{throw a},0)}function H(){var a=R;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class W{constructor(){this.h=this.g=null}add(l,f){const C=ee.get();C.set(l,f),this.h?this.h.next=C:this.g=C,this.h=C}}var ee=new S(()=>new Ce,a=>a.reset());class Ce{constructor(){this.next=this.g=this.h=null}set(l,f){this.h=l,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,Se=!1,R=new W,D=()=>{const a=Promise.resolve(void 0);Ae=()=>{a.then(y)}};function y(){for(var a;a=H();){try{a.h.call(a.g)}catch(f){L(f)}var l=ee;l.j(a),l.h<100&&(l.h++,a.next=l.g,l.g=a)}Se=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,l),o.removeEventListener("test",f,l)}catch{}return a}();function w(a){return/^[\s\xa0]*$/.test(a)}function ut(a,l){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,l)}d(ut,A),ut.prototype.init=function(a,l){const f=this.type=a.type,C=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget,l||(f=="mouseover"?l=a.fromElement:f=="mouseout"&&(l=a.toElement)),this.relatedTarget=l,C?(this.clientX=C.clientX!==void 0?C.clientX:C.pageX,this.clientY=C.clientY!==void 0?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ut.Z.h.call(this)},ut.prototype.h=function(){ut.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var rr="closure_listenable_"+(Math.random()*1e6|0),bm=0;function Sm(a,l,f,C,b){this.listener=a,this.proxy=null,this.src=l,this.type=f,this.capture=!!C,this.ha=b,this.key=++bm,this.da=this.fa=!1}function xi(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Vi(a,l,f){for(const C in a)l.call(f,a[C],C,a)}function Pm(a,l){for(const f in a)l.call(void 0,a[f],f,a)}function cl(a){const l={};for(const f in a)l[f]=a[f];return l}const ul="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ll(a,l){let f,C;for(let b=1;b<arguments.length;b++){C=arguments[b];for(f in C)a[f]=C[f];for(let O=0;O<ul.length;O++)f=ul[O],Object.prototype.hasOwnProperty.call(C,f)&&(a[f]=C[f])}}function Gi(a){this.src=a,this.g={},this.h=0}Gi.prototype.add=function(a,l,f,C,b){const O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);const q=Va(a,l,C,b);return q>-1?(l=a[q],f||(l.fa=!1)):(l=new Sm(l,this.src,O,!!C,b),l.fa=f,a.push(l)),l};function xa(a,l){const f=l.type;if(f in a.g){var C=a.g[f],b=Array.prototype.indexOf.call(C,l,void 0),O;(O=b>=0)&&Array.prototype.splice.call(C,b,1),O&&(xi(l),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Va(a,l,f,C){for(let b=0;b<a.length;++b){const O=a[b];if(!O.da&&O.listener==l&&O.capture==!!f&&O.ha==C)return b}return-1}var Ga="closure_lm_"+(Math.random()*1e6|0),Ha={};function hl(a,l,f,C,b){if(Array.isArray(l)){for(let O=0;O<l.length;O++)hl(a,l[O],f,C,b);return null}return f=Cl(f),a&&a[rr]?a.J(l,f,B(C)?!!C.capture:!1,b):Om(a,l,f,!1,C,b)}function Om(a,l,f,C,b,O){if(!l)throw Error("Invalid event type");const q=B(b)?!!b.capture:!!b;let ae=ja(a);if(ae||(a[Ga]=ae=new Gi(a)),f=ae.add(l,f,C,q,O),f.proxy)return f;if(C=Nm(),f.proxy=C,C.src=a,C.listener=f,a.addEventListener)P||(b=q),b===void 0&&(b=!1),a.addEventListener(l.toString(),C,b);else if(a.attachEvent)a.attachEvent(dl(l.toString()),C);else if(a.addListener&&a.removeListener)a.addListener(C);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Nm(){function a(f){return l.call(a.src,a.listener,f)}const l=Lm;return a}function fl(a,l,f,C,b){if(Array.isArray(l))for(var O=0;O<l.length;O++)fl(a,l[O],f,C,b);else C=B(C)?!!C.capture:!!C,f=Cl(f),a&&a[rr]?(a=a.i,O=String(l).toString(),O in a.g&&(l=a.g[O],f=Va(l,f,C,b),f>-1&&(xi(l[f]),Array.prototype.splice.call(l,f,1),l.length==0&&(delete a.g[O],a.h--)))):a&&(a=ja(a))&&(l=a.g[l.toString()],a=-1,l&&(a=Va(l,f,C,b)),(f=a>-1?l[a]:null)&&Ua(f))}function Ua(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[rr])xa(l.i,a);else{var f=a.type,C=a.proxy;l.removeEventListener?l.removeEventListener(f,C,a.capture):l.detachEvent?l.detachEvent(dl(f),C):l.addListener&&l.removeListener&&l.removeListener(C),(f=ja(l))?(xa(f,a),f.h==0&&(f.src=null,l[Ga]=null)):xi(a)}}}function dl(a){return a in Ha?Ha[a]:Ha[a]="on"+a}function Lm(a,l){if(a.da)a=!0;else{l=new ut(l,this);const f=a.listener,C=a.ha||a.src;a.fa&&Ua(a),a=f.call(C,l)}return a}function ja(a){return a=a[Ga],a instanceof Gi?a:null}var Ja="__closure_events_fn_"+(Math.random()*1e9>>>0);function Cl(a){return typeof a=="function"?a:(a[Ja]||(a[Ja]=function(l){return a.handleEvent(l)}),a[Ja])}function Xe(){v.call(this),this.i=new Gi(this),this.M=this,this.G=null}d(Xe,v),Xe.prototype[rr]=!0,Xe.prototype.removeEventListener=function(a,l,f,C){fl(this,a,l,f,C)};function it(a,l){var f,C=a.G;if(C)for(f=[];C;C=C.G)f.push(C);if(a=a.M,C=l.type||l,typeof l=="string")l=new A(l,a);else if(l instanceof A)l.target=l.target||a;else{var b=l;l=new A(C,a),ll(l,b)}b=!0;let O,q;if(f)for(q=f.length-1;q>=0;q--)O=l.g=f[q],b=Hi(O,C,!0,l)&&b;if(O=l.g=a,b=Hi(O,C,!0,l)&&b,b=Hi(O,C,!1,l)&&b,f)for(q=0;q<f.length;q++)O=l.g=f[q],b=Hi(O,C,!1,l)&&b}Xe.prototype.N=function(){if(Xe.Z.N.call(this),this.i){var a=this.i;for(const l in a.g){const f=a.g[l];for(let C=0;C<f.length;C++)xi(f[C]);delete a.g[l],a.h--}}this.G=null},Xe.prototype.J=function(a,l,f,C){return this.i.add(String(a),l,!1,f,C)},Xe.prototype.K=function(a,l,f,C){return this.i.add(String(a),l,!0,f,C)};function Hi(a,l,f,C){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();let b=!0;for(let O=0;O<l.length;++O){const q=l[O];if(q&&!q.da&&q.capture==f){const ae=q.listener,Ue=q.ha||q.src;q.fa&&xa(a.i,q),b=ae.call(Ue,C)!==!1&&b}}return b&&!C.defaultPrevented}function Fm(a,l){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:o.setTimeout(a,l||0)}function pl(a){a.g=Fm(()=>{a.g=null,a.i&&(a.i=!1,pl(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class km extends v{constructor(l,f){super(),this.m=l,this.l=f,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:pl(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ms(a){v.call(this),this.h=a,this.g={}}d(ms,v);var gl=[];function ml(a){Vi(a.g,function(l,f){this.g.hasOwnProperty(f)&&Ua(l)},a),a.g={}}ms.prototype.N=function(){ms.Z.N.call(this),ml(this)},ms.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qa=o.JSON.stringify,Mm=o.JSON.parse,xm=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function El(){}function _l(){}var Es={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ka(){A.call(this,"d")}d(Ka,A);function $a(){A.call(this,"c")}d($a,A);var sr={},Dl=null;function Ui(){return Dl=Dl||new Xe}sr.Ia="serverreachability";function wl(a){A.call(this,sr.Ia,a)}d(wl,A);function _s(a){const l=Ui();it(l,new wl(l))}sr.STAT_EVENT="statevent";function yl(a,l){A.call(this,sr.STAT_EVENT,a),this.stat=l}d(yl,A);function ot(a){const l=Ui();it(l,new yl(l,a))}sr.Ja="timingevent";function Il(a,l){A.call(this,sr.Ja,a),this.size=l}d(Il,A);function Ds(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},l)}function ws(){this.g=!0}ws.prototype.ua=function(){this.g=!1};function Vm(a,l,f,C,b,O){a.info(function(){if(a.g)if(O){var q="",ae=O.split("&");for(let De=0;De<ae.length;De++){var Ue=ae[De].split("=");if(Ue.length>1){const $e=Ue[0];Ue=Ue[1];const qt=$e.split("_");q=qt.length>=2&&qt[1]=="type"?q+($e+"="+Ue+"&"):q+($e+"=redacted&")}}}else q=null;else q=O;return"XMLHTTP REQ ("+C+") [attempt "+b+"]: "+l+`
`+f+`
`+q})}function Gm(a,l,f,C,b,O,q){a.info(function(){return"XMLHTTP RESP ("+C+") [ attempt "+b+"]: "+l+`
`+f+`
`+O+" "+q})}function kr(a,l,f,C){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+Um(a,f)+(C?" "+C:"")})}function Hm(a,l){a.info(function(){return"TIMEOUT: "+l})}ws.prototype.info=function(){};function Um(a,l){if(!a.g)return l;if(!l)return null;try{const O=JSON.parse(l);if(O){for(a=0;a<O.length;a++)if(Array.isArray(O[a])){var f=O[a];if(!(f.length<2)){var C=f[1];if(Array.isArray(C)&&!(C.length<1)){var b=C[0];if(b!="noop"&&b!="stop"&&b!="close")for(let q=1;q<C.length;q++)C[q]=""}}}}return qa(O)}catch{return l}}var ji={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Tl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Al;function za(){}d(za,El),za.prototype.g=function(){return new XMLHttpRequest},Al=new za;function ys(a){return encodeURIComponent(String(a))}function jm(a){var l=1;a=a.split(":");const f=[];for(;l>0&&a.length;)f.push(a.shift()),l--;return a.length&&f.push(a.join(":")),f}function En(a,l,f,C){this.j=a,this.i=l,this.l=f,this.S=C||1,this.V=new ms(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Rl}function Rl(){this.i=null,this.g="",this.h=!1}var vl={},Wa={};function Qa(a,l,f){a.M=1,a.A=qi(Jt(l)),a.u=f,a.R=!0,bl(a,null)}function bl(a,l){a.F=Date.now(),Ji(a),a.B=Jt(a.A);var f=a.B,C=a.S;Array.isArray(C)||(C=[String(C)]),Ul(f.i,"t",C),a.C=0,f=a.j.L,a.h=new Rl,a.g=oh(a.j,f?l:null,!a.u),a.P>0&&(a.O=new km(u(a.Y,a,a.g),a.P)),l=a.V,f=a.g,C=a.ba;var b="readystatechange";Array.isArray(b)||(b&&(gl[0]=b.toString()),b=gl);for(let O=0;O<b.length;O++){const q=hl(f,b[O],C||l.handleEvent,!1,l.h||l);if(!q)break;l.g[q.key]=q}l=a.J?cl(a.J):{},a.u?(a.v||(a.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,l)):(a.v="GET",a.g.ea(a.B,a.v,null,l)),_s(),Vm(a.i,a.v,a.B,a.l,a.S,a.u)}En.prototype.ba=function(a){a=a.target;const l=this.O;l&&wn(a)==3?l.j():this.Y(a)},En.prototype.Y=function(a){try{if(a==this.g)e:{const ae=wn(this.g),Ue=this.g.ya(),De=this.g.ca();if(!(ae<3)&&(ae!=3||this.g&&(this.h.h||this.g.la()||Wl(this.g)))){this.K||ae!=4||Ue==7||(Ue==8||De<=0?_s(3):_s(2)),Ya(this);var l=this.g.ca();this.X=l;var f=Jm(this);if(this.o=l==200,Gm(this.i,this.v,this.B,this.l,this.S,ae,l),this.o){if(this.U&&!this.L){t:{if(this.g){var C,b=this.g;if((C=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(C)){var O=C;break t}}O=null}if(a=O)kr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Xa(this,a);else{this.o=!1,this.m=3,ot(12),ir(this),Is(this);break e}}if(this.R){a=!0;let $e;for(;!this.K&&this.C<f.length;)if($e=qm(this,f),$e==Wa){ae==4&&(this.m=4,ot(14),a=!1),kr(this.i,this.l,null,"[Incomplete Response]");break}else if($e==vl){this.m=4,ot(15),kr(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else kr(this.i,this.l,$e,null),Xa(this,$e);if(Sl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ae!=4||f.length!=0||this.h.h||(this.m=1,ot(16),a=!1),this.o=this.o&&a,!a)kr(this.i,this.l,f,"[Invalid Chunked Response]"),ir(this),Is(this);else if(f.length>0&&!this.W){this.W=!0;var q=this.j;q.g==this&&q.aa&&!q.P&&(q.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),oB(q),q.P=!0,ot(11))}}else kr(this.i,this.l,f,null),Xa(this,f);ae==4&&ir(this),this.o&&!this.K&&(ae==4?nh(this.j,this):(this.o=!1,Ji(this)))}else iE(this.g),l==400&&f.indexOf("Unknown SID")>0?(this.m=3,ot(12)):(this.m=0,ot(13)),ir(this),Is(this)}}}catch{}finally{}};function Jm(a){if(!Sl(a))return a.g.la();const l=Wl(a.g);if(l==="")return"";let f="";const C=l.length,b=wn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return ir(a),Is(a),"";a.h.i=new o.TextDecoder}for(let O=0;O<C;O++)a.h.h=!0,f+=a.h.i.decode(l[O],{stream:!(b&&O==C-1)});return l.length=0,a.h.g+=f,a.C=0,a.h.g}function Sl(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function qm(a,l){var f=a.C,C=l.indexOf(`
`,f);return C==-1?Wa:(f=Number(l.substring(f,C)),isNaN(f)?vl:(C+=1,C+f>l.length?Wa:(l=l.slice(C,C+f),a.C=C+f,l)))}En.prototype.cancel=function(){this.K=!0,ir(this)};function Ji(a){a.T=Date.now()+a.H,Pl(a,a.H)}function Pl(a,l){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ds(u(a.aa,a),l)}function Ya(a){a.D&&(o.clearTimeout(a.D),a.D=null)}En.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Hm(this.i,this.B),this.M!=2&&(_s(),ot(17)),ir(this),this.m=2,Is(this)):Pl(this,this.T-a)};function Is(a){a.j.I==0||a.K||nh(a.j,a)}function ir(a){Ya(a);var l=a.O;l&&typeof l.dispose=="function"&&l.dispose(),a.O=null,ml(a.V),a.g&&(l=a.g,a.g=null,l.abort(),l.dispose())}function Xa(a,l){try{var f=a.j;if(f.I!=0&&(f.g==a||Za(f.h,a))){if(!a.L&&Za(f.h,a)&&f.I==3){try{var C=f.Ba.g.parse(l)}catch{C=null}if(Array.isArray(C)&&C.length==3){var b=C;if(b[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Qi(f),zi(f);else break e;iB(f),ot(18)}}else f.xa=b[1],0<f.xa-f.K&&b[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Ds(u(f.Va,f),6e3));Ll(f.h)<=1&&f.ta&&(f.ta=void 0)}else ar(f,11)}else if((a.L||f.g==a)&&Qi(f),!w(l))for(b=f.Ba.g.parse(l),l=0;l<b.length;l++){let De=b[l];const $e=De[0];if(!($e<=f.K))if(f.K=$e,De=De[1],f.I==2)if(De[0]=="c"){f.M=De[1],f.ba=De[2];const qt=De[3];qt!=null&&(f.ka=qt,f.j.info("VER="+f.ka));const Br=De[4];Br!=null&&(f.za=Br,f.j.info("SVER="+f.za));const yn=De[5];yn!=null&&typeof yn=="number"&&yn>0&&(C=1.5*yn,f.O=C,f.j.info("backChannelRequestTimeoutMs_="+C)),C=f;const In=a.g;if(In){const Xi=In.g?In.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xi){var O=C.h;O.g||Xi.indexOf("spdy")==-1&&Xi.indexOf("quic")==-1&&Xi.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(eB(O,O.h),O.h=null))}if(C.G){const aB=In.g?In.g.getResponseHeader("X-HTTP-Session-Id"):null;aB&&(C.wa=aB,Ie(C.J,C.G,aB))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),C=f;var q=a;if(C.na=ih(C,C.L?C.ba:null,C.W),q.L){Fl(C.h,q);var ae=q,Ue=C.O;Ue&&(ae.H=Ue),ae.D&&(Ya(ae),Ji(ae)),C.g=q}else eh(C);f.i.length>0&&Wi(f)}else De[0]!="stop"&&De[0]!="close"||ar(f,7);else f.I==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?ar(f,7):sB(f):De[0]!="noop"&&f.l&&f.l.qa(De),f.A=0)}}_s(4)}catch{}}var Km=class{constructor(a,l){this.g=a,this.map=l}};function Ol(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Nl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ll(a){return a.h?1:a.g?a.g.size:0}function Za(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function eB(a,l){a.g?a.g.add(l):a.h=l}function Fl(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}Ol.prototype.cancel=function(){if(this.i=kl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function kl(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const f of a.g.values())l=l.concat(f.G);return l}return E(a.i)}var Ml=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $m(a,l){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const C=a[f].indexOf("=");let b,O=null;C>=0?(b=a[f].substring(0,C),O=a[f].substring(C+1)):b=a[f],l(b,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function _n(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;a instanceof _n?(this.l=a.l,Ts(this,a.j),this.o=a.o,this.g=a.g,As(this,a.u),this.h=a.h,tB(this,jl(a.i)),this.m=a.m):a&&(l=String(a).match(Ml))?(this.l=!1,Ts(this,l[1]||"",!0),this.o=Rs(l[2]||""),this.g=Rs(l[3]||"",!0),As(this,l[4]),this.h=Rs(l[5]||"",!0),tB(this,l[6]||"",!0),this.m=Rs(l[7]||"")):(this.l=!1,this.i=new bs(null,this.l))}_n.prototype.toString=function(){const a=[];var l=this.j;l&&a.push(vs(l,xl,!0),":");var f=this.g;return(f||l=="file")&&(a.push("//"),(l=this.o)&&a.push(vs(l,xl,!0),"@"),a.push(ys(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(vs(f,f.charAt(0)=="/"?Qm:Wm,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",vs(f,Xm)),a.join("")},_n.prototype.resolve=function(a){const l=Jt(this);let f=!!a.j;f?Ts(l,a.j):f=!!a.o,f?l.o=a.o:f=!!a.g,f?l.g=a.g:f=a.u!=null;var C=a.h;if(f)As(l,a.u);else if(f=!!a.h){if(C.charAt(0)!="/")if(this.g&&!this.h)C="/"+C;else{var b=l.h.lastIndexOf("/");b!=-1&&(C=l.h.slice(0,b+1)+C)}if(b=C,b==".."||b==".")C="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){C=b.lastIndexOf("/",0)==0,b=b.split("/");const O=[];for(let q=0;q<b.length;){const ae=b[q++];ae=="."?C&&q==b.length&&O.push(""):ae==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),C&&q==b.length&&O.push("")):(O.push(ae),C=!0)}C=O.join("/")}else C=b}return f?l.h=C:f=a.i.toString()!=="",f?tB(l,jl(a.i)):f=!!a.m,f&&(l.m=a.m),l};function Jt(a){return new _n(a)}function Ts(a,l,f){a.j=f?Rs(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function As(a,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);a.u=l}else a.u=null}function tB(a,l,f){l instanceof bs?(a.i=l,Zm(a.i,a.l)):(f||(l=vs(l,Ym)),a.i=new bs(l,a.l))}function Ie(a,l,f){a.i.set(l,f)}function qi(a){return Ie(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Rs(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function vs(a,l,f){return typeof a=="string"?(a=encodeURI(a).replace(l,zm),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function zm(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var xl=/[#\/\?@]/g,Wm=/[#\?:]/g,Qm=/[#\?]/g,Ym=/[#\?@]/g,Xm=/#/g;function bs(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function or(a){a.g||(a.g=new Map,a.h=0,a.i&&$m(a.i,function(l,f){a.add(decodeURIComponent(l.replace(/\+/g," ")),f)}))}r=bs.prototype,r.add=function(a,l){or(this),this.i=null,a=Mr(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(l),this.h+=1,this};function Vl(a,l){or(a),l=Mr(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function Gl(a,l){return or(a),l=Mr(a,l),a.g.has(l)}r.forEach=function(a,l){or(this),this.g.forEach(function(f,C){f.forEach(function(b){a.call(l,b,C,this)},this)},this)};function Hl(a,l){or(a);let f=[];if(typeof l=="string")Gl(a,l)&&(f=f.concat(a.g.get(Mr(a,l))));else for(a=Array.from(a.g.values()),l=0;l<a.length;l++)f=f.concat(a[l]);return f}r.set=function(a,l){return or(this),this.i=null,a=Mr(this,a),Gl(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},r.get=function(a,l){return a?(a=Hl(this,a),a.length>0?String(a[0]):l):l};function Ul(a,l,f){Vl(a,l),f.length>0&&(a.i=null,a.g.set(Mr(a,l),E(f)),a.h+=f.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(let C=0;C<l.length;C++){var f=l[C];const b=ys(f);f=Hl(this,f);for(let O=0;O<f.length;O++){let q=b;f[O]!==""&&(q+="="+ys(f[O])),a.push(q)}}return this.i=a.join("&")};function jl(a){const l=new bs;return l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),l}function Mr(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function Zm(a,l){l&&!a.j&&(or(a),a.i=null,a.g.forEach(function(f,C){const b=C.toLowerCase();C!=b&&(Vl(this,C),Ul(this,b,f))},a)),a.j=l}function eE(a,l){const f=new ws;if(o.Image){const C=new Image;C.onload=h(Dn,f,"TestLoadImage: loaded",!0,l,C),C.onerror=h(Dn,f,"TestLoadImage: error",!1,l,C),C.onabort=h(Dn,f,"TestLoadImage: abort",!1,l,C),C.ontimeout=h(Dn,f,"TestLoadImage: timeout",!1,l,C),o.setTimeout(function(){C.ontimeout&&C.ontimeout()},1e4),C.src=a}else l(!1)}function tE(a,l){const f=new ws,C=new AbortController,b=setTimeout(()=>{C.abort(),Dn(f,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:C.signal}).then(O=>{clearTimeout(b),O.ok?Dn(f,"TestPingServer: ok",!0,l):Dn(f,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),Dn(f,"TestPingServer: error",!1,l)})}function Dn(a,l,f,C,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),C(f)}catch{}}function nE(){this.g=new xm}function nB(a){this.i=a.Sb||null,this.h=a.ab||!1}d(nB,El),nB.prototype.g=function(){return new Ki(this.i,this.h)};function Ki(a,l){Xe.call(this),this.H=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(Ki,Xe),r=Ki.prototype,r.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=l,this.readyState=1,Ps(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(l.body=a),(this.H||o).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ss(this)),this.readyState=0},r.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ps(this)),this.g&&(this.readyState=3,Ps(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Jl(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Jl(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}r.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?Ss(this):Ps(this),this.readyState==3&&Jl(this)}},r.Oa=function(a){this.g&&(this.response=this.responseText=a,Ss(this))},r.Na=function(a){this.g&&(this.response=a,Ss(this))},r.ga=function(){this.g&&Ss(this)};function Ss(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ps(a)}r.setRequestHeader=function(a,l){this.A.append(a,l)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var f=l.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=l.next();return a.join(`\r
`)};function Ps(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ql(a){let l="";return Vi(a,function(f,C){l+=C,l+=":",l+=f,l+=`\r
`}),l}function rB(a,l,f){e:{for(C in f){var C=!1;break e}C=!0}C||(f=ql(f),typeof a=="string"?f!=null&&ys(f):Ie(a,l,f))}function Pe(a){Xe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(Pe,Xe);var rE=/^https?$/i,sE=["POST","PUT"];r=Pe.prototype,r.Fa=function(a){this.H=a},r.ea=function(a,l,f,C){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Al.g(),this.g.onreadystatechange=p(u(this.Ca,this));try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(O){Kl(this,O);return}if(a=f||"",f=new Map(this.headers),C)if(Object.getPrototypeOf(C)===Object.prototype)for(var b in C)f.set(b,C[b]);else if(typeof C.keys=="function"&&typeof C.get=="function")for(const O of C.keys())f.set(O,C.get(O));else throw Error("Unknown input type for opt_headers: "+String(C));C=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),b=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(sE,l,void 0)>=0)||C||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,q]of f)this.g.setRequestHeader(O,q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(O){Kl(this,O)}};function Kl(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.o=5,$l(a),$i(a)}function $l(a){a.A||(a.A=!0,it(a,"complete"),it(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,it(this,"complete"),it(this,"abort"),$i(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$i(this,!0)),Pe.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?zl(this):this.Xa())},r.Xa=function(){zl(this)};function zl(a){if(a.h&&typeof i<"u"){if(a.v&&wn(a)==4)setTimeout(a.Ca.bind(a),0);else if(it(a,"readystatechange"),wn(a)==4){a.h=!1;try{const O=a.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var f;if(!(f=l)){var C;if(C=O===0){let q=String(a.D).match(Ml)[1]||null;!q&&o.self&&o.self.location&&(q=o.self.location.protocol.slice(0,-1)),C=!rE.test(q?q.toLowerCase():"")}f=C}if(f)it(a,"complete"),it(a,"success");else{a.o=6;try{var b=wn(a)>2?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.ca()+"]",$l(a)}}finally{$i(a)}}}}function $i(a,l){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,l||it(a,"ready");try{f.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function wn(a){return a.g?a.g.readyState:0}r.ca=function(){try{return wn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),Mm(l)}};function Wl(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function iE(a){const l={};a=(a.g&&wn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let C=0;C<a.length;C++){if(w(a[C]))continue;var f=jm(a[C]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=l[b]||[];l[b]=O,O.push(f)}Pm(l,function(C){return C.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Os(a,l,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||l}function Ql(a){this.za=0,this.i=[],this.j=new ws,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Os("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Os("baseRetryDelayMs",5e3,a),this.Za=Os("retryDelaySeedMs",1e4,a),this.Ta=Os("forwardChannelMaxRetries",2,a),this.va=Os("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Ol(a&&a.concurrentRequestLimit),this.Ba=new nE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Ql.prototype,r.ka=8,r.I=1,r.connect=function(a,l,f,C){ot(0),this.W=a,this.H=l||{},f&&C!==void 0&&(this.H.OSID=f,this.H.OAID=C),this.F=this.X,this.J=ih(this,null,this.W),Wi(this)};function sB(a){if(Yl(a),a.I==3){var l=a.V++,f=Jt(a.J);if(Ie(f,"SID",a.M),Ie(f,"RID",l),Ie(f,"TYPE","terminate"),Ns(a,f),l=new En(a,a.j,l),l.M=2,l.A=qi(Jt(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(l.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=l.A,f=!0),f||(l.g=oh(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Ji(l)}sh(a)}function zi(a){a.g&&(oB(a),a.g.cancel(),a.g=null)}function Yl(a){zi(a),a.v&&(o.clearTimeout(a.v),a.v=null),Qi(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Wi(a){if(!Nl(a.h)&&!a.m){a.m=!0;var l=a.Ea;Ae||D(),Se||(Ae(),Se=!0),R.add(l,a),a.D=0}}function oE(a,l){return Ll(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=l.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ds(u(a.Ea,a,l),rh(a,a.D)),a.D++,!0)}r.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const b=new En(this,this.j,a);let O=this.o;if(this.U&&(O?(O=cl(O),ll(O,this.U)):O=this.U),this.u!==null||this.R||(b.J=O,O=null),this.S)e:{for(var l=0,f=0;f<this.i.length;f++){t:{var C=this.i[f];if("__data__"in C.map&&(C=C.map.__data__,typeof C=="string")){C=C.length;break t}C=void 0}if(C===void 0)break;if(l+=C,l>4096){l=f;break e}if(l===4096||f===this.i.length-1){l=f+1;break e}}l=1e3}else l=1e3;l=Zl(this,b,l),f=Jt(this.J),Ie(f,"RID",a),Ie(f,"CVER",22),this.G&&Ie(f,"X-HTTP-Session-Id",this.G),Ns(this,f),O&&(this.R?l="headers="+ys(ql(O))+"&"+l:this.u&&rB(f,this.u,O)),eB(this.h,b),this.Ra&&Ie(f,"TYPE","init"),this.S?(Ie(f,"$req",l),Ie(f,"SID","null"),b.U=!0,Qa(b,f,null)):Qa(b,f,l),this.I=2}}else this.I==3&&(a?Xl(this,a):this.i.length==0||Nl(this.h)||Xl(this))};function Xl(a,l){var f;l?f=l.l:f=a.V++;const C=Jt(a.J);Ie(C,"SID",a.M),Ie(C,"RID",f),Ie(C,"AID",a.K),Ns(a,C),a.u&&a.o&&rB(C,a.u,a.o),f=new En(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),l&&(a.i=l.G.concat(a.i)),l=Zl(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),eB(a.h,f),Qa(f,C,l)}function Ns(a,l){a.H&&Vi(a.H,function(f,C){Ie(l,C,f)}),a.l&&Vi({},function(f,C){Ie(l,C,f)})}function Zl(a,l,f){f=Math.min(a.i.length,f);const C=a.l?u(a.l.Ka,a.l,a):null;e:{var b=a.i;let ae=-1;for(;;){const Ue=["count="+f];ae==-1?f>0?(ae=b[0].g,Ue.push("ofs="+ae)):ae=0:Ue.push("ofs="+ae);let De=!0;for(let $e=0;$e<f;$e++){var O=b[$e].g;const qt=b[$e].map;if(O-=ae,O<0)ae=Math.max(0,b[$e].g-100),De=!1;else try{O="req"+O+"_"||"";try{var q=qt instanceof Map?qt:Object.entries(qt);for(const[Br,yn]of q){let In=yn;B(yn)&&(In=qa(yn)),Ue.push(O+Br+"="+encodeURIComponent(In))}}catch(Br){throw Ue.push(O+"type="+encodeURIComponent("_badmap")),Br}}catch{C&&C(qt)}}if(De){q=Ue.join("&");break e}}q=void 0}return a=a.i.splice(0,f),l.G=a,q}function eh(a){if(!a.g&&!a.v){a.Y=1;var l=a.Da;Ae||D(),Se||(Ae(),Se=!0),R.add(l,a),a.A=0}}function iB(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ds(u(a.Da,a),rh(a,a.A)),a.A++,!0)}r.Da=function(){if(this.v=null,th(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ds(u(this.Wa,this),a)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ot(10),zi(this),th(this))};function oB(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function th(a){a.g=new En(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var l=Jt(a.na);Ie(l,"RID","rpc"),Ie(l,"SID",a.M),Ie(l,"AID",a.K),Ie(l,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ie(l,"TO",a.ia),Ie(l,"TYPE","xmlhttp"),Ns(a,l),a.u&&a.o&&rB(l,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=qi(Jt(l)),f.u=null,f.R=!0,bl(f,a)}r.Va=function(){this.C!=null&&(this.C=null,zi(this),iB(this),ot(19))};function Qi(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function nh(a,l){var f=null;if(a.g==l){Qi(a),oB(a),a.g=null;var C=2}else if(Za(a.h,l))f=l.G,Fl(a.h,l),C=1;else return;if(a.I!=0){if(l.o)if(C==1){f=l.u?l.u.length:0,l=Date.now()-l.F;var b=a.D;C=Ui(),it(C,new Il(C,f)),Wi(a)}else eh(a);else if(b=l.m,b==3||b==0&&l.X>0||!(C==1&&oE(a,l)||C==2&&iB(a)))switch(f&&f.length>0&&(l=a.h,l.i=l.i.concat(f)),b){case 1:ar(a,5);break;case 4:ar(a,10);break;case 3:ar(a,6);break;default:ar(a,2)}}}function rh(a,l){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*l}function ar(a,l){if(a.j.info("Error code "+l),l==2){var f=u(a.bb,a),C=a.Ua;const b=!C;C=new _n(C||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ts(C,"https"),qi(C),b?eE(C.toString(),f):tE(C.toString(),f)}else ot(2);a.I=0,a.l&&a.l.pa(l),sh(a),Yl(a)}r.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function sh(a){if(a.I=0,a.ja=[],a.l){const l=kl(a.h);(l.length!=0||a.i.length!=0)&&(_(a.ja,l),_(a.ja,a.i),a.h.i.length=0,E(a.i),a.i.length=0),a.l.oa()}}function ih(a,l,f){var C=f instanceof _n?Jt(f):new _n(f);if(C.g!="")l&&(C.g=l+"."+C.g),As(C,C.u);else{var b=o.location;C=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;const O=new _n(null);C&&Ts(O,C),l&&(O.g=l),b&&As(O,b),f&&(O.h=f),C=O}return f=a.G,l=a.wa,f&&l&&Ie(C,f,l),Ie(C,"VER",a.ka),Ns(a,C),C}function oh(a,l,f){if(l&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Aa&&!a.ma?new Pe(new nB({ab:f})):new Pe(a.ma),l.Fa(a.L),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ah(){}r=ah.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Yi(){}Yi.prototype.g=function(a,l){return new _t(a,l)};function _t(a,l){Xe.call(this),this.g=new Ql(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(a?a["X-WebChannel-Client-Profile"]=l.sa:a={"X-WebChannel-Client-Profile":l.sa}),this.g.U=a,(a=l&&l.Qb)&&!w(a)&&(this.g.u=a),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!w(l)&&(this.g.G=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new xr(this)}d(_t,Xe),_t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},_t.prototype.close=function(){sB(this.g)},_t.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=qa(a),a=f);l.i.push(new Km(l.Ya++,a)),l.I==3&&Wi(l)},_t.prototype.N=function(){this.g.l=null,delete this.j,sB(this.g),delete this.g,_t.Z.N.call(this)};function Bh(a){Ka.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const f in l){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}d(Bh,Ka);function ch(){$a.call(this),this.status=1}d(ch,$a);function xr(a){this.g=a}d(xr,ah),xr.prototype.ra=function(){it(this.g,"a")},xr.prototype.qa=function(a){it(this.g,new Bh(a))},xr.prototype.pa=function(a){it(this.g,new ch)},xr.prototype.oa=function(){it(this.g,"b")},Yi.prototype.createWebChannel=Yi.prototype.g,_t.prototype.send=_t.prototype.o,_t.prototype.open=_t.prototype.m,_t.prototype.close=_t.prototype.close,tp=function(){return new Yi},ep=function(){return Ui()},ZC=sr,ic={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ji.NO_ERROR=0,ji.TIMEOUT=8,ji.HTTP_ERROR=6,wo=ji,Tl.COMPLETE="complete",XC=Tl,_l.EventType=Es,Es.OPEN="a",Es.CLOSE="b",Es.ERROR="c",Es.MESSAGE="d",Xe.prototype.listen=Xe.prototype.J,xs=_l,Pe.prototype.listenOnce=Pe.prototype.K,Pe.prototype.getLastError=Pe.prototype.Ha,Pe.prototype.getLastErrorCode=Pe.prototype.ya,Pe.prototype.getStatus=Pe.prototype.ca,Pe.prototype.getResponseJson=Pe.prototype.La,Pe.prototype.getResponseText=Pe.prototype.la,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Fa,YC=Pe}).apply(typeof ro<"u"?ro:typeof self<"u"?self:typeof window<"u"?window:{});/*!
* re2js
* RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
*
* @version v2.10.0
* @author Oleksii Vasyliev
* @homepage https://github.com/le0pard/re2js#readme
* @repository [object Object]
* @license MIT
*/var we,V=(we=class{},G(we,"FOLD_CASE",1),G(we,"LITERAL",2),G(we,"CLASS_NL",4),G(we,"DOT_NL",8),G(we,"ONE_LINE",16),G(we,"NON_GREEDY",32),G(we,"PERL_X",64),G(we,"UNICODE_GROUPS",128),G(we,"WAS_DOLLAR",256),G(we,"LOOKBEHIND",512),G(we,"MATCH_NL",we.CLASS_NL|we.DOT_NL),G(we,"PERL",we.CLASS_NL|we.ONE_LINE|we.PERL_X|we.UNICODE_GROUPS),G(we,"POSIX",0),G(we,"UNANCHORED",0),G(we,"ANCHOR_START",1),G(we,"ANCHOR_BOTH",2),we);const Vr={CASE_INSENSITIVE:1,DOTALL:2,MULTILINE:4,DISABLE_UNICODE_GROUPS:8,LONGEST_MATCH:16,LOOKBEHINDS:512},ti=128,oc=new Int32Array(ti),ac=new Int32Array(ti),so=65535;for(let r=0;r<ti;r++)r>=97&&r<=122?oc[r]=r-32:oc[r]=r,r>=65&&r<=90?ac[r]=r+32:ac[r]=r;var $B,k=($B=class{static toUpperCase(r){if(r<ti)return oc[r];const e=String.fromCodePoint(r).toUpperCase(),t=e.codePointAt(0)>so?2:1;if(e.length>t)return r;const n=String.fromCodePoint(e.codePointAt(0)).toLowerCase(),s=n.codePointAt(0)>so?2:1;return n.length>s||n.codePointAt(0)!==r?r:e.codePointAt(0)}static toLowerCase(r){if(r<ti)return ac[r];const e=String.fromCodePoint(r).toLowerCase(),t=e.codePointAt(0)>so?2:1;if(e.length>t)return r;const n=String.fromCodePoint(e.codePointAt(0)).toUpperCase(),s=n.codePointAt(0)>so?2:1;return n.length>s||n.codePointAt(0)!==r?r:e.codePointAt(0)}},G($B,"CODES",Object.freeze({"\x07":7,"\b":8,"	":9,"\n":10,"\v":11,"\f":12,"\r":13," ":32,'"':34,$:36,"&":38,"'":39,"(":40,")":41,"*":42,"+":43,"-":45,".":46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,":":58,"<":60,">":62,"?":63,A:65,B:66,C:67,F:70,P:80,Q:81,U:85,Z:90,"[":91,"\\":92,"]":93,"^":94,_:95,"`":96,a:97,b:98,f:102,i:105,m:109,n:110,r:114,s:115,t:116,v:118,x:120,z:122,"{":123,"|":124,"}":125})),$B),g=class{constructor(r,e=!1){this.data=r,this.isStride1=e,this.SIZE=e?2:3}getLo(r){return this.data[r*this.SIZE]}getHi(r){return this.data[r*this.SIZE+1]}getStride(r){return this.isStride1?1:this.data[r*this.SIZE+2]}get length(){return this.data.length/this.SIZE}};const wI="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-",np=new Uint8Array(256);for(let r=0;r<64;r++)np[wI.charCodeAt(r)]=r;const rp=r=>{const e=[];let t=0,n=0;for(let s=0;s<r.length;s++){const i=np[r.charCodeAt(s)];t|=(i&31)<<n,i&32?n+=5:(e.push(t),t=0,n=0)}return e},m=(r,e)=>{const t=rp(r),n=e?t.length/2:t.length/3,s=new Uint32Array(n*3);let i=0,o=0;for(let B=0;B<n;B++)i+=t[o++],s[B*3]=i,i+=t[o++],s[B*3+1]=i,s[B*3+2]=e?1:t[o++];return s},yI=r=>{const e=rp(r),t=new Map;let n=0;for(let s=0;s<e.length;s+=2){n+=e[s];const i=e[s+1],o=i>>>1^-(i&1);t.set(n,n+o)}return t};var io=class{constructor(r){this.initializer=r,this.cache=new Map}has(r){return Object.hasOwn(this.initializer,r)}get(r){if(this.cache.has(r))return this.cache.get(r);const e=this.has(r)?this.initializer[r]():null;return this.cache.set(r,e),e}},An,Dt=(An=class{static get CASE_ORBIT(){return this._CASE_ORBIT||(this._CASE_ORBIT=yI("rCgCIgCY+rQI4QiCuuBLgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCCgCBgCBgCBgCBgCBgCBgCB+7OB-BB-BB-BB-BB-BBskQB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BC-BB-BB-BB-BB-BB-BB-BByHBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBxHBCBBBCBBBCBBB3SBmMBkNBCBBBCBBB8MBCBBB6MB6MBCBBC+EB0MB2MBCBBB6MB+MBiGBmNBiNBCBBBmKBikzCBmNBqNBkIBsNBCBBBCBBBCBBB0NBCBBB0NDCBBB0NBCBBByNByNBCBBBCBBB2NBCBBDCBBCwDFCBCBDBCBCBDBCBCBDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB9EBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBCBDBCBBBhGBvDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBjICCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBH2iVBCBBBlKBwiVB+jVB+jVBCBBBlMBqEBuEBCBBBCBBBCBBBCBBBCBBB+hVB4hVB8hVBjNB7MC5MB5MCzMC1MB+0yCE5MB20yCC9MBu2yCBwyyCBo0yCChNBlNBo0yCBu-UBi0yCDlNC6-UBpNDrNIu+UDzNCm0yCBzNE0yyCBzNBpEBxNBxNBtEG1NLqxyCBkxyCnFoFrBCBBBCBBDCBBEkIBkIBkICoHHsCCqCBqCBqCCgEC+DB+DBmkOBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCC+BBgCBgCBgCBgCBgCBgCBgCBgCBrCBpCBpCBpCBmjOB-BB8BB-BB-BBgEB-BB-BByBBqgOBsDB-BBtwBB-BB-BB-BBsBBgDBCB-BB-BB-BBeB-BB-BB61OB-BB-BB-DB9DB9DBQB7DBmCE9CBrDBPBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBrFB-EBOBnHB3FB-FCCBBBNBCBBCjIBjIBjIBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB8kMB-BB6kMB-BB-BB-BB-BB-BB-BB-BB-BB-BBokMB-BB-BBkkMBkkMB-BB-BB-BB-BB-BB-BB-BB4jMB-BB-BB-BB-BB-BB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EBCBBBCBoiMBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBJCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBeBCBBBCBBBCBBBCBBBCBBBCBBBCBBBdBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDL-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-C64CgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOCgmOGgmODg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FDg8FBg8FBg8FhVg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBQBQBQBQBQBQDPBPBPBPBPBPjkC7mMB5mMBnmMBjmMBCBlmMB3lMBpiMBk8kCBCBBG-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FD-7FB-7FB-7F6FoglCEsuHRwjlCyDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCB0DBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBG1DD97OCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPEQCQCQCQCPCPCPCPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPB0EB0EBsFBsFBsFBsFBoGBoGBgIBgIBgHBgHB8HB8HDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQCSFPBPBzEBzEBRCxnOFSFrFBrFBrFBrFBREQBQClkOFPBPBnGBnGFQBQCljOCODPBPB-GB-GBNHSF-HB-HB7HB7HBRqJ53OE9tQBrmQH4Bc3BSgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfECBByZ0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzB34BgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CBCBBBt-UBruHBt+UB1iVBviVBCBBBCBBBCBBB3hVB5-UB9hVB7hVCCBBCCBBI9jVB9jVBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBICBBBCBBECBBN-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOC-lOG-lOzoeCBBBCBBBCBBBCBBBCBBBCBl8kCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBTCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBnECBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBKCBBBCBBBnglCBCBBBCBBBCBBBCBBBCBBECBBBvyyCDCBBBCBBBgDCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBn0yCB90yCB10yCBh0yCBn0yCCjxyCBzyyCBpxyCBg6BBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB-CBl0yCBvjlCBCBBBCBBBt2yCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBhkzCZCBB9a-5Bd-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCm6TCBB7gBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCH-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BmlBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvChDwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCFvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvC1DuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCCuCBuCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCCtCBtCk2BgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEO-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-D+CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCL-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-B74CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhrVgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BD1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BtxekCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjC")),this._CASE_ORBIT}static get Print(){return this._Print||(this._Print=new g(m("hB9CBjBLBCpWBDFBFGBCCCBSBCsMBClBBDxBBDCBC2BBJaBFFBSVBC-FBCvBBD6BBDkDBP6BBDwBBDOBCbBDCCBJBGfBIqCBCgFBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYBDCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPBLCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGBCCBCHBDBBDVBCGBCBBCEBDIBDBBDCBICBFBBCEBDRBLBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBGMBCCBCWBCPBDIBCCBCDBIBBCCBCBBDDBDJBIVBCCBCWBCJBCEBDIBCCBCDBIBBGCBCDBDJBCCBNMBCCBCyBBCCBCFBFPBDZBCCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBN5BBFcBmBBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDBhBnCBCjBBFmBBCjBBCOBCMBmBlGBCGGD4LBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBH1CBDFBD-TBCbBE4CBIVBKXBKTBNMBCCBCBBN9CBDJBHJBHNBCKBH4CBIqBBGlCBLeBCLBFLBFEEBoBBDEBMrBBFZBHKBE9BBDgCBCcBDKBHJBHNBDtBBDLBVsCBClFBJ7BBEOBE9BBGqBBDKBJqBBG1QBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBSXBJuBBSBBDaBCMBEhBBPgBBQrEBF5UBXKBWz4BBD9LBGsBBCGGD3BBIBBPXBKGBCGBCGBCGBCGBCGBCGBCGBC9DBjBZBC4CBN1GBbPBC+BBC1CBDmDBGqBBC9CBC1CBKvBBCszcBE2BBK7KBV3FBJ8GBV7BBEJBH3BBJlCBJLBHzDBMdBEtCBCKBFgBBC2BBKNBDJBDmDBZbBLFBDFBDFBKGBCGBC7BBF9DBDJBHj9KBNWBFwBBloItLBDpDBnBGBNEBGZBCEBCCCBCCBCCBoUBhBpBBHyBBCSBCDBFEBCmEBF9FBEFBDFBDFBDCBEGBCGBOBBDLBCZBCSBCBBCOBDNBjB6DBGCBFsBBE3CBCMBEwBwBBsBBjEcBEwBBQbBFjBBKdBGqBBGdBCkBBFNBrB9EBDJBHjBBFjBBFnBBJzBBMLBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBCnCBJIBxBSBCBBGgBBEaBGaBnB3BBFTBDxBBCBBGHBCCBCcBDCBFJBIIBI-BBhBmBBFLBK1BBEcBDaBGZBIDBNGBxCoCB4ByBBOyBBItBBJJBHlBBEcBJBBxGeBCpBBCCBDBBRFBJIBiBtBBJpBBXZBnBbBVWBKtCBFjBBK9BBCEBOYBIJBH0BBCRBJmBBK-CBCTBMRBCuBB-BGBCCCBCBCOBCKBH6BBGJBHDBCHBDBBDVBCGBCBBCEBCJBDBBDCBDHHGGBDGBEEBMJBCDDClBBCJBCDDCDBCJBCBBJBBe7CBCEBfnCBJJBnF1BBDlBBjBkCBMJBHMBU5BBHJBHTBdaBDOBFWB6F7BBlDyCBNHBDDDBGBCBBCdBCBBDLBKJBnCHBDtBBDKBcnCBJyCBOoCBIJB3CHB5ChBBPJBHIBCsBBCNBLcBEfBDVBCNBqCGBCBBCrBBECCBCCBHBJJBHFBCBBCkBBCBBCFBIJBHrBBFJB3HYBIQBCoBBEcB2CQQBwBBO6cBnDuDBCEBMjGBtyCiDBOvhBBRVBL68DBGmSB61G5BBn2B4RBIeBCJBFwCBCJBHdBDFBLlCBLJBCGBCUBGSBxN5BBnG6CBGYBDYBtBqCBF4BBIQBhCEBMGBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBDDBh7D8HBEzNBHWBQQBQtBBDWBKzDB9B1HBLmBBDpCBJvDBWlCB7DTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBD9VBQEBCOBxiBeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBENBDJBFBBhKeBS5BBGxOxOBoBB3GqBBFhGhGBdBCVBJBBhHGBCDBCBBCOBCkGBDPBqBrCBFJBFBByYjCBtC8BBjGDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBBvIrBBFjDBNOBDOBCOBCkBBLtFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBmgB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIBnkzVvHB",!1))),this._Print}},G(An,"_CASE_ORBIT",null),G(An,"_Print",null),G(An,"CATEGORIES",new io({C:()=>new g(m("AfBgDgBBOrWrWBHHBCBICCVuMuMnBBBzBBBE4B4BBGBcDBHQBXhGhGxBBB8BBBmDNB8BBByBBBQddBCCMEBhBGBsCiFiFJBBDBBXIICCBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBPMMBEB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKMMBDBbEByBPBDBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCB-FCBHBBHBBHBBECBIIIBLBDBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIB-BGGBLBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMBxhBPBXJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBF-6DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBrCHBxDUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIlkzVBxHvw-FB",!1)),Cc:()=>new g(m("AfgDgB",!0)),Cf:()=>new g(m("tFzqBzqBBEBXhGhGyBhMhMBxCxCs5D9-B9-BBDBbEByBEBCJBw03B6H6HBBBimEQQj7IPBhjiBDBwmFHBn0rYffB+CB",!1)),Cn:()=>new g(m("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBDBvzIBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-BB---BBB---BBB",!1)),Co:()=>new g(m("gg4B-nGh4hc9--BD9--B",!0)),Cs:()=>new g(m("gg2B--B",!0)),L:()=>new g(m("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICCiEEBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoCaBFDBuBqBBkBBBCiDBCQQBIIBLLBBBDRRCdBe4CBMZZBfBKBBFGGBUBFKKEYYBXBIKBGXBCGBRpBB7B1BBETTIJBQPBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNGB7BBBCCCBDBCXBCCCBIBCBBKDDBDBCWWBCBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNSSBkBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBkBFFkC4CBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBzC+C+CBtBBSHB3BdBOBBLrBBbjBBqBCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBhC1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBF1B1BB8zC8zCBjHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBxC2O2OBrBrBBDBGBBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBReBDlCByBIBDmDBDxCBVQBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBdRRBDBCJBLEBCoBBYCBCHBVWBEEEBwBBCEEBDDBDBDCCZCBDKBICBNFBDFBDFBKGBCGBCqBBCNBHyDBej9KBNWBFwBBloItLBDpDBnBGBNEBGCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBxB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOjBBnBbBKWB7HpBBHBBRFB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB1D-BBgBHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBqBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBGjCjCBLBhCBBCPPBNNB0mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBn7F0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFBmI9BBzEsBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCCBCBBCGBDEBKBBhHGBCDBCBBCOBCkGB8BjCBI1lB1lBBCBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),LC:()=>new g(m("hCZBHZB7BLLBVBCeBCiGBCDBFvGBDZBhGDBDBBECBCHHCCBCCCBSBCyCBCqEBJlFBClBBKoBB44ClBBCGGDqBBDCBhV1CBDFBjkCKBGqBBDCBhCrBBgCMBChBBmD1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGBmIFFDJBCEEBDBHGCBCBCFBFDDBCBGEBF1B1BB8zC8zCB6DBDmDBHDBEBBNlBBCGGzoetBBTbBnEtCBCWBEDBCsCBZBBE2Z2ZBpBBGIBIvCBh6TGBNEBqgBZBHZBmlBvCBhDjBBFjBB1DKBCOBCGBCBBCKBCOBCGBCBBk2ByBBOyBB+CVBLVB74C-BBhrV-BBhBYBDYBtpZ0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BJBCTBHFB2uCjCB",!1)),Ll:()=>new g(m("hDZB7BqBqBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDZBiGCCEEEBBBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBDCB5XFBjkCIBC2D2DBqBBgCMBChBBnD0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBBzIEEBEEcKFDBBJDBF2B2Bs1CvBBCEEBGCFCCBCCBEBGiDCBIICFFNlBBCGG0oesBCUaCoEMCBBBC+BCBGBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCbEE2ZqBBGIBIvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFB4vChBB",!1)),Lm:()=>new g(m("wVRBFLBPEBICCmEGG-OnHnHlFBBuIBBFgBgBKEEhFoFoF1mBgEgE2R72B72BsDkTkTxOFBvF+BBOjBjBBjBByVOORMBg-CBByHgGgG2OsBsBBDBGiDiDB+C+CBBB34bjnBjnBBEBvIzDzDdBB6DIBxCYYpDDBEBB2OXXqEtDtDWBBoDDBKngVngVuBBBh-BFBCpBBCIB0sBhBhB2K04D04DnrTDB9PCBpBBBnRMBhCBBCPPB9-P9-PBCBCGBCBByhM9BBqGGBud0Q0QsSAB",!1)),Lo:()=>new g(m("qFQQhIFFBCBxGBB7ZaBFDBuBfBCJBkBBBCiDBCZZBLLBBBDRRCdBe4CBMZZBfBWVBrBYBIKBGXBCGBRoBB8B1BBETTIJBROBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNFB8BBBCCCBDBCXBCCCBIBCBBKDDBDBYDBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNyDyDBnKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPByDrTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBpBkCkCBhBBC0BBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBxFuBBSHB3BdBOBBLrBBbjBBqBCBLdByDDBCFBCBBE7hB7hBBCB4-C3BBZWBKGBCGBCGBCGBCGBCGBCGBCGBoR2B2BF1CBJCCB4CBFGGBpBBC9CBSfBxBPBhQ-tGBhC0wUBC2jBBkCnBBJrIBFPBLBBjCyByBBkCBqFoDoDEGBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBuBEBDIBLEBCoBBYCBCHBVPBCFBEEEBwBBCEEBDDBDBDCCZBBEKBIPPBEBDFBDFBKGBCGByEiBBej9KBNWBFwBBloItLBDpDBkCCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBqDJBCsBBDeBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBhEtCBjDnBBJzBB9CzBBN2JBKVBLHB5EFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4FjBBnBDBCxJxJBoBBHBBRCBCBB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB0GHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBnBBCBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBB0BUBGSB0NnBB2MqCBGwFwFB0mHBqBfBiDyDBuwIiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBxzI2P2PBrBBiBiKiKBcBTrBBlPaBmHdBDwGwGBdBCCBCBBCGBDEBKiHiHBFBCDBCBBCOBCkGB8pBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Lt:()=>new g(m("lOGDnB2sH2sHBGBJHBJHBNQQwBAB",!1)),Lu:()=>new g(m("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBG+B+B9zCvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBB",!1)),M:()=>new g(m("gYvDB0IGBoIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCgBB3BCBCRBCGBLBBeCB5BCCBFBDBBDCBKLLBbbDCB5BCCBDBFBBDCBEffBEEMCB5BCCBGBCCBCCBVBBXFBCCB5BCCBFBDBBDCBICBLBBf8B8BBDBECBCDBKpBpBBDB4BCCBFBCCBCDBIBBMBBeCB5BCCBFBCCBCDBIBBMBBQNNBCB4BBBCGBCCBCDBKLLBeeBBBnCFFBEBCCCBGBTBB+BDDBFBNHBjDDDBHBMGBqCBBcECFBByBTBCBBGKBCjBBKlDlDBSBYDBFCBCCBDGBEDBOLBCLLBCBgWCBzdDBdCBeBBfBBhCfBKuBuBBBBC2D2DBjBjB3DLBFLB8GEB6BJBCcBDxBxBBsBBDLBVEBwBQBnBIBNCBfMB5BNBxBTB5ECBCUBFHHDCBnG-BBxWgBB--CCBuEhDhDBeBrRFBqDBB1udDBCJBhBBBxCBBxIEEFYYBDBF0C0CBzBzBBQBbRBOnBnBBGBaMBtBDBwBNBlBkCkCBMBNJJBuBuBBBBzBCCBBBDBBGBBCqBqBBDBGBBtHHBCBBx5TiXiXBOBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB7DCB2BOBqBDDBLLBCBuBKBI+B+BBBBlBNBRBBtBNNBBBxBNBJDBCBB9CLBHDD+ELBWDB4BBBCGBDBBDCBKLLBDDBFBEEBkCIBCDDCDBCEBCPPBzCzCBQBYyCyCBSBsHGBDIBcBBzCQBrDMBmDOBhIOB2HFBCBBDDBCCCBuEuEBFBDGBEddBIBpBGBCDBJKKBJBvBPBnGHBoGHBCHBzCVBCNB7DFBECCBCCBFBCjCjCBDBCBBCEB8KDBKBBCxBxBBFBEEBYmnFmnFHOBpmLRBhuCEB8BGB5gBCCB1BBIDByCMMBslTslTBizEizEBsBBDWB-QEBEFBJHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),Mc:()=>new g(m("joC4B4BDCBJDBCBBzBBB7BCBHBBDBBLsBsB7BCBjC7B7BBBBJCCB2B2BB7B7BCHHBDDBLLnDBBCBBECBCCBLqBqBBBB+BDB+BBB7BCCBDBDBBCBBKBBdPPB7B7BBBBGCBCCBLrBrBBsCsCBBBHHBTBBrKBBgCsFsFBFFHDDBaaBLLBBBDGBWBBDFBDLLBBB5zBffiEIIBGBCBB7KDBDCBFBBCFBhHBB7BCCKCCBJJBEByExBxBGCCBDBCBB+BffFBBD9B9BDCBCEEBxBxBBGBJBBsFWW35EBB0-dBBD5C5CBzBzBBOBvEBBwBxBxBBFFBDDBBBvDBBDBBZuBuBCuDuDDBBGuHuHBCCBCCBCC0gZCCgEuBuBBBBFBB0DZZB8B8BxBCBKBBO+C+CBBBEBBCrFrFBBBgBBB7BBBCDBDBBDCBKLLB1C1CBBBIDDCDBCBBCmDmDBBBJBBErDrDBBBHCCBCBDuHuHBBBHDBDyDyDBBBJBBCuDuDCBBHoDoDCBBFmImIBBBK4H4HBEBCBBFDDCvEvEBBBJDBF1C1CeBB-BqGqGECCoGPPrDIID2G2GBDBFBBC-K-KBNNxBBBJBBCpvQpvQBBBlxD2BBpDBB0rYBBHFB",!1)),Me:()=>new g(m("okBBB1xF-wB-wBBCBCCBsshBCB",!1)),Mn:()=>new g(m("gYvDB0IEBqIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCfB4BCCFHBFEEBFBLBBe7B7BFDBJVVBbbDBB6BFFBFFBDDBBBEffBEEMBB6BFFBDBCBBFVVBXXBEBC7B7BDCCBCBJIIBMMBff+BNNzBEE4BCCBBBGCBCDBIBBMBBe7B7BDHHGBBVBBdBB6BBBFDBJVVBeepCIIBBBC7C7CDGBNHBjDDDBHBMGBqCBBcEC4BNBCEBCBBGKBCjBBKnDnDBCBCFBCBBDBBaBBFCBRDBODDBHHQgWgWBBBzdCBeBBfBBfBBhCBBCGBJDDBJBKuBuBBBBC2D2DBjBjB3DCBFBBKHHBBB8GBBD7B7BCGBCCCDHBHJBDxBxBBMBCeBDLBVDBxBCCBDBCGGpBIBNBBhBDBDBBCCB5BCCBEECCB7BHBDBB5ECBCMBCGBFHHEBBnG-BBxWMBFEEBKB--CCBuEhDhDBeBrRDBsDBB1udFFBIBhBBBxCBBxIEEFaaBGG4EBBbRBOnBnBBGBaKBvBCBxBDDBCBDBBoBkCkCBEBDBBDBBNJJwB0B0BCCBDBBGBBCrBrBBJJvHDDFx5Tx5TiXPBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB8D3B3BBNBqBDDBLLBBByBDBDBBI+B+BBBBlBEBCHB-BNNB1B1BBHBLDBDgDgDBBBDCCBHHD+E+EEHBWBB6BBBEmBmBBFBEEBnCFBOECPBB2CHBDCBCYY1CFBCFFBCCBvHvHBCBHBBCBBcBB2CHBDCCBrDrDCDDBEBCmDmDCDDBCBCEBkIIBCBBhIBBCFFxEDBDBBFhBhBBIBpBFBDDBJKKBEBDCBvBMBCBBnGCCBBBCqGqGBFBCFBCzCzCBUBDGBCBBCBB7DFBECCBCCBFBCpCpCBEEC8K8KBMMB1B1BBDBGCCYmnFmnFHOBpmLLBECBhuCEB8BGB5gBgCgCBCByC5lT5lTBizEizEBsBBDWBhRCBSHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),N:()=>new g(m("wBJB5DBBGDDBBBitBJBnEJBnGJB9MJB3DJBFFBtDJB3DJB3DJBDFBvDMB0DJBJGBoDJBpDGBISBuDJBhDJB3DJBnCTBtIJBnCJBwWTBybCBwHJBHJBXJBtJJBhEKBmFJBHJB3FJB3CJBnEJBHJB3gBEEBEBHJBnGyBBDEB3W7BBvCVB3TdBqrBqYqYaIBPCB4KDBrEJBfHBCOBhBJBoBOBh7cJB9FJBhKFB7EJBnBJBnGJBXJB3CJB3MJB34UJBuPsBBN4BBSBB2KaBlBDBeJJnEEBrGJBvdHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBxBJBHJB3IeB-EJBrBDBxDGBnEdBhEJB9BJBxEJBITB8HJB3KJB3DJB3LJBnDJBHTBtCLBlNSB+CJB3UJB3CcBkHJBnCJB3BJBnLJBnDUBshBuDBimPJBnpCJB3CJBnEJBCGBvQJBnIWB+KCB6nXJBnuBTBNTBtDYB2iBxBBhqCJBnNJB3PJB4HJBtWIBhEJB4Y6BBCCBCDBtCsBBCOBjeMBk3CJB",!1)),Nd:()=>new g(m("wBJnxBJnEJnGJ9MJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJhDJ3DJnCJ3IJnCJn6BJnBJtJJhEJnFJHJ3FJ3CJnEJHJnuiBJnVJnBJnGJXJ3CJ3MJ34UJnsBJnkCJHJ9YJhEJ9BJxEJ3IJ3KJ3DJ3LJnDJHTtCJnNJnDJ3UJ3CJ3HJnCJ3BJnLJ3uQJnpCJ3CJnEJ3QJ37XJ12CxBhqCJnNJ3PJ4HJ2aJ30EJ",!0)),Nl:()=>new g(m("u3FCBwzCiBBDDB-zDaaBHBPCBs1dJBxyW0BBtOJJnEEBrhIuDBm8SCB",!1)),No:()=>new g(m("yFBBGDDBBB2pCFB5LFB5DCBmEGB6GGBSIByNJB2hBTB0jBJBhP20B20BEFBHJBnGPBqB3W3WB6BBvCVB3TdBqrB1kB1kBBCBrEJBfHBCOBhBJBoBOBxrdFBymWsBBiCDBSBB2KaBlBDB1pBHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBhLeB-EJBrBDBxDGBnETB8LTBmqBBBvNIBobSB0aUBn8SGB-YWBqhZTBNTBtDYBvqFIBid6BBCCBCDBtCsBBCOBjeMB",!1)),P:()=>new g(m("hBCBCFBCDBLBBEBBbCBCccCkBkBGEELBBEEE-VJJzOFBqBBB0BCCDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCmBmBBCBoCrCrCBDBFBBwDFBsFlTlTBHB4EuTuTtBBBvCCBoCBB+ECBCCBmBKB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBM9Z9ZBWBJTBCMBCLBfBBPBB6TDBeBB+hBNBwCBBgBJB0MVBgCDBhBBB8XDBCBBxDwEwEBtBBCfBDLBkNCBFJBDLBRNNjD7C7CjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HzqUzqUBxGxGBIBXiBBCNBCFFCBB2ECBCFBCDBLBBEBBbCBCccCCCBFB7MCB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDByO-J-JjBlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Pc:()=>new g(m("-Cg-Hg-HBUU-u3BBBZCBwHAB",!1)),Pd:()=>new g(m("tB9qB9qB0BiyDiyDmgBqgCqgCBEBiwDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Pe:()=>new g(m("pB0B0BgB+1D+1DC-6B-6BqtC4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECtBGCtNICEGCDBB-ozB6G6GeOCESSCCCrF0B0BgBGD",!1)),Pf:()=>new g(m("7F+6H+6HEddpuDCCFDDQEE",!1)),Pi:()=>new g(m("rFt7Ht7HDBBDaapuDCCFDDQEE",!1)),Po:()=>new g(m("hBCBCCBDECBLLBEEBcclCGGPBBI-V-VJzOzOBEBqB3B3BDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCxDxDrCEBFBBwDFBsFlTlTBHBmY9D9DBBBoCBB+ECBCCBmBFBCDB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBMjajaBJJBGBJIBDDBDCBEKBCCCBIB7kDDBCBBxDwEwEBFFBBBDDDBHBCBBCDDBLLBDBCJBDDBCCCBLBDCBtNCB6B+F+FjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HlxUlxUBFBDXXVBBDDBECBCDBICBHCCB2E2EBBBCCBDECBLLBEEBcclBDDB7M7MBBB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDB0ZlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Ps:()=>new g(m("oBzBzBgB-1D-1DC-6B-6B-rCEEnB4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECaTTCECtNICEGCDipzBipzB4GeeCMCESSCCCrFzBzBgBEEDAB",!1)),S:()=>new g(m("kBHHRCBgBCCcCCkBEBCBBDCCBCBDEEfgBgBrODBNNBGGBCCCBPB2DPPBxDxDsErIrIBBB3DCBDDDBvGvGLUUB4H4HIBBpEqLqLBHHB2H2H-DjEjEBGBlEwGwGqBmGmGiGCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WuLuLlL+E+EBgBBiLJBKIBhiBCCBBBMCBOCBOCBOBBmCOOoBCBOCBUhBB-BBBCDBCBBLCCBBBGFBCECFMMBFFBDBGDBC7B7BBFFB2LBFcBD+HBXKByCtCBXnTBtBwBBDeBLyMBX+BBFfBD1LBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBB8CBB0HBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BB6RWBKBBoDBB+EDBLDB+RCBiHPPB+9T+9TpEgBBuLPBhCBB3BHBtBDBjDCCBBBD7E7EHRRBBBgBCCcCCiEGBCGBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSmWmWBiKiKBGBnjC2kC2kCBbBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQQBgDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBrbaagBaagBaagBaagBaa9B-PB4BDBzBHBCNBCBBp2BwNwNttCEE+DiOiOBvIvIBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Sc:()=>new g(m("kB+D+DBCBqnB8D8DzPBBzPBBI2H2HoImSmS8sClmClmCBgBB37hBkuVkuVtD7E7E8GBBEBB3-HDB-4wBxtCxtC",!1)),Sk:()=>new g(m("+CCCoCHHFEEqQDBNNBGGBCCCBPB2DPPBjoBjoB15FCCBBBMCBOCBOCBOBB9kEBBkzdWBKBBoDBBxePPBniUniUBPB8bCCjF4g9B4g9BBDB",!1)),Sm:()=>new g(m("rBRRBBB+BCCuBFFmBgBgB-XwQwQBBB8xGOOoBCBOCBsEoBoBBDBHlClCBDBGBBFGDIgBgBBDDCgBgBBqIBhBBB7CffBXBpBFB2OKK3BHBwDxKxKBDBDeBLPBhIiEBX+BBFfBDhIBxBUBDFB9+zB5Z5ZCCBlFRRBBB+BCCkEHHBCBitDBBhrwBx+Bx+BagBgBagBgBagBgBagBgBat5Ft5FB-uC-uCBHB",!1)),So:()=>new g(m("mFDDFCCyerIrIBgEgEBvGvGLUUB4H4HkQ2L2LjEFBClElEwGqBqBoMCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WzWzW+EhBBiLJBKIBksBBBCDBCBBLCCBHHBEBCECFMMBPPCBBC7B7BBKKBDBDDBCBBCBBCGBCeBDBBCCCBdBtIHBFTBDGBDwCBCdBanBBHnCBXKByCtCBX2FBCIBC1BBJuDBC3HBtBrBBhC-HBhQvBBWBBHmBBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBBxKBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BBibDBLBBC+R+RBBBqqUPBuLPBhCBB3BHBuBCBlPEEFBBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSpgBpgBBGBnjC2kC2kCBGBFQBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQPBhDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBqlB-PB4BDBzBHBCNBCBBp2B96C96CiEyWyWBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E6HBG4WBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBB-B3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Z:()=>new g(m("gBgEgEgvFgsCgsCBJBeBBGwBwBh9DAB",!1)),Zl:()=>new g(m("ohIA",!0)),Zp:()=>new g(m("phIA",!0)),Zs:()=>new g(m("gBgEgEgvFgsCgsCBJBlBwBwBh9DAB",!1)),ASCII_Hex_Digit:()=>new g(m("wBJIFbF",!0)),Alphabetic:()=>new g(m("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICC3CeeBQBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoBNBCCCBCCBCCJaBFDBeKBG3BBCGBPlDBCHBFHBFCBLCBDRRBuBBOkDBZgBBKBBFGGBWBDSBUYBIKBGXBCGBIJJBoBBLLBEGBHrCBCPBCCBFOBOSBCHBDBBDVBCGBCEEBCBEHBDBBDBBCJJFBBCEBNBBLFFBBBCFBFBBDVBCGBCBBCBBCBBFEBFBBDBBFIIBCBCSSBEBMCBCIBCCBCVBCGBCBBCEBEIBCCBCBBEQQBCBWDBFCBCHBDBBDVBCGBCBBCEBEHBDBBDBBKBBFBBCEBORRBCCBEBECBCDBEBBCCCBEEBEEBBBELBFEBECBCCBEHHpBMBCCBCWBCPBEHBCCBCCBJBBCCBCBBDDBdDBCHBCCBCWBCJBCEBEHBCCBCCBJBBGCBCDBOCBNMBCCBCoBBDHBCCBCCBCGGBCBIEBXFBCCBCRBEXBCIBCDDBFBJFBCCCBGBTBBO5BBGGBH0B0BBECBDBCXBCCCBRBCCBDEBCHHPDBhBgCgCBGBCjBBFSBFPBCjBBkC2BBCDDBDBR-BBLDBDlBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBEKBITBMUBNTBNMBCCBCBBNzBBDSBPFFkC4CBIqBBGlCBLeBCLBFIBYdBDEBMrBBFZB3BbBF+BBDTBzBYYBMMBBByBzBBCOBCHB0BpBBDDBLrBBCKBP2BBXCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBUhBBM1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBFSSBnBBuZzBB34BkHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBCfBwB2O2OBBBaIBIEBDEBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBGHBEwDBoBIBDmDBDxCBVUBCgBBZzBBNjCBCtBtBBEBECCBBBLgBBGiBBOcBEyBBCLBQRRBOBLEBC2BBKNBTWBEkCBCCCZCBDPBDDBMFBDFBDFBKGBCGBCqBBCNBH6DBWj9KBNWBFwBBloItLBDpDBnBGBNEBGLBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmC0BBsIcBEwBBwBfBOdBGqBBGdBDjBBFHBCEBrB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCDBCBBGHBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOnBBjBbBEGGBVB7HpBBCBBEBBRFBzBCBEcBLJJBUBrBRBvBUBcWBKlCBsBEBL4BBKOOBXBYyBBSDBJiBBEKKB+BBCDBKBBLCCkBRBChBBDHHBCB-BGBCCCBCBCOBCJBI4BBYDBCHBDBBDVBCGBCBBCEBEHBDBBDBBEHHGGBdJBCDDClBBCJBCDDCDBCBBECCtBhCBCCBCDBVCBfhCBDBBC5F5FB0BBDGBaFBjB+BBCEE8B1BBDoCoCBZBDNBWGB6F4BBoD-BBgBHBDDDBGBCBBCdBCBBDBBDDB+CHBDtBBDFBCCCBccBxBBDJBSnCBGTTBnCBoDHB5CgBBgBIBCsBBCGBCyByBBcBDVBCNBqCGBCBBCrBBECCBCCBBBCDDBZZBEBCBBCkBBCBBCDBCYYBqBBlIWBKQBCoBBECBwDwCwCB4cBnDuDBSjGBtyCgDBQvhBBSFBa68DBGmSB61GuBBy2B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBF4BBIQBhCBBCNNBFBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBFi7Fi7FBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCVBJBBhHGBCDBCBBCOBCkGB8BjCBEEE1lBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1TZBHZBHZB3zD-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Dash:()=>new g(m("tB9qB9qB0BiyDiyDmgBqgCqgCBEB+BoBoBQnMnMlgDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Emoji:()=>new g(m("jBHHGJBwDFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDrGrGhFBBNBBPDDBIBsCZBCBBYVVDIBWBBvFhBBDvDBDBBCCBDyCBDCBCmIBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDDBEJBECCBEEDJBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Emoji_Component:()=>new g(m("jBHHGJB0+H2G2Gsp3B3+8B3+8BBYB8PEBxtBDBtzhY-CB",!1)),Emoji_Modifier:()=>new g(m("7-8DE",!0)),Emoji_Modifier_Base:()=>new g(m("9wJ8G8GRDB4jzD9B9BBBBDDDBBB2DBBDKBWSBEFFBBBCCBICCZqGqGBFFWFFBvFvFBBBEEB0CRRBBBKMMgSDDJHBHKKBIBDCB5B+B+BBCCBCCSCBCMBmHCBrBIB",!1)),Emoji_Presentation:()=>new g(m("64IBBuGDBEDDqQBBWBBzBLBsBUUOJJBSSBGGBJJGWWIBBCFFDIIFBBdkBkBCFFBBBC+B+BBBBZPP8aBB0BFFvlxDrGrG-FDDBIBsCZBCZZVDDBDBCCBWBBvFgBBNIBClCBCVBNqBBFEBNQBEEEBlCBCCCB5FBD+BBODBCXBTbbBOO3C0CBxBlCBHEEBBBDDBEDBMBBIIBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Extended_Pictographic:()=>new g(m("pFFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDoBoBBCBlDLBQBBQPPBmBmBBIBxDBBNBBPDDBIBU3BBcOBLVVDIBCDBKWBH7FBDvDBDBBCCBDyCBDCBCDBG9HBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDQBECCBEBDMB7GlBBNDB5BHBLFBpBHBfBBNDBDNBKmBBNuBBCJBC4FB5CHBPxEBhI9fB",!1)),Hex_Digit:()=>new g(m("wBJIFbFq1-BJIFbF",!0)),Lowercase:()=>new g(m("hDZBwBLLFlBlBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDiBBIBBfEBhDsBsBCEEDDBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBCDB5XFBjkCIBC2D2DB+FBiC0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBB6DOORMBuDEEBEEcKFDBBJDBFiBiBBOBFsasaBYBn6BvBBCEEBGCFCCBCCBGBEiDCBIICFFNlBBCGG0oesBCUaCBBBmEMCBBBC8BCBIBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCWDBCCCBBB2ZqBBCNBHvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBkODDBBBCpBBCIBmoByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFBmI9BB1lChBB",!1)),Math:()=>new g(m("rBRRBBBgBeeCuBuBFmBmBgB5W5WBBBDbbBDDBBBwQCBuwGccBBBMEEOPPBCBWEBMEBiCMBFEEBFFBDBTFFDJBCDDBEBHEEBDDBCCBBBCFBENBClClCBWBCFBCBBFBBFfBCHHBPPBqIBJDBVBB7CffBZBCZZMGB+NBBNJBFFBFBBDBBEEBPCCDFBMHBGBB6BCCeDBKCBxK-BBhI-PBxBUBDFB9+zB4Z4ZBEBCjFjFRCBeCCeCCkEHHBCBitDBBhrwBwoBwoBBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBBhwFDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB-uCIB",!1)),Quotation_Mark:()=>new g(m("iBFFkEQQ96HHBaBBowDqOqOBCBOCBixzBDB+FFF7CBB",!1)),Terminal_Punctuation:()=>new g(m("hBLLCMMBEE-ZJJiQ6B6BpCPPCCB1FsBsBBJBCsHsHB3B3BBEBCHBgBmImIB1nB1nBBtFtFFFB4JBB2YHBmY9D9DBBBoCBB+ECBEoBoBBCBDBB7JBBjLDBjFBBLBBCCBeCB8FEB-BBBldYYBKKBBBwlDCBzJOOFLLCBBEBBtNBB8ndBBuICBkHEB-LBB3CBBgD4E4EBBB0ECBgERRB6H6HnxUDDB6B6BBBBCDBqFLLCMMBEEiCDD7hBxBxBnkBoGoG3JBB5EFBlCFB6CDB5dEBtBDB+FGBxDDBgECBiEBBHRRB5C5CBDBtDrJrJB2D2DBBBNBBnLDBEOBqDBB6HCBmQCC8HBB4CBBFBB-MCBuBmUmUBrCrCBspBspBBDB6vRBBmEiCiCBBBLqRqRBoJoJBnwTnwTovHDB",!1)),Uppercase:()=>new g(m("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBGbbBOBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBBvgCZBHZBHZB",!1)),White_Space:()=>new g(m("JEBTlDlDbgvFgvFgsCKBeBBGwBwBh9DAB",!1))})),G(An,"SCRIPTS",new io({Adlam:()=>new g(m("go6DrCFJFB",!0)),Ahom:()=>new g(m("g4lCaDOFW",!0)),Anatolian_Hieroglyphs:()=>new g(m("ggxCmS",!0)),Arabic:()=>new g(m("gwBEBCFBCNBCCBCfBCJBMZBCrDBChBBxCvBBxHhBBGqCBCcBxy8BtPBDvEBhBPBxDEBCmEBk7DeBkCFBJIBiBFBh43BDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB",!1)),Armenian:()=>new g(m("xpBlBDxBDCks9BE",!0)),Avestan:()=>new g(m("g4iC1BEG",!0)),Balinese:()=>new g(m("g4GsCCxB",!0)),Bamum:()=>new g(m("g1pB3CpowB4R",!0)),Bassa_Vah:()=>new g(m("w26CdDF",!0)),Batak:()=>new g(m("g+GzBJD",!0)),Bengali:()=>new g(m("gsCDBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYB",!1)),Beria_Erfe:()=>new g(m("g17CYDY",!0)),Bhaiksuki:()=>new g(m("ggnCICsBCNLc",!0)),Bopomofo:()=>new g(m("qXB6wLqBxDf",!0)),Brahmi:()=>new g(m("ggkCtCFjBKA",!0)),Braille:()=>new g(m("ggK-H",!0)),Buginese:()=>new g(m("gwGbDB",!0)),Buhid:()=>new g(m("g6FT",!0)),Canadian_Aboriginal:()=>new g(m("ggF-TxRlC7tgCP",!0)),Carian:()=>new g(m("g1gCwB",!0)),Caucasian_Albanian:()=>new g(m("wphCzBMA",!0)),Chakma:()=>new g(m("gokC0BCR",!0)),Cham:()=>new g(m("gwqB2BKNDJDD",!0)),Cherokee:()=>new g(m("g9E1CDFz7lBvC",!0)),Chorasmian:()=>new g(m("w9jCb",!0)),Common:()=>new g(m("AgCBbFBbuBBCOBCEBYgBgBiOmBBGEBDTB1DKKHCC+THHPEEhB9E9ElQiEiEB6mB6mB2MDBjJwvBwvBBBBoCBBsGBBCumBumBOIIBCBCFBCCBDmYmYBKBD2CBCKBEKBCOBShBB-BlBBCCBDFBCaBCQBqBCBF5UBXKBW-cBhIzTBDpEBhQ9CBzMUBCCCBXBQHBFDB8CBBE7C7CB0E0EBOBhBlBBKxBxBB+BBgBwCBwB5C5CBmFBhuG-BBhoWhBBnDCBmFJB1HhFhFsMPPBzuUzuUBxGxGBIBXiBBCSBCDB0ECCBeBbFBbKBLuBuBBhChCBFBCGBLEBjICBFsBBEIBxCMB0BsBBlHaBltuBDB96D8HBEzNBHWBQQBgDzDB9B1HBLmBBD9BBEQBJBBIdBF8BB2GTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBByjFjCBtC8BBjWrBBFjDBNOBDOBCOBCkBBLtFB5BZBCBBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBnghYffB+CB",!1)),Coptic:()=>new g(m("ifNxkKzDGG",!0)),Cuneiform:()=>new g(m("ggoC5cnDuDCEMjG",!0)),Cypriot:()=>new g(m("ggiCFBDCCBqBBCBBEDD",!1)),Cypro_Minoan:()=>new g(m("w8rCiD",!0)),Cyrillic:()=>new g(m("ggBkEBDoFBx6FKBhFtCtCojEfBhie-CBv8VBBhw4B9BBiBAB",!1)),Deseret:()=>new g(m("gghCvC",!0)),Devanagari:()=>new g(m("goCwCFODZh7nBfhwcJ",!0)),Dives_Akuru:()=>new g(m("gomCGBDDDBGBCBBCdBCBBDLBKJB",!1)),Dogra:()=>new g(m("ggmC7B",!0)),Duployan:()=>new g(m("ggvDqDGMEIIJDD",!0)),Egyptian_Hieroglyphs:()=>new g(m("ggsC1iBL68D",!0)),Elbasan:()=>new g(m("gohCnB",!0)),Elymaic:()=>new g(m("g-jCW",!0)),Ethiopic:()=>new g(m("gwEoCBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBnvGWBKGBCGBCGBCGBCGBCGBCGBCGBjpfFBDFBDFBKGBCGBylvCGBCDBCBBCOB",!1)),Garay:()=>new g(m("gqjClBEcJB",!0)),Georgian:()=>new g(m("glElBBCGGDqBBCDBx8CqBBDCBhiElBBCGG",!1)),Glagolitic:()=>new g(m("ggL-Ch9sDGCQDGCBCE",!0)),Gothic:()=>new g(m("w5gCa",!0)),Grantha:()=>new g(m("g4kCDBCHBDBBDVBCGBCBBCEBDIBDBBDCBDHHGGBDGBEEB",!1)),Greek:()=>new g(m("wbDBCCBDDBCFFCCCBBBCCCBSBC+BBPPBnpGEBzBEBFEB1ChKhKBUBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBoJ-xiB-xiB7uVuCBSgj0Bgj0BBkCB",!1)),Gujarati:()=>new g(m("h0CCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGB",!1)),Gunjala_Gondi:()=>new g(m("grnCFCBCkBCBCFIJ",!0)),Gurmukhi:()=>new g(m("hwCCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPB",!1)),Gurung_Khema:()=>new g(m("go4C5B",!0)),Han:()=>new g(m("g0LZBC4CBN1GBwBCCaIBPDBle-tGBhC-vUBhoWtLBDpDBpodBBNGBqgkB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Hangul:()=>new g(m("goE-HvxHBiI9CyDeiCei3dckUj9KNWFwBl9JeEFDFDFDC",!0)),Hanifi_Rohingya:()=>new g(m("gojCnBJJ",!0)),Hanunoo:()=>new g(m("g5FU",!0)),Hatran:()=>new g(m("gniCSCBGE",!0)),Hebrew:()=>new g(m("xsB2BBJaBFFBpp9BZBCEBCCCBCCBCCBIB",!1)),Hiragana:()=>new g(m("hiM1CBHCBi7-C+IBTeeBBBulQAB",!1)),Imperial_Aramaic:()=>new g(m("giiCVCI",!0)),Inherited:()=>new g(m("gYvDB2IBBlOKBbhXhXBCB8qEtBBDLBlPCBCMBCGBFHHEBBnG-BBtQBBjGgBB65DDBsDBBmrzBPBRNBwejHjH7iEl+uBl+uBBsBBDWBhRCBSHBDGBfDBz6rYvHB",!1)),Inscriptional_Pahlavi:()=>new g(m("g7iCSGH",!0)),Inscriptional_Parthian:()=>new g(m("g6iCVDH",!0)),Javanese:()=>new g(m("gsqBtCDJFB",!0)),Kaithi:()=>new g(m("gkkCiCLA",!0)),Kannada:()=>new g(m("gkDMCCCWCJCEDICCCDIBGCCDDJCC",!0)),Katakana:()=>new g(m("hlM5CBDCBxHPBxGuBBC3CBvgzBJBCsBBzisBDBCGBCBBCgJgJBBBzBPPBCB",!1)),Kawi:()=>new g(m("g4nCQCoBEc",!0)),Kayah_Li:()=>new g(m("goqBtBCA",!0)),Kharoshthi:()=>new g(m("gwiCDCBGHCCCcDCFJII",!0)),Khitan_Small_Script:()=>new g(m("k-7C84G84GB0OBqBAB",!1)),Khmer:()=>new g(m("g8F9CDJHJnPf",!0)),Khojki:()=>new g(m("gwkCRCuB",!0)),Khudawadi:()=>new g(m("w1kC6BGJ",!0)),Kirat_Rai:()=>new g(m("gq7C5B",!0)),Lao:()=>new g(m("h0DBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDB",!1)),Latin:()=>new g(m("hCZBHZBwBQQGWBCeBCgOBoBEB8wGlBBHwBBGDBGMBClCBiC-HByLOORMBuEBBHccSoBB42CfBj1elDBExCBVOBxZqBBCIBCDB38TGB7gBZBHZBmhCFBCpBBCIBm61BeBHFB",!1)),Lepcha:()=>new g(m("ggH3BEOEC",!0)),Limbu:()=>new g(m("goGeBCLBFLBFEEBKB",!1)),Linear_A:()=>new g(m("gwhC2JKVLH",!0)),Linear_B:()=>new g(m("gggCLCZCSCBCODNjB6D",!0)),Lisu:()=>new g(m("wmpBvBx1eA",!0)),Lycian:()=>new g(m("g0gCc",!0)),Lydian:()=>new g(m("gpiCZGA",!0)),Mahajani:()=>new g(m("wqkCmB",!0)),Makasar:()=>new g(m("g3nCY",!0)),Malayalam:()=>new g(m("goDMCCCyBCCCFFPDZ",!0)),Mandaic:()=>new g(m("giCbDA",!0)),Manichaean:()=>new g(m("g2iCmBFL",!0)),Marchen:()=>new g(m("wjnCfDVCN",!0)),Masaram_Gondi:()=>new g(m("gonCGBCBBCrBBECCBCCBHBJJB",!1)),Medefaidrin:()=>new g(m("gy7C6C",!0)),Meetei_Mayek:()=>new g(m("g3qBWqGtBDJ",!0)),Mende_Kikakui:()=>new g(m("gg6DkGDP",!0)),Meroitic_Cursive:()=>new g(m("gtiCXFTDtB",!0)),Meroitic_Hieroglyphs:()=>new g(m("gsiCf",!0)),Miao:()=>new g(m("g47CqCF4BIQ",!0)),Modi:()=>new g(m("gwlCkCMJ",!0)),Mongolian:()=>new g(m("ggGBBDCCBSBH4CBIqBB2t-BMB",!1)),Mro:()=>new g(m("gy6CeCJFB",!0)),Multani:()=>new g(m("g0kCGBCCCBCBCOBCKB",!1)),Myanmar:()=>new g(m("ggE-EhqmBeiDfxibT",!0)),Nabataean:()=>new g(m("gkiCeJI",!0)),Nag_Mundari:()=>new g(m("wm5DpB",!0)),Nandinagari:()=>new g(m("gtmCHDtBDK",!0)),New_Tai_Lue:()=>new g(m("gsGrBFZHKEB",!0)),Newa:()=>new g(m("gglC7CCE",!0)),Nko:()=>new g(m("g+B6BDC",!0)),Nushu:()=>new g(m("h-7CvsQvsQBqMB",!1)),Nyiakeng_Puachue_Hmong:()=>new g(m("go4DsBENDJFB",!0)),Ogham:()=>new g(m("g0Fc",!0)),Ol_Chiki:()=>new g(m("wiHvB",!0)),Ol_Onal:()=>new g(m("wu5DqBFA",!0)),Old_Hungarian:()=>new g(m("gkjCyBOyBIF",!0)),Old_Italic:()=>new g(m("g4gCjBKC",!0)),Old_North_Arabian:()=>new g(m("g0iCf",!0)),Old_Permic:()=>new g(m("w6gCqB",!0)),Old_Persian:()=>new g(m("g9gCjBFN",!0)),Old_Sogdian:()=>new g(m("g4jCnB",!0)),Old_South_Arabian:()=>new g(m("gziCf",!0)),Old_Turkic:()=>new g(m("ggjCoC",!0)),Old_Uyghur:()=>new g(m("w7jCZ",!0)),Oriya:()=>new g(m("h4CCCHDBDVCGCBCEDIDBDCICFBCEDR",!0)),Osage:()=>new g(m("wlhCjBFjB",!0)),Osmanya:()=>new g(m("gkhCdDJ",!0)),Pahawh_Hmong:()=>new g(m("g46ClCLJCGCUGS",!0)),Palmyrene:()=>new g(m("gjiCf",!0)),Pau_Cin_Hau:()=>new g(m("g2mC4B",!0)),Phags_Pa:()=>new g(m("giqB3B",!0)),Phoenician:()=>new g(m("goiCbEA",!0)),Psalter_Pahlavi:()=>new g(m("g8iCRIDNG",!0)),Rejang:()=>new g(m("wpqBjBMA",!0)),Runic:()=>new g(m("g1FqCEK",!0)),Samaritan:()=>new g(m("ggCtBDO",!0)),Saurashtra:()=>new g(m("gkqBlCJL",!0)),Sharada:()=>new g(m("gskC-ChsCH",!0)),Shavian:()=>new g(m("wihCvB",!0)),Siddham:()=>new g(m("gslC1BDlB",!0)),Sidetic:()=>new g(m("gqiCZ",!0)),SignWriting:()=>new g(m("gg2DrUQECO",!0)),Sinhala:()=>new g(m("hsDCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBt-gCTB",!1)),Sogdian:()=>new g(m("w5jCpB",!0)),Sora_Sompeng:()=>new g(m("wmkCYIJ",!0)),Soyombo:()=>new g(m("wymCyC",!0)),Sundanese:()=>new g(m("g8G-BhIH",!0)),Sunuwar:()=>new g(m("g+mChBPJ",!0)),Syloti_Nagri:()=>new g(m("ggqBsB",!0)),Syriac:()=>new g(m("g4BNC7BDCxIK",!0)),Tagalog:()=>new g(m("g4FVKA",!0)),Tagbanwa:()=>new g(m("g7FMCCCB",!0)),Tai_Le:()=>new g(m("wqGdDE",!0)),Tai_Tham:()=>new g(m("gxG+BCcDKHJHN",!0)),Tai_Viet:()=>new g(m("g0qBiCZE",!0)),Tai_Yo:()=>new g(m("g25DeCVJB",!0)),Takri:()=>new g(m("g0lC5BHJ",!0)),Tamil:()=>new g(m("i8CBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBm+kCxBBOAB",!1)),Tangsa:()=>new g(m("wz6CuCCJ",!0)),Tangut:()=>new g(m("g-7CgBgBB+3GBhQeBiDyDB",!1)),Telugu:()=>new g(m("ggDMCCCWCPDICCCDIBCCCBDDDJII",!0)),Thaana:()=>new g(m("g8BxB",!0)),Thai:()=>new g(m("hwD5BGb",!0)),Tibetan:()=>new g(m("g4DnCCjBFmBCjBCOCGFB",!0)),Tifinagh:()=>new g(m("wpL3BIBPA",!0)),Tirhuta:()=>new g(m("gklCnCJJ",!0)),Todhri:()=>new g(m("guhCzB",!0)),Tolong_Siki:()=>new g(m("wtnCrBFJ",!0)),Toto:()=>new g(m("w04De",!0)),Tulu_Tigalari:()=>new g(m("g8kCJBCDDClBBCJBCDDCDBCJBCBBJBB",!1)),Ugaritic:()=>new g(m("g8gCdCA",!0)),Unknown:()=>new g(m("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-FB",!1)),Vai:()=>new g(m("gopBrJ",!0)),Vithkuqi:()=>new g(m("wrhCKCOCGCBCKCOCGCB",!0)),Wancho:()=>new g(m("g24D5BGA",!0)),Warang_Citi:()=>new g(m("glmCyCNA",!0)),Yezidi:()=>new g(m("g0jCpBCCDB",!0)),Yi:()=>new g(m("ggoBskBE2B",!0)),Zanabazar_Square:()=>new g(m("gwmCnC",!0))})),G(An,"FOLD_CATEGORIES",new io({L:()=>new g(m("laA",!0)),LC:()=>new g(m("laA",!0)),Ll:()=>new g(m("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGC3HrBrBCEEJHHCCBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHxC9zC9zCBuBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Lt:()=>new g(m("kOCCBCCBCClBCCtsHHBJHBJHBMQQwBAB",!1)),Lu:()=>new g(m("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpL2B2Bs1CvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1)),M:()=>new g(m("5cgBgBlgHAB",!1)),Mn:()=>new g(m("5cgBgBlgHAB",!1)),Emoji:()=>new g(m("8mJA",!0)),Extended_Pictographic:()=>new g(m("8mJA",!0)),Lowercase:()=>new g(m("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHuBPBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Math:()=>new g(m("ycGDCHHFMMDDDCHHFAB",!1)),Uppercase:()=>new g(m("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpLiBiBBOBFsasaBYBn6BvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1))})),G(An,"FOLD_SCRIPT",new io({Common:()=>new g(m("8cgBgB",!1)),Greek:()=>new g(m("1FwUwU",!1)),Inherited:()=>new g(m("5cgBgBlgHAB",!1))})),An),Ee,$=(Ee=class{static isUnsearchable(e){return e===Ee.RUNE_ERROR||e>=Ee.MIN_HIGH_SURROGATE&&e<=Ee.MAX_LOW_SURROGATE}static is32(e,t){let n=0,s=e.length;for(;n<s;){const i=n+Math.floor((s-n)/2),o=e.getLo(i),B=e.getHi(i);if(o<=t&&t<=B){const c=e.getStride(i);return(t-o)%c===0}t<o?s=i:n=i+1}return!1}static is(e,t){if(t<=Ee.MAX_LATIN1){for(let n=0;n<e.length;n++){if(t>e.getHi(n))continue;const s=e.getLo(n);if(t<s)return!1;const i=e.getStride(n);return(t-s)%i===0}return!1}return e.length>0&&t>=e.getLo(0)&&Ee.is32(e,t)}static isPrint(e){return e<=Ee.MAX_LATIN1?e>=32&&e<Ee.MAX_ASCII||e>=161&&e!==173:Ee.is(Dt.Print,e)}static simpleFold(e){if(Dt.CASE_ORBIT.has(e))return Dt.CASE_ORBIT.get(e);if(e<=Ee.MAX_ASCII){const t=k.toLowerCase(e);return t!==e?t:k.toUpperCase(e)}return e}static equalsIgnoreCase(e,t){if(e===t)return!0;if(e<0||t<0)return!1;if(e<=Ee.MAX_ASCII&&t<=Ee.MAX_ASCII)return 65<=e&&e<=90&&(e|=32),65<=t&&t<=90&&(t|=32),e===t;for(let n=Ee.simpleFold(e);n!==e;n=Ee.simpleFold(n))if(n===t)return!0;return!1}},G(Ee,"MAX_RUNE",1114111),G(Ee,"RUNE_ERROR",65533),G(Ee,"MAX_ASCII",127),G(Ee,"MAX_LATIN1",255),G(Ee,"MAX_BMP",65535),G(Ee,"MIN_FOLD",65),G(Ee,"MAX_FOLD",125251),G(Ee,"MIN_HIGH_SURROGATE",55296),G(Ee,"MAX_HIGH_SURROGATE",56319),G(Ee,"MIN_LOW_SURROGATE",56320),G(Ee,"MAX_LOW_SURROGATE",57343),G(Ee,"MIN_SUPPLEMENTARY_CODE_POINT",65536),Ee),Ai=class extends Error{constructor(r){super(r),this.name="RE2JSException"}},ye=class extends Ai{constructor(r,e=null){let t=`error parsing regexp: ${r}`;e&&(t+=`: \`${e}\``),super(t),this.name="RE2JSSyntaxException",this.message=t,this.error=r,this.input=e}getDescription(){return this.error}getPattern(){return this.input}},wB=class extends Ai{constructor(r){super(r),this.name="RE2JSCompileException"}},lt=class extends Ai{constructor(r){super(r),this.name="RE2JSGroupException"}},II=class extends Ai{constructor(r){super(r),this.name="RE2JSFlagsException"}},Ho=class extends Ai{constructor(r){super(r),this.name="RE2JSInternalException"}};const Zc=256,sp=new Uint8Array(Zc);for(let r=0;r<Zc;r++)sp[r]=97<=r&&r<=122||65<=r&&r<=90||48<=r&&r<=57||r===95?1:0;let yB=null,IB=null;var me,J=(me=class{static emptyInts(){return[]}static isString(e){return typeof e=="string"||Object.prototype.toString.call(e)==="[object String]"}static typeName(e){return e===null||typeof e!="object"&&typeof e!="function"?e===null?"null":typeof e:Object.prototype.toString.call(e).slice(8,-1)}static checkPattern(e){if(!me.isString(e))throw new TypeError(`The pattern must be a string, not ${me.typeName(e)} (RE2JS.translateRegExp() converts a RegExp)`)}static checkInput(e){if(!me.isString(e)&&!me.isByteArray(e))throw new TypeError(`The input must be a string or a byte array (Uint8Array or number[]), not ${me.typeName(e)}`)}static checkFlags(e){if(!Number.isInteger(e)||e&-544)throw new II("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH, LOOKBEHINDS")}static isByteArray(e){return Array.isArray(e)||Object.prototype.toString.call(e)==="[object Uint8Array]"}static isalnum(e){return k.CODES[0]<=e&&e<=k.CODES[9]||k.CODES.a<=e&&e<=k.CODES.z||k.CODES.A<=e&&e<=k.CODES.Z}static unhex(e){return k.CODES[0]<=e&&e<=k.CODES[9]?e-k.CODES[0]:k.CODES.a<=e&&e<=k.CODES.f?e-k.CODES.a+10:k.CODES.A<=e&&e<=k.CODES.F?e-k.CODES.A+10:-1}static escapeRune(e){let t="";if($.isPrint(e))me.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case k.CODES['"']:t+='\\"';break;case k.CODES["\\"]:t+="\\\\";break;case k.CODES["	"]:t+="\\t";break;case k.CODES[`
`]:t+="\\n";break;case k.CODES["\r"]:t+="\\r";break;case k.CODES["\b"]:t+="\\b";break;case k.CODES["\f"]:t+="\\f";break;default:{let n=e.toString(16);e<256?(t+="\\x",n.length===1&&(t+="0"),t+=n):t+=`\\x{${n}}`;break}}return t}static stringToRunes(e){const t=String(e),n=[];let s=0;for(;s<t.length;){const i=t.codePointAt(s);n.push(i),s+=i>$.MAX_BMP?2:1}return new Int32Array(n)}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return e<Zc?sp[e]===1:!1}static emptyOpContext(e,t){let n=0;return e<0&&(n|=me.EMPTY_BEGIN_TEXT|me.EMPTY_BEGIN_LINE),e===10&&(n|=me.EMPTY_BEGIN_LINE),t<0&&(n|=me.EMPTY_END_TEXT|me.EMPTY_END_LINE),t===10&&(n|=me.EMPTY_END_LINE),me.isWordRune(e)!==me.isWordRune(t)?n|=me.EMPTY_WORD_BOUNDARY:n|=me.EMPTY_NO_WORD_BOUNDARY,n}static quoteMeta(e){return e.split("").map(t=>me.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>$.MAX_BMP?2:1}static toArray(e){const t=e.length,n=new Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return yB||(yB=new TextEncoder),yB.encode(e);{let t=[],n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===$.MIN_HIGH_SURROGATE&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===$.MIN_LOW_SURROGATE?(i=$.MIN_SUPPLEMENTARY_CODE_POINT+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder){IB||(IB=new TextDecoder("utf-8"));const t=e instanceof Uint8Array?e:new Uint8Array(e);return IB.decode(t)}else{let t=[],n=0,s=0;for(;n<e.length;){let i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[n++];t[s++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=e[n++],B=e[n++],c=e[n++],u=((i&7)<<18|(o&63)<<12|(B&63)<<6|c&63)-$.MIN_SUPPLEMENTARY_CODE_POINT;t[s++]=String.fromCharCode($.MIN_HIGH_SURROGATE+(u>>10)),t[s++]=String.fromCharCode($.MIN_LOW_SURROGATE+(u&1023))}else{let o=e[n++],B=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(o&63)<<6|B&63)}}return t.join("")}}},G(me,"METACHARACTERS","\\.+*?()|[]{}^$"),G(me,"EMPTY_BEGIN_LINE",1),G(me,"EMPTY_END_LINE",2),G(me,"EMPTY_BEGIN_TEXT",4),G(me,"EMPTY_END_TEXT",8),G(me,"EMPTY_WORD_BOUNDARY",16),G(me,"EMPTY_NO_WORD_BOUNDARY",32),G(me,"EMPTY_ALL",-1),me);const ip=(r=[],e=0)=>{const t=Object.create(null);for(let n=0;n<r.length;n++){const s=r[n],i=e+n;t[s]=i,t[i]=s}return Object.freeze(t)};var Fn,Tr=(Fn=class{getEncoding(){throw Error("not implemented")}asCharSequence(){throw Error("not implemented")}asBytes(){throw Error("not implemented")}length(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===Fn.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===Fn.Encoding.UTF_16}},G(Fn,"Encoding",ip(["UTF_16","UTF_8"])),Fn),Xh=class extends Tr{constructor(r=null){super(),this.bytes=r}getEncoding(){return Tr.Encoding.UTF_8}asCharSequence(){return J.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}},TI=class extends Tr{constructor(r=null){super(),this.charSequence=r}getEncoding(){return Tr.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return J.stringToUtf8ByteArray(this.charSequence.toString())}length(){return this.charSequence.length}},dr=class{static utf16(r){return J.checkInput(r),new TI(r)}static utf8(r){return J.isByteArray(r)?new Xh(r):new Xh(J.stringToUtf8ByteArray(r))}},Bt=class{static EOF(){return-8}constructor(){this.start=0,this.end=0}canCheckPrefix(){return!0}endPos(){return this.end-this.start}hasString(){return!1}hasAnyString(){return!1}prefixLength(){return 0}},xt,AI=(xt=class extends Bt{constructor(e,t=0,n=e.length){super(),this.bytes=e,this.start=t,this.end=n}hasString(e,t){const n=e.bytes;if(n.length===0)return!0;const s=this.indexOf(this.bytes,n,this.start+t);return s!==-1&&s<=this.end-n.length}hasAnyString(e,t){return e.automaton8().searchUTF8(this.bytes,this.start+t,this.end)}step(e){if(e+=this.start,e>=this.end)return Bt.EOF();const t=this.bytes[e]&255;if(t<128)return t<<3|1;let n,s,i=128,o=191;if(t>=194&&t<=223)n=2,s=t&31;else if(t>=224&&t<=239)n=3,s=t&15,t===224?i=160:t===237&&(o=159);else if(t>=240&&t<=244)n=4,s=t&7,t===240?i=144:t===244&&(o=143);else return xt.RUNE_ERROR_STEP;if(e+n>this.end)return xt.RUNE_ERROR_STEP;const B=this.bytes[e+1]&255;if(B<i||B>o)return xt.RUNE_ERROR_STEP;if(s=s<<6|B&63,n>2){const c=this.bytes[e+2]&255;if((c&192)!==128)return xt.RUNE_ERROR_STEP;if(s=s<<6|c&63,n>3){const u=this.bytes[e+3]&255;if((u&192)!==128)return xt.RUNE_ERROR_STEP;s=s<<6|u&63}}return s<<3|n}index(e,t){t+=this.start;const n=this.indexOf(this.bytes,e.prefixUTF8,t);return n<0?n:n-t}context(e){e+=this.start;let t=-1;if(e>this.start&&e<=this.end){let s=e-1;if(t=this.bytes[s--],t>=128){let i=e-4;for(i<this.start&&(i=this.start);s>=i&&(this.bytes[s]&192)===128;)s--;s<this.start&&(s=this.start);const o=this.step(s-this.start);t=s+(o&7)===e?o>>3:$.RUNE_ERROR}}const n=e<this.end?this.step(e-this.start)>>3:-1;return J.emptyOpContext(t,n)}indexOf(e,t,n=0){let s=t.length;if(s===0)return n<=this.end?n:-1;const i=t[0];let o=this.end-s;const B=typeof e.indexOf=="function";let c=n;for(;c<=o;){if(B){if(c=e.indexOf(i,c),c===-1||c>o)return-1}else{for(;c<=o&&e[c]!==i;)c++;if(c>o)return-1}let u=!0;for(let h=1;h<s;h++)if(e[c+h]!==t[h]){u=!1;break}if(u)return c;c++}return-1}prefixLength(e){return e.prefixUTF8.length}},G(xt,"RUNE_ERROR_STEP",$.RUNE_ERROR<<3|1),xt),RI=class extends Bt{constructor(r,e=0,t=r.length){super(),this.charSequence=r,this.start=e,this.end=t}hasString(r,e){const t=this.charSequence.indexOf(r.str,this.start+e);return t!==-1&&t<=this.end-r.str.length}hasAnyString(r,e){return r.automaton16().searchUTF16(this.charSequence,this.start+e,this.end)}step(r){if(r+=this.start,r>=this.end)return Bt.EOF();const e=this.charSequence.charCodeAt(r);if(e<$.MIN_HIGH_SURROGATE||e>$.MAX_HIGH_SURROGATE||r+1>=this.end)return e<<3|1;const t=this.charSequence.charCodeAt(r+1);return t>=$.MIN_LOW_SURROGATE&&t<=$.MAX_LOW_SURROGATE?(e-$.MIN_HIGH_SURROGATE)*1024+(t-$.MIN_LOW_SURROGATE)+$.MIN_SUPPLEMENTARY_CODE_POINT<<3|2:e<<3|1}index(r,e){e+=this.start;const t=this.charSequence.indexOf(r.prefix,e);return t<0||t>this.end-r.prefix.length?-1:t-e}context(r){r+=this.start;const e=r>this.start&&r<=this.end?this.charSequence.charCodeAt(r-1):-1,t=r<this.end?this.charSequence.charCodeAt(r):-1;return J.emptyOpContext(e,t)}prefixLength(r){return r.prefix.length}},Te=class{static fromUTF8(r,e=0,t=r.length){return new AI(r,e,t)}static fromUTF16(r,e=0,t=void 0){return J.checkInput(r),new RI(r,e,t??r.length)}},gr,Zh=(gr=class{static quoteReplacement(e,t=!1){return t?e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(n=>{const s=n.codePointAt(0);return s===k.CODES["\\"]||s===k.CODES.$?`\\${n}`:n}).join(""):e.indexOf("$")<0?e:e.split("").map(n=>n.codePointAt(0)===k.CODES.$?"$$":n).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const n=this.patternInput.re2();this.patternGroupCount=n.numberOfCapturingGroups(),this.groups=[],this.namedGroups=n.namedGroups,this.hasNamedGroups=Object.keys(this.namedGroups).length>0,this.numberOfInstructions=n.numberOfInstructions(),this.lookbehindState=null,t instanceof Tr?this.resetMatcherInput(t):J.isByteArray(t)?this.resetMatcherInput(dr.utf8(t)):this.resetMatcherInput(dr.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return e instanceof Tr||(J.isByteArray(e)?e=dr.utf8(e):e=dr.utf16(e)),this.matcherInput=e,this.lookbehindState!==null?this.lookbehindState.reset():this.lookbehindState=this.patternInput.re2().createLookbehindState(),this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new lt(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new lt(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}programSize(){return this.numberOfInstructions}group(e=0){if(typeof e=="string"){const s=this.namedGroups[e];if(!Number.isFinite(s))throw new lt(`group '${e}' not found`);e=s}const t=this.start(e),n=this.end(e);return t<0&&n<0?null:this.substring(t,n)}getNamedGroups(){if(!this.hasMatch)throw new lt("perhaps no match attempted");const e=Object.create(null);for(const t of Object.keys(this.namedGroups))e[t]=this.group(t);return e}groupCount(){return this.patternGroupCount}loadGroup(e){if(!Number.isInteger(e)||e<0||e>this.patternGroupCount)throw new lt(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new lt("perhaps no match attempted");if(e===0||this.hasGroups)return;const t=this.matcherInputLength,n=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount,this.lookbehindState);if(!n[0])throw new lt("inconsistency in matching group data");this.groups=n[1],this.hasGroups=!0}matches(){return this.genMatch(0,V.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,V.ANCHOR_START)}find(e=null){if(e!==null){if(!Number.isInteger(e)||e<0||e>this.matcherInputLength)throw new lt(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}if(e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1])){const t=(this.matcherInput.isUTF16Encoding()?Te.fromUTF16(this.matcherInput.asCharSequence(),0,this.matcherInputLength):Te.fromUTF8(this.matcherInput.asBytes(),0,this.matcherInputLength)).step(e);t<0?e++:e+=t&7}return this.genMatch(e,V.UNANCHORED)}genMatch(e,t){const n=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1,this.lookbehindState);return n[0]?(this.groups=n[1],this.hasMatch=!0,this.hasGroups=this.patternGroupCount===0,this.anchorFlag=t,!0):(this.hasMatch=!1,!1)}substring(e,t){return this.matcherInput.isUTF8Encoding()?J.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let n="";const s=this.start(),i=this.end();return this.appendPos<s&&(n+=this.substring(this.appendPos,s)),this.appendPos=i,n+=t?this.appendReplacementInternalJava(e):this.appendReplacementInternalJs(e),n}appendReplacementInternalJava(e){let t="",n=0;const s=e.length;let i=0;for(;i<s;){const o=e.codePointAt(i);if(o===k.CODES["\\"]){if(n<i&&(t+=e.substring(n,i)),i++,i>=s)throw new lt("character to be escaped is missing");n=i,i++;continue}if(o===k.CODES.$){if(n<i&&(t+=e.substring(n,i)),i+1>=s)throw new lt("Illegal group reference: group index is missing");const B=e.codePointAt(i+1);if(k.CODES[0]<=B&&B<=k.CODES[9]){let c=B-k.CODES[0],u=i+2;for(;u<s;u++){const d=e.codePointAt(u);if(d<k.CODES[0]||d>k.CODES[9]||c*10+d-k.CODES[0]>this.patternGroupCount)break;c=c*10+d-k.CODES[0]}if(c>this.patternGroupCount)throw new lt(`n > number of groups: ${c}`);const h=this.group(c);h!==null&&(t+=h),i=u,n=i}else if(B===k.CODES["{"]){let c=i+2;for(;c<s&&e.codePointAt(c)!==k.CODES["}"];)c++;if(c>=s)throw new lt("named capture group is missing trailing '}'");const u=e.substring(i+2,c),h=this.group(u);h!==null&&(t+=h),i=c+1,n=i}else throw new lt("Illegal group reference");continue}i++}return n<s&&(t+=e.substring(n,s)),t}appendReplacementInternalJs(e){const t=o=>o>=48&&o<=57,n=this.patternGroupCount;let s="",i=0;for(;i<e.length;){const o=e.indexOf("$",i);if(o<0)break;s+=e.substring(i,o),i=o;const B=e.charCodeAt(i+1);if(B===k.CODES.$)s+="$",i+=2;else if(B===k.CODES["&"])s+=this.group(0),i+=2;else if(B===k.CODES["`"])s+=this.substring(0,this.start(0)),i+=2;else if(B===k.CODES["'"])s+=this.substring(this.end(0),this.matcherInputLength),i+=2;else if(t(B)){let c=1,u=B-48;const h=e.charCodeAt(i+2);if(t(h)&&u*10+h-48<=n&&(c=2,u=u*10+h-48),u>=1&&u<=n){const d=this.group(u);d!==null&&(s+=d)}else s+=e.substring(i,i+1+c);i+=1+c}else if(B===k.CODES["<"]&&this.hasNamedGroups){const c=e.indexOf(">",i+2);if(c<0)s+="$<",i+=2;else{const u=e.substring(i+2,c);if(Object.hasOwn(this.namedGroups,u)){const h=this.group(u);h!==null&&(s+=h)}i=c+1}}else s+="$",i+=1}return s+e.substring(i)}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,n=!1){let s="";this.reset();const i=typeof e=="function";let o=null;if(i){if(this.groupCount()>=gr.MAX_REPLACER_ARGS)throw new lt("Too many capture groups to safely invoke replacer function");o=this.matcherInput.isUTF8Encoding()?this.matcherInput.asBytes():this.matcherInput.asCharSequence()}for(;this.find()&&(s+=i?this.appendReplacementFunc(e,o):this.appendReplacement(e,n),!!t););return s+=this.appendTail(),s}appendReplacementFunc(e,t){let n="";const s=this.start(),i=this.end();this.appendPos<s&&(n+=this.substring(this.appendPos,s)),this.appendPos=i;const o=this.matchArray();return o.push(s,t),this.hasNamedGroups&&o.push(this.namedGroupsObject()),n+=String(e(...o)),n}matchArray(){const e=[this.group(0)];for(let t=1;t<=this.patternGroupCount;t++){const n=this.group(t);e.push(n===null?void 0:n)}return e}namedGroupsObject(){if(!this.hasNamedGroups)return;const e=this.getNamedGroups();for(const t in e)e[t]===null&&(e[t]=void 0);return e}},G(gr,"MAX_REPLACER_ARGS",65535),gr),he,N=(he=class{static isRuneOp(e){return he.RUNE<=e&&e<=he.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let n of e)t+=J.escapeRune(n);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=new Int32Array(0),this.next=null}matchRune(e){if(this.runes.length===1){const o=this.runes[0];return this.arg&V.FOLD_CASE?$.equalsIgnoreCase(o,e):e===o}const t=this.runes.length;if(t===0)return!1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return!1;if(e<=this.runes[o+1])return!0}return!1}let n=0,s=t>>1;for(;s>1;){const o=s>>1;n+=this.runes[n+o<<1]<=e?o:0,s-=o}n+=this.runes[n<<1]<=e?1:0;const i=n-1;return i>=0&&e<=this.runes[i<<1|1]}matchRunePos(e){if(this.runes.length===1){const o=this.runes[0];return this.arg&V.FOLD_CASE?$.equalsIgnoreCase(o,e)?0:-1:e===o?0:-1}const t=this.runes.length;if(t===0)return-1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return-1;if(e<=this.runes[o+1])return Math.floor(o/2)}return-1}let n=0,s=t>>1;for(;s>1;){const o=s>>1;n+=this.runes[n+o<<1]<=e?o:0,s-=o}n+=this.runes[n<<1]<=e?1:0;const i=n-1;return i>=0&&e<=this.runes[i<<1|1]?i:-1}toString(){switch(this.op){case he.ALT:return`alt -> ${this.out}, ${this.arg}`;case he.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case he.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case he.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case he.MATCH:return`match${this.arg!==0?` ${this.arg}`:""}`;case he.FAIL:return"fail";case he.NOP:return`nop -> ${this.out}`;case he.LB_WRITE:return`lbwrite ${this.arg} -> ${this.out}`;case he.LB_CHECK:return`lbcheck ${this.arg} -> ${this.out}`;case he.RUNE:return this.runes===null?"rune <null>":["rune ",he.escapeRunes(this.runes),this.arg&V.FOLD_CASE?"/i":""," -> ",this.out].join("");case he.RUNE1:return`rune1 ${he.escapeRunes(this.runes)} -> ${this.out}`;case he.RUNE_ANY:return`any -> ${this.out}`;case he.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}},G(he,"ALT",1),G(he,"ALT_MATCH",2),G(he,"CAPTURE",3),G(he,"EMPTY_WIDTH",4),G(he,"FAIL",5),G(he,"MATCH",6),G(he,"NOP",7),G(he,"RUNE",8),G(he,"RUNE1",9),G(he,"RUNE_ANY",10),G(he,"RUNE_ANY_NOT_NL",11),G(he,"LB_WRITE",12),G(he,"LB_CHECK",13),he),mr,ef=(mr=class{constructor(e){this.sparse=new Int32Array(e),this.densePcs=new Int32Array(e),this.denseCaps=null,this.size=0,this.ncap=0,this.mainThreads=0}init(e){this.ncap=e;const t=Math.min(this.densePcs.length,mr.INITIAL_THREADS)*e;(!this.denseCaps||this.denseCaps.length<t)&&(this.denseCaps=new Int32Array(t))}growCaps(e){const t=this.densePcs.length*this.ncap,n=new Int32Array(Math.min(t,Math.max(e,2*this.denseCaps.length)));n.set(this.denseCaps),this.denseCaps=n}contains(e){const t=this.sparse[e];return t<this.size&&this.densePcs[t]===e}isEmpty(){return this.size===0}add(e){const t=this.size++;return this.sparse[e]=t,this.densePcs[t]=e,t}clear(){this.size=0,this.mainThreads=0}toString(){let e="{";for(let t=0;t<this.size;t++)t!==0&&(e+=", "),e+=this.densePcs[t];return e+="}",e}},G(mr,"INITIAL_THREADS",32),mr),vI=class{constructor(r){this.pos=-1,this.pcs=new Int32Array(r.numInst()),this.size=0,this.lbTable=new Int32Array(r.numLb+1)}reset(){this.pos=-1,this.size=0}},bI=class op{static fromRE2(e){const t=new op;return t.prog=e.prog,t.re2=e,t.q0=new ef(t.prog.numInst()),t.q1=new ef(t.prog.numInst()),t.addStack=new Int32Array(2*(t.prog.numInst()+1)),t.matched=!1,t.matchcap=new Int32Array(t.prog.numCap<2?2:t.prog.numCap),t.ncap=0,t}constructor(){this.prog=null,this.re2=null,this.q0=null,this.q1=null,this.addStack=null,this.matched=!1,this.matchcap=null,this.ncap=0,this.lbTable=null}init(e){this.ncap=e,e>this.matchcap.length?this.matchcap=new Int32Array(e).fill(-1):this.matchcap.fill(-1),this.q0.init(e),this.q1.init(e),this.prog.numLb>0&&((!this.lbTable||this.lbTable.length<this.prog.numLb+1)&&(this.lbTable=new Int32Array(this.prog.numLb+1)),this.lbTable.fill(-1))}submatches(){return this.ncap===0?J.emptyInts():J.toArray(this.matchcap.subarray(0,this.ncap))}match(e,t,n,s=null){const i=this.re2.cond;if(i===J.EMPTY_ALL||(n===V.ANCHOR_START||n===V.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap.fill(-1);const o=this.prog.numLb>0,B=t;let c=t,u=!1;o&&(s!==null&&s.pos>=0&&s.pos<=t?(c=s.pos,u=!0):c=0);let h=o&&s!==null,d=this.q0,p=this.q1,E=e.step(c),_=E>>3,S=E&7,L=-1,H=0;E!==Bt.EOF()&&(E=e.step(c+S),L=E>>3,H=E&7);let W;for(c===0?W=J.emptyOpContext(-1,_):W=e.context(c),o&&(u?this.restoreLookbehinds(s,d,W):this.spawnLookbehinds(d,c,W));;){if(d.mainThreads===0){if(i&J.EMPTY_BEGIN_TEXT&&c!==0||(n===V.ANCHOR_START||n===V.ANCHOR_BOTH)&&c!==0||this.matched)break;if(this.prog.numLb===0&&d.isEmpty()&&this.re2.prefix.length!==0&&L!==this.re2.prefixRune&&e.canCheckPrefix()){const Ae=e.index(this.re2,c);if(Ae<0)break;c+=Ae,E=e.step(c),_=E>>3,S=E&7,E=e.step(c+S),L=E>>3,H=E&7,W=e.context(c)}}c>=B&&(h&&(this.saveLookbehinds(s,d,c),h=!1),!this.matched&&(c===0||n===V.UNANCHORED)&&(this.ncap>0&&(this.matchcap[0]=c),this.add(d,this.prog.start,c,this.matchcap,0,W)));const ee=c+S;if(W=e.context(ee),this.step(d,p,c,ee,_,W,n,c===e.endPos()),S===0||this.ncap===0&&this.matched)break;c+=S,_=L,S=H,_!==-1&&(E=e.step(c+S),L=E>>3,H=E&7);const Ce=d;d=p,p=Ce}return d.clear(),p.clear(),this.matched}matchSet(e,t,n){const s=this.re2.cond;if(s===J.EMPTY_ALL)return[];if((n===V.ANCHOR_START||n===V.ANCHOR_BOTH)&&t!==0)return[];let i=this.prog.numLb>0?0:t,o=t,B=this.q0,c=this.q1,u=e.step(i),h=u>>3,d=u&7,p=-1,E=0;u!==Bt.EOF()&&(u=e.step(i+d),p=u>>3,E=u&7);let _=i===0?J.emptyOpContext(-1,h):e.context(i);const S=new Set;for(this.prog.numLb>0&&this.spawnLookbehinds(B,i,_);!(B.mainThreads===0&&(s&J.EMPTY_BEGIN_TEXT&&i!==0||(n===V.ANCHOR_START||n===V.ANCHOR_BOTH)&&i!==0));){(i===0||n===V.UNANCHORED)&&i>=o&&this.add(B,this.prog.start,i,this.matchcap,0,_);const L=i+d;_=e.context(L);for(let W=0;W<B.size;W++){const ee=B.densePcs[W],Ce=this.prog.inst[ee],Ae=W*this.ncap;let Se=!1;switch(Ce.op){case N.MATCH:if(n===V.ANCHOR_BOTH&&i!==e.endPos())break;S.add(Ce.arg);break;case N.RUNE:Se=Ce.matchRune(h);break;case N.RUNE1:Se=h===Ce.runes[0];break;case N.RUNE_ANY:Se=!0;break;case N.RUNE_ANY_NOT_NL:Se=h!==10;break;default:continue}Se&&this.add(c,Ce.out,L,B.denseCaps,Ae,_)}if(B.clear(),d===0)break;i+=d,h=p,d=E,h!==-1&&(u=e.step(i+d),p=u>>3,E=u&7);const H=B;B=c,c=H}return c.clear(),Array.from(S).sort((L,H)=>L-H)}step(e,t,n,s,i,o,B,c){const u=this.re2.longest;for(let h=0;h<e.size;h++){const d=e.densePcs[h],p=h*this.ncap;if(u&&this.matched&&this.ncap>0&&this.matchcap[0]<e.denseCaps[p])continue;const E=this.prog.inst[d];let _=!1;switch(E.op){case N.MATCH:if(B===V.ANCHOR_BOTH&&!c)break;if(this.ncap>0&&(!u||!this.matched||this.matchcap[1]<n)){e.denseCaps[p+1]=n;for(let S=0;S<this.ncap;S++)this.matchcap[S]=e.denseCaps[p+S]}u||(e.size=0),this.matched=!0;break;case N.RUNE:_=E.matchRune(i);break;case N.RUNE1:_=i===E.runes[0];break;case N.RUNE_ANY:_=!0;break;case N.RUNE_ANY_NOT_NL:_=i!==10;break;default:continue}_&&this.add(t,E.out,s,e.denseCaps,p,o)}e.clear()}spawnLookbehinds(e,t,n){for(let s=0;s<this.prog.lbStarts.length;s++)this.add(e,this.prog.lbStarts[s],t,this.matchcap,0,n)}restoreLookbehinds(e,t,n){this.lbTable.set(e.lbTable);for(let s=0;s<e.size;s++)this.add(t,e.pcs[s],e.pos,this.matchcap,0,n)}saveLookbehinds(e,t,n){let s=0;for(let i=0;i<t.size;i++){const o=t.densePcs[i];this.prog.lbInst[o]===1&&N.isRuneOp(this.prog.inst[o].op)&&(e.pcs[s++]=o)}e.size=s,e.pos=n,e.lbTable.set(this.lbTable)}add(e,t,n,s,i,o){const B=this.addStack;let c=0;for(;;){for(;t!==0&&!e.contains(t);){const h=e.add(t),d=this.prog.inst[t];switch(d.op){case N.FAIL:t=0;break;case N.ALT:case N.ALT_MATCH:B[c++]=d.arg,B[c++]=0,t=d.out;break;case N.EMPTY_WIDTH:t=d.arg&~o?0:d.out;break;case N.NOP:t=d.out;break;case N.CAPTURE:d.arg<this.ncap&&(B[c++]=-d.arg-1,B[c++]=s[i+d.arg],s[i+d.arg]=n),t=d.out;break;case N.LB_WRITE:this.lbTable[Math.abs(d.arg)]=n,t=d.out;break;case N.LB_CHECK:d.arg>0?t=this.lbTable[d.arg]===n?d.out:0:t=this.lbTable[-d.arg]!==n?d.out:0;break;case N.MATCH:case N.RUNE:case N.RUNE1:case N.RUNE_ANY:case N.RUNE_ANY_NOT_NL:if(this.prog.lbInst[t]===0&&e.mainThreads++,this.ncap>0){const p=h*this.ncap;p+this.ncap>e.denseCaps.length&&e.growCaps(p+this.ncap);for(let E=0;E<this.ncap;E++)e.denseCaps[p+E]=s[i+E]}t=0;break;default:throw new Ho("unhandled")}}if(c===0)return;c-=2;const u=B[c];u<0?(s[i-u-1]=B[c+1],t=0):t=u}}};const SI=(r,e,t)=>{let n=-2128831035;for(let s=0;s<r.length;s++)n^=r[s],n=Math.imul(n,16777619);n^=e,n=Math.imul(n,16777619);for(let s=0;s<t.length;s++)n^=t[s],n=Math.imul(n,16777619);return n},tf=(r,e)=>{if(r.length!==e.length)return!1;for(let t=0;t<r.length;t++)if(r[t]!==e[t])return!1;return!0},nf=(r,e,t,n)=>r.flag===t&&tf(r.nfaStates,e)&&tf(r.matchIDs,n),TB=[],Ls=-1;var oo=class{constructor(r,e,t){this.nfaStates=r,this.flag=e,this.isMatch=(e&ap.FLAG_MATCH)!==0,this.matchIDs=t,this.next=null,this.nextAnchored=null}},pe,ap=(pe=class{constructor(e,t=8388608){this.prog=e,this.maxMem=t,this.stateCache=new Map,this.stateCount=0,this.startStates=new Map,this.failed=!1;for(let n=0;n<e.numInst();n++){const s=e.getInst(n).op;if(s===N.LB_WRITE||s===N.LB_CHECK){this.failed=!0;break}}this.computeRuneClasses(),this.stateBudget=t,this.memBudget=t}computeRuneClasses(){const e=new Set,t=(s,i)=>{e.add(s),e.add(i+1)};for(let s=0;s<this.prog.numInst();s++){const i=this.prog.getInst(s);switch(i.op){case N.RUNE:case N.RUNE1:if(i.runes.length===1){if(t(i.runes[0],i.runes[0]),i.arg&V.FOLD_CASE)for(let o=$.simpleFold(i.runes[0]);o!==i.runes[0];o=$.simpleFold(o))t(o,o)}else for(let o=0;o<i.runes.length;o+=2)t(i.runes[o],i.runes[o+1]);break;case N.RUNE_ANY_NOT_NL:t(10,10);break;case N.EMPTY_WIDTH:i.arg&(J.EMPTY_BEGIN_LINE|J.EMPTY_END_LINE)&&t(10,10),i.arg&(J.EMPTY_WORD_BOUNDARY|J.EMPTY_NO_WORD_BOUNDARY)&&(t(48,57),t(65,90),t(95,95),t(97,122))}}e.delete(0),this.classBounds=Int32Array.from(e).sort(),this.numClasses=this.classBounds.length+1;const n=new Int32Array($.MAX_LATIN1+1);for(let s=0;s<=$.MAX_LATIN1;s++)n[s]=this.searchClass(s);this.latin1Class=n}runeClass(e){return e<=$.MAX_LATIN1?this.latin1Class[e]:this.searchClass(e)}searchClass(e){const t=this.classBounds;let n=0,s=t.length;for(;n<s;){const i=n+s>>1;t[i]<=e?n=i+1:s=i}return n}closure(e,t){const n=new Set,s=Array.from(e);let i=0;for(;s.length>0;){const o=s.pop();if(o===0||n.has(o))continue;n.add(o);const B=this.prog.getInst(o);switch(B.op){case N.ALT:case N.ALT_MATCH:s.push(B.out),s.push(B.arg);break;case N.NOP:case N.CAPTURE:s.push(B.out);break;case N.EMPTY_WIDTH:i|=B.arg,B.arg&~t||s.push(B.out)}}return{pcs:Array.from(n).sort((o,B)=>o-B),needflags:i}}getState(e,t,n){const s=SI(e,t,n),i=this.stateCache.get(s);if(i instanceof oo){if(nf(i,e,t,n))return i}else if(i!==void 0){for(let c=0;c<i.length;c++)if(nf(i[c],e,t,n))return i[c]}const o=pe.stateCost(e,n);if(this.memBudget<o)return null;this.memBudget-=o;const B=new oo(e,t,n);return i===void 0?this.stateCache.set(s,B):i instanceof oo?this.stateCache.set(s,[i,B]):i.push(B),this.stateCount++,B}static stateCost(e,t){const n=t.length===0?0:pe.ARRAY_OVERHEAD+pe.ELEMENT_SIZE*t.length;return pe.STATE_OVERHEAD+pe.ELEMENT_SIZE*e.length+n}*cachedStates(){for(const e of this.stateCache.values())e instanceof oo?yield e:yield*e}makeState(e,t,n){const s=this.closure(e,t&pe.FLAG_EMPTY_MASK);let i=t;return s.needflags===0&&(i&=pe.FLAG_MATCH),i|=s.needflags<<pe.FLAG_NEED_SHIFT,this.getState(s.pcs,i,n)}allocTable(e,t){const n=this.numClasses+1,s=pe.TABLE_OVERHEAD+pe.ELEMENT_SIZE*n;if(this.memBudget<s)return null;this.memBudget-=s;const i=new Array(n).fill(null);return t===V.UNANCHORED?e.next=i:e.nextAnchored=i,i}clearCache(){this.stateCache.clear(),this.stateCount=0,this.startStates.clear(),this.memBudget=this.stateBudget}resetCache(e){return this.clearCache(),this.getState(e.nfaStates,e.flag,e.matchIDs)}step(e,t,n,s){let i=s===V.UNANCHORED?e.next:e.nextAnchored;if(i!==null){const W=i[t];if(W!==null)return W}else if(i=this.allocTable(e,s),i===null)return null;const o=e.flag>>>pe.FLAG_NEED_SHIFT,B=e.flag&pe.FLAG_EMPTY_MASK;let c=B,u=0;n===10&&(c|=J.EMPTY_END_LINE,u|=J.EMPTY_BEGIN_LINE),n===Ls&&(c|=J.EMPTY_END_LINE|J.EMPTY_END_TEXT);const h=(e.flag&pe.FLAG_LAST_WORD)!==0,d=n!==Ls&&J.isWordRune(n);c|=d===h?J.EMPTY_NO_WORD_BOUNDARY:J.EMPTY_WORD_BOUNDARY;let p=e.nfaStates;c&~B&o&&(p=this.closure(p,c).pcs);const E=[];let _=!1,S=TB;for(let W=0;W<p.length;W++){const ee=this.prog.getInst(p[W]);ee.op===N.MATCH?(_||(_=!0,S=[]),S.push(ee.arg)):n!==Ls&&N.isRuneOp(ee.op)&&ee.matchRune(n)&&E.push(ee.out)}S.length>1&&S.sort((W,ee)=>W-ee),s===V.UNANCHORED&&n!==Ls&&E.push(this.prog.start);let L=u;_&&(L|=pe.FLAG_MATCH),d&&(L|=pe.FLAG_LAST_WORD);const H=this.makeState(E,L,S);return H===null?null:(i[t]=H,H)}start(e,t){const n=e.context(t);let s;if(n&J.EMPTY_BEGIN_TEXT)s=J.EMPTY_BEGIN_TEXT|J.EMPTY_BEGIN_LINE;else if(n&J.EMPTY_BEGIN_LINE)s=J.EMPTY_BEGIN_LINE;else{const o=e.step(t),B=o>=0&&J.isWordRune(o>>3);s=(n&J.EMPTY_WORD_BOUNDARY)!==0!==B?pe.FLAG_LAST_WORD:0}let i=this.startStates.get(s);if(i===void 0){if(i=this.makeState([this.prog.start],s,TB),i===null&&(this.clearCache(),i=this.makeState([this.prog.start],s,TB),i===null))return null;this.startStates.set(s,i)}return i}stepOrReset(e,t,n,s,i,o){let B=this.step(e,t,n,s);if(B!==null)return B;if(o.resetPos>=0&&i-o.resetPos<pe.PROGRESS_PER_STATE*this.stateCount)return null;o.resetPos=i;const c=this.resetCache(e);return c===null?null:(B=this.step(c,t,n,s),B)}run(e,t,n,s,i){const o=e.endPos(),B=this.latin1Class,c=n===V.UNANCHORED,u={resetPos:-1};let h=t;for(;h<o;){const d=e.step(h),p=d>>3,E=d&7;if(E===0)break;const _=p<=$.MAX_LATIN1?B[p]:this.runeClass(p);let S=c&&s.next!==null?s.next[_]:null;if(S===null&&(S=this.stepOrReset(s,_,p,n,h,u),S===null))return null;if(s=S,s.isMatch&&i(s,!1))return!0;if(!c&&s.nfaStates.length===0)return!1;h+=E}return s=this.stepOrReset(s,this.numClasses,Ls,n,h,u),s===null?null:s.isMatch&&i(s,!0)}match(e,t,n){if(this.failed)return null;if((n===V.ANCHOR_START||n===V.ANCHOR_BOTH)&&t!==0)return!1;const s=this.start(e,t);return s===null?null:this.run(e,t,n,s,(i,o)=>n!==V.ANCHOR_BOTH||o)}matchSet(e,t,n){if(this.failed)return null;if((n===V.ANCHOR_START||n===V.ANCHOR_BOTH)&&t!==0)return[];const s=this.start(e,t);if(s===null)return null;const i=new Set,o=(B,c)=>{if(n!==V.ANCHOR_BOTH||c)for(let u=0;u<B.matchIDs.length;u++)i.add(B.matchIDs[u]);return!1};return this.run(e,t,n,s,o)===null?null:Array.from(i).sort((B,c)=>B-c)}},G(pe,"FLAG_EMPTY_MASK",255),G(pe,"FLAG_MATCH",256),G(pe,"FLAG_LAST_WORD",512),G(pe,"FLAG_NEED_SHIFT",16),G(pe,"STATE_OVERHEAD",150),G(pe,"ARRAY_OVERHEAD",40),G(pe,"ELEMENT_SIZE",8),G(pe,"TABLE_OVERHEAD",48),G(pe,"PROGRESS_PER_STATE",10),pe);const PI=32,OI=500,AB=256,NI=262144;var LI=class{constructor(){this.end=0,this.cap=new Int32Array(0),this.matchcap=new Int32Array(0),this.ncap=0,this.jobPc=new Int32Array(AB),this.jobArg=new Uint8Array(AB),this.jobPos=new Int32Array(AB),this.jobLen=0,this.visited=new Uint32Array(0)}reset(r,e,t){this.end=e,this.jobLen=0,this.ncap=t;const n=r.numInst()*(e+1)+PI-1>>>5;this.visited.length<n?this.visited=new Uint32Array(n):this.visited.fill(0,0,n),this.cap.length<t?this.cap=new Int32Array(t).fill(-1):this.cap.fill(-1,0,t),this.matchcap.length<t?this.matchcap=new Int32Array(t).fill(-1):this.matchcap.fill(-1,0,t)}shouldVisit(r,e){const t=r*(this.end+1)+e,n=t>>>5,s=1<<(t&31);return this.visited[n]&s?!1:(this.visited[n]|=s,!0)}push(r,e,t,n){if(r.prog.getInst(e).op!==N.FAIL&&(n||this.shouldVisit(e,t))){if(this.jobLen>=this.jobPc.length){const s=this.jobPc.length*2,i=new Int32Array(s);i.set(this.jobPc),this.jobPc=i;const o=new Uint8Array(s);o.set(this.jobArg),this.jobArg=o;const B=new Int32Array(s);B.set(this.jobPos),this.jobPos=B}this.jobPc[this.jobLen]=e,this.jobArg[this.jobLen]=n?1:0,this.jobPos[this.jobLen]=t,this.jobLen++}}tryBacktrack(r,e,t,n,s){const i=r.longest;for(this.push(r,t,n,!1);this.jobLen>0;){this.jobLen--;let o=this.jobPc[this.jobLen],B=this.jobArg[this.jobLen]===1,c=this.jobPos[this.jobLen],u=!0;for(;!(!u&&!this.shouldVisit(o,c));){u=!1;const h=r.prog.getInst(o);switch(h.op){case N.FAIL:break;case N.ALT:if(B){B=!1,o=h.arg;continue}else{this.push(r,o,c,!0),o=h.out;continue}case N.ALT_MATCH:{const d=r.prog.getInst(h.out);if(N.isRuneOp(d.op)){this.push(r,h.arg,c,!1),o=h.arg,c=this.end;continue}this.push(r,h.out,this.end,!1),o=h.out;continue}case N.RUNE:{const d=e.step(c);if(d===Bt.EOF()||!h.matchRune(d>>3))break;c+=d&7,o=h.out;continue}case N.RUNE1:{const d=e.step(c);if(d===Bt.EOF()||d>>3!==h.runes[0])break;c+=d&7,o=h.out;continue}case N.RUNE_ANY_NOT_NL:{const d=e.step(c);if(d===Bt.EOF()||d>>3===10)break;c+=d&7,o=h.out;continue}case N.RUNE_ANY:{const d=e.step(c);if(d===Bt.EOF())break;c+=d&7,o=h.out;continue}case N.CAPTURE:if(B){this.cap[h.arg]=c;break}else{h.arg<this.ncap&&(this.push(r,o,this.cap[h.arg],!0),this.cap[h.arg]=c),o=h.out;continue}case N.EMPTY_WIDTH:{const d=e.context(c);if(h.arg&~d)break;o=h.out;continue}case N.NOP:o=h.out;continue;case N.MATCH:{if(s===V.ANCHOR_BOTH&&c!==this.end)break;if(this.ncap===0)return!0;this.ncap>1&&(this.cap[1]=c);const d=this.matchcap[1];if((d===-1||i&&c>0&&c>d)&&this.matchcap.set(this.cap),!i||c===this.end)return!0;break}case N.LB_WRITE:case N.LB_CHECK:throw new Ho("Backtracker cannot evaluate Lookbehind instructions");default:throw new Ho("bad inst")}break}}return i&&this.matchcap.length>1&&this.matchcap[1]>=0}};const ao=[];var Bo=class Bp{static shouldBacktrack(e){return e.numInst()<=OI}static maxBitStateLen(e){return Bp.shouldBacktrack(e)?Math.floor(NI/e.numInst()):0}static execute(e,t,n,s,i){const o=e.cond;if(o===J.EMPTY_ALL||(s===V.ANCHOR_START||s===V.ANCHOR_BOTH)&&n!==0||o&J.EMPTY_BEGIN_TEXT&&n!==0)return null;const B=ao.length>0?ao.pop():new LI,c=t.endPos();B.reset(e.prog,c,i);let u=!1;if(o&J.EMPTY_BEGIN_TEXT||s===V.ANCHOR_START||s===V.ANCHOR_BOTH)B.ncap>0&&(B.cap[0]=n),B.tryBacktrack(e,t,e.prog.start,n,s)&&(u=!0);else{let d=-1;for(;n<=c&&d!==0;n+=d){if(e.prefix.length>0){const E=t.index(e,n);if(E<0)break;n+=E}if(B.ncap>0&&(B.cap[0]=n),B.tryBacktrack(e,t,e.prog.start,n,s)){u=!0;break}const p=t.step(n);d=p===Bt.EOF()?0:p&7}}if(!u)return ao.push(B),null;const h=i===0?[]:J.toArray(B.matchcap.subarray(0,i));return ao.push(B),h}},rf=class{constructor(r){this.sparse=new Uint32Array(r),this.dense=new Uint32Array(r),this.size=0,this.nextIndex=0}empty(){return this.nextIndex>=this.size}next(){return this.dense[this.nextIndex++]}clear(){this.size=0,this.nextIndex=0}contains(r){return r<this.sparse.length&&this.sparse[r]<this.size&&this.dense[this.sparse[r]]===r}insert(r){this.contains(r)||this.insertNew(r)}insertNew(r){r>=this.sparse.length||(this.sparse[r]=this.size,this.dense[this.size]=r,this.size++)}};const FI=(r,e,t,n)=>{const s=r.length,i=e.length;let o=0,B=0;const c=[],u=[];let h=!0,d=-1;const p=E=>{const _=E?r:e,S=E?o:B,L=E?t:n;return d>0&&_[S]<=c[d]?!1:(c.push(_[S],_[S+1]),E?o+=2:B+=2,d+=2,u.push(L),!0)};for(;o<s||B<i;)if(B>=i?h=p(!0):o>=s||e[B]<r[o]?h=p(!1):h=p(!0),!h)return null;return{merged:c,next:u}};var kI=class{constructor(r){this.start=r.start,this.numCap=r.numCap,this.inst=new Array(r.inst.length);for(let e=0;e<r.inst.length;e++){const t=r.inst[e],n=new N(t.op);n.out=t.out,n.arg=t.arg,n.runes=t.runes?new Int32Array(t.runes):new Int32Array(0),n.next=null,this.inst[e]=n}}};const MI=r=>{const e=new kI(r);for(let t=0;t<e.inst.length;t++){const n=e.inst[t];if(n.op!==N.ALT&&n.op!==N.ALT_MATCH)continue;let s="out",i="arg",o=e.inst[n[i]];if(o.op!==N.ALT&&o.op!==N.ALT_MATCH&&(s="arg",i="out",o=e.inst[n[i]],o.op!==N.ALT&&o.op!==N.ALT_MATCH))continue;const B=e.inst[n[s]];if(B.op===N.ALT||B.op===N.ALT_MATCH)continue;let c="out",u="arg",h=!1;o.out===t?h=!0:o.arg===t&&(h=!0,c="arg",u="out"),h&&(o[c]=n[s]),n[s]===o[c]&&(n[i]=o[u])}return e},xI=r=>{if(r.inst.length>=1e3)return null;const e=new rf(r.inst.length),t=new rf(r.inst.length),n=new Array(r.inst.length),s=new Array(r.inst.length).fill(!1),i=o=>{let B=!0;const c=r.inst[o];if(t.contains(o))return!0;switch(t.insert(o),c.op){case N.ALT:case N.ALT_MATCH:{B=i(c.out)&&i(c.arg);let u=s[c.out],h=s[c.arg];if(u&&h)return!1;if(h){const _=c.out;c.out=c.arg,c.arg=_;const S=u;u=h,h=S}u&&(s[o]=!0,c.op=N.ALT_MATCH);const d=n[c.out]||[],p=n[c.arg]||[],E=FI(d,p,c.out,c.arg);if(!E)return!1;n[o]=new Int32Array(E.merged),c.next=new Uint32Array(E.next);break}case N.CAPTURE:case N.EMPTY_WIDTH:case N.NOP:B=i(c.out),s[o]=s[c.out],n[o]=n[c.out]?new Int32Array(n[c.out]):new Int32Array(0),c.next=new Uint32Array(Math.floor(n[o].length/2)+1).fill(c.out);break;case N.MATCH:case N.FAIL:s[o]=c.op===N.MATCH;break;case N.RUNE:{if(s[o]=!1,c.next&&c.next.length>0)break;if(e.insert(c.out),!c.runes||c.runes.length===0){n[o]=new Int32Array(0),c.next=new Uint32Array([c.out]);break}let u=[];if(c.runes.length===1&&c.arg&V.FOLD_CASE){const h=c.runes[0];u.push(h,h);for(let d=$.simpleFold(h);d!==h;d=$.simpleFold(d))u.push(d,d);u.sort((d,p)=>d-p)}else for(let h=0;h<c.runes.length;h++)u.push(c.runes[h]);n[o]=new Int32Array(u),c.next=new Uint32Array(Math.floor(u.length/2)+1).fill(c.out),c.op=N.RUNE;break}case N.RUNE1:{if(s[o]=!1,c.next&&c.next.length>0)break;e.insert(c.out);let u=[];if(c.arg&V.FOLD_CASE){const h=c.runes[0];u.push(h,h);for(let d=$.simpleFold(h);d!==h;d=$.simpleFold(d))u.push(d,d);u.sort((d,p)=>d-p)}else u.push(c.runes[0],c.runes[0]);n[o]=new Int32Array(u),c.next=new Uint32Array(Math.floor(u.length/2)+1).fill(c.out),c.op=N.RUNE;break}case N.RUNE_ANY:if(s[o]=!1,c.next&&c.next.length>0)break;e.insert(c.out),n[o]=new Int32Array([0,$.MAX_RUNE]),c.next=new Uint32Array([c.out]);break;case N.RUNE_ANY_NOT_NL:if(s[o]=!1,c.next&&c.next.length>0)break;e.insert(c.out),n[o]=new Int32Array([0,9,11,$.MAX_RUNE]),c.next=new Uint32Array(Math.floor(n[o].length/2)+1).fill(c.out)}return B};for(e.clear(),e.insert(r.start);!e.empty();)if(t.clear(),!i(e.next()))return null;for(let o=0;o<r.inst.length;o++)n[o]&&(r.inst[o].runes=n[o]);return r},VI=(r,e)=>{for(let t=0;t<e.inst.length;t++){const n=e.inst[t];switch(n.op){case N.ALT:case N.ALT_MATCH:case N.RUNE:break;case N.CAPTURE:case N.EMPTY_WIDTH:case N.NOP:case N.MATCH:case N.FAIL:r.inst[t].next=null;break;case N.RUNE1:case N.RUNE_ANY:case N.RUNE_ANY_NOT_NL:r.inst[t].next=null,r.inst[t].op=n.op,r.inst[t].runes=n.runes?new Int32Array(n.runes):new Int32Array(0)}}};var sf=class cp{static compile(e){if(e.start===0||e.numLb>0)return null;const t=e.inst[e.start];if(t.op!==N.EMPTY_WIDTH||!(t.arg&J.EMPTY_BEGIN_TEXT))return null;let n=!1;for(let i=0;i<e.inst.length;i++)if(e.inst[i].op===N.ALT||e.inst[i].op===N.ALT_MATCH){n=!0;break}for(let i=0;i<e.inst.length;i++){const o=e.inst[i],B=e.inst[o.out].op;switch(o.op){case N.ALT:case N.ALT_MATCH:if(B===N.MATCH||e.inst[o.arg].op===N.MATCH)return null;break;case N.EMPTY_WIDTH:if(B===N.MATCH){if((o.arg&J.EMPTY_END_TEXT)===J.EMPTY_END_TEXT)continue;return null}break;default:if(B===N.MATCH&&n)return null}}let s=MI(e);return s=xI(s),s!==null&&VI(s,e),s}static next(e,t){const n=e.matchRunePos(t);return n>=0?e.next[n]:e.op===N.ALT_MATCH?e.out:0}static execute(e,t,n,s,i){const o=e.onepass;if(!o)return null;const B=new Int32Array(i).fill(-1);let c=!1,u=t.step(n),h=u>>3,d=u&7,p=Bt.EOF(),E=-1,_=0;u!==Bt.EOF()&&(p=t.step(n+d),p!==Bt.EOF()&&(E=p>>3,_=p&7));let S=n===0?J.emptyOpContext(-1,h):t.context(n),L=o.start,H;for(;;){switch(H=o.inst[L],L=H.out,H.op){case N.MATCH:return s===V.ANCHOR_BOTH&&n!==t.endPos()?null:(c=!0,B.length>0&&(B[0]=0,B[1]=n),i===0?[]:J.toArray(B));case N.RUNE:if(!H.matchRune(h))return null;break;case N.RUNE1:if(h!==H.runes[0])return null;break;case N.RUNE_ANY:break;case N.RUNE_ANY_NOT_NL:if(h===10)return null;break;case N.ALT:case N.ALT_MATCH:L=cp.next(H,h);continue;case N.FAIL:return null;case N.NOP:continue;case N.EMPTY_WIDTH:if(H.arg&~S)return null;continue;case N.CAPTURE:H.arg<B.length&&(B[H.arg]=n);continue;default:throw new Ho("bad inst")}if(d===0)break;S=J.emptyOpContext(h,E),n+=d,h=E,d=_,h!==-1&&(p=t.step(n+d),p!==Bt.EOF()?(E=p>>3,_=p&7):(E=-1,_=0))}return c?i===0?[]:J.toArray(B):null}},X,I=(X=class{static isPseudoOp(e){return e>=X.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===k.CODES["-"]?"\\":""}static fromRegexp(e){const t=new X(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t.lb=e.lb,t}constructor(e){this.op=e,this.flags=0,this.subs=X.emptySubs(),this.runes=new Int32Array(0),this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}reinit(){this.flags=0,this.subs=X.emptySubs(),this.runes=new Int32Array(0),this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case X.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case X.Op.EMPTY_MATCH:e+="(?:)";break;case X.Op.STAR:case X.Op.PLUS:case X.Op.QUEST:case X.Op.REPEAT:{const t=this.subs[0];switch(t.op>X.Op.CAPTURE||t.op===X.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case X.Op.STAR:e+="*";break;case X.Op.PLUS:e+="+";break;case X.Op.QUEST:e+="?";break;case X.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}"}this.flags&V.NON_GREEDY&&(e+="?");break}case X.Op.CONCAT:for(let t of this.subs)t.op===X.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break;case X.Op.ALTERNATE:{let t="";for(let n of this.subs)e+=t,t="|",e+=n.appendTo();break}case X.Op.LITERAL:this.flags&V.FOLD_CASE&&(e+="(?i:");for(let t of this.runes)e+=J.escapeRune(t);this.flags&V.FOLD_CASE&&(e+=")");break;case X.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case X.Op.ANY_CHAR:e+="(?s:.)";break;case X.Op.PLB:e+=`(?<=${this.subs[0].appendTo()})`;break;case X.Op.NLB:e+=`(?<!${this.subs[0].appendTo()})`;break;case X.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==X.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case X.Op.BEGIN_TEXT:e+="\\A";break;case X.Op.END_TEXT:this.flags&V.WAS_DOLLAR?e+="(?-m:$)":e+="\\z";break;case X.Op.BEGIN_LINE:e+="^";break;case X.Op.END_LINE:e+="$";break;case X.Op.WORD_BOUNDARY:e+="\\b";break;case X.Op.NO_WORD_BOUNDARY:e+="\\B";break;case X.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===$.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const n=this.runes[t]+1,s=this.runes[t+1]-1;e+=X.quoteIfHyphen(n),e+=J.escapeRune(n),n!==s&&(e+="-",e+=X.quoteIfHyphen(s),e+=J.escapeRune(s))}}else for(let t=0;t<this.runes.length;t+=2){const n=this.runes[t],s=this.runes[t+1];e+=X.quoteIfHyphen(n),e+=J.escapeRune(n),n!==s&&(e+="-",e+=X.quoteIfHyphen(s),e+=J.escapeRune(s))}e+="]";break;default:e+=this.op}return e}maxCap(){let e=0;if(this.op===X.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const n=t.maxCap();e<n&&(e=n)}return e}equals(e){if(!(e!==null&&e instanceof X)||this.op!==e.op)return!1;switch(this.op){case X.Op.END_TEXT:if((this.flags&V.WAS_DOLLAR)!==(e.flags&V.WAS_DOLLAR))return!1;break;case X.Op.LITERAL:case X.Op.CHAR_CLASS:if((this.flags&V.FOLD_CASE)!==(e.flags&V.FOLD_CASE))return!1;if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break;case X.Op.ALTERNATE:case X.Op.CONCAT:if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break;case X.Op.STAR:case X.Op.PLUS:case X.Op.QUEST:if((this.flags&V.NON_GREEDY)!==(e.flags&V.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break;case X.Op.REPEAT:if((this.flags&V.NON_GREEDY)!==(e.flags&V.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break;case X.Op.CAPTURE:if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break;case X.Op.PLB:case X.Op.NLB:if(this.lb!==e.lb||!this.subs[0].equals(e.subs[0]))return!1}return!0}},G(X,"Op",ip(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","PLB","NLB","LEFT_PAREN","VERTICAL_BAR"])),X),eu=class{static walk(r,e){const t=[];let n=r,s;for(;;){if(n.subs.length===0)s=e.leaf(n);else{const i=e.enter(n);if(i.result===void 0){t.push({re:n,state:i,i:0}),n=n.subs[0];continue}s=i.result}for(;;){if(t.length===0)return s;const i=t[t.length-1];if(e.child(i.re,i.state,s,i.i),i.i++,i.state.result===void 0&&i.i<i.re.subs.length){n=i.re.subs[i.i];break}t.pop(),s=i.state.result!==void 0?i.state.result:e.leave(i.re,i.state)}}}},of=class{constructor(r,e){const t=new Map,n=[0],s=[0],i=[0],o=[0];for(const _ of r){let S=0;for(let L=0;L<_.length;L++){const H=S*e+_[L];let W=t.get(H);W===void 0&&(W=n.length,t.set(H,W),n.push(S),s.push(_[L]),i.push(i[S]+1),o.push(0)),S=W}o[S]=1}const B=n.length,c=new Int32Array(B-1);for(let _=1;_<B;_++)c[_-1]=_;c.sort((_,S)=>n[_]-n[S]||s[_]-s[S]);const u=new Int32Array(B+1);for(let _=1;_<B;_++)u[n[_]+1]++;for(let _=0;_<B;_++)u[_+1]+=u[_];const h=new Int32Array(B-1);for(let _=0;_<c.length;_++)h[_]=s[c[_]];this.childStart=u,this.childUnit=h,this.childNode=c;const d=new Int32Array(B);for(let _=0;_<B;_++)d[_]=_;d.sort((_,S)=>i[_]-i[S]);const p=new Int32Array(B),E=Uint8Array.from(o);for(let _=1;_<B;_++){const S=d[_],L=n[S];if(L!==0){let H=p[L],W=this.next(H,s[S]);for(;W<0&&H!==0;)H=p[H],W=this.next(H,s[S]);p[S]=W>=0?W:0}E[S]|=E[p[S]]}this.fail=p,this.match=E}next(r,e){let t=this.childStart[r],n=this.childStart[r+1];const s=this.childUnit;for(;t<n;){const i=t+n>>1,o=s[i];if(o===e)return this.childNode[i];o<e?t=i+1:n=i}return-1}advance(r,e){for(;;){const t=this.next(r,e);if(t>=0)return t;if(r===0)return 0;r=this.fail[r]}}searchUTF16(r,e,t){let n=0;for(let s=e;s<t;s++)if(n=this.advance(n,r.charCodeAt(s)),this.match[n]===1)return!0;return!1}searchUTF8(r,e,t){let n=0;for(let s=e;s<t;s++)if(n=this.advance(n,r[s]),this.match[n]===1)return!0;return!1}},yt,Be=(yt=class{constructor(e){this.type=e,this.subs=[],this.str="",this.bytes=null,this.cost=e===yt.Type.EXACT?1:0,this.allExact=!1,this.ac16=null,this.ac8=null}automaton16(){if(this.ac16===null){const e=this.subs.map(t=>{const n=new Array(t.str.length);for(let s=0;s<t.str.length;s++)n[s]=t.str.charCodeAt(s);return n});this.ac16=new of(e,65536)}return this.ac16}automaton8(){return this.ac8===null&&(this.ac8=new of(this.subs.map(e=>e.bytes),256)),this.ac8}eval(e,t){switch(this.type){case yt.Type.NONE:return!0;case yt.Type.EXACT:return e.hasString(this,t);case yt.Type.AND:for(let n=0;n<this.subs.length;n++)if(!this.subs[n].eval(e,t))return!1;return!0;case yt.Type.OR:if(this.allExact)return e.hasAnyString(this,t);for(let n=0;n<this.subs.length;n++)if(this.subs[n].eval(e,t))return!0;return!1;default:return!0}}},G(yt,"Type",{NONE:0,EXACT:1,AND:2,OR:3}),G(yt,"MAX_SCANS",32),G(yt,"MAX_AC_UNITS",1<<18),yt),Vt,GI=(Vt=class{static build(e){return e?eu.walk(e,Vt.WALKER):new Be(Be.Type.NONE)}static leaf(e){if(e.op!==I.Op.LITERAL)return new Be(Be.Type.NONE);if(e.runes.length===0||e.flags&V.FOLD_CASE)return new Be(Be.Type.NONE);let t="";for(let s=0;s<e.runes.length;s++){if($.isUnsearchable(e.runes[s]))return new Be(Be.Type.NONE);t+=String.fromCodePoint(e.runes[s])}const n=new Be(Be.Type.EXACT);return n.str=t,n.bytes=J.stringToUtf8ByteArray(n.str),n}static enter(e){switch(e.op){case I.Op.CAPTURE:case I.Op.PLUS:return{sub:null};case I.Op.REPEAT:return e.min>=1?{sub:null}:{result:new Be(Be.Type.NONE)};case I.Op.CONCAT:return{pf:new Be(Be.Type.AND),subs:[]};case I.Op.ALTERNATE:return{pf:new Be(Be.Type.OR),subs:[]};default:return{result:new Be(Be.Type.NONE)}}}static child(e,t,n){if(t.subs===void 0){t.sub=n;return}if(t.pf.type===Be.Type.AND){if(n.type===Be.Type.NONE)return;if(n.type===Be.Type.AND){for(let s=0;s<n.subs.length;s++)t.subs.push(n.subs[s]);return}t.subs.push(n);return}if(n.type===Be.Type.NONE){t.result=new Be(Be.Type.NONE);return}if(n.type===Be.Type.OR){for(let s=0;s<n.subs.length;s++)t.subs.push(n.subs[s]);return}t.subs.push(n)}static leave(e,t){if(t.subs===void 0)return t.sub;const n=t.pf,s=new Set,i=[];for(const u of t.subs){if(u.type===Be.Type.EXACT){if(s.has(u.str))continue;s.add(u.str)}i.push(u)}if(n.type===Be.Type.AND){const u=[];let h=0;for(const d of i)h+d.cost>Be.MAX_SCANS||(u.push(d),h+=d.cost);return u.length===0?new Be(Be.Type.NONE):u.length===1?u[0]:(n.subs=u,n.cost=h,n)}if(i.length===0)return new Be(Be.Type.NONE);if(i.length===1)return i[0];n.subs=i;let o=!0,B=0,c=0;for(const u of i)u.type!==Be.Type.EXACT?o=!1:c+=u.bytes.length,B+=u.cost;return o?c>Be.MAX_AC_UNITS?new Be(Be.Type.NONE):(n.allExact=!0,n.cost=1,n):B>Be.MAX_SCANS?new Be(Be.Type.NONE):(n.cost=B,n)}},G(Vt,"WALKER",{leaf:e=>Vt.leaf(e),enter:e=>Vt.enter(e),child:(e,t,n)=>Vt.child(e,t,n),leave:(e,t)=>Vt.leave(e,t)}),Vt),Pt=class{constructor(r=0,e=0){this.head=r,this.tail=e}},HI=class{constructor(){this.inst=[],this.start=0,this.numCap=2,this.lbStarts=[],this.numLb=0,this.lbInst=null}getInst(r){return this.inst[r]}numInst(){return this.inst.length}addInst(r){this.inst.push(new N(r))}markLookbehindInsts(){const r=new Uint8Array(this.inst.length),e=this.lbStarts.slice();for(;e.length>0;){const t=e.pop();if(t===0||r[t]===1)continue;r[t]=1;const n=this.inst[t];switch(n.op){case N.ALT:case N.ALT_MATCH:e.push(n.out,n.arg);break;case N.MATCH:case N.FAIL:break;default:e.push(n.out)}}this.lbInst=r}skipNop(r){let e=this.inst[r];for(;e.op===N.NOP||e.op===N.CAPTURE;)e=this.inst[r],r=e.out;return e}prefix(){let r="",e=this.skipNop(this.start);if(!N.isRuneOp(e.op)||e.runes.length!==1)return[e.op===N.MATCH,r];for(;N.isRuneOp(e.op)&&e.runes.length===1&&!(e.arg&V.FOLD_CASE)&&!$.isUnsearchable(e.runes[0]);)r+=String.fromCodePoint(e.runes[0]),e=this.skipNop(e.out);return[e.op===N.MATCH,r]}startCond(){let r=0,e=this.start;e:for(;;){const t=this.inst[e];switch(t.op){case N.EMPTY_WIDTH:r|=t.arg;break;case N.FAIL:return-1;case N.CAPTURE:case N.NOP:break;default:break e}e=t.out}return r}patch(r,e){let t=r.head;for(;t!==0;){const n=this.inst[t>>1];t&1?(t=n.arg,n.arg=e):(t=n.out,n.out=e)}}append(r,e){if(r.head===0)return e;if(e.head===0)return r;const t=this.inst[r.tail>>1];return r.tail&1?t.arg=e.head:t.out=e.head,new Pt(r.head,e.tail)}toString(){let r="";for(let e=0;e<this.inst.length;e++){const t=r.length;r+=e,e===this.start&&(r+="*"),r+="        ".substring(r.length-t),r+=this.inst[e],r+=`
`}return r}};const UI=new Int32Array([0,k.CODES[`
`]-1,k.CODES[`
`]+1,$.MAX_RUNE]),af=new Int32Array([0,$.MAX_RUNE]);var co=class{constructor(r=0,e=new Pt,t=!1){this.i=r,this.out=e,this.nullable=t}},jI=class Bc{static compileRegexp(e){const t=new Bc,n=t.compile(e);return t.prog.patch(n.out,t.newInst(N.MATCH).i),t.prog.start=n.i,t.prog.markLookbehindInsts(),t.prog}static compileSet(e){const t=new Bc;if(e.length===0)return t.prog.start=t.newInst(N.FAIL).i,t.prog.markLookbehindInsts(),t.prog;let n=[];for(let i=0;i<e.length;i++){t.lbOffset=t.prog.numLb;const o=t.compile(e[i]),B=t.newInst(N.MATCH);t.prog.getInst(B.i).arg=i,t.prog.patch(o.out,B.i),n.push(o.i)}let s=n[0];for(let i=1;i<n.length;i++){const o=t.newInst(N.ALT),B=t.prog.getInst(o.i);B.out=s,B.arg=n[i],s=o.i}return t.prog.start=s,t.prog.markLookbehindInsts(),t.prog}constructor(){this.prog=new HI,this.newInst(N.FAIL),this.lbOffset=0,this.runeCache=new Map,this.walker={leaf:e=>this.leaf(e),enter:e=>this.enter(e),child:(e,t,n)=>this.child(e,t,n),leave:(e,t)=>this.leave(e,t)}}newInst(e){return this.prog.addInst(e),new co(this.prog.numInst()-1,new Pt,!0)}nop(){const e=this.newInst(N.NOP);return e.out=new Pt(e.i<<1,e.i<<1),e}fail(){return new co}cap(e){const t=this.newInst(N.CAPTURE);return t.out=new Pt(t.i<<1,t.i<<1),this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?(this.prog.patch(e.out,0),this.prog.patch(t.out,0),this.fail()):(this.prog.patch(e.out,t.i),new co(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const n=this.newInst(N.ALT),s=this.prog.getInst(n.i);return s.out=e.i,s.arg=t.i,n.out=this.prog.append(e.out,t.out),n.nullable=e.nullable||t.nullable,n}loop(e,t){const n=this.newInst(N.ALT),s=this.prog.getInst(n.i);return t?(s.arg=e.i,n.out=new Pt(n.i<<1,n.i<<1)):(s.out=e.i,n.out=new Pt(n.i<<1|1,n.i<<1|1)),this.prog.patch(e.out,n.i),n}quest(e,t){if(e.i===0)return this.nop();const n=this.newInst(N.ALT),s=this.prog.getInst(n.i);return t?(s.arg=e.i,n.out=new Pt(n.i<<1,n.i<<1)):(s.out=e.i,n.out=new Pt(n.i<<1|1,n.i<<1|1)),n.out=this.prog.append(n.out,e.out),n}star(e,t){return e.i===0?this.nop():e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return e.i===0?this.fail():new co(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(N.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=new Pt(t.i<<1,t.i<<1),t}rune(e,t){const n=this.newInst(N.RUNE);n.nullable=!1;const s=this.prog.getInst(n.i);return s.runes=e,t&=V.FOLD_CASE,(e.length!==1||$.simpleFold(e[0])===e[0])&&(t&=-2),s.arg=t,n.out=new Pt(n.i<<1,n.i<<1),!(t&V.FOLD_CASE)&&e.length===1||e.length===2&&e[0]===e[1]?s.op=N.RUNE1:e.length===2&&e[0]===0&&e[1]===$.MAX_RUNE?s.op=N.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===k.CODES[`
`]-1&&e[2]===k.CODES[`
`]+1&&e[3]===$.MAX_RUNE&&(s.op=N.RUNE_ANY_NOT_NL),n}lookBehind(e,t){const n=Math.sign(t)*(Math.abs(t)+this.lbOffset),s=this.newInst(N.LB_WRITE);this.prog.getInst(s.i).arg=n;const i=this.rune(af,0),o=this.star(i,!0),B=this.cat(o,e);this.prog.patch(B.out,s.i);const c=this.newInst(N.LB_CHECK);return this.prog.getInst(c.i).arg=n,this.prog.lbStarts.push(B.i),Math.abs(n)>this.prog.numLb&&(this.prog.numLb=Math.abs(n)),c.out=new Pt(c.i<<1,c.i<<1),c}compile(e){return eu.walk(e,this.walker)}leaf(e){switch(e.op){case I.Op.NO_MATCH:return this.fail();case I.Op.EMPTY_MATCH:return this.nop();case I.Op.LITERAL:{if(e.runes.length===0)return this.nop();let t=null;for(let n of e.runes){let s=this.runeCache.get(n);s===void 0&&(s=new Int32Array([n]),this.runeCache.set(n,s));const i=this.rune(s,e.flags);t=t===null?i:this.cat(t,i)}return t}case I.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case I.Op.ANY_CHAR_NOT_NL:return this.rune(UI,0);case I.Op.ANY_CHAR:return this.rune(af,0);case I.Op.BEGIN_LINE:return this.empty(J.EMPTY_BEGIN_LINE);case I.Op.END_LINE:return this.empty(J.EMPTY_END_LINE);case I.Op.BEGIN_TEXT:return this.empty(J.EMPTY_BEGIN_TEXT);case I.Op.END_TEXT:return this.empty(J.EMPTY_END_TEXT);case I.Op.WORD_BOUNDARY:return this.empty(J.EMPTY_WORD_BOUNDARY);case I.Op.NO_WORD_BOUNDARY:return this.empty(J.EMPTY_NO_WORD_BOUNDARY);case I.Op.CONCAT:case I.Op.ALTERNATE:return this.nop();default:throw new wB("regexp: unhandled case in compile")}}enter(e){switch(e.op){case I.Op.PLB:case I.Op.NLB:case I.Op.STAR:case I.Op.PLUS:case I.Op.QUEST:return{sub:null};case I.Op.CAPTURE:return{bra:this.cap(e.cap<<1),sub:null};case I.Op.CONCAT:case I.Op.ALTERNATE:return{f:null};default:throw new wB("regexp: unhandled case in compile")}}child(e,t,n){e.op===I.Op.CONCAT?t.f=t.f===null?n:this.cat(t.f,n):e.op===I.Op.ALTERNATE?t.f=t.f===null?n:this.alt(t.f,n):t.sub=n}leave(e,t){switch(e.op){case I.Op.PLB:case I.Op.NLB:return this.lookBehind(t.sub,e.lb);case I.Op.CAPTURE:{const n=this.cap(e.cap<<1|1);return this.cat(this.cat(t.bra,t.sub),n)}case I.Op.STAR:return this.star(t.sub,(e.flags&V.NON_GREEDY)!==0);case I.Op.PLUS:return this.plus(t.sub,(e.flags&V.NON_GREEDY)!==0);case I.Op.QUEST:return this.quest(t.sub,(e.flags&V.NON_GREEDY)!==0);case I.Op.CONCAT:case I.Op.ALTERNATE:return t.f;default:throw new wB("regexp: unhandled case in compile")}}},Oe,JI=(Oe=class{static simplify(e){return e===null?null:eu.walk(e,Oe.WALKER)}static leaf(e){if(e.op===I.Op.CHAR_CLASS){if(e.runes===null)return e;if(e.runes.length===0)return new I(I.Op.NO_MATCH);if(e.runes.length===2&&e.runes[0]===0&&e.runes[1]===$.MAX_RUNE)return new I(I.Op.ANY_CHAR);if(e.runes.length===4&&e.runes[0]===0&&e.runes[1]===k.CODES[`
`]-1&&e.runes[2]===k.CODES[`
`]+1&&e.runes[3]===$.MAX_RUNE)return new I(I.Op.ANY_CHAR_NOT_NL)}return e}static enter(e){switch(e.op){case I.Op.PLB:case I.Op.NLB:case I.Op.CAPTURE:case I.Op.STAR:case I.Op.PLUS:case I.Op.QUEST:return{sub:null};case I.Op.CONCAT:case I.Op.ALTERNATE:return{subs:[],changed:!1};case I.Op.REPEAT:return e.min===0&&e.max===0?{result:new I(I.Op.EMPTY_MATCH)}:{sub:null};default:return{result:e}}}static child(e,t,n,s){if(t.subs===void 0){t.sub=n;return}if(n!==e.subs[s]&&(t.changed=!0),e.op===I.Op.CONCAT){if(n.op===I.Op.NO_MATCH){t.result=new I(I.Op.NO_MATCH);return}if(n.op===I.Op.EMPTY_MATCH){t.changed=!0;return}if(n.op===I.Op.CONCAT){t.changed=!0;for(let i=0;i<n.subs.length;i++)t.subs.push(n.subs[i]);return}}else{if(n.op===I.Op.NO_MATCH){t.changed=!0;return}if(n.op===I.Op.ALTERNATE){t.changed=!0;for(let i=0;i<n.subs.length;i++)t.subs.push(n.subs[i]);return}}t.subs.push(n)}static leave(e,t){switch(e.op){case I.Op.PLB:case I.Op.NLB:case I.Op.CAPTURE:{const n=t.sub;if(n!==e.subs[0]){const s=I.fromRegexp(e);return s.runes=new Int32Array(0),s.subs=[n],s}return e}case I.Op.CONCAT:case I.Op.ALTERNATE:if(t.changed){const n=t.subs;if(n.length===0)return new I(e.op===I.Op.CONCAT?I.Op.EMPTY_MATCH:I.Op.NO_MATCH);if(n.length===1)return n[0];const s=I.fromRegexp(e);return s.runes=new Int32Array(0),s.subs=n,s}return e;case I.Op.STAR:case I.Op.PLUS:case I.Op.QUEST:return Oe.simplify1(e.op,e.flags,t.sub,e);case I.Op.REPEAT:return Oe.simplifyRepeat(e,t.sub);default:return e}}static simplifyRepeat(e,t){if(e.max===-1){if(e.min===0)return Oe.simplify1(I.Op.STAR,e.flags,t,null);if(e.min===1)return Oe.simplify1(I.Op.PLUS,e.flags,t,null);const s=[];for(let i=0;i<e.min-1;i++)s.push(t);return s.push(Oe.simplify1(I.Op.PLUS,e.flags,t,null)),Oe.concat(s)}if(e.min===1&&e.max===1)return t;let n=null;if(e.min>0){n=[];for(let s=0;s<e.min;s++)n.push(t)}if(e.max>e.min){let s=Oe.simplify1(I.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++)s=Oe.simplify1(I.Op.QUEST,e.flags,Oe.concat([t,s]),null);if(n===null)return s;n.push(s)}return n!==null?Oe.concat(n):new I(I.Op.NO_MATCH)}static concat(e){const t=[];for(let s=0;s<e.length;s++){const i=e[s];if(i.op===I.Op.NO_MATCH)return new I(I.Op.NO_MATCH);if(i.op!==I.Op.EMPTY_MATCH){if(i.op===I.Op.CONCAT){for(let o=0;o<i.subs.length;o++)t.push(i.subs[o]);continue}t.push(i)}}if(t.length===0)return new I(I.Op.EMPTY_MATCH);if(t.length===1)return t[0];const n=new I(I.Op.CONCAT);return n.subs=t,n}static simplify1(e,t,n,s){if(n.op===I.Op.EMPTY_MATCH)return n;if(n.op===I.Op.NO_MATCH)return e===I.Op.PLUS?n:new I(I.Op.EMPTY_MATCH);if(e===n.op&&(t&V.NON_GREEDY)===(n.flags&V.NON_GREEDY))return n;if(s!==null&&s.op===e&&(s.flags&V.NON_GREEDY)===(t&V.NON_GREEDY)&&n===s.subs[0])return s;const i=new I(e);return i.flags=t,i.subs=[n],i}},G(Oe,"WALKER",{leaf:e=>Oe.leaf(e),enter:e=>Oe.enter(e),child:(e,t,n,s)=>Oe.child(e,t,n,s),leave:(e,t)=>Oe.leave(e,t)}),Oe),de=class{constructor(r,e){this.sign=r,this.cls=e}};const Bf=[48,57],cf=[9,10,12,13,32,32],uf=[48,57,65,90,95,95,97,122],lf=new Map([["\\d",new de(1,Bf)],["\\D",new de(-1,Bf)],["\\s",new de(1,cf)],["\\S",new de(-1,cf)],["\\w",new de(1,uf)],["\\W",new de(-1,uf)]]),hf=[48,57,65,90,97,122],ff=[65,90,97,122],df=[0,127],Cf=[9,9,32,32],pf=[0,31,127,127],gf=[48,57],mf=[33,126],Ef=[97,122],_f=[32,126],Df=[33,47,58,64,91,96,123,126],wf=[9,13,32,32],yf=[65,90],If=[48,57,65,90,95,95,97,122],Tf=[48,57,65,70,97,102],Af=new Map([["[:alnum:]",new de(1,hf)],["[:^alnum:]",new de(-1,hf)],["[:alpha:]",new de(1,ff)],["[:^alpha:]",new de(-1,ff)],["[:ascii:]",new de(1,df)],["[:^ascii:]",new de(-1,df)],["[:blank:]",new de(1,Cf)],["[:^blank:]",new de(-1,Cf)],["[:cntrl:]",new de(1,pf)],["[:^cntrl:]",new de(-1,pf)],["[:digit:]",new de(1,gf)],["[:^digit:]",new de(-1,gf)],["[:graph:]",new de(1,mf)],["[:^graph:]",new de(-1,mf)],["[:lower:]",new de(1,Ef)],["[:^lower:]",new de(-1,Ef)],["[:print:]",new de(1,_f)],["[:^print:]",new de(-1,_f)],["[:punct:]",new de(1,Df)],["[:^punct:]",new de(-1,Df)],["[:space:]",new de(1,wf)],["[:^space:]",new de(-1,wf)],["[:upper:]",new de(1,yf)],["[:^upper:]",new de(-1,yf)],["[:word:]",new de(1,If)],["[:^word:]",new de(-1,If)],["[:xdigit:]",new de(1,Tf)],["[:^xdigit:]",new de(-1,Tf)]]);var cr=class yo{static charClassToString(e,t){let n="[";for(let s=0;s<t;s+=2){s>0&&(n+=" ");const i=e[s],o=e[s+1];i===o?n+=`0x${i.toString(16)}`:n+=`0x${i.toString(16)}-0x${o.toString(16)}`}return n+="]",n}static sortRanges(e,t){const n=t>>1,s=new Array(n);for(let o=0;o<n;o++)s[o]=o;s.sort((o,B)=>e[2*o]-e[2*B]||e[2*B+1]-e[2*o+1]);const i=e.slice(0,t);for(let o=0;o<n;o++)e[2*o]=i[2*s[o]],e[2*o+1]=i[2*s[o]+1]}constructor(e=J.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.r instanceof Int32Array?this.len===this.r.length?this.r:this.r.subarray(0,this.len):new Int32Array(this.len===this.r.length?this.r:this.r.slice(0,this.len))}toGrowableArray(){return Array.isArray(this.r)?(this.r.length=this.len,this.r):Array.from(this.r.subarray(0,this.len))}cleanClass(){if(this.len<4)return this;yo.sortRanges(this.r,this.len);let e=2;for(let t=2;t<this.len;t+=2){const n=this.r[t],s=this.r[t+1];if(n<=this.r[e-1]+1){s>this.r[e-1]&&(this.r[e-1]=s);continue}this.r[e]=n,this.r[e+1]=s,e+=2}return this.len=e,this}appendLiteral(e,t){return t&V.FOLD_CASE?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let n=2;n<=4;n+=2)if(this.len>=n){const s=this.r[this.len-n],i=this.r[this.len-n+1];if(e<=i+1&&s<=t+1)return e<s&&(this.r[this.len-n]=e),t>i&&(this.r[this.len-n+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=$.MIN_FOLD&&t>=$.MAX_FOLD)return this.appendRange(e,t);if(t<$.MIN_FOLD||e>$.MAX_FOLD)return this.appendRange(e,t);e<$.MIN_FOLD&&(this.appendRange(e,$.MIN_FOLD-1),e=$.MIN_FOLD),t>$.MAX_FOLD&&(this.appendRange($.MAX_FOLD+1,t),t=$.MAX_FOLD);for(let n=e;n<=t;n++){this.appendRange(n,n);for(let s=$.simpleFold(n);s!==n;s=$.simpleFold(s))this.appendRange(s,s)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let n=0;n<e.length;n+=2){const s=e[n],i=e[n+1];t<=s-1&&this.appendRange(t,s-1),t=i+1}return t<=$.MAX_RUNE&&this.appendRange(t,$.MAX_RUNE),this}appendTable(e){for(let t=0;t<e.length;++t){const n=e.getLo(t),s=e.getHi(t),i=e.getStride(t);if(i===1){this.appendRange(n,s);continue}for(let o=n;o<=s;o+=i)this.appendRange(o,o)}return this}appendNegatedTable(e){let t=0;for(let n=0;n<e.length;++n){const s=e.getLo(n),i=e.getHi(n),o=e.getStride(n);if(o===1){t<=s-1&&this.appendRange(t,s-1),t=i+1;continue}for(let B=s;B<=i;B+=o)t<=B-1&&this.appendRange(t,B-1),t=B+1}return t<=$.MAX_RUNE&&this.appendRange(t,$.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let n=0;n<this.len;n+=2){const s=this.r[n],i=this.r[n+1];e<=s-1&&(this.r[t]=e,this.r[t+1]=s-1,t+=2),e=i+1}return this.len=t,e<=$.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=$.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let n=e.cls;return t&&(n=new yo().appendFoldedClass(n).cleanClass().toArray()),this.appendClassWithSign(n,e.sign)}toString(){return yo.charClassToString(this.r,this.len)}},qI=class{constructor(r){this.str=r,this.position=0}pos(){return this.position}rewindTo(r){this.position=r}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(r){this.position+=r}skipString(r){this.position+=r.length}pop(){const r=this.str.codePointAt(this.position);return this.position+=J.charCount(r),r}lookingAt(r){return this.str.startsWith(r,this.position)}rest(){return this.str.substring(this.position)}from(r){return this.str.substring(r,this.position)}toString(){return this.rest()}},j,KI=(j=class{static unicodeTable(e){return e==="Any"?{tab:j.ANY_TABLE,fold:j.ANY_TABLE,sign:1}:e==="Ascii"?{tab:j.ASCII_TABLE,fold:j.ASCII_FOLD_TABLE,sign:1}:e==="Assigned"?{tab:Dt.CATEGORIES.get("Cn"),fold:Dt.CATEGORIES.get("Cn"),sign:-1}:e==="Lc"?{tab:Dt.CATEGORIES.get("LC"),fold:Dt.FOLD_CATEGORIES.get("LC"),sign:1}:Dt.CATEGORIES.has(e)?{tab:Dt.CATEGORIES.get(e),fold:Dt.FOLD_CATEGORIES.get(e),sign:1}:Dt.SCRIPTS.has(e)?{tab:Dt.SCRIPTS.get(e),fold:Dt.FOLD_SCRIPT.get(e),sign:1}:null}static minFoldRune(e){if(e<$.MIN_FOLD||e>$.MAX_FOLD)return e;let t=e;const n=e;for(e=$.simpleFold(e);e!==n;e=$.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===I.Op.EMPTY_MATCH)return null;if(e.op===I.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===I.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const n=new I(I.Op.LITERAL);return n.flags=t,n.runes=J.stringToRunes(e),n}static parse(e,t){return new j(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const n=j.parseInt(e);if(n===-1||!e.more())return-1;let s;if(!e.lookingAt(","))s=n;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))s=-1;else if((s=j.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),n<0||n>1e3||s===-2||s>1e3||s>=0&&n>s)throw new ye(j.ERR_INVALID_REPEAT_SIZE,e.from(t));return n<<16|s&$.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const n=e.codePointAt(t);if(n!==k.CODES._&&!J.isalnum(n))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=k.CODES[0]&&e.peek()<=k.CODES[9];)e.skip(1);const n=e.from(t);return n.length===0||n.length>1&&n.codePointAt(0)===k.CODES[0]?-1:n.length>8?-2:parseInt(n,10)}static isCharClass(e){return e.op===I.Op.LITERAL&&e.runes.length===1||e.op===I.Op.CHAR_CLASS||e.op===I.Op.ANY_CHAR_NOT_NL||e.op===I.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case I.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case I.Op.CHAR_CLASS:for(let n=0;n<e.runes.length;n+=2)if(e.runes[n]<=t&&t<=e.runes[n+1])return!0;return!1;case I.Op.ANY_CHAR_NOT_NL:return t!==k.CODES[`
`];case I.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case I.Op.ANY_CHAR:break;case I.Op.ANY_CHAR_NOT_NL:j.matchRune(t,k.CODES[`
`])&&(e.op=I.Op.ANY_CHAR);break;case I.Op.CHAR_CLASS:{const n=new cr(Array.isArray(e.runes)?e.runes:Array.from(e.runes));t.op===I.Op.LITERAL?n.appendLiteral(t.runes[0],t.flags):n.appendClass(t.runes),e.runes=n.toGrowableArray();break}case I.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=I.Op.CHAR_CLASS,e.runes=new cr().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toGrowableArray()}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new ye(j.ERR_TRAILING_BACKSLASH);let n=e.pop();e:switch(n){case k.CODES[1]:case k.CODES[2]:case k.CODES[3]:case k.CODES[4]:case k.CODES[5]:case k.CODES[6]:case k.CODES[7]:if(!e.more()||e.peek()<k.CODES[0]||e.peek()>k.CODES[7])break;case k.CODES[0]:{let s=n-k.CODES[0];for(let i=1;i<3&&!(!e.more()||e.peek()<k.CODES[0]||e.peek()>k.CODES[7]);i++)s=s*8+e.peek()-k.CODES[0],e.skip(1);return s}case k.CODES.x:{if(!e.more())break;if(n=e.pop(),n===k.CODES["{"]){let o=0,B=0;for(;;){if(!e.more())break e;if(n=e.pop(),n===k.CODES["}"])break;const c=J.unhex(n);if(c<0||(B=B*16+c,B>$.MAX_RUNE))break e;o++}if(o===0)break e;return B}const s=J.unhex(n);if(!e.more())break;n=e.pop();const i=J.unhex(n);if(s<0||i<0)break;return s*16+i}case k.CODES.a:return k.CODES["\x07"];case k.CODES.f:return k.CODES["\f"];case k.CODES.n:return k.CODES[`
`];case k.CODES.r:return k.CODES["\r"];case k.CODES.t:return k.CODES["	"];case k.CODES.v:return k.CODES["\v"];default:if(n<=$.MAX_ASCII&&!J.isalnum(n))return n}throw new ye(j.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new ye(j.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?j.parseEscape(e):e.pop()}static hasCapture(e){if(e===null)return!1;if(e.op===I.Op.CAPTURE)return!0;if(e.subs){for(let t of e.subs)if(j.hasCapture(t))return!0}return!1}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups=Object.create(null),this.stack=[],this.free=null,this.numRegexp=0,this.numRunes=0,this.repeats=0,this.height=null,this.size=null,this.nlb=0}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):(t=new I(e),this.numRegexp+=1),t}reuse(e){this.height!==null&&this.height.has(e)&&this.height.delete(e),e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}checkLimits(e){if(this.numRunes>j.MAX_RUNES)throw new ye(j.ERR_LARGE);this.checkSize(e),this.checkHeight(e)}checkSize(e){if(this.size===null){if(this.repeats===0&&(this.repeats=1),e.op===I.Op.REPEAT){let t=e.max;t===-1&&(t=e.min),t<=0&&(t=1),t>Math.floor(j.MAX_SIZE/this.repeats)?this.repeats=j.MAX_SIZE:this.repeats*=t}if(this.numRegexp<Math.floor(j.MAX_SIZE/this.repeats))return;this.size=new Map;for(let t of this.stack)this.checkSize(t)}if(this.calcSize(e,!0)>j.MAX_SIZE)throw new ye(j.ERR_LARGE)}calcSize(e,t=!1){if(!t&&this.size!==null&&this.size.has(e))return this.size.get(e);let n=0;switch(e.op){case I.Op.LITERAL:n=e.runes.length;break;case I.Op.PLB:case I.Op.NLB:case I.Op.CAPTURE:case I.Op.STAR:n=2+this.calcSize(e.subs[0]);break;case I.Op.PLUS:case I.Op.QUEST:n=1+this.calcSize(e.subs[0]);break;case I.Op.CONCAT:for(let s of e.subs)n=n+this.calcSize(s);break;case I.Op.ALTERNATE:for(let s of e.subs)n=n+this.calcSize(s);e.subs.length>1&&(n=n+e.subs.length-1);break;case I.Op.REPEAT:{let s=this.calcSize(e.subs[0]);if(e.max===-1){e.min===0?n=2+s:n=1+e.min*s;break}n=e.max*s+(e.max-e.min);break}}return n=Math.max(1,n),this.size===null&&(this.size=new Map),this.size.set(e,n),n}checkHeight(e){if(!(this.numRegexp<j.MAX_HEIGHT)){if(this.height===null){this.height=new Map;for(let t of this.stack)this.checkHeight(t)}if(this.calcHeight(e,!0)>j.MAX_HEIGHT)throw new ye(j.ERR_NESTING_DEPTH)}}calcHeight(e,t=!1){if(!t&&this.height!==null&&this.height.has(e))return this.height.get(e);let n=1;for(let s of e.subs){const i=this.calcHeight(s);n<1+i&&(n=1+i)}return this.height===null&&(this.height=new Map),this.height.set(e,n),n}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!I.isPseudoOp(this.stack[t-1].op);)t--;return this.stack.splice(t,e-t)}push(e){if(this.numRunes+=e.runes.length,e.op===I.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=I.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===I.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&$.simpleFold(e.runes[0])===e.runes[2]&&$.simpleFold(e.runes[2])===e.runes[0]||e.op===I.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&$.simpleFold(e.runes[0])===e.runes[1]&&$.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|V.FOLD_CASE))return null;e.op=I.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|V.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),this.checkLimits(e),e}maybeConcat(e,t){const n=this.stack.length;if(n<2)return!1;const s=this.stack[n-1],i=this.stack[n-2];if(s.op!==I.Op.LITERAL||i.op!==I.Op.LITERAL||(s.flags&V.FOLD_CASE)!==(i.flags&V.FOLD_CASE))return!1;Array.isArray(i.runes)||(i.runes=Array.from(i.runes));for(let o=0;o<s.runes.length;o++)i.runes.push(s.runes[o]);return e>=0?(s.runes=[e],s.flags=t,!0):(this.pop(),this.reuse(s),!1)}newLiteral(e,t){const n=this.newRegexp(I.Op.LITERAL);return n.flags=t,t&V.FOLD_CASE&&(e=j.minFoldRune(e)),n.runes=[e],n}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,n,s,i,o){let B=this.flags;if(B&V.PERL_X&&(i.more()&&i.lookingAt("?")&&(i.skip(1),B^=V.NON_GREEDY),o!==-1))throw new ye(j.ERR_INVALID_REPEAT_OP,i.from(o));const c=this.stack.length;if(c===0)throw new ye(j.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const u=this.stack[c-1];if(I.isPseudoOp(u.op))throw new ye(j.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const h=this.newRegexp(e);if(h.min=t,h.max=n,h.flags=B,h.subs=[u],this.stack[c-1]=h,this.checkLimits(h),e===I.Op.REPEAT&&(t>=2||n>=2)&&!this.repeatIsValid(h,1e3))throw new ye(j.ERR_INVALID_REPEAT_SIZE,i.from(s))}repeatIsValid(e,t){if(e.op===I.Op.REPEAT){let n=e.max;if(n===0)return!0;if(n<0&&(n=e.min),n>t)return!1;n>0&&(t=Math.trunc(t/n))}for(let n of e.subs)if(!this.repeatIsValid(n,t))return!1;return!0}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(I.Op.EMPTY_MATCH)):this.push(this.collapse(e,I.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(I.Op.NO_MATCH)):this.push(this.collapse(e,I.Op.ALTERNATE))}cleanAlt(e){e.op===I.Op.CHAR_CLASS&&(e.runes=new cr(Array.from(e.runes)).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===$.MAX_RUNE?(e.runes=new Int32Array(0),e.op=I.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===k.CODES[`
`]-1&&e.runes[2]===k.CODES[`
`]+1&&e.runes[3]===$.MAX_RUNE&&(e.runes=new Int32Array(0),e.op=I.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let n=0;for(let B of e)n+=B.op===t?B.subs.length:1;let s=new Array(n).fill(null),i=0;for(let B of e)if(B.op===t){for(let c=0;c<B.subs.length;c++)s[i++]=B.subs[c];this.reuse(B)}else s[i++]=B;let o=this.newRegexp(t);if(o.subs=s,t===I.Op.ALTERNATE&&(o.subs=this.factor(o.subs),o.subs.length===1)){const B=o;o=o.subs[0],this.reuse(B)}return o}factor(e){if(e.length<2)return e;let t=0,n=e.length,s=0,i=null,o=0,B=0,c=0;for(let h=0;h<=n;h++){let d=null,p=0,E=0;if(h<n){let _=e[t+h];if(_.op===I.Op.CONCAT&&_.subs.length>0&&(_=_.subs[0]),_.op===I.Op.LITERAL&&(d=_.runes,p=_.runes.length,E=_.flags&V.FOLD_CASE),E===B){let S=0;for(;S<o&&S<p&&i[S]===d[S];)S++;if(S>0){o=S;continue}}}if(h!==c)if(h===c+1)e[s++]=e[t+c];else{const _=this.newRegexp(I.Op.LITERAL);_.flags=B,_.runes=i.slice(0,o);for(let H=c;H<h;H++)e[t+H]=this.removeLeadingString(e[t+H],o),this.checkLimits(e[t+H]);const S=this.collapse(e.slice(t+c,t+h),I.Op.ALTERNATE),L=this.newRegexp(I.Op.CONCAT);L.subs=[_,S],e[s++]=L}c=h,i=d,o=p,B=E}n=s,t=0,c=0,s=0;let u=null;for(let h=0;h<=n;h++){let d=null;if(!(h<n&&(d=j.leadingRegexp(e[t+h]),u!==null&&u.equals(d)&&(j.isCharClass(u)||u.op===I.Op.REPEAT&&u.min===u.max&&j.isCharClass(u.subs[0]))))){if(h!==c)if(h===c+1)e[s++]=e[t+c];else{const p=u;for(let S=c;S<h;S++){const L=S!==c;e[t+S]=this.removeLeadingRegexp(e[t+S],L),this.checkLimits(e[t+S])}const E=this.collapse(e.slice(t+c,t+h),I.Op.ALTERNATE),_=this.newRegexp(I.Op.CONCAT);_.subs=[p,E],e[s++]=_}c=h,u=d}}n=s,t=0,c=0,s=0;for(let h=0;h<=n;h++)if(!(h<n&&j.isCharClass(e[t+h]))){if(h!==c)if(h===c+1)e[s++]=e[t+c];else{let d=c;for(let E=c+1;E<h;E++){const _=e[t+d],S=e[t+E];(_.op<S.op||_.op===S.op&&(_.runes!==null?_.runes.length:0)<(S.runes!==null?S.runes.length:0))&&(d=E)}const p=e[t+c];e[t+c]=e[t+d],e[t+d]=p;for(let E=c+1;E<h;E++)j.mergeCharClass(e[t+c],e[t+E]),this.reuse(e[t+E]);this.cleanAlt(e[t+c]),e[s++]=e[t+c]}h<n&&(e[s++]=e[t+h]),c=h+1}n=s,t=0,c=0,s=0;for(let h=0;h<n;++h)h+1<n&&e[t+h].op===I.Op.EMPTY_MATCH&&e[t+h+1].op===I.Op.EMPTY_MATCH||(e[s++]=e[t+h]);return n=s,t=0,e.slice(t,n)}removeLeadingString(e,t){if(e.op===I.Op.CONCAT&&e.subs.length>0){const n=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=n,n.op===I.Op.EMPTY_MATCH)switch(this.reuse(n),e.subs.length){case 0:case 1:e.op=I.Op.EMPTY_MATCH,e.subs=I.emptySubs();break;case 2:{const s=e;e=e.subs[1],this.reuse(s);break}default:e.subs=e.subs.slice(1,e.subs.length)}return e}return e.op===I.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=I.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===I.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:e.op=I.Op.EMPTY_MATCH,e.subs=I.emptySubs();break;case 1:{const n=e;e=e.subs[0],this.reuse(n);break}}return e}return t&&this.reuse(e),this.newRegexp(I.Op.EMPTY_MATCH)}parseInternal(){if(this.flags&V.LITERAL)return j.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,n=-1;const s=new qI(this.wholeRegexp);for(;s.more();){let i=-1;e:switch(s.peek()){case k.CODES["("]:if(this.flags&V.LOOKBEHIND){if(s.lookingAt("(?<=")){this.parsePosLookBehind(),s.skip(4);break}if(s.lookingAt("(?<!")){this.parseNegLookBehind(),s.skip(4);break}}if(this.flags&V.PERL_X&&s.lookingAt("(?")){this.parsePerlFlags(s);break}this.op(I.Op.LEFT_PAREN).cap=++this.numCap,s.skip(1);break;case k.CODES["|"]:this.parseVerticalBar(),s.skip(1);break;case k.CODES[")"]:this.parseRightParen(),s.skip(1);break;case k.CODES["^"]:this.flags&V.ONE_LINE?this.op(I.Op.BEGIN_TEXT):this.op(I.Op.BEGIN_LINE),s.skip(1);break;case k.CODES.$:this.flags&V.ONE_LINE?this.op(I.Op.END_TEXT).flags|=V.WAS_DOLLAR:this.op(I.Op.END_LINE),s.skip(1);break;case k.CODES["."]:this.flags&V.DOT_NL?this.op(I.Op.ANY_CHAR):this.op(I.Op.ANY_CHAR_NOT_NL),s.skip(1);break;case k.CODES["["]:this.parseClass(s);break;case k.CODES["*"]:case k.CODES["+"]:case k.CODES["?"]:{i=s.pos();let o=null;switch(s.pop()){case k.CODES["*"]:o=I.Op.STAR;break;case k.CODES["+"]:o=I.Op.PLUS;break;case k.CODES["?"]:o=I.Op.QUEST}this.repeat(o,t,n,i,s,e);break}case k.CODES["{"]:{const o=s.pos(),B=j.parseRepeat(s);if(B<0){s.rewindTo(o),this.literal(s.pop());break}i=o,t=B>>16,n=(B&$.MAX_BMP)<<16>>16,this.repeat(I.Op.REPEAT,t,n,i,s,e);break}case k.CODES["\\"]:{const o=s.pos();if(s.skip(1),this.flags&V.PERL_X&&s.more())switch(s.pop()){case k.CODES.A:this.op(I.Op.BEGIN_TEXT);break e;case k.CODES.b:this.op(I.Op.WORD_BOUNDARY);break e;case k.CODES.B:this.op(I.Op.NO_WORD_BOUNDARY);break e;case k.CODES.C:throw new ye(j.ERR_INVALID_ESCAPE,"\\C");case k.CODES.Q:{let u=s.rest();const h=u.indexOf("\\E");h>=0?(u=u.substring(0,h),s.skipString(u),s.skipString("\\E")):s.skipString(u);let d=0;for(;d<u.length;){const p=u.codePointAt(d);this.literal(p),d+=J.charCount(p)}break e}case k.CODES.z:this.op(I.Op.END_TEXT);break e;default:s.rewindTo(o)}else s.rewindTo(o);const B=this.newRegexp(I.Op.CHAR_CLASS);if(B.flags=this.flags,s.lookingAt("\\p")||s.lookingAt("\\P")){const u=new cr;if(this.parseUnicodeClass(s,u)){B.runes=u.toArray(),this.push(B);break e}}const c=new cr;if(this.parsePerlClassEscape(s,c)){B.runes=c.toArray(),this.push(B);break e}s.rewindTo(o),this.reuse(B),this.literal(j.parseEscape(s));break}default:this.literal(s.pop())}e=i}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new ye(j.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),n=e.rest();if(n.startsWith("(?P<")||n.startsWith("(?<")){const B=n.charAt(2)==="P"?4:3,c=n.indexOf(">");if(c<0)throw new ye(j.ERR_INVALID_NAMED_CAPTURE,n);const u=n.substring(B,c);if(e.skipString(u),e.skip(B+1),!j.isValidCaptureName(u))throw new ye(j.ERR_INVALID_NAMED_CAPTURE,n.substring(0,c+1));const h=this.op(I.Op.LEFT_PAREN);if(h.cap=++this.numCap,this.namedGroups[u])throw new ye(j.ERR_DUPLICATE_NAMED_CAPTURE,u);this.namedGroups[u]=this.numCap,h.name=u;return}e.skip(2);let s=this.flags,i=1,o=!1;e:for(;e.more();){const B=e.pop();switch(B){case k.CODES.i:s|=V.FOLD_CASE,o=!0;break;case k.CODES.m:s&=-17,o=!0;break;case k.CODES.s:s|=V.DOT_NL,o=!0;break;case k.CODES.U:s|=V.NON_GREEDY,o=!0;break;case k.CODES["-"]:if(i<0)break e;i=-1,s=~s,o=!1;break;case k.CODES[":"]:case k.CODES[")"]:if(i<0){if(!o)break e;s=~s}B===k.CODES[":"]&&this.op(I.Op.LEFT_PAREN),this.flags=s;return;default:break e}}throw new ye(j.ERR_INVALID_PERL_OP,e.from(t))}parsePosLookBehind(){const e=this.newRegexp(I.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=++this.nlb,this.push(e)}parseNegLookBehind(){const e=this.newRegexp(I.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=-++this.nlb,this.push(e)}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(I.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===I.Op.VERTICAL_BAR&&j.isCharClass(this.stack[e-1])&&j.isCharClass(this.stack[e-3])){let t=this.stack[e-1],n=this.stack[e-3];if(t.op>n.op){const s=n;n=t,t=s,this.stack[e-3]=n}return j.mergeCharClass(n,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],n=this.stack[e-2];if(n.op===I.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=n,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new ye(j.ERR_UNEXPECTED_PAREN,this.wholeRegexp);const e=this.pop(),t=this.pop();if(t.op!==I.Op.LEFT_PAREN)throw new ye(j.ERR_UNEXPECTED_PAREN,this.wholeRegexp);if(this.flags=t.flags,t.lb!==0){if(j.hasCapture(e))throw new ye(j.ERR_INVALID_CAPTURE_IN_LOOKBEHIND,this.wholeRegexp);t.lb>0?t.op=I.Op.PLB:t.op=I.Op.NLB,t.subs=[e],this.push(t);return}t.cap===0?this.push(e):(t.op=I.Op.CAPTURE,t.subs=[e],this.push(t))}parsePerlClassEscape(e,t){const n=e.pos();if(!(this.flags&V.PERL_X)||!e.more()||e.pop()!==k.CODES["\\"]||!e.more())return!1;e.pop();const s=e.from(n),i=lf.has(s)?lf.get(s):null;return i===null?!1:(t.appendGroup(i,(this.flags&V.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const n=e.rest(),s=n.indexOf(":]");if(s<0)return!1;const i=n.substring(0,s+2);e.skipString(i);const o=Af.has(i)?Af.get(i):null;if(o===null)throw new ye(j.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(o,(this.flags&V.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const n=e.pos();if(!(this.flags&V.UNICODE_GROUPS)||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let s=1,i=e.pop();if(i===k.CODES.P&&(s=-1),!e.more())throw e.rewindTo(n),new ye(j.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let o;if(i!==k.CODES["{"])o=J.runeToString(i);else{const h=e.rest(),d=h.indexOf("}");if(d<0)throw e.rewindTo(n),new ye(j.ERR_INVALID_CHAR_RANGE,e.rest());o=h.substring(0,d),e.skipString(o),e.skip(1)}o.length!==0&&o.codePointAt(0)===k.CODES["^"]&&(s=0-s,o=o.substring(1));const B=j.unicodeTable(o);if(B===null)throw new ye(j.ERR_INVALID_CHAR_RANGE,e.from(n));B.sign<0&&(s=0-s);const c=B.tab,u=B.fold;if(!(this.flags&V.FOLD_CASE)||u===null)t.appendTableWithSign(c,s);else{const h=new cr().appendTable(c).appendTable(u).cleanClass().toArray();t.appendClassWithSign(Array.from(h),s)}return!0}parseClass(e){const t=e.pos();e.skip(1);const n=this.newRegexp(I.Op.CHAR_CLASS);n.flags=this.flags;const s=new cr;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),this.flags&V.CLASS_NL||s.appendRange(k.CODES[`
`],k.CODES[`
`]));let o=!0;for(;!e.more()||e.peek()!==k.CODES["]"]||o;){if(e.more()&&e.lookingAt("-")&&!(this.flags&V.PERL_X)&&!o){const h=e.rest();if(h==="-"||!h.startsWith("-]"))throw e.rewindTo(t),new ye(j.ERR_INVALID_CHAR_RANGE,e.rest())}o=!1;const B=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,s))continue;e.rewindTo(B)}if(this.parseUnicodeClass(e,s)||this.parsePerlClassEscape(e,s))continue;e.rewindTo(B);const c=j.parseClassChar(e,t);let u=c;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(u=j.parseClassChar(e,t),u<c)throw new ye(j.ERR_INVALID_CHAR_RANGE,e.from(B))}this.flags&V.FOLD_CASE?s.appendFoldedRange(c,u):s.appendRange(c,u)}e.skip(1),s.cleanClass(),i<0&&s.negateClass(),n.runes=s.toArray(),this.push(n)}},G(j,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),G(j,"ERR_INVALID_CHAR_RANGE","invalid character class range"),G(j,"ERR_INVALID_ESCAPE","invalid escape sequence"),G(j,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),G(j,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),G(j,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),G(j,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),G(j,"ERR_MISSING_BRACKET","missing closing ]"),G(j,"ERR_MISSING_PAREN","missing closing )"),G(j,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),G(j,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),G(j,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name"),G(j,"ERR_UNEXPECTED_PAREN","unexpected )"),G(j,"ERR_NESTING_DEPTH","expression nests too deeply"),G(j,"ERR_LARGE","expression too large"),G(j,"ERR_INVALID_CAPTURE_IN_LOOKBEHIND","invalid capture in lookbehind"),G(j,"MAX_HEIGHT",1e3),G(j,"MAX_SIZE",1398101),G(j,"MAX_RUNES",33554432),G(j,"ANY_TABLE",new g(new Uint32Array([0,$.MAX_RUNE,1]))),G(j,"ASCII_TABLE",new g(new Uint32Array([0,127,1]))),G(j,"ASCII_FOLD_TABLE",new g(new Uint32Array([0,127,1,383,383,1,8490,8490,1]))),j),$I=class lr{static initTest(e){const t=lr.compile(e),n=new lr(t.expr,t.prog,t.numSubexp,t.longest);return n.cond=t.cond,n.prefix=t.prefix,n.prefixUTF8=t.prefixUTF8,n.prefixComplete=t.prefixComplete,n.prefixRune=t.prefixRune,n.prefilter=t.prefilter,n.namedGroups=t.namedGroups,n}static compile(e){return lr.compileImpl(e,V.PERL,!1)}static compilePOSIX(e){return lr.compileImpl(e,V.POSIX,!0)}static compileImpl(e,t,n){let s=KI.parse(e,t);const i=s.maxCap(),o=s.namedGroups;s=JI.simplify(s);const B=GI.build(s),c=jI.compileRegexp(s),u=new lr(e,c,i,n);u.prefilter=B.type===Be.Type.NONE?null:B;const[h,d]=c.prefix();return u.prefixComplete=h,u.prefix=d,u.prefixUTF8=J.stringToUtf8ByteArray(u.prefix),u.prefix.length>0&&(u.prefixRune=u.prefix.codePointAt(0)),u.namedGroups=o,u}static match(e,t){return lr.compile(e).match(t)}constructor(e,t,n=0,s=0){this.expr=e,this.prog=t,this.numSubexp=n,this.longest=s,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.namedGroups=Object.create(null),this.machinePool=[],this.lazyDFA=null,this.onepass=sf.compile(this.prog),this.prefilter=null}get dfa(){return this.lazyDFA===null&&(this.lazyDFA=new ap(this.prog)),this.lazyDFA}matchPrefixComplete(e,t,n,s){if((n===V.ANCHOR_START||n===V.ANCHOR_BOTH)&&t!==0)return null;let i=-1,o=-1;const B=e.prefixLength(this);if(n===V.UNANCHORED){const c=e.index(this,t);if(c<0)return null;i=t+c,o=i+B}else if(n===V.ANCHOR_BOTH){if(e.endPos()!==B||e.index(this,0)!==0)return null;i=0,o=B}else if(n===V.ANCHOR_START){if(e.index(this,0)!==0)return null;i=0,o=B}if(i<0)return null;if(s>0){const c=new Int32Array(s).fill(-1);return c[0]=i,c[1]=o,Array.from(c)}return[]}createLookbehindState(){return this.prog.numLb>0?new vI(this.prog):null}executeEngine(e,t,n,s,i=null){if(this.prefixComplete&&(s===0||this.numSubexp===0))return this.matchPrefixComplete(e,t,n,s);if(this.prefilter!==null&&n===V.UNANCHORED&&!this.prefilter.eval(e,t))return null;if(this.onepass!==null)return sf.execute(this,e,t,n,s);if(s>0)return this.prog.numLb===0&&e.endPos()<=Bo.maxBitStateLen(this.prog)?Bo.execute(this,e,t,n,s):this.doExecuteNFA(e,t,n,s,i);if(this.prog.numLb===0){const o=this.dfa.match(e,t,n);if(o!==null)return o?[]:null;if(e.endPos()<=Bo.maxBitStateLen(this.prog))return Bo.execute(this,e,t,n,s)}return this.doExecuteNFA(e,t,n,s,i)}numberOfCapturingGroups(){return this.numSubexp}numberOfInstructions(){return this.prog.numInst()}get(){return this.machinePool.length>0?this.machinePool.pop():null}reset(){this.machinePool.length=0}put(e){this.machinePool.push(e)}toString(){return this.expr}doExecuteNFA(e,t,n,s,i=null){let o=this.get();o||(o=bI.fromRE2(this)),o.init(s);const B=o.match(e,t,n,i)?o.submatches():null;return this.put(o),B}match(e){return this.executeEngine(Te.fromUTF16(e),0,V.UNANCHORED,0)!==null}matchWithGroup(e,t,n,s,i,o=null){return e instanceof Tr||(J.isByteArray(e)?e=dr.utf8(e):e=dr.utf16(e)),this.matchMachineInput(e,t,n,s,i,o)}matchMachineInput(e,t,n,s,i,o=null){if(t>n)return[!1,null];const B=e.isUTF16Encoding()?Te.fromUTF16(e.asCharSequence(),0,n):Te.fromUTF8(e.asBytes(),0,n),c=this.executeEngine(B,t,s,2*i,o);return c===null?[!1,null]:[!0,c]}matchUTF8(e){return this.executeEngine(Te.fromUTF8(e),0,V.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,n){let s=0,i=0,o="";const B=Te.fromUTF16(e),c=this.createLookbehindState();let u=0;for(;i<=e.length;){const h=this.executeEngine(B,i,V.UNANCHORED,2,c);if(h===null||h.length===0)break;o+=e.substring(s,h[0]),(h[1]>s||h[0]===0)&&(o+=t(e.substring(h[0],h[1])),u++),s=h[1];const d=B.step(i)&7;if(i+d>h[1]?i+=d:i+1>h[1]?i++:i=h[1],u>=n)break}return o+=e.substring(s),o}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let n=new Array(t).fill(-1);for(let s=0;s<e.length;s++)n[s]=e[s];e=n}return e}allMatches(e,t,n=s=>s){let s=[];const i=e.endPos();t<0&&(t=i+1);let o=0,B=0,c=-1;const u=this.createLookbehindState();for(;B<t&&o<=i;){const h=this.executeEngine(e,o,V.UNANCHORED,this.prog.numCap,u);if(h===null||h.length===0)break;let d=!0;if(h[1]===o){h[0]===c&&(d=!1);const p=e.step(o);p<0?o=i+1:o+=p&7}else o=h[1];c=h[1],d&&(s.push(n(this.pad(h))),B++)}return s}findUTF8(e){const t=this.executeEngine(Te.fromUTF8(e),0,V.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.executeEngine(Te.fromUTF8(e),0,V.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.executeEngine(Te.fromUTF16(e),0,V.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.executeEngine(Te.fromUTF16(e),0,V.UNANCHORED,2)}findUTF8Submatch(e){const t=this.executeEngine(Te.fromUTF8(e),0,V.UNANCHORED,this.prog.numCap);if(t===null)return null;const n=new Array(1+this.numSubexp).fill(null);for(let s=0;s<n.length;s++)2*s<t.length&&t[2*s]>=0&&(n[s]=e.slice(t[2*s],t[2*s+1]));return n}findUTF8SubmatchIndex(e){return this.pad(this.executeEngine(Te.fromUTF8(e),0,V.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.executeEngine(Te.fromUTF16(e),0,V.UNANCHORED,this.prog.numCap);if(t===null)return null;const n=new Array(1+this.numSubexp).fill(null);for(let s=0;s<n.length;s++)2*s<t.length&&t[2*s]>=0&&(n[s]=e.substring(t[2*s],t[2*s+1]));return n}findSubmatchIndex(e){return this.pad(this.executeEngine(Te.fromUTF16(e),0,V.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const n=this.allMatches(Te.fromUTF8(e),t,s=>e.slice(s[0],s[1]));return n.length===0?null:n}findAllUTF8Index(e,t){const n=this.allMatches(Te.fromUTF8(e),t,s=>s.slice(0,2));return n.length===0?null:n}findAll(e,t){const n=this.allMatches(Te.fromUTF16(e),t,s=>e.substring(s[0],s[1]));return n.length===0?null:n}findAllIndex(e,t){const n=this.allMatches(Te.fromUTF16(e),t,s=>s.slice(0,2));return n.length===0?null:n}findAllUTF8Submatch(e,t){const n=this.allMatches(Te.fromUTF8(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.slice(s[2*o],s[2*o+1]));return i});return n.length===0?null:n}findAllUTF8SubmatchIndex(e,t){const n=this.allMatches(Te.fromUTF8(e),t);return n.length===0?null:n}findAllSubmatch(e,t){const n=this.allMatches(Te.fromUTF16(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.substring(s[2*o],s[2*o+1]));return i});return n.length===0?null:n}findAllSubmatchIndex(e,t){const n=this.allMatches(Te.fromUTF16(e),t);return n.length===0?null:n}},zI=class Gr{static isHexadecimal(e){return"0"<=e&&e<="9"||"A"<=e&&e<="F"||"a"<=e&&e<="f"}static translate(e){let t="";if(Object.prototype.toString.call(e)==="[object RegExp]"&&(e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e=e.source),typeof e!="string")return e;let n="",s=!1,i=e.length;i===0&&(n="(?:)",s=!0);let o=!1,B=0;for(;B<i;){let u=e[B];if(u==="\\"){if(B+1<i)switch(u=e[B+1],u){case"\\":n+="\\\\",B+=2;continue;case"c":if(B+2<i){let p=e[B+2].charCodeAt(0);if(p>=65&&p<=90||p>=97&&p<=122){let E=p%32;n+="\\x",n+=(E>>4).toString(16).toUpperCase(),n+=(E&15).toString(16).toUpperCase(),B+=3,s=!0;continue}}n+="c",B+=2,s=!0;continue;case"u":if(B+2<i){if(e[B+2]==="{"){let p=B+3,E=!1,_=!1;for(;p<i;){const S=e[p];if(S==="}"){_=!0;break}if(!Gr.isHexadecimal(S))break;E=!0,p++}if(_&&E){n+="\\x",B+=2,s=!0;continue}}else if(B+5<i){let p=!0;for(let E=0;E<4;E++)if(!Gr.isHexadecimal(e[B+2+E])){p=!1;break}if(p){n+="\\x{"+e.substring(B+2,B+6)+"}",B+=6,s=!0;continue}}}n+="u",B+=2,s=!0;continue;case"x":{let p=!1;if(B+2<i&&e[B+2]==="{"){let E=B+3,_=!1,S=!1;for(;E<i;){const L=e[E];if(L==="}"){S=!0;break}if(!Gr.isHexadecimal(L))break;_=!0,E++}S&&_&&(p=!0)}else B+3<i&&Gr.isHexadecimal(e[B+2])&&Gr.isHexadecimal(e[B+3])&&(p=!0);p?(n+="\\x",B+=2):(n+="x",B+=2,s=!0);continue}case"n":case"r":case"t":case"a":case"f":case"v":case"d":case"D":case"s":case"S":case"w":case"W":case"b":case"B":case"p":case"P":case"A":case"z":case"Q":case"E":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":n+="\\"+u,B+=2;continue;default:{let p=e.codePointAt(B+1);if(p>=48&&p<=57||p>=65&&p<=90||p>=97&&p<=122){let E=J.charCount(p);n+=e.substring(B+1,B+1+E),B+=E+1,s=!0}else{n+="\\";let E=J.charCount(p);n+=e.substring(B+1,B+1+E),B+=E+1}continue}}}else if(u==="/"){n+="\\/",B+=1,s=!0;continue}else if(u==="["){if(!o&&e[B+1]==="]"){n+="[^\\x00-\\x{10FFFF}]",B+=2,s=!0;continue}if(!o&&e[B+1]==="^"&&e[B+2]==="]"){n+="[\\x00-\\x{10FFFF}]",B+=3,s=!0;continue}o=!0}else if(u==="]")o=!1;else if(!o&&u==="("&&B+2<i&&e[B+1]==="?"&&e[B+2]==="<"&&B+3<i&&!"=!>)".includes(e[B+3])){n+="(?P<",B+=3,s=!0;continue}let h=e.codePointAt(B),d=J.charCount(h);n+=e.substring(B,B+d),B+=d}const c=s?n:e;return t.length>0?`(?${t})${c}`:c}};const Rf=(r,e)=>{const t=r.matchArray();return t.index=r.start(0),t.input=e,t.groups=r.namedGroupsObject(),t};var Fe,tu=(Fe=class{static quote(e){return J.quoteMeta(e)}static quoteReplacement(e,t=!1){return Zh.quoteReplacement(e,t)}static translateRegExp(e){return zI.translate(e)}static compile(e,t=0){J.checkPattern(e),J.checkFlags(t);let n=e;t&Fe.CASE_INSENSITIVE&&(n=`(?i)${n}`),t&Fe.DOTALL&&(n=`(?s)${n}`),t&Fe.MULTILINE&&(n=`(?m)${n}`);let s=V.PERL;t&Fe.DISABLE_UNICODE_GROUPS&&(s&=-129),t&Fe.LOOKBEHINDS&&(s|=V.LOOKBEHIND);const i=new Fe(e,t);return i.re2Input=$I.compileImpl(n,s,(t&Fe.LONGEST_MATCH)!==0),i}static matches(e,t){return Fe.compile(e).testExact(t)}static initTest(e,t,n){if(e==null)throw new Error("pattern is null");if(n==null)throw new Error("re2 is null");const s=new Fe(e,t);return s.re2Input=n,s}constructor(e,t){this.patternInput=e,this.flagsInput=t,this.re2Input=null}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.testExact(e)}matcher(e){return J.isByteArray(e)&&(e=dr.utf8(e)),new Zh(this,e)}test(e){return J.isByteArray(e)?this.re2Input.matchUTF8(e):this.re2Input.match(e)}testExact(e){const t=J.isByteArray(e)?Te.fromUTF8(e):Te.fromUTF16(e);return this.re2Input.executeEngine(t,0,V.ANCHOR_BOTH,0)!==null}exec(e){const t=this.matcher(e);return t.find()?Rf(t,e):null}split(e,t=0){const n=this.matcher(e),s=[];let i=0,o=0;for(;n.find();){if(o===0&&n.end()===0){o=n.end();continue}if(t>0&&s.length===t-1)break;if(o===n.start()){if(t===0){i+=1,o=n.end();continue}}else for(;i>0;)s.push(""),i-=1;s.push(n.substring(o,n.start())),o=n.end()}if(t===0&&o!==n.inputLength()){for(;i>0;)s.push(""),i-=1;s.push(n.substring(o,n.inputLength()))}return(t!==0||s.length===0&&!(o===n.inputLength()&&o>0))&&s.push(n.substring(o,n.inputLength())),s}*matchAll(e){const t=this.matcher(e);for(;t.find();)yield Rf(t,e)}toString(){return this.patternInput}programSize(){return this.re2Input.numberOfInstructions()}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}},G(Fe,"CASE_INSENSITIVE",Vr.CASE_INSENSITIVE),G(Fe,"DOTALL",Vr.DOTALL),G(Fe,"MULTILINE",Vr.MULTILINE),G(Fe,"DISABLE_UNICODE_GROUPS",Vr.DISABLE_UNICODE_GROUPS),G(Fe,"LONGEST_MATCH",Vr.LONGEST_MATCH),G(Fe,"LOOKBEHINDS",Vr.LOOKBEHINDS),Fe);/**
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
 */let cs="12.19.0";function WI(r){cs=r}/**
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
 */const Ar=new as("@firebase/firestore");function Hr(){return Ar.logLevel}function z(r,...e){if(Ar.logLevel<=ue.DEBUG){const t=e.map(nu);Ar.debug(`Firestore (${cs}): ${r}`,...t)}}function pn(r,...e){if(Ar.logLevel<=ue.ERROR){const t=e.map(nu);Ar.error(`Firestore (${cs}): ${r}`,...t)}}function Ut(r,...e){if(Ar.logLevel<=ue.WARN){const t=e.map(nu);Ar.warn(`Firestore (${cs}): ${r}`,...t)}}function nu(r){if(typeof r=="string")return r;try{return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
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
 */function Z(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,up(r,n,t)}function up(r,e,t){let n=`FIRESTORE (${cs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw pn(n),new Error(n)}function Q(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||up(e,s,n)}function oe(r,e){return r}/**
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
 */function QI(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class ru{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=QI(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function le(r,e){return r<e?-1:r>e?1:0}function cc(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const s=r.charAt(n),i=e.charAt(n);if(s!==i)return RB(s)===RB(i)?le(s,i):RB(s)?1:-1}return le(r.length,e.length)}const YI=55296,XI=57343;function RB(r){const e=r.charCodeAt(0);return e>=YI&&e<=XI}function es(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}/**
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
 */class Re{constructor(e,t){this.comparator=e,this.root=t||Qe.EMPTY}insert(e,t){return new Re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new uo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new uo(this.root,e,this.comparator,!1)}getReverseIterator(){return new uo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new uo(this.root,e,this.comparator,!0)}}class uo{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??Qe.RED,this.left=s??Qe.EMPTY,this.right=i??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new Qe(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Qe.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Z(27949);return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Z(57766)}get value(){throw Z(16141)}get color(){throw Z(16727)}get left(){throw Z(29726)}get right(){throw Z(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new Qe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ve{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new vf(this.data.getIterator())}getIteratorFrom(e){return new vf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ve(this.comparator);return t.data=e,t}}class vf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends bt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */const $t="__name__";class Kt{constructor(e,t,n){t===void 0?t=0:t>e.length&&Z(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&Z(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Kt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Kt?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=Kt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return le(e.length,t.length)}static compareSegments(e,t){const n=Kt.isNumericId(e),s=Kt.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?Kt.extractNumericId(e).compare(Kt.extractNumericId(t)):cc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return xn.fromString(e.substring(4,e.length-2))}}class ge extends Kt{construct(e,t,n){return new ge(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new K(M.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new ge(t)}static emptyPath(){return new ge([])}}const ZI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let Rt=class Ur extends Kt{construct(e,t,n){return new Ur(e,t,n)}static isValidIdentifier(e){return ZI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ur.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===$t}static keyField(){return new Ur([$t])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new K(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const B=e[s];if(B==="\\"){if(s+1===e.length)throw new K(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,s+=2}else B==="`"?(o=!o,s++):B!=="."||o?(n+=B,s++):(i(),s++)}if(i(),o)throw new K(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ur(t)}static emptyPath(){return new Ur([])}};/**
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
 */class Ht{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new Ht([])}unionWith(e){let t=new Ve(Rt.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ht(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return es(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */function Uo(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Sr(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function eT(r,e){const t=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.push(e(r[n],n,r));return t}function lp(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(ge.fromString(e))}static fromName(e){return new Y(ge.fromString(e).popFirst(5))}static empty(){return new Y(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new ge(e.slice()))}}/**
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
 */function hp(r,e,t){if(!t)throw new K(M.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function tT(r,e,t,n){if(e===!0&&n===!0)throw new K(M.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function bf(r){if(!Y.isDocumentKey(r))throw new K(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Sf(r){if(Y.isDocumentKey(r))throw new K(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Ri(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function fa(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Z(12329,{type:typeof r})}function ni(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new K(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=fa(r);throw new K(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function Me(r,e){const t={typeString:r};return e&&(t.value=e),t}function vi(r,e){if(!Ri(r))throw new K(M.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(s&&typeof o!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new K(M.INVALID_ARGUMENT,t);return!0}/**
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
 */const Pf=-62135596800,Of=1e6;class _e{static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Of);return new _e(t,n)}static fromInstant(e){if(!e||typeof e.t!="bigint")throw new K(M.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return _e._fromEpochNanoseconds(e.t)}static _fromEpochNanoseconds(e){let t,n;if(e>=0n)t=Number(e/1000000000n),n=Number(e%1000000000n);else{const s=e%1000000000n;s===0n?(t=Number(e/1000000000n),n=0):(t=Number(e/1000000000n-1n),n=Number(s+1000000000n))}return new _e(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new K(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new K(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Pf)throw new K(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Of}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new K(M.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:_e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(vi(e,_e._jsonSchema))return new _e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Pf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}_e._jsonSchemaVersion="firestore/timestamp/1.0",_e._jsonSchema={type:Me("string",_e._jsonSchemaVersion),seconds:Me("number"),nanoseconds:Me("number")};/**
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
 */class fp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new fp("Invalid base64 string: "+i):i}}(e);return new Ge(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const nT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kn(r){if(Q(!!r,39018),typeof r=="string"){let e=0;const t=nT.exec(r);if(Q(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ve(r.seconds),nanos:ve(r.nanos)}}function ve(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function $n(r){return typeof r=="string"?Ge.fromBase64String(r):Ge.fromUint8Array(r)}/**
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
 */const dp="server_timestamp",Cp="__type__",pp="__previous_value__",gp="__local_write_time__";function da(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Cp])==null?void 0:n.stringValue)===dp}function bi(r){const e=r.mapValue.fields[pp];return da(e)?bi(e):e}function ts(r){const e=Kn(r.mapValue.fields[gp].timestampValue);return new _e(e.seconds,e.nanos)}/**
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
 */class rT{constructor(e,t,n,s,i,o,B,c,u,h,d,p,E){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=B,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=h,this.apiKey=d,this._customHeaders=p,this.grpcFlowControlWindow=E}}const jo="(default)";class ri{constructor(e,t){this.projectId=e,this.database=t||jo}static empty(){return new ri("","")}get isDefaultDatabase(){return this.database===jo}isEqual(e){return e instanceof ri&&e.projectId===this.projectId&&e.database===this.database}}function sT(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new K(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ri(r.options.projectId,e)}/**
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
 */const su=-1;function Ca(r){return r==null}function si(r){return r===0&&1/r==-1/0}function iT(r){return typeof r=="number"&&Number.isInteger(r)&&!si(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}function oT(r){return typeof r=="string"}/**
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
 */const mp="__type__",aT="__max__",lo={mapValue:{}},Ep="__vector__",ii="value",ns={nullValue:"NULL_VALUE"},gt={booleanValue:!0},We={booleanValue:!1};function He(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?da(r)?4:BT(r)?9007199254740991:Jo(r)?10:11:Z(28295,{value:r})}function kt(r,e,t){if(r===e)return!0;const n=He(r);if(n!==He(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ts(r).isEqual(ts(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const B=Kn(i.timestampValue),c=Kn(o.timestampValue);return B.seconds===c.seconds&&B.nanos===c.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,o){return $n(i.bytesValue).isEqual($n(o.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,o){return ve(i.geoPointValue.latitude)===ve(o.geoPointValue.latitude)&&ve(i.geoPointValue.longitude)===ve(o.geoPointValue.longitude)}(r,e);case 2:return function(i,o,B){if("integerValue"in i&&"integerValue"in o)return ve(i.integerValue)===ve(o.integerValue);let c,u;if("doubleValue"in i&&"doubleValue"in o)c=ve(i.doubleValue),u=ve(o.doubleValue);else{if(!(B!=null&&B.i))return!1;c=ve(i.integerValue??i.doubleValue),u=ve(o.integerValue??o.doubleValue)}return c===u?!!(B!=null&&B.o)||si(c)===si(u):!!(B===void 0||B.u)&&isNaN(c)&&isNaN(u)}(r,e,t);case 9:return es(r.arrayValue.values||[],e.arrayValue.values||[],(s,i)=>kt(s,i,t));case 10:case 11:return function(i,o,B){const c=i.mapValue.fields||{},u=o.mapValue.fields||{};if(Uo(c)!==Uo(u))return!1;for(const h in c)if(c.hasOwnProperty(h)&&(u[h]===void 0||!kt(c[h],u[h],B)))return!1;return!0}(r,e,t);default:return Z(52216,{left:r})}}function oi(r,e){return(r.values||[]).find(t=>kt(t,e))!==void 0}function mt(r,e){if(r===e)return 0;const t=He(r),n=He(e);if(t!==n)return le(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return le(r.booleanValue,e.booleanValue);case 2:return function(i,o){const B=ve(i.integerValue||i.doubleValue),c=ve(o.integerValue||o.doubleValue);return B<c?-1:B>c?1:B===c?0:isNaN(B)?isNaN(c)?0:-1:1}(r,e);case 3:return Nf(r.timestampValue,e.timestampValue);case 4:return Nf(ts(r),ts(e));case 5:return cc(r.stringValue,e.stringValue);case 6:return function(i,o){const B=$n(i),c=$n(o);return B.compareTo(c)}(r.bytesValue,e.bytesValue);case 7:return function(i,o){const B=i.split("/"),c=o.split("/");for(let u=0;u<B.length&&u<c.length;u++){const h=le(B[u],c[u]);if(h!==0)return h}return le(B.length,c.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,o){const B=le(ve(i.latitude),ve(o.latitude));return B!==0?B:le(ve(i.longitude),ve(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Lf(r.arrayValue,e.arrayValue);case 10:return function(i,o){var p,E,_,S;const B=i.fields||{},c=o.fields||{},u=(p=B[ii])==null?void 0:p.arrayValue,h=(E=c[ii])==null?void 0:E.arrayValue,d=le(((_=u==null?void 0:u.values)==null?void 0:_.length)||0,((S=h==null?void 0:h.values)==null?void 0:S.length)||0);return d!==0?d:Lf(u,h)}(r.mapValue,e.mapValue);case 11:return function(i,o){if(i===lo.mapValue&&o===lo.mapValue)return 0;if(i===lo.mapValue)return 1;if(o===lo.mapValue)return-1;const B=i.fields||{},c=Object.keys(B),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let d=0;d<c.length&&d<h.length;++d){const p=cc(c[d],h[d]);if(p!==0)return p;const E=mt(B[c[d]],u[h[d]]);if(E!==0)return E}return le(c.length,h.length)}(r.mapValue,e.mapValue);default:throw Z(23264,{l:t})}}function Nf(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return le(r,e);const t=Kn(r),n=Kn(e),s=le(t.seconds,n.seconds);return s!==0?s:le(t.nanos,n.nanos)}function Lf(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=mt(t[s],n[s]);if(i!==void 0&&i!==0)return i}return le(t.length,n.length)}function rs(r){return uc(r)}function uc(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=Kn(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return $n(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return Y.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=uc(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${uc(t.fields[o])}`;return s+"}"}(r.mapValue):Z(61005,{value:r})}function Io(r){switch(He(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=bi(r);return e?16+Io(e):16;case 5:return 2*r.stringValue.length;case 6:return $n(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+Io(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return Sr(n.fields,(i,o)=>{s+=i.length+Io(o)}),s}(r.mapValue);default:throw Z(13486,{value:r})}}function Ff(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function zt(r){return!!r&&"integerValue"in r}function Cr(r){return!!r&&"doubleValue"in r}function zn(r){return zt(r)||Cr(r)}function ss(r){return!!r&&"arrayValue"in r}function At(r){return!!r&&"nullValue"in r}function Et(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Dr(r){return!!r&&"mapValue"in r}function Jo(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[mp])==null?void 0:n.stringValue)===Ep}function lc(r){var e,t;return(t=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[ii])==null?void 0:t.arrayValue}function js(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Sr(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=js(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=js(r.arrayValue.values[t]);return e}return{...r}}function BT(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===aT}/**
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
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Dr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=js(t)}setAll(e){let t=Rt.emptyPath(),n={},s=[];e.forEach((o,B)=>{if(!t.isImmediateParentOf(B)){const c=this.getFieldsMap(t);this.applyChanges(c,n,s),n={},s=[],t=B.popLast()}o?n[B.lastSegment()]=js(o):s.push(B.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());Dr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return kt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Dr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){Sr(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new It(js(this.value))}}function _p(r){const e=[];return Sr(r.fields,(t,n)=>{const s=new Rt([t]);if(Dr(n)){const i=_p(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ht(e)}/**
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
 */function pa(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:si(e)?"-0":e}}function iu(r){return{integerValue:""+r}}function ou(r,e,t){return iT(e)?iu(e):pa(r,e)}/**
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
 */class ga{constructor(){this._=void 0}}function cT(r,e,t){return r instanceof ai?function(s,i){const o={fields:{[Cp]:{stringValue:dp},[gp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&da(i)&&(i=bi(i)),i&&(o.fields[pp]=i),{mapValue:o}}(t,e):r instanceof Bi?wp(r,e):r instanceof ci?yp(r,e):r instanceof ui?function(s,i){const o=Dp(s,i),B=$o(o)+$o(s.h);return zt(o)&&zt(s.h)?iu(B):pa(s.serializer,B)}(r,e):r instanceof qo?function(s,i){return kf(s,i,Math.min)}(r,e):r instanceof Ko?function(s,i){return kf(s,i,Math.max)}(r,e):void 0}function uT(r,e,t){return r instanceof Bi?wp(r,e):r instanceof ci?yp(r,e):t}function Dp(r,e){return r instanceof ui?zn(e)?e:{integerValue:0}:null}class ai extends ga{}class Bi extends ga{constructor(e){super(),this.elements=e}}function wp(r,e){const t=Ip(e);for(const n of r.elements)t.some(s=>kt(s,n))||t.push(n);return{arrayValue:{values:t}}}class ci extends ga{constructor(e){super(),this.elements=e}}function yp(r,e){let t=Ip(e);for(const n of r.elements)t=t.filter(s=>!kt(s,n));return{arrayValue:{values:t}}}class au extends ga{constructor(e,t){super(),this.serializer=e,this.h=t}}class ui extends au{}class qo extends au{}class Ko extends au{}function kf(r,e,t){if(!zn(e))return r.h;const n=t($o(e),$o(r.h));return zt(e)&&zt(r.h)?iu(n):pa(r.serializer,n)}function $o(r){return ve(r.integerValue||r.doubleValue)}function Ip(r){return ss(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class lT{constructor(e,t){this.field=e,this.transform=t}}function hT(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof Bi&&s instanceof Bi||n instanceof ci&&s instanceof ci?es(n.elements,s.elements,kt):n instanceof ui&&s instanceof ui||n instanceof qo&&s instanceof qo||n instanceof Ko&&s instanceof Ko?kt(n.h,s.h):n instanceof ai&&s instanceof ai}(r.transform,e.transform)}class fT{constructor(e,t){this.version=e,this.transformResults=t}}class Yt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Yt}static exists(e){return new Yt(void 0,e)}static updateTime(e){return new Yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function To(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class ma{}function Tp(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Bu(r.key,Yt.none()):new Si(r.key,r.data,Yt.none());{const t=r.data,n=It.empty();let s=new Ve(Rt.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new Pr(r.key,n,new Ht(s.toArray()),Yt.none())}}function dT(r,e,t){r instanceof Si?function(s,i,o){const B=s.value.clone(),c=xf(s.fieldTransforms,i,o.transformResults);B.setAll(c),i.convertToFoundDocument(o.version,B).setHasCommittedMutations()}(r,e,t):r instanceof Pr?function(s,i,o){if(!To(s.precondition,i))return void i.convertToUnknownDocument(o.version);const B=xf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Ap(s)),c.setAll(B),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Js(r,e,t,n){return r instanceof Si?function(i,o,B,c){if(!To(i.precondition,o))return B;const u=i.value.clone(),h=Vf(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(r,e,t,n):r instanceof Pr?function(i,o,B,c){if(!To(i.precondition,o))return B;const u=Vf(i.fieldTransforms,c,o),h=o.data;return h.setAll(Ap(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),B===null?null:B.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(r,e,t,n):function(i,o,B){return To(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):B}(r,e,t)}function CT(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=Dp(n.transform,s||null);i!=null&&(t===null&&(t=It.empty()),t.set(n.field,i))}return t||null}function Mf(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&es(n,s,(i,o)=>hT(i,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Si extends ma{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Pr extends ma{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ap(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function xf(r,e,t){const n=new Map;Q(r.length===t.length,32656,{T:t.length,P:r.length});for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,B=e.data.field(i.field);n.set(i.field,uT(o,B,t[s]))}return n}function Vf(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,cT(i,o,e))}return n}class Bu extends ma{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pT extends ma{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class zo{constructor(e,t){this.position=e,this.inclusive=t}}function Gf(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=Y.comparator(Y.fromName(o.referenceValue),t.key):n=mt(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Hf(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!kt(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Rp{}class ke extends Rp{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new mT(e,t,n):t==="array-contains"?new DT(e,n):t==="in"?new wT(e,n):t==="not-in"?new yT(e,n):t==="array-contains-any"?new IT(e,n):new ke(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new ET(e,n):new _T(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(mt(t,this.value)):t!==null&&He(this.value)===He(t)&&this.matchesComparison(mt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jt extends Rp{constructor(e,t){super(),this.filters=e,this.op=t,this.I=null}static create(e,t){return new jt(e,t)}matches(e){return vp(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.I!==null||(this.I=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.I}getFilters(){return Object.assign([],this.filters)}}function vp(r){return r.op==="and"}function bp(r){return gT(r)&&vp(r)}function gT(r){for(const e of r.filters)if(e instanceof jt)return!1;return!0}function hc(r){if(r instanceof ke)return r.field.canonicalString()+r.op.toString()+rs(r.value);if(bp(r))return r.filters.map(e=>hc(e)).join(",");{const e=r.filters.map(t=>hc(t)).join(",");return`${r.op}(${e})`}}function Sp(r,e){return r instanceof ke?function(n,s){return s instanceof ke&&n.op===s.op&&n.field.isEqual(s.field)&&kt(n.value,s.value)}(r,e):r instanceof jt?function(n,s){return s instanceof jt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,o,B)=>i&&Sp(o,s.filters[B]),!0):!1}(r,e):void Z(19439)}function Pp(r){return r instanceof ke?function(t){return`${t.field.canonicalString()} ${t.op} ${rs(t.value)}`}(r):r instanceof jt?function(t){return t.op.toString()+" {"+t.getFilters().map(Pp).join(" ,")+"}"}(r):"Filter"}class mT extends ke{constructor(e,t,n){super(e,t,n),this.key=Y.fromName(n.referenceValue)}matches(e){const t=Y.comparator(e.key,this.key);return this.matchesComparison(t)}}class ET extends ke{constructor(e,t){super(e,"in",t),this.keys=Op("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class _T extends ke{constructor(e,t){super(e,"not-in",t),this.keys=Op("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Op(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(n=>Y.fromName(n.referenceValue))}class DT extends ke{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ss(t)&&oi(t.arrayValue,this.value)}}class wT extends ke{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&oi(this.value.arrayValue,t)}}class yT extends ke{constructor(e,t){super(e,"not-in",t)}matches(e){if(oi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!oi(this.value.arrayValue,t)}}class IT extends ke{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ss(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>oi(this.value.arrayValue,n))}}/**
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
 */class li{constructor(e,t="asc"){this.field=e,this.dir=t}}function TT(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class ie{static fromTimestamp(e){return new ie(e)}static min(){return new ie(new _e(0,0))}static max(){return new ie(new _e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class nt{constructor(e,t,n,s,i,o,B){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=B}static newInvalidDocument(e){return new nt(e,0,ie.min(),ie.min(),ie.min(),It.empty(),0)}static newFoundDocument(e,t,n,s){return new nt(e,1,t,ie.min(),n,s,0)}static newNoDocument(e,t){return new nt(e,2,t,ie.min(),ie.min(),It.empty(),0)}static newUnknownDocument(e,t){return new nt(e,3,t,ie.min(),ie.min(),It.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */const hi=-1;function AT(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=ie.fromTimestamp(n===1e9?new _e(t+1,0):new _e(t,n));return new Wn(s,Y.empty(),e)}function RT(r){return new Wn(r.readTime,r.key,hi)}class Wn{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Wn(ie.min(),Y.empty(),hi)}static max(){return new Wn(ie.max(),Y.empty(),hi)}}function vT(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=Y.comparator(r.documentKey,e.documentKey),t!==0?t:le(r.largestBatchId,e.largestBatchId))}/**
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
 */class bT{constructor(e,t=null,n=[],s=[],i=null,o=null,B=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=B,this.R=null}}function Uf(r,e=null,t=[],n=[],s=null,i=null,o=null){return new bT(r,e,t,n,s,i,o)}function Np(r){const e=oe(r);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>hc(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),Ca(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>rs(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>rs(n)).join(",")),e.R=t}return e.R}function Lp(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!TT(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Sp(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Hf(r.startAt,e.startAt)&&Hf(r.endAt,e.endAt)}function hr(r){return!!r.isCorePipeline}function Fp(r){return!!r.path&&Y.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class us{constructor(e,t=null,n=[],s=[],i=null,o="F",B=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=B,this.endAt=c,this.A=null,this.V=null,this.m=null,this.startAt,this.endAt}}function ST(r,e,t,n,s,i,o,B){return new us(r,e,t,n,s,i,o,B)}function kp(r){return new us(r)}function jf(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function PT(r){return Y.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Mp(r){return r.collectionGroup!==null}function qs(r){const e=oe(r);if(e.A===null){e.A=[];const t=new Set;for(const i of e.explicitOrderBy)e.A.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let B=new Ve(Rt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(B=B.add(u.field))})}),B})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.A.push(new li(i,n))}),t.has(Rt.keyField().canonicalString())||e.A.push(new li(Rt.keyField(),n))}return e.A}function Xt(r){const e=oe(r);return e.V||(e.V=OT(e,qs(r))),e.V}function OT(r,e){if(r.limitType==="F")return Uf(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new li(s.field,i)});const t=r.endAt?new zo(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new zo(r.startAt.position,r.startAt.inclusive):null;return Uf(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function fc(r,e){const t=r.filters.concat([e]);return new us(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function NT(r,e){const t=r.explicitOrderBy.concat([e]);return new us(r.path,r.collectionGroup,t,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}function dc(r,e,t){return new us(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function LT(r,e){return Lp(Xt(r),Xt(e))&&r.limitType===e.limitType}function Ks(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Pp(s)).join(", ")}]`),Ca(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>rs(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>rs(s)).join(",")),`Target(${n})`}(Xt(r))}; limitType=${r.limitType})`}function Ea(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):Y.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of qs(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(o,B,c){const u=Gf(o,B,c);return o.inclusive?u<=0:u<0}(n.startAt,qs(n),s)||n.endAt&&!function(o,B,c){const u=Gf(o,B,c);return o.inclusive?u>=0:u>0}(n.endAt,qs(n),s))}(r,e)}function cu(r){return(e,t)=>{let n=!1;for(const s of qs(r)){const i=FT(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function FT(r,e,t){const n=r.field.isKeyField()?Y.comparator(e.key,t.key):function(i,o,B){const c=o.data.field(i),u=B.data.field(i);return c!==null&&u!==null?mt(c,u):Z(42886)}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return Z(19790,{direction:r.dir})}}/**
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
 */class kT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Le,fe;function MT(r){switch(r){case M.OK:return Z(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return Z(15467,{code:r})}}function xp(r){if(r===void 0)return pn("GRPC error has no .code"),M.UNKNOWN;switch(r){case Le.OK:return M.OK;case Le.CANCELLED:return M.CANCELLED;case Le.UNKNOWN:return M.UNKNOWN;case Le.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Le.INTERNAL:return M.INTERNAL;case Le.UNAVAILABLE:return M.UNAVAILABLE;case Le.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Le.NOT_FOUND:return M.NOT_FOUND;case Le.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Le.ABORTED:return M.ABORTED;case Le.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Le.DATA_LOSS:return M.DATA_LOSS;default:return Z(39323,{code:r})}}(fe=Le||(Le={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Or{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Sr(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return lp(this.inner)}size(){return this.innerSize}}/**
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
 */const xT=new Re(Y.comparator);function dt(){return xT}const Vp=new Re(Y.comparator);function jr(...r){let e=Vp;for(const t of r)e=e.insert(t.key,t);return e}function Gp(r){let e=Vp;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Nn(){return $s()}function Hp(){return $s()}function $s(){return new Or(r=>r.toString(),(r,e)=>r.isEqual(e))}const VT=new Re(Y.comparator),GT=new Ve(Y.comparator);function ce(...r){let e=GT;for(const t of r)e=e.add(t);return e}const HT=new Ve(le);function UT(){return HT}/**
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
 */function jT(){return new TextEncoder}/**
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
 */const JT=new xn([4294967295,4294967295],0);function Jf(r){const e=jT().encode(r),t=new QC;return t.update(e),new Uint8Array(t.digest())}function qf(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new xn([t,n],0),new xn([s,i],0)]}class uu{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Vs(`Invalid padding: ${t}`);if(n<0)throw new Vs(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Vs(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Vs(`Invalid padding when bitmap length is 0: ${t}`);this.p=8*e.length-t,this.S=xn.fromNumber(this.p)}v(e,t,n){let s=e.add(t.multiply(xn.fromNumber(n)));return s.compare(JT)===1&&(s=new xn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.S).toNumber()}D(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.p===0)return!1;const t=Jf(e),[n,s]=qf(t);for(let i=0;i<this.hashCount;i++){const o=this.v(n,s,i);if(!this.D(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new uu(i,s,t);return n.forEach(B=>o.insert(B)),o}insert(e){if(this.p===0)return;const t=Jf(e),[n,s]=qf(t);for(let i=0;i<this.hashCount;i++){const o=this.v(n,s,i);this.C(o)}}C(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pi{constructor(e,t,n,s,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,Oi.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Pi(ie.min(),s,new Re(le),dt(),dt(),ce())}}class Oi{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Oi(n,t,ce(),ce(),ce())}}/**
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
 */class Ao{constructor(e,t,n,s){this.F=e,this.removedTargetIds=t,this.key=n,this.O=s}}class Up{constructor(e,t){this.targetId=e,this.M=t}}class jp{constructor(e,t,n=Ge.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class Kf{constructor(e){this.targetId=e,this.N=0,this.L=$f(),this.B=Ge.EMPTY_BYTE_STRING,this.U=!1,this.k=!0}get current(){return this.U}get resumeToken(){return this.B}get q(){return this.N!==0}get $(){return this.k}K(e){e.approximateByteSize()>0&&(this.k=!0,this.B=e)}W(){let e=ce(),t=ce(),n=ce();return this.L.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:Z(38017,{changeType:i})}}),new Oi(this.B,this.U,e,t,n)}G(){this.k=!1,this.L=$f()}j(e,t){this.k=!0,this.L=this.L.insert(e,t)}H(e){this.k=!0,this.L=this.L.remove(e)}J(){this.N+=1}Y(){this.N-=1,Q(this.N>=0,3241,{N:this.N,targetId:this.targetId})}Z(){this.k=!0,this.U=!0}}const Fs="WatchChangeAggregator";class qT{constructor(e){this.X=e,this.ee=new Map,this.te=dt(),this.ne=ho(),this.re=dt(),this.ie=ho(),this.se=new Re(le)}_e(e){for(const t of e.F)e.O&&e.O.isFoundDocument()?this.oe(t,e.O):this.ae(t,e.key,e.O);for(const t of e.removedTargetIds)this.ae(t,e.key,e.O)}ue(e){this.forEachTarget(e,t=>{const n=this.ee.get(t);if(n)switch(e.state){case 0:this.ce(t)&&n.K(e.resumeToken);break;case 1:n.Y(),n.q||n.G(),n.K(e.resumeToken);break;case 2:n.Y(),n.q||this.removeTarget(t);break;case 3:this.ce(t)&&(n.Z(),n.K(e.resumeToken));break;case 4:this.ce(t)&&(this.le(t),n.K(e.resumeToken));break;default:Z(56790,{state:e.state})}else z(Fs,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ee.forEach((n,s)=>{this.ce(s)&&t(s)})}Ee(e){var t;return hr(e)?e.getPipelineSourceType()==="documents"&&((t=e.getPipelineDocuments())==null?void 0:t.length)===1:Fp(e)}he(e){const t=e.targetId,n=e.M.count,s=this.Te(t);if(s){const i=s.target;if(this.Ee(i))if(n===0){const o=new Y(hr(i)?ge.fromString(i.getPipelineDocuments()[0]):i.path);this.ae(t,o,nt.newNoDocument(o,ie.min()))}else Q(n===1,20013,"Single document existence filter with count: "+n);else{const o=this.Pe(t);if(o!==n){const B=this.Ie(e),c=B?this.Re(B,e,o):1;if(c!==0){this.le(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.se=this.se.insert(t,u)}}}}}Ie(e){const t=e.M.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,B;try{o=$n(n).toUint8Array()}catch(c){if(c instanceof fp)return Ut("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{B=new uu(o,s,i)}catch(c){return Ut(c instanceof Vs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return B.p===0?null:B}Re(e,t,n){return t.M.count===n-this.de(e,t.targetId)?0:2}de(e,t){const n=this.X.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const o=this.X.Ve(),B=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(B)||(this.ae(t,i,null),s++)}),s}fe(e){const t=new Map;this.ee.forEach((i,o)=>{const B=this.Te(o);if(B){if(i.current&&this.Ee(B.target)){const c=hr(B.target)?ge.fromString(B.target.getPipelineDocuments()[0]):B.target.path,u=new Y(c);this.me(u).has(o)||this.pe(o,u)||this.ae(o,u,nt.newNoDocument(u,e))}i.$&&(t.set(o,i.W()),i.G())}});let n=ce();this.ie.forEach((i,o)=>{let B=!0;o.forEachWhile(c=>{const u=this.Te(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(B=!1,!1)}),B&&(n=n.add(i))}),this.te.forEach((i,o)=>o.setReadTime(e)),this.re.forEach((i,o)=>o.setReadTime(e));const s=new Pi(e,t,this.se,this.te,this.re,n);return this.te=dt(),this.ne=ho(),this.re=dt(),this.ie=ho(),this.se=new Re(le),s}oe(e,t){const n=this.ee.get(e);if(!n||!this.ce(e))return void z(Fs,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.pe(e,t.key)?2:0;n.j(t.key,s),hr(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t.key,t):this.te=this.te.insert(t.key,t),this.ne=this.ne.insert(t.key,this.me(t.key).add(e)),this.ie=this.ie.insert(t.key,this.ge(t.key).add(e))}ae(e,t,n){const s=this.ee.get(e);s&&this.ce(e)?(this.pe(e,t)?s.j(t,1):s.H(t),this.ie=this.ie.insert(t,this.ge(t).delete(e)),this.ie=this.ie.insert(t,this.ge(t).add(e)),n&&(hr(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t,n):this.te=this.te.insert(t,n))):z(Fs,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ee.delete(e)}Pe(e){const t=this.ee.get(e);if(!t)return 0;const n=t.W();return this.X.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}J(e){let t=this.ee.get(e);t||(z(Fs,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new Kf(e),this.ee.set(e,t)),t.J()}ge(e){let t=this.ie.get(e);return t||(t=new Ve(le),this.ie=this.ie.insert(e,t)),t}me(e){let t=this.ne.get(e);return t||(t=new Ve(le),this.ne=this.ne.insert(e,t)),t}ce(e){const t=this.Te(e)!==null;return t||z(Fs,"Detected inactive target",e),t}Te(e){const t=this.ee.get(e);return t===void 0||t.q?null:this.X.ye(e)}le(e){this.ee.set(e,new Kf(e)),this.X.getRemoteKeysForTarget(e).forEach(t=>{this.ae(e,t,null)})}pe(e,t){return this.X.getRemoteKeysForTarget(e).has(t)}}function ho(){return new Re(Y.comparator)}function $f(){return new Re(Y.comparator)}const KT={asc:"ASCENDING",desc:"DESCENDING"},$T={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zT={and:"AND",or:"OR"};class WT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Cc(r,e){return r.useProto3Json||Ca(e)?e:{value:e}}function zs(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lu(r){const e=Kn(r);return new _e(e.seconds,e.nanos)}function Jp(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Ro(r,e){return zs(r,e.toTimestamp())}function Zt(r){return Q(!!r,49232),ie.fromTimestamp(lu(r))}function hu(r,e){return pc(r,e).canonicalString()}function pc(r,e){const t=function(s){return new ge(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function qp(r){const e=ge.fromString(r);return Q(Qp(e),10190,{key:e.toString()}),e}function Wo(r,e){return hu(r.databaseId,e.path)}function vB(r,e){const t=qp(e);if(t.get(1)!==r.databaseId.projectId)throw new K(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new K(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new Y($p(t))}function Kp(r,e){return hu(r.databaseId,e)}function QT(r){const e=qp(r);return e.length===4?ge.emptyPath():$p(e)}function gc(r){return new ge(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function $p(r){return Q(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function zf(r,e,t){return{name:Wo(r,e),fields:t.value.mapValue.fields}}function YT(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Z(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Q(h===void 0||typeof h=="string",58123),Ge.fromBase64String(h||"")):(Q(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Ge.fromUint8Array(h||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,B=o&&function(u){const h=u.code===void 0?M.UNKNOWN:xp(u.code);return new K(h,u.message||"")}(o);t=new jp(n,s,i,B||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=vB(r,n.document.name),i=Zt(n.document.updateTime),o=n.document.createTime?Zt(n.document.createTime):ie.min(),B=new It({mapValue:{fields:n.document.fields}}),c=nt.newFoundDocument(s,i,o,B),u=n.targetIds||[],h=n.removedTargetIds||[];t=new Ao(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=vB(r,n.document),i=n.readTime?Zt(n.readTime):ie.min(),o=nt.newNoDocument(s,i),B=n.removedTargetIds||[];t=new Ao([],B,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=vB(r,n.document),i=n.removedTargetIds||[];t=new Ao([],i,s,null)}else{if(!("filter"in e))return Z(11601,{we:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new kT(s,i),B=n.targetId;t=new Up(B,o)}}return t}function XT(r,e){let t;if(e instanceof Si)t={update:zf(r,e.key,e.value)};else if(e instanceof Bu)t={delete:Wo(r,e.key)};else if(e instanceof Pr)t={update:zf(r,e.key,e.data),updateMask:BA(e.fieldMask)};else{if(!(e instanceof pT))return Z(16599,{be:e.type});t={verify:Wo(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,o){const B=o.transform;if(B instanceof ai)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(B instanceof Bi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:B.elements}};if(B instanceof ci)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:B.elements}};if(B instanceof ui)return{fieldPath:o.field.canonicalString(),increment:B.h};if(B instanceof qo)return{fieldPath:o.field.canonicalString(),minimum:B.h};if(B instanceof Ko)return{fieldPath:o.field.canonicalString(),maximum:B.h};throw Z(20930,{transform:o.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Ro(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z(27497)}(r,e.precondition)),t}function ZT(r,e){return r&&r.length>0?(Q(e!==void 0,14353),r.map(t=>function(s,i){let o=s.updateTime?Zt(s.updateTime):Zt(i);return o.isEqual(ie.min())&&(o=Zt(i)),new fT(o,s.transformResults||[])}(t,e))):[]}function eA(r,e){return{documents:[Kp(r,e.path)]}}function tA(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Kp(r,s);const i=function(u){if(u.length!==0)return Wp(jt.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Jr(p.field),direction:iA(p.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const B=Cc(r,e.limit);return B!==null&&(t.structuredQuery.limit=B),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{Se:t,parent:s}}function nA(r){let e=QT(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){Q(n===1,65062);const h=t.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(d){const p=zp(d);return p instanceof jt&&bp(p)?p.getFilters():[p]}(t.where));let o=[];t.orderBy&&(o=function(d){return d.map(p=>function(_){return new li(qr(_.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(p))}(t.orderBy));let B=null;t.limit&&(B=function(d){let p;return p=typeof d=="object"?d.value:d,Ca(p)?null:p}(t.limit));let c=null;t.startAt&&(c=function(d){const p=!!d.before,E=d.values||[];return new zo(E,p)}(t.startAt));let u=null;return t.endAt&&(u=function(d){const p=!d.before,E=d.values||[];return new zo(E,p)}(t.endAt)),ST(e,s,o,i,B,"F",c,u)}function rA(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function sA(r,e){return{structuredPipeline:{pipeline:{stages:e.stages.map(t=>t._toProto(r))}}}}function zp(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=qr(t.unaryFilter.field);return ke.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=qr(t.unaryFilter.field);return ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=qr(t.unaryFilter.field);return ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=qr(t.unaryFilter.field);return ke.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Z(61313);default:return Z(60726)}}(r):r.fieldFilter!==void 0?function(t){return ke.create(qr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Z(58110);default:return Z(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return jt.create(t.compositeFilter.filters.map(n=>zp(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Z(1026)}}(t.compositeFilter.op))}(r):Z(30097,{filter:r})}function iA(r){return KT[r]}function oA(r){return $T[r]}function aA(r){return zT[r]}function Jr(r){return{fieldPath:r.canonicalString()}}function qr(r){return Rt.fromServerFormat(r.fieldPath)}function Wp(r){return r instanceof ke?function(t){if(t.op==="=="){if(Et(t.value))return{unaryFilter:{field:Jr(t.field),op:"IS_NAN"}};if(At(t.value))return{unaryFilter:{field:Jr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Et(t.value))return{unaryFilter:{field:Jr(t.field),op:"IS_NOT_NAN"}};if(At(t.value))return{unaryFilter:{field:Jr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jr(t.field),op:oA(t.op),value:t.value}}}(r):r instanceof jt?function(t){const n=t.getFilters().map(s=>Wp(s));return n.length===1?n[0]:{compositeFilter:{op:aA(t.op),filters:n}}}(r):Z(54877,{filter:r})}function BA(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Qp(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function Yp(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}function fi(r,e){const t={fields:{}};return e.forEach((n,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=n._toProto(r)}),{mapValue:t}}function Xp(r){return{stringValue:r}}/**
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
 */function _a(r){return new WT(r,!0)}/**
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
 */class Nt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nt(Ge.fromBase64String(e))}catch(t){throw new K(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Nt(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Nt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(vi(e,Nt._jsonSchema))return Nt.fromBase64String(e.bytes)}}Nt._jsonSchemaVersion="firestore/bytes/1.0",Nt._jsonSchema={type:Me("string",Nt._jsonSchemaVersion),bytes:Me("string")};/**
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
 */class fu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new K(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function cA(){return new fu($t)}/**
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
 */class du{constructor(e){this._methodName=e}}/**
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
 */class en{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new K(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new K(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:en._jsonSchemaVersion}}static fromJSON(e){if(vi(e,en._jsonSchema))return new en(e.latitude,e.longitude)}}en._jsonSchemaVersion="firestore/geoPoint/1.0",en._jsonSchema={type:Me("string",en._jsonSchemaVersion),latitude:Me("number"),longitude:Me("number")};/**
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
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
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
 */class Vn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Zp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(tt.UNAUTHENTICATED))}shutdown(){}}class lA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class hA{constructor(e){this.De=e,this.currentUser=tt.UNAUTHENTICATED,this.xe=0,this.forceRefresh=!1,this.auth=null}start(e,t){Q(this.Ce===void 0,42304);let n=this.xe;const s=c=>this.xe!==n?(n=this.xe,t(c)):Promise.resolve();let i=new Vn;this.Ce=()=>{this.xe++,this.currentUser=this.Fe(),i.resolve(),i=new Vn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},B=c=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.Ce&&(this.auth.addAuthTokenListener(this.Ce),o())};this.De.onInit(c=>B(c)),setTimeout(()=>{if(!this.auth){const c=this.De.getImmediate({optional:!0});c?B(c):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vn)}},0),o()}getToken(){const e=this.xe,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.xe!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Q(typeof n.accessToken=="string",31837,{Oe:n}),new Zp(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.Ce&&this.auth.removeAuthTokenListener(this.Ce),this.Ce=void 0}Fe(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string",2055,{Me:e}),new tt(e)}}class fA{constructor(e,t,n){this.Ne=e,this.Le=t,this.Be=n,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.Ue=new Map}ke(){return this.Be?this.Be():null}get headers(){this.Ue.set("X-Goog-AuthUser",this.Ne);const e=this.ke();return e&&this.Ue.set("Authorization",e),this.Le&&this.Ue.set("X-Goog-Iam-Authorization-Token",this.Le),this.Ue}}class dA{constructor(e,t,n){this.Ne=e,this.Le=t,this.Be=n}getToken(){return Promise.resolve(new fA(this.Ne,this.Le,this.Be))}start(e,t){e.enqueueRetryable(()=>t(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CA{constructor(e,t){this.qe=t,this.forceRefresh=!1,this.appCheck=null,this.$e=null,this.Ke=null,Ot(e)&&e.settings.appCheckToken&&(this.Ke=e.settings.appCheckToken)}start(e,t){Q(this.Ce===void 0,3512);const n=i=>{i.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.$e;return this.$e=i.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.Ce=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.Ce&&this.appCheck.addTokenListener(this.Ce)};this.qe.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.qe.getImmediate({optional:!0});i?s(i):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.Ke)return Promise.resolve(new Wf(this.Ke));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Q(typeof t.token=="string",44558,{tokenResult:t}),this.$e=t.token,new Wf(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.Ce&&this.appCheck.removeTokenListener(this.Ce),this.Ce=void 0}}function eg(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */class pA{Qe(e){}shutdown(){}}/**
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
 */const Qf="ConnectivityMonitor";class Yf{constructor(){this.We=()=>this.Ge(),this.ze=()=>this.je(),this.He=[],this.Je()}Qe(e){this.He.push(e)}shutdown(){window.removeEventListener("online",this.We),window.removeEventListener("offline",this.ze)}Je(){window.addEventListener("online",this.We),window.addEventListener("offline",this.ze)}Ge(){z(Qf,"Network connectivity changed: AVAILABLE");for(const e of this.He)e(0)}je(){z(Qf,"Network connectivity changed: UNAVAILABLE");for(const e of this.He)e(1)}static Ye(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fo=null;function mc(){return fo===null?fo=function(){return 268435456+Math.round(2147483648*Math.random())}():fo++,"0x"+fo.toString(16)}/**
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
 */const bB="RestConnection",gA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class mA{get Ze(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Xe=t+"://"+e.host,this.et=`projects/${n}/databases/${s}`,this.tt=this.databaseId.database===jo?`project_id=${n}`:`project_id=${n}&database_id=${s}`}nt(e,t,n,s,i){const o=mc(),B=this.rt(e,t.toUriEncodedString());z(bB,`Sending RPC '${e}' ${o}:`,B,n);const c={"google-cloud-resource-prefix":this.et,"x-goog-request-params":this.tt};this.it(c,s,i);const{host:u}=new URL(B),h=Di(u);return this.st(e,B,c,n,h).then(d=>(z(bB,`Received RPC '${e}' ${o}: `,d),d),d=>{throw Ut(bB,`RPC '${e}' ${o} failed with error: `,d,"url: ",B,"request:",n),d})}_t(e,t,n,s,i,o){return this.nt(e,t,n,s,i)}it(e,t,n){if(e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),n&&n.headers.forEach((s,i)=>e[i]=s),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))e[s]=this.databaseInfo._customHeaders[s]}rt(e,t){const n=gA[e];let s=`${this.Xe}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class EA{constructor(e){this.ot=e.ot,this.ut=e.ut}ct(e){this.lt=e}Et(e){this.ht=e}Tt(e){this.Pt=e}onMessage(e){this.It=e}close(){this.ut()}send(e){this.ot(e)}Rt(){this.lt()}At(){this.ht()}Vt(e){this.Pt(e)}dt(e){this.It(e)}}/**
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
 */const et="WebChannelConnection",ks=(r,e,t)=>{r.listen(e,n=>{try{t(n)}catch(s){setTimeout(()=>{throw s},0)}})};class Qr extends mA{constructor(e){super(e),this.ft=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static gt(){if(!Qr.yt){const e=ep();ks(e,ZC.STAT_EVENT,t=>{t.stat===ic.PROXY?z(et,"STAT_EVENT: detected buffering proxy"):t.stat===ic.NOPROXY&&z(et,"STAT_EVENT: detected no buffering proxy")}),Qr.yt=!0}}st(e,t,n,s,i){const o=mc();return new Promise((B,c)=>{const u=new YC;u.setWithCredentials(!0),u.listenOnce(XC.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case wo.NO_ERROR:const d=u.getResponseJson();z(et,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),B(d);break;case wo.TIMEOUT:z(et,`RPC '${e}' ${o} timed out`),c(new K(M.DEADLINE_EXCEEDED,"Request time out"));break;case wo.HTTP_ERROR:const p=u.getStatus();if(z(et,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let E=u.getResponseJson();Array.isArray(E)&&(E=E[0]);const _=E==null?void 0:E.error;if(_&&_.status&&_.message){const S=function(H){const W=H.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(W)>=0?W:M.UNKNOWN}(_.status);c(new K(S,_.message))}else c(new K(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new K(M.UNAVAILABLE,"Connection failed."));break;default:Z(9055,{wt:e,streamId:o,bt:u.getLastErrorCode(),St:u.getLastError()})}}finally{z(et,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);z(et,`RPC '${e}' ${o} sending request:`,s),u.send(t,"POST",h,n,15)})}vt(e,t,n){const s=mc(),i=[this.Xe,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),B={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(B.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(B.useFetchStreams=!0),this.it(B.initMessageHeaders,t,n),B.encodeInitMessageHeaders=!0;const u=i.join("");z(et,`Creating RPC '${e}' stream ${s}: ${u}`,B);const h=o.createWebChannel(u,B);this.Dt(h);let d=!1,p=!1;const E=new EA({ot:_=>{p?z(et,`Not sending because RPC '${e}' stream ${s} is closed:`,_):(d||(z(et,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),z(et,`RPC '${e}' stream ${s} sending:`,_),h.send(_))},ut:()=>h.close()});return ks(h,xs.EventType.OPEN,()=>{p||(z(et,`RPC '${e}' stream ${s} transport opened.`),E.Rt())}),ks(h,xs.EventType.CLOSE,()=>{p||(p=!0,z(et,`RPC '${e}' stream ${s} transport closed`),E.Vt(),this.xt(h))}),ks(h,xs.EventType.ERROR,_=>{p||(p=!0,Ut(et,`RPC '${e}' stream ${s} transport errored. Name:`,_.name,"Message:",_.message),E.Vt(new K(M.UNAVAILABLE,"The operation could not be completed")))}),ks(h,xs.EventType.MESSAGE,_=>{var S;if(!p){const L=_.data[0];Q(!!L,16349);const H=L,W=(H==null?void 0:H.error)||((S=H[0])==null?void 0:S.error);if(W){z(et,`RPC '${e}' stream ${s} received error:`,W);const ee=W.status;let Ce=function(R){const D=Le[R];if(D!==void 0)return xp(D)}(ee),Ae=W.message;ee==="NOT_FOUND"&&Ae.includes("database")&&Ae.includes("does not exist")&&Ae.includes(this.databaseId.database)&&Ut(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Ce===void 0&&(Ce=M.INTERNAL,Ae="Unknown error status: "+ee+" with message "+W.message),p=!0,E.Vt(new K(Ce,Ae)),h.close()}else z(et,`RPC '${e}' stream ${s} received:`,L),E.dt(L)}}),Qr.gt(),setTimeout(()=>{E.At()},0),E}terminate(){this.ft.forEach(e=>e.close()),this.ft=[]}Dt(e){this.ft.push(e)}xt(e){this.ft=this.ft.filter(t=>t===e)}it(e,t,n){super.it(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return tp()}}/**
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
 */function _A(r){return new Qr(r)}Qr.yt=!1;class tg{constructor(e,t,n=1e3,s=1.5,i=6e4){this.Ct=e,this.timerId=t,this.Ft=n,this.Ot=s,this.Mt=i,this.Nt=0,this.Lt=null,this.Bt=Date.now(),this.reset()}reset(){this.Nt=0}Ut(){this.Nt=this.Mt}kt(e){this.cancel();const t=Math.floor(this.Nt+this.qt()),n=Math.max(0,Date.now()-this.Bt),s=Math.max(0,t-n);s>0&&z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Nt} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Lt=this.Ct.enqueueAfterDelay(this.timerId,s,()=>(this.Bt=Date.now(),e())),this.Nt*=this.Ot,this.Nt<this.Ft&&(this.Nt=this.Ft),this.Nt>this.Mt&&(this.Nt=this.Mt)}$t(){this.Lt!==null&&(this.Lt.skipDelay(),this.Lt=null)}cancel(){this.Lt!==null&&(this.Lt.cancel(),this.Lt=null)}qt(){return(Math.random()-.5)*this.Nt}}/**
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
 */const Xf="PersistentStream";class ng{constructor(e,t,n,s,i,o,B,c){this.Ct=e,this.Kt=n,this.Qt=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=B,this.listener=c,this.state=0,this.Wt=0,this.Gt=null,this.zt=null,this.stream=null,this.jt=0,this.Ht=new tg(e,t)}Jt(){return this.state===1||this.state===5||this.Yt()}Yt(){return this.state===2||this.state===3}start(){this.jt=0,this.state!==4?this.auth():this.Zt()}async stop(){this.Jt()&&await this.close(0)}Xt(){this.state=0,this.Ht.reset()}en(){this.Yt()&&this.Gt===null&&(this.Gt=this.Ct.enqueueAfterDelay(this.Kt,6e4,()=>this.tn()))}nn(e){this.rn(),this.stream.send(e)}async tn(){if(this.Yt())return this.close(0)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}sn(){this.zt&&(this.zt.cancel(),this.zt=null)}async close(e,t){this.rn(),this.sn(),this.Ht.cancel(),this.Wt++,e!==4?this.Ht.reset():t&&t.code===M.RESOURCE_EXHAUSTED?(pn(t.toString()),pn("Using maximum backoff delay to prevent overloading the backend."),this.Ht.Ut()):t&&t.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this._n(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Tt(t)}_n(){}auth(){this.state=1;const e=this.an(this.Wt),t=this.Wt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Wt===t&&this.un(n,s)},n=>{e(()=>{const s=new K(M.UNKNOWN,"Fetching auth token failed: "+n.message);return this.cn(s)})})}un(e,t){const n=this.an(this.Wt);this.stream=this.En(e,t),this.stream.ct(()=>{n(()=>this.listener.ct())}),this.stream.Et(()=>{n(()=>(this.state=2,this.zt=this.Ct.enqueueAfterDelay(this.Qt,1e4,()=>(this.Yt()&&(this.state=3),Promise.resolve())),this.listener.Et()))}),this.stream.Tt(s=>{n(()=>this.cn(s))}),this.stream.onMessage(s=>{n(()=>++this.jt==1?this.hn(s):this.onNext(s))})}Zt(){this.state=5,this.Ht.kt(async()=>{this.state=0,this.start()})}cn(e){return z(Xf,`close with error: ${e}`),this.stream=null,this.close(4,e)}an(e){return t=>{this.Ct.enqueueAndForget(()=>this.Wt===e?t():(z(Xf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class DA extends ng{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}En(e,t){return this.connection.vt("Listen",e,t)}hn(e){return this.onNext(e)}onNext(e){this.Ht.reset();const t=YT(this.serializer,e),n=function(i){if(!("targetChange"in i))return ie.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ie.min():o.readTime?Zt(o.readTime):ie.min()}(e);return this.listener.Tn(t,n)}Pn(e){const t={};t.database=gc(this.serializer),t.addTarget=function(i,o){let B;const c=o.target;if(B=hr(c)?{pipelineQuery:sA(i,c)}:Fp(c)?{documents:eA(i,c)}:{query:tA(i,c).Se},B.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){B.resumeToken=Jp(i,o.resumeToken);const u=Cc(i,o.expectedCount);u!==null&&(B.expectedCount=u)}else if(o.snapshotVersion.compareTo(ie.min())>0){B.readTime=zs(i,o.snapshotVersion.toTimestamp());const u=Cc(i,o.expectedCount);u!==null&&(B.expectedCount=u)}return B}(this.serializer,e);const n=rA(this.serializer,e);n&&(t.labels=n),this.nn(t)}In(e){const t={};t.database=gc(this.serializer),t.removeTarget=e,this.nn(t)}}class wA extends ng{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get Rn(){return this.jt>0}start(){this.lastStreamToken=void 0,super.start()}_n(){this.Rn&&this.An([])}En(e,t){return this.connection.vt("Write",e,t)}hn(e){return Q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0,55816),this.listener.Vn()}onNext(e){Q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.Ht.reset();const t=ZT(e.writeResults,e.commitTime),n=Zt(e.commitTime);return this.listener.dn(n,t)}fn(){const e={};e.database=gc(this.serializer),this.nn(e)}An(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>XT(this.serializer,n))};this.nn(t)}}/**
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
 */class yA{}class IA extends yA{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.mn=!1}pn(){if(this.mn)throw new K(M.FAILED_PRECONDITION,"The client has already been terminated.")}nt(e,t,n,s){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.nt(e,pc(t,n),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(M.UNKNOWN,i.toString())})}_t(e,t,n,s,i){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,B])=>this.connection._t(e,pc(t,n),s,o,B,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(M.UNKNOWN,o.toString())})}terminate(){this.mn=!0,this.connection.terminate()}}function TA(r,e,t,n){return new IA(r,e,t,n)}/**
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
 */const AA="ComponentProvider",Zf=new Map;function RA(r,e,t,n,s){return new rT(r,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,eg(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,n,s._customHeaders,s.grpcFlowControlWindow)}/**
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
 */const ed={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},rg=41943040;class ht{static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(rg,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);/**
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
 */class Da{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.gn(n),this.yn=n=>t.writeSequenceNumber(n))}gn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.yn&&this.yn(e),e}}Da.wn=-1;/**
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
 */const vA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ls(r){if(r.code!==M.FAILED_PRECONDITION||r.message!==vA)throw r;z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new x((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof x?t:x.resolve(t)}catch(t){return x.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):x.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):x.reject(t)}static resolve(e){return new x((t,n)=>{t(e)})}static reject(e){return new x((t,n)=>{n(e)})}static waitFor(e){return new x((t,n)=>{let s=0,i=0,o=!1;e.forEach(B=>{++s,B.next(()=>{++i,o&&i===s&&t()},c=>n(c))}),o=!0,i===s&&t()})}static or(e){let t=x.resolve(!1);for(const n of e)t=t.next(s=>s?x.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new x((n,s)=>{const i=e.length,o=new Array(i);let B=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(h=>{o[u]=h,++B,B===i&&n(o)},h=>s(h))}})}static doWhile(e,t){return new x((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}function SA(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function hs(r){return r.name==="IndexedDbTransactionError"}/**
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
 */const td="LruGarbageCollector",PA=1048576;function nd([r,e],[t,n]){const s=le(r,t);return s===0?le(e,n):s}class OA{constructor(e){this.Yn=e,this.buffer=new Ve(nd),this.Zn=0}Xn(){return++this.Zn}er(e){const t=[e,this.Xn()];if(this.buffer.size<this.Yn)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();nd(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class NA{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.nr(6e4)}stop(){this.tr&&(this.tr.cancel(),this.tr=null)}get started(){return this.tr!==null}nr(e){z(td,`Garbage collection scheduled in ${e}ms`),this.tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){hs(t)?z(td,"Ignoring IndexedDB error during garbage collection: ",t):await ls(t)}await this.nr(3e5)})}}class LA{constructor(e,t){this.rr=e,this.params=t}calculateTargetCount(e,t){return this.rr.ir(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return x.resolve(Da.wn);const n=new OA(t);return this.rr.forEachTarget(e,s=>n.er(s.sequenceNumber)).next(()=>this.rr.sr(e,s=>n.er(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.rr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.rr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(ed)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ed):this._r(e,t))}getCacheSize(e){return this.rr.getCacheSize(e)}_r(e,t){let n,s,i,o,B,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(n=d,B=Date.now(),this.removeTargets(e,n,t))).next(d=>(i=d,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(d=>(u=Date.now(),Hr()<=ue.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(B-o)+`ms
	Removed ${i} targets in `+(c-B)+`ms
	Removed ${d} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function FA(r,e){return new LA(r,e)}/**
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
 */const sg="firestore.googleapis.com",rd=!0;class sd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new K(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=sg,this.ssl=rd}else this.host=e.host,this.ssl=e.ssl??rd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=rg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<PA)throw new K(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(tT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eg(e.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new K(M.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new K(M.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new K(M.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new K(M.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&function(n,s){if(n===s)return!0;if(!n||!s)return!1;const i=Object.keys(n),o=Object.keys(s);if(i.length!==o.length)return!1;for(const B of i)if(n[B]!==s[B])return!1;return!0}(this._customHeaders,e._customHeaders)}}let wa=class{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new uA;switch(n.type){case"firstParty":return new dA(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new K(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Zf.get(t);n&&(z(AA,"Removing Datastore"),Zf.delete(t),n.terminate())}(this),Promise.resolve()}};function kA(r,e,t,n={}){var u;r=ni(r,wa);const s=Di(e),i=r._getSettings(),o={...i,emulatorOptions:r._getEmulatorOptions()},B=`${e}:${t}`;s&&qd(`https://${B}`),i.host!==sg&&i.host!==B&&Ut("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:B,ssl:s,emulatorOptions:n};if(!jn(c,o)&&(r._setSettings(c),n.mockUserToken)){let h,d;if(typeof n.mockUserToken=="string")h=n.mockUserToken,d=tt.MOCK_USER;else{h=EE(n.mockUserToken,(u=r._app)==null?void 0:u.options.projectId);const p=n.mockUserToken.sub||n.mockUserToken.user_id;if(!p)throw new K(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new tt(p)}r._authCredentials=new lA(new Zp(h,d))}}/**
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
 */class Nr{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Nr(this.firestore,e,this._query)}}class qe{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}toJSON(){return{type:qe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(vi(t,qe._jsonSchema))return new qe(e,n||null,new Y(ge.fromString(t.referencePath)))}}qe._jsonSchemaVersion="firestore/documentReference/1.0",qe._jsonSchema={type:Me("string",qe._jsonSchemaVersion),referencePath:Me("string")};class Gn extends Nr{constructor(e,t,n){super(e,t,kp(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new Y(e))}withConverter(e){return new Gn(this.firestore,e,this._path)}}function MA(r,e,...t){if(r=be(r),hp("collection","path",e),r instanceof wa){const n=ge.fromString(e,...t);return Sf(n),new Gn(r,null,n)}{if(!(r instanceof qe||r instanceof Gn))throw new K(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ge.fromString(e,...t));return Sf(n),new Gn(r.firestore,null,n)}}function ig(r,e,...t){if(r=be(r),arguments.length===1&&(e=ru.newId()),hp("doc","path",e),r instanceof wa){const n=ge.fromString(e,...t);return bf(n),new qe(r,null,new Y(n))}{if(!(r instanceof qe||r instanceof Gn))throw new K(M.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ge.fromString(e,...t));return bf(n),new qe(r.firestore,r instanceof Gn?r.converter:null,new Y(n))}}/**
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
 */class pt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:pt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(vi(e,pt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new pt(e.vectorValues);throw new K(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}pt._jsonSchemaVersion="firestore/vectorValue/1.0",pt._jsonSchema={type:Me("string",pt._jsonSchemaVersion),vectorValues:Me("object")};/**
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
 */const xA=/^__.*__$/;class VA{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Pr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Si(e,this.data,t,this.fieldTransforms)}}function og(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z(40011,{dataSource:r})}}class Cu{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Cu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePathSegment(e),n}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePath(),n}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Qo(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(og(this.dataSource)&&xA.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class GA{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||_a(e)}createContext(e,t,n,s=!1){return new Cu({dataSource:e,methodName:t,targetDoc:n,path:Rt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ag(r){const e=r._freezeSettings(),t=_a(r._databaseId);return new GA(r._databaseId,!!e.ignoreUndefinedProperties,t)}function HA(r,e,t,n,s,i={}){const o=r.createContext(i.merge||i.mergeFields?2:0,e,t,s);lg("Data must be an object, but it was:",o,n);const B=Bg(n,o);let c,u;if(i.merge)c=new Ht(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const p=Ni(e,d,t);if(!o.contains(p))throw new K(M.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);qA(h,p)||h.push(p)}c=new Ht(h),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new VA(new It(B),c,u)}class pu extends du{_toFieldTransform(e){return new lT(e.path,new ai)}isEqual(e){return e instanceof pu}}function UA(r,e,t,n=!1){return is(t,r.createContext(n?4:3,e))}function is(r,e,t){if(ug(r=be(r)))return lg("Unsupported field value:",e,r),Bg(r,e);if(r instanceof du)return function(s,i){if(!og(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,i){const o=[];let B=0;for(const c of s){let u=is(c,i.childContextForArray(B));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),B++}return{arrayValue:{values:o}}}(r,e)}return function(s,i,o){if((s=be(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return ou(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const B=_e.fromDate(s);return{timestampValue:zs(i.serializer,B)}}if(s instanceof _e){const B=new _e(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:zs(i.serializer,B)}}if(cg(s)){const B=_e.fromInstant(s),c=new _e(B.seconds,1e3*Math.floor(B.nanoseconds/1e3));return{timestampValue:zs(i.serializer,c)}}if(s instanceof en)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Nt)return{bytesValue:Jp(i.serializer,s._byteString)};if(s instanceof qe){const B=i.databaseId,c=s.firestore._databaseId;if(!c.isEqual(B))throw i.createError(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${B.projectId}/${B.database}`);return{referenceValue:hu(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof pt)return function(c,u){const h=c instanceof pt?c.toArray():c;return{mapValue:{fields:{[mp]:{stringValue:Ep},[ii]:{arrayValue:{values:h.map(p=>{if(typeof p!="number")throw u.createError("VectorValues must only contain numeric values.");return pa(u.serializer,p)})}}}}}}(s,i);if(Yp(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${fa(s)}`)}(r,e)}function Bg(r,e){const t={};return lp(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Sr(r,(n,s)=>{const i=is(s,e.childContextForField(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function cg(r){if(typeof r!="object"||r===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&r instanceof Temporal.Instant)return!0;const e=r;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.t=="bigint"}function ug(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof _e||r instanceof en||r instanceof Nt||r instanceof qe||r instanceof du||r instanceof pt||cg(r)||Yp(r))}function lg(r,e,t){if(!ug(t)||!Ri(t)){const n=fa(t);throw n==="an object"?e.createError(r+" a custom object"):e.createError(r+" "+n)}}function Ni(r,e,t){if((e=be(e))instanceof fu)return e._internalPath;if(typeof e=="string")return JA(r,e);throw Qo("Field path arguments must be of type string or ",r,!1,void 0,t)}const jA=new RegExp("[~\\*/\\[\\]]");function JA(r,e,t){if(e.search(jA)>=0)throw Qo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new fu(...e.split("."))._internalPath}catch{throw Qo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Qo(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let B=`Function ${e}() called with invalid data`;t&&(B+=" (via `toFirestore()`)"),B+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${n}`),o&&(c+=` in document ${s}`),c+=")"),new K(M.INVALID_ARGUMENT,B+r+c)}function qA(r,e){return r.some(t=>t.isEqual(e))}function hg(r){return typeof r._readUserData=="function"}/**
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
 */class st{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const n=It.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const o=e[s];let B;i.nestedOptions&&Ri(o)?B={mapValue:{fields:new st(i.nestedOptions).getOptionsProto(t,o)}}:o&&(B=is(o,t)??void 0),B&&n.set(Rt.fromServerFormat(i.serverName),B)}}return n}getOptionsProto(e,t,n){const s=this._getKnownOptions(t,e);if(n){const i=new Map(eT(n,(o,B)=>[Rt.fromServerFormat(B),o!==void 0?is(o,e):null]));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
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
 */function KA(r){return typeof r=="object"&&r!==null&&!!("nullValue"in r&&(r.nullValue===null||r.nullValue==="NULL_VALUE")||"booleanValue"in r&&(r.booleanValue===null||typeof r.booleanValue=="boolean")||"integerValue"in r&&(r.integerValue===null||typeof r.integerValue=="number"||typeof r.integerValue=="string")||"doubleValue"in r&&(r.doubleValue===null||typeof r.doubleValue=="number")||"timestampValue"in r&&(r.timestampValue===null||function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")}(r.timestampValue))||"stringValue"in r&&(r.stringValue===null||typeof r.stringValue=="string")||"bytesValue"in r&&(r.bytesValue===null||r.bytesValue instanceof Uint8Array)||"referenceValue"in r&&(r.referenceValue===null||typeof r.referenceValue=="string")||"geoPointValue"in r&&(r.geoPointValue===null||function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")}(r.geoPointValue))||"arrayValue"in r&&(r.arrayValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))}(r.arrayValue))||"mapValue"in r&&(r.mapValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!Ri(t.fields))}(r.mapValue))||"fieldReferenceValue"in r&&(r.fieldReferenceValue===null||typeof r.fieldReferenceValue=="string")||"functionValue"in r&&(r.functionValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))}(r.functionValue))||"pipelineValue"in r&&(r.pipelineValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))}(r.pipelineValue)))}function $A(){return new pu("serverTimestamp")}function zA(r){return new pt(r)}/**
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
 */function U(r){let e;return r instanceof Lr?r:(e=Ri(r)?ZA(r):r instanceof Array?eR(r):fg(r,void 0),e)}function SB(r){if(r instanceof Lr)return r;if(r instanceof pt)return di(r);if(Array.isArray(r))return di(zA(r));throw new Error("Unsupported value: "+typeof r)}function gu(r){return oT(r)?vo(r):U(r)}class Lr{constructor(){this._protoValueType="ProtoValue"}add(e){return new F("add",[this,U(e)],"add")}asBoolean(){if(this instanceof Qn)return this;if(this instanceof ds)return new Cg(this);if(this instanceof fs)return new XA(this);if(this instanceof F)return new dg(this);throw new K("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new F("subtract",[this,U(e)],"subtract")}multiply(e){return new F("multiply",[this,U(e)],"multiply")}divide(e){return new F("divide",[this,U(e)],"divide")}mod(e){return new F("mod",[this,U(e)],"mod")}equal(e){return new F("equal",[this,U(e)],"equal").asBoolean()}notEqual(e){return new F("not_equal",[this,U(e)],"notEqual").asBoolean()}lessThan(e){return new F("less_than",[this,U(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new F("less_than_or_equal",[this,U(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new F("greater_than",[this,U(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new F("greater_than_or_equal",[this,U(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const n=[e,...t].map(s=>U(s));return new F("array_concat",[this,...n],"arrayConcat")}arrayContains(e){return new F("array_contains",[this,U(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new Gs(e.map(U),"arrayContainsAll"):e;return new F("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new Gs(e.map(U),"arrayContainsAny"):e;return new F("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new F("array_reverse",[this])}arrayLength(){return new F("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new Gs(e.map(U),"equalAny"):e;return new F("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new Gs(e.map(U),"notEqualAny"):e;return new F("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new F("exists",[this],"exists").asBoolean()}charLength(){return new F("char_length",[this],"charLength")}like(e){return new F("like",[this,U(e)],"like").asBoolean()}regexContains(e){return new F("regex_contains",[this,U(e)],"regexContains").asBoolean()}regexFind(e){return new F("regex_find",[this,U(e)],"regexFind")}regexFindAll(e){return new F("regex_find_all",[this,U(e)],"regexFindAll")}regexMatch(e){return new F("regex_match",[this,U(e)],"regexMatch").asBoolean()}stringContains(e){return new F("string_contains",[this,U(e)],"stringContains").asBoolean()}startsWith(e){return new F("starts_with",[this,U(e)],"startsWith").asBoolean()}endsWith(e){return new F("ends_with",[this,U(e)],"endsWith").asBoolean()}toLower(){return new F("to_lower",[this],"toLower")}toUpper(){return new F("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(U(e)),new F("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(U(e)),new F("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(U(e)),new F("rtrim",t,"rtrim")}type(){return new F("type",[this])}isType(e){return new F("is_type",[this,di(e)],"isType").asBoolean()}stringConcat(e,...t){const n=[e,...t].map(U);return new F("string_concat",[this,...n],"stringConcat")}stringIndexOf(e){return new F("string_index_of",[this,U(e)],"stringIndexOf")}stringRepeat(e){return new F("string_repeat",[this,U(e)],"stringRepeat")}stringReplaceAll(e,t){return new F("string_replace_all",[this,U(e),U(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new F("string_replace_one",[this,U(e),U(t)],"stringReplaceOne")}concat(e,...t){const n=[e,...t].map(U);return new F("concat",[this,...n],"concat")}reverse(){return new F("reverse",[this],"reverse")}arrayFilter(e,t){return new F("array_filter",[this,U(e),t],"arrayFilter")}arrayTransform(e,t){return new F("array_transform",[this,U(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,n){return new F("array_transform",[this,U(e),U(t),n],"arrayTransformWithIndex")}arraySlice(e,t){const n=[this,U(e)];return t!==void 0&&n.push(U(t)),new F("array_slice",n,"arraySlice")}arrayFirst(){return new F("array_first",[this],"arrayFirst")}arrayFirstN(e){return new F("array_first_n",[this,U(e)],"arrayFirstN")}arrayLast(){return new F("array_last",[this],"arrayLast")}arrayLastN(e){return new F("array_last_n",[this,U(e)],"arrayLastN")}arrayMaximum(){return new F("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new F("maximum_n",[this,U(e)],"arrayMaximumN")}arrayMinimum(){return new F("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new F("minimum_n",[this,U(e)],"arrayMinimumN")}arrayIndexOf(e){return new F("array_index_of",[this,U(e),U("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new F("array_index_of",[this,U(e),U("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new F("array_index_of_all",[this,U(e)],"arrayIndexOfAll")}byteLength(){return new F("byte_length",[this],"byteLength")}ceil(){return new F("ceil",[this])}floor(){return new F("floor",[this])}abs(){return new F("abs",[this])}exp(){return new F("exp",[this])}mapGet(e){return new F("map_get",[this,di(e)],"mapGet")}mapSet(e,t,...n){const s=[this,U(e),U(t),...n.map(U)];return new F("map_set",s,"mapSet")}mapKeys(){return new F("map_keys",[this],"mapKeys")}mapValues(){return new F("map_values",[this],"mapValues")}mapEntries(){return new F("map_entries",[this],"mapEntries")}getField(e){return new F("get_field",[this,U(e)],"get_field")}count(){return wt._create("count",[this],"count")}sum(){return wt._create("sum",[this],"sum")}average(){return wt._create("average",[this],"average")}minimum(){return wt._create("minimum",[this],"minimum")}maximum(){return wt._create("maximum",[this],"maximum")}first(){return wt._create("first",[this],"first")}last(){return wt._create("last",[this],"last")}arrayAgg(){return wt._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return wt._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return wt._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const n=[e,...t];return new F("maximum",[this,...n.map(U)],"logicalMaximum")}logicalMinimum(e,...t){const n=[e,...t];return new F("minimum",[this,...n.map(U)],"minimum")}vectorLength(){return new F("vector_length",[this],"vectorLength")}cosineDistance(e){return new F("cosine_distance",[this,SB(e)],"cosineDistance")}dotProduct(e){return new F("dot_product",[this,SB(e)],"dotProduct")}euclideanDistance(e){return new F("euclidean_distance",[this,SB(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new F("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new F("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new F("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new F("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new F("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new F("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new F("timestamp_add",[this,U(e),U(t)],"timestampAdd")}timestampSubtract(e,t){return new F("timestamp_subtract",[this,U(e),U(t)],"timestampSubtract")}timestampDiff(e,t){return new F("timestamp_diff",[this,gu(e),U(t)],"timestampDiff")}timestampExtract(e,t){const n=[this,U(e)];return t&&n.push(U(t)),new F("timestamp_extract",n,"timestampExtract")}documentId(){return new F("document_id",[this],"documentId")}parent(){return new F("parent",[this],"parent")}substring(e,t){const n=U(e);return new F("substring",t===void 0?[this,n]:[this,n,U(t)],"substring")}arrayGet(e){return new F("array_get",[this,U(e)],"arrayGet")}isError(){return new F("is_error",[this],"isError").asBoolean()}ifError(e){const t=new F("if_error",[this,U(e)],"ifError");return e instanceof Qn?t.asBoolean():t}isAbsent(){return new F("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new F("map_remove",[this,U(e)],"mapRemove")}mapMerge(e,...t){const n=U(e),s=t.map(U);return new F("map_merge",[this,n,...s],"mapMerge")}pow(e){return new F("pow",[this,U(e)])}trunc(e){return e===void 0?new F("trunc",[this]):new F("trunc",[this,U(e)],"trunc")}round(e){return e===void 0?new F("round",[this]):new F("round",[this,U(e)],"round")}collectionId(){return new F("collection_id",[this])}length(){return new F("length",[this])}ln(){return new F("ln",[this])}sqrt(){return new F("sqrt",[this])}stringReverse(){return new F("string_reverse",[this])}ifAbsent(e){return new F("if_absent",[this,U(e)],"ifAbsent")}ifNull(e){return new F("if_null",[this,U(e)],"ifNull")}coalesce(e,...t){return new F("coalesce",[this,U(e),...t.map(U)],"coalesce")}join(e){return new F("join",[this,U(e)],"join")}log10(){return new F("log10",[this])}arraySum(){return new F("sum",[this])}split(e){return new F("split",[this,U(e)])}timestampTruncate(e,t){const n=[this,U(e)];return t&&n.push(U(t)),new F("timestamp_trunc",n)}ascending(){return tR(this)}descending(){return nR(this)}as(e){return new QA(this,e,"as")}}class wt{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,n){const s=new wt(e,t);return s._methodName=n,s}as(e){return new WA(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}}class WA{constructor(e,t,n){this.aggregate=e,this.alias=t,this._methodName=n}_readUserData(e){this.aggregate._readUserData(e)}}class QA{constructor(e,t,n){this.expr=e,this.alias=t,this._methodName=n,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class Gs extends Lr{constructor(e,t){super(),this.cr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.cr.map(t=>t._toProto(e))}}}_readUserData(e){this.cr.forEach(t=>t._readUserData(e))}}class fs extends Lr{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new F("geo_distance",[this,U(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function vo(r){return YA(r,"field")}function YA(r,e){return new fs(typeof r=="string"?$t===r?cA()._internalPath:Ni("field",r):r._internalPath,e)}class ds extends Lr{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new ds(e,void 0);return t._protoValue=e,t}_toProto(e){return Q(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,KA(this._protoValue)||(this._protoValue=is(this.value,e))}}function di(r,e){return fg(r,"constant")}function fg(r,e){const t=new ds(r,e);return typeof r=="boolean"?new Cg(t):t}class F extends Lr{constructor(e,t,n,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,n!==void 0&&(this._methodName=n),s!==void 0&&(this._options=s)}get _optionsUtil(){return new st({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map(n=>n._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class Qn extends Lr{get _methodName(){return this._expr._methodName}countIf(){return wt._create("count_if",[this],"countIf")}not(){return new F("not",[this],"not").asBoolean()}conditional(e,t){return new F("conditional",[this,e,t],"conditional")}ifError(e){const t=U(e),n=new F("if_error",[this,t],"ifError");return t instanceof Qn?n.asBoolean():n}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class dg extends Qn{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class Cg extends Qn{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class XA extends Qn{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function ZA(r,e){const t=[];for(const n in r)if(Object.prototype.hasOwnProperty.call(r,n)){const s=r[n];t.push(di(n)),t.push(U(s))}return new F("map",t,"map")}function eR(r){return function(t,n){return new F("array",t.map(s=>U(s)),n)}(r,"array")}function tR(r){return new pg(gu(r),"ascending","ascending")}function nR(r){return new pg(gu(r),"descending","descending")}class pg{constructor(e,t,n){this.expr=e,this.direction=t,this._methodName=n,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:Xp(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
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
 */class St{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class gg extends St{get _name(){return"add_fields"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[fi(e,this.fields)]}}_readUserData(e){super._readUserData(e),Yn(this.fields,e)}}class mg extends St{get _name(){return"aggregate"}get _optionsUtil(){return new st({})}constructor(e,t,n){super(n),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[fi(e,this.accumulators),fi(e,this.groups)]}}_readUserData(e){super._readUserData(e),Yn(this.groups,e),Yn(this.accumulators,e)}}class Eg extends St{get _name(){return"distinct"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[fi(e,this.groups)]}}_readUserData(e){super._readUserData(e),Yn(this.groups,e)}}class ya extends St{get _name(){return"collection"}get _optionsUtil(){return new st({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.hr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.hr}]}}_readUserData(e){super._readUserData(e)}}class Ia extends St{get _name(){return"collection_group"}get _optionsUtil(){return new st({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class mu extends St{get _name(){return"database"}get _optionsUtil(){return new st({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class Eu extends St{get _name(){return"documents"}get _optionsUtil(){return new st({})}constructor(e,t){if(super(t),!e||e.length===0)throw new K(M.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const n=e.map(i=>i.startsWith("/")?i:"/"+i),s=new Set(n);if(s.size!==n.length)throw new K(M.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.Tr=n,this.Pr=s}_toProto(e){return{...super._toProto(e),args:this.Tr.map(t=>({referenceValue:t}))}}_readUserData(e){super._readUserData(e)}}class Ta extends St{get _name(){return"where"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),Yn(this.condition,e)}}class Rr extends St{get _name(){return"limit"}get _optionsUtil(){return new st({})}constructor(e,t){Q(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[ou(e,this.limit)]}}}class id extends St{get _name(){return"offset"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[ou(e,this.offset)]}}}class rR extends St{get _name(){return"select"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[fi(e,this.selections)]}}_readUserData(e){super._readUserData(e),Yn(this.selections,e)}}class un extends St{get _name(){return"sort"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),Yn(this.orderings,e)}}class _u extends St{get _name(){return"replace_with"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),Xp(_u.Ir)]}}_readUserData(e){super._readUserData(e),Yn(this.map,e)}}_u.Ir="full_replace";function Yn(r,e){return hg(r)?r._readUserData(e):Array.isArray(r)?r.forEach(t=>t._readUserData(e)):r instanceof Map?r.forEach(t=>t._readUserData(e)):Object.values(r).forEach(t=>t._readUserData(e)),r}/**
 * @license
 * Copyright 2026 Google LLC
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
 */class Ws{constructor(e,t,n,s){this._db=e,this.userDataReader=t,this._userDataWriter=n,this.stages=s}Vr(e,t){const n=this.userDataReader.createContext(3,e);return hg(t)?t._readUserData(n):Array.isArray(t)?t.forEach(s=>s._readUserData(n)):t.forEach(s=>s._readUserData(n)),t}where(e){const t=this.stages.map(n=>n);return this.Vr("where",e),t.push(new Ta(e,{})),new Ws(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map(n=>n);return t.push(new Rr(e,{})),new Ws(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const n=this.stages.map(s=>s);return"orderings"in e?n.push(new un(this.Vr("sort",e.orderings),{})):n.push(new un(this.Vr("sort",[e,...t]),{})),new Ws(this._db,this.userDataReader,this._userDataWriter,n)}dr(e){return{pipeline:{stages:this.stages.map(t=>t._toProto(e))}}}}// Copyright 2024 Google LLC* @license
class at{constructor(e,t,n){this.serializer=e,this.stages=t,this.listenOptions=n,this.isCorePipeline=!0}getPipelineCollection(){return Aa(this)}getPipelineCollectionGroup(){return Du(this)}getPipelineCollectionId(){return sR(this)}getPipelineDocuments(){return Ec(this)}getPipelineFlavor(){return function(t){let n="exact";return t.stages.forEach((s,i)=>{s._name!==Eg.name&&s._name!==mg.name||(n="keyless"),s._name===rR.name&&n==="exact"&&(n="augmented"),s._name===gg.name&&i<t.stages.length-1&&n==="exact"&&(n="augmented")}),n}(this)}getPipelineSourceType(){return Hn(this)}}function Hn(r){const e=r.stages[0];return e instanceof ya||e instanceof Ia||e instanceof mu||e instanceof Eu?e._name:"unknown"}function Aa(r){if(Hn(r)==="collection")return r.stages[0].hr}function Du(r){if(Hn(r)==="collection_group")return r.stages[0].collectionId}function sR(r){switch(Hn(r)){case"collection":return ge.fromString(Aa(r)).lastSegment();case"collection_group":return Du(r);default:return}}function Ec(r){if(Hn(r)==="documents")return r.stages[0].Tr}class T{constructor(e,t){this.type=e,this.value=t}static mr(){return new T("ERROR",void 0)}static pr(){return new T("UNSET",void 0)}static gr(){return new T("NULL",ns)}static newValue(e){return At(e)?new T("NULL",ns):function(n){return!!n&&"booleanValue"in n}(e)?new T("BOOLEAN",e):zt(e)?new T("INT",e):Cr(e)?new T("DOUBLE",e):function(n){return!!n&&"timestampValue"in n&&!!n.timestampValue}(e)?new T("TIMESTAMP",e):function(n){return!!n&&"stringValue"in n}(e)?new T("STRING",e):function(n){return!!n&&"bytesValue"in n}(e)?new T("BYTES",e):e.referenceValue?new T("REFERENCE",e):e.geoPointValue?new T("GEO_POINT",e):ss(e)?new T("ARRAY",e):Jo(e)?new T("VECTOR",e):Dr(e)?new T("MAP",e):new T("ERROR",void 0)}yr(){return this.type==="ERROR"||this.type==="UNSET"}wr(){return this.type==="NULL"}}function Qs(r){if(!r.yr())return r.value}function _g(r){return r instanceof Qn?r._expr:r}function te(r){if((r=_g(r))instanceof fs)return new iR(r);if(r instanceof ds)return new oR(r);if(r instanceof Gs)return new aR(r);if(r instanceof F){if(r.name==="add")return new uR(r);if(r.name==="subtract")return new lR(r);if(r.name==="multiply")return new hR(r);if(r.name==="divide")return new fR(r);if(r.name==="mod")return new dR(r);if(r.name==="and")return new CR(r);if(r.name==="equal")return new RR(r);if(r.name==="not_equal")return new vR(r);if(r.name==="less_than")return new bR(r);if(r.name==="less_than_or_equal")return new SR(r);if(r.name==="greater_than")return new PR(r);if(r.name==="greater_than_or_equal")return new OR(r);if(r.name==="array_concat")return new NR(r);if(r.name==="array_reverse")return new LR(r);if(r.name==="array_contains")return new FR(r);if(r.name==="array_contains_all")return new kR(r);if(r.name==="array_contains_any")return new MR(r);if(r.name==="array_length")return new xR(r);if(r.name==="array_element")return new VR(r);if(r.name==="equal_any")return new Dg(r);if(r.name==="not_equal_any")return new gR(r);if(r.name==="is_nan")return new mR(r);if(r.name==="is_not_nan")return new ER(r);if(r.name==="is_null")return new _R(r);if(r.name==="is_not_null")return new DR(r);if(r.name==="is_error")return new wR(r);if(r.name==="exists")return new yR(r);if(r.name==="not")return new Ra(r);if(r.name==="or")return new pR(r);if(r.name==="xor")return new wu(r);if(r.name==="conditional")return new IR(r);if(r.name==="maximum")return new TR(r);if(r.name==="minimum")return new AR(r);if(r.name==="reverse")return new GR(r);if(r.name==="replace_first")return new HR(r);if(r.name==="replace_all")return new UR(r);if(r.name==="char_length")return new jR(r);if(r.name==="byte_length")return new JR(r);if(r.name==="like")return new qR(r);if(r.name==="regex_contains")return new KR(r);if(r.name==="regex_match")return new $R(r);if(r.name==="string_contains")return new zR(r);if(r.name==="starts_with")return new WR(r);if(r.name==="ends_with")return new QR(r);if(r.name==="to_lower")return new YR(r);if(r.name==="to_upper")return new XR(r);if(r.name==="trim")return new ZR(r);if(r.name==="string_concat")return new ev(r);if(r.name==="map_get")return new tv(r);if(r.name==="cosine_distance")return new nv(r);if(r.name==="dot_product")return new rv(r);if(r.name==="euclidean_distance")return new sv(r);if(r.name==="vector_length")return new iv(r);if(r.name==="unix_micros_to_timestamp")return new uv(r);if(r.name==="timestamp_to_unix_micros")return new fv(r);if(r.name==="unix_millis_to_timestamp")return new lv(r);if(r.name==="timestamp_to_unix_millis")return new dv(r);if(r.name==="unix_seconds_to_timestamp")return new hv(r);if(r.name==="timestamp_to_unix_seconds")return new Cv(r);if(r.name==="timestamp_add")return new pv(r);if(r.name==="timestamp_subtract")return new gv(r)}throw new Error(`Unknown Expr : ${r}`)}class iR{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===$t)return T.newValue({referenceValue:Wo(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return T.newValue({timestampValue:Ro(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return T.newValue({timestampValue:Ro(e.serializer,t.createTime)});const n=t.data.field(this.expr._fieldPath);return n?da(n)?T.newValue(function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:Ro(i.serializer,ie.fromTimestamp(ts(o)))};if(i.serverTimestampBehavior==="previous"){const B=bi(o);if(B)return B}return{nullValue:"NULL_VALUE"}}(e,n)):T.newValue(n):T.pr()}}class oR{constructor(e){this.expr=e}evaluate(e,t){return T.newValue(this.expr._getValue())}}class aR{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.cr.map(s=>te(s).evaluate(e,t));return n.some(s=>s.yr())?T.mr():T.newValue({arrayValue:{values:n.map(s=>s.value)}})}}function Ye(r){return Cr(r)?Number(r.doubleValue):Number(r.integerValue)}function nn(r){return BigInt(r.integerValue)}const BR=BigInt("0x7fffffffffffffff"),cR=-BigInt("0x8000000000000000");class Li{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length>=2,24778);const n=te(this.expr.params[0]).evaluate(e,t),s=te(this.expr.params[1]).evaluate(e,t);let i=this.br(n,s);for(const o of this.expr.params.slice(2)){const B=te(o).evaluate(e,t);i=this.br(i,B)}return i}br(e,t){if(e.yr()||t.yr())return T.mr();if(e.wr()||t.wr())return T.gr();const n=e.value,s=t.value;if(!Cr(n)&&!zt(n)||!Cr(s)&&!zt(s))return T.mr();if(Cr(n)||Cr(s)){const i=this.Sr(n,s);return i?T.newValue(i):T.mr()}if(zt(n)&&zt(s)){const i=this.vr(n,s);return i===void 0?T.mr():typeof i=="number"?T.newValue({doubleValue:i}):i<cR||i>BR?T.mr():T.newValue({integerValue:`${i}`})}return T.mr()}}function gn(r,e){return He(r)!==He(e)?"TYPE_MISMATCH":Et(r)||Et(e)?"NOT_EQ":At(r)&&At(e)?"EQ":At(r)||At(e)?"NULL":ss(r)&&ss(e)?function(n,s){var o,B,c;if(((o=n.values)==null?void 0:o.length)!==((B=s.values)==null?void 0:B.length))return"NOT_EQ";let i=!1;for(let u=0;u<(((c=n.values)==null?void 0:c.length)??0);u++){const h=n.values[u],d=s.values[u];switch(gn(h,d)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:Z(44609,{Dr:h,Cr:d})}}return i?"NULL":"EQ"}(r.arrayValue,e.arrayValue):Jo(r)&&Jo(e)||Dr(r)&&Dr(e)?function(n,s){const i=n.fields||{},o=s.fields||{};if(Uo(i)!==Uo(o))return"NOT_EQ";let B=!1;for(const c in i)if(i.hasOwnProperty(c)){if(o[c]===void 0)return"NOT_EQ";switch(gn(i[c],o[c])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":B=!0}}return B?"NULL":"EQ"}(r.mapValue,e.mapValue):function(n,s){return kt(n,s,{u:!1,i:!0,o:!0})}(r,e)?"EQ":"NOT_EQ"}class uR extends Li{vr(e,t){return nn(e)+nn(t)}Sr(e,t){return{doubleValue:Ye(e)+Ye(t)}}}class lR extends Li{constructor(e){super(e),this.expr=e}vr(e,t){return nn(e)-nn(t)}Sr(e,t){return{doubleValue:Ye(e)-Ye(t)}}}class hR extends Li{constructor(e){super(e),this.expr=e}vr(e,t){return nn(e)*nn(t)}Sr(e,t){return{doubleValue:Ye(e)*Ye(t)}}}class fR extends Li{constructor(e){super(e),this.expr=e}vr(e,t){const n=nn(t);if(n!==BigInt(0))return nn(e)/n}Sr(e,t){const n=Ye(t);return n===0?{doubleValue:si(n)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:Ye(e)/n}}}class dR extends Li{constructor(e){super(e),this.expr=e}vr(e,t){const n=nn(t);if(n!==BigInt(0))return nn(e)%n}Sr(e,t){const n=Ye(t);if(n!==0)return{doubleValue:Ye(e)%n}}}class CR{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,s=!1;for(const o of this.expr.params){const B=te(o).evaluate(e,t);switch(B.type){case"BOOLEAN":if(!((i=B.value)!=null&&i.booleanValue))return T.newValue(We);break;case"NULL":s=!0;break;default:n=!0}}return n?T.mr():s?T.gr():T.newValue(gt)}}class Ra{constructor(e){this.expr=e}evaluate(e,t){var s;Q(this.expr.params.length===1,9634);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return T.newValue({booleanValue:!((s=n.value)!=null&&s.booleanValue)});case"NULL":return T.gr();default:return T.mr()}}}class pR{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,s=!1;for(const o of this.expr.params){const B=te(o).evaluate(e,t);switch(B.type){case"BOOLEAN":if((i=B.value)!=null&&i.booleanValue)return T.newValue(gt);break;case"NULL":s=!0;break;default:n=!0}}return n?T.mr():s?T.gr():T.newValue(We)}}class wu{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,s=!1;for(const o of this.expr.params){const B=te(o).evaluate(e,t);switch(B.type){case"BOOLEAN":n=wu.xor(n,!!((i=B.value)!=null&&i.booleanValue));break;case"NULL":s=!0;break;default:return T.mr()}}return s?T.gr():T.newValue({booleanValue:n})}static xor(e,t){return(e||t)&&!(e&&t)}}class Dg{constructor(e){this.expr=e}evaluate(e,t){var o,B;Q(this.expr.params.length===2,55094);let n=!1;const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":n=!0;break;case"ERROR":case"UNSET":return T.mr()}const i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return T.mr()}if(n)return T.gr();for(const c of((B=(o=i.value)==null?void 0:o.arrayValue)==null?void 0:B.values)??[])switch(At(s.value)&&At(c)?"EQ":gn(s.value,c)){case"EQ":return T.newValue(gt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:Z(44608,{value:s.value,candidate:c})}return n?T.gr():T.newValue(We)}}class gR{constructor(e){this.expr=e}evaluate(e,t){return new Ra(new F("not",[new F("equal_any",this.expr.params)])).evaluate(e,t)}}class mR{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,23322);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return T.newValue(We);case"DOUBLE":return T.newValue({booleanValue:isNaN(Ye(n.value))});case"NULL":return T.gr();default:return T.mr()}}}class ER{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===1,50406),new Ra(new F("not",[new F("is_nan",this.expr.params)])).evaluate(e,t)}}class _R{constructor(e){this.expr=e}evaluate(e,t){switch(Q(this.expr.params.length===1,23123),te(this.expr.params[0]).evaluate(e,t).type){case"NULL":return T.newValue(gt);case"UNSET":case"ERROR":return T.mr();default:return T.newValue(We)}}}class DR{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===1,23167),new Ra(new F("not",[new F("is_null",this.expr.params)])).evaluate(e,t)}}class wR{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===1,5228),te(this.expr.params[0]).evaluate(e,t).type==="ERROR"?T.newValue(gt):T.newValue(We)}}class yR{constructor(e){this.expr=e}evaluate(e,t){switch(Q(this.expr.params.length===1,6877),te(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return T.mr();case"UNSET":return T.newValue(We);default:return T.newValue(gt)}}}class IR{constructor(e){this.expr=e}evaluate(e,t){var s;Q(this.expr.params.length===3,11706);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return(s=n.value)!=null&&s.booleanValue?te(this.expr.params[1]).evaluate(e,t):te(this.expr.params[2]).evaluate(e,t);case"NULL":return te(this.expr.params[2]).evaluate(e,t);default:return T.mr()}}}class TR{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map(i=>te(i).evaluate(e,t));let s;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||mt(i.value,s.value)>0?i:s}return s===void 0?T.gr():s}}class AR{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map(i=>te(i).evaluate(e,t));let s;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||mt(i.value,s.value)<0?i:s}return s===void 0?T.gr():s}}class Cs{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"ERROR":case"UNSET":return T.mr()}const s=te(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return T.mr()}return this.Fr(n,s)}}class RR extends Cs{constructor(e){super(e),this.expr=e}Fr(e,t){if(e.wr()&&t.wr())return T.newValue(gt);if(e.wr()||t.wr()||Et(e.value)||Et(t.value)||He(e.value)!==He(t.value))return T.newValue(We);switch(gn(e.value,t.value)){case"EQ":return T.newValue(gt);case"NOT_EQ":return T.newValue(We);case"NULL":return T.gr();default:Z(44615,{left:e,right:t})}}}class vR extends Cs{constructor(e){super(e),this.expr=e}Fr(e,t){switch(gn(e.value,t.value)){case"EQ":return T.newValue(We);case"NOT_EQ":case"TYPE_MISMATCH":return T.newValue(gt);case"NULL":return T.gr();default:Z(44614,{left:e,right:t})}}}class bR extends Cs{constructor(e){super(e),this.expr=e}Fr(e,t){return He(e.value)!==He(t.value)||Et(e.value)||Et(t.value)?T.newValue(We):T.newValue({booleanValue:mt(e.value,t.value)<0})}}class SR extends Cs{constructor(e){super(e),this.expr=e}Fr(e,t){return He(e.value)!==He(t.value)||Et(e.value)||Et(t.value)?T.newValue(We):gn(e.value,t.value)==="EQ"?T.newValue(gt):T.newValue({booleanValue:mt(e.value,t.value)<0})}}class PR extends Cs{constructor(e){super(e),this.expr=e}Fr(e,t){return He(e.value)!==He(t.value)||Et(e.value)||Et(t.value)?T.newValue(We):T.newValue({booleanValue:mt(e.value,t.value)>0})}}class OR extends Cs{constructor(e){super(e),this.expr=e}Fr(e,t){return He(e.value)!==He(t.value)||Et(e.value)||Et(t.value)?T.newValue(We):gn(e.value,t.value)==="EQ"?T.newValue(gt):T.newValue({booleanValue:mt(e.value,t.value)>0})}}class NR{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class LR{constructor(e){this.expr=e}evaluate(e,t){var s;Q(this.expr.params.length===1,216);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return T.gr();case"ARRAY":{const i=((s=n.value.arrayValue)==null?void 0:s.values)??[];return T.newValue({arrayValue:{values:[...i].reverse()}})}default:return T.mr()}}}class FR{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===2,52884),new Dg(new F("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class kR{constructor(e){this.expr=e}evaluate(e,t){var c,u,h,d;Q(this.expr.params.length===2,1392);let n=!1;const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":n=!0;break;default:return T.mr()}const i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return T.mr()}if(n)return T.gr();const o=((u=(c=i.value)==null?void 0:c.arrayValue)==null?void 0:u.values)??[],B=((d=(h=s.value)==null?void 0:h.arrayValue)==null?void 0:d.values)??[];for(const p of o){let E=!1;n=!1;for(const _ of B){switch(At(p)&&At(_)?"EQ":gn(p,_)){case"EQ":E=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:Z(44613,{value:_,search:p})}if(E)break}if(!E)return T.newValue(We)}return T.newValue(gt)}}class MR{constructor(e){this.expr=e}evaluate(e,t){var c,u,h,d;Q(this.expr.params.length===2,2680);let n=!1;const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":n=!0;break;default:return T.mr()}const i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return T.mr()}if(n)return T.gr();const o=((u=(c=i.value)==null?void 0:c.arrayValue)==null?void 0:u.values)??[],B=((d=(h=s.value)==null?void 0:h.arrayValue)==null?void 0:d.values)??[];for(const p of B)for(const E of o)switch(At(p)&&At(E)?"EQ":gn(p,E)){case"EQ":return T.newValue(gt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:Z(60403,{value:p,search:E})}return n?T.gr():T.newValue(We)}}class xR{constructor(e){this.expr=e}evaluate(e,t){var s,i,o;Q(this.expr.params.length===1,38605);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return T.gr();case"ARRAY":return T.newValue({integerValue:`${((o=(i=(s=n.value)==null?void 0:s.arrayValue)==null?void 0:i.values)==null?void 0:o.length)??0}`});default:return T.mr()}}}class VR{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class GR{constructor(e){this.expr=e}evaluate(e,t){var s,i;Q(this.expr.params.length===1,1508);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return T.gr();case"BYTES":{const o=(s=n.value)==null?void 0:s.bytesValue;if(typeof o=="string"){const B=Ge.fromBase64String(o).toUint8Array();return B.reverse(),T.newValue({bytesValue:Ge.fromUint8Array(B).toBase64()})}return T.newValue({bytesValue:new Uint8Array(o).reverse()})}case"STRING":{const o=(i=n.value)==null?void 0:i.stringValue,B=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(o),c=Array.from(B,u=>u.segment).reverse();return T.newValue({stringValue:c.join("")})}default:return T.mr()}}}class HR{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class UR{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class jR{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,19400);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return T.gr();case"STRING":{const s=function(o){let B=0;for(let c=0;c<o.length;c++){const u=o.codePointAt(c);if(u===void 0)return;if(u<=65535)if(u>=55296&&u<=57343)if(u<=56319){const h=o.codePointAt(c+1);h!==void 0&&h>=56320&&h<=57343?(B+=1,c++):B+=1}else B+=1;else B+=1;else{if(!(u<=1114111))return;B+=1,c++}}return B}(n.value.stringValue);return s===void 0?T.mr():T.newValue({integerValue:s})}default:return T.mr()}}}class JR{constructor(e){this.expr=e}evaluate(e,t){var s,i;Q(this.expr.params.length===1,8486);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BYTES":{const o=(s=n.value)==null?void 0:s.bytesValue;return typeof o=="string"?T.newValue({integerValue:Ge.fromBase64String(o).toUint8Array().length}):T.newValue({integerValue:new Uint8Array(o).length})}case"STRING":{const o=function(c){let u=0;for(let h=0;h<c.length;h++){const d=c.codePointAt(h);if(d===void 0)return;if(d>=55296&&d<=57343){if(!(d<=56319))return;{const p=c.codePointAt(h+1);if(p===void 0||!(p>=56320&&p<=57343))return;u+=4,h++}}else if(d<=127)u+=1;else if(d<=2047)u+=2;else if(d<=65535)u+=3;else{if(!(d<=1114111))return;u+=4,h++}}return u}((i=n.value)==null?void 0:i.stringValue);return o===void 0?T.mr():T.newValue({integerValue:o})}case"NULL":return T.gr();default:return T.mr()}}}class ps{constructor(e){this.expr=e}evaluate(e,t){var o,B;Q(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let n=!1;const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":n=!0;break;default:return T.mr()}const i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":n=!0;break;default:return T.mr()}return n?T.gr():this.Or((o=s.value)==null?void 0:o.stringValue,(B=i.value)==null?void 0:B.stringValue)}}class qR extends ps{Or(e,t){try{const n=function(o){let B="";for(let c=0;c<o.length;c++){const u=o.charAt(c);switch(u){case"_":B+=".";break;case"%":B+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":B+="\\"+u;break;default:B+=u}}return"^"+B+"$"}(t),s=tu.compile(n);return T.newValue({booleanValue:s.matches(e)})}catch(n){return Ut(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${n}`),T.mr()}}}class KR extends ps{Or(e,t){try{const n=tu.compile(t);return T.newValue({booleanValue:n.test(e)})}catch{return Ut(`Invalid regex pattern found in regex_contains: ${t}, returning error`),T.mr()}}}class $R extends ps{Or(e,t){try{return T.newValue({booleanValue:tu.compile(t).matches(e)})}catch{return Ut(`Invalid regex pattern found in regex_match: ${t}, returning error`),T.mr()}}}class zR extends ps{Or(e,t){return T.newValue({booleanValue:e.includes(t)})}}class WR extends ps{Or(e,t){return T.newValue({booleanValue:e.startsWith(t)})}}class QR extends ps{Or(e,t){return T.newValue({booleanValue:e.endsWith(t)})}}class YR{constructor(e){this.expr=e}evaluate(e,t){var s,i;Q(this.expr.params.length===1,29079);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return T.newValue({stringValue:(i=(s=n.value)==null?void 0:s.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return T.gr();default:return T.mr()}}}class XR{constructor(e){this.expr=e}evaluate(e,t){var s,i;Q(this.expr.params.length===1,60487);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return T.newValue({stringValue:(i=(s=n.value)==null?void 0:s.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return T.gr();default:return T.mr()}}}class ZR{constructor(e){this.expr=e}evaluate(e,t){var s,i;Q(this.expr.params.length===1,28544);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return T.newValue({stringValue:(i=(s=n.value)==null?void 0:s.stringValue)==null?void 0:i.trim()});case"NULL":return T.gr();default:return T.mr()}}}class ev{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map(o=>te(o).evaluate(e,t));let s="",i=!1;for(const o of n)switch(o.type){case"STRING":s+=o.value.stringValue;break;case"NULL":i=!0;break;default:return T.mr()}return i?T.gr():T.newValue({stringValue:s})}}class tv{constructor(e){this.expr=e}evaluate(e,t){var o,B,c,u;Q(this.expr.params.length===2,4483);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"UNSET":return T.pr();case"MAP":break;default:return T.mr()}const s=te(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return T.mr();const i=(u=(B=(o=n.value)==null?void 0:o.mapValue)==null?void 0:B.fields)==null?void 0:u[(c=s.value)==null?void 0:c.stringValue];return i===void 0?T.pr():T.newValue(i)}}class yu{constructor(e){this.expr=e}evaluate(e,t){var u,h;Q(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let n=!1;const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":n=!0;break;default:return T.mr()}const i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":n=!0;break;default:return T.mr()}if(n)return T.gr();const o=lc(s.value),B=lc(i.value);if(o===void 0||B===void 0||((u=o.values)==null?void 0:u.length)!==((h=B.values)==null?void 0:h.length))return T.mr();const c=this.Mr(o,B);return c===void 0||isNaN(c)?T.mr():T.newValue({doubleValue:c})}}class nv extends yu{Mr(e,t){const n=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(n.length===0)return;let i=0,o=0,B=0;for(let u=0;u<n.length;u++){if(!zn(n[u])||!zn(s[u]))return;const h=Ye(n[u]),d=Ye(s[u]);i+=h*d,o+=h*h,B+=d*d}const c=Math.sqrt(o)*Math.sqrt(B);if(c!==0)return 1-Math.max(-1,Math.min(1,i/c))}}class rv extends yu{Mr(e,t){const n=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!zn(n[o])||!zn(s[o]))return;i+=Ye(n[o])*Ye(s[o])}return i}}class sv extends yu{Mr(e,t){const n=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!zn(n[o])||!zn(s[o]))return;const B=Ye(n[o]),c=Ye(s[o]);i+=Math.pow(B-c,2)}return Math.sqrt(i)}}class iv{constructor(e){this.expr=e}evaluate(e,t){var s;Q(this.expr.params.length===1,39044);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"VECTOR":{const i=lc(n.value);return T.newValue({integerValue:((s=i==null?void 0:i.values)==null?void 0:s.length)??0})}case"NULL":return T.gr();default:return T.mr()}}}const Ci=BigInt(-62135596800),pi=BigInt(253402300799),Yo=BigInt(1e3),Un=BigInt(1e6),ov=Ci*Yo,av=pi*Yo+BigInt(999),Bv=Ci*Un,cv=pi*Un+BigInt(999999);function Iu(r){return r>=Bv&&r<=cv}function wg(r){return r>=Ci&&r<=pi}function gi(r,e){const t=BigInt(r);return!(t<Ci||t>pi)&&!(e<0||e>=1e9)&&(t!==Ci||e===0)&&!(t===pi&&e>999999999)}function yg(r,e){return e<0?{seconds:r-1,nanos:e+1e9}:{seconds:r,nanos:e}}function Tu(r){return BigInt(r.seconds)*Un+BigInt(Math.trunc(r.nanoseconds/1e3))}class Au{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return this.toTimestamp(BigInt(n.value.integerValue));case"NULL":return T.gr();default:return T.mr()}}}class uv extends Au{toTimestamp(e){if(!Iu(e))return T.mr();let t=Number(e/Un),n=Number(e%Un*BigInt(1e3));const s=yg(t,n);return t=s.seconds,n=s.nanos,gi(t,n)?T.newValue({timestampValue:{seconds:t,nanos:n}}):T.mr()}}class lv extends Au{toTimestamp(e){if(!function(o){return o>=ov&&o<=av}(e))return T.mr();let t=Number(e/Yo),n=Number(e%Yo*BigInt(1e6));const s=yg(t,n);return t=s.seconds,n=s.nanos,gi(t,n)?T.newValue({timestampValue:{seconds:t,nanos:n}}):T.mr()}}class hv extends Au{toTimestamp(e){if(!wg(e))return T.mr();const t=Number(e);return T.newValue({timestampValue:{seconds:t,nanos:0}})}}class Ru{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"TIMESTAMP":break;case"NULL":return T.gr();default:return T.mr()}const s=lu(n.value.timestampValue);return gi(s.seconds,s.nanoseconds)?this.Nr(s):T.mr()}}class fv extends Ru{Nr(e){const t=Tu(e);return Iu(t)?T.newValue({integerValue:`${t.toString()}`}):T.mr()}}class dv extends Ru{Nr(e){const t=Tu(e),n=t/BigInt(1e3),s=t%BigInt(1e3);return n>BigInt(0)||s===BigInt(0)?T.newValue({integerValue:n.toString()}):T.newValue({integerValue:(n-BigInt(1)).toString()})}}class Cv extends Ru{Nr(e){const t=BigInt(e.seconds);return wg(t)?T.newValue({integerValue:t.toString()}):T.mr()}}class Ig{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let n=!1;const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":n=!0;break;default:return T.mr()}const i=te(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=function(W){switch(W){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(i.value.stringValue),o===void 0)return T.mr();break;case"NULL":n=!0;break;default:return T.mr()}const B=te(this.expr.params[2]).evaluate(e,t);switch(B.type){case"INT":break;case"NULL":n=!0;break;default:return T.mr()}if(n)return T.gr();const c=BigInt(B.value.integerValue);let u;try{switch(o){case"microsecond":u=c;break;case"millisecond":u=c*BigInt(1e3);break;case"second":u=c*BigInt(1e6);break;case"minute":u=c*BigInt(6e7);break;case"hour":u=c*BigInt(36e8);break;case"day":u=c*BigInt(864e8);break;default:return T.mr()}if(o!=="microsecond"&&c!==BigInt(0)&&u/c!==BigInt(this.Lr(o)))return T.mr()}catch(H){return Ut(`Error during timestamp arithmetic: ${H}`),T.mr()}const h=lu(s.value.timestampValue);if(!gi(h.seconds,h.nanoseconds))return T.mr();const d=Tu(h),p=this.Br(d,u);if(!Iu(p))return T.mr();const E=Number(p/Un),_=p%Un,S=Number((_<0?_+Un:_)*BigInt(1e3)),L=_<0?E-1:E;return gi(L,S)?T.newValue({timestampValue:{seconds:L,nanos:S}}):T.mr()}Lr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class pv extends Ig{Br(e,t){return e+t}}class gv extends Ig{Br(e,t){return e-t}}function mi(r){if((r=_g(r))instanceof fs)return`fld(${r.fieldName})`;if(r instanceof ds)return`cst(${function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof qe?`ref(${t.path})`:t instanceof pt?`vec(${JSON.stringify(t)})`:JSON.stringify(t)}(r.value)})`;if(r instanceof F)return`fn(${r.name},[${r.params.map(mi).join(",")}])`;if(r.expressionType==="ListOfExpressions")return`list([${r.cr.map(mi).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(r,null,2)}`)}function mv(r){if(r instanceof gg)return`${r._name}(${Co(r.fields)})`;if(r instanceof mg){let e=`${r._name}(${Co(r.accumulators)})`;return r.groups.size>0&&(e+=`grouping(${Co(r.groups)})`),e}if(r instanceof Eg)return`${r._name}(${Co(r.groups)})`;if(r instanceof ya)return`${r._name}(${r.hr})`;if(r instanceof Ia)return`${r._name}(${r.collectionId})`;if(r instanceof mu)return`${r._name}()`;if(r instanceof Eu)return`${r._name}(${r.Tr.sort()})`;if(r instanceof Ta)return`${r._name}(${mi(r.condition)})`;if(r instanceof Rr)return`${r._name}(${r.limit})`;if(r instanceof un)return`${r._name}(${function(t){return t.map(n=>`${mi(n.expr)}${n.direction}`).join(",")}(r.orderings)})`;throw new Error(`Unrecognized stage ${r._name}`)}function Co(r){return`${Array.from(r.entries()).sort().map(([e,t])=>`${e}=${mi(t)}`).join(",")}`}function hn(r){return r.stages.map(e=>mv(e)).join("|")}function Tg(r,e){return hn(r)===hn(e)}function Je(r){return r instanceof at}function od(r){return Je(r)?hn(r):Ks(r)}function Ag(r){return Je(r)?hn(r):function(t){return`${Np(Xt(t))}|lt:${t.limitType}`}(r)}function va(r,e){return r instanceof at&&e instanceof at?Tg(r,e):!(r instanceof at&&!(e instanceof at)||!(r instanceof at)&&e instanceof at)&&LT(r,e)}function Rg(r){return hr(r)?hn(r):Np(r)}function vg(r,e){return r instanceof at&&e instanceof at?Tg(r,e):!(r instanceof at&&!(e instanceof at)||!(r instanceof at)&&e instanceof at)&&Lp(r,e)}function Ev(r,e){const t=function(s){let i=!1;const o=[];for(const B of s)if(B instanceof un)if(i=!0,B.orderings.some(c=>c.expr instanceof fs&&c.expr.fieldName===$t))o.push(B);else{const c=B.orderings.map(u=>u);c.push(vo($t).ascending()),o.push(new un(c,{}))}else B instanceof Rr&&(i||(o.push(new un([vo($t).ascending()],{})),i=!0)),o.push(B);return i||o.push(new un([vo($t).ascending()],{})),o}(r.stages);if(r.userDataReader){const n=r.userDataReader.createContext(3,"toCorePipeline");t.forEach(s=>s._readUserData(n))}return new at(r.userDataReader.serializer,t,e)}/**
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
 */class _v{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&dT(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Js(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Js(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Hp();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let B=this.applyToLocalView(o,i.mutatedFields);B=t.has(s.key)?null:B;const c=Tp(o,B);c!==null&&n.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ie.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ce())}isEqual(e){return this.batchId===e.batchId&&es(this.mutations,e.mutations,(t,n)=>Mf(t,n))&&es(this.baseMutations,e.baseMutations,(t,n)=>Mf(t,n))}}class vu{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){Q(e.mutations.length===n.length,58842,{Ur:e.mutations.length,kr:n.length});let s=function(){return VT}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new vu(e,t,n,s)}}/**
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
 */const bg="";function Dv(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=ad(e)),e=wv(r.get(t),e);return ad(e)}function wv(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case bg:t+="";break;default:t+=i}}return t}function ad(r){return r+bg+""}/**
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
 */class yv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ln{constructor(e,t,n,s,i=ie.min(),o=ie.min(),B=Ge.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=B,this.expectedCount=c}withSequenceNumber(e){return new ln(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ln(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Iv{constructor(e){this.$r=e}}function Tv(r){const e=nA({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?dc(e,e.limit,"L"):e}/**
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
 */class Av{constructor(){this.Zi=new Rv}addToCollectionParentIndex(e,t){return this.Zi.add(t),x.resolve()}getCollectionParents(e,t){return x.resolve(this.Zi.getEntries(t))}addFieldIndex(e,t){return x.resolve()}deleteFieldIndex(e,t){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,t){return x.resolve()}getDocumentsMatchingTarget(e,t){return x.resolve(null)}getIndexType(e,t){return x.resolve(0)}getFieldIndexes(e,t){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,t){return x.resolve(Wn.min())}getMinOffsetFromCollectionGroup(e,t){return x.resolve(Wn.min())}updateCollectionGroup(e,t,n){return x.resolve()}updateIndexEntries(e,t){return x.resolve()}}class Rv{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new Ve(ge.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new Ve(ge.comparator)).toArray()}}/**
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
 */class Xn{constructor(e){this.ys=e}next(){return this.ys+=2,this.ys}static ws(){return new Xn(0)}static bs(){return new Xn(-1)}}// Copyright 2024 Google LLC* @license
function Sg(r,e){var n;let t=e;for(const s of r.stages)t=bv({serializer:r.serializer,serverTimestampBehavior:(n=r.listenOptions)==null?void 0:n.serverTimestampBehavior},s,t);return t}function ba(r,e){return Sg(r,[e]).length>0}function vv(r,e){return Je(r)?ba(r,e):Ea(r,e)}function bv(r,e,t){if(e instanceof ya)return function(s,i,o){return o.filter(B=>B.isFoundDocument()&&`/${B.key.getCollectionPath().canonicalString()}`===i.hr)}(0,e,t);if(e instanceof Ta)return function(s,i,o){return o.filter(B=>{const c=Qs(te(i.condition).evaluate(s,B));return c!==void 0&&kt(c,gt)})}(r,e,t);if(e instanceof Ia)return function(s,i,o){return o.filter(B=>B.isFoundDocument()&&B.key.getCollectionPath().lastSegment()===i.collectionId)}(0,e,t);if(e instanceof mu)return function(s,i,o){return o.filter(B=>B.isFoundDocument())}(0,0,t);if(e instanceof Eu)return function(s,i,o){return o.filter(B=>B.isFoundDocument()&&i.Pr.has(B.key.path.toStringWithLeadingSlash()))}(0,e,t);if(e instanceof Rr)return function(s,i,o){return o.slice(0,i.limit)}(0,e,t);if(e instanceof un)return function(s,i,o){const B=i.orderings.map(c=>({Ms:te(c.expr),direction:c.direction}));return[...o].sort((c,u)=>{for(const{Ms:h,direction:d}of B){const p=Qs(h.evaluate(s,c)),E=Qs(h.evaluate(s,u)),_=mt(p??ns,E??ns);if(_!==0)return d==="ascending"?_:-_}return 0})}(r,e,t);throw new Error(`Unknown stage: ${e._name}`)}function _c(r){const e=function(n){for(let s=n.stages.length-1;s>=0;s--){const i=n.stages[s];if(i instanceof un)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(r);return(t,n)=>{for(const s of e){const i=Qs(te(s.expr).evaluate({serializer:r.serializer},t)),o=Qs(te(s.expr).evaluate({serializer:r.serializer},n)),B=mt(i||ns,o||ns);if(B!==0)return s.direction==="ascending"?B:-B}return 0}}function PB(r){for(let e=r.stages.length-1;e>=0;e--){const t=r.stages[e];if(t instanceof Rr)return{limit:t.limit}}}/**
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
 */class Sv{constructor(){this.changes=new Or(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?x.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Pv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Ov{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&Js(n.mutation,s,Ht.empty(),_e.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,ce()).next(()=>n))}getLocalViewOfDocuments(e,t,n=ce()){const s=Nn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let o=jr();return i.forEach((B,c)=>{o=o.insert(B,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=Nn();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,ce()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,B)=>{t.set(o,B)})})}computeViews(e,t,n,s){let i=dt();const o=$s(),B=function(){return $s()}();return t.forEach((c,u)=>{const h=n.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof Pr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Js(h.mutation,u,h.mutation.getFieldMask(),_e.now())):o.set(u.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),t.forEach((u,h)=>B.set(u,new Pv(h,o.get(u)??null))),B))}recalculateAndSaveOverlays(e,t){const n=$s();let s=new Re((o,B)=>o-B),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const B of o)B.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let h=n.get(c)||Ht.empty();h=B.applyToLocalView(u,h),n.set(c,h);const d=(s.get(B.batchId)||ce()).add(c);s=s.insert(B.batchId,d)})}).next(()=>{const o=[],B=s.getReverseIterator();for(;B.hasNext();){const c=B.getNext(),u=c.key,h=c.value,d=Hp();h.forEach(p=>{if(!i.has(p)){const E=Tp(t.get(p),n.get(p));E!==null&&d.set(p,E),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return x.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return Je(t)?this.getDocumentsMatchingPipeline(e,t,n,s):PT(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Mp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):x.resolve(Nn());let B=hi,c=i;return o.next(u=>x.forEach(u,(h,d)=>(B<d.largestBatchId&&(B=d.largestBatchId),i.get(h)?x.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ce())).next(h=>({batchId:B,changes:Gp(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Y(t)).next(n=>{let s=jr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=jr();return this.indexManager.getCollectionParents(e,i).next(B=>x.forEach(B,c=>{const u=function(d,p){return new us(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,n,s).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(o=>this.retrieveMatchingLocalDocuments(i,o,B=>Ea(t,B)))}getDocumentsMatchingPipeline(e,t,n,s){if(Hn(t)==="collection_group"){const i=Du(t);let o=jr();return this.indexManager.getCollectionParents(e,i).next(B=>x.forEach(B,c=>{const u=function(d,p){const E=d.stages.map(_=>_ instanceof Ia?new ya(p.canonicalString(),{}):_);return new at(d.serializer,E)}(t,c.child(i));return this.getDocumentsMatchingPipeline(e,u,n,s).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}{let i;return this.getOverlaysForPipeline(e,t,n.largestBatchId).next(o=>{switch(i=o,Hn(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s);case"documents":let B=ce();for(const c of Ec(t))B=B.add(Y.fromPath(c));return this.remoteDocumentCache.getEntries(e,B);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new K("invalid-argument",`Invalid pipeline source to execute offline: ${hn(t)}`)}}).next(o=>this.retrieveMatchingLocalDocuments(i,o,B=>ba(t,B)))}}retrieveMatchingLocalDocuments(e,t,n){e.forEach((i,o)=>{const B=o.getKey();t.get(B)===null&&(t=t.insert(B,nt.newInvalidDocument(B)))});let s=jr();return t.forEach((i,o)=>{const B=e.get(i);B!==void 0&&Js(B.mutation,o,Ht.empty(),_e.now()),n(o)&&(s=s.insert(i,o))}),s}getOverlaysForPipeline(e,t,n){switch(Hn(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,ge.fromString(Aa(t)),n);case"collection_group":throw new K("invalid-argument",`Unexpected collection group pipeline: ${hn(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,Ec(t).map(s=>Y.fromPath(s)));case"database":return this.documentOverlayCache.getAllOverlays(e,n);default:throw new K("invalid-argument",`Failed to get overlays for pipeline: ${hn(t)}`)}}}/**
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
 */class Nv{constructor(e){this.serializer=e,this.Qs=new Map,this.Ws=new Map}getBundleMetadata(e,t){return x.resolve(this.Qs.get(t))}saveBundleMetadata(e,t){return this.Qs.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Zt(s.createTime)}}(t)),x.resolve()}getNamedQuery(e,t){return x.resolve(this.Ws.get(t))}saveNamedQuery(e,t){return this.Ws.set(t.name,function(s){return{name:s.name,query:Tv(s.bundledQuery),readTime:Zt(s.readTime)}}(t)),x.resolve()}}/**
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
 */class Lv{constructor(){this.overlays=new Re(Y.comparator),this.Gs=new Map}getOverlay(e,t){return x.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Nn();return x.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}getAllOverlays(e,t){const n=Nn();return this.overlays.forEach((s,i)=>{i.largestBatchId>t&&n.set(s,i)}),x.resolve(n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.Zr(e,t,i)}),x.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Gs.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Gs.delete(n)),x.resolve()}getOverlaysForCollection(e,t,n){const s=Nn(),i=t.length+1,o=new Y(t.child("")),B=this.overlays.getIteratorFrom(o);for(;B.hasNext();){const c=B.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>n&&s.set(c.getKey(),c)}return x.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new Re((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>n){let h=i.get(u.largestBatchId);h===null&&(h=Nn(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const B=Nn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>B.set(u,h)),!(B.size()>=s)););return x.resolve(B)}Zr(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Gs.get(s.largestBatchId).delete(n.key);this.Gs.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new yv(t,n));let i=this.Gs.get(t);i===void 0&&(i=ce(),this.Gs.set(t,i)),this.Gs.set(t,i.add(n.key))}}/**
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
 */class Fv{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,x.resolve()}}/**
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
 */class bu{constructor(){this.zs=new Ve(ze.js),this.Hs=new Ve(ze.Js)}isEmpty(){return this.zs.isEmpty()}addReference(e,t){const n=new ze(e,t);this.zs=this.zs.add(n),this.Hs=this.Hs.add(n)}Ys(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Zs(new ze(e,t))}Xs(e,t){e.forEach(n=>this.removeReference(n,t))}e_(e){const t=new Y(new ge([])),n=new ze(t,e),s=new ze(t,e+1),i=[];return this.Hs.forEachInRange([n,s],o=>{this.Zs(o),i.push(o.key)}),i}t_(){this.zs.forEach(e=>this.Zs(e))}Zs(e){this.zs=this.zs.delete(e),this.Hs=this.Hs.delete(e)}n_(e){const t=new Y(new ge([])),n=new ze(t,e),s=new ze(t,e+1);let i=ce();return this.Hs.forEachInRange([n,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new ze(e,0),n=this.zs.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class ze{constructor(e,t){this.key=e,this.r_=t}static js(e,t){return Y.comparator(e.key,t.key)||le(e.r_,t.r_)}static Js(e,t){return le(e.r_,t.r_)||Y.comparator(e.key,t.key)}}/**
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
 */class kv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Gr=1,this.i_=new Ve(ze.js)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Gr;this.Gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _v(i,t,n,s);this.mutationQueue.push(o);for(const B of s)this.i_=this.i_.add(new ze(B.key,i)),this.indexManager.addToCollectionParentIndex(e,B.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,t){return x.resolve(this.s_(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.__(n),i=s<0?0:s;return x.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?su:this.Gr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ze(t,0),s=new ze(t,Number.POSITIVE_INFINITY),i=[];return this.i_.forEachInRange([n,s],o=>{const B=this.s_(o.r_);i.push(B)}),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ve(le);return t.forEach(s=>{const i=new ze(s,0),o=new ze(s,Number.POSITIVE_INFINITY);this.i_.forEachInRange([i,o],B=>{n=n.add(B.r_)})}),x.resolve(this.o_(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;Y.isDocumentKey(i)||(i=i.child(""));const o=new ze(new Y(i),0);let B=new Ve(le);return this.i_.forEachWhile(c=>{const u=c.key.path;return!!n.isPrefixOf(u)&&(u.length===s&&(B=B.add(c.r_)),!0)},o),x.resolve(this.o_(B))}o_(e){const t=[];return e.forEach(n=>{const s=this.s_(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Q(this.a_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.i_;return x.forEach(t.mutations,s=>{const i=new ze(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.i_=n})}Hr(e){}containsKey(e,t){const n=new ze(t,0),s=this.i_.firstAfterOrEqual(n);return x.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}a_(e,t){return this.__(e)}__(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}s_(e){const t=this.__(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Mv{constructor(e){this.u_=e,this.docs=function(){return new Re(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.u_(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return x.resolve(n?n.document.mutableCopy():nt.newInvalidDocument(t))}getEntries(e,t){let n=dt();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():nt.newInvalidDocument(s))}),x.resolve(n)}getAllEntries(e){let t=dt();return this.docs.forEach((n,s)=>{t=t.insert(n,s.document)}),x.resolve(t)}getDocumentsMatchingQuery(e,t,n,s){let i,o;Je(t)?(i=ge.fromString(Aa(t)),o=h=>ba(t,h)):(i=t.path,o=h=>Ea(t,h));let B=dt();const c=new Y(i.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:d}}=u.getNext();if(!i.isPrefixOf(h.path))break;h.path.length>i.length+1||vT(RT(d),n)<=0||(s.has(d.key)||o(d))&&(B=B.insert(d.key,d.mutableCopy()))}return x.resolve(B)}getAllFromCollectionGroup(e,t,n,s){Z(9500)}c_(e,t){return x.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new xv(this)}getSize(e){return x.resolve(this.size)}}class xv extends Sv{constructor(e){super(),this.$s=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.$s.addEntry(e,s)):this.$s.removeEntry(n)}),x.waitFor(t)}getFromCache(e,t){return this.$s.getEntry(e,t)}getAllFromCache(e,t){return this.$s.getEntries(e,t)}}/**
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
 */class Vv{constructor(e){this.persistence=e,this.l_=new Or(t=>Rg(t),vg),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.E_=0,this.h_=new bu,this.targetCount=0,this.T_=Xn.ws()}forEachTarget(e,t){return this.l_.forEach((n,s)=>t(s)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.E_)}allocateTargetId(e){return this.highestTargetId=this.T_.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.E_&&(this.E_=t),x.resolve()}Ds(e){this.l_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.T_=new Xn(t),this.highestTargetId=t),e.sequenceNumber>this.E_&&(this.E_=e.sequenceNumber)}addTargetData(e,t){return this.Ds(t),this.targetCount+=1,x.resolve()}updateTargetData(e,t){return this.Ds(t),x.resolve()}removeTargetData(e,t){return this.l_.delete(t.target),this.h_.e_(t.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.l_.forEach((o,B)=>{B.sequenceNumber<=t&&n.get(B.targetId)===null&&(this.l_.delete(o),i.push(this.removeMatchingKeysForTargetId(e,B.targetId)),s++)}),x.waitFor(i).next(()=>s)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,t){const n=this.l_.get(t)||null;return x.resolve(n)}addMatchingKeys(e,t,n){return this.h_.Ys(t,n),x.resolve()}removeMatchingKeys(e,t,n){this.h_.Xs(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),x.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.h_.e_(t),x.resolve()}getMatchingKeysForTargetId(e,t){const n=this.h_.n_(t);return x.resolve(n)}containsKey(e,t){return x.resolve(this.h_.containsKey(t))}}/**
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
 */class Pg{constructor(e,t){this.P_={},this.overlays={},this.I_=new Da(0),this.R_=!1,this.R_=!0,this.A_=new Fv,this.referenceDelegate=e(this),this.V_=new Vv(this),this.indexManager=new Av,this.remoteDocumentCache=function(s){return new Mv(s)}(n=>this.referenceDelegate.d_(n)),this.serializer=new Iv(t),this.f_=new Nv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Lv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.P_[e.toKey()];return n||(n=new kv(t,this.referenceDelegate),this.P_[e.toKey()]=n),n}getGlobalsCache(){return this.A_}getTargetCache(){return this.V_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.f_}runTransaction(e,t,n){z("MemoryPersistence","Starting transaction:",e);const s=new Gv(this.I_.next());return this.referenceDelegate.m_(),n(s).next(i=>this.referenceDelegate.p_(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}g_(e,t){return x.or(Object.values(this.P_).map(n=>()=>n.containsKey(e,t)))}}class Gv extends bA{constructor(e){super(),this.currentSequenceNumber=e}}class Su{constructor(e){this.persistence=e,this.y_=new bu,this.w_=null}static b_(e){return new Su(e)}get S_(){if(this.w_)return this.w_;throw Z(60996)}addReference(e,t,n){return this.y_.addReference(n,t),this.S_.delete(n.toString()),x.resolve()}removeReference(e,t,n){return this.y_.removeReference(n,t),this.S_.add(n.toString()),x.resolve()}markPotentiallyOrphaned(e,t){return this.S_.add(t.toString()),x.resolve()}removeTarget(e,t){this.y_.e_(t.targetId).forEach(s=>this.S_.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.S_.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}m_(){this.w_=new Set}p_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.S_,n=>{const s=Y.fromPath(n);return this.v_(e,s).next(i=>{i||t.removeEntry(s,ie.min())})}).next(()=>(this.w_=null,t.apply(e)))}updateLimboDocument(e,t){return this.v_(e,t).next(n=>{n?this.S_.delete(t.toString()):this.S_.add(t.toString())})}d_(e){return 0}v_(e,t){return x.or([()=>x.resolve(this.y_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.g_(e,t)])}}class Xo{constructor(e,t){this.persistence=e,this.D_=new Or(n=>Dv(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=FA(this,t)}static b_(e,t){return new Xo(e,t)}m_(){}p_(e){return x.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}ir(e){const t=this.Cs(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}Cs(e){let t=0;return this.sr(e,n=>{t++}).next(()=>t)}sr(e,t){return x.forEach(this.D_,(n,s)=>this.Os(e,n,s).next(i=>i?x.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.c_(e,o=>this.Os(e,o,t).next(B=>{B||(n++,i.removeEntry(o,ie.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.D_.set(t,e.currentSequenceNumber),x.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.D_.set(n,e.currentSequenceNumber),x.resolve()}removeReference(e,t,n){return this.D_.set(n,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,t){return this.D_.set(t,e.currentSequenceNumber),x.resolve()}d_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Io(e.data.value)),t}Os(e,t,n){return x.or([()=>this.persistence.g_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.D_.get(t);return x.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Pu{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Vo=n,this.fo=s}static mo(e,t){let n=ce(),s=ce();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Pu(e,t.fromCache,n,s)}}/**
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
 */function Hv(r,e){return Y.comparator(r.key,e.key)}/**
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
 */class Uv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class jv{constructor(){this.po=!1,this.yo=!1,this.wo=100,this.bo=function(){return AE()?8:SA(rt())>0?6:4}()}initialize(e,t){this.So=e,this.indexManager=t,this.po=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.vo(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Do(e,t,s,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Uv;return this.xo(e,t,o).next(B=>{if(i.result=B,this.yo)return this.Co(e,t,o,B.size)})}).next(()=>i.result)}Co(e,t,n,s){return Je(t)?x.resolve():n.documentReadCount<this.wo?(Hr()<=ue.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Ks(t),"since it only creates cache indexes for collection contains","more than or equal to",this.wo,"documents"),x.resolve()):(Hr()<=ue.DEBUG&&z("QueryEngine","Query:",Ks(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.bo*s?(Hr()<=ue.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Ks(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xt(t))):x.resolve())}vo(e,t){if(Je(t))return x.resolve(null);let n=t;if(jf(n))return x.resolve(null);let s=Xt(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=dc(n,null,"F"),s=Xt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(o=>{const B=ce(...o);return this.So.getDocuments(e,B).next(c=>this.indexManager.getMinOffset(e,s).next(u=>{const h=this.Fo(n,c);return this.Oo(n,h,B,u.readTime)?this.vo(e,dc(n,null,"F")):this.Mo(e,h,n,u)}))})))}Do(e,t,n,s){return(Je(t)?function(o){for(const B of o.stages){if(B instanceof Rr||B instanceof id)return!1;if(B instanceof Ta){if(B.condition instanceof dg&&B.condition._expr.name==="exists"&&B.condition._expr.params[0]instanceof fs&&B.condition._expr.params[0].fieldName===$t)continue;return!1}}return!0}(t):jf(t))||s.isEqual(ie.min())?x.resolve(null):this.So.getDocuments(e,n).next(i=>{const o=this.Fo(t,i);return this.Oo(t,o,n,s)?x.resolve(null):(Hr()<=ue.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),od(t)),this.Mo(e,o,t,AT(s,hi)).next(B=>B))})}Fo(e,t){let n,s;return Je(e)?(n=new Ve(Hv),s=i=>ba(e,i)):(n=new Ve(cu(e)),s=i=>Ea(e,i)),t.forEach((i,o)=>{s(o)&&(n=n.add(o))}),n}Oo(e,t,n,s){if(Je(e))return function(B){return B.stages.some(c=>c instanceof Rr||c instanceof id)}(e);if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}xo(e,t,n){return Hr()<=ue.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",od(t)),this.So.getDocumentsMatchingQuery(e,t,Wn.min(),n)}Mo(e,t,n,s){return this.So.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Ou="LocalStore",Jv=3e8;class qv{constructor(e,t,n,s){this.persistence=e,this.No=t,this.serializer=s,this.Lo=new Re(le),this.Bo=new Or(i=>Rg(i),vg),this.Uo=new Map,this.ko=e.getRemoteDocumentCache(),this.V_=e.getTargetCache(),this.f_=e.getBundleCache(),this.qo(n)}qo(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ov(this.ko,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ko.setIndexManager(this.indexManager),this.No.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Lo))}}function Kv(r,e,t,n){return new qv(r,e,t,n)}async function Og(r,e){const t=oe(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.qo(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],B=[];let c=ce();for(const u of s){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){B.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return t.localDocuments.getDocuments(n,c).next(u=>({$o:u,removedBatchIds:o,addedBatchIds:B}))})})}function $v(r,e){const t=oe(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.ko.newChangeBuffer({trackRemovals:!0});return function(B,c,u,h){const d=u.batch,p=d.keys();let E=x.resolve();return p.forEach(_=>{E=E.next(()=>h.getEntry(c,_)).next(S=>{const L=u.docVersions.get(_);Q(L!==null,48541),S.version.compareTo(L)<0&&(d.applyToRemoteDocument(S,u),S.isValidDocument()&&(S.setReadTime(u.commitVersion),h.addEntry(S)))})}),E.next(()=>B.mutationQueue.removeMutationBatch(c,d))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(B){let c=ce();for(let u=0;u<B.mutationResults.length;++u)B.mutationResults[u].transformResults.length>0&&(c=c.add(B.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function Ng(r){const e=oe(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.V_.getLastRemoteSnapshotVersion(t))}function zv(r,e){const t=oe(r),n=e.snapshotVersion;let s=t.Lo;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.ko.newChangeBuffer({trackRemovals:!0});s=t.Lo;const B=[];e.targetChanges.forEach((h,d)=>{const p=s.get(d);if(!p)return;B.push(t.V_.removeMatchingKeys(i,h.removedDocuments,d).next(()=>t.V_.addMatchingKeys(i,h.addedDocuments,d)));let E=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?E=E.withResumeToken(Ge.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):h.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(h.resumeToken,n)),s=s.insert(d,E),function(S,L,H){return S.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=Jv?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(p,E,h)&&B.push(t.V_.updateTargetData(i,E))});let c=dt(),u=ce();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&B.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),B.push(Wv(i,o,e.documentUpdates).next(h=>{c=h.Ko,u=h.Qo})),!n.isEqual(ie.min())){const h=t.V_.getLastRemoteSnapshotVersion(i).next(d=>t.V_.setTargetsMetadata(i,i.currentSequenceNumber,n));B.push(h)}return x.waitFor(B).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.Lo=s,i))}function Wv(r,e,t){let n=ce(),s=ce();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let o=dt();return t.forEach((B,c)=>{const u=i.get(B);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(B)),c.isNoDocument()&&c.version.isEqual(ie.min())?(e.removeEntry(B,c.readTime),o=o.insert(B,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(B,c)):z(Ou,"Ignoring outdated watch update for ",B,". Current version:",u.version," Watch version:",c.version)}),{Ko:o,Qo:s}})}function Qv(r,e){const t=oe(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=su),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function Yv(r,e){const t=oe(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.V_.getTargetData(n,e).next(i=>i?(s=i,x.resolve(s)):t.V_.allocateTargetId(n).next(o=>(s=new ln(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.V_.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.Lo.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Lo=t.Lo.insert(n.targetId,n),t.Bo.set(e,n.targetId)),n})}async function Dc(r,e,t){const n=oe(r),s=n.Lo.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!hs(o))throw o;z(Ou,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Lo=n.Lo.remove(e),n.Bo.delete(s.target)}function Bd(r,e,t){const n=oe(r);let s=ie.min(),i=ce();return n.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const d=oe(c),p=d.Bo.get(h);return p!==void 0?x.resolve(d.Lo.get(p)):d.V_.getTargetData(u,h)}(n,o,Je(e)?e:Xt(e)).next(B=>{if(B)return s=B.lastLimboFreeSnapshotVersion,n.V_.getMatchingKeysForTargetId(o,B.targetId).next(c=>{i=c})}).next(()=>n.No.getDocumentsMatchingQuery(o,e,t?s:ie.min(),t?i:ce())).next(B=>(Xv(n,B),{documents:B,Wo:i})))}function Xv(r,e){e.forEach((t,n)=>{const s=n.key.getCollectionGroup(),i=r.Uo.get(s)||ie.min();n.readTime.compareTo(i)>0&&r.Uo.set(s,n.readTime)})}/**
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
 */class Zv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Yo=0,this.Zo=null,this.Xo=!0}ea(){this.Yo===0&&(this.ta("Unknown"),this.Zo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Zo=null,this.na("Backend didn't respond within 10 seconds."),this.ta("Offline"),Promise.resolve())))}ra(e){this.state==="Online"?this.ta("Unknown"):(this.Yo++,this.Yo>=1&&(this.ia(),this.na(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ta("Offline")))}set(e){this.ia(),this.Yo=0,e==="Online"&&(this.Xo=!1),this.ta(e)}ta(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}na(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Xo?(pn(t),this.Xo=!1):z("OnlineStateTracker",t)}ia(){this.Zo!==null&&(this.Zo.cancel(),this.Zo=null)}}/**
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
 */const rn="RemoteStore";class eb{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.sa=[],this._a=new Map,this.oa=new Map,this.aa=new Map,this.ua=new Xn(1e3),this.ca=new Xn(1001),this.la=new Set,this.Ea=[],this.ha=i,this.ha.Qe(o=>{n.enqueueAndForget(async()=>{Fr(this)&&(z(rn,"Restarting streams for network reachability change."),await async function(c){const u=oe(c);u.la.add(4),await Fi(u),u.Ta.set("Unknown"),u.la.delete(4),await Sa(u)}(this))})}),this.Ta=new Zv(n,s)}}async function Sa(r){if(Fr(r))for(const e of r.Ea)await e(!0)}async function Fi(r){for(const e of r.Ea)await e(!1)}function wc(r,e){return r.oa.get(e)||void 0}function Lg(r,e){const t=oe(r),n=wc(t,e.targetId);if(n!==void 0&&t._a.has(n))return;const s=function(B,c){const u=wc(B,c);u!==void 0&&B.aa.delete(u);const h=function(p,E){return E%2!=0?p.ca.next():p.ua.next()}(B,c);return B.oa.set(c,h),B.aa.set(h,c),h}(t,e.targetId);z(rn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new ln(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t._a.set(s,i),ku(t)?Fu(t):gs(t).Yt()&&Lu(t,i)}function Nu(r,e){const t=oe(r),n=gs(t),s=wc(t,e);z(rn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t._a.delete(s),t.oa.delete(e),t.aa.delete(s),n.Yt()&&Fg(t,s),t._a.size===0&&(n.Yt()?n.en():Fr(t)&&t.Ta.set("Unknown"))}function Lu(r,e){if(r.Pa.J(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const t=r.aa.get(e.targetId);if(t===void 0)return void z(rn,"SDK target ID not found for remote ID: "+e.targetId);const n=r.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(n)}gs(r).Pn(e)}function Fg(r,e){r.Pa.J(e),gs(r).In(e)}function Fu(r){r.Pa=new qT({getRemoteKeysForTarget:e=>{const t=r.aa.get(e);return t!==void 0?r.remoteSyncer.getRemoteKeysForTarget(t):ce()},ye:e=>r._a.get(e)||null,Ve:()=>r.datastore.serializer.databaseId}),gs(r).start(),r.Ta.ea()}function ku(r){return Fr(r)&&!gs(r).Jt()&&r._a.size>0}function Fr(r){return oe(r).la.size===0}function kg(r){r.Pa=void 0}async function tb(r){r.Ta.set("Online")}async function nb(r){r._a.forEach((e,t)=>{Lu(r,e)})}async function rb(r,e){kg(r),ku(r)?(r.Ta.ra(e),Fu(r)):r.Ta.set("Unknown")}async function sb(r,e,t){if(r.Ta.set("Online"),e instanceof jp&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const B of i.targetIds){if(s._a.has(B)){const c=s.aa.get(B);c!==void 0&&(await s.remoteSyncer.rejectListen(c,o),s.oa.delete(c),s.aa.delete(B)),s._a.delete(B)}s.Pa.removeTarget(B)}}(r,e)}catch(n){z(rn,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Zo(r,n)}else if(e instanceof Ao?r.Pa._e(e):e instanceof Up?r.Pa.he(e):r.Pa.ue(e),!t.isEqual(ie.min()))try{const n=await Ng(r.localStore);t.compareTo(n)>=0&&await function(i,o){const B=i.Pa.fe(o);B.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const d=i._a.get(h);d&&i._a.set(h,d.withResumeToken(u.resumeToken,o))}}),B.targetMismatches.forEach((u,h)=>{const d=i._a.get(u);if(!d)return;i._a.set(u,d.withResumeToken(Ge.EMPTY_BYTE_STRING,d.snapshotVersion)),Fg(i,u);const p=new ln(d.target,u,h,d.sequenceNumber);Lu(i,p)});const c=function(h,d){const p=new Map;d.targetChanges.forEach((_,S)=>{const L=h.aa.get(S);L!==void 0&&p.set(L,_)});let E=new Re(le);return d.targetMismatches.forEach((_,S)=>{const L=h.aa.get(_);L!==void 0&&(E=E.insert(L,S))}),new Pi(d.snapshotVersion,p,E,d.documentUpdates,d.augmentedDocumentUpdates,d.resolvedLimboDocuments)}(i,B);return i.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(n){z(rn,"Failed to raise snapshot:",n),await Zo(r,n)}}async function Zo(r,e,t){if(!hs(e))throw e;r.la.add(1),await Fi(r),r.Ta.set("Offline"),t||(t=()=>Ng(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{z(rn,"Retrying IndexedDB access"),await t(),r.la.delete(1),await Sa(r)})}function Mg(r,e){return e().catch(t=>Zo(r,t,e))}async function Pa(r){const e=oe(r),t=Zn(e);let n=e.sa.length>0?e.sa[e.sa.length-1].batchId:su;for(;ib(e);)try{const s=await Qv(e.localStore,n);if(s===null){e.sa.length===0&&t.en();break}n=s.batchId,ob(e,s)}catch(s){await Zo(e,s)}xg(e)&&Vg(e)}function ib(r){return Fr(r)&&r.sa.length<10}function ob(r,e){r.sa.push(e);const t=Zn(r);t.Yt()&&t.Rn&&t.An(e.mutations)}function xg(r){return Fr(r)&&!Zn(r).Jt()&&r.sa.length>0}function Vg(r){Zn(r).start()}async function ab(r){Zn(r).fn()}async function Bb(r){const e=Zn(r);for(const t of r.sa)e.An(t.mutations)}async function cb(r,e,t){const n=r.sa.shift(),s=vu.from(n,e,t);await Mg(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Pa(r)}async function ub(r,e){e&&Zn(r).Rn&&await async function(n,s){if(function(o){return MT(o)&&o!==M.ABORTED}(s.code)){const i=n.sa.shift();Zn(n).Xt(),await Mg(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Pa(n)}}(r,e),xg(r)&&Vg(r)}async function cd(r,e){const t=oe(r);t.asyncQueue.verifyOperationInProgress(),z(rn,"RemoteStore received new credentials");const n=Fr(t);t.la.add(3),await Fi(t),n&&t.Ta.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.la.delete(3),await Sa(t)}async function lb(r,e){const t=oe(r);e?(t.la.delete(2),await Sa(t)):e||(t.la.add(2),await Fi(t),t.Ta.set("Unknown"))}function gs(r){return r.Ia||(r.Ia=function(t,n,s){const i=oe(t);return i.pn(),new DA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{ct:tb.bind(null,r),Et:nb.bind(null,r),Tt:rb.bind(null,r),Tn:sb.bind(null,r)}),r.Ea.push(async e=>{e?(r.Ia.Xt(),ku(r)?Fu(r):r.Ta.set("Unknown")):(await r.Ia.stop(),kg(r))})),r.Ia}function Zn(r){return r.Ra||(r.Ra=function(t,n,s){const i=oe(t);return i.pn(),new wA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{ct:()=>Promise.resolve(),Et:ab.bind(null,r),Tt:ub.bind(null,r),Vn:Bb.bind(null,r),dn:cb.bind(null,r)}),r.Ea.push(async e=>{e?(r.Ra.Xt(),await Pa(r)):(await r.Ra.stop(),r.sa.length>0&&(z(rn,`Stopping write stream with ${r.sa.length} pending writes`),r.sa=[]))})),r.Ra}/**
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
 */class hb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Aa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Aa(this.observer.error,e):pn("Uncaught Error in snapshot listener:",e.toString()))}Va(){this.muted=!0}Aa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Mu{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,B=new Mu(e,t,o,s,i);return B.start(n),B}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xu(r,e){if(pn("AsyncQueue",`${e}: ${r}`),hs(r))return new K(M.UNAVAILABLE,`${e}: ${r}`);throw r}class ud{constructor(){this.activeTargetIds=UT()}Ba(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ua(e){this.activeTargetIds=this.activeTargetIds.delete(e)}La(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fb{constructor(){this.fu=new ud,this.mu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.fu.Ba(e),this.mu[e]||"not-current"}updateQueryState(e,t,n){this.mu[e]=t}removeLocalQueryTarget(e){this.fu.Ua(e)}isLocalQueryTarget(e){return this.fu.activeTargetIds.has(e)}clearQueryState(e){delete this.mu[e]}getAllActiveQueryTargets(){return this.fu.activeTargetIds}isActiveQueryTarget(e){return this.fu.activeTargetIds.has(e)}start(){return this.fu=new ud,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function OB(){return typeof document<"u"?document:null}/**
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
 */class wr{static emptySet(e){return new wr(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||Y.comparator(t.key,n.key):(t,n)=>Y.comparator(t.key,n.key),this.keyedMap=jr(),this.sortedSet=new Re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof wr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new wr;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class ld{constructor(){this.pu=new Re(Y.comparator)}track(e){const t=e.doc.key,n=this.pu.get(t);n?e.type!==0&&n.type===3?this.pu=this.pu.insert(t,e):e.type===3&&n.type!==1?this.pu=this.pu.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.pu=this.pu.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.pu=this.pu.remove(t):e.type===1&&n.type===2?this.pu=this.pu.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):Z(63341,{we:e,gu:n}):this.pu=this.pu.insert(t,e)}yu(){const e=[];return this.pu.inorderTraversal((t,n)=>{e.push(n)}),e}}class os{constructor(e,t,n,s,i,o,B,c,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=B,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach(B=>{o.push({type:0,doc:B})}),new os(e,t,wr.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&va(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class db{constructor(){this.wu=void 0,this.bu=[]}Su(){return this.bu.some(e=>e.vu())}}class Cb{constructor(){this.queries=hd(),this.onlineState="Unknown",this.Du=new Set}terminate(){(function(t,n){const s=oe(t),i=s.queries;s.queries=hd(),i.forEach((o,B)=>{for(const c of B.bu)c.onError(n)})})(this,new K(M.ABORTED,"Firestore shutting down"))}}function hd(){return new Or(r=>Ag(r),va)}async function pb(r,e){const t=oe(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.Su()&&e.vu()&&(n=2):(i=new db,n=e.vu()?0:1);try{switch(n){case 0:i.wu=await t.onListen(s,!0);break;case 1:i.wu=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const B=xu(o,`Initialization of query '${Je(e.query)?hn(e.query):Ks(e.query)}' failed`);return void e.onError(B)}t.queries.set(s,i),i.bu.push(e),e.xu(t.onlineState),i.wu&&e.Cu(i.wu)&&Vu(t)}async function gb(r,e){const t=oe(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.bu.indexOf(e);o>=0&&(i.bu.splice(o,1),i.bu.length===0?s=e.vu()?0:1:!i.Su()&&e.vu()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function mb(r,e){const t=oe(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const B of o.bu)B.Cu(s)&&(n=!0);o.wu=s}}n&&Vu(t)}function Eb(r,e,t){const n=oe(r),s=n.queries.get(e);if(s)for(const i of s.bu)i.onError(t);n.queries.delete(e)}function Vu(r){r.Du.forEach(e=>{e.next()})}var yc;(function(r){r.Default="default",r.Cache="cache"})(yc||(yc={}));class _b{constructor(e,t,n){this.query=e,this.Fu=t,this.Ou=!1,this.Mu=null,this.onlineState="Unknown",this.options=n||{}}Cu(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new os(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ou?this.Nu(e)&&(this.Fu.next(e),t=!0):this.Lu(e,this.onlineState)&&(this.Bu(e),t=!0),this.Mu=e,t}onError(e){this.Fu.error(e)}xu(e){this.onlineState=e;let t=!1;return this.Mu&&!this.Ou&&this.Lu(this.Mu,e)&&(this.Bu(this.Mu),t=!0),t}Lu(e,t){if(!e.fromCache||!this.vu())return!0;const n=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Nu(e){if(e.docChanges.length>0)return!0;const t=this.Mu&&this.Mu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Bu(e){e=os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ou=!0,this.Fu.next(e)}vu(){return this.options.source!==yc.Cache}}/**
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
 */class Gg{constructor(e){this.key=e}}class Hg{constructor(e){this.key=e}}class Db{constructor(e,t){this.query=e,this.zu=t,this.ju=null,this.hasCachedResults=!1,this.current=!1,this.Hu=ce(),this.mutatedKeys=ce(),this.Ju=Je(e)?_c(e):cu(e),this.Yu=new wr(this.Ju)}get Zu(){return this.zu}Xu(e,t){const n=t?t.ec:new ld,s=t?t.Yu:this.Yu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,B=!1;const[c,u]=this.tc(this.query,s);e.inorderTraversal((d,p)=>{const E=s.get(d),_=vv(this.query,p)?p:null,S=!!E&&this.mutatedKeys.has(E.key),L=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let H=!1;E&&_?E.data.isEqual(_.data)?S!==L&&(n.track({type:3,doc:_}),H=!0):this.nc(E,_)||(n.track({type:2,doc:_}),H=!0,(c&&this.Ju(_,c)>0||u&&this.Ju(_,u)<0)&&(B=!0)):!E&&_?(n.track({type:0,doc:_}),H=!0):E&&!_&&(n.track({type:1,doc:E}),H=!0,(c||u)&&(B=!0)),H&&(_?(o=o.add(_),i=L?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))});const h=this.rc(this.query);if(h)if(Je(this.query)){const d=[];o.forEach(_=>d.push(_));const p=Sg(this.query,d);let E=new wr(_c(this.query));for(const _ of p)E=E.add(_);o.forEach(_=>{E.has(_.key)||(i=i.delete(_.key),n.track({type:1,doc:_}))}),o=E}else{const d=this.sc(this.query);for(;o.size>h;){const p=d==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),n.track({type:1,doc:p})}}return{Yu:o,ec:n,Oo:B,mutatedKeys:i}}rc(e){var t;return Je(e)?(t=PB(e))==null?void 0:t.limit:e.limit||void 0}sc(e){if(Je(e)){const t=PB(e);return t&&t.limit<0?"L":"F"}return e.limitType}tc(e,t){var n;if(Je(e)){const s=(n=PB(e))==null?void 0:n.limit;return[t.size===s?t.last():null,null]}return[e.limitType==="F"&&t.size===this.rc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.rc(this.query)?t.first():null]}nc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.Yu;this.Yu=e.Yu,this.mutatedKeys=e.mutatedKeys;const o=e.ec.yu();o.sort((h,d)=>function(E,_){const S=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z(20277,{we:L})}};return S(E)-S(_)}(h.type,d.type)||this.Ju(h.doc,d.doc)),this._c(n),s=s??!1;const B=t&&!s?this.oc():[],c=this.Hu.size===0&&this.current&&!s?1:0,u=c!==this.ju;return this.ju=c,o.length!==0||u?{snapshot:new os(this.query,e.Yu,i,o,e.mutatedKeys,c===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),ac:B}:{ac:B}}xu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Yu:this.Yu,ec:new ld,mutatedKeys:this.mutatedKeys,Oo:!1},!1)):{ac:[]}}uc(e){return!this.zu.has(e)&&!!this.Yu.has(e)&&!this.Yu.get(e).hasLocalMutations}_c(e){e&&(e.addedDocuments.forEach(t=>this.zu=this.zu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.zu=this.zu.delete(t)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Hu;this.Hu=ce(),this.Yu.forEach(n=>{this.uc(n.key)&&(this.Hu=this.Hu.add(n.key))});const t=[];return e.forEach(n=>{this.Hu.has(n)||t.push(new Hg(n))}),this.Hu.forEach(n=>{e.has(n)||t.push(new Gg(n))}),t}cc(e){this.zu=e.Wo,this.Hu=ce();const t=this.Xu(e.documents);return this.applyChanges(t,!0)}lc(){return os.fromInitialDocuments(this.query,this.Yu,this.mutatedKeys,this.ju===0,this.hasCachedResults)}}const Gu="SyncEngine";class wb{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class yb{constructor(e){this.key=e,this.Ec=!1}}class Ib{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hc={},this.Tc=new Or(B=>Ag(B),va),this.Pc=new Map,this.Ic=new Set,this.Rc=new Re(Y.comparator),this.Ac=new Map,this.Vc=new bu,this.dc={},this.fc=new Map,this.mc=Xn.bs(),this.onlineState="Unknown",this.gc=void 0}get isPrimaryClient(){return this.gc===!0}}async function Tb(r,e,t=!0){const n=$g(r);let s;const i=n.Tc.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lc()):s=await Ug(n,e,t,!0),s}async function Ab(r,e){const t=$g(r);await Ug(t,e,!0,!1)}async function Ug(r,e,t,n){const s=await Yv(r.localStore,Je(e)?e:Xt(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let B;return n&&(B=await Rb(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&Lg(r.remoteStore,s),B}async function Rb(r,e,t,n,s){r.yc=(d,p,E)=>async function(S,L,H,W){let ee=L.view.Xu(H);ee.Oo&&(ee=await Bd(S.localStore,L.query,!1).then(({documents:R})=>L.view.Xu(R,ee)));const Ce=W&&W.targetChanges.get(L.targetId),Ae=W&&W.targetMismatches.get(L.targetId)!=null,Se=L.view.applyChanges(ee,S.isPrimaryClient,Ce,Ae);return dd(S,L.targetId,Se.ac),Se.snapshot}(r,d,p,E);const i=await Bd(r.localStore,e,!0),o=new Db(e,i.Wo),B=o.Xu(i.documents),c=Oi.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),u=o.applyChanges(B,r.isPrimaryClient,c);dd(r,t,u.ac);const h=new wb(e,t,o);return r.Tc.set(e,h),r.Pc.has(t)?r.Pc.get(t).push(e):r.Pc.set(t,[e]),u.snapshot}async function vb(r,e,t){const n=oe(r),s=n.Tc.get(e),i=n.Pc.get(s.targetId);if(i.length>1)return n.Pc.set(s.targetId,i.filter(o=>!va(o,e))),void n.Tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Dc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&Nu(n.remoteStore,s.targetId),Ic(n,s.targetId)}).catch(ls)):(Ic(n,s.targetId),await Dc(n.localStore,s.targetId,!0))}async function bb(r,e){const t=oe(r),n=t.Tc.get(e),s=t.Pc.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Nu(t.remoteStore,n.targetId))}async function Sb(r,e,t){const n=Mb(r);try{const s=await function(o,B){const c=oe(o),u=_e.now(),h=B.reduce((E,_)=>E.add(_.key),ce());let d,p;return c.persistence.runTransaction("Locally write mutations","readwrite",E=>{let _=dt(),S=ce();return c.ko.getEntries(E,h).next(L=>{_=L,_.forEach((H,W)=>{W.isValidDocument()||(S=S.add(H))})}).next(()=>c.localDocuments.getOverlayedDocuments(E,_)).next(L=>{d=L;const H=[];for(const W of B){const ee=CT(W,d.get(W.key).overlayedDocument);ee!=null&&H.push(new Pr(W.key,ee,_p(ee.value.mapValue),Yt.exists(!0)))}return c.mutationQueue.addMutationBatch(E,u,H,B)}).next(L=>{p=L;const H=L.applyToLocalDocumentSet(d,S);return c.documentOverlayCache.saveOverlays(E,L.batchId,H)})}).then(()=>({batchId:p.batchId,changes:Gp(d)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(o,B,c){let u=o.dc[o.currentUser.toKey()];u||(u=new Re(le)),u=u.insert(B,c),o.dc[o.currentUser.toKey()]=u}(n,s.batchId,t),await ki(n,s.changes),await Pa(n.remoteStore)}catch(s){const i=xu(s,"Failed to persist write");t.reject(i)}}async function jg(r,e){const t=oe(r);try{const n=await zv(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Ac.get(i);o&&(Q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Ec=!0:s.modifiedDocuments.size>0?Q(o.Ec,14607):s.removedDocuments.size>0&&(Q(o.Ec,42227),o.Ec=!1))}),await ki(t,n,e)}catch(n){await ls(n)}}function fd(r,e,t){const n=oe(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Tc.forEach((i,o)=>{const B=o.view.xu(e);B.snapshot&&s.push(B.snapshot)}),function(o,B){const c=oe(o);c.onlineState=B;let u=!1;c.queries.forEach((h,d)=>{for(const p of d.bu)p.xu(B)&&(u=!0)}),u&&Vu(c)}(n.eventManager,e),s.length&&n.hc.Tn(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function Pb(r,e,t){const n=oe(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Ac.get(e),i=s&&s.key;if(i){let o=new Re(Y.comparator);o=o.insert(i,nt.newNoDocument(i,ie.min()));const B=ce().add(i),c=new Pi(ie.min(),new Map,new Re(le),o,dt(),B);await jg(n,c),n.Rc=n.Rc.remove(i),n.Ac.delete(e),Hu(n)}else await Dc(n.localStore,e,!1).then(()=>Ic(n,e,t)).catch(ls)}async function Ob(r,e){const t=oe(r),n=e.batch.batchId;try{const s=await $v(t.localStore,e);qg(t,n,null),Jg(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await ki(t,s)}catch(s){await ls(s)}}async function Nb(r,e,t){const n=oe(r);try{const s=await function(o,B){const c=oe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,B).next(d=>(Q(d!==null,37113),h=d.keys(),c.mutationQueue.removeMutationBatch(u,d))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,B)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(n.localStore,e);qg(n,e,t),Jg(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await ki(n,s)}catch(s){await ls(s)}}function Jg(r,e){(r.fc.get(e)||[]).forEach(t=>{t.resolve()}),r.fc.delete(e)}function qg(r,e,t){const n=oe(r);let s=n.dc[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.dc[n.currentUser.toKey()]=s}}function Ic(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Pc.get(e))r.Tc.delete(n),t&&r.hc.wc(n,t);r.Pc.delete(e),r.isPrimaryClient&&r.Vc.e_(e).forEach(n=>{r.Vc.containsKey(n)||Kg(r,n)})}function Kg(r,e){r.Ic.delete(e.path.canonicalString());const t=r.Rc.get(e);t!==null&&(Nu(r.remoteStore,t),r.Rc=r.Rc.remove(e),r.Ac.delete(t),Hu(r))}function dd(r,e,t){for(const n of t)n instanceof Gg?(r.Vc.addReference(n.key,e),Lb(r,n)):n instanceof Hg?(z(Gu,"Document no longer in limbo: "+n.key),r.Vc.removeReference(n.key,e),r.Vc.containsKey(n.key)||Kg(r,n.key)):Z(19791,{bc:n})}function Lb(r,e){const t=e.key,n=t.path.canonicalString();r.Rc.get(t)||r.Ic.has(n)||(z(Gu,"New document in limbo: "+t),r.Ic.add(n),Hu(r))}function Hu(r){for(;r.Ic.size>0&&r.Rc.size<r.maxConcurrentLimboResolutions;){const e=r.Ic.values().next().value;r.Ic.delete(e);const t=new Y(ge.fromString(e)),n=r.mc.next();r.Ac.set(n,new yb(t)),r.Rc=r.Rc.insert(t,n),Lg(r.remoteStore,new ln(Xt(kp(t.path)),n,"TargetPurposeLimboResolution",Da.wn))}}async function ki(r,e,t){const n=oe(r),s=[],i=[],o=[];n.Tc.isEmpty()||(n.Tc.forEach((B,c)=>{o.push(n.yc(c,e,t).then(u=>{var h;if((u||t)&&n.isPrimaryClient){const d=u?!u.fromCache:(h=t==null?void 0:t.targetChanges.get(c.targetId))==null?void 0:h.current;n.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Pu.mo(c.targetId,u);i.push(d)}}))}),await Promise.all(o),n.hc.Tn(s),await async function(c,u){const h=oe(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>x.forEach(u,p=>x.forEach(p.Vo,E=>h.persistence.referenceDelegate.addReference(d,p.targetId,E)).next(()=>x.forEach(p.fo,E=>h.persistence.referenceDelegate.removeReference(d,p.targetId,E)))))}catch(d){if(!hs(d))throw d;z(Ou,"Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const E=h.Lo.get(p),_=E.snapshotVersion,S=E.withLastLimboFreeSnapshotVersion(_);h.Lo=h.Lo.insert(p,S)}}}(n.localStore,i))}async function Fb(r,e){const t=oe(r);if(!t.currentUser.isEqual(e)){z(Gu,"User change. New user:",e.toKey());const n=await Og(t.localStore,e);t.currentUser=e,function(i,o){i.fc.forEach(B=>{B.forEach(c=>{c.reject(new K(M.CANCELLED,o))})}),i.fc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await ki(t,n.$o)}}function kb(r,e){const t=oe(r),n=t.Ac.get(e);if(n&&n.Ec)return ce().add(n.key);{let s=ce();const i=t.Pc.get(e);if(!i)return s;for(const o of i??[]){const B=t.Tc.get(o);s=s.unionWith(B.view.Zu)}return s}}function $g(r){const e=oe(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=jg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Pb.bind(null,e),e.hc.Tn=mb.bind(null,e.eventManager),e.hc.wc=Eb.bind(null,e.eventManager),e}function Mb(r){const e=oe(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ob.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Nb.bind(null,e),e}class ea{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_a(e.databaseInfo.databaseId),this.sharedClientState=this.vc(e),this.persistence=this.Dc(e),await this.persistence.start(),this.localStore=this.xc(e),this.gcScheduler=this.Cc(e,this.localStore),this.indexBackfillerScheduler=this.Fc(e,this.localStore)}Cc(e,t){return null}Fc(e,t){return null}xc(e){return Kv(this.persistence,new jv,e.initialUser,this.serializer)}Dc(e){return new Pg(Su.b_,this.serializer)}vc(e){return new fb}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ea.provider={build:()=>new ea};class xb extends ea{constructor(e){super(),this.cacheSizeBytes=e}Cc(e,t){Q(this.persistence.referenceDelegate instanceof Xo,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new NA(n,e.asyncQueue,t)}Dc(e){const t=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new Pg(n=>Xo.b_(n,t),this.serializer)}}class Tc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>fd(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fb.bind(null,this.syncEngine),await lb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Cb}()}createDatastore(e){const t=_a(e.databaseInfo.databaseId),n=_A(e.databaseInfo);return TA(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,o,B){return new eb(n,s,i,o,B)}(this.localStore,this.datastore,e.asyncQueue,t=>fd(this.syncEngine,t,0),function(){return Yf.Ye()?new Yf:new pA}())}createSyncEngine(e,t){return function(s,i,o,B,c,u,h){const d=new Ib(s,i,o,B,c,u);return h&&(d.gc=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=oe(s);z(rn,"RemoteStore shutting down."),i.la.add(5),await Fi(i),i.ha.shutdown(),i.Ta.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Tc.provider={build:()=>new Tc};/**
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
 */const er="FirestoreClient";class Vb{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=s,this.user=tt.UNAUTHENTICATED,this.clientId=ru.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async o=>{z(er,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(z(er,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=xu(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function NB(r,e){r.asyncQueue.verifyOperationInProgress(),z(er,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Og(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Cd(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Gb(r);z(er,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>cd(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>cd(e.remoteStore,s)),r._onlineComponents=e}async function Gb(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){z(er,"Using user provided OfflineComponentProvider");try{await NB(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Ut("Error using user provided cache. Falling back to memory cache: "+t),await NB(r,new ea)}}else z(er,"Using default OfflineComponentProvider"),await NB(r,new xb(void 0));return r._offlineComponents}async function zg(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(z(er,"Using user provided OnlineComponentProvider"),await Cd(r,r._uninitializedComponentsProvider._online)):(z(er,"Using default OnlineComponentProvider"),await Cd(r,new Tc))),r._onlineComponents}function Hb(r){return zg(r).then(e=>e.syncEngine)}async function Ub(r){const e=await zg(r),t=e.eventManager;return t.onListen=Tb.bind(null,e.syncEngine),t.onUnlisten=vb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Ab.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=bb.bind(null,e.syncEngine),t}function jb(r,e,t={}){const n=new Vn;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,B,c,u){const h=new hb({next:p=>{h.Va(),o.enqueueAndForget(()=>gb(i,d)),p.fromCache&&c.source==="server"?u.reject(new K(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new _b(B instanceof Ws?Ev(B):B,h,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return pb(i,d)}(await Ub(r),r.asyncQueue,e,t,n)),n.promise}function Jb(r,e){const t=new Vn;return r.asyncQueue.enqueueAndForget(async()=>Sb(await Hb(r),e,t)),t.promise}/**
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
 */let Wg=class{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Ni("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},qb=class extends Wg{data(){return super.data()}};/**
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
 */class Kb{convertValue(e,t="none"){switch(He(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes($n(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Z(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Sr(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var n,s,i;const t=(i=(s=(n=e.fields)==null?void 0:n[ii].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>ve(o.doubleValue));return new pt(t)}convertGeoPoint(e){return new en(ve(e.latitude),ve(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=bi(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ts(e));default:return null}}convertTimestamp(e){const t=Kn(e);return new _e(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ge.fromString(e);Q(Qp(n),9688,{name:e});const s=new ri(n.get(1),n.get(3)),i=new Y(n.popFirst(5));return s.isEqual(t)||pn(`A document reference to ${i} refers to a different database (${s.projectId}/${s.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function $b(r,e,t){let n;return n=r?r.toFirestore(e):e,n}/**
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
 */const pd="AsyncQueue";class gd{constructor(e=Promise.resolve()){this.$c=[],this.Kc=!1,this.Qc=[],this.Wc=null,this.Gc=!1,this.zc=!1,this.jc=[],this.Ht=new tg(this,"async_queue_retry"),this.Hc=()=>{const n=OB();n&&z(pd,"Visibility state changed to "+n.visibilityState),this.Ht.$t()},this.Jc=e;const t=OB();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Yc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const t=OB();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Yc(),this.Kc)return new Promise(()=>{});const t=new Vn;return this.Zc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.$c.push(e),this.Xc()))}async Xc(){if(this.$c.length!==0){try{await this.$c[0](),this.$c.shift(),this.Ht.reset()}catch(e){if(!hs(e))throw e;z(pd,"Operation failed with retryable error: "+e)}this.$c.length>0&&this.Ht.kt(()=>this.Xc())}}Zc(e){const t=this.Jc.then(()=>(this.Gc=!0,e().catch(n=>{throw this.Wc=n,this.Gc=!1,pn("INTERNAL UNHANDLED ERROR: ",md(n)),n}).then(n=>(this.Gc=!1,n))));return this.Jc=t,t}enqueueAfterDelay(e,t,n){this.Yc(),this.jc.indexOf(e)>-1&&(t=0);const s=Mu.createAndSchedule(this,e,t,n,i=>this.el(i));return this.Qc.push(s),s}Yc(){this.Wc&&Z(47125,{tl:md(this.Wc)})}verifyOperationInProgress(){}async nl(){let e;do e=this.Jc,await e;while(e!==this.Jc)}rl(e){for(const t of this.Qc)if(t.timerId===e)return!0;return!1}il(e){return this.nl().then(()=>{this.Qc.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Qc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.nl()})}sl(e){this.jc.push(e)}el(e){const t=this.Qc.indexOf(e);this.Qc.splice(t,1)}}function md(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Oa extends wa{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new gd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gd(e),this._firestoreClient=void 0,await e}}}function zb(r,e){const t=typeof r=="object"?r:wi(),n=typeof r=="string"?r:jo,s=mn(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=mE("firestore");i&&kA(s,...i)}return s}function Qg(r){if(r._terminated)throw new K(M.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Wb(r),r._firestoreClient}function Wb(r){var n,s,i,o;const e=r._freezeSettings(),t=RA(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,(s=r._app)==null?void 0:s.options.apiKey,e);r._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new Vb(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(r._componentsProvider))}/**
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
 */class Qb extends Kb{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,t)}}class po{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yr extends Wg{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new bo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Ni("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Yr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Yr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Yr._jsonSchema={type:Me("string",Yr._jsonSchemaVersion),bundleSource:Me("string","DocumentSnapshot"),bundleName:Me("string"),bundle:Me("string")};class bo extends Yr{data(e={}){return super.data(e)}}class Xr{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new po(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new bo(this._firestore,this._userDataWriter,n.key,n,new po(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new K(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(B=>{Je(s._snapshot.query)?_c(s._snapshot.query):cu(s.query._query);const c=new bo(s._firestore,s._userDataWriter,B.doc.key,B.doc,new po(s._snapshot.mutatedKeys.has(B.doc.key),s._snapshot.fromCache),s.query.converter);return B.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(B=>i||B.type!==3).map(B=>{const c=new bo(s._firestore,s._userDataWriter,B.doc.key,B.doc,new po(s._snapshot.mutatedKeys.has(B.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return B.type!==0&&(u=o.indexOf(B.doc.key),o=o.delete(B.doc.key)),B.type!==1&&(o=o.add(B.doc),h=o.indexOf(B.doc.key)),{type:Yb(B.type),doc:c,oldIndex:u,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Xr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ru.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Yb(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z(61501,{type:r})}}/**
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
 */Xr._jsonSchemaVersion="firestore/querySnapshot/1.0",Xr._jsonSchema={type:Me("string",Xr._jsonSchemaVersion),bundleSource:Me("string","QuerySnapshot"),bundleName:Me("string"),bundle:Me("string")};/**
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
 */function Xb(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new K(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uu{}class Yg extends Uu{}function Zb(r,e,...t){let n=[];e instanceof Uu&&n.push(e),n=n.concat(t),function(i){const o=i.filter(c=>c instanceof Ju).length,B=i.filter(c=>c instanceof ju).length;if(o>1||o>0&&B>0)throw new K(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class ju extends Yg{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new ju(e,t,n)}_apply(e){const t=this._parse(e);return Xg(e._query,t),new Nr(e.firestore,e.converter,fc(e._query,t))}_parse(e){const t=ag(e.firestore);return function(i,o,B,c,u,h,d){let p;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new K(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){_d(d,h);const _=[];for(const S of d)_.push(Ed(c,i,S));p={arrayValue:{values:_}}}else p=Ed(c,i,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||_d(d,h),p=UA(B,o,d,h==="in"||h==="not-in");return ke.create(u,h,p)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Ju extends Uu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ju(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:jt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const B=i.getFlattenedFilters();for(const c of B)Xg(o,c),o=fc(o,c)}(e._query,t),new Nr(e.firestore,e.converter,fc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class qu extends Yg{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new qu(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new K(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new K(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new li(i,o)}(e._query,this._field,this._direction);return new Nr(e.firestore,e.converter,NT(e._query,t))}}function eS(r,e="asc"){const t=e,n=Ni("orderBy",r);return qu._create(n,t)}function Ed(r,e,t){if(typeof(t=be(t))=="string"){if(t==="")throw new K(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Mp(e)&&t.indexOf("/")!==-1)throw new K(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(ge.fromString(t));if(!Y.isDocumentKey(n))throw new K(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Ff(r,new Y(n))}if(t instanceof qe)return Ff(r,t._key);throw new K(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fa(t)}.`)}function _d(r,e){if(!Array.isArray(r)||r.length===0)throw new K(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Xg(r,e){const t=function(s,i){for(const o of s)for(const B of o.getFlattenedFilters())if(i.indexOf(B.op)>=0)return B.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new K(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function tS(r){r=ni(r,Nr);const e=ni(r.firestore,Oa),t=Qg(e),n=new Qb(e);return Xb(r._query),jb(t,r._query).then(s=>new Xr(e,n,r,s))}function nS(r){return Zg(ni(r.firestore,Oa),[new Bu(r._key,Yt.none())])}function rS(r,e){const t=ni(r.firestore,Oa),n=ig(r),s=$b(r.converter,e),i=ag(r.firestore);return Zg(t,[HA(i,"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,Yt.exists(!1))]).then(()=>n)}function Zg(r,e){const t=Qg(r);return Jb(t,e)}const Dd="@firebase/firestore",wd="4.17.2";(function(e,t=!0){WI(Jn),Ft(new vt("firestore",(n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),B=new Oa(new hA(n.getProvider("auth-internal")),new CA(o,n.getProvider("app-check-internal")),sT(o,s),o);return i={useFetchStreams:t,...i},B._setSettings(i),B},"PUBLIC").setMultipleInstances(!0)),ct(Dd,wd,e),ct(Dd,wd,"esm2020")})();const em="@firebase/installations",Ku="0.6.24";/**
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
 */const tm=1e4,nm=`w:${Ku}`,rm="FIS_v2",sS="https://firebaseinstallations.googleapis.com/v1",iS=60*60*1e3,oS="installations",aS="Installations";/**
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
 */const BS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},vr=new nr(oS,aS,BS);function sm(r){return r instanceof bt&&r.code.includes("request-failed")}/**
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
 */function im({projectId:r}){return`${sS}/projects/${r}/installations`}function om(r){return{token:r.token,requestStatus:2,expiresIn:uS(r.expiresIn),creationTime:Date.now()}}async function am(r,e){const n=(await e.json()).error;return vr.create("request-failed",{requestName:r,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Bm({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function cS(r,{refreshToken:e}){const t=Bm(r);return t.append("Authorization",lS(e)),t}async function cm(r){const e=await r();return e.status>=500&&e.status<600?r():e}function uS(r){return Number(r.replace("s","000"))}function lS(r){return`${rm} ${r}`}/**
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
 */async function hS({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const n=im(r),s=Bm(r),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:t,authVersion:rm,appId:r.appId,sdkVersion:nm},B={method:"POST",headers:s,body:JSON.stringify(o)},c=await cm(()=>fetch(n,B));if(c.ok){const u=await c.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:om(u.authToken)}}else throw await am("Create Installation",c)}/**
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
 */function um(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */function fS(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const dS=/^[cdef][\w-]{21}$/,Ac="";function CS(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=pS(r);return dS.test(t)?t:Ac}catch{return Ac}}function pS(r){return fS(r).substr(0,22)}/**
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
 */function Na(r){return`${r.appName}!${r.appId}`}/**
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
 */const lm=new Map;function hm(r,e){const t=Na(r);fm(t,e),gS(t,e)}function fm(r,e){const t=lm.get(r);if(t)for(const n of t)n(e)}function gS(r,e){const t=mS();t&&t.postMessage({key:r,fid:e}),ES()}let pr=null;function mS(){return!pr&&"BroadcastChannel"in self&&(pr=new BroadcastChannel("[Firebase] FID Change"),pr.onmessage=r=>{fm(r.data.key,r.data.fid)}),pr}function ES(){lm.size===0&&pr&&(pr.close(),pr=null)}/**
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
 */const _S="firebase-installations-database",DS=1,br="firebase-installations-store";let LB=null;function $u(){return LB||(LB=zd(_S,DS,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(br)}}})),LB}async function ta(r,e){const t=Na(r),s=(await $u()).transaction(br,"readwrite"),i=s.objectStore(br),o=await i.get(t);return await i.put(e,t),await s.done,(!o||o.fid!==e.fid)&&hm(r,e.fid),e}async function dm(r){const e=Na(r),n=(await $u()).transaction(br,"readwrite");await n.objectStore(br).delete(e),await n.done}async function La(r,e){const t=Na(r),s=(await $u()).transaction(br,"readwrite"),i=s.objectStore(br),o=await i.get(t),B=e(o);return B===void 0?await i.delete(t):await i.put(B,t),await s.done,B&&(!o||o.fid!==B.fid)&&hm(r,B.fid),B}/**
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
 */async function zu(r){let e;const t=await La(r.appConfig,n=>{const s=wS(n),i=yS(r,s);return e=i.registrationPromise,i.installationEntry});return t.fid===Ac?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function wS(r){const e=r||{fid:CS(),registrationStatus:0};return Cm(e)}function yS(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(vr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},n=IS(r,t);return{installationEntry:t,registrationPromise:n}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:TS(r)}:{installationEntry:e}}async function IS(r,e){try{const t=await hS(r,e);return ta(r.appConfig,t)}catch(t){throw sm(t)&&t.customData.serverCode===409?await dm(r.appConfig):await ta(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function TS(r){let e=await yd(r.appConfig);for(;e.registrationStatus===1;)await um(100),e=await yd(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:n}=await zu(r);return n||t}return e}function yd(r){return La(r,e=>{if(!e)throw vr.create("installation-not-found");return Cm(e)})}function Cm(r){return AS(r)?{fid:r.fid,registrationStatus:0}:r}function AS(r){return r.registrationStatus===1&&r.registrationTime+tm<Date.now()}/**
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
 */async function RS({appConfig:r,heartbeatServiceProvider:e},t){const n=vS(r,t),s=cS(r,t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:nm,appId:r.appId}},B={method:"POST",headers:s,body:JSON.stringify(o)},c=await cm(()=>fetch(n,B));if(c.ok){const u=await c.json();return om(u)}else throw await am("Generate Auth Token",c)}function vS(r,{fid:e}){return`${im(r)}/${e}/authTokens:generate`}/**
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
 */async function Wu(r,e=!1){let t;const n=await La(r.appConfig,i=>{if(!pm(i))throw vr.create("not-registered");const o=i.authToken;if(!e&&PS(o))return i;if(o.requestStatus===1)return t=bS(r,e),i;{if(!navigator.onLine)throw vr.create("app-offline");const B=NS(i);return t=SS(r,B),B}});return t?await t:n.authToken}async function bS(r,e){let t=await Id(r.appConfig);for(;t.authToken.requestStatus===1;)await um(100),t=await Id(r.appConfig);const n=t.authToken;return n.requestStatus===0?Wu(r,e):n}function Id(r){return La(r,e=>{if(!pm(e))throw vr.create("not-registered");const t=e.authToken;return LS(t)?{...e,authToken:{requestStatus:0}}:e})}async function SS(r,e){try{const t=await RS(r,e),n={...e,authToken:t};return await ta(r.appConfig,n),t}catch(t){if(sm(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await dm(r.appConfig);else{const n={...e,authToken:{requestStatus:0}};await ta(r.appConfig,n)}throw t}}function pm(r){return r!==void 0&&r.registrationStatus===2}function PS(r){return r.requestStatus===2&&!OS(r)}function OS(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+iS}function NS(r){const e={requestStatus:1,requestTime:Date.now()};return{...r,authToken:e}}function LS(r){return r.requestStatus===1&&r.requestTime+tm<Date.now()}/**
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
 */async function FS(r){const e=r,{installationEntry:t,registrationPromise:n}=await zu(e);return n?n.catch(console.error):Wu(e).catch(console.error),t.fid}/**
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
 */async function kS(r,e=!1){const t=r;return await MS(t),(await Wu(t,e)).token}async function MS(r){const{registrationPromise:e}=await zu(r);e&&await e}/**
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
 */function xS(r){if(!r||!r.options)throw FB("App Configuration");if(!r.name)throw FB("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw FB(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function FB(r){return vr.create("missing-app-config-values",{valueName:r})}/**
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
 */const gm="installations",VS="installations-internal",GS=r=>{const e=r.getProvider("app").getImmediate(),t=xS(e),n=mn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},HS=r=>{const e=r.getProvider("app").getImmediate(),t=mn(e,gm).getImmediate();return{getId:()=>FS(t),getToken:s=>kS(t,s)}};function US(){Ft(new vt(gm,GS,"PUBLIC")),Ft(new vt(VS,HS,"PRIVATE"))}/**
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
 */US();ct(em,Ku);ct(em,Ku,"esm2020");const kB="@firebase/remote-config",Td="0.9.2";/**
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
 */class mm{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
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
 */const Em="remote-config",Ad=100;/**
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
 */const jS={"already-initialized":"Remote Config already initialized","registration-window":"Undefined window object. This SDK only supports usage in a browser environment.","registration-project-id":"Undefined project identifier. Check Firebase app initialization.","registration-api-key":"Undefined API key. Check Firebase app initialization.","registration-app-id":"Undefined app identifier. Check Firebase app initialization.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.","fetch-client-network":"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-timeout":'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',"fetch-throttle":'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',"fetch-client-parse":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","indexed-db-unavailable":"Indexed DB is not supported by current browser","custom-signal-max-allowed-signals":"Setting more than {$maxSignals} custom signals is not supported.","stream-error":"The stream was not able to connect to the backend: {$originalErrorMessage}.","realtime-unavailable":"The Realtime service is unavailable: {$originalErrorMessage}","update-message-invalid":"The stream invalidation message was unparsable: {$originalErrorMessage}","update-not-fetched":"Unable to fetch the latest config: {$originalErrorMessage}","analytics-unavailable":"Connection to Firebase Analytics failed: {$originalErrorMessage}"},Ne=new nr("remoteconfig","Remote Config",jS);function JS(r,e){return r instanceof bt&&r.code.indexOf(e)!==-1}/**
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
 */const qS=!1,KS="",Rd=0,$S=["1","true","t","yes","y","on"];class MB{constructor(e,t=KS){this._source=e,this._value=t}asString(){return this._value}asBoolean(){return this._source==="static"?qS:$S.indexOf(this._value.toLowerCase())>=0}asNumber(){if(this._source==="static")return Rd;let e=Number(this._value);return isNaN(e)&&(e=Rd),e}getSource(){return this._source}}class zS{constructor(e){this.storage=e._storage,this.logger=e._logger,this.analyticsProvider=e._analyticsProvider}async updateActiveExperiments(e){const t=await this.storage.getActiveExperiments()||new Set,n=this.createExperimentInfoMap(e);return this.addActiveExperiments(n),this.removeInactiveExperiments(t,n),this.storage.setActiveExperiments(new Set(n.keys()))}createExperimentInfoMap(e){const t=new Map;for(const n of e)t.set(n.experimentId,n);return t}addActiveExperiments(e){const t={};for(const[n,s]of e.entries())t[`firebase${n}`]=s.variantId;this.addExperimentToAnalytics(t)}removeInactiveExperiments(e,t){const n={};for(const s of e)t.has(s)||(n[`firebase${s}`]=null);this.addExperimentToAnalytics(n)}addExperimentToAnalytics(e){if(Object.keys(e).length!==0)try{const t=this.analyticsProvider.getImmediate({optional:!0});t?(t.setUserProperties(e),t.logEvent("set_firebase_experiment_state")):this.logger.warn("Analytics import failed. Verify if you have imported Firebase Analytics in your app code.")}catch(t){throw Ne.create("analytics-unavailable",{originalErrorMessage:t==null?void 0:t.message})}}}/**
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
 */function WS(r=wi(),e={}){var s,i;r=be(r);const t=mn(r,Em);if(t.isInitialized()){const o=t.getOptions();if(jn(o,e))return t.getImmediate();throw Ne.create("already-initialized")}t.initialize({options:e});const n=t.getImmediate();return e.initialFetchResponse&&(n._initializePromise=Promise.all([n._storage.setLastSuccessfulFetchResponse(e.initialFetchResponse),n._storage.setActiveConfigEtag(((s=e.initialFetchResponse)==null?void 0:s.eTag)||""),n._storage.setActiveConfigTemplateVersion(e.initialFetchResponse.templateVersion||0),n._storageCache.setLastSuccessfulFetchTimestampMillis(Date.now()),n._storageCache.setLastFetchStatus("success"),n._storageCache.setActiveConfig(((i=e.initialFetchResponse)==null?void 0:i.config)||{})]).then(),n._isInitializationComplete=!0),n}async function QS(r){const e=be(r),[t,n]=await Promise.all([e._storage.getLastSuccessfulFetchResponse(),e._storage.getActiveConfigEtag()]);if(!t||!t.config||!t.eTag||!t.templateVersion||t.eTag===n)return!1;const i=new zS(e).updateActiveExperiments(t.experiments||[]);return await Promise.all([e._storageCache.setActiveConfig(t.config),e._storage.setActiveConfigEtag(t.eTag),e._storage.setActiveConfigTemplateVersion(t.templateVersion),i]),!0}function YS(r){const e=be(r);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}async function XS(r){const e=be(r),t=new mm;setTimeout(async()=>{t.abort()},e.settings.fetchTimeoutMillis);const n=e._storageCache.getCustomSignals();n&&e._logger.debug(`Fetching config with custom signals: ${JSON.stringify(n)}`);try{await e._client.fetch({cacheMaxAgeMillis:e.settings.minimumFetchIntervalMillis,signal:t,customSignals:n}),await e._storageCache.setLastFetchStatus("success")}catch(s){const i=JS(s,"fetch-throttle")?"throttle":"failure";throw await e._storageCache.setLastFetchStatus(i),s}}function ZS(r,e){return _m(be(r),e).asBoolean()}function eP(r,e){return _m(be(r),e).asNumber()}function _m(r,e){const t=be(r);t._isInitializationComplete||t._logger.debug(`A value was requested for key "${e}" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.`);const n=t._storageCache.getActiveConfig();return n&&n[e]!==void 0?new MB("remote",n[e]):t.defaultConfig&&t.defaultConfig[e]!==void 0?new MB("default",String(t.defaultConfig[e])):(t._logger.debug(`Returning static value for key "${e}". Define a default or remote value if this is unintentional.`),new MB("static"))}/**
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
 */class tP{constructor(e,t,n,s){this.client=e,this.storage=t,this.storageCache=n,this.logger=s}isCachedDataFresh(e,t){if(!t)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const n=Date.now()-t,s=n<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${n}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${s}.`),s}async fetch(e){const[t,n]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(n&&this.isCachedDataFresh(e.cacheMaxAgeMillis,t))return n;e.eTag=n&&n.eTag;const s=await this.client.fetch(e),i=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return s.status===200&&i.push(this.storage.setLastSuccessfulFetchResponse(s)),await Promise.all(i),s}}/**
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
 */function nP(r=navigator){return r.languages&&r.languages[0]||r.language}/**
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
 */class rP{constructor(e,t,n,s,i,o){this.firebaseInstallations=e,this.sdkVersion=t,this.namespace=n,this.projectId=s,this.apiKey=i,this.appId=o}async fetch(e){const[t,n]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),i=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,o={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},B={sdk_version:this.sdkVersion,app_instance_id:t,app_instance_id_token:n,app_id:this.appId,language_code:nP(),custom_signals:e.customSignals},c={method:"POST",headers:o,body:JSON.stringify(B)},u=fetch(i,c),h=new Promise((ee,Ce)=>{e.signal.addEventListener(()=>{const Ae=new Error("The operation was aborted.");Ae.name="AbortError",Ce(Ae)})});let d;try{await Promise.race([u,h]),d=await u}catch(ee){let Ce="fetch-client-network";throw(ee==null?void 0:ee.name)==="AbortError"&&(Ce="fetch-timeout"),Ne.create(Ce,{originalErrorMessage:ee==null?void 0:ee.message})}let p=d.status;const E=d.headers.get("ETag")||void 0;let _,S,L,H,W;if(d.status===200){let ee;try{ee=await d.json()}catch(Ce){throw Ne.create("fetch-client-parse",{originalErrorMessage:Ce==null?void 0:Ce.message})}_=ee.entries,S=ee.state,L=ee.templateVersion,H=ee.experimentDescriptions,W=ee.rolloutMetadata}if(S==="INSTANCE_STATE_UNSPECIFIED"?p=500:S==="NO_CHANGE"?p=304:(S==="NO_TEMPLATE"||S==="EMPTY_CONFIG")&&(_={},H=[],W=[]),p!==304&&p!==200)throw Ne.create("fetch-status",{httpStatus:p});return{status:p,eTag:E,config:_,templateVersion:L,experiments:H,rollouts:W}}}/**
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
 */function sP(r,e){return new Promise((t,n)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);r.addEventListener(()=>{clearTimeout(i),n(Ne.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function iP(r){if(!(r instanceof bt)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class oP{constructor(e,t){this.client=e,this.storage=t}async fetch(e){const t=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,t)}async attemptFetch(e,{throttleEndTimeMillis:t,backoffCount:n}){await sP(e.signal,t);try{const s=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),s}catch(s){if(!iP(s))throw s;const i={throttleEndTimeMillis:Date.now()+Oc(n),backoffCount:n+1};return await this.storage.setThrottleMetadata(i),this.attemptFetch(e,i)}}}/**
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
 */const aP=60*1e3,BP=12*60*60*1e3;class cP{get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}constructor(e,t,n,s,i,o,B){this.app=e,this._client=t,this._storageCache=n,this._storage=s,this._logger=i,this._realtimeHandler=o,this._analyticsProvider=B,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:aP,minimumFetchIntervalMillis:BP},this.defaultConfig={}}}/**
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
 */function So(r,e){const t=r.target.error||void 0;return Ne.create(e,{originalErrorMessage:t&&(t==null?void 0:t.message)})}const vn="app_namespace_store",uP="firebase_remote_config",lP=1;function hP(){return new Promise((r,e)=>{try{const t=indexedDB.open(uP,lP);t.onerror=n=>{e(So(n,"storage-open"))},t.onsuccess=n=>{r(n.target.result)},t.onupgradeneeded=n=>{const s=n.target.result;switch(n.oldVersion){case 0:s.createObjectStore(vn,{keyPath:"compositeKey"})}}}catch(t){e(Ne.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}})}class Dm{getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getActiveExperiments(){return this.get("active_experiments")}setActiveExperiments(e){return this.set("active_experiments",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}getCustomSignals(){return this.get("custom_signals")}getRealtimeBackoffMetadata(){return this.get("realtime_backoff_metadata")}setRealtimeBackoffMetadata(e){return this.set("realtime_backoff_metadata",e)}getActiveConfigTemplateVersion(){return this.get("last_known_template_version")}setActiveConfigTemplateVersion(e){return this.set("last_known_template_version",e)}}class fP extends Dm{constructor(e,t,n,s=hP()){super(),this.appId=e,this.appName=t,this.namespace=n,this.openDbPromise=s}async setCustomSignals(e){const n=(await this.openDbPromise).transaction([vn],"readwrite"),s=await this.getWithTransaction("custom_signals",n),i=wm(e,s||{});return await this.setWithTransaction("custom_signals",i,n),i}async getWithTransaction(e,t){return new Promise((n,s)=>{const i=t.objectStore(vn),o=this.createCompositeKey(e);try{const B=i.get(o);B.onerror=c=>{s(So(c,"storage-get"))},B.onsuccess=c=>{const u=c.target.result;n(u?u.value:void 0)}}catch(B){s(Ne.create("storage-get",{originalErrorMessage:B==null?void 0:B.message}))}})}async setWithTransaction(e,t,n){return new Promise((s,i)=>{const o=n.objectStore(vn),B=this.createCompositeKey(e);try{const c=o.put({compositeKey:B,value:t});c.onerror=u=>{i(So(u,"storage-set"))},c.onsuccess=()=>{s()}}catch(c){i(Ne.create("storage-set",{originalErrorMessage:c==null?void 0:c.message}))}})}async get(e){const n=(await this.openDbPromise).transaction([vn],"readonly");return this.getWithTransaction(e,n)}async set(e,t){const s=(await this.openDbPromise).transaction([vn],"readwrite");return this.setWithTransaction(e,t,s)}async delete(e){const t=await this.openDbPromise;return new Promise((n,s)=>{const o=t.transaction([vn],"readwrite").objectStore(vn),B=this.createCompositeKey(e);try{const c=o.delete(B);c.onerror=u=>{s(So(u,"storage-delete"))},c.onsuccess=()=>{n()}}catch(c){s(Ne.create("storage-delete",{originalErrorMessage:c==null?void 0:c.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}class dP extends Dm{constructor(){super(...arguments),this.storage={}}async get(e){return Promise.resolve(this.storage[e])}async set(e,t){return this.storage[e]=t,Promise.resolve(void 0)}async delete(e){return this.storage[e]=void 0,Promise.resolve()}async setCustomSignals(e){const t=this.storage.custom_signals||{};return this.storage.custom_signals=wm(e,t),Promise.resolve(this.storage.custom_signals)}}function wm(r,e){const t={...e,...r},n=Object.fromEntries(Object.entries(t).filter(([s,i])=>i!==null).map(([s,i])=>typeof i=="number"?[s,i.toString()]:[s,i]));if(Object.keys(n).length>Ad)throw Ne.create("custom-signal-max-allowed-signals",{maxSignals:Ad});return n}/**
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
 */class CP{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}getCustomSignals(){return this.customSignals}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),t=this.storage.getLastSuccessfulFetchTimestampMillis(),n=this.storage.getActiveConfig(),s=this.storage.getCustomSignals(),i=await e;i&&(this.lastFetchStatus=i);const o=await t;o&&(this.lastSuccessfulFetchTimestampMillis=o);const B=await n;B&&(this.activeConfig=B);const c=await s;c&&(this.customSignals=c)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}async setCustomSignals(e){this.customSignals=await this.storage.setCustomSignals(e)}}/**
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
 */class pP{constructor(e){this.allowedEvents_=e,this.listeners_={},zB(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let s=0;s<n.length;s++)n[s].callback.apply(n[s].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const s=this.getInitialEvent(e);s&&t.apply(n,s)}off(e,t,n){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===t&&(!n||n===s[i].context)){s.splice(i,1);return}}validateEventType_(e){zB(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Qu extends pP{static getInstance(){return new Qu}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const n=!document[e];n!==this.visible_&&(this.visible_=n,this.trigger("visible",n))},!1)}getInitialEvent(e){return zB(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const gP="X-Goog-Api-Key",mP="X-Goog-Firebase-Installations-Auth",xB=8,vd=3,bd=-1,Sd=0,Pd="featureDisabled",Od="retryIntervalSeconds",Nd="latestTemplateVersionNumber",EP="_exp_rollout";class _P{constructor(e,t,n,s,i,o,B,c,u,h){this.firebaseInstallations=e,this.storage=t,this.sdkVersion=n,this.namespace=s,this.projectId=i,this.apiKey=o,this.appId=B,this.logger=c,this.storageCache=u,this.cachingClient=h,this.observers=new Set,this.isConnectionActive=!1,this.isRealtimeDisabled=!1,this.httpRetriesRemaining=xB,this.isInBackground=!1,this.decoder=new TextDecoder("utf-8"),this.isClosingConnection=!1,this.propagateError=d=>this.observers.forEach(p=>{var E;return(E=p.error)==null?void 0:E.call(p,d)}),this.isStatusCodeRetryable=d=>!d||[408,429,502,503,504].includes(d),this.setRetriesRemaining(),Qu.getInstance().on("visible",this.onVisibilityChange,this)}async setRetriesRemaining(){const e=await this.storage.getRealtimeBackoffMetadata(),t=(e==null?void 0:e.numFailedStreams)||0;this.httpRetriesRemaining=Math.max(xB-t,1)}async updateBackoffMetadataWithLastFailedStreamConnectionTime(e){var s;const t=(((s=await this.storage.getRealtimeBackoffMetadata())==null?void 0:s.numFailedStreams)||0)+1,n=Oc(t,6e4,2);await this.storage.setRealtimeBackoffMetadata({backoffEndTimeMillis:new Date(e.getTime()+n),numFailedStreams:t})}async updateBackoffMetadataWithRetryInterval(e){const t=Date.now(),n=e*1e3,s=new Date(t+n);await this.storage.setRealtimeBackoffMetadata({backoffEndTimeMillis:s,numFailedStreams:0}),await this.retryHttpConnectionWhenBackoffEnds()}async closeRealtimeHttpConnection(){if(!this.isClosingConnection){this.isClosingConnection=!0;try{this.reader&&await this.reader.cancel()}catch{this.logger.debug("Failed to cancel the reader, connection was lost.")}finally{this.reader=void 0}this.controller&&(await this.controller.abort(),this.controller=void 0),this.isClosingConnection=!1}}async resetRealtimeBackoff(){await this.storage.setRealtimeBackoffMetadata({backoffEndTimeMillis:new Date(-1),numFailedStreams:0})}resetRetryCount(){this.httpRetriesRemaining=xB}async establishRealtimeConnection(e,t,n,s){const i=await this.storage.getActiveConfigEtag(),o=await this.storage.getActiveConfigTemplateVersion(),B={[gP]:this.apiKey,[mP]:n,"Content-Type":"application/json",Accept:"application/json","If-None-Match":i||"*","Content-Encoding":"gzip"},c={project:this.projectId,namespace:this.namespace,lastKnownVersionNumber:o,appId:this.appId,sdkVersion:this.sdkVersion,appInstanceId:t};return await fetch(e,{method:"POST",headers:B,body:JSON.stringify(c),signal:s})}getRealtimeUrl(){const t=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfigrealtime.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:streamFetchInvalidations?key=${this.apiKey}`;return new URL(t)}async createRealtimeConnection(){const[e,t]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken(!1)]);this.controller=new AbortController;const n=this.getRealtimeUrl();return await this.establishRealtimeConnection(n,e,t,this.controller.signal)}async retryHttpConnectionWhenBackoffEnds(){let e=await this.storage.getRealtimeBackoffMetadata();e||(e={backoffEndTimeMillis:new Date(bd),numFailedStreams:Sd});const t=new Date(e.backoffEndTimeMillis).getTime(),n=Date.now(),s=Math.max(0,t-n);await this.makeRealtimeHttpConnection(s)}setIsHttpConnectionRunning(e){this.isConnectionActive=e}checkAndSetHttpConnectionFlagIfNotRunning(){const e=this.canEstablishStreamConnection();return e&&this.setIsHttpConnectionRunning(!0),e}fetchResponseIsUpToDate(e,t){return e.config!=null&&e.templateVersion?e.templateVersion>=t:this.storageCache.getLastFetchStatus()==="success"}parseAndValidateConfigUpdateMessage(e){const t=e.indexOf("{"),n=e.indexOf("}",t);return t<0||n<0||t>=n?"":e.substring(t,n+1)}isEventListenersEmpty(){return this.observers.size===0}getRandomInt(e){return Math.floor(Math.random()*e)}executeAllListenerCallbacks(e){this.observers.forEach(t=>t.next(e))}getChangedParams(e,t,n,s){const i=new Set,o=new Set(Object.keys(e||{})),B=new Set(Object.keys(t||{})),c=n.experiments||[],u=(s==null?void 0:s.experiments)||[],h=this.createExperimentsMap(c),d=this.createExperimentsMap(u),p=n.rollouts||[],E=(s==null?void 0:s.rollouts)||[],_=this.createRolloutsMap(p),S=this.createRolloutsMap(E);for(const L of o){if(!B.has(L)||e[L]!==t[L]){i.add(L);continue}if(h.has(L)!==d.has(L)){i.add(L);continue}const H=h.get(L),W=d.get(L);if(H&&W&&!this.areExperimentsEqual(H,W)){i.add(L);continue}if(_.has(L)!==S.has(L)){i.add(L);continue}const ee=_.get(L),Ce=S.get(L);ee&&Ce&&!this.areRolloutsEqual(ee,Ce)&&i.add(L)}for(const L of B)o.has(L)||i.add(L);return i}areExperimentsEqual(e,t){return e.experimentId===t.experimentId&&e.variantId===t.variantId&&e.timeToLiveMillis===t.timeToLiveMillis&&e.triggerTimeoutMillis===t.triggerTimeoutMillis}areRolloutsEqual(e,t){if(e.size!==t.size)return!1;for(const[n,s]of e)if(t.get(n)!==s)return!1;return!0}createExperimentsMap(e){const t=new Map;for(const n of e)if(!(!n.affectedParameterKeys||n.experimentId.startsWith(EP)))for(const s of n.affectedParameterKeys)t.set(s,n);return t}createRolloutsMap(e){const t=new Map;for(const n of e){const s=n.rolloutId,i=n.variantId,o=n.affectedParameterKeys||[];for(const B of o){let c=t.get(B);c||(c=new Map,t.set(B,c)),c.set(s,i)}}return t}async fetchLatestConfig(e,t){const n=e-1,s=vd-n,i=this.storageCache.getCustomSignals();i&&this.logger.debug(`Fetching config with custom signals: ${JSON.stringify(i)}`);const o=new mm;try{const B={cacheMaxAgeMillis:0,signal:o,customSignals:i,fetchType:"REALTIME",fetchAttempt:s},c=await this.storage.getLastSuccessfulFetchResponse(),u=await this.cachingClient.fetch(B);let h=await this.storage.getActiveConfig();if(!this.fetchResponseIsUpToDate(u,t)){this.logger.debug("Fetched template version is the same as SDK's current version. Retrying fetch."),await this.autoFetch(n,t);return}if(u.config==null){this.logger.debug("The fetch succeeded, but the backend had no updates.");return}h==null&&(h={});const d=this.getChangedParams(u.config,h,u,c);if(d.size===0){this.logger.debug("Config was fetched, but no params changed.");return}const p={getUpdatedKeys(){return new Set(d)}};this.executeAllListenerCallbacks(p)}catch(B){const c=B instanceof Error?B.message:String(B),u=Ne.create("update-not-fetched",{originalErrorMessage:`Failed to auto-fetch config update: ${c}`});this.propagateError(u)}}async autoFetch(e,t){if(e===0){const i=Ne.create("update-not-fetched",{originalErrorMessage:"Unable to fetch the latest version of the template."});this.propagateError(i);return}const s=this.getRandomInt(4)*1e3;await new Promise(i=>setTimeout(i,s)),await this.fetchLatestConfig(e,t)}async handleNotifications(e){let t,n="";for(;;){const{done:s,value:i}=await e.read();if(s)break;if(t=this.decoder.decode(i,{stream:!0}),n+=t,t.includes("}")){if(n=this.parseAndValidateConfigUpdateMessage(n),n.length===0)continue;try{const o=JSON.parse(n);if(this.isEventListenersEmpty())break;if(Pd in o&&o[Pd]===!0){const B=Ne.create("realtime-unavailable",{originalErrorMessage:"The server is temporarily unavailable. Try again in a few minutes."});this.propagateError(B);break}if(Nd in o){const B=await this.storage.getActiveConfigTemplateVersion(),c=Number(o[Nd]);B&&c>B&&await this.autoFetch(vd,c)}if(Od in o){const B=Number(o[Od]);await this.updateBackoffMetadataWithRetryInterval(B)}}catch(o){this.logger.debug("Unable to parse latest config update message.",o);const B=o instanceof Error?o.message:String(o);this.propagateError(Ne.create("update-message-invalid",{originalErrorMessage:B}))}n=""}}}async listenForNotifications(e){try{await this.handleNotifications(e)}catch{this.isInBackground||this.logger.debug("Real-time connection was closed due to an exception.")}}async prepareAndBeginRealtimeHttpStream(){if(!this.checkAndSetHttpConnectionFlagIfNotRunning())return;let e=await this.storage.getRealtimeBackoffMetadata();e||(e={backoffEndTimeMillis:new Date(bd),numFailedStreams:Sd});const t=e.backoffEndTimeMillis.getTime();if(Date.now()<t){await this.retryHttpConnectionWhenBackoffEnds();return}let n,s;try{if(n=await this.createRealtimeConnection(),s=n.status,n.ok&&n.body){this.resetRetryCount(),await this.resetRealtimeBackoff();const i=n.body.getReader();this.reader=i,await this.listenForNotifications(i)}}catch(i){this.isInBackground?this.resetRetryCount():this.logger.debug("Exception connecting to real-time RC backend. Retrying the connection...:",i)}finally{await this.closeRealtimeHttpConnection(),this.setIsHttpConnectionRunning(!1);const i=!this.isInBackground&&(s===void 0||this.isStatusCodeRetryable(s));if(i&&await this.updateBackoffMetadataWithLastFailedStreamConnectionTime(new Date),i||n!=null&&n.ok)await this.retryHttpConnectionWhenBackoffEnds();else{const o=`Unable to connect to the server. HTTP status code: ${s}`,B=Ne.create("stream-error",{originalErrorMessage:o});this.propagateError(B)}}}canEstablishStreamConnection(){const e=this.observers.size>0,t=!this.isRealtimeDisabled,n=!this.isConnectionActive,s=!this.isInBackground;return e&&t&&n&&s}async makeRealtimeHttpConnection(e){if(this.canEstablishStreamConnection()){if(this.httpRetriesRemaining>0)this.httpRetriesRemaining--,await new Promise(t=>setTimeout(t,e)),this.prepareAndBeginRealtimeHttpStream();else if(!this.isInBackground){const t=Ne.create("stream-error",{originalErrorMessage:"Unable to connect to the server. Check your connection and try again."});this.propagateError(t)}}}async beginRealtime(){this.observers.size>0&&await this.makeRealtimeHttpConnection(0)}addObserver(e){this.observers.add(e),this.beginRealtime()}removeObserver(e){this.observers.has(e)&&this.observers.delete(e)}async onVisibilityChange(e){this.isInBackground=!e,e?e&&await this.beginRealtime():await this.closeRealtimeHttpConnection()}}/**
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
 */function DP(){Ft(new vt(Em,r,"PUBLIC").setMultipleInstances(!0)),ct(kB,Td),ct(kB,Td,"esm2020");function r(e,{options:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate(),i=e.getProvider("analytics-internal"),{projectId:o,apiKey:B,appId:c}=n.options;if(!o)throw Ne.create("registration-project-id");if(!B)throw Ne.create("registration-api-key");if(!c)throw Ne.create("registration-app-id");const u=(t==null?void 0:t.templateId)||"firebase",h=oa()?new fP(c,n.name,u):new dP,d=new CP(h),p=new as(kB);p.logLevel=ue.ERROR;const E=new rP(s,Jn,u,o,B,c),_=new oP(E,h),S=new tP(_,h,d,p),L=new _P(s,h,Jn,u,o,B,c,p,d,S),H=new cP(n,S,d,h,p,L,i);return YS(H),H}}/**
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
 */async function wP(r){return r=be(r),await XS(r),QS(r)}/**
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
 */DP();const ym={apiKey:"AIzaSyDWhXi3-KCL8bA1KBM7KqrMYATy4G7Y8YA",authDomain:"jelas-hybrid-ai.firebaseapp.com",projectId:"jelas-hybrid-ai",storageBucket:"jelas-hybrid-ai.firebasestorage.app",messagingSenderId:"328163563317",appId:"1:328163563317:web:55599a2f36932b3448de7c"},Im="6LcSkCkuAAAAAIVT9BPDtR7gaTyczwqHdufmdWR-",Ei=!Object.values(ym).some(r=>r==="REPLACE_ME")&&Im!=="REPLACE_ME",Yu={cloudEnabled:!0,maxInputChars:6e3};function yP(){if(!Ei)return null;const r=Wd(ym);let e=null;try{e=Ew(r,{provider:new Jc(Im),isTokenAutoRefreshEnabled:!0})}catch(n){console.warn("[jelas] App Check initialisation skipped:",n)}const t=WS(r);return t.settings={minimumFetchIntervalMillis:6e4,fetchTimeoutMillis:1e4},t.defaultConfig={...Yu},{app:r,appCheck:e,auth:_I(r),db:zb(r),remoteConfig:t}}const Ct=yP();async function IP(){if(!Ct)return{...Yu};try{await wP(Ct.remoteConfig)}catch(r){console.warn("[jelas] Remote Config fetch failed, using defaults:",r)}return{cloudEnabled:ZS(Ct.remoteConfig,"cloudEnabled"),maxInputChars:eP(Ct.remoteConfig,"maxInputChars")}}class Fa extends Error{constructor(e){super(e),this.name="AiUnavailableError"}}let Rc="auto",Xu=!0,yr=null;function TP(r){Rc=r}function AP(r){Xu=r}function RP(r){yr=r}const ka="gemini-2.5-flash";let VB=null,GB=null,HB=null;function Zu(){if(!Ct)throw new Fa("Firebase is not configured yet. Add your project config in src/firebase-config.ts to enable live AI.");if(!VB||!GB||!HB){const r=ND(Ct.app,{backend:new aa});VB=gB(r,{mode:Tt.PREFER_ON_DEVICE}),GB=gB(r,{mode:Tt.ONLY_ON_DEVICE}),HB=gB(r,{model:ka})}return{hybrid:VB,device:GB,cloud:HB}}async function Tm(){var r;try{const e=window,t=e.LanguageModel??((r=e.ai)==null?void 0:r.languageModel);if(!t)return"unsupported";if(typeof t.availability=="function")switch(await t.availability()){case"available":return"available";case"downloadable":return"downloadable";case"downloading":return"downloading";case"unavailable":return"unavailable";default:return"unknown"}if(typeof t.capabilities=="function"){const n=await t.capabilities();if(n.available==="readily")return"available";if(n.available==="after-download")return"downloadable";if(n.available==="no")return"unavailable"}return"unknown"}catch{return"unknown"}}async function vc(r,e,t,n,s){const i=performance.now(),B={text:(await r.generateContent(e)).response.text().trim(),route:t,latencyMs:Math.round(performance.now()-i),modelLabel:n};return yr==null||yr({...B,task:s}),B}async function vP(r,e="Hybrid request"){const{hybrid:t,device:n}=Zu();if(Rc==="cloud")return el(r,e);if(Rc==="device")return vc(n,r,"device","Gemini Nano (on-device)",e);const i=await Tm()==="available"?"device":"cloud";return vc(t,r,i,i==="device"?"Gemini Nano (on-device)":`${ka} (cloud fallback)`,e)}async function el(r,e="Cloud request"){if(!Xu)throw new Fa("Cloud features are currently disabled by Remote Config.");const{cloud:t}=Zu();return vc(t,r,"cloud",ka,e)}const tl="Write for a reader with low literacy: short sentences, everyday words, no jargon. Keep every fact, name, date and amount from the original. Never invent information that is not in the document.";async function bP(r){const e=`Rewrite the document below in plain, simple language.
${tl}

Respond in exactly this format:
PLAIN:
<the plain-language rewrite>

KEY POINTS:
- <point 1>
- <point 2>
- <point 3>

DOCUMENT:
"""
${r}
"""`,t=await vP(e,"Simplify"),n=t.text.match(/PLAIN:\s*([\s\S]*?)(?:\n\s*KEY POINTS:|$)/i),s=t.text.match(/KEY POINTS:\s*([\s\S]*)$/i),i=s?s[1].split(`
`).map(o=>o.replace(/^[\s\-*•]+/,"").trim()).filter(Boolean).slice(0,5):[];return{...t,plain:((n==null?void 0:n[1])??t.text).trim(),bullets:i}}async function SP(r){const e=`Explain the document below in depth for a non-expert reader.
${tl}
Cover: what this document is, why the reader received it, what it asks of them, any deadlines, costs or risks, and what could happen if they ignore it. Use clear headings and short paragraphs.

DOCUMENT:
"""
${r}
"""`;return el(e,"Explain deeply")}async function PP(r){const e=`From the document below, extract an action checklist for the reader.
${tl}
Respond with a Markdown checklist only, one item per line, in this form: "- [ ] <action> (by <date>, <amount if any>)". Include every concrete step, deadline, payment and document the reader must act on. If the document asks for nothing, reply with exactly: "- [ ] No action needed — this document is for information only."

DOCUMENT:
"""
${r}
"""`;return el(e,"Action checklist")}let Po=null,Am="";function Rm(r){Po=null,Am=r}async function OP(r){if(!Xu)throw new Fa("Cloud features are currently disabled by Remote Config.");const{cloud:e}=Zu();Po||(Po=e.startChat({history:[{role:"user",parts:[{text:`You are Jelas, a patient reading companion. The user will ask questions about this document. Answer only from the document, in simple language. If the answer is not in the document, say so honestly.

DOCUMENT:
"""
${Am}
"""`}]},{role:"model",parts:[{text:"Understood. I will answer questions about this document in simple language."}]}]}));const t=performance.now(),s={text:(await Po.sendMessage(r)).response.text().trim(),route:"cloud",latencyMs:Math.round(performance.now()-t),modelLabel:ka};return yr==null||yr({...s,task:"Q&A"}),s}let UB=null;function nl(){if(!Ct)return Promise.resolve(null);if(!UB){const{auth:r}=Ct;UB=new Promise(e=>{const t=cy(r,n=>{n&&(t(),e(n))});ry(r).catch(n=>{console.warn("[jelas] Anonymous sign-in failed:",n),t(),e(null)})})}return UB}function vm(r){if(!Ct)throw new Error("Firestore unavailable");return MA(Ct.db,"users",r,"documents")}async function NP(r,e,t){const n=await nl();return!n||!Ct?!1:(await rS(vm(n.uid),{title:r,original:e,simplified:t,createdAt:$A()}),!0)}async function LP(){const r=await nl();return!r||!Ct?[]:(await tS(Zb(vm(r.uid),eS("createdAt","desc")))).docs.map(t=>{const n=t.data();return{id:t.id,title:String(n.title??"Untitled"),original:String(n.original??""),simplified:String(n.simplified??""),createdAt:n.createdAt?n.createdAt.toDate():null}})}async function FP(r){const e=await nl();return!e||!Ct?!1:(await nS(ig(Ct.db,"users",e.uid,"documents",r)),!0)}const kP=[{id:"medicine",title:"Medicine label",text:`AMOXICILLIN 500 mg CAPSULES — Rx only.
Take one (1) capsule by mouth every eight (8) hours for ten (10) days, until all medication is finished, even if symptoms resolve earlier. Do not skip doses. If a dose is missed, take it as soon as remembered unless it is almost time for the next dose; never double up. May be taken with food to reduce gastrointestinal upset. Store at controlled room temperature 20–25 °C (68–77 °F), away from moisture. Contraindicated in patients with a history of hypersensitivity to penicillin. Discontinue and seek immediate medical attention in the event of rash, swelling of the lips or tongue, or difficulty breathing. Avoid alcohol consumption during treatment. Keep out of reach of children.`},{id:"school",title:"School letter",text:`Dear Parent/Guardian,
We are writing to inform you that the Year 6 residential trip to Camp Wattle will take place from Monday 14 December to Friday 18 December 2026. The total cost per pupil is $185, payable in full no later than Friday 27 November 2026 via the school office or the parent portal. A non-refundable deposit of $50 was due on 30 October; if you have not yet paid the deposit, please contact the office immediately as places cannot be guaranteed after 20 November. Pupils must bring a signed medical consent form and an up-to-date list of any medication, which will be administered by designated staff in accordance with the school's Medication Administration Policy. Financial assistance is available for families experiencing hardship; applications are confidential and must be submitted by 20 November 2026.`},{id:"bank",title:"Bank notice",text:`IMPORTANT NOTICE — CHANGES TO YOUR ACCOUNT TERMS AND CONDITIONS.
Effective 1 January 2027, the monthly account maintenance fee for Everyday Transaction Accounts will increase from $4.00 to $6.50, debited on the last business day of each month. The fee will be waived for any month in which deposits totalling $2,000 or more are credited to the account before the final business day, excluding transfers between your own accounts. Additionally, the interest rate applicable to balances below $5,000 will decrease by 0.25% p.a. If you do not agree to these changes, you may close your account without charge before 31 December 2026; continued use of the account after the effective date constitutes acceptance of the revised terms. For disputes, contact our complaints team within 30 days of the relevant statement date.`}];function xe(r){const e=document.getElementById(r);if(!e)throw new Error(`Missing element #${r}`);return e}const tn=xe("doc-input"),MP=xe("char-count"),Ld=xe("action-status"),bc=xe("results"),xP=xe("device-status"),jB=xe("cloud-status"),VP=xe("request-count"),GP=xe("last-route"),JB=xe("route-log"),Fd=xe("router-dot"),kd=xe("chat-log"),HP=xe("chat-form"),Md=xe("chat-input"),xd=xe("library-list"),qB=xe("library-status"),Mi={simplify:xe("btn-simplify"),explain:xe("btn-explain"),checklist:xe("btn-checklist"),save:xe("btn-save")};let na=Yu.maxInputChars,ra="",Vd=0;function tr(r){return r.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Lt(r,e=!1){Ld.textContent=r,Ld.classList.toggle("error",e)}function sa(r){for(const e of Object.values(Mi))e.disabled=r}function rl(){return tn.value.trim()}function sl(){const r=rl();return r?r.length>na?(Lt(`That document is ${r.length} characters; the current limit is ${na}. Please shorten it.`,!0),null):r:(Lt("Paste a document first — or pick one of the samples above.",!0),tn.focus(),null)}function il(r){return r instanceof Fa?r.message:r instanceof Error?`Something went wrong: ${r.message}`:"Something went wrong. Please try again."}const UP={available:"Gemini Nano — ready on this device",downloadable:"Gemini Nano — downloadable",downloading:"Gemini Nano — downloading…",unavailable:"Gemini Nano — not available here",unsupported:"Not supported in this browser (use Chrome)",unknown:"Status unknown"};async function jP(){const r=await Tm();xP.textContent=UP[r]}function JP(r){const e=r.route==="device"?"Device":"Cloud";return`<span class="result-meta"><span class="route-tag route-${r.route}">${e} · ${tr(r.modelLabel)}</span><span class="latency">${r.latencyMs} ms</span></span>`}RP(r=>{var t;Vd+=1,VP.textContent=String(Vd),GP.textContent=r.route==="device"?"On-device":"Cloud";const e=document.createElement("li");for(e.innerHTML=`<span class="route-tag route-${r.route}">${r.route==="device"?"Device":"Cloud"}</span><span class="task">${tr(r.task)}</span><span class="latency">${r.latencyMs} ms</span>`,JB.prepend(e);JB.children.length>6;)(t=JB.lastChild)==null||t.remove()});document.querySelectorAll('input[name="mode"]').forEach(r=>{r.addEventListener("change",()=>{TP(r.value),Lt(r.value==="device"?"Device-only mode: requests will not leave this device. Deep features still need the cloud.":r.value==="cloud"?"Cloud mode: every request uses the cloud model.":"Auto mode: quick tasks prefer your device, deep tasks use the cloud.")})});function ol(r,e,t){const n=document.createElement("article");n.className="card",n.innerHTML=`<div class="card-head"><h2>${tr(r)}</h2>${JP(e)}</div><div class="result-body">${t}</div>`,bc.prepend(n)}function Ma(r){return tr(r)}async function al(r,e,t){const n=sl();if(n){sa(!0),Lt(r);try{const s=await e(n);t(s),Lt("Done.")}catch(s){Lt(il(s),!0)}finally{sa(!1)}}}Mi.simplify.addEventListener("click",()=>{al("Simplifying — preferring your device…",r=>bP(r),r=>{ra=r.plain;const e=r.bullets.length?`<h3>Key points</h3><ul>${r.bullets.map(t=>`<li>${tr(t)}</li>`).join("")}</ul>`:"";ol("In plain words",r,`${Ma(r.plain)}${e}`),Rm(rl())})});Mi.explain.addEventListener("click",()=>{al("Asking the cloud model for a deep explanation…",r=>SP(r),r=>ol("Deep explanation",r,Ma(r.text)))});Mi.checklist.addEventListener("click",()=>{al("Extracting your action checklist…",r=>PP(r),r=>{const e=r.text.split(`
`).map(t=>t.trim()).filter(Boolean).map(t=>{const n=t.replace(/^-\s*\[\s?x?\]\s*/i,"").replace(/^-\s*/,"");return`<li><label><input type="checkbox" /> ${tr(n)}</label></li>`}).join("");ol("Action checklist",r,e?`<ul style="list-style:none;padding-left:0">${e}</ul>`:Ma(r.text))})});function KB(r,e){var n;(n=kd.querySelector(".chat-empty"))==null||n.remove();const t=document.createElement("div");t.className=`chat-msg ${r}`,t.textContent=e,kd.appendChild(t),t.scrollIntoView({behavior:"smooth",block:"nearest"})}HP.addEventListener("submit",r=>{r.preventDefault();const e=Md.value.trim();!e||!sl()||(KB("user",e),Md.value="",(async()=>{try{const n=await OP(e);KB("assistant",n.text)}catch(n){KB("assistant",il(n))}})())});tn.addEventListener("input",()=>{MP.textContent=`${tn.value.length} characters`,Rm(rl())});document.querySelectorAll("[data-sample]").forEach(r=>{r.addEventListener("click",()=>{const e=kP.find(t=>t.id===r.dataset.sample);e&&(tn.value=e.text,tn.dispatchEvent(new Event("input")),Lt(`Loaded the “${e.title}” sample. Hit Simplify to try it.`),tn.focus())})});async function Bl(){var r,e;if(!Ei){qB.textContent="unavailable in demo mode";return}try{const t=await LP();qB.textContent=t.length?`${t.length} saved`:"nothing saved yet",xd.innerHTML="";for(const n of t){const s=document.createElement("li");s.className="library-item";const i=n.createdAt?n.createdAt.toLocaleString():"just now";s.innerHTML=`<span class="title">${tr(n.title)}</span><span class="meta">${tr(i)}</span><div class="row"><button type="button" data-act="load">Load</button><button type="button" data-act="del" class="danger">Delete</button></div>`,(r=s.querySelector('[data-act="load"]'))==null||r.addEventListener("click",()=>{tn.value=n.original,tn.dispatchEvent(new Event("input")),ra=n.simplified,bc.innerHTML="";const o=document.createElement("article");o.className="card",o.innerHTML=`<div class="card-head"><h2>In plain words</h2></div><div class="result-body">${Ma(n.simplified)}</div>`,bc.appendChild(o),Lt(`Loaded “${n.title}” from your Library.`)}),(e=s.querySelector('[data-act="del"]'))==null||e.addEventListener("click",()=>{(async()=>(await FP(n.id),await Bl()))()}),xd.appendChild(s)}}catch(t){qB.textContent="could not load",console.warn("[jelas] Library load failed:",t)}}Mi.save.addEventListener("click",()=>{(async()=>{const r=sl();if(r){if(!Ei){Lt("The Library needs Firebase — add your config in src/firebase-config.ts first.",!0);return}if(!ra){Lt("Simplify the document first, then save it to your Library.",!0);return}sa(!0);try{const e=r.split(`
`)[0].slice(0,60)||"Untitled document",t=await NP(e,r,ra);Lt(t?"Saved to your Library.":"Could not save — sign-in failed.",!t),t&&await Bl()}catch(e){Lt(il(e),!0)}finally{sa(!1)}}})()});async function qP(){Ei?(jB.textContent="Firebase AI Logic — connected",Fd.classList.add("on")):(xe("config-banner").hidden=!1,jB.textContent="Not configured (demo mode)",Fd.classList.remove("on")),await jP();const r=await IP();na=r.maxInputChars,AP(r.cloudEnabled),tn.maxLength=na,!r.cloudEnabled&&Ei&&(jB.textContent="Disabled by Remote Config"),await Bl()}qP();
