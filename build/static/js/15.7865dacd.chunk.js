(window.webpackJsonpreact=window.webpackJsonpreact||[]).push([[15],{180:function(e,t,a){"use strict";var r=a(0),l=a.n(r),c=a(27),o=a(171),n=a(42);t.a=e=>{const{currency:t,onCurrencyChange:a,disabled:s}=e;console.log(t);const i=Object(c.b)(),m=e=>{switch(e){case"green":return{color:"#71DD37",backgroundColor:"#313B3F",fontSize:12,textAlign:"center",borderRadius:20};case"red":return{color:"#FF3E1D",backgroundColor:"#3F3131",fontSize:12,textAlign:"center",borderRadius:20};case"blue":return{color:"#03C3EC",backgroundColor:"#313B3F",fontSize:12,textAlign:"center",borderRadius:20};case"yellow":case"input_yellow":return{color:"#FA8C26",backgroundColor:"#313B3F",fontSize:12,textAlign:"center",borderRadius:20};case"input_red":return{color:"#FF3E1D",backgroundColor:"#3F3131",fontSize:12,textAlign:"center",borderRadius:20};case"input_green":return{color:"#71DD37",backgroundColor:"#313B3F",fontSize:12,textAlign:"center",borderRadius:20};case"input_white":return{color:"#FCF9F7",backgroundColor:"#313B3F",fontSize:12,textAlign:"center",borderRadius:20};case"input_blue":return{color:"#03C3EC",backgroundColor:"#06324C",fontSize:12,textAlign:"center",borderRadius:20};default:return"foo"}},d=["$","\xa3","\u0e3f","\u20ac","\xa5","\u20a3","\u20b9"].map((e,t)=>l.a.createElement("option",{key:t,value:e},e));return Object(r.useEffect)(()=>{i(Object(n.f)(t))},[t]),l.a.createElement(l.a.Fragment,null,"input_yellow"===e.color||"input_green"===e.color||"input_red"===e.color||"input_white"===e.color||"input_blue"===e.color?l.a.createElement("div",{style:{width:"80%",marginLeft:"10%"}},l.a.createElement("label",{className:"px-1 ",style:{color:"#FFFFFF"}},e.title),"%"===e.val?l.a.createElement("div",{className:"input-group"},l.a.createElement(o.a,{thousandSeparator:!0,onKeyPress:e.onKeyPress,ref:e.ref,value:e.value,style:{color:m(e.color).color,backgroundColor:"#3B4758",borderColor:"#3B4758"},className:"form-control","aria-describedby":"basic-addon1",onKeyDown:e.onKeyDown,onChange:e.onChange,name:e.name}),l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text ",style:{fontSize:14,borderRadius:"0px 6px 6px 0px",color:"#BAC4D1",backgroundColor:"#3B4758",borderColor:"#3B4758"}},e.val))):l.a.createElement("div",{className:"input-group"},"m"===e.val?l.a.createElement(o.a,{thousandSeparator:!0,onKeyPress:e.onKeyPress,ref:e.ref,value:e.value,style:{color:"white",borderRadius:"6px 6px 6px 6px",backgroundColor:"#3B4758",borderColor:"#3B4758"},className:"form-control","aria-describedby":"basic-addon1",onKeyDown:e.onKeyDown,onChange:e.onChange,name:e.name}):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("select",{disabled:s,className:"input-group-text ",onChange:a,style:{appearance:"none",fontSize:14,borderRadius:"6px 0px 0px 6px",color:"#BAC4D1",backgroundColor:"#3B4758",borderColor:"#3B4758"},value:t},d)),l.a.createElement(o.a,{thousandSeparator:!0,onKeyPress:e.onKeyPress,ref:e.ref,value:e.value,style:{color:m(e.color).color,borderRadius:"0px 6px 6px 0px",backgroundColor:"#3B4758",borderColor:"#3B4758"},className:"form-control","aria-describedby":"basic-addon1",onKeyDown:e.onKeyDown,onChange:e.onChange,name:e.name})))):l.a.createElement("div",{className:""},l.a.createElement("span",{className:"px-2",style:{color:"#FFFFFF"}},e.title),l.a.createElement("div",{className:"mt-2",style:{fontSize:13,color:m(e.color).color}},e.value)))}},181:function(e,t,a){"use strict";var r=a(0),l=a.n(r);class c extends r.Component{renderSwitch(e){switch(e){case"Price":case"Percent":return{borderRadius:6,boxShadow:"0px 1px 20px 1px #434568"};default:return"foo"}}render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{type:"button",onClick:this.props.onClick,style:this.renderSwitch(this.props.title),className:"btn btn-outline-info btn-md px-2.5 py-2"},this.props.value))}}t.a=c},210:function(e,t,a){"use strict";var r=a(0),l=a.n(r),c=a(171),o=a(27),n=a(42);t.a=e=>{const{Currency:t}=Object(o.c)(e=>e.InputValue),a=Object(o.b)(),[s,i]=Object(r.useState)(t),m=["$","\xa3","\u0e3f","\u20ac","\xa5","\u20a3","\u20b9"].map((e,t)=>l.a.createElement("option",{key:t,value:e},e));Object(r.useEffect)(()=>{a(Object(n.f)(s))},[s]);return l.a.createElement(l.a.Fragment,null,"input_white"===e.color?l.a.createElement("div",{style:{width:"80%",marginLeft:"10%"}},l.a.createElement("div",{className:"input-group"},"m"===e.val?l.a.createElement(c.a,{thousandSeparator:!0,onKeyPress:e.onKeyPress,ref:e.ref,value:e.value,style:{color:"white",borderRadius:"6px",backgroundColor:"#3B4758",borderColor:"#3B4758"},className:"form-control","aria-describedby":"basic-addon1",onKeyDown:e.onKeyDown,onChange:e.onChange,name:e.name}):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("select",{className:"input-group-text",onChange:e=>{i(e.target.value)},style:{fontSize:14,borderRadius:"6px 0px 0px 6px",color:"#BAC4D1",backgroundColor:"#3B4758",borderColor:"#3B4758"},value:t},m)),l.a.createElement(c.a,{thousandSeparator:!0,onKeyPress:e.onKeyPress,ref:e.ref,value:e.value,style:{color:"white",borderRadius:"0px 6px 6px 0px",backgroundColor:"#3B4758",borderColor:"#3B4758"},className:"form-control","aria-describedby":"basic-addon1",onKeyDown:e.onKeyDown,onChange:e.onChange,name:e.name}))),l.a.createElement("label",{className:"px-1",style:{color:"#FFFFFF",textAlign:"center",fontSize:"16px"}},e.title)):l.a.createElement("div",{className:"text-center mb-3"},l.a.createElement("div",{style:{color:"#FFFFFF",textAlign:"center",fontSize:"16px"}},e.title),l.a.createElement("div",{className:"mt-2",style:{fontSize:14,color:(e=>{switch(e){case"green":return{color:"#71DD37",fontSize:"16px",textAlign:"center",borderRadius:"4px"};case"input_white":return{color:"#FFFFFF",fontSize:14,textAlign:"center"};case"blue":return{color:"#03C3EC",fontSize:"16px",textAlign:"center",borderRadius:"4px"};case"red":return{color:"#FF3E1D",fontSize:"16px",textAlign:"center",borderRadius:"4px"};default:return{color:"#FFFFFF",fontSize:"16px",textAlign:"center"}}})(e.color).color,textAlign:"center"}},e.value)))}},211:function(e,t,a){},212:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAANFCAYAAADyK0urAAAACXBIWXMAABJ0AAASdAHeZh94AAAGvmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTA1LTA3VDA0OjAxOjAxKzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wNS0wN1QwODozMDoxNSswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wNS0wN1QwODozMDoxNSswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3ZjdkMjQ1OC1iMzA4LTNkNDctODcxNS01MDQzYWMwYWQ0OTYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5MzU1YjNmYy02YWUzLTgwNDctODYzYS0wOGY2ZTllNzViNTIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxNmMyMWM5Ni05ZGMxLTFkNGMtYWNlYS04NzY0MzM3Mzk3OWEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjE2YzIxYzk2LTlkYzEtMWQ0Yy1hY2VhLTg3NjQzMzczOTc5YSIgc3RFdnQ6d2hlbj0iMjAyMy0wNS0wN1QwNDowMTowMSswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjYTY3ZTU3NC0wZmJhLTZiNDUtYTUxZi00MmJlOWQ4OWY2ZWQiIHN0RXZ0OndoZW49IjIwMjMtMDUtMDdUMDQ6MDU6NTIrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6N2Y3ZDI0NTgtYjMwOC0zZDQ3LTg3MTUtNTA0M2FjMGFkNDk2IiBzdEV2dDp3aGVuPSIyMDIzLTA1LTA3VDA4OjMwOjE1KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+alMBIwAAECpJREFU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"},517:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));var r=a(0),l=a.n(r),c=a(180),o=a(210),n=a(181),s=a(246),i=a.n(s),m=a(10),d=(a(211),a(27)),u=a(42);function v(){let e=Intl.NumberFormat("en-US");const[t,s]=Object(r.useState)(2),v=e=>{if(13===e.charCode){s(t<9?t+1:1);const e=document.querySelector("input[name=CIIO".concat(t,"]"));null!==e&&e.focus()}},{AAAO1:b,AAAO2:w,EEEO1:A,MMMO1:F,CCCO1:C,EEEO3:p,EEEO2:g,CCCO2:E,GGGO1:N,IIIO1:y,JJJO1:P,Currency:B}=Object(d.c)(e=>e.InputValue),O=Object(d.b)(),[h,z]=Object(r.useState)(0),[j,x]=Object(r.useState)(0),[f,S]=Object(r.useState)(0),[R,I]=Object(r.useState)(0),[K,X]=Object(r.useState)(0),[L,W]=Object(r.useState)(0),[H,D]=Object(r.useState)(0),[M,U]=Object(r.useState)(0),[Z,G]=Object(r.useState)(0),[T,k]=Object(r.useState)(F);let J=0===C?"":C;const[Y,V]=Object(r.useState)(J),[Q,q]=Object(r.useState)(0),[_,$]=Object(r.useState)(0);let ee=0===E?"":E;const[te,ae]=Object(r.useState)(ee),[re,le]=Object(r.useState)(0),[ce,oe]=Object(r.useState)(0);let ne=0===N?"":N;const[se,ie]=Object(r.useState)(ne);let me=0===A?"":A;const[de,ue]=Object(r.useState)(me);let ve=0===p?"":p;const[be,we]=Object(r.useState)(ve),[Ae,Fe]=Object(r.useState)(0);let Ce=0===b?"":b;const[pe,ge]=Object(r.useState)(Ce);let Ee=0===w?"":w;const[Ne,ye]=Object(r.useState)(Ee),[Pe,Be]=Object(r.useState)(0);let Oe=0===g?"":g;const[he,ze]=Object(r.useState)(Oe);Object(r.useEffect)(()=>{O(Object(u.a)(pe)),O(Object(u.b)(Ne)),O(Object(u.g)(de)),O(Object(u.q)(T)),O(Object(u.d)(Y)),O(Object(u.i)(be)),O(Object(u.h)(he)),O(Object(u.e)(te)),O(Object(u.j)(se)),Fe(.01*pe*Ne&&.01*pe*Ne!==1/0&&.01*pe*Ne!==-1/0?.01*pe*Ne:0),Be(pe/de/T&&pe/de/T!==1/0&&pe/de/T!==-1/0?pe/de/T:0),le(Y/(de-be)/T*de*T&&Y/(de-be)/T*de*T!=1/0&&Y/(de-be)/T*de*T!==-1/0?Y/(de-be)/T*de*T:0),G(Y/(de-be)/T&&Y/(de-be)/T!==1/0&&Y/(de-be)/T!==-1/0?Y/(de-be)/T:0),z(de*he*T&&de*he*T!==1/0&&de*he*T!==-1/0?de*he*T:0),U(h-be/de*h&&h-be/de*h!==1/0&&h-be/de*h!==-1/0?h-be/de*h:0),q(de-Y/he/T&&de-Y/he/T!==1/0&&de-Y/he/T!==-1/0?de-Y/he/T:0),$(1*de+de*te/h&&1*de+de*te/h!==1/0&&1*de+de*te/h!==-1/0?1*de+de*te/h:0),W((he*se-he*de)*T&&(he*se-he*de)*T!==1/0&&(he*se-he*de)*T!==-1/0?(he*se-he*de)*T:0),oe(L/h&&L/h!==1/0&&L/h!==-1/0?L/h:0),x(h*y*.01*-1&&h*y*.01*-1!==1/0&&h*y*.01*-1!==-1/0?h*y*.01*-1:0),S(de*he*P*.01*T&&de*he*P*.01*T!==1/0&&de*he*P*.01*T!==-1/0?de*he*P*.01*T:0),I(de-.01*y*de&&de-.01*y*de!==1/0&&de-.01*y*de!==-1/0?de-.01*y*de:0),X(1*de+de*f/h&&1*de+de*f/h!==1/0&&1*de+de*f/h!==-1/0?1*de+de*f/h:0),D(L/Y&&L/Y!==1/0&&L/Y!==-1/0?L/Y:0)});return l.a.createElement("div",{className:"app cursor-pointer"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("div",{className:"row mb-1"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"card",style:{borderRadius:"8px"}},l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"",style:{color:"#CBCBE2"}},"Portfolio Strength"),l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement(c.a,{color:"green",title:"Portfolio Risk",value:B+" "+e.format(Ae.toFixed(2))})),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement(c.a,{color:"green",title:"Portfolio Quantity",value:e.format(Pe.toFixed(2))}))))))),l.a.createElement("div",{className:"row mb-1"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"card",style:{borderRadius:"8px"}},l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{style:{color:"#CBCBE2"}},"Portfolio Trade Management"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement(c.a,{id:"text-1",value:b,color:"input_yellow",title:"Portfolio Balance",onChange:e=>{let t=e.target.value,a=Number(t.replace(/,/g,""));ge(parseFloat(a))},onKeyPress:v,name:"CIIO5"})),l.a.createElement("div",{className:"col-6"},l.a.createElement(c.a,{id:"text-2",onkeydown:"focusNext(event, 'text-1')",value:w,color:"input_yellow",title:"Portfolio at Risk",val:"%",onChange:e=>{let t=e.target.value,a=Number(t.replace(/,/g,""));ye(parseFloat(a))},onKeyPress:v,name:"CIIO6"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement(c.a,{value:C,color:"input_red",title:"My Risk Tolerance",val:"$",onChange:e=>{let t=e.target.value,a=Number(t.replace(/,/g,""));V(parseFloat(a))},onKeyPress:v,name:"CIIO7"})),l.a.createElement("div",{className:"col-6"},l.a.createElement(c.a,{value:E,color:"input_green",title:"Profit Goal ",onChange:e=>{let t=e.target.value,a=Number(t.replace(/,/g,""));ae(parseFloat(a))},val:"$",onKeyPress:v,name:"CIIO8"}))),l.a.createElement("div",{className:"row mb-3"},l.a.createElement("div",{className:"col-6"},l.a.createElement(c.a,{value:F,val:"m",color:"input_white",title:"Ticker Value",onChange:e=>{let t=e.target.value,a=Number(t.replace(/,/g,""));k(parseFloat(a))},onKeyPress:v,name:"CIIO9"}))))))),l.a.createElement("div",{className:"row mb-1"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{style:{color:"#CBCBE2"}},"Trade Performance"),l.a.createElement("h6",{style:{color:"#7071A4"}},"Rol"," ",l.a.createElement("span",{style:{color:"#CBCBE2"}},(100*ce).toFixed(2)," %")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement(i.a,{hideText:!0,textColor:"#FFFF",colors:["#FF0000","#0A5D00","#0EFF00"],percent:ce?ce.toFixed(2):0,arcsLength:[.15,.35,.5]})),l.a.createElement("h6",{className:"text-center",style:{color:"#CBCBE2"}},H.toFixed(2),l.a.createElement("span",{style:{fontSize:"20px"}}," X")," ")))))))),l.a.createElement("div",{className:"col-sm-8 mb-1"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"",style:{color:"#CBCBE2"}},"Candlestick Simulator"),l.a.createElement("div",{className:"row",style:{marginTop:"0px"}},l.a.createElement("div",{className:"col-5 "},l.a.createElement("div",{className:"row mt-5 ",style:{marginBottom:"150px"}},l.a.createElement("div",{className:"col-12"},l.a.createElement(o.a,{value:N,color:"input_white",title:"Sell  Price",onChange:e=>{let t=e.target.value,a=Number(t.replace(/,/g,""));ie(parseFloat(a))},val:"$",onKeyPress:v,name:"CIIO1"}))),l.a.createElement("div",{className:"row",style:{marginBottom:"80px"}},l.a.createElement("div",{className:"col-12"},l.a.createElement(o.a,{value:g,color:"input_white",title:"Position Size",onChange:e=>{let t=e.target.value,a=Number(t.replace(/,/g,""));ze(parseFloat(a))},val:"m",onKeyPress:v,name:"CIIO2"}))),l.a.createElement("div",{className:"row",style:{marginBottom:"70px"}},l.a.createElement("div",{className:"col-12"},l.a.createElement(o.a,{value:A,color:"input_white",title:"Entry Price",onChange:e=>{let t=e.target.value,a=Number(t.replace(/,/g,""));ue(parseFloat(a))},val:"$",onKeyPress:v,name:"CIIO3"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement(o.a,{value:p,color:"input_white",title:"Stop Price",onChange:e=>{let t=e.target.value,a=Number(t.replace(/,/g,""));we(parseFloat(a))},onKeyPress:v,name:"CIIO4"}))),l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col-6"},l.a.createElement(n.a,{color:"input_green",title:"Price",onClick:()=>{ie(""),ze(""),ue(""),we("")},value:"Clear data"})),l.a.createElement("div",{className:"col-6"},l.a.createElement(m.b,{to:"detailed_report1"},l.a.createElement(n.a,{color:"input_green",title:"Price",value:"Show Plan"}))))),l.a.createElement("div",{className:"col-2"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 ",style:{textAlign:"center"}},l.a.createElement("div",{style:{width:"60%"}},l.a.createElement("img",{src:a(212),alt:"profile",style:{height:"650px",width:"100%"},className:"profile-pic just-content-center"}))))),l.a.createElement("div",{className:"col-4 d-flex align-items-center flex-column"},l.a.createElement("div",{className:"row mt-3 ",style:{marginBottom:"10px"}},l.a.createElement("div",{className:"col-12"},l.a.createElement(o.a,{value:B+" "+e.format(_.toFixed(2)),color:"green",title:"Optimum Sell Price"}))),l.a.createElement("div",{className:"row",style:{marginBottom:"60px"}},l.a.createElement("div",{className:"col-12"},l.a.createElement(o.a,{value:B+" "+e.format(L.toFixed(2)),color:"green",title:"Projected Profit "}))),l.a.createElement("div",{className:"row",style:{marginBottom:"50px"}},l.a.createElement("div",{className:"col-12"},l.a.createElement(o.a,{value:e.format(Z.toFixed(2)),color:"blue",title:"Preferred Quantity"}))),l.a.createElement("div",{className:"row",style:{marginBottom:"160px"}},l.a.createElement("div",{className:"col-12"},l.a.createElement(o.a,{value:B+" "+e.format(re.toFixed(2)),color:"blue",title:"Quantity Value"}))),l.a.createElement("div",{className:"row mb-5"},l.a.createElement("div",{className:"col-12"},l.a.createElement(o.a,{value:B+" "+e.format(Q.toFixed(2)),color:"red",title:"Stop Limit"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement(o.a,{value:B+" "+e.format(M.toFixed(2)),color:"red",title:"Projected Loss"}))))))))))}}}]);
//# sourceMappingURL=15.7865dacd.chunk.js.map