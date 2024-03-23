import{J as g}from"./AuthenticationCard-2f13d5d4.js";import{L as h}from"./LoadingButton-f0d5d13d.js";import{A as b,I as w}from"./AppLayout-bb7204d2.js";import{X as y}from"./XInput-38039085.js";import{T as x,l as o,o as v,c as C,w as n,b as t,a,t as p,f as V,i as I}from"./app-13432a2a.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import"./useAuthorizable-38ac9d5b.js";const B={components:{XInput:y,AppLayout:b,LoadingButton:h,JetAuthenticationCard:g,Icon:w},data(){return{form:x({password:""})}},methods:{submit(){this.form.post(this.route("password.confirm"),{onFinish:()=>this.form.reset()})}}},P={class:"mb-4 text-sm text-gray-600 dark:text-gray-400"},k={class:"flex justify-end mt-4"};function A(e,s,L,N,r,l){const u=o("app-head"),m=o("Icon"),d=o("x-input"),c=o("loading-button"),f=o("jet-authentication-card"),_=o("app-layout");return v(),C(_,null,{default:n(()=>[t(u,{title:e.__("Confirm your Password")},null,8,["title"]),t(f,null,{logo:n(()=>[t(m,{name:"finger-print2",class:"w-20 h-20 fill-current text-light-blue-500"})]),default:n(()=>[a("div",P,p(e.__("This is a secure area of the application. Please confirm your password before continuing.")),1),a("form",{onSubmit:s[1]||(s[1]=I((...i)=>l.submit&&l.submit(...i),["prevent"]))},[a("div",null,[t(d,{id:"password",modelValue:r.form.password,"onUpdate:modelValue":s[0]||(s[0]=i=>r.form.password=i),label:e.__("Password"),required:!1,autocomplete:"current-password",error:r.form.errors.password,autofocus:!0,type:"password",name:"password"},null,8,["modelValue","label","error"])]),a("div",k,[t(c,{loading:r.form.processing,class:"inline-flex justify-center px-4 py-2 ml-4 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50"},{default:n(()=>[V(p(e.__("Confirm")),1)]),_:1},8,["loading"])])],32)]),_:1})]),_:1})}const M=j(B,[["render",A]]);export{M as default};