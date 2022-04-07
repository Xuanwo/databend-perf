import{r as i,i as U,L as Y}from"./react.7dc093bc.js";import{F as m,u as Z,g as O,a as _,b as ee,R as j,C as k,S as $}from"./index.924c922b.js";import{B as te,D as ae,h as ne,f as G}from"./tools.5bde0943.js";import{j as x,a as t,m as re}from"./index.2b8f826c.js";import"./lodash.71f9f2ff.js";const{RangePicker:se}=ae,{Option:V}=$,ue=()=>{const[E,N]=i.exports.useState([]),[y,A]=i.exports.useState(""),[v]=m.useForm(),[w,P]=i.exports.useState([]),[F,C]=i.exports.useState(!0),[q,I]=i.exports.useState(!1),[B,K]=i.exports.useState({filterDate:[],startIndex:0,endIndex:-1}),[M]=i.exports.useState([{name:"Raw",value:"raw"}]),[b,R]=i.exports.useState([]);Z(()=>{W()}),i.exports.useEffect(()=>{F||T()},[F]);async function T(){const e=await O(y);R(e),L(y,e,!1)}async function W(){let e=await _();if(N(e||[]),e.length>0){v.setFieldsValue({category:e[0]}),C(!0),A(e[0]);const a=await O(e[0]);R(a),L(e[0],a,!0)}}async function L(e,a,D){const o=a.length;I(!0);try{for(let r=0;r<o;r++){const d=a[r],l=await ee(e,d);r===0&&P(l==null?void 0:l.xAxis),X(e,d,l,r,D)}I(!1)}catch(r){console.log(r),I(!1)}}function X(e,a,D,o,r){const d=`${e}-${a}`,l=document.getElementById(`${d}`);let c=U(l),{legend:f,lines:s,sql:J,title:Q,version:h,xAxis:S}=D;if(!r){const{startIndex:n,endIndex:g,filterDate:u}=B;B.endIndex===-1?(S=u,s.map(p=>{p.data=p.data.slice(n)}),h=h.slice(n)):(S=u,s.map(p=>{p.data=p.data.slice(n,g+1)}),h=h.slice(n,g+1))}s==null||s.map(n=>n.type="line"),C(!0),c.setOption({legend:{data:f,y:"bottom"},title:{left:"center",text:`${Q}`},tooltip:{trigger:"axis",position:function(n){return o%3==2?"right":o%3==1?n:[n[0]+10,0]},formatter(n){let g=`<div style="width: 500px; white-space: normal;word-wrap: break-word;">${J}</div>${n[0].axisValue}<span style="display:inline-block;padding-left: 20px;">${h[n[0].dataIndex]}</span></br>`;return n.forEach((u,p)=>{g+=`<div>${u.marker} ${u.seriesName}:${u.data}</div>`}),g}},xAxis:{data:S,name:"date"},yAxis:{name:"s"},series:s}),c=null}function z(e){return e>ne().add(0,"days")}async function H(){const{category:e,date:a,kind:D}=v.getFieldsValue();A(e);let o=null,r=null;a&&a.length>1&&(o=G(a[0]),r=G(a[1]));const d=w.indexOf(o),l=w.indexOf(r),c=d===-1?0:d,f=l;let s=[];if(f===-1?s=w.slice(c):s=w.slice(c,f+1),s.length<=0){re.warning("No data was generated for this time range");return}C(!1),K({filterDate:s,startIndex:c,endIndex:f})}return x("div",{children:[t(m,{form:v,initialValues:{kind:"raw",category:y},children:x(j,{gutter:10,children:[t(k,{span:6,children:t(m.Item,{name:"date",label:"Date range",children:t(se,{disabledDate:z,style:{width:"100%"}})})}),t(k,{span:4,children:t(m.Item,{name:"kind",label:"Graph kind",children:t($,{children:M.map((e,a)=>t(V,{value:e.value,children:e.name},a))})})}),t(k,{span:4,children:t(m.Item,{name:"category",label:"Category",children:t($,{children:E.map((e,a)=>t(V,{value:e,children:e},a))})})}),t(te,{loading:q,type:"primary",onClick:H,children:"Submit"})]})}),x("div",{children:[x("div",{style:{marginBottom:"20px"},children:[x("div",{children:["See ",t(Y,{to:"/compare",children:"compare page"})," for descriptions of what the names mean."]}),t("div",{children:"Note: pink in the graphs represent data points that are interpolated due to missing data. Interpolated data is simply the last known data point repeated until another known data point is found."})]}),t(j,{id:"allChartWrap",children:b==null?void 0:b.map(e=>t(k,{span:8,style:{marginBottom:"20px"},children:t("div",{style:{height:"300px",width:"100%"},id:`${y}-${e}`})},e))})]})]})};export{ue as default};
