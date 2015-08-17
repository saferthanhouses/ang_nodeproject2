var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {	
	
	//CORS STUFF
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept') 
	res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	
	if (req.method == "GET") {
		console.log("served posts");
		res.end(posts.getPosts());	
	}
	else if (req.method == "OPTIONS") { // what is the options request?
		console.log("got OPTIONS request???") // why is it not a post request
												// what does CORS have to do ???
		// need to get the data out of the request 
		req.on('data', function(data) { console.log("got data") });
		req.on('end', function(data) { console.log("end request")})
		//posts.addPost(req)
		res.end("post received");
		// return res.end("done");
	}
	else if (req.method =="POST") {
		console.log("Got a " + req.method + " request")
		req.setEncoding('utf8');
		req.on('data', function(data) { posts.addPost(data) });
		res.end("wht");
	}
})

var posts = {
	// p : [{"title":"Tue", "entry": "read harry potter today"}, 
	// 			{"title": "Mon", "entry": "watched apocalypse now"},
	// 			{"title": "Wed", "entry": "made a paella"}],
	p : [],
	getPosts : function() { return JSON.stringify(this.p) },
	addPost : function(post) { this.p.push(JSON.parse(post)) }
}

/*
var getPosts = function() { 
		var allPosts;
		// do stuff here to load into var
		// stub w : 
		allPosts = [{"title":"Tue", "entry": "read harry potter today"}, 
				{"title": "Mon", "entry": "watched apocalypse now"},
				{"title": "Wed", "entry": "made a paella"}];
		return JSON.stringify(allPosts);
	}
*/
server.listen(8080);