window.addEventListener("DOMContentLoaded", function () {
  container.addListener((e) => {
    let scrollTop = container.scrollTop;
    $(".posNum").html(scrollTop);
    
    const promotion = document.querySelectorAll('#promotion')[0].offsetTop //갈려는 곳
    const inner03 = document.querySelectorAll('#promotion .inner03')[0].offsetTop + promotion //갈려는 곳
    const roulette = document.querySelectorAll('#promotion .roulette')[0].offsetTop + inner03 //갈려는 곳

    const character_step01 = document.querySelectorAll('#character')[0].offsetTop + 900 //갈려는 곳
    const character_step02 = document.querySelectorAll('#character')[0].offsetTop + 1300 //갈려는 곳
    const character_step03 = document.querySelectorAll('#character')[0].offsetTop + 1300 //갈려는 곳
    const character_step04 = document.querySelectorAll('#character')[0].offsetTop + 1300 //갈려는 곳

    if (scrollTop >= 0) {
    }

    if (scrollTop > roulette - 1000) {
      setTimeout(()=>{
        $("#promotion .roulette.visible_2 img").addClass("circle");
      },1000);
    } else {
      $("#promotion .roulette img").removeClass("circle");
    }

    if (scrollTop > promotion - 500) {
      setTimeout(()=>{
        $("#promotion .tit_area h3.visible img:nth-child(1)").addClass("circle");
      },800);
      
    } else {
      $("#promotion .tit_area h3.visible img:nth-child(1)").removeClass("circle");
    }

    if (scrollTop > character_step01) {
      setTimeout(()=>{
        $("#character .process_area .step_1").addClass("active");
        $("#character .process_area .step_2").addClass("active");
        $("#character .process_arr .line_1").addClass("active");
      },0);
    } else {
      $("#character .process_area .step_1").removeClass("active");
      $("#character .process_area .step_2").removeClass("active");
      $("#character .process_arr .line_1").removeClass("active");
    }
    
    if (scrollTop > character_step02) {
      setTimeout(()=>{
        $("#character .process_arr .line_2").addClass("active");
      },0);
    } else {
      $("#character .process_arr .line_2").removeClass("active");
    }
    
    if (scrollTop > character_step03) {
      setTimeout(()=>{
        $("#character .process_area .step_3").addClass("active");
        $("#character .process_arr .line_3").addClass("active");
      },0);
    } else {
      $("#character .process_area .step_3").removeClass("active");
      $("#character .process_arr .line_3").removeClass("active");
    }
    
    if (scrollTop > character_step04) {
      setTimeout(()=>{
        $("#character .process_area .step_4").addClass("active");
        $("#character .process_arr .line_4").addClass("active");
      },0);
    } else {
      $("#character .process_area .step_4").removeClass("active");
      $("#character .process_arr .line_4").removeClass("active");
    }





  });



   (function () {

    setTimeout(()=>{
      $("#hero strong").addClass("fadeInRightBig");
      $("#hero .tit_top").addClass("fadeInRightBig");
      $("#hero .tit_bot").addClass("fadeInRightBig");
      $("#hero .btn_site").addClass("fadeInRightBig");
      $("#hero .character .ani").addClass("fadeInUpBig");
      $("#hero .character_area .obj_1").addClass("fadeInDownBig");
      $("#hero .character_area .obj_2").addClass("fadeInRightDownBig");
    },0);

    setTimeout(()=>{
    },100);

    setTimeout(()=>{
    },200);

    setTimeout(()=>{
    },300);

    setTimeout(()=>{
      $("#hero strong").addClass("visible");
    },400);

    setTimeout(()=>{
    },500);

    setTimeout(()=>{
    },600);

    setTimeout(()=>{
      $("#hero .tit_top").addClass("visible");
    },700);

    setTimeout(()=>{
      $("#hero .tit_bot").addClass("visible");
    },800);

    setTimeout(()=>{
      $("#hero .btn_site").addClass("visible");
      $("#hero .character .ani").addClass("visible");
    },900);

    setTimeout(()=>{
    },1000);

    setTimeout(()=>{
      $("#hero .character_area .obj_2").addClass("visible");
    },1100);
    
    setTimeout(()=>{
    },1200);

    setTimeout(()=>{
      $("#hero .character_area .obj_1").addClass("visible");
    },1300);

    setTimeout(()=>{
      $("#hero .quiz").addClass("active");
    },1400);




        
        
        
        
        

    })();
});
