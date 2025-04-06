/* empty css                      */import{a as f,i as a,S as d}from"./assets/vendor-BH9GyP-n.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function m(t){return t.map(({webformatURL:i,largeImageURL:o,tags:s,likes:e,views:r,comments:n,downloads:u})=>`
        <li class="gallery-item">
            <a href="${o}" class="gallery-link">
                <img src="${i}" alt="${s}" loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item"><b>Likes</b> ${e}</p>
                <p class="info-item"><b>Views</b> ${r}</p>
                <p class="info-item"><b>Comments</b> ${n}</p>
                <p class="info-item"><b>Downloads</b> ${u}</p>
            </div>
        </li>
    `).join("")}function p(){const t=document.querySelector(".gallery");t&&(t.innerHTML="")}function y(){const t=document.querySelector(".loader");t&&t.classList.add("visible")}function c(){const t=document.querySelector(".loader");t&&t.classList.remove("visible")}const g="49643182-9754596b7a63617f9fa0f6656";function h(t){return f.get("https://pixabay.com/api/",{params:{key:g,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const b=document.querySelector(".form"),L=document.querySelector("input[name='search-text']"),S=document.querySelector(".gallery");document.querySelector(".loader").style.display="none";b.addEventListener("submit",q);let l=null;function q(t){t.preventDefault();const i=L.value.trim();i&&(p(),y(),h(i).then(o=>{if(c(),!o.data.hits||o.data.hits.length===0){a.warning({title:"No Results",message:"No images found for your query. Try something else!",position:"topRight"});return}S.innerHTML=m(o.data.hits),l?l.refresh():l=new d(".gallery a",{captions:!0,captionDelay:250,close:!0})}).catch(o=>{c(),console.error(o),a.error({title:"Error",message:"Sorry, something went wrong. Please try again!",position:"topRight"})}))}
//# sourceMappingURL=index.js.map
