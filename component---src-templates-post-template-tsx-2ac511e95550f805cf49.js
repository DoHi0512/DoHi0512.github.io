"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[133],{9699:function(e,t,l){l.r(t),l.d(t,{default:function(){return g}});var r=l(7294);const a={root:null,rootMargin:"-50% 0px -50% 0px",threshold:0};let n;var s=e=>{let{headings:t}=e;return r.createElement("div",{className:"sticky top-20 h-full whitespace-nowrap w-1/4 pl-10 lg:flex hidden sidebar"},r.createElement("div",{className:"border-l-[.5px] border-Grayscale/30 flex flex-col"},t.map(((e,t)=>{let{id:l,level:a,text:n,focus:s}=e;return r.createElement("a",{href:"#"+l,className:"level-"+a+" "+(s?"focus":"")+" hover:text-text-color",key:t},n)}))))};var c=e=>{let{html:t}=e;const[l,c]=r.useState([]),{0:o,1:i}=(0,r.useState)("");(0,r.useEffect)((()=>{const e=document.querySelectorAll("h1, h2, h3"),t=Array.from(e).map((e=>({id:e.getAttribute("id")||"",text:e.textContent||"",level:Number(e.tagName.charAt(1)),focus:e.getAttribute("id")===o})));c(t)}),[o]);const{addIntersectHandler:m,removeIntersectHandler:u}={addIntersectHandler:(0,r.useCallback)((function(e,t,l){void 0===t&&(t=a),n=new IntersectionObserver(l,t),e.forEach((e=>{n.observe(e)}))}),[]),removeIntersectHandler:(0,r.useCallback)((()=>{n.disconnect()}),[])};return(0,r.useEffect)((()=>{const e=l.map((e=>document.getElementById(e.id))).filter((e=>null!==e));return m(e,{root:null,rootMargin:"0px 0px -95% 0px",threshold:0},((e,t)=>{e.forEach((e=>{var t,l;e.isIntersecting&&null!==(t=e.target)&&void 0!==t&&t.id&&i(null===(l=e.target)||void 0===l?void 0:l.id)}))})),()=>{u()}}),[m,u,l]),r.createElement("div",{className:"w-full h-full pt-40 pb-20 relative flex flex-row lg:justify-end justify-center"},r.createElement("div",{className:"lg:w-1/2 w-4/5 markdown",dangerouslySetInnerHTML:{__html:t}}),r.createElement(s,{headings:l}))},o=l(8032);var i=e=>{let{title:t,thumbnail:{childImageSharp:{gatsbyImageData:l}},date:a,tags:n}=e;return r.createElement("div",{className:"h-[30rem] mt-16 w-full relative flex justify-center items-center bg-black"},r.createElement(o.G,{image:l,className:"w-full h-full object-cover absolute opacity-40",alt:"img"}),r.createElement("div",{className:"absolute flex flex-col items-center"},r.createElement("span",{className:"lg:text-4xl text-3xl text-center text-white font-bold"},t),r.createElement("span",{className:"text-sm text-white mt-2"},a),r.createElement("span",{className:"text-sm text-white mt-2"},null==n?void 0:n.join("/"))))};const m=r.memo((e=>{let{repo:t,theme:l}=e;const a=(0,r.createRef)();return(0,r.useLayoutEffect)((()=>{const e=document.createElement("script"),r={src:"https://utteranc.es/client.js",repo:t,theme:l,"issue-term":"pathname",label:"✨💬 comments ✨",crossOrigin:"anonymous",async:"true"};Object.entries(r).forEach((t=>{let[l,r]=t;e.setAttribute(l,r)})),a.current.appendChild(e)}),[t]),r.createElement("div",{className:"w-full",ref:a})}));m.displayName="Utterances";var u=m,d=l(4480),f=l(915),h=l(9595),p=l(3329);var g=e=>{let{data:{allMarkdownRemark:{nodes:t}}}=e;const{html:l,frontmatter:a}=t[0],n=(0,d.sJ)(f.X);return r.createElement(r.Fragment,null,r.createElement(p.Z,{title:a.title,description:a.description}),r.createElement(h.Z,{width:"w-full",itemCenter:"items-center"},r.createElement(i,a),r.createElement(c,{html:l}),r.createElement(u,{repo:"DoHi0512/DoHi0512.github.io",theme:"github-"+n})))}}}]);
//# sourceMappingURL=component---src-templates-post-template-tsx-2ac511e95550f805cf49.js.map