import '../pages/home';
import '../pages/music';
import '../pages/writing';

export const ROUTES = {
  HOME: '#home',
  WRITING: '#writing',
  MUSIC: '#music'
};

const NotFound = { template: '<p>Not found</p>' };

const ROUTER = {
  [ROUTES.HOME]: 'home-page',
  [ROUTES.MUSIC]: 'music-page',
  [ROUTES.WRITING]: 'writing-page'
};

export const getTemplate = location => ROUTER[location] || NotFound
