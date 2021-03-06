(function() {
	'use strict';

	angular
		.module('musicianist')
		.directive('cookies', cookiesDirective);

	cookiesDirective.$inject = ['$cookies', '$routeParams', 'state'];

	function cookiesDirective($cookies, $routeParams, state) {		

		return {
			/*scope: {},
			templateUrl: '/app/shared/cookieConsent.html',
      		controller: cookieController*/
		}

		function cookieController($scope) {
			var c = $cookies.get('consent');

			$scope.hideDialog = false;

			$scope.consent = function(value) {
				if (value === undefined) {
					if(c && !$scope.hideDialog) {
						$scope.hide();
					}

					return c;
				} else if (value) {
					$cookies.put('consent', true);
					$scope.hide();
					state.writeCookie();   
				}
			};

			$scope.hide = function() {
				$scope.hideDialog = true;
			}

			$scope.remove = function() {
				$cookies.remove('consent');
				$cookies.remove('state');
			}
		}
	}
})();