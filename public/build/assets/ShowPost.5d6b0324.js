import{A as _}from"./AppLayout.bc5e16a8.js";import{S as m}from"./ShoutBox.95928086.js";import{S as x}from"./ServerStatusBox.c5a67988.js";import{D as u,_ as f}from"./DidYouKnowBox.62cad023.js";import{P as b}from"./Post.7db8c990.js";import{_ as h,c as v,w as y,l as e,o as w,b as s,a as o}from"./app.42e0fd93.js";import"./useAuthorizable.9ef6cf28.js";import"./CopyToClipboard.4358cfcf.js";import"./UserDisplayname.3bb91b28.js";const g={components:{DiscordServerBox:u,DidYouKnowBox:f,ServerStatusBox:x,AppLayout:_,ShoutBox:m,Post:b},props:{post:Object}},S={class:"px-2 py-4 md:py-12 md:px-16 max-w-8xl mx-auto"},k={class:"flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0"},B={class:"hidden md:flex flex-col space-y-4 flex-none w-1/4 h-screen sticky top-5"},$={class:"flex-grow"},P={class:"-my-2 overflow-x-auto md:-mx-6 lg:-mx-8"},D={class:"py-2 align-middle inline-block min-w-full md:px-6 lg:px-8"},A={class:""},C={class:"flex flex-col space-y-4 flex-none md:w-1/4 h-screen md:sticky top-5"};function N(t,V,n,j,K,L){const a=e("app-head"),c=e("did-you-know-box"),d=e("discord-server-box"),p=e("post"),r=e("server-status-box"),l=e("shout-box"),i=e("app-layout");return w(),v(i,null,{default:y(()=>[s(a,{title:t.__("Post #:id by :name",{id:n.post.id,name:n.post.user.name})},null,8,["title"]),o("div",S,[o("div",k,[o("div",B,[s(c,{enabled:t.$page.props.generalSettings.enable_didyouknowbox},null,8,["enabled"]),s(d,{enabled:t.$page.props.generalSettings.enable_discordbox,server:t.$page.props.generalSettings.discord_server_id},null,8,["enabled","server"])]),o("div",$,[o("div",P,[o("div",D,[o("div",A,[s(p,{post:n.post,"comments-section-opened":!0},null,8,["post"])])])])]),o("div",C,[s(r),s(l)])])])]),_:1})}const J=h(g,[["render",N]]);export{J as default};