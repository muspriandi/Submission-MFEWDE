/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import DataSource from '../../data/data-source';
import { createCatalogueDetail } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/favorite-button-initiator';

const Detail = {
  async render() {
    return `
      <section class="restaurant-list">
        <h2 class="main-title">Detil Restaurant</h2>
        
        <div id="restaurantDetail"></div>
        <div class="p-relative" id="favoriteButtonContainer"></div>
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DataSource.Detail(url.id);

    const restaurantDetailContainer = document.querySelector('#restaurantDetail');
    restaurantDetailContainer.innerHTML = createCatalogueDetail(restaurant);

    const favoriteButtonContainer = document.querySelector('#favoriteButtonContainer');
    LikeButtonInitiator.init({
      favoriteButtonContainer,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
