// Testimonial
$(document).ready(function(){
	let current = 0;
	const slides = $('.testimonial-slide');
	const dots = $('.testimonial-dots .dot');
	function showSlide(idx) {
		slides.removeClass('active');
		dots.removeClass('active');
		slides.eq(idx).addClass('active');
		dots.eq(idx).addClass('active');
		current = idx;
	}
	function nextSlide() {
		let next = (current + 1) % slides.length;
		showSlide(next);
	}
	let interval = setInterval(nextSlide, 3500);
	dots.click(function(){
		clearInterval(interval);
		showSlide($(this).data('index'));
		interval = setInterval(nextSlide, 3500);
	});
});


	// toggle menu
$(document).ready(function(){
	$(".toggle_icon").click(function(){
		$(".toggle_menu").slideToggle('slow');
	})
})
