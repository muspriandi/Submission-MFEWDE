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