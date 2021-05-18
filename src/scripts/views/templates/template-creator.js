/* eslint-disable linebreak-style */
const createCatalogueItem = (restaurant) => `
    <article class="list-item">
        <div class="p-relative">
            <div class="box-content"><span>Kota ${restaurant.city}<span></div>
        </div>
        
        <div class="list-item-thumbnail">
            <img src="${restaurant.pictureId}" alt="${restaurant.name}">
        </div>
        
        <div class="list-item-content">
            <h2 class="content-title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h2>
            <p class="content-rating">(${restaurant.rating}) <span>⭐⭐⭐⭐<span></p>
            <p class="content-description">${restaurant.description}</p>
            
            <div class="content-footer">
                <a href="${`/#/detail/${restaurant.id}`}" class="read-more-button">Lihat Lebih Banyak</a>
            </div>
        </div>
    </article>
`;

const createCatalogueDetail = (restaurant) => `
    <h2>${restaurant.name}</h2>
    <img src="${restaurant.pictureId}" alt="${restaurant.name}">
    <div>
        <h3>Description</h3>
        <p>${restaurant.description}
    </div>
`;

const createLikeButtonTemplate = () => `
    <button class="favorite-button" aria-label="Tekan untuk menyukai" id="likeButton"><i class="fa fa-heart-o" aria-hidden="true"></i></button>
`;

const createLikedButtonTemplate = () => `
    <button class="favorite-button" aria-label="Tekan untuk berhenti menyukai" id="likeButton"><i class="fa fa-heart" aria-hidden="true"></i></button>
`;

export {
  createCatalogueItem,
  createCatalogueDetail,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
