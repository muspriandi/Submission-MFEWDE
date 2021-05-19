/* eslint-disable linebreak-style */
import RestaurantSource from '../../data/restaurant-source';
import { createCatalogueItem } from '../templates/template-creator';

const Catalogue = {
  async render() {
    return `
      <section class="restaurant-list">
        <h2 class="main-title">Catalogue Restaurant</h2>
        <p class="main-description">Daftar <span id="restaurantCount"></span> Restoran Yang Tersedia</p>
            
        <div id="restaurantList" class="list"></div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.Catalogue();
    const restaurantContainer = document.querySelector('#restaurantList');
    const restaurantCount = document.querySelector('#restaurantCount');

    restaurantCount.innerHTML += restaurants.count;

    if (!restaurants.error) {
      restaurants.restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createCatalogueItem(restaurant);
      });
    }
  },
};

export default Catalogue;
