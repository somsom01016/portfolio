window.addEventListener("DOMContentLoaded", function () {
  container.addListener((e) => {
    let scrollTop = container.scrollTop;
    $(".posNum").html(scrollTop);
    
    //const nav_active = document.querySelectorAll('.nav_active')[0].offsetTop //갈려는 곳

    if (scrollTop >= 0) {
      $("header .gnb_area").addClass("bg");
    }

    if (scrollTop >= 7800 && scrollTop <= 8100) {
      $("#main header .gnb_area").addClass("active");
    }


    if (scrollTop >= 10000 && scrollTop <= 11300) {
      $("#sub.company .gnb_area").removeClass("active");
    }

    if (scrollTop >= 11300 && scrollTop <= 12400) {
      $("#sub.company .gnb_area").addClass("active");
    }
    

    if (scrollTop >= 6800 && scrollTop <= 8600) {
      $("#sub.product .gnb_area").removeClass("active");
    }

    if (scrollTop >= 8600 && scrollTop <= 9500) {
      $("#sub.product .gnb_area").addClass("active");
    }

    if (scrollTop >= 4200 && scrollTop <= 5500) {
      $("#sub.product .quality .desc").addClass("active");
    } else {
      $("#sub.product .quality .desc").removeClass("active");
    }

    if (scrollTop >= 2500 && scrollTop <= 3800) {
      $("#sub.ir .financial .chart").addClass("active");
    } else {
      $("#sub.ir .financial .chart").removeClass("active");
    }

    if (scrollTop >= 4800 && scrollTop <= 6200) {
      $("#sub.ir .shareholders .pie_chart").addClass("active");
    } else {
      $("#sub.ir .shareholders .pie_chart").removeClass("active");
    }




  });



   (function () {
    /* setTimeout(()=>{
      $("#sub #section01 > *").addClass("none");
    },0); */




        
        
        
        
        

    })();
});
