import angular from 'angular'
import config from './index.config'
import uiRouter from 'angular-ui-router'

import pages from './pages'

const App = angular
  .module('app',
  [
    uiRouter,
    pages.name
  ]
)

App
  .config(config)

export default App
