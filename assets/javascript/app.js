//const GIPHY_KEY = '7xaTqfKyAQLfNOjpbcs01bByC1meNszb';
$( document ).ready(function() {
	//array of text to display on the buttons
	var buttonText = ["Travel","Sport","Architecture","Food","Movies","Fashion","Healthcare","Music","Coffee","Adventure"];	
	//function to dynamically display interest buttons on the page (removedd the static buttons option index.html)
	   function displayButtons(){
        $("#buttonContainer").empty(); 
        for (var j = 0; j < buttonText.length; j++){
            var buttons = $("<button>");
			 buttons.attr({
			 "class":  'buttons',
			 "data-name": buttonText[j]
			 });
            buttons.text(buttonText[j]);
            $("#buttonContainer").append(buttons);
        }
    }
	//function to take the value from the add new topic text field when the add new topic button is clicked
	function addNewInterest(){
        $("#addInterest").on("click", function(){
        var userInput = $("#userSearchText").val();
		var transformUserInput = userInput.substr(0,1).toUpperCase()+userInput.substr(1);
       buttonText.push(transformUserInput);    
        displayButtons();
        });
	}

	
	function userSelection(){
		
		//var userSearch = $("#userSearchText").val()
		var buttonValue = $(this).attr("data-name");
		//javascript, jQuery
		
		//requesting gif images from GIPHY API using the key provided at registration
		var xhr = $.get("https://api.giphy.com/v1/gifs/search?q="+buttonValue+"+&api_key=7xaTqfKyAQLfNOjpbcs01bByC1meNszb&limit=10");
		xhr.done(function(response) { 
			$("#imageContainer").empty();
			console.log("success got data", response);
			
			// access the first item in response object from the API and store the data that the API is returning in a variable called gifimgs
			var gifimgs = response.data

			// loop through the variable and append the returned gifs to <div> in index.html
			for(var i in gifimgs){
				 //creates a div where the images and rating will be displaed
				var imgDiv = $("<div>");
				imgDiv.attr({
				 "class": 'imgDiv'
				 });
				 imgDiv.css({
					 "float":"left",
					 "margin-left":"20px",
					 "margin-right":"20px"
				 });
				//add the gif images to the div created above
				var gifs = $("<img>");
				gifs.attr({	
				"src": gifimgs[i].images.original.url
				});
				gifs.css({
					 "height":"200px",
					 "width":"200px"
				 });
				imgDiv.append(gifs);
				//get rating from the API object and convert it from lower case to upper case
				var gifRating = $("<p>").text("Rating: " + gifimgs[i].rating.toUpperCase());
                imgDiv.append(gifRating);
				//append gif and rating div to the main div with id=imageContainer on index.html
			$("#imageContainer").prepend(imgDiv);
			}
		});	
	}
	
	displayButtons();
	addNewInterest();
	//userSelection();
	 $(document).on("click", ".buttons", userSelection);
})

