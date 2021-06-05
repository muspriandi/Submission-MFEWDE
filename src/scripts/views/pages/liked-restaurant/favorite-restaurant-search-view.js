import { createCatalogueItem } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
    getTemplate() {
        return `
            <section class="container">
                <h2 class="main-title">Favorite Restaurant</h2>
                <p class="main-description color-grey-darken-1">Daftar Restoran Yang Disukai</p>
                <input id="query" type="text" placeholder="Cari di sini!">
                
                <div id="restaurants" class="restaurants list"></div>
            </section>
            `;
    }

    runWhenUserIsSearching(callback) {
        document.getElementById('query').addEventListener('change', (event) => {
            callback(event.target.value);
        });
    }

    showRestaurants(restaurants) {
        this.showFavoriteRestaurants(restaurants);
    }

    showFavoriteRestaurants(restaurants = []) {
        let html;
        
        if (restaurants.length > 0) {
            html = restaurants.reduce(
                (carry, restaurant) => carry.concat(createCatalogueItem(restaurant)), ''
            );
        } else {
            html = this._getEmptyMovieTemplate();
        }

        document.getElementById('restaurants').innerHTML = html;

        document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
    }

    _getEmptyMovieTemplate() {
        return '<div class="restaurant_not_found align-items-center">Restoran tidak ditemukan!</div>';
    }
}

export default FavoriteRestaurantSearchView;
