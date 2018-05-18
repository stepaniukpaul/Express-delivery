$(document).ready(function(){
	$('.news__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: '<button type="button" class="slick-next"><img src="img/r-arrow.png" alt="Далее"></button>',
		prevArrow: '<button type="button" class="slick-prev"><img src="img/l-arrow.png" alt="Назад"></button>'
	});

	// $('body').on('DOMContentLoaded', function(){
	// 	var telHtml = $('#pic').html();
	// 	var i = telHtml.index(' ');
	// 	console.log(telHtml, i)
	// 	if (i){
	// 		telHtml = telHtml.slice(0, i) + '<span class="red">' + telHtml.slice(i+1) + '</span>'
	// 	}
	// });

	function load( html ){
		var telHtml = html.html();
		var i = telHtml.indexOf(')');

		if (i){
			telHtml = telHtml.slice(0, i+1) + ' ' + '<span class="red">' + telHtml.slice(i+1) + '</span>'
		}
		html.html(telHtml)
	}

	load($('.contact-box__tel'));

});
// function highlight(text) {
//   var inputText = document.getElementById("inputText");
//   var innerHTML = inputText.innerHTML;
//   var index = innerHTML.indexOf(text);
//   if (index >= 0) { 
//    innerHTML = innerHTML.substring(0,index) + "<span class='red'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
//    inputText.innerHTML = innerHTML;
//   }
// }