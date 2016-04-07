import template from './welcome.html';
import './welcome.scss';
import logo from './logo.svg';

export default {
  template,
  bindings: {},
  controllerAs: 'vm',
  controller: /* @ngInject */ function WelcomeController($scope, assetService, $timeout) {
    $scope.dropboxBaseUrl = '/u/27048617/sofia';
    $scope.layers = assetService.getAssets.welcome;
    $scope.logourl = logo;
    console.log($scope.layers);
    $timeout(()=>{
      const parallax = new Parallax(document.getElementById('scene'));
      $('.pageMenuContent').addClass('menuActive')
    },70);
  }

};