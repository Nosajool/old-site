function hideAll(){
	$('#post-list').hide();
	$('#about').hide();
}

function hideRmAnimation(){
	$('#' + active).hide().removeClass("bounceIn");
}
var active = "main";
$(document).ready(function(){
	hideAll();

	$('#blog-button').click(function(){
		hideRmAnimation();
		active = "post-list";
		$('#post-list').show().addClass("bounceIn");
	});

	$('#about-me-button').click(function(){
		hideRmAnimation();
		active = "about";
		$('#about').show().addClass("bounceIn");
	});
});