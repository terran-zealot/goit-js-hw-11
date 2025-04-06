import{a as f,i as a,S as d}from"./assets/vendor-BH9GyP-n.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function m(t){return t.map(({webformatURL:i,largeImageURL:r,tags:s,likes:e,views:o,comments:n,downloads:u})=>`
        <li class="gallery-item">
            <a href="${r}" class="gallery-link">
                <img src="${i}" alt="${s}" loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item"><b>Likes</b> ${e}</p>
                <p class="info-item"><b>Views</b> ${o}</p>
                <p class="info-item"><b>Comments</b> ${n}</p>
                <p class="info-item"><b>Downloads</b> ${u}</p>
            </div>
        </li>
    `).join("")}function y(){const t=document.querySelector(".gallery");t&&(t.innerHTML="")}function p(){const t=document.querySelector(".loader");t&&(console.log("loader on"),t.classList.add("visible"))}function c(){const t=document.querySelector(".loader");t&&(console.log("loader off"),t.classList.remove("visible"))}const g="49643182-9754596b7a63617f9fa0f6656";function h(t){return f.get("https://pixabay.com/api/",{params:{key:g,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const b=document.querySelector(".form"),L=document.querySelector("input[name='search-text']"),S=document.querySelector(".gallery");document.querySelector(".loader").style.display="none";b.addEventListener("submit",q);let l=null;function q(t){t.preventDefault();const i=L.value.trim();i&&(y(),p(),h(i).then(r=>{if(c(),!r.data.hits||r.data.hits.length===0){a.warning({title:"No Results",message:"No images found for your query. Try something else!",position:"topRight"});return}S.innerHTML=m(r.data.hits),l?l.refresh():l=new d(".gallery a",{captions:!0,captionDelay:250,close:!0})}).catch(r=>{c(),console.error(r),a.error({title:"Error",message:"Sorry, something went wrong. Please try again!",position:"topRight"})}))}
//# sourceMappingURL=index.js.map
