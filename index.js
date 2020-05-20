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

	}); //event
});//READY
