function playerDimensions(myPlayer){
	var player = $(myPlayer)
		playerWidth = player.width(),
		windowWidth = $(window).width(),
		playerHeight = player.height(),
		windowHeight = $(window).height(),
		offsetX = (windowWidth - playerWidth) / 2,
		offsetY = (windowHeight - playerHeight) / 2;

	player.css({
			'left': offsetX,
			'top': offsetY
	});	
}

$(document).ready(function(){
	var button = $('.pressPlay'),
		overlay = $('.overlay'),
		player = $('.player');
		

	button.click(function(event){
		event.preventDefault();
		overlay.fadeIn();
		player.fadeIn();
		playerDimensions(player);
		$("#jquery_jplayer_1").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				title: "Big Buck Bunny Trailer",
				m4v: "http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
				ogv: "http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
				webmv: "http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm",
				poster: "http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
			});
		},
		play: function() { // To avoid multiple jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		swfPath: "../../dist/jplayer",
		supplied: "webmv, ogv, m4v",
		globalVolume: true,
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});
		
		});

	overlay.click(function(){
		$(this).fadeOut();
		player.fadeOut();

		$('#jquery_jplayer_1').jPlayer('destroy');
	});

	$(window).resize(function(){
		playerDimensions(player);
	});

});