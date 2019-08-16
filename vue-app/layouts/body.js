// Define a new component called button-counter
Vue.component('b-body', {
  data: function () {
    return {
      pages: [
        'home',
        'writing',
        'music'
      ]
    }
  },
  template: '<div><slot></slot></div>'
});
