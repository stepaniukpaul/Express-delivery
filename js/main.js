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




    /* ---Yandex map--- */

    // ymaps.ready(init);
    // var myMap,
    //     myPlacemark;
    //
    // function init(){
    //     myMap = new ymaps.Map("map", {
    //         center: [59.129558, 37.918355],
    //         zoom: 17
    //     });
    //
    //     myPlacemark = new ymaps.Placemark([55.76, 37.64], {
    //         hintContent: 'Москва!',
    //         balloonContent: 'Столица России'
    //     });
    //
    //
    //
    //     myMap.geoObjects.add(myPlacemark);
    //     myMap.behaviors.disable('scrollZoom')
    // }


    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [59.129558, 37.918355],
                zoom: 17,
                controls: []
            }, {
                searchControlProvider: 'yandex#search'
            });

        var myMap2 = new ymaps.Map('map2', {
            center: [59.129558, 37.918355],
            zoom: 17,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        });


            // Создаём макет содержимого.
            // MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            //     '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            // );

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'ул. К.Маркса, д. 78',
                balloonContent: 'ул. К.Маркса, д. 78',
                iconCaption: 'ул. К.Маркса, д. 78'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/mark.png',
                // Размеры метки.
                iconImageSize: [44, 60],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-20, -60],
            });

        myPlacemark2 = new ymaps.Placemark(myMap2.getCenter(), {
            hintContent: 'ул. К.Маркса, д. 78',
            balloonContent: 'ул. К.Маркса, д. 78',
            iconCaption: 'ул. К.Маркса, д. 78'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            // iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/mark.png',
            // Размеры метки.
            iconImageSize: [44, 60],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -60],
        })

        	myMap.geoObjects.add(myPlacemark);
       		myMap.behaviors.disable('scrollZoom')

			myMap2.geoObjects.add(myPlacemark2);
			myMap2.behaviors.disable('scrollZoom')
            // .add(myPlacemarkWithContent);
	});


});
