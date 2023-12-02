window.addEventListener("DOMContentLoaded", function () {
  container.addListener((e) => {
    let scrollTop = container.scrollTop;
    $(".posNum").html(scrollTop);


    if (scrollTop >= 0) {
      setTimeout(()=>{
        $("footer .itm_area02 strong.kr").removeClass("txt_none");
        $("footer .itm_area02 strong.kr.visible").addClass("txt_none");
        $("#profile .inner01 .img_area").removeClass("active");
        $("#profile .inner01 .img_area.visible").addClass("active");
      },0);
    }


  });



   (function () {
    setTimeout(()=>{
      $("main.fade .visible").removeClass("visible").addClass("active");
    },0);
  
    setTimeout(()=>{
      $("main .active").removeClass("active").addClass("visible");
      $("main.fade").removeClass("fade");
    },700);





        
        
        
        
        

    })();
});
