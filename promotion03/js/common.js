window.addEventListener("DOMContentLoaded", function () {
  container.addListener((e) => {
    let scrollTop = container.scrollTop;
    $(".posNum").html(scrollTop);
    

    if (scrollTop >= 0) {
      $("header .header_inner").removeClass("active");
    }

    if ($(".quiz .visible")) {
      $(".quiz .ranking .bar").addClass("active");
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
