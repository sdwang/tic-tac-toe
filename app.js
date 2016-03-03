var app = angular.module('tttApp', [
  'ui.router',
  'mainCtrl']);

app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');
  
  $stateProvider.state('/', {
    url: '/',
    templateUrl: 'boardView.html'
  });

});
