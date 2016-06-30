export default () => {

  const directive = {
    restrict: 'E',
    template: require('./tpl.html'),
    controller: NavController,
    controllerAs: 'mainNav',
    replace: true
  }

  return directive

  function NavController() {

    const self = this

    self.title = '0B3R'

    self.menu = [
      {
        name: 'Home',
        link: 'main',
        icon: 'fa-home'
      },
      {
        name: 'About',
        link: 'about',
        icon: 'fa-user'
      },
      {
        name: 'Projects',
        link: 'projects',
        icon: 'fa-desktop'
      }
    ]

  }

}
