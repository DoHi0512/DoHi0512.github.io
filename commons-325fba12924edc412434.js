(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[351],{3204:function(e){"use strict";const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,o=/([\p{Alpha}\p{N}_]|$)/u,a=/[_.\- ]+/,i=new RegExp("^"+a.source),s=new RegExp(a.source+o.source,"gu"),c=new RegExp("\\d+"+o.source,"gu"),l=(e,o)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(o={pascalCase:!1,preserveConsecutiveUppercase:!1,...o},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const a=!1===o.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(o.locale),l=!1===o.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(o.locale);if(1===e.length)return o.pascalCase?l(e):a(e);return e!==a(e)&&(e=((e,n,o)=>{let a=!1,i=!1,s=!1;for(let c=0;c<e.length;c++){const l=e[c];a&&t.test(l)?(e=e.slice(0,c)+"-"+e.slice(c),a=!1,s=i,i=!0,c++):i&&s&&r.test(l)?(e=e.slice(0,c-1)+"-"+e.slice(c-1),s=i,i=!1,a=!0):(a=n(l)===l&&o(l)!==l,s=i,i=o(l)===l&&n(l)!==l)}return e})(e,a,l)),e=e.replace(i,""),e=o.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,a):a(e),o.pascalCase&&(e=l(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,c.lastIndex=0,e.replace(s,((e,r)=>t(r))).replace(c,(e=>t(e)))))(e,l)};e.exports=l,e.exports.default=l},4852:function(e){"use strict";e.exports=Object.assign},6132:function(e,t,r){"use strict";var n=r(4836);t.__esModule=!0,t.default=void 0;var o=n(r(6115)),a=n(r(7867)),i=n(r(8416)),s=n(r(7294)),c=n(r(5697)),l=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t=e.call.apply(e,[this].concat(n))||this,(0,i.default)((0,o.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,a.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},r.toggleTheme=function(e){window.__setPreferredTheme(e)},r.render=function(){return s.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(s.default.Component);l.propTypes={children:c.default.func.isRequired};var u=l;t.default=u},3071:function(e,t,r){"use strict";var n=r(4836)(r(6132));t.L=n.default},8032:function(e,t,r){"use strict";r.d(t,{G:function(){return _},L:function(){return m},M:function(){return E},P:function(){return T},S:function(){return F},_:function(){return s},a:function(){return i},b:function(){return u},g:function(){return f},h:function(){return c}});var n=r(7294),o=(r(3204),r(5697)),a=r.n(o);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}const c=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function l(e,t,r){const n={};let o="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(o="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:o,"data-gatsby-image-wrapper":"",style:n}}function u(e,t,r,n,o){return void 0===o&&(o={}),i({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:i({},o,{opacity:t?1:0})})}function f(e,t,r,n,o,a,s,c){const l={};a&&(l.backgroundColor=a,"fixed"===r?(l.width=n,l.height=o,l.backgroundColor=a,l.position="relative"):("constrained"===r||"fullWidth"===r)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),s&&(l.objectFit=s),c&&(l.objectPosition=c);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return u}const d=["children"],p=function(e){let{layout:t,width:r,height:o}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:o/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+o+"'%20width='"+r+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,r=s(e,d);return n.createElement(n.Fragment,null,n.createElement(p,i({},r)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:r,loading:o,alt:a="",shouldLoad:c}=e,l=s(e,g);return n.createElement("img",i({},l,{decoding:"async",loading:o,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:a}))},b=function(e){let{fallback:t,sources:r=[],shouldLoad:o=!0}=e,a=s(e,h);const c=a.sizes||(null==t?void 0:t.sizes),l=n.createElement(y,i({},a,t,{sizes:c,shouldLoad:o}));return r.length?n.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:a}=e;return n.createElement("source",{key:t+"-"+a+"-"+r,type:a,media:t,srcSet:o?r:void 0,"data-srcset":o?void 0:r,sizes:c})})),l):l};var v;y.propTypes={src:o.string.isRequired,alt:o.string.isRequired,sizes:o.string,srcSet:o.string,shouldLoad:o.bool},b.displayName="Picture",b.propTypes={alt:o.string.isRequired,shouldLoad:o.bool,fallback:o.exact({src:o.string.isRequired,srcSet:o.string,sizes:o.string}),sources:o.arrayOf(o.oneOfType([o.exact({media:o.string.isRequired,type:o.string,sizes:o.string,srcSet:o.string.isRequired}),o.exact({media:o.string,type:o.string.isRequired,sizes:o.string,srcSet:o.string.isRequired})]))};const w=["fallback"],T=function(e){let{fallback:t}=e,r=s(e,w);return t?n.createElement(b,i({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",i({},r))};T.displayName="Placeholder",T.propTypes={fallback:o.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};const E=function(e){return n.createElement(n.Fragment,null,n.createElement(b,i({},e)),n.createElement("noscript",null,n.createElement(b,i({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=b.propTypes;const x=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],C=e=>e.replace(/\n/g,""),O=function(e,t,r){for(var n=arguments.length,o=new Array(n>3?n-3:0),i=3;i<n;i++)o[i-3]=arguments[i];return e.alt||""===e.alt?a().string.apply(a(),[e,t,r].concat(o)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},A={image:a().object.isRequired,alt:O},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],L=new Set;let N,P;const I=function(e){let{as:t="div",image:o,style:a,backgroundColor:u,className:f,class:d,onStartLoad:p,onLoad:m,onError:g}=e,h=s(e,k);const{width:y,height:b,layout:v}=o,w=l(y,b,v),{style:T,className:E}=w,x=s(w,j),S=(0,n.useRef)(),C=(0,n.useMemo)((()=>JSON.stringify(o.images)),[o.images]);d&&(f=d);const O=function(e,t,r){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+r+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(v,y,b);return(0,n.useEffect)((()=>{N||(N=r.e(731).then(r.bind(r,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return P=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&c())return e.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void L.add(C);if(P&&L.has(C))return;let t,n;return N.then((e=>{let{renderImageToString:r,swapPlaceholderImage:s}=e;S.current&&(S.current.innerHTML=r(i({isLoading:!0,isLoaded:L.has(C),image:o},h)),L.has(C)||(t=requestAnimationFrame((()=>{S.current&&(n=s(S.current,C,L,a,p,m,g))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[o]),(0,n.useLayoutEffect)((()=>{L.has(C)&&P&&(S.current.innerHTML=P(i({isLoading:L.has(C),isLoaded:L.has(C),image:o},h)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[o]),(0,n.createElement)(t,i({},x,{style:i({},T,a,{backgroundColor:u}),className:E+(f?" "+f:""),ref:S,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},_=(0,n.memo)((function(e){return e.image?(0,n.createElement)(I,e):null}));_.propTypes=A,_.displayName="GatsbyImage";const M=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function R(e){return function(t){let{src:r,__imageData:o,__error:a}=t,c=s(t,M);return a&&console.warn(a),o?n.createElement(e,i({image:o},c)):(console.warn("Image not loaded",r),null)}}const q=R((function(e){let{as:t="div",className:r,class:o,style:a,image:c,loading:d="lazy",imgClassName:p,imgStyle:g,backgroundColor:h,objectFit:y,objectPosition:b}=e,v=s(e,x);if(!c)return console.warn("[gatsby-plugin-image] Missing image prop"),null;o&&(r=o),g=i({objectFit:y,objectPosition:b,backgroundColor:h},g);const{width:w,height:O,layout:A,images:k,placeholder:j,backgroundColor:L}=c,N=l(w,O,A),{style:P,className:I}=N,_=s(N,S),M={fallback:void 0,sources:[]};return k.fallback&&(M.fallback=i({},k.fallback,{srcSet:k.fallback.srcSet?C(k.fallback.srcSet):void 0})),k.sources&&(M.sources=k.sources.map((e=>i({},e,{srcSet:C(e.srcSet)})))),n.createElement(t,i({},_,{style:i({},P,a,{backgroundColor:h}),className:I+(r?" "+r:"")}),n.createElement(m,{layout:A,width:w,height:O},n.createElement(T,i({},f(j,!1,A,w,O,L,y,b))),n.createElement(E,i({"data-gatsby-image-ssr":"",className:p},v,u("eager"===d,!1,M,d,g)))))})),z=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?a().number.apply(a(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},D=new Set(["fixed","fullWidth","constrained"]),H={src:a().string.isRequired,alt:O,width:z,height:z,sizes:a().string,layout:e=>{if(void 0!==e.layout&&!D.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};q.displayName="StaticImage",q.propTypes=H;const F=R(_);F.displayName="StaticImage",F.propTypes=H},9595:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(7294),o=r(3071),a=r(3750),i=r(4480),s=r(915);var c=()=>{const[,e]=(0,i.FV)(s.X);return n.createElement(o.L,null,(t=>{let{theme:r,toggleTheme:o}=t;return n.createElement("button",{className:"w-24 h-8 rounded-2xl bg-text-color flex items-center relative justify-end cursor-pointer ",onClick:()=>{o("light"===r?"dark":"light"),e("light"===r?"dark":"light")}},n.createElement("div",{className:"w-full h-full flex items-center rounded-2xl bg-black justify-between z-10 border-text-color border-[1px] "+("light"===r?"":"darkmode")},n.createElement(a.mox,{size:"1rem",color:"white",className:"ml-3"}),n.createElement("span",{className:"text-sm mr-3 text-white"},"다크모드")),n.createElement("span",{className:"absolute text-xs text-black mr-2"},"On"))}))},l=r(1883),u=r(8032);var f=()=>n.createElement("div",{className:"items-center w-4/5 absolute top-0 h-16 lg:text-3xl text-2xl font-bold flex justify-between [&>*]:text-text-color z-10 "},n.createElement(l.Link,{to:"/",className:"hover:animate-fly"},n.createElement(u.S,{src:"../../assets/logo.png",alt:"logo",className:"z-10 object-contain w-[8rem] h-[full]",__imageData:r(4763)})),n.createElement("div",{className:"flex justify-end items-center w-56"},n.createElement(c,null),n.createElement("a",{href:"https://dohi-portfolio.notion.site/be632645758247a097123455c1d918bc?pvs=4",className:"w-24 text-base border-[1px] justify-center items-center h-8 rounded-2xl text-text-color bg-bg-color hover:text-bg-color hover:bg-text-color border-text-color md:flex hidden ml-8"},"About")));var d=()=>n.createElement("div",{className:"bg-bg-color flex  justify-center items-center h-8 text-sm mt-20"},n.createElement("span",null,"© 2023"," ",n.createElement("a",{href:"https://github.com/DoHi0512",className:"text-Greenlight/10"},"DoHi0512"," "),"powerd by",n.createElement("a",{href:"https://github.com/DoHi0512/DoHi0512.github.io",className:"text-Greenlight/10"}," ","DoHi.log")));var p=e=>{let{children:t,width:r,itemCenter:o}=e;return n.createElement(n.Fragment,null,n.createElement("div",{className:"w-full flex items-center duration-300 flex-col pb-12 bg-bg-color text-text-color min-h-screen "+o},n.createElement(f,null),n.createElement("div",{className:r},t),n.createElement(d,null)))}},915:function(e,t,r){"use strict";r.d(t,{X:function(){return i}});var n=r(4480),o=r(6983);const{persistAtom:a}=(0,o.J)(),i=(0,n.cn)({key:"theme",default:"light",effects_UNSTABLE:[a]})},3329:function(e,t,r){"use strict";r.d(t,{Z:function(){return ge}});var n,o,a,i,s=r(5697),c=r.n(s),l=r(3524),u=r.n(l),f=r(9590),d=r.n(f),p=r(7294),m=r(4852),g=r.n(m),h="bodyAttributes",y="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",E="href",x="http-equiv",S="innerHTML",C="itemprop",O="name",A="property",k="rel",j="src",L="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",I="defer",_="encodeSpecialCharacters",M="onChangeClientState",R="titleTemplate",q=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),z=[v.NOSCRIPT,v.SCRIPT,v.STYLE],D="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},W=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(e){var t=$(e,v.TITLE),r=$(e,R);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=$(e,P);return t||n||void 0},V=function(e){return $(e,M)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var a=n[o].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},G=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&te("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),i=0;i<a.length;i++){var s=a[i],c=s.toLowerCase();-1===t.indexOf(c)||r===k&&"canonical"===e[r].toLowerCase()||c===k&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==S&&s!==T&&s!==C||(r=s)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][l]&&(o[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var s=a[i],c=g()({},n[s],o[s]);n[s]=c}return e}),[]).reverse()},$=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),Z=function(e){return clearTimeout(e)},Q="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,ee="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Z:r.g.cancelAnimationFrame||Z,te=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},re=null,ne=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,f=e.title,d=e.titleAttributes;ie(v.BODY,n),ie(v.HTML,o),ae(f,d);var p={baseTag:se(v.BASE,r),linkTags:se(v.LINK,a),metaTags:se(v.META,i),noscriptTags:se(v.NOSCRIPT,s),scriptTags:se(v.SCRIPT,l),styleTags:se(v.STYLE,u)},m={},g={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(g[e]=p[e].oldTags)})),t&&t(),c(e,m,g)},oe=function(e){return Array.isArray(e)?e.join(""):e},ae=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ie(v.TITLE,t)},ie=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(D),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(t),s=0;s<i.length;s++){var c=i[s],l=t[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===o.indexOf(c)&&o.push(c);var u=a.indexOf(c);-1!==u&&a.splice(u,1)}for(var f=a.length-1;f>=0;f--)r.removeAttribute(a[f]);o.length===a.length?r.removeAttribute(D):r.getAttribute(D)!==i.join(",")&&r.setAttribute(D,i.join(","))}},se=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+D+"]"),o=Array.prototype.slice.call(n),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===S)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(D,"true"),o.some((function(e,t){return i=t,r.isEqualNode(e)}))?o.splice(i,1):a.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:a}},ce=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[N[r]||r]=e[r],t}),t)},ue=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[D]=!0,o=le(r,n),[p.createElement(v.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=ce(r),a=oe(t);return o?"<"+e+" "+D+'="true" '+o+">"+W(a,n)+"</"+e+">":"<"+e+" "+D+'="true">'+W(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case h:case y:return{toComponent:function(){return le(t)},toString:function(){return ce(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[D]=!0,n);return Object.keys(t).forEach((function(e){var r=N[e]||e;if(r===S||r===T){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),p.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===S||e===T)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+W(n[t],r)+'"';return e?e+" "+o:o}),""),a=n.innerHTML||n.cssText||"",i=-1===z.indexOf(e);return t+"<"+e+" "+D+'="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},fe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,u=e.title,f=void 0===u?"":u,d=e.titleAttributes;return{base:ue(v.BASE,t,n),bodyAttributes:ue(h,r,n),htmlAttributes:ue(y,o,n),link:ue(v.LINK,a,n),meta:ue(v.META,i,n),noscript:ue(v.NOSCRIPT,s,n),script:ue(v.SCRIPT,c,n),style:ue(v.STYLE,l,n),title:ue(v.TITLE,{title:f,titleAttributes:d},n)}},de=u()((function(e){return{baseTag:K([E,L],e),bodyAttributes:J(h,e),defer:$(e,I),encode:$(e,_),htmlAttributes:J(y,e),linkTags:G(v.LINK,[k,E],e),metaTags:G(v.META,[O,w,x,A,C],e),noscriptTags:G(v.NOSCRIPT,[S],e),onChangeClientState:V(e),scriptTags:G(v.SCRIPT,[j,S],e),styleTags:G(v.STYLE,[T],e),title:Y(e),titleAttributes:J(b,e)}}),(function(e){re&&ee(re),e.defer?re=Q((function(){ne(e,(function(){re=null}))})):(ne(e),re=null)}),fe)((function(){return null})),pe=(o=de,i=a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return B({},n,((t={})[r.type]=[].concat(n[r.type]||[],[B({},o,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(n.type){case v.TITLE:return B({},o,((t={})[n.type]=i,t.titleAttributes=B({},a),t));case v.BODY:return B({},o,{bodyAttributes:B({},a)});case v.HTML:return B({},o,{htmlAttributes:B({},a)})}return B({},o,((r={})[n.type]=B({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=B({},t);return Object.keys(e).forEach((function(t){var n;r=B({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return p.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[q[r]||r]=e[r],t}),t)}(U(o,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=U(e,["children"]),n=B({},r);return t&&(n=this.mapChildrenToProps(t,n)),p.createElement(o,n)},F(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(p.Component),a.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);pe.renderStatic=pe.rewind;var me=r(1883);var ge=e=>{var t,r,n;let{description:o,title:a}=e;const{site:i}=(0,me.useStaticQuery)("642825376"),s=o||i.siteMetadata.description,c=null===(t=i.siteMetadata)||void 0===t?void 0:t.title;return p.createElement(pe,{title:a?a+" | "+c:a},p.createElement("meta",{name:"description",content:s}),p.createElement("meta",{property:"og:title",content:a}),p.createElement("meta",{property:"og:description",content:s}),p.createElement("meta",{property:"og:type",content:"website"}),p.createElement("meta",{name:"instagram:card",content:"summary"}),p.createElement("meta",{name:"instagram:creator",content:(null===(r=i.siteMetadata)||void 0===r||null===(n=r.social)||void 0===n?void 0:n.instagram)||""}),p.createElement("meta",{name:"naver-site-verification",content:"a310cab35c8122abe717700aa145f7c11954dd6f"}),p.createElement("meta",{name:"instagram:title",content:a}),p.createElement("meta",{name:"instagram:description",content:s}))}},9590:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var s,c,l,u;if(Array.isArray(e)){if((s=e.length)!=i.length)return!1;for(c=s;0!=c--;)if(!a(e[c],i[c]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!a(c.value[1],i.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((s=e.length)!=i.length)return!1;for(c=s;0!=c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof i.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof i.toString)return e.toString()===i.toString();if((s=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!a(e[l[c]],i[l[c]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return l}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function c(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),c(e.child))}))}function l(e){return function(t){return n.createElement(u,i({attr:i({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var r,o=e.attr,a=e.size,c=e.title,l=s(e,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},3524:function(e,t,r){"use strict";var n,o=r(7294),a=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=e(l.map((function(e){return e.props}))),f.canUseDOM?t(c):r&&(c=r(c))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},i.render=function(){return a.createElement(n,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",s),f}}},6983:function(e,t){"use strict";t.J=void 0;t.J=(e={})=>{if("undefined"==typeof window)return{persistAtom:()=>{}};const{key:t="recoil-persist",storage:r=localStorage,converter:n=JSON}=e,o=(e,t,r,n)=>{n?delete t[r]:t[r]=e,s(t)},a=()=>{const e=r.getItem(t);return null==e?{}:"string"==typeof e?i(e):"function"==typeof e.then?e.then(i):{}},i=e=>{if(void 0===e)return{};try{return n.parse(e)}catch(t){return console.error(t),{}}},s=e=>{try{"function"==typeof r.mergeItem?r.mergeItem(t,n.stringify(e)):r.setItem(t,n.stringify(e))}catch(o){console.error(o)}};return{persistAtom:({onSet:e,node:t,trigger:r,setSelf:n})=>{if("get"===r){const e=a();"function"==typeof e.then&&e.then((e=>{e.hasOwnProperty(t.key)&&n(e[t.key])})),e.hasOwnProperty(t.key)&&n(e[t.key])}e((async(e,r,n)=>{const i=a();"function"==typeof i.then?i.then((r=>o(e,r,t.key,n))):o(e,i,t.key,n)}))}}}},8416:function(e,t,r){var n=r(4062);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,r){var n=r(8698).default;e.exports=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,r){var n=r(8698).default,o=r(5036);e.exports=function(e){var t=o(e,"string");return"symbol"===n(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4763:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/5bbbecffa2435dcb9ca7408ba18b5c47/8ad38/logo.png","srcSet":"/static/5bbbecffa2435dcb9ca7408ba18b5c47/4e8ff/logo.png 121w,\\n/static/5bbbecffa2435dcb9ca7408ba18b5c47/b0543/logo.png 243w,\\n/static/5bbbecffa2435dcb9ca7408ba18b5c47/8ad38/logo.png 485w","sizes":"(min-width: 485px) 485px, 100vw"},"sources":[{"srcSet":"/static/5bbbecffa2435dcb9ca7408ba18b5c47/234d3/logo.webp 121w,\\n/static/5bbbecffa2435dcb9ca7408ba18b5c47/debd8/logo.webp 243w,\\n/static/5bbbecffa2435dcb9ca7408ba18b5c47/51c00/logo.webp 485w","type":"image/webp","sizes":"(min-width: 485px) 485px, 100vw"}]},"width":485,"height":428}')}}]);
//# sourceMappingURL=commons-325fba12924edc412434.js.map