(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[691],{6132:function(e,t,n){"use strict";var r=n(4836);t.__esModule=!0,t.default=void 0;var s=r(n(6115)),i=r(n(7867)),o=r(n(8416)),c=r(n(7294)),a=r(n(5697)),l=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r))||this,(0,o.default)((0,s.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},n.toggleTheme=function(e){window.__setPreferredTheme(e)},n.render=function(){return c.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(c.default.Component);l.propTypes={children:a.default.func.isRequired};var u=l;t.default=u},3071:function(e,t,n){"use strict";var r=n(4836)(n(6132));t.L=r.default},1296:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294),s=n(3071),i=n(3750);var o=()=>r.createElement(s.L,null,(e=>{let{theme:t,toggleTheme:n}=e;return r.createElement("div",{className:"w-24 h-8 rounded-2xl bg-white flex flex-row items-center relative justify-end",onClick:()=>{n("light"===t?"dark":"light")}},r.createElement("div",{className:"w-full h-full flex items-center rounded-2xl bg-black justify-between z-10",style:{transform:"translateX("+("light"===t?0:-1.6)+"rem)"}},r.createElement(i.mox,{size:"1rem",color:"white",className:"ml-3"}),r.createElement("span",{className:"text-sm mr-3 text-white"},"다크모드")),r.createElement("span",{className:"absolute text-xs text-black mr-2"},"On"))})),c=n(4160);var a=e=>{let{width:t}=e;return r.createElement("div",{className:"items-center w-"+t+" h-16 text-3xl font-bold flex justify-between [&>*]:text-text-color"},r.createElement(c.rU,{to:"/"},"dohi.log"),r.createElement("div",{className:"flex justify-between items-center"},r.createElement(o,null)))}},1001:function(e,t,n){"use strict";var r=n(7294),s=n(1296);t.Z=e=>{let{children:t}=e;return r.createElement("div",{className:"w-full flex justify-center duration-300 pb-12 bg-bg-color text-text-color min-h-screen "},r.createElement("div",{className:"w-4/5"},r.createElement(s.Z,{width:"full"}),t))}},5338:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ae}});var r=n(7294),s=n(1001),i=n(4160);var o=e=>{let{tag:t}=e;return r.createElement("div",{className:"rounded-md bg-bg-color2 flex justify-center items-center mr-4"},r.createElement("span",{className:"pt-1 pb-1 pr-2 pl-2 text-Greenlight/10 font-bold text-sm"},t))};var c=e=>{let{title:t,date:n,excerpt:s,description:c,tags:a,thumbnail:l,link:u,timeToRead:h}=e;return console.log(h),r.createElement(i.rU,{to:u},r.createElement("div",{className:"w-full flex flex-col  shadow-lg items-center bg-bg-color2 rounded-lg"},r.createElement("img",{src:l,className:"w-full object-cover h-[15rem] rounded-t-lg"}),r.createElement("div",{className:"w-[85%] flex flex-col "},r.createElement("span",{className:"text-2xl font-bold text-omit mt-4"},t),r.createElement("span",{className:"text-excerpt mt-2"},c),r.createElement("div",{className:"flex flex-row mt-6"},a.map(((e,t)=>r.createElement(o,{tag:e,key:t})))),r.createElement("span",{className:"flex justify-between w-full pb-4 mt-4"},r.createElement("span",null,n),r.createElement("span",null,h," min read")))))};function a(e){return Array.isArray?Array.isArray(e):"[object Array]"===x(e)}const l=1/0;function u(e){return null==e?"":function(e){if("string"==typeof e)return e;let t=e+"";return"0"==t&&1/e==-l?"-0":t}(e)}function h(e){return"string"==typeof e}function d(e){return"number"==typeof e}function f(e){return!0===e||!1===e||function(e){return m(e)&&null!==e}(e)&&"[object Boolean]"==x(e)}function m(e){return"object"==typeof e}function g(e){return null!=e}function p(e){return!e.trim().length}function x(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const y=e=>`Missing ${e} property in key`,v=e=>`Property 'weight' in key '${e}' must be a positive integer`,b=Object.prototype.hasOwnProperty;class M{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach((e=>{let n=w(e);t+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,t+=n.weight})),this._keys.forEach((e=>{e.weight/=t}))}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function w(e){let t=null,n=null,r=null,s=1,i=null;if(h(e)||a(e))r=e,t=E(e),n=k(e);else{if(!b.call(e,"name"))throw new Error(y("name"));const o=e.name;if(r=o,b.call(e,"weight")&&(s=e.weight,s<=0))throw new Error(v(o));t=E(o),n=k(o),i=e.getFn}return{path:t,id:n,weight:s,src:r,getFn:i}}function E(e){return a(e)?e:e.split(".")}function k(e){return a(e)?e.join("."):e}var _={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,...{useExtendedSearch:!1,getFn:function(e,t){let n=[],r=!1;const s=(e,t,i)=>{if(g(e))if(t[i]){const o=e[t[i]];if(!g(o))return;if(i===t.length-1&&(h(o)||d(o)||f(o)))n.push(u(o));else if(a(o)){r=!0;for(let e=0,n=o.length;e<n;e+=1)s(o[e],t,i+1)}else t.length&&s(o,t,i+1)}else n.push(e)};return s(e,h(t)?t.split("."):t,0),r?n:n[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1}};const N=/[^ ]+/g;class L{constructor({getFn:e=_.getFn,fieldNormWeight:t=_.fieldNormWeight}={}){this.norm=function(e=1,t=3){const n=new Map,r=Math.pow(10,t);return{get(t){const s=t.match(N).length;if(n.has(s))return n.get(s);const i=1/Math.pow(s,.5*e),o=parseFloat(Math.round(i*r)/r);return n.set(s,o),o},clear(){n.clear()}}}(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach(((e,t)=>{this._keysMap[e.id]=t}))}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,h(this.docs[0])?this.docs.forEach(((e,t)=>{this._addString(e,t)})):this.docs.forEach(((e,t)=>{this._addObject(e,t)})),this.norm.clear())}add(e){const t=this.size();h(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,n=this.size();t<n;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!g(e)||p(e))return;let n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}_addObject(e,t){let n={i:t,$:{}};this.keys.forEach(((t,r)=>{let s=t.getFn?t.getFn(e):this.getFn(e,t.path);if(g(s))if(a(s)){let e=[];const t=[{nestedArrIndex:-1,value:s}];for(;t.length;){const{nestedArrIndex:n,value:r}=t.pop();if(g(r))if(h(r)&&!p(r)){let t={v:r,i:n,n:this.norm.get(r)};e.push(t)}else a(r)&&r.forEach(((e,n)=>{t.push({nestedArrIndex:n,value:e})}))}n.$[r]=e}else if(h(s)&&!p(s)){let e={v:s,n:this.norm.get(s)};n.$[r]=e}})),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function S(e,t,{getFn:n=_.getFn,fieldNormWeight:r=_.fieldNormWeight}={}){const s=new L({getFn:n,fieldNormWeight:r});return s.setKeys(e.map(w)),s.setSources(t),s.create(),s}function j(e,{errors:t=0,currentLocation:n=0,expectedLocation:r=0,distance:s=_.distance,ignoreLocation:i=_.ignoreLocation}={}){const o=t/e.length;if(i)return o;const c=Math.abs(r-n);return s?o+c/s:c?1:o}const C=32;function O(e,t,n,{location:r=_.location,distance:s=_.distance,threshold:i=_.threshold,findAllMatches:o=_.findAllMatches,minMatchCharLength:c=_.minMatchCharLength,includeMatches:a=_.includeMatches,ignoreLocation:l=_.ignoreLocation}={}){if(t.length>C)throw new Error(`Pattern length exceeds max of ${C}.`);const u=t.length,h=e.length,d=Math.max(0,Math.min(r,h));let f=i,m=d;const g=c>1||a,p=g?Array(h):[];let x;for(;(x=e.indexOf(t,m))>-1;){let e=j(t,{currentLocation:x,expectedLocation:d,distance:s,ignoreLocation:l});if(f=Math.min(e,f),m=x+u,g){let e=0;for(;e<u;)p[x+e]=1,e+=1}}m=-1;let y=[],v=1,b=u+h;const M=1<<u-1;for(let E=0;E<u;E+=1){let r=0,i=b;for(;r<i;){j(t,{errors:E,currentLocation:d+i,expectedLocation:d,distance:s,ignoreLocation:l})<=f?r=i:b=i,i=Math.floor((b-r)/2+r)}b=i;let c=Math.max(1,d-i+1),a=o?h:Math.min(d+i,h)+u,x=Array(a+2);x[a+1]=(1<<E)-1;for(let o=a;o>=c;o-=1){let r=o-1,i=n[e.charAt(r)];if(g&&(p[r]=+!!i),x[o]=(x[o+1]<<1|1)&i,E&&(x[o]|=(y[o+1]|y[o])<<1|1|y[o+1]),x[o]&M&&(v=j(t,{errors:E,currentLocation:r,expectedLocation:d,distance:s,ignoreLocation:l}),v<=f)){if(f=v,m=r,m<=d)break;c=Math.max(1,2*d-m)}}if(j(t,{errors:E+1,currentLocation:d,expectedLocation:d,distance:s,ignoreLocation:l})>f)break;y=x}const w={isMatch:m>=0,score:Math.max(.001,v)};if(g){const e=function(e=[],t=_.minMatchCharLength){let n=[],r=-1,s=-1,i=0;for(let o=e.length;i<o;i+=1){let o=e[i];o&&-1===r?r=i:o||-1===r||(s=i-1,s-r+1>=t&&n.push([r,s]),r=-1)}return e[i-1]&&i-r>=t&&n.push([r,i-1]),n}(p,c);e.length?a&&(w.indices=e):w.isMatch=!1}return w}function I(e){let t={};for(let n=0,r=e.length;n<r;n+=1){const s=e.charAt(n);t[s]=(t[s]||0)|1<<r-n-1}return t}class ${constructor(e,{location:t=_.location,threshold:n=_.threshold,distance:r=_.distance,includeMatches:s=_.includeMatches,findAllMatches:i=_.findAllMatches,minMatchCharLength:o=_.minMatchCharLength,isCaseSensitive:c=_.isCaseSensitive,ignoreLocation:a=_.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:r,includeMatches:s,findAllMatches:i,minMatchCharLength:o,isCaseSensitive:c,ignoreLocation:a},this.pattern=c?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(e,t)=>{this.chunks.push({pattern:e,alphabet:I(e),startIndex:t})},u=this.pattern.length;if(u>C){let e=0;const t=u%C,n=u-t;for(;e<n;)l(this.pattern.substr(e,C),e),e+=C;if(t){const e=u-C;l(this.pattern.substr(e),e)}}else l(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:n}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let t={isMatch:!0,score:0};return n&&(t.indices=[[0,e.length-1]]),t}const{location:r,distance:s,threshold:i,findAllMatches:o,minMatchCharLength:c,ignoreLocation:a}=this.options;let l=[],u=0,h=!1;this.chunks.forEach((({pattern:t,alphabet:d,startIndex:f})=>{const{isMatch:m,score:g,indices:p}=O(e,t,d,{location:r+f,distance:s,threshold:i,findAllMatches:o,minMatchCharLength:c,includeMatches:n,ignoreLocation:a});m&&(h=!0),u+=g,m&&p&&(l=[...l,...p])}));let d={isMatch:h,score:h?u/this.chunks.length:1};return h&&n&&(d.indices=l),d}}class A{constructor(e){this.pattern=e}static isMultiMatch(e){return R(e,this.multiRegex)}static isSingleMatch(e){return R(e,this.singleRegex)}search(){}}function R(e,t){const n=e.match(t);return n?n[1]:null}class F extends A{constructor(e,{location:t=_.location,threshold:n=_.threshold,distance:r=_.distance,includeMatches:s=_.includeMatches,findAllMatches:i=_.findAllMatches,minMatchCharLength:o=_.minMatchCharLength,isCaseSensitive:c=_.isCaseSensitive,ignoreLocation:a=_.ignoreLocation}={}){super(e),this._bitapSearch=new $(e,{location:t,threshold:n,distance:r,includeMatches:s,findAllMatches:i,minMatchCharLength:o,isCaseSensitive:c,ignoreLocation:a})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class T extends A{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t,n=0;const r=[],s=this.pattern.length;for(;(t=e.indexOf(this.pattern,n))>-1;)n=t+s,r.push([t,n-1]);const i=!!r.length;return{isMatch:i,score:i?0:1,indices:r}}}const W=[class extends A{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},T,class extends A{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},class extends A{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends A{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends A{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}},class extends A{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const t=-1===e.indexOf(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},F],P=W.length,z=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;const K=new Set([F.type,T.type]);class U{constructor(e,{isCaseSensitive:t=_.isCaseSensitive,includeMatches:n=_.includeMatches,minMatchCharLength:r=_.minMatchCharLength,ignoreLocation:s=_.ignoreLocation,findAllMatches:i=_.findAllMatches,location:o=_.location,threshold:c=_.threshold,distance:a=_.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:n,minMatchCharLength:r,findAllMatches:i,ignoreLocation:s,location:o,threshold:c,distance:a},this.pattern=t?e:e.toLowerCase(),this.query=function(e,t={}){return e.split("|").map((e=>{let n=e.trim().split(z).filter((e=>e&&!!e.trim())),r=[];for(let s=0,i=n.length;s<i;s+=1){const e=n[s];let i=!1,o=-1;for(;!i&&++o<P;){const n=W[o];let s=n.isMultiMatch(e);s&&(r.push(new n(s,t)),i=!0)}if(!i)for(o=-1;++o<P;){const n=W[o];let s=n.isSingleMatch(e);if(s){r.push(new n(s,t));break}}}return r}))}(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let s=0,i=[],o=0;for(let c=0,a=t.length;c<a;c+=1){const r=t[c];i.length=0,s=0;for(let t=0,c=r.length;t<c;t+=1){const c=r[t],{isMatch:a,indices:l,score:u}=c.search(e);if(!a){o=0,s=0,i.length=0;break}if(s+=1,o+=u,n){const e=c.constructor.type;K.has(e)?i=[...i,...l]:i.push(l)}}if(s){let e={isMatch:!0,score:o/s};return n&&(e.indices=i),e}}return{isMatch:!1,score:1}}}const q=[];function D(e,t){for(let n=0,r=q.length;n<r;n+=1){let r=q[n];if(r.condition(e,t))return new r(e,t)}return new $(e,t)}const Z="$and",B="$or",J="$path",V="$val",G=e=>!(!e[Z]&&!e[B]),Q=e=>({[Z]:Object.keys(e).map((t=>({[t]:e[t]})))});function X(e,t,{auto:n=!0}={}){const r=e=>{let s=Object.keys(e);const i=(e=>!!e[J])(e);if(!i&&s.length>1&&!G(e))return r(Q(e));if((e=>!a(e)&&m(e)&&!G(e))(e)){const r=i?e[J]:s[0],o=i?e[V]:e[r];if(!h(o))throw new Error((e=>`Invalid value for key ${e}`)(r));const c={keyId:k(r),pattern:o};return n&&(c.searcher=D(o,t)),c}let o={children:[],operator:s[0]};return s.forEach((t=>{const n=e[t];a(n)&&n.forEach((e=>{o.children.push(r(e))}))})),o};return G(e)||(e=Q(e)),r(e)}function H(e,t){const n=e.matches;t.matches=[],g(n)&&n.forEach((e=>{if(!g(e.indices)||!e.indices.length)return;const{indices:n,value:r}=e;let s={indices:n,value:r};e.key&&(s.key=e.key.src),e.idx>-1&&(s.refIndex=e.idx),t.matches.push(s)}))}function Y(e,t){t.score=e.score}class ee{constructor(e,t={},n){this.options={..._,...t},this.options.useExtendedSearch,this._keyStore=new M(this.options.keys),this.setCollection(e,n)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof L))throw new Error("Incorrect 'index' type");this._myIndex=t||S(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){g(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=(()=>!1)){const t=[];for(let n=0,r=this._docs.length;n<r;n+=1){const s=this._docs[n];e(s,n)&&(this.removeAt(n),n-=1,r-=1,t.push(s))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:s,sortFn:i,ignoreFieldNorm:o}=this.options;let c=h(e)?h(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return function(e,{ignoreFieldNorm:t=_.ignoreFieldNorm}){e.forEach((e=>{let n=1;e.matches.forEach((({key:e,norm:r,score:s})=>{const i=e?e.weight:null;n*=Math.pow(0===s&&i?Number.EPSILON:s,(i||1)*(t?1:r))})),e.score=n}))}(c,{ignoreFieldNorm:o}),s&&c.sort(i),d(t)&&t>-1&&(c=c.slice(0,t)),function(e,t,{includeMatches:n=_.includeMatches,includeScore:r=_.includeScore}={}){const s=[];return n&&s.push(H),r&&s.push(Y),e.map((e=>{const{idx:n}=e,r={item:t[n],refIndex:n};return s.length&&s.forEach((t=>{t(e,r)})),r}))}(c,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(e){const t=D(e,this.options),{records:n}=this._myIndex,r=[];return n.forEach((({v:e,i:n,n:s})=>{if(!g(e))return;const{isMatch:i,score:o,indices:c}=t.searchIn(e);i&&r.push({item:e,idx:n,matches:[{score:o,value:e,norm:s,indices:c}]})})),r}_searchLogical(e){const t=X(e,this.options),n=(e,t,r)=>{if(!e.children){const{keyId:n,searcher:s}=e,i=this._findMatches({key:this._keyStore.get(n),value:this._myIndex.getValueForItemAtKeyId(t,n),searcher:s});return i&&i.length?[{idx:r,item:t,matches:i}]:[]}const s=[];for(let i=0,o=e.children.length;i<o;i+=1){const o=e.children[i],c=n(o,t,r);if(c.length)s.push(...c);else if(e.operator===Z)return[]}return s},r=this._myIndex.records,s={},i=[];return r.forEach((({$:e,i:r})=>{if(g(e)){let o=n(t,e,r);o.length&&(s[r]||(s[r]={idx:r,item:e,matches:[]},i.push(s[r])),o.forEach((({matches:e})=>{s[r].matches.push(...e)})))}})),i}_searchObjectList(e){const t=D(e,this.options),{keys:n,records:r}=this._myIndex,s=[];return r.forEach((({$:e,i:r})=>{if(!g(e))return;let i=[];n.forEach(((n,r)=>{i.push(...this._findMatches({key:n,value:e[r],searcher:t}))})),i.length&&s.push({idx:r,item:e,matches:i})})),s}_findMatches({key:e,value:t,searcher:n}){if(!g(t))return[];let r=[];if(a(t))t.forEach((({v:t,i:s,n:i})=>{if(!g(t))return;const{isMatch:o,score:c,indices:a}=n.searchIn(t);o&&r.push({score:c,key:e,value:t,idx:s,norm:i,indices:a})}));else{const{v:s,n:i}=t,{isMatch:o,score:c,indices:a}=n.searchIn(s);o&&r.push({score:c,key:e,value:s,norm:i,indices:a})}return r}}ee.version="6.6.2",ee.createIndex=S,ee.parseIndex=function(e,{getFn:t=_.getFn,fieldNormWeight:n=_.fieldNormWeight}={}){const{keys:r,records:s}=e,i=new L({getFn:t,fieldNormWeight:n});return i.setKeys(r),i.setIndexRecords(s),i},ee.config=_,ee.parseQuery=X,function(...e){q.push(...e)}(U);var te=n(3279),ne=n.n(te),re=n(8193);var se=e=>{let{setData:t}=e;const n=ne()((e=>{t&&t(e.target.value)}),450);return r.createElement("div",{className:"flex flex-row h-[3rem] items-center mt-24 "},r.createElement(re.RB5,{className:"absolute pl-2 text-black",size:"2rem"}),r.createElement("input",{placeholder:"제목으로 검색",className:"w-[30rem] outline-none h-full pl-12 rounded-xl text-lg border-[.5px] text-black",onChange:n}))};const ie=e=>{let{postList:t}=e;const n=(0,i.K2)("2121028432"),[s,o]=r.useState(""),a=new ee(n.allMarkdownRemark.nodes,{keys:["frontmatter.title","rawMarkdownBody"]}).search(s).map((e=>{let{item:{excerpt:t,fields:{slug:n},frontmatter:s,id:i,timeToRead:o}}=e;return r.createElement(c,Object.assign({},s,{excerpt:t,key:i,link:n,timeToRead:o}))})),l=t.map((e=>{let{node:{excerpt:t,fields:{slug:n},frontmatter:s,id:i,timeToRead:o}}=e;return r.createElement(c,Object.assign({},s,{excerpt:t,key:i,link:n,timeToRead:o}))}));return r.createElement("div",null,r.createElement(se,{setData:o}),r.createElement("div",{className:"w-full grid grid-cols-1 lg:grid-cols-3 gap-14 lg:mt-10 mt-10"},s?a.length?a:"검색 결과가 없습니다!":l))};var oe=e=>{let{thumbnail:t,title:n,link:s}=e;return r.createElement(i.rU,{to:s,className:"h-full"},r.createElement("div",{className:"flex flex-col h-full"},r.createElement("img",{src:t,className:"image-base  h-full"}),r.createElement("span",{className:"mt-2 text-xl font-bold text-omit"},n)))};var ce=()=>{const e=(0,i.K2)("4025396396"),t=(0,r.useMemo)((()=>e.allMarkdownRemark.nodes),[e]);return r.createElement("div",{className:" w-full lg:flex hidden [&>div]:flex [&>div]:flex-col [&>div]:justify-between justify-between mt-16 "},r.createElement("div",{className:"w-3/5"},r.createElement("span",{className:"text-6xl font-bold"},"최근 등록된 글"),r.createElement(i.rU,{to:t[0].fields.slug,className:"h-full mt-4 "},r.createElement("span",{className:"text-4xl font-bold text-omit"},t[0].frontmatter.title),r.createElement("img",{src:t[0].frontmatter.thumbnail,className:"image-base min-h-[90%] mt-4"}))),r.createElement("div",{className:"w-[35%] [&>a]:mt-4"},r.createElement(oe,{title:t[1].frontmatter.title,thumbnail:t[1].frontmatter.thumbnail,link:t[1].fields.slug}),r.createElement(oe,{title:t[2].frontmatter.title,thumbnail:t[2].frontmatter.thumbnail,link:t[2].fields.slug})))};var ae=e=>{let{data:{allMarkdownRemark:{edges:t}}}=e;return r.createElement(s.Z,null,r.createElement(ce,null),r.createElement(ie,{postList:t}))}},2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},4239:function(e,t,n){var r=n(2705),s=n(9607),i=n(2333),o=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?s(e):i(e)}},7561:function(e,t,n){var r=n(7990),s=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(s,""):e}},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},9607:function(e,t,n){var r=n(2705),s=Object.prototype,i=s.hasOwnProperty,o=s.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(a){}var s=o.call(e);return r&&(t?e[c]=n:delete e[c]),s}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var r=n(1957),s="object"==typeof self&&self&&self.Object===Object&&self,i=r||s||Function("return this")();e.exports=i},7990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},3279:function(e,t,n){var r=n(3218),s=n(7771),i=n(4841),o=Math.max,c=Math.min;e.exports=function(e,t,n){var a,l,u,h,d,f,m=0,g=!1,p=!1,x=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=a,r=l;return a=l=void 0,m=t,h=e.apply(r,n)}function v(e){var n=e-f;return void 0===f||n>=t||n<0||p&&e-m>=u}function b(){var e=s();if(v(e))return M(e);d=setTimeout(b,function(e){var n=t-(e-f);return p?c(n,u-(e-m)):n}(e))}function M(e){return d=void 0,x&&a?y(e):(a=l=void 0,h)}function w(){var e=s(),n=v(e);if(a=arguments,l=this,f=e,n){if(void 0===d)return function(e){return m=e,d=setTimeout(b,t),g?y(e):h}(f);if(p)return clearTimeout(d),d=setTimeout(b,t),y(f)}return void 0===d&&(d=setTimeout(b,t)),h}return t=i(t)||0,r(n)&&(g=!!n.leading,u=(p="maxWait"in n)?o(i(n.maxWait)||0,t):u,x="trailing"in n?!!n.trailing:x),w.cancel=function(){void 0!==d&&clearTimeout(d),m=0,a=f=l=d=void 0},w.flush=function(){return void 0===d?h:M(s())},w}},3218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,n){var r=n(4239),s=n(7005);e.exports=function(e){return"symbol"==typeof e||s(e)&&"[object Symbol]"==r(e)}},7771:function(e,t,n){var r=n(5639);e.exports=function(){return r.Date.now()}},4841:function(e,t,n){var r=n(7561),s=n(3218),i=n(3448),o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(s(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=s(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=c.test(e);return n||a.test(e)?l(e.slice(2),n?2:8):o.test(e)?NaN:+e}},4405:function(e,t,n){"use strict";n.d(t,{w_:function(){return l}});var r=n(7294),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(s),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},o.apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n};function a(e){return e&&e.map((function(e,t){return r.createElement(e.tag,o({key:t},e.attr),a(e.child))}))}function l(e){return function(t){return r.createElement(u,o({attr:o({},e.attr)},t),a(e.child))}}function u(e){var t=function(t){var n,s=e.attr,i=e.size,a=e.title,l=c(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,l,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(s)}},8416:function(e,t,n){var r=n(4062);e.exports=function(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,n){var r=n(8698).default;e.exports=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var s=n.call(e,t||"default");if("object"!==r(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,n){var r=n(8698).default,s=n(5036);e.exports=function(e){var t=s(e,"string");return"symbol"===r(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-index-tsx-06a3d276907f324fccdc.js.map