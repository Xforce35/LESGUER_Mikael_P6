import Api from "./Api.js"

class PhotographerApi extends Api {
    constructor(url) {
       super(url)
   }
   
   async getPhotographers() {
       let data = await this.get()
       return data.photographers
       }
   
   async getPhotographer(id) {
       let data = await this.get()
   
       return data.photographers.find(photographer => photographer.id == id);
       }
   
   async getMediaFrom(id) {
       let data = await this.get()
   
       return data.media.filter(media => media.photographerId == id)
       }
   }

export default PhotographerApi