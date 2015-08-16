
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
	$scope.newPostTitle = "Post Title here ..."
	$scope.newPostEntry = "Type something here..."

	$scope.submitPost = function() { 
		$scope.newPost = {
		"title": $scope.newPostTitle,
		"entry": $scope.newPostEntry
		};
		// $scope.myPosts.push($scope.newPost);
		myFactory.uploadPost(JSON.stringify($scope.newPost))
			.then(function(response){ finishUploadPost() })
				  // function(response){ console.log("error")});
	};

	function finishUploadPost() {
		// console.log($scope.myPosts);
		$scope.myPosts.push($scope.newPost);
		console.log($scope.myPosts);
	}
			// .then(function($scope.myPosts),
			// 	   function(console.log("error"))
			// )
})