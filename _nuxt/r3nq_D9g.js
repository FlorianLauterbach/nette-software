import{B as n,h as o,V as c,D as h,A as p,W as l,o as u,c as d,e as r,a5 as f}from"./gPPbDvz1.js";import{_ as m}from"./DAm2IuYa.js";const S=n({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(a){const t=a,i=o(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const e=c(h(p().app.baseURL));if(e!=="/"&&!t.src.startsWith(e))return l(e,t.src)}return t.src});return(s,e)=>(u(),d(f(r(m)),{src:r(i),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{S as default};
