"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7115],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const d={id:"add-delete-feature",title:"5. Adding Delete Feature",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-create-page",next:"tutorial/adding-crud-pages/{preferredUI}/adding-sort-and-filters"}},l=void 0,p={unversionedId:"tutorial/adding-crud-pages/antd/add-delete-feature",id:"tutorial/adding-crud-pages/antd/add-delete-feature",title:"5. Adding Delete Feature",description:"Adding Delete Feature to List Page",source:"@site/docs/tutorial/4-adding-crud-pages/antd/add-delete-feature.md",sourceDirName:"tutorial/4-adding-crud-pages/antd",slug:"/tutorial/adding-crud-pages/antd/add-delete-feature",permalink:"/docs/tutorial/adding-crud-pages/antd/add-delete-feature",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/antd/add-delete-feature.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1704185464,formattedLastUpdatedAt:"Jan 2, 2024",frontMatter:{id:"add-delete-feature",title:"5. Adding Delete Feature",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-create-page",next:"tutorial/adding-crud-pages/{preferredUI}/adding-sort-and-filters"}}},s={},c=[{value:"Adding Delete Feature to List Page",id:"adding-delete-feature-to-list-page",level:2},{value:"Enabling the Delete Feature on Show and Edit Pages",id:"enabling-the-delete-feature-on-show-and-edit-pages",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=u("Checklist"),f=u("ChecklistItem"),g={toc:c};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"adding-delete-feature-to-list-page"},"Adding Delete Feature to List Page"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<DeleteButton/>"),' is a Refine component that is used for deleting records. When you click on the delete button, it will show a confirmation modal and delete the record upon confirmation. To add it to the "blog_posts" table:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts/list.tsx")," file on your editor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the ",(0,r.kt)("inlineCode",{parentName:"p"},"<DeleteButton/>")," component from ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/antd"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { DeleteButton } from "@refinedev/antd";\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"<DeleteButton/>")," component to the ",(0,r.kt)("inlineCode",{parentName:"p"},"actions")," column of the table:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Table.Column\n  title="Actions"\n  dataIndex="actions"\n  render={(_, record: BaseRecord) => (\n    <Space>\n      <EditButton hideText size="small" recordItemId={record.id} />\n      <ShowButton hideText size="small" recordItemId={record.id} />\n      //highlight-start\n      <DeleteButton hideText size="small" recordItemId={record.id} />\n      //highlight-end\n    </Space>\n  )}\n/>\n')))),(0,r.kt)("p",null,"You can now delete a record from the list page by clicking on the delete button of any blog post."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/ui-integrations/ant-design/components/buttons/delete-button"},(0,r.kt)("inlineCode",{parentName:"a"},"<DeleteButton/>")," documentation","\u2192"))),(0,r.kt)("h2",{id:"enabling-the-delete-feature-on-show-and-edit-pages"},"Enabling the Delete Feature on Show and Edit Pages"),(0,r.kt)("p",null,"We can enable the delete feature on both show and edit pages while we are defining a resource by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"canDelete")," property in the ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'src="src/App.tsx"',src:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport { Layout, notificationProvider, ErrorComponent } from "@refinedev/antd";\nimport routerBindings, { UnsavedChangesNotifier } from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter } from "react-router-dom";\n\nimport { BlogPostList } from "pages/blog-posts/list";\nimport { BlogPostEdit } from "pages/blog-posts/edit";\nimport { BlogPostshow } from "pages/blog-posts/show";\nimport { BlogPostCreate } from "pages/blog-posts/create";\n\nimport "@refinedev/antd/dist/reset.css";\n\nconst App: React.FC = () => {\n  return (\n    <BrowserRouter>\n      <Refine\n        routerProvider={routerBindings}\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        notificationProvider={notificationProvider}\n        resources={[\n          {\n            name: "blog_posts",\n            // highlight-start\n            meta: {\n              canDelete: true,\n            },\n            // highlight-end\n          },\n        ]}\n        options={{\n          syncWithLocation: true,\n          warnWhenUnsavedChanges: true,\n        }}\n      >\n        {/* ... */}\n        <UnsavedChangesNotifier />\n      </Refine>\n    </BrowserRouter>\n  );\n};\nexport default App;\n')),(0,r.kt)("p",null,"After setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"canDelete")," property in ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", you will see a delete button on both show and edit pages."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/refine-component#candelete"},(0,r.kt)("inlineCode",{parentName:"a"},"canDelete")," section of the ",(0,r.kt)("inlineCode",{parentName:"a"},"<Refine/>")," documentation","\u2192"))),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"useDelete")," hook provided by Refine to delete a record."),(0,r.kt)("p",{parentName:"admonition"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/data/hooks/use-delete"},(0,r.kt)("inlineCode",{parentName:"a"},"useDelete")," documentation","\u2192"))),(0,r.kt)("br",null),(0,r.kt)(m,{mdxType:"Checklist"},(0,r.kt)(f,{id:"add-delete-feature-antd",mdxType:"ChecklistItem"},"I have added the delete feature to the list page."),(0,r.kt)(f,{id:"add-delete-feature-antd-2",mdxType:"ChecklistItem"},"I have enabled the delete feature on the show page and edit page.")))}h.isMDXComponent=!0}}]);