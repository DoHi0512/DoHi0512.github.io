(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[452],{6132:function(e,t,r){"use strict";var n=r(4836);t.__esModule=!0,t.default=void 0;var o=n(r(6115)),l=n(r(7867)),i=n(r(8416)),a=n(r(7294)),c=n(r(5697)),s=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return t=e.call.apply(e,[this].concat(n))||this,(0,i.default)((0,o.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,l.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},r.toggleTheme=function(e){window.__setPreferredTheme(e)},r.render=function(){return a.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(a.default.Component);s.propTypes={children:c.default.func.isRequired};var u=s;t.default=u},3071:function(e,t,r){"use strict";var n=r(4836)(r(6132));t.L=n.default},1296:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(7294),o=r(3071),l=r(3750),i=r(4480),a=r(915);var c=()=>{const[e,t]=(0,i.FV)(a.X);return console.log(e),n.createElement(o.L,null,(e=>{let{theme:r,toggleTheme:o}=e;return n.createElement("div",{className:"w-24 h-8 rounded-2xl bg-white flex flex-row items-center relative justify-end",onClick:()=>{o("light"===r?"dark":"light"),t("light"===r?"dark":"light")}},n.createElement("div",{className:"w-full h-full flex items-center rounded-2xl bg-black justify-between z-10 "+("light"===r?"":"darkmode")},n.createElement(l.mox,{size:"1rem",color:"white",className:"ml-3"}),n.createElement("span",{className:"text-sm mr-3 text-white"},"다크모드")),n.createElement("span",{className:"absolute text-xs text-black mr-2"},"On"))}))},s=r(4160);var u=e=>{let{width:t}=e;return n.createElement("div",{className:"items-center w-"+t+" h-16 lg:text-3xl text-2xl font-bold flex justify-between [&>*]:text-text-color"},n.createElement(s.rU,{to:"/"},"dohi.log"),n.createElement("div",{className:"flex justify-between items-center"},n.createElement(c,null)))}},2255:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7294),o=r(1296),l=r(4160);var i=e=>{var t,r,o;let{description:i,title:a,children:c}=e;const{site:s}=(0,l.K2)("642825376"),u=i||s.siteMetadata.description,m=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,m?a+" | "+m:a),n.createElement("meta",{name:"description",content:u}),n.createElement("meta",{property:"og:title",content:a}),n.createElement("meta",{property:"og:description",content:u}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"instagram:card",content:"summary"}),n.createElement("meta",{name:"instagram:creator",content:(null===(r=s.siteMetadata)||void 0===r||null===(o=r.social)||void 0===o?void 0:o.instagram)||""}),n.createElement("meta",{name:"google-site-verification",content:{}.GATSBY_SITE_KEY}),n.createElement("meta",{name:"instagram:title",content:a}),n.createElement("meta",{name:"instagram:description",content:u}),c)};var a=e=>{let{children:t}=e;return n.createElement(i,{title:"DoHi.log",description:"DoHi's TechBlog"},n.createElement("div",{className:"w-full flex justify-center duration-300 pb-12 bg-bg-color text-text-color min-h-screen "},n.createElement("div",{className:"w-4/5"},n.createElement(o.Z,{width:"full"}),t)))}},915:function(e,t,r){"use strict";r.d(t,{X:function(){return i}});var n=r(4480),o=r(6983);const{persistAtom:l}=(0,o.J)(),i=(0,n.cn)({key:"theme",default:"light",effects_UNSTABLE:[l]})},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(o),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function c(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return n.createElement(u,i({attr:i({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var r,o=e.attr,l=e.size,c=e.title,s=a(e,["attr","size","title"]),u=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(function(e){return t(e)})):t(o)}},6983:function(e,t){"use strict";t.J=void 0;t.J=(e={})=>{if("undefined"==typeof window)return{persistAtom:()=>{}};const{key:t="recoil-persist",storage:r=localStorage,converter:n=JSON}=e,o=(e,t,r,n)=>{n?delete t[r]:t[r]=e,a(t)},l=()=>{const e=r.getItem(t);return null==e?{}:"string"==typeof e?i(e):"function"==typeof e.then?e.then(i):{}},i=e=>{if(void 0===e)return{};try{return n.parse(e)}catch(t){return console.error(t),{}}},a=e=>{try{"function"==typeof r.mergeItem?r.mergeItem(t,n.stringify(e)):r.setItem(t,n.stringify(e))}catch(o){console.error(o)}};return{persistAtom:({onSet:e,node:t,trigger:r,setSelf:n})=>{if("get"===r){const e=l();"function"==typeof e.then&&e.then((e=>{e.hasOwnProperty(t.key)&&n(e[t.key])})),e.hasOwnProperty(t.key)&&n(e[t.key])}e((async(e,r,n)=>{const i=l();"function"==typeof i.then?i.then((r=>o(e,r,t.key,n))):o(e,i,t.key,n)}))}}}},8416:function(e,t,r){var n=r(4062);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,r){var n=r(8698).default;e.exports=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,r){var n=r(8698).default,o=r(5036);e.exports=function(e){var t=o(e,"string");return"symbol"===n(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=a3336d3c033a5ec9d59a088cb032c68b95c64a61-dd8e08db7c287df9d703.js.map