function getScores(semesterID = 11, gameID = 15) {
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
			makeHtml(gameID, res[Object.keys(res)[0]]);
		}
	};
    //Opens the connection to get data
	xhttp.open("GET", "https://s5zqokvoo5.execute-api.us-east-1.amazonaws.com/prod/results/" + semesterID.toString() + "/"+ gameID.toString(), true);	
	xhttp.send(null);
}