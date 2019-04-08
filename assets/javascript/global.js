//const GIPHY_KEY = '7xaTqfKyAQLfNOjpbcs01bByC1meNszb';

function getUserInput(){
	
	var userSearch = $("#userSearchText").val()
	
	//javascript, jQuery
	
	//requesting gif images from GIPHY API using the key provided at registration
	var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+userSearch+"+&api_key=7xaTqfKyAQLfNOjpbcs01bByC1meNszb&limit=10");
	xhr.done(function(response) { 

		console.log("success got data", response);
		// access the first item in response object from the API and store the data that the API is returning in a variable called gifimgs
		var gifimgs = response.data

		// loop through the variable and append the returned gifs to <div> in index.html
		for(var i in gifimgs){
			$('.imageContainer').append("<img src='"+gifimgs[i].images.original.url+"' style='height:250px;width:250px;' />")
		}
	

	});
	
	
}




/*function getData(){	
	var userSearch = $("#userSearchText").val()	*/
	//javascript, jQuery
//var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
//xhr.done(function(data) { console.log("success got data", data); });
	
	//javascript, jQuery
	/*var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+userSearch+"+&api_key=7xaTqfKyAQLfNOjpbcs01bByC1meNszb&limit=30");
	xhr.done(function(response) { 		
		console.log("success got data", response); 
		var gifimgs = response.data
		var output="";

		for(var i in gifimgs){
			var gifO = gifimgs[i];
			var gifUrl = gifO.images.original.url;
			console.log(gifUrl);
			output +=  "<img src='"+gifUrl+"' style='height:350px;width:350px;' />";
		}
	$('.container').html(output);

	});
	
	
}*/





