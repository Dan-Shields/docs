(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),o=(n(0),n(132)),l={id:"concepts-and-terminology",title:"Concepts and Terminology",sidebar_label:"Concepts and Terminology"},r={unversionedId:"concepts-and-terminology",id:"concepts-and-terminology",isDocsHomePage:!1,title:"Concepts and Terminology",description:"NodeCG has a few main concepts to understand in order to get the most out of it and understand what a bundle is doing.",source:"@site/docs/concepts-and-terminology.md",slug:"/concepts-and-terminology",permalink:"/docs/concepts-and-terminology",editUrl:"https://github.com/nodecg/docs/edit/master/docs/concepts-and-terminology.md",version:"current",lastUpdatedBy:"Keiichiro Amemiya",lastUpdatedAt:1602000482,sidebar_label:"Concepts and Terminology",sidebar:"mainSidebar",previous:{title:"Creating Bundles",permalink:"/docs/creating-bundles"},next:{title:"package.json Manifest",permalink:"/docs/manifest"}},s=[{value:"Manifest",id:"manifest",children:[{value:"Related Docs",id:"related-docs",children:[]}]},{value:"Graphics",id:"graphics",children:[{value:"Related Docs",id:"related-docs-1",children:[]}]},{value:"Dashboard",id:"dashboard",children:[{value:"Related Docs",id:"related-docs-2",children:[]}]},{value:"Extensions",id:"extensions",children:[{value:"Related Docs",id:"related-docs-3",children:[]}]},{value:"Messages",id:"messages",children:[{value:"Related Docs",id:"related-docs-4",children:[]}]},{value:"Replicants",id:"replicants",children:[{value:"Related Docs",id:"related-docs-5",children:[]}]}],c={rightToc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"NodeCG has a few main concepts to understand in order to get the most out of it and understand what a bundle is doing."),Object(o.b)("h2",{id:"manifest"},"Manifest"),Object(o.b)("p",null,"Every bundle needs a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.npmjs.com/files/package.json"}),Object(o.b)("inlineCode",{parentName:"a"},"package.json"))," manifest file in its root directory. In addition to the required fields like ",Object(o.b)("inlineCode",{parentName:"p"},"name")," and ",Object(o.b)("inlineCode",{parentName:"p"},"version"),", NodeCG bundles must also have a ",Object(o.b)("inlineCode",{parentName:"p"},"nodecg")," object in their ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," with some additional properties that tell NodeCG how to load your bundle."),Object(o.b)("h3",{id:"related-docs"},"Related Docs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/manifest"}),"package.json Manifest"))),Object(o.b)("h2",{id:"graphics"},"Graphics"),Object(o.b)("p",null,"Graphics are the end result that your viewers will see. NodeCG itself doesn't provide any libraries for drawing pixels, it instead lets the user decide how they want to create their graphics in the open framework of HTML5, CSS3, and JS (with ES6 being fully supported). NodeCG will also helpfully inject an API instance into the global scope of your graphics, accessible as ",Object(o.b)("inlineCode",{parentName:"p"},"window.nodecg")," (or just ",Object(o.b)("inlineCode",{parentName:"p"},"nodecg"),") from your graphic's code."),Object(o.b)("p",null,"Graphics are defined in your bundle's ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file, in the ",Object(o.b)("inlineCode",{parentName:"p"},"nodecg.graphics")," section, with a few simple properties:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"file"),", the relative path (from your bundle's root directory) to the HTML file to be served as a graphic.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Your graphics should all live in the ",Object(o.b)("inlineCode",{parentName:"li"},"nodecg/your-bundle/graphics/")," folder."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"width")," and ",Object(o.b)("inlineCode",{parentName:"li"},"height"),", which defines the dimensions of your graphic.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Note that your graphic doesn't have to strictly adhere to these values, they're mostly for documentation of your bundle. NodeCG doesn't enforce these values."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"singleInstance"),", an optional property, that only allows your graphic to be open in one place at a time.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This is useful in scenarios where your graphic has fragile or highly stateful logic."),Object(o.b)("li",{parentName:"ul"},"Ideally, you'd never need to use ",Object(o.b)("inlineCode",{parentName:"li"},"singleInstance"),". However, it is sometimes hard to avoid, and can be the fastest route to shipping a complex graphic.")))),Object(o.b)("h3",{id:"related-docs-1"},"Related Docs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/manifest"}),"package.json Manifest")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/using-npm"}),"Using npm")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/performance-tips"}),"Performance Tips")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/screenshot-testing"}),"Screenshot Testing"))),Object(o.b)("h2",{id:"dashboard"},"Dashboard"),Object(o.b)("p",null,"The dashboard is where all your controls for your graphics end up. Each panel is it's own self-contained webpage (displayed as an ",Object(o.b)("inlineCode",{parentName:"p"},"<iframe>"),"), and has full access to the NodeCG API. Panels are defined in your bundle's ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file in the ",Object(o.b)("inlineCode",{parentName:"p"},"nodecg.dashboardPanels")," section with a few properties:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"name"),", the internal name of your panel."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"title"),", the title displayed on the NodeCG workspace."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"file"),", the relative path (from your bundle's root directory) to the HTML file to be served as a dashboard panel."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"width"),", an optional property, the amount of space the bundle takes up on the page.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Valid values are ",Object(o.b)("inlineCode",{parentName:"li"},"1-8"),"."),Object(o.b)("li",{parentName:"ul"},"Width scaling is arbitrary and is subject to change, play around with it."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"headerColor"),", an optional property, that will change the color of the panel's header to a provided hexadecimal color value.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Your ",Object(o.b)("inlineCode",{parentName:"li"},"headerColor")," must start with a ",Object(o.b)("inlineCode",{parentName:"li"},"#")," character. For example: ",Object(o.b)("inlineCode",{parentName:"li"},"#f47425"),"."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"workspace"),", an optional property, that when set will place the panel into a new workspace with the name provided. These workspaces can be shared between bundles."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"fullbleed"),", an optional property, that when set to true will place the panel in it's own workplace at the maximum possible width and height with no margins.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Each ",Object(o.b)("inlineCode",{parentName:"li"},"fullbleed")," panel gets its own dedicated workspace."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dialog"),", an optional property, that will turn the panel into a dialog that other panels are able to open."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dialogButtons"),", an optional property, that will show buttons for ",Object(o.b)("inlineCode",{parentName:"li"},"confirm"),", ",Object(o.b)("inlineCode",{parentName:"li"},"dismiss"),", or both on the dialog.")),Object(o.b)("h3",{id:"related-docs-2"},"Related Docs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/manifest"}),"package.json Manifest")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/making-dialogs"}),"Making dialogs")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/using-npm"}),"Using npm")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/sounds"}),"Sounds")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/assets"}),"Assets"))),Object(o.b)("h2",{id:"extensions"},"Extensions"),Object(o.b)("p",null,"Extensions are the back-end portion of your graphics and dashboard panels, typically handling all the potential messy logic that your bundle may need to handle, such as donations or schedule handling. NodeCG will try and ",Object(o.b)("inlineCode",{parentName:"p"},"require")," your bundle's ",Object(o.b)("inlineCode",{parentName:"p"},"extensions")," folder, so if used an index.js file is needed. Each extension must export a function that accepts a NodeCG API instance as its first and only argument."),Object(o.b)("p",null,"Not all bundles might require an extension to back them up, but you should consider one if your bundle might be handling any API work."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// nodecg/bundles/your-bundle/extension.js\nmodule.exports = nodecg => {\n  nodecg.listenFor('foo', () => {\n    console.log('bar');\n  });\n};\n")),Object(o.b)("p",null,"NodeCG automatically attempts to load the following files as extensions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"nodecg/bundles/your-bundle/extension.js")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"nodecg/bundles/your-bundle/extension/index.js"))),Object(o.b)("p",null,"Your bundle may have one of, but not both of the above files. If your extension is simple enough to fit in one file,\nuse the former approach. If your extension is broken up into multiple files, you may want to use the latter structure\nand keep all those files in a single ",Object(o.b)("inlineCode",{parentName:"p"},"extension")," folder. If using an ",Object(o.b)("inlineCode",{parentName:"p"},"extension")," folder, ",Object(o.b)("strong",{parentName:"p"},"NodeCG will only load ",Object(o.b)("inlineCode",{parentName:"strong"},"your-bundle/extension/index.js")),". It is up to you to load any other files that your extension needs via ",Object(o.b)("inlineCode",{parentName:"p"},"require"),"."),Object(o.b)("h3",{id:"related-docs-3"},"Related Docs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"classes/nodecg#extensions"}),"Extensions")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/manifest"}),"package.json Manifest")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/using-npm"}),"Using npm")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/custom-routes"}),"Custom routes")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/bundle-configuration"}),"Bundle configuration")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/mounts"}),"Mounts"))),Object(o.b)("h2",{id:"messages"},"Messages"),Object(o.b)("p",null,"Messages are the way NodeCG lets extensions, dashboard panels, and the graphics communicate with each other seamlessly. A message can be anything, from an array to an object to a string, as long as it can be represented in Javascript, you can send it. All you have to do is call ",Object(o.b)("inlineCode",{parentName:"p"},"nodecg.sendMessage")," on one end and ",Object(o.b)("inlineCode",{parentName:"p"},"nodecg.listenFor")," on another!"),Object(o.b)("h3",{id:"related-docs-4"},"Related Docs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"classes/sendMessage"}),"sendMessage")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"classes/sendMessageToBundle"}),"sendMessageToBundle")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"classes/listenFor"}),"listenFor"))),Object(o.b)("h2",{id:"replicants"},"Replicants"),Object(o.b)("p",null,"Replicants are how NodeCG stores and replicates data between extensions, dashboard panels, and graphics. Rather than being events like ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#messages"}),"messages")," are, Replicants are (optionally) persistent."),Object(o.b)("p",null,"Replicants on server-side extensions are able to be read synchronously, as NodeCG has immediate access to the database of replicants, but in dashboard panels and graphics you should read Replicants asynchronously by listening for the ",Object(o.b)("inlineCode",{parentName:"p"},"change")," event."),Object(o.b)("h3",{id:"related-docs-5"},"Related Docs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"classes/replicant"}),"Replicant")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/replicant-schemas"}),"Replicant Validation"))))}b.isMDXComponent=!0},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return n?i.a.createElement(m,r(r({ref:t},c),{},{components:n})):i.a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);