(this["webpackJsonpfoobar-app"]=this["webpackJsonpfoobar-app"]||[]).push([[0],{30:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),s=n.n(r),i=n(18),a=n.n(i),j=(n(30),n(7)),o="https://foo-bar-managers.herokuapp.com/";function l(){return Object(c.jsx)("section",{children:Object(c.jsx)("h2",{children:"Home"})})}var b=n(15),d=function(e){return Object(c.jsx)("div",{className:"popup-box",children:Object(c.jsxs)("div",{className:"box",children:[Object(c.jsx)("span",{className:"close-icon",onClick:e.handleClose,children:"Back to Beers"}),e.content]})})};function h(e){var t=Object(r.useState)(!1),n=Object(j.a)(t,2),s=n[0],i=n[1],a=function(){i(!s)};return Object(c.jsxs)("article",{children:[Object(c.jsx)("h2",{children:e.name}),Object(c.jsx)("button",{onClick:function(){e.editCartItems(e.name,1)},children:"+"}),e.amount,Object(c.jsx)("button",{onClick:function(){e.editCartItems(e.name,-1)},children:"-"}),Object(c.jsx)("input",{type:"button",value:"See Details",onClick:a}),s&&Object(c.jsx)(d,{content:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("b",{children:e.name}),Object(c.jsx)("p",{children:e.description.overallImpression}),Object(c.jsx)("p",{children:e.description.appearance}),Object(c.jsx)("p",{children:e.description.mouthfeel})]}),handleClose:a})]})}function u(e){var t=e.cartItems;return console.log(t,"beerItemsArray in beer list"),Object(c.jsx)("main",{children:t&&t.map((function(t){return Object(c.jsx)(h,Object(b.a)(Object(b.a)({},t),{},{data:e.data,editCartItems:e.editCartItems}),t.id)}))})}function O(e){return Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:"Beers List"}),Object(c.jsx)(u,{beers:e.beers,data:e.data,cartItems:e.cartItems,editCartItems:e.editCartItems})]})}var x=n(24),m=n(19),p=n.n(m);function f(){var e=Object(x.a)(),t=e.register,n=e.handleSubmit,r=e.errors;return Object(c.jsx)("form",{className:"Form",onSubmit:n((function(e){console.log(e)})),children:Object(c.jsxs)("fieldset",{children:[Object(c.jsx)("legend",{children:"Payment Details"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"Card Number"}),Object(c.jsx)(p.a,{mask:"9999-9999-9999-9999",maskPlaceholder:" ",name:"card_number",ref:t({required:!0})}),r.card_number&&"Card number is required."]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"Expire"}),Object(c.jsx)(p.a,{mask:"99/99",maskPlaceholder:"MM/YY",name:"expire",ref:t({required:!0})}),r.expire&&"Enter month and year"]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"CVV"}),Object(c.jsx)("input",{name:"cvv",ref:t({required:!0,maxLength:3,minLength:3,pattern:/\d+/})}),r.cvv&&"Enter a number of three digits."]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"Titular name"}),Object(c.jsx)("input",{name:"name",ref:t({required:!0})}),r.name&&"Titular name is required."]}),Object(c.jsx)("div",{children:Object(c.jsx)("input",{type:"submit"})})]})})}function v(e){return Object(c.jsxs)("div",{className:"CartItem",children:[Object(c.jsxs)("h1",{children:["Beer name: ",e.name]}),Object(c.jsxs)("h1",{children:["amount ",e.amount]})]})}function C(e){var t=e.cartItems.filter((function(e){return e.amount>0}));return console.log(t,"in cart list"),Object(c.jsx)("div",{className:"CartList",children:t.map((function(e,t){return Object(c.jsx)(v,Object(b.a)({},e),t)}))})}var g=n(10),I=n(2);function k(e){return console.log(e.cartItems,"in cart "),Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:"Cart"}),Object(c.jsx)(C,{cartItems:e.cartItems}),Object(c.jsx)("p",{children:"Her you will see your order"}),Object(c.jsx)(g.a,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{children:Object(c.jsx)(g.b,{to:"/pay",children:"Pay"})}),Object(c.jsx)(I.c,{children:Object(c.jsx)(I.a,{path:"/pay",children:Object(c.jsx)(y,{})})})]})})]})}function y(){return Object(c.jsx)("section",{children:Object(c.jsx)(f,{})})}n(40);var S=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)({}),a=Object(j.a)(i,2),b=a[0],d=a[1],h=Object(r.useState)([]),u=Object(j.a)(h,2),x=u[0],m=u[1];return console.log(x),Object(r.useEffect)((function(){var e,t,n;e=d,t=m,fetch(o,{method:"get",headers:{"Content-Type":"application/json; charset=utf-8"}}).then((function(e){if(e.ok)return e.json();console.log("GET failed!")})).then((function(n){e(n);var c=n.taps.map((function(e){return{name:e.beer,amount:0}}));console.log(c,"x"),t(c)})),n=s,fetch(o+"beertypes",{method:"get",headers:{"Content-Type":"application/json; charset=utf-8"}}).then((function(e){if(e.ok)return e.json();console.log("GET failed!")})).then((function(e){return n(e)}))}),[]),Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(g.a,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(g.b,{to:"/",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(g.b,{to:"/shop",children:"Beers"})}),Object(c.jsx)("li",{children:Object(c.jsx)(g.b,{to:"/cart",children:"Cart"})})]})}),Object(c.jsxs)(I.c,{children:[Object(c.jsx)(I.a,{path:"/shop",children:Object(c.jsx)(O,{data:b,beers:n,cartItems:x,editCartItems:function(e,t){var n=x.map((function(n){return n.name===e&&(n.amount+=t),n}));m(n)}})}),Object(c.jsx)(I.a,{path:"/cart",children:x&&Object(c.jsx)(k,{cartItems:x})}),Object(c.jsx)(I.a,{path:"/",children:Object(c.jsx)(l,{})})]})]})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(S,{})}),document.getElementById("root")),N()}},[[41,1,2]]]);
//# sourceMappingURL=main.f859b83b.chunk.js.map