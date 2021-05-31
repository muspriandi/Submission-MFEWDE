Feature('Liking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

// Scenario('showing empty liked restaurant', ({ I }) => {
//     I.seeElement('#query');
//     I.see('Restoran tidak ditemukan!', '.restaurant_not_found');
// });

Scenario('liking one restaurant', ({ I }) => {
    I.amOnPage('/');
    I.seeElement('.read-more-button');
    I.click(locate('.read-more-button').first());
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.list-item');
});
