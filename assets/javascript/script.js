var gifs = ["winona ryder", "michael j fox", "tom hardy","lauren ambrose"];
	function createGif () {
		var gifGet = $(this).attr("data-name");
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifs + "&api_key=xuuNk345sik7Okl06nd5Ylgk7rTtDkop&limit=10";

	        $.ajax({
	          url: queryURL,
	          method: "GET"
	        }).done(function(response) {
	        	console.log(response);
	        	var results = response.data;
	        	for (var i = 0; i < results.length; i++) {
	        		var gifDiv = $("<div class='gifDiv'>");
	        		var rating = $("<p>");
	        		rating.text(results[i].rating);
	        		gifDiv.append(rating);
	        		var gifImage = $("<img>");
	        		gifImage.attr("src", results[i].images.fixed_height_still.url);
	        		console.log(gifImage);
	        		gifDiv.append(gifImage);
	 				$("#show-gifs").append(gifDiv);
	        	}

	        });

	}//closes createGif function
		function createButton () {
			$("#display-buttons").empty();
			for (var i = 0; i < gifs.length; i++) {
			var b = $("<button>");
			b.addClass("gif");
			b.attr("data-name", gifs[i]);
			b.text(gifs[i]);
			$("#display-buttons").append(b);
			}

		}

	$("#add-gif").on("click", function(event) {
		event.preventDefault();

		var gif = $("#gif-input").val().trim();

		gifs.push(gif);

		createButton();

		$("#gif-input").val('');

	});	
	createGif();	

	$(document).on("click", ".gifDiv", createGif);

	createButton();	
