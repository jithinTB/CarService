// JavaScript Document

$(document).ready(function(){
	$("#t2").click(function(){
		$(".t2").show();
		$(".t1").hide();
	});
});

$(document).ready(function(){
	$(".toggle_icon").click(function(){
		$(".toggle_menu").slideToggle('slow');
	})
})
