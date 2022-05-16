jQuery(document).ready(function ($) {

    $(".language__chosen").click(function(){
        $(this).toggleClass("active");
        $(this).parent().find('.languages__list').toggleClass("active");
    });

    $(".languages__item").click(function(){
        $('.languages__item').removeClass("active");
        $(this).addClass("active");
        var language = $(this).attr('data-language');
        $('#language_chosen').text(language);
    });

    $(window).scroll(function() {	
		if ($(this).scrollTop()>=100) {
		    $('.header').addClass('active')
		}
		else {
		    $('.header').removeClass('active');
		}	
    });

    $(".burger, .mobile-menu__close").click(function(){
        $('.mobile-menu').toggleClass("active");
    });

});