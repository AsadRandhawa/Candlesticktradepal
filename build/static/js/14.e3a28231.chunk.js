(window.webpackJsonpreact=window.webpackJsonpreact||[]).push([[14],{229:function(e,a,t){"use strict";var l=t(0),r=t.n(l),c=t(41),o=t(222),n=t(64);a.a=e=>{const{currency:a,onCurrencyChange:t,disabled:s}=e,i=Object(c.b)(),m=e=>{switch(e){case"green":return{color:"#71DD37",backgroundColor:"#313B3F",fontSize:12,textAlign:"center",borderRadius:20};case"red":return{color:"#FF3E1D",backgroundColor:"#3F3131",fontSize:12,textAlign:"center",borderRadius:20};case"blue":return{color:"#03C3EC",backgroundColor:"#313B3F",fontSize:12,textAlign:"center",borderRadius:20};case"yellow":case"input_yellow":return{color:"#FA8C26",backgroundColor:"#313B3F",fontSize:12,textAlign:"center",borderRadius:20};case"input_red":return{color:"#FF3E1D",backgroundColor:"#3F3131",fontSize:12,textAlign:"center",borderRadius:20};case"input_green":return{color:"#71DD37",backgroundColor:"#313B3F",fontSize:12,textAlign:"center",borderRadius:20};case"input_white":return{color:"#FCF9F7",backgroundColor:"#313B3F",fontSize:12,textAlign:"center",borderRadius:20};case"input_blue":return{color:"#03C3EC",backgroundColor:"#06324C",fontSize:12,textAlign:"center",borderRadius:20};default:return"foo"}},d=["$","\xa3","\u0e3f","\u20ac","\xa5","\u20a3","\u20b9"].map((e,a)=>r.a.createElement("option",{key:a,value:e},e));return Object(l.useEffect)(()=>{i(Object(n.f)(a))},[a]),r.a.createElement(r.a.Fragment,null,"input_yellow"===e.color||"input_green"===e.color||"input_red"===e.color||"input_white"===e.color||"input_blue"===e.color?r.a.createElement("div",{style:{width:"80%",marginLeft:"10%"}},r.a.createElement("label",{className:"px-1 ",style:{color:"#FFFFFF"}},e.title),"%"===e.val?r.a.createElement("div",{className:"input-group"},r.a.createElement(o.a,{thousandSeparator:!0,onKeyPress:e.onKeyPress,ref:e.ref,value:e.value,style:{color:m(e.color).color,backgroundColor:"#3B4758",borderColor:"#3B4758"},className:"form-control","aria-describedby":"basic-addon1",onKeyDown:e.onKeyDown,onChange:e.onChange,name:e.name}),r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text ",style:{fontSize:14,borderRadius:"0px 6px 6px 0px",color:"#BAC4D1",backgroundColor:"#3B4758",borderColor:"#3B4758"}},e.val))):r.a.createElement("div",{className:"input-group"},"m"===e.val?r.a.createElement(o.a,{thousandSeparator:!0,onKeyPress:e.onKeyPress,ref:e.ref,value:e.value,style:{color:"white",borderRadius:"6px 6px 6px 6px",backgroundColor:"#3B4758",borderColor:"#3B4758"},className:"form-control","aria-describedby":"basic-addon1",onKeyDown:e.onKeyDown,onChange:e.onChange,name:e.name}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("select",{disabled:s,className:"input-group-text ",onChange:t,style:{appearance:"none",fontSize:14,borderRadius:"6px 0px 0px 6px",color:"#BAC4D1",backgroundColor:"#3B4758",borderColor:"#3B4758"},value:a},d)),r.a.createElement(o.a,{thousandSeparator:!0,onKeyPress:e.onKeyPress,ref:e.ref,value:e.value,style:{color:m(e.color).color,borderRadius:"0px 6px 6px 0px",backgroundColor:"#3B4758",borderColor:"#3B4758"},className:"form-control","aria-describedby":"basic-addon1",onKeyDown:e.onKeyDown,onChange:e.onChange,name:e.name})))):r.a.createElement("div",{className:""},r.a.createElement("span",{className:"px-2",style:{color:"#FFFFFF"}},e.title),r.a.createElement("div",{className:"mt-2",style:{fontSize:13,color:m(e.color).color}},e.value)))}},230:function(e,a,t){"use strict";var l=t(0),r=t.n(l);class c extends l.Component{renderSwitch(e){switch(e){case"Price":case"Percent":return{borderRadius:6,boxShadow:"0px 1px 20px 1px #434568"};default:return"foo"}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",onClick:this.props.onClick,style:this.renderSwitch(this.props.title),className:"btn btn-outline-info btn-md px-2.5 py-2"},this.props.value))}}a.a=c},252:function(e,a,t){},294:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];function l(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];var r=null;return a.forEach((function(e){if(null==r){var a=e.apply(void 0,t);null!=a&&(r=a)}})),r}return(0,c.default)(l)};var l,r=t(384),c=(l=r)&&l.__esModule?l:{default:l};e.exports=a.default},384:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){function a(a,t,l,r,c,o){var n=r||"<<anonymous>>",s=o||l;if(null==t[l])return a?new Error("Required "+c+" `"+s+"` was not specified in `"+n+"`."):null;for(var i=arguments.length,m=Array(i>6?i-6:0),d=6;d<i;d++)m[d-6]=arguments[d];return e.apply(void 0,[t,l,n,c,s].concat(m))}var t=a.bind(null,!1);return t.isRequired=a.bind(null,!0),t},e.exports=a.default},526:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),c=t(229);class o extends l.Component{renderSwitch(e){switch(e){case"green":return{color:"#71DD37",fontSize:14,borderRadius:20};case"red":return{color:"#FF3E1D",fontSize:14,borderRadius:20};case"blue":return{color:"#03C3EC",fontSize:14,borderRadius:20};default:return"foo"}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:""},r.a.createElement("span",{className:"px-2",style:{fontSize:12,color:"#CBCBE2",textAlign:"center"}},this.props.title),r.a.createElement("div",{className:"ml-2 mt-1",style:this.renderSwitch(this.props.color)},this.props.value)))}}var n=o;class s extends l.Component{renderSwitch(e){switch(e){case"yellow":return{color:"#FA8C26",fontSize:15};case"blue":return{color:"#87DFE9",fontSize:15};case"red":return{color:"#FF3E1D",fontSize:15};case"green":return{color:"#71DD37",fontSize:15};case"white":return{color:"#FFFFFF",fontSize:15};default:return"foo"}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"avatar flex-shrink-0 "}),r.a.createElement("div",{className:"d-flex w-100  flex-wrap align-items-center justify-content-between "},r.a.createElement("div",{className:""},r.a.createElement("h6",{className:"mb-0 px-2 py-2"},this.props.title)),r.a.createElement("div",{className:"user-progress d-flex align-items-center"},r.a.createElement("h6",{className:"mb-0",style:this.renderSwitch(this.props.color)},this.props.value))))}}var i=s,m=t(230),d=t(274),u=t.n(d),b=t(41),f=t(222),E=t(2),v=t(5),p=t(23),x=t.n(p),N=(t(294),t(6)),y=t.n(N),F=["as","className","type","tooltip"],g={type:y.a.string,tooltip:y.a.bool,as:y.a.elementType},h=r.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"div":t,c=e.className,o=e.type,n=void 0===o?"valid":o,s=e.tooltip,i=void 0!==s&&s,m=Object(v.a)(e,F);return r.a.createElement(l,Object(E.a)({},m,{ref:a,className:x()(c,n+"-"+(i?"tooltip":"feedback"))}))}));h.displayName="Feedback",h.propTypes=g;var O=h,C=r.a.createContext({controlId:void 0}),j=t(18),w=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],P=r.a.forwardRef((function(e,a){var t=e.id,c=e.bsPrefix,o=e.bsCustomPrefix,n=e.className,s=e.type,i=void 0===s?"checkbox":s,m=e.isValid,d=void 0!==m&&m,u=e.isInvalid,b=void 0!==u&&u,f=e.isStatic,p=e.as,N=void 0===p?"input":p,y=Object(v.a)(e,w),F=Object(l.useContext)(C),g=F.controlId,h=F.custom?[o,"custom-control-input"]:[c,"form-check-input"],O=h[0],P=h[1];return c=Object(j.a)(O,P),r.a.createElement(N,Object(E.a)({},y,{ref:a,type:i,id:t||g,className:x()(n,c,d&&"is-valid",b&&"is-invalid",f&&"position-static")}))}));P.displayName="FormCheckInput";var S=P,k=["bsPrefix","bsCustomPrefix","className","htmlFor"],B=r.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.bsCustomPrefix,o=e.className,n=e.htmlFor,s=Object(v.a)(e,k),i=Object(l.useContext)(C),m=i.controlId,d=i.custom?[c,"custom-control-label"]:[t,"form-check-label"],u=d[0],b=d[1];return t=Object(j.a)(u,b),r.a.createElement("label",Object(E.a)({},s,{ref:a,htmlFor:n||m,className:x()(o,t)}))}));B.displayName="FormCheckLabel";var I=B,R=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],A=r.a.forwardRef((function(e,a){var t=e.id,c=e.bsPrefix,o=e.bsCustomPrefix,n=e.inline,s=void 0!==n&&n,i=e.disabled,m=void 0!==i&&i,d=e.isValid,u=void 0!==d&&d,b=e.isInvalid,f=void 0!==b&&b,p=e.feedbackTooltip,N=void 0!==p&&p,y=e.feedback,F=e.className,g=e.style,h=e.title,w=void 0===h?"":h,P=e.type,k=void 0===P?"checkbox":P,B=e.label,A=e.children,z=e.custom,D=e.as,T=void 0===D?"input":D,_=Object(v.a)(e,R),L="switch"===k||z,V=L?[o,"custom-control"]:[c,"form-check"],K=V[0],M=V[1];c=Object(j.a)(K,M);var G=Object(l.useContext)(C).controlId,J=Object(l.useMemo)((function(){return{controlId:t||G,custom:L}}),[G,L,t]),Q=L||null!=B&&!1!==B&&!A,q=r.a.createElement(S,Object(E.a)({},_,{type:"switch"===k?"checkbox":k,ref:a,isValid:u,isInvalid:f,isStatic:!Q,disabled:m,as:T}));return r.a.createElement(C.Provider,{value:J},r.a.createElement("div",{style:g,className:x()(F,c,L&&"custom-"+k,s&&c+"-inline")},A||r.a.createElement(r.a.Fragment,null,q,Q&&r.a.createElement(I,{title:w},B),(u||f)&&r.a.createElement(O,{type:u?"valid":"invalid",tooltip:N},y))))}));A.displayName="FormCheck",A.Input=S,A.Label=I;var z=A,D=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],T=r.a.forwardRef((function(e,a){var t=e.id,c=e.bsPrefix,o=e.bsCustomPrefix,n=e.className,s=e.isValid,i=e.isInvalid,m=e.lang,d=e.as,u=void 0===d?"input":d,b=Object(v.a)(e,D),f=Object(l.useContext)(C),p=f.controlId,N=f.custom?[o,"custom-file-input"]:[c,"form-control-file"],y=N[0],F=N[1];return c=Object(j.a)(y,F),r.a.createElement(u,Object(E.a)({},b,{ref:a,id:t||p,type:"file",lang:m,className:x()(n,c,s&&"is-valid",i&&"is-invalid")}))}));T.displayName="FormFileInput";var _=T,L=["bsPrefix","bsCustomPrefix","className","htmlFor"],V=r.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.bsCustomPrefix,o=e.className,n=e.htmlFor,s=Object(v.a)(e,L),i=Object(l.useContext)(C),m=i.controlId,d=i.custom?[c,"custom-file-label"]:[t,"form-file-label"],u=d[0],b=d[1];return t=Object(j.a)(u,b),r.a.createElement("label",Object(E.a)({},s,{ref:a,htmlFor:n||m,className:x()(o,t),"data-browse":s["data-browse"]}))}));V.displayName="FormFileLabel";var K=V,M=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],G=r.a.forwardRef((function(e,a){var t=e.id,c=e.bsPrefix,o=e.bsCustomPrefix,n=e.disabled,s=void 0!==n&&n,i=e.isValid,m=void 0!==i&&i,d=e.isInvalid,u=void 0!==d&&d,b=e.feedbackTooltip,f=void 0!==b&&b,p=e.feedback,N=e.className,y=e.style,F=e.label,g=e.children,h=e.custom,w=e.lang,P=e["data-browse"],S=e.as,k=void 0===S?"div":S,B=e.inputAs,I=void 0===B?"input":B,R=Object(v.a)(e,M),A=h?[o,"custom"]:[c,"form-file"],z=A[0],D=A[1];c=Object(j.a)(z,D);var T=Object(l.useContext)(C).controlId,L=Object(l.useMemo)((function(){return{controlId:t||T,custom:h}}),[T,h,t]),V=null!=F&&!1!==F&&!g,G=r.a.createElement(_,Object(E.a)({},R,{ref:a,isValid:m,isInvalid:u,disabled:s,as:I,lang:w}));return r.a.createElement(C.Provider,{value:L},r.a.createElement(k,{style:y,className:x()(N,c,h&&"custom-file")},g||r.a.createElement(r.a.Fragment,null,h?r.a.createElement(r.a.Fragment,null,G,V&&r.a.createElement(K,{"data-browse":P},F)):r.a.createElement(r.a.Fragment,null,V&&r.a.createElement(K,null,F),G),(m||u)&&r.a.createElement(O,{type:m?"valid":"invalid",tooltip:f},p))))}));G.displayName="FormFile",G.Input=_,G.Label=K;var J=G,Q=(t(87),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),q=r.a.forwardRef((function(e,a){var t,c,o=e.bsPrefix,n=e.bsCustomPrefix,s=e.type,i=e.size,m=e.htmlSize,d=e.id,u=e.className,b=e.isValid,f=void 0!==b&&b,p=e.isInvalid,N=void 0!==p&&p,y=e.plaintext,F=e.readOnly,g=e.custom,h=e.as,O=void 0===h?"input":h,w=Object(v.a)(e,Q),P=Object(l.useContext)(C).controlId,S=g?[n,"custom"]:[o,"form-control"],k=S[0],B=S[1];if(o=Object(j.a)(k,B),y)(c={})[o+"-plaintext"]=!0,t=c;else if("file"===s){var I;(I={})[o+"-file"]=!0,t=I}else if("range"===s){var R;(R={})[o+"-range"]=!0,t=R}else if("select"===O&&g){var A;(A={})[o+"-select"]=!0,A[o+"-select-"+i]=i,t=A}else{var z;(z={})[o]=!0,z[o+"-"+i]=i,t=z}return r.a.createElement(O,Object(E.a)({},w,{type:s,size:m,ref:a,readOnly:F,id:d||P,className:x()(u,t,f&&"is-valid",N&&"is-invalid")}))}));q.displayName="FormControl";var U=Object.assign(q,{Feedback:O}),X=["bsPrefix","className","children","controlId","as"],$=r.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.children,n=e.controlId,s=e.as,i=void 0===s?"div":s,m=Object(v.a)(e,X);t=Object(j.a)(t,"form-group");var d=Object(l.useMemo)((function(){return{controlId:n}}),[n]);return r.a.createElement(C.Provider,{value:d},r.a.createElement(i,Object(E.a)({},m,{ref:a,className:x()(c,t)}),o))}));$.displayName="FormGroup";var H=$,W=["bsPrefix","className","as"],Y=["xl","lg","md","sm","xs"],Z=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,c=e.as,o=void 0===c?"div":c,n=Object(v.a)(e,W),s=Object(j.a)(t,"col"),i=[],m=[];return Y.forEach((function(e){var a,t,l,r=n[e];if(delete n[e],"object"===typeof r&&null!=r){var c=r.span;a=void 0===c||c,t=r.offset,l=r.order}else a=r;var o="xs"!==e?"-"+e:"";a&&i.push(!0===a?""+s+o:""+s+o+"-"+a),null!=l&&m.push("order"+o+"-"+l),null!=t&&m.push("offset"+o+"-"+t)})),i.length||i.push(s),r.a.createElement(o,Object(E.a)({},n,{ref:a,className:x.a.apply(void 0,[l].concat(i,m))}))}));Z.displayName="Col";var ee=Z,ae=["as","bsPrefix","column","srOnly","className","htmlFor"],te=r.a.forwardRef((function(e,a){var t=e.as,c=void 0===t?"label":t,o=e.bsPrefix,n=e.column,s=e.srOnly,i=e.className,m=e.htmlFor,d=Object(v.a)(e,ae),u=Object(l.useContext)(C).controlId;o=Object(j.a)(o,"form-label");var b="col-form-label";"string"===typeof n&&(b=b+" "+b+"-"+n);var f=x()(i,o,s&&"sr-only",n&&b);return m=m||u,n?r.a.createElement(ee,Object(E.a)({ref:a,as:"label",className:f,htmlFor:m},d)):r.a.createElement(c,Object(E.a)({ref:a,className:f,htmlFor:m},d))}));te.displayName="FormLabel",te.defaultProps={column:!1,srOnly:!1};var le=te,re=["bsPrefix","className","as","muted"],ce=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,c=e.as,o=void 0===c?"small":c,n=e.muted,s=Object(v.a)(e,re);return t=Object(j.a)(t,"form-text"),r.a.createElement(o,Object(E.a)({},s,{ref:a,className:x()(l,t,n&&"text-muted")}))}));ce.displayName="FormText";var oe=ce,ne=r.a.forwardRef((function(e,a){return r.a.createElement(z,Object(E.a)({},e,{ref:a,type:"switch"}))}));ne.displayName="Switch",ne.Input=z.Input,ne.Label=z.Label;var se=ne,ie=t(80),me=["bsPrefix","inline","className","validated","as"],de=Object(ie.a)("form-row"),ue=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.inline,c=e.className,o=e.validated,n=e.as,s=void 0===n?"form":n,i=Object(v.a)(e,me);return t=Object(j.a)(t,"form"),r.a.createElement(s,Object(E.a)({},i,{ref:a,className:x()(c,o&&"was-validated",l&&t+"-inline")}))}));ue.displayName="Form",ue.defaultProps={inline:!1},ue.Row=de,ue.Group=H,ue.Control=U,ue.Check=z,ue.File=J,ue.Switch=se,ue.Label=le,ue.Text=oe;var be=ue;var fe=function(e){return"text"===e.type?r.a.createElement(be.Control,{type:"text",style:{color:"white",backgroundColor:"#3B4758"},className:"form-control"}):r.a.createElement(f.a,{thousandSeparator:!0,style:{color:"white",backgroundColor:"#3B4758",borderColor:"#3B4758"},className:"form-control"})};t(252);a.default=()=>{let e=Intl.NumberFormat("en-US");const{AAAO1:a,AAAO2:t,EEEO1:o,MMMO1:s,CCCO1:d,EEEO3:f,EEEO2:E,CCCO2:v,GGGO1:p,IIIO1:x,JJJO1:N,Currency:y}=Object(b.c)(e=>e.InputValue),[F,g]=Object(l.useState)(o),[h,O]=Object(l.useState)(E),[C,j]=Object(l.useState)(f),[w,P]=Object(l.useState)(0),[S,k]=Object(l.useState)(0),[B,I]=Object(l.useState)(0),[R,A]=Object(l.useState)(0),[z,D]=Object(l.useState)(0),[T,_]=Object(l.useState)(0),[L,V]=Object(l.useState)(0),[K,M]=Object(l.useState)(0),[G,J]=Object(l.useState)(0),[Q,q]=Object(l.useState)(0),[U,X]=Object(l.useState)(0),[$,H]=Object(l.useState)(0),[W,Y]=Object(l.useState)(0),[Z,ee]=Object(l.useState)(0),[ae,te]=Object(l.useState)(0),[le,re]=Object(l.useState)(d),[ce,oe]=Object(l.useState)(s),[ne,se]=Object(l.useState)(0),[ie,me]=Object(l.useState)(0),[de,ue]=Object(l.useState)(0),[be,Ee]=Object(l.useState)(0),[ve,pe]=Object(l.useState)(0),[xe,Ne]=Object(l.useState)(0),[ye,Fe]=Object(l.useState)(0),[ge,he]=Object(l.useState)(0),[Oe,Ce]=Object(l.useState)(0),[je,we]=Object(l.useState)(0),[Pe,Se]=Object(l.useState)(0);Object(l.useEffect)(()=>{P(.01*a*t&&.01*a*t!==1/0&&.01*a*t!==-1/0?.01*a*t:0),k(a/F/ce&&a/F/ce!==1/0&&a/F/ce!==-1/0?a/F/ce:0),J(le/(F-C)/ce*F*ce&&le/(F-C)/ce*F*ce!==1/0&&le/(F-C)/ce*F*ce!==-1/0?le/(F-C)/ce*F*ce:0),D(le/(F-C)/ce&&le/(F-C)/ce!==1/0&&le/(F-C)/ce!==-1/0?le/(F-C)/ce:0),_(F-le/h/ce&&F-le/h/ce!==1/0&&F-le/h/ce!==-1/0?F-le/h/ce:0),V(1*F+F*v/B&&1*F+F*v/B!==1/0&&1*F+F*v/B!==-1/0?1*F+F*v/B:0),I(F*h*ce&&F*h*ce!==1/0&&F*h*ce!==-1/0?F*h*ce:0),M((h*p-h*F)*ce&&(h*p-h*F)*ce!==1/0&&(h*p-h*F)*ce!==-1/0?(h*p-h*F)*ce:0),q(K/B&&K/B!==1/0&&K/B!==-1/0?K/B:0),ee(F-.01*x*F&&F-.01*x*F!==1/0&&F-.01*x*F!==-1/0?F-.01*x*F:0),te(1*F+F*W/B&&1*F+F*W/B!==1/0&&1*F+F*W/B!==-1/0?1*F+F*W/B:0),H(B*x*.01*-1&&B*x*.01*-1!==1/0&&B*x*.01*-1!==-1/0?B*x*.01*-1:0),A(B-C/F*B&&B-C/F*B!==1/0&&B-C/F*B!==-1/0?B-C/F*B:0),X(K/le&&K/le!==1/0&&K/le!==-1/0?K/le:0),Y(F*h*N*.01*ce&&F*h*N*.01*ce!==1/0&&F*h*N*.01*ce!==-1/0?F*h*N*.01*ce:0),se(C-F),me(p-F),ue(p-C),Ee(K-100)});const ke=e=>{pe(F),Ne(h),Fe(C),1===e?(he(T),Ce(L)):2===e&&(we(Z),Se(ae))};return r.a.createElement("div",{className:"cursor-pointer"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("div",{className:"row mb-1"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"card",style:{borderRadius:"8px"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"ml-5",style:{color:"#CBCBE2"}},"Portfolio Strength"),r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(c.a,{color:"green",title:"Portfolio Risk",value:y+" "+e.format(w.toFixed(2))})),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(c.a,{color:"green",title:"Portfolio Quantity",value:y+" "+e.format(S.toFixed(2))}))))))),r.a.createElement("div",{className:"row mb-1"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"card",style:{borderRadius:"8px"}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"ml-5",style:{color:"#CBCBE2"}},"Price Order Simulator"),r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-6 mb-4"},r.a.createElement(c.a,{color:"red",title:"Projected Loss",value:y+" "+e.format(R.toFixed(2))})),r.a.createElement("div",{className:"col-6  mb-4"},r.a.createElement(c.a,{color:"blue",title:"Optimum Quantity",value:e.format(z.toFixed(1))})),r.a.createElement("div",{className:"col-6 mb-4 "},r.a.createElement(c.a,{color:"red",title:"Optimum Stop Price",value:y+" "+e.format(T.toFixed(2))})),r.a.createElement("div",{className:"col-6 mb-4"},r.a.createElement(c.a,{color:"green",title:"Take Profit",value:y+" "+e.format((1*L).toFixed(2))})),r.a.createElement("div",{className:"col-6 mb-4"},r.a.createElement(c.a,{color:"yellow",title:"Amount Invested",value:y+" "+e.format(B.toFixed(2))})),r.a.createElement("div",{className:"col-6 mb-4"},r.a.createElement(c.a,{color:"green",title:"Projected Profit",value:y+" "+e.format(K.toFixed(2))})),r.a.createElement("div",{className:"col-6 mb-4"},r.a.createElement(c.a,{color:"yellow",title:"Cost of Trade",value:y+" "+e.format(G.toFixed(2))})),r.a.createElement("div",{className:"col-6"},r.a.createElement(c.a,{color:"green",title:"Cost of Trade",value:(100*Q).toFixed(0)+"%"}))))))))),r.a.createElement("div",{className:"col-sm-4 "},r.a.createElement("div",{className:"row mb-1"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{style:{color:"#CBCBE2"}},"Trade Performance"),r.a.createElement("h6",{style:{color:"#7071A4"}},"Rol ",r.a.createElement("span",{style:{color:"#CBCBE2"}},(100*Q).toFixed(2)," %")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(u.a,{hideText:!0,textColor:"#FFFF",colors:["#FF0000","#0A5D00","#0EFF00"],percent:Q?Q.toFixed(2):0,arcsLength:[.15,.35,.5]})),r.a.createElement("h6",{className:"text-center",style:{color:"#CBCBE2"}},U.toFixed(2),r.a.createElement("span",{style:{fontSize:"20px"}}," X")," "))))))),r.a.createElement("div",{className:"row mb-1"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"ml-4",style:{color:"#CBCBE2"}},"Percentage Order Report"),r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-4 mb-4"},r.a.createElement(n,{color:"red",title:"Amount Invested",value:y+" "+e.format(B.toFixed(0))})),r.a.createElement("div",{className:"col-4 mb-4"},r.a.createElement(n,{color:"blue",title:"Ticker Value",value:e.format(ce)})),r.a.createElement("div",{className:"col-4 mb-4 "},r.a.createElement(n,{color:"red",title:"Projected Loss",value:y+" "+e.format($.toFixed(2))})),r.a.createElement("div",{className:"col-4 mb-4"},r.a.createElement(n,{color:"green",title:"Projected Profit",value:y+" "+e.format(W.toFixed(2))})),r.a.createElement("div",{className:"col-4 mb-4"},r.a.createElement(n,{color:"red",title:"Optimum Stop Price",value:y+" "+e.format(Z.toFixed(2))})),r.a.createElement("div",{className:"col-4"},r.a.createElement(n,{color:"green",title:"Profit Target",value:y+" "+e.format((1*ae).toFixed(2))})))))))),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("div",{className:"row mb-1"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{style:{color:"#CBCBE2"}},"Price Order Plan"),r.a.createElement("ul",{className:"p-0 "},r.a.createElement("li",{className:"d-flex mb-1"},r.a.createElement(i,{color:"yellow",title:"Buy",value:y+" "+(F&&F!==1/0&&F!==-1/0?e.format(parseFloat(F).toFixed(2)):"0"),img:"a1"})),r.a.createElement("li",{className:"d-flex mb-1"},r.a.createElement(i,{color:"blue",title:"Qty",value:h&&h!==1/0&&h!==-1/0?e.format(parseFloat(h).toFixed(1)):"0",img:"a2"})),r.a.createElement("li",{className:"d-flex mb-1"},r.a.createElement(i,{color:"red",title:"Stop ",value:y+" "+e.format(T.toFixed(2)),img:"a3"})),r.a.createElement("li",{className:"d-flex"},r.a.createElement(i,{color:"green",title:"Sell",value:y+" "+e.format((1*L).toFixed(2)),img:"a1"}))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"float-right"},r.a.createElement(m.a,{color:"input_green",onClick:()=>ke(1),title:"Percent",value:"Log Plan"})))))))),r.a.createElement("div",{className:"row mb-1"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{style:{color:"#CBCBE2"}},"Percentage Order Plan"),r.a.createElement("ul",{className:"p-0"},r.a.createElement("li",{className:"d-flex mb-1"},r.a.createElement(i,{color:"yellow",title:"Buy",value:y+" "+(F&&F!==1/0&&F!==-1/0?e.format(parseFloat(F).toFixed(2)):"0"),img:"a1"})),r.a.createElement("li",{className:"d-flex mb-1"},r.a.createElement(i,{color:"blue",title:"Qty",value:h&&h!==1/0&&h!==-1/0?e.format(parseFloat(h).toFixed(1)):"0",img:"a2"})),r.a.createElement("li",{className:"d-flex mb-1"},r.a.createElement(i,{color:"red",title:"Stop",value:y+" "+e.format(Z.toFixed(2)),img:"a3"})),r.a.createElement("li",{className:"d-flex mb-1"},r.a.createElement(i,{color:"green",title:"Sell",value:y+" "+e.format((1*ae).toFixed(2)),img:"a1"}))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"float-right"},r.a.createElement(m.a,{color:"input_green",onClick:()=>ke(2),title:"Percent",value:"Log Plan"})))))))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 mb-1 d-none d-md-block",style:{marginTop:"-30px"}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h4",{className:"card-title"},"Trading Plan Log")),r.a.createElement("div",{className:"col text-right",style:{marginTop:"-7px"}},r.a.createElement(m.a,{color:"input_green",onClick:()=>{pe(0),Ne(0),Fe(0),he(0),Ce(0),we(0),Se(0)},title:"Percent",value:"Clear Plan"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"table-responsive text-center"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Equity Symbol"),r.a.createElement("th",null,"Buy Price"),r.a.createElement("th",null,"Position Size"),r.a.createElement("th",null,"Stop Price"),r.a.createElement("th",null,"Sell Price"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"1"),r.a.createElement("td",null,r.a.createElement(fe,{type:"text"})),r.a.createElement("td",null,e.format(ve.toFixed(2))),r.a.createElement("td",null,e.format(xe.toFixed(2))),r.a.createElement("td",null,e.format(ge.toFixed(2))),r.a.createElement("td",null,e.format(Oe.toFixed(2)))),r.a.createElement("tr",null,r.a.createElement("td",null,"2"),r.a.createElement("td",null," ",r.a.createElement(fe,{type:"text"})," "),r.a.createElement("td",null,e.format(ve.toFixed(2))),r.a.createElement("td",null,e.format(xe.toFixed(2))),r.a.createElement("td",null,e.format(je.toFixed(2))),r.a.createElement("td",null,e.format(Pe.toFixed(2)))),r.a.createElement("tr",null,r.a.createElement("td",null,"3"),r.a.createElement("td",null," ",r.a.createElement(fe,{type:"text"})," "),r.a.createElement("td",null,r.a.createElement(fe,null)),r.a.createElement("td",null,r.a.createElement(fe,null)),r.a.createElement("td",null,r.a.createElement(fe,null)),r.a.createElement("td",null,r.a.createElement(fe,null))))))))))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{style:{color:"#CBCBE2"}},"Trade Analytics"),r.a.createElement("ul",{className:"p-0"},r.a.createElement("li",{className:"d-flex mb-1"},r.a.createElement(i,{color:"white",title:"Stop Range",value:y+" "+e.format(parseFloat(ne.toFixed(2))),img:"a1"})),r.a.createElement("li",{className:"d-flex mb-1"},r.a.createElement(i,{color:"white",title:"Profit  Range",value:y+" "+e.format(parseFloat(ie.toFixed(2))),img:"a2"})),r.a.createElement("li",{className:"d-flex mb-1"},r.a.createElement(i,{color:"white",title:"Trading Range",value:y+" "+e.format(parseFloat(de.toFixed(2))),img:"a3"})),r.a.createElement("li",{className:"d-flex "},r.a.createElement(i,{color:"white",title:"Amount Invested",value:y+" "+e.format(parseFloat(B.toFixed(2))),img:"a1"}))))))))))}}}]);
//# sourceMappingURL=14.e3a28231.chunk.js.map