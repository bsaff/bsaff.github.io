import Home from '../pages/home';
import Music from '../pages/music.vue';
import Writing from '../pages/writing';

export const ROUTES = {
  HOME: '#home',
  WRITING: '#writing',
  MUSIC: '#music'
};

const NotFound = { template: '<p>Not found</p>' };

const ROUTER = {
  [ROUTES.HOME]: Home,
  [ROUTES.MUSIC]: Music,
  [ROUTES.WRITING]: Writing
};

export const getTemplate = location => ROUTER[location] || NotFound
