// $('.menu1').on('click', function() {
//     $(".submenu").addClass("clicked");
//     });

$('.menu1').on('click', function (e) {
  e.preventDefault();
  $(this).parent().toggleClass('clicked');
});

$('.menu2').on('click', function (e) {
  e.preventDefault();
  $(this).parent().toggleClass('clicked');
});

$('.menu3').on('click', function (e) {
  e.preventDefault();
  $(this).parent().toggleClass('clicked');
});

$('.menu4').on('click', function (e) {
  e.preventDefault();
  $(this).parent().toggleClass('clicked');
});

$('.menu5').on('click', function (e) {
  e.preventDefault();
  $(this).parent().toggleClass('clicked');
});
