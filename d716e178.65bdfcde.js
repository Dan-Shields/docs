(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{122:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var a=t(2),r=t(6),o=(t(0),t(132)),i={id:"migrating-0.9-to-1.0",title:"Migrating from 0.9 to 1.0",sidebar_label:"0.9 \u2192 1.0"},c={unversionedId:"migrating/migrating-0.9-to-1.0",id:"migrating/migrating-0.9-to-1.0",isDocsHomePage:!1,title:"Migrating from 0.9 to 1.0",description:"Breaking Changes",source:"@site/docs/migrating/migrating-0.9-to-1.0.md",slug:"/migrating/migrating-0.9-to-1.0",permalink:"/docs/migrating/migrating-0.9-to-1.0",editUrl:"https://github.com/nodecg/docs/edit/master/docs/migrating/migrating-0.9-to-1.0.md",version:"current",lastUpdatedBy:"Keiichiro Amemiya",lastUpdatedAt:1602000482,sidebar_label:"0.9 \u2192 1.0",sidebar:"mainSidebar",previous:{title:"Migrating from 0.8 to 0.9",permalink:"/docs/migrating/migrating-0.8-to-0.9"},next:{title:"NodeCG",permalink:"/docs/classes/nodecg"}},l=[{value:"Breaking Changes",id:"breaking-changes",children:[{value:"Undocumented <code>[dialog-confirm]</code> and <code>[dialog-dismiss]</code> attribute click handlers have been removed",id:"undocumented-dialog-confirm-and-dialog-dismiss-attribute-click-handlers-have-been-removed",children:[]},{value:"Undocumented (and broken) <code>panelClick</code> event has been removed",id:"undocumented-and-broken-panelclick-event-has-been-removed",children:[]},{value:"Undocumented customCues system has been removed",id:"undocumented-customcues-system-has-been-removed",children:[]},{value:"Multiple listenFor handlers for a given message",id:"multiple-listenfor-handlers-for-a-given-message",children:[]},{value:"sendMessage can now trigger listenFor handlers in the same context",id:"sendmessage-can-now-trigger-listenfor-handlers-in-the-same-context",children:[]},{value:"Twitch auth now uses the &quot;New Twitch API&quot;, instead of the deprecated &quot;v5&quot; API",id:"twitch-auth-now-uses-the-new-twitch-api-instead-of-the-deprecated-v5-api",children:[]}]}],d={rightToc:l};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"breaking-changes"},"Breaking Changes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#undocumented-dialog-confirm-and-dialog-dismiss-attribute-click-handlers-have-been-removed"}),Object(o.b)("strong",{parentName:"a"},"dashboard"),": The undocumented ",Object(o.b)("inlineCode",{parentName:"a"},"[dialog-confirm]")," and ",Object(o.b)("inlineCode",{parentName:"a"},"[dialog-dismiss]")," attribute click handlers have been removed.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#undocumented-and-broken-panelclick-event-has-been-removed"}),Object(o.b)("strong",{parentName:"a"},"dashboard"),": The undocumented (and broken) ",Object(o.b)("inlineCode",{parentName:"a"},"panelClick")," event has been removed.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#undocumented-customcues-system-has-been-removed"}),Object(o.b)("strong",{parentName:"a"},"sounds:")," The undocumented customCues system has been removed.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#multiple-listenfor-handlers-for-a-given-message"}),Object(o.b)("strong",{parentName:"a"},"api:")," A given context (server, client) can now declare multiple listenFor handlers for a given message. Handlers are called in the order they were registered.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#sendmessage-can-now-trigger-listenfor-handlers-in-the-same-context"}),Object(o.b)("strong",{parentName:"a"},"api:")," sendMessage can now trigger listenFor handlers in the same context (extension, webpage, etc).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#twitch-auth-now-uses-the-new-twitch-api-instead-of-the-deprecated-v5-api"}),Object(o.b)("strong",{parentName:"a"},"login:"),' Twitch auth now uses the "New Twitch API", instead of the deprecated "v5" API.'))),Object(o.b)("h3",{id:"undocumented-dialog-confirm-and-dialog-dismiss-attribute-click-handlers-have-been-removed"},"Undocumented ",Object(o.b)("inlineCode",{parentName:"h3"},"[dialog-confirm]")," and ",Object(o.b)("inlineCode",{parentName:"h3"},"[dialog-dismiss]")," attribute click handlers have been removed"),Object(o.b)("p",null,"Previously, NodeCG had an undocumented feature where ",Object(o.b)("em",{parentName:"p"},"any")," element in a Dialog with a ",Object(o.b)("inlineCode",{parentName:"p"},"[dialog-confirm]")," or ",Object(o.b)("inlineCode",{parentName:"p"},"[dialog-dismiss]")," attribute would close the panel (with an appropriate ",Object(o.b)("inlineCode",{parentName:"p"},"confirmed")," or ",Object(o.b)("inlineCode",{parentName:"p"},"dismissed")," event) when clicked."),Object(o.b)("p",null,"This undocumented feature has been removed. If your bundle relied on it, you will need to re-implement similar functionality in your bundle's code."),Object(o.b)("h3",{id:"undocumented-and-broken-panelclick-event-has-been-removed"},"Undocumented (and broken) ",Object(o.b)("inlineCode",{parentName:"h3"},"panelClick")," event has been removed"),Object(o.b)("p",null,"Previously, NodeCG had an undocumented feature where any click event on any panel (or dialog) would emit a ",Object(o.b)("inlineCode",{parentName:"p"},"panelClick")," event on that panel's ",Object(o.b)("inlineCode",{parentName:"p"},"document"),"."),Object(o.b)("p",null,"This undocumented feature has been removed, and never really worked properly to begin with. If your bundle relied on it, you will need to re-implement similar functionality in your bundle's code."),Object(o.b)("h3",{id:"undocumented-customcues-system-has-been-removed"},"Undocumented customCues system has been removed"),Object(o.b)("p",null,"Previously, NodeCG had an undocumented and extremely complex feature for defining and editing Sound Cues during runtime."),Object(o.b)("p",null,"This undocumented feature has been removed. If your bundle relied on it, you will need to re-implement similar functionality in your bundle's code."),Object(o.b)("h3",{id:"multiple-listenfor-handlers-for-a-given-message"},"Multiple listenFor handlers for a given message"),Object(o.b)("p",null,"Previously, NodeCG only allowed your bundle to specify one ",Object(o.b)("inlineCode",{parentName:"p"},"listenFor")," handler, per message, per context."),Object(o.b)("p",null,"Now, NodeCG lets you define as many ",Object(o.b)("inlineCode",{parentName:"p"},"listenFor")," handlers as you want, for any message, in any location."),Object(o.b)("p",null,"However, server-side ",Object(o.b)("inlineCode",{parentName:"p"},"listenFor")," handlers must be careful to not call an ",Object(o.b)("inlineCode",{parentName:"p"},"acknowledgement")," more than once:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// nodecg/bundles/your-bundle\nmodule.exports = function(nodecg) {\n  nodecg.listenFor('example', (data, ack) => {\n    if (ack && !ack.handled) {\n      ack('foo');\n    }\n  });\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"\x3c!-- nodecg/bundles/your-bundle/graphics/example.html --\x3e\n<script>\n  nodecg.sendMessage('example', 'hello', (error, response) => {\n    console.log(response); // => Will log \"foo\".\n  });\n<\/script>\n")),Object(o.b)("p",null,"Calling an ",Object(o.b)("inlineCode",{parentName:"p"},"acknowledgement")," more than once will throw an error."),Object(o.b)("p",null,"In short: ",Object(o.b)("strong",{parentName:"p"},"most bundles won't need to change any of their code")," to be compatible with this change, but you should give everything a once-over to make sure things aren't behaving unexpectedly due to this new behavior."),Object(o.b)("h3",{id:"sendmessage-can-now-trigger-listenfor-handlers-in-the-same-context"},"sendMessage can now trigger listenFor handlers in the same context"),Object(o.b)("p",null,"Previously, NodeCG messages were inter-context only. That meant that they were ",Object(o.b)("em",{parentName:"p"},"only")," sent out over the network, and were not sent to other listeners in the same process context (extension, graphic, panel, etc)."),Object(o.b)("p",null,"Now, NodeCG sends messages to every listener, regardless of location. This means that code like the following will now work as expected:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// nodecg/bundles/your-bundle/extension.js\nmodule.exports = function(nodecg) {\n  nodecg.sendMessage('hello', 'Hi there!');\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// nodecg/bundles/my-bundle/extension.js\nmodule.exports = function(nodecg) {\n  nodecg.listenFor('hello', 'your-bundle', data => {\n    console.log(data); // => Will print \"Hi there!\"\n  });\n};\n")),Object(o.b)("p",null,"A side-effect of this change is that it is no longer guaranteed that a server-side ",Object(o.b)("inlineCode",{parentName:"p"},"listenFor")," handler will receive an ",Object(o.b)("inlineCode",{parentName:"p"},"acknowledgement")," callback as its second argument. You should always check for the presence of an ",Object(o.b)("inlineCode",{parentName:"p"},"acknowledgement")," before attempting to call it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// nodecg/bundles/your-bundle\nmodule.exports = function(nodecg) {\n  nodecg.listenFor('example', (data, ack) => {\n    if (ack && !ack.handled) {\n      ack('foo');\n    }\n  });\n};\n")),Object(o.b)("h3",{id:"twitch-auth-now-uses-the-new-twitch-api-instead-of-the-deprecated-v5-api"},'Twitch auth now uses the "New Twitch API", instead of the deprecated "v5" API'),Object(o.b)("p",null,'Previously, NodeCG used the deprecated "v5" Twitch API.'),Object(o.b)("p",null,'Now, NodeCG uses the "New Twitch API". The only tangible result of this change for NodeCG is that the format of the ',Object(o.b)("inlineCode",{parentName:"p"},"login.twitch.scope")," config parameter has changed. Please see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://dev.twitch.tv/docs/authentication/#scopes"}),"https://dev.twitch.tv/docs/authentication/#scopes")," for documentation on this new format."))}s.isMDXComponent=!0},132:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return p}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),s=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,p=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return t?r.a.createElement(p,c(c({ref:n},d),{},{components:t})):r.a.createElement(p,c({ref:n},d))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=t[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);