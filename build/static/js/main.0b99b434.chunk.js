(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{50:function(e,n,t){},70:function(e,n,t){"use strict";t.r(n);var r=t(1),i=t(0),c=t.n(i),o=t(19),a=t.n(o),s=(t(50),t(44)),l=t(5),u=t(3),d=t(11),j=t(4);function b(){var e=Object(u.a)(["\n  background: lightgray;\n  margin-top:5px;\n  height:40px;\n  width:90px;\n  font-size:20px;\n  \n  \n"]);return b=function(){return e},e}function p(){var e=Object(u.a)(["\n\nmargin-top:5px;\nwidth:350px;\nheight:25px;\nbox-shadow:0px 3px lightgray;\n"]);return p=function(){return e},e}function h(){var e=Object(u.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nflex-direction:column;\nmargin-top:10px;\n\n\n"]);return h=function(){return e},e}function x(){var e=Object(u.a)(["\n\nmargin-top:15%;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nflex-direction:column;\n\n.greeting{\n    font-weight:bold;\n}\n.instruction{\n    font-weight:bold;\n    margin-top:70px;\n}\n"]);return x=function(){return e},e}var f=function(e){var n=e.history,t=Object(i.useState)(""),c=Object(d.a)(t,2),o=c[0],a=c[1],s=j.a.div(x()),l=j.a.form(h()),u=j.a.input(p()),f=j.a.button(b());return Object(r.jsxs)(s,{children:[Object(r.jsx)("div",{className:"greeting",children:"Hi there! Welcome to your education showcase."}),Object(r.jsx)("div",{className:"instruction",children:'Type your name and click "Enter" below to begin!'}),Object(r.jsxs)(l,{onSubmit:function(e){n.push({pathname:"/about",state:{name:o}}),e.preventDefault()},children:[Object(r.jsx)(u,{autoFocus:!0,value:o,onChange:function(e){return a(e.target.value)},type:"text"}),Object(r.jsx)("br",{}),Object(r.jsx)(f,{type:"submit",children:"Enter"})]})]})},O=t(20),g="ADD_SCHOOL",m="DELETE_SCHOOL",v=t(41),y=t.n(v),w=t(14);function S(){var e=Object(u.a)(["\n border-width:5px;\n border-color:black;\n max-height: 150px;\n width:200px;\n overflow: scroll;\n \n .options{\n    border-width:5px;\n border-color:black;  \n }\n\n"]);return S=function(){return e},e}var T=function(e){var n,t=e.options,o=e.schoolSelectorChange,a=Object(i.useState)(0),s=Object(d.a)(a,2),l=s[0],u=s[1],b=Object(i.useState)([]),p=Object(d.a)(b,2),h=p[0],x=p[1],f=Object(i.useState)(!1),O=Object(d.a)(f,2),g=O[0],m=O[1],v=Object(i.useState)(""),y=Object(d.a)(v,2),T=y[0],C=y[1],E=function(e){u(0),x([]),m(!1),C(e.currentTarget.innerText),o(e.currentTarget.innerText)},k=j.a.div(S());return g&&T&&(n=h.length?Object(r.jsx)(k,{children:Object(r.jsx)("div",{style:{overflow:"scroll"},children:h.map((function(e,n){return n===l&&"option-active",Object(r.jsx)("div",{style:{marginTop:10},className:"options",onClick:E,children:e},e)}))})}):Object(r.jsx)("div",{className:"no-options",children:Object(r.jsx)("em",{children:"No Option!"})})),Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsx)("div",{className:"search",children:Object(r.jsx)(w.a,{type:"text",name:"name",className:"search-box",placeholder:"Enter the school name",onChange:function(e){console.log("onChanges");var n=e.currentTarget.value,r=t.filter((function(e){return e.toLowerCase().indexOf(n.toLowerCase())>-1}));u(0),x(r),m(!0),C(e.currentTarget.value)},onKeyDown:function(e){if(13===e.keyCode)u(0),m(!1),C(h[l]);else if(38===e.keyCode){if(0===l)return;u(l-1)}else if(40===e.keyCode){if(l===h.length-1)return void console.log(l);u(l+1),o(T)}},value:T})}),n]})};function C(){var e=Object(u.a)(["\n    margin-top: 7px;\n  "]);return C=function(){return e},e}function E(){var e=Object(u.a)(["\n    font-size: 20px;\n    margin-top: 7px;\n  "]);return E=function(){return e},e}function k(){var e=Object(u.a)(['\n    position: "absolute";\n    margin-left: 15%;\n    margin-top: -24px;\n    font-size: 20px;\n  ']);return k=function(){return e},e}function L(){var e=Object(u.a)(["\n    font-size: 20px;\n  "]);return L=function(){return e},e}function N(){var e=Object(u.a)(["\n    font-size: 20px;\n    margin-top: 7px;\n  "]);return N=function(){return e},e}function z(){var e=Object(u.a)(['\n    font-size: 30px;\n    font-weight: "bold";\n  ']);return z=function(){return e},e}function D(){var e=Object(u.a)(["\n    background: red;\n\n    height: 30px;\n    width: 70px;\n    font-size: 15px;\n    position: relative;\n    left: 75%;\n  "]);return D=function(){return e},e}function F(){var e=Object(u.a)(["\n    background: lightgray;\n\n    height: 30px;\n    width: 70px;\n    font-size: 15px;\n    position: absolute;\n    bottom: 10px;\n    right: 10px;\n  "]);return F=function(){return e},e}function A(){var e=Object(u.a)(['\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: "column";\n  ']);return A=function(){return e},e}function P(){var e=Object(u.a)(["\n    background: lightgray;\n\n    height: 40px;\n    width: 170px;\n    font-size: 15px;\n    position: absolute;\n    margin-top: -230px;\n    margin-left: 300px;\n    padding-bottom: 5;\n  "]);return P=function(){return e},e}function G(){var e=Object(u.a)(['\n    background: lightgray;\n\n    margin-right: 850px;\n    margin-top: 10%;\n    width: 230px;\n    position: "absolute";\n    min-height: 370px;\n    max-height: 370pv;\n    padding-top: 10px;\n    padding-bottom: 10px;\n\n    .school-list {\n      font-size: 17px;\n      justify-content: "colunm";\n      padding-top: 30;\n      margin: 0 auto;\n      width: 50%;\n    }\n  ']);return G=function(){return e},e}function R(){var e=Object(u.a)(["\n    position: absolute;\n    width: 830px;\n    background: lightgray;\n    margin-left: 340px;\n    margin-top: 200px;\n    max-height: 310px;\n  "]);return R=function(){return e},e}function B(){var e=Object(u.a)(['\n    margin-top: -320px;\n    margin-left: 300px;\n\n    position: absolute;\n    align-self: "center";\n  ']);return B=function(){return e},e}function H(){var e=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: row;\n  "]);return H=function(){return e},e}var I=function(e){var n=e.location,t=(e.options,c.a.useState(!1)),o=Object(d.a)(t,2),a=o[0],s=o[1],l=c.a.useState([]),u=Object(d.a)(l,2),b=u[0],p=u[1],h=Object(i.useState)(null),x=Object(d.a)(h,2),f=(x[0],x[1]),v=c.a.useState([]),S=Object(d.a)(v,2),I=S[0],W=S[1];Object(i.useEffect)((function(){fetch("http://universities.hipolabs.com/search?").then((function(e){return e.json()})).then((function(e){for(var n=[],t=0;t<=e.length-1;t++)n.push(e[t].name);p(n)}),(function(e){f(e)}))}),[]);var J=Object(O.c)((function(e){return e})),M=Object(O.b)(),Y=j.a.div(H()),_=j.a.h4(B()),q=j.a.div(R()),K=j.a.div(G()),V=j.a.button(P()),X=j.a.div(A()),Q=j.a.button(F()),U=j.a.button(D()),Z=j.a.div(z()),$=j.a.div(N()),ee=j.a.div(L()),ne=j.a.div(k()),te=j.a.div(E()),re=j.a.div(C());function ie(){s(!1)}function ce(e,n){W(e)}function oe(e){M({type:m,payload:e})}return Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsxs)(y.a,{isOpen:a,onRequestClose:ie,style:{content:{top:"40%",left:"62%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:370}},contentLabel:"Education Modal",children:[Object(r.jsx)("button",{onClick:ie,children:"X"}),Object(r.jsx)("span",{style:{marginLeft:5},children:"Education Information"}),Object(r.jsx)(X,{children:Object(r.jsx)(w.c,{enableReinitialize:!0,initialValues:{},onSubmit:function(e){var n=e;s(!1),n.name=I,M({type:g,payload:e})},render:function(e){return Object(r.jsxs)(w.b,{children:[Object(r.jsxs)("div",{style:{flexDirection:"row"},children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{className:"form-label",children:"School Name"}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(T,{options:b,schoolSelectorChange:ce})})]}),Object(r.jsxs)("div",{style:{position:"relative",paddingLeft:30,marginLeft:"50%",marginTop:-39},children:[Object(r.jsx)("label",{className:"form-label",children:"Degree"}),Object(r.jsx)(w.a,{name:"degree",type:"text",placeholder:"Enter degree recieved"})]})]}),Object(r.jsxs)("div",{style:{marginTop:25,position:"relative"},children:[Object(r.jsx)("label",{className:"form-label",children:"Field of Study"}),Object(r.jsx)("br",{}),Object(r.jsx)(w.a,{name:"studyField",type:"text",placeholder:"Enter the field of study"})]}),Object(r.jsxs)("div",{style:{flexDirection:"row",marginTop:25},children:[Object(r.jsx)("label",{children:"Year Started"}),Object(r.jsx)("br",{}),Object(r.jsx)(w.a,{name:"yearStarted",type:"number",placeholder:"Ex. 1999"})," ",Object(r.jsxs)("div",{style:{position:"relative",paddingLeft:30,marginLeft:"50%",marginTop:-55},children:[Object(r.jsx)("label",{children:"Year Ended(Or Expected)"}),Object(r.jsx)(w.a,{name:"yearEnded",type:"number",placeholder:"Ex. 1999"})]})]}),Object(r.jsxs)("div",{style:{marginTop:25},children:[Object(r.jsx)("label",{className:"form-label",children:"GPA"}),Object(r.jsx)("br",{}),Object(r.jsx)(w.a,{name:"GPA",step:"0.01",type:"number",placeholder:"Enter your GPA"})]}),Object(r.jsxs)("div",{style:{marginTop:25},children:[Object(r.jsx)("label",{className:"form-label",children:"Description"}),Object(r.jsx)("br",{}),Object(r.jsx)(w.a,{name:"desc",rows:"3",maxLength:"500",component:"textarea",placeholder:"Enter a description"})]}),Object(r.jsx)(Q,{type:"submit",children:"Save"})]})}})})]}),Object(r.jsxs)(Y,{children:[Object(r.jsxs)(K,{children:[" ",Object(r.jsxs)("div",{className:"school-list",children:[" ",J.schoolReducer.schools.map((function(e,n){return Object(r.jsx)("p",{style:{whiteSpace:"initial",width:1,marginTop:10,fontSize:15,fontWeight:"bold"},children:e.name})}))," "]})]}),Object(r.jsxs)(_,{children:["Welcome to ",n.state.name,"'s education page "]}),Object(r.jsx)(V,{onClick:function(){s(!0)},children:"Add new education"}),Object(r.jsx)("br",{}),Object(r.jsx)(q,{children:Object(r.jsx)("div",{style:{marginTop:15,paddingBottom:20,background:"lightgray",paddingLeft:"10%"},children:J.schoolReducer.schools.map((function(e,n){return Object(r.jsxs)("div",{children:[Object(r.jsxs)(Z,{children:["Graduate of ",e.studyField," at ",e.name]}),Object(r.jsx)($,{children:e.degree}),Object(r.jsxs)("div",{style:{marginTop:7},children:[Object(r.jsxs)(ee,{children:["From-",e.yearStarted]}),Object(r.jsxs)(ne,{children:["To-",e.yearEnded]})]}),Object(r.jsxs)(te,{children:["GPA-",e.GPA]}),Object(r.jsx)(re,{children:e.desc}),Object(r.jsx)(U,{onClick:function(e){return oe(e)},children:"Delete"})]})}))})})]})]})},W=t(18),J=t(21),M={schools:[]},Y=Object(W.b)({schoolReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case g:var t=e.schools;return t.unshift(n.payload),Object(J.a)(Object(J.a)({},e),{},{schools:t});case m:var r=e.schools,i=r.indexOf(n.payload);return r.splice(i,1),Object(J.a)(Object(J.a)({},e),{},{schools:r});default:return e}}}),_=Object(W.c)(Y),q=function(){return Object(r.jsx)(O.a,{store:_,children:Object(r.jsx)(s.a,{children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{exact:!0,path:"/",component:f}),Object(r.jsx)(l.a,{exact:!0,path:"/about",component:I})]})})})},K=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,71)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),r(e),i(e),c(e),o(e)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(q,{})}),document.getElementById("root")),K()}},[[70,1,2]]]);
//# sourceMappingURL=main.0b99b434.chunk.js.map