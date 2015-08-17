
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
		// console.log(post)
		return $http.post(urflBase, post);
	}

	return factory;  
}]);