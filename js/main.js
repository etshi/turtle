$(document).ready(function(){
  $('#gallery').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '#gallery-thumbnails'
  });
  $('#gallery-thumbnails').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '#gallery',
        focusOnSelect: true,
        centerMode: true
    });
})
