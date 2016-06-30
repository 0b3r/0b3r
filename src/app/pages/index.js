import angular from 'angular'
import uiRouter from 'angular-ui-router'

import home from './home'

export default angular.module('pages', [uiRouter, home.name])
