
myApp.controller('myController', function($scope, myFactory){

	// Logic for getting the new posts
	getPosts() // on load
	
	function getPosts() {  
		myFactory.getPosts()
			.then(function(response){ assignPosts(response.data) });
	}
	function assignPosts(data)
	{ 
		$scope.myPosts = data
	}	

	// new post box initial text & input
	$scope.post = "Type something here..."

	$scope.submitPost = function() { 
		$scope.newPost = {
		"title": $scope.newPostTitle,
		"entry": $scope.newPostEntry
		};
		myFactory.uploadPost($scope.newPost)
			.then(function(response){ finishUploadPost() });
	};

	function finishUploadPost() {
		$scope.myPosts.push($scope.new_post);
	}
			// .then(function($scope.myPosts),
			// 	   function(console.log("error"))
			// )
})