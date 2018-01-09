var gifs = ["winona ryder", "michael j fox", "tom hardy","lauren ambrose"];
console.log("array:" + gifs);
function createGif () {
	var gifGet = $(this).attr("data-name");
	console.log("this" + this);
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifGet + "&api_key=xuuNk345sik7Okl06nd5Ylgk7rTtDkop&limit=10";

        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	console.log(response);
        	var results = response.data;
        	$("#show-gifs").empty();
        	for (var i = 0; i < results.length; i++) {
        		var gifDiv = $("<div>");
        		gifDiv.addClass("gifDiv")
        		var rating = $("<p>");
        		rating.text("Rating: " + " " + results[i].rating);
        		gifDiv.append(rating);
        		var gifImage = $("<img>");
        		gifImage.addClass("image");
        		gifImage.attr("src", results[i].images.fixed_height_still.url);
        		gifImage.attr("data-animate", results[i].images.fixed_height.url);
        		gifImage.attr("data-still", results[i].images.fixed_height_still.url);
        		gifImage.attr("data-state", "still");
        		console.log(gifImage);
        		gifDiv.append(gifImage);
 				$("#show-gifs").append(gifDiv);
        	}
			    $(".image").on("click", function() {
		    	var state = $(this).attr("data-state");

		    	if (state === "still") {
			        $(this).attr("src", $(this).attr("data-animate"));
			        $(this).attr("data-state", "animate");
			      } else {
			        $(this).attr("src", $(this).attr("data-still"));
			        $(this).attr("data-state", "still");
			      }
			    });
        });

}//closes createGif function


	function createButton () {
		$("#display-buttons").empty();

		for (var i = 0; i < gifs.length; i++) {
		var b = $("<button>");
		b.addClass("gif");
		b.addClass("btn btn-danger");

///!!!!! Will need to add a new class here for to make boostrap compatible when we get there.!!!!!!!!		
		b.attr("data-name", gifs[i]);
		b.text(gifs[i]);
		$("#display-buttons").append(b);
		}
//!!!! want to figure out how to make a blank button impossible!!!!!
	}
	$("#add-gif").on("click", function(event) {
		event.preventDefault();

		var newGif = $("#gif-input").val().trim();
		if (newGif === ""){
			return;
		}

		gifs.push(newGif);
		console.log("newarray" + gifs); //it is adding to my array

		createButton();

		$("#gif-input").val(" ");

	});		




	

	$(document).on("click", ".gif", createGif);



	createButton();	

