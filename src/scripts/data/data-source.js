/* eslint-disable linebreak-style */
import Data from '../../DATA.json';

class DataSoruce {
  static async Catalogue() {
    return Data.restaurants;
  }

  static async Detail(id) {
    let rest = null;
    Data.restaurants.forEach((restaurant) => {
      if (restaurant.id === id) {
        rest = restaurant;
      }
    });

    return rest;
  }
}

export default DataSoruce;
