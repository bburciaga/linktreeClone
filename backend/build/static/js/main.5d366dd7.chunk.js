(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{52:function(e,t,n){},54:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(14),o=n.n(s),c=(n(52),n(9)),i=n.n(c),u=n(18),p=n(11),l=n(15),d=n(17),h=n(16),j=(n(54),n(42)),b=n(3),f=new function e(){Object(p.a)(this,e),Object(b.h)(this,{loading:!0,isLoggedIn:!1,username:""})},g=n(34),x=n(2),m=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(p.a)(this,n),(r=t.call(this,e)).state={},r}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(x.jsx)("div",{className:"inputField",children:Object(x.jsx)("input",{className:"input",type:this.props.type,placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){return e.props.onChange(t.target.value)}})})}}]),n}(r.PureComponent),v=n(81),O=n(12),w=Object(O.a)({root:{height:"44px",width:"200px",padding:"0 25px",margin:"15px 25px",boxSizing:"border-box",borderRadius:0,background:"#4f25f7",color:"#fff",transform:"none",boxShadow:"6px 6px 0 0 #c7d8ed",transition:"background .5s,border-color .5s,color .5s","&:hover":{transition:".5s",backgroundColor:"#4f25f7"}},label:{textTransform:"capitalize"}})(v.a);var k=function(e){return Object(x.jsx)(w,{variant:"contained",disabled:e.disabled,onClick:function(){return e.onClick()},children:e.txt})},y=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(p.a)(this,n),(r=t.call(this,e)).state={username:"",password:"",buttonDisabled:!1},r}return Object(l.a)(n,[{key:"setInputValue",value:function(e,t){(t=t.trim()).length>20||this.setState(Object(g.a)({},e,t))}},{key:"resetForm",value:function(){this.setState({username:"",password:"",buttonDisabled:!1})}},{key:"doLogin",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.username){e.next=2;break}return e.abrupt("return");case 2:if(this.state.password){e.next=4;break}return e.abrupt("return");case 4:return this.setState({buttonDisabled:!0}),e.prev=5,e.next=8,fetch("/login",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,password:this.state.password})});case 8:return t=e.sent,e.next=11,t.json();case 11:(n=e.sent)&&n.success?(f.isLoggedIn=!0,f.username=n.username):n&&!1===n.success&&(this.resetForm(),alert(n.msg)),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(5),this.resetForm(),console.log(e.t0);case 19:case"end":return e.stop()}}),e,this,[[5,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"loginForm",children:[Object(x.jsx)("h1",{children:"Teepee.io"}),Object(x.jsx)(m,{type:"text",placeholder:"Username",value:this.state.username?this.state.username:"",onChange:function(t){return e.setInputValue("username",t)}}),Object(x.jsx)(m,{type:"password",placeholder:"Password",value:this.state.password?this.state.password:"",onChange:function(t){return e.setInputValue("password",t)}}),Object(x.jsx)(k,{txt:"Login",disabled:this.state.buttonDisabled,onClick:function(){return e.doLogin()}})]})}}]),n}(r.PureComponent),C=n(41),L=n(83),I=n(43),F=n(82),S=n(40),T=n.n(S),A=Object(O.a)({root:{display:"flex",alignItem:"center",justifyContent:"center",height:"44px",width:"44px",background:"#4f25f7",color:"#fff",transform:"none",boxShadow:"6px 6px 0 0 #c7d8ed",transition:"background .5s,border-color .5s,color .5s","&:hover":{transition:".5s",backgroundColor:"#4f25f7",boxShadow:"0 0 0 0"}}})(F.a);var N=function(){var e,t=Object(r.useState)(!0),n=Object(I.a)(t,2),a=n[0],s=n[1];return e=!0===a?"ON":"OFF",Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{children:e}),Object(x.jsx)(A,{onClick:function(){return s(!a)},children:Object(x.jsx)(T.a,{})})]})},D=Object(C.a)({palette:{primary:{main:"#2e1667"},secondary:{main:"#c7d8ed"}},typography:{fontFamily:["Roboto"],h4:{fontWeight:600,fontSize:28,lineHeight:"2rem"},h5:{fontWeight:100,lineHeight:"2rem"}}}),P=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/isLoggedIn",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.success?(f.loading=!1,f.isLoggedIn=!0,f.username=n.username):(f.loading=!1,f.isLoggedIn=!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),f.loading=!1,f.isLoggedIn=!1;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"doLogout",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/logout",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.success&&(f.isLoggedIn=!1,f.username=""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"profilePage",children:[Object(x.jsx)("h1",{children:"Brian Burciaga"}),Object(x.jsxs)(L.a,{theme:D,children:[Object(x.jsx)("a",{href:"https://www.instagram.com/brian_asiago/",rel:"noopener noreferrer",children:Object(x.jsx)(k,{txt:"Instagram"})}),Object(x.jsx)("a",{href:"https://twitter.com/TheBrianAsiago",rel:"noopener noreferrer",children:Object(x.jsx)(k,{txt:"Twitter"})}),Object(x.jsx)("a",{href:"https://www.linkedin.com/feed/",rel:"noopener noreferrer",children:Object(x.jsx)(k,{txt:"LinkedIn"})})]}),Object(x.jsxs)("footer",{children:[Object(x.jsx)(k,{txt:"Log out",disabled:!1,onClick:function(){return e.doLogout()}}),Object(x.jsx)(N,{})]})]})}}]),n}(r.PureComponent),B=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/isLoggedIn",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.success?(f.loading=!1,f.isLoggedIn=!0,f.username=n.username):(f.loading=!1,f.isLoggedIn=!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),f.loading=!1,f.isLoggedIn=!1;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"doLogout",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/logout",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.success&&(f.isLoggedIn=!1,f.username=""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return f.loading?Object(x.jsx)("div",{className:"App",children:"Loading, please wait.."}):f.isLoggedIn?Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(P,{})}):Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(y,{})})}}]),n}(a.a.Component),z=Object(j.a)(B),J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),s(e),o(e)}))};o.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(z,{})}),document.getElementById("root")),J()}},[[66,1,2]]]);
//# sourceMappingURL=main.5d366dd7.chunk.js.map