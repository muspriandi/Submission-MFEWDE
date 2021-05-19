/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

function ratingStar(count) {
  //   Membuat rating star berdasarkan nilai paramter (count)
  let star = '';
  for (let i = 1; i <= 5; i += 1) {
    if (i <= count) {
      star += '<i class="fa fa-star fa-lg"></i>';
    } else if ((i - 0.5) <= count) {
      star += '<i class="fa fa-star-half-o fa-lg"></i>';
    } else {
      star += '<i class="fa fa-star-o fa-lg"></i>';
    }
  }
  return star;
}

const createCatalogueItem = (restaurant) => `
    <article class="list-item">
      <div class="p-relative">
          <div class="box-content"><span>Kota ${restaurant.city}<span></div>
      </div>
      
      <div class="list-item-thumbnail">
          <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
      </div>
      
      <div class="list-item-content">
        <a class="content-title" href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a>
        <p class="content-rating">
          (${restaurant.rating}) <span>${ratingStar(restaurant.rating)}</span>
        </p>
        <p class="content-description">${restaurant.description}</p>
        <div class="content-footer">
          <a href="${`/#/detail/${restaurant.id}`}" class="read-more-button">Read More</a>
        </div>
      </div>
    </article>
`;

const createCatalogueDetail = (restaurant) => `
    <h2>${restaurant.name}</h2>
    <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
    <div>
        <h3>Description</h3>
        <p>${restaurant.description}
    </div>
`;

const createLikeButtonTemplate = () => `
    <button class="favorite-button" aria-label="Click to Like" id="likeButton"><i class="fa fa-heart-o" aria-hidden="true"></i></button>
`;

const createLikedButtonTemplate = () => `
    <button class="favorite-button" aria-label="Click to Dislike" id="likeButton"><i class="fa fa-heart" aria-hidden="true"></i></button>
`;

export {
  createCatalogueItem,
  createCatalogueDetail,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
