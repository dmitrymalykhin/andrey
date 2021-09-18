$(window).scroll(function () {
      if ($(this).scrollTop() > 10) {
        $("body").addClass("scroll-desktop-menu")
      } else {
        $("body").removeClass("scroll-desktop-menu")
      }
});

/*
//burger
const btnBurger = document.getElementById('hamburger');

btnBurger.addEventListener('click', function() {
	if (document.body.classList.contains("hamburger-active")) {
		closeBurger ();
	} else {
		openBurger ();
	}
})

function closeBurger () {
	document.body.classList.remove('hamburger-active');
}

function openBurger () {
	document.body.classList.add('hamburger-active');
}
//End burger
*/
$('.m-menu-list-item a').on('click', function(){ 
	if (document.body.classList.contains("hamburger-active")) {
		closeBurger ();
	} else {
		openBurger ();
	}
});

$('.open-modal').click(function(){
	let modalEl = $(this).data('modal');
	$('div[data-modal="'+modalEl+'"]').addClass('active');
	$('div[data-modal="'+modalEl+'"]').find('.modal').addClass('active');
});

$('.close-modal').click(function(){
	$(this).parents('.modal').removeClass('active');
	$(this).parents('.modal-overlay').removeClass('active');
});
$(document).click(function (e) {
	if ($(e.target).is('.modal-overlay')) {
		$(e.target).removeClass('active');
		$(e.target).find('.modal').removeClass('active');
	}
});
