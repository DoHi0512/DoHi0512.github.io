(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[351],{4852:function(e){"use strict";e.exports=Object.assign},6132:function(e,t,r){"use strict";var n=r(4836);t.__esModule=!0,t.default=void 0;var o=n(r(6115)),i=n(r(7867)),a=n(r(8416)),c=n(r(7294)),u=n(r(5697)),s=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t=e.call.apply(e,[this].concat(n))||this,(0,a.default)((0,o.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,i.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},r.toggleTheme=function(e){window.__setPreferredTheme(e)},r.render=function(){return c.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(c.default.Component);s.propTypes={children:u.default.func.isRequired};var l=s;t.default=l},3071:function(e,t,r){"use strict";var n=r(4836)(r(6132));t.L=n.default},2707:function(e,t,r){"use strict";r.d(t,{Z:function(){return Ee}});var n=r(7294),o=r(3071),i=r(3750),a=r(4480),c=r(915);var u=()=>{const[e,t]=(0,a.FV)(c.X);return console.log(e),n.createElement(o.L,null,(e=>{let{theme:r,toggleTheme:o}=e;return n.createElement("div",{className:"w-24 h-8 rounded-2xl bg-text-color flex flex-row items-center relative justify-end",onClick:()=>{o("light"===r?"dark":"light"),t("light"===r?"dark":"light")}},n.createElement("div",{className:"w-full h-full flex items-center rounded-2xl bg-black justify-between z-10 "+("light"===r?"":"darkmode")},n.createElement(i.mox,{size:"1rem",color:"white",className:"ml-3"}),n.createElement("span",{className:"text-sm mr-3 text-white"},"다크모드")),n.createElement("span",{className:"absolute text-xs text-black mr-2"},"On"))}))},s=r(4160);var l,f,p,d,m=()=>n.createElement("div",{className:"items-center w-4/5 absolute top-0 h-16 lg:text-3xl text-2xl font-bold flex justify-between [&>*]:text-text-color z-10 "},n.createElement(s.rU,{to:"/"},"DoHi"),n.createElement("div",{className:"flex justify-between items-center"},n.createElement(u,null))),y=r(5697),h=r.n(y),b=r(3524),g=r.n(b),v=r(9590),T=r.n(v),w=r(4852),E=r.n(w),O="bodyAttributes",S="htmlAttributes",A="titleAttributes",C={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},x=(Object.keys(C).map((function(e){return C[e]})),"charset"),j="cssText",k="href",P="http-equiv",_="innerHTML",N="itemprop",I="name",L="property",M="rel",R="src",D="target",B={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},H="defaultTitle",q="defer",z="encodeSpecialCharacters",Y="onChangeClientState",F="titleTemplate",U=Object.keys(B).reduce((function(e,t){return e[B[t]]=t,e}),{}),K=[C.NOSCRIPT,C.SCRIPT,C.STYLE],J="data-react-helmet",V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},$=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},G=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=ne(e,C.TITLE),r=ne(e,F);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=ne(e,H);return t||n||void 0},Q=function(e){return ne(e,Y)||function(){}},ee=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return X({},e,t)}),{})},te=function(e,t){return t.filter((function(e){return void 0!==e[C.BASE]})).map((function(e){return e[C.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},re=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ue("Helmet: "+e+' should be of type "Array". Instead found type "'+V(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||r===M&&"canonical"===e[r].toLowerCase()||u===M&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==_&&c!==j&&c!==N||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=E()({},n[c],o[c]);n[c]=u}return e}),[]).reverse()},ne=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},oe=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){oe(e)}),0)}),ie=function(e){return clearTimeout(e)},ae="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||oe:r.g.requestAnimationFrame||oe,ce="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ie:r.g.cancelAnimationFrame||ie,ue=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},se=null,le=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;de(C.BODY,n),de(C.HTML,o),pe(f,p);var d={baseTag:me(C.BASE,r),linkTags:me(C.LINK,i),metaTags:me(C.META,a),noscriptTags:me(C.NOSCRIPT,c),scriptTags:me(C.SCRIPT,s),styleTags:me(C.STYLE,l)},m={},y={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(y[e]=d[e].oldTags)})),t&&t(),u(e,m,y)},fe=function(e){return Array.isArray(e)?e.join(""):e},pe=function(e,t){void 0!==e&&document.title!==e&&(document.title=fe(e)),de(C.TITLE,t)},de=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(J),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(J):r.getAttribute(J)!==a.join(",")&&r.setAttribute(J,a.join(","))}},me=function(e,t){var r=document.head||document.querySelector(C.HEAD),n=r.querySelectorAll(e+"["+J+"]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===_)r.innerHTML=t.innerHTML;else if(n===j)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(J,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},ye=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},he=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[B[r]||r]=e[r],t}),t)},be=function(e,t,r){switch(e){case C.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(o={key:e})[J]=!0,i=he(r,o),[n.createElement(C.TITLE,i,e)];var e,r,o,i},toString:function(){return function(e,t,r,n){var o=ye(r),i=fe(t);return o?"<"+e+" "+J+'="true" '+o+">"+G(i,n)+"</"+e+">":"<"+e+" "+J+'="true">'+G(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case O:case S:return{toComponent:function(){return he(t)},toString:function(){return ye(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var o,i=((o={key:r})[J]=!0,o);return Object.keys(t).forEach((function(e){var r=B[e]||e;if(r===_||r===j){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),n.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===_||e===j)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+G(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===K.indexOf(e);return t+"<"+e+" "+J+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},ge=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:be(C.BASE,t,n),bodyAttributes:be(O,r,n),htmlAttributes:be(S,o,n),link:be(C.LINK,i,n),meta:be(C.META,a,n),noscript:be(C.NOSCRIPT,c,n),script:be(C.SCRIPT,u,n),style:be(C.STYLE,s,n),title:be(C.TITLE,{title:f,titleAttributes:p},n)}},ve=g()((function(e){return{baseTag:te([k,D],e),bodyAttributes:ee(O,e),defer:ne(e,q),encode:ne(e,z),htmlAttributes:ee(S,e),linkTags:re(C.LINK,[M,k],e),metaTags:re(C.META,[I,x,P,L,N],e),noscriptTags:re(C.NOSCRIPT,[_],e),onChangeClientState:Q(e),scriptTags:re(C.SCRIPT,[R,_],e),styleTags:re(C.STYLE,[j],e),title:Z(e),titleAttributes:ee(A,e)}}),(function(e){se&&ce(se),e.defer?se=ae((function(){le(e,(function(){se=null}))})):(le(e),se=null)}),ge)((function(){return null})),Te=(f=ve,d=p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!T()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case C.SCRIPT:case C.NOSCRIPT:return{innerHTML:t};case C.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return X({},n,((t={})[r.type]=[].concat(n[r.type]||[],[X({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case C.TITLE:return X({},o,((t={})[n.type]=a,t.titleAttributes=X({},i),t));case C.BODY:return X({},o,{bodyAttributes:X({},i)});case C.HTML:return X({},o,{htmlAttributes:X({},i)})}return X({},o,((r={})[n.type]=X({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=X({},t);return Object.keys(e).forEach((function(t){var n;r=X({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,o={};return n.Children.forEach(e,(function(e){if(e&&e.props){var n=e.props,i=n.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[U[r]||r]=e[r],t}),t)}($(n,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case C.LINK:case C.META:case C.NOSCRIPT:case C.SCRIPT:case C.STYLE:o=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:o,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(o,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=$(e,["children"]),o=X({},r);return t&&(o=this.mapChildrenToProps(t,o)),n.createElement(f,o)},W(t,null,[{key:"canUseDOM",set:function(e){f.canUseDOM=e}}]),t}(n.Component),p.propTypes={base:h().object,bodyAttributes:h().object,children:h().oneOfType([h().arrayOf(h().node),h().node]),defaultTitle:h().string,defer:h().bool,encodeSpecialCharacters:h().bool,htmlAttributes:h().object,link:h().arrayOf(h().object),meta:h().arrayOf(h().object),noscript:h().arrayOf(h().object),onChangeClientState:h().func,script:h().arrayOf(h().object),style:h().arrayOf(h().object),title:h().string,titleAttributes:h().object,titleTemplate:h().string},p.defaultProps={defer:!0,encodeSpecialCharacters:!0},p.peek=f.peek,p.rewind=function(){var e=f.rewind();return e||(e=ge({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},d);Te.renderStatic=Te.rewind;var we=e=>{var t,r,o;let{description:i,title:a}=e;const{site:c}=(0,s.K2)("642825376"),u=i||c.siteMetadata.description,l=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(Te,{title:l?a+" | "+l:a},n.createElement("meta",{name:"description",content:u}),n.createElement("meta",{property:"og:title",content:a}),n.createElement("meta",{property:"og:description",content:u}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"instagram:card",content:"summary"}),n.createElement("meta",{name:"instagram:creator",content:(null===(r=c.siteMetadata)||void 0===r||null===(o=r.social)||void 0===o?void 0:o.instagram)||""}),n.createElement("meta",{name:"google-site-verification",content:{}.GATSBY_SITE_KEY}),n.createElement("meta",{name:"instagram:title",content:a}),n.createElement("meta",{name:"instagram:description",content:u}))};var Ee=e=>{let{children:t,width:r,itemCenter:o}=e;return n.createElement(n.Fragment,null,n.createElement(we,{title:"DoHi.log",description:"DoHi's TechBlog"}),n.createElement("div",{className:"w-full flex justify-center duration-300 pb-12 bg-bg-color text-text-color min-h-screen "+o},n.createElement(m,null),n.createElement("div",{className:r},t)))}},915:function(e,t,r){"use strict";r.d(t,{X:function(){return a}});var n=r(4480),o=r(6983);const{persistAtom:i}=(0,o.J)(),a=(0,n.cn)({key:"theme",default:"light",effects_UNSTABLE:[i]})},9590:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof a.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function u(e){return e&&e.map((function(e,t){return n.createElement(e.tag,a({key:t},e.attr),u(e.child))}))}function s(e){return function(t){return n.createElement(l,a({attr:a({},e.attr)},t),u(e.child))}}function l(e){var t=function(t){var r,o=e.attr,i=e.size,u=e.title,s=c(e,["attr","size","title"]),l=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),u&&n.createElement("title",null,u),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},3524:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}},6983:function(e,t){"use strict";t.J=void 0;t.J=(e={})=>{if("undefined"==typeof window)return{persistAtom:()=>{}};const{key:t="recoil-persist",storage:r=localStorage,converter:n=JSON}=e,o=(e,t,r,n)=>{n?delete t[r]:t[r]=e,c(t)},i=()=>{const e=r.getItem(t);return null==e?{}:"string"==typeof e?a(e):"function"==typeof e.then?e.then(a):{}},a=e=>{if(void 0===e)return{};try{return n.parse(e)}catch(t){return console.error(t),{}}},c=e=>{try{"function"==typeof r.mergeItem?r.mergeItem(t,n.stringify(e)):r.setItem(t,n.stringify(e))}catch(o){console.error(o)}};return{persistAtom:({onSet:e,node:t,trigger:r,setSelf:n})=>{if("get"===r){const e=i();"function"==typeof e.then&&e.then((e=>{e.hasOwnProperty(t.key)&&n(e[t.key])})),e.hasOwnProperty(t.key)&&n(e[t.key])}e((async(e,r,n)=>{const a=i();"function"==typeof a.then?a.then((r=>o(e,r,t.key,n))):o(e,a,t.key,n)}))}}}},8416:function(e,t,r){var n=r(4062);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,r){var n=r(8698).default;e.exports=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,r){var n=r(8698).default,o=r(5036);e.exports=function(e){var t=o(e,"string");return"symbol"===n(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=commons-d3bafe2ad343ead83bd0.js.map