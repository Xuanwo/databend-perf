import{r as i,i as k}from"./react.7dc093bc.js";import{F as l,u as B,a as R,j as D,R as x,C as u,S as m}from"./index.2315ffd6.js";import{j as h,a as e}from"./index.267bb93b.js";import{S as E}from"./index.f17a091a.js";import"./lodash.71f9f2ff.js";const{Option:O}=m,K=()=>{const[g]=l.useForm(),[C,$]=i.exports.useState([]),[n,v]=i.exports.useState([]),[f,w]=i.exports.useState(""),[S,b]=i.exports.useState(""),[A,c]=i.exports.useState(!1);B(()=>{F()});async function F(){let t=await R();$(t||[]),t.length>0&&(g.setFieldsValue({category:t[0]}),y(t[0]))}async function y(t){c(!0);try{w(t);let{date:r,results:a}=await D(t);b(r),v(a),I(t,a),c(!1)}catch{c(!1)}}function I(t,r){for(let a=0;a<r.length;a++){const d=r[a];L(d,t,a)}}function L(t,r,a){const d=`${r}-${t.title}`,j=document.getElementById(`${d}`);k(j).setOption({xAxis:{type:"category",data:t.xAxis},title:{left:"center",text:`${t==null?void 0:t.title}`},yAxis:{type:"value",name:"s"},tooltip:{trigger:"axis",position:function(s){return a%3==2?"right":a%3==1?s:[s[0]+10,0]},formatter(s){let o=`<div style="width: 500px; white-space: normal;word-wrap: break-word;">${t.sql}</div>$<span style="display:inline-block;">${t.version}</span></br>`;return s.forEach((p,q)=>{o+=`<div>${p.marker} ${p.name}:${p.data}</div>`}),o}},series:[{data:t.lines.map(s=>s.toFixed(4)),type:"bar",itemStyle:{normal:{label:{show:!0},color:function(s){var o=["#5470c6","#91cc75","#fac858","#ee6666"];return o[s.dataIndex]}}}}]})}return h("div",{children:[e(l,{form:g,initialValues:{category:f},children:h(x,{gutter:20,children:[e(u,{span:4,children:e(l.Item,{name:"category",label:"Category",children:e(m,{onChange:y,children:C.map((t,r)=>e(O,{value:t,children:t},r))})})}),e(u,{span:6,children:e(l.Item,{label:"Latest",children:h("span",{children:[S," (",n&&n.length>0&&n[0].version,")"]})})})]})}),e(E,{spinning:A,children:e(x,{style:{minHeight:"400px"},children:n==null?void 0:n.map(t=>e(u,{span:8,style:{marginBottom:"20px"},children:e("div",{style:{height:"300px",width:"100%"},id:`${f}-${t.title}`})},t.title))})})]})};export{K as default};
