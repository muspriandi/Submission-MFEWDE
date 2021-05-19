/* eslint-disable linebreak-style */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSoruce {
  static async Catalogue() {
    const response = await fetch(API_ENDPOINT.CATALOGUE);
    const responseJson = await response.json();
    return responseJson;
  }

  static async Detail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantSoruce;
