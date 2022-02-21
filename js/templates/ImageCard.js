export default class ImageTemplate {
    constructor({ id, title, src, likes, date}) {
        const content = `
        <article data-date=${date} class="displayMediaSection__mediaCard" data-id="${id}">
            <a href="#" class="displayMediaSection__mediaCard__link" aria-label="${title}, closeup view">
                <img src="public/assets/media/${src}" class="displayMediaSection__mediaCard__picture" alt="${title}"></img>
            </a>
            <div class="displayMediaSection__mediaCard__desc">
                <p class="displayMediaSection__mediaCard__desc__title">${title}</p>
                <p class="displayMediaSection__mediaCard__desc__likes" aria-label="likes" data-id=${id}>${likes}</p>
            </div>
        </article>
        `;

        return document.createRange().createContextualFragment(content);
    }
}


// export default ImageTemplate