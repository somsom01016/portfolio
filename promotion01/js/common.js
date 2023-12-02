window.addEventListener("DOMContentLoaded", function () {
  
  
  container.addListener((e) => {
    let scrollTop = container.scrollTop;
    $(".posNum").html(scrollTop);

/* 
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
