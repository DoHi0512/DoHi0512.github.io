"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[133],{9e3:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var l=r(7294);const a={root:null,rootMargin:"-50% 0px -50% 0px",threshold:0};let n;var s=e=>{let{headings:t}=e;return l.createElement("div",{className:"sticky top-20 h-full whitespace-nowrap w-1/4 pl-10 lg:flex hidden sidebar"},l.createElement("div",{className:"border-l-[.5px] border-Grayscale/30 flex flex-col"},t.map(((e,t)=>{let{id:r,level:a,text:n,focus:s}=e;return l.createElement("a",{href:"#"+r,className:`${"level-"+a} ${s?"focus":""} hover:text-text-color whitespace-normal pr-6`,key:t},n)}))))};var c=e=>{const t=document.querySelectorAll("h1, h2, h3");return Array.from(t).map((t=>({id:t.getAttribute("id")||"",text:t.textContent||"",level:Number(t.tagName.charAt(1)),focus:t.getAttribute("id")===e})))};var o=e=>{let{html:t}=e;const[r,o]=l.useState([]),{0:i,1:m}=(0,l.useState)("");(0,l.useEffect)((()=>{const e=(0,l.useMemo)((()=>c(i)),[i]);o(e)}),[i]);const{addIntersectHandler:u,removeIntersectHandler:d}={addIntersectHandler:(0,l.useCallback)((function(e,t,r){void 0===t&&(t=a),n=new IntersectionObserver(r,t),e.forEach((e=>{n.observe(e)}))}),[]),removeIntersectHandler:(0,l.useCallback)((()=>{n.disconnect()}),[])};return(0,l.useEffect)((()=>{const e=r.map((e=>document.getElementById(e.id))).filter((e=>null!==e));return u(e,{root:null,rootMargin:"0px 0px -95% 0px",threshold:0},(e=>{e.forEach((e=>{var t,r;e.isIntersecting&&null!==(t=e.target)&&void 0!==t&&t.id&&m(null===(r=e.target)||void 0===r?void 0:r.id)}))})),()=>{d()}}),[u,d,r]),l.createElement("div",{className:"w-full h-full pt-40 pb-20 relative flex flex-row lg:justify-end justify-center"},l.createElement("div",{className:"lg:w-1/2 w-4/5 markdown",dangerouslySetInnerHTML:{__html:t}}),l.createElement(s,{headings:r}))},i=r(8032);var m=e=>{let{title:t,thumbnail:{childImageSharp:{gatsbyImageData:r}},date:a,tags:n}=e;return l.createElement("div",{className:"h-[30rem] mt-16 w-full relative flex justify-center items-center bg-black"},l.createElement(i.G,{image:r,className:"w-full h-full bg-white object-cover absolute opacity-40",alt:"img"}),l.createElement("div",{className:"absolute flex flex-col items-center"},l.createElement("span",{className:"lg:text-4xl text-3xl text-center text-white font-bold"},t),l.createElement("span",{className:"text-sm text-white mt-2"},a),l.createElement("span",{className:"text-sm text-white mt-2"},null==n?void 0:n.join("/"))))};const u=l.memo((e=>{let{repo:t,theme:r}=e;const a=(0,l.createRef)();return(0,l.useLayoutEffect)((()=>{const e=document.createElement("script"),l={src:"https://utteranc.es/client.js",repo:t,theme:r,"issue-term":"pathname",label:"✨💬 comments ✨",crossOrigin:"anonymous",async:"true"};Object.entries(l).forEach((t=>{let[r,l]=t;e.setAttribute(r,l)})),a.current.appendChild(e)}),[t]),l.createElement("div",{className:"w-full",ref:a})}));u.displayName="Utterances";var d=u,h=r(4480),f=r(915),p=r(9227),g=r(4958);var b=e=>{let{data:{allMarkdownRemark:{nodes:t}}}=e;const{html:r,frontmatter:a}=t[0],n=(0,h.sJ)(f.X);return l.createElement(l.Fragment,null,l.createElement(g.Z,{title:a.title,description:a.description}),l.createElement(p.Z,{width:"w-full",itemCenter:"items-center"},l.createElement(m,a),l.createElement(o,{html:r}),l.createElement(d,{repo:"DoHi0512/DoHi0512.github.io",theme:`github-${n}`})))}}}]);
//# sourceMappingURL=component---src-templates-post-template-tsx-03c22c18a44aa05641d1.js.map