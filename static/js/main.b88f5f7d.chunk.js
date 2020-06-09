(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{31:function(e,t,a){},32:function(e,t,a){},37:function(e,t,a){e.exports=a(61)},42:function(e,t,a){},54:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(34),l=a.n(r),c=(a(31),a(12)),o=a(13),i=a(15),u=a(14),m=(a(42),function(e){return e.tasks.map((function(t){return s.a.createElement("div",{className:"list-background",key:t.id},s.a.createElement("p",{className:"list__items"},s.a.createElement("strong",null,t.value)),s.a.createElement("i",{className:"fa fa-times list__delete-icon",onClick:function(){return e.deleteItem(t.id)}}))}))}),d=a(26),h=a.n(d);h.a.initializeApp({apiKey:"AIzaSyB8nD0nu2jG0cmyvLRBs3XgFwOg0b0cq8I",authDomain:"todo-app-8c85e.firebaseapp.com",databaseURL:"https://todo-app-8c85e.firebaseio.com",projectId:"todo-app-8c85e",storageBucket:"todo-app-8c85e.appspot.com",messagingSenderId:"125772070027",appId:"1:125772070027:web:1ffe3fd0560663a286288e",measurementId:"G-KVNZJWDRBQ"});var p=h.a.auth(),b=h.a.database(),v=(a(54),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){e.persist(),n.setState({currentTask:e.target.value})},n.addItem=function(e){e.preventDefault(),n.database.push().set({task:n.state.currentTask}),n.setState((function(){return{currentTask:""}})),n.db.set({count:n.state.count+1})},n.deleteTask=function(e){n.database.child(e).remove(),n.db.set({count:n.state.count-1}),n.setState({count:n.state.count-1})},n.EditItem=function(e){var t=n.state.tasks.filter((function(t){return t.id===e}));n.setState({currentTask:t[0].value})},n.logout=function(){p.signOut()},n.state={tasks:[],count:0,currentTask:"",username:""};var s=p.currentUser.uid;return n.database=b.ref("users/".concat(s)).child("task"),n.db=b.ref("users/".concat(s)).child("taskCount"),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.state.tasks,a=p.currentUser.uid;b.ref("users/"+a).once("value").then((function(t){var a=t.val()&&t.val().username||"Anonymous";e.setState({username:a})})),this.db.on("value",(function(t){var a=t.exists()?t.val().count:0;e.setState({count:a})})),this.database.on("child_added",(function(a){t.push({id:a.key,value:a.val().task}),e.setState({tasks:t})})),this.database.on("child_removed",(function(a){var n=t.filter((function(e){return e.id!==a.key}));e.setState({tasks:n}),t=n}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"column"},s.a.createElement("nav",null,s.a.createElement("p",{className:"display-name"},"Logged in as: ",s.a.createElement("span",null,this.state.username)),s.a.createElement("button",{onClick:this.logout,className:"logout"},s.a.createElement("i",{className:"fa fa-sign-out"})," Logout")),s.a.createElement("div",{className:"card"},s.a.createElement("h1",{className:"card-header"},"Todo List App"),s.a.createElement("form",{className:"todo-form",onSubmit:this.addItem},s.a.createElement("div",{className:"task-input"},s.a.createElement("input",{className:"input-title",type:"text",value:this.state.currentTask,onChange:this.handleChange,required:!0}),s.a.createElement("label",null,"Enter task")),s.a.createElement("button",{className:"todo__button",type:"submit"},"Add Task")))),s.a.createElement("div",{className:"column"},s.a.createElement("div",{className:"card"},0===this.state.tasks.length?s.a.createElement("h1",{className:"card-header"},"Nothing Left to do!! Enjoy your day"):s.a.createElement("h1",{className:"card-header"},this.state.count," Task to finish"),s.a.createElement(m,{tasks:this.state.tasks,taskCompleted:this.taskCompleted,deleteItem:this.deleteTask,EditItem:this.EditItem}))))}}]),a}(n.Component)),g=a(16),E=a(21),f=a.n(E),w=a(10),k=a(25),N=a(11),j=a(20),y=a.n(j),O=(a(32),{email:"",password:"",error:!1,touched:{email:!1,password:!1},loading:!1}),S=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(k.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n.setState({loading:!0}),e.prev=2,e.next=5,p.signInWithEmailAndPassword(n.state.email,n.state.password);case 5:n.props.history.push("/todo"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),n.setState(Object(w.a)(Object(w.a)({},O),{},{loading:!1,error:!0}));case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){n.setState(Object(g.a)({},e.target.name,e.target.value))},n.handleBlur=function(e){return function(t){n.setState({touched:Object(w.a)(Object(w.a)({},n.state.touched),{},Object(g.a)({},e,!0))})}},n.validate=function(e,t){var a={email:"",password:""};n.state.touched.email&&!/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(e)&&(a.email="Email is invalid");return n.state.touched.password&&!/^(?=.*[a-z])(?=.*[!-_.+@#$%^&*]).{5,}$/.test(t)&&(a.password="Password should have special character & length should be >= 5"),a},n.state=O,n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.validate(this.state.email,this.state.password);return s.a.createElement("div",{className:"box"},s.a.createElement("header",{className:"box__header"},s.a.createElement("h1",null,"Login"),s.a.createElement("span",{className:"validation-error"},this.state.error?"Invalid username or password":"")),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"inputbox"},s.a.createElement("input",{type:"text",className:e.email.length?"email":"error email",name:"email",value:this.state.email,onChange:this.handleChange,onBlur:this.handleBlur("email"),required:!0}),s.a.createElement("label",null,"Email"),s.a.createElement("span",{className:"errors"},e.email)),s.a.createElement("div",{className:"inputbox"},s.a.createElement("input",{type:"password",className:e.password?"error password":"password",name:"password",value:this.state.password,onChange:this.handleChange,onBlur:this.handleBlur("password"),required:!0}),s.a.createElement("label",null,"Password"),s.a.createElement("span",{className:"errors"},e.password)),s.a.createElement("button",{className:this.state.loading?"submit-button loading":"submit-button",type:"submit",value:"Login"},"Login",s.a.createElement("span",{className:"login-loader"},this.state.loading&&s.a.createElement(y.a,{radius:30,color:"#fc6c85",stroke:4,visible:!0})))),s.a.createElement("span",{className:"page-change"},"Don't have an Account?\xa0\xa0",s.a.createElement(N.b,{to:"/signup"},"SignUp")))}}]),a}(n.Component),C={username:"",email:"",password:"",error:!1,touched:{username:!1,email:!1,password:!1},loading:!1},x=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(k.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n.setState({loading:!0}),e.prev=2,e.next=5,p.createUserWithEmailAndPassword(n.state.email,n.state.password);case 5:a=e.sent,n.database=b.ref("users/".concat(a.user.uid)).set({username:n.state.username}),n.props.history.push("/login"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),n.setState(Object(w.a)(Object(w.a)({},C),{},{loading:!1,error:!0}));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){e.persist(),n.setState(Object(g.a)({},e.target.name,e.target.value))},n.handleBlur=function(e){return function(t){n.setState({touched:Object(w.a)(Object(w.a)({},n.state.touched),{},Object(g.a)({},e,!0))})}},n.validate=function(e,t,a){var s={username:"",email:"",password:""};n.state.touched.username&&e.length<3?s.username="Username should be >= 3 characters":n.state.touched.username&&e.length>15&&(s.username="Username should be <=15 characters");n.state.touched.email&&!/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(t)&&(s.email="Entered email is invalid");return n.state.touched.password&&!/^(?=.*[a-z])(?=.*[!-_.+@#$%^&*]).{5,}$/.test(a)&&(s.password="Password should have special character & length should be >= 5"),s},n.state=C,n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.validate(this.state.username,this.state.email,this.state.password);return s.a.createElement("div",{className:"box"},s.a.createElement("div",{className:"box__header"},s.a.createElement("h1",null,"SignUp"),s.a.createElement("span",{className:"validation-error"},this.state.error?"User already exists":"")),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"inputbox"},s.a.createElement("input",{type:"text",className:"username",name:"username",onBlur:this.handleBlur("username"),value:this.state.username,onChange:this.handleChange,required:!0}),s.a.createElement("label",null,"User Name"),s.a.createElement("span",{className:"errors"},e.username)),s.a.createElement("div",{className:"inputbox"},s.a.createElement("input",{type:"text",className:"email",name:"email",onBlur:this.handleBlur("email"),value:this.state.email,onChange:this.handleChange,required:!0}),s.a.createElement("label",null,"Email"),s.a.createElement("span",{className:"errors"},e.email)),s.a.createElement("div",{className:"inputbox"},s.a.createElement("input",{type:"password",className:"password",name:"password",onBlur:this.handleBlur("password"),value:this.state.password,onChange:this.handleChange,required:!0}),s.a.createElement("label",null,"Password"),s.a.createElement("span",{className:"errors"},e.password)),s.a.createElement("button",{className:this.state.loading?"submit-button loading":"submit-button",type:"submit",value:"SignUp"},"SignUp",s.a.createElement("span",{className:"login-loader signup-loader"},this.state.loading&&s.a.createElement(y.a,{radius:30,color:"#fc6c85",stroke:4,visible:!0})))),s.a.createElement("span",{className:"page-change"},"Already have an Account?\xa0\xa0",s.a.createElement(N.b,{to:"/login"},"Login")))}}]),a}(n.Component),B=a(3),I=a(36),_=function(e){var t=e.component,a=e.authenticated,n=Object(I.a)(e,["component","authenticated"]);return s.a.createElement(B.b,Object.assign({},n,{render:function(e){return!0===a?s.a.createElement(t,e):s.a.createElement(B.a,{to:"/login"})}}))},U=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={authenticated:!1,currentuser:null,loading:!0},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.onAuthStateChanged((function(t){t?e.setState({authenticated:!0,currentuser:t.providerData[0],loading:!1}):e.setState({authenticated:!1,currentuser:null,loading:!1})}))}},{key:"render",value:function(){return this.state.loading?s.a.createElement("div",{className:"loader"},s.a.createElement(y.a,{radius:70,color:"#fc6c85",stroke:5,visible:!0})):s.a.createElement(B.d,null,s.a.createElement(_,{path:"/todo",authenticated:this.state.authenticated,component:v}),s.a.createElement(B.b,{exact:!0,path:"/login",component:S}),"} />",s.a.createElement(B.b,{exact:!0,path:"/signup",component:x}),s.a.createElement(B.a,{to:"/login"}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(N.a,{basename:"/"},s.a.createElement(U,{increment:1}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.b88f5f7d.chunk.js.map