/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

//   Membuat rating star berdasarkan nilai paramter (count)
function ratingStar(count) {
  let star = '';
  for (let i = 1; i <= 5; i += 1) {
    if (i <= count) {
      star += '<i class="fas fa-star fa-lg"></i>';
    } else if ((i - 0.5) <= count) {
      star += '<i class="fas fa-star-half-alt fa-lg"></i>';
    } else {
      star += '<i class="far fa-star fa-lg"></i>';
    }
  }
  return star;
}

// Membuat list item sebanyak n jumlah parameter 'data'
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

// Mebuat list review sebanyak n jumlah parameter 'reviews'
function customerReviews(reviews) {
  let list = '';

  reviews.forEach((review) => {
    list += `
      <div class="list-item">
        <div class="list-item-content">
          <div class="d-flex align-items-center">
            <i class="fas fa-user-circle fa-3x color-teal-lighten-2"></i>
            <div>
              <h3 class="card-sub-title margin-0">${review.name}</h3>
              <p class="card-description">${review.date}</p>
            </div>
          </div>
          <p class="list-description margin-bottom-0">${review.review}</p>
        </div>
      </div>
    `;
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
          <div class="d-flex content-around align-items-center padding-md-right-30">
            <div>
              <h2 class="card-title">${restaurant.name}</h2>
              <p class="card-description">${restaurant.address}, Kota ${restaurant.city}</p>
              <ul class="label-list">
                ${listItem(restaurant.categories, 'label')}
              </ul>
              <div class="rating-star">
                (${restaurant.rating}) <span>${ratingStar(restaurant.rating)}</span>
              </div>
            </div>
            <div id="favoriteButtonContainer"></div>
          </div>
          <hr />
          <h3 class="card-sub-title margin-bottom-5">Description</h3>
          <p class="card-description margin-0 color-grey-darken-1">Deskripsi</p>
          <p class="card-description margin-top-20">${restaurant.description}
        </div>
      </div>

      <br />
      <hr />

      <div class="panel">
        <div>
          <div class="d-flex align-items-center margin-top-20">
            <i class="fas fa-utensils fa-3x color-teal-lighten-2"></i>
            <div>
              <h3 class="card-sub-title margin-0">Food List</h3>
              <p class="card-description margin-0 color-grey-darken-1">Daftar Makanan</p>
            </div>
          </div>
          <ul class="menu-list">
            ${listItem(restaurant.menus.foods, 'food')}
          </ul>
        </div>
        <div>
          <div class="d-flex align-items-center margin-top-20">
            <i class="fas fa-coffee fa-3x color-teal-lighten-2"></i>
            <div>
              <h3 class="card-sub-title margin-0">Drink List</h3>
              <p class="card-description margin-0 color-grey-darken-1">Daftar Minuman</p>
            </div>
          </div>
          <ul class="menu-list">
            ${listItem(restaurant.menus.drinks, 'drink')}
          </ul>
        </div>
      </div>

      <hr />
      
      <h3 class="card-sub-title margin-top-30 margin-bottom-5">Customer Reviews</h3>
      <p class="card-description margin-0 color-grey-darken-1">Ulasan Pelanggan</p>
      <div class="list margin-top-20">
        ${customerReviews(restaurant.customerReviews)}
      </div>

    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
    <button class="favorite-button" aria-label="Click to Like" id="likeButton"><i class="far fa-heart" aria-hidden="true"></i></button>
`;

const createLikedButtonTemplate = () => `
    <button class="favorite-button" aria-label="Click to Dislike" id="likeButton"><i class="fas fa-heart" aria-hidden="true"></i></button>
`;

export {
  createCatalogueItem,
  createCatalogueDetail,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
