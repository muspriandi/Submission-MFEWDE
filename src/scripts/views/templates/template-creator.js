/* eslint-disable linebreak-style */
const createCatalogueItem = (restaurant) => `
    <article class="list-item">
        <div class="p-relative">
            <div class="box-content"><span>Kota ${restaurant.city}<span></div>
        </div>
        <div class="list-item-thumbnail">
            <img src="${restaurant.pictureId}" alt="${restaurant.name}">
        </div>
        <div class="p-relative" aria-label="Tekan untuk menyukai konten">
            <button class="favorite-button">🖤</button>
        </div>
        <div class="list-item-content">
            <h2 class="content-title"><a href="#">${restaurant.name}</a></h2>
            <p class="content-rating">(${restaurant.rating}) <span>⭐⭐⭐⭐<span></p>
            <p class="content-description">${restaurant.description}</p>
            
            <div class="content-footer">
                <button class="read-more-button">Lihat Lebih Banyak</button>
            </div>
        </div>
    </article>
`;

// eslint-disable-next-line import/prefer-default-export
export { createCatalogueItem };
