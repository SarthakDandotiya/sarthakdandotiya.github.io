$(document).on("mousemove", function(e) {
	$(".pointer").css({
		left: e.pageX,
		top: e.pageY - $(document).scrollTop()
	});
	$(".clickable").on("mouseenter", function(e) {
		$(".pointer").addClass("clicker", 200);
	});
	$(".clickable").on("mouseleave", function(e) {
		$(".pointer").removeClass("clicker");
	});
	$(".clickable").on("mousedown", function(e) {
		$(".pointer").addClass("mouse-down");
	});
	$(".clickable").on("mouseup", function(e) {
		$(".pointer").removeClass("mouse-down");
	});
});
$(document).on("mousemove", function(e) {
	$(".pointer-b").css({
		left: e.pageX,
		top: e.pageY - $(document).scrollTop()
	});
	$(".clickable").on("mouseenter", function(e) {
		$(".pointer-b")
			.css("display", "none")
			.setTimeout(1000);
	});
	$(".clickable").on("mouseleave", function(e) {
		$(".pointer-b").css({
			display: "block"
		});
	});
	// $(".clickable").on("mousedown", function(e) {
	// 	$(".pointer-b").addClass("mouse-down");
	// });
	// $(".clickable").on("mouseup", function(e) {
	// 	$(".pointer-b").removeClass("mouse-down");
	// });
});
