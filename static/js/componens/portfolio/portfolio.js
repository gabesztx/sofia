import template from './portfolio.html';
import './portfolio.scss';

export default {
  template,
  bindings: {},
  controllerAs: 'vm',
  controller: /* @ngInject */ function portfolioController($scope, $timeout) {
    //$scope.dropboxBaseUrl = '/u/27048617/sofia/static/storage/portfolio/';
    $scope.dropboxBaseUrl = 'static/storage/portfolio/';
    const animClass = 'inactive';
    $scope.portfolioClose = ()=> {
      $scope.isPortfolio = false;
      $timeout(()=> {
        $('.portfolioContent').removeClass(animClass);
      }, 500);
    };

    $scope.picItems = (id)=> {
      $scope.item  = id;
      $('.portfolioContent').addClass(animClass);
      $timeout(()=> {
        $scope.isPortfolio = true;
      }, 500);
    };
  }
};