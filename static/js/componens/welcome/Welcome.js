import template from './welcome.html';
import './welcome.scss';

export default {
  template,
  bindings: {},
  controllerAs: 'vm',
  controller: /* @ngInject */ function WelcomeController($scope) {
    //$scope.isLoaded = true;
    const parallax = new Parallax(document.getElementById('scene'))



  }

};