(this.webpackJsonpcs_project=this.webpackJsonpcs_project||[]).push([[0],{152:function(e,t,c){},153:function(e,t,c){},154:function(e,t,c){},155:function(e,t,c){},170:function(e,t,c){},171:function(e,t,c){},511:function(e,t,c){},512:function(e,t,c){},513:function(e,t,c){},514:function(e,t,c){},515:function(e,t,c){},516:function(e,t,c){},517:function(e,t,c){},518:function(e,t,c){},519:function(e,t,c){},521:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),i=c(43),a=c.n(i),r=(c(152),c(132)),j=c(9),l=(c(153),c(154),c(155),c(21)),d=c(1),o=Object(s.createContext)(),u=function(e){var t=e.reducer,c=e.initialState,n=e.children;return Object(d.jsxs)(o.Provider,{value:Object(s.useReducer)(t,c),children:[n," "]})},b=function(){return Object(s.useContext)(o)};var h=function(e){var t=e.group,s=e.title,n=e.description,i=e.demo,a=e.members,r=e.github,o=b(),u=Object(j.a)(o,2),h=(u[0].current,u[1]),O=c(157)();return Object(d.jsx)(l.b,{to:"/project",children:Object(d.jsxs)("div",{className:"card",onClick:function(){h({type:"ADD_TO_CURRENT",item:{group:t,title:s,description:n,demo:i,members:a,github:r}})},children:[Object(d.jsx)("div",{className:"group",style:{backgroundColor:O,color:"white",height:"30px",width:"70px"},children:Object(d.jsxs)("p",{children:["Group ",t," "]})}),Object(d.jsx)("h1",{children:s}),Object(d.jsx)("div",{className:"description",children:Object(d.jsx)("p",{children:n})})]})})},O=c(97),x=c.n(O),m=c(63),p=m.a.initializeApp({apiKey:"AIzaSyDsOpr3bNlASt1mOAdT7JkP25iJAlHOEg8",authDomain:"cs-class-f67db.firebaseapp.com",projectId:"cs-class-f67db",storageBucket:"cs-class-f67db.appspot.com",messagingSenderId:"301628251828",appId:"1:301628251828:web:e36adb426cd847689d41e1",measurementId:"G-D102J1WT0L"}).firestore(),v=m.a.auth();function g(){var e=b(),t=Object(j.a)(e,2),c=t[0].user;t[1];return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"left",children:[Object(d.jsx)(l.b,{to:"/",children:Object(d.jsx)("h1",{children:"CSII-Python"})}),Object(d.jsxs)("div",{className:"nav",children:[Object(d.jsx)(l.b,{to:"/home_projects",children:Object(d.jsx)("p",{children:"Projects"})}),Object(d.jsx)(l.b,{to:"/announcement",children:Object(d.jsx)("p",{children:"Announcements"})}),Object(d.jsx)(l.b,{to:"/students",children:Object(d.jsx)("p",{children:"Students"})})]}),Object(d.jsx)("div",{className:"left_bottoms",children:Object(d.jsx)(l.b,{to:"/profile",children:Object(d.jsxs)("div",{className:"left_bottom",children:[Object(d.jsx)(x.a,{}),Object(d.jsx)("p",{style:{fontSize:"14px"},children:c?null===c||void 0===c?void 0:c.email:"Guest"})]})})})]})})}var f=c(78),N=c.n(f),_=c(98),y=c.n(_),S=(c(170),c(26));var C=function(){var e=Object(S.f)(),t=Object(s.useState)(""),c=Object(j.a)(t,2),n=c[0],i=c[1],a=Object(s.useState)(""),r=Object(j.a)(a,2),o=r[0],u=r[1];return Object(d.jsxs)("div",{className:"login",children:[Object(d.jsx)(l.b,{to:"/",children:Object(d.jsx)("p",{className:"login_logo",children:"CSII - Python"})}),Object(d.jsxs)("div",{className:"login_container",children:[Object(d.jsx)("h1",{children:"SignIn"}),Object(d.jsxs)("form",{children:[Object(d.jsx)("h5",{children:"Email"}),Object(d.jsx)("input",{type:"email",value:n,onChange:function(e){return i(e.target.value)},placeholder:"Enter your Email address"}),Object(d.jsx)("h5",{children:"Password"}),Object(d.jsx)("input",{type:"password",value:o,onChange:function(e){return u(e.target.value)},placeholder:"Enter your Password"}),Object(d.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),v.signInWithEmailAndPassword(n,o).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login_signInButton",children:"Sign In"})]}),Object(d.jsx)(l.b,{to:"/signup",children:Object(d.jsx)("button",{className:"login_registerButton",children:"Create your Account"})})]})]})};var E=function(){var e=b(),t=Object(j.a)(e,2),c=t[0].user,n=(t[1],Object(s.useState)("")),i=Object(j.a)(n,2),a=i[0],r=i[1],o=Object(s.useState)([]),u=Object(j.a)(o,2),O=u[0],x=u[1];return Object(s.useEffect)((function(){p.collection("project-form").onSnapshot((function(e){return x(e.docs.map((function(e){return{data:e.data()}})))}))}),[]),console.log(O),Object(d.jsx)(d.Fragment,{children:c?Object(d.jsxs)("div",{className:"home",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)(g,{})}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsx)("div",{className:"right_header",children:Object(d.jsx)("h1",{children:"CSII-Projects"})}),Object(d.jsxs)("div",{className:"search_bar",children:[Object(d.jsx)("input",{type:"text",onChange:function(e){return r(e.target.value)},placeholder:"Search..."}),Object(d.jsx)("div",{className:"search_icon",children:Object(d.jsx)(N.a,{style:{fontSize:"50px",color:"#8ed460"}})})]}),Object(d.jsx)("div",{className:"cards",children:a?O.map((function(e){return e.data.projectName.toLowerCase().includes(a.toLowerCase())?Object(d.jsx)(h,{group:e.data.groupNumber,title:e.data.projectName,description:e.data.projectDescription,demo:e.data.projectDemo,members:e.data.teamMembers,github:e.data.github}):Object(d.jsx)(d.Fragment,{})})):O.map((function(e){return Object(d.jsx)(h,{group:e.data.groupNumber,title:e.data.projectName,description:e.data.projectDescription,demo:e.data.projectDemo,members:e.data.teamMembers,github:e.data.github})}))}),Object(d.jsx)("div",{className:"right_bottoms",children:Object(d.jsx)(l.b,{to:"/create_project",children:Object(d.jsx)(y.a,{style:{fontSize:"50px",color:"80b3ff"}})})})]})]}):Object(d.jsx)(C,{})})},D=(c(171),c(139)),k=c.n(D),P=c(140),I=c.n(P),T=c(545),A=c(546),w=c.p+"static/media/logo.48ac4a7c.png",F=c(135),L=c.n(F);var G=function(){var e=b(),t=Object(j.a)(e,2),c=t[0].user;return t[1],Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)(L.a,{style:{position:"absolute"},height:"95%",width:"95%",params:{particles:{color:{value:"#000000"},line_linked:{color:{value:"#000000"}},number:{value:50},size:{value:3}}}}),Object(d.jsxs)("div",{className:"homes",children:[Object(d.jsxs)("div",{className:"home__header",children:[Object(d.jsx)("div",{className:"home__headerLeft",children:Object(d.jsx)(l.b,{to:!c&&"/login",children:Object(d.jsx)(T.a,{onClick:function(){c&&v.signOut()},className:"search__buttonsHidden",children:c?"Sign Out":"Sign In"})})}),Object(d.jsxs)("div",{className:"home__headerRight",children:[Object(d.jsx)(A.a,{}),Object(d.jsxs)("p",{style:{color:"black"},children:["Hello ",c?null===c||void 0===c?void 0:c.email:"Guest"]})]})]}),Object(d.jsxs)("div",{className:"home__body",children:[Object(d.jsx)("img",{src:w,alt:""}),Object(d.jsx)("div",{className:"home__inputContainer",children:Object(d.jsxs)("form",{className:"search",children:[Object(d.jsxs)("div",{className:"search__input",children:[Object(d.jsx)(k.a,{className:"search__inputIcon"}),Object(d.jsx)("input",{}),Object(d.jsx)(I.a,{style:{color:"gray"}})]}),Object(d.jsxs)("div",{className:"search__buttons",children:[Object(d.jsx)(l.b,{to:"/home_projects",children:Object(d.jsx)(T.a,{className:"search__buttonsHidden",type:"submit",variant:"outlined",children:"Search Projects"})}),Object(d.jsx)(l.b,{to:"/students",children:Object(d.jsx)(T.a,{className:"search__buttonsHidden",variant:"outlined",children:"Search Students"})})]})]})})]})]})]})},R=c(40),U=(c(511),c(547)),B=c(543),H=c(544),z=(c(512),Object(s.forwardRef)((function(e,t){var c=e.message,s=e.username===(null===c||void 0===c?void 0:c.username);return Object(d.jsx)("div",{ref:t,className:"message? ".concat(s&&"message_user"),children:Object(d.jsx)(U.a,{className:s?"message_userCard":"message_guestCard",children:Object(d.jsx)(B.a,{children:Object(d.jsxs)(H.a,{color:"white",variant:"h5",component:"h2",children:[null===c||void 0===c?void 0:c.username,": ",null===c||void 0===c?void 0:c.message]})})})})}))),M=c(141);var J=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)([]),a=Object(j.a)(i,2),r=a[0],l=a[1],o=b(),u=Object(j.a)(o,2),h=u[0].user;return u[1],Object(s.useEffect)((function(){p.collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return l(e.docs.map((function(e){return{id:e.id,message:e.data()}})))}))}),[]),console.log(r),Object(d.jsxs)("div",{className:"announcements left",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)(g,{})}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsx)("div",{className:"right_header",children:Object(d.jsx)("h1",{children:"CSII-Announcements"})}),Object(d.jsx)(M.a,{children:r.map((function(e){var t=e.id,c=e.message;return Object(d.jsx)(z,{username:null===h||void 0===h?void 0:h.email,message:c},t)}))}),Object(d.jsx)("div",{className:"announcements_bottom",children:Object(d.jsxs)("form",{className:"post_commentBox",children:[Object(d.jsx)("input",{className:"post_input",type:"text",placeholder:"Add a comment...",value:c,onChange:function(e){return n(e.target.value)}}),Object(d.jsx)("button",{className:"post_button",type:"submit",onClick:function(e){e.preventDefault(),p.collection("messages").add({message:c,username:null===h||void 0===h?void 0:h.email,timestamp:m.a.firestore.FieldValue.serverTimestamp()}),l([].concat(Object(R.a)(r),[{username:h.email,text:c}])),n("")},disabled:!c,children:"Post"})]})})]})]})},W=(c(513),c(514),c(143)),K=c.n(W),V=c(142),Y=c.n(V),q=c(144),Q=c.n(q);var X=function(e){var t=e.image,c=e.name,s=e.para,n=e.address,i=e.email,a=e.github,r=e.graduation,o=e.linkedln,u=e.phone,h=e.university,O=b(),x=Object(j.a)(O,2),m=(x[0].current,x[1]);return Object(d.jsx)(l.b,{to:"/students_profile",children:Object(d.jsxs)("div",{className:"student_card",onClick:function(){m({type:"ADD_TO_CURRENT",item:{image:t,name:c,para:s,address:n,email:i,github:a,graduation:r,linkedln:o,phone:u,university:h}})},children:[Object(d.jsx)("div",{className:"image",children:Object(d.jsx)("img",{src:t})}),Object(d.jsxs)("div",{className:"describe",children:[Object(d.jsx)("h1",{children:c}),Object(d.jsx)("p",{children:s})]}),Object(d.jsxs)("div",{className:"icons",children:[Object(d.jsx)(Y.a,{}),Object(d.jsx)(K.a,{}),Object(d.jsx)(Q.a,{})]})]})})};var Z=function(){var e=b(),t=Object(j.a)(e,2),c=t[0].user,n=(t[1],Object(s.useState)([])),i=Object(j.a)(n,2),a=i[0],r=i[1],l=Object(s.useState)(""),o=Object(j.a)(l,2),u=o[0],h=o[1];return Object(s.useEffect)((function(){p.collection("contact-form").onSnapshot((function(e){return r(e.docs.map((function(e){return{data:e.data()}})))}))}),[]),Object(d.jsx)(d.Fragment,{children:c?Object(d.jsxs)("div",{className:"students",children:[Object(d.jsx)("div",{className:"left left_stud",children:Object(d.jsx)(g,{})}),Object(d.jsxs)("div",{className:"right right_stud",children:[Object(d.jsx)("div",{className:"right_header",children:Object(d.jsx)("h1",{children:"CSII-Students"})}),Object(d.jsxs)("div",{className:"search_bar",children:[Object(d.jsx)("input",{type:"text",onChange:function(e){return h(e.target.value)},placeholder:"Search..."}),Object(d.jsx)("div",{className:"search_icon",children:Object(d.jsx)(N.a,{style:{fontSize:"50px",color:"#ff8080"}})})]}),Object(d.jsx)("div",{className:"student_cards",children:u?a.map((function(e){return(e.data.firstName+" "+e.data.lastName).toLowerCase().includes(u.toLowerCase())?Object(d.jsx)(X,{image:e.data.image,name:e.data.firstName+" "+e.data.lastName,para:e.data.skills,address:e.data.address,email:e.data.email,github:e.data.github,graduation:e.data.graduation,linkedln:e.data.linkedln,phone:e.data.phone,university:e.data.university}):Object(d.jsx)(d.Fragment,{})})):a.map((function(e){return Object(d.jsx)(X,{image:e.data.image,name:e.data.firstName+" "+e.data.lastName,para:e.data.skills,address:e.data.address,email:e.data.email,github:e.data.github,graduation:e.data.graduation,linkedln:e.data.linkedln,phone:e.data.phone,university:e.data.university})}))})]})]}):Object(d.jsx)(C,{})})};c(515);var $=function(){var e=Object(S.f)(),t=Object(s.useState)(""),c=Object(j.a)(t,2),n=c[0],i=c[1],a=Object(s.useState)(""),r=Object(j.a)(a,2),o=r[0],u=r[1],b=Object(s.useState)(""),h=Object(j.a)(b,2),O=h[0],x=h[1],m=Object(s.useState)(""),g=Object(j.a)(m,2),f=g[0],N=g[1],_=Object(s.useState)(""),y=Object(j.a)(_,2),C=y[0],E=y[1],D=Object(s.useState)(""),k=Object(j.a)(D,2),P=k[0],I=k[1],T=Object(s.useState)(""),A=Object(j.a)(T,2),w=A[0],F=A[1],L=Object(s.useState)(""),G=Object(j.a)(L,2),R=G[0],U=G[1],B=Object(s.useState)(""),H=Object(j.a)(B,2),z=H[0],M=H[1],J=Object(s.useState)(""),W=Object(j.a)(J,2),K=W[0],V=W[1],Y=Object(s.useState)(""),q=Object(j.a)(Y,2),Q=q[0],X=q[1],Z=Object(s.useState)(""),$=Object(j.a)(Z,2),ee=$[0],te=$[1];return Object(d.jsxs)("div",{className:"signup",children:[Object(d.jsx)("h1",{children:"Create Account"}),Object(d.jsxs)("div",{className:"div_sign",children:[Object(d.jsx)("p",{children:"First Name"}),Object(d.jsx)("input",{type:"text",value:n,onChange:function(e){return i(e.target.value)},placeholder:"Enter your First Name"})]}),Object(d.jsxs)("div",{className:"div_sign",children:[Object(d.jsx)("p",{children:"Last Name"}),Object(d.jsx)("input",{type:"text",value:o,onChange:function(e){return u(e.target.value)},placeholder:"Enter your Last Name"})]}),Object(d.jsxs)("div",{className:"div_sign",children:[Object(d.jsx)("p",{children:"Email address"}),Object(d.jsx)("input",{type:"email",value:O,onChange:function(e){return x(e.target.value)},placeholder:"Enter your Email address"})]}),Object(d.jsxs)("div",{className:"div_sign",children:[Object(d.jsx)("p",{children:"Password"}),Object(d.jsx)("input",{type:"password",value:f,onChange:function(e){return N(e.target.value)},placeholder:"Enter your First Name"})]}),Object(d.jsxs)("div",{className:"div_sign",children:[Object(d.jsx)("p",{children:"Address"}),Object(d.jsx)("input",{type:"text",value:C,onChange:function(e){return E(e.target.value)},placeholder:"Enter your Full Address"})]}),Object(d.jsxs)("div",{className:"div_sign",children:[Object(d.jsx)("p",{children:"Phone No."}),Object(d.jsx)("input",{type:"text",value:P,onChange:function(e){return I(e.target.value)},placeholder:"Enter your Phone Number"})]}),Object(d.jsxs)("div",{className:"div_sign",children:[Object(d.jsx)("p",{children:"University Attending"}),Object(d.jsx)("input",{type:"text",value:w,onChange:function(e){return F(e.target.value)},placeholder:"Name of the University"})]}),Object(d.jsxs)("div",{className:"div_sign",children:[Object(d.jsx)("p",{children:"Expected Graduation"}),Object(d.jsx)("input",{type:"text",value:R,onChange:function(e){return U(e.target.value)},placeholder:"Month-Year"})]}),Object(d.jsxs)("div",{className:"div_sign",children:[Object(d.jsx)("p",{children:"Skills"}),Object(d.jsx)("input",{type:"text",value:z,onChange:function(e){return M(e.target.value)},placeholder:"Enter your Skills"})]}),Object(d.jsxs)("div",{className:"div_sign",children:[Object(d.jsx)("p",{children:"Linkedln URL"}),Object(d.jsx)("input",{type:"text",value:K,onChange:function(e){return V(e.target.value)},placeholder:"Enter your Linkedln URL"})]}),Object(d.jsxs)("div",{className:"div_sign",children:[Object(d.jsx)("p",{children:"GitHub URL"}),Object(d.jsx)("input",{type:"text",value:Q,onChange:function(e){return X(e.target.value)},placeholder:"Enter your GitHub URL"})]}),Object(d.jsxs)("div",{className:"div_sign",children:[Object(d.jsx)("p",{children:"Upload a link of your image"}),Object(d.jsx)("input",{type:"text",value:ee,onChange:function(e){return te(e.target.value)},placeholder:"Enter your URL for the image"})]}),Object(d.jsx)("div",{className:"submit",children:Object(d.jsx)(l.b,{to:"/",children:Object(d.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),v.createUserWithEmailAndPassword(O,f).then((function(t){console.log(t),t&&e.push("/")})).catch((function(e){return alert(e.message)})),p.collection("contact-form").doc().set({firstName:n,lastName:o,email:O,address:C,phone:P,university:w,graduation:R,skills:z,linkedln:K,github:Q,image:ee}).then((function(){i(""),u(""),x(""),I(""),F(""),U(""),M(""),V(""),X(""),te("")}))},children:"Submit"})})})]})};c(516);var ee=function(){var e=b(),t=Object(j.a)(e,2),c=t[0].current;return t[1],Object(d.jsx)("div",{className:"project",children:c.map((function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)(g,{})}),Object(d.jsxs)("div",{className:"right_project right",children:[Object(d.jsx)("h1",{children:null===e||void 0===e?void 0:e.title}),Object(d.jsxs)("div",{className:"description_project pro",children:[Object(d.jsx)("h1",{children:"Description of the Project:"}),Object(d.jsx)("p",{children:null===e||void 0===e?void 0:e.description})]}),Object(d.jsxs)("div",{className:"demo_project pro",children:[Object(d.jsx)("h1",{children:"Demo of the Project:"}),Object(d.jsx)("p",{children:null===e||void 0===e?void 0:e.demo})]}),Object(d.jsxs)("div",{className:"member",children:[Object(d.jsx)("h1",{children:"Team Members"}),Object(d.jsxs)("p",{children:["\u29bf ",null===e||void 0===e?void 0:e.members]})]}),Object(d.jsxs)("div",{className:"link",children:[Object(d.jsx)("h1",{children:"Github:"}),Object(d.jsx)("p",{children:null===e||void 0===e?void 0:e.github})]})]})]})}))})};c(517);var te=function(){var e=b(),t=Object(j.a)(e,2),c=t[0].current,n=(t[1],Object(s.useState)("")),i=Object(j.a)(n,2),a=(i[0],i[1]);return Object(s.useEffect)((function(){p.collection("contact-form").onSnapshot((function(e){return a(e.docs.map((function(e){return{data:e.data()}})))}))}),[]),Object(d.jsx)("div",{className:"students_profile",children:c.map((function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"head",children:[Object(d.jsx)("img",{src:null===e||void 0===e?void 0:e.image}),Object(d.jsxs)("div",{className:"top",children:[Object(d.jsx)("h1",{children:null===e||void 0===e?void 0:e.name}),Object(d.jsx)("p",{children:"Software Developer"})]})]}),Object(d.jsxs)("div",{className:"bunch",children:[Object(d.jsxs)("div",{className:"edu_info",children:[Object(d.jsxs)("div",{className:"education",children:[Object(d.jsx)("h1",{children:" Education "}),Object(d.jsxs)("p",{children:["University: ",null===e||void 0===e?void 0:e.university]}),Object(d.jsx)("p",{children:" Bachelor's in Computer Science "}),Object(d.jsx)("p",{children:" GPA : 3.67 "}),Object(d.jsxs)("p",{children:[" Expected Graduation: ",null===e||void 0===e?void 0:e.graduation]})]}),Object(d.jsxs)("div",{className:"experience",children:[Object(d.jsxs)("div",{className:"experience_list",children:[Object(d.jsx)("h1",{children:"Experience Title"}),Object(d.jsx)("p",{children:"Experience Description goes continuing......."}),Object(d.jsx)("p",{children:"Date: 09-2020 to 10-2021 "})]}),Object(d.jsxs)("div",{className:"experience_list",children:[Object(d.jsx)("h1",{children:"Experience Title"}),Object(d.jsx)("p",{children:"Experience Description goes continuing......."}),Object(d.jsx)("p",{children:"Date: 09-2020 to 10-2021 "})]})]}),Object(d.jsxs)("div",{className:"skills",children:[Object(d.jsx)("h1",{children:"Skills"}),Object(d.jsx)("div",{className:"skills_list",children:Object(d.jsx)("button",{children:null===e||void 0===e?void 0:e.para})})]})]}),Object(d.jsxs)("div",{className:"bunc",children:[Object(d.jsxs)("div",{className:"info",children:[Object(d.jsx)("h1",{children:"Personal Info "}),Object(d.jsxs)("p",{children:["Address: ",null===e||void 0===e?void 0:e.address]}),Object(d.jsxs)("p",{children:["Phone: ",null===e||void 0===e?void 0:e.phone]}),Object(d.jsxs)("p",{children:["Email: ",null===e||void 0===e?void 0:e.email]}),Object(d.jsxs)("p",{children:["GitHub : ",null===e||void 0===e?void 0:e.github]}),Object(d.jsxs)("p",{children:["Linkedin: ",null===e||void 0===e?void 0:e.linkedln]})]}),Object(d.jsxs)("div",{className:"projects",children:[Object(d.jsxs)("div",{className:"projects_list",children:[Object(d.jsx)("h1",{children:"Project Title"}),Object(d.jsx)("p",{children:"Project Description goes continuing......."}),Object(d.jsx)("p",{children:"Date: 09-2020 to 10-2021 "})]}),Object(d.jsxs)("div",{className:"projects_list",children:[Object(d.jsx)("h1",{children:"Project Title"}),Object(d.jsx)("p",{children:"Project Description goes continuing......."}),Object(d.jsx)("p",{children:"Date: 09-2020 to 10-2021 "})]})]})]})]})]})}))})};c(518);var ce=function(){var e=b(),t=Object(j.a)(e,2),c=t[0].user,n=(t[1],Object(s.useState)([])),i=Object(j.a)(n,2),a=i[0],r=i[1],l=Object(s.useState)([]),o=Object(j.a)(l,2);return o[0],o[1],Object(s.useEffect)((function(){p.collection("contact-form").onSnapshot((function(e){return r(e.docs.map((function(e){return{data:e.data()}})))}))}),[]),Object(d.jsx)("div",{className:"students_profile",children:a.map((function(e){return e.data.email==c.email?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"head",children:[console.log("information",e.data.email),Object(d.jsx)("img",{src:null===e||void 0===e?void 0:e.data.image}),Object(d.jsx)("div",{className:"top",children:Object(d.jsxs)("h1",{children:[null===e||void 0===e?void 0:e.data.firstName," ",null===e||void 0===e?void 0:e.data.lastName]})})]}),Object(d.jsxs)("div",{className:"bunch",children:[Object(d.jsxs)("div",{className:"edu_info",children:[Object(d.jsxs)("div",{className:"education",children:[Object(d.jsx)("h1",{children:" Education "}),Object(d.jsx)("p",{children:" Bachelor's in Computer Science "}),Object(d.jsx)("p",{children:" GPA : 3.67 "}),Object(d.jsxs)("p",{children:[" Expected Graduation: ",null===e||void 0===e?void 0:e.data.graduation]})]}),Object(d.jsxs)("div",{className:"experience",children:[Object(d.jsxs)("div",{className:"experience_list",children:[Object(d.jsx)("h1",{children:"Experience Title"}),Object(d.jsx)("p",{children:"Experience Description goes continuing......."}),Object(d.jsx)("p",{children:"Date: 09-2020 to 10-2021 "})]}),Object(d.jsxs)("div",{className:"experience_list",children:[Object(d.jsx)("h1",{children:"Experience Title"}),Object(d.jsx)("p",{children:"Experience Description goes continuing......."}),Object(d.jsx)("p",{children:"Date: 09-2020 to 10-2021 "})]})]}),Object(d.jsxs)("div",{className:"skills",children:[Object(d.jsx)("h1",{children:"Skills"}),Object(d.jsx)("div",{className:"skills_list",children:Object(d.jsx)("button",{children:null===e||void 0===e?void 0:e.data.skills})})]})]}),Object(d.jsxs)("div",{className:"bunc",children:[Object(d.jsxs)("div",{className:"info",children:[Object(d.jsx)("h1",{children:"Personal Info "}),Object(d.jsxs)("p",{children:["Address: ",null===e||void 0===e?void 0:e.data.address," "]}),Object(d.jsxs)("p",{children:["Phone: ",null===e||void 0===e?void 0:e.data.phone]}),Object(d.jsxs)("p",{children:["Email: ",null===e||void 0===e?void 0:e.data.email]}),Object(d.jsxs)("p",{children:["GitHub : ",null===e||void 0===e?void 0:e.data.github]}),Object(d.jsxs)("p",{children:["Linkedin: ",null===e||void 0===e?void 0:e.data.linkedln]})]}),Object(d.jsxs)("div",{className:"projects",children:[Object(d.jsxs)("div",{className:"projects_list",children:[Object(d.jsx)("h1",{children:"Project Title"}),Object(d.jsx)("p",{children:"Project Description goes continuing......."}),Object(d.jsx)("p",{children:"Date: 09-2020 to 10-2021 "})]}),Object(d.jsxs)("div",{className:"projects_list",children:[Object(d.jsx)("h1",{children:"Project Title"}),Object(d.jsx)("p",{children:"Project Description goes continuing......."}),Object(d.jsx)("p",{children:"Date: 09-2020 to 10-2021 "})]})]})]})]})]}):Object(d.jsx)(d.Fragment,{})}))})};c(519);var se=function(){var e=Object(S.f)(),t=Object(s.useState)(""),c=Object(j.a)(t,2),n=c[0],i=c[1],a=Object(s.useState)(""),r=Object(j.a)(a,2),l=r[0],o=r[1],u=Object(s.useState)(""),b=Object(j.a)(u,2),h=b[0],O=b[1],x=Object(s.useState)(""),m=Object(j.a)(x,2),v=m[0],g=m[1],f=Object(s.useState)(""),N=Object(j.a)(f,2),_=N[0],y=N[1],C=Object(s.useState)(""),E=Object(j.a)(C,2),D=E[0],k=E[1];return Object(d.jsxs)("div",{className:"signup",children:[Object(d.jsx)("h1",{children:"Create Project"}),Object(d.jsxs)("div",{className:"div_sign create",children:[Object(d.jsx)("p",{children:"Project Name"}),Object(d.jsx)("input",{type:"text",value:l,onChange:function(e){return o(e.target.value)},placeholder:"Enter your Project Name"})]}),Object(d.jsxs)("div",{className:"div_sign create",children:[Object(d.jsx)("p",{children:"Group Number"}),Object(d.jsx)("input",{type:"text",value:n,onChange:function(e){return i(e.target.value)},placeholder:"Enter your Project Name"})]}),Object(d.jsxs)("div",{className:"div_sign create",children:[Object(d.jsx)("p",{children:"Project Description"}),Object(d.jsx)("input",{type:"text",value:h,onChange:function(e){return O(e.target.value)},placeholder:"Enter your Project Description"})]}),Object(d.jsxs)("div",{className:"div_sign create",children:[Object(d.jsx)("p",{children:"Project Demo"}),Object(d.jsx)("input",{type:"text",value:v,onChange:function(e){return g(e.target.value)},placeholder:"Enter your Project Demo"})]}),Object(d.jsxs)("div",{className:"div_sign create",children:[Object(d.jsx)("p",{children:"Team Members"}),Object(d.jsx)("input",{type:"text",value:_,onChange:function(e){return y(e.target.value)},placeholder:"Enter your First Name"})]}),Object(d.jsxs)("div",{className:"div_sign create",children:[Object(d.jsx)("p",{children:"Github"}),Object(d.jsx)("input",{type:"text",value:D,onChange:function(e){return k(e.target.value)},placeholder:"Enter your Github"})]}),Object(d.jsx)("div",{className:"submit",children:Object(d.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),p.collection("project-form").doc().set({groupNumber:n,projectName:l,projectDescription:h,projectDemo:v,teamMembers:_,github:D}).then((function(){o(""),O(""),g(""),y(""),k("")})),e.push("/home_projects")},children:"Submit"})})]})};var ne=function(){var e=b(),t=Object(j.a)(e,2);Object(r.a)(t[0]);var c=t[1];return Object(s.useEffect)((function(){v.onAuthStateChanged((function(e){c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(d.jsx)(l.a,{children:Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(S.c,{children:[Object(d.jsx)(S.a,{path:"/create_project",children:Object(d.jsx)(se,{})}),Object(d.jsx)(S.a,{path:"/profile",children:Object(d.jsx)(ce,{})}),Object(d.jsx)(S.a,{path:"/students_profile",children:Object(d.jsx)(te,{})}),Object(d.jsx)(S.a,{path:"/project",children:Object(d.jsx)(ee,{})}),Object(d.jsx)(S.a,{path:"/signup",children:Object(d.jsx)($,{})}),Object(d.jsx)(S.a,{path:"/login",children:Object(d.jsx)(C,{})}),Object(d.jsx)(S.a,{path:"/students",children:Object(d.jsx)(Z,{})}),Object(d.jsx)(S.a,{path:"/announcement",children:Object(d.jsx)(J,{})}),Object(d.jsx)(S.a,{path:"/home_projects",children:Object(d.jsx)(E,{})}),Object(d.jsx)(S.a,{path:"/",children:Object(d.jsx)(G,{})})]})})})},ie=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,548)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),i(e),a(e)}))},ae=c(50),re=function(e,t){switch(t.type){case"ADD_TO_CURRENT":return Object(ae.a)(Object(ae.a)({},e),{},{current:[t.item]});case"SET_USER":return Object(ae.a)(Object(ae.a)({},e),{},{user:t.user});case"SET_INFO":return Object(ae.a)(Object(ae.a)({},e),{},{prof_info:t.prof_info});default:return e}};a.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(u,{initialState:{user:null,prof_info:[],current:[]},reducer:re,children:Object(d.jsx)(ne,{})})}),document.getElementById("root")),ie()}},[[521,1,2]]]);
//# sourceMappingURL=main.3053e6f1.chunk.js.map