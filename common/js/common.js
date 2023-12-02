let container;
let stage;

window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  stage = document.querySelector("#container");

  container = Scrollbar.init(stage, {
    damping: 0.1,
    delegateTo: document,
    continuousScrolling: true,
    alwaysShowTracks: false,
  });

  ScrollTrigger.scrollerProxy("#container", {
    scrollTop(value) {
      if (arguments.length) {
        container.scrollTop = value;
      }

      return container.scrollTop;
    },
  });
  container.addListener(ScrollTrigger.update);
  ScrollTrigger.defaults({ scroller: stage });

  container.setPosition(0, 0);
  container.track.xAxis.element.remove();
  // Scrollbar.detachStyle();

  $(".startPoint").click(function () {
    container.scrollTo(0, 0, 600, {
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
  });



  (function () {

    $("#slider").slick({
      dots: false, //navigation
      arrows: true, //arrow

      prevArrow: $(), //prev
      nextArrow: $(".next_btn"), //next
      autoplay: false, // autoplay mode
      autoplaySpeed: 2000, // auto speed
      pauseOnHover: false, // pause on mouse hover
      fade: false, //fade mode only one slider
      speed: 900, // speed
      infinite: true, // infinite mode
      // asNavFor: '', // another slider

      centerMode: true, // center move
      centerPadding: "0%", // center move padding

      slidesToShow: 1, // show slider number
      slidesToScroll: 1, // next slider number
      swipe: true, // swiper
      focusOnSelect: true, // click to slider
      draggable: true,
      vertical: false, // vertical slider
      verticalSwiping: false, // vertical swiper
      initialSlide: 0, // slider number
      cssEase: "cubic-bezier(0.7, 0, 0.3, 1)", //css transition∑
      variableWidth: false,
    });
  });

  // Only necessary to correct marker position - not needed in production
  if (document.querySelector(".gsap-marker-scroller-start")) {
    const markers = gsap.utils.toArray('[class *= "gsap-marker"]');

    container.addListener(({ offset }) => {
      gsap.set(markers, { marginTop: -offset.y });
      $(".posNum").html(offset.y);
    });
  }
});
