/* eslint-disable linebreak-style */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb.';
import { createCatalogueItem } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section class="restaurant-list">
        <h2 class="main-title">Favotite Restaurant</h2>
        <p class="main-description">Daftar Restaurant Yang Tersedia</p>
            
        <div id="restaurantList" class="list"></div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurantList');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createCatalogueItem(restaurant);
    });
  },
};

export default Favorite;
