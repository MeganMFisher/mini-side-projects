angular.module('assessment').service('shopService', function($http){

    this.getProducts = function(){
        return $http ({
            method: 'GET',
            url: "http://practiceapi.devmounta.in/products"
        }).then(function(response){
            return response.data;
        })
    }

    var baseUrl = "http://practiceapi.devmounta.in/products/";

    this.getDetails = function(id){
        return $http ({
            method: 'GET',
            url: baseUrl + id
        }).then(function(response){
            return response.data;
        })
    } 
    
})