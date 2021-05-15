/* eslint-disable linebreak-style */
const DrawerInitiator = {
  // eslint-disable-next-line object-curly-newline
  init({ menu, drawer, body, mediaQuery }) {
    menu.addEventListener('click', (event) => {
      this.toggleDrawer(event, drawer, body);
    });

    body.addEventListener('click', (event) => {
      this.closeDrawer(event, drawer, body);
    });

    // Register event listener mediaQuery
    mediaQuery.addListener(() => {
      this.handleTabletChange(mediaQuery, drawer, body);
    });
  },

  handleTabletChange(event, drawer, body) {
    // Check if the media query is true
    if (event.matches) {
      // Then log the following message to the console
      // console.log('Media Query Matched!')
      this.removeDrawerClass(drawer, body);
    }
  },

  toggleDrawer(event, drawer, body) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    body.classList.toggle('shadow');
  },

  closeDrawer(event, drawer, body) {
    event.stopPropagation();
    this.removeDrawerClass(drawer, body);
  },

  removeDrawerClass(drawer, body) {
    drawer.classList.remove('open');
    body.classList.remove('shadow');
  },
};

export default DrawerInitiator;
