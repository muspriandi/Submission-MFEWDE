/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
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
    const restaurant = await RestaurantSource.Detail(url.id);

    const restaurantDetailContainer = document.querySelector('#restaurantDetail');

    if (!restaurant.error) {
      const rest = restaurant.restaurant;

      restaurantDetailContainer.innerHTML = createCatalogueDetail(rest);

      const favoriteButtonContainer = document.querySelector('#favoriteButtonContainer');
      LikeButtonInitiator.init({
        favoriteButtonContainer,
        restaurant: {
          id: rest.id,
          name: rest.name,
          description: rest.description,
          pictureId: rest.pictureId,
          city: rest.city,
          rating: rest.rating,
        },
      });
    }
  },
};

export default Detail;
