export default class ImageLightBox {
    constructor({title, src}) {
        const content = `
            <img class="works-lightbox-media"src="public/assets/media/${src}" alt="${title}"></img>
            <div class="works-lightbox-name">${title}</div>
        `
        return document.createRange().createContextualFragment(content);
    }
}