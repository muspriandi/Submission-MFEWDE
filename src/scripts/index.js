import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';

// eslint-disable-next-line no-unused-vars
const app = new App({
  menu: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  body: document.querySelector('body'),
  mediaQuery: window.matchMedia('(min-width: 650px)'),
});

/* GET data list restaurant dari DATA.json */
const json = require('../DATA.json');
// console.log(json.restaurants)

let data = '';
let listItem = '';

for (let i = 0; i < json.restaurants.length; i++) {
  data = json.restaurants[i];
	
  listItem += `
		<article class="list-item">
			<div class="p-relative">
				<div class="box-content"><span>Kota ${ data['city'] }<span></div>
			</div>
			<div class="list-item-thumbnail">
				<img src="${ data['pictureId'] }" alt="${ data['name'] }">
			</div>
			<div class="p-relative" aria-label="Tekan untuk menyukai konten">
				<button class="favorite-button">🖤</button>
			</div>
			<div class="list-item-content">
				<h2 class="content-title"><a href="#">${ data['name'] }</a></h2>
				<p class="content-rating">(${ data['rating'] }) <span>⭐⭐⭐⭐<span></p>
				<p class="content-description">${ data['description'] }</p>
				
				<div class="content-footer">
					<button class="read-more-button">Lihat Lebih Banyak</button>
				</div>
			</div>
		</article>
	`;
}

const restaurantList = document.querySelector('#restaurantList');
restaurantList.innerHTML = listItem;