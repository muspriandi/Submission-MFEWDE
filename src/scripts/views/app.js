/* eslint-disable linebreak-style */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  // eslint-disable-next-line object-curly-newline
  constructor({ menu, drawer, body, content, mediaQuery }) {
    this.menu = menu;
    this.drawer = drawer;
    this.body = body;
    this.content = content;
    this.mediaQuery = mediaQuery;

    this.initialAppShell();
  }

  initialAppShell() {
    DrawerInitiator.init({
      menu: this.menu,
      drawer: this.drawer,
      body: this.body,
      mediaQuery: this.mediaQuery,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
