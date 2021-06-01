const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
    I.seeElement('#query');
    I.see('Restoran tidak ditemukan!', '.restaurant_not_found');
});

Scenario('liking one restaurant', ({ I }) => {
    I.see('Restoran tidak ditemukan!', '.restaurant_not_found');

    I.amOnPage('/');

    I.seeElement('.read-more-button');
    I.click(locate('.read-more-button').first());

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.list-item');
});

Scenario('liking one restaurant and check the name', async ({ I }) => {
    I.see('Restoran tidak ditemukan!', '.restaurant_not_found');

    I.amOnPage('/');

    I.seeElement('.list-title');
    const firstRestaurant = locate('.list-title').first();
    const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.list-item');
    const likedRestaurantName = await I.grabTextFrom('.list-title');

    assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('searching restaurants', async ({ I }) => {
    I.see('Restoran tidak ditemukan!', '.restaurant_not_found');

    const restaurantNames = [];

    for (let i = 1; i <= 3; i++) {
        I.amOnPage('/');
        I.seeElement('.list-title');

        I.click(locate('.list-title').at(i));
        restaurantNames.push(await I.grabTextFrom('.card-title'));
        
        I.seeElement('#likeButton');
        I.click('#likeButton');
    }

    I.amOnPage('/#/favorite');
    I.seeElement('#query');
    I.seeElement('.list-item');

    const searchQuery = restaurantNames[1].substring(1, 3);
    const matchingRestaurants = restaurantNames.filter((name) => name.indexOf(searchQuery) !== -1);

    I.fillField('#query', searchQuery);
    I.pressKey('Enter');
    
    const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.list-item');
    assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);
  
    matchingRestaurants.forEach(async (name, index) => {
        const visibleRestaurantName = await I.grabTextFrom(locate('.list-title').at(index + 1));
        assert.strictEqual(name, visibleRestaurantName);
    });
});
