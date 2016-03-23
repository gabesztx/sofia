import welcomePage from './componens/welcome';
import portfolioPage from './componens/portfolio';
import assetService from './core/assetServie'

angular.module('sofiaweb', ['ngRoute', 'ngAnimate'])
  .service('assetService', assetService)
  .component('welcomePage', welcomePage)
  .component('portfolioPage', portfolioPage)
  .config(/* @ngInject */ ($routeProvider) => {
    $routeProvider
      .when('/welcome', {
        template: '<welcome-page></welcome-page>',
        resolve: {
          assets: /* @ngInject */ ($q, assetService) => {
            const defer = $q.defer();
            assetService.getAssetsData(defer);
            return defer.promise;
          }
        }
      })
      .when('/portfolio', {
        template: '<portfolio-page></portfolio-page>',
        resolve: {
          assets: /* @ngInject */ ($q, assetLoaderService) => {
            const defer = $q.defer();
            //defer.resolve();
            return defer.promise;
          }
        }
      })
      .otherwise({
        redirectTo: '/welcome'
      });
  });