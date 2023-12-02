window.addEventListener("DOMContentLoaded", function () {
  container.addListener((e) => {
    let scrollTop = container.scrollTop;
    $(".posNum").html(scrollTop);

    $(".ani").not(".visible").addClass("deactive");
    $(".visible.deactive").toggleClass("deactive", false);
  

    if (scrollTop >= 0) {
      $("#hero .cont_inner figure.left").removeClass("ani fadeInUp visible");
      $("#hero .cont_inner figure.left").addClass("deactive");
    }

    if (scrollTop < 100) {
      $("header").toggleClass("active", false);
    }
    if (scrollTop >= 100) {
      $("header").toggleClass("active", true);
    }

    if (scrollTop >= 10000 && scrollTop <= 11300) {
    }
  });



   (function () {
    
    setTimeout(()=>{
      $("#hero .visible").removeClass("visible");
    },0);
    
    setTimeout(()=>{
      $("#hero h2 .left").addClass("visible");
    },800);
    
    setTimeout(()=>{
      $("#hero h2 .right").addClass("visible");
    },840);
    
    setTimeout(()=>{
      $("#hero .txt_area p.txt img:nth-child(1)").addClass("visible");
    },900);
    
    setTimeout(()=>{
      $("#hero .txt_area p.txt img:nth-child(2)").addClass("visible");
    },950);
    
    setTimeout(()=>{
      $("#hero .txt_area p.txt img:nth-child(3)").addClass("visible");
    },990);
    
    setTimeout(()=>{
      $("#hero .cont_inner figure.right").addClass("visible");
      $("#hero .cont_inner figure.left").addClass("visible");
    },1300);
    
    setTimeout(()=>{
    },1100);
    
    setTimeout(()=>{
      $("#hero .cont_inner figure.center").addClass("visible");
    },1900);




        
        
        
        
        

    })();
});
