function makeHtml(gameID, results){
	var resultsHtml = '<div class=\'row\'><strong><div class=\'col-xs-4 ranbats\'>Place</div><div class=\'col-xs-4 ranbats\'>Player Handle</div><div class=\'col-xs-4 ranbats\'>Points</div></strong></div>';
	var count= 1;
	for (var key in results) {
		if (results.hasOwnProperty(key)) {
			resultsHtml += '<div class=\'row\'><div class=\'col-xs-4 ranbats\'>' + count.toString() + '</div><div class=\'col-xs-4 ranbats\'>' + key + '</div><div class=\'col-xs-4 ranbats\'>' + results[key].toString() + '</div></div>';
		}
		count++;
	}
	document.getElementById('results').innerHTML = resultsHtml;
}