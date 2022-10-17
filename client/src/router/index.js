import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView';
import CatalogView from '../views/CatalogView';
import AboutUsView from '../views/AboutUsView';
import NotFoundView from '../views/NotFoundView';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: CatalogView
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: AboutUsView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});

export default router;
