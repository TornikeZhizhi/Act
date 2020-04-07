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




 $(document).ready(function(){
 var url = window.location.href
  if (document.getElementById("share")) {
    document.getElementById("share").setAttribute("data-href",url)
  }
    
 })






