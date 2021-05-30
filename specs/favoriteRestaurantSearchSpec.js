import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-search-presenter';
import FavoriteRestaurantSearchView from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-search-view';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Searching restaurants', () => {

    let presenter;
    let FavoriteRestaurants;
    let view;

    const searchRestaurants = (query) => {
        const queryElement = document.getElementById('query');
        queryElement.value = query;
        queryElement.dispatchEvent(new Event('change'));
    };

    const setRestaurantSearchContainer = () => {
        view = new FavoriteRestaurantSearchView();
        document.body.innerHTML = view.getTemplate();
    };

    const constructPresenter = () => {
        FavoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
        presenter = new FavoriteRestaurantSearchPresenter({
            FavoriteRestaurants,
            view,
        });
    };
     
    beforeEach(() => {
        setRestaurantSearchContainer();
        constructPresenter();
    });


    describe('When query is not empty', () => {

        it('should be able to capture the query typed by the user', () => {
            searchRestaurants('restaurant A');
            expect(presenter.latestQuery).toEqual('restaurant A');
        });

        it('should ask the model to search for liked restaurants', () => {
            searchRestaurants('restaurant A');
            expect(FavoriteRestaurants.searchRestaurants).toHaveBeenCalledWith('restaurant A');
        });

        it('should show the found restaurants', () => {
            presenter._showFoundRestaurants([{ id: 1, name: 'Test' }]);
            expect(document.querySelectorAll('.restaurant-item').length).toEqual(1);
        
            presenter._showFoundRestaurants(
                [{ id: 1, name: 'Satu' }, { id: 2, name: 'Dua' }],
            );
            expect(document.querySelectorAll('.restaurant-item').length).toEqual(2);
        });

        it('should show the name of the found restaurants', (done) => {
            document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
                const restaurantsName = document.querySelectorAll('.restaurant_name');
                expect(restaurantsName.item(0).textContent).toEqual('Rest ABC');
                done();     
            });
            
            FavoriteRestaurants.searchRestaurants.withArgs('restaurant A').and.returnValues([
                { id: 200, name:"Rest ABC" },
            ]);
        
            searchRestaurants('restaurant A');
        });

        it('should show - when the restaurant returned does not contain a name', (done) => {
            document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
                const restaurantsName = document.querySelectorAll('.restaurant_name');
                expect(restaurantsName.item(0).textContent).toEqual('-');
                done();     
            });
            
            FavoriteRestaurants.searchRestaurants.withArgs('restaurant A').and.returnValues([
                { id: 200 },
            ]);
        
            searchRestaurants('restaurant A');
        });
    });

    describe('When query is empty', () => {

        it('should capture the query as empty', () => {
            searchRestaurants('');
            expect(presenter.latestQuery.length).toEqual(0);

            searchRestaurants(' ');
            expect(presenter.latestQuery.length).toEqual(0);

            searchRestaurants('     ');
            expect(presenter.latestQuery.length).toEqual(0);

            searchRestaurants('\t');
            expect(presenter.latestQuery.length).toEqual(0);

            searchRestaurants(' ');
            // expect(FavoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
            expect(FavoriteRestaurants.getAllRestaurants).toHaveBeenCalled();
        });
    });

    describe('When no favorite restaurants could be found', () => {

        it('should show the empty message', (done) => {
            document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
                expect(document.querySelectorAll('.restaurant_not_found').length).toEqual(1);
                done();   
            });
            
            FavoriteRestaurants.searchRestaurants.withArgs('restaurant A').and.returnValues([]);

            searchRestaurants('restaurant A');
        });

        it('should not show any restaurant', (done) => {
            document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
                expect(document.querySelectorAll('.restaurant-item').length).toEqual(0);

                done();
            });
            
            FavoriteRestaurants.searchRestaurants.withArgs('restaurant A').and.returnValues([]);

            searchRestaurants('restaurant A');
        });
    });
});
