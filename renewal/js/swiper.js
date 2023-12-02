window.addEventListener("DOMContentLoaded", function () {

  /* index - main - visual banner(비주얼배너) */

  const bnr_swiper_scrollbar = new Swiper("#hero_bnr .bnr_swiper_scrollbar", {
    slidesPerView: 1, //한번에 보여지는 슬라이드 개수
    width: 40,
    slideActiveClass: "active",
    loop: true,
    speed: 1800,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".bnr_swiper_pagination_fraction",
      type : 'fraction',   //페이징 타입 설정(종류: bullets, fraction, progressbar)  
      modifierClass: "bnr_swiper_pagination_",
      currentClass: "bnr_current",
      totalClass: "bnr_total",
      renderFraction: function (currentClass, totalClass) {
        return (
          '<div class="' +
          currentClass +
          '">' + '</div>' +
          '<div class="' +
          totalClass +
          '"></div>'
        );
      },
    },
  });


  var bnr_wiper = new Swiper("#hero_bnr #bnr_swiper", {
    cssMode: true,
    slideClass: "bnr",
    slideActiveClass: "active",
    slidePrevClass: "prev",
    slideNextClass: "next",
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    speed: 1800,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      prevEl: ".btn_prev",
      nextEl: ".btn_next",
    },
    pagination: {
      el: ".bnr_swiper_bullets",
      type : 'bullets',
      modifierClass: "bnr_swiper_",
      bulletClass: "bul",
      bulletActiveClass: "active",
      clickableClass: "clickable",
      clickable: true,
    },
    thumbs: {
      swiper: bnr_swiper_scrollbar,
    },
  });

  
  var sw = 0;
  $('#hero_bnr .bnr_swiper_movement').click(function(){
      if(sw==0){
          $('.btn_pause').toggleClass('active');
          $('.btn_play').toggleClass('active');
          bnr_wiper.autoplay.stop();
          bnr_swiper_scrollbar.autoplay.stop();
          sw = 1;
      }else{
        $('.btn_pause').toggleClass('active');
        $('.btn_play').toggleClass('active');
          bnr_wiper.autoplay.start();
          bnr_swiper_scrollbar.autoplay.start();
          sw = 0;
      }
  });
  
  var sw = 0;
  $('#hero_bnr #bnr_swiper button.btn').hover(function(){
      if(sw==0){
        $('.btn_pause').toggleClass('active');
        $('.btn_play').toggleClass('active');
          bnr_wiper.autoplay.stop();
          bnr_swiper_scrollbar.autoplay.stop();
          sw = 1;
      }else{
        $('.btn_pause').toggleClass('active');
        $('.btn_play').toggleClass('active');
        bnr_wiper.autoplay.start();
          bnr_swiper_scrollbar.autoplay.start();
          sw = 0;
      }
  });

  const swiper_num = new Swiper("#main #recruit .swiper-thumbs", {
    slidesPerView: 1, //한번에 보여지는 슬라이드 개수
    speed: 2000,
    autoplay: {
      delay: 4200,
    },
    pagination: {
      el: ".swiper_pagination_fraction",
      type : 'fraction',   //페이징 타입 설정(종류: bullets, fraction, progressbar)  
      modifierClass: "swiper_pagination_",
      currentClass: "current",
      totalClass: "total",
      renderFraction: function (currentClass, totalClass) {
        return (
          '<div class="' +
          currentClass +
          '">' + '</div>' +
          '<div class="' +
          totalClass +
          '"></div>'
        );
      },
    },
  });

  const recruitSwiper = new Swiper("#recruitSwiper", {
    slidesPerView: "auto",
    spaceBetween: 200,
    centeredSlides: true,
    roundLengths: true, //일반 해상도 화면에서 흐릿한 텍스트를 방지하기 위해 슬라이드 너비 및 높이 값을 반올림하려면 true로 설정
    loop: true,
    speed: 1800,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-progressbar",
      type : 'progressbar',   //페이징 타입 설정(종류: bullets, fraction, progressbar)  
    },
    thumbs: {
      swiper: swiper_num,
    },
  });
  var sw = 0;
  $('#main #recruit .list_1.swiper-slide').hover(function(){
      if(sw==0){
        recruitSwiper.autoplay.stop();
        recruitSwiper.autoplay.stop();
          sw = 1;
      }else{
          recruitSwiper.autoplay.start();
          recruitSwiper.autoplay.start();
          sw = 0;
      }
  });
  
  var sw = 0;
  $('#main #recruit .list_2.swiper-slide').hover(function(){
      if(sw==0){
        recruitSwiper.autoplay.stop();
        recruitSwiper.autoplay.stop();
          sw = 1;
      }else{
          recruitSwiper.autoplay.start();
          recruitSwiper.autoplay.start();
          sw = 0;
      }
  });
  
  var sw = 0;
  $('#main #recruit .list_3.swiper-slide').hover(function(){
      if(sw==0){
        recruitSwiper.autoplay.stop();
        recruitSwiper.autoplay.stop();
          sw = 1;
      }else{
          recruitSwiper.autoplay.start();
          recruitSwiper.autoplay.start();
          sw = 0;
      }
  });
  const coexistenceSwiper = new Swiper("#main #coexistence .swiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    initialSlide: 2,
    spaceBetween: 40,
    loop: true,
    speed: 1800,
    autoplay: {
      delay: 1800,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  var sw = 0;
  $('#main #coexistence .list_1.swiper-slide').hover(function(){
      if(sw==0){
        $('#coexistence .list_2.swiper-slide').toggleClass('off');
        $('#coexistence .list_3.swiper-slide').toggleClass('off');
        coexistenceSwiper.autoplay.stop();
          sw = 1;
      }else{
        $('#coexistence .list_2.swiper-slide').toggleClass('off');
        $('#coexistence .list_3.swiper-slide').toggleClass('off');
        coexistenceSwiper.autoplay.start();
          sw = 0;
      }
  });
  
  var sw = 0;
  $('#main #coexistence .list_2.swiper-slide').hover(function(){
      if(sw==0){
        $('#coexistence .list_1.swiper-slide').toggleClass('off');
        $('#coexistence .list_3.swiper-slide').toggleClass('off');
        coexistenceSwiper.autoplay.stop();
          sw = 1;
      }else{
        $('#coexistence .list_1.swiper-slide').toggleClass('off');
        $('#coexistence .list_3.swiper-slide').toggleClass('off');
        coexistenceSwiper.autoplay.start();
          sw = 0;
      }
  });
  
  var sw = 0;
  $('#main #coexistence .list_3.swiper-slide').hover(function(){
      if(sw==0){
        $('#coexistence .list_2.swiper-slide').toggleClass('off');
        $('#coexistence .list_1.swiper-slide').toggleClass('off');
        coexistenceSwiper.autoplay.stop();
          sw = 1;
      }else{
        $('#coexistence .list_2.swiper-slide').toggleClass('off');
        $('#coexistence .list_1.swiper-slide').toggleClass('off');
        coexistenceSwiper.autoplay.start();
          sw = 0;
      }
  });

  const technologySwiper = new Swiper("#main #technology .swiper", {
    slidesPerView: "auto",
    initialSlide: 2,
    spaceBetween: 60,
    loop: true,
    speed: 1800,
    autoplay: {
      delay: 1800,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      afterInit: function () {
        $("#main #technology .swiper .swiper-pagination-bullet-active").addClass(
          "progressing"
        );
      },
      slideChangeTransitionStart: function () {
        setTimeout(function () {}, 200);
      },
      slideChangeTransitionEnd: function () {
        setTimeout(function () {
          $("#main #technology .swiper .swiper-pagination-bullet-active").addClass(
            "progressing"
          );
        }, 200);
      },
    },
  });
  
  var sw = 0;
  $('#main #technology .list_1.swiper-slide').hover(function(){
      if(sw==0){
        $('#technology .list_2.swiper-slide').toggleClass('off');
        $('#technology .list_3.swiper-slide').toggleClass('off');
        technologySwiper.autoplay.stop();
          sw = 1;
      }else{
        $('#technology .list_2.swiper-slide').toggleClass('off');
        $('#technology .list_3.swiper-slide').toggleClass('off');
        technologySwiper.autoplay.start();
          sw = 0;
      }
  });
  
  var sw = 0;
  $('#main #technology .list_2.swiper-slide').hover(function(){
      if(sw==0){
        $('#technology .list_1.swiper-slide').toggleClass('off');
        $('#technology .list_3.swiper-slide').toggleClass('off');
        technologySwiper.autoplay.stop();
          sw = 1;
      }else{
        $('#technology .list_1.swiper-slide').toggleClass('off');
        $('#technology .list_3.swiper-slide').toggleClass('off');
        technologySwiper.autoplay.start();
          sw = 0;
      }
  });
  
  var sw = 0;
  $('#main #technology .list_3.swiper-slide').hover(function(){
      if(sw==0){
        $('#technology .list_2.swiper-slide').toggleClass('off');
        $('#technology .list_1.swiper-slide').toggleClass('off');
        technologySwiper.autoplay.stop();
          sw = 1;
      }else{
        $('#technology .list_2.swiper-slide').toggleClass('off');
        $('#technology .list_1.swiper-slide').toggleClass('off');
        technologySwiper.autoplay.start();
          sw = 0;
      }
  });

  const videoSwiper = new Swiper("#main #video .swiper", {
    cssMode: true,
    slidesPerView: "auto",
    spaceBetween: 200,
    centeredSlides: true,
    loop: true,
    /* mousewheel: true, */
    speed: 1800,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      renderFraction: function (currentClass, totalClass) {
        return (
          '<span class="' +
          currentClass +
          '"></span>' +
          " of " +
          '<span class="' +
          totalClass +
          '"></span>'
        );
      },
    },
    on: {
      afterInit: function () {
        $("#main #video .swiper .swiper-pn-num i").addClass("progressing");
      },
      slideChangeTransitionStart: function () {
        setTimeout(function () {
          $("#main #video .swiper .swiper-pn-num i").removeClass("progressing");
        }, 200);
      },
      slideChangeTransitionEnd: function () {
        setTimeout(function () {
          $("#main #video .swiper .swiper-pn-num i").addClass("progressing");
        }, 200);
      },
    },
  });
  
  var sw = 0;
  $('#main #video .list_1.swiper-slide').hover(function(){
      if(sw==0){
        $('#video .list_2.swiper-slide').toggleClass('off');
        $('#video .list_3.swiper-slide').toggleClass('off');
        $('#video .list_4.swiper-slide').toggleClass('off');
        videoSwiper.autoplay.stop();
          sw = 1;
      }else{
        $('#video .list_2.swiper-slide').toggleClass('off');
        $('#video .list_3.swiper-slide').toggleClass('off');
        $('#video .list_4.swiper-slide').toggleClass('off');
        videoSwiper.autoplay.start();
          sw = 0;
      }
  });
  
  var sw = 0;
  $('#main #video .list_2.swiper-slide').hover(function(){
      if(sw==0){
        $('#video .list_1.swiper-slide').toggleClass('off');
        $('#video .list_3.swiper-slide').toggleClass('off');
        $('#video .list_4.swiper-slide').toggleClass('off');
        videoSwiper.autoplay.stop();
          sw = 1;
      }else{
        $('#video .list_1.swiper-slide').toggleClass('off');
        $('#video .list_3.swiper-slide').toggleClass('off');
        $('#video .list_4.swiper-slide').toggleClass('off');
        videoSwiper.autoplay.start();
          sw = 0;
      }
  });
  
  var sw = 0;
  $('#main #video .list_3.swiper-slide').hover(function(){
      if(sw==0){
        $('#video .list_2.swiper-slide').toggleClass('off');
        $('#video .list_1.swiper-slide').toggleClass('off');
        $('#video .list_4.swiper-slide').toggleClass('off');
        videoSwiper.autoplay.stop();
          sw = 1;
      }else{
        $('#video .list_2.swiper-slide').toggleClass('off');
        $('#video .list_1.swiper-slide').toggleClass('off');
        $('#video .list_4.swiper-slide').toggleClass('off');
        videoSwiper.autoplay.start();
          sw = 0;
      }
  });
  
  var sw = 0;
  $('#main #video .list_4.swiper-slide').hover(function(){
      if(sw==0){
        $('#video .list_2.swiper-slide').toggleClass('off');
        $('#video .list_1.swiper-slide').toggleClass('off');
        $('#video .list_3.swiper-slide').toggleClass('off');
        videoSwiper.autoplay.stop();
          sw = 1;
      }else{
        $('#video .list_2.swiper-slide').toggleClass('off');
        $('#video .list_1.swiper-slide').toggleClass('off');
        $('#video .list_3.swiper-slide').toggleClass('off');
        videoSwiper.autoplay.start();
          sw = 0;
      }
  });

  



  var pr_videoSwiper = new Swiper("#pr_videoSwiper", {
    effect: "fade",
    loop : true, // 무한 반복
    speed: 1500,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var calendarSwiper = new Swiper("#calendarSwiper", {
    cssMode: true,
    slidesPerView: "auto",
    initialSlide: 0,
    spaceBetween: 0,
    loop: true,
    speed: 500,
    navigation: {
      prevEl: ".btn_prev",
      nextEl: ".btn_next",
    },
  });

  var ScrollContainerSwiper = new Swiper("#ScrollContainerSwiper", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    speed: 1500,
    mousewheel: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });







  (function () {

})();  
  
});
