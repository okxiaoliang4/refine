"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28433],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={title:"Realtime"},l=void 0,p={unversionedId:"guides-concepts/realtime/index",id:"guides-concepts/realtime/index",title:"Realtime",description:"Realtime data is an important part of modern applications. Seeing the changes in the details page, without refreshing the page not only improves the user experience but also increases the productivity of the users by preventing accidental updates.",source:"@site/docs/guides-concepts/realtime/index.md",sourceDirName:"guides-concepts/realtime",slug:"/guides-concepts/realtime/",permalink:"/docs/guides-concepts/realtime/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/guides-concepts/realtime/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1709896748,formattedLastUpdatedAt:"Mar 8, 2024",frontMatter:{title:"Realtime"},sidebar:"mainSidebar",previous:{title:"Notifications",permalink:"/docs/guides-concepts/notifications/"},next:{title:"Audit Logs",permalink:"/docs/guides-concepts/audit-logs/"}},u={},c=[{value:"Supported Hooks",id:"supported-hooks",level:2},{value:"Built-in Integrations",id:"built-in-integrations",level:2},{value:"Live Provider",id:"live-provider",level:2},{value:"Hooks",id:"hooks",level:2},{value:"useSubscription",id:"usesubscription",level:3},{value:"usePublish",id:"usepublish",level:3},{value:"Creating a live provider with Ably",id:"creating-a-live-provider-with-ably",level:2},{value:"Implementing <code>subscribe</code> method",id:"implementing-subscribe-method",level:3},{value:"Implementing <code>unsubscribe</code> method",id:"implementing-unsubscribe-method",level:3},{value:"Implementing <code>publish</code> method",id:"implementing-publish-method",level:3},{value:"Usage",id:"usage",level:3},{value:"Creating a live provider with GraphQL subscriptions",id:"creating-a-live-provider-with-graphql-subscriptions",level:2},{value:"Implementing <code>subscribe</code> method",id:"implementing-subscribe-method-1",level:3},{value:"Implementing <code>unsubscribe</code> method",id:"implementing-unsubscribe-method-1",level:3},{value:"Usage",id:"usage-1",level:3}],d={toc:c};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Realtime data is an important part of modern applications. Seeing the changes in the details page, without refreshing the page not only improves the user experience but also increases the productivity of the users by preventing accidental updates."),(0,r.kt)("p",null,"Refine handles realtime data operations through ",(0,r.kt)("a",{parentName:"p",href:"/docs/realtime/live-provider"},"Live Provider")," which provides a common interface for any integration. Once integrated, you'll get realtime updates across your app out of the box, without needing a further configuration."),(0,r.kt)("p",null,"Once a ",(0,r.kt)("strong",{parentName:"p"},"Live Provider")," is integrated, Refine takes care of the ",(0,r.kt)("strong",{parentName:"p"},"invalidation"),", ",(0,r.kt)("strong",{parentName:"p"},"refetching")," logic for your resources."),(0,r.kt)("p",null,"For example if a new record is created for ",(0,r.kt)("inlineCode",{parentName:"p"},"products")," resource, a page where you use ",(0,r.kt)("inlineCode",{parentName:"p"},"useList")," hook will automatically refetch the latest ",(0,r.kt)("inlineCode",{parentName:"p"},"products")," data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine, LiveProvider } from "@refinedev/core";\n\nimport { liveProvider } from "./my-live-provider";\n\nconst App = () => {\n  return (\n    <Refine\n      liveProvider={liveProvider}\n      options={{ liveMode: "auto" }}\n      onLiveEvent={(event) => {\n        console.log(event);\n      }}\n    >\n      {/* ... */}\n    </Refine>\n  );\n};\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=my-page.tsx",title:"my-page.tsx"},'import { useList } from "@refinedev/core";\n\nconst { data } = useList({\n  resource: "products",\n  // Can be configured per-hook basis.\n  liveMode: "auto", // manual or off\n});\n')),(0,r.kt)("h2",{id:"supported-hooks"},"Supported Hooks"),(0,r.kt)("p",null,"Refine hooks works out-of-the-box with ",(0,r.kt)("strong",{parentName:"p"},"Live Provider"),", means if the data these hooks consume is updated, they will automatically refetch."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/realtime/live-provider#integrated-hooks"},"Integrated Hooks")," section for more information."),(0,r.kt)("h2",{id:"built-in-integrations"},"Built-in Integrations"),(0,r.kt)("p",null,"We have the following built-in integrations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ably")," ","\u2192"," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/master/packages/ably/src/index.ts"},"Source Code")," - ",(0,r.kt)("a",{parentName:"li",href:"https://codesandbox.io/embed/github/refinedev/refine/tree/master/examples/live-provider-ably/?view=preview&theme=dark&codemirror=1"},"Demo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Supabase")," ","\u2192"," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/master/packages/supabase/src/index.ts#L187"},"Source Code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Appwrite")," ","\u2192"," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/master/packages/appwrite/src/index.ts#L252"},"Source Code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Hasura")," ","\u2192"," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/master/packages/hasura/src/liveProvider/index.ts#L16"},"Source Code"))),(0,r.kt)("h2",{id:"live-provider"},"Live Provider"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Live Provider")," is an object that contains ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"unsubscribe")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"publish")," methods. These methods are utilized by Refine to subscribe, unsubscribe to a certain resource updates and publish updates."),(0,r.kt)("p",null,"A basic ",(0,r.kt)("strong",{parentName:"p"},"Live Provider")," looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="live-provider.ts"',title:'"live-provider.ts"'},'import { LiveProvider } from "@refinedev/core";\n\nexport const liveProvider: LiveProvider = {\n  subscribe: async ({ callback, channel, types, meta, params }) => {\n    console.log(callback); // a function that will be called when there is an update\n    console.log(channel); // products, orders, etc.\n    console.log(types); // created, updated, deleted, "*", etc.\n    console.log(meta); // { fields: [], operation: "", queryContext: {}, variables: {} }\n\n    const { resource, id, ids } = params;\n\n    // subscribe to the resource updates\n    const unsubscribe = MyWSClient.subscribe({ channel });\n\n    // call the callback function when there is an update\n    MyWSClient.on("message", (data) => callback(data));\n\n    // return value will be passed to `unsubscribe` method.\n    return { unsubscribe };\n  },\n  unsubscribe: async ({ unsubscribe }) => {\n    // unsubscribe from the resource updates\n    unsubscribe();\n  },\n  publish: async ({ channel, type, payload, date }) => {\n    console.log(channel); // products, orders, etc.\n    console.log(type); // created, updated, deleted, etc.\n    console.log(payload); // { id: 1, name: "Product 1" }, { id: 2, name: "Product 2" }, etc.\n    console.log(date); // new Date()\n\n    // publish the data to the resource channel.\n    MyWSClient.publish({ channel, type, payload, date });\n  },\n};\n')),(0,r.kt)("h2",{id:"hooks"},"Hooks"),(0,r.kt)("p",null,"While most of the features already works out-of-the-box with ",(0,r.kt)("strong",{parentName:"p"},"Live Provider"),", you can also use the following hooks to subscribe, unsubscribe and publish updates for your custom use cases."),(0,r.kt)("h3",{id:"usesubscription"},"useSubscription"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useSubscription")," hook can be used to subscribe to a certain resource updates. It calls ",(0,r.kt)("strong",{parentName:"p"},"Live Provider"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," method with the given parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useSubscription } from "@refinedev/core";\n\nuseSubscription({\n  resource: "products",\n  types: ["created", "updated"],\n  onLiveEvent: (event) => {\n    console.log(event.channel); // products, orders, etc.\n    console.log(event.type); // created, updated, deleted, etc.\n    console.log(event.payload); // { id: 1, name: "Product 1" }, { id: 2, name: "Product 2" }, etc.\n  },\n});\n')),(0,r.kt)("h3",{id:"usepublish"},"usePublish"),(0,r.kt)("p",null,"While generally it's not recommended to publish updates from the frontend, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"usePublish")," hook to publish updates to a certain resource. It calls ",(0,r.kt)("strong",{parentName:"p"},"Live Provider"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"publish")," method with the given parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { usePublish } from "@refinedev/core";\n\nconst publish = usePublish();\n\npublish({\n  channel: "products",\n  type: "deleted",\n  payload: { id: 1 },\n  date: new Date(),\n});\n')),(0,r.kt)("h2",{id:"creating-a-live-provider-with-ably"},"Creating a live provider with Ably"),(0,r.kt)("p",null,"We will build the ",(0,r.kt)("strong",{parentName:"p"},'"Ably Live Provider"')," of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/ably"},(0,r.kt)("inlineCode",{parentName:"a"},"@refinedev/ably"))," from scratch to show the logic of how live provider methods interact with Ably."),(0,r.kt)("h3",{id:"implementing-subscribe-method"},"Implementing ",(0,r.kt)("inlineCode",{parentName:"h3"},"subscribe")," method"),(0,r.kt)("p",null,"This method is used to subscribe to a Realtime channel. Refine subscribes to the related channels using subscribe method in supported hooks to be aware of the data changes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="liveProvider.ts"',title:'"liveProvider.ts"'},'import { LiveProvider, LiveEvent } from "@refinedev/core";\nimport Ably from "ably/promises";\nimport { Types } from "ably";\n\nexport const liveProvider = (client: Ably.Realtime): LiveProvider => {\n  return {\n    subscribe: ({ channel, types, params, callback, meta }) => {\n      console.log(channel); // products, orders, etc.\n      console.log(types); // created, updated, deleted, "*", etc.\n      console.log(params); // { id: 1 } or { ids: [1, 2, 3] }, etc.\n      console.log(callback); // a function that will be called when there is an update\n      console.log(meta); // { fields: [], operation: "", queryContext: {}, variables: {} }\n\n      const channelInstance = client.channels.get(channel);\n\n      const listener = function (message: MessageType) {\n        if (types.includes("*") || types.includes(message.data.type)) {\n          if (\n            message.data.type !== "created" &&\n            params?.ids !== undefined &&\n            message.data?.payload?.ids !== undefined\n          ) {\n            if (\n              params.ids.filter((value) =>\n                message.data.payload.ids!.includes(value),\n              ).length > 0\n            ) {\n              callback(message.data as LiveEvent);\n            }\n          } else {\n            callback(message.data);\n          }\n        }\n      };\n\n      channelInstance.subscribe(listener);\n\n      // returned value will be passed to `unsubscribe` method.\n      // required for unsubscribing from the channel.\n      return { channelInstance, listener };\n    },\n  };\n};\n\ninterface MessageType extends Types.Message {\n  data: LiveEvent;\n}\n')),(0,r.kt)("p",null,"Refine will use this subscribe method in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/realtime/hooks/use-subscription"},(0,r.kt)("inlineCode",{parentName:"a"},"useSubscription"))," hook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { useSubscription } from "@refinedev/core";\n\nuseSubscription({\n  channel: "channel-name",\n  onLiveEvent: (event) => {},\n});\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/realtime/hooks/use-subscription"},"useSubscription documentation","\u2192"))),(0,r.kt)("h3",{id:"implementing-unsubscribe-method"},"Implementing ",(0,r.kt)("inlineCode",{parentName:"h3"},"unsubscribe")," method"),(0,r.kt)("p",null,"This method is used to unsubscribe from a channel. The values returned from the ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," method are passed to this method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="liveProvider.ts"',title:'"liveProvider.ts"'},"export const liveProvider = (client: Ably.Realtime): LiveProvider => {\n  return {\n    unsubscribe: (payload: {\n      channelInstance: Types.RealtimeChannelPromise;\n      listener: () => void;\n    }) => {\n      const { channelInstance, listener } = payload;\n      channelInstance.unsubscribe(listener);\n    },\n  };\n};\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you don't handle unsubscription, it could lead to memory leaks.")),(0,r.kt)("h3",{id:"implementing-publish-method"},"Implementing ",(0,r.kt)("inlineCode",{parentName:"h3"},"publish")," method"),(0,r.kt)("p",null,"This method is used to publish an event on client side. Beware that publishing events on client side is not recommended and the best practice is to publish events from server side. You can refer ",(0,r.kt)("a",{parentName:"p",href:"#publish-events-from-api"},"Publish Events from API")," to see which events must be published from the server."),(0,r.kt)("p",null,"This ",(0,r.kt)("inlineCode",{parentName:"p"},"publish")," is used in ",(0,r.kt)("a",{parentName:"p",href:"#publish-events-from-hooks"},"realated hooks"),". When ",(0,r.kt)("inlineCode",{parentName:"p"},"publish")," is used, subscribers to these events are notified. You can also publish your custom events using ",(0,r.kt)("a",{parentName:"p",href:"/docs/realtime/hooks/use-publish"},(0,r.kt)("inlineCode",{parentName:"a"},"usePublish")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="liveProvider.ts"',title:'"liveProvider.ts"'},"export const liveProvider = (client: Ably.Realtime): LiveProvider => {\n  return {\n    publish: ({ channel, type, payload, date, meta }: LiveEvent) => {\n      const channelInstance = client.channels.get(channel);\n\n      channelInstance.publish(type, event);\n    },\n  };\n};\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"publish")," is used on client side you must handle the security of it by yourself.")),(0,r.kt)("p",null,"Refine will provide this publish method via the ",(0,r.kt)("a",{parentName:"p",href:"/docs/realtime/hooks/use-publish"},(0,r.kt)("inlineCode",{parentName:"a"},"usePublish"))," hook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { usePublish } from "@refinedev/core";\n\nconst publish = usePublish();\n')),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Now that we have created our live provider, we can use it in our application like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\nimport Ably from "ably/promises";\n\nimport { liveProvider } from "./liveProvider";\n\nconst ablyClient = new Ably.Realtime("your-ably-token");\n\nconst App = () => {\n  return <Refine liveProvider={liveProvider(ablyClient)}>{/*...*/}</Refine>;\n};\n')),(0,r.kt)("h2",{id:"creating-a-live-provider-with-graphql-subscriptions"},"Creating a live provider with GraphQL subscriptions"),(0,r.kt)("p",null,"In this section, we will create a live provider for GraphQL subscriptions from scratch. We will use ",(0,r.kt)("a",{parentName:"p",href:"https://hasura.io/"},"Hasura")," as an example, but the same logic can be applied to any GraphQL subscription provider."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/hasura")," has a built-in live provider for Hasura subscriptions, but we will create our own from scratch to learn how it works."),(0,r.kt)("p",null,"Before diving into the code, let's see the difference between GraphQL queries and subscriptions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"GraphQL queries")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// highlight-next-line\nquery GetPosts {\n  posts {\n    id\n    title\n    content\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"GraphQL subscriptions")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// highlight-next-line\nsubscription GetPosts {\n  posts {\n    id\n    title\n    content\n  }\n}\n")),(0,r.kt)("p",null,"As you can see, the only difference between queries and subscriptions is the ",(0,r.kt)("inlineCode",{parentName:"p"},"subscription")," keyword. This means that we can use the same logic for both queries and subscriptions. We already have a data provider for creating GraphQL queries, so we will use the same logic for GraphQL subscriptions."),(0,r.kt)("h3",{id:"implementing-subscribe-method-1"},"Implementing ",(0,r.kt)("inlineCode",{parentName:"h3"},"subscribe")," method"),(0,r.kt)("p",null,"When you call the ",(0,r.kt)("a",{parentName:"p",href:"/docs/data/hooks/use-list"},(0,r.kt)("inlineCode",{parentName:"a"},"useList")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/data/hooks/use-one"},(0,r.kt)("inlineCode",{parentName:"a"},"useOne"))," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/data/hooks/use-many"},(0,r.kt)("inlineCode",{parentName:"a"},"useMany"))," hooks, they will call the ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," method of the live provider."),(0,r.kt)("p",null,"Thus, we will be able to create subscription queries using the parameters of these hooks. After creating the subscription query, we will listen it using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/enisdenjo/graphql-ws"},(0,r.kt)("inlineCode",{parentName:"a"},"graphql-ws"))," client and return the unsubscribe method to use in the ",(0,r.kt)("inlineCode",{parentName:"p"},"unsubscribe")," method of the live provider."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="liveProvider.ts"',title:'"liveProvider.ts"'},'import { LiveProvider } from "@refinedev/core";\nimport { Client } from "graphql-ws";\n\nimport {\n  generateUseListSubscription,\n  generateUseManySubscription,\n  generateUseOneSubscription,\n} from "../utils";\n\nconst subscriptions = {\n  useList: generateUseListSubscription,\n  useOne: generateUseOneSubscription,\n  useMany: generateUseManySubscription,\n};\n\nexport const liveProvider = (client: Client): LiveProvider => {\n  return {\n    subscribe: ({ callback, params, meta }) => {\n      const {\n        resource,\n        pagination,\n        sorters,\n        filters,\n        subscriptionType,\n        id,\n        ids,\n      } = params ?? {};\n\n      if (!meta) {\n        throw new Error(\n          "[useSubscription]: `meta` is required in `params` for graphql subscriptions",\n        );\n      }\n\n      if (!subscriptionType) {\n        throw new Error(\n          "[useSubscription]: `subscriptionType` is required in `params` for graphql subscriptions",\n        );\n      }\n\n      if (!resource) {\n        throw new Error(\n          "[useSubscription]: `resource` is required in `params` for graphql subscriptions",\n        );\n      }\n\n      const generateSubscription = subscriptions[subscriptionType];\n\n      const { query, variables, operation } = generateSubscription({\n        ids,\n        id,\n        resource,\n        filters,\n        meta,\n        pagination,\n        sorters,\n      });\n\n      const onNext = (payload: { data: any }) => {\n        callback(payload.data[operation]);\n      };\n\n      const unsubscribe = client.subscribe(\n        {\n          query,\n          variables,\n        },\n        {\n          next: onNext,\n          error: () => null,\n          complete: () => null,\n        },\n      );\n\n      // Will be passed to `unsubscribe` method.\n      return unsubscribe;\n    },\n  };\n};\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"generateUseListSubscription"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"generateUseOneSubscription")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"generateUseManySubscription")," are helper functions that generate subscription queries. They are same as the methods in the data provider of ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/hasura"),". You can check them out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/hasura/src/utils"},"here"),".")),(0,r.kt)("p",null,"Refine hooks will create a subscription query using the parameters of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/realtime/hooks/use-subscription"},"useSubscription")," hook and listen to it. When a live event is received, it will call the ",(0,r.kt)("inlineCode",{parentName:"p"},"onLiveEvent")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSubscription")," hook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { useSubscription } from "@refinedev/core";\n\nuseSubscription({\n  channel: "posts",\n  enabled: true,\n  onLiveEvent: (event) => {\n    // called when a live event is received\n    console.log(event);\n  },\n  params: {\n    resource: "posts",\n    pagination: {\n      current: 1,\n      pageSize: 10,\n    },\n    subscriptionType: "useList",\n  },\n  meta: {\n    fields: [\n      "id",\n      "title",\n      {\n        category: ["title"],\n      },\n      "content",\n      "category_id",\n      "created_at",\n    ],\n  },\n});\n')),(0,r.kt)("h3",{id:"implementing-unsubscribe-method-1"},"Implementing ",(0,r.kt)("inlineCode",{parentName:"h3"},"unsubscribe")," method"),(0,r.kt)("p",null,"We will call the ",(0,r.kt)("inlineCode",{parentName:"p"},"unsubscribe")," method that we returned from the ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," method to unsubscribe from the subscription query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="liveProvider.ts"',title:'"liveProvider.ts"'},'import { LiveProvider } from "@refinedev/core";\nimport { Client } from "graphql-ws";\n\n...\n\nexport const liveProvider = (client: Client): LiveProvider => {\n    return {\n        ...\n        unsubscribe: (unsubscribe) => {\n            unsubscribe();\n        },\n    };\n};\n')),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("p",null,"Now that we have created our live provider, we can use it in our application like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\nimport { createClient } from "graphql-ws";\n\nimport { liveProvider } from "./liveProvider";\n\nconst gqlWebSocketClient = createClient({\n  url: "YOUR_WS_URL",\n});\n\nconst App: React.FC = () => {\n  return (\n    <Refine liveProvider={liveProvider(gqlWebSocketClient)}>\n      {/* ... */}{" "}\n    </Refine>\n  );\n};\n')))}m.isMDXComponent=!0}}]);