import{_ as b}from"./InputError-f1efffd0.js";import{L as w}from"./LoadingButton-f54639a4.js";import{X as v}from"./XInput-d95e8471.js";import{E as k}from"./easymde-9ff68a0e.js";import{X as V}from"./XCheckbox-88af38d3.js";import{T as U,l as i,o as a,c as D,w as f,b as t,a as o,t as n,i as E,j as L,v as C,d,e as m,f as q}from"./app-b5a79005.js";import{_ as A}from"./AdminLayout-d7dd11b1.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";import"./AppLayout-e2da1cdb.js";import"./useAuthorizable-8fdefa7b.js";import"./use-resolve-button-type-9534de81.js";import"./CloudArrowDownIcon-e05bc52c.js";import"./index-cc446ff1.js";const j={components:{AdminLayout:A,JetInputError:b,LoadingButton:w,XInput:v,XCheckbox:V},data(){return{form:U({name:null,description:"",is_external:!1,file_url:null,file_name:null,is_external_url_hidden:!1,is_only_auth:!1,min_role_weight_required:null,is_active:!0,file:null}),easyMDE:null}},mounted(){this.easyMDE=new k({previewClass:"editor-preview prose max-w-none"})},methods:{addDownload(){!this.form.is_external&&this.$refs.file&&(this.form.file=this.$refs.file.files[0]),this.form.description=this.easyMDE.value(),this.form.post(route("admin.download.store"),{})}}},N={class:"py-12 px-10 max-w-6xl mx-auto"},R={class:"flex justify-between mb-8"},B={class:"font-bold text-3xl text-gray-500 dark:text-gray-300"},T={class:"mt-10 sm:mt-0"},I={class:"md:grid md:grid-cols-3 md:gap-6"},X={class:"md:col-span-1"},z={class:"px-4 sm:px-0"},F={class:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-400"},H={class:"mt-1 text-sm text-gray-600 dark:text-gray-500"},O={class:"mt-1 text-sm text-gray-600 dark:text-gray-500"},S={class:"mt-5 md:mt-0 md:col-span-2"},J={class:"shadow overflow-hidden sm:rounded-md"},W={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},Y={class:"grid grid-cols-6 gap-6"},G={class:"col-span-6 sm:col-span-6"},K={class:"col-span-6 sm:col-span-6"},P={class:"flex items-center col-span-6 sm:col-span-3"},Q={key:0,class:"flex items-center col-span-6 sm:col-span-3"},Z={key:1,class:"col-span-6 sm:col-span-6"},$={key:2,class:"col-span-6 sm:col-span-6"},ee={key:3,class:"col-span-6 sm:col-span-6"},oe={for:"file",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},re={id:"file",ref:"file",type:"file",class:"block p-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"},le={class:"flex items-center col-span-6 sm:col-span-3"},se={key:4,class:"col-span-6 sm:col-span-3"},te={class:"flex items-center col-span-6 sm:col-span-6"},ie={class:"px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6 flex justify-end"};function ne(r,l,ae,de,e,p){const h=i("app-head"),g=i("inertia-link"),_=i("x-input"),c=i("jet-input-error"),u=i("x-checkbox"),y=i("loading-button"),x=i("AdminLayout");return a(),D(x,null,{default:f(()=>[t(h,{title:"Create Download"}),o("div",N,[o("div",R,[o("h1",B,n(r.__("Create Download")),1),t(g,{href:r.route("admin.download.index"),class:"inline-flex items-center px-4 py-2 bg-gray-400 dark:bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:f(()=>[o("span",null,n(r.__("Cancel")),1)]),_:1},8,["href"])]),o("div",T,[o("div",I,[o("div",X,[o("div",z,[o("h3",F,n(r.__("Overview")),1),o("p",H,n(r.__("Using downloads you can safely provide your users way to download anything like resource packs etc.")),1),o("p",O,n(r.__("You can restrict the download to a paricular role and even hide actual external download URL from end user by stream the file directly from within minetrax.")),1)])]),o("div",S,[o("form",{onSubmit:l[9]||(l[9]=E((...s)=>p.addDownload&&p.addDownload(...s),["prevent"]))},[o("div",J,[o("div",W,[o("div",Y,[o("div",G,[t(_,{id:"name",modelValue:e.form.name,"onUpdate:modelValue":l[0]||(l[0]=s=>e.form.name=s),label:r.__("Download Name/Title"),error:e.form.errors.name,type:"text",name:"name","help-error-flex":"flex-row"},null,8,["modelValue","label","error"])]),o("div",K,[L(o("textarea",{id:"description","onUpdate:modelValue":l[1]||(l[1]=s=>e.form.description=s),"aria-label":"description",name:"description",class:"mt-1 focus:ring-light-blue-500 focus:border-light-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[C,e.form.description]]),t(c,{message:e.form.errors.description,class:"mt-2"},null,8,["message"])]),o("div",P,[t(u,{id:"is_external",modelValue:e.form.is_external,"onUpdate:modelValue":l[2]||(l[2]=s=>e.form.is_external=s),label:r.__("External URL"),help:r.__("If you want to link to an external file, check this."),name:"is_external",error:e.form.errors.is_external},null,8,["modelValue","label","help","error"])]),e.form.is_external?(a(),d("div",Q,[t(u,{id:"is_external_url_hidden",modelValue:e.form.is_external_url_hidden,"onUpdate:modelValue":l[3]||(l[3]=s=>e.form.is_external_url_hidden=s),label:r.__("Hide External URL"),help:r.__("Hide the actual external URL from end users."),name:"is_external_url_hidden",error:e.form.errors.is_external_url_hidden},null,8,["modelValue","label","help","error"])])):m("",!0),e.form.is_external?(a(),d("div",Z,[t(_,{id:"file_url",modelValue:e.form.file_url,"onUpdate:modelValue":l[4]||(l[4]=s=>e.form.file_url=s),label:r.__("File Download URL"),error:e.form.errors.file_url,help:r.__("Eg: http://s3.amazonaws.com/bucket/file.zip"),type:"text",name:"file_url","help-error-flex":"flex-row"},null,8,["modelValue","label","error","help"])])):m("",!0),e.form.is_external?(a(),d("div",$,[t(_,{id:"file_name",modelValue:e.form.file_name,"onUpdate:modelValue":l[5]||(l[5]=s=>e.form.file_name=s),label:r.__("File Name (with extension)"),error:e.form.errors.file_name,help:r.__("Eg: file.zip"),type:"text",name:"file_name","help-error-flex":"flex-row"},null,8,["modelValue","label","error","help"])])):m("",!0),e.form.is_external?m("",!0):(a(),d("div",ee,[o("label",oe,n(r.__("File")),1),o("input",re,null,512),t(c,{message:e.form.errors.file,class:"mt-2"},null,8,["message"])])),o("div",le,[t(u,{id:"is_only_auth",modelValue:e.form.is_only_auth,"onUpdate:modelValue":l[6]||(l[6]=s=>e.form.is_only_auth=s),label:r.__("Authenticated Users Only"),help:r.__("If only authenticated users should be able to view & download this file."),name:"is_only_auth",error:e.form.errors.is_only_auth},null,8,["modelValue","label","help","error"])]),e.form.is_only_auth?(a(),d("div",se,[t(_,{id:"min_role_weight_required",modelValue:e.form.min_role_weight_required,"onUpdate:modelValue":l[7]||(l[7]=s=>e.form.min_role_weight_required=s),label:r.__("Minimum Role Weight"),help:r.__("The minimum role weight required to download. Leave empty to allow all authenticated users."),error:e.form.errors.min_role_weight_required,type:"number",name:"min_role_weight_required","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])])):m("",!0),o("div",te,[t(u,{id:"is_active",modelValue:e.form.is_active,"onUpdate:modelValue":l[8]||(l[8]=s=>e.form.is_active=s),label:r.__("Active"),help:r.__("Active downloads are visible to end users."),name:"is_active",error:e.form.errors.is_active},null,8,["modelValue","label","help","error"])])])]),o("div",ie,[t(y,{loading:e.form.processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:f(()=>[q(n(r.__("Add Download")),1)]),_:1},8,["loading"])])])],32)])])])])]),_:1})}const ke=M(j,[["render",ne]]);export{ke as default};
