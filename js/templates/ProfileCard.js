class ProfileCard {
    constructor(index) {
        this._index = index
    }

    createProfileCard() {
        const $wrapper = document.createElement('div')

        const ProfileCard= `
        <article class="photographer__profileCard">
            <div class="photographer__profileCard__infos">
                    <h1 class="photographer__profileCard__infos__name">${this._index.name}</h1>
                    <p class="photographer__profileCard__infos__location">${this._index.city}, ${this._index.country}</p>
                    <p class="photographer__profileCard__infos__description">${this._index.tagline}</p>
            </div>
            <button class="photographer__profileCard__contactButton">Contactez-moi</button>
            <img class="photographer__profileCard__picture" src="public/assets/photographers/${this._index.portrait}" alt="Mimi Keel">
        </article>
    `
    
    $wrapper.innerHTML = ProfileCard
    return $wrapper
    }
}

export default ProfileCard;