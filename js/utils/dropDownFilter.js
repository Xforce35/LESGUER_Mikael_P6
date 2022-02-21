 class dropDownFilter {
    dropDown(data) {
        console.log('123');
        let arrowOpen = document.getElementsByClassName('sort-btn');
        let arrowClose = document.getElementsByClassName('arrow-up-close');
        let hiddenSort = document.getElementsByClassName('hidden-sort');

        if (arrowOpen) {
            arrowOpen[0].addEventListener('click', () => {
                hiddenSort[0].style.display = 'block';
            });
            this.sortMedias(data);
        }
        if (arrowClose) {
            arrowClose[0].addEventListener('click', () => {
                hiddenSort[0].style.display = "none";
            });
        }
    }
    sortMedias(data) {
        let mediaArraySort = [];
        let media = data.media;
        let btnSort = document.querySelector('.sort-btn');
        let hiddenSort = document.getElementsByClassName('hidden-sort');
        let sortBtn = Array.from(document.getElementsByClassName('sort'));
        
        sortBtn.forEach((btn, index) => btn.addEventListener('click', () => {
            hiddenSort[0].style.display ="none";
            if (index == 0) {
                btnSort.innerHTML = `Popularité`;

                mediaArraySort = media.sort((a, b) => {
                    return b.likes - a.likes
                })

            } else if (index == 1) {
                btn.innerHTML = 'Date';

                mediaArraySort = media.sort ((a, b) => {
                    return new Date(a.date).valueOf() - new Date (b.date).valueOf();
                })

            } else if (index == 3) {
                btn.innerHTML = 'Titre';

                mediaArraySort = media.sort ((a, b) => {
                    if (a.photoName.toLowercase() < b.photoName.toLowercase()) {
                        return -1;
                    } else if (a.photoName.toLowerCase() > b.photoName.toLowerCase()) {
                        return 1;
                    }
                })
            }
        }));
    }
}

export default dropDownFilter