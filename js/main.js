$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  speed:1000,
  prevArrow: $(".arrow_left"),
    nextArrow: $(".arrow_right")

});

var Sliderlength = $(".slider-for figure").not(".slick-cloned").length
var current1 = 0;
var current2 = 0;
 var activeSource = Number($(".slider-for figure.slick-active").not(".slick-cloned").attr("data-slick-index"))


if (activeSource == 0) {

	current1 = Sliderlength -1
	current2 = 1
	$("#imgleft").attr("src",$(".slider-for").find(`[data-slick-index='${current1}']`).find("img").attr("src"))
	$("#imgright").attr("src",$(".slider-for").find(`[data-slick-index='${current2}']`).find("img").attr("src"))

}
else if(activeSource == Sliderlength - 1) {
	current1 = activeSource -1
	current2 = 0
	$("#imgleft").attr("src",$(".slider-for").find(`[data-slick-index='${current1}']`).find("img").attr("src"))
	$("#imgright").attr("src",$(".slider-for").find(`[data-slick-index='${current2}']`).find("img").attr("src"))
}

else {
	current1 = activeSource -1
	current2 = activeSource + 1
	$("#imgleft").attr("src",$(".slider-for").find(`[data-slick-index='${current1}']`).find("img").attr("src"))

	$("#imgright").attr("src",$(".slider-for").find(`[data-slick-index='${current2}']`).find("img").attr("src"))

}

$(".slider-for").on('afterChange', function(event, slick, currentSlide) {
  var activeSource = Number($(".slider-for figure.slick-active").not(".slick-cloned").attr("data-slick-index"))

if (activeSource == 0) {

	current1 = Sliderlength -1
	current2 = 1
	$("#imgleft").attr("src",$(".slider-for").find(`[data-slick-index='${current1}']`).find("img").attr("src"))
	$("#imgright").attr("src",$(".slider-for").find(`[data-slick-index='${current2}']`).find("img").attr("src"))

}
else if(activeSource == Sliderlength - 1) {
	current1 = activeSource -1
	current2 = 0
	$("#imgleft").attr("src",$(".slider-for").find(`[data-slick-index='${current1}']`).find("img").attr("src"))
	$("#imgright").attr("src",$(".slider-for").find(`[data-slick-index='${current2}']`).find("img").attr("src"))
}

else {
	current1 = activeSource -1
	current2 = activeSource + 1
	$("#imgleft").attr("src",$(".slider-for").find(`[data-slick-index='${current1}']`).find("img").attr("src"))

	$("#imgright").attr("src",$(".slider-for").find(`[data-slick-index='${current2}']`).find("img").attr("src"))

}
});



