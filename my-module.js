

angular.module('MyModule', []);
// Make controller Ctrl in module MyModule
angular.module('MyModule').controller('Ctrl', function($scope) {
    $scope.name = 'It works!' });
// Load an element that uses controller Ctrl
// Create a new div
//
var ngroot = $('<div id="ng-root"> Hello world !! </div>');
$('body').append(ngroot);
$(ngroot).append($('<div ng-controller="Ctrl">{{name}}</div>'));

// Bootstrap with MyModule
angular.bootstrap($('#ng-root'), ['MyModule']);



