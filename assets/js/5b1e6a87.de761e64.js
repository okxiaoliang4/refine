"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[49959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(n),m=o,u=h["".concat(p,".").concat(m)]||h[m]||d[m]||r;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},27758:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});n(67294);var a=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"A complete guide to the React createPortal API",description:"We'll explore the React createPortal API, its advantages, disadvantages, and possible use cases.",slug:"react-createportal",authors:"joseph_mawa",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-12-react-createportal/social.png",hide_table_of_contents:!1},p=void 0,s={permalink:"/blog/react-createportal",source:"@site/blog/2023-10-12-react-createportal.md",title:"A complete guide to the React createPortal API",description:"We'll explore the React createPortal API, its advantages, disadvantages, and possible use cases.",date:"2023-10-12T00:00:00.000Z",formattedDate:"October 12, 2023",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:6.175,hasTruncateMarker:!1,authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],frontMatter:{title:"A complete guide to the React createPortal API",description:"We'll explore the React createPortal API, its advantages, disadvantages, and possible use cases.",slug:"react-createportal",authors:"joseph_mawa",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-12-react-createportal/social.png",hide_table_of_contents:!1},prevItem:{title:"Mojo - A New Programming Language for AI",permalink:"/blog/mojo-programming-language"},nextItem:{title:"Next.js vs React - A Beginner's Guide",permalink:"/blog/next-js-vs-react"},relatedPosts:[{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",permalink:"/blog/refine-react-admin-invoice-genarator",formattedDate:"February 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.195,date:"2022-02-22T00:00:00.000Z"},{title:"How to Multipart File Upload Using FormData with React Hook Form",description:"In this guide, I'm going to show you how to multipart files upload with using React Hook Form",permalink:"/blog/how-to-multipart-file-upload-with-react-hook-form",formattedDate:"March 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.05,date:"2022-03-29T00:00:00.000Z"},{title:"A Comprehensive Guide of React Unit Testing",description:"We'll learn how to unit test our component down to hooks and Context.",permalink:"/blog/react-unit-testing",formattedDate:"May 26, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:20.295,date:"2023-05-26T00:00:00.000Z"}],authorPosts:[{title:"How to Build a React Admin Panel with Mantine and Strapi",description:"We'll be building a simple React Admin Panel with refine and Mantine using Strapi as a backend service.",permalink:"/blog/react-admin-panel",formattedDate:"February 23, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:22.995,date:"2023-02-23T00:00:00.000Z"},{title:"How to Build a Web App in 10 steps in 2024",description:"In this article, we will explore some steps you can follow when building a web app.",permalink:"/blog/how-to-build-a-web-app",formattedDate:"December 26, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:9.43,date:"2023-12-26T00:00:00.000Z"},{title:"5 Best Free Platforms for Hosting Hobby Web Projects",description:"A list of the best free platforms for hosting hobby web projects. You can host your static websites, React apps, and more for free.",permalink:"/blog/5-top-free-react-hosting-platforms",formattedDate:"November 23, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:19.08,date:"2022-11-23T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Complete guide to the <code>createPortal</code> API",id:"complete-guide-to-the-createportal-api",level:2},{value:"Pros of the <code>createPortal</code> API",id:"pros-of-the-createportal-api",level:2},{value:"Rendering an element in another location in the DOM",id:"rendering-an-element-in-another-location-in-the-dom",level:3},{value:"Integrating third-party packages into your project",id:"integrating-third-party-packages-into-your-project",level:3},{value:"Cons of the <code>createPortal</code> API",id:"cons-of-the-createportal-api",level:2},{value:"CSS Inherited properties",id:"css-inherited-properties",level:3},{value:"Complex portals are difficult to maintain",id:"complex-portals-are-difficult-to-maintain",level:3},{value:"Accessibility issues",id:"accessibility-issues",level:3},{value:"Mismatch between location in the DOM and event bubbling",id:"mismatch-between-location-in-the-dom-and-event-bubbling",level:3},{value:"Use cases of the <code>createPortal</code> API",id:"use-cases-of-the-createportal-api",level:2},{value:"Conclusion",id:"conclusion",level:2}],h={toc:d};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"createPortal")," API is part of the React DOM. You can use it to flexibly render the children of a React component in another location in the DOM. Though you can render a portal in another location, it still behaves like any other React child component."),(0,a.kt)("p",null,"This behavior of the ",(0,a.kt)("inlineCode",{parentName:"p"},"createPortal")," API makes it easy to create UIs such as tooltips, toasts, modals, and popups. This article will take a deep dive into the ",(0,a.kt)("inlineCode",{parentName:"p"},"createPortal")," API. We will explore its advantages, disadvantages, and possible use cases."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#complete-guide-to-the-createportal-api"},"Complete guide to the ",(0,a.kt)("inlineCode",{parentName:"a"},"createPortal")," API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#pros-of-the-createportal-api"},"Pros of the ",(0,a.kt)("inlineCode",{parentName:"a"},"createPortal")," API"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rendering-an-element-in-another-location-in-the-dom"},"Rendering an element in another location in the DOM")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#integrating-third-party-packages-into-your-project"},"Integrating third-party packages into your project")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#cons-of-the-createportal-api"},"Cons of the ",(0,a.kt)("inlineCode",{parentName:"a"},"createPortal")," API"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#css-inherited-properties"},"CSS Inherited properties")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#complex-portals-are-difficult-to-maintain"},"Complex portals are difficult to maintain")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#accessibility-issues"},"Accessibility issues")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#mismatch-between-location-in-the-dom-and-event-bubbling"},"Mismatch between location in the DOM and event bubbling")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#use-cases-of-the-createportal-api"},"Use cases of the ",(0,a.kt)("inlineCode",{parentName:"a"},"createPortal")," API"))),(0,a.kt)("h2",{id:"complete-guide-to-the-createportal-api"},"Complete guide to the ",(0,a.kt)("inlineCode",{parentName:"h2"},"createPortal")," API"),(0,a.kt)("p",null,"As explained above, the ",(0,a.kt)("inlineCode",{parentName:"p"},"createPortal")," API is part of the React DOM API. Therefore, before using it, you need to import it from ",(0,a.kt)("inlineCode",{parentName:"p"},"react-dom")," like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { createPortal } from "react-dom";\n')),(0,a.kt)("p",null,"Ordinarily, a React component and its children have a parent-child relationship, and all the children are nested within their parent after rendering."),(0,a.kt)("p",null,"However, with the ",(0,a.kt)("inlineCode",{parentName:"p"},"createPortal")," API, a React component can render all or some of its children in another location in the DOM rather than the parent. The code below shows its function signature."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"createPortal(children, domNode, key?)\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," parameter of the ",(0,a.kt)("inlineCode",{parentName:"p"},"createPortal")," function must be a React component, JSX, React Fragment, string, number, or an array of these."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"domNode")," parameter is the DOM Node in which you want to render the ",(0,a.kt)("inlineCode",{parentName:"p"},"children"),". You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"document.getElementById")," method or any of the element-lookup methods of the ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," object."),(0,a.kt)("p",null,"The last parameter is an optional key. It is a unique string or number that will be used as the portal's key."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"createPortal")," function returns a React Node. Therefore, you can return it from a React component or render it inside another component's JSX, as in the example below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { createPortal } from "react-dom";\n\nexport function PortalDemo() {\n  return (\n    <div>\n      <p>This child is placed in the parent div.</p>\n      {createPortal(<p>This child is placed in the document body.</p>, document.body)}\n    </div>\n  );\n}\n')),(0,a.kt)("p",null,"When you render a component using the ",(0,a.kt)("inlineCode",{parentName:"p"},"createPortal")," API, only the rendering of the component in the DOM changes. Everything else remains the same. The events generated from the portal will bubble in the React Node hierarchy not in the DOM hierarchy."),(0,a.kt)("p",null,"Though a portal is rendered in a different location in the DOM, it is still a child of the parent React Component that renders it. It re-renders whenever the props or context passed to it changes, and its parent re-renders."),(0,a.kt)("h2",{id:"pros-of-the-createportal-api"},"Pros of the ",(0,a.kt)("inlineCode",{parentName:"h2"},"createPortal")," API"),(0,a.kt)("p",null,"There are several benefits of the ",(0,a.kt)("inlineCode",{parentName:"p"},"createPortal")," API. Below are some of these benefits."),(0,a.kt)("h3",{id:"rendering-an-element-in-another-location-in-the-dom"},"Rendering an element in another location in the DOM"),(0,a.kt)("p",null,"The biggest benefit of the ",(0,a.kt)("inlineCode",{parentName:"p"},"createPortal")," API is that it gives you the flexibility to render an element outside its parent in another DOM element therefore breaking out of the usual parent-child relationship between components."),(0,a.kt)("p",null,"This helps you to easily build certain UIs, such as tooltips and modals which might otherwise be difficult without portals."),(0,a.kt)("h3",{id:"integrating-third-party-packages-into-your-project"},"Integrating third-party packages into your project"),(0,a.kt)("p",null,"More often than not, you may want to integrate third-party packages that do not use React in your React application. The ",(0,a.kt)("inlineCode",{parentName:"p"},"createPortal")," API makes it easy because you can use it to render a React component anywhere in the DOM."),(0,a.kt)("h2",{id:"cons-of-the-createportal-api"},"Cons of the ",(0,a.kt)("inlineCode",{parentName:"h2"},"createPortal")," API"),(0,a.kt)("p",null,"As hinted above, the ",(0,a.kt)("inlineCode",{parentName:"p"},"createPortal")," API comes in handy when you're looking to render a component in a different location in the DOM. It is without doubt a very useful feature of the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-dom")," package and has very many useful applications."),(0,a.kt)("p",null,"However, the ",(0,a.kt)("inlineCode",{parentName:"p"},"createPortal")," API is not without drawbacks. Let's explore its disadvantages in this section."),(0,a.kt)("h3",{id:"css-inherited-properties"},"CSS Inherited properties"),(0,a.kt)("p",null,"Though a portal is still a child of its parent React component, it doesn't inherit CSS properties applied to its parent because it's rendered in a different location in the DOM. This may result in hard-to-find bugs, especially when dealing with complex portals."),(0,a.kt)("p",null,"In the example below, I'm applying ",(0,a.kt)("inlineCode",{parentName:"p"},"color: red")," to the parent ",(0,a.kt)("inlineCode",{parentName:"p"},"div"),". Ordinarily, the nested ",(0,a.kt)("inlineCode",{parentName:"p"},"p")," elements inherit the ",(0,a.kt)("inlineCode",{parentName:"p"},"color")," property from their parent. However, the ",(0,a.kt)("inlineCode",{parentName:"p"},"p")," element rendered using ",(0,a.kt)("inlineCode",{parentName:"p"},"createPortal")," won't because it is rendered in a different location in the DOM."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { createPortal } from "react-dom";\n\nfunction PortalDemo() {\n  return (\n    <div style={{ color: "red" }}>\n      <p>This will be red.</p>\n\n      {createPortal(<p>This won\'t be red.</p>, document.getElementById("portal"))}\n    </div>\n  );\n}\n')),(0,a.kt)("p",null,"Such behavior may result in bugs that may be difficult to trace, especially when dealing with complex applications."),(0,a.kt)("h3",{id:"complex-portals-are-difficult-to-maintain"},"Complex portals are difficult to maintain"),(0,a.kt)("p",null,"Portals may become difficult to maintain if you're dealing with complex interdependent portals. Similarly, it is difficult to reason about the components and the application because of the mismatch between the location of the portal in the DOM and where it is rendered in the React component."),(0,a.kt)("h3",{id:"accessibility-issues"},"Accessibility issues"),(0,a.kt)("p",null,"As we will discuss in the next subsection, the most common use-cases of the ",(0,a.kt)("inlineCode",{parentName:"p"},"createPortal")," API are for creating toasts, modals, and popups. You will need to go above and beyond to make them accessible."),(0,a.kt)("h3",{id:"mismatch-between-location-in-the-dom-and-event-bubbling"},"Mismatch between location in the DOM and event bubbling"),(0,a.kt)("p",null,"When you render an element in the DOM using ",(0,a.kt)("inlineCode",{parentName:"p"},"createPortal"),", the events bubble up the React tree, not the DOM tree. The mismatch between the location of a portal in the DOM and event bubbling may make debugging a little more difficult in complex applications."),(0,a.kt)("h2",{id:"use-cases-of-the-createportal-api"},"Use cases of the ",(0,a.kt)("inlineCode",{parentName:"h2"},"createPortal")," API"),(0,a.kt)("p",null,"As hinted above, the most common use-case of the ",(0,a.kt)("inlineCode",{parentName:"p"},"createPortal")," API is for building UIs such as modals, tooltips, popups, and toasts."),(0,a.kt)("p",null,"The example below shows how to use portals to implement a basic modal in React. You can also implement tooltips, popups, and toasts pretty much similarly."),(0,a.kt)("p",null,"The example below is a basic illustration of the ",(0,a.kt)("inlineCode",{parentName:"p"},"createPortal")," API without styling."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useState } from "react";\nimport { createPortal } from "react-dom";\n\nfunction Modal({ onClose }) {\n  return (\n    <div className="modal">\n      <p>This is a modal.</p>\n      <button onClick={onClose}>Close</button>\n    </div>\n  );\n}\n\nfunction App() {\n  const [showModal, setShowModal] = useState(false);\n  return (\n    <div>\n      <button onClick={() => setShowModal(true)}>Open modal.</button>\n      {showModal && createPortal(<Modal onClose={() => setShowModal(false)} />, document.body)}\n    </div>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("p",null,"Furthermore, it is also possible to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"createPortal")," API to integrate React in a static page or a non-react application because it enables rendering React components anywhere in the DOM."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"As explained above, the ",(0,a.kt)("inlineCode",{parentName:"p"},"createPortal")," API is part of the React DOM API. It is for rendering the children of a React component in another location in the DOM."),(0,a.kt)("p",null,"Though a portal is rendered in another location, it behaves like any React child component. It re-renders when its state, props, or context changes and when the parent component re-renders."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"createPortal")," function takes the ",(0,a.kt)("inlineCode",{parentName:"p"},"children"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"domNode"),", and an optional ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," as arguments and returns a React Node, which you can render in another React component or JSX."),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"createPortal")," API to create toasts, modals, tooltips, and popups such as cookie permissions popups. However, make sure any portal you create is accessible."))}m.isMDXComponent=!0}}]);