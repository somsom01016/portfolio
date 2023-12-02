window.addEventListener("DOMContentLoaded", function () {

  
    
  gsap.to("#section01 .fix-this-01", {
    scrollTrigger: {
      trigger: "#section01 .trigger-this-01",
      start: "top top",
      // end: () => "+=" + 300,
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      scrub: 1,
    },
  });

  gsap.to("#section01 .inner05", {
    y: 0,
    scrollTrigger: {
      trigger: "#section01",
      start: "top top",
      end: () => "+=" + 500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });

  gsap.to("#section01 .volume #slider", {
    y: -250,
    scrollTrigger: {
      trigger: "#section01",
      start: "top top",
      end: () => "+=" + 800,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section01 .volume .slider_align", {
    x: -300,
    scale: 2,
    opacity: 1,
    scrollTrigger: {
      trigger: "#section01",
      start: "200 top",
      end: () => "+=" + 300,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section01 .volume .slider_align", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#section01",
      start: "400 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section01 .next_btn", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#section01",
      start: "200 top",
      end: () => "+=" + 300,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section01 .circle_btn", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#section01",
      start: "200 top",
      end: () => "+=" + 300,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section01 .volume .tit", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#section01",
      start: "150 top",
      end: () => "+=" + 300,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section01 .volume .txt", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#section01",
      start: "300 top",
      end: () => "+=" + 100,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section01 .inner05 .section02", {
    y: -850,
    opacity: 1,
    scrollTrigger: {
      trigger: "#section01",
      start: "300 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section01 .inner05 .section02 .part01", {
    x: 10,
    y: -20,
    opacity: 1,
    scrollTrigger: {
      trigger: "#section01",
      start: "310 top",
      end: () => "+=" + 1800,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section01 .inner05 .section02 .part02", {
    y: -500,
    opacity: 1,
    scrollTrigger: {
      trigger: "#section01",
      start: "700 top",
      end: () => "+=" + 1100,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section01 .inner05 .section02 .part03", {
    y: -500,
    opacity: 1,
    scrollTrigger: {
      trigger: "#section01",
      start: "1200 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section01 .inner01", {
    x: 230,
    y: -150,
    duration: 1,
    scrollTrigger: {
      trigger: "#section01",
      start: "2700 top",
      end: () => "+=" + 800,
      // end: 'bottom bottom',
      scrub: 2,
    },
  });
  gsap.to("#section01 .inner02", {
    x: -500,
    y: -200,
    duration: 1,
    scrollTrigger: {
      trigger: "#section01",
      start: "3500 top",
      end: () => "+=" + 800,
      // end: 'bottom bottom',
      scrub: 2,
    },
  });
  gsap.to("#section01 .inner03", {
    x: -1260,
    y: 1500,
    duration: 1,
    scrollTrigger: {
      trigger: "#section01",
      start: "4300 top",
      end: () => "+=" + 800,
      // end: 'bottom bottom',
      scrub: 2,
    },
  });
  gsap.to("#section01 .inner06 .part04 > *", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#section01",
      start: "4500 top",
      end: () => "+=" + 800,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section01 .inner06", {
    x: -100,
    y: -1000,
    duration: 1,
    scrollTrigger: {
      trigger: "#section01",
      start: "5500 top",
      end: () => "+=" + 500,
      // end: 'bottom bottom',
      scrub: 2,
    },
  });
  gsap.to("#section01 .inner06 .part04", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#section01",
      start: "6000 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section01 .inner06 .part05 .txt_01", {
    y: -50,
    scrollTrigger: {
      trigger: "#section01",
      start: "5400 top",
      end: () => "+=" + 300,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section01 .inner06 .part05 .txt_01", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#section01",
      start: "5500 top",
      end: () => "+=" + 300,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section01 .inner06 .part05 .txt_02", {
    y: -50,
    scrollTrigger: {
      trigger: "#section01",
      start: "5500 top",
      end: () => "+=" + 800,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section01 .inner06 .part05 .txt_02", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#section01",
      start: "5600 top",
      end: () => "+=" + 300,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section01 .inner06 .part05 .circle", {
    y: -50,
    opacity: 1,
    scrollTrigger: {
      trigger: "#section01",
      start: "5700 top",
      end: () => "+=" + 800,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section01 .inner06 .part05 .img", {
    y: -100,
    opacity: 1,
    scrollTrigger: {
      trigger: "#section01",
      start: "5600 top",
      end: () => "+=" + 500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section01 .inner06 .part06", {
    y: -100,
    scrollTrigger: {
      trigger: "#section01",
      start: "5000 top",
      end: () => "+=" + 2000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section01 .inner06 .part06", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#section01",
      start: "5800 top",
      end: () => "+=" + 300,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section01 .inner06 > .section02", {
    y: -550,
    scrollTrigger: {
      trigger: "#section01",
      start: "6900 top",
      end: () => "+=" + 2000,
      // end: 'bottom bottom',
      scrub: 2,
    },
  });
  gsap.to("#section01 .inner04", {
    x: -1150,
    y: 1450,
    scrollTrigger: {
      trigger: "#section01",
      start: "7500 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 2,
    },
  });
  gsap.to("#section01 .inner06 .part07 .img", {
    x: -450,
    y: -10,
    scale: 1.8,
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: "#section01",
      start: "9500 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section01 .inner06 .part07", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#section01",
      start: "11000 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section01 .inner06 .part06", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#section01",
      start: "11000 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });

  gsap.to(".main_group04 .main_group_inner", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#main",
      start: "10500 top",
      end: () => "+=" + 300,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .main_group_inner", {
    y: -1200,
    scrollTrigger: {
      trigger: "#main",
      start: "10500 top",
      end: () => "+=" + 1500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .main_group_inner .txt", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#main",
      start: "10500 top",
      end: () => "+=" + 300,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .main_group_inner .txt", {
    y: 0,
    scrollTrigger: {
      trigger: "#main",
      start: "10500 top",
      end: () => "+=" + 2500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .main_group_inner .img", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#main",
      start: "11500 top",
      end: () => "+=" + 500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .main_group_inner .img", {
    x: 5870,
    y: -2940,
    scrollTrigger: {
      trigger: "#main",
      start: "11500 top",
      end: () => "+=" + 3500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .main_group_inner .txt", {
    y: 0,
    opacity: 0,
    scrollTrigger: {
      trigger: "#main",
      start: "13300 top",
      end: () => "+=" + 1500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .random_group_inner", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#main",
      start: "25000 top",
      end: () => "+=" + 300,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .random_group_inner .txt > span", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#main",
      start: "13500 top",
      end: () => "+=" + 1500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .random_group_inner .txt .txt_1", {
    y: -100,
    scrollTrigger: {
      trigger: "#main",
      start: "13500 top",
      end: () => "+=" + 800,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .random_group_inner .txt .txt_2", {
    y: -100,
    scrollTrigger: {
      trigger: "#main",
      start: "13600 top",
      end: () => "+=" + 800,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .random_group_inner .txt .txt_3", {
    y: -100,
    scrollTrigger: {
      trigger: "#main",
      start: "13700 top",
      end: () => "+=" + 800,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .random_group_inner .txt .txt_4", {
    y: -100,
    scrollTrigger: {
      trigger: "#main",
      start: "13800 top",
      end: () => "+=" + 800,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .random_group_inner .txt .txt_5", {
    y: -100,
    scrollTrigger: {
      trigger: "#main",
      start: "13900 top",
      end: () => "+=" + 800,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .img_random_inner", {
    y: -1900,
    scrollTrigger: {
      trigger: "#main",
      start: "15000 top",
      end: () => "+=" + 2000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .img_random_inner .img01", {
    x: 0,
    y: 0,
    rotate: 0,
    scrollTrigger: {
      trigger: "#main",
      start: "15000 top",
      end: () => "+=" + 300,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .img_random_inner .img02", {
    x: 0,
    y: 0,
    rotate: 0,
    scrollTrigger: {
      trigger: "#main",
      start: "15000 top",
      end: () => "+=" + 300,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .img_random_inner .img03", {
    x: 0,
    y: 0,
    rotate: 0,
    scrollTrigger: {
      trigger: "#main",
      start: "15000 top",
      end: () => "+=" + 500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .img_random_inner .img04", {
    x: 0,
    y: 0,
    rotate: 0,
    scrollTrigger: {
      trigger: "#main",
      start: "15000 top",
      end: () => "+=" + 700,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .img_random_inner .img05", {
    x: 0,
    y: 0,
    rotate: 0,
    scrollTrigger: {
      trigger: "#main",
      start: "15000 top",
      end: () => "+=" + 300,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .img_random_inner .img06", {
    x: 0,
    y: 0,
    rotate: 0,
    scrollTrigger: {
      trigger: "#main",
      start: "15000 top",
      end: () => "+=" + 500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .img_random_inner .img07", {
    x: 0,
    y: 0,
    rotate: 0,
    scrollTrigger: {
      trigger: "#main",
      start: "15000 top",
      end: () => "+=" + 500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .img_random_inner .img08", {
    x: 0,
    y: 0,
    rotate: 0,
    scrollTrigger: {
      trigger: "#main",
      start: "15200 top",
      end: () => "+=" + 300,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .img_random_inner .img09", {
    x: 0,
    y: 0,
    rotate: 0,
    scrollTrigger: {
      trigger: "#main",
      start: "15200 top",
      end: () => "+=" + 300,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .img_random_inner .img10", {
    x: 0,
    y: 0,
    rotate: 0,
    scrollTrigger: {
      trigger: "#main",
      start: "15300 top",
      end: () => "+=" + 300,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .img_random_inner .img11", {
    x: 0,
    y: 0,
    rotate: 0,
    scrollTrigger: {
      trigger: "#main",
      start: "15300 top",
      end: () => "+=" + 300,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .img_random_inner .img12", {
    x: 0,
    y: 0,
    rotate: 0,
    scrollTrigger: {
      trigger: "#main",
      start: "15300 top",
      end: () => "+=" + 300,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .img_random_inner .img13", {
    x: 0,
    y: 0,
    rotate: 0,
    scrollTrigger: {
      trigger: "#main",
      start: "15400 top",
      end: () => "+=" + 300,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .img_random_inner .img14", {
    x: 0,
    y: 0,
    rotate: 0,
    scrollTrigger: {
      trigger: "#main",
      start: "15400 top",
      end: () => "+=" + 300,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .img_random_inner .img15", {
    x: 0,
    y: 0,
    rotate: 0,
    scrollTrigger: {
      trigger: "#main",
      start: "15400 top",
      end: () => "+=" + 300,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });

  gsap.to(".main_group04 .random_group_inner .txt span > img", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#main",
      start: "16500 top",
      end: () => "+=" + 300,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .random_group_inner .txt .txt_1 > img", {
    y: -1000,
    scrollTrigger: {
      trigger: "#main",
      start: "16500 top",
      end: () => "+=" + 1500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .random_group_inner .txt .txt_2 > img", {
    y: -1000,
    scrollTrigger: {
      trigger: "#main",
      start: "16600 top",
      end: () => "+=" + 1500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .random_group_inner .txt .txt_3 > img", {
    scrollTrigger: {
      trigger: "#main",
      start: "16700 top",
      end: () => "+=" + 1500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .random_group_inner .txt .txt_4 > img", {
    y: -1000,
    scrollTrigger: {
      trigger: "#main",
      start: "16800 top",
      end: () => "+=" + 1500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to(".main_group04 .random_group_inner .txt .txt_5 > img", {
    y: -1000,
    scrollTrigger: {
      trigger: "#main",
      start: "16900 top",
      end: () => "+=" + 1500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });

  gsap.to(".main_group04", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#main",
      start: "17000 top",
      end: () => "+=" + 800,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });

  //==============section03=======================

  gsap.to("#section03 .fix-this-03", {
    scrollTrigger: {
      trigger: "#section03",
      start: "top top",
      // end: () => "+=" + 300,
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      scrub: 1,
    },
  });

  gsap.to("#section03 .inner01", {
    x: -8280,
    scrollTrigger: {
      trigger: "#section03",
      start: "top top",
      end: () => "+=" + 4500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });

  gsap.to("#section03 .txt_off_on_inner", {
    y: -100,
    scrollTrigger: {
      trigger: "#section03 .inner01",
      start: "5200 top",
      end: () => "+=" + 100,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section03 .txt_off_on_inner .txt_02", {
    y: -700,
    scrollTrigger: {
      trigger: "#section03 .inner01",
      start: "4000 top",
      end: () => "+=" + 1500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section03 .txt_off_on_inner .txt_02 > img", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#section03 .inner01",
      start: "6500 top",
      end: () => "+=" + 300,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section03 .txt_off_on_inner .txt_02 > img", {
    y: -1000,
    scrollTrigger: {
      trigger: "#section03 .inner01",
      start: "6500 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section03 .txt_off_on_inner .txt_01 > img", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#section03 .inner01",
      start: "6500 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section03 .txt_off_on_inner .txt_01 > img", {
    y: -1000,
    scrollTrigger: {
      trigger: "#section03 .inner01",
      start: "7000 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });

  gsap.to("#section05 .fix-this-05", {
    scrollTrigger: {
      trigger: "#section05 .trigger-this-05",
      start: "top top",
      // end: () => "+=" + 300,
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      scrub: 1,
    },
  });

  // 이걸로 조절해주시면 돼요!! start의 값을 top이 아닌 음수로 넣어주시면 빨리 시작합니당
  gsap.to("#section05 .gallery_inner", {
    x: -1570,
    scrollTrigger: {
      trigger: "#section05",
      start: "-1000 top",
      end: () => "+=" + 1500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });

  gsap.to("#section06 .fix-this-06", {
    scrollTrigger: {
      trigger: "#section06 .trigger-this-06",
      start: "top top",
      // end: () => "+=" + 300,
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      scrub: 1,
    },
  });

  gsap.to("#section06 .txt_inner .txt", {
    y: -400,
    scrollTrigger: {
      trigger: "#section06",
      start: "top top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section06 .txt_inner .txt_part02", {
    y: -900,
    scrollTrigger: {
      trigger: "#section06",
      start: "500 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section06 .txt_inner .img", {
    y: -1250,
    scrollTrigger: {
      trigger: "#section06",
      start: "500 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section06 .txt_inner", {
    y: -300,
    scrollTrigger: {
      trigger: "#section06",
      start: "2000 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });

  //==============section07=======================
  gsap.to("#section07 .fix-this-07", {
    scrollTrigger: {
      trigger: "#section07 .trigger-this-07",
      start: "top top",
      // end: () => "+=" + 300,
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      scrub: 1,
    },
  });
  gsap.to("#section07 .gallery_inner", {
    scale: 1,
    scrollTrigger: {
      trigger: "#section07",
      start: "100 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section07 .gallery_inner", {
    y: -1700,
    scrollTrigger: {
      trigger: "#section07",
      start: "2000 top",
      end: () => "+=" + 1500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });

  //==============section08=======================

  gsap.to("#section08 .txt_flowing_left span", {
    x: -5870,
    scrollTrigger: {
      trigger: "#section08",
      start: "top top",
      end: () => "+=" + 5500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_flowing_right span", {
    x: 5870,
    scrollTrigger: {
      trigger: "#section08",
      start: "200 top",
      end: () => "+=" + 5500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });

  gsap.to("#section08 .txt_inner .txt_part01 > .txt_01 > img", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#section08",
      start: "-600 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part01 > .txt_02 > img", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#section08",
      start: "-500 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part01 > .txt_03 > img", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#section08",
      start: "-400 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part01 > .txt_04 > img", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#section08",
      start: "-300 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part01 .txt_01", {
    y: -150,
    scrollTrigger: {
      trigger: "#section08",
      start: "-1500 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part01 .txt_02", {
    y: -150,
    scrollTrigger: {
      trigger: "#section08",
      start: "-1350 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part01 .txt_03", {
    y: -150,
    scrollTrigger: {
      trigger: "#section08",
      start: "-1200 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part01 .txt_04", {
    y: -150,
    scrollTrigger: {
      trigger: "#section08",
      start: "-1050 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });

  gsap.to("#section08 .txt_inner .txt_part02 > .txt_01 > img", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#section08",
      start: "-300 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part02 > .txt_02 > img", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#section08",
      start: "-200 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part02 > .txt_03 > img", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#section08",
      start: "-100 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part02 > .txt_04 > img", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#section08",
      start: "-10 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part02 .txt_01", {
    y: -100,
    scrollTrigger: {
      trigger: "#section08",
      start: "-900 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part02 .txt_02", {
    y: -100,
    scrollTrigger: {
      trigger: "#section08",
      start: "-1050 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part02 .txt_03", {
    y: -100,
    scrollTrigger: {
      trigger: "#section08",
      start: "-900 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part02 .txt_04", {
    y: -100,
    scrollTrigger: {
      trigger: "#section08",
      start: "-750 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });

  gsap.to("#section08 .txt_inner .txt_part03 > .txt_01 > img", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#section08",
      start: "200 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part03 > .txt_02 > img", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#section08",
      start: "300 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part03 > .txt_03 > img", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#section08",
      start: "400 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part03 > .txt_04 > img", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#section08",
      start: "500 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part03 .txt_01", {
    y: -100,
    scrollTrigger: {
      trigger: "#section08",
      start: "-450 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part03 .txt_02", {
    y: -100,
    scrollTrigger: {
      trigger: "#section08",
      start: "-300 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part03 .txt_03", {
    y: -100,
    scrollTrigger: {
      trigger: "#section08",
      start: "-150 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part03 .txt_04", {
    y: -100,
    scrollTrigger: {
      trigger: "#section08",
      start: "-10 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });

  gsap.to("#section08 .txt_inner .txt_part04 > .txt_01 > img", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#section08",
      start: "600 top",
      end: () => "+=" + 1500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part04 > .txt_02 > img", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#section08",
      start: "700 top",
      end: () => "+=" + 1500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part04 > .txt_03 > img", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#section08",
      start: "800 top",
      end: () => "+=" + 1500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part04 > .txt_04 > img", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#section08",
      start: "900 top",
      end: () => "+=" + 1500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part04 > .txt_05 > img", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#section08",
      start: "1000 top",
      end: () => "+=" + 1500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part04 .txt_01", {
    y: -100,
    scrollTrigger: {
      trigger: "#section08",
      start: "450 top",
      end: () => "+=" + 500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part04 .txt_02", {
    y: -100,
    scrollTrigger: {
      trigger: "#section08",
      start: "600 top",
      end: () => "+=" + 500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part04 .txt_03", {
    y: -100,
    scrollTrigger: {
      trigger: "#section08",
      start: "750 top",
      end: () => "+=" + 500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part04 .txt_04", {
    y: -100,
    scrollTrigger: {
      trigger: "#section08",
      start: "900 top",
      end: () => "+=" + 500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part04 .txt_05", {
    y: -100,
    scrollTrigger: {
      trigger: "#section08",
      start: "1050 top",
      end: () => "+=" + 500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });

  gsap.to("#section08 .txt_inner .txt_part05 > .txt_01 > img", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#section08",
      start: "1400 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part05 > .txt_02 > img", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#section08",
      start: "1500 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part05 > .txt_03 > img", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#section08",
      start: "1600 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part05 > .txt_04 > img", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#section08",
      start: "1700 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part05 > .txt_05 > img", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#section08",
      start: "1800 top",
      end: () => "+=" + 1500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part05 .txt_01", {
    y: -100,
    scrollTrigger: {
      trigger: "#section08",
      start: "1050 top",
      end: () => "+=" + 500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part05 .txt_02", {
    y: -100,
    scrollTrigger: {
      trigger: "#section08",
      start: "1200 top",
      end: () => "+=" + 500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part05 .txt_03", {
    y: -100,
    scrollTrigger: {
      trigger: "#section08",
      start: "1350 top",
      end: () => "+=" + 500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part05 .txt_04", {
    y: -100,
    scrollTrigger: {
      trigger: "#section08",
      start: "1500 top",
      end: () => "+=" + 500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_part05 .txt_05", {
    y: -100,
    scrollTrigger: {
      trigger: "#section08",
      start: "1650 top",
      end: () => "+=" + 500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });

  gsap.to("#section08 .txt_inner .txt_flowing_bottom span:nth-child(1)", {
    opacity: 1,
    y: 300,
    scrollTrigger: {
      trigger: "#section08",
      start: "2000 top",
      end: () => "+=" + 800,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section08 .txt_inner .txt_flowing_bottom span:nth-child(2)", {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#section08",
      start: "2500 top",
      end: () => "+=" + 800,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  //==============section09=======================
  gsap.to("#section09 .fix-this-09", {
    scrollTrigger: {
      trigger: "#section09 .trigger-this-09",
      start: "top top",
      // end: () => "+=" + 300,
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      scrub: 1,
    },
  });
  gsap.to("#section09 .flowing_txt_inner", {
    x: -3000,
    scrollTrigger: {
      trigger: "#section09",
      start: "100 top",
      end: () => "+=" + 1000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section09 .rect", {
    y: 1786.5,
    scrollTrigger: {
      trigger: "#section09",
      start: "1500 top",
      end: () => "+=" + 1400,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section09 .clip", {
    x: -227.5,
    scale: 1,
    rotate: 180,
    scrollTrigger: {
      trigger: "#section09",
      start: "1200 top",
      end: () => "+=" + 900,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section09 .white_bg", {
    backgroundColor: "#eeedea",
    scrollTrigger: {
      trigger: "#section09",
      start: "1200 top",
      end: () => "+=" + 800,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section09 .fix-this-09", {
    y: -3880,
    scrollTrigger: {
      trigger: "#section09",
      start: "1450 top",
      end: () => "+=" + 5000,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section09 .box_4", {
    backgroundColor: "#d9d5cd",
    y: 590,
    scrollTrigger: {
      trigger: "#section09",
      start: "2900 top",
      end: () => "+=" + 500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });
  gsap.to("#section09 .box_7", {
    backgroundColor: "#ada9a1",
    y: 590,
    scrollTrigger: {
      trigger: "#section09",
      start: "3600 top",
      end: () => "+=" + 500,
      // end: 'bottom bottom',
      scrub: 1,
    },
  });


  /*  slide,click event section */
  $(".drawer_menu").click(function () {
    $("header .page_header_navtrigger .mask a").toggleClass("on");
    $("#mega").toggleClass("on");
  });

  $(".menu_list_inner li a img").hover(function () {
    $(this).closest("li").toggleClass("on");
  });


  // sound 플레이
  let sound = document.querySelector("#sound");

  $(".sound_on").click(function () {
    sound.play();
  });
  $("#popup button").click(function () {
    $("#popup").removeClass("active");
    $("#wrap").removeClass("active");
    
    setTimeout(()=>{
      $("#popup").addClass("none");
    },1000);
  });
  // sound 멈춤
  $(".sound_off").click(function () {
    sound.pause();
  });

  $(".sound_inner > a").click(function () {
    $(".sound_inner > a").toggleClass("on");
  });


  
  /* scroll event section */
    container.addListener((e) => {
      let scrollTop = container.scrollTop;
      $(".posNum").html(scrollTop);
  

      if (scrollTop >= 0) {$("header .logo").removeClass("on");}

      if (scrollTop >= 0 && scrollTop <= 500) {
        $(".sound_inner").removeClass("on");
      } else {
        $(".sound_inner").addClass("on");
      }
      
      if (scrollTop >= 10400 && scrollTop <= 11200) {$("header .logo").addClass("on");} 
      if (scrollTop >= 23300 && scrollTop <= 25100) {$("header .logo").addClass("on");} 
      if (scrollTop >= 27800 && scrollTop <= 32000) {$("header .logo").addClass("on");} 
      if (scrollTop >= 38500 && scrollTop <= 39500) {$("header .logo").addClass("on");} 



      if (scrollTop >= 9500 && scrollTop <= 20000) {
        $(".inner06 .part07 .tit").addClass("on");
      } else {
        $(".inner06 .part07 .tit").removeClass("on");
      }
      if (scrollTop >= 0 && scrollTop <= 11000) {
        $(".inner06 .random_group_inner").addClass("off");
      } else {
        $(".inner06 .random_group_inner").removeClass("off");
      }
      if (scrollTop >= 23300 && scrollTop <= 25000) {
        $(".txt_off_on_inner .txt .txt_part01").removeClass("on");
        $(".txt_off_on_inner .txt .txt_part02").addClass("on");
        $("#section03 .inner01").addClass("on");
      } else {
        $(".txt_off_on_inner .txt .txt_part01").addClass("on");
        $(".txt_off_on_inner .txt .txt_part02").removeClass("on");
        $("#section03 .inner01").removeClass("on");
      }
      if (scrollTop >= 25200 && scrollTop <= 25999) {
        $("#section04 .volume_4 > div > span").addClass("on");
      } else {
        $("#section04 .volume_4 > .img > span").removeClass("on");
      }
      if (scrollTop >= 25800 && scrollTop <= 26499) {
        $("#section04 .volume_3 > div > span").addClass("on");
      } else {
        $("#section04 .volume_3 > .img > span").removeClass("on");
      }
      if (scrollTop >= 26300 && scrollTop <= 26999) {
        $("#section04 .volume_2 > div > span").addClass("on");
      } else {
        $("#section04 .volume_2 > .img > span").removeClass("on");
      }
      if (scrollTop >= 26800 && scrollTop <= 27900) {
        $("#section04 .volume_1 > div > span").addClass("on");
      } else {
        $("#section04 .volume_1 > .img > span").removeClass("on");
      }
      if (scrollTop >= 26200 && scrollTop <= 35500) {
        $("#section05").addClass("on");
      } else {
        $("#section05").removeClass("on");
      }
  
      if (scrollTop >= 0 && scrollTop <= 31800) {
        $("#section06").addClass("on");
      } else {
        $("#section06").removeClass("on");
      }
  
      if (scrollTop >= 38500 && scrollTop <= 39500) {
        $("#section08").addClass("on");
        $("#section08 .txt_on").addClass("on");
        $("#section08 .txt_off").addClass("off");
      } else {
        $("#section08").removeClass("on");
        $("#section08 .txt_on").removeClass("on");
        $("#section08 .txt_on").addClass("off");
        $("#section08 .txt_off").removeClass("off");
      }



    });
  
  
  
     (function () {

      const main = document.querySelectorAll('#main')[0].offsetTop //갈려는 곳
      const lookbook = document.querySelectorAll('#section04')[0].offsetTop //갈려는 곳
      const shop = document.querySelectorAll('#shop')[0].offsetTop + 1300 //갈려는 곳
      const about = document.querySelectorAll('#section06')[0].offsetTop //갈려는 곳
    
      $(".menu_list .home").click(function () {container.scrollTo(0, main, 3000, {});});
      $(".menu_list .lookbook").click(function () {container.scrollTo(0, lookbook, 3000, {});});
      $(".menu_list .shop").click(function () {container.scrollTo(0, shop, 3000, {});});
      $(".menu_list .about").click(function () {container.scrollTo(0, about, 3000, {});});

      
  
  
  
  
          
          
          
          
          
  
      })();
  });
  