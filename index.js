$("document").ready(function() {
	/********************************
	C L I C K  E V E N T S
	*********************************/
	$("#dog-amount").val(3);
	$("#randomSection").on("click", "#randomButton", function(event) {
		event.preventDefault();
		$("#randomArticle img").remove();
		//remove images
		let dogAmount = $("#dog-amount").val();
		$("#dogAmount").text(dogAmount);
		if (dogAmount > 0 && dogAmount < 51) {
			pullRandomDogImages(dogAmount);
		}//if
		//function
	}); //event__Random
	$("#searchSection").on("click", "#searchButton", function(event) {
		event.preventDefault();
		$("#searchArticle img").remove();
		//remove images
		let dogSearch = $("#dog-search").val().toLowerCase();
		$("#dogSearch").text(dogSearch);
		pullSearchDogImages(dogSearch);
		//function
	}); //event__Search
	/********************************
	P U L L   D O G  I M A G E S
	*********************************/
	function pullSearchDogImages(dogSearch) {
		fetch(`https://dog.ceo/api/breed/${dogSearch}/images/random`)
    .then(response => {
			if (response.ok) {
				return response.json();
			} else {
				throw console.log(response.text());
			}
		}).then(responseJson => displaySearchResults(responseJson))
      .catch(error => displaySearchError(error));
	} //function__search
	function pullRandomDogImages(dogAmount) {
		fetch(`https://dog.ceo/api/breeds/image/random/${Number(dogAmount)}`)
    .then(response => {
			if (response.ok) {
				return response.json();
			} else {
				throw console.log(response.text());
			}
		}).then(responseJson => displayRandomResults(responseJson))
      .catch(error => displayRandomError(error));
	} //function__random
}); //READY
/********************************
D I S P L A Y   R E S U L T S
*********************************/
function displaySearchResults(responseJson) {
	console.log(responseJson);
	let dogList = responseJson.message.length;
	if (dogList) {
		for (let i = 1; i <= 1; i++) {
			console.log(dogList, i, responseJson.message);
			$("#searchArticle aside").prepend(`<img src=${responseJson.message} />`);
		}
	} else {
		console.log("check your inputs");
	}
}; //function__search
function displayRandomResults(responseJson) {
	console.log(responseJson);
	let dogList = responseJson.message.length;
	if (dogList) {
		for (let i = 0; i < dogList; i++) {
			console.log(dogList, i, responseJson.message);
			$("#randomArticle aside").prepend(`<img src=${responseJson.message[i]} />`);
		}
	} else {
		console.log("check your inputs");
	}
}; //function__random
/********************************
D I S P L A Y   E R R O R S
*********************************/
function displaySearchError(error) {
	alert("ERROR 404: Dog Breed Not Found");
} //function__search
function displayRandomError(error) {
	alert("ERROR 404: Images not found");
} //function__random
