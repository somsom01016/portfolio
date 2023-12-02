window.addEventListener("DOMContentLoaded", function () {
  
  
  container.addListener((e) => {
    let scrollTop = container.scrollTop;
    $(".posNum").html(scrollTop);


/* 
    if (scrollTop < 100) {
      $("header").toggleClass("active", false);
    }
    if (scrollTop >= 100) {
      $("header").toggleClass("active", true);
      $("header").addClass("sdfsdf");
    }
 */


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
