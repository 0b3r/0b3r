import angular from 'angular'
import directive from './directive'
import './index.scss'

export default angular.module('layout.mainNav', [])
  .directive('mainNav', directive)


