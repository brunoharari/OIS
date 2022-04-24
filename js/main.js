(function ($) {
  "use strict";

  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: "scroll",
  });

  $(document).ready(function () {
    if ($("#accordion").length) {
      $("#accordion")
        .find(".accordion-toggle")
        .click(function () {
          if ($(this).hasClass("open")) {
            $(this).next().slideUp("fast");
            $(this).removeClass("open");
          } else {
            $(this).next().slideDown("fast");
            $(this).addClass("open");
            $(".accordion-content").not($(this).next()).slideUp("fast");
            $(".accordion-toggle").not($(this)).removeClass("open");
          }
        });
    }
  });

  $(document).ready(() => {
    $("#firstSection").hover(
      () => {
        $("#firstSection .content").fadeIn(500);
      },
      () => {
        $("#firstSection .content").fadeOut(100);
      }
    );

    $("#secondSection").hover(
      () => {
        $("#secondSection .content").fadeIn(500);
      },
      () => {
        $("#secondSection .content").fadeOut(100);
      }
    );

    $("#thirdSection").hover(
      () => {
        $("#thirdSection .content").fadeIn(500);
      },
      () => {
        $("#thirdSection .content").fadeOut(100);
      }
    );

    $("#fourthSection").hover(
      () => {
        $("#fourthSection .content").fadeIn(500);
      },
      () => {
        $("#fourthSection .content").fadeOut(100);
      }
    );
  });

  // Select all »a« elements with a parent class »links« and add a function that is executed on click
  $(".scrollTo").on("click", function (e) {
    // Define variable of the clicked »a« element (»this«) and get its href value.
    var href = $(this).attr("href");

    // Run a scroll animation to the position of the element which has the same id like the href value.
    $("html, body").animate(
      {
        scrollTop: $(href).offset().top - 100,
      },
      "300"
    );

    // Prevent the browser from showing the attribute name of the clicked link in the address bar
    e.preventDefault();
  });

  $(document).ready(function () {
    $(".navbar-toggler").click(function () {
      console.log("hola");
      $("#ftco-nav").slideToggle(300).toggleClass("show");
    });
  });

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  // loader
  var loader = function () {
    setTimeout(function () {
      if ($("#ftco-loader").length > 0) {
        $("#ftco-loader").removeClass("show");
      }
    }, 1);
  };
  loader();

  var carousel = function () {
    $(".carousel-testimony").owlCarousel({
      center: true,
      loop: true,
      autoplay: true,
      autoplaySpeed: 2000,
      items: 1,
      margin: 30,
      stagePadding: 0,
      nav: true,
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  };
  carousel();

  var carousel = function () {
    $(".carousel-products").owlCarousel({
      center: true,
      loop: true,
      autoplay: true,
      autoplaySpeed: 1500,
      items: 1,
      margin: 30,
      stagePadding: 0,
      nav: true,
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>",
      ], //['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  };
  carousel();

  $("nav .dropdown").hover(
    function () {
      var $this = $(this);
      // 	 timer;
      // clearTimeout(timer);
      $this.addClass("show");
      $this.find("> a").attr("aria-expanded", true);
      // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
      $this.find(".dropdown-menu").addClass("show");
    },
    function () {
      var $this = $(this);
      // timer;
      // timer = setTimeout(function(){
      $this.removeClass("show");
      $this.find("> a").attr("aria-expanded", false);
      // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
      $this.find(".dropdown-menu").removeClass("show");
      // }, 100);
    }
  );

  $("#dropdown04").on("show.bs.dropdown", function () {
    console.log("show");
  });

  // scroll
  var scrollWindow = function () {
    $(window).scroll(function () {
      var $w = $(this),
        st = $w.scrollTop(),
        navbar = $(".ftco_navbar"),
        sd = $(".js-scroll-wrap"),
        img = document.getElementById("logo");

      if (st > 150) {
        if (!navbar.hasClass("scrolled")) {
          navbar.addClass("scrolled");
          img.src = "../images/images/ois-logo.png";
        }
      }
      if (st < 150) {
        if (navbar.hasClass("scrolled")) {
          navbar.removeClass("scrolled sleep");
        }
      }
      if (st > 350) {
        if (!navbar.hasClass("awake")) {
          navbar.addClass("awake");
          img.src = "../../images/images/ois-logo-black.png";
        }

        if (sd.length > 0) {
          sd.addClass("sleep");
        }
      }
      if (st < 350) {
        if (navbar.hasClass("awake")) {
          navbar.removeClass("awake");
          navbar.addClass("sleep");
          img.src = "../../images/images/ois-logo.png";
        }
        if (sd.length > 0) {
          sd.removeClass("sleep");
        }
      }
    });
  };
  scrollWindow();

  var counter = function () {
    $("#section-counter, .wrap-about, .ftco-counter").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          var comma_separator_number_step =
            $.animateNumber.numberStepFactories.separator(",");
          $(".number").each(function () {
            var $this = $(this),
              num = $this.data("number");

            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step,
              },
              7000
            );
          });
        }
      },
      { offset: "95%" }
    );
  };
  counter();

  var contentWayPoint = function () {
    var i = 0;
    $(".ftco-animate").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .ftco-animate.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn ftco-animated");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft ftco-animated");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight ftco-animated");
                  } else {
                    el.addClass("fadeInUp ftco-animated");
                  }
                  el.removeClass("item-animate");
                },
                k * 50,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      },
      { offset: "95%" }
    );
  };
  contentWayPoint();

  $(document).scroll(function () {
    $(".load:not(.highlight)").each(function () {
      if (isScrolledIntoView(this)) {
        $(".load").removeClass("highlight");
        $(this).addClass("highlight");
        $("body").animate({ scrollTop: $(this).offset().top - 50 }, 1000);
        return;
      }
    });
  });

  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return elemTop <= docViewBottom && elemTop > docViewTop;
  }

  var loadingSections = function () {
    $(".load").waypoint(
      function (direction) {
        if (direction === "down") {
          $(this.element).addClass("section-animate");
        } else {
          $(this.element).removeClass("section-animate");
        }
      },
      { offset: "95%" }
    );
  };
  loadingSections();

  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });
})(jQuery);
