$(document).ready(function(){
	var newElement = $('.newPar'),
		newElement2 = $('.second');

	newElement2.click(function(){
		newElement2.after(newElement);
	});
});