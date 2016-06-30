export default $stateProvider => {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./tpl.html'),
      controller: function() {
        this.pageTitle = 'Home'

      },
      controllerAs: 'home'
    })
}
