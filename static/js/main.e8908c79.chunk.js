(this["webpackJsonpfrbase-test"]=this["webpackJsonpfrbase-test"]||[]).push([[0],{204:function(e,t,a){"use strict";a.r(t);var r=a(28),c=a(2),s=a.n(c),n=a(30),i=a.n(n),o=a(21),j=a.n(o),d=a(25),b=a(13),u=a(210),l=a(208),O=a(209),p=a(206),h=a(29),x=(a(96),{apiKey:"AIzaSyCAZynAv2Xs7js7XiSC03Qhy3zu-2A-QoE",authDomain:"good-share-ebef7.firebaseapp.com",databaseURL:"https://good-share-ebef7-default-rtdb.europe-west1.firebasedatabase.app",projectId:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyCAZynAv2Xs7js7XiSC03Qhy3zu-2A-QoE",REACT_APP_FIREBASE_AUTH_DOMAIN:"good-share-ebef7.firebaseapp.com",REACT_APP_FIREBASE_DATABASE_URL:"https://good-share-ebef7-default-rtdb.europe-west1.firebasedatabase.app"}).REACT_APP_FIREBASE_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyCAZynAv2Xs7js7XiSC03Qhy3zu-2A-QoE",REACT_APP_FIREBASE_AUTH_DOMAIN:"good-share-ebef7.firebaseapp.com",REACT_APP_FIREBASE_DATABASE_URL:"https://good-share-ebef7-default-rtdb.europe-west1.firebasedatabase.app"}).REACT_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyCAZynAv2Xs7js7XiSC03Qhy3zu-2A-QoE",REACT_APP_FIREBASE_AUTH_DOMAIN:"good-share-ebef7.firebaseapp.com",REACT_APP_FIREBASE_DATABASE_URL:"https://good-share-ebef7-default-rtdb.europe-west1.firebasedatabase.app"}).REACT_APP_FIREBASE_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyCAZynAv2Xs7js7XiSC03Qhy3zu-2A-QoE",REACT_APP_FIREBASE_AUTH_DOMAIN:"good-share-ebef7.firebaseapp.com",REACT_APP_FIREBASE_DATABASE_URL:"https://good-share-ebef7-default-rtdb.europe-west1.firebasedatabase.app"}).REACT_APP_FIREBASE_APP_ID}),f=h.a.initializeApp(x),A=f.auth(),E=a(3),m=s.a.createContext();function _(){return Object(c.useContext)(m)}function S(e){var t=e.children,a=Object(c.useState)(),r=Object(b.a)(a,2),s=r[0],n=r[1],i=Object(c.useState)(!0),o=Object(b.a)(i,2),j=o[0],d=o[1];Object(c.useEffect)((function(){return A.onAuthStateChanged((function(e){n(e),d(!1)}))}),[]);var u={currentUser:s,login:function(e,t){return A.signInWithEmailAndPassword(e,t)},signup:function(e,t){return A.createUserWithEmailAndPassword(e,t)},logout:function(){return A.signOut()},resetPassword:function(e){return A.sendPasswordResetEmail(e)},updateEmail:function(e){return A.currentUser.updateEmail(e)},updatePassword:function(e){return A.currentUser.updatePassword(e)}};return Object(E.jsx)(m.Provider,{value:u,children:!j&&t})}var v=a(12),P=a(16),R=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),r=_().signup,s=Object(c.useState)(""),n=Object(b.a)(s,2),i=n[0],o=n[1],h=Object(c.useState)(!1),x=Object(b.a)(h,2),f=x[0],A=x[1],m=Object(v.g)();function S(){return(S=Object(d.a)(j.a.mark((function c(s){return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(s.preventDefault(),t.current.value===a.current.value){c.next=3;break}return c.abrupt("return",o("Passwords do not match"));case 3:return c.prev=3,o(""),A(!0),c.next=8,r(e.current.value,t.current.value);case 8:m.push("/"),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(3),o("Failed to create an account");case 14:A(!1);case 15:case"end":return c.stop()}}),c,null,[[3,11]])})))).apply(this,arguments)}return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(u.a,{children:Object(E.jsxs)(u.a.Body,{children:[Object(E.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),i&&Object(E.jsx)(l.a,{variant:"danger",children:i}),Object(E.jsxs)(O.a,{onSubmit:function(e){return S.apply(this,arguments)},children:[Object(E.jsxs)(O.a.Group,{id:"email",children:[Object(E.jsx)(O.a.Label,{children:"Email"}),Object(E.jsx)(O.a.Control,{type:"email",ref:e,required:!0})]}),Object(E.jsxs)(O.a.Group,{id:"password",children:[Object(E.jsx)(O.a.Label,{children:"Password"}),Object(E.jsx)(O.a.Control,{type:"password",ref:t,required:!0})]}),Object(E.jsxs)(O.a.Group,{id:"password-confirm",children:[Object(E.jsx)(O.a.Label,{children:"Password Confirmation"}),Object(E.jsx)(O.a.Control,{type:"password",ref:a,required:!0})]}),Object(E.jsx)(p.a,{disabled:f,className:"w-100",type:"submit",children:"Sign Up"})]})]})}),Object(E.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account?",Object(E.jsx)(P.b,{to:"/login",children:"Log In"})]})]})},g=a(207),C=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),a=t[0],r=t[1],s=_(),n=s.currentUser,i=s.logout,o=Object(v.g)();function O(){return(O=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(""),e.prev=1,e.next=4,i();case 4:o.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),r("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(u.a,{children:Object(E.jsxs)(u.a.Body,{children:[Object(E.jsx)("h2",{className:"text-center mb-4",children:" Profile"}),a&&Object(E.jsx)(l.a,{variant:"danger",children:a}),Object(E.jsx)("strong",{children:"Email: "}),n.email,Object(E.jsx)(P.b,{to:"/update-profile",className:"btn btn-primary w-100 mt-3",children:"Update Profile"})]})}),Object(E.jsx)("div",{className:"w-100 text-center mt-2",children:Object(E.jsx)(p.a,{variant:"link",onClick:function(){return O.apply(this,arguments)},children:"Log Out"})})]})},w=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=_().login,r=Object(c.useState)(""),s=Object(b.a)(r,2),n=s[0],i=s[1],o=Object(c.useState)(!1),h=Object(b.a)(o,2),x=h[0],f=h[1],A=Object(v.g)();function m(){return(m=Object(d.a)(j.a.mark((function r(c){return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c.preventDefault(),r.prev=1,i(""),f(!0),r.next=6,a(e.current.value,t.current.value);case 6:A.push("/"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),i("Failed to sign in");case 12:f(!1);case 13:case"end":return r.stop()}}),r,null,[[1,9]])})))).apply(this,arguments)}return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(u.a,{children:Object(E.jsxs)(u.a.Body,{children:[Object(E.jsx)("h2",{className:"text-center mb-4",children:" Log In"}),n&&Object(E.jsx)(l.a,{variant:"danger",children:n}),Object(E.jsxs)(O.a,{onSubmit:function(e){return m.apply(this,arguments)},children:[Object(E.jsxs)(O.a.Group,{id:"email",children:[Object(E.jsx)(O.a.Label,{children:"Email"}),Object(E.jsx)(O.a.Control,{type:"email",ref:e,required:!0})]}),Object(E.jsxs)(O.a.Group,{id:"password",children:[Object(E.jsx)(O.a.Label,{children:"Password"}),Object(E.jsx)(O.a.Control,{type:"password",ref:t,required:!0})]}),Object(E.jsx)(p.a,{disabled:x,className:"w-100",type:"submit",children:"Log In"})]}),Object(E.jsx)("div",{className:"w-100 text-center mt-3",children:Object(E.jsx)(P.b,{to:"/forgot-password",children:"Forgot Password??"})})]})}),Object(E.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(E.jsx)(P.b,{to:"/signup",children:"Sign Up"})]}),Object(E.jsx)("div",{children:Object(E.jsx)(P.b,{to:"/db",children:"DB"})})]})},T=a(90),y=function(e){var t=e.component,a=Object(T.a)(e,["component"]),c=_().currentUser;return Object(E.jsx)(v.b,Object(r.a)(Object(r.a)({},a),{},{render:function(e){return c?Object(E.jsx)(t,Object(r.a)({},e)):Object(E.jsx)(v.a,{to:"/login"})}}))},I=function(){var e=Object(c.useRef)(),t=_().resetPassword,a=Object(c.useState)(""),r=Object(b.a)(a,2),s=r[0],n=r[1],i=Object(c.useState)(""),o=Object(b.a)(i,2),h=o[0],x=o[1],f=Object(c.useState)(!1),A=Object(b.a)(f,2),m=A[0],S=A[1];function v(){return(v=Object(d.a)(j.a.mark((function a(r){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.preventDefault(),a.prev=1,x(""),n(""),S(!0),a.next=7,t(e.current.value);case 7:x("Check your inbox for further instructions"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),n("Failed to reset password");case 13:S(!1);case 14:case"end":return a.stop()}}),a,null,[[1,10]])})))).apply(this,arguments)}return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(u.a,{children:Object(E.jsxs)(u.a.Body,{children:[Object(E.jsx)("h2",{className:"text-center mb-4",children:" Password Reset"}),s&&Object(E.jsx)(l.a,{variant:"danger",children:s}),h&&Object(E.jsx)(l.a,{variant:"success",children:h}),Object(E.jsxs)(O.a,{onSubmit:function(e){return v.apply(this,arguments)},children:[Object(E.jsxs)(O.a.Group,{id:"email",children:[Object(E.jsx)(O.a.Label,{children:"Email"}),Object(E.jsx)(O.a.Control,{type:"email",ref:e,required:!0})]}),Object(E.jsx)(p.a,{disabled:m,className:"w-100",type:"submit",children:"Reset Password"})]}),Object(E.jsx)("div",{className:"w-100 text-center mt-3",children:Object(E.jsx)(P.b,{to:"/login",children:" Login"})})]})}),Object(E.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(E.jsx)(P.b,{to:"/signup",children:"Sign Up"})]})]})},F=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),r=_(),s=r.currentUser,n=r.updatePassword,i=r.updateEmail,o=Object(c.useState)(""),j=Object(b.a)(o,2),d=j[0],h=j[1],x=Object(c.useState)(!1),f=Object(b.a)(x,2),A=f[0],m=f[1],S=Object(v.g)();return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(u.a,{children:Object(E.jsxs)(u.a.Body,{children:[Object(E.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),d&&Object(E.jsx)(l.a,{variant:"danger",children:d}),Object(E.jsxs)(O.a,{onSubmit:function(r){if(r.preventDefault(),t.current.value!==a.current.value)return h("Passwords do not match");var c=[];m(!0),h(""),e.current.value!==s.email&&c.push(i(e.current.value)),t.current.value&&c.push(n(t.current.value)),Promise.all(c).then((function(){S.push("/")})).catch((function(){h("Failed to update account")})).finally((function(){m(!1)}));try{S.push("/")}catch(o){h("Failed to create an account")}m(!1)},children:[Object(E.jsxs)(O.a.Group,{id:"email",children:[Object(E.jsx)(O.a.Label,{children:"Email"}),Object(E.jsx)(O.a.Control,{type:"email",ref:e,required:!0,defaultValue:s.email})]}),Object(E.jsxs)(O.a.Group,{id:"password",children:[Object(E.jsx)(O.a.Label,{children:"Password"}),Object(E.jsx)(O.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),Object(E.jsxs)(O.a.Group,{id:"password-confirm",children:[Object(E.jsx)(O.a.Label,{children:"Password Confirmation"}),Object(E.jsx)(O.a.Control,{type:"password",ref:a,placeholder:"Leave blank to keep the same"})]}),Object(E.jsx)(p.a,{disabled:A,className:"w-100",type:"submit",children:"Update"})]})]})}),Object(E.jsx)("div",{className:"w-100 text-center mt-2",children:Object(E.jsx)(P.b,{to:"/",children:"Cancel"})})]})},N=a(64),D=function(e){var t=Object(c.useState)([]),a=Object(b.a)(t,2),r=a[0],s=a[1];return h.a.database().ref("users").on("value",(function(e){var t=e.val(),a=[];for(var r in t)a.push({uid:r,name:t[r].name,email:t[r].email});s(a)})),Object(E.jsx)("div",{children:r})};var B=function(){return Object(E.jsx)(g.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(E.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(E.jsx)(P.a,{children:Object(E.jsx)(S,{children:Object(E.jsxs)(v.d,{children:[Object(E.jsx)(y,{exact:!0,path:"/",component:C}),Object(E.jsx)(y,{path:"/update-profile",component:F}),Object(E.jsx)(v.b,{path:"/signup",component:R}),Object(E.jsx)(v.b,{path:"/login",component:w}),Object(E.jsx)(v.b,{path:"/forgot-password",component:I}),Object(E.jsx)(v.b,{path:"/db",component:D})]})})})})})},U=(a(201),a(89));i.a.render(Object(E.jsx)(N.a,Object(r.a)(Object(r.a)({firebase:h.a},U.a),{},{children:Object(E.jsx)(s.a.StrictMode,{children:Object(E.jsx)(B,{})})})),document.getElementById("root"))}},[[204,1,2]]]);
//# sourceMappingURL=main.e8908c79.chunk.js.map