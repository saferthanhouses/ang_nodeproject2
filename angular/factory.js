
myApp.factory('myFactory', ['$http', function($http) {
	// $http factory data
	var urlBase = 'http://localhost:8080';
	var factory = {};
	factory.data=null;

	factory.getPosts = function() {
		return $http.get(urlBase);
		// .then(function(response) { console.log(response.data); factory.data = response.data })
	}

	factory.uploadPost = function(post) {
		return $http.post(urlBase, post);
	}

	return factory;  
}]);