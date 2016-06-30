import angular from 'angular'
import config from './index.config'
import uiRouter from 'angular-ui-router'

import './index.scss'


import layout from './layout'
import pages from './pages'

const App = angular
  .module('app',
  [
    uiRouter,
    layout.name,
    pages.name
  ]
)

App
  .config(config)

export default App
