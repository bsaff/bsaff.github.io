import '../pages/home';

export const ROUTES = {
  HOME: '#home',
  WRITING: '#writing',
  MUSIC: '#music'
};

const NotFound = { template: '<p>Not found</p>' };

const ROUTER = {
  [ROUTES.HOME]: 'home-page',
  [ROUTES.MUSIC]: { template: '<p>Music</p>' },
  [ROUTES.WRITING]: { template: '<p>Not found</p>' }
};

export const getTemplate = location => ROUTER[location] || NotFound
