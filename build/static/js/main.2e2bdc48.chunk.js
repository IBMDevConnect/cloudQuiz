(this.webpackJsonpquiz21=this.webpackJsonpquiz21||[]).push([[0],{118:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(28),s=c.n(a),i=(c(37),c(13)),r=c.n(i),o=c(29),l=c(32),u=c(14),j=c(3),d=c(1),b=function(e){var t=e.showAnswers,c=e.handleAnswer,n=e.current,a=e.total,s=e.handleNextQuestion,i=e.quizTitle,r=e.showTips,o=e.data,l=o.question,u=o.correct_answer,j=o.answers,b=o.tip;return Object(d.jsxs)("div",{className:"flex flex-col",children:[Object(d.jsx)("div",{className:"text-5xl font-black self-center p-5",children:Object(d.jsx)("h1",{children:i})}),Object(d.jsx)("div",{className:"mb-2",children:Object(d.jsxs)("h1",{className:"font-semibold",children:[n+1,"/",a]})}),Object(d.jsx)("div",{className:"bg-white text-purple-800 p-10 rounded-lg shadow-md",children:Object(d.jsx)("h2",{className:"text-2xl",dangerouslySetInnerHTML:{__html:l}})}),Object(d.jsx)("div",{className:"grid grid-cols-2 gap-6 mt-6 ",children:j.map((function(e){var n=t?e===u?"bg-green-500":"bg-red-500":"bg-white",a=t?"text-white":"text-purple-800";return Object(d.jsx)("button",{className:" p-4 ".concat(a," rounded shadow font-semibold ").concat(n),dangerouslySetInnerHTML:{__html:e},onClick:function(){return c(e)}},e)}))}),Object(d.jsx)("button",{className:"ml-auto mt-6 bg-purple-700 text-white p-4 font-semibold rounded shadow ".concat(t?"visible":"invisible"),onClick:s,children:"Next Question"}),r&&Object(d.jsx)("div",{className:"font-light self-center p-4",children:"Tip: ".concat(b)})]})},h=c(30),O=c.n(h),x=function(e){var t=e.handleSubmit,c=e.loading,a=e.emailExists,s=Object(n.useState)(""),i=Object(j.a)(s,2),r=i[0],o=i[1],l=Object(n.useState)(""),u=Object(j.a)(l,2),b=u[0],h=u[1],x=Object(n.useState)(""),p=Object(j.a)(x,2),m=p[0],f=p[1],g=Object(n.useState)("Datascience"),w=Object(j.a)(g,2),v=w[0],y=w[1],S=Object(n.useState)(),N=Object(j.a)(S,2),k=N[0],T=N[1],C=Object(n.useState)(),q=Object(j.a)(C,2),E=q[0],_=q[1],L=Object(n.useState)(),z=Object(j.a)(L,2),A=z[0],D=z[1],I=Object(n.useState)(),J=Object(j.a)(I,2),Q=J[0],H=J[1],M=Object(n.useState)(!1),P=Object(j.a)(M,2),U=P[0],B=P[1],F=Object(n.useState)(),R=Object(j.a)(F,2),V=R[0],W=R[1];Object(n.useLayoutEffect)((function(){fetch("".concat("https://shiny-turtle.mybluemix.net/","api/getconf")).then((function(e){return e.json()})).then((function(e){f(e.categories),T(e.userPick),_(e.quizTitle),D(e.showAnswers),H(e.showTips)})).catch((function(e){W("Unable to get config, refresh page or report this issue back to us")}))}),[]),Object(n.useLayoutEffect)((function(){h(""),B(!1)}),[a]);return Object(d.jsx)("div",{className:"bg-black text-purple-800 p-10 lg:p-40 rounded-lg shadow-md bg-opacity-20 flex flex-row place-items-center",children:Object(d.jsxs)("div",{className:"space-y-5",children:[Object(d.jsx)("div",{className:"text-3xl font-sans text-white self-center p-5",children:E}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"text",value:r,onChange:function(e){return o(e.target.value)},id:"uname",className:"rounded text-black px-14 py-2 placeholder-gray-400 shadow-md",placeholder:"Name"})}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"email",value:b,onChange:function(e){return function(e,t){t(e.target.value.toLowerCase()),O.a.isEmail(b)&&B(!0)}(e,h)},id:"email",className:"rounded text-black px-14 py-2 placeholder-gray-400 shadow-md",placeholder:"Company Email"},"email".concat(a))}),Object(d.jsx)("div",{children:m&&k&&Object(d.jsx)("select",{className:"rounded text-black px-20 py-2 placeholder-gray-400 shadow-md",value:v,onChange:function(e){y(e.target.value)},children:m.map((function(e){return Object(d.jsx)("option",{value:e,children:e},e)}))})}),Object(d.jsx)("div",{className:"flex flex-row place-items-center",children:Object(d.jsx)("button",{className:" p-3 px-14 font-semibold rounded shadow ".concat(U?"bg-purple-700 text-gray-100 ":"bg-purple-400 text-white cursor-not-allowed"),disabled:!U,onClick:function(){return t(r,b,v,A,Q,E)},children:"START"},"start".concat(b))}),c&&Object(d.jsx)("div",{className:"font-light self-center p-2 text-white",children:Object(d.jsx)("p",{children:"Verifying your email"})}),a&&!U&&Object(d.jsx)("div",{className:"font-medium self-center p-2 text-white",children:Object(d.jsxs)("p",{children:["Looks like your email already exists,",Object(d.jsx)("br",{}),"you cannot retake this quiz",Object(d.jsx)("br",{})]})},"email".concat(a).concat(b)),Object(d.jsx)("div",{className:"text-red-400",children:Object(d.jsx)("p",{children:V})})]})})},p=c(31),m=c.n(p);var f=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),i=Object(j.a)(s,2),h=i[0],O=i[1],p=Object(n.useState)(0),f=Object(j.a)(p,2),g=f[0],w=f[1],v=Object(n.useState)(!1),y=Object(j.a)(v,2),S=y[0],N=y[1],k=Object(n.useState)(),T=Object(j.a)(k,2),C=T[0],q=T[1],E=Object(n.useState)(),_=Object(j.a)(E,2),L=_[0],z=_[1],A=Object(n.useState)(),D=Object(j.a)(A,2),I=D[0],J=D[1],Q=Object(n.useState)("Datascience"),H=Object(j.a)(Q,2),M=H[0],P=H[1],U=Object(n.useState)(),B=Object(j.a)(U,2),F=B[0],R=B[1],V=Object(n.useState)(),W=Object(j.a)(V,2),Y=W[0],G=W[1],K=Object(n.useState)(!1),X=Object(j.a)(K,2),Z=X[0],$=X[1],ee=Object(n.useState)(),te=Object(j.a)(ee,2),ce=te[0],ne=te[1],ae=Object(n.useState)(),se=Object(j.a)(ae,2),ie=se[0],re=se[1],oe=Object(n.useState)(),le=Object(j.a)(oe,2),ue=le[0],je=le[1],de="https://shiny-turtle.mybluemix.net/";Object(n.useEffect)((function(){var e="".concat(de,"api/questions/").concat(M);fetch(e).then((function(e){return e.json()})).then((function(e){var t=e.results.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{answers:[e.correct_answer].concat(Object(l.a)(e.incorrect_answers)).sort((function(){return Math.random()-.5}))})}));a(t),O(0)}))}),[M]);var be=function(){N(!1),O(h+1)},he=function(){var e=Object(o.a)(r.a.mark((function e(t,c,n,a,s,i){var o,l,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ne(!0),e.next=3,fetch("".concat(de,"api/checkemail"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c,category:n})});case 3:return o=e.sent,e.next=6,o;case 6:return l=e.sent,e.next=9,l.json();case 9:u=e.sent,$(!u.result),re(u.result),ne(!1),R(t),G(c),P(n),q(a),z(s),J(i);case 19:case"end":return e.stop()}}),e)})));return function(t,c,n,a,s,i){return e.apply(this,arguments)}}();return Z?c.length>5?h>=c.length?Object(d.jsxs)("div",{children:[g>=7?Object(d.jsx)(m.a,{width:window.innerWidth,height:window.innerHeight,recycle:!1}):"",Object(d.jsxs)("h1",{className:"text-3xl text-white font-bold",children:[F,", Your score was ",g," !"]}),function(e){if(e){var t=Date.now(),c=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(t),n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:F,email:Y,score:g,category:M,time:c})};fetch("".concat(de,"api/postresults"),n).catch((function(e){je("there was an error while posting your score,please retry")}))}}(!0),ue&&Object(d.jsx)("p",{className:"text-red-400",children:ue})]}):Object(d.jsx)("div",{className:"container p-2 mt-0.1",children:Object(d.jsx)(b,{current:h,total:c.length,data:c[h],showAnswers:S,handleAnswer:function(e){S||e===c[h].correct_answer&&w(g+1),C?N(!0):be()},handleNextQuestion:be,quizTitle:I,showTips:L})}):Object(d.jsx)("p",{className:"font-semibold",children:"Loading Questions.."}):Object(d.jsx)("div",{children:Object(d.jsx)(x,{handleSubmit:he,loading:ce,emailExists:ie})})};s.a.render(Object(d.jsx)(f,{}),document.getElementById("root"))},37:function(e,t,c){}},[[118,1,2]]]);
//# sourceMappingURL=main.2e2bdc48.chunk.js.map