window.addEventListener("DOMContentLoaded", function () {
  container.addListener((e) => {
    let scrollTop = container.scrollTop;
    $(".posNum").html(scrollTop);
    

    if (scrollTop >= 0) {
      $("test").addClass("active");
    }

    if (scrollTop >= 10000 && scrollTop <= 11300) {
      $("test").removeClass("active");
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
