import LikeButtonInitiator from '../../src/scripts/utils/favorite-button-initiator';
 
const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
    await LikeButtonInitiator.init({
        favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
        restaurant,
    });
};
 
export { createLikeButtonPresenterWithRestaurant };