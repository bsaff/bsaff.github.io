// Define a new component called button-counter
Vue.component('b-nav', {
  data: function () {
    return {
      pages: [
        'home',
        'writing',
        'music'
      ]
    }
  },
  template: '<div>Nav</div>'
});
