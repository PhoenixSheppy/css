import{_ as S}from"./Toast.8b0c81bb.js";import{_}from"./Header.vue_vue_type_script_setup_true_lang.522db63c.js";import{a as h,P as v,an as o,O as g,N as L,S as n,ai as B,o as O,e as y,h as l,f as x,x as C,U as E}from"./entry.c7208fb2.js";import"./Icon.vue_vue_type_script_setup_true_lang.b684b932.js";import"./_plugin-vue_export-helper.a1a6add7.js";import"./Button.vue_vue_type_script_setup_true_lang.28c1ac3d.js";import"./Modal.vue_vue_type_script_setup_true_lang.aeb2fd83.js";import"./Multiselect.vue_vue_type_script_setup_true_lang.aa65d60f.js";import"./TextField.vue_vue_type_script_setup_true_lang.b6cd0fdd.js";import"./TextArea.vue_vue_type_script_setup_true_lang.418df535.js";import"./Logo.86b66be3.js";import"./Container.vue_vue_type_script_setup_true_lang.ac640e1b.js";const D=h({__name:"home",setup(I){const t=v(),m=/\/api\/v1\/labels\/.*/gm,c=o("labelStore",{handler:e=>{(e.status===201||e.url.match(m))&&t.refresh(),console.debug("labelStore handler called by observer")}}),r=g(),i=/\/api\/v1\/locations\/.*/gm,p=o("locationStore",{handler:e=>{(e.status===201||e.url.match(i))&&r.refresh(),console.debug("locationStore handler called by observer")}}),s=L(),u=/\/api\/v1\/items\/.*/gm,d=o("itemStore",{handler:e=>{(e.status===201||e.url.match(u))&&s.refresh(),console.debug("itemStore handler called by observer")}}),a=E();return a.on(n.ClearStores,()=>{t.refresh(),s.refresh(),r.refresh()},"stores"),B(()=>{c(),p(),d(),a.off(n.ClearStores,"stores")}),(e,N)=>{const f=S,b=_;return O(),y("div",null,[l(f),l(b),x("main",null,[C(e.$slots,"default")])])}}});export{D as default};
