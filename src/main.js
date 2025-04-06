// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";
import getImagesByQuery from "./js/pixabay-api.js";

const form = document.querySelector(".form");
const userInput = document.querySelector("input[name='search-text']");
const gallery = document.querySelector(".gallery");
document.querySelector('.loader').style.display = 'none';
form.addEventListener("submit", handleSubmit);



let lightbox = null;
function handleSubmit(event) {
    event.preventDefault();
    const query = userInput.value.trim();
    if (!query) return;

    clearGallery();
    showLoader();

    getImagesByQuery(query)
        .then(response => {
            hideLoader();

            // console.log(response.data.hits);
            if (!response.data.hits || response.data.hits.length === 0) {
                iziToast.warning({
                    title: "No Results",
                    message: "No images found for your query. Try something else!",
                    position: "topRight"
                });
                return;
            }

            gallery.innerHTML = createGallery(response.data.hits);

            if (lightbox) {
                 lightbox.refresh();
            } else {
                 lightbox = new SimpleLightbox('.gallery a', { captions: true, captionDelay: 250, close: true });
            }
        })
        .catch(error => {
            hideLoader();
            console.error(error);
            iziToast.error({
                title: "Error",
                message: "Sorry, something went wrong. Please try again!",
                position: "topRight"
            });
        });
}

