(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{155:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(158),c=a(160),o=a(161);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(o.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},157:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},158:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(38),s=a.n(o);a.d(t,"a",function(){return s.a});a(157),r.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},159:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),i=a(0),c=a.n(i),o=a(4),s=a.n(o),l=a(57),m=a(2),u=function(e){var t=e.location,a=m.default.getResourcesForPathnameSync(t.pathname);return a?c.a.createElement(l.a,r()({location:t,pageResources:a},a.json)):null};u.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=u},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(158),s=[{linkType:"twitter",username:"am_pra_veen",socialLink:"https://twitter.com/"},{linkType:"github",username:"praveen-me",socialLink:"https://github.com/"},{linkType:"linkedin",username:"praveen-me",socialLink:"https://linkedin.com/in/"}],l=function(){return r.a.createElement("header",{className:"header",id:"top"},r.a.createElement("a",{href:"#top",className:"header__topbar"}),r.a.createElement("div",{className:"header__content-block"},r.a.createElement("div",{className:"header__logo-sec"},r.a.createElement(o.a,{to:"/",className:"header__logo"},"JS")),r.a.createElement("div",{className:"header__social-pack"},s.map(function(e,t){return r.a.createElement("div",{className:"header__social-sec",key:e.linkType},r.a.createElement("span",null," ",e.linkType," "),r.a.createElement("a",{href:e.socialLink+e.username,target:"_blank"}," @",e.username))}))))},m=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__text center"},"Made with ❤️ JavaScript and SASS with React and Gatsby 💻"))},u=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l,null),r.a.createElement("main",{className:"wrapper main"},t),r.a.createElement(m,null))};u.propTypes={children:c.a.node.isRequired};t.a=u},161:function(e,t,a){"use strict";var n=a(162),r=a(0),i=a.n(r),c=a(4),o=a.n(c),s=a(163),l=a.n(s);function m(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,o=e.title,s=n.data.site,m=t||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:o},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:m}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=m},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Praveen Kumar Saini",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-31b314355e5d88f61d68.js.map