(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{113:function(e,t,s){e.exports={header:"Header_header__2IYpn",img:"Header_img__3MAAW"}},116:function(e,t,s){e.exports={wrapper:"bestFriend_wrapper__27_UM"}},117:function(e,t,s){},118:function(e,t,s){e.exports={wrapper:"dialog_wrapper__xMjpP"}},119:function(e,t,s){},203:function(e,t,s){},204:function(e,t,s){},211:function(e,t,s){},212:function(e,t,s){},213:function(e,t,s){},253:function(e,t,s){"use strict";s.r(t);var n=s(8),a=s(23),r=s(4),i=s(74),c=s.n(i).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"28c8a194-1bbc-4ba0-897f-4f6bf8037c92"}}),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return c.get("users?page=".concat(e,"&count=").concat(t),{}).then((function(e){return e.data}))},u=function(e){return c.post("follow/".concat(e)).then((function(e){return e.data}))},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return c.get("profile/".concat(e)).then((function(e){return e.data}))},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return c.get("profile/status/".concat(e)).then((function(e){return e.data}))},j=function(e){return c.put("profile/status",{status:e})},p=function(){return c.get("auth/me")},h=function(e){return c.post("auth/login",{email:e.login,password:e.password,rememberMe:e.rememberMe,captcha:!1})},b="ADD-POST",f="ADD-NEW-POST-TEXT",g="UPDATE-USER",O="SET-STATUS",m="UPDATE-STATUS",x={profile:null,postData:{posts:[{id:1,message:"Hi how are you",likeCount:5},{id:2,message:"Hi how are you",likeCount:5},{id:3,message:"Hi ",likeCount:5}],_newPostText:""}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:var s={id:5,message:e._newPostText,likeCount:0};return Object(r.a)(Object(r.a)({},e),{},{postData:[].concat(Object(a.a)(e.postData),[s]),_newPostText:""});case f:return Object(r.a)(Object(r.a)({},e),{},{_newPostText:t.text});case g:return Object(r.a)(Object(r.a)({},e),{},{profile:{contacts:Object(r.a)({},t.user.contacts),photos:Object(r.a)({},t.user.photos),status:t.user.aboutMe}});case m:case O:return Object(r.a)(Object(r.a)({},e),{},{status:t.status});default:return e}},w="ADD-NEW-MESSAGE",_={messageName:[{id:1,name:"Dmitriy"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"piter"}],messageData:[{id:1,message:"hi"},{id:2,message:"how are you"},{id:3,message:"buy"},{id:4,message:"breakfast"}]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;return t.type===w?Object(r.a)(Object(r.a)({},e),{},{messageData:[].concat(Object(a.a)(e.messageData),[{id:5,message:t.message}])}):e},P={sideBar:{bestFriend:[{id:1,name:"Dmitriy"},{id:2,name:"Andrey"},{id:3,name:"Sveta"}]}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P;return e},U="FOLLOW_USER",N="UNFOLLOW_USER",C="ADD_USERS",D="SET_CURRENT_PAGE",k="SET_TOTAL_COUNT",A="FETCHING",F="FOLLOW_FETCHING",T=function(e){return{type:A,fetching:e}},M=function(e,t){return{type:F,id:e,isFetching:t}},E={usersData:[],pageSize:5,totalUsers:0,currentPage:2,isFetching:!1,followingProgres:[]},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(r.a)(Object(r.a)({},e),{},{usersData:e.usersData.map((function(e){return e.id===t.id&&(e.followed=!0),e}))});case N:return Object(r.a)(Object(r.a)({},e),{},{usersData:e.usersData.map((function(e){return e.id===t.id&&(e.followed=!1),e}))});case C:return Object(r.a)(Object(r.a)({},e),{},{usersData:Object(a.a)(t.arrUsers)});case D:return Object(r.a)(Object(r.a)({},e),{},{currentPage:t.currentPage});case k:return Object(r.a)(Object(r.a)({},e),{},{totalUsers:t.totalUsers});case A:return Object(r.a)(Object(r.a)({},e),{},{isFetching:t.fetching});case F:return Object(r.a)(Object(r.a)({},e),{},{followingProgres:t.isFetching?[].concat(Object(a.a)(e.followingProgres),[t.id]):e.followingProgres.filter((function(e){return e!==t.id}))});default:return e}},I="SET_LOGIN_USER",L=function(e){return{type:I,user:e}},R={userInfo:null,isAuth:!1},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;return t.type===I?Object(r.a)(Object(r.a)({},e),{},{userInfo:Object(r.a)({},t.user.data),isAuth:!0}):e},z=s(112),G=s(257),W=Object(n.c)({profilePage:v,dialogsPage:S,sideBar:y,findUsers:B,auth:H,form:G.a}),K=Object(n.e)(W,Object(n.a)(z.a));window.store=K;var J=K,V=s(1),X=s.n(V),Y=s(52),Z=s.n(Y),q=(s(203),s(204),s(18)),Q=s(19),$=s(21),ee=s(20),te=s(12),se=s(113),ne=s.n(se),ae=s(0),re=function(e){return Object(ae.jsx)("header",{className:ne.a.header,children:e.isAuth?Object(ae.jsxs)("div",{children:[Object(ae.jsx)("span",{children:e.userInfo.login}),Object(ae.jsx)("span",{children:e.userInfo.email})]}):Object(ae.jsx)("div",{children:Object(ae.jsx)(te.b,{to:"/login",children:"Log in"})})})},ie=s(10),ce=function(e){Object($.a)(s,e);var t=Object(ee.a)(s);function s(){return Object(q.a)(this,s),t.apply(this,arguments)}return Object(Q.a)(s,[{key:"componentDidMount",value:function(){this.props.auth()}},{key:"render",value:function(){return Object(ae.jsx)(re,Object(r.a)({},this.props))}}]),s}(X.a.Component),oe=Object(ie.b)((function(e){return{userInfo:e.auth.userInfo,isAuth:e.auth.isAuth}}),{auth:function(){return function(e){p().then((function(t){t.resultCode||e(L(t))}))}}})(ce),ue=s(76),de=s.n(ue),le=function(e){return Object(ae.jsx)("li",{className:de.a.item,children:Object(ae.jsx)(te.b,{to:e.where,activeClassName:de.a.active,children:e.text})})},je=s(77),pe=s.n(je),he=function(){return Object(ae.jsx)("nav",{className:pe.a.nav,children:Object(ae.jsxs)("ul",{className:pe.a.list,children:[Object(ae.jsx)(le,{where:"/profile",text:"Profile"}),Object(ae.jsx)(le,{where:"/dialogs",text:"Messages"}),Object(ae.jsx)(le,{where:"/music",text:"Music"}),Object(ae.jsx)(le,{where:"/news",text:"News"}),Object(ae.jsx)(le,{where:"/settings",text:"Settings"}),Object(ae.jsx)(le,{where:"/users",text:"FindUsers"})]})})},be=s(116),fe=s.n(be),ge=s(34),Oe=s.n(ge),me=function(e){return Object(ae.jsx)("div",{className:Oe.a.wrapper,children:Object(ae.jsxs)(te.b,{to:"#2",className:Oe.a.friend,activeClassName:Oe.a.myActive,children:[Object(ae.jsx)("img",{className:Oe.a.avatar,src:"https://img1.freepng.ru/20180315/wre/kisspng-computer-icons-clip-art-man-icon-5aab18530bdfb1.3779945315211623230486.jpg",alt:""}),Object(ae.jsx)("span",{className:Oe.a.name,children:e.dataFriend})]})})},xe=function(e){var t=e.data.map((function(e){return Object(ae.jsx)(me,{dataFriend:e.name})}));return Object(ae.jsx)("div",{className:fe.a.wrapper,children:t})},ve=s(78),we=s.n(ve),_e=function(e){return Object(ae.jsxs)("div",{className:we.a.side,children:[Object(ae.jsx)(he,{}),Object(ae.jsx)(xe,{className:we.a.bestFriends,data:e.data.sideBar.bestFriend})]})},Se=function(e){Object($.a)(s,e);var t=Object(ee.a)(s);function s(){var e;Object(q.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={editMode:!1,status:""},e.activateEditMode=function(){e.setState({editMode:!0})},e.componentDidUpdate=function(t,s){s.status!==e.props.status&&e.setState({status:e.props.status})},e.onStatusChange=function(t){e.setState({status:t.target.value})},e.deactivateEditMode=function(t){e.setState({editMode:!1}),e.state.status.length<300?e.props.updateStatus(e.state.status):alert("\u0412\u0432\u0435\u0434\u0435\u043d\u043e \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")},e}return Object(Q.a)(s,[{key:"render",value:function(){return Object(ae.jsxs)("div",{children:[!this.state.editMode&&Object(ae.jsx)("div",{className:"{p.description}",children:Object(ae.jsx)("span",{onDoubleClick:this.activateEditMode,children:this.props.status})}),this.state.editMode&&Object(ae.jsxs)("div",{children:[Object(ae.jsx)("input",{onChange:this.onStatusChange,onBlur:this.deactivateEditMode,value:this.state.status||1,autoFocus:!0}),Object(ae.jsx)("button",{})]})]})}}]),s}(X.a.Component),Pe=Se,ye=s(55),Ue=s.n(ye),Ne=function(e){var t=[];for(var s in e.contacts)e.contacts[s]&&t.push(Object(ae.jsx)("span",{children:Object(ae.jsx)("a",{href:e.contacts[s],target:"_blank",children:s})}));return Object(ae.jsxs)("div",{className:Ue.a.wrapper,children:[Object(ae.jsx)("div",{className:Ue.a.background}),Object(ae.jsx)("div",{className:Ue.a.avatar,children:Object(ae.jsx)("img",{src:e.photo.large||null,alt:""})}),Object(ae.jsx)(Pe,{status:e.status,updateStatus:e.updateStatus}),Object(ae.jsx)("div",{children:t})]})},Ce=s(117),De=s.n(Ce),ke=s.p+"static/media/1488.372b42cf.gif",Ae=function(e){return Object(ae.jsx)("div",{children:Object(ae.jsx)("img",{src:ke,alt:"text"})})},Fe=function(e){return e.data?Object(ae.jsx)("div",{className:De.a.wrapper,children:Object(ae.jsx)(Ne,{photo:e.data.photos,status:e.status,contacts:e.data.contacts,updateStatus:e.updateStatus})}):Object(ae.jsx)(Ae,{})},Te=function(e){Object($.a)(s,e);var t=Object(ee.a)(s);function s(){return Object(q.a)(this,s),t.apply(this,arguments)}return Object(Q.a)(s,[{key:"componentDidMount",value:function(){this.props.match.params.userid||(this.props.match.params.userid=2),this.props.getProfile(this.props.match.params.userid),this.props.getStatus(this.props.match.params.userid)}},{key:"render",value:function(){return Object(ae.jsx)(Fe,{data:this.props.profile,isAuth:this.props.isAuth,status:this.props.status,updateStatus:this.props.updateUserStatus})}}]),s}(X.a.Component),Me=Te,Ee=s(9),Be=function(e){return{isAuth:e.auth.isAuth}},Ie=function(e){var t=function(t){Object($.a)(n,t);var s=Object(ee.a)(n);function n(){return Object(q.a)(this,n),s.apply(this,arguments)}return Object(Q.a)(n,[{key:"render",value:function(){return this.props.isAuth?Object(ae.jsx)(e,Object(r.a)({},this.props)):Object(ae.jsx)(Ee.a,{to:"/login"})}}]),n}(X.a.Component);return Object(ie.b)(Be)(t)},Le=Object(n.d)(Object(ie.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),{getProfile:function(e){return function(t){d(e).then((function(e){t({type:g,user:e})}))}},getStatus:function(e){return function(t){l(e).then((function(e){t({type:O,status:e})}))}},updateUserStatus:function(e){return function(t){j(e).then((function(s){s.resultCode||t(function(e){return{type:m,status:e}}(e))}))}}}),Ee.f,Ie)(Me),Re=s(56),He=s.n(Re),ze=s(118),Ge=s.n(ze),We=function(e){return Object(ae.jsx)("div",{className:Ge.a.wrapper,children:Object(ae.jsx)(te.b,{to:"/dialogs/"+e.id,children:e.name})})},Ke=s(119),Je=s.n(Ke),Ve=function(e){return Object(ae.jsx)("div",{className:Je.a.message,children:e.text})},Xe=function(e){Object($.a)(s,e);var t=Object(ee.a)(s);function s(){var e;Object(q.a)(this,s);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={message:"",messages:Object(a.a)(e.props.messageData)},e.onChangeNewMess=function(t){e.setState({message:t.target.value})},e.componentDidUpdate=function(t,s){s.message!==e.state.message&&e.setState({message:e.state.message}),t.messageData.length!==e.state.messages.length&&e.setState({messages:Object(a.a)(e.props.messageData)})},e.addMessage=function(){e.props.addMessage(e.state.message)},e.dialogs=e.props.messageName.map((function(e){return Object(ae.jsx)(We,{name:e.name,id:e.id},e.id)})),e.messageElement=e.state.messages.map((function(e){return Object(ae.jsx)(Ve,{text:e.message},e.id)})),e}return Object(Q.a)(s,[{key:"render",value:function(){return Object(ae.jsxs)("div",{className:He.a.wrapper,children:[Object(ae.jsx)("div",{className:He.a.dialogs,children:this.dialogs}),Object(ae.jsxs)("div",{className:He.a.messages,children:[this.messageElement,Object(ae.jsx)("textarea",{onChange:this.onChangeNewMess,value:this.state.message}),Object(ae.jsx)("button",{onClick:this.addMessage,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})}}]),s}(X.a.Component),Ye=Xe,Ze=Object(n.d)(Object(ie.b)((function(e){return{messageName:e.dialogsPage.messageName,messageData:e.dialogsPage.messageData,newMessageText:e.dialogsPage.newMessageText,isAuth:e.auth.isAuth}}),(function(e){return{addMessage:function(t){e({type:w,message:t})}}})),Ie)(Ye),qe=(s(211),function(){return Object(ae.jsx)("div",{children:Object(ae.jsx)("span",{children:"news"})})}),Qe=(s(212),function(){return Object(ae.jsx)("div",{children:Object(ae.jsx)("span",{children:"music322"})})}),$e=(s(213),function(){return Object(ae.jsx)("div",{children:Object(ae.jsx)("span",{children:"settings"})})}),et=s(41),tt=s.n(et),st=function(e){return Object(ae.jsxs)("div",{className:tt.a.wrapper,children:[Object(ae.jsxs)("div",{className:tt.a.leftBlock,children:[Object(ae.jsx)("div",{className:tt.a.avatar,children:Object(ae.jsx)(te.b,{to:"/profile/"+e.data.id,children:Object(ae.jsx)("img",{src:null!==e.data.photos.small?e.data.photos.small:"https://img1.freepng.ru/20180315/wre/kisspng-computer-icons-clip-art-man-icon-5aab18530bdfb1.3779945315211623230486.jpg",alt:""})})}),Object(ae.jsx)("button",{onClick:function(){e.setFollowingProgres(e.data.id,!0),e.data.followed?e.unFollowUser(e.data.id):e.followUser(e.data.id)},disabled:e.followingProgres.some((function(t){return t===e.data.id})),children:e.data.followed?"Unfollow":"Follow"})]}),Object(ae.jsxs)("div",{className:tt.a.rightBlock,children:[Object(ae.jsxs)("div",{children:[Object(ae.jsx)("span",{children:e.data.name}),Object(ae.jsx)("span",{children:e.data.status})]}),Object(ae.jsxs)("div",{children:[Object(ae.jsx)("span",{children:"props.data.location.town"}),Object(ae.jsx)("span",{children:"props.data.location.country"})]})]})]})},nt=s(79),at=s.n(nt),rt=function(e){Object($.a)(s,e);var t=Object(ee.a)(s);function s(){var e;Object(q.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).getArrUsers=function(){return e.props.usersData.map((function(t){return Object(ae.jsx)(st,{data:t,followUser:e.props.followUserTK,unFollowUser:e.props.unFollowUserTK,setFollowingProgres:e.props.setFollowingProgres,followingProgres:e.props.followingProgres})}))},e.onPageChange=function(t){e.props.getUsersThunkCreator(t,e.props.pageSize),e.props.setCurrentPage(t)},e}return Object(Q.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){for(var e=this,t=Math.ceil(this.props.totalUsers/this.props.pageSize),s=[],n=1;n<=t;n++)s.push(n);return Object(ae.jsxs)("div",{children:[this.props.isFetching?Object(ae.jsx)(Ae,{}):null,Object(ae.jsxs)("div",{className:"",children:[Object(ae.jsx)("div",{className:at.a.pages,children:s.map((function(t){return Object(ae.jsx)("span",{className:t===e.props.currentPage?at.a.selected:"q",onClick:function(){e.onPageChange(t)},children:t})}))}),this.getArrUsers(),Object(ae.jsx)("button",{children:"Show More"})]})]})}}]),s}(X.a.Component),it=rt,ct=Object(n.d)(Object(ie.b)((function(e){return{usersData:e.findUsers.usersData,pageSize:e.findUsers.pageSize,totalUsers:e.findUsers.totalUsers,currentPage:e.findUsers.currentPage,isFetching:e.findUsers.isFetching,followingProgres:e.findUsers.followingProgres}}),{followUserTK:function(e){return function(t){u(e).then((function(s){0===s.resultCode&&t(function(e){return{type:U,id:e}}(e)),t(M(e,!1))}))}},unFollowUserTK:function(e){return function(t){u(e).then((function(s){0===s.resultCode&&t(function(e){return{type:N,id:e}}(e)),t(M(e,!1))}))}},setCurrentPage:function(e){return{type:D,currentPage:e}},setFollowingProgres:M,getUsersThunkCreator:function(e,t){return function(s){s(T(!0)),o(e,t).then((function(e){var t;s(T(!1)),s((t=e.totalCount,{type:k,totalUsers:t})),s(function(e){return{type:C,arrUsers:Object(a.a)(e)}}(e.items))}))}}}),Ie)(it),ot=s(256),ut=s(255),dt=Object(ut.a)({form:"login"})((function(e){return Object(ae.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(ae.jsx)("div",{children:Object(ae.jsx)(ot.a,{component:"input",name:"login",placeholder:"login"})}),Object(ae.jsx)("div",{children:Object(ae.jsx)(ot.a,{component:"input",name:"password",placeholder:"password"})}),Object(ae.jsx)("div",{children:Object(ae.jsx)(ot.a,{component:"input",type:"checkbox",placeholder:"",name:"rememberMe"})}),Object(ae.jsx)("div",{children:Object(ae.jsx)("button",{children:"SUBMIT"})})]})})),lt=Object(ie.b)((function(e){return{auth:e.auth.isAuth}}),{login:function(e){return function(t){h(e).then((function(e){0===e.resultCode?t(L):alert("mdaaa")}))}}})((function(e){return Object(ae.jsxs)("div",{children:[Object(ae.jsx)("h1",{children:"LOGIN"}),Object(ae.jsx)(dt,{onSubmit:function(t){console.log(t),e.login(t)}})]})})),jt=function(e){return Object(ae.jsx)("div",{className:"container",children:Object(ae.jsxs)("div",{className:"wrapper",children:[Object(ae.jsx)(oe,{}),Object(ae.jsx)(_e,{data:e.store.getState().sideBar}),Object(ae.jsxs)("div",{className:"main",children:[Object(ae.jsx)(Ee.b,{path:"/dialogs",render:function(){return Object(ae.jsx)(Ze,{store:e.store})}}),Object(ae.jsx)(Ee.b,{path:"/profile/:userid?",render:function(){return Object(ae.jsx)(Le,{store:e.store})}}),Object(ae.jsx)(Ee.b,{path:"/news",component:qe}),Object(ae.jsx)(Ee.b,{path:"/music",component:Qe}),Object(ae.jsx)(Ee.b,{path:"/settings",component:$e}),Object(ae.jsx)(Ee.b,{path:"/users",render:function(){return Object(ae.jsx)(ct,{store:e.store})}}),Object(ae.jsx)(Ee.b,{path:"/login",render:function(){return Object(ae.jsx)(lt,{})}})]})]})})},pt=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,258)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),r(e),i(e)}))};Z.a.render(Object(ae.jsx)(X.a.StrictMode,{children:Object(ae.jsx)(te.a,{children:Object(ae.jsx)(ie.a,{store:J,children:Object(ae.jsx)(jt,{store:J})})})}),document.getElementById("root")),pt()},34:function(e,t,s){e.exports={wrapper:"friend_wrapper__2cvTZ",avatar:"friend_avatar__2RPSR",name:"friend_name__3sOVR",myActive:"friend_myActive__3G4iz",friend:"friend_friend__12rDX"}},41:function(e,t,s){e.exports={wrapper:"user_wrapper__gPjku",rightBlock:"user_rightBlock__3h0gn",leftBlock:"user_leftBlock__2L0ni"}},55:function(e,t,s){e.exports={description:"profileInfo_description__1OM7F"}},56:function(e,t,s){e.exports={wrapper:"Dialogs_wrapper__36d4l"}},76:function(e,t,s){e.exports={item:"item_item__3vjka",active:"item_active__spnh4"}},77:function(e,t,s){e.exports={list:"nav_list__1DIV9"}},78:function(e,t,s){e.exports={side:"sideBar_side__317L1",bestFriends:"sideBar_bestFriends__1mjbZ"}},79:function(e,t,s){e.exports={selected:"users_selected__aPobF",pages:"users_pages__11BuH"}}},[[253,1,2]]]);
//# sourceMappingURL=main.ccf888a6.chunk.js.map