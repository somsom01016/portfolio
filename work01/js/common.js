window.addEventListener("DOMContentLoaded", function () {
  
  
  container.addListener((e) => {
    let scrollTop = container.scrollTop;
    $(".posNum").html(scrollTop);



    if (scrollTop > 0) {
      setTimeout(()=>{
        $("#hero h2.fade").removeClass("fade");
        $("#hero .active").addClass("visible");
      },0);
    }

    if (scrollTop >= 0) {
      setTimeout(()=>{
        $("#output .about h5 img:nth-child(1)").removeClass("circle");
        $("#output .about h5.visible img:nth-child(1)").addClass("circle");
      },2000);
    }





});



(function () {
  setTimeout(()=>{
    $("#hero h2 .visible").removeClass("visible").addClass("active");
  },0);

  setTimeout(()=>{
    $("main.fade #gnb .visible").removeClass("visible").addClass("active");
    $("header.fade .visible").removeClass("visible").addClass("active");
  },0);

  setTimeout(()=>{
    $("main #gnb .active").removeClass("active").addClass("visible");
    $("main.fade").removeClass("fade");

    $("header .active").removeClass("active").addClass("visible");
    $("header.fade").removeClass("fade");
  },700);


  
  const overview = document.querySelectorAll('#overview')[0].offsetTop //갈려는 곳
  const output = document.querySelectorAll('#output')[0].offsetTop //갈려는 곳

  $(".btn_work").click(function () {container.scrollTo(0, overview, 3000, {});});
  $(".btn_gui").click(function () {container.scrollTo(0, output, 5000, {});});









    })();
});
