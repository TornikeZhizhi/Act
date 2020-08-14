$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  speed:1000,
  autoplay: true,
  autoplaySpeed: 3000,
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

if ($("#myInput1").length > 0) {
	document.querySelector('.custom-file-input').addEventListener('change',function(e){
  var fileName = document.getElementById("myInput1").files[0].name;
  var nextSibling = e.target.nextElementSibling
  nextSibling.innerText = fileName
})


}

$(".review-section h2").on("click",function(){

  $(this).parent().next().slideToggle()
})
 



$(document).on('input',"#email", function(e){


    var alpabet = [
         {'@': '@'},
        {'ქ': 'q'},
        {'წ': 'w'},
        {'ე': 'e'},
        {'რ': 'r'},
        {'ტ': 't'},
        {'ყ': 'y'},
        {'უ': 'u'},
        {'ი': 'i'},
        {'ო': 'o'},
        {'პ': 'p'},
        {'ა': 'a'},
        {'ს': 's'},
        {'დ': 'd'},
        {'ფ': 'f'},
        {'გ': 'g'},
        {'ჰ': 'h'},
        {'ჯ': 'j'},
        {'კ': 'k'},
        {'ლ': 'l'},
        {'ზ': 'z'},
        {'ხ': 'x'},
        {'ც': 'c'},
        {'ვ': 'v'},
        {'ბ': 'b'},
        {'ნ': 'n'},
        {'მ': 'm'},
        {'й': 'q'},
        {'ц': 'w'},
        {'у': 'e'},
        {'к': 'r'},
        {'е': 't'},
        {'н': 'y'},
        {'г': 'u'},
        {'ш': 'i'},
        {'щ': 'o'},
        {'з': 'p'},
        {'ф': 'a'},
        {'ы': 's'},
        {'в': 'd'},
        {'а': 'f'},
        {'п': 'g'},
        {'р': 'h'},
        {'о': 'j'},
        {'л': 'k'},
        {'д': 'l'},
        {'я': 'z'},
        {'ч': 'x'},
        {'с': 'c'},
        {'м': 'v'},
        {'и': 'b'},
        {'ть': 'n'},
        {'ь': 'm'}
 
   ]


  
    var valueBefore =  [...e.target.value.split('')]
 
    valueBefore = valueBefore.map(el => {
      alpabet.map((lette, i) => {
        if(lette.hasOwnProperty(el)){
          el = lette[el]
        }
      })
      return el 
    })
    this.value = valueBefore.join('')

   })

$(document).on("click",function(){
   $(".dropdown").slideUp()
   $(".nav_dropdown").removeClass("active")
})
$(".nav_dropdown").click(function(e){
  e.preventDefault()
  e.stopPropagation()
  $(this).toggleClass("active")
    $(".dropdown").slideToggle()
})

$(".dropdown").click(function(e){
  e.stopPropagation()
})


$(".dropdown-menu").click(function (e) {
  e.stopPropagation()
})

if ($(window).width() > 992) {
  

var $headerCont = $("header");
// var $subHeader = $(".sub-header");
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    $headerCont.removeClass("sticky");
  } else {
    $headerCont.addClass("sticky");
  }

  prevScrollpos = currentScrollPos;
};
}



var quantity = [Number($(".about_tabs_box").eq(0).find("span").attr("data-id")),
Number($(".about_tabs_box").eq(1).find("span").attr("data-id"))];

    var tabOffsetx = $(".about_tabs_fluid");

    if(tabOffsetx.length){

      var offset = tabOffsetx.offset().top;
      var windowHeight = $(window).height()/1.1;

      if ($(window).scrollTop() > offset - windowHeight) {

          $(".about_tabs_box").each(function(index){
            var x = 0;
            var k = setInterval(function(){
            if (x == quantity[index] || x >= quantity[index] ) {
              clearInterval(k)
              x = quantity[index]
            }
            $(".about_tabs_box span").eq(index).text(x)
            x+=2;
          },1/100);
          })
      }else {

          $(window).on("scroll",function(){

          var sc = $(window).scrollTop()
          console.log(sc)
          if (sc > (offset + 200) - windowHeight) {
            $(".about_tabs_box").each(function(index){
              var x = 0;
              var k = setInterval(function(){
              if (x == quantity[index] || x >= quantity[index]) {
                clearInterval(k)
                x = quantity[index]
              }
              $(".about_tabs_box span").eq(index).text(x)
              x+=2;
            },1/100);
            })

            $(window).off("scroll");
         }

      })
    }

  }

   $('.fq_title').click(function () {


        // $(".fq_title").not(this).find(".down-arrow").removeClass("rotate")
        $(".fq_title").not(this).next(".anwser_box").slideUp()
        $(".fq_title").not(this).removeClass('active')

        // $(this).find($('.down-arrow')).toggleClass('rotate');
        $(this).next('.anwser_box').slideToggle();
        $(this).toggleClass('active');
    })
   

var textReview = true   
$(".reviews_readmore").click(function(){
  
  $(this).parent().find(".reviews_text").toggleClass("show");
  $(this).toggleClass("show")


})

$('#menu-toggle').click(function(){
  $(this).toggleClass('open');
  $(".header_bottom").slideToggle()
})


