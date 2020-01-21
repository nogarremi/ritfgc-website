function getScores(semesterID = 3, gameID = 5) {
	if ($("#semester").find("option").length != 0 && $("#game").find("option").length != 0){
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