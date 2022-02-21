import PhotographerApi from './api/PhotographerApi.js';
import Photographer from './models/Photographer.js';
import PhotographerCard from './templates/PhotographerCard.js';

class App {
  constructor() {
    this.$photographersWrapper = document.querySelector(".photographer_section");
    this.photographersApi = new PhotographerApi("/data/photographers.json");
  }

  async main() {
    console.log(PhotographerApi);
    const photographersData = await this.photographersApi.getPhotographers();
    console.log(photographersData);

    photographersData

      .map((photographer) => new Photographer(photographer))
      .forEach((photographer) => {
        // console.log(photographer);
        const Template = new PhotographerCard(photographer);
        this.$photographersWrapper.appendChild(
          Template.createPhotographerCard()
        );
      });
  }
}
const app = new App();
app.main();
