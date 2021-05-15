/* eslint-disable linebreak-style */
import Catalogue from '../views/pages/catalogue';
import Detail from '../views/pages/detail';

const routes = {
  '/': Catalogue, // default page
  '/catalogue': Catalogue,
  '/detail/:id': Detail,
};

export default routes;
