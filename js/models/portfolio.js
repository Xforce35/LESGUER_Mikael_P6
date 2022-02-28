import BoxLikesPrice from "../templates/BoxLikesPrice.js";
import LightBox from "./lightBox.js";

class Portfolio {
    constructor (price) {
        this.medias = [];
        this.totalLikes = 0;
        this.$mediasWrapper = document.querySelector(".displayMediaSection");
        this.$boxWrapper = document.querySelector(".boxLikesPrice");
        this.price = price;
        this.currentIndex = 0;
        // console.log('a',this.price);
    }

    add(media) {
        this.medias.push(media)
        // console.log(this.medias);
    }

    display() {
        this.medias.forEach(media => {
            // media.render();
            this.$mediasWrapper.appendChild(media.render());
        })
    }

    //fonction quand quelquun va clique pour aime
    listenForLikes() {
        this.medias.forEach(media => {
            let heartDom = document.querySelector(`.displayMediaSection__mediaCard__desc__likes[data-id="${media.id}"]`)
            heartDom.addEventListener('click', () => {
                media.toggle();
                this.countTotal();
                this.updateTotal();
            })
        })
    }

    displayBox() {
        let el = new BoxLikesPrice (this.price, this.totalLikes)
        this.$boxWrapper.appendChild(el)
    }

    countTotal() {
        this.totalLikes = this.medias.reduce((total , media) => total + media.likes, 0);
    }
    //         console.log('e', this.totalLikes)

    start() {
        this.display();
        this.countTotal();
        this.displayBox();
        this.listenForLikes();
        this.listenDropdown();
        this.LightBox();
    }

    listenDropdown() {
        this.openButton = document.querySelector('.sort-btn');
        this.closeButton = document.getElementsByClassName('arrow-up-close');
        // let hiddenSort = document.getElementsByClassName('hidden-sort');

            this.openButton.addEventListener('click', (e) => {
                this.openDropdown();
                this.keyboard();
                e.stopPropagation();
                // hiddenSort[0].style.display = 'block';
            });

        if (this.closeButton) {
            document.querySelector(`body:not(.sort-btn):not(.hidden-sort)`).addEventListener('click', (e) => {
                e.stopPropagation()

                console.log('on essaye de fermer', e.target.classList)
                if(!e.target.classList.contains('style')) {
                   this.closeDropdown(); 
                } else {
                    let filter = e.target.getAttribute('data-filter')  ;
                    // console.log('on veut filtrer par', filter)
                    this.filter(filter);
                    // document.querySelector('.sort-btn').innerText = filter;
                    this.updateMedia();                    
                    this.closeDropdown();
                    this.listenForLikes();
                    this.LightBox();
                }
                
                // hiddenSort[0].style.display = "none";
            });
        }
    }

    LightBox(){
        let lightBox = new LightBox(this.medias)
        
            document.querySelectorAll(`.displayMediaSection__mediaCard__link`).forEach(item =>
                {
                    item.addEventListener("click", (e) =>
                    {
                        let mediaId = e.target.closest('article').getAttribute('data-id');
                        console.log(e.target.closest('article').getAttribute('data-id'))
                        // console.log(mediaId);
                        lightBox.start(mediaId);
                    })
                })
    }

    filter(filter) {
        switch(filter) {
            case 'popularity':
                this.filterByPopularity();
                break;
                case 'date':
                    this.filterByDate();
                    break;
                case 'title':
                    this.filterByTitle();
                    break;
        }
        console.log([filter.length])
        this.optionscontainers = filter
    }

    filterByPopularity() {
        let btnSort = document.querySelector('.sort-btn');

        btnSort.innerHTML = `Popularité <span class="fas fa-chevron-down arrow-down" role="button"></span>`;
        this.medias = this.medias.sort((a, b) => {
            return b.likes - a.likes
        })
    }

    filterByDate() {
        let btnSort = document.querySelector('.sort-btn');

        btnSort.innerHTML = `Date <span class="fas fa-chevron-down arrow-down" role="button"></span>`;
        this.medias = this.medias.sort ((a, b) => {
            return new Date(a.date).valueOf() - new Date (b.date).valueOf();
        })
    }

    filterByTitle() {  
        let btnSort = document.querySelector('.sort-btn');

        btnSort.innerHTML = `Titre <span class="fas fa-chevron-down arrow-down" role="button"></span>`;
        this.medias = this.medias.sort((a, b) => a.title.localeCompare(b.title))
    }

    closeDropdown() {
        // console.log('on veut fermer');
        let hiddenSort = document.getElementsByClassName('hidden-sort');
        hiddenSort[0].style.display = "none";
    }

    openDropdown() {
        // console.log('on veut ouvrir');
        let hiddenSort = document.getElementsByClassName('hidden-sort');
        hiddenSort[0].style.display = 'block';
    }

    keyboard() {
        document.addEventListener('keydown', (key) => {
            if (key.code == "Escape") {
                let hiddenSort = document.getElementsByClassName('hidden-sort');
                hiddenSort[0].style.display = "none";
                this.openButton.focus();
            }
            // else if (key.code == "PageDown") {

            // }
            // console.log('123');
        })
    }   

    updateTotal() {
       document.querySelector('.boxLikesPrice__likes').innerText = this.totalLikes;
    }

    updateMedia() {
        document.querySelector(".displayMediaSection").innerHTML = "";
        this.display();
    }
}

export default Portfolio