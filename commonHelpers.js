import{a as h,S as b,i as L}from"./assets/vendor-b2578120.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const w=h.create({baseURL:"https://pixabay.com/api/"});async function f(){const s={key:"43034090-772f27db84397385e52753f5e",q:c,per_page:p,page:n,image_type:"photo",orientation:"horizontal",safesearch:"true"};return q(),(await w.get("",{params:s})).data}function m(s){if(s.hits.length===0)d("Sorry, there are no images matching your search query. Please try again!");else{const l=s.hits.map(r=>`<li class="gallery-item">
                <a class="gallery-link" href="${r.largeImageURL}">
                <img loading="lazy" class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" />
                </a>
                <div class="stats">
                    <p class="text">Likes<br/>${r.likes}</p>
                    <p class="text">Views<br/>${r.views}</p>
                    <p class="text">Comments<br/>${r.comments}</p>
                    <p class="text">Downloads<br/>${r.downloads}</p>
                </div>
            </li>`).join("");a.gallery.insertAdjacentHTML("beforeend",l),x.refresh()}}const x=new b(".gallery-link",{captionsData:"alt",captionDelay:250}),a={form:document.querySelector(".form"),searchInput:document.getElementById("searchInput"),searchBtn:document.querySelector("button"),loadBtn:document.querySelector(".load-more-button"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery")};let c="",n=1,p=15;y();i();a.form.addEventListener("submit",async s=>{if(s.preventDefault(),n=1,a.gallery.innerHTML="",c=a.searchInput.value.trim(),c!=="")try{const t=await f(c,n),l=Math.ceil(t.totalHits/p);m(t),y(),n>=l?i():g()}catch(t){console.log(t),d("An error occurred while fetching data."),i()}else d("Empty field!"),i();a.form.reset()});a.loadBtn.addEventListener("click",async s=>{n+=1;try{const t=await f(c,n);y(),m(t),g();const r=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"});const e=Math.ceil(t.totalHits/p);n>=e&&i()}catch(t){console.log(t),d("An error occurred while fetching data."),i()}});function d(s){L.error({title:"Error",message:s,position:"topRight",backgroundColor:"red"})}function y(){a.loader.style.display="none"}function q(){a.loader.style.display="block"}function i(){a.loadBtn.style.display="none"}function g(){a.loadBtn.style.display="block"}
//# sourceMappingURL=commonHelpers.js.map
