(this.webpackJsonpreactproject=this.webpackJsonpreactproject||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/loginicon.ed6c279d.png"},31:function(e,t,a){e.exports=a(67)},36:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){e.exports=a.p+"static/media/shopping.f2f5e5bc.png"},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),o=a.n(c),l=(a(36),a(6)),u=a(1),s=a(2),i=a.n(s),m=a(8),p=a(3),d=a(5),E=a(29),f=a.n(E).a.create({baseURL:"https://192.168.1.28:3333"}),h=(a(55),a(11)),b=a.n(h);a(56);function v(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),s=Object(p.a)(o,2),E=s[0],h=s[1],v=Object(u.f)();function g(){return(g=Object(m.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={email:a,senha:E},e.prev=2,e.next=5,f.post("session",n);case 5:r=e.sent,localStorage.setItem("idusuarios",r.data.rows[0].idusuarios),localStorage.setItem("nome",r.data.rows[0].nome),v.push("/listas"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),alert("Falha no Login, tente novamente.");case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"login-container"},r.a.createElement("section",{className:"form"},r.a.createElement("img",{src:b.a,alt:"Lista do Rancho",style:{width:150,marginLeft:97}}),r.a.createElement("form",{onSubmit:function(e){return g.apply(this,arguments)}},r.a.createElement("h1",null,"Fa\xe7a seu Login"),r.a.createElement("input",{type:"email",placeholder:"Email",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{type:"password",placeholder:"Senha",value:E,onChange:function(e){return h(e.target.value)}}),r.a.createElement("button",{className:"botao",type:"submit"},"Entrar"),r.a.createElement(l.b,{className:"voltar-link",to:"registrar"},r.a.createElement(d.f,{size:16}),"N\xe3o tenho cadastro"))))}a(62);function g(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),s=Object(p.a)(o,2),E=s[0],h=s[1],v=Object(n.useState)(""),g=Object(p.a)(v,2),j=g[0],O=g[1],S=Object(n.useState)(""),y=Object(p.a)(S,2),x=y[0],C=y[1],N=Object(u.f)();function k(){return(k=Object(m.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={nome:a,sobrenome:E,email:j,senha:x},e.prev=2,e.next=5,f.post("usuario",n);case 5:r=e.sent,alert("Usu\xe1rio cadastrado com sucesso, Ol\xe1 ".concat(r.data.nome)),N.push("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),alert("Erro, tente novamente");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"login-container"},r.a.createElement("section",{className:"form"},r.a.createElement("img",{src:b.a,alt:"Lista do Rancho",style:{width:150,marginLeft:97}}),r.a.createElement("form",{onSubmit:function(e){return k.apply(this,arguments)}},r.a.createElement("h1",null,"Cadastro"),r.a.createElement("p",null,"Fa\xe7a seu cadastro, entre na plataforma e nunca mais fique sem papel higi\xeanico na hora de fazer o 2"),r.a.createElement("input",{type:"text",placeholder:"Nome",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{type:"text",placeholder:"Sobrenome",value:E,onChange:function(e){return h(e.target.value)}}),r.a.createElement("input",{type:"email",placeholder:"Email",value:j,onChange:function(e){return O(e.target.value)}}),r.a.createElement("input",{type:"password",placeholder:"Senha",value:x,onChange:function(e){return C(e.target.value)}}),r.a.createElement("button",{className:"botao",type:"submit"},"Cadastrar"),r.a.createElement(l.b,{className:"voltar-link",to:"/"},r.a.createElement(d.a,{size:16}),"Voltar para a tela inicial"))))}a(63);function j(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(u.f)(),s=localStorage.getItem("idusuarios"),E=localStorage.getItem("nome");function h(){return(h=Object(m.a)(i.a.mark((function e(t,a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={idlistas:t,string:a},e.prev=1,e.next=4,f.put("listas",n);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),alert("Erro ao excluir lista. Tente novamente!");case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){f.get("listas",{headers:{Authorization:s}}).then((function(e){c(e.data.rows)}))}),[a]),r.a.createElement("div",{className:"listas-container"},r.a.createElement("header",null,r.a.createElement(l.b,{to:"/listas"},r.a.createElement("img",{src:b.a,alt:"Lista do Rancho",width:"100"})),r.a.createElement("span",null,"Seja Bem Vindo, ",E),r.a.createElement("button",{onClick:function(){localStorage.clear(),o.push("/")},type:"button"},r.a.createElement(d.e,{size:18,color:"#164897"}))),r.a.createElement("h1",null,"Listas Ativas"),r.a.createElement("ul",null,a.map((function(e){return r.a.createElement("li",{key:e.idlistas,onClick:function(){return t=e.idlistas,localStorage.setItem("lista",t),void o.push("/produtos");var t}},r.a.createElement("strong",null,"LISTA: "),r.a.createElement("p",null,e.nome),r.a.createElement("strong",null,"DESCRI\xc7\xc3O"),r.a.createElement("p",null,e.descricao),r.a.createElement("button",{onClick:function(t){t.stopPropagation(),function(e,t){h.apply(this,arguments)}(e.idlistas,"excluir")},type:"button"},r.a.createElement(d.g,{size:20,color:"red"})))}))),r.a.createElement(l.b,{className:"botao-mais",to:"novalista"},r.a.createElement(d.d,{size:40,color:"#164897"})))}a(64);function O(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),s=Object(p.a)(o,2),E=s[0],h=s[1],v=Object(u.f)(),g=localStorage.getItem("idusuarios"),j=localStorage.getItem("nome");function O(){return(O=Object(m.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={nome:a,descricao:E},e.prev=2,e.next=5,f.post("listas",n,{headers:{Authorization:g}});case 5:alert("Lista criada com Sucesso."),v.push("/listas"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),alert("Erro, tente novamente");case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"cadastro-container"},r.a.createElement("header",null,r.a.createElement(l.b,{to:"/listas"},r.a.createElement("img",{src:b.a,alt:"Lista do Rancho",width:"100"})),r.a.createElement("span",null,"Seja Bem Vindo, ",j),r.a.createElement("button",{onClick:function(){localStorage.clear(),v.push("/")},type:"button"},r.a.createElement(d.e,{size:18,color:"#164897"}))),r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"Cadastrar Nova Lista"),r.a.createElement("form",{onSubmit:function(e){return O.apply(this,arguments)}},r.a.createElement("input",{type:"text",placeholder:"Nome",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{type:"text",placeholder:"Descri\xe7\xe3o",value:E,onChange:function(e){return h(e.target.value)}}),r.a.createElement("button",{className:"botao",type:"submit"},"Cadastrar"))))}a(65);function S(){var e,t=Object(n.useState)([]),a=Object(p.a)(t,2),c=a[0],o=a[1],s=Object(u.f)(),E=localStorage.getItem("nome"),h=localStorage.getItem("lista");function v(){return(v=Object(m.a)(i.a.mark((function e(t,a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={idlistas:t,string:a},e.prev=1,e.next=4,f.put("listas",n);case 4:s.push("/listas"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),alert("Erro ao excluir lista. Tente novamente!");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}function g(e,t,a,n){return j.apply(this,arguments)}function j(){return(j=Object(m.a)(i.a.mark((function e(t,a,n,r){var c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.target.value,o={idprodutos:t,valor:c,string:n,status:r},e.prev=2,e.next=5,f.put("produtos",o);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),alert("Erro ao alterar produto. Tente novamente!");case 10:case"end":return e.stop()}}),e,null,[[2,7]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){var e=!0;return f.get("produtos",{params:{lista:h}}).then((function(t){e&&o(t.data.rows)})),function(){return e=!1}}),[c,h]),e=c?c.map((function(e){return r.a.createElement("tr",{key:e.idprodutos},r.a.createElement("td",null,e.nome),r.a.createElement("td",null,r.a.createElement("input",{type:"number",defaultValue:e.quantidade,onChange:function(t){return g(e.idprodutos,t,"quantidade",e.status)}})),r.a.createElement("td",null,r.a.createElement("input",{type:"number",defaultValue:e.preco,onChange:function(t){return g(e.idprodutos,t,"preco",e.status)}})),function(e,t){if(1===e)return r.a.createElement("td",null,r.a.createElement("button",{className:"botao-verde",type:"submit",onClick:function(a){return g(t,a,"status",e)}},r.a.createElement(d.d,{size:15})));if(2===e)return r.a.createElement("td",null,r.a.createElement("button",{className:"botao-vermelho",type:"submit",onClick:function(a){return g(t,a,"status",e)}},r.a.createElement(d.c,{size:15})))}(e.status,e.idprodutos))})):"Adicione algum produto",r.a.createElement("div",{className:"produtos-container"},r.a.createElement("header",null,r.a.createElement(l.b,{to:"/listas"},r.a.createElement("img",{src:b.a,alt:"Lista do Rancho",width:"100"})),r.a.createElement("span",null,"Seja Bem Vindo, ",E),r.a.createElement("button",{onClick:function(){localStorage.clear(),s.push("/")},type:"button"},r.a.createElement(d.e,{size:18,color:"#164897"}))),r.a.createElement("div",{className:"cabecalho"},r.a.createElement("h1",null,"Produtos Ativos"),r.a.createElement("button",{onClick:function(e){e.stopPropagation(),function(e,t){v.apply(this,arguments)}(h,"alterar")},className:"botao-concluir",type:"button"},r.a.createElement(d.b,{size:30,color:"#164897"}))),r.a.createElement("div",{className:"content"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"PRODUTO"),r.a.createElement("th",null,"QNT"),r.a.createElement("th",null,"VALOR"),r.a.createElement("th",null,"STATUS"))),r.a.createElement("tbody",null,e),r.a.createElement("tfoot",null)),r.a.createElement(l.b,{className:"botao-mais",to:"novoproduto"},r.a.createElement(d.d,{size:40,color:"#164897"}))))}a(66);function y(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),s=Object(p.a)(o,2),E=s[0],h=s[1],v=Object(n.useState)(null),g=Object(p.a)(v,2),j=g[0],O=g[1],S=Object(n.useState)(null),y=Object(p.a)(S,2),x=y[0],C=y[1],N=Object(u.f)(),k=localStorage.getItem("idusuarios"),w=localStorage.getItem("nome"),z=localStorage.getItem("lista");function L(){return(L=Object(m.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={nome:a,descricao:E,idlistas:z,quantidade:j,preco:x},e.prev=2,e.next=5,f.post("produtos",n,{headers:{Authorization:k}});case 5:alert("Produto cadastrado com Sucesso."),N.push("/produtos"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),alert("Erro, tente novamente");case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"cadastro-container"},r.a.createElement("header",null,r.a.createElement(l.b,{to:"/listas"},r.a.createElement("img",{src:b.a,alt:"Lista do Rancho",width:"100"})),r.a.createElement("span",null,"Seja Bem Vindo, ",w),r.a.createElement("button",{onClick:function(){localStorage.clear(),N.push("/")},type:"button"},r.a.createElement(d.e,{size:18,color:"#164897"}))),r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"Cadastrar Novo Produto"),r.a.createElement("form",{onSubmit:function(e){return L.apply(this,arguments)}},r.a.createElement("input",{type:"text",placeholder:"Nome",defaultValue:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{type:"text",placeholder:"Descri\xe7\xe3o",defaultValue:E,onChange:function(e){return h(e.target.value)}}),r.a.createElement("input",{type:"number",placeholder:"Quantidade",defaultValue:j,step:"0.01",onChange:function(e){return O(e.target.value)}}),r.a.createElement("input",{type:"number",placeholder:"Pre\xe7o",defaultValue:x,step:"0.01",onChange:function(e){return C(e.target.value)}}),r.a.createElement("button",{className:"botao",type:"submit"},"Cadastrar"))))}function x(){return r.a.createElement(l.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:v}),r.a.createElement(u.a,{path:"/registrar",component:g}),r.a.createElement(u.a,{path:"/listas",component:j}),r.a.createElement(u.a,{path:"/novalista",component:O}),r.a.createElement(u.a,{path:"/produtos",component:S}),r.a.createElement(u.a,{path:"/novoproduto",component:y})))}var C=function(){return r.a.createElement(x,null)};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.120dd771.chunk.js.map