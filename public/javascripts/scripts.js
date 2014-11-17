$(document).ready(function() { 
 
	$('form#form-comment').on("submit", function() {

			$.ajax({
				url: "/entries/comments",
				method: "POST",
				dataType: "json",
				data: {
					entry: {
						comment: $('textarea')
					}
				}
			})
	   


	     
	});

}); 