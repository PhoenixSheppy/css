import{a as f,r as m,Q as y,X as b,o as u,e as i,f as l,t as d,Y as r,a9 as g,u as c,$ as p,aa as v}from"./entry.c7208fb2.js";const _={key:0,class:"form-control w-full"},x={class:"label"},h={class:"label-text"},V=["type"],k={key:1,class:"sm:grid sm:grid-cols-4 sm:items-start sm:gap-4"},w={class:"label"},B={class:"label-text"},F=f({__name:"TextField",props:{label:{type:String,default:""},modelValue:{type:[String,Number],default:null},type:{type:String,default:"text"},triggerFocus:{type:Boolean,default:null},inline:{type:Boolean,default:!1}},setup(t){const o=t,a=m(null);y(()=>o.triggerFocus,()=>{a.value&&a.value.focus()});const e=b(o,"modelValue");return(S,s)=>t.inline?(u(),i("div",k,[l("label",w,[l("span",B,d(t.label),1)]),r(l("input",{"onUpdate:modelValue":s[1]||(s[1]=n=>p(e)?e.value=n:null),class:"input input-bordered col-span-3 w-full mt-2"},null,512),[[v,c(e)]])])):(u(),i("div",_,[l("label",x,[l("span",h,d(t.label),1)]),r(l("input",{ref_key:"input",ref:a,"onUpdate:modelValue":s[0]||(s[0]=n=>p(e)?e.value=n:null),type:t.type,class:"input input-bordered w-full"},null,8,V),[[g,c(e)]])]))}});export{F as _};
