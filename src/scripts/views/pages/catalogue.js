/* eslint-disable linebreak-style */
import DataSource from '../../data/data-source';
import { createCatalogueItem } from '../templates/template-creator';

const Catalogue = {
  async render() {
    return `
        <section class="restaurant-list">
            <h2 class="main-title">Catalogue Restaurant</h2>
            <p class="main-description">Daftar Restaurant Yang Tersedia</p>
            
            <div id="restaurantList" class="list"></div>
        </section>
    `;
  },

  async afterRender() {
    const restaurants = await DataSource.Catalogue();
    const restaurantContainer = document.querySelector('#restaurantList');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createCatalogueItem(restaurant);
    });
  },
};

export default Catalogue;
