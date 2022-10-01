(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),l=c(4),r=c(2),i=c(3),o=c.n(i),d=c(1),j=(c(13),c(14),c(6)),u=c.n(j),b=c(0),h=function(e){var t=e.todos,c=e.selectedTodoId,s=e.selectTodo;return Object(b.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed;return Object(b.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(b.jsx)("td",{className:"is-vcentered",children:t}),Object(b.jsx)("td",{className:"is-vcentered",children:n&&Object(b.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("td",{className:"is-vcentered is-expanded",children:Object(b.jsx)("p",{className:u()({"has-text-success":n,"has-text-danger":!n}),children:a})}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:Object(b.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e.id)},children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:u()("far",{"fa-eye":c!==t,"fa-eye-slash":c===t})})})})})]},t)}))})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(s||(s={}));var m=function(e){var t=e.filterBy,c=e.handleStatus,a=e.query,n=e.setQuery;return Object(b.jsxs)("form",{className:"field has-addons",onSubmit:function(e){e.preventDefault()},children:[Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("span",{className:"select",children:Object(b.jsxs)("select",{"data-cy":"statusSelect",className:"option",value:t,onChange:function(e){return c(e.target.value)},children:[Object(b.jsx)("option",{value:s.ALL,children:"All"}),Object(b.jsx)("option",{value:s.ACTIVE,children:"Active"}),Object(b.jsx)("option",{value:s.COMPLETED,children:"Completed"})]})})}),Object(b.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:function(e){n(e.target.value)}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-magnifying-glass"})}),a&&Object(b.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(b.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete","aria-label":"delete",onClick:function(){n("")}})})]})]})},O=(c(16),function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})});function x(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var f=function(e){var t=e.todos,c=e.selectedTodoId,s=e.selectTodo,a=Object(d.useState)(null),n=Object(r.a)(a,2),i=n[0],j=n[1],u=t.find((function(e){return e.id===c}));return Object(d.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u){e.next=5;break}return e.next=3,c=u.userId,x("/users/".concat(c));case 3:t=e.sent,j(t);case 5:case"end":return e.stop()}var c}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[c]),Object(b.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(b.jsx)("div",{className:"modal-background"}),i?Object(b.jsxs)("div",{className:"modal-card",children:[Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(c)}),Object(b.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return s(0)}})]}),Object(b.jsxs)("div",{className:"modal-card-body",children:[Object(b.jsx)("p",{className:"block","data-cy":"modal-title",children:null===u||void 0===u?void 0:u.title}),Object(b.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==u&&void 0!==u&&u.completed?Object(b.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(b.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(b.jsx)("a",{href:"mailto:".concat(i.email),children:null===i||void 0===i?void 0:i.name})]})]})]}):Object(b.jsx)(O,{})]})},p=function(){var e=Object(d.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(d.useState)(!0),i=Object(r.a)(n,2),j=i[0],u=i[1],p=Object(d.useState)(0),v=Object(r.a)(p,2),N=v[0],y=v[1],g=Object(d.useState)(s.ALL),C=Object(r.a)(g,2),T=C[0],w=C[1],L=Object(d.useState)(""),k=Object(r.a)(L,2),E=k[0],S=k[1];Object(d.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("/todos");case 2:t=e.sent,u(!1),a(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var I=c.filter((function(e){switch(T){case s.ACTIVE:return!e.completed&&e.title.toLowerCase().includes(E.toLowerCase());case s.COMPLETED:return e.completed&&e.title.toLowerCase().includes(E.toLowerCase());default:return e.title.toLowerCase().includes(E.toLowerCase())}})),A=function(e){y(e)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h1",{className:"title",children:"Todos:"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(m,{filterBy:T,handleStatus:function(e){w(e)},query:E,setQuery:S})}),Object(b.jsx)("div",{className:"block",children:j?Object(b.jsx)(O,{}):Object(b.jsx)(h,{todos:I,selectedTodoId:N,selectTodo:A})})]})})}),0!==N&&Object(b.jsx)(f,{todos:c,selectedTodoId:N,selectTodo:A})]})};n.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7bd3c114.chunk.js.map