$("document").ready(function() {
	/********************************
	R A N D O M   F E A T U R E
	*********************************/
  $("#dog-amount").val(3);
  	$("#randomArticle aside").hide();
    $("#randomSection").on("click", "#randomButton", function(event) {
		event.preventDefault();
		$("#randomArticle aside").show();
		$("#randomArticle img").remove();
		//remove images
    let dogNum = $("#dog-amount").val();
		$("#dogNum").text(dogNum);
		pullDogImages(dogNum);
		//function
	}); //event
  function pullDogImages(dogNum) {
    fetch(`https://dog.ceo/api/breeds/image/random/${Number(dogNum)}`)
    .then(response => {
			if (response.ok) {
				return response.json();
			} else {
				throw console.log(response.text());
			}
		}).then(responseJson => displayResults(responseJson))
    .catch(error => displayError(error));
	} //function
});//READY
