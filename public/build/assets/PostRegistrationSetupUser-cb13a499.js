import{J as h}from"./AuthenticationCard-087ed10d.js";import{L as x}from"./LoadingButton-7f7e4e61.js";import{A as y,I as v}from"./AppLayout-e134b68d.js";import{X as C}from"./XInput-cfa04922.js";import{_ as V,T as k,l as e,o as d,c as w,w as r,b as t,a,t as i,d as B,e as I,f as j,i as N}from"./app-abc2c6f9.js";import"./useAuthorizable-bbacc5be.js";const S={components:{XInput:C,AppLayout:y,LoadingButton:x,JetAuthenticationCard:h,Icon:v},props:{status:String},data(){return{form:k({username:""})}},methods:{submit(){this.form.post(this.route("auth.post-reg-setup"))}}},U={class:"mb-4 text-sm text-gray-600 dark:text-gray-400"},A={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},L={class:"flex items-center justify-end mt-4"};function J(o,n,l,T,s,m){const c=e("app-head"),p=e("Icon"),f=e("x-input"),_=e("loading-button"),g=e("jet-authentication-card"),b=e("app-layout");return d(),w(b,null,{default:r(()=>[t(c,{title:o.__("Choose a username")},null,8,["title"]),t(g,null,{logo:r(()=>[t(p,{name:"person-badge",class:"text-light-blue-500 fill-current w-16 h-16"})]),default:r(()=>[a("div",U,i(o.__("Choose a cool Username for yourself!")),1),l.status?(d(),B("div",A,i(l.status),1)):I("",!0),a("form",{onSubmit:n[1]||(n[1]=N((...u)=>m.submit&&m.submit(...u),["prevent"]))},[a("div",null,[t(f,{id:"username",modelValue:s.form.username,"onUpdate:modelValue":n[0]||(n[0]=u=>s.form.username=u),label:o.__("Username"),required:!0,autofocus:!0,error:s.form.errors.username,type:"text",name:"username"},null,8,["modelValue","label","error"])]),a("div",L,[t(_,{loading:s.form.processing,class:"ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50"},{default:r(()=>[j(i(o.__("Continue")),1)]),_:1},8,["loading"])])],32)]),_:1})]),_:1})}const R=V(S,[["render",J]]);export{R as default};