import{u as _,o as n,f as i,d as t,F as u,j as m,h as g,b as h,t as c,g as p,k as x}from"./BVr8TTUx.js";import{b as a}from"./NysMDaT-.js";const b={key:0,id:"latest-posts"},f={class:"row"},k={class:"col-12 col-md-4 p-0"},v=["src","alt"],w={class:"col-12 col-md-8 p-0 h-100"},y={class:"card-body py-0 h-100"},B={class:"card-title gradient-text mb-0"},D={class:"card-text text-truncate-ellipsis mb-0"},N={class:"card-text"},I={class:"text-muted"},E={__name:"LatestPosts",setup(L){const d=_().params.slug,e=[];return a.sort((o,l)=>new Date(l.date)-new Date(o.date)),a.findIndex(o=>o.slug===d)===0?e.push(...a.slice(1,4)):e.push(...a.slice(0,4)),(o,l)=>{const r=x;return e.length?(n(),i("div",b,[l[0]||(l[0]=t("h5",null,"Die letzten Blog Einträge",-1)),t("div",f,[(n(),i(u,null,m(e,s=>t("div",{key:s.title,class:"col-12 col-md-6"},[g(r,{to:`blog/${s.slug}`,class:"card blog-link row m-3"},{default:h(()=>[t("div",k,[t("img",{src:s.image?`/images/blog/${s.slug}/${s.image}`:"/images/logo.png",class:"img-fluid rounded",alt:s.title},null,8,v)]),t("div",w,[t("div",y,[t("h5",B,c(s.title),1),t("p",D,c(s.description),1),t("p",N,[t("small",I,c(s.date),1)])])])]),_:2},1032,["to"])])),64))])])):p("",!0)}}};export{E as _};
