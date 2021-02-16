$(document).on('ready', function () {
    // INITIALIZATION OF HEADER
    // =======================================================
    var header = new HSHeader($('#header')).init();


    // INITIALIZATION OF MEGA MENU
    // =======================================================
    var megaMenu = new HSMegaMenu($('.js-mega-menu')).init();


    // INITIALIZATION OF UNFOLD
    // =======================================================
    var unfold = new HSUnfold('.js-hs-unfold-invoker').init();


    // INITIALIZATION OF SCROLL NAV
    // =======================================================
    var isClosed = false;

    $('.js-scroll-nav').each(function () {
      var scrollNav = new HSScrollNav($(this), {
        beforeShow: function () {
          if (window.innerWidth < 768) {
            $('#navBar').collapse('hide').on('hidden.bs.collapse', function () {
              isClosed = true;
            });
          } else {
            isClosed = true;
          }

          return isClosed;
        },
        afterShow: function () {
          isClosed = false;
        }
      }).init();
    });


    // INITIALIZATION OF FANCYBOX
    // =======================================================
    $('.js-fancybox').each(function () {
      var fancybox = $.HSCore.components.HSFancyBox.init($(this));
    });


    // INITIALIZATION OF STICKY BLOCKS
    // =======================================================
    $('.js-sticky-block').each(function () {
      var stickyBlock = new HSStickyBlock($(this)).init();
    });


    // INITIALIZATION OF SLICK CAROUSEL
    // =======================================================
    $('.js-slick-carousel').each(function() {
      var slickCarousel = $.HSCore.components.HSSlickCarousel.init($(this));
    });


    // INITIALIZATION OF VIDEO PLAYER
    // =======================================================
    $('.js-inline-video-player').each(function () {
      var videoPlayer = new HSVideoPlayer($(this)).init();
    });


    // INITIALIZATION OF AOS
    // =======================================================
    AOS.init({
      duration: 650,
      once: true
    });


    // INITIALIZATION OF GO TO
    // =======================================================
    $('.js-go-to').each(function () {
      var goTo = new HSGoTo($(this)).init();
    });
  });