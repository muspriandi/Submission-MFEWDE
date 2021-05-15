/* eslint-disable linebreak-style */
import Data from '../../DATA.json';

class DataSoruce {
  static async Catalogue() {
    return Data.restaurants;
  }
}

export default DataSoruce;
