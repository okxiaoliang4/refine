"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22330],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),f=a,m=c["".concat(p,".").concat(f)]||c[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},39971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"handling-filters",title:"Handling Filters"},p=void 0,s={unversionedId:"advanced-tutorials/data-provider/handling-filters",id:"advanced-tutorials/data-provider/handling-filters",title:"Handling Filters",description:"Refine expects an array of type CrudFilters to filter results based on some field\u2019s values. So you can use more than one filter. Even the or operator can be used to combine multiple filters.",source:"@site/docs/advanced-tutorials/data-provider/handling-filters.md",sourceDirName:"advanced-tutorials/data-provider",slug:"/advanced-tutorials/data-provider/handling-filters",permalink:"/docs/advanced-tutorials/data-provider/handling-filters",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/advanced-tutorials/data-provider/handling-filters.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1704185464,formattedLastUpdatedAt:"Jan 2, 2024",frontMatter:{id:"handling-filters",title:"Handling Filters"},sidebar:"mainSidebar",previous:{title:"Custom Layout",permalink:"/docs/advanced-tutorials/custom-layout"},next:{title:"Custom Form Validation",permalink:"/docs/advanced-tutorials/forms/custom-form-validation"}},d={},u=[{value:"CrudFilters",id:"crudfilters",level:2},{value:"LogicalFilters",id:"logicalfilters",level:2},{value:"ConditionalFilters",id:"conditionalfilters",level:2},{value:"Top level multiple conditional filters usage",id:"top-level-multiple-conditional-filters-usage",level:3},{value:"Combining Filters",id:"combining-filters",level:2},{value:"Handle filters in a data provider",id:"handle-filters-in-a-data-provider",level:2}],c={toc:u};function f(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},c,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Refine")," expects an array of type ",(0,r.kt)("inlineCode",{parentName:"p"},"CrudFilters")," to filter results based on some field\u2019s values. So you can use more than one filter. Even the ",(0,r.kt)("inlineCode",{parentName:"p"},"or")," operator can be used to combine multiple filters."),(0,r.kt)("h2",{id:"crudfilters"},"CrudFilters"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CrudFilters")," is an array of objects with the following properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// Supported operators:\ntype CrudOperators =\n  | "eq"\n  | "ne"\n  | "lt"\n  | "gt"\n  | "lte"\n  | "gte"\n  | "in"\n  | "nin"\n  | "contains"\n  | "ncontains"\n  | "containss"\n  | "ncontainss"\n  | "between"\n  | "nbetween"\n  | "null"\n  | "nnull"\n  | "or"\n  | "startswith"\n  | "nstartswith"\n  | "startswiths"\n  | "nstartswiths"\n  | "endswith"\n  | "nendswith"\n  | "endswiths"\n  | "nendswiths";\n\n// Supported filter types:\ntype LogicalFilter = {\n  field: string;\n  operator: Exclude<CrudOperators, "or">;\n  value: any;\n};\n\ntype ConditionalFilter = {\n  operator: "or";\n  value: LogicalFilter[];\n};\n\ntype CrudFilter = LogicalFilter | ConditionalFilter;\n//highlight-next-line\ntype CrudFilters = CrudFilter[];\n')),(0,r.kt)("h2",{id:"logicalfilters"},"LogicalFilters"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LogicalFilter")," works with ",(0,r.kt)("inlineCode",{parentName:"p"},"AND")," logic. For example, if you want to filter by ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," field and ",(0,r.kt)("inlineCode",{parentName:"p"},"age")," field, you can use the following filter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const filter = [\n  {\n    field: "name",\n    operator: "eq",\n    value: "John",\n  },\n  {\n    field: "age",\n    operator: "lt",\n    value: 30,\n  },\n];\n')),(0,r.kt)("p",null,"Here the query will look like: ",(0,r.kt)("inlineCode",{parentName:"p"},'"name" = "John" AND "age" < 30')),(0,r.kt)("h2",{id:"conditionalfilters"},"ConditionalFilters"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ConditionalFilter")," works ",(0,r.kt)("inlineCode",{parentName:"p"},"or")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"and")," operator and expects an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"LogicalFilter")," objects in the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," property. For example, if you want to filter multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"OR")," by ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," field and ",(0,r.kt)("inlineCode",{parentName:"p"},"age")," field, you can use the following filter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const filter = [\n  {\n    operator: "or",\n    value: [\n      {\n        operator: "and",\n        value: [\n          {\n            field: "name",\n            operator: "eq",\n            value: "John Doe",\n          },\n          {\n            field: "age",\n            operator: "eq",\n            value: 30,\n          },\n        ],\n      },\n      {\n        operator: "and",\n        value: [\n          {\n            field: "name",\n            operator: "eq",\n            value: "JR.Doe",\n          },\n          {\n            field: "age",\n            operator: "eq",\n            value: 1,\n          },\n        ],\n      },\n    ],\n  },\n];\n')),(0,r.kt)("p",null,"Here the query will look like: ",(0,r.kt)("inlineCode",{parentName:"p"},'("name" = John Doe AND "age" = 30) OR ("name" = JR.Doe AND "age" = 1)')),(0,r.kt)("h3",{id:"top-level-multiple-conditional-filters-usage"},"Top level multiple conditional filters usage"),(0,r.kt)("p",null,"If you create multiple Conditional Filters at the top level, you must add a key to it. Otherwise, you will get a warning in the console and your filters may not be combined correctly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const filter = [\n  {\n    key: "parent",\n    operator: "or",\n    value: [\n      {\n        operator: "and",\n        value: [\n          {\n            field: "name",\n            operator: "eq",\n            value: "John Doe",\n          },\n          {\n            field: "age",\n            operator: "eq",\n            value: 30,\n          },\n        ],\n      },\n      {\n        operator: "and",\n        value: [\n          {\n            field: "name",\n            operator: "eq",\n            value: "Jane Doe",\n          },\n          {\n            field: "age",\n            operator: "eq",\n            value: 28,\n          },\n        ],\n      },\n    ],\n  },\n  {\n    key: "children",\n    operator: "or",\n    value: [\n      {\n        operator: "and",\n        value: [\n          {\n            field: "name",\n            operator: "eq",\n            value: "JR John",\n          },\n          {\n            field: "age",\n            operator: "eq",\n            value: 1,\n          },\n        ],\n      },\n      {\n        operator: "and",\n        value: [\n          {\n            field: "name",\n            operator: "eq",\n            value: "JR Jane",\n          },\n          {\n            field: "age",\n            operator: "eq",\n            value: 2,\n          },\n        ],\n      },\n    ],\n  },\n];\n')),(0,r.kt)("h2",{id:"combining-filters"},"Combining Filters"),(0,r.kt)("p",null,"You can group multiple parameters in the same query using the logical filters or the conditional filters operators to filter results based on more than one criteria at the same time. This allows you to create more complex queries."),(0,r.kt)("p",null,"Example query: Find posts with 2 possible dates & a specific status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'filter = [\n  {\n    operator: "or",\n    value: [\n      {\n        field: "createdAt",\n        operator: "eq",\n        value: "2022-01-01",\n      },\n      {\n        field: "createdAt",\n        operator: "eq",\n        value: "2022-01-02",\n      },\n    ],\n  },\n  {\n    operator: "eq",\n    field: "status",\n    value: "published",\n  },\n];\n')),(0,r.kt)("p",null,"Here the query will look like:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},'"status" == "published" AND ("createdAt" == "2022-01-01" OR "createdAt" == "2022-01-02")')),(0,r.kt)("h2",{id:"handle-filters-in-a-data-provider"},"Handle filters in a data provider"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="dataProvider.ts"',title:'"dataProvider.ts"'},'import { DataProvider } from "@refinedev/core";\n\nconst dataProvider = (): DataProvider => ({\n  getList: async ({ resource, pagination, filters, sorters }) => {\n    if (filters) {\n      filters.map((filter) => {\n        if (filter.operator !== "or" && filter.operator !== "and" && "field" in filter) {\n          // Handle your logical filters here\n          // console.log(typeof filter); // LogicalFilter\n        } else {\n          // Handle your conditional filters here\n          // console.log(typeof filter); // ConditionalFilter\n        }\n      });\n    }\n  },\n});\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Data providers that support ",(0,r.kt)("inlineCode",{parentName:"p"},"or")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"and")," filtering logic are as follows:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/nestjsx-crud"},"NestJS CRUD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/strapi"},"Strapi")," - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/strapi-v4"},"Strapi v4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/strapi-graphql"},"Strapi GraphQL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/supabase"},"Supabase")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/hasura"},"Hasura")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/nhost"},"Nhost")))))}f.isMDXComponent=!0}}]);