let desc = true;
let lastCol = 2;

// Sorts the currently displayed table in ascending or descending order
const sortTable = (colIndex) => {
	const table = document.getElementById('game-results');
	const rows = table.rows;

	// Treat row with player info, and row for placements as one entity
	let rowsCombined = [];

	for (let i = 1; i < rows.length; i += 2) {
		let row = [];
		row.push(rows[i]);		// Player data
		row.push(rows[i + 1]);	// Bracket placements

		rowsCombined.push(row);
	}

	// If it's already been sorted, just flip it, don't sort again
	if (lastCol !== colIndex) {
		desc = true;

		rowsCombined.sort((a, b) => {
			let num1 = Number(a[0].children[colIndex].innerText);
			let num2 = Number(b[0].children[colIndex].innerText);
			// Sort from large to small for points, small to large for placement
			const compare = (colIndex === 2) ? num2 - num1 : num1 - num2;
	
			// If values are equal, compare placement instead
			if (compare === 0) {
				num1 = Number(a[0].children[0].innerText);
				num2 = Number(b[0].children[0].innerText);
				return num1 - num2;
			}
	
			return compare;
		});

		// Swap sort icon back to ascending, since that's the default
		const elements = document.getElementsByClassName('sorters');
		elements[lastCol - 2].classList.replace('glyphicon-chevron-up', 'glyphicon-chevron-down');
		lastCol = colIndex;
	} else {
		rowsCombined.reverse();
		const elements = document.getElementsByClassName('sorters');

		// Change the icon to indicate different sorting direction
		if (desc) {
			elements[colIndex - 2].classList.replace('glyphicon-chevron-down', 'glyphicon-chevron-up');
		} else {
			elements[colIndex - 2].classList.replace('glyphicon-chevron-up', 'glyphicon-chevron-down');
		}

		desc = !desc;
	}

	const tBody = table.getElementsByTagName('tbody')[0];

	// Update the contents of the table
	for (let i = 0; i < rows.length - 1; i++) {
		tBody.append(rowsCombined[parseInt(i / 2)][i % 2]);
	}
}

// Creates a ranking table of current game in current semester inside #results
const makeHtml = (results) => {
	// Reset default values for table sorting
	desc = true;
	lastCol = 2;

	// This is the top row of the table
	let resultsHtml = 
		`<table id='game-results' class='table table-bordered table-hover table-condensed text-left'>
			<thead>
				<tr>
					<th>Place</th>
					<th>Player Handle</th>
					<th onclick='sortTable(2)' style='cursor: pointer;'>
						<span>Points&ensp;</span>
						<span class="sorters glyphicon glyphicon-chevron-down"></span>
					</th>
					<th onclick='sortTable(3)' style='cursor: pointer;'>
						<span>Avg. Place&ensp;</span>
						<span class="sorters glyphicon glyphicon-chevron-down"></span>
					</th>
				</tr>
			</thead>
			<tbody>
		`;
	let count = 1;

	// For each player, make a row and add the data
	for (let key in results) {
		if (results.hasOwnProperty(key)) {
			resultsHtml += 
				`<tr>
					<th>${count}</th>
					<td>${key}</td>
					<td>${results[key][0]}</td>
					<td>
						<a href='#${count}' data-toggle='collapse'>${results[key][1][1].toFixed(2)}</a>
					</td>
				</tr>
				<tr id=${count} class='collapse text-center'>
					<td colspan='4'><b>Placements:</b> ${results[key][1][0].filter((z) => z)}</td>
				</tr>`;
		}
		count++;
	}
	resultsHtml += `</tbody></table>`;
	document.getElementById('results').innerHTML = resultsHtml;
}