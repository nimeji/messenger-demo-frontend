(this["webpackJsonpdeal-demonstrator"]=this["webpackJsonpdeal-demonstrator"]||[]).push([[0],{119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(18),o=n.n(s),i=(n(56),n(6)),r=n(26),l=n(4),d=n(36),u=n(37),j=(n(58),n(3));function b(e){for(var t=e.className,n=void 0===t?"":t,c=e.numPages,a=void 0===c?1:c,s=e.selectedPage,o=void 0===s?0:s,i=e.onPageChange,r=void 0===i?function(){}:i,l=e.onPagePrevious,b=e.onPageNext,h=[],f=function(e){h[e]=Object(j.jsx)("button",{className:"PageIndicator-PageButton ".concat(o===e?"PageIndicator-PageButtonSelected":""),onClick:function(){return r(e)}},e)},O=0;O<a;O++)f(O);return Object(j.jsxs)("div",{className:"PageIndicator-Container ".concat(n),children:[Object(j.jsx)("button",{className:"PageIndicator-Control",onClick:l,children:Object(j.jsx)(d.a,{className:"PageIndicator-Chevron"})}),h,Object(j.jsx)("button",{className:"PageIndicator-Control",onClick:b,children:Object(j.jsx)(u.a,{className:"PageIndicator-Chevron"})})]})}var h=n(30),f=n.n(h);n(80);function O(e){var t=e.className,n=void 0===t?"":t,c=e.style,a=e.children,s=e.onClick,o=e.disabled,i=void 0!==o&&o;return Object(j.jsx)("button",{className:"FormButton ".concat(n),style:c,onClick:s,disabled:i,children:a})}n(81);function m(e){var t=e.className,n=void 0===t?"":t,c=e.style,a=(e.placeholder,e.value,e.onValueChange),s=void 0===a?function(){}:a,o=e.disabled,i=void 0!==o&&o;return Object(j.jsx)("input",{className:"FormInput ".concat(n),style:c,type:"text",placeholder:"Name",onChange:function(e){return s(e.target.value)},disabled:i})}n(82);function x(e){var t=e.children;return Object(j.jsx)("div",{className:"FormText",children:t})}n(83);function v(e){var t=e.className,n=void 0===t?"":t,a=e.onShowDemo,s=void 0===a?function(){}:a,o=e.onFindHash,r=void 0===o?function(){}:o,d=e.onContinue,u=void 0===d?function(){}:d,b=e.onReset,h=void 0===b?function(){}:b,v=Object(c.useState)(""),g=Object(i.a)(v,2),p=g[0],C=g[1],N=Object(c.useState)(""),y=Object(i.a)(N,2),k=y[0],S=y[1],L=Object(c.useState)(0),P=Object(i.a)(L,2),M=P[0],T=P[1],B=Object(l.useSpringRef)(),R=Object(l.useTransition)(M,{ref:B,keys:null,from:{opacity:0},enter:{opacity:1,delay:400},leave:{opacity:0}});Object(c.useEffect)((function(){B.start()}),[M,B]);var w=function(){T(M+1)},D=function(e){return M!==e},I=function(){r(),w()},A=function(){C(""),S(""),T(0),h()};return Object(j.jsx)("div",{className:"DemoControl-Container ".concat(n),children:R((function(e,t){var n,c=e.opacity;switch(t){case 0:n=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Gib deinen Namen ein"}),Object(j.jsx)(m,{placeholder:"Name",onValueChange:function(e){return C(e)},disabled:D(t)}),Object(j.jsx)(O,{onClick:function(){""!==p&&(!function(e){f.a.post("".concat("https://run.mocky.io/v3/a5a20cf3-d602-42ca-b591-776a7d51a0ba"),{value:e}).then((function(e){S(e.data.hash)}))}(p),w())},disabled:D(t),children:"Best\xe4tigen"})]});break;case 1:n=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Um die Adressb\xfccher zu durchsuchen, m\xfcssen wir nun deinen Namen verschl\xfcsseln"}),Object(j.jsx)(O,{onClick:w,disabled:D(t),children:"Namen verschl\xfcsseln"})]});break;case 2:n=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Der Hash deines Namens lautet"}),Object(j.jsx)(x,{children:k}),Object(j.jsx)(O,{onClick:function(){s(k),w()},disabled:D(t),children:"Weiter"})]});break;case 3:n=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Suche jetzt deinen Namen in den verschl\xfcsselten Adressb\xfcchern"}),Object(j.jsxs)("div",{className:"DemoControl-LabeledText",children:[Object(j.jsx)("span",{children:"Name"}),Object(j.jsx)(x,{children:p}),Object(j.jsx)("span",{children:"Hash"}),Object(j.jsx)(x,{children:k})]}),Object(j.jsx)(O,{onClick:I,disabled:D(t),children:"Durchsuchen"}),Object(j.jsx)(O,{onClick:A,disabled:D(t),children:"Demo Zur\xfccksetzen"})]});break;case 4:n=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"DemoControl-LabeledText",children:[Object(j.jsx)("span",{children:"Name"}),Object(j.jsx)(x,{children:p}),Object(j.jsx)("span",{children:"Hash"}),Object(j.jsx)(x,{children:k})]}),Object(j.jsx)(O,{onClick:A,disabled:D(t),children:"Demo Zur\xfccksetzen"}),Object(j.jsx)("div",{className:"DemoControl-Spacer"}),Object(j.jsx)("h2",{children:"Wie funktioniert das?"}),Object(j.jsx)(O,{onClick:u,disabled:D(t),children:"Jetzt Ansehen"})]})}return Object(j.jsx)(l.animated.div,{className:"DemoControl-Wrapper",style:{opacity:c},children:n})}))})}function g(e){var t=e.text,n=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=o.a.findDOMNode(n.current);o.a.unmountComponentAtNode(e),e.outerHTML="\x3c!--".concat(t,"--\x3e")}),[]),Object(j.jsx)("div",{ref:n})}n(84);function p(e){var t=e.active,n=void 0!==t&&t,c=e.className,a=void 0===c?"":c,s=e.children,o=Object(l.useSpring)({gap:n?1:0,config:l.config.slow}).gap,i=Object(l.useSpring)({loop:!0,from:{x:0},to:{x:1},config:{duration:1e3}}).x;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("svg",{viewBox:"0 0 29 19",className:a,children:[Object(j.jsx)(g,{text:"\n          icon, cloud icon by Raj Dev\n          https://freeicons.io/weather-icons/icon-cloud-icon-6706\n          licensed under CC BY 3.0 (https://creativecommons.org/licenses/by/3.0/)\n          Path modified\n        "}),Object(j.jsx)(l.animated.path,{className:"CloudSVG",strokeDasharray:o.to((function(e){return"8 "+2*e})),strokeDashoffset:i.to((function(e){return 10*-e})),d:"M 24.8829 8.3655 C 26.7133 9.1085 28 10.9036 28 13 C 28 15.7558 25.7617 18 23.0006 18 L 5.9994 18 C 3.2325 18 1 15.7614 1 13 C 1 10.9491 2.2397 9.1816 4.0119 8.4115 L 4.0119 8.4115 C 4.004 8.2754 4 8.1382 4 8 C 4 4.134 7.134 1 11 1 C 13.6128 1 15.8912 2.4314 17.0938 4.5529 C 17.8206 4.1987 18.6371 4 19.5 4 C 22.1487 4 24.36 5.8722 24.8829 8.3655 L 24.8829 8.3655 L 24.8829 8.3655 Z"}),s]})})}n(85);n(86);var C=Object(l.animated)((function(e){var t=e.idx,n=void 0===t?0:t,c=e.children,a=void 0===c?[]:c;return Object(j.jsx)("div",{className:"InfiniteList-Container",children:a.map((function(e,t){var c,s=a.length,o=((t-n+1)%(c=s)+c)%c;return Object(j.jsx)("div",{className:"InfiniteList-Element",style:{transform:"translateY(calc(-100% + ".concat(o," * 100%))")},children:e},t)}))})})),N=a.a.memo((function(e){var t=e.className,n=void 0===t?"":t,c=e.title,a=void 0===c?"":c,s=e.data,o=void 0===s?[]:s,i=e.target,r=e.reversed,d=void 0!==r&&r,u=Object(l.useSpringRef)(),b=Object(l.useSpring)({loop:!i,from:{x:0},to:{x:i?7*(o.length+1)+(d?3.5:-3.5):o.length},config:i?l.config.molasses:{duration:5e3},reset:!i,ref:u}).x,h=Object(l.useSpringRef)(),f=Object(l.useSpring)({from:{color:"black"},to:{color:i?"red":"black"},ref:h}).color;Object(l.useChain)([u,h],[0,i?1:0]);var O=o.map((function(e,t){return Object(j.jsx)("div",{children:e},t)}));return i&&O.push(Object(j.jsx)(l.animated.div,{style:{color:f},children:i},"t")),Object(j.jsxs)("svg",{className:n,viewBox:"0 -20 180 148",children:[Object(j.jsx)("text",{x:"50%",y:"-5",className:"AddressBook-SVGTitle",children:a}),Object(j.jsx)(g,{text:"\n        book, education, knowledge, study icon by MD Badsha Meah\n        https://freeicons.io/education/book-education-knowledge-study-icon-38358\n        Licensed under CC BY 3.0 (https://creativecommons.org/licenses/by/3.0/)\n        Scale modified\n      "}),Object(j.jsx)("path",{className:"AddressBook-SVG",d:"M 167.3858 32.7182 a 3.8374 2.741 0 0 0 -3.8203 -2.4825 h -5.6742 l -0.6822 -5.1161 L 155.0359 8.7206 c -22.9746 1.0227 -45.1006 4.7393 -65.4339 14.164 C 69.2647 13.4599 47.1388 9.7432 24.1641 8.7206 L 21.9908 25.1197 l -0.6821 5.1161 H 15.6306 a 3.8374 2.741 0 0 0 -3.8203 2.4826 l -9.3597 70.601 l 87.1474 15.96 l 87.1514 -15.96 Z M 31.7509 25.1197 l 1.1779 -8.8865 c 16.3595 1.3399 30.2918 4.2294 42.7805 8.8865 q 4.4141 1.6444 8.6021 3.5863 l 3.2997 1.5297 l 1.9909 0.9235 l 1.9909 -0.9235 l 3.2957 -1.5297 q 4.194 -1.9462 8.5981 -3.5863 c 12.4927 -4.6571 26.425 -7.5466 42.7845 -8.8865 l 1.1779 8.8865 l 0.6782 5.1161 l 0.2221 1.6827 l 0.9042 6.7987 l 7.0038 52.829 A 176.7779 126.2699 0 0 0 122.3447 94.0136 C 109.4673 95.9852 98.68 99.192 89.602 103.767 a 87.7069 62.6478 0 0 0 -32.7467 -9.7534 a 176.4604 126.0431 0 0 0 -33.9127 -2.4674 l 7.0038 -52.829 l 0.9042 -6.7987 l 0.2221 -1.6827 Z M 14.1581 98.4441 c 28.7173 -0.1133 55.6381 1.9631 74.6468 13.674 Z m 76.245 13.6711 c 19.0048 -11.708 45.9255 -13.7844 74.6388 -13.6711 Z"}),Object(j.jsx)("defs",{children:Object(j.jsx)("clipPath",{id:"book-clippath",children:Object(j.jsx)("path",{d:"M 31.7509 25.1197 l 1.1779 -8.8865 c 16.3595 1.3399 30.2918 4.2294 42.7805 8.8865 q 4.4141 1.6444 8.6021 3.5863 l 3.2997 1.5297 l 1.9909 0.9235 l 1.9909 -0.9235 l 3.2957 -1.5297 q 4.194 -1.9462 8.5981 -3.5863 c 12.4927 -4.6571 26.425 -7.5466 42.7845 -8.8865 l 1.1779 8.8865 l 0.6782 5.1161 l 0.2221 1.6827 l 0.9042 6.7987 l 7.0038 52.829 A 176.7779 126.2699 0 0 0 122.3447 94.0136 C 109.4673 95.9852 98.68 99.192 89.602 103.767 a 87.7069 62.6478 0 0 0 -32.7467 -9.7534 a 176.4604 126.0431 0 0 0 -33.9127 -2.4674 l 7.0038 -52.829 l 0.9042 -6.7987 l 0.2221 -1.6827 Z"})})}),Object(j.jsx)("g",{clipPath:"url(#book-clippath)",children:Object(j.jsx)("foreignObject",{className:"AddressBook-Content",children:Object(j.jsx)(C,{idx:b.to((function(e){return d?-e:e})),children:O})})})]})}));n(87),n(88);function y(e){var t=e.children,n=e.className,a=void 0===n?"":n,s=e.aspect,o=void 0===s?1:s,i=Object(c.useRef)(null),r=Object(c.useRef)(null),l=Object(c.useRef)(new ResizeObserver((function(e){var t=e[0].contentRect,n=t.width,c=t.height,a=n/c;if(r.current){var s=r.current;o>a?(s.style.width="".concat(n,"px"),s.style.height="".concat(n/o,"px")):(s.style.width="".concat(c*o,"px"),s.style.height="".concat(c,"px"))}})));return Object(c.useEffect)((function(){var e=l.current;return e.disconnect(),i.current&&e.observe(i.current),function(){return e.disconnect()}}),[l,i]),Object(j.jsx)("div",{ref:i,className:"AspectContainer-Outer ".concat(a),children:Object(j.jsx)("div",{ref:r,className:"AspectContainer-Inner",children:t})})}function k(e){var t=e.className,c=void 0===t?"":t,a=e.icon,s=e.title,o=void 0===s?"":s,i=e.dataLeft,r=void 0===i?[]:i,d=e.targetLeft,u=e.dataRight,b=void 0===u?[]:u,h=e.targetRight,f=e.showFriends,O=void 0!==f&&f,m=Object(l.useSpring)({opacity:O?1:0,config:l.config.molasses,delay:2e3});return Object(j.jsx)(y,{className:c,aspect:29/19,children:Object(j.jsxs)("div",{className:"Messenger-Container",children:[Object(j.jsxs)(p,{className:"Messenger-Cloud",active:!0,children:[void 0!==a&&Object(j.jsx)("image",{x:"6",y:"5",width:"4",height:"4",href:n(89)("./".concat(a)).default}),Object(j.jsx)("text",{x:"16.5",y:"8",className:"Messenger-SVGTitle",children:o}),Object(j.jsxs)(l.animated.text,{x:"12",y:"10",className:"Messenger-SVGSubtitle",style:m,children:["Freunde: ",(h?1:0)+(d?1:0)]})]}),Object(j.jsxs)("div",{className:"Messenger-Content",children:[Object(j.jsx)(N,{className:"Messenger-AddressBook Messenger-AddressBook-Left",data:r,target:d}),Object(j.jsx)(N,{className:"Messenger-AddressBook Messenger-AddressBook-Right",data:b,target:h,reversed:!0})]})]})})}n(94);function S(e){var t=e.className,n=void 0===t?"":t,a=e.onContinue,s=void 0===a?function(){}:a,o=e.titles,r=void 0===o?["","","",""]:o,d=e.icons,u=void 0===d?[]:d,b=Object(c.useState)(void 0),h=Object(i.a)(b,2),O=h[0],m=h[1],x=Object(c.useState)([!1,!1,!1,!1,!1,!1,!1,!1]),g=Object(i.a)(x,2),p=g[0],C=g[1],N=Object(c.useState)([[],[],[],[],[],[],[],[]]),y=Object(i.a)(N,2),S=y[0],L=y[1],P=Object(c.useState)(!1),M=Object(i.a)(P,2),T=M[0],B=M[1],R=Object(c.useState)(!1),w=Object(i.a)(R,2),D=w[0],I=w[1],A=Object(l.useSpring)({opacity:T?1:0,config:l.config.molasses});Object(c.useEffect)((function(){f.a.get("".concat("https://run.mocky.io/v3/67ba6e24-5e81-4f6d-8d4a-da41961dc044/","?number=").concat("100")).then((function(e){for(var t=Math.floor(parseInt("100")/8),n=[[],[],[],[],[],[],[],[]],c=0;c<8;c++)for(var a=0;a<t;a++)n[c][a]=e.data[t*c+a].hash;L(n)}))}),[]);return Object(j.jsxs)("div",{className:"Demo-Container ".concat(n),children:[Object(j.jsxs)(l.animated.div,{className:"Demo-CloudContainer",style:A,children:[Object(j.jsx)(k,{className:"Demo-Messenger Demo-TopLeft",icon:u[0],title:r[0],dataLeft:S[0],dataRight:S[1],targetLeft:p[0]?O:void 0,targetRight:p[1]?O:void 0,showFriends:D}),Object(j.jsx)(k,{className:"Demo-Messenger Demo-TopRight",icon:u[1],title:r[1],dataLeft:S[2],dataRight:S[3],targetLeft:p[2]?O:void 0,targetRight:p[3]?O:void 0,showFriends:D}),Object(j.jsx)(k,{className:"Demo-Messenger Demo-BottomLeft",icon:u[2],title:r[2],dataLeft:S[4],dataRight:S[5],targetLeft:p[4]?O:void 0,targetRight:p[5]?O:void 0,showFriends:D}),Object(j.jsx)(k,{className:"Demo-Messenger Demo-BottomRight",icon:u[3],title:r[3],dataLeft:S[6],dataRight:S[7],targetLeft:p[6]?O:void 0,targetRight:p[7]?O:void 0,showFriends:D})]}),Object(j.jsx)(v,{className:"Demo-Controls",onShowDemo:function(e){B(!0),m(e)},onFindHash:function(){var e=function(e,t){for(var n=[];n.length<e;){var c=Math.floor(Math.random()*t);-1===n.indexOf(c)&&n.push(c)}return n}(5,8),t=[!1,!1,!1,!1,!1,!1,!1,!1];e.forEach((function(e){return t[e]=!0})),C(t),I(!0)},onReset:function(){m(""),C([!1,!1,!1,!1,!1,!1,!1,!1]),I(!1),B(!1)},onContinue:s})]})}var L=n(46);n(95);function P(){return Object(j.jsxs)("div",{className:"BackgroundClouds-Container",children:[Object(j.jsx)(L.a,{}),Object(j.jsx)(L.a,{}),Object(j.jsx)(L.a,{}),Object(j.jsx)(L.a,{}),Object(j.jsx)(L.a,{}),Object(j.jsx)(L.a,{}),Object(j.jsx)(L.a,{}),Object(j.jsx)(L.a,{}),Object(j.jsx)(L.a,{}),Object(j.jsx)(L.a,{})]})}n(96);var M=n(23);function T(e){var t=e.icon,n=e.label,c=void 0===n?"":n,a=e.className,s=void 0===a?"":a,o=e.style,i=e.onClick,r=M[t];return Object(j.jsxs)("div",{className:"IconButton-Container ".concat(s),style:o,children:[Object(j.jsx)("button",{className:"IconButton-Button",onClick:i,children:Object(j.jsx)(r,{className:"IconButton-Icon"})}),Object(j.jsx)("div",{children:c})]})}var B=n(47),R=(n(97),Math.floor(35/.75)),w="\nM0.5,".concat(-30,"\nL0.5,5\nM0.5,").concat(-30,"\nL0.5,5\n");n(98);function D(e){var t=e.className,n=void 0===t?"":t,c=e.children,a=e.style;return Object(j.jsx)("div",{className:"StaticTextBox-Container ".concat(n),style:a,children:c})}n(99);var I=Object(l.animated)((function(e){var t=e.className,n=void 0===t?"":t,a=e.style,s=Object(c.useState)(""),o=Object(i.a)(s,2),r=o[0],l=o[1];return Object(c.useEffect)((function(){for(var e="",t="01".length,n=0;n<R;n++)e+="01".charAt(Math.floor(Math.random()*t));l(e)}),[]),Object(j.jsx)("div",{className:"PhoneScrollText-Wrapper ".concat(n),style:a,children:Object(j.jsxs)(y,{aspect:.5,children:[Object(j.jsxs)("svg",{className:"PhoneScrollText-TextContainer",viewBox:"0 0 1 5",children:[Object(j.jsx)("path",{id:"path",fill:"none",d:w}),Object(j.jsx)("text",{fontSize:.75,children:Object(j.jsxs)("textPath",{href:"#path",textLength:35,children:[r,Object(j.jsx)("animate",{attributeType:"XML",attributeName:"startOffset",values:"".concat(35,"; 0"),dur:"10s",repeatCount:"indefinite"})]})})]}),Object(j.jsx)(B.a,{className:"PhoneScrollText-Phone"})]})})})),A=Object(l.animated)(D),F=Object(l.animated)(T),E=1e3;function V(e){var t=e.onClick,n=Object(l.useSprings)(3,(function(e){return{opacity:0}})),a=Object(i.a)(n,2),s=a[0],o=a[1],r=Object(l.useSpring)((function(){return{opacity:0}})),d=Object(i.a)(r,2),u=d[0],b=d[1],h=Object(l.useSpring)((function(){return{opacity:0}})),f=Object(i.a)(h,2),O=f[0],m=f[1];return Object(c.useEffect)((function(){o.start((function(e){return{opacity:1,delay:(.5+e)*E,config:l.config.molasses}})),b.start((function(){return{opacity:1,delay:4e3,config:l.config.molasses}})),m.start((function(){return{opacity:1,delay:8e3,config:l.config.molasses}}))}),[o,b,m]),Object(j.jsxs)("div",{className:"Landing-Container",children:[Object(j.jsx)("h1",{className:"Landing-Heading",children:"ChooseYourMessenger.com"}),Object(j.jsx)("div",{className:"Landing-Phones",children:s.map((function(e,t){return Object(j.jsx)(I,{style:e},t)}))}),Object(j.jsx)(A,{className:"Landing-TextBox",style:u,children:Object(j.jsxs)("h2",{children:["Tausende Menschen haben ihre Messenger-Adressb\xfccher verschl\xfcsselt hochgeladen.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Durchsuche sie nach deinem Namen!"]})}),Object(j.jsx)(F,{className:"Landing-ContinueButton",style:O,icon:"ArrowRight",label:"Los",onClick:t}),Object(j.jsx)(P,{})]})}var z=n(51),W=n.n(z);n(119);function Z(e){var t=e.show,n=void 0!==t&&t,c=e.showInitial,a=void 0!==c&&c,s=e.children,o=e.className,i=void 0===o?"":o;return Object(l.useTransition)(n,{initial:{opacity:a?1:0},from:{opacity:0},enter:{opacity:1},leave:{opacity:0},reverse:n})((function(e,t){return t&&Object(j.jsx)(l.animated.div,{className:"Modal ".concat(i),style:e,children:s})}))}n(120);function H(e){var t=e.url,n=e.className,a=void 0===n?"":n,s=e.onContinue,o=Object(c.useState)(!1),r=Object(i.a)(o,2),l=r[0],d=r[1],u=Object(c.useState)(!1),b=Object(i.a)(u,2),h=b[0],f=b[1],O=Object(c.useState)(!1),m=Object(i.a)(O,2),x=m[0],v=m[1],g=Object(c.useRef)(null),p=Object(c.useCallback)((function(){v(!0)}),[]);return Object(j.jsxs)(y,{className:a,aspect:16/9,children:[Object(j.jsx)("div",{className:"ResponsivePlayer-PlayerContainer",children:Object(j.jsx)(W.a,{url:t,controls:l&&!x,playing:h,onEnded:p,ref:g,width:"100%",height:"100%"})}),Object(j.jsx)(Z,{show:!l,showInitial:!0,children:Object(j.jsx)("div",{className:"ResponsivePlayer-Controls",children:Object(j.jsx)(T,{className:"ResponsivePlayer-IconButton",icon:"PlayFill",label:"Abspielen",onClick:function(){d(!0),f(!0)}})})}),Object(j.jsx)(Z,{show:x,children:Object(j.jsxs)("div",{className:"ResponsivePlayer-Controls",children:[Object(j.jsx)(T,{className:"ResponsivePlayer-IconButton",icon:"ArrowRepeat",label:"Wiederholen",onClick:function(){null!==g.current&&(g.current.seekTo(0),v(!1),f(!0))}}),Object(j.jsx)(T,{className:"ResponsivePlayer-IconButton",icon:"ArrowRightShort",label:"Weiter",onClick:s})]})})]})}n(121);function G(e){var t=e.onContinue;return Object(j.jsx)("div",{className:"Intro-Container",children:Object(j.jsx)("div",{className:"Intro-PlayerWrapper",children:Object(j.jsx)(H,{url:"/videos/demonstrator_intro.mp4",onContinue:t})})})}n(122);function q(e){var t=e.onContinue;return Object(j.jsx)("div",{className:"Explanation-Container",children:Object(j.jsx)("div",{className:"Explanation-PlayerWrapper",children:Object(j.jsx)(H,{url:"/videos/demonstrator_explanation.mp4",onContinue:t})})})}n(123),n(124);function Y(e){var t=e.children,n=e.onContinue;return Object(j.jsxs)("div",{className:"TitelPage-Container",children:[Object(j.jsx)(D,{className:"TitelPage-TextBox",children:Object(j.jsx)("h1",{children:t})}),Object(j.jsx)(T,{className:"TitelPage-Button",icon:"ArrowRight",label:"Starten",onClick:n})]})}n(125);function _(e){var t=e.onContinue;return Object(j.jsxs)("div",{className:"OutroPage-Container",children:[Object(j.jsx)(D,{className:"OutroPage-TextBox",children:Object(j.jsx)("h1",{children:"Mehr Informationen dazu findet ihr auf dem beiliegenden Poster"})}),Object(j.jsx)(T,{className:"OutroPage-Button",label:"Zur\xfcck zum Start",icon:"SkipBackwardFill",onClick:t})]})}var J=[function(e){var t=e.onContinue;return Object(j.jsx)(Y,{onContinue:t,children:"Datenschutzfreundliche Duplikaterkennung"})},function(e){var t=e.onContinue;return Object(j.jsx)(G,{onContinue:t})},function(e){var t=e.onContinue;return Object(j.jsx)(V,{onClick:t})},function(e){var t=e.onContinue;return Object(j.jsx)(S,{onContinue:t,icons:["Telegram-Logo.svg","Signal-Logo.svg","Threema-Logo.svg","Viber-Logo.svg"],titles:["Telegram","Signal","Threema","Viber"]})},function(e){var t=e.onContinue;return Object(j.jsx)(q,{onContinue:t})},function(e){var t=e.onContinue;return Object(j.jsx)(_,{onContinue:t})}];var U=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(l.useSpringRef)(),o=Object(l.useTransition)(n,{ref:s,keys:null,from:{opacity:0,transform:"translate3d(0, 100%, 0)"},enter:{opacity:1,transform:"translate3d(0, 0%, 0)"},leave:{opacity:0,transform:"translate3d(0, -100%, 0)"}});Object(c.useEffect)((function(){s.start()}),[n,s]),Object(c.useEffect)((function(){var e;return n===J.length-1&&(e=setTimeout((function(){return a(0)}),3e4)),function(){e&&clearTimeout(e)}}),[n]);var d=function(e){n!==e&&a(Math.min(J.length-1,Math.max(0,e)))};return Object(j.jsx)("div",{className:"App-OuterContainer",children:Object(j.jsxs)("div",{className:"App-InnerContainer",children:[Object(j.jsx)("div",{className:"App-ContentContainer",children:o((function(e,t){var n=J[t];return Object(j.jsx)(r.animated.div,{className:"App-ContentWrapper",style:e,children:Object(j.jsx)(n,{onContinue:function(){d(t===J.length-1?0:t+1)}})})}))}),Object(j.jsx)(b,{numPages:J.length,selectedPage:n,onPageChange:function(e){return a(e)},onPageNext:function(){return d(n+1)},onPagePrevious:function(){return d(n-1)}})]})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,127)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(U,{})}),document.getElementById("root")),X()},56:function(e,t,n){},58:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){var c={"./Signal-Logo.svg":90,"./Telegram-Logo.svg":91,"./Threema-Logo.svg":92,"./Viber-Logo.svg":93};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=s,e.exports=a,a.id=89},90:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Signal-Logo.b7dcab06.svg"},91:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Telegram-Logo.28141391.svg"},92:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Threema-Logo.7870bc6b.svg"},93:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Viber-Logo.421d0eac.svg"},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[126,1,2]]]);
//# sourceMappingURL=main.34414ce7.chunk.js.map