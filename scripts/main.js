// Navbar
$(document).on("scroll", function(e) {
	$(".menu").css({
		top: parseInt($("body").scrollTop()) + "px"
	});
});
// Navbar Animations
var t1 = new TimelineMax({ paused: true });

t1.to(".one", 0.5, {
	y: 6,
	rotation: 45,
	ease: Expo.easeInOut
});
t1.to(".two", 0.5, {
	y: -6,
	rotation: -45,
	ease: Expo.easeInOut,
	delay: -0.5
});

t1.to(".menu", 1.5, {
	// top: 100 % +$(document).scrollTop(),
	left: "0%",
	ease: Expo.easeInOut,
	delay: -0.5
});

t1.staggerFrom(
	".menu ul li",
	0.75,
	{ x: -30, opacity: 0, ease: Expo.easeOut },
	0.1
);

t1.reverse();
$(document).on("click", ".toggle-btn", function() {
	t1.reversed(!t1.reversed());
});
$(document).on("click", "ul li a", function() {
	t1.reversed(!t1.reversed());
});

//Fixing & Preventing Scrolling Behing Open Menu
function lockScroll() {
	if ($("body").hasClass("lock-scroll")) {
		$("body").removeClass("lock-scroll");
	} else {
		$("body").addClass("lock-scroll");
	}
}
// var offset = $(":target").offset();
// var scrollto = offset.top + 110; // minus fixed header height
// $("html, body").animate({ scrollTop: scrollto }, 0);
// $(function() {
// 	var $window = $(window); //Window object

// 	var scrollTime = 1; //Scroll time
// 	var scrollDistance = 1700; //Distance. Use smaller value for shorter scroll and greater value for longer scroll

// 	$window.on("mousewheel", function(event) {
// 		event.preventDefault();

// 		var delta =
// 			event.originalEvent.wheelDelta / 120 ||
// 			-event.originalEvent.detail / 3;
// 		var scrollTop = $window.scrollTop();
// 		var finalScroll = scrollTop - parseInt(delta * scrollDistance);

// 		TweenMax.to($window, scrollTime, {
// 			scrollTo: { y: finalScroll, autoKill: true },
// 			ease: Power0.easeNone, //For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
// 			autoKill: true,
// 			overwrite: 5
// 		});
// 	});
// });
