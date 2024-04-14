import{_ as b}from"./ActionMessage-a732ed5e.js";import{_ as j}from"./ActionSection-909e8436.js";import{_ as B}from"./Button-a948cb51.js";import{_ as x}from"./DialogModal-8aa77526.js";import{_ as S}from"./Input-fc1b0446.js";import{_ as C}from"./InputError-4efbbec3.js";import{_ as L}from"./SecondaryButton-b2ae213e.js";import{T as M,l,o as a,c as V,w as t,f as r,t as o,a as s,d as c,F as J,g as O,e as N,b as _,a9 as F,n as I}from"./app-5ffe1bb1.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import"./SectionTitle-9657063c.js";import"./Modal-9c4eec9a.js";const z={components:{JetActionMessage:b,JetActionSection:j,JetButton:B,JetDialogModal:x,JetInput:S,JetInputError:C,JetSecondaryButton:L},props:["sessions"],data(){return{confirmingLogout:!1,form:M({password:""})}},methods:{confirmLogout(){this.confirmingLogout=!0,setTimeout(()=>this.$refs.password.focus(),250)},logoutOtherBrowserSessions(){this.form.delete(route("other-browser-sessions.destroy"),{preserveScroll:!0,onSuccess:()=>this.closeModal(),onError:()=>this.$refs.password.focus(),onFinish:()=>this.form.reset()})},closeModal(){this.confirmingLogout=!1,this.form.reset()}}},D={class:"max-w-xl text-sm text-gray-600 dark:text-gray-400"},E={key:0,class:"mt-5 space-y-6"},K={key:0,fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor",class:"w-8 h-8 text-gray-500"},A=s("path",{d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},null,-1),H=[A],P={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"w-8 h-8 text-gray-500"},U=s("path",{d:"M0 0h24v24H0z",stroke:"none"},null,-1),q=s("rect",{x:"7",y:"4",width:"10",height:"16",rx:"1"},null,-1),G=s("path",{d:"M11 5h2M12 17v.01"},null,-1),Q=[U,q,G],R={class:"ml-3"},W={class:"text-sm text-gray-600 dark:text-gray-400"},X={class:"text-xs text-gray-500"},Y={key:0,class:"text-green-500 font-semibold"},Z={key:1},$={class:"flex items-center mt-5"},oo={class:"mt-4"};function eo(e,m,u,so,i,d){const f=l("jet-button"),h=l("jet-action-message"),p=l("jet-input"),g=l("jet-input-error"),w=l("jet-secondary-button"),y=l("jet-dialog-modal"),v=l("jet-action-section");return a(),V(v,null,{title:t(()=>[r(o(e.__("Browser Sessions")),1)]),description:t(()=>[r(o(e.__("Manage and logout your active sessions on other browsers and devices.")),1)]),content:t(()=>[s("div",D,o(e.__("If necessary, you may logout of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password.")),1),u.sessions.length>0?(a(),c("div",E,[(a(!0),c(J,null,O(u.sessions,(n,k)=>(a(),c("div",{key:k,class:"flex items-center"},[s("div",null,[n.agent.is_desktop?(a(),c("svg",K,H)):(a(),c("svg",P,Q))]),s("div",R,[s("div",W,o(n.agent.platform)+" - "+o(n.agent.browser),1),s("div",null,[s("div",X,[r(o(n.ip_address)+", ",1),n.is_current_device?(a(),c("span",Y,o(e.__("This device")),1)):(a(),c("span",Z,o(e.__("Last active"))+" "+o(n.last_active),1))])])])]))),128))])):N("",!0),s("div",$,[_(f,{onClick:d.confirmLogout},{default:t(()=>[r(o(e.__("Logout Other Browser Sessions")),1)]),_:1},8,["onClick"]),_(h,{on:i.form.recentlySuccessful,class:"ml-3"},{default:t(()=>[r(o(e.__("Done"))+". ",1)]),_:1},8,["on"])]),_(y,{show:i.confirmingLogout,onClose:d.closeModal},{title:t(()=>[r(o(e.__("Logout Other Browser Sessions")),1)]),content:t(()=>[r(o(e.__("Please enter your password to confirm you would like to logout of your other browser sessions across all of your devices."))+" ",1),s("div",oo,[_(p,{ref:"password",modelValue:i.form.password,"onUpdate:modelValue":m[0]||(m[0]=n=>i.form.password=n),type:"password",class:"mt-1 block w-3/4",placeholder:e.__("Password"),onKeyup:F(d.logoutOtherBrowserSessions,["enter","native"])},null,8,["modelValue","placeholder","onKeyup"]),_(g,{message:i.form.errors.password,class:"mt-2"},null,8,["message"])])]),footer:t(()=>[_(w,{onClick:d.closeModal},{default:t(()=>[r(o(e.__("Nevermind")),1)]),_:1},8,["onClick"]),_(f,{class:I(["ml-2",{"opacity-25":i.form.processing}]),disabled:i.form.processing,onClick:d.logoutOtherBrowserSessions},{default:t(()=>[r(o(e.__("Logout Other Browser Sessions")),1)]),_:1},8,["class","disabled","onClick"])]),_:1},8,["show","onClose"])]),_:1})}const ho=T(z,[["render",eo]]);export{ho as default};