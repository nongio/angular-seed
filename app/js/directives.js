'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

angular.module('myApp.directives', []).
  directive('numberScroll', function() {

    return {
    	restrict: 'C',
    	template: '<div>{{number}}</div>',
    	link: function(scope, elm, attrs) {
			scope.$watch('number', function(value) {
				updateNumber(value);
			});
			function updateNumber(value){

				$(elm).stop().animate({
					text: value
				}, {
					duration: 1000,
					step: function(newvalue){
						$(this).text(Math.floor(newvalue));
					}
				});	
			}
      		
    	}
    }
  });