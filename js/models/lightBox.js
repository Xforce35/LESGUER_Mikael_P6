class LightBox {
    constructor(medias) {
        this.currentIndex = 0;
        this.medias = medias
        // console.log(this.medias)
    }

    // initialize the lightbox when clicking on a media, call the functions allowing to navigate in the lightbox
    start(mediaId) {
        let lightBox = document.querySelector('.works-lightbox');
        lightBox.style.display = 'block';
        this.currentIndex = this.medias.findIndex(media => media.id == mediaId);
        // console.log('on lance la lightbox')
        this.show();
        this.listen();
        this.close();
        this.keyboard()
    }

    show() {
        let media = this.medias[this.currentIndex];
        
        document.querySelector('.works-lightbox-contain').innerHTML = "";
        document.querySelector('.works-lightbox-contain').appendChild(media.displayLightBox());
    }


    listen() {
        document.querySelector('.right-arrow-lightbox').addEventListener('click', () => {
            this.next()
        });
        document.querySelector('.left-arrow-lightbox').addEventListener('click', () => {
            this.previous()
        });
    }
    next() {
            // console.log('on avance')
            this.currentIndex++;
                if (this.currentIndex > this.medias.length) {
                    this.currentIndex = 0;
                } 
            this.show()
        }

    previous() {
        // console.log('on recule')
        this.currentIndex--; 
        if (this.currentIndex < 0) {
            this.currentIndex = this.medias.length - 1;
        } 
        this.show()
    }

    close() {
        document.querySelector('.close-lightbox-icon').addEventListener('click', () => {
            let lightBox = document.querySelector('.works-lightbox');
            lightBox.style.display = 'none';
        })
    }

    keyboard() {
        document.addEventListener('keydown', (key) => {
            if (key.code == "Escape") {
                let lightBox = document.querySelector('.works-lightbox');
                lightBox.style.display = 'none';
            }
            else if (key.code == "ArrowRight") {
                this.next()
                // console.log('on avance')
            }
            else if (key.code == "ArrowLeft") {
                this.previous()
                // console.log('on recule')
            }
            // console.log('123');
        })
    }   
}

export default LightBox