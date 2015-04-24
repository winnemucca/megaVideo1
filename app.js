(function(){
angular.module('app', []).
    // exposing an alert method on rootscope so you can see result of 
    // your my-click directive without adding a controller to template.
    run(function($rootScope) {
        $rootScope.alert = function() {alert("You've been alerted!")};
    }).
    directive('myClick', function() {
        return function($scope, element, attrs) {
            element.on('click', function() {
                $scope.$apply(function() {
                    //fire the onClick function
                    $scope.$eval(attrs.myClick);
                });
            });
        }
    });
// angular.module('app').controller("MainController",function(){
// 	var vm = this;
// 	vm.title = "angular js tutorial example";
// 	vm.searchInput = "";


// 	angular.directive('myClick', function() {
//     return function($scope, element, attrs) {
//         element.on('click', function() {
//             $scope.$apply(function() {
//                 //fire the onClick function
//                 $scope.$eval(attrs.myClick);
//             });
//         });
//     }
// });
// })
// 	.controller('MainController',function(){
// 		var vm = this;
// 		vm.title = "AngularJs Tutorial Example";
// 	});

}() );