(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(e,t,n){"use strict";n.r(t);var a=n(7),i=n.n(a),r=n(0),o=n.n(r),l=n(152),c=n(150),m=n(147),s=n(146),u=s.a.div.withConfig({displayName:"home-profil__Team",componentId:"sc-1iv61s8-0"})(["display:flex;flex-direction:column;"]),d=s.a.div.withConfig({displayName:"home-profil__Division",componentId:"sc-1iv61s8-1"})(["display:flex;width:100vw;"]),p=s.a.h4.withConfig({displayName:"home-profil__Info",componentId:"sc-1iv61s8-2"})(["writing-mode:vertical-rl;"]),f=s.a.div.withConfig({displayName:"home-profil__Profile",componentId:"sc-1iv61s8-3"})(["",";height:20rem;display:flex;flex-direction:column;align-items:center;justify-content:center;"],Object(m.a)(70)),g=Object(s.a)(f).withConfig({displayName:"home-profil__ProfileM",componentId:"sc-1iv61s8-4"})(["align-self:flex-end;"]),h=Object(s.a)(f).withConfig({displayName:"home-profil__ProfileS",componentId:"sc-1iv61s8-5"})(["align-self:flex-start;"]);function b(){return o.a.createElement(u,{className:"equipe"},o.a.createElement(d,null,o.a.createElement(p,null,"Une belle association entre deux époux"),o.a.createElement(g,{className:"michel"},o.a.createElement("h1",null,"Michel Keutgens"),o.a.createElement("h2",null,"Architecte"),o.a.createElement("p",null,"Passionné de détails techniques et de chantier."),o.a.createElement("button",{className:"primary-button"},o.a.createElement(c.a,{to:"/atelier"},"Plus d'infos")),o.a.createElement("button",{className:"secondary-button"},o.a.createElement(c.a,{to:"/contact"},"Contacter")))),o.a.createElement(d,null,o.a.createElement(h,{className:"sabina"},o.a.createElement("h1",null,"Sabina Ianieri"),o.a.createElement("h2",null,"Architecte d'intérieur"),o.a.createElement("p",null,"Passionnée de création de mobilier et d'aménagement intérieur."),o.a.createElement("button",{className:"primary-button"},o.a.createElement(c.a,{to:"/atelier"},"Plus d'infos")),o.a.createElement("button",{className:"secondary-button"},o.a.createElement(c.a,{to:"/contact"},"Contacter"))),o.a.createElement(p,null,"Plus de 25 ans de collaboration.")))}var v=n(161),E=n.n(v),y=n(162),w=n.n(y),x=n(163),_=n.n(x),N=n(164),C=n.n(N),j=n(148),I=n.n(j),k=s.a.div.withConfig({displayName:"home-experience__Experiences",componentId:"sc-1a2w8i0-0"})(["background-color:",";",";flex-direction:column;display:flex;align-items:center;padding:2rem 0;"],I.a.colorMichel,Object(m.a)(100)),O=s.a.div.withConfig({displayName:"home-experience__Content",componentId:"sc-1a2w8i0-1"})(["position:relative;"]);function A(){var e=[{title:"Construction",img:E.a,examples:["Maison basse énergie","Maison passive","Logement résidentiel","Edifice communaux","..."]},{title:"Rénovation",img:w.a,examples:["Annexe","Aménagement","Mise aux normes","Transformation","..."]},{title:"Aménagement intérieur",img:_.a,examples:["Cuisine","Salle de bain","Living","Salle à manger","..."]},{title:"Mobilier",img:C.a,examples:["Table de jardin","Lampe de salon","Armoire","Chaise","..."]}].map(function(e){var t=s.a.div.withConfig({displayName:"home-experience__Experience",componentId:"sc-1a2w8i0-2"})(["",';position:relative;&:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-size:auto 80vw;background-position:center;background-image:url(',");filter:grayscale(100%);}"],Object(m.a)(70),e.img),n=e.examples.map(function(e){return o.a.createElement("li",null,e)});return o.a.createElement(t,null,o.a.createElement(O,null,o.a.createElement("h1",null,e.title),o.a.createElement("ul",null,n),o.a.createElement("button",{className:"primary-button"},o.a.createElement(c.a,{to:"/projets"},"Découvrir"))))});return o.a.createElement(k,null,o.a.createElement("h3",null,"De l'expérience"),e)}var P=s.a.div.withConfig({displayName:"home-added-value__AddedValues",componentId:"pvn3ei-0"})(["background-color:",";",";flex-direction:column;display:flex;align-items:center;padding:2rem 0;"],I.a.colorSabinaTitle,Object(m.a)(100)),M=s.a.div.withConfig({displayName:"home-added-value__AddedValue",componentId:"pvn3ei-1"})(["background-color:",";",";"],I.a.colorSabina,Object(m.a)(70));function L(){var e=[{title:"Expertise",text:"L’expert avant achat immobilier consiste en la visite d’un imeuble avant l’achat, afin de mettre en évidence certains problèmes techniques détectables et de chiffrer le coût des travaux de réparation ou transformation à prévoir."},{title:"Rénovation",text:"Eh ouais"},{title:"Aménagement intérieur",text:"Eh ouais"},{title:"Mobilier",text:"Eh ouais"}].map(function(e){return o.a.createElement(M,null,o.a.createElement("h1",{style:{transform:"rotate(5deg)"}},e.title),o.a.createElement("p",{style:{transform:"rotate(5deg)"}},e.text))});return o.a.createElement(P,null,o.a.createElement("h3",null,"Nos services"),e)}var R=n(165),S=n.n(R),D=n(166),q=n.n(D);n.d(t,"default",function(){return T});var T=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={currentPicture:0,pictures:[S.a,q.a]},n}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this,t=0;this.interval=setInterval(function(){e.state.currentPicture===e.state.pictures.length-1?t=0:t+=1,e.setState({currentPicture:t})},3e3)},n.componentWillMount=function(){clearInterval(this.interval)},n.render=function(){var e=s.a.div.withConfig({displayName:"pages__Carousel",componentId:"ifild7-0"})(["",';height:30rem;padding:0;display:flex;align-items:center;justify-content:center;flex-direction:column;position:relative;&:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-size:40rem auto;background-position:center;background-image:url(',");filter:grayscale(100%);}"],Object(m.a)(100),this.state.pictures[this.state.currentPicture]),t=s.a.div.withConfig({displayName:"pages__Content",componentId:"ifild7-1"})(["position:relative;display:flex;flex-direction:column;align-items:center;"]);return o.a.createElement(l.a,null,o.a.createElement(e,null,o.a.createElement(t,null,o.a.createElement("h1",null,"Atelier d'Architecture Keutgens"),o.a.createElement("p",null,"Région liégeoise"),o.a.createElement("h2",null,"Réalisons le projets de votre vie."),o.a.createElement("button",{className:"primary-button"},o.a.createElement(c.a,{to:"/projets"},"Voir notre portfolio")))),o.a.createElement(b,null),o.a.createElement(A,null),o.a.createElement(L,null))},t}(o.a.Component)},147:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"b",function(){return l});var a="10vw";function i(e){return e+"vw"}function r(e){return"clip-path: "+function(e){return"polygon(0 0, 100% calc("+a+" * ("+e+" / 100)), 100% 100%, 0 calc(100% - ("+a+" * ("+e+" / 100))))"}(e)+";\n        width: "+i(e)+";\n        padding-top: 1.5rem;\n        padding-bottom: 1.5rem;\n        "}function o(e){return"clip-path: "+function(e){return"polygon(0 0, 100% calc("+a+" * ("+e+" / 100)), 100% 100%, 0 100%)"}(e)+";\n        width: "+i(e)+";\n        padding-top: 1.5rem;\n        padding-bottom: 1.5rem;\n        "}function l(e){return"clip-path: "+function(e){return"polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - ("+a+" * ("+e+" / 100))))"}(e)+";\n        width: "+i(e)+";\n        padding-top: 1.5rem;\n        padding-bottom: 1.5rem;\n        "}},149:function(e,t,n){var a;e.exports=(a=n(151))&&a.default||a},150:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(32),c=n.n(l);n.d(t,"a",function(){return c.a});n(149),i.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},151:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(54),c=n(2),m=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};m.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=m},152:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(150),o=n(148),l=n.n(o),c=n(146),m=c.a.div.withConfig({displayName:"burger-icon__Burger",componentId:"pph2mm-0"})(["width:2.5rem;cursor:pointer;transition:0.5s;"]),s=c.a.div.withConfig({displayName:"burger-icon__Bar",componentId:"pph2mm-1"})(["width:2.5rem;height:.4rem;background-color:",";margin:.4rem 0;transition:0.5s;"],l.a.colorDark);function u(e){var t,n,a,r;return e.toggle&&(t={transform:"translate(-.5rem, 0)"},n={transform:"rotate(-45deg)",transformOrigin:"top right"},a={opacity:"0"},r={transform:"rotate(45deg)",transformOrigin:"bottom right"}),i.a.createElement(m,{style:t},i.a.createElement(s,{className:"burger-bar",style:n}),i.a.createElement(s,{className:"burger-bar",style:a}),i.a.createElement(s,{className:"burger-bar",style:r}))}var d=n(147),p=c.a.header.withConfig({displayName:"header__Header",componentId:"w0084c-0"})(["position:fixed;top:0;height:4.6rem;z-index:100;"]),f=c.a.div.withConfig({displayName:"header__Background",componentId:"w0084c-1"})(["background-color:",";",";height:4.6rem;padding:0;"],l.a.colorLight,Object(d.b)(100)),g=c.a.div.withConfig({displayName:"header__Navigation",componentId:"w0084c-2"})(["position:fixed;top:.5rem;right:.5rem;"]),h=c.a.button.withConfig({displayName:"header__Button",componentId:"w0084c-3"})(["display:flex;align-items:center;width:100%;justify-content:flex-end;"]),b=c.a.h3.withConfig({displayName:"header__Title",componentId:"w0084c-4"})(["writing-mode:vertical-lr;transform:rotate(180deg);text-transform:uppercase;color:",";font-size:.75rem;font-weight:bold;margin-right:.2rem;"],l.a.colorDark),v=c.a.div.withConfig({displayName:"header__Menu",componentId:"w0084c-5"})(["flex-direction:column;"]),E=Object(c.a)(r.a).withConfig({displayName:"header__Links",componentId:"w0084c-6"})(["font-size:1.3rem;margin:1rem;color:",";text-align:center;"],l.a.colorDark);function y(){var e=Object(a.useState)(!1),t=e[0],n=e[1];var r,o={display:t?"flex":"none"};return t&&(r={backgroundColor:"white"}),i.a.createElement(p,null,i.a.createElement(f,null),i.a.createElement(g,{style:r},i.a.createElement(h,{onClick:function(){n(!t)}},i.a.createElement(b,null,"Menu"),i.a.createElement(u,{toggle:t})),i.a.createElement(v,{style:o},i.a.createElement(E,{to:"/"},"Accueil"),i.a.createElement(E,{to:"/projets/"},"Projets"),i.a.createElement(E,{to:"/atelier/"},"Atelier"),i.a.createElement(E,{to:"/contact/"},"Contact"))))}var w=c.a.footer.withConfig({displayName:"footer__Footer",componentId:"sc-1abtvul-0"})(["",";background-color:",";height:10rem;padding-bottom:0;"],Object(d.c)(100),l.a.colorLight);function x(){return i.a.createElement(w,null,i.a.createElement("h2",null,"Atelier d'architecture Keutgens"),i.a.createElement("h3",null,"Voie Pirson 9A, 4877 OLNE"),i.a.createElement("h3",null,"0477.55.04.73"),i.a.createElement("h3",null,"keutgensmichel@gmail.com"),i.a.createElement("p",null,"Nous sommes soumis à l'",i.a.createElement("a",{href:"https://www.archionweb.be/Public/Company/1590"},"Ordre des Architectes de Liège")," et soumis à son code de déontlogie."),i.a.createElement("p",null,"@2019 - Olivier Keutgens"))}n(153);var _=c.a.div.withConfig({displayName:"layout__Container",componentId:"sc-1nbk8sj-0"})(["margin-top:20vw;"]);t.a=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Amiri:400,400i,700,700i|Hind:300,400,500,600,700",rel:"stylesheet"}),i.a.createElement(y,null),i.a.createElement(_,null,t),i.a.createElement(x,null))}},161:function(e,t,n){e.exports=n.p+"static/home-construction-dbcd49f76552420c08c043aeda13877b.jpg"},162:function(e,t,n){e.exports=n.p+"static/home-renovation-d10b6111a39f2abdb117edf2727180e7.jpg"},163:function(e,t,n){e.exports=n.p+"static/home-amenagement-8afe1cc7c22cdfdb3502749870641f58.jpg"},164:function(e,t,n){e.exports=n.p+"static/home-mobilier-a7936e9221aee0c6ff38825810fb2515.jpg"},165:function(e,t,n){e.exports=n.p+"static/home-picture1-0ef152e08a6504324aaecb4ba1b5319d.jpg"},166:function(e,t,n){e.exports=n.p+"static/home-picture2-a61030904ad538fe5cb34dfffba0abe8.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-79079c5699c168c0af8b.js.map