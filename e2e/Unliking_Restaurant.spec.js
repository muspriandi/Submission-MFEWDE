const assert = require('assert');

Feature('Unliking Restaurant');

Before(({ I }) => {
    I.amOnPage('/');
});

Scenario('unliking one restaurant', ({ I }) => {

    I.seeElement('.read-more-button');
    I.click(locate('.read-more-button').first());

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.list-item');

    I.seeElement('.read-more-button');
    I.click(locate('.read-more-button').first());

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.see('Restoran tidak ditemukan!', '.restaurant_not_found');
});

Scenario('unliking restaurants', async ({ I }) => {

    let restaurantNames = [];

    for (let i = 1; i <= 3; i++) {
        I.amOnPage('/');
        I.seeElement('.list-title');

        I.click(locate('.list-title').at(i));
        restaurantNames.push(await I.grabTextFrom('.card-title'));
        
        I.seeElement('#likeButton');
        I.click('#likeButton');
    }

    I.amOnPage('/#/favorite');
    I.seeElement('.list-item');

    let index = -1;
  
    for (let i = 1; i <= 3; i++) {
        I.amOnPage('/#/favorite');
        I.seeElement('.list-title');

        I.click(locate('.list-title').at(1));
        index = restaurantNames.indexOf(await I.grabTextFrom('.card-title'));
        if (index > -1) {
            restaurantNames.splice(index, 1);
        }          
        
        I.seeElement('#likeButton');
        I.click('#likeButton');
    }

    I.amOnPage('/#/favorite');
    I.see('Restoran tidak ditemukan!', '.restaurant_not_found');
    assert.strictEqual(0, restaurantNames.length);
});
