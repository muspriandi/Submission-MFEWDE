/* eslint-disable linebreak-style */
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  // eslint-disable-next-line object-curly-newline
  constructor({ menu, drawer, body, mediaQuery }) {
    this.menu = menu;
    this.drawer = drawer;
    this.body = body;
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
}

export default App;
