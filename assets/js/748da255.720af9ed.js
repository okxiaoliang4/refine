"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26614],{34599:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>w,frontMatter:()=>c,metadata:()=>u,toc:()=>m});t(67294);var a=t(3905),r=t(53787),o=t(50551);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const c={title:"i18n Provider"},d=void 0,u={unversionedId:"i18n/i18n-provider/index",id:"i18n/i18n-provider/index",title:"i18n Provider",description:"Internationalization (i18n) is a process that allows software applications to be localized for different regions and languages. Refine can work with any i18n framework, but needs an i18nProvider to be created based on the chosen library.",source:"@site/docs/i18n/i18n-provider/index.md",sourceDirName:"i18n/i18n-provider",slug:"/i18n/i18n-provider/",permalink:"/docs/i18n/i18n-provider/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/i18n/i18n-provider/index.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1703672991,formattedLastUpdatedAt:"Dec 27, 2023",frontMatter:{title:"i18n Provider"},sidebar:"mainSidebar",previous:{title:"React Toastify",permalink:"/docs/examples/notification-provider/react-toastify"},next:{title:"useGetLocale",permalink:"/docs/i18n/hooks/use-get-locale/"}},p={},m=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2},{value:"Installation",id:"installation",level:3},{value:"Creating the i18n Instance",id:"creating-the-i18n-instance",level:3},{value:"Wrapping the app with React.Suspense",id:"wrapping-the-app-with-reactsuspense",level:3},{value:"Creating the i18n Provider",id:"creating-the-i18n-provider",level:3},{value:"Adding the Translations Files",id:"adding-the-translations-files",level:3},{value:"Changing The Locale",id:"changing-the-locale",level:3},{value:"Methods",id:"methods",level:2},{value:"translate",id:"translate",level:3},{value:"changeLocale",id:"changelocale",level:3},{value:"getLocale",id:"getlocale",level:3},{value:"Example",id:"example-1",level:2},{value:"FAQ",id:"faq",level:2},{value:"How can I create translation files for other languages in an automated way?",id:"how-can-i-create-translation-files-for-other-languages-in-an-automated-way",level:3}],g=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)},h=g("InstallPackagesCommand"),f=g("Image"),k=g("CodeSandboxExample"),v={toc:m};function w(e){var{components:n}=e,t=l(e,["components"]);return(0,a.kt)("wrapper",s(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){i(e,n,t[n])}))}return e}({},v,t),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Internationalization (i18n) is a process that allows software applications to be localized for different regions and languages. Refine can work with any i18n framework, but needs an ",(0,a.kt)("inlineCode",{parentName:"p"},"i18nProvider")," to be created based on the chosen library."),(0,a.kt)("p",null,"This document will help you add languages other than English, the default language of Refine, to your app. If you don't want to do that, you can skip it."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"First of all, Refine expects the ",(0,a.kt)("inlineCode",{parentName:"p"},"i18nProvider")," type as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { I18nProvider } from "@refinedev/core";\n\nconst i18nProvider: I18nProvider = {\n  translate: (key: string, options?: any, defaultMessage?: string) => string,\n  changeLocale: (lang: string, options?: any) => Promise,\n  getLocale: () => string,\n};\n')),(0,a.kt)("p",null,"After creating a ",(0,a.kt)("inlineCode",{parentName:"p"},"i18nProvider"),", you can pass it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\n\nimport i18nProvider from "./i18nProvider";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      // highlight-next-line\n      i18nProvider={i18nProvider}\n      /* ... */\n    >\n      {/* ... */}\n    </Refine>\n  );\n};\n')),(0,a.kt)("p",null,"This will allow us to put translation features to the followings hooks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/i18n/hooks/use-translate"},(0,a.kt)("inlineCode",{parentName:"a"},"useTranslate"))," shows translation between different languages."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/i18n/hooks/use-set-locale"},(0,a.kt)("inlineCode",{parentName:"a"},"useSetLocale"))," changes locale at runtime."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/i18n/hooks/use-get-locale"},(0,a.kt)("inlineCode",{parentName:"a"},"useGetLocale"))," getting current locale.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Let's add multi-language support to our application using the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-i18next")," framework. When we are done, our application will support both German and English."),(0,a.kt)("admonition",{title:"Good to know",type:"simple"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"We recommend using ",(0,a.kt)("a",{parentName:"li",href:"/docs/getting-started/quickstart"},(0,a.kt)("inlineCode",{parentName:"a"},"create refine-app"))," to initialize your Refine projects as it configures the project according to your needs, i18n support included if you choose it in the CLI"),(0,a.kt)("li",{parentName:"ul"},"For more information, refer to the ",(0,a.kt)("a",{parentName:"li",href:"https://react.i18next.com/getting-started"},"react-i18next documentation","\u2192")),(0,a.kt)("li",{parentName:"ul"},"This example is for SPA react apps, for Next.js refer to ",(0,a.kt)("a",{parentName:"li",href:"/docs/examples/i18n/i18n-nextjs"},"i18n Nextjs example","\u2192")))),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"To install both ",(0,a.kt)("inlineCode",{parentName:"p"},"react-i18next")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"i18next")," packages, run the following command within your project directory:"),(0,a.kt)(h,{args:"react-i18next i18next i18next-http-backend i18next-browser-languagedetector",mdxType:"InstallPackagesCommand"}),(0,a.kt)("h3",{id:"creating-the-i18n-instance"},"Creating the i18n Instance"),(0,a.kt)("p",null,"First, we will create an i18n instance using ",(0,a.kt)("inlineCode",{parentName:"p"},"react-i18next"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/i18n.ts"',title:'"src/i18n.ts"'},'import i18n from "i18next";\nimport { initReactI18next } from "react-i18next"; // https://react.i18next.com/latest/using-with-hooks\nimport Backend from "i18next-http-backend"; // For lazy loading for translations: https://github.com/i18next/i18next-http-backend\nimport detector from "i18next-browser-languagedetector"; // For auto detecting the user language: https://github.com/i18next/i18next-browser-languageDetector\n\ni18n\n  .use(Backend)\n  .use(detector)\n  .use(initReactI18next)\n  .init({\n    supportedLngs: ["en", "de"],\n    backend: {\n      loadPath: "/locales/{{lng}}/{{ns}}.json", // locale files path\n    },\n    ns: ["common"],\n    defaultNS: "common",\n    fallbackLng: ["en", "de"],\n  });\n\nexport default i18n;\n')),(0,a.kt)("h3",{id:"wrapping-the-app-with-reactsuspense"},"Wrapping the app with React.Suspense"),(0,a.kt)("p",null,"Then we will import the i18n instance we created and wrap the application with ",(0,a.kt)("inlineCode",{parentName:"p"},"React.Suspense"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},'import React from "react";\nimport { createRoot } from "react-dom/client";\nimport App from "./App";\n\n// highlight-next-line\nimport "./i18n";\n\nconst container = document.getElementById("root");\nconst root = createRoot(container!);\nroot.render(\n  <React.StrictMode>\n    // highlight-start\n    <React.Suspense fallback="loading">\n      <App />\n    </React.Suspense>\n    // highlight-end\n  </React.StrictMode>,\n);\n')),(0,a.kt)("h3",{id:"creating-the-i18n-provider"},"Creating the i18n Provider"),(0,a.kt)("p",null,"Next, we will include the i18n instance and create the ",(0,a.kt)("inlineCode",{parentName:"p"},"i18nProvider")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"react-i18next"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'// highlight-next-line\nimport type { I18nProvider } from "@refinedev/core";\nimport { Refine } from "@refinedev/core";\n// highlight-next-line\nimport { useTranslation } from "react-i18next";\n\nconst App: React.FC = () => {\n  // highlight-start\n  const { t, i18n } = useTranslation();\n\n  const i18nProvider: I18nProvider = {\n    translate: (key: string, options?: any) => t(key, options),\n    changeLocale: (lang: string) => i18n.changeLanguage(lang),\n    getLocale: () => i18n.language,\n  };\n  // highlight-end\n\n  return (\n    <Refine\n      // highlight-next-line\n      i18nProvider={i18nProvider}\n      /* ... */\n    >\n      {/* ... */}\n    </Refine>\n  );\n};\n')),(0,a.kt)("p",null,"After we pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"i18nProvider")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component, all three translation hooks (",(0,a.kt)("a",{parentName:"p",href:"/docs/i18n/hooks/use-translate"},(0,a.kt)("inlineCode",{parentName:"a"},"useTranslate")),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/i18n/hooks/use-set-locale"},(0,a.kt)("inlineCode",{parentName:"a"},"useSetLocale")),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/i18n/hooks/use-get-locale"},(0,a.kt)("inlineCode",{parentName:"a"},"useGetLocale")),") will be ready for use."),(0,a.kt)("h3",{id:"adding-the-translations-files"},"Adding the Translations Files"),(0,a.kt)("p",null,"Before we get started, let's look at which parts are going to be translated:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"The translation file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pages": {\n    "login": {\n      "title": "Sign in to your account",\n      "signin": "Sign in",\n      "signup": "Sign up",\n      "divider": "or",\n      "fields": {\n        "email": "Email",\n        "password": "Password"\n      },\n      "errors": {\n        "validEmail": "Invalid email address"\n      },\n      "buttons": {\n        "submit": "Login",\n        "forgotPassword": "Forgot password?",\n        "noAccount": "Don\u2019t have an account?",\n        "rememberMe": "Remember me"\n      }\n    },\n    "forgotPassword": {\n      "title": "Forgot your password?",\n      "fields": {\n        "email": "Email"\n      },\n      "errors": {\n        "validEmail": "Invalid email address"\n      },\n      "buttons": {\n        "submit": "Send reset instructions"\n      }\n    },\n    "register": {\n      "title": "Sign up for your account",\n      "fields": {\n        "email": "Email",\n        "password": "Password"\n      },\n      "errors": {\n        "validEmail": "Invalid email address"\n      },\n      "buttons": {\n        "submit": "Register",\n        "haveAccount": "Have an account?"\n      }\n    },\n    "updatePassword": {\n      "title": "Update password",\n      "fields": {\n        "password": "New Password",\n        "confirmPassword": "Confirm new password"\n      },\n      "errors": {\n        "confirmPasswordNotMatch": "Passwords do not match"\n      },\n      "buttons": {\n        "submit": "Update"\n      }\n    },\n    "error": {\n      "info": "You may have forgotten to add the {{action}} component to {{resource}} resource.",\n      "404": "Sorry, the page you visited does not exist.",\n      "resource404": "Are you sure you have created the {{resource}} resource.",\n      "backHome": "Back Home"\n    }\n  },\n  "actions": {\n    "list": "List",\n    "create": "Create",\n    "edit": "Edit",\n    "show": "Show"\n  },\n  "buttons": {\n    "create": "Create",\n    "save": "Save",\n    "logout": "Logout",\n    "delete": "Delete",\n    "edit": "Edit",\n    "cancel": "Cancel",\n    "confirm": "Are you sure?",\n    "filter": "Filter",\n    "clear": "Clear",\n    "refresh": "Refresh",\n    "show": "Show",\n    "undo": "Undo",\n    "import": "Import",\n    "clone": "Clone",\n    "notAccessTitle": "You don\'t have permission to access"\n  },\n  "warnWhenUnsavedChanges": "Are you sure you want to leave? You have unsaved changes.",\n  "notifications": {\n    "success": "Successful",\n    "error": "Error (status code: {{statusCode}})",\n    "undoable": "You have {{seconds}} seconds to undo",\n    "createSuccess": "Successfully created {{resource}}",\n    "createError": "There was an error creating {{resource}} (status code: {{statusCode}})",\n    "deleteSuccess": "Successfully deleted {{resource}}",\n    "deleteError": "Error when deleting {{resource}} (status code: {{statusCode}})",\n    "editSuccess": "Successfully edited {{resource}}",\n    "editError": "Error when editing {{resource}} (status code: {{statusCode}})",\n    "importProgress": "Importing: {{processed}}/{{total}}"\n  },\n  "loading": "Loading",\n  "tags": {\n    "clone": "Clone"\n  },\n  "dashboard": {\n    "title": "Dashboard"\n  },\n  "documentTitle": {\n    "default": "Refine",\n    "suffix": " | Refine",\n    "post": {\n      "list": "Posts | Refine",\n      "show": "#{{id}} Show Post | Refine",\n      "edit": "#{{id}} Edit Post | Refine",\n      "create": "Create new Post | Refine",\n      "clone": "#{{id}} Clone Post | Refine"\n    }\n  },\n  "autoSave": {\n    "success": "saved",\n    "error": "auto save failure",\n    "loading": "saving...",\n    "idle": "waiting for changes"\n  }\n}\n'))),(0,a.kt)("p",null,"Now, let's add the language files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"|-- public\n|   |-- locales\n|       |-- en\n|       |   |-- common.json\n|       |-- de\n|           |-- common.json\n|-- src\n|-- package.json\n|-- tsconfig.json\n")),(0,a.kt)(r.Z,{defaultValue:"en",values:[{label:"English",value:"en"},{label:"German",value:"de"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"en",mdxType:"TabItem"},(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show translation file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="/locales/en/common.json"',title:'"/locales/en/common.json"'},'{\n  "pages": {\n    "login": {\n      "title": "Sign in to your account",\n      "signin": "Sign in",\n      "signup": "Sign up",\n      "divider": "or",\n      "fields": {\n        "email": "Email",\n        "password": "Password"\n      },\n      "errors": {\n        "validEmail": "Invalid email address"\n      },\n      "buttons": {\n        "submit": "Login",\n        "forgotPassword": "Forgot password?",\n        "noAccount": "Don\u2019t have an account?",\n        "rememberMe": "Remember me"\n      }\n    },\n    "forgotPassword": {\n      "title": "Forgot your password?",\n      "fields": {\n        "email": "Email"\n      },\n      "errors": {\n        "validEmail": "Invalid email address"\n      },\n      "buttons": {\n        "submit": "Send reset instructions"\n      }\n    },\n    "register": {\n      "title": "Sign up for your account",\n      "fields": {\n        "email": "Email",\n        "password": "Password"\n      },\n      "errors": {\n        "validEmail": "Invalid email address"\n      },\n      "buttons": {\n        "submit": "Register",\n        "haveAccount": "Have an account?"\n      }\n    },\n    "updatePassword": {\n      "title": "Update password",\n      "fields": {\n        "password": "New Password",\n        "confirmPassword": "Confirm new password"\n      },\n      "errors": {\n        "confirmPasswordNotMatch": "Passwords do not match"\n      },\n      "buttons": {\n        "submit": "Update"\n      }\n    },\n    "error": {\n      "info": "You may have forgotten to add the {{action}} component to {{resource}} resource.",\n      "404": "Sorry, the page you visited does not exist.",\n      "resource404": "Are you sure you have created the {{resource}} resource.",\n      "backHome": "Back Home"\n    }\n  },\n  "actions": {\n    "list": "List",\n    "create": "Create",\n    "edit": "Edit",\n    "show": "Show"\n  },\n  "buttons": {\n    "create": "Create",\n    "save": "Save",\n    "logout": "Logout",\n    "delete": "Delete",\n    "edit": "Edit",\n    "cancel": "Cancel",\n    "confirm": "Are you sure?",\n    "filter": "Filter",\n    "clear": "Clear",\n    "refresh": "Refresh",\n    "show": "Show",\n    "undo": "Undo",\n    "import": "Import",\n    "clone": "Clone",\n    "notAccessTitle": "You don\'t have permission to access"\n  },\n  "warnWhenUnsavedChanges": "Are you sure you want to leave? You have unsaved changes.",\n  "notifications": {\n    "success": "Successful",\n    "error": "Error (status code: {{statusCode}})",\n    "undoable": "You have {{seconds}} seconds to undo",\n    "createSuccess": "Successfully created {{resource}}",\n    "createError": "There was an error creating {{resource}} (status code: {{statusCode}})",\n    "deleteSuccess": "Successfully deleted {{resource}}",\n    "deleteError": "Error when deleting {{resource}} (status code: {{statusCode}})",\n    "editSuccess": "Successfully edited {{resource}}",\n    "editError": "Error when editing {{resource}} (status code: {{statusCode}})",\n    "importProgress": "Importing: {{processed}}/{{total}}"\n  },\n  "loading": "Loading",\n  "tags": {\n    "clone": "Clone"\n  },\n  "dashboard": {\n    "title": "Dashboard"\n  },\n  "posts": {\n    "posts": "Posts",\n    "fields": {\n      "id": "Id",\n      "title": "Title",\n      "category": "Category",\n      "status": {\n        "title": "Status",\n        "published": "Published",\n        "draft": "Draft",\n        "rejected": "Rejected"\n      },\n      "content": "Content",\n      "createdAt": "Created At"\n    },\n    "titles": {\n      "create": "Create Post",\n      "edit": "Edit Post",\n      "list": "Posts",\n      "show": "Show Post"\n    }\n  },\n  "table": {\n    "actions": "Actions"\n  },\n  "documentTitle": {\n    "default": "refine",\n    "suffix": " | Refine",\n    "post": {\n      "list": "Posts | Refine",\n      "show": "#{{id}} Show Post | Refine",\n      "edit": "#{{id}} Edit Post | Refine",\n      "create": "Create new Post | Refine",\n      "clone": "#{{id}} Clone Post | Refine"\n    }\n  },\n  "autoSave": {\n    "success": "saved",\n    "error": "auto save failure",\n    "loading": "saving...",\n    "idle": "waiting for changes"\n  }\n}\n')))),(0,a.kt)(o.Z,{value:"de",mdxType:"TabItem"},(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show translation file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="/locales/de/common.json"',title:'"/locales/de/common.json"'},'{\n  "pages": {\n    "login": {\n      "title": "Melden Sie sich bei Ihrem Konto an",\n      "signin": "Einloggen",\n      "signup": "Anmelden",\n      "divider": "oder",\n      "fields": {\n        "email": "Email",\n        "password": "Passwort"\n      },\n      "errors": {\n        "validEmail": "Ung\xfcltige E-Mail-Adresse"\n      },\n      "buttons": {\n        "submit": "Anmeldung",\n        "forgotPassword": "Passwort vergessen?",\n        "noAccount": "Sie haben kein Konto?",\n        "rememberMe": "Erinnere dich an mich"\n      }\n    },\n    "forgotPassword": {\n      "title": "Haben Sie Ihr Passwort vergessen?",\n      "fields": {\n        "email": "Email"\n      },\n      "errors": {\n        "validEmail": "Ung\xfcltige E-Mail-Adresse"\n      },\n      "buttons": {\n        "submit": "Anweisungen zum Zur\xfccksetzen senden"\n      }\n    },\n    "register": {\n      "title": "Registrieren Sie sich f\xfcr Ihr Konto",\n      "fields": {\n        "email": "Email",\n        "password": "Passwort"\n      },\n      "errors": {\n        "validEmail": "Ung\xfcltige E-Mail-Adresse"\n      },\n      "buttons": {\n        "submit": "Registrieren",\n        "haveAccount": "Ein Konto haben?"\n      }\n    },\n    "updatePassword": {\n      "title": "Kennwort aktualisieren",\n      "fields": {\n        "password": "Neues Passwort",\n        "confirmPassword": "Best\xe4tige neues Passwort"\n      },\n      "errors": {\n        "confirmPasswordNotMatch": "Passw\xf6rter stimmen nicht \xfcberein"\n      },\n      "buttons": {\n        "submit": "Aktualisieren"\n      }\n    },\n    "error": {\n      "info": "Sie haben vergessen, {{action}} component zu {{resource}} hinzuf\xfcgen.",\n      "404": "Leider existiert diese Seite nicht.",\n      "resource404": "Haben Sie die {{resource}} resource erstellt?",\n      "backHome": "Zur\xfcck"\n    }\n  },\n  "actions": {\n    "list": "Auff\xfchren",\n    "create": "Erstellen",\n    "edit": "Bearbeiten",\n    "show": "Zeigen"\n  },\n  "buttons": {\n    "create": "Erstellen",\n    "save": "Speichern",\n    "logout": "Abmelden",\n    "delete": "L\xf6schen",\n    "edit": "Bearbeiten",\n    "cancel": "Abbrechen",\n    "confirm": "Sicher?",\n    "filter": "Filter",\n    "clear": "L\xf6schen",\n    "refresh": "Erneuern",\n    "show": "Zeigen",\n    "undo": "Undo",\n    "import": "Importieren",\n    "clone": "Klon",\n    "notAccessTitle": "Sie haben keine zugriffsberechtigung"\n  },\n  "warnWhenUnsavedChanges": "Nicht gespeicherte \xc4nderungen werden nicht \xfcbernommen.",\n  "notifications": {\n    "success": "Erfolg",\n    "error": "Fehler (status code: {{statusCode}})",\n    "undoable": "Sie haben {{seconds}} Sekunden Zeit f\xfcr Undo.",\n    "createSuccess": "{{resource}} erfolgreich erstellt.",\n    "createError": "Fehler beim Erstellen {{resource}} (status code: {{statusCode}})",\n    "deleteSuccess": "{{resource}} erfolgreich gel\xf6scht.",\n    "deleteError": "Fehler beim L\xf6schen {{resource}} (status code: {{statusCode}})",\n    "editSuccess": "{{resource}} erfolgreich bearbeitet.",\n    "editError": "Fehler beim Bearbeiten {{resource}} (status code: {{statusCode}})",\n    "importProgress": "{{processed}}/{{total}} importiert"\n  },\n  "loading": "Wird geladen",\n  "tags": {\n    "clone": "Klon"\n  },\n  "dashboard": {\n    "title": "Dashboard"\n  },\n  "posts": {\n    "posts": "Eintr\xe4ge",\n    "fields": {\n      "id": "Id",\n      "title": "Titel",\n      "category": "Kategorie",\n      "status": {\n        "title": "Status",\n        "published": "Ver\xf6ffentlicht",\n        "draft": "Draft",\n        "rejected": "Abgelehnt"\n      },\n      "content": "Inhalh",\n      "createdAt": "Erstellt am"\n    },\n    "titles": {\n      "create": "Erstellen",\n      "edit": "Bearbeiten",\n      "list": "Eintr\xe4ge",\n      "show": "Eintrag zeigen"\n    }\n  },\n  "table": {\n    "actions": "Aktionen"\n  },\n  "documentTitle": {\n    "default": "refine",\n    "suffix": " | Refine",\n    "post": {\n      "list": "Beitr\xe4ge | Refine",\n      "show": "#{{id}} Beitrag anzeigen | Refine",\n      "edit": "#{{id}} Beitrag bearbeiten | Refine",\n      "create": "Neuen Beitrag erstellen | Refine",\n      "clone": "#{{id}} Beitrag klonen | Refine"\n    }\n  },\n  "autoSave": {\n    "success": "gespeichert",\n    "error": "fehler beim automatischen speichern",\n    "loading": "speichern...",\n    "idle": "warten auf anderungen"\n  }\n}\n'))))),(0,a.kt)("p",null,"All of Refine's components support i18n, meaning that if you want to change their text, you can create your own translation files with the reference to the keys above. We can override refine's default texts by changing the ",(0,a.kt)("inlineCode",{parentName:"p"},"common.json")," files in the example above."),(0,a.kt)("h3",{id:"changing-the-locale"},"Changing The Locale"),(0,a.kt)("p",null,"Next, we will create a ",(0,a.kt)("inlineCode",{parentName:"p"},"<Header>")," component. This component will allow us to change the language."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/header.tsx"',title:'"src/components/header.tsx"'},'import { DownOutlined } from "@ant-design/icons";\nimport { useGetLocale, useSetLocale } from "@refinedev/core";\nimport { Avatar, Button, Dropdown, Layout, Menu, Space } from "antd";\nimport { useTranslation } from "react-i18next";\n\nexport const Header: React.FC = () => {\n  const { i18n } = useTranslation();\n  const locale = useGetLocale();\n  const changeLanguage = useSetLocale();\n\n  const currentLocale = locale();\n\n  const menu = (\n    <Menu selectedKeys={currentLocale ? [currentLocale] : []}>\n      {[...(i18n.languages || [])].sort().map((lang: string) => (\n        <Menu.Item\n          key={lang}\n          onClick={() => changeLanguage(lang)}\n          icon={\n            <span style={{ marginRight: 8 }}>\n              <Avatar size={16} src={`/images/flags/${lang}.svg`} />\n            </span>\n          }\n        >\n          {lang === "en" ? "English" : "German"}\n        </Menu.Item>\n      ))}\n    </Menu>\n  );\n\n  return (\n    <Layout.Header\n      style={{\n        display: "flex",\n        justifyContent: "flex-end",\n        alignItems: "center",\n        padding: "0px 24px",\n        height: "48px",\n        backgroundColor: "#FFF",\n      }}\n    >\n      <Dropdown overlay={menu}>\n        <Button type="link">\n          <Space>\n            <Avatar size={16} src={`/images/flags/${currentLocale}.svg`} />\n            {currentLocale === "en" ? "English" : "German"}\n            <DownOutlined />\n          </Space>\n        </Button>\n      </Dropdown>\n    </Layout.Header>\n  );\n};\n')),(0,a.kt)("br",null),(0,a.kt)("p",null,"Then, we will pass ",(0,a.kt)("inlineCode",{parentName:"p"},"<Header>")," to our ",(0,a.kt)("inlineCode",{parentName:"p"},"<Layout>")," component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine, Resource } from "@refinedev/core";\nimport { ThemedLayoutV2 } from "@refinedev/antd";\n\nimport { useTranslation } from "react-i18next";\n\nimport "./i18n";\n\n// highlight-next-line\nimport { Header } from "components";\n\nconst App: React.FC = () => {\n    const { t, i18n } = useTranslation();\n\n    const i18nProvider = {\n        translate: (key: string, options?: any) => t(key, options),\n        changeLocale: (lang: string) => i18n.changeLanguage(lang),\n        getLocale: () => i18n.language,\n    };\n\n    return (\n        <Refine\n            i18nProvider={i18nProvider}\n            /* ... */\n        >\n            <ThemedLayoutV2\n                // highlight-next-line\n                header={<Header />}\n            >\n                {/* ... */}\n            </Layout>\n        </Refine>\n    );\n};\n')),(0,a.kt)("br",null),(0,a.kt)("p",null,"Finally, we will create the ",(0,a.kt)("inlineCode",{parentName:"p"},"<PostList>")," page and then we will translate texts using ",(0,a.kt)("inlineCode",{parentName:"p"},"useTranslate"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import {\n  // highlight-next-line\n  useTranslate,\n  useMany,\n} from "@refinedev/core";\nimport { List, useTable, TextField, EditButton, ShowButton } from "@refinedev/antd";\nimport { Table, Space } from "antd";\n\nimport { IPost, ICategory } from "interfaces";\n\nexport const PostList: React.FC = () => {\n  // highlight-next-line\n  const translate = useTranslate();\n  const { tableProps } = useTable<IPost>();\n\n  const categoryIds = tableProps?.dataSource?.map((item) => item.category.id) ?? [];\n  const { data, isLoading } = useMany<ICategory>({\n    resource: "categories",\n    ids: categoryIds,\n    queryOptions: {\n      enabled: categoryIds.length > 0,\n    },\n  });\n\n  return (\n    <List>\n      <Table {...tableProps} rowKey="id">\n        <Table.Column dataIndex="id" title="ID" />\n        <Table.Column\n          dataIndex="title"\n          // highlight-next-line\n          title={translate("posts.fields.title")}\n        />\n        <Table.Column\n          dataIndex={["category", "id"]}\n          // highlight-next-line\n          title={translate("posts.fields.category")}\n          render={(value) => {\n            if (isLoading) {\n              return <TextField value="Loading..." />;\n            }\n\n            return <TextField value={data?.data.find((item) => item.id === value)?.title} />;\n          }}\n        />\n        <Table.Column<IPost>\n          // highlight-next-line\n          title={translate("table.actions")}\n          dataIndex="actions"\n          key="actions"\n          render={(_value, record) => (\n            <Space>\n              <EditButton size="small" recordItemId={record.id} />\n              <ShowButton size="small" recordItemId={record.id} />\n            </Space>\n          )}\n        />\n      </Table>\n    </List>\n  );\n};\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="interfaces/index.d.ts"',title:'"interfaces/index.d.ts"'},'export interface ICategory {\n  id: number;\n  title: string;\n}\n\nexport interface IPost {\n  id: number;\n  title: string;\n  content: string;\n  status: "published" | "draft" | "rejected";\n  category: { id: number };\n}\n')),(0,a.kt)(f,{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/i18n/changing-language.gif",alt:"Language change action",mdxType:"Image"}),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"translate"},"translate"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"translate")," takes parameters and passes them to the provided ",(0,a.kt)("inlineCode",{parentName:"p"},"i18nProvider")," and expects a string as a return value."),(0,a.kt)("p",null,"It has two ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Signature/Function"},"function signatures")," with different parameters, which is known as function overloading."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function translate(key: string, options?: any, defaultMessage?: string): string;\nfunction translate(key: string, defaultMessage?: string): string;\n")),(0,a.kt)("p",null,"It means that you can use it in two different ways. The first one is to pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"options"),", and, ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultMessage")," as parameters. The second one is to pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultMessage")," parameters. The ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," parameter is optional."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example of the ",(0,a.kt)("inlineCode",{parentName:"li"},"key")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"defaultMessage")," function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { I18nProvider } from "@refinedev/core";\nimport { useTranslation } from "react-i18next";\n\n// ...\n\nconst { t } = useTranslation();\n\nconst i18nProvider: I18nProvider = {\n  translate: (key: string, defaultMessage?: string) => t(key, defaultMessage),\n  // ...\n};\n\n// ...\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTranslate } from "@refinedev/core";\n\n// ...\n\nconst translate = useTranslate();\n\n// ...\n\ntranslate("posts.fields.title", "Title");\n\n// ...\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example of the ",(0,a.kt)("inlineCode",{parentName:"li"},"key"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," and, ",(0,a.kt)("inlineCode",{parentName:"li"},"defaultMessage")," function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { I18nProvider } from "@refinedev/core";\nimport { useTranslation } from "react-i18next";\n\n// ...\n\nconst { t } = useTranslation();\n\nconst i18nProvider: I18nProvider = {\n  translate: (key: string, options?: any, defaultMessage?: string) => t(key, defaultMessage, options),\n  // ...\n};\n\n// ...\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTranslate } from "@refinedev/core";\n\n// ...\n\nconst translate = useTranslate();\n\n// ...\n\nconst title = translate("posts.fields.title", { ns: "resources" }, "Title");\n\n// ...\n')),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/i18n/hooks/use-translate"},(0,a.kt)("inlineCode",{parentName:"a"},"useTranslate"))," hook to call ",(0,a.kt)("inlineCode",{parentName:"p"},"translate")," method."),(0,a.kt)("h3",{id:"changelocale"},"changeLocale"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"translate")," takes parameters and passes them to the provided ",(0,a.kt)("inlineCode",{parentName:"p"},"i18nProvider")," and expects a Promise as a return value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"changeLocale: (locale: string, options?: any) => Promise<any>;\n")),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/i18n/hooks/use-set-locale"},(0,a.kt)("inlineCode",{parentName:"a"},"useSetLocale"))," hook to call ",(0,a.kt)("inlineCode",{parentName:"p"},"changeLocale")," method."),(0,a.kt)("h3",{id:"getlocale"},"getLocale"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getLocale")," expects a string as a return value. It should return the current locale from your ",(0,a.kt)("inlineCode",{parentName:"p"},"i18nProvider"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"getLocale: () => string;\n")),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/i18n/hooks/use-get-locale"},(0,a.kt)("inlineCode",{parentName:"a"},"useGetLocale"))," hook to call ",(0,a.kt)("inlineCode",{parentName:"p"},"getLocale")," method."),(0,a.kt)("h2",{id:"example-1"},"Example"),(0,a.kt)(k,{path:"i18n-react",mdxType:"CodeSandboxExample"}),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-can-i-create-translation-files-for-other-languages-in-an-automated-way"},"How can I create translation files for other languages in an automated way?"),(0,a.kt)("p",null,"You can use the following community example project as a starting point for incorporating automated translations. The project adds deepl-translate-github-action which uses DeepL, an AI translation service to translate your locales json."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/lyqht/refine-i18n-react"},"refine-i18n-react"))))}w.isMDXComponent=!0}}]);