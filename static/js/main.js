import welcomePage from './componens/welcome';
import contactPage from './componens/contact'
import aboutPage from './componens/aboutme'
import preload from './componens/preload';
import portfolioPage from './componens/portfolio';
import assetService from './core/assetServie'

angular.module('sofiaweb', ['ngRoute', 'ngAnimate'])
  .service('assetService', assetService)
  .component('welcomePage', welcomePage)
  .component('contactPage', contactPage)
  .component('aboutPage', aboutPage)
  .component('portfolioPage', portfolioPage)
  .component('preloadPage', preload)
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

      .when('/aboutme', {
        template: '<about-page></about-page>'
      })
      .when('/contact', {
        template: '<contact-page></contact-page>'
      })
      .when('/portfolio', {
        template: '<portfolio-page></portfolio-page>'
      /*  resolve: {
          assets: /!* @ngInject *!/ ($q, assetLoaderService) => {
            const defer = $q.defer();
            //defer.resolve();
            return defer.promise;
          }
       }*/

      })
      .otherwise({
        redirectTo: '/welcome'
      });
  });