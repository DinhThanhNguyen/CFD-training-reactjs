"use strict";

function homePage() {
  function teamSlider() {
    var $carousel = $(".homepage .section-4 .list").flickity({
      contain: true,
      wrapAround: true,
      autoPlay: true
    });
  }

  teamSlider();
}

function profilePage() {
  function profileTabClick() {
    $('.profile .tab-title a').on('click', function (e) {
      e.preventDefault();
      var i = $(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      $('.profile .tab-content > *:eq(' + i + ')').css({
        display: 'block'
      }).siblings().css({
        display: 'none'
      });
    });
  }

  profileTabClick();
}

function coursePage() {
  function courseDetailAccordion() {
    $('.accordion .title').on('click', function (e) {
      e.preventDefault();
      $(this).closest('.accordion').addClass('.active').siblings('.accordion').removeClass('active');
      $(this).next().slideToggle(200);
      $(this).closest('.accordion').siblings('.accordion').find('.content').slideUp(200);
    });
  }

  courseDetailAccordion();
}

$(document).ready(function () {
  homePage();
  profilePage();
  coursePage();
});