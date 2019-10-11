function getScores(semesterID = 2, gameID = 1) {
	if ($("#semester").length != 0 && $("#game").length != 0){
		semesterID = $("#semester").val();
		gameID = $("#game").val();
	}
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if(xhttp.readyState == 4 && xhttp.status == 200) {
			var res = JSON.parse(xhttp.responseText);
			makeHtml(gameID, res.results)
		}
	};
	xhttp.open("GET", "https://o4rcohjw1a.execute-api.us-east-1.amazonaws.com/prod/results/" + semesterID.toString() + "/"+ gameID.toString(), true);	
	xhttp.send(null);
}