import{a as h,l as y,r as g,o as r,e as d,f as u,t as i,Y as V,af as w,F as v,v as b,X as x,k as S,u as p,i as k}from"./entry.c7208fb2.js";const _={class:"form-control w-full"},$={class:"label"},B={class:"label-text"},F=u("option",{disabled:"",selected:""},"Pick one",-1),C=["value"],O=h({__name:"Select",props:{label:{type:String,default:""},modelValue:{type:[Object,String,Boolean],default:null},items:{type:Array,required:!0},name:{type:String,default:"name"},value:{type:String,default:null,required:!1},selectFirst:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(l,{emit:m}){const e=l;function o(){if(!e.modelValue){e.selectFirst&&(a.value=0);return}if(e.value){if(e.modelValue[e.value]===e.items[a.value][e.value])return}else if(e.modelValue===e.items[a.value])return;const f=e.items.findIndex(n=>e.value?n[e.value]===e.modelValue:n===e.modelValue);a.value=f}y(()=>e.modelValue,()=>{o()});const a=g(0);return y(()=>a.value,()=>{if(e.value){m("update:modelValue",e.items[a.value][e.value]);return}m("update:modelValue",e.items[a.value])}),(f,n)=>(r(),d("div",_,[u("label",$,[u("span",B,i(l.label),1)]),V(u("select",{"onUpdate:modelValue":n[0]||(n[0]=s=>a.value=s),class:"select select-bordered"},[F,(r(!0),d(v,null,b(l.items,(s,t)=>(r(),d("option",{key:l.name!=""?s[l.name]:s,value:t},i(l.name!=""?s[l.name]:s),9,C))),128))],512),[[w,a.value]])]))}}),q={ref:"menu",class:"form-control w-full"},A={class:"label"},I={class:"label-text"},M={class:"dropdown dropdown-top sm:dropdown-end"},z={tabindex:"0",class:"w-full min-h-[48px] flex gap-2 p-4 flex-wrap border border-gray-400 rounded-lg"},D={tabindex:"0",class:"dropdown-content mb-1 menu shadow border border-gray-400 rounded bg-base-100 w-full z-[9999] max-h-60 overflow-y-scroll scroll-bar"},E=["onClick"],P=h({__name:"Multiselect",props:{label:{type:String,default:""},modelValue:{type:Array,default:null},items:{type:Array,required:!0},name:{type:String,default:"name"},selectFirst:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(l,{emit:m}){const e=l,o=x(e,"modelValue",m),a=S(()=>{const n={};return o.value.forEach(s=>{const t=e.items.findIndex(c=>c[e.name]===s.name);n[t]=!0}),n});function f(n){const s=e.items[n];a.value[n]?o.value=o.value.filter(t=>t.name!==s.name):o.value=[...o.value,s]}return(n,s)=>(r(),d("div",q,[u("label",A,[u("span",I,i(l.label),1)]),u("div",M,[u("div",z,[(r(!0),d(v,null,b(p(o),t=>(r(),d("span",{key:l.name!=""?t[l.name]:t,class:"badge"},i(l.name!=""?t[l.name]:t),1))),128))]),u("ul",D,[(r(!0),d(v,null,b(l.items,(t,c)=>(r(),d("li",{key:c,class:k({bordered:p(a)[c]})},[u("button",{type:"button",onClick:L=>f(c)},i(l.name!=""?t[l.name]:t),9,E)],2))),128))])])],512))}});export{O as _,P as a};
