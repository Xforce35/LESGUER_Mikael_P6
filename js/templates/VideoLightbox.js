export default class VideoLightBox {
    constructor({title, src}) {
        const content = `            
            <video controls class="works-lightbox-media-video" src="public/assets/media/${src}" alt="${title}" type="video/mp4"></video>
            <div class="works-lightbox-name">${title}</div>
        `

        return document.createRange().createContextualFragment(content);
    }
}