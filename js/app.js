var windowWidth = $(window).width();
$(document).ready(function() {
  $(".humburger, .grid-nav > ul > li:first-child").on("click", function(){
      windowWidth < 992 && (
          $('.grid-nav ul').toggleClass('show_menu'),
          $(".humburger").toggleClass("active_humburger"),
          $(".grid-nav > ul > li > i").next("ul").removeClass("show_iner_menu"), 
          $(".grid-nav").toggleClass("overlay")
      )
  }),
  $(".grid-nav > ul > li > i").on("click", function() {
      windowWidth < 992 && (
          $(this).next("ul").toggleClass("show_iner_menu"), 
          $(".grid-nav ul").toggleClass("overflow")
      )
  }), 
  $(".grid-nav > ul > li > ul > li:first-child").on("click", function() {
      windowWidth < 992 && 
      $(this).parent().removeClass("show_iner_menu")
  }),
  $(document).on("mouseup", function(e) {
      var o = $(".grid-nav ul");
      o.is(e.target) || 0 !== o.has(e.target).length || (
          $(".grid-nav ul").removeClass("show_menu"), 
          $(".humburger").removeClass("active_humburger"), 
          $(".grid-nav > ul > li > i").next("ul").removeClass("show_iner_menu"), 
          $(".grid-nav").removeClass("overlay"))
    })
})


$(document).ready(function() {
	$(".grid-nav ul li button").click(function(event) {
		$('.grid-nav ul').css({
			display: "none"
		});
		$('.grid-nav .form-wrap').css({
			display: "block"
		});
	});
});

$(document).ready(function(){
   $('.banner-page').slick({
      autoplay:true,
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade:true, /* ------------------ */ 
      cssEase: 'linear', /* ------------------ */ 
      arrows: true,
  })
});


$(document).ready(function() {
  
  setTimeout(function() {
    $('#ctn-preloader').addClass('loaded');
    $('body').removeClass('no-scroll-y');

    if ($('#ctn-preloader').hasClass('loaded')) {
      $('#preloader').delay(500).queue(function() {
        $(this).remove();
      });
    }
  }, 3000);
  
});

$(document).ready(function() {
  $(".various").fancybox({
    maxWidth  : '100%',
    maxHeight : 1000,
    fitToView : true,
    width   : '70%',
    height    : '70%',
    autoSize  : true,
    closeClick  : false,
    openEffect  : 'elastic',
    closeEffect : 'none'
  });
});

$(document).ready(function() {
//
// Choose Map 
//

  $('#basic').on("click", function() {
      $('.map-basic').addClass('active');
      
      $('.map-sat').removeClass('active');
  })

  $('#sat').on("click", function() {
      $('.map-sat').addClass('active');
      $('.map-basic').removeClass('active');
  })
})

$(document).ready(function() {
   $(".sb-post .sb-post-toggle a:first-child").click(function(event) {
       $("#sb-post").addClass('fade')
   });
});

$(document).ready(function(){
   $('.list-main').slick({
      autoplay:true,
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 2,
      cssEase: 'ease-in',
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            cssEase: 'ease-in',
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  })
});
