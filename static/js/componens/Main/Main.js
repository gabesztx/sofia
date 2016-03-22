//TODO
angular.module('socketApp', ['ngRoute', 'ngAnimate'])
  .config(/* @ngInject */ ($routeProvider) => {
    $routeProvider
      .when(ROUTES.urlPath.authentication, getConfigRouting(ROUTES.urlTemplate.authentication))
      .when(ROUTES.urlPath.home, getConfigRouting(ROUTES.urlTemplate.home))
      .otherwise({redirectTo: ROUTES.urlPath.authentication})
  })
  .run(/* @ngInject */ (routingService) => {
  });

