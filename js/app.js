
/* global $, altert, console */
$(function () {


  'use strict';

  //header height
  var myH =$('.header');

  myH.height($(window).height());

  $(window).resize(function () {

    myH.height($(window).height());

  });

  //main Active

  $('.main li a').click(function () {

   $(this).parent().addClass('active').siblings().removeClass('active');

  });

   $('.main li a').click(function () {

     $('html, body').animate({

       scrollTop: $('#' + $(this).data('val')).offset().top

     }, 1000);


  });

});
