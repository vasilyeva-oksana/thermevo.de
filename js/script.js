function getInternetExplorerVersion()
{
  var rv = -1;
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  else if (navigator.appName == 'Netscape')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}

$(document).ready(function(){
  $('.scroll-pane').jScrollPane({showArrows: true, arrowScrollOnHover: true, wheelSpeed: 120, autoReinitialise: true});
  $(".show-filtr-catalog").click(function(){
    $(".filtr_radio_checkbox").slideToggle();
    return false;
  });
  if(getInternetExplorerVersion()!==-1){
    //alert("this ie");
    $("#video-bg > div > video").css("height", "auto").parent().css("background", "#000");
  } else {
    //alert("this not ie");

  }

  var showText = function (target, message, index, interval) {
    if (index < message.length) {
      $(target).append(message[index++]);
      setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
  }
  //showText("#video-bg .section .title span", "Schon", 0, 500);

  //$("#video-bg .section .title span").text().length.each(function( index, value ){
  //  alert(index);
  //  alert(value);
  //  //setTimeout(function () { showText(target, message, index, interval); }, 100);
  //});
  //var select_text = function (uw_it) { $("#video-bg .section .title span").find(".chart_"+uw_it).addClass("active"); };
  //
  //var uw_i = $("#video-bg .section .title > span").text().length;
  //
  //while (uw_i > 0) {
  //  var i = uw_i;
  //  setTimeout(function () {
  //    $("#video-bg .section .title span").find(".chart_"+uw_i).addClass("active");
  //  }, 1000*uw_i);
  //  uw_i--;
  //}
  setTimeout(function(){
    $("#video-bg .section .title span").find(".chart_5").addClass("active");
  }, 600);
  setTimeout(function(){
    $("#video-bg .section .title span").find(".chart_4").addClass("active");
  }, 700);
  setTimeout(function(){
    $("#video-bg .section .title span").find(".chart_3").addClass("active");
  }, 800);
  setTimeout(function(){
    $("#video-bg .section .title span").find(".chart_2").addClass("active");
  }, 900);
  setTimeout(function(){
    $("#video-bg .section .title span").find(".chart_1").addClass("active");
  }, 1000);
  setTimeout(function(){
    $("#video-bg .section .title span").html("");
    showText("#video-bg .section .title span", "Jetzt", 0, 250);
  }, 2000);


  /*show query */
  $(".query_wrap").not(".active").find(".reply").css("display", "none");
  $(".query_wrap").not(".active").addClass("active");
  $(".query_wrap .query").click(function(){
    //$(this).parent().toggleClass("active");
    $(this).parent().find(".reply").slideToggle("slow", function(){ });
    return false;
  });
  $(".query_wrap .reply .hide-btn").click(function(){
    //$(this).parent().parent().removeClass("active");
    $(this).parent().parent().find(".reply").slideToggle("slow", function(){
      $("this").parent().removeClass("active");
    });
    return false;
  });

  /*show filtr product*/
  $(".red-btn-link.show-filtr-product").click(function(){
   //$("#iqub-container .section .page-product .product-info .right").show();
    //return false;
    $("#iqub-container .section .page-product .product-info .right").slideToggle();
    return false;
  });

  var swiper1 = new Swiper('#clients-slider .swiper-container', {
    loop: true,
    nextButton: '#clients-slider .swiper-button-next',
    prevButton: '#clients-slider .swiper-button-prev',
  });
  var swiper2 = new Swiper('#we-block .swiper-container', {
    slidesPerView: 'auto',
    loop: true,
    nextButton: '#we-block .swiper-button-next',
    prevButton: '#we-block .swiper-button-prev',
  });
  var languageImg = $('.language-btn .language-menu a.active').css('background-image');
  $('.language-btn').css('background-image', languageImg);
  $('.language-btn').on('click', function () {
    $(this).find('.language-menu').toggle();
  });
  $('.language-btn .language-menu a').on('click', function () {
    $('.language-btn .language-menu a').removeClass('active');
    $(this).addClass('active');
    var languageImg = $(this).css('background-image');
    $('.language-btn').css('background-image', languageImg);
  });
  $('.search-toggle').on('click', function() {
    $(this).closest('.header-top').toggleClass('active');
    if ($('#header .header-top').hasClass('active')) {
      var sectionW = $('#header .section').width();
      var inputW = sectionW - 70;
      $('#header .header-top.active .search-form input[type="text"]').width(inputW);
    } else {
      $('#header .search-form input[type="text"]').width(0);
    }
  });
  $('.menu-btn-mobile').on('click', function() {
    $('.header-menus-container').slideToggle();
  });
  $('.message-error .close').on('click', function() {
    $(this).closest('.message-error').fadeOut();
  });
  $('.faq .toggle-link').on('click', function() {
    $(this).parent().find('.faq-container').slideToggle();
    return false;
  });
  if ($('#TagsContainer').length > 0) {
    if (!$('#TagsCanvas').tagcanvas({
          textColour: '#044487',
          outlineThickness: 1,
          maxSpeed: 0.1,
          depth: 0.5
        })) {
      // TagCanvas failed to load
      $('#TagsContainer').hide();
    }
  }
  $(".swiper-container").each(function(){
    Swiper($(this), {
      pagination: $(this).find('.swiper-pagination'),
      paginationClickable: true
    });
  });

  jQuery(".faq_menu a").click(function(){
    if (jQuery(this).hasClass('active')){
      jQuery(this).removeClass('active');
      jQuery(jQuery(this).attr('href')).removeClass('active');
    } else {
      jQuery(".faq_menu a").removeClass('active');
      jQuery(this).addClass('active');
      jQuery('.faq_tab').removeClass('active');
      console.log(jQuery(this).attr('href'));
      jQuery(jQuery(this).attr('href')).addClass('active');
    }
    return false;
  });

});
(function($) {
  $(window).resize(function() {
    var sectionW = $('#header .section').width();
    var leftW = $('#header .left').width();
    var inputW = sectionW - 70;
    $('#header .header-top.active .search-form input[type="text"]').width(inputW);
  });
})(jQuery);