import Media from "./Media.js"
import VideoTemplate from "../templates/VideoCard.js"
import VideoLightBox from "../templates/VideoLightbox.js"

class Video extends Media {
    constructor(data) {
        super (data)
		// this._title = data.title
        this._src = data.video
        // console.log(this.title);
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
            return new VideoTemplate(this);
        }

        displayLightBox() {
            return new VideoLightBox(this);
        }
}

export default Video