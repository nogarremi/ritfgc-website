$(document).ready(function(){
	getScores();
});
$('#semester').on('change', function(){
	$('#game').html('');
	if ($('#semester').val() == 6) {
		$("#game").append("<option value='3'>BBCF</option>");
		$("#game").append("<option value='12'>GGST</option>");
		$("#game").append("<option value='13'>MBTL</option>");
	}
	else if ($('#semester').val() == 5) {
		$("#game").append("<option value='3'>BBCF</option>");
		$("#game").append("<option value='10'>UNICLR</option>");
		$("#game").append("<option value='11'>GG+R</option>");
	}
	else if ($('#semester').val() == 4) {
		$("#game").append("<option value='3'>BBCF</option>");
		$("#game").append("<option value='10'>UNICLR</option>");
		$("#game").append("<option value='4'>REV2</option>");
	}
	else if ($('#semester').val() == 3) {
		$("#game").append("<option value='5'>UNI</option>");
		$("#game").append("<option value='3'>BBCF</option>");
		$("#game").append("<option value='9'>GBVS</option>");
	}
	else if ($('#semester').val() == 2) {
		$("#game").append("<option value='1'>T7</option>");
		$("#game").append("<option value='3'>BBCF</option>");
		$("#game").append("<option value='5'>UNI</option>");
	}
	else if ($('#semester').val() == 1) {
		$("#game").append("<option value='1'>T7</option>");
		$("#game").append("<option value='3'>BBCF</option>");
		$("#game").append("<option value='2'>SFV</option>");
	}
	getScores();
});