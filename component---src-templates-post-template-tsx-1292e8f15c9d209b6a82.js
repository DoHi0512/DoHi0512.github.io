(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[133],{6132:function(e,t,r){"use strict";var n=r(4836);t.__esModule=!0,t.default=void 0;var l=n(r(6115)),a=n(r(7867)),o=n(r(8416)),s=n(r(7294)),c=n(r(5697)),i=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t=e.call.apply(e,[this].concat(n))||this,(0,o.default)((0,l.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,a.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},r.toggleTheme=function(e){window.__setPreferredTheme(e)},r.render=function(){return s.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(s.default.Component);i.propTypes={children:c.default.func.isRequired};var u=i;t.default=u},3071:function(e,t,r){"use strict";var n=r(4836)(r(6132));t.L=n.default},1296:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(7294),l=r(3071),a=r(3750);var o=()=>n.createElement(l.L,null,(e=>{let{theme:t,toggleTheme:r}=e;return n.createElement("div",{className:"w-24 h-8 rounded-2xl bg-white flex flex-row items-center relative justify-end",onClick:()=>{r("light"===t?"dark":"light")}},n.createElement("div",{className:"w-full h-full flex items-center rounded-2xl bg-black justify-between z-10",style:{transform:"translateX("+("light"===t?0:-1.6)+"rem)"}},n.createElement(a.mox,{size:"1rem",color:"white",className:"ml-3"}),n.createElement("span",{className:"text-sm mr-3 text-white"},"다크모드")),n.createElement("span",{className:"absolute text-xs text-black mr-2"},"On"))})),s=r(4160);var c=e=>{let{width:t}=e;return n.createElement("div",{className:"items-center w-"+t+" h-16 text-3xl font-bold flex justify-between [&>*]:text-text-color"},n.createElement(s.rU,{to:"/"},"dohi.log"),n.createElement("div",{className:"flex justify-between items-center"},n.createElement(o,null)))}},4596:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(7294);var l=e=>{let{html:t}=e;return n.createElement("div",{className:"lg:w-1/2 w-4/5 pt-20 pb-20"},n.createElement("div",{className:"",dangerouslySetInnerHTML:{__html:t}}))},a=r(1296);var o=e=>{let{children:t}=e;return n.createElement("div",{className:"w-full duration-300 flex flex-col items-center bg-bg-color"},n.createElement(a.Z,{width:"4/5"}),t)};var s=e=>{let{title:t,thumbnail:r,date:l,tags:a}=e;return n.createElement("div",{className:"h-[26rem] w-full relative flex justify-center items-center bg-black"},n.createElement("img",{className:"w-full h-full object-cover absolute opacity-40",src:r}),n.createElement("div",{className:"absolute flex flex-col items-center"},n.createElement("span",{className:"text-4xl text-white font-bold"},t),n.createElement("span",{className:"text-sm text-white mt-2"},l),n.createElement("span",{className:"text-sm text-white mt-2"},a.join("/"))))};var c=e=>{let{data:{allMarkdownRemark:{edges:t}}}=e;const{node:{html:r,frontmatter:a}}=t[0];return n.createElement(n.Fragment,null,n.createElement(o,null,n.createElement(s,a),n.createElement(l,{html:r})))}},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return i}});var n=r(7294),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(l),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},o.apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]])}return r};function c(e){return e&&e.map((function(e,t){return n.createElement(e.tag,o({key:t},e.attr),c(e.child))}))}function i(e){return function(t){return n.createElement(u,o({attr:o({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var r,l=e.attr,a=e.size,c=e.title,i=s(e,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,i,{className:r,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(l)}},8416:function(e,t,r){var n=r(4062);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,r){var n=r(8698).default;e.exports=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var l=r.call(e,t||"default");if("object"!==n(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,r){var n=r(8698).default,l=r(5036);e.exports=function(e){var t=l(e,"string");return"symbol"===n(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-post-template-tsx-1292e8f15c9d209b6a82.js.map