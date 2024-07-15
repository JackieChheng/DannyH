var $scroll = $('.sidebar');
$('.nav-item > a').each(function () {
   if ($(this).hasClass('active')) {
      $scroll.scrollTop($(this).position().top + $scroll.scrollTop())
   }
})