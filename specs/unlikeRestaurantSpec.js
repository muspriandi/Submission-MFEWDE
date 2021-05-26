import * as TestFactories from './helpers/testFactories';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb.';

describe('Unliking A Restaurant', () => {

    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
    };

    beforeEach(async () => {
        addLikeButtonContainer();
        await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    });

    afterEach(async () => {
        await FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    it('should display unlike widget when the restaurant has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
        
        expect(document.querySelector('[aria-label="Click to Dislike"]')).toBeTruthy();
    });

    it('should not display like widget when the restaurant has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    
      expect(document.querySelector('[aria-label="Click to Like"]')).toBeFalsy();
    });

    it('should be able to remove liked restaurant from the list', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    
        expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    });

    it('should not throw error if the unliked restaurant is not in the list', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    
        await FavoriteRestaurantIdb.deleteRestaurant(1);
    
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    
        expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    });
});