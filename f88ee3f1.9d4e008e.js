(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{126:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(6),o=(t(0),t(132)),i={id:"replicant-schemas",title:"Replicant Validation",sidebar_label:"Replicant Validation"},l={unversionedId:"replicant-schemas",id:"replicant-schemas",isDocsHomePage:!1,title:"Replicant Validation",description:"As of 0.8.4, bundle authors may define an optional schema for the Replicants in their bundle.",source:"@site/docs/replicant-schemas.md",slug:"/replicant-schemas",permalink:"/docs/replicant-schemas",editUrl:"https://github.com/nodecg/docs/edit/master/docs/replicant-schemas.md",version:"current",lastUpdatedBy:"Keiichiro Amemiya",lastUpdatedAt:1602000482,sidebar_label:"Replicant Validation",sidebar:"mainSidebar",previous:{title:"Sounds",permalink:"/docs/sounds"},next:{title:"Performance Tips",permalink:"/docs/performance-tips"}},c=[{value:"Example",id:"example",children:[]}],s={rightToc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"As of 0.8.4, bundle authors may define an optional schema for the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/classes/replicant"}),"Replicants")," in their bundle.\nIf present, NodeCG will validate every change made to the Replicant against this schema.\nIf any change fails validation, either on the server or on the client, an error will be synchronously thrown."),Object(o.b)("p",null,"All schemas are in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://json-schema.org/"}),"JSON Schema")," format. To add a schema to a Replicant,\ncreate a ",Object(o.b)("inlineCode",{parentName:"p"},".json")," file with the same name as your Replicant in your bundle's ",Object(o.b)("inlineCode",{parentName:"p"},"schemas")," folder. For example,\nif ",Object(o.b)("inlineCode",{parentName:"p"},"my-bundle")," has a Replicant called ",Object(o.b)("inlineCode",{parentName:"p"},"foo"),", the schema would be located at ",Object(o.b)("inlineCode",{parentName:"p"},"nodecg/bundles/my-bundle/schemas/foo.json"),".\nNodeCG will automatically see and load this schema on startup. Changes to the schema require restarting NodeCG."),Object(o.b)("p",null,"If a Replicant's schema has defaults defined, NodeCG will use those defaults to automatically build a ",Object(o.b)("inlineCode",{parentName:"p"},"defaultValue"),"\nfor the Replicant. This auto-generated ",Object(o.b)("inlineCode",{parentName:"p"},"defaultValue")," is overridden by any ",Object(o.b)("inlineCode",{parentName:"p"},"defaultValue")," that is provided during Replicant\ndeclaration."),Object(o.b)("p",null,"If for any reason a Replicant's persisted value becomes invalid, NodeCG will discard this value on startup."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"nodecg/bundles/my-bundle/schemas/foo.json")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$schema": "http://json-schema.org/draft-04/schema#",\n  "type": "object",\n  "additionalProperties": false,\n  "properties": {\n    "bar": {\n      "type": "string",\n      "description": "The value of bar, which is a String.",\n      "default": "hello world"\n    },\n    "baz": {\n      "type": "number",\n      "description": "The value of baz, which is a Number.",\n      "default": 0\n    }\n  },\n  "required": ["bar", "baz"]\n}\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"nodecg/bundles/my-bundle/extension.js")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'module.exports = function (nodecg) {\n  // We don\'t need to specify a `defaultValue` here, it will be automatically generated from the defaults\n  // in the schema.\n  const foo = nodecg.Replicant(\'foo\');\n\n  /* You can override this by specifying your own `defaultValue` when declaring the Replicant.\n  const foo = nodecg.Replicant(\'foo\', {\n    defaultValue: {\n      bar: "hi",\n      baz: 5\n    }\n  }); */\n\n  console.log(foo.value.bar); //=> "hello world"\n  console.log(foo.value.baz); //=> 0\n\n  foo.value.bar = "greetings planet"; // Valid change, no error will be thrown.\n  foo.value.baz = "this should be a number!"; // Invalid change, an error will be thrown.\n};\n')))}p.isMDXComponent=!0},132:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),b=a,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return t?r.a.createElement(m,l(l({ref:n},s),{},{components:t})):r.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);