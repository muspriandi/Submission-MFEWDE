import FavoriteRestaurantShowPresenter from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchView from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-search-view';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';


describe('Showing all favorite restaurants', () => {
    let view;

    const renderTemplate = () => {
        view = new FavoriteRestaurantSearchView();
        document.body.innerHTML = view.getTemplate();
    };

    beforeEach(() => {
        renderTemplate();
    });

    describe('When no restaurants have been liked', () => {
        it('should ask for the favorite restaurant', () => {
            const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);

            new FavoriteRestaurantShowPresenter({
                view,
                favoriteRestaurants,
            });

            expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
        });

        it('should show the information that no restaurants have been liked', (done) => {
            document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
                expect(document.querySelectorAll('.restaurant_not_found').length).toEqual(1);

                done();
            });

            const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
            favoriteRestaurants.getAllRestaurants.and.returnValues([]);

            new FavoriteRestaurantShowPresenter({
                view,
                favoriteRestaurants,
            });
        });
    });

    describe('When favorite restaurants exist', () => {
        it('should show the restaurants', (done) => {
            document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
                expect(document.querySelectorAll('.list-item').length).toEqual(2);
                
                done();
            });

            const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
            favoriteRestaurants.getAllRestaurants.and.returnValues([
                {
                    id : 1,
                    name : "Restaurant A",
                    description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                    city : "Jakarta",
                    address : "Jln. K. H Wahid Hasyim No. 1",
                    pictureId : "no-image.png",
                    categories : [
                        { name : "Indonesia" },
                        { name : "Modern" }
                    ],
                    menus : {
                        foods : [
                            {name : "Paket Hemat"},
                            {name : "Paket Mantap"}
                        ],
                        drinks : [
                            {name : "Es krim"},
                            {name : "Air Mineral"}
                        ]
                    },
                    rating : 4.6,
                    customerReviews : [
                        {name : "Ahmad", review : "Rekomendasi untuk pelajar!", date : "13 November 2019"},
                        {name : "Aji", review : "Mantap!" ,date : "29 Mei 2021"}
                    ]
                },
                {
                    id : 2,
                    name : "Restaurant B",
                    description : "Aenean commodo ligula eget dolor. Aenean massa. ",
                    city : "Jakarta",
                    address : "Jln. K. H Wahid Hasyim No. 2",
                    pictureId : "no-image.png",
                    categories : [
                        { name : "Indonesia" },
                        { name : "Classic" }
                    ],
                    menus : {
                        foods : [
                            {name : "Paket Djawa"},
                            {name : "Paket Djiwa"}
                        ],
                        drinks : [
                            {name : "Es Cendol"},
                            {name : "Dawet"}
                        ]
                    },
                    rating : 4.6,
                    customerReviews : [
                        {name : "Bayu", review : "Tema restoranya unik!", date : "15 November 2019"},
                        {name : "Bima", review : "Desain dinding restorannya mantap!" ,date : "29 Juni 2021"}
                    ]
                },
            ]);

            new FavoriteRestaurantShowPresenter({
                view,
                favoriteRestaurants,
            });
        });
    });
});
