(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"9JiB":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("92gO"),o=n("wuON");t.a=function(e){var t=e.title,n=e.slug,a=e.date,i=e.tags;return r.a.createElement(l.a,null,r.a.createElement("div",{className:"list-wrapper"},r.a.createElement(o.OutboundLink,{className:"link-posts",href:n},r.a.createElement("h3",{className:"post-title text"},""+t)),r.a.createElement("h4",{className:"post-date text"},": ",a),r.a.createElement("div",null,null==i?void 0:i.map((function(e){return r.a.createElement(l.b,{key:e},e)})))))}},QeBL:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return p}));var a=n("q1tI"),r=n.n(a),l=n("vOnD"),o=n("9JiB"),i=n("Ccud"),c=n("ZtoJ"),u=l.c.div.withConfig({displayName:"pages__Title",componentId:"wepcxl-0"})(["font-size:1.5em;margin-left:10px;color:",";margin-top:8px;"],(function(e){var t=e.theme;return t.isDarkMode?t.color.yellow:t.color.purple})),s=l.c.p.withConfig({displayName:"pages__Description",componentId:"wepcxl-1"})(["font-size:0.925em;margin-left:11px;"]),d=l.c.section.withConfig({displayName:"pages__ListWrapper",componentId:"wepcxl-2"})(["margin-top:10px;border-top:2px solid ",";"],(function(e){return e.theme.color.border}));t.default=function(e){var t,n=e.data;return r.a.createElement(c.a,null,r.a.createElement("section",null,i.a.map((function(e,t){return r.a.createElement(a.Fragment,{key:e.title+t},r.a.createElement(u,{className:"text"},null==e?void 0:e.title),(null==e?void 0:e.description)&&r.a.createElement(s,{className:"text"},"- ",null==e?void 0:e.description),(null==e?void 0:e.descriptions)&&e.descriptions.map((function(e){return r.a.createElement(s,{key:e.slice(0,25),className:"text"},"- ",e)})))}))),r.a.createElement(d,null,r.a.createElement(u,{className:"text"},"Posts"),null==n||null===(t=n.allMarkdownRemark)||void 0===t?void 0:t.edges.map((function(e,t){var n,a;return r.a.createElement(o.a,{tags:null==e||null===(n=e.node)||void 0===n||null===(a=n.frontmatter)||void 0===a?void 0:a.tags,title:e.node.frontmatter.title,key:e.node.id.slice(0,10)+t,date:e.node.frontmatter.date,slug:e.node.fields.slug})}))))};var p="1879090960"},wuON:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OutboundLink=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=o(n("q1tI")),l=o(n("17x9"));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){return r.default.createElement("a",a({},e,{onClick:function(t){"function"==typeof e.onClick&&e.onClick();var n=!0;return(0!==t.button||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||t.defaultPrevented)&&(n=!1),e.target&&"_self"!==e.target.toLowerCase()&&(n=!1),window.gtag?window.gtag("event","click",{event_category:"outbound",event_label:e.href,transport_type:"beacon",event_callback:function(){n&&(document.location=e.href)}}):n&&(document.location=e.href),!1}}))}i.propTypes={href:l.default.string,target:l.default.string,onClick:l.default.func},t.OutboundLink=i}}]);
//# sourceMappingURL=component---src-pages-index-tsx-7bc823fcc557210ce13c.js.map