import{l as x,q as w,o as s,c as y,w as l,k as g,b as o,u as a,_ as T,a as n,j as f,d as _,t as r,f as c}from"./app-b5a79005.js";import{u as D}from"./AppLayout-e2da1cdb.js";import{_ as j}from"./AdminLayout-d7dd11b1.js";import{_ as P}from"./ServerIntelServerSelector-4f3ecd77.js";import{D as i,_ as S}from"./DtRowItem-86b348dc.js";import{_ as V}from"./millify-2865c83f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./useAuthorizable-8fdefa7b.js";import"./use-resolve-button-type-9534de81.js";import"./CloudArrowDownIcon-e05bc52c.js";import"./index-cc446ff1.js";import"./XSelect-e47c8c1b.js";import"./XMarkIcon-4d971117.js";const B={class:"p-4 mx-auto space-y-4 px-10"},L={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},N={class:"flex items-center"},U=["content"],$=["src"],A={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},C={class:"flex items-center"},M={class:"flex-shrink-0 h-10 w-10"},O=["src"],F={class:"ml-4"},H={key:0,class:"font-extrabold text-gray-700 dark:text-gray-300"},I={key:1,class:"text-red-500 italic"},R={key:0},q={key:1},E={key:0},J={key:1},z={key:0},G={key:1},_e={__name:"PlayersList",props:{serverList:{type:Object},filters:{type:Object},data:{type:Object}},setup(d){const{__:t}=g(),{formatTimeAgoToNow:p,formatToDayDateString:m,secondsToHMS:h}=D(),k=[{key:"country_id",label:t("Flag"),sortable:!0,class:"text-left"},{key:"player_username",label:t("Username"),sortable:!0,class:"text-left"},{key:"server_play_count",label:t("Servers Played"),sortable:!0},{key:"play_time",label:t("Play Time"),sortable:!0},{key:"afk_time",label:t("Afk Time"),sortable:!0},{key:"vault_balance",label:t("Vault Money"),sortable:!0},{key:"last_join_address",label:t("Join Address"),sortable:!0},{key:"last_minecraft_version",label:t("MC Version"),sortable:!0},{key:"first_seen_at",label:t("First Seen"),sortable:!0},{key:"last_seen_at",label:t("Last Seen"),sortable:!0}];return(b,K)=>{const v=x("inertia-link"),u=w("tippy");return s(),y(j,null,{default:l(()=>[o(T,{title:a(t)("Players - PlayerIntel")},null,8,["title"]),n("div",B,[o(P,{title:a(t)("Players"),"server-list":d.serverList,filters:d.filters},null,8,["title","server-list","filters"]),n("div",null,[o(S,{class:"bg-white rounded shadow dark:bg-gray-800",header:k,data:d.data,filters:d.filters},{default:l(({item:e})=>[n("td",L,[n("div",N,[f((s(),_("div",{class:"flex-shrink-0 h-10 w-10 focus:outline-none",content:e.country.name},[n("img",{class:"h-10 w-10",src:e.country.photo_path,alt:""},null,8,$)],8,U)),[[u]])])]),n("td",A,[n("div",C,[n("div",M,[n("img",{class:"h-10 w-10",src:e.player.avatar_url,alt:""},null,8,O)]),n("div",F,[f((s(),y(v,{as:"div",href:b.route("player.show",e.player.uuid),class:"text-sm font-medium text-gray-900 dark:text-gray-200 focus:outline-none cursor-pointer hover:underline",content:e.player.uuid},{default:l(()=>[e.player_username?(s(),_("span",H,r(e.player_username),1)):(s(),_("span",I,r(a(t)("Unknown")),1))]),_:2},1032,["href","content"])),[[u]])])])]),o(i,null,{default:l(()=>[c(r(e.server_play_count)+" "+r(a(t)("servers")),1)]),_:2},1024),o(i,null,{default:l(()=>[e.play_time?(s(),_("span",R,r(a(h)(e.play_time,!0)),1)):(s(),_("span",q," -- "))]),_:2},1024),o(i,null,{default:l(()=>[e.afk_time?(s(),_("span",E,r(a(h)(e.afk_time,!0)),1)):(s(),_("span",J," -- "))]),_:2},1024),o(i,null,{default:l(()=>[e.vault_balance?(s(),_("span",z,r(a(V)(e.vault_balance,{precision:2})),1)):(s(),_("span",G," -- "))]),_:2},1024),o(i,null,{default:l(()=>[c(r(e.last_join_address||a(t)("Unknown")),1)]),_:2},1024),o(i,null,{default:l(()=>[c(r(e.last_minecraft_version||a(t)("Unknown")),1)]),_:2},1024),f((s(),y(i,{content:a(m)(e.first_seen_at)},{default:l(()=>[c(r(a(p)(e.first_seen_at)),1)]),_:2},1032,["content"])),[[u]]),f((s(),y(i,{content:a(m)(e.last_seen_at)},{default:l(()=>[c(r(a(p)(e.last_seen_at)),1)]),_:2},1032,["content"])),[[u]])]),_:1},8,["data","filters"])])])]),_:1})}}};export{_e as default};
