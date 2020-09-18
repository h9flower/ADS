$(document).ready(function(){

$('.sliders').slick({
infinite:true,
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 2000,
prevArrow: "<img src='img/arrow-left.png' class='prev' alt='1'>",
nextArrow: "<img src='img/arrow-right.png' class='next' alt='2'>",
responsive:[
{
    breakpoint: 900,
    settings: {
    prevArrow:false,
    nextArrow:false,
    }
}
]
});
$('.rewiews_items').slick({
infinite:true,
dots:true,
slidesToShow: 3,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 3000,
responsive:[
{
    breakpoint: 1230,
    settings: {
    slidesToShow: 2,
    }
},{
	breakpoint: 900,
    settings: {
    slidesToShow: 1,
    }
}
]
});
});


(function() {
  var body = document.body;
  var burgerMenu = document.getElementsByClassName('b-menu')[0];
  var burgerContain = document.getElementsByClassName('b-container')[0];
  var burgerNav = document.getElementsByClassName('b-nav')[0];

  burgerMenu.addEventListener('click', function toggleClasses() {
    [body, burgerContain, burgerNav].forEach(function (el) {
      el.classList.toggle('open');
    });
  }, false);
})();

function active(btn) {
  elements = document.getElementsByClassName("active-btn")
  Array.from(elements).forEach((el) => el.classList.remove("active-btn"))
  btn.classList.toggle("active-btn")
}