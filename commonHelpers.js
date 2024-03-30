import{a as u,i as c,S as m}from"./assets/vendor-b2578120.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();async function f(s){const r="https://pixabay.com/api/",t=new URLSearchParams({key:"43034090-772f27db84397385e52753f5e",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${r}?${t}`;try{return(await u.get(n)).data}catch(e){throw new Error(e.response.status)}}const l=document.querySelector(".gallery");function i(){p.classList.add("is-hidden")}function h(s){if(s.length===0)c.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"}),i();else{const r=s.map(t=>`<li class="item-image"><a class="photos-list-link" href="${t.largeImageURL}">
  <img class="photo" src="${t.webformatURL}" alt="${t.tags}"/>
  </a>
  <ul class="photo-information-container">
  <li class="item-photo-information-container"><p><span class="accent">Likes</span>${t.likes}</p></li>
  <li class="item-photo-information-container"><p><span class="accent">Views</span>${t.views}</p></li>
  <li class="item-photo-information-container"><p><span class="accent">Comments</span>${t.comments}</p></li>
  <li class="item-photo-information-container"><p><span class="accent">Downloads</span>${t.downloads}</p></li>
  </ul>
  </li>`).join("");l.insertAdjacentHTML("beforeend",r),y.refresh()}i()}const y=new m(".gallery a",{captionsData:"alt",captionDelay:250}),p=document.querySelector(".loader"),d=document.querySelector(".search-form");function g(){p.classList.remove("is-hidden")}d.addEventListener("submit",L);async function L(s){s.preventDefault(),g(),l.innerHTML="";const r=s.target.elements.search.value.trim();try{if(r!==""){const t=await f(r);h(t.hits),d.reset()}else throw new Error("Please complete the field!")}catch(t){console.log(t),c.error({message:"Sorry, an error occurred while loading. Please try again!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"})}finally{i()}}
//# sourceMappingURL=commonHelpers.js.map
