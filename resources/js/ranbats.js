function makeHtml(gameID, results){
    // This is the top row for the table
	var resultsHtml = '<div class=\'row\'><strong><div class=\'col-xs-3 ranbats\'>Place</div><div class=\'col-xs-3 ranbats\'>Player Handle</div><div class=\'col-xs-3 ranbats\'>Points</div><div class=\'col-xs-3 ranbats\'>Avg. Place</div></strong></div>';
	var count=1;
    
    // For each player, make a row and add the data
	for (var key in results) {
		if (results.hasOwnProperty(key)) {
			resultsHtml += '<div class=\'row\'><div class=\'col-xs-3 ranbats\'>' + count.toString() + '</div><div class=\'col-xs-3 ranbats\'>' + key + '</div><div class=\'col-xs-3 ranbats\'>' + results[key][0].toString() + '</div><a href="#' + count.toString() + '" data-toggle="collapse"><div class=\'col-xs-3 ranbats\'>' + results[key][1][1].toFixed(2).toString() + '</div></a><div id="' + count.toString() + '" class="collapse"> Placements: ' + results[key][1][0].filter(function(z){return z}) + '</div></div>';
		}
		count++;
	}
	document.getElementById('results').innerHTML = resultsHtml;
}