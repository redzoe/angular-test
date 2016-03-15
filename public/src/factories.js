/**
 * Created by zhuyan on 16/3/14.
 */
angular.module('ContactsApp')
    .factory('Contact', function ($resource) {
        return $resource('/api/contact/:id', {id: '@id'}, {
            'update': {method: 'PUT'}
        });
    });