(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{170:function(e,t,a){"use strict";a.r(t),a.d(t,"blogListQuery",function(){return l});var n=a(0),r=a.n(n),o=a(182),s=a(204),i=a(219),l="1610893005";t.default=function(e){var t=e.data;return r.a.createElement(o.a,null,r.a.createElement(i.a,{posts:t.allMarkdownRemark}),r.a.createElement(s.a,null))}},177:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(5),s=a.n(o),i=a(43),l=a.n(i);a.d(t,"a",function(){return l.a});a(178),r.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},178:function(e,t,a){var n;e.exports=(n=a(179))&&n.default||n},179:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a.n(n),o=a(0),s=a.n(o),i=a(5),l=a.n(i),c=a(68),m=function(e){var t=e.location,a=e.pageResources;return a?s.a.createElement(c.a,r()({location:t,pageResources:a},a.json)):null};m.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=m},181:function(e,t,a){"use strict";a(99);var n=a(9),r=a.n(n),o=a(0),s=a.n(o),i=a(5),l=a.n(i),c=a(177),m=[{linkType:"twitter",username:"am_pra_veen",socialLink:"https://twitter.com/"},{linkType:"github",username:"praveen-me",socialLink:"https://github.com/"},{linkType:"linkedin",username:"praveen-me",socialLink:"https://linkedin.com/in/"}],u=function(){return s.a.createElement("header",{className:"header",id:"top"},s.a.createElement("a",{href:"#top",className:"header__topbar"},'"'),s.a.createElement("div",{className:"header__content-block"},s.a.createElement("div",{className:"header__logo-sec"},s.a.createElement(c.a,{to:"/",className:"header__logo"},"JS")),s.a.createElement("div",{className:"header__social-pack"},m.map(function(e,t){return s.a.createElement("div",{className:"header__social-sec",key:e.linkType},s.a.createElement("span",null," ",e.linkType," "),s.a.createElement("a",{href:e.socialLink+e.username,rel:"noopener noreferrer",target:"_blank"}," @",e.username))}))))},d=function(){return s.a.createElement("footer",{className:"footer"},s.a.createElement("p",{className:"footer__text center"},"Made with ",s.a.createElement("span",{"aria-label":"Heart Image",role:"img",alt:"image of heart"},"❤️")," JavaScript and SASS with React and Gatsby ",s.a.createElement("span",{"aria-label":"Computer Image",role:"img",alt:"image of computer"},"💻")))},p=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isHome:!1},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setState({isHome:!("/"!==this.props.location.pathname&&!this.props.location.pathname.match(/page/,"i"))})},a.render=function(){var e=this.props.children,t=this.state.isHome;return s.a.createElement("div",{className:t?"home":"show-content"},s.a.createElement(u,null),s.a.createElement("main",{className:"wrapper main"},e),s.a.createElement(d,null))},t}(s.a.PureComponent);p.propTypes={children:l.a.node.isRequired};t.a=p},182:function(e,t,a){"use strict";a(44);var n=a(0),r=a.n(n),o=a(22),s=a(181);t.a=function(e){return r.a.createElement(o.Location,null,function(t){return r.a.createElement(s.a,Object.assign({},t,e),e.children)})}},195:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e){return Math.ceil(e/200)}},204:function(e,t,a){"use strict";var n=a(205),r=a(0),o=a.n(r),s=a(177);t.a=function(){for(var e=n.data.allMarkdownRemark,t=Math.ceil(e.edges.length/5),a=[],r=1;r<=t;r++)a.push(r);return o.a.createElement("div",{className:"pagination center"},a.map(function(e,t){return o.a.createElement(s.a,{to:1===e?"/":"/page/"+(t+1),className:"pagination__link",key:e},t+1)}))}},205:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"/posts/do-static-routing-with-node/"},frontmatter:{title:"Do Static Routing with Node"}}},{node:{fields:{slug:"/posts/7-5-2018-how-udacity-gave-confidence-to-me/"},frontmatter:{title:"How Uadcity gave more confidence to me?"}}},{node:{fields:{slug:"/posts/implementing-simple-spa-routing-using-vanilla-javascript/"},frontmatter:{title:"Implementing Simple SPA Routing Using Vanilla JavaScript"}}},{node:{fields:{slug:"/posts/javascript-classes-lets-know-behind-the-scenes/"},frontmatter:{title:"JavaScript Classes: Let’s Know Behind the Scenes"}}},{node:{fields:{slug:"/posts/jwt-json-web-token-implementation-with-node/"},frontmatter:{title:"JWT(JSON Web Token) : Implementation with Node"}}},{node:{fields:{slug:"/posts/make-a-todo-list-using-react-hooks/"},frontmatter:{title:"Make a Todo List Using React Hooks!!"}}},{node:{fields:{slug:"/posts/redux-thunk-a-simple-action-creator-nothing-more/"},frontmatter:{title:"Redux Thunk: A Simple Action Creator Nothing More"}}},{node:{fields:{slug:"/posts/scope-local-global-and-lexical/"},frontmatter:{title:"Scope: Local, Global and Lexical"}}},{node:{fields:{slug:"/posts/an-introduction-to-generators/"},frontmatter:{title:"An Introduction to Generators"}}}]}}}},219:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(177),s=a(195),i=function(e){var t=e.slug,a=e.date,n=e.words,i=e.title,l=e.excerpt,c=e.large,m=Object(s.a)(n);return r.a.createElement(o.a,{to:t,className:"posts__single "+(c?"large":"")},r.a.createElement("p",{className:"posts__date-and-time"},new Date(a).toDateString()," - ",m," ",m>1?"mins":"min"," read"),r.a.createElement("h2",{className:"posts__title"},i),r.a.createElement("p",{className:"posts__excerpt"},l))};t.a=function(e){var t=e.posts,a=t.edges[0].node,n=t.edges.slice(1);return r.a.createElement("div",{className:"posts__wrapper"},r.a.createElement(i,{slug:a.fields.slug,date:a.frontmatter.date,words:a.wordCount.words,title:a.frontmatter.title,excerpt:a.excerpt,key:a.fields.slug,large:!0}),r.a.createElement("div",{className:"posts"},n.map(function(e){var t=e.node,a=t.fields,n=t.wordCount,o=t.excerpt,s=t.frontmatter;return r.a.createElement(i,{slug:a.slug,date:s.date,words:n.words,title:s.title,excerpt:o,key:a.slug})})))}}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-05febf62525759a7c977.js.map