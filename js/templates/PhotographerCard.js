class PhotographerCard {
    constructor(index) {
        this._index = index
    }

    createPhotographerCard() {
        const $wrapper = document.createElement('article')

        const photographerCard = `
        <article class="photographer_section_profile">
            <a class="photographer_section_profile_link" href="photographer.html?id=${this._index.id}">
                <img src="${this._index.picture}" class="photographer_section_profile_link_picture" alt=" "></img>
                <h2 class="photographer_section_profile_link_name">${this._index.name}</h2>
            </a>
            <p class="photographer_section_profile_location">${this._index.city}, ${this._index.country}</p>
            <p class="photographer_section_profile_description">${this._index.tagline}</p>
            <p class="photographer_section_profile_price">${this._index.price}€/jour</p>
        </article>
        `

        $wrapper.innerHTML = photographerCard
        return $wrapper
    }
}

export default PhotographerCard;