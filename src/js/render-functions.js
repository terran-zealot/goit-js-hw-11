
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';




export function createGallery(images) {
    return images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="gallery-item">
            <a href="${largeImageURL}" class="gallery-link">
                <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item"><b>Likes</b> ${likes}</p>
                <p class="info-item"><b>Views</b> ${views}</p>
                <p class="info-item"><b>Comments</b> ${comments}</p>
                <p class="info-item"><b>Downloads</b> ${downloads}</p>
            </div>
        </li>
    `).join('');
    // const galleryElement = document.querySelector('.gallery');
    // if (!galleryElement) {
    //     return;
    // }
    // galleryElement.innerHTML = galleryMarkup;
    // if (lightbox) {
    //     lightbox.refresh();
    // } else {
    //     lightbox = new SimpleLightbox('.gallery a', { captions: true, captionDelay: 250, close: true });
    // }
}


export function clearGallery() {
    const galleryElement = document.querySelector('.gallery');
    if (galleryElement) {
        galleryElement.innerHTML = "";
    }
}



export function showLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
        // console.log("loader on");
        loader.classList.add('visible');
    }
}



export function hideLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
        // console.log("loader off");
        loader.classList.remove('visible');
    }
}














    // return images.map((item) => `
    // <ul class="gallery">
    //     <li class="gallery-item">
    //         <img src="${item.webformatURL}" alt="${item.tags}" loading="lazy" />
    //         <p class="info-item">
    //             <b>Likes</b> ${item.likes}
    //         </p>
    //         <p class="info-item">
    //             <b>Views</b> ${item.views}
    //         </p>
    //         <p class="info-item">
    //             <b>Comments</b> ${item.comments}
    //         </p>
    //         <p class="info-item">
    //             <b>Downloads</b> ${item.downloads}
    //         </p>
    //             <img src="${largeImageURL}" alt="${item.tags}" class="gallery-link">
               
            
    //     </li>
    // </ul>`).join('');