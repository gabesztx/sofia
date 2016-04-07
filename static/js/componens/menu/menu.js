import template from './menu.html';
import './menu.scss';
import logo from './logo.svg';
export default {
  template,
  bindings: {},
  controllerAs: 'vm',
  controller: /* @ngInject */ function WelcomeController($scope,$timeout) {
    $scope.logourl = logo;
    console.log(logo);
    $timeout(()=> {
      $('.pageMenuContent').addClass('menuActive')
    }, 100);

  }
};