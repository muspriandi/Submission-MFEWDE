/* eslint-disable linebreak-style */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView from './liked-restaurant/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './liked-restaurant/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './liked-restaurant/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
  },
};

export default Favorite;
/* eslint-disable linebreak-style */
// import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
// import { createCatalogueItem } from '../templates/template-creator';

// const Favorite = {
//   async render() {
//     return `
//       <section class="container">
//         <h2 class="main-title">Favorite Restaurant</h2>
//         <p class="main-description color-grey-darken-1">Daftar Restoran Yang Disukai</p>
            
//         <div id="restaurantList" class="list"></div>
//       </section>
//     `;
//   },

//   async afterRender() {
//     const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
//     const restaurantContainer = document.querySelector('#restaurantList');

//     restaurants.forEach((restaurant) => {
//       restaurantContainer.innerHTML += createCatalogueItem(restaurant);
//     });
//   },
// };

// export default Favorite;
