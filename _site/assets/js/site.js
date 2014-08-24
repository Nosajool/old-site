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

$('#main-button').click(function(){
	hideRmAnimation();
	active = "main";
	$('#main').show().addClass("zoomIn");
});

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $('#menu-toggle-icon').toggleClass("fa-chevron-left");
    $('#menu-toggle-icon').toggleClass("fa-chevron-right");
    $("#wrapper").toggleClass("toggled");
});