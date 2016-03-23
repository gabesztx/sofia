import template from './welcome.html';
import './welcome.scss';
export default {
  template,
  bindings: {},
  controllerAs: 'vm',
  controller: /* @ngInject */ function WelcomeController($scope, assetService, $timeout) {
    //$scope.dropboxBaseUrl = '/u/27048617/sofia';
    $scope.layers = assetService.getAssets.welcome;
    $timeout(()=>{
      const parallax = new Parallax(document.getElementById('scene'));
    });
  }

};