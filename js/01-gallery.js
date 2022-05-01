import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector(".gallery")
let modalImage
const galleryMarkup = galleryItems.map(({preview,original,description})=>`<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`).join("")
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup)

const onGalleryClick = event => {
    event.preventDefault()
    if (event.target.nodeName !== "IMG") return
    onOpenModal(event.target.dataset.source)
}

galleryEl.addEventListener("click", onGalleryClick)

const onCreateModal = img => basicLightbox.create(`<img src="${img}"
width="1280" alt="${img}">`)
const onOpenModal = img => {
    modalImage = onCreateModal(img)
    modalImage.show()
    document.addEventListener("keyup", onKeyPress)
}
const onKeyPress = event => {
    if (event.code === "Escape") {
        modalImage.close()
    }
    document.removeEventListener("keyup", onKeyPress)
}