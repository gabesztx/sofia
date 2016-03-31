import template from './preload.html';
import './preload.scss';

export default {
  template,
  bindings: {},
  controllerAs: 'vm',
  controller: /* @ngInject */ function preloaderController($scope) {
    console.log('preloaderController');
  }
};
