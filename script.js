$(document).ready(function() {
  $(".main-page__slider").slick({
    lazyLoad: "ondemand",
    slidesToShow: 4,
    slidesToScroll: 1,
    // variableWidth: true,
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true
    // prevArrow: '<img src="img/arrow.svg">',
    // nextArrow: '<img src="img/arrow-1.svg">'
    // centerMode: true
  });
});
