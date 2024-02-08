"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[15119],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(d,".").concat(f)]||u[f]||c[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"add-delete-feature",title:"5. Adding Delete Feature",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-create-page",next:"tutorial/adding-crud-pages/{preferredUI}/adding-sort-and-filters"}},d=void 0,p={unversionedId:"tutorial/adding-crud-pages/headless/add-delete-feature",id:"tutorial/adding-crud-pages/headless/add-delete-feature",title:"5. Adding Delete Feature",description:"useDelete is a Refine hook that is used to delete a record. It returns mutation functions that can be used to delete a record, and when the mutation function is called, the parameters of the function are passed to the delete method of the data provider.",source:"@site/docs/tutorial/4-adding-crud-pages/headless/add-delete-feature.md",sourceDirName:"tutorial/4-adding-crud-pages/headless",slug:"/tutorial/adding-crud-pages/headless/add-delete-feature",permalink:"/docs/tutorial/adding-crud-pages/headless/add-delete-feature",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/headless/add-delete-feature.md",tags:[],version:"current",lastUpdatedBy:"David Wandar",lastUpdatedAt:1707387672,formattedLastUpdatedAt:"Feb 8, 2024",frontMatter:{id:"add-delete-feature",title:"5. Adding Delete Feature",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-create-page",next:"tutorial/adding-crud-pages/{preferredUI}/adding-sort-and-filters"}}},s={},c=[],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},f=u("Checklist"),m=u("ChecklistItem"),g={toc:c};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useDelete")," is a Refine hook that is used to delete a record. It returns mutation functions that can be used to delete a record, and when the mutation function is called, the parameters of the function are passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"delete")," method of the data provider."),(0,r.kt)("p",null,"We will now add a delete button to the list page by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useDelete")," hook; for this, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts/list.tsx")," file on your editor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the ",(0,r.kt)("inlineCode",{parentName:"p"},"useOne")," hook from ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/core"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useOne } from "@refinedev/core";\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Call the ",(0,r.kt)("inlineCode",{parentName:"p"},"useDelete")," hook in the ",(0,r.kt)("inlineCode",{parentName:"p"},"BlogPostList")," component:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const BlogPostList: React.FC = () => {\n  const { mutate: deleteBlogPost } = useDelete();\n};\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"You can check the parameters of the ",(0,r.kt)("inlineCode",{parentName:"p"},"deleteBlogPost")," mutation function in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/data/hooks/use-delete#properties"},(0,r.kt)("inlineCode",{parentName:"a"},"useDelete")," documentation"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"<button/>")," component to the ",(0,r.kt)("inlineCode",{parentName:"p"},"actions")," column of the table as shown below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n            id: "actions",\n            accessorKey: "id",\n            header: "Actions",\n            cell: function render({ getValue }) {\n                return (\n                    <div\n                        style={{\n                            display: "flex",\n                            flexDirection: "row",\n                            flexWrap: "wrap",\n                            gap: "4px",\n                        }}\n                    >\n                        <button\n                            onClick={() => {\n                                show("blog_posts", getValue() as string);\n                            }}\n                        >\n                            Show\n                        </button>\n                        <button\n                            onClick={() => {\n                                edit("blog_posts", getValue() as string);\n                            }}\n                        >\n                            Edit\n                        </button>\n                        //highlight-start\n                        <button\n                            onClick={() => {\n                                deleteBlogPost({\n                                    resource: "blog_posts",\n                                    id: getValue() as string,\n                                });\n                            }}\n                        >\n                            Delete\n                        </button>\n                        //highlight-end\n                    </div>\n                );\n            },\n        },\n')))),(0,r.kt)("p",null,"You can now delete a record from the list page by clicking on the delete button of any blog post."),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"useDelete")," hook provided by Refine to delete a record."),(0,r.kt)("p",{parentName:"admonition"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/data/hooks/use-delete"},(0,r.kt)("inlineCode",{parentName:"a"},"useDelete")," documentation","\u2192"))),(0,r.kt)("br",null),(0,r.kt)(f,{mdxType:"Checklist"},(0,r.kt)(m,{id:"add-delete-feature-headless",mdxType:"ChecklistItem"},"I have added the delete feature to the list page."),(0,r.kt)(m,{id:"add-delete-feature-headless-2",mdxType:"ChecklistItem"},"I have enabled the delete feature on the show page and edit page.")))}h.isMDXComponent=!0}}]);