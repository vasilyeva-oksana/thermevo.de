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
  var form_slide_id = 1;
  var form_slide = "";

  $(".add-item-container .add-item").click(function(){

    if(form_slide_id < 5 ){
      if( $("input#slide"+form_slide_id).val() != "" ){
        $("input#slide"+form_slide_id).parent().parent().parent().css("border", "0");
        form_slide_id++;
        form_slide = '<div class="create-article-add-slider-item">';
        form_slide += '<div class="image-preview">';
        form_slide += '<canvas id="images-preview-canvas-'+form_slide_id+'" class="images-preview-canvas"></canvas>';
        form_slide += '</div>';
        form_slide += '<div class="right-container">';
        form_slide += '<div class="item">';
        form_slide += '<div class="slide-number">Slide '+form_slide_id+'</div>';
        form_slide += '<input name="slide[]" type="file" id="slide'+form_slide_id+'">';
        form_slide += '<label for="slide'+form_slide_id+'" class="label-file">Choose the picture</label>';
        form_slide += '<div class="description">Min image Width:- 200 px, Max Size ofthe image - 5 MB</div>';
        form_slide += '</div>';
        form_slide += '<div class="item">';
        form_slide += '<label for="caption-picture'+form_slide_id+'">The caption of the picture</label>';
        form_slide += '<input type="text" id="caption-picture1">';
        form_slide += '<div class="description">You can write: 200 characters</div>';
        form_slide += '</div>';
        form_slide += '</div>';
        form_slide += '</div>';
        $(".wrap_from_slide").append(form_slide);
        if( form_slide_id == 5 ){
          $(".add-item-container").remove();
        }
      } else {
        $("input#slide"+form_slide_id).parent().parent().parent().css("border", "1px solid #e62e4c");
      }
    }
  });

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

  $('.list-adresses-links a').on('click', function() {
    var postcode = $(this).attr('data-postcode');
    var country  = $(this).attr('data-country');
    var city     = $(this).attr('data-city');
    var adress   = $(this).attr('data-adress');
    var title    = $(this).text();
    $('.adress-form #postcode').val(postcode);
    $('.adress-form #country').val(country);
    $('.adress-form #city').val(city);
    $('.adress-form #adress').val(adress);
    $('.list-adresses-links a').removeClass('active');
    $('.adress-form h2').text(title);
    $(this).addClass('active');
    return false;
  });

  $('.add-adress').on('click', function() {
    var title = $(this).text();
    $('.list-adresses-links a').removeClass('active');
    $('.adress-form #postcode').val('');
    $('.adress-form #country').val('');
    $('.adress-form #city').val('');
    $('.adress-form #adress').val('');
    $('.adress-form h2').text(title);
    return false;
  });

  $(".wrap_from_slide").on('change', '.create-article-add-slider-item input[type="file"]', function(e){
    var canvas = $(this).closest('.create-article-add-slider-item').find('.images-preview-canvas')[0];
    //console.log($(canvas).closest('.image-preview').width());
    handleImage(canvas,e);
    return false;
  });

  function handleImage(canvas, e){
    var reader = new FileReader();
    reader.onload = function(event){
      var ctx = canvas.getContext('2d');
      var img = new Image();
      var w = $(canvas).width();
      var h = $(canvas).height();
      $(canvas).closest('.image-preview').css('background-image','none');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      img.onload = function(){
        drawImageProp(ctx,img,0,0,w,h);
        //ctx.drawImage(img,0,0,img.width,img.height,0,0,w,h);
      }
      img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  function drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) {

    if (arguments.length === 2) {
      x = y = 0;
      w = ctx.canvas.width;
      h = ctx.canvas.height;
    }

    /// default offset is center
    offsetX = offsetX ? offsetX : 0.5;
    offsetY = offsetY ? offsetY : 0.5;

    /// keep bounds [0.0, 1.0]
    if (offsetX < 0) offsetX = 0;
    if (offsetY < 0) offsetY = 0;
    if (offsetX > 1) offsetX = 1;
    if (offsetY > 1) offsetY = 1;

    var iw = img.width,
      ih = img.height,
      r = Math.min(w / iw, h / ih),
      nw = iw * r,   /// new prop. width
      nh = ih * r,   /// new prop. height
      cx, cy, cw, ch, ar = 1;

    /// decide which gap to fill
    if (nw < w) ar = w / nw;
    if (nh < h) ar = h / nh;
    nw *= ar;
    nh *= ar;

    /// calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);

    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;

    /// make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;

    /// fill image in dest. rectangle
    ctx.drawImage(img, cx, cy, cw, ch,  x, y, w, h);
  }

});
(function($) {
  $(window).resize(function() {
    var sectionW = $('#header .section').width();
    var leftW = $('#header .left').width();
    var inputW = sectionW - 70;
    $('#header .header-top.active .search-form input[type="text"]').width(inputW);
  });
})(jQuery);