(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"9JiB":function(e,t,n){"use strict";var a=n("Wbzz"),l=n("q1tI"),r=n.n(l),i=n("92gO");t.a=function(e){var t=e.title,n=e.slug,l=e.date,o=e.tags;return r.a.createElement(i.a,null,r.a.createElement("div",{className:"list-wrapper"},r.a.createElement(a.a,{className:"link-posts",to:n},r.a.createElement("h3",{className:"post-title text"},""+t)),r.a.createElement("h4",{className:"post-date text"},": ",l),r.a.createElement("div",null,null==o?void 0:o.map((function(e){return r.a.createElement(i.b,{key:e},e)})))))}},QeBL:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return p}));var a=n("q1tI"),l=n.n(a),r=n("vOnD"),i=n("9JiB"),o=n("Ccud"),s=n("ZtoJ"),c=r.c.h3.withConfig({displayName:"pages__Title",componentId:"wepcxl-0"})(["font-size:1.5em;padding:0;margin-bottom:5px;font-weight:normal;margin-left:10px;margin-top:8px;"]),m=r.c.p.withConfig({displayName:"pages__Description",componentId:"wepcxl-1"})(["font-size:0.925em;margin-left:11px;"]),d=r.c.section.withConfig({displayName:"pages__ListWrapper",componentId:"wepcxl-2"})(["margin-top:10px;border-top:2px solid ",";"],(function(e){return e.theme.color.border}));t.default=function(e){var t,n=e.data;return l.a.createElement(s.a,null,l.a.createElement("section",null,o.a.map((function(e,t){return l.a.createElement(a.Fragment,{key:e.title+t},l.a.createElement(c,{className:"represent-color"},null==e?void 0:e.title),(null==e?void 0:e.description)&&l.a.createElement(m,{className:"text"},"- ",null==e?void 0:e.description),(null==e?void 0:e.descriptions)&&e.descriptions.map((function(e){return l.a.createElement(m,{key:e.slice(0,25),className:"text"},"- ",e)})))}))),l.a.createElement(d,null,l.a.createElement(c,{className:"represent-color"},"Posts"),null==n||null===(t=n.allMarkdownRemark)||void 0===t?void 0:t.edges.map((function(e,t){var n,a;return l.a.createElement(i.a,{tags:null==e||null===(n=e.node)||void 0===n||null===(a=n.frontmatter)||void 0===a?void 0:a.tags,title:e.node.frontmatter.title,key:e.node.id.slice(0,10)+t,date:e.node.frontmatter.date,slug:e.node.fields.slug})}))))};var p="1879090960"}}]);
//# sourceMappingURL=component---src-pages-index-tsx-11a1785591cbc7a0f52c.js.map