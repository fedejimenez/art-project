(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{142:function(e,t,a){e.exports=a(279)},147:function(e,t,a){},148:function(e,t,a){},172:function(e,t,a){},275:function(e,t,a){},276:function(e,t,a){},279:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),c=a.n(o),l=(a(147),a(5)),s=a(6),i=a(8),m=a(7),u=(a(148),a(130)),h=a(106),p=[{src:"https://source.unsplash.com/2ShvY8Lf6l0/800x599",width:4,height:3},{src:"https://source.unsplash.com/Dm-qxdynoEc/800x799",width:1,height:1},{src:"https://source.unsplash.com/qDkso9nvCg0/600x799",width:3,height:4},{src:"https://source.unsplash.com/iecJiKe_RNg/600x799",width:3,height:4},{src:"https://source.unsplash.com/epcsn8Ed8kY/600x799",width:3,height:4},{src:"https://source.unsplash.com/NQSWvyVRIJk/800x599",width:4,height:3},{src:"https://source.unsplash.com/zh7GEuORbUw/600x799",width:3,height:4},{src:"https://source.unsplash.com/PpOHJezOalU/800x599",width:4,height:3},{src:"https://source.unsplash.com/I1ASdgphUH4/800x599",width:4,height:3},{src:"https://source.unsplash.com/XiDA78wAZVw/600x799",width:3,height:4},{src:"https://source.unsplash.com/x8xJpClTvR0/800x599",width:4,height:3},{src:"https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",width:4927,height:1e3},{src:"https://source.unsplash.com/qGQNmBE7mYw/800x599",width:4,height:3},{src:"https://source.unsplash.com/NuO6iTBkHxE/800x599",width:4,height:3},{src:"https://source.unsplash.com/pF1ug8ysTtY/600x400",width:4,height:3},{src:"https://source.unsplash.com/A-fubu9QJxE/800x533",width:4,height:3},{src:"https://source.unsplash.com/5P91SF0zNsI/740x494",width:4,height:3}],d=a(108),b={cursor:"pointer"},g=function(e){var t=e.index,a=e.onClick,n=e.photo,o=e.margin,c=e.direction,l=e.top,s=e.left,i={margin:o};"column"===c&&(i.position="absolute",i.left=s,i.top=l);return r.a.createElement("img",Object.assign({style:a?Object(d.a)({},i,{},b):i},n,{onClick:a?function(e){a(e,{photo:n,index:t})}:null,alt:"img"}))},f=a(109),v=a.n(f),E=a(70),x=Object(E.b)((function(e){return r.a.createElement(g,e)})),y=Object(E.a)((function(e){var t=e.items;return r.a.createElement(h.a,{photos:t,renderImage:function(e){return r.a.createElement(x,e)}})})),w=function(){var e=r.a.useState(p),t=Object(u.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{className:"Home"},r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement(y,{items:a,onSortEnd:function(e){var t=e.oldIndex,r=e.newIndex;n(v()(a,t,r))},axis:"xy"}))},j=a(11),O=a(16),N=a.n(O),k=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleSubmit=e.handleSubmit.bind(Object(j.a)(e)),e}return Object(s.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a={auth:{email:document.getElementById("email").value,password:document.getElementById("password").value}};Object(O.post)("/api/user_token",a).then((function(e){localStorage.setItem("jwt",e.data.jwt),t.props.history.push("/")})).catch((function(e){return console.log("error",e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Log In"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email: "),r.a.createElement("input",{name:"email",id:"email",type:"email",className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{name:"password",id:"password",type:"password",className:"form-control"})),r.a.createElement("button",{type:"submit",className:"btn btn-dark"},"Submit")))}}]),a}(n.Component),C=a(25),S=function(){return localStorage.removeItem("jwt"),r.a.createElement(C.a,{to:"/"})},I=a(13),P=(a(172),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={posts:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="Bearer "+localStorage.getItem("jwt");N()({method:"get",url:"/api/posts",headers:{Authorization:t}}).then((function(t){e.setState({posts:t.data})})).catch((function(e){return console.log("error",e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"PhotoList-container"},r.a.createElement("hr",null),this.state.posts.sort().map((function(e,t){return r.a.createElement("div",{key:e.id},r.a.createElement("section",{className:"PhotoList-item",style:{flexDirection:t%2!=0?"row-reverse":"row"}},r.a.createElement("div",{className:"PhotoList-content"},r.a.createElement("header",{className:"text-center mb-40"},r.a.createElement("h3",null,e.title)),r.a.createElement("div",{className:"card-block"},r.a.createElement("div",{className:"PhotoList-text"},r.a.createElement("p",{className:"text-center"},e.content)),r.a.createElement("p",{className:"text-center mt-40"},r.a.createElement(I.b,{to:"/posts/".concat(e.id),className:"PhotoList-read-more btn btn-primary btn-round"},"Read more")))),r.a.createElement("div",{className:"PhotoList-frame",style:{backgroundImage:"url(".concat(e.src,")")}},r.a.createElement("div",{className:"PhotoList-image"}))),r.a.createElement("hr",null))})),r.a.createElement(I.b,{to:"/posts/new",className:"btn btn-outline-primary"},"Create Post"))}}]),a}(n.Component)),L=a(285),D=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("span",{style:{position:"fixed",top:"120px",right:"40px"}},r.a.createElement(L.a,{style:{boxShadow:"5px 5px 5px #888888",opacity:.9},link:!0,inverted:!0,circular:!0,name:"pencil",size:"big"}))}}]),a}(n.Component),B=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("span",{style:{position:"fixed",top:"200px",right:"40px"}},r.a.createElement(L.a,{style:{boxShadow:"5px 5px 5px #888888",opacity:.9},link:!0,inverted:!0,circular:!0,name:"trash",size:"big"}))}}]),a}(n.Component),z=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("span",{style:{position:"fixed",top:"280px",right:"40px"}},r.a.createElement(L.a,{style:{boxShadow:"5px 5px 5px #888888",opacity:.9},link:!0,inverted:!0,circular:!0,name:"undo",size:"big"}))}}]),a}(n.Component),A=(a(275),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={post:{}},e.handleDelete=e.handleDelete.bind(Object(j.a)(e)),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="Bearer "+localStorage.getItem("jwt");N()({method:"get",url:"/api/posts/".concat(this.props.match.params.id),headers:{Authorization:t}}).then((function(t){e.setState({post:t.data})})).catch((function(e){return console.log("error",e)}))}},{key:"handleDelete",value:function(){var e=this,t="Bearer "+localStorage.getItem("jwt");N()({method:"delete",url:"/api/posts/".concat(this.props.match.params.id),headers:{Authorization:t}}).then((function(){e.props.history.push("/posts")})).catch((function(e){return console.log("error",e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("section",{className:"PostInfo my-90"},r.a.createElement("header",{className:"PostInfo-header text-center mb-40"},r.a.createElement("h3",null,this.state.post.title)),r.a.createElement("div",{className:"PostInfo-content card-block"},r.a.createElement("p",{className:"PostInfo-text text-center"})),r.a.createElement("div",{className:"PostInfo-image-container"},r.a.createElement("div",{className:"PostInfo-image"},r.a.createElement("img",{src:this.state.post.src})),r.a.createElement("div",{className:"PostInfo-image-overlay"},r.a.createElement("div",{className:"PostInfo-image-text"},this.state.post.content)))),r.a.createElement("div",{className:"PostInfo-buttons"},r.a.createElement("p",null,r.a.createElement(I.b,{to:"/posts/".concat(this.state.post.id,"/edit")},r.a.createElement(D,null)),r.a.createElement(I.b,{onClick:this.handleDelete,to:"#"},r.a.createElement(B,null)),r.a.createElement(I.b,{to:"/posts"},r.a.createElement(z,null)))))}}]),a}(n.Component)),J=a(31),T=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={title:"",content:""},e.handleChange=e.handleChange.bind(Object(j.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(j.a)(e)),e.handleCancel=e.handleCancel.bind(Object(j.a)(e)),e}return Object(s.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a="Bearer "+localStorage.getItem("jwt");N()({method:"post",url:"/api/posts",headers:{Authorization:a},data:this.state}).then((function(e){t.props.history.push("/posts/".concat(e.data.id))})).catch((function(e){return console.log("error",e)}))}},{key:"handleChange",value:function(e){this.setState(Object(J.a)({},e.target.name,e.target.value))}},{key:"handleCancel",value:function(){this.props.history.push("/posts")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Create Post"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Title"),r.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:this.handleChange,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Content"),r.a.createElement("textarea",{name:"content",rows:"5",value:this.state.content,onChange:this.handleChange,className:"form-control"})),r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{type:"submit",className:"btn btn-dark"},"Create"),r.a.createElement("button",{type:"button",onClick:this.handleCancel,className:"btn btn-secondary"},"Cancel"))))}}]),a}(n.Component),R=(a(276),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={title:"",content:"",src:""},e.handleChange=e.handleChange.bind(Object(j.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(j.a)(e)),e.handleCancel=e.handleCancel.bind(Object(j.a)(e)),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="Bearer "+localStorage.getItem("jwt");N()({method:"get",url:"/api/posts/".concat(this.props.match.params.id),headers:{Authorization:t}}).then((function(t){e.setState(t.data)})).catch((function(e){return console.log("error",e)}))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a="Bearer "+localStorage.getItem("jwt");N()({method:"patch",url:"/api/posts/".concat(this.state.id),headers:{Authorization:a},data:this.state}).then((function(){t.props.history.push("/posts/".concat(t.state.id))})).catch((function(e){return console.log("error",e)}))}},{key:"handleChange",value:function(e){this.setState(Object(J.a)({},e.target.name,e.target.value))}},{key:"handleCancel",value:function(){this.props.history.push("/posts/".concat(this.state.id))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Edit ",this.state.title),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Title"),r.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:this.handleChange,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Content"),r.a.createElement("textarea",{name:"content",rows:"7",value:this.state.content,onChange:this.handleChange,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Image"),r.a.createElement("textarea",{name:"src",rows:"1",value:this.state.src,onChange:this.handleChange,className:"form-control"})),r.a.createElement("div",{className:"PostEdit-image"},r.a.createElement("img",{src:this.state.src})),r.a.createElement("div",{className:"PostEdit-buttons btn-group"},r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"btn btn-dark"},"Update"),r.a.createElement("button",{type:"button",onClick:this.handleCancel,className:"btn btn-secondary"},"Cancel"))))}}]),a}(r.a.Component)),U=a(283),W=a(284),H=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(I.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"App-header"},r.a.createElement(F,null)),r.a.createElement("div",{className:"Main"},r.a.createElement(K,null))))}}]),a}(n.Component),F=function(){return r.a.createElement(U.a,{collapseOnSelect:!0,expand:"lg",variant:"light"},r.a.createElement(U.a.Brand,{href:"/",className:"navbar nav-item"},"Hui Lin"),r.a.createElement(U.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(U.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(W.a,{className:"mr-auto"}),r.a.createElement(W.a,null,r.a.createElement(W.a.Item,null,r.a.createElement(W.a.Link,{eventKey:"2",as:I.b,to:"/posts"},"Posts")),localStorage.getItem("jwt")?r.a.createElement(W.a.Item,null,r.a.createElement(W.a.Link,{eventKey:"4",as:I.b,to:"/logout"},"Log Out")):r.a.createElement(W.a.Item,null,r.a.createElement(W.a.Link,{eventKey:"3",as:I.b,to:"/login"},"Log In")))))},K=function(){return r.a.createElement(C.d,null,r.a.createElement(C.b,{exact:!0,path:"/",component:w}),r.a.createElement(C.b,{exact:!0,path:"/login",component:k}),r.a.createElement(C.b,{exact:!0,path:"/logout",component:S}),r.a.createElement(C.b,{exact:!0,path:"/posts",component:P}),r.a.createElement(C.b,{exact:!0,path:"/posts/new",component:T}),r.a.createElement(C.b,{exact:!0,path:"/posts/:id",component:A}),r.a.createElement(C.b,{exact:!0,path:"/posts/:id/edit",component:R}))},M=H,Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(M,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");Q?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Y(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):Y(e)}))}}()}},[[142,1,2]]]);
//# sourceMappingURL=main.be1af63d.chunk.js.map