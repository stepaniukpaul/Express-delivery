$(document).ready(function(){

	/* ---Slider--- */
	$('.news__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: '<button type="button" class="slick-next"><img src="img/r-arrow.png" alt="Далее"></button>',
		prevArrow: '<button type="button" class="slick-prev"><img src="img/l-arrow.png" alt="Назад"></button>'
	});
    /* ---Slider end--- */

    /* ---"Red"phone function--- */
	function load( html ){
		var telHtml = html.html();
		var i = telHtml.indexOf(')');

		if (i){
			telHtml = telHtml.slice(0, i+1) + ' ' + '<span class="red">' + telHtml.slice(i+1) + '</span>'
		}
		html.html(telHtml)
	}

    $('.contact-box__tel').each(function () {
        load($(this));
    })
    /* ---"Red"phone function end--- */

    /* ---Private page Tabs--- */
	//Function for tab
	$('.private__leftside li').on('click', function (e) {
		e.preventDefault();

		var dataTab = $(this).attr('data-tab');
        allTabHide();
        forAllLiTabRemoveActive();
        $(dataTab).show().addClass('active');
        $(this).addClass('active');
    });

	//Function forAllTabsHide
	function allTabHide() {
		$('.privat__oo').hide();
		$('.privat__mo').hide();
		$('.privat__mn').hide();
		$('.privat__io').hide();
		$('.privat__ld').hide();
    };

    allTabHide();
    $('.privat__oo').show().addClass('active');

    
    //Function forAllLiTabRemoveActive
	
	function forAllLiTabRemoveActive() {
		$('.private__leftside li').each(function () {
			$(this).removeClass('active')
        })
    };

    /* ---Private page Tabs end--- */





});
