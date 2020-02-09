function getScores(semesterID = 3, gameID = 5) {
    // This is a check for the ranbats page to get default values on page load
	if ($("#semester").find("option").length != 0 && $("#game").find("option").length != 0){
		semesterID = $("#semester").val();
		gameID = $("#game").val();
	}
	var xhttp = new XMLHttpRequest();
	
    // When we get data from the API, pass it to makeHtml to format the data
	xhttp.onreadystatechange = function() {
		if(xhttp.readyState == 4 && xhttp.status == 200) {
			var res = JSON.parse(xhttp.responseText);
			makeHtml(gameID, res.results)
		}
	};
    //Opens the connection to get data
	xhttp.open("GET", "https://o4rcohjw1a.execute-api.us-east-1.amazonaws.com/prod/results/" + semesterID.toString() + "/"+ gameID.toString(), true);	
	xhttp.send(null);
}