"use strict";

var nSite = function ($) {
  $(function () {
    $.scrollify({
      section: ".section",
      setHeights: false,
      scrollSpeed: 600,
      before: function before(index) {
        changeActiveState(index);
        changeColor(index);
        displayHideBackToTopBtn(index);
      },
      touchScroll: true,
      afterRender: function afterRender() {
        toggleScrollify();
      }
    });
  });
  /******************************************************************
      VARS
  ******************************************************************/

  var $nSite = $('.n_site');
  var $sections = $('.section');
  var $logo = $('.o_logo__img');
  var $scrollDownBtn = $('.h_site__scroll-down-btn');
  var $backToTopBtn = $('.o_back-to-top-btn');
  var $navItems;
  /******************************************************************
      EVENTS
  ******************************************************************/

  buildNav();
  $navItems.click(function () {
    handleNavClick($(this));
  });
  $(window).resize(function () {
    toggleScrollify();
  });
  $scrollDownBtn.click(function () {
    $.scrollify.next();
  });
  $backToTopBtn.click(function () {
    $.scrollify.move(0);
  });
  /******************************************************************
   FUNCTIONS
   ******************************************************************/

  function buildNav() {
    $.each($sections, function (index, section) {
      if (index == 0) {
        $nSite.append('<div class="n_site__nav-item n_site__nav-item--active" data-section-name="' + $(section).data("section-name") + '"><p class="n_site__nav-text">' + $(section).data("nav-name") + '</p></div>');
      } else {
        $nSite.append('<div class="n_site__nav-item" data-section-name="' + $(section).data("section-name") + '"><p class="n_site__nav-text">' + $(section).data("nav-name") + '</p></div>');
      }
    });
    $navItems = $('.n_site__nav-item');
  }

  function changeActiveState(index) {
    $(".n_site__nav-item--active").removeClass("n_site__nav-item--active");
    $navItems.eq(index).addClass("n_site__nav-item--active");
  }

  function changeColor(index) {
    if (index <= 1 || index == 3 || index >= 5) {
      $nSite.removeClass("n_site--black");
      $nSite.addClass("n_site--white");
      $logo.attr("src", "./assets/img/logo/logo_white.svg");
    } else {
      $nSite.removeClass("n_site--white");
      $nSite.addClass("n_site--black");
      $logo.attr("src", "./assets/img/logo/logo_black.svg");
    }

    if (index == 1 || index == 3 || index == 4) {
      $backToTopBtn.removeClass("o_back-to-top-btn--white");
      $backToTopBtn.addClass("o_back-to-top-btn--black");
    } else {
      $backToTopBtn.removeClass("o_back-to-top-btn--black");
      $backToTopBtn.addClass("o_back-to-top-btn--white");
    }
  }

  function displayHideBackToTopBtn(index) {
    if (index == 0) {
      $backToTopBtn.addClass("d-none");
    } else {
      $backToTopBtn.removeClass("d-none");
    }
  }

  function handleNavClick($clickedNav) {
    $.scrollify.move("#" + $clickedNav.data("section-name"));
  }

  function toggleScrollify() {
    if ($(window).width() >= 961) {
      $.scrollify.enable();
    } else {
      $.scrollify.disable();
    }
  }
  /******************************************************************
      PUBLIC_FUNCTIONS
  ******************************************************************/


  return {// your code here
  };
}(jQuery);