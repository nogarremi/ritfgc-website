function makeHtml(gameID, results) {
	// This is so the proper dropdown gets populated with the data
	var game = '';
	switch(gameID) {
		case 1:
			game = 't7';
			break;
		case 2:
			game = 'sfv';
			break;
		case 3:
			game = 'bbcf';
			break;
		case 4:
			game = 'rev2';
			break;
		case 5:
			game = 'unist';
			break;
		case 6:
			game = 'bbtag';
			break;
		case 7:
			game = 'dbfz';
			break;
		case 8:
			game = 'samsho';
			break;
		case 9:
			game = 'gbvs';
			break;
		case 10:
			game = 'uniclr';
			break;
		case 11:
			game = 'plusr';
			break;
		case 12:
			game = 'ggst';
			break;
		case 13:
			game = 'mbtl';
			break;
		case 14:
			game = 'dnf';
			break;
	}

	// Just grab the 1st 3 results and put them on display
	var first = Object.keys(results)[0];
	var second = Object.keys(results)[1];
	var third = Object.keys(results)[2];
	document.getElementById(game + "Ranks").innerHTML = "<p><strong>First Place: </strong>" + 
		first + " - " + results[first][0] + " pts</p><p><strong>Second Place: </strong>" + 
		second + " - " + results[second][0] + " pts</p><p><strong>Third Place: </strong>" + 
		third + " - " + results[third][0] + " pts</p>";
}