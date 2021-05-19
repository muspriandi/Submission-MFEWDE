/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

//   Membuat rating star berdasarkan nilai paramter (count)
function ratingStar(count) {
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

// Membuat list item sebanyak n jumlah variabel 'data'
function listItem(data, type) {
  let list = '';

  data.forEach((item) => {
    if (type === 'label') {
      list += `<li class="label label-item">${item.name}</li>`;
    } else if (type === 'food') {
      list += `<li class="label food-item">${item.name}</li>`;
    } else {
      list += `<li class="label drink-item">${item.name}</li>`;
    }
  });

  return list;
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
      <a class="list-title" href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a>
      <div class="rating-star">
        (${restaurant.rating}) <span>${ratingStar(restaurant.rating)}</span>
      </div>
      <p class="list-description">${restaurant.description}</p>
      <div class="list-footer">
        <a href="${`/#/detail/${restaurant.id}`}" class="read-more-button">Read More</a>
      </div>
    </div>
  </article>
`;

const createCatalogueDetail = (restaurant) => `
  <div class="card">
    <div class="card-body">

      <div class="panel align-items-center">
        <div>
          <div class="p-relative">
              <div class="box-content"><span>Kota ${restaurant.city}<span></div>
          </div>
          <img class="card-img" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
        </div>
        <div>
          <h2 class="card-title">${restaurant.name}</h2>
          <p class="card-description">${restaurant.address}, Kota ${restaurant.city}</p>
          <ul class="label-list">
            ${listItem(restaurant.categories, 'label')}
          </ul>
          <div class="rating-star">
            (${restaurant.rating}) <span>${ratingStar(restaurant.rating)}</span>
          </div>
          <hr />
          <h3 class="card-sub-title">Description</h3>
          <p class="card-description">${restaurant.description}
        </div>
      </div>

      <br />
      <hr />

      <div class="panel">
        <div>
          <h3 class="card-sub-title">Food</h3>
          <ul class="menu-list">
            ${listItem(restaurant.menus.foods, 'food')}
          </ul>
        </div>
        <div>
          <h3 class="card-sub-title">Drink</h3>
          <ul class="menu-list">
            ${listItem(restaurant.menus.drinks, 'drink')}
          </ul>
        </div>
      </div>

    </div>
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
