$(document).ready(function () {
	$('.validate-numeric').live('paste keydown keyup', function () {
		var str = $(this).val();
		if (str.indexOf(',') !== -1) {
			$(this).val(str.replace(/\,/, '.'));
		}		
		var reg = /^\d{0,}(\,|\.){0,1}\d{0,2}$/;		
		if (str.match(reg) === null) {
			var numeric = parseFloat(str);
			if (isNaN(numeric)) {
				$(this).val('');
			} else if (numeric % 1 === 0) {
				$(this).val(numeric);	
			} else {
				$(this).val(numeric.toFixed(3).slice(0, -1));
			}			
		}
	}); 
});