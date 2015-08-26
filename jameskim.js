$("document").ready(function(){
/**********
NAV-BAR
**********/
//smooth scroll
	$('a[href*=#]').bind('click', function(evt) {
	evt.preventDefault();
	var target = $(this).attr("href");
	$('html, body').stop().animate({ 
		scrollTop: $(target).offset().top
		}, 1000, function() {
			location.hash = target;
	});	
	return false;
});

  // $('a[href*=#]:not([href=#])').click(function() {
  //   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  //     if (target.length) {
  //       $('html,body').animate({
  //         scrollTop: target.offset().top
  //       }, 1000);
  //       return false;
  //     }
  //   }
  // });

/**********
ABOUT
**********/
//about-me click functions
	var about = $("#about-me-button");
	about.click(function(){
		var html = '<h1 class = "rollIn animated">About Me....</h1>'
		html += '<p class = "rollIn animated">I am a Bay Area (Silicon Valley) native.  Born in San Jose, Ca and raised in the East and South Bay.  I was in the United States Marine Corps for four years and did two Combat Tours in Afghanitsan.  Now I am pursuing a career in the Tech Industry as a Front End Developer and Entrepreneur.</p>'
		html += '<p class = "rollIn animated">Skill Sets: <br> HTML | CSS | JavaScript</p>'
		html += '<p class = "rollIn animated">Tools: <br> Foundation | BootStrap | JQuery | Ajax</p>'
		$(".display").html(html);
	})

//story click button
	var story = $("#story-button");
	story.click(function(){
		var html = "<h1 class = 'rollIn animated'>Story...</h1>";
		html += "<p class = 'lead rollIn animated'>I served for the United States Marine Corps for four years and did two Combat Deployments with 3d Battalion 3d Marines, in support of Operation Enduring Freedom (OEF) 10-1 and OEF 11-2. <br> <br> I decided to get into Tech when I got out of the Marine Corps in the year of 2013 and got into Web Development begining of 2015. <br> <br> When I'm not coding I usually: Hit the trails with my mountain bike, go out and be social, and play with my dog, Rocky.</p>";
		$(".display").html(html);

	})

//goals click function
	var goals = $("#goals-button");
	goals.click(function(){
		var html = "<h1 class = 'rollIn animated'>My Goals...</h1>";
		html += "<p class = 'lead rollIn animated'>Immediate Goals: Is to gather up as much knowledge I can in Web Developing Industry</p>";
		html += "<p class = 'lead rollIn animated'>Short Term Goals: To be in an expert and to lead a team as Front End and or Back End</p>";
		html += "<p class = 'lead rollIn animated'>Long Term Goals: Changing the World with intuitive designs</p>";
		$(".display").html(html);
	})

	$(".about").on(function(){
		console.log("water")
	})

/**********
PORTFOLIO
**********/	
//function for automatic height adjustment
var portfolio = $(".portfolio");
	function changeContent() {
    var currentHeight = portfolio.height();
    var newHeightSet = parseFloat(450);
    portfolio.animate({height: newHeightSet}, 1000, function() {
        portfolio.height("auto");
    });
}
var jsApps = $(".js-apps")
	function changeHeight() {
    var currentHeight = jsApps.height();
    var newHeightSet = parseFloat(0);
    portfolio.animate({height: newHeightSet}, 1000, function() {
        portfolio.height("auto");
    });
}

//button all show every projects
var zoomIn = "zoomIn animated";
	$("#all-button").click(function(){
		$(".js-apps").removeClass(zoomIn);
		$(".js-apps").show();
		$(".js-apps").addClass(zoomIn);
		$(".websites").removeClass(zoomIn);
		$(".websites").show();
		$(".websites").addClass(zoomIn);
	});

//js app button to show js app projects
	$("#js-apps-button").click(function(){
		$(".js-apps").removeClass(zoomIn);
		$(".websites").removeClass(zoomIn)
		$(".websites").hide(0);
		$(".js-apps").show();
		$(".js-apps").addClass(zoomIn);
	});

//websites button to show websites
	$("#website-button").click(function(){
		$(".websites").removeClass(zoomIn);
		$(".js-apps").removeClass(zoomIn)
		$(".js-apps").hide(0);
		$(".websites").show();
		$(".websites").addClass(zoomIn)
	});

//active state on buttons
	$(".group-buttons").click(function(){
		$(".group-buttons").removeClass("active");
		$(this).addClass("active");
	});


/**********
CONTACT
**********/
//slide button function
// $("#contact-main, #contact-main li, .submit-button").hide();
// 	$(".slide-button").click(function(){
// 		$("#contact-main, #contact-main li, .submit-button").slideToggle(800);
// 		$(".arrow").toggleClass("fa-arrow-down");
// 		$(".arrow").toggleClass("fa-arrow-up");
// 	});

 });//end of ready function