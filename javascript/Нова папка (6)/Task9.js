$(document).ready(function(){
	var infoValue = 'Type Here';
	$('#myInput').click(function(){
		$(this).val(infoValue);
		$(this).addClass('clicked');
	});
	$('#myInput').keydown(function(){
     if($(this).val() == infoValue)
      { 
        $(this).val('');
    }
	});
	$('#myInput').blur(function(){
		if($(this).val() == '') {
		$(this).val(infoValue);
		} 
		else {
			$(this).val();
		}
	});
});
