$(document).ready(function(){
	var first = $('.slider'),
		second = $('div');

	first.click(function(){
		second.slideToggle();
	});
});