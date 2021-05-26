import * as TestFactories from './helpers/testFactories';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb.';

describe('Liking A Restaurant', () => {

    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
    };
    
    beforeEach(() => {
        addLikeButtonContainer();
    });

    it('should show the like button when the restaurant has not been liked before', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="Click to Like"]')).toBeTruthy();
    });
    
    it('should not show the dislike button when the restaurant has not been liked before', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
        
        expect(document.querySelector('[aria-label="Click to Dislike"]')).toBeFalsy();
    });


    it('should be able to like the restaurant', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
 
        expect(restaurant).toEqual({ id: 1 });

        FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    it('should not add a restaurant again when its already liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
        
        FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    // xit('should not add a restaurant when it has no id', async () => {
    it('should not add a restaurant when it has no id', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({});
       
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
       
        expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    });
});