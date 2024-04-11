import{r as m,S as g}from"./vendor-c0aca9b6.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();m();new g(".swiper",{speed:1500,loop:!0,autoplay:{delay:5e3},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const h={"document-title":{uk:"Команда",en:"Home"},"join-button":{uk:"Долучитися",en:"Join us"},"nav-link-main":{uk:"Головна",en:"Main Page"},"nav-link-team":{uk:"Команда",en:"Our Team"},"nav-link-partnership":{uk:"Партнерство",en:"Partnership"},"nav-link-news":{uk:"Новини",en:"News"},"nav-link-projects":{uk:"Проєкти",en:"Projects"},"nav-link-contacts":{uk:"Контакти",en:"Contacts"},"about-title":{uk:"Про нас",en:"About us"},"about-text-1":{uk:"Київська громадська організація «PSYCHABILITI» об’єднує осіб з психічними порушеннями, їх родичів та фахівців з психічного здоров’я.",en:'Kyiv public organization "PSYCHABILITI" unites people with mental disorders, their relatives and mental health specialists.'},"about-text-2":{uk:"Організація  має 20-річний досвід з реабілітації таких людей, підтримки членів їх родин та захисту прав.",en:"The organization has 20 years of experience in rehabilitating such people, supporting their family members and protecting their rights."},"about-text-3":{uk:"Діяльність огранізації допомагає цим людям зберігати активне соціальне життя та покращує його якість.",en:"Organizational activities help these people maintain an active social life and improve its quality."},"about-text-4":{uk:"Унікальність Організації  полягає в практичному досвіду реабілітації  людей з тяжкими психічними порушеннями, зокрема шизофренії",en:"The uniqueness of the Organization lies in the practical experience of rehabilitation of people with severe mental disorders, in particular schizophrenia"},"footer-contacts-title":{uk:"Контакти",en:"Contacts"}},d={"document-title":{uk:"Команда",en:"Team"},"join-button":{uk:"Долучитися",en:"Join us"},"nav-link-main":{uk:"Головна",en:"Main Page"},"nav-link-team":{uk:"Команда",en:"Our Team"},"nav-link-partnership":{uk:"Партнерство",en:"Partnership"},"nav-link-news":{uk:"Новини",en:"News"},"nav-link-projects":{uk:"Проєкти",en:"Projects"},"nav-link-contacts":{uk:"Контакти",en:"Contacts"},"team-hero-title":{uk:"Команда",en:"Our Team"},"footer-contacts-title":{uk:"Контакти",en:"Contacts"}},v={"document-title":{uk:"Партнерство",en:"Partnership"},"join-button":{uk:"Долучитися",en:"Join us"},"nav-link-main":{uk:"Головна",en:"Main Page"},"nav-link-team":{uk:"Команда",en:"Our Team"},"nav-link-partnership":{uk:"Партнерство",en:"Partnership"},"nav-link-news":{uk:"Новини",en:"News"},"nav-link-projects":{uk:"Проєкти",en:"Projects"},"nav-link-contacts":{uk:"Контакти",en:"Contacts"},"partnership-hero-title":{uk:"Партнерство",en:"Partnership"},"footer-contacts-title":{uk:"Контакти",en:"Contacts"}},f={"document-title":{uk:"Новини",en:"News"},"join-button":{uk:"Долучитися",en:"Join us"},"nav-link-main":{uk:"Головна",en:"Main Page"},"nav-link-team":{uk:"Команда",en:"Our Team"},"nav-link-partnership":{uk:"Партнерство",en:"Partnership"},"nav-link-news":{uk:"Новини",en:"News"},"nav-link-projects":{uk:"Проєкти",en:"Projects"},"nav-link-contacts":{uk:"Контакти",en:"Contacts"},"news-hero-title":{uk:"Новини",en:"News"},"footer-contacts-title":{uk:"Контакти",en:"Contacts"}},P={"document-title":{uk:"Проєкти",en:"Projects"},"join-button":{uk:"Долучитися",en:"Join us"},"nav-link-main":{uk:"Головна",en:"Main Page"},"nav-link-team":{uk:"Команда",en:"Our Team"},"nav-link-partnership":{uk:"Партнерство",en:"Partnership"},"nav-link-news":{uk:"Новини",en:"News"},"nav-link-projects":{uk:"Проєкти",en:"Projects"},"nav-link-contacts":{uk:"Контакти",en:"Contacts"},"projects-hero-title":{uk:"Проєкти",en:"Projects"},"footer-contacts-title":{uk:"Контакти",en:"Contacts"}},b={"document-title":{uk:"Контакти",en:"Contacts"},"join-button":{uk:"Долучитися",en:"Join us"},"nav-link-main":{uk:"Головна",en:"Main Page"},"nav-link-team":{uk:"Команда",en:"Our Team"},"nav-link-partnership":{uk:"Партнерство",en:"Partnership"},"nav-link-news":{uk:"Новини",en:"News"},"nav-link-projects":{uk:"Проєкти",en:"Projects"},"nav-link-contacts":{uk:"Контакти",en:"Contacts"},"contacts-hero-title":{uk:"Контакти",en:"Contacts"},"footer-contacts-title":{uk:"Контакти",en:"Contacts"}},k=document.querySelector("[data-html]"),w=document.querySelector("[data-language-btn]"),j=document.querySelectorAll("[data-language-img]"),l=window.location.pathname,r=L(),y=["uk","en"];let i=localStorage.getItem("user-lang")||C()||"uk",a={};document.querySelector(`[data-lang=${i}]`).classList.add("active-lang");x();p();w.addEventListener("click",T);function T(){i==="uk"?(i="en",k.setAttribute("lang","en")):(i="uk",k.setAttribute("lang","uk")),localStorage.setItem("user-lang",i),j.forEach(t=>t.classList.toggle("active-lang")),p()}function p(){for(const t in a){const o=document.querySelectorAll(`[data-lang=${t}]`);o&&o.forEach(s=>s.textContent=a[t][i])}}function x(){switch(l){case`${r}/team.html`:a=d;break;case`${r}/partnership.html`:a=v;break;case`${r}/news.html`:a=f;break;case`${r}/projects.html`:a=P;break;case`${r}/contacts.html`:a=b;break;default:a=h}}function C(){const t=navigator.language.slice(0,2).toLowerCase();return y.some(s=>s===t)?t:null}function L(){const t=l.lastIndexOf("/");return l.slice(0,t)}
//# sourceMappingURL=languages-toggle-f7a6e971.js.map
