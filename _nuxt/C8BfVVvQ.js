import{_ as E}from"./CwNWaDM3.js";import{r as S,h as u,a as B,i as l,g,b as _,_ as N,o as s,d as e,F as m,j as p,n as d,c as P,t as o,k as y}from"./CxhCrye3.js";import{b}from"./ESjsZ5vE.js";const C={id:"blog-eintraege",class:"container py-5"},I={class:"pt-5"},W={class:"col-md-4"},T={class:"col-md-8"},A={class:"card-body pl-2"},L={class:"card-title gradient-text"},$={class:"card-text"},z={class:"card-text"},j={class:"text-muted"},D={class:"pt-5"},F={class:"pagination justify-content-center"},M=["disabled"],V=["onClick"],H=["disabled"],c=10,O={__name:"index",setup(K){const n=S(1),i=u(()=>Math.ceil(b.length/c)),k=u(()=>{const r=(n.value-1)*c;return b.slice(r,r+c)}),h=()=>{n.value<i.value&&n.value++},v=()=>{n.value>1&&n.value--};return B({title:"NetteSoftware Blog – Web- und App-Entwicklung Insights",ogTitle:"NetteSoftware Blog – Web- und App-Entwicklung Insights",description:"Entdecken Sie wertvolle Tipps und Neuigkeiten rund um Web- und App-Entwicklung im NetteSoftware Blog. Erhalten Sie Experteneinblicke und Best Practices.",ogDescription:"Im NetteSoftware Blog teilen wir wertvolles Wissen und Neuigkeiten zur Web- und App-Entwicklung. Entdecken Sie unsere Expertentipps.",ogImage:"https://nette-software.de/images/logo.webp",twitterCard:"summary_large_image"}),(r,a)=>{const f=E,w=y,x=N;return s(),l("div",C,[g(x,{name:"default"},{default:_(()=>[a[0]||(a[0]=e("h1",null,"Blog",-1)),a[1]||(a[1]=e("div",{class:"intro"},[e("p",null," Hier findest du spannende Artikel, interessante Einblicke und hilfreiche Tipps rund um die Themen Softwareentwicklung, Webdesign und digitale Innovation. Egal, ob du ein angehender Programmierer, ein erfahrener Entwickler oder einfach nur an den neuesten Trends in der Technologie interessiert bist. "),e("p",null," Stöbere durch meine Beiträge und entdecke wertvolle Informationen, die dir helfen, deine Kenntnisse zu erweitern und die besten Praktiken in der Softwareentwicklung zu erlernen. Lass dich inspirieren und bleib auf dem Laufenden! ")],-1)),e("div",I,[(s(!0),l(m,null,p(k.value,t=>(s(),P(w,{to:`blog/${t.slug}`,class:"blog-link row pb-3",key:t.slug},{default:_(()=>[e("div",W,[g(f,{src:t.image?`/images/blog/${t.slug}/${t.image}`:"/images/logo.webp",class:"img-fluid rounded",alt:t.title},null,8,["src","alt"])]),e("div",T,[e("div",A,[e("h5",L,o(t.title),1),e("p",$,o(t.description),1),e("p",z,[e("small",j,o(t.date),1)])])])]),_:2},1032,["to"]))),128)),e("nav",D,[e("ul",F,[e("li",{class:d(["page-item",{disabled:n.value===1}])},[e("button",{class:"page-link",onClick:v,disabled:n.value===1},"Zurück",8,M)],2),(s(!0),l(m,null,p(i.value,t=>(s(),l("li",{class:d(["page-item",{active:n.value===t}]),key:t},[e("button",{class:"page-link",onClick:Z=>n.value=t},o(t),9,V)],2))),128)),e("li",{class:d(["page-item",{disabled:n.value===i.value}])},[e("button",{class:"page-link",onClick:h,disabled:n.value===i.value},"Weiter",8,H)],2)])])])]),_:1})])}}};export{O as default};
