(window.webpackJsonpreact=window.webpackJsonpreact||[]).push([[21],{210:function(e,a,t){"use strict";const l=t(525).a.create({baseURL:"https://converg-production-28fb.up.railway.app"});a.a=l},521:function(e,a,t){"use strict";t.r(a);var l=t(210),r=t(0),n=t.n(r),s=t(460),o=t(456),m=t(463),c=t(446),i=t(464),d=t(455),u=t(451),p=t(465),E=t(449),w=t.n(E),h=t(523);a.default=()=>{const[e,a]=Object(r.useState)([]),[t,E]=Object(r.useState)([]),[g,b]=Object(r.useState)(!1),[y,v]=Object(r.useState)(0),[f,P]=Object(r.useState)(),[N,C]=Object(r.useState)({lastpassword:"",newpassword:""}),D={color:"white"};Object(r.useEffect)(()=>{const e={userId:localStorage.getItem("UserId")};l.a.post("/api/users/getuser",e).then(e=>{a(e.data),E(e.data);let t=0;w()(new Date).format("MM")-w()(e.data.registerTime).format("MM")>0&&(t+=30*(w()(new Date).format("MM")-w()(e.data.registerTime).format("MM")),w()(new Date).format("DD")-w()(e.data.registerTime).format("DD")>0&&(t+=w()(new Date).format("DD")-w()(e.data.registerTime).format("DD"))),t>=e.data.period&&(h.a.config({top:60,duration:2}),h.a.warning("Please apply for an extension of time")),v(t)})},[]);const x=()=>{b(!1)};return n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",null,"My Profile"),n.a.createElement("br",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4 mb-5"},n.a.createElement("label",{for:"firstname"},"FirstName: ")," ",n.a.createElement("br",null),n.a.createElement(s.a,{placeholder:"FirstName",id:"FirstName",value:e.firstName,style:{color:"white",width:"100%"}})),n.a.createElement("div",{className:"col-lg-4 mb-5"},n.a.createElement("label",{for:"lastName"},"LastName: ")," ",n.a.createElement("br",null),n.a.createElement(s.a,{placeholder:"lastName",id:"lastName",value:e.lastname,style:{color:"white",width:"100%"}}))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4 mb-5"},n.a.createElement("label",{for:"email"},"Email ")," ",n.a.createElement("br",null),n.a.createElement(s.a,{placeholder:"Email",id:"email",value:e.email,style:{color:"white",width:"100%"}})),n.a.createElement("div",{className:"col-lg-4 mb-5"},n.a.createElement("label",{for:"Password"},"Password: ")," ",n.a.createElement("br",null),n.a.createElement(s.a,{placeholder:"Password",id:"Password",value:localStorage.getItem("Password"),style:{color:"white",width:"100%"}})),n.a.createElement("div",{className:"col-lg-4 mb-5"},n.a.createElement("label",{for:"Username"},"Username: ")," ",n.a.createElement("br",null),n.a.createElement(s.a,{placeholder:"Username",id:"username",value:e.username,style:{color:"white",width:"100%"}}))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4 mb-5"},n.a.createElement("label",{for:"Phone"},"Phone: ")," ",n.a.createElement("br",null),n.a.createElement(s.a,{placeholder:"Phone",id:"Phone",value:e.Phone,style:{color:"white",width:"100%"}})),n.a.createElement("div",{className:"col-lg-4 mb-5"},n.a.createElement("label",{for:"country"},"Country ")," ",n.a.createElement("br",null),n.a.createElement(s.a,{placeholder:"country",id:"country",value:e.country,style:{color:"white",width:"100%"}})),n.a.createElement("div",{className:"col-lg-4 mb-5"},n.a.createElement(o.a,{style:{float:"right",alignItems:"center"},onClick:()=>{E(e),b(!0)}},"Edit"))),n.a.createElement(m.a,{open:g,onClose:x,PaperProps:{style:{borderRadius:"10px"}}},n.a.createElement(c.a,{textAlign:"center",style:{background:"#27283a",color:"white"}},"Change My Profile"),n.a.createElement(i.a,{style:{background:"#27283a"}},n.a.createElement("form",{onSubmit:e=>e.preventDefault()},n.a.createElement(d.a,{sx:{width:"100%",minWidth:{xs:"300px",sm:"360px",md:"400px"},gap:"1.5rem",marginTop:"3px"}},n.a.createElement(u.a,{placeholder:"First Name",inputProps:{style:D},name:"firstName",value:t.firstName,onChange:e=>E({...t,[e.target.name]:e.target.value})}),n.a.createElement(u.a,{placeholder:"Last Name",inputProps:{style:D},name:"lastname",value:t.lastname,onChange:e=>E({...t,[e.target.name]:e.target.value})})," ",n.a.createElement(u.a,{placeholder:"Email",inputProps:{style:D},name:"email",value:t.email,onChange:e=>E({...t,[e.target.name]:e.target.value})})," ",n.a.createElement(u.a,{placeholder:"Phone",name:"Phone",inputProps:{style:D},value:t.Phone,onChange:e=>E({...t,[e.target.name]:e.target.value})}),n.a.createElement(u.a,{placeholder:"Country",inputProps:{style:D},name:"country",value:t.country,onChange:e=>E({...t,[e.target.name]:e.target.value})}),n.a.createElement(u.a,{placeholder:"Last Password",inputProps:{style:D},name:"lastpassword",value:N.lastpassword,onChange:e=>C({...N,[e.target.name]:e.target.value}),type:"password"}),n.a.createElement(u.a,{placeholder:"New Password",inputProps:{style:D},name:"newpassword",value:N.newpassword,onChange:e=>C({...N,[e.target.name]:e.target.value}),type:"password"}),y>=t.period?n.a.createElement(s.a,{max:300,min:30,placeholder:"extend your period",inputProps:{style:D},value:f,onChange:e=>P(e.target.value),type:"number"}):null))),n.a.createElement(p.a,{sx:{p:"1.25rem"},style:{background:"#27283a"}}," ",n.a.createElement(o.a,{onClick:x,style:{color:"#27283a",backgroundColor:"#8b8fa3"}},"Cancel"),n.a.createElement(o.a,{onClick:()=>{P();const e={_id:t._id,firstName:t.firstName,lastname:t.lastname,email:t.email,Phone:t.Phone,country:t.country,lastpassword:N.lastpassword,newpassword:N.newpassword,request:f};e.newpassword&&localStorage.setItem("Password",N.newpassword),l.a.post("/api/users/updateusers",e).then(e=>{e.data&&(a(e.data),h.a.success("Success"),b(!1))})},variant:"contained",style:{backgroundColor:"#8b8fa3"}},"Update"))))}}}]);
//# sourceMappingURL=21.fea72753.chunk.js.map