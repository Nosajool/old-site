// Jason Loo

function hideAll(){
	$('#post-list').hide();
	$('#about').hide();
	$('#projects').hide();
}

function hideRmAnimation(){
	$('#' + active).hide().removeClass("zoomIn");
}
var active = "main";
$(document).ready(function(){
	hideAll();
});

$('#sidebar-wrapper').draggable({ 
	axis: "x",
	handle: ".sidebar-handle-hitbox",
	containment: "parent",
	drag: function(event, ui){
		$('#page-content-wrapper').css({'margin-left' : ui.position.left });
	}
 });

$('#blog-button').click(function(){
	hideRmAnimation();
	active = "post-list";
	$('#post-list').show().addClass("zoomIn");
});

$('#about-me-button').click(function(){
	hideRmAnimation();
	active = "about";
	$('#about').show().addClass("zoomIn");
});

$('#projects-button').click(function(){
	hideRmAnimation();
	active = "projects";
	$('#projects').show().addClass("zoomIn");
});