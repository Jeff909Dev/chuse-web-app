(this["webpackJsonpgestor-de-tareas"]=this["webpackJsonpgestor-de-tareas"]||[]).push([[0],{175:function(e,a,t){e.exports=t.p+"static/media/logo.810538db.png"},252:function(e,a,t){e.exports=t.p+"static/media/logo_color.f3ea44b9.png"},253:function(e,a,t){e.exports=t.p+"static/media/logo_iso.98c8073b.png"},267:function(e,a,t){e.exports=t(534)},276:function(e,a,t){},335:function(e,a,t){},394:function(e,a,t){},442:function(e,a,t){},446:function(e,a,t){},452:function(e,a,t){},529:function(e,a,t){},530:function(e,a,t){},531:function(e,a,t){},532:function(e,a,t){},534:function(e,a,t){"use strict";t.r(a);var n,r=t(0),c=t.n(r),l=t(4),o=t.n(l),i=t(24),s=t(62),m=t(229),u=t(11),d=t(557),f={from:"#E21F77",to:"#4F2A69"},E=t(90),p=Object(d.a)(Object(u.a)({},"AUTHORIZATION",(function(e,a){var t=a.payload;return{token:t.token,auth:t.auth}})),{token:"",auth:!1}),h=Object(d.a)((n={},Object(u.a)(n,"FETCH_TASKS",(function(e,a){return Object(E.uniqBy)(e.concat(a.payload),"oid")})),Object(u.a)(n,"UPDATE_TASK",(function(e,a){var t=Object(E.find)(e,{oid:a.payload.oid});return t.estado=a.payload.estado,Object(E.uniqBy)(e.concat(t),"oid")})),n),[]),b=Object(d.a)(Object(u.a)({},"SET_USER_INFO",(function(e,a){return a.payload})),{}),g=Object(d.a)(Object(u.a)({},"LOADING",(function(e,a){return a.payload})),!1),v=Object(s.c)({authorization:p,user_info:b,tasks:h,loading:g}),k=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,y=Object(s.e)(v,{},k(Object(s.a)(m.a))),O=t(559),N=t(47),x=Object(N.a)(),w=(t(276),function(e,a,t){var n=new Date;n.setTime(n.getTime()+24*t*60*60*1e3);var r="expires="+n.toUTCString();document.cookie=e+"="+a+";"+r+";path=/"}),j=function(e){for(var a=e+"=",t=decodeURIComponent(document.cookie).split(";"),n=0;n<t.length;n++){for(var r=t[n];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(a))return r.substring(a.length,r.length)}return""},C=t(58),I=t(44),S=t(120),T=t(121),A=t(133),R=(t(108),t(45)),F=(t(35),t(8)),_=t(562),U=(t(279),t(263)),D=(t(281),t(260)),L=(t(283),t(136)),P=t(22),z=t(560),H=t(561),M=t(236),B=t.n(M),K=(t(180),t(101)),V=(t(287),t(264)),q=(t(289),t(233)),Z=[{type:"normal",content:"Notification 1"},{type:"normal",content:"Notification 2"},{type:"normal",content:"Notification 3"},{type:"normal",content:"Notification 4"}],W=function(e){var a=[];return e.map((function(e,t){return a.push(c.a.createElement("p",{key:"notification-".concat(t)},e.type," - ",e.content))})),a},G=function(){return c.a.createElement(r.Fragment,null,c.a.createElement("div",{className:"user_toolbar px-3"},c.a.createElement(K.a,{content:W(Z),title:"Notificaciones"},c.a.createElement(V.a,{count:8},c.a.createElement(q.a,{icon:c.a.createElement(z.a,null)})))))},X=(t(335),function(){var e=Object(i.c)(),a=Object(i.d)((function(e){return e.user_info})),t=Object(r.useState)(!1),n=Object(P.a)(t,2),l=n[0],o=n[1],s=c.a.createElement(L.a,null,c.a.createElement(L.a.Item,null,c.a.createElement(F.a,{onClick:function(){return o(!l)},type:"link",icon:c.a.createElement(z.a,null),className:"text-decoration-none text-left",href:"#"},"VER PERFIL")),c.a.createElement(L.a.Item,null,c.a.createElement(F.a,{onClick:function(){w("k-task-manager-tkn",""),e({type:"AUTHORIZATION",payload:{token:"",auth:!1}})},type:"link",icon:c.a.createElement(H.a,null),className:"text-decoration-none text-left",href:"#"},"CERRAR SESI\xd3N")));return c.a.createElement(r.Fragment,null,c.a.createElement("div",{className:"px-4 d-flex"},c.a.createElement(G,null),c.a.createElement(D.a,{overlay:s,className:"text-left user_toolbar px-2"},c.a.createElement(B.a,{className:"mr-2"},a.nombre))),c.a.createElement(U.a,{visible:l,width:"100%",closable:!0,onClose:function(){return o(!1)}},c.a.createElement("div",null,"USER INFO DRAWER")))}),J=R.a.Header,$={padding:0,background:"#fff",boxShadow:"0 1px 4px rgba(0,21,41,.08)",display:"flex",justifyContent:"space-between"},Q=function(e){return c.a.createElement(J,{style:$},c.a.createElement("div",{className:"px-4"},c.a.createElement(F.a,{className:"",icon:c.a.createElement(_.a,null)})),c.a.createElement(X,null))},Y=R.a.Content,ee={margin:"24px 16px 0"},ae={height:"100vh",maxHeight:"100vh",overflow:"auto"},te=function(e){return c.a.createElement(R.a,{style:ae},c.a.createElement(R.a,{style:ae},c.a.createElement(Q,null),c.a.createElement(Y,{style:ee},c.a.createElement("div",{className:"site-layout-background",style:{padding:0,minHeight:360,marginBottom:60}},e.children))))},ne=t(554),re=t(555),ce=(t(156),t(65)),le={color:"rgb(74, 74, 74)",fontWeight:700},oe=function(e){return c.a.createElement("h5",{style:le,className:"d-flex justify-content-start align-items-center mb-4"},e.icon,c.a.createElement(ce.a,{type:"vertical",style:{margin:"0 2px"}}),e.title)};oe.defaultProps={title:"EXAMPLE TITLE",icon:null};var ie=oe,se=function(e){var a=e.i,t=e.t,n=e.className;return c.a.createElement(r.Fragment,null,a?c.a.createElement("span",null,c.a.createElement("i",{className:"".concat(t||"fal"," ").concat(a," app-icon ").concat(n||"")})):c.a.createElement("span",null,"404 icon."))},me=function(){return c.a.createElement("div",null,c.a.createElement("input",{type:"file",id:"fileInput",className:"d-none"}),c.a.createElement(F.a,{onClick:function(){document.getElementById("fileInput").click()},icon:c.a.createElement(se,{i:"fa-camera-retro",t:"fad"}),size:"large"}))},ue=(t(392),t(258)),de=t(261),fe=t(238),Ee=t.n(fe),pe=(t(394),t(126)),he=t.n(pe),be=function(){var e=Object(r.useState)(),a=Object(P.a)(e,2),t=a[0],n=a[1],l=Object(r.useState)(!1),o=Object(P.a)(l,2),i=o[0],s=o[1],m=Object(r.useState)(!1),u=Object(P.a)(m,2),d=u[0],f=u[1],E=Object(r.useState)(!1),p=Object(P.a)(E,2),h=p[0],b=p[1],g=Object(r.useState)(),v=Object(P.a)(g,2),k=v[0],y=v[1],O=function(){t.playPause()};return Object(r.useEffect)((function(){t&&k&&t.load(k)})),c.a.createElement("div",null,c.a.createElement(F.a,{onClick:function(){return s(!i)},icon:c.a.createElement(se,{i:"fa-microphone-alt",t:"fad"}),size:"large"}),c.a.createElement(ue.a,{title:"Grabar audio",visible:i,onOk:function(){return s(!1)}},h?null:c.a.createElement(de.a,{record:d,className:"sound-wave",strokeColor:"#0490E2",backgroundColor:"#333",onStop:function(e){return function(e){n(Ee.a.create({container:"#waveform",waveColor:"#0490E2",progressColor:"#FFF"})),y(e.blobURL),b(!0)}(e)}}),c.a.createElement("div",{id:"waveform"}),h?c.a.createElement(he.a,null,c.a.createElement("div",{className:"mt-2 d-flex justify-content-center"},c.a.createElement(F.a,{className:"mr-4",onClick:function(){return O()},icon:c.a.createElement(se,{i:"fa-play",t:"fad"})}),c.a.createElement(F.a,{className:"ml-4",onClick:function(){return O()},icon:c.a.createElement(se,{i:"fa-pause",t:"fad"})}))):null,c.a.createElement("div",{className:"d-flex justify-content-around mt-4"},d?c.a.createElement(F.a,{size:"large",block:!0,className:"".concat(d?"recording":""),icon:c.a.createElement(se,{i:"fa-stop",t:"fad"}),onClick:function(){return f(!1)}},"Detener grabaci\xf3n"):c.a.createElement(F.a,{size:"large",block:!0,icon:c.a.createElement(se,{i:"fa-record-vinyl",t:"fad"}),onClick:function(){return document.getElementById("waveform").innerHTML=null,f(!0),void b(!1)}},"Iniciar grabaci\xf3n"))))},ge={position:"absolute",bottom:0,width:"100%"},ve=function(e){e.taskID;return c.a.createElement(r.Fragment,null,c.a.createElement("div",{style:ge,className:"d-flex justify-content-around"},c.a.createElement(be,null),c.a.createElement(me,null),c.a.createElement(F.a,{icon:c.a.createElement(se,{i:"fa-times-square",t:"fad"}),size:"large"})))},ke=function(e){e.tasks;return c.a.createElement(r.Fragment,null,c.a.createElement(ie,{title:"INICIO",icon:c.a.createElement("i",{className:"fad fa-home"})}),c.a.createElement(ne.a,{className:"mb-4"},c.a.createElement(re.a,{xs:12,md:12,lg:12})),c.a.createElement(ne.a,{className:"mb-4"},c.a.createElement(re.a,{xs:12,md:12,lg:12})))},ye=(t(404),t(68)),Oe=t(16),Ne=(t(410),t(259)),xe=(t(412),t(245)),we=(t(206),t(130)),je=(t(207),t(134)),Ce=(t(208),t(129)),Ie=t(29),Se=t.n(Ie),Te=(t(210),t(563)),Ae=t(564),Re=t(565),Fe=t(566),_e=t(567),Ue=[{icon:"chevron-double-down",color:"#ff874d",label:"Baja"},{icon:"grip-lines",color:"#52c41a",label:"Media"},{icon:"chevron-double-up",color:"#d9363e",label:"Alta"}],De=function(e){var a=e.level,t=e.className;return c.a.createElement(r.Fragment,null,a||0===a?c.a.createElement("div",{className:t||""},c.a.createElement(F.a,{shape:"circle",type:"dashed",style:{},className:"app-status-icon",icon:c.a.createElement("i",{className:"fad fa-".concat(Ue[a].icon),style:{color:Ue[a].color}})})):c.a.createElement("span",null,"404 icon."))},Le=(t(418),t(177)),Pe="https://apitareas.kuarasoftware.com",ze="https://api.codetabs.com/v1/proxy?quest=",He=t(67),Me=t.n(He),Be=(t(442),Ce.a.Title),Ke=function(e){var a=e.data,t=e.type,n=Object(i.c)(),l=Object(i.d)((function(e){return e.loading})),o=Se()(),s=Se()(a.fechaInicio),m=Se()(a.fechaVencimiento),u=c.a.createElement("div",null,c.a.createElement("p",null,a.observaciones?a.observaciones:"Sin observaciones.")),d=c.a.createElement("div",null,c.a.createElement("p",null,a.supervisorNombre)),E=function(e,a){n(function(e,a){return function(t){var n;Me.a.get("".concat(ze).concat(Pe).concat((n=e,n?"/tareas/finalizar/":"/tareas/cambiaraestadoencurso/"),"/").concat(a)).then((function(e){switch(console.log("changeTaskStatus -> response",e.data),e.data){case 1:t({type:"UPDATE_TASK",payload:{oid:a,estado:1}}),Le.a.warning(c.a.createElement("p",null,"El estado de la tarea a pasado a ",c.a.createElement("strong",null,"EN CURSO")));break;case 3:t({type:"UPDATE_TASK",payload:{oid:a,estado:3}}),Le.a.success("Tarea finalizada correctamente.")}})).catch((function(e){return console.log(e)}))}}(e,a))},p=function(){x.push("/tasks/".concat(t,"/").concat(a.oid))};return c.a.createElement(r.Fragment,null,c.a.createElement(Oe.Col,{xs:12,md:12,lg:6},c.a.createElement("div",{className:"task ".concat(l?"d-none":"")},c.a.createElement(Be,{strong:!0,level:4,className:"m-0"},c.a.createElement("span",{onClick:function(){return p()}},a.descripcion)),c.a.createElement(je.a,{color:"cyan"},a.primerResponsableNombre),c.a.createElement(we.a,{percent:function(){s=s||Se()(o).startOf("day");var e=(m=m||Se()(o).endOf("day")).valueOf()-s.valueOf(),a=o.valueOf()-s.valueOf();return Math.round(Math.max(0,Math.min(100,a/e*100)))}(),size:"small",strokeColor:f}),c.a.createElement(Oe.Row,{className:"m-0 d-flex justify-content-between align-items-center"},c.a.createElement(Oe.Col,null,c.a.createElement(De,{level:a.prioridad})),c.a.createElement(Oe.Col,null,c.a.createElement(F.a,{shape:"round",type:"dashed",icon:c.a.createElement(Te.a,null)},s.format("L")," - ",m.format("L")))),c.a.createElement(Oe.Row,{className:"mx-0 mt-2 d-flex justify-content-between align-items-center"},c.a.createElement(Oe.Col,null,c.a.createElement(F.a,{shape:"round",type:"dashed",icon:c.a.createElement(Ae.a,null),onClick:function(){return p()}})),c.a.createElement(Oe.Col,null,c.a.createElement(K.a,{content:u,title:"Observaciones",overlayStyle:{width:"70%"}},c.a.createElement(F.a,{shape:"round",type:"dashed",icon:c.a.createElement(Re.a,null)}))),c.a.createElement(Oe.Col,null,c.a.createElement(K.a,{title:"Supervisor",content:d},c.a.createElement(F.a,{shape:"round",type:"dashed",icon:c.a.createElement(z.a,null)}))),c.a.createElement(Oe.Col,null,c.a.createElement(xe.a,{defaultChecked:function(e){switch(e){case 1:return!1;case 3:return!0}}(a.estado),onChange:function(e){return E(e,a.oid)},checkedChildren:c.a.createElement(Fe.a,null),unCheckedChildren:c.a.createElement(_e.a,null)}))),c.a.createElement(Oe.Row,null,c.a.createElement(Oe.Col,{xs:12},c.a.createElement(Ne.a,{loading:l,active:!0,paragraph:{rows:2}}))))))},Ve=function(e){var a=e.data,t=e.type;return c.a.createElement(r.Fragment,null,c.a.createElement(ie,{title:"TAREAS",icon:c.a.createElement(se,{t:"fad",i:"fa-tasks-alt"})}),c.a.createElement(Oe.Row,{className:"mb-2",start:"xs"},c.a.createElement(Oe.Col,{xs:12,md:12,lg:12})),c.a.createElement(Oe.Row,{className:"mb-2",start:"xs"},c.a.createElement(Oe.Col,{xs:12,md:12,lg:12},c.a.createElement("small",null,null!==a[0]?a.length:0," Tarea(s) listadas."))),c.a.createElement(Oe.Row,null,function(){console.time("Tiempo renderizado tareas");var e=[];if(0===a.length||null===a[0])return c.a.createElement(Oe.Col,{xs:12,md:12,lg:12,className:"text-center"},c.a.createElement(ye.a,{description:"No hay tareas para mostrar."}));for(var n in a)a[n]&&e.push(c.a.createElement(Ke,{data:a[n],type:t,key:"tasks-".concat(n)}));return console.timeEnd("Tiempo renderizado tareas"),e}()))},qe=(t(444),t(247)),Ze=[{icon:"chevron-double-down",color:"#ff874d",label:"Baja"},{icon:"grip-lines",color:"#52c41a",label:"Media"},{icon:"chevron-double-up",color:"#d9363e",label:"Alta"}],We=function(e){var a=e.level,t=(e.tooltip,e.title);return c.a.createElement(r.Fragment,null,t?c.a.createElement("strong",null,t):"",c.a.createElement(je.a,{color:Ze[a].color,className:"ml-3"},c.a.createElement(se,{i:"fa-".concat(Ze[a].icon," mr-2"),t:"fad"}),Ze[a].label))},Ge=(t(446),Ce.a.Title),Xe={borderColor:"#4f2a693d",margin:"15px 0px"},Je=function(e){var a=e.data;if(a){var t=Se()(),n=Se()(a.fechaInicio),l=Se()(a.fechaVencimiento);return c.a.createElement(r.Fragment,null,c.a.createElement(he.a,null,c.a.createElement("div",{className:"task-extended"},c.a.createElement(Ge,{strong:!0,level:4,className:"m-0"},a.descripcion),c.a.createElement(we.a,{steps:19,percent:function(){n=n||Se()(t).startOf("day");var e=(l=l||Se()(t).endOf("day")).valueOf()-n.valueOf(),a=t.valueOf()-n.valueOf();return Math.round(Math.max(0,Math.min(100,a/e*100)))}(),strokeColor:f.to,className:"mb-3"}),c.a.createElement("p",null," ",c.a.createElement(se,{i:"fa-calendar-check",t:"fal"})," Fecha de inicio: ",c.a.createElement("strong",null,n.format("L"))),c.a.createElement("p",null," ",c.a.createElement(se,{i:"fa-calendar-exclamation",t:"fal"})," Fecha de vencimiento: ",c.a.createElement("strong",null,l.format("L"))),c.a.createElement("p",null," ",c.a.createElement(se,{i:"fa-alarm-exclamation",t:"fal"})," Hora: ",c.a.createElement("strong",null,a.horaVencimiento)),c.a.createElement(ce.a,{dashed:!0,style:Xe}),c.a.createElement("p",null," ",c.a.createElement(se,{i:"fa-clipboard-user",f:"fal"})," Responsable: ",c.a.createElement("strong",null,a.primerResponsableNombre)),c.a.createElement("p",null," ",c.a.createElement(se,{i:"fa-user-tie",f:"fal"})," Supervisor: ",c.a.createElement("strong",null,a.supervisorNombre)),c.a.createElement("p",null," ",c.a.createElement(se,{i:"fa-project-diagram",f:"fal"})," Proyecto: ",c.a.createElement("strong",null,a.proyectoNombre)),c.a.createElement(ce.a,{dashed:!0,style:Xe}),c.a.createElement(We,{level:a.prioridad,title:"PRIORIDAD",tooltip:!0}),c.a.createElement(ce.a,{dashed:!0,style:Xe}),c.a.createElement("p",null," ",c.a.createElement(se,{i:"fa-comments-alt",f:"fal"})," Observaciones: ",c.a.createElement("strong",null,a.observaciones)),c.a.createElement(ve,{taskID:a.oid}))))}return c.a.createElement(qe.a,{tip:"Cargando tareas...",className:"w-100 m-auto"})},$e=t(556),Qe=t(558),Ye=(t(452),function(e){var a=e.handleSelected,t=Object(r.useState)(x.location.pathname),n=Object(P.a)(t,2),l=n[0],o=n[1];return c.a.createElement($e.a,{value:l,onChange:function(e,t){o(t),x.push(t),a(t)},className:"fixed-bottom"},c.a.createElement(Qe.a,{label:"INICIO",value:"/",icon:c.a.createElement(se,{i:"fa-home",t:"fad"})}),c.a.createElement(Qe.a,{label:"PROPIAS",value:"/tasks/own",icon:c.a.createElement(se,{i:"fa-user-clock",t:"fad"})}),c.a.createElement(Qe.a,{label:"SUPERVISADAS",value:"/tasks/supervised",icon:c.a.createElement(se,{i:"fa-clipboard-user",t:"fad"})}),c.a.createElement(Qe.a,{label:"FINALIZADAS",value:"/tasks/ended",icon:c.a.createElement(se,{i:"fa-user-check",t:"fad"})}))}),ea=function(e){function a(e){var t;return Object(C.a)(this,a),(t=Object(S.a)(this,Object(T.a)(a).call(this,e))).handleSelected=function(e){"/"!==e&&t.props.fetchTasks(e.replace("/tasks/",""),t.props.token)},t.state={selected:t.props.location.pathname.replace("/tasks/","").split("/")[0]},t}return Object(A.a)(a,e),Object(I.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchUserInfo(this.props.token),("/"!==this.props.location.pathname||this.state.selected)&&this.props.fetchTasks(this.state.selected,this.props.token)}},{key:"render",value:function(){var e=this;return c.a.createElement(te,null,c.a.createElement(O.a,{exact:!0,path:"/",component:function(e){return c.a.createElement(ke,null)}}),c.a.createElement(O.a,{exact:!0,path:"/tasks/:type",component:function(a){var t=[];switch(a.match.params.type){case"own":t=e.props.tasks.filter((function(a){return a.supervisor===e.props.token&&3!==a.estado}));break;case"supervised":t=e.props.tasks.filter((function(a){return a.primerResponsable===e.props.token&&a.supervisor===e.props.token&&3!==a.estado}));break;case"ended":t=e.props.tasks.filter((function(e){return 3===e.estado}))}return c.a.createElement(Ve,{data:t,type:a.match.params.type})}}),c.a.createElement(O.a,{exact:!0,path:"/tasks/:type/:id",component:function(a){var t=e.props.tasks.find((function(e){return e.oid===Number(a.match.params.id)}));return c.a.createElement(Je,{data:t})}}),c.a.createElement(Ye,{handleSelected:this.handleSelected}))}}]),a}(r.Component);ea.defaultProps={token:"",tasks:[]};var aa={fetchTasks:function(e,a){return function(t){Me.a.get("".concat(ze).concat(Pe).concat(function(e){switch(e){case"own":return"/tareas/usuario/";case"supervised":return"/tareas/usuariopro/";case"ended":return"/tareas/usuariofin/";default:return""}}(e)).concat(a,"/info")).then((function(e){null===e.data[0]?t({type:"FETCH_TASKS",payload:[]}):t({type:"FETCH_TASKS",payload:e.data})})).catch((function(e){return console.log(e)}))}},fetchUserInfo:function(e){return function(a){Me.a.get("".concat(ze).concat(Pe).concat("/usuario/","/").concat(e)).then((function(e){a({type:"SET_USER_INFO",payload:e.data})})).catch((function(e){return console.log(e)}))}}},ta=Object(i.b)((function(e,a){return{token:e.authorization.token,tasks:e.tasks}}),aa)(ea),na=Object(O.c)(ta),ra=(t(454),t(262)),ca=(t(535),t(105)),la=(t(209),t(178)),oa=t(568),ia=t(569),sa=R.a.Footer,ma=function(){return c.a.createElement(sa,{className:"text-center"},"Kuara Software \xa92020 Gestor de tareas")},ua=t(175),da=t.n(ua),fa=t(252),Ea=t.n(fa),pa=t(253),ha=t.n(pa),ba=function(e){var a=e.type,t=e.width,n=e.pos;switch(a){case"basic":return c.a.createElement("div",{className:"".concat(n?"text-"+n:"text-center")},c.a.createElement("img",{width:t||"40%",src:da.a,alt:"Logo"}));case"color":return c.a.createElement("div",{className:"".concat(n?"text-"+n:"text-center")},c.a.createElement("img",{width:t||"40%",src:Ea.a,alt:"Logo"}));case"iso":return c.a.createElement("div",{className:"".concat(n?"text-"+n:"text-center")},c.a.createElement("img",{width:t||"40%",src:ha.a,alt:"Logo"}));default:return c.a.createElement("div",{className:"".concat(n?"text-"+n:"text-center")},c.a.createElement("img",{width:t||"40%",src:da.a,alt:"Logo"}))}},ga=function(e){var a=e.getLoginData,t=j("kuara-login-credentials-usr"),n=j("kuara-login-credentials-pwd");return c.a.createElement(R.a,{style:{height:"100vh"}},c.a.createElement(Oe.Row,{className:"m-auto"},c.a.createElement(Oe.Col,{xs:8,md:4,lg:2,className:"m-auto"},c.a.createElement(ba,{type:"color",width:"50%"}),c.a.createElement(ce.a,{dashed:!0,style:{borderColor:"#292a5c"}}),c.a.createElement(ca.a,{autoComplete:"true",initialValues:{remember:!0,username:t,password:n},layout:"vertical",onFinish:function(e){a(e),e.remember?(w("kuara-login-credentials-usr",e.username),w("kuara-login-credentials-pwd",e.password)):(w("kuara-login-credentials-usr",""),w("kuara-login-credentials-pwd",""))}},c.a.createElement(ca.a.Item,{name:"username",rules:[{required:!0,message:"\xa1Campo obligatorio!"}]},c.a.createElement(la.a,{placeholder:"Usuario",prefix:c.a.createElement(z.a,null)})),c.a.createElement(ca.a.Item,{name:"password",rules:[{required:!0,message:"\xa1Campo obligatorio!"}]},c.a.createElement(la.a.Password,{placeholder:"Contrase\xf1a",prefix:c.a.createElement(oa.a,null)})),c.a.createElement(ca.a.Item,{name:"remember",valuePropName:"checked"},c.a.createElement(ra.a,null,"Recordar credenciales")),c.a.createElement(F.a,{block:!0,type:"primary",htmlType:"submit",icon:c.a.createElement(ia.a,null)},"ENTRAR")))),c.a.createElement(ma,null))},va=function(e){var a=Object(i.c)();return c.a.createElement(r.Fragment,null,c.a.createElement(ga,{getLoginData:function(e){a(function(e){return function(a){var t="";Me.a.get("".concat(ze).concat(Pe).concat("/usuario/getalluser/")).then((function(n){var r=Object(E.find)(n.data,["userName",e.username]);r.isActive&&(t=r.oid,Me.a.get("".concat(ze).concat(Pe).concat("/usuario/loginok/").concat(t,"/").concat(e.password)).then((function(e){e&&(a({type:"AUTHORIZATION",payload:{token:t,auth:!0}}),w("k-task-manager-tkn",t,1))})))})).catch((function(e){console.log(e)}))}}(e))}}))},ka=(t(529),t(530),t(531),t(532),t(533),function(){var e=Object(i.d)((function(e){return e.authorization.auth})),a=Object(i.c)();return Object(r.useEffect)((function(){j("k-task-manager-tkn")&&a({type:"AUTHORIZATION",payload:{token:j("k-task-manager-tkn"),auth:!0}})})),c.a.createElement("div",{className:"App"},e?c.a.createElement(na,null):c.a.createElement(va,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(i.a,{store:y},c.a.createElement(O.b,{history:x},c.a.createElement(ka,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[267,1,2]]]);
//# sourceMappingURL=main.209bd73b.chunk.js.map