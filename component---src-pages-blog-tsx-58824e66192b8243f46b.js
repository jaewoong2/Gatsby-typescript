(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"1GPU":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return u}));var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),l=a("rB5o"),i=a("9Dj+"),c=a("vOnD"),s=c.c.div.withConfig({displayName:"blog__Container",componentId:"sc-433a77-0"})([".link-posts{text-decoration:none;color:inherit;}.post-title{margin-bottom:",";}.post-date{color:#555;}"],Object(l.a)(1/4)),m=c.c.h1.withConfig({displayName:"blog__Title",componentId:"sc-433a77-1"})(["display:inline-block;border-bottom:1px solid;"]);t.default=function(e){var t=e.data;return r.a.createElement(i.a,null,r.a.createElement(s,null,r.a.createElement(m,{className:"text"},"@Jaewoong2"),r.a.createElement("h4",{className:"text"},t.allMarkdownRemark.totalCount," Posts"),t.allMarkdownRemark.edges.map((function(e){var t=e.node;return r.a.createElement("div",{key:t.id},r.a.createElement(o.a,{className:"link-posts",to:t.fields.slug},r.a.createElement("h3",{className:"post-title text"},t.frontmatter.title," ",r.a.createElement("span",{className:"post-date text"},"— ",t.frontmatter.date)),r.a.createElement("p",{className:"text"},t.excerpt)))}))))};var u="3856371944"},"9Dj+":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),l=a("vOnD"),i=a("v7au"),c=a("ma3e"),s=a("8tDA"),m=l.c.div.withConfig({displayName:"layout__Container",componentId:"sc-10a7hlv-0"})(["display:flex;align-items:center;flex-direction:column;min-height:100vh;min-width:97vw;.nav-container{width:100%;padding:10px;max-width:700px;display:flex;justify-content:space-between;margin-top:10px;.nav-sub{display:flex;height:100%;align-items:center;.link-about{margin-right:10px;}.theme-icon{margin-right:10px;font-size:1.3em;cursor:pointer;}.moon{filter:drop-shadow(2px 2px 4px rgba(20,20,30,0.4));color:",";&:hover{filter:drop-shadow(2px 2px 4px rgba(20,20,30,0.4)) brightness(1.5);transition:transform 0.5s linear;}transition:transform 0.5s linear;}.sun{filter:drop-shadow(2px 2px 4px rgba(255,255,255,0.5));color:",";&:hover{transform:rotate(180deg);transition:transform 0.5s linear;}transition:transform 0.5s linear;}}.title{letter-spacing:1px;font-style:italic;.double-o{color:",";}}}.main{max-width:700px;width:100%;padding:10px;}"],(function(e){var t=e.theme;return t.isDarkMode?t.color.white:t.color.black}),(function(e){return e.theme.color.dark}),(function(e){return e.theme.color.icon})),u=l.c.footer.withConfig({displayName:"layout__Footer",componentId:"sc-10a7hlv-1"})(["display:flex;justify-content:center;width:100%;box-shadow:-2px 0px 2px ",";"],(function(e){return e.theme.color.dark}));t.a=function(e){var t=e.children,a=Object(n.useContext)(s.a),l=a.isDarkMode,d=a.setIsDarkMode,p=Object(n.useCallback)((function(){localStorage.setItem("isDarkMode",JSON.stringify({value:!l})),d(!l)}),[d,l]);return Object(n.useEffect)((function(){var e=localStorage.getItem("isDarkMode");e&&(!0===JSON.parse(e).value?d(!0):d(!1))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null,r.a.createElement("nav",{className:"nav-container"},r.a.createElement(o.a,{to:"/"},r.a.createElement("h3",{className:"title text"},"W",r.a.createElement("span",{className:"double-o"},"OO"),"NG")),r.a.createElement("div",{className:"nav-sub text"},r.a.createElement(o.a,{to:"/blog/",className:"link-about"},"Blog"),r.a.createElement(o.a,{to:"/portfolio/",className:"link-about"},"Project"),r.a.createElement(o.a,{to:"/about/",className:"link-about"},"About"),l?r.a.createElement(c.a,{onClick:p,className:"sun theme-icon"}):r.a.createElement(i.a,{onClick:p,className:"moon theme-icon"}))),r.a.createElement("main",{className:"main"},t)),r.a.createElement(u,{className:"footer text"},"2020 @Jaewoong2"))}},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("q1tI"),r=a.n(n),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.a.createContext&&r.a.createContext(o),i=function(){return(i=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function s(e){return function(t){return r.a.createElement(m,i({attr:i({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return r.a.createElement(t.tag,i({key:a},t.attr),e(t.child))}))}(e.child))}}function m(e){var t=function(t){var a,n=e.attr,o=e.size,l=e.title,s=c(e,["attr","size","title"]),m=o||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,s,{className:a,style:i(i({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),l&&r.a.createElement("title",null,l),e.children)};return void 0!==l?r.a.createElement(l.Consumer,null,(function(e){return t(e)})):t(o)}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-58824e66192b8243f46b.js.map