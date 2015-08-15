
myApp.factory('myFactory', ['$http', function($http) {
	// $http factory data
	var factory = {};
	factory.data=null;

	factory.getPosts = function() {
		return $http.get('http://localhost:8080');
		// .then(function(response) { console.log(response.data); factory.data = response.data })
	}

	return factory;  
}]);