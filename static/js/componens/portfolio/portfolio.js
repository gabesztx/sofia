import template from './portfolio.html';
import './portfolio.scss';

export default {
  template,
  bindings: {},
  controllerAs: 'vm',
  controller: /* @ngInject */ function portfolioController($scope) {
    console.log('portfolioController');
  }

};