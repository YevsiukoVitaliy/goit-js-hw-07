import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector(".gallery")
const galleryMarkup = galleryItems.map(({ preview, original, description }) =>
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join("")
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup)
const lightboxOptions = {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
}
const lightboxGallery = new SimpleLightbox(".gallery a", lightboxOptions);
