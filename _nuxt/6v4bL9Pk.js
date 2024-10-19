import{m as _,o as i,i as o,p as x,l as f,d as e,F as h,j as g,g as l,t as p,h as v,c as y,r as w,q as S,v as A,n as W,b as k,T as $,a as I,_ as P}from"./CxhCrye3.js";import E from"./Dz88bCf7.js";import{_ as z}from"./CwNWaDM3.js";import{_ as N}from"./BFpffJrh.js";import"./ESjsZ5vE.js";const M={},V={class:"hero-box d-flex justify-content-center align-items-center"};function q(u,t){return i(),o("section",V,t[0]||(t[0]=[x('<div class="text-overlay text-center" data-v-4607043c><h1 class="display-4" data-v-4607043c><span class="gradient-text" data-v-4607043c>NetteSoftware</span></h1><h2 class="lead" data-v-4607043c> Programmierer für maßgeschneiderte Webseiten und mobile Apps aus <span class="gradient-text" data-v-4607043c>Nettetal</span></h2></div>',1)]))}const D=_(M,[["render",q],["__scopeId","data-v-4607043c"]]),L={},j={id:"pitch",class:"container"};function B(u,t){return i(),o("div",j,t[0]||(t[0]=[f(" Hallo, ich bin "),e("span",{class:"gradient-text"},"Florian Lauterbach",-1),f(", ein erfahrener Senior Web- und App-Entwickler. Ich spezialisiere mich darauf, benutzerfreundliche und leistungsstarke digitale Lösungen für Unternehmen zu erstellen, die ihre Online-Präsenz verbessern oder eine mobile App launchen möchten."),e("br",null,null,-1),f(" Mit meiner Erfahrung in der Entwicklung skalierbarer Anwendungen habe ich bereits mit Automobil-Konzernen zusammengearbeitet, aber auch lokale Unternehmen unterstützt. Wenn du auf der Suche nach einem Entwickler bist, der dein nächstes digitales Projekt schnell und professionell umsetzt, würde ich mich freuen, wenn wir uns darüber unterhalten könnten. ")]))}const C=_(L,[["render",B]]),T={id:"services",class:"container"},J={class:"row mt-5"},F={class:"gradient-text"},K={class:"text-start text-md-center mt-3"},U={__name:"Services",setup(u){const t=[{icon:"material-symbols-light:responsive-layout-outline-rounded",title:"Frontend",text:"Erstellung von modernen, responsiven und benutzerfreundlichen Webseiten, die auf allen Geräten optimal funktionieren."},{icon:"material-symbols-light:smartphone-outline",title:"App",text:"Entwicklung nativer oder plattformübergreifender Apps, die sowohl auf iOS als auch Android reibungslos laufen."},{icon:"material-symbols-light:database-outline",title:"Backend",text:"Entwicklung und Implementierung leistungsstarker Backend-Systeme und APIs, die nahtlose Datenkommunikation und Skalierbarkeit ermöglichen."},{icon:"material-symbols-light:contact-support-outline-rounded",title:"Beratung",text:"Beratung zur technischen Umsetzung von Projekten, Code-Optimierung und Leistungssteigerung bestehender Systeme."}];return(m,a)=>{const r=E;return i(),o("div",T,[a[0]||(a[0]=e("h3",{class:"gradient-text"},"Dienstleistungen",-1)),e("div",J,[(i(),o(h,null,g(t,s=>e("div",{class:"col-12 col-sm-6 col-md-6 text-center my-3",key:s.title},[l(r,{name:s.icon,class:"icon"},null,8,["name"]),e("h4",F,p(s.title),1),e("div",K,[e("p",null,p(s.text),1)])])),64))])])}}},G=_(U,[["__scopeId","data-v-24cf4bf8"]]),H={__name:"TechnologyImage",props:["technology"],setup(u){const t=u,m=v(()=>`/images/technologies/${t.technology.title.replaceAll(/\s/g,"").toLowerCase()}-logo.webp`),a=v(()=>t.technology.title);return(r,s)=>{const d=z;return i(),y(d,{src:m.value,class:"logo",alt:`${a.value} Logo`},null,8,["src","alt"])}}},O=_(H,[["__scopeId","data-v-d92317cb"]]),R={id:"technologies",class:"container"},Q={class:"row mt-5"},X={class:"d-md-none"},Y=["value"],Z={class:"d-none d-md-flex justify-content-end"},ee={class:"btn-group",role:"group"},te=["onClick"],ne={class:"h5 gradient-text"},se={__name:"Technologies",setup(u){const t=w("all"),m=[{name:"all",title:"Alle"},{name:"frontend",title:"Frontend"},{name:"backend",title:"Backend"},{name:"cms",title:"CMS"},{name:"cicd",title:"CI/CD"},{name:"docu",title:"Dokumentation"}],a=[{title:"AngularJS",type:"frontend",text:""},{title:"Bootstrap",type:"frontend",text:""},{title:"Directus",type:"cms",text:""},{title:"Docusaurus",type:"docu",text:""},{title:"ExtJS",type:"frontend",text:""},{title:"Github Actions",type:"cicd",text:""},{title:"Gitlab Actions",type:"cicd",text:""},{title:"Ionic",type:"frontend",text:""},{title:"Laravel",type:"backend",text:""},{title:"NodeJS",type:"backend",text:""},{title:"NuxtJS",type:"backend",text:""},{title:"ReactJS",type:"frontend",text:""},{title:"Storybook",type:"docu",text:""},{title:"Storyblok",type:"cms",text:""},{title:"Strapi",type:"cms",text:""},{title:"Tailwind",type:"frontend",text:""},{title:"ViteJS",type:"frontend",text:""},{title:"VueJS",type:"frontend",text:""},{title:"VuetifyJS",type:"frontend",text:""},{title:"Wordpress",type:"CMS",text:""}],r=function(d){console.log(d),t.value=d},s=v(()=>t.value=="all"?a:a.filter(d=>d.type===t.value));return(d,c)=>{const b=O;return i(),o("div",R,[c[2]||(c[2]=e("h3",{class:"gradient-text"},"Technologien",-1)),c[3]||(c[3]=e("p",null," Von mir verwendete Techstacks. Ist deiner nicht dabei? Kein Problem - lass es mich wissen und wir finden eine Lösung. ",-1)),e("div",Q,[e("div",X,[S(e("select",{class:"form-select",onChange:c[0]||(c[0]=n=>r(t.value)),"onUpdate:modelValue":c[1]||(c[1]=n=>t.value=n)},[(i(),o(h,null,g(m,n=>e("option",{key:n.name,value:n.name},p(n.title),9,Y)),64))],544),[[A,t.value]])]),e("div",Z,[e("div",ee,[(i(),o(h,null,g(m,n=>e("button",{type:"button",class:W(["btn",n.name===t.value?"btn-primary":"btn-outline-secondary"]),key:n.name,onClick:_e=>r(n.name)},p(n.title),11,te)),64))])]),l($,{name:"slide",tag:"div",class:"row"},{default:k(()=>[(i(!0),o(h,null,g(s.value,n=>(i(),o("div",{class:"col-6 col-md-3 text-center my-5",key:n.title},[e("p",ne,p(n.title),1),l(b,{technology:n},null,8,["technology"])]))),128))]),_:1})])])}}},ie=_(se,[["__scopeId","data-v-77b5c072"]]),oe={class:"container"},ae={class:"accordion",id:"faqAccordion"},re=["id"],ce=["data-bs-target","aria-controls"],le=["id","aria-labelledby"],de={class:"accordion-body"},ue={__name:"Faq",setup(u){const t=w([{question:"Welche Technologien verwendest du für die Webentwicklung?",answer:"Ich arbeite hauptsächlich mit modernen Webtechnologien wie HTML5, CSS3, JavaScript (React, Angular, Vue.js) für das Frontend und Node.js oder PHP für das Backend."},{question:"Entwickel du sowohl iOS- als auch Android-Apps?",answer:"Ja, ich biete die Entwicklung von Cross-Plattform-Lösungen wie React Native und oder Ionic Vue an."},{question:"Wie lange dauert die Entwicklung einer Website oder App?",answer:"Die Entwicklungszeit hängt stark von der Komplexität des Projekts ab. Eine einfache Website kann in 2-4 Wochen fertiggestellt werden, während eine maßgeschneiderte App mehrere Monate dauern kann."},{question:"Bietest du auch Wartung und Support nach dem Projektabschluss an?",answer:"Ja, ich biete Wartungs- und Support-Dienstleistungen an, um sicherzustellen, dass deine Website oder App nach dem Launch weiterhin reibungslos funktioniert."},{question:"Wie sieht der Entwicklungsprozess bei dir aus?",answer:"Mein Prozess beginnt mit einer detaillierten Anforderungsanalyse, gefolgt von Planung, Design und Entwicklung. Ich arbeite eng mit meinen Kunden zusammen und biete regelmäßige Updates an."},{question:"Kann ich eine bestehende Website oder App von dir optimieren oder erweitern lassen?",answer:"Ja, ich kann deine bestehende Website oder App optimieren, erweitern oder modernisieren. Egal, ob es um Performance-Verbesserungen oder zusätzliche Features geht."},{question:"Welche Kosten sind mit einem Projekt verbunden?",answer:"Die Kosten variieren je nach Umfang des Projekts. Nach einer ersten Besprechung erstelle ich ein individuelles Angebot, das auf den Anforderungen basiert."},{question:"Wie werde ich während des Projekts auf dem Laufenden gehalten?",answer:"Ich halte dich durch regelmäßige Status-Updates und Meetings auf dem Laufenden und besprechen den Fortschritt gemeinsam."},{question:"Kannst du auch ein MVP (Minimum Viable Product) entwickeln?",answer:"Ja, ich habe viel Erfahrung in der Entwicklung von MVPs, insbesondere für Start-ups, die schnell auf den Markt wollen."},{question:"Wie kann ich sicherstellen, dass meine Idee geschützt bleibt?",answer:"Ich unterzeichne gerne eine Verschwiegenheitserklärung (NDA), bevor wir mit dem Projekt starten. Deine Daten und Ideen werden stets vertraulich behandelt."}]);return(m,a)=>(i(),o("div",oe,[e("div",ae,[a[0]||(a[0]=e("h3",{class:"gradient-text"},"FAQ",-1)),(i(!0),o(h,null,g(t.value,(r,s)=>(i(),o("div",{class:"accordion-item",key:s},[e("h2",{class:"accordion-header",id:"heading"+s},[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapse"+s,"aria-expanded":"false","aria-controls":"collapse"+s},p(r.question),9,ce)],8,re),e("div",{id:"collapse"+s,class:"accordion-collapse collapse","aria-labelledby":"heading"+s,"data-bs-parent":"#faqAccordion"},[e("div",de,[e("p",null,p(r.answer),1)])],8,le)]))),128))])]))}},me=_(ue,[["__scopeId","data-v-262182ce"]]),pe={__name:"index",setup(u){return I({title:"Web- und App-Entwicklung nach Maß - NetteSoftware",ogTitle:"Web- und App-Entwicklung nach Maß - NetteSoftware",description:"NetteSoftware bietet professionelle Web- und App-Entwicklung für individuelle Lösungen. Gemeinsam verwirklichen wir Ihre digitale Vision.",ogDescription:"Maßgeschneiderte Web- und App-Entwicklung für Unternehmen und Privatpersonen. Mit NetteSoftware digitale Projekte erfolgreich umsetzen.",ogImage:"https://nette-software.de/images/logo.webp",twitterCard:"summary_large_image"}),(t,m)=>{const a=D,r=C,s=G,d=ie,c=me,b=N,n=P;return i(),o("div",null,[l(n,{name:"default"},{default:k(()=>[l(a),l(r,{class:"area"}),l(s,{class:"area"}),l(d,{class:"area"}),l(c,{class:"area pb-5"}),l(b,{class:"area pb-5 container"})]),_:1})])}}},we=_(pe,[["__scopeId","data-v-04a994f8"]]);export{we as default};
