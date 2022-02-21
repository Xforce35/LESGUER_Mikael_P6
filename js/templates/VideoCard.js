export default class VideoTemplate {
    constructor({ id, title, src, likes, date }) {
        const content = `
        <article data-date=${date} class="displayMediaSection__mediaCard" data-id="${id}">
            <a href="#" class="displayMediaSection__mediaCard__link" aria-label="${title}, closeup view">
                <video class="displayMediaSection__mediaCard__picture" title=${title}>
                    <source src="public/assets/media/${src}" type="video/mp4">
                </video>
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


// export default VideoTemplate