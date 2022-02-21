import Media from "./Media.js"
import ImageTemplate from "../templates/ImageCard.js"
import ImageLightBox from "../templates/ImageLightbox.js"

class Image extends Media {
    constructor(data) {
        super(data)
		// this._title = data.title
        this._src = data.image
	    }


    // get title() {
    //     return this._title
    // }

    // get name() {
    //     return this._title
    // }

    get src() {
        return this._src
    }

    render() {
        return new ImageTemplate(this);
    }

    displayLightBox() {
        return new ImageLightBox(this);
    }
}

export default Image