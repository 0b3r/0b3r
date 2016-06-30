import angular from 'angular'
import app from './index.module'

angular.element(document).ready(() => {
  angular.bootstrap(document, [app.name])
})
