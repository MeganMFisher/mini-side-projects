angular.module('assessment').directive('productDir', function(){
    return {
        restrict: 'E',
        scope: {
            product: "="
        },
        templateUrl: './views/product-tmpl.html'
    }
})