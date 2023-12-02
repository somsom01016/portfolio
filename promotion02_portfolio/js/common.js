window.addEventListener("DOMContentLoaded", function () {
  
  
  container.addListener((e) => {
    let scrollTop = container.scrollTop;
    $(".posNum").html(scrollTop);


    const footer = document.querySelectorAll('#thank-you')[0].offsetTop //갈려는 곳
    const research = document.querySelectorAll('#research')[0].offsetTop //갈려는 곳
    const solution = document.querySelectorAll('#solution')[0].offsetTop //갈려는 곳

    if (scrollTop < 100) {
      $("header").toggleClass("active", false);
    }
    if (scrollTop >= 100) {
      $("header").toggleClass("active", true);
      $("header").addClass("sdfsdf");
    }
    if (scrollTop >= footer) {
      $("header").removeClass("active");
      $("header").addClass("none");
    }
    if (scrollTop < footer) {
      $("header").removeClass("none");
    }
    if (scrollTop >= research) {
      $("#research").addClass("active");
    }
    if (scrollTop < research) {
      $("#research").removeClass("active");
    }
    if (scrollTop >= solution) {
      $("#solution").addClass("active");
    }
    if (scrollTop < solution) {
      $("#solution").removeClass("active");
    }

});



(function () {


  gsap.to("#output", {
    scrollTrigger: {
      trigger: "#output",
      start: "170 top",
      end: () => "+=" + 2350,
      pin: true,
      pinSpacing: false,
      scrub: 1,
    },
  });





  gsap.from(".step_area .setp01", {
    opacity: 0,
    y: -100,
    scrollTrigger: {
      trigger: ".step_area .step .setp01",
      start: "-1000 top",
      pinSpacing: false,
      scrub: 1,
    },
  });

  gsap.from(".step_area .setp02", {
    y: 300,
    scrollTrigger: {
      trigger: ".step_area .step .setp02",
      start: "-50 top",
      pinSpacing: false,
      scrub: 1,
    },
  });

  gsap.from(".step_area .setp03", {
    opacity: 0,
    y: 200,
    scrollTrigger: {
      trigger: ".step_area .step .setp03",
      start: "-990 top",
      pinSpacing: false,
      scrub: 1,
    },
  });

  gsap.to(".step_area .setp04", {
    scrollTrigger: {
      trigger: ".step_area .step .setp04",
      start: "700 top",
      pin: true,
      pinSpacing: false,
      scrub: 1,
    },
  });

  gsap.from(".step_area .setp05", {
    y: -700,
    scrollTrigger: {
      trigger: ".step_area .step .setp05",
      start: "top top",
      pinSpacing: false,
      scrub: 8,
    },
  });

  gsap.from(".step_area .setp06", {
    y: -700,
    scrollTrigger: {
      trigger: ".step_area .step .setp06",
      start: "top top",
      pinSpacing: false,
      scrub: 8,
    },
  });

  gsap.from(".step_area .setp07", {
    opacity: 0,
    y: 300,
    scrollTrigger: {
      trigger: ".step_area .step .setp07",
      start: "top top",
      pinSpacing: false,
      scrub: 4,
    },
  });

  gsap.from(".step_area .setp08", {
    opacity: 0,
    y: 300,
    scrollTrigger: {
      trigger: ".step_area .step .setp08",
      start: "top top",
      pinSpacing: false,
      scrub: 4,
    },
  });

  gsap.from(".step_area .setp09", {
    y: 0,
    opacity: 0,
    scrollTrigger: {
      trigger: ".step_area .step .setp09",
      start: "800 top",
      pinSpacing: false,
      scrub: 10,
    },
  });

  gsap.from(".step_area .setp10", {
    opacity: 0,
    y: -300,
    scrollTrigger: {
      trigger: ".step_area .step .setp10",
      start: "700 top",
      pin: true,
      pinSpacing: false,
      scrub: 5,
    },
  });

  
  /* 버튼 이동 */
  /* const promotion = document.querySelectorAll('#promotion')[0].offsetTop //갈려는 곳 */
  const overview = document.querySelectorAll('#overview')[0].offsetTop //갈려는 곳

  /* $(".btn_proposal").click(function () {container.scrollTo(0, promotion, 5000, {});}); */
  $(".btn_play").click(function () {container.scrollTo(0, overview, 700, {});});





  setTimeout(()=>{
    $("main.fade .visible").removeClass("visible").addClass("active");
  },0);

  setTimeout(()=>{
    $("main .active").removeClass("active").addClass("visible");
    $("main.fade").removeClass("fade");
  },700);


    })();
});
