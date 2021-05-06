import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

const menu = document.querySelector('#menu');
const body = document.querySelector('body');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    body.classList.toggle('shadow');
    event.stopPropagation();
});

body.addEventListener('click', function () {
    drawer.classList.remove('open');
    body.classList.remove('shadow');
});


/*
*	Working with JavaScript Media Queries (https://css-tricks.com/working-with-javascript-media-queries/)
*/
const mediaQuery = window.matchMedia('(min-width: 650px)')

function handleTabletChange(e) {
	// Check if the media query is true
	if (e.matches) {
		// Then log the following message to the console
		// console.log('Media Query Matched!')
		drawer.classList.remove('open');
		body.classList.remove('shadow');
	}
}
// Register event listener
mediaQuery.addListener(handleTabletChange)
// Initial check
handleTabletChange(mediaQuery)

/*
*	GET data list restaurant dari DATA.json
*/
let json = require('../DATA.json');
// console.log(json.restaurants)

let data = '';
let listItem = '';

for(let i=0; i<json.restaurants.length; i++) {
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