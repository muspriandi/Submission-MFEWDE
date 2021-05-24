/* eslint-disable no-tabs */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../../node_modules/@fortawesome/fontawesome-free/js/all';
import App from './views/app';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './globals/config';

// eslint-disable-next-line no-unused-vars
const app = new App({
  menu: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  body: document.querySelector('body'),
  content: document.querySelector('#maincontent'),
  mediaQuery: window.matchMedia('(min-width: 650px)'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
