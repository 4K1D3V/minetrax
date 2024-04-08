import{r as c,T as E,C as L,s as R,l as V,o as P,c as N,w as g,b as i,a as s,t as d,f as b,i as X,u as o,d as j,e as B,j as m,m as p,v as D}from"./app-40253c50.js";import{_ as u}from"./InputError-56878d47.js";import{L as A}from"./LoadingButton-dcadc41d.js";import{X as h}from"./XInput-f009c806.js";import{X as _}from"./XCheckbox-ef067584.js";import{E as O}from"./easymde-eca133ae.js";import{X as $}from"./XSelect-36cd7df9.js";import{b as H,h as z,T as G,o as I}from"./darkTheme-45c4da1d.js";import{_ as q}from"./AdminLayout-8e9e5df5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./AppLayout-a080016c.js";import"./useAuthorizable-b0ead891.js";import"./use-resolve-button-type-e9f77412.js";import"./CloudArrowDownIcon-018ac40e.js";import"./index-37b20c98.js";const F={class:"py-12 px-10 max-w-7xl mx-auto"},J={class:"flex justify-between mb-8"},K={class:"font-bold text-3xl text-gray-500 dark:text-gray-300"},Q={class:"mt-10 sm:mt-0"},W={class:"md:grid md:grid-cols-4 md:gap-6"},Y={class:"md:col-span-1"},Z={class:"px-4 sm:px-0"},ee={class:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-400"},se={class:"mt-1 text-sm text-gray-600 dark:text-gray-500"},ae=s("br",null,null,-1),oe={class:"mt-5 md:mt-0 md:col-span-3"},te=["onSubmit"],le={class:"shadow overflow-hidden sm:rounded-md"},ie={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},re={class:"grid grid-cols-6 gap-6"},ne={class:"col-span-6 sm:col-span-6"},de={class:"col-span-6 sm:col-span-6"},me={class:"col-span-6 sm:col-span-6"},ue={key:0,class:"text-sm mt-4 p-4 border border-orange-700 rounded bg-orange-200 text-orange-700 dark:bg-orange-700 dark:bg-opacity-25 dark:text-orange-400"},pe={class:"col-span-6 sm:col-span-6"},_e={class:"col-span-6 sm:col-span-6"},ce={class:"col-span-6 sm:col-span-6"},ge={class:"flex items-center col-span-6 sm:col-span-6"},be={class:"text-base font-medium text-gray-900 dark:text-gray-300"},he={class:"mt-4 flex space-x-4"},ve={class:"px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6 flex justify-end"},Ne={__name:"EditCustomPage",props:{customPage:Object},setup(v){const r=v,n=c(r.customPage.is_redirect?"redirect":r.customPage.is_html_page?"html":"markdown"),y=c(r.customPage.body),U={markdown:"Markdown - Add your content in markdown format",html:"HTML - Add your content in code using HTML/CSS",redirect:"Redirect - This page will redirect to another URL"},e=E({title:r.customPage.title,body:r.customPage.body,path:r.customPage.path,is_visible:r.customPage.is_visible,is_in_navbar:r.customPage.is_in_navbar,is_redirect:r.customPage.is_redirect,redirect_url:r.customPage.redirect_url,is_html_page:r.customPage.is_html_page,is_sidebar_visible:r.customPage.is_sidebar_visible,is_open_in_new_tab:r.customPage.is_open_in_new_tab,_method:"PUT"}),f=L(),w=[H,z()];window.colorMode==="dark"&&w.push(I);const x=c(r.customPage.body),S=a=>{f.value=a.view};let k=null;const T=()=>{n.value==="markdown"?e.body=k.value():n.value==="html"&&(e.body=f.value.state.doc.toString()),e.is_redirect=n.value==="redirect",e.is_html_page=n.value==="html",e.post(route("admin.custom-page.update",r.customPage.id),{})};return R(()=>{k=new O({previewClass:"editor-preview prose max-w-none"})}),(a,t)=>{const C=V("app-head"),M=V("inertia-link");return P(),N(q,null,{default:g(()=>[i(C,{title:`Edit Custom Page: ${v.customPage.title}`},null,8,["title"]),s("div",F,[s("div",J,[s("h1",K,d(a.__("Edit Custom Page")),1),i(M,{href:a.route("admin.custom-page.index"),class:"inline-flex items-center px-4 py-2 bg-gray-400 dark:bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:g(()=>[s("span",null,d(a.__("Cancel")),1)]),_:1},8,["href"])]),s("div",Q,[s("div",W,[s("div",Y,[s("div",Z,[s("h3",ee,d(a.__("Overview")),1),s("p",se,[b(d(a.__("Using custom pages you can create a page based on markdown to show information like privacy, rules etc."))+" ",1),ae,b(" "+d(a.__("Using custom pages you can also redirect to some external links.")),1)])])]),s("div",oe,[s("form",{onSubmit:X(T,["prevent"])},[s("div",le,[s("div",ie,[s("div",re,[s("div",ne,[i(h,{id:"title",modelValue:o(e).title,"onUpdate:modelValue":t[0]||(t[0]=l=>o(e).title=l),label:a.__("Title of Page"),help:a.__("Eg: Privacy & Policy"),error:o(e).errors.title,type:"text",name:"title","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])]),s("div",de,[i(h,{id:"path",modelValue:o(e).path,"onUpdate:modelValue":t[1]||(t[1]=l=>o(e).path=l),label:a.__("URL Path"),help:a.__("Eg: privacy-policy"),error:o(e).errors.path,type:"text",name:"path","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])]),s("div",me,[i($,{id:"page_type",modelValue:n.value,"onUpdate:modelValue":t[2]||(t[2]=l=>n.value=l),name:"page_type",label:a.__("Page Type"),placeholder:a.__("Select a type of page.."),"disable-null":!0,"select-list":U},null,8,["modelValue","label","placeholder"]),n.value==="html"?(P(),j("div",ue,d(a.__("Please be careful with this option, adding malicious code can expose your website to security risks. Make sure you know what you are doing.")),1)):B("",!0)]),m(s("div",pe,[i(h,{id:"redirect_url",modelValue:o(e).redirect_url,"onUpdate:modelValue":t[3]||(t[3]=l=>o(e).redirect_url=l),label:a.__("Redirect URL"),help:a.__("Eg: https://my-custom-shop.com"),error:o(e).errors.redirect_url,type:"text",name:"redirect_url","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])],512),[[p,n.value==="redirect"]]),m(s("div",_e,[i(o(G),{modelValue:x.value,"onUpdate:modelValue":t[4]||(t[4]=l=>x.value=l),placeholder:"Paste your HTML/CSS code here...",style:{height:"400px"},"indent-with-tab":!0,"tab-size":2,extensions:w,onReady:S},null,8,["modelValue"]),i(u,{message:o(e).errors.body,class:"mt-2 text-right"},null,8,["message"])],512),[[p,n.value==="html"]]),m(s("div",ce,[m(s("textarea",{id:"body","onUpdate:modelValue":t[5]||(t[5]=l=>y.value=l),"aria-label":"body",name:"body",class:"mt-1 focus:ring-light-blue-500 focus:border-light-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[D,y.value]]),i(u,{message:o(e).errors.body,class:"mt-2"},null,8,["message"])],512),[[p,n.value==="markdown"]]),s("div",ge,[s("fieldset",null,[s("legend",be,d(a.__("Options")),1),s("div",he,[i(_,{id:"is_visible",modelValue:o(e).is_visible,"onUpdate:modelValue":t[6]||(t[6]=l=>o(e).is_visible=l),label:a.__("Visible"),help:a.__("General public can access this URL via link"),name:"is_visible"},null,8,["modelValue","label","help"]),i(_,{id:"is_in_navbar",modelValue:o(e).is_in_navbar,"onUpdate:modelValue":t[7]||(t[7]=l=>o(e).is_in_navbar=l),label:a.__("Add to Navbar"),help:a.__("Add this page link to the top Navigation bar"),name:"is_in_navbar"},null,8,["modelValue","label","help"]),i(_,{id:"is_open_in_new_tab",modelValue:o(e).is_open_in_new_tab,"onUpdate:modelValue":t[8]||(t[8]=l=>o(e).is_open_in_new_tab=l),label:a.__("Open in New Tab"),help:a.__("Should this page open in new tab"),name:"is_open_in_new_tab"},null,8,["modelValue","label","help"]),m(i(_,{id:"is_sidebar_visible",modelValue:o(e).is_sidebar_visible,"onUpdate:modelValue":t[9]||(t[9]=l=>o(e).is_sidebar_visible=l),label:a.__("Sidebar Visible"),help:a.__("Should right sidebar be visible when user open this page"),name:"is_sidebar_visible"},null,8,["modelValue","label","help"]),[[p,n.value!=="redirect"]])]),i(u,{message:o(e).errors.is_in_navbar,class:"mt-2"},null,8,["message"]),i(u,{message:o(e).errors.is_visible,class:"mt-2"},null,8,["message"]),i(u,{message:o(e).errors.is_sidebar_visible,class:"mt-2"},null,8,["message"])])])])]),s("div",ve,[i(A,{loading:o(e).processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:g(()=>[b(d(a.__("Update Page")),1)]),_:1},8,["loading"])])])],40,te)])])])])]),_:1})}}};export{Ne as default};