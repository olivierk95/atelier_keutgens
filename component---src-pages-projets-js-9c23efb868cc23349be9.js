(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{143:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(152);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,"Projets"))}},147:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return c});var a="10vw";function r(e){return e+"vw"}function o(e){return"clip-path: "+function(e){return"polygon(0 0, 100% calc("+a+" * ("+e+" / 100)), 100% 100%, 0 calc(100% - ("+a+" * ("+e+" / 100))))"}(e)+";\n        width: "+r(e)+";\n        padding-top: 1.5rem;\n        padding-bottom: 1.5rem;\n        "}function i(e){return"clip-path: "+function(e){return"polygon(0 0, 100% calc("+a+" * ("+e+" / 100)), 100% 100%, 0 100%)"}(e)+";\n        width: "+r(e)+";\n        padding-top: 1.5rem;\n        padding-bottom: 1.5rem;\n        "}function c(e){return"clip-path: "+function(e){return"polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - ("+a+" * ("+e+" / 100))))"}(e)+";\n        width: "+r(e)+";\n        padding-top: 1.5rem;\n        padding-bottom: 1.5rem;\n        "}},149:function(e,t,n){var a;e.exports=(a=n(151))&&a.default||a},150:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(32),l=n.n(c);n.d(t,"a",function(){return l.a});n(149),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},151:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(54),l=n(2),m=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};m.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=m},152:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(150),i=n(148),c=n.n(i),l=n(146),m=l.a.div.withConfig({displayName:"burger-icon__Burger",componentId:"pph2mm-0"})(["width:2.5rem;cursor:pointer;transition:0.5s;"]),u=l.a.div.withConfig({displayName:"burger-icon__Bar",componentId:"pph2mm-1"})(["width:2.5rem;height:.4rem;background-color:",";margin:.4rem 0;transition:0.5s;"],c.a.colorDark);function s(e){var t,n,a,o;return e.toggle&&(t={transform:"translate(-.5rem, 0)"},n={transform:"rotate(-45deg)",transformOrigin:"top right"},a={opacity:"0"},o={transform:"rotate(45deg)",transformOrigin:"bottom right"}),r.a.createElement(m,{style:t},r.a.createElement(u,{className:"burger-bar",style:n}),r.a.createElement(u,{className:"burger-bar",style:a}),r.a.createElement(u,{className:"burger-bar",style:o}))}var d=n(147),p=l.a.header.withConfig({displayName:"header__Header",componentId:"w0084c-0"})(["position:fixed;top:0;height:4.6rem;z-index:100;"]),g=l.a.div.withConfig({displayName:"header__Background",componentId:"w0084c-1"})(["background-color:",";",";height:4.6rem;padding:0;"],c.a.colorLight,Object(d.b)(100)),h=l.a.div.withConfig({displayName:"header__Navigation",componentId:"w0084c-2"})(["position:fixed;top:.5rem;right:.5rem;"]),f=l.a.button.withConfig({displayName:"header__Button",componentId:"w0084c-3"})(["display:flex;align-items:center;width:100%;justify-content:flex-end;"]),w=l.a.h3.withConfig({displayName:"header__Title",componentId:"w0084c-4"})(["writing-mode:vertical-lr;transform:rotate(180deg);text-transform:uppercase;color:",";font-size:.75rem;font-weight:bold;margin-right:.2rem;"],c.a.colorDark),b=l.a.div.withConfig({displayName:"header__Menu",componentId:"w0084c-5"})(["flex-direction:column;"]),E=Object(l.a)(o.a).withConfig({displayName:"header__Links",componentId:"w0084c-6"})(["font-size:1.3rem;margin:1rem;color:",";text-align:center;"],c.a.colorDark);function y(){var e=Object(a.useState)(!1),t=e[0],n=e[1];var o,i={display:t?"flex":"none"};return t&&(o={backgroundColor:"white"}),r.a.createElement(p,null,r.a.createElement(g,null),r.a.createElement(h,{style:o},r.a.createElement(f,{onClick:function(){n(!t)}},r.a.createElement(w,null,"Menu"),r.a.createElement(s,{toggle:t})),r.a.createElement(b,{style:i},r.a.createElement(E,{to:"/"},"Accueil"),r.a.createElement(E,{to:"/projets/"},"Projets"),r.a.createElement(E,{to:"/atelier/"},"Atelier"),r.a.createElement(E,{to:"/contact/"},"Contact"))))}var v=l.a.footer.withConfig({displayName:"footer__Footer",componentId:"sc-1abtvul-0"})(["",";background-color:",";height:10rem;padding-bottom:0;"],Object(d.c)(100),c.a.colorLight);function _(){return r.a.createElement(v,null,r.a.createElement("h2",null,"Atelier d'architecture Keutgens"),r.a.createElement("h3",null,"Voie Pirson 9A, 4877 OLNE"),r.a.createElement("h3",null,"0477.55.04.73"),r.a.createElement("h3",null,"keutgensmichel@gmail.com"),r.a.createElement("p",null,"Nous sommes soumis à l'",r.a.createElement("a",{href:"https://www.archionweb.be/Public/Company/1590"},"Ordre des Architectes de Liège")," et soumis à son code de déontlogie."),r.a.createElement("p",null,"@2019 - Olivier Keutgens"))}n(153);var C=l.a.div.withConfig({displayName:"layout__Container",componentId:"sc-1nbk8sj-0"})(["margin-top:20vw;"]);t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Amiri:400,400i,700,700i|Hind:300,400,500,600,700",rel:"stylesheet"}),r.a.createElement(y,null),r.a.createElement(C,null,t),r.a.createElement(_,null))}}}]);
//# sourceMappingURL=component---src-pages-projets-js-9c23efb868cc23349be9.js.map