import{I as d}from"./AppLayout-e2da1cdb.js";import{_ as l}from"./_plugin-vue_export-helper-c27b6911.js";import{l as c,o,d as t,a as s,t as u,b as n,e as r}from"./app-b5a79005.js";const f={name:"SocialAuthButtons",components:{Icon:d},computed:{shouldDisplayThisPage:function(){return this.$page.props.enabledSocialAuths&&Object.values(this.$page.props.enabledSocialAuths).some(e=>e)}}},h={key:0,id:"social-auth"},g={class:"flex justify-between items-center mt-3"},p=s("hr",{class:"w-full dark:border-gray-600"},null,-1),m={class:"p-2 text-gray-400 dark:text-gray-500 whitespace-nowrap text-sm"},b=s("hr",{class:"w-full dark:border-gray-600"},null,-1),y={class:"flex justify-around flex-wrap"},k=["href"],_=["href"],w=["href"],x=["href"];function v(e,S,$,A,j,i){const a=c("icon");return i.shouldDisplayThisPage?(o(),t("div",h,[s("div",g,[p,s("span",m,u(e.__("Or continue with")),1),b]),s("div",y,[e.$page.props.enabledSocialAuths.google?(o(),t("a",{key:0,href:e.route("social.login","google"),class:"inline-flex mt-1 justify-center py-2 px-9 border dark:border-transparent shadow-sm text-sm font-medium rounded-md dark:text-white text-red-500 dark:bg-red-500 hover:bg-gray-50 dark:hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"},[n(a,{name:"google",class:"h-5 w-5 fill-current"})],8,k)):r("",!0),e.$page.props.enabledSocialAuths.facebook?(o(),t("a",{key:1,href:e.route("social.login","facebook"),class:"inline-flex mt-1 justify-center py-2 px-9 border dark:border-transparent shadow-sm text-sm font-medium rounded-md dark:text-white dark:bg-blue-700 hover:bg-gray-50 dark:hover:bg-blue-800 text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 disabled:opacity-50"},[n(a,{name:"facebook",class:"w-5 h-5 fill-current"})],8,_)):r("",!0),e.$page.props.enabledSocialAuths.twitter?(o(),t("a",{key:2,href:e.route("social.login","twitter"),class:"inline-flex mt-1 justify-center py-2 px-9 border dark:border-transparent shadow-sm text-sm font-medium rounded-md dark:text-white text-light-blue-400 dark:bg-light-blue-400 hover:bg-gray-50 dark:hover:bg-light-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50"},[n(a,{name:"twitter",class:"h-5 w-5 fill-current"})],8,w)):r("",!0),e.$page.props.enabledSocialAuths.discord?(o(),t("a",{key:3,href:e.route("social.login","discord"),class:"inline-flex mt-1 justify-center py-2 px-9 border dark:border-transparent shadow-sm text-sm font-medium rounded-md dark:text-white text-indigo-500 dark:bg-indigo-500 hover:bg-gray-50 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 disabled:opacity-50"},[n(a,{name:"discord",class:"h-5 w-5 fill-current"})],8,x)):r("",!0)])])):r("",!0)}const V=l(f,[["render",v]]);export{V as S};
