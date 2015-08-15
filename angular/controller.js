
myApp.controller('myController', function($scope, myFactory){

	// sanity check;
	$scope.sanity = "";

	// get the posts
	getPosts()
	
	// new post box initial text & input
	$scope.newPost = "Type something here..."

	$scope.submitPost = function() { }

	function getPosts() {  
		myFactory.getPosts()
			.then(function(response){ assignPosts(response.data) });
	}

	function assignPosts(data)
	{ 
		$scope.myPosts =data
	}
			// .then(function($scope.myPosts),
			// 	   function(console.log("error"))
			// )
})