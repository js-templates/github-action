"use strict";var e=require("os"),t=require("fs"),r=require("path"),n=require("http"),o=require("https");require("net");var s=require("tls"),i=require("events");require("assert");var a=require("util");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=u(e),d=u(t),l=u(r),p=u(n),h=u(o),f=u(s),m=u(i),v=u(a),g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},w={},y={},_={};Object.defineProperty(_,"__esModule",{value:!0}),_.toCommandProperties=_.toCommandValue=void 0,_.toCommandValue=function(e){return null==e?"":"string"==typeof e||e instanceof String?e:JSON.stringify(e)},_.toCommandProperties=function(e){return Object.keys(e).length?{title:e.title,file:e.file,line:e.startLine,endLine:e.endLine,col:e.startColumn,endColumn:e.endColumn}:{}};var O=g&&g.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),b=g&&g.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),E=g&&g.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.hasOwnProperty.call(e,r)&&O(t,e,r);return b(t,e),t};Object.defineProperty(y,"__esModule",{value:!0}),y.issue=y.issueCommand=void 0;const R=E(c.default),C=_;function S(e,t,r){const n=new A(e,t,r);process.stdout.write(n.toString()+R.EOL)}y.issueCommand=S,y.issue=function(e,t=""){S(e,{},t)};class A{constructor(e,t,r){e||(e="missing.command"),this.command=e,this.properties=t,this.message=r}toString(){let e="::"+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let r=!0;for(const n in this.properties)if(this.properties.hasOwnProperty(n)){const o=this.properties[n];o&&(r?r=!1:e+=",",e+=`${n}=${t=o,C.toCommandValue(t).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}`)}}var t;return e+=`::${function(e){return C.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}(this.message)}`,e}}var T={},k=g&&g.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),P=g&&g.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),q=g&&g.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.hasOwnProperty.call(e,r)&&k(t,e,r);return P(t,e),t};Object.defineProperty(T,"__esModule",{value:!0}),T.issueCommand=void 0;const x=q(d.default),U=q(c.default),H=_;T.issueCommand=function(e,t){const r=process.env[`GITHUB_${e}`];if(!r)throw new Error(`Unable to find environment variable for file command ${e}`);if(!x.existsSync(r))throw new Error(`Missing file at path: ${r}`);x.appendFileSync(r,`${H.toCommandValue(t)}${U.EOL}`,{encoding:"utf8"})};var N={},j={},M={};function $(e){if(!e.hostname)return!1;const t=process.env.no_proxy||process.env.NO_PROXY||"";if(!t)return!1;let r;e.port?r=Number(e.port):"http:"===e.protocol?r=80:"https:"===e.protocol&&(r=443);const n=[e.hostname.toUpperCase()];"number"==typeof r&&n.push(`${n[0]}:${r}`);for(const e of t.split(",").map((e=>e.trim().toUpperCase())).filter((e=>e)))if(n.some((t=>t===e)))return!0;return!1}Object.defineProperty(M,"__esModule",{value:!0}),M.checkBypass=M.getProxyUrl=void 0,M.getProxyUrl=function(e){const t="https:"===e.protocol;if($(e))return;const r=t?process.env.https_proxy||process.env.HTTPS_PROXY:process.env.http_proxy||process.env.HTTP_PROXY;return r?new URL(r):void 0},M.checkBypass=$;var D,L={exports:{}},B={},I=f.default,G=p.default,F=h.default,J=m.default,V=v.default;function Y(e){var t=this;t.options=e||{},t.proxyOptions=t.options.proxy||{},t.maxSockets=t.options.maxSockets||G.Agent.defaultMaxSockets,t.requests=[],t.sockets=[],t.on("free",(function(e,r,n,o){for(var s=K(r,n,o),i=0,a=t.requests.length;i<a;++i){var u=t.requests[i];if(u.host===s.host&&u.port===s.port)return t.requests.splice(i,1),void u.request.onSocket(e)}e.destroy(),t.removeSocket(e)}))}function z(e,t){var r=this;Y.prototype.createSocket.call(r,e,(function(n){var o=e.request.getHeader("host"),s=Q({},r.options,{socket:n,servername:o?o.replace(/:.*$/,""):e.host}),i=I.connect(0,s);r.sockets[r.sockets.indexOf(n)]=i,t(i)}))}function K(e,t,r){return"string"==typeof e?{host:e,port:t,localAddress:r}:e}function Q(e){for(var t=1,r=arguments.length;t<r;++t){var n=arguments[t];if("object"==typeof n)for(var o=Object.keys(n),s=0,i=o.length;s<i;++s){var a=o[s];void 0!==n[a]&&(e[a]=n[a])}}return e}B.httpOverHttp=function(e){var t=new Y(e);return t.request=G.request,t},B.httpsOverHttp=function(e){var t=new Y(e);return t.request=G.request,t.createSocket=z,t.defaultPort=443,t},B.httpOverHttps=function(e){var t=new Y(e);return t.request=F.request,t},B.httpsOverHttps=function(e){var t=new Y(e);return t.request=F.request,t.createSocket=z,t.defaultPort=443,t},V.inherits(Y,J.EventEmitter),Y.prototype.addRequest=function(e,t,r,n){var o=this,s=Q({request:e},o.options,K(t,r,n));o.sockets.length>=this.maxSockets?o.requests.push(s):o.createSocket(s,(function(t){function r(){o.emit("free",t,s)}function n(e){o.removeSocket(t),t.removeListener("free",r),t.removeListener("close",n),t.removeListener("agentRemove",n)}t.on("free",r),t.on("close",n),t.on("agentRemove",n),e.onSocket(t)}))},Y.prototype.createSocket=function(e,t){var r=this,n={};r.sockets.push(n);var o=Q({},r.proxyOptions,{method:"CONNECT",path:e.host+":"+e.port,agent:!1,headers:{host:e.host+":"+e.port}});e.localAddress&&(o.localAddress=e.localAddress),o.proxyAuth&&(o.headers=o.headers||{},o.headers["Proxy-Authorization"]="Basic "+new Buffer(o.proxyAuth).toString("base64")),D("making CONNECT request");var s=r.request(o);function i(o,i,a){var u;return s.removeAllListeners(),i.removeAllListeners(),200!==o.statusCode?(D("tunneling socket could not be established, statusCode=%d",o.statusCode),i.destroy(),(u=new Error("tunneling socket could not be established, statusCode="+o.statusCode)).code="ECONNRESET",e.request.emit("error",u),void r.removeSocket(n)):a.length>0?(D("got illegal response body from proxy"),i.destroy(),(u=new Error("got illegal response body from proxy")).code="ECONNRESET",e.request.emit("error",u),void r.removeSocket(n)):(D("tunneling connection has established"),r.sockets[r.sockets.indexOf(n)]=i,t(i))}s.useChunkedEncodingByDefault=!1,s.once("response",(function(e){e.upgrade=!0})),s.once("upgrade",(function(e,t,r){process.nextTick((function(){i(e,t,r)}))})),s.once("connect",i),s.once("error",(function(t){s.removeAllListeners(),D("tunneling socket could not be established, cause=%s\n",t.message,t.stack);var o=new Error("tunneling socket could not be established, cause="+t.message);o.code="ECONNRESET",e.request.emit("error",o),r.removeSocket(n)})),s.end()},Y.prototype.removeSocket=function(e){var t=this.sockets.indexOf(e);if(-1!==t){this.sockets.splice(t,1);var r=this.requests.shift();r&&this.createSocket(r,(function(e){r.request.onSocket(e)}))}},D=process.env.NODE_DEBUG&&/\btunnel\b/.test(process.env.NODE_DEBUG)?function(){var e=Array.prototype.slice.call(arguments);"string"==typeof e[0]?e[0]="TUNNEL: "+e[0]:e.unshift("TUNNEL:"),console.error.apply(console,e)}:function(){},B.debug=D,L.exports=B,function(e){var t=g&&g.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),r=g&&g.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=g&&g.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var o in e)"default"!==o&&Object.hasOwnProperty.call(e,o)&&t(n,e,o);return r(n,e),n},o=g&&g.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{u(n.next(e))}catch(e){s(e)}}function a(e){try{u(n.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}u((n=n.apply(e,t||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.HttpClient=e.isHttps=e.HttpClientResponse=e.HttpClientError=e.getProxyUrl=e.MediaTypes=e.Headers=e.HttpCodes=void 0;const s=n(p.default),i=n(h.default),a=n(M),u=n(L.exports);var c,d,l;!function(e){e[e.OK=200]="OK",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.ResourceMoved=302]="ResourceMoved",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.SwitchProxy=306]="SwitchProxy",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.TooManyRequests=429]="TooManyRequests",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout"}(c=e.HttpCodes||(e.HttpCodes={})),function(e){e.Accept="accept",e.ContentType="content-type"}(d=e.Headers||(e.Headers={})),function(e){e.ApplicationJson="application/json"}(l=e.MediaTypes||(e.MediaTypes={})),e.getProxyUrl=function(e){const t=a.getProxyUrl(new URL(e));return t?t.href:""};const f=[c.MovedPermanently,c.ResourceMoved,c.SeeOther,c.TemporaryRedirect,c.PermanentRedirect],m=[c.BadGateway,c.ServiceUnavailable,c.GatewayTimeout],v=["OPTIONS","GET","DELETE","HEAD"];class w extends Error{constructor(e,t){super(e),this.name="HttpClientError",this.statusCode=t,Object.setPrototypeOf(this,w.prototype)}}e.HttpClientError=w;class y{constructor(e){this.message=e}readBody(){return o(this,void 0,void 0,(function*(){return new Promise((e=>o(this,void 0,void 0,(function*(){let t=Buffer.alloc(0);this.message.on("data",(e=>{t=Buffer.concat([t,e])})),this.message.on("end",(()=>{e(t.toString())}))}))))}))}}e.HttpClientResponse=y,e.isHttps=function(e){return"https:"===new URL(e).protocol};e.HttpClient=class{constructor(e,t,r){this._ignoreSslError=!1,this._allowRedirects=!0,this._allowRedirectDowngrade=!1,this._maxRedirects=50,this._allowRetries=!1,this._maxRetries=1,this._keepAlive=!1,this._disposed=!1,this.userAgent=e,this.handlers=t||[],this.requestOptions=r,r&&(null!=r.ignoreSslError&&(this._ignoreSslError=r.ignoreSslError),this._socketTimeout=r.socketTimeout,null!=r.allowRedirects&&(this._allowRedirects=r.allowRedirects),null!=r.allowRedirectDowngrade&&(this._allowRedirectDowngrade=r.allowRedirectDowngrade),null!=r.maxRedirects&&(this._maxRedirects=Math.max(r.maxRedirects,0)),null!=r.keepAlive&&(this._keepAlive=r.keepAlive),null!=r.allowRetries&&(this._allowRetries=r.allowRetries),null!=r.maxRetries&&(this._maxRetries=r.maxRetries))}options(e,t){return o(this,void 0,void 0,(function*(){return this.request("OPTIONS",e,null,t||{})}))}get(e,t){return o(this,void 0,void 0,(function*(){return this.request("GET",e,null,t||{})}))}del(e,t){return o(this,void 0,void 0,(function*(){return this.request("DELETE",e,null,t||{})}))}post(e,t,r){return o(this,void 0,void 0,(function*(){return this.request("POST",e,t,r||{})}))}patch(e,t,r){return o(this,void 0,void 0,(function*(){return this.request("PATCH",e,t,r||{})}))}put(e,t,r){return o(this,void 0,void 0,(function*(){return this.request("PUT",e,t,r||{})}))}head(e,t){return o(this,void 0,void 0,(function*(){return this.request("HEAD",e,null,t||{})}))}sendStream(e,t,r,n){return o(this,void 0,void 0,(function*(){return this.request(e,t,r,n)}))}getJson(e,t={}){return o(this,void 0,void 0,(function*(){t[d.Accept]=this._getExistingOrDefaultHeader(t,d.Accept,l.ApplicationJson);const r=yield this.get(e,t);return this._processResponse(r,this.requestOptions)}))}postJson(e,t,r={}){return o(this,void 0,void 0,(function*(){const n=JSON.stringify(t,null,2);r[d.Accept]=this._getExistingOrDefaultHeader(r,d.Accept,l.ApplicationJson),r[d.ContentType]=this._getExistingOrDefaultHeader(r,d.ContentType,l.ApplicationJson);const o=yield this.post(e,n,r);return this._processResponse(o,this.requestOptions)}))}putJson(e,t,r={}){return o(this,void 0,void 0,(function*(){const n=JSON.stringify(t,null,2);r[d.Accept]=this._getExistingOrDefaultHeader(r,d.Accept,l.ApplicationJson),r[d.ContentType]=this._getExistingOrDefaultHeader(r,d.ContentType,l.ApplicationJson);const o=yield this.put(e,n,r);return this._processResponse(o,this.requestOptions)}))}patchJson(e,t,r={}){return o(this,void 0,void 0,(function*(){const n=JSON.stringify(t,null,2);r[d.Accept]=this._getExistingOrDefaultHeader(r,d.Accept,l.ApplicationJson),r[d.ContentType]=this._getExistingOrDefaultHeader(r,d.ContentType,l.ApplicationJson);const o=yield this.patch(e,n,r);return this._processResponse(o,this.requestOptions)}))}request(e,t,r,n){return o(this,void 0,void 0,(function*(){if(this._disposed)throw new Error("Client has already been disposed.");const o=new URL(t);let s=this._prepareRequest(e,o,n);const i=this._allowRetries&&v.includes(e)?this._maxRetries+1:1;let a,u=0;do{if(a=yield this.requestRaw(s,r),a&&a.message&&a.message.statusCode===c.Unauthorized){let e;for(const t of this.handlers)if(t.canHandleAuthentication(a)){e=t;break}return e?e.handleAuthentication(this,s,r):a}let t=this._maxRedirects;for(;a.message.statusCode&&f.includes(a.message.statusCode)&&this._allowRedirects&&t>0;){const i=a.message.headers.location;if(!i)break;const u=new URL(i);if("https:"===o.protocol&&o.protocol!==u.protocol&&!this._allowRedirectDowngrade)throw new Error("Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.");if(yield a.readBody(),u.hostname!==o.hostname)for(const e in n)"authorization"===e.toLowerCase()&&delete n[e];s=this._prepareRequest(e,u,n),a=yield this.requestRaw(s,r),t--}if(!a.message.statusCode||!m.includes(a.message.statusCode))return a;u+=1,u<i&&(yield a.readBody(),yield this._performExponentialBackoff(u))}while(u<i);return a}))}dispose(){this._agent&&this._agent.destroy(),this._disposed=!0}requestRaw(e,t){return o(this,void 0,void 0,(function*(){return new Promise(((r,n)=>{this.requestRawWithCallback(e,t,(function(e,t){e?n(e):t?r(t):n(new Error("Unknown error"))}))}))}))}requestRawWithCallback(e,t,r){"string"==typeof t&&(e.options.headers||(e.options.headers={}),e.options.headers["Content-Length"]=Buffer.byteLength(t,"utf8"));let n=!1;function o(e,t){n||(n=!0,r(e,t))}const s=e.httpModule.request(e.options,(e=>{o(void 0,new y(e))}));let i;s.on("socket",(e=>{i=e})),s.setTimeout(this._socketTimeout||18e4,(()=>{i&&i.end(),o(new Error(`Request timeout: ${e.options.path}`))})),s.on("error",(function(e){o(e)})),t&&"string"==typeof t&&s.write(t,"utf8"),t&&"string"!=typeof t?(t.on("close",(function(){s.end()})),t.pipe(s)):s.end()}getAgent(e){const t=new URL(e);return this._getAgent(t)}_prepareRequest(e,t,r){const n={};n.parsedUrl=t;const o="https:"===n.parsedUrl.protocol;n.httpModule=o?i:s;const a=o?443:80;if(n.options={},n.options.host=n.parsedUrl.hostname,n.options.port=n.parsedUrl.port?parseInt(n.parsedUrl.port):a,n.options.path=(n.parsedUrl.pathname||"")+(n.parsedUrl.search||""),n.options.method=e,n.options.headers=this._mergeHeaders(r),null!=this.userAgent&&(n.options.headers["user-agent"]=this.userAgent),n.options.agent=this._getAgent(n.parsedUrl),this.handlers)for(const e of this.handlers)e.prepareRequest(n.options);return n}_mergeHeaders(e){return this.requestOptions&&this.requestOptions.headers?Object.assign({},_(this.requestOptions.headers),_(e||{})):_(e||{})}_getExistingOrDefaultHeader(e,t,r){let n;return this.requestOptions&&this.requestOptions.headers&&(n=_(this.requestOptions.headers)[t]),e[t]||n||r}_getAgent(e){let t;const r=a.getProxyUrl(e),n=r&&r.hostname;if(this._keepAlive&&n&&(t=this._proxyAgent),this._keepAlive&&!n&&(t=this._agent),t)return t;const o="https:"===e.protocol;let c=100;if(this.requestOptions&&(c=this.requestOptions.maxSockets||s.globalAgent.maxSockets),r&&r.hostname){const e={maxSockets:c,keepAlive:this._keepAlive,proxy:Object.assign(Object.assign({},(r.username||r.password)&&{proxyAuth:`${r.username}:${r.password}`}),{host:r.hostname,port:r.port})};let n;const s="https:"===r.protocol;n=o?s?u.httpsOverHttps:u.httpsOverHttp:s?u.httpOverHttps:u.httpOverHttp,t=n(e),this._proxyAgent=t}if(this._keepAlive&&!t){const e={keepAlive:this._keepAlive,maxSockets:c};t=o?new i.Agent(e):new s.Agent(e),this._agent=t}return t||(t=o?i.globalAgent:s.globalAgent),o&&this._ignoreSslError&&(t.options=Object.assign(t.options||{},{rejectUnauthorized:!1})),t}_performExponentialBackoff(e){return o(this,void 0,void 0,(function*(){e=Math.min(10,e);const t=5*Math.pow(2,e);return new Promise((e=>setTimeout((()=>e()),t)))}))}_processResponse(e,t){return o(this,void 0,void 0,(function*(){return new Promise(((r,n)=>o(this,void 0,void 0,(function*(){const o=e.message.statusCode||0,s={statusCode:o,result:null,headers:{}};let i,a;o===c.NotFound&&r(s);try{a=yield e.readBody(),a&&a.length>0&&(i=t&&t.deserializeDates?JSON.parse(a,(function(e,t){if("string"==typeof t){const e=new Date(t);if(!isNaN(e.valueOf()))return e}return t})):JSON.parse(a),s.result=i),s.headers=e.message.headers}catch(e){}if(o>299){let e;e=i&&i.message?i.message:a&&a.length>0?a:`Failed request: (${o})`;const t=new w(e,o);t.result=s.result,n(t)}else r(s)}))))}))}};const _=e=>Object.keys(e).reduce(((t,r)=>(t[r.toLowerCase()]=e[r],t)),{})}(j);var W,X={},Z=g&&g.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{u(n.next(e))}catch(e){s(e)}}function a(e){try{u(n.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}u((n=n.apply(e,t||[])).next())}))};Object.defineProperty(X,"__esModule",{value:!0}),X.PersonalAccessTokenCredentialHandler=X.BearerCredentialHandler=X.BasicCredentialHandler=void 0;X.BasicCredentialHandler=class{constructor(e,t){this.username=e,this.password=t}prepareRequest(e){if(!e.headers)throw Error("The request has no headers");e.headers.Authorization=`Basic ${Buffer.from(`${this.username}:${this.password}`).toString("base64")}`}canHandleAuthentication(){return!1}handleAuthentication(){return Z(this,void 0,void 0,(function*(){throw new Error("not implemented")}))}};X.BearerCredentialHandler=class{constructor(e){this.token=e}prepareRequest(e){if(!e.headers)throw Error("The request has no headers");e.headers.Authorization=`Bearer ${this.token}`}canHandleAuthentication(){return!1}handleAuthentication(){return Z(this,void 0,void 0,(function*(){throw new Error("not implemented")}))}};function ee(){if(W)return N;W=1;var e=g&&g.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{u(n.next(e))}catch(e){s(e)}}function a(e){try{u(n.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}u((n=n.apply(e,t||[])).next())}))};Object.defineProperty(N,"__esModule",{value:!0}),N.OidcClient=void 0;const t=j,r=X,n=se();class o{static createHttpClient(e=!0,n=10){const s={allowRetries:e,maxRetries:n};return new t.HttpClient("actions/oidc-client",[new r.BearerCredentialHandler(o.getRequestToken())],s)}static getRequestToken(){const e=process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN;if(!e)throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable");return e}static getIDTokenUrl(){const e=process.env.ACTIONS_ID_TOKEN_REQUEST_URL;if(!e)throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable");return e}static getCall(t){var r;return e(this,void 0,void 0,(function*(){const e=o.createHttpClient(),n=yield e.getJson(t).catch((e=>{throw new Error(`Failed to get ID Token. \n \n\t        Error Code : ${e.statusCode}\n \n\t        Error Message: ${e.result.message}`)})),s=null===(r=n.result)||void 0===r?void 0:r.value;if(!s)throw new Error("Response json body do not have ID Token field");return s}))}static getIDToken(t){return e(this,void 0,void 0,(function*(){try{let e=o.getIDTokenUrl();if(t){e=`${e}&audience=${encodeURIComponent(t)}`}n.debug(`ID token url is ${e}`);const r=yield o.getCall(e);return n.setSecret(r),r}catch(e){throw new Error(`Error message: ${e.message}`)}}))}}return N.OidcClient=o,N}X.PersonalAccessTokenCredentialHandler=class{constructor(e){this.token=e}prepareRequest(e){if(!e.headers)throw Error("The request has no headers");e.headers.Authorization=`Basic ${Buffer.from(`PAT:${this.token}`).toString("base64")}`}canHandleAuthentication(){return!1}handleAuthentication(){return Z(this,void 0,void 0,(function*(){throw new Error("not implemented")}))}};var te,re,ne={};function oe(){return te||(te=1,function(e){var t=g&&g.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{u(n.next(e))}catch(e){s(e)}}function a(e){try{u(n.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}u((n=n.apply(e,t||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.summary=e.markdownSummary=e.SUMMARY_DOCS_URL=e.SUMMARY_ENV_VAR=void 0;const r=c.default,n=d.default,{access:o,appendFile:s,writeFile:i}=n.promises;e.SUMMARY_ENV_VAR="GITHUB_STEP_SUMMARY",e.SUMMARY_DOCS_URL="https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary";const a=new class{constructor(){this._buffer=""}filePath(){return t(this,void 0,void 0,(function*(){if(this._filePath)return this._filePath;const t=process.env[e.SUMMARY_ENV_VAR];if(!t)throw new Error(`Unable to find environment variable for $${e.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);try{yield o(t,n.constants.R_OK|n.constants.W_OK)}catch(e){throw new Error(`Unable to access summary file: '${t}'. Check if the file has correct read/write permissions.`)}return this._filePath=t,this._filePath}))}wrap(e,t,r={}){const n=Object.entries(r).map((([e,t])=>` ${e}="${t}"`)).join("");return t?`<${e}${n}>${t}</${e}>`:`<${e}${n}>`}write(e){return t(this,void 0,void 0,(function*(){const t=!!(null==e?void 0:e.overwrite),r=yield this.filePath(),n=t?i:s;return yield n(r,this._buffer,{encoding:"utf8"}),this.emptyBuffer()}))}clear(){return t(this,void 0,void 0,(function*(){return this.emptyBuffer().write({overwrite:!0})}))}stringify(){return this._buffer}isEmptyBuffer(){return 0===this._buffer.length}emptyBuffer(){return this._buffer="",this}addRaw(e,t=!1){return this._buffer+=e,t?this.addEOL():this}addEOL(){return this.addRaw(r.EOL)}addCodeBlock(e,t){const r=Object.assign({},t&&{lang:t}),n=this.wrap("pre",this.wrap("code",e),r);return this.addRaw(n).addEOL()}addList(e,t=!1){const r=t?"ol":"ul",n=e.map((e=>this.wrap("li",e))).join(""),o=this.wrap(r,n);return this.addRaw(o).addEOL()}addTable(e){const t=e.map((e=>{const t=e.map((e=>{if("string"==typeof e)return this.wrap("td",e);const{header:t,data:r,colspan:n,rowspan:o}=e,s=t?"th":"td",i=Object.assign(Object.assign({},n&&{colspan:n}),o&&{rowspan:o});return this.wrap(s,r,i)})).join("");return this.wrap("tr",t)})).join(""),r=this.wrap("table",t);return this.addRaw(r).addEOL()}addDetails(e,t){const r=this.wrap("details",this.wrap("summary",e)+t);return this.addRaw(r).addEOL()}addImage(e,t,r){const{width:n,height:o}=r||{},s=Object.assign(Object.assign({},n&&{width:n}),o&&{height:o}),i=this.wrap("img",null,Object.assign({src:e,alt:t},s));return this.addRaw(i).addEOL()}addHeading(e,t){const r=`h${t}`,n=["h1","h2","h3","h4","h5","h6"].includes(r)?r:"h1",o=this.wrap(n,e);return this.addRaw(o).addEOL()}addSeparator(){const e=this.wrap("hr",null);return this.addRaw(e).addEOL()}addBreak(){const e=this.wrap("br",null);return this.addRaw(e).addEOL()}addQuote(e,t){const r=Object.assign({},t&&{cite:t}),n=this.wrap("blockquote",e,r);return this.addRaw(n).addEOL()}addLink(e,t){const r=this.wrap("a",e,{href:t});return this.addRaw(r).addEOL()}};e.markdownSummary=a,e.summary=a}(ne)),ne}function se(){return re||(re=1,function(e){var t=g&&g.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),r=g&&g.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=g&&g.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var o in e)"default"!==o&&Object.hasOwnProperty.call(e,o)&&t(n,e,o);return r(n,e),n},o=g&&g.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{u(n.next(e))}catch(e){s(e)}}function a(e){try{u(n.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}u((n=n.apply(e,t||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.getIDToken=e.getState=e.saveState=e.group=e.endGroup=e.startGroup=e.info=e.notice=e.warning=e.error=e.debug=e.isDebug=e.setFailed=e.setCommandEcho=e.setOutput=e.getBooleanInput=e.getMultilineInput=e.getInput=e.addPath=e.setSecret=e.exportVariable=e.ExitCode=void 0;const s=y,i=T,a=_,u=n(c.default),d=n(l.default),p=ee();var h;function f(e,t){const r=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!r)throw new Error(`Input required and not supplied: ${e}`);return t&&!1===t.trimWhitespace?r:r.trim()}function m(e,t={}){s.issueCommand("error",a.toCommandProperties(t),e instanceof Error?e.toString():e)}function v(e){s.issue("group",e)}function w(){s.issue("endgroup")}!function(e){e[e.Success=0]="Success",e[e.Failure=1]="Failure"}(h=e.ExitCode||(e.ExitCode={})),e.exportVariable=function(e,t){const r=a.toCommandValue(t);if(process.env[e]=r,process.env.GITHUB_ENV||""){const t="_GitHubActionsFileCommandDelimeter_",n=`${e}<<${t}${u.EOL}${r}${u.EOL}${t}`;i.issueCommand("ENV",n)}else s.issueCommand("set-env",{name:e},r)},e.setSecret=function(e){s.issueCommand("add-mask",{},e)},e.addPath=function(e){process.env.GITHUB_PATH||""?i.issueCommand("PATH",e):s.issueCommand("add-path",{},e),process.env.PATH=`${e}${d.delimiter}${process.env.PATH}`},e.getInput=f,e.getMultilineInput=function(e,t){return f(e,t).split("\n").filter((e=>""!==e))},e.getBooleanInput=function(e,t){const r=f(e,t);if(["true","True","TRUE"].includes(r))return!0;if(["false","False","FALSE"].includes(r))return!1;throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${e}\nSupport boolean input list: \`true | True | TRUE | false | False | FALSE\``)},e.setOutput=function(e,t){process.stdout.write(u.EOL),s.issueCommand("set-output",{name:e},t)},e.setCommandEcho=function(e){s.issue("echo",e?"on":"off")},e.setFailed=function(e){process.exitCode=h.Failure,m(e)},e.isDebug=function(){return"1"===process.env.RUNNER_DEBUG},e.debug=function(e){s.issueCommand("debug",{},e)},e.error=m,e.warning=function(e,t={}){s.issueCommand("warning",a.toCommandProperties(t),e instanceof Error?e.toString():e)},e.notice=function(e,t={}){s.issueCommand("notice",a.toCommandProperties(t),e instanceof Error?e.toString():e)},e.info=function(e){process.stdout.write(e+u.EOL)},e.startGroup=v,e.endGroup=w,e.group=function(e,t){return o(this,void 0,void 0,(function*(){let r;v(e);try{r=yield t()}finally{w()}return r}))},e.saveState=function(e,t){s.issueCommand("save-state",{name:e},t)},e.getState=function(e){return process.env[`STATE_${e}`]||""},e.getIDToken=function(e){return o(this,void 0,void 0,(function*(){return yield p.OidcClient.getIDToken(e)}))};var O=oe();Object.defineProperty(e,"summary",{enumerable:!0,get:function(){return O.summary}});var b=oe();Object.defineProperty(e,"markdownSummary",{enumerable:!0,get:function(){return b.markdownSummary}})}(w)),w}var ie=se();!function(){return e=this,t=null,r=function*(){const{a:e,b:t}={a:ie.getInput("a"),b:ie.getInput("b")},r=Number(e)+Number(t);ie.setOutput("result",r)},new Promise(((n,o)=>{var s=e=>{try{a(r.next(e))}catch(e){o(e)}},i=e=>{try{a(r.throw(e))}catch(e){o(e)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(s,i);a((r=r.apply(e,t)).next())}));var e,t,r}();