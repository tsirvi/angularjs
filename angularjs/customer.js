var myapp=angular.module("myapp",[]);
myapp.controller("myctrl",function($scope,$http) 
{
    $http.get('https://raw.githubusercontent.com/tsirvi/angularjs/main/customer.json')
    .success(function(response)
    {
        $scope.names=response.customerInformation; 
    });
});