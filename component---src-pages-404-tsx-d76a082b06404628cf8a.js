(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[218],{6132:function(e,t,r){"use strict";var n=r(4836);t.__esModule=!0,t.default=void 0;var o=n(r(6115)),l=n(r(7867)),a=n(r(8416)),i=n(r(7294)),s=n(r(5697)),u=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return t=e.call.apply(e,[this].concat(n))||this,(0,a.default)((0,o.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,l.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},r.toggleTheme=function(e){window.__setPreferredTheme(e)},r.render=function(){return i.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(i.default.Component);u.propTypes={children:s.default.func.isRequired};var c=u;t.default=c},3071:function(e,t,r){"use strict";var n=r(4836)(r(6132));t.L=n.default},1296:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7294),o=r(3071),l=r(3750);var a=()=>n.createElement(o.L,null,(e=>{let{theme:t,toggleTheme:r}=e;return n.createElement("div",{className:"w-24 h-8 rounded-2xl bg-white flex flex-row items-center relative justify-end",onClick:()=>{r("light"===t?"dark":"light")}},n.createElement("div",{className:"w-full h-full flex items-center rounded-2xl bg-black justify-between z-10",style:{transform:"translateX("+("light"===t?0:-1.6)+"rem)"}},n.createElement(l.mox,{size:"1rem",color:"white",className:"ml-3"}),n.createElement("span",{className:"text-sm mr-3 text-white"},"다크모드")),n.createElement("span",{className:"absolute text-xs text-black mr-2"},"On"))})),i=r(4160);var s=e=>{let{width:t}=e;return n.createElement("div",{className:"items-center w-"+t+" h-16 text-3xl font-bold flex justify-between [&>*]:text-text-color"},n.createElement(i.rU,{to:"/"},"dohi.log"),n.createElement("div",{className:"flex justify-between items-center"},n.createElement(a,null)))}},1001:function(e,t,r){"use strict";var n=r(7294),o=r(1296);t.Z=e=>{let{children:t}=e;return n.createElement("div",{className:"w-full flex justify-center duration-300 pb-12 bg-bg-color text-text-color min-h-screen "},n.createElement("div",{className:"w-4/5"},n.createElement(o.Z,{width:"full"}),t))}},2513:function(e,t,r){"use strict";r.r(t);var n=r(7294),o=r(1001);t.default=e=>{let{data:t,location:r}=e;t.site.siteMetadata.title;return n.createElement(o.Z,null,n.createElement("h1",null,"404: Not Found"),n.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(o),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function s(e){return e&&e.map((function(e,t){return n.createElement(e.tag,a({key:t},e.attr),s(e.child))}))}function u(e){return function(t){return n.createElement(c,a({attr:a({},e.attr)},t),s(e.child))}}function c(e){var t=function(t){var r,o=e.attr,l=e.size,s=e.title,u=i(e,["attr","size","title"]),c=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(function(e){return t(e)})):t(o)}},8416:function(e,t,r){var n=r(4062);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,r){var n=r(8698).default;e.exports=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,r){var n=r(8698).default,o=r(5036);e.exports=function(e){var t=o(e,"string");return"symbol"===n(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-404-tsx-d76a082b06404628cf8a.js.map