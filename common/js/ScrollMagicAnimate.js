(function () {
  // init controller
  var controller = new ScrollMagic.Controller();



  
  const nav_on = document.querySelectorAll('.nav_off');
  const ratio = []
  const elHeight = [];

  // 컨텐츠 높이값, 화면 비율 설정
  nav_on.forEach( (el, index) => {
    const height = el.clientHeight;
    const num = Number((height/window.innerHeight).toFixed(2));
    elHeight.push(height);
    ratio.push(num);
  });

  // 최소값 결정
  /* let min = ratio.reduce( (prev, curr) => {
    return prev > curr ? curr: prev
  }); */
  
  nav_on.forEach( (el, index) => {
    const height = el.clientHeight;
    const id = el.getAttribute('id');
    new ScrollMagic.Scene({
      triggerElement: `#${id}`,
      //duration: elHeight[index],
      duration: height,
      //triggerHook: 1-min,
      triggerHook: 0,
    })
      .setClassToggle(`.gnb_area`, "active")
      .addTo(controller);
  });

  window.addEventListener('resize', function() {
    if (window.innerWidth < 800) {
      controller.enabled(false);
    }
  });





  var faderotateLeft_inner = document.querySelectorAll(".faderotateLeft_inner > *");
  var faderotateLeftBig_inner = document.querySelectorAll(".faderotateLeftBig_inner > *");
  var faderotateLeftBig = document.getElementsByClassName("faderotateLeftBig");
  var faderotateLeft = document.getElementsByClassName("faderotateLeft");

  for (var i = 0; i < faderotateLeftBig_inner.length; i++) {
    faderotateLeftBig_inner[i].classList.add("faderotateLeftBig");
  }
  for (var i = 0; i < faderotateLeft_inner.length; i++) {
    faderotateLeft_inner[i].classList.add("faderotateLeft");
  }


  var faderotateRight_inner = document.querySelectorAll(".faderotateRight_inner > *");
  var faderotateRightBig_inner = document.querySelectorAll(".faderotateRightBig_inner > *");
  var faderotateRightBig = document.getElementsByClassName("faderotateRightBig");
  var faderotateRight = document.getElementsByClassName("faderotateRight");

  for (var i = 0; i < faderotateRightBig_inner.length; i++) {
    faderotateRightBig_inner[i].classList.add("faderotateRightBig");
  }
  for (var i = 0; i < faderotateRight_inner.length; i++) {
    faderotateRight_inner[i].classList.add("faderotateRight");
  }


  var fadeIn_inner = document.querySelectorAll(".fadeIn_inner > *");
  var fadeInBig_inner = document.querySelectorAll(".fadeInBig_inner > *");
  var fadeInBig = document.getElementsByClassName("fadeInBig");
  var fadeIn = document.getElementsByClassName("fadeIn");

  for (var i = 0; i < fadeInBig_inner.length; i++) {
    fadeInBig_inner[i].classList.add("fadeInBig");
  }
  for (var i = 0; i < fadeIn_inner.length; i++) {
    fadeIn_inner[i].classList.add("fadeIn");
  }
    

  var fadeInUpBig_inner = document.querySelectorAll(".fadeInUpBig_inner > *");
  var fadeInUpMedium_inner = document.querySelectorAll(".fadeInUpMedium_inner span");
  var fadeInUp_inner = document.querySelectorAll(".fadeInUp_inner > *");
  var fadeInUpBig = document.getElementsByClassName("fadeInUpBig");
  var fadeInUpMedium = document.getElementsByClassName("fadeInUpMedium");
  var fadeInUp = document.getElementsByClassName("fadeInUp");

  for (var i = 0; i < fadeInUpBig_inner.length; i++) {
    fadeInUpBig_inner[i].classList.add("fadeInUpBig");
  }
  for (var i = 0; i < fadeInUpMedium_inner.length; i++) {
    fadeInUpMedium_inner[i].classList.add("fadeInUpMedium");
  }
  for (var i = 0; i < fadeInUp_inner.length; i++) {
    fadeInUp_inner[i].classList.add("fadeInUp");
  }
    
    
  var fadeInDownBig_inner = document.querySelectorAll(".fadeInDownBig_inner > *");
  var fadeInDown_inner = document.querySelectorAll(".fadeInDown_inner > *");
  var fadeInDownBig = document.getElementsByClassName("fadeInDownBig");
  var fadeInDown = document.getElementsByClassName("fadeInDown");

  for (var i = 0; i < fadeInDownBig_inner.length; i++) {
    fadeInDownBig_inner[i].classList.add("fadeInDownBig");
  }
  for (var i = 0; i < fadeInDown_inner.length; i++) {
    fadeInDown_inner[i].classList.add("fadeInDown");
  }
    
  var fadeInLeftBig_inner = document.querySelectorAll(".fadeInLeftBig_inner > *");
  var fadeInLeft_inner = document.querySelectorAll(".fadeInLeft_inner > *");    
  var fadeInLeftBig = document.getElementsByClassName("fadeInLeftBig");
  var fadeInLeft = document.getElementsByClassName("fadeInLeft");

  for (var i = 0; i < fadeInLeftBig_inner.length; i++) {
    fadeInLeftBig_inner[i].classList.add("fadeInLeftBig");
  }
  for (var i = 0; i < fadeInLeft_inner.length; i++) {
    fadeInLeft_inner[i].classList.add("fadeInLeft");
  }

  
  var fadeInLeftUpBig_inner = document.querySelectorAll(".fadeInLeftUpBig_inner > *");
  var fadeInLeftUp_inner = document.querySelectorAll(".fadeInLeftUp_inner > *");
  var fadeInLeftUpBig = document.getElementsByClassName("fadeInLeftUpBig");
  var fadeInLeftUp = document.getElementsByClassName("fadeInLeftUp");

  for (var i = 0; i < fadeInLeftUpBig_inner.length; i++) {
    fadeInLeftUpBig_inner[i].classList.add("fadeInLeftUpBig");
  }
  for (var i = 0; i < fadeInLeftUp_inner.length; i++) {
    fadeInLeftUp_inner[i].classList.add("fadeInLeftUp");
  }

  var fadeInLeftDownBig_inner = document.querySelectorAll(".fadeInLeftDownBig_inner > *");
  var fadeInLeftDown_inner = document.querySelectorAll(".fadeInLeftDown_inner > *");
  var fadeInLeftDownBig = document.getElementsByClassName("fadeInLeftDownBig");
  var fadeInLeftDown = document.getElementsByClassName("fadeInLeftDown");

  for (var i = 0; i < fadeInLeftDownBig_inner.length; i++) {
    fadeInLeftDownBig_inner[i].classList.add("fadeInLeftDownBig");
  }
  for (var i = 0; i < fadeInLeftDown_inner.length; i++) {
    fadeInLeftDown_inner[i].classList.add("fadeInLeftDown");
  }
    
  
  var fadeInRightUpBig_inner = document.querySelectorAll(".fadeInRightUpBig_inner > *");
  var fadeInRightUp_inner = document.querySelectorAll(".fadeInRightUp_inner > *");
  var fadeInRightUpBig = document.getElementsByClassName("fadeInRightUpBig");
  var fadeInRightUp = document.getElementsByClassName("fadeInRightUp");

  for (var i = 0; i < fadeInRightUpBig_inner.length; i++) {
    fadeInRightUpBig_inner[i].classList.add("fadeInRightUpBig");
  }
  for (var i = 0; i < fadeInRightUp_inner.length; i++) {
    fadeInRightUp_inner[i].classList.add("fadeInRightUp");
  }

  var fadeInRightDownBig_inner = document.querySelectorAll(".fadeInRightDownBig_inner > *");
  var fadeInRightDown_inner = document.querySelectorAll(".fadeInRightDown_inner > *");
  var fadeInRightDownBig = document.getElementsByClassName("fadeInRightDownBig");
  var fadeInRightDown = document.getElementsByClassName("fadeInRightDown");

  for (var i = 0; i < fadeInRightDownBig_inner.length; i++) {
    fadeInRightDownBig_inner[i].classList.add("fadeInRightDownBig");
  }
  for (var i = 0; i < fadeInRightDown_inner.length; i++) {
    fadeInRightDown_inner[i].classList.add("fadeInRightDown");
  }
  var fadeInRightBig_inner = document.querySelectorAll(".fadeInRightBig_inner > *");
  var fadeInRight_inner = document.querySelectorAll(".fadeInRight_inner > *");
  var fadeInRightBig = document.getElementsByClassName("fadeInRightBig");
  var fadeInRight = document.getElementsByClassName("fadeInRight");

  for (var i = 0; i < fadeInRightBig_inner.length; i++) {
    fadeInRightBig_inner[i].classList.add("fadeInRightBig");
  }
  for (var i = 0; i < fadeInRight_inner.length; i++) {
    fadeInRight_inner[i].classList.add("fadeInRight");
  }


  for (var i = 0; i < fadeInBig.length; i++) {
    fadeInBig[i].classList.add("ani");
    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: fadeInBig[i], // y value not modified, so we can use element as trigger as well
      offset: 50, // start a little later
      triggerHook: 0.9,
    })
      .setClassToggle(fadeInBig[i], "visible_2") // add class toggle
      //.addIndicators({ name: "가드" }) // 가이드드 추가(플러그인 필요)
      .addTo(controller);
  }

  for (var i = 0; i < fadeIn.length; i++) {
    fadeIn[i].classList.add("ani");
    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: fadeIn[i], // y value not modified, so we can use element as trigger as well
      offset: 50, // start a little later
      triggerHook: 0.9,
    })
      .setClassToggle(fadeIn[i], "visible_2") // add class toggle
      //.addIndicators({ name: "가드" }) // 가이드드 추가(플러그인 필요)
      .addTo(controller);
  }


  for (var i = 0; i < fadeInUpBig.length; i++) {
    fadeInUpBig[i].classList.add("ani");
    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: fadeInUpBig[i], // y value not modified, so we can use element as trigger as well
      offset: 50, // start a little later
      triggerHook: 0.9,
    })
      .setClassToggle(fadeInUpBig[i], "visible") // add class toggle
      //.addIndicators({ name: "가드" }) // 가이드드 추가(플러그인 필요)
      .addTo(controller);
  }

  for (var i = 0; i < fadeInUpMedium.length; i++) {
    fadeInUpMedium[i].classList.add("ani");
    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: fadeInUpMedium[i], // y value not modified, so we can use element as trigger as well
      offset: 50, // start a little later
      triggerHook: 0.9,
    })
      .setClassToggle(fadeInUpMedium[i], "visible") // add class toggle
      //.addIndicators({ name: "가드" }) // 가이드드 추가(플러그인 필요)
      .addTo(controller);
  }

  for (var i = 0; i < fadeInUp.length; i++) {
    fadeInUp[i].classList.add("ani");
    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: fadeInUp[i], // y value not modified, so we can use element as trigger as well
      offset: 50, // start a little later
      triggerHook: 0.9,
    })
      .setClassToggle(fadeInUp[i], "visible") // add class toggle
      //.addIndicators({ name: "가드" }) // 가이드드 추가(플러그인 필요)
      .addTo(controller);
  }


  for (var i = 0; i < fadeInDownBig.length; i++) {
    fadeInDownBig[i].classList.add("ani");
    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: fadeInDownBig[i], // y value not modified, so we can use element as trigger as well
      offset: 50, // start a little later
      triggerHook: 0.9,
    })
      .setClassToggle(fadeInDownBig[i], "visible") // add class toggle
      //.addIndicators({ name: "가드" }) // 가이드드 추가(플러그인 필요)
      .addTo(controller);
  }

  for (var i = 0; i < fadeInDown.length; i++) {
    fadeInDown[i].classList.add("ani");
    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: fadeInDown[i], // y value not modified, so we can use element as trigger as well
      offset: 50, // start a little later
      triggerHook: 0.9,
    })
      .setClassToggle(fadeInDown[i], "visible") // add class toggle
      //.addIndicators({ name: "가드" }) // 가이드드 추가(플러그인 필요)
      .addTo(controller);
  }


  for (var i = 0; i < fadeInLeftBig.length; i++) {
    fadeInLeftBig[i].classList.add("ani");
    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: fadeInLeftBig[i], // y value not modified, so we can use element as trigger as well
      offset: 50, // start a little later
      triggerHook: 0.9,
    })
      .setClassToggle(fadeInLeftBig[i], "visible") // add class toggle
      //.addIndicators({ name: "가드" }) // 가이드드 추가(플러그인 필요)
      .addTo(controller);
  }

  for (var i = 0; i < fadeInLeft.length; i++) {
    fadeInLeft[i].classList.add("ani");
    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: fadeInLeft[i], // y value not modified, so we can use element as trigger as well
      offset: 50, // start a little later
      triggerHook: 0.9,
    })
      .setClassToggle(fadeInLeft[i], "visible") // add class toggle
      //.addIndicators({ name: "가드" }) // 가이드드 추가(플러그인 필요)
      .addTo(controller);
  }


  for (var i = 0; i < fadeInLeftUpBig.length; i++) {
    fadeInLeftUpBig[i].classList.add("ani");
    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: fadeInLeftUpBig[i], // y value not modified, so we can use element as trigger as well
      offset: 50, // start a little later
      triggerHook: 0.9,
    })
      .setClassToggle(fadeInLeftUpBig[i], "visible") // add class toggle
      //.addIndicators({ name: "가드" }) // 가이드드 추가(플러그인 필요)
      .addTo(controller);
  }

  for (var i = 0; i < fadeInLeftUp.length; i++) {
    fadeInLeftUp[i].classList.add("ani");
    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: fadeInLeftUp[i], // y value not modified, so we can use element as trigger as well
      offset: 50, // start a little later
      triggerHook: 0.9,
    })
      .setClassToggle(fadeInLeftUp[i], "visible") // add class toggle
      //.addIndicators({ name: "가드" }) // 가이드드 추가(플러그인 필요)
      .addTo(controller);
  }


  for (var i = 0; i < fadeInLeftDownBig.length; i++) {
    fadeInLeftDownBig[i].classList.add("ani");
    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: fadeInLeftDownBig[i], // y value not modified, so we can use element as trigger as well
      offset: 50, // start a little later
      triggerHook: 0.9,
    })
      .setClassToggle(fadeInLeftDownBig[i], "visible") // add class toggle
      //.addIndicators({ name: "가드" }) // 가이드드 추가(플러그인 필요)
      .addTo(controller);
  }

  for (var i = 0; i < fadeInLeftDown.length; i++) {
    fadeInLeftDown[i].classList.add("ani");
    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: fadeInLeftDown[i], // y value not modified, so we can use element as trigger as well
      offset: 50, // start a little later
      triggerHook: 0.9,
    })
      .setClassToggle(fadeInLeftDown[i], "visible") // add class toggle
      //.addIndicators({ name: "가드" }) // 가이드드 추가(플러그인 필요)
      .addTo(controller);
  }


  for (var i = 0; i < fadeInRightBig.length; i++) {
    fadeInRightBig[i].classList.add("ani");
    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: fadeInRightBig[i], // y value not modified, so we can use element as trigger as well
      offset: 50, // start a little later
      triggerHook: 0.9,
    })
      .setClassToggle(fadeInRightBig[i], "visible") // add class toggle
      //.addIndicators({ name: "가드" }) // 가이드드 추가(플러그인 필요)
      .addTo(controller);
  }

  for (var i = 0; i < fadeInRight.length; i++) {
    fadeInRight[i].classList.add("ani");
    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: fadeInRight[i], // y value not modified, so we can use element as trigger as well
      offset: 50, // start a little later
      triggerHook: 0.9,
    })
      .setClassToggle(fadeInRight[i], "visible") // add class toggle
      //.addIndicators({ name: "가드" }) // 가이드드 추가(플러그인 필요)
      .addTo(controller);
  }


  for (var i = 0; i < fadeInRightUpBig.length; i++) {
    fadeInRightUpBig[i].classList.add("ani");
    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: fadeInRightUpBig[i], // y value not modified, so we can use element as trigger as well
      offset: 50, // start a little later
      triggerHook: 0.9,
    })
      .setClassToggle(fadeInRightUpBig[i], "visible") // add class toggle
      //.addIndicators({ name: "가드" }) // 가이드드 추가(플러그인 필요)
      .addTo(controller);
  }

  for (var i = 0; i < fadeInRightUp.length; i++) {
    fadeInRightUp[i].classList.add("ani");
    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: fadeInRightUp[i], // y value not modified, so we can use element as trigger as well
      offset: 50, // start a little later
      triggerHook: 0.9,
    })
      .setClassToggle(fadeInRightUp[i], "visible") // add class toggle
      //.addIndicators({ name: "가드" }) // 가이드드 추가(플러그인 필요)
      .addTo(controller);
  }


  for (var i = 0; i < fadeInRightDownBig.length; i++) {
    fadeInRightDownBig[i].classList.add("ani");
    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: fadeInRightDownBig[i], // y value not modified, so we can use element as trigger as well
      offset: 50, // start a little later
      triggerHook: 0.9,
    })
      .setClassToggle(fadeInRightDownBig[i], "visible") // add class toggle
      //.addIndicators({ name: "가드" }) // 가이드드 추가(플러그인 필요)
      .addTo(controller);
  }

  for (var i = 0; i < fadeInRightDown.length; i++) {
    fadeInRightDown[i].classList.add("ani");
    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: fadeInRightDown[i], // y value not modified, so we can use element as trigger as well
      offset: 50, // start a little later
      triggerHook: 0.9,
    })
      .setClassToggle(fadeInRightDown[i], "visible") // add class toggle
      //.addIndicators({ name: "가드" }) // 가이드드 추가(플러그인 필요)
      .addTo(controller);
  }

  for (var i = 0; i < faderotateLeft.length; i++) {
    faderotateLeft[i].classList.add("ani");
    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: faderotateLeft[i], // y value not modified, so we can use element as trigger as well
      offset: 50, // start a little later
      triggerHook: 0.9,
    })
      .setClassToggle(faderotateLeft[i], "visible") // add class toggle
      //.addIndicators({ name: "가드" }) // 가이드드 추가(플러그인 필요)
      .addTo(controller);
  }

  for (var i = 0; i < faderotateLeftBig.length; i++) {
    faderotateLeftBig[i].classList.add("ani");
    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: faderotateLeftBig[i], // y value not modified, so we can use element as trigger as well
      offset: 50, // start a little later
      triggerHook: 0.9,
    })
      .setClassToggle(faderotateLeftBig[i], "visible") // add class toggle
      //.addIndicators({ name: "가드" }) // 가이드드 추가(플러그인 필요)
      .addTo(controller);
  }

  for (var i = 0; i < faderotateRight.length; i++) {
    faderotateRight[i].classList.add("ani");
    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: faderotateRight[i], // y value not modified, so we can use element as trigger as well
      offset: 50, // start a little later
      triggerHook: 0.9,
    })
      .setClassToggle(faderotateRight[i], "visible") // add class toggle
      //.addIndicators({ name: "가드" }) // 가이드드 추가(플러그인 필요)
      .addTo(controller);
  }

  for (var i = 0; i < faderotateRightBig.length; i++) {
    faderotateRightBig[i].classList.add("ani");
    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: faderotateRightBig[i], // y value not modified, so we can use element as trigger as well
      offset: 50, // start a little later
      triggerHook: 0.9,
    })
      .setClassToggle(faderotateRightBig[i], "visible") // add class toggle
      //.addIndicators({ name: "가드" }) // 가이드드 추가(플러그인 필요)
      .addTo(controller);
  }

})();
