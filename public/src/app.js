/**
 * Created by zhuyan on 16/3/14.
 */
angular.module('ContactsApp', ['ngRoute','ngResource '])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/contacts', {
                controller: 'listController',
                templateUrl: 'views/list.html'
            })
            /*.when('/contact/new',{
                controller:'NewController',
                templateUrl:'views/new.html'
            })*/;

        $locationProvider.html5Mode(true);
    });