(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();const g={"document-title":{ua:"Команда",en:"Home"},"nav-link-main":{ua:"Головна",en:"Main Page"},"nav-link-team":{ua:"Команда",en:"Our Team"},"nav-link-partnership":{ua:"Партнерство",en:"Partnership"},"nav-link-news":{ua:"Новини",en:"News"},"nav-link-projects":{ua:"Проєкти",en:"Projects"},"nav-link-contacts":{ua:"Контакти",en:"Contacts"}},p={"document-title":{uk:"Команда",en:"Team"},"nav-link-main":{uk:"Головна",en:"Main Page"},"nav-link-team":{uk:"Команда",en:"Our Team"},"nav-link-partnership":{uk:"Партнерство",en:"Partnership"},"nav-link-news":{uk:"Новини",en:"News"},"nav-link-projects":{uk:"Проєкти",en:"Projects"},"nav-link-contacts":{uk:"Контакти",en:"Contacts"},"team-hero-title":{uk:"Команда",en:"Our Team"}},d={"document-title":{uk:"Партнерство",en:"Partnership"},"nav-link-main":{uk:"Головна",en:"Main Page"},"nav-link-team":{uk:"Команда",en:"Our Team"},"nav-link-partnership":{uk:"Партнерство",en:"Partnership"},"nav-link-news":{uk:"Новини",en:"News"},"nav-link-projects":{uk:"Проєкти",en:"Projects"},"nav-link-contacts":{uk:"Контакти",en:"Contacts"},"partnership-hero-title":{uk:"Партнерство",en:"Partnership"}},h={"document-title":{uk:"Новини",en:"News"},"nav-link-main":{uk:"Головна",ek:"Main Page"},"nav-link-team":{uk:"Команда",en:"Our Team"},"nav-link-partnership":{uk:"Партнерство",en:"Partnership"},"nav-link-news":{uk:"Новини",en:"News"},"nav-link-projects":{uk:"Проєкти",en:"Projects"},"nav-link-contacts":{uk:"Контакти",en:"Contacts"},"news-hero-title":{uk:"Новини",en:"News"}},v={"document-title":{uk:"Проєкти",en:"Projects"},"nav-link-main":{uk:"Головна",en:"Main Page"},"nav-link-team":{uk:"Команда",en:"Our Team"},"nav-link-partnership":{uk:"Партнерство",en:"Partnership"},"nav-link-news":{uk:"Новини",en:"News"},"nav-link-projects":{uk:"Проєкти",en:"Projects"},"nav-link-contacts":{uk:"Контакти",en:"Contacts"},"projects-hero-title":{uk:"Проєкти",en:"Projects"}},f={"document-title":{uk:"Контакти",en:"Contacts"},"nav-link-main":{uk:"Головна",en:"Main Page"},"nav-link-team":{uk:"Команда",en:"Our Team"},"nav-link-partnership":{uk:"Партнерство",en:"Partnership"},"nav-link-news":{uk:"Новини",en:"News"},"nav-link-projects":{uk:"Проєкти",en:"Projects"},"nav-link-contacts":{uk:"Контакти",en:"Contacts"},"contacts-hero-title":{uk:"Контакти",en:"Contacts"}},k=document.querySelector("[data-html]"),P=document.querySelector("[data-language-btn]"),w=document.querySelectorAll("[data-language-img]"),l=window.location.pathname,i=T(),j=["uk","en"];let s=localStorage.getItem("user-lang")||N()||"uk",a={};document.querySelector(`[data-lang=${s}]`).classList.add("active-lang");L();m();P.addEventListener("click",y);function y(){s==="uk"?(s="en",k.setAttribute("lang","en")):(s="uk",k.setAttribute("lang","uk")),localStorage.setItem("user-lang",s),w.forEach(t=>t.classList.toggle("active-lang")),m()}function m(){for(const t in a){const r=document.querySelectorAll(`[data-lang=${t}]`);r&&r.forEach(o=>o.textContent=a[t][s])}}function L(){switch(l){case`${i}/team.html`:a=p;break;case`${i}/partnership.html`:a=d;break;case`${i}/news.html`:a=h;break;case`${i}/projects.html`:a=v;break;case`${i}/contacts.html`:a=f;break;default:a=g}}function N(){const t=navigator.language.slice(0,2).toLowerCase();return j.some(o=>o===t)?t:null}function T(){const t=l.lastIndexOf("/");return l.slice(0,t)}
//# sourceMappingURL=languages-toggle-c13e6a07.js.map