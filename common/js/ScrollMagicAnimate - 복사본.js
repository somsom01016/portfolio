(function () {
  // init controller
  var controller = new ScrollMagic.Controller();
 var asdfsdf = $("[class*='fade'][class*='fade_inner']");
 var aaaaaaa = asdfsdf.addClass("냠냠");
  $("[class*='fade']").each(function (index, item) {
    for(let a = 0; a < $(item).length; a++)  {
      var class_Name = $(item)[a].className;
      var class_aaa = $(item)[a];
      var class_aaa = class_aaa;
      var k = $(this).val();
      var class_List = class_aaa.classList.item(index);
      // var class_val = $.contains(item, document.querySelectorAll("[class*='fade']"));
      // var class_ssss = $(item).textContent = `${class_List}`;

      
      console.log(class_List);
    }
  
  });

  var fade = document.querySelectorAll("[class*='fade']");

  // class가 'my_class'인 element 목록 출력
  for(let i = 0; i < fade.length; i++)  {
    var fade_i = fade[i];
    var fade_name_list = fade_i.className;
    var class_nasdfsme = fade[i].classList;


    

    
    for(let b = 0; b < class_nasdfsme.length; b++)  {
      var ansi = class_nasdfsme.item(b);

    }
        if (fade_name_list.match(/fade_inner/)) {
          var fade_children = fade_i.children;
          var fade_name_li = fade_name_list;
          var fade_na = fade_name_list.replace('_inner', '');
          var fade_text = fade_name_list.substring(1, fade_name_list.length - 2);

          //var fade_ss = '"' + fade_text +'"';


          for(let j = 0; j < fade_children.length; j++) {
            var ani = fade_children[j].classList.add('ani');
          }
          
          var fade_name = fade_name_list.slice(0, -6);
          //console.log(fade_child_classList);
        }
  }
    
  $("[class*='fade']").each(function (index, item) {
    function hasClass(fade_i, ansi) {
      return fade_i.classList.contains(ansi) = test // true or false
    };
    var fade = document.querySelectorAll("[class*='fade']");

    // class가 'my_class'인 element 목록 출력
    for(let i = 0; i < fade.length; i++)  {
      var fade_i = fade[i];
      var fade_name_list = fade_i.className;
      var class_nasdfsme = fade[i].classList;
  
   
      
      for(let b = 0; b < class_nasdfsme.length; b++)  {
        var ansi = class_nasdfsme.item(b);

  
      }
      
          if (fade_name_list.match(/fade_inner/)) {
            var fade_children = ansi.children;
            var fade_name_li = fade_name_list.match(/fade_inner/);
            var fade_na = fade_name_list.replace('_inner', '');
            var fade_text = fade_name_list.substring(1, fade_name_list.length - 2);
  
            var fade_ss = '"' + fade_text +'"';
  
  
            for(let j = 0; j < fade_children.length; j++) {
              var ani = fade_children[j].classList.add('ani');
            }
            
            var fade_name = fade_name_list.slice(0, -6);
          }
    }
    
  console.log(fade_children);
  for (var i = 0; i < fade.length; i++) {
    fade[i].classList.add("test");
    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: fade[i], // y value not modified, so we can use element as trigger as well
      offset: 50, // start a little later
      triggerHook: 0.9,
    })
      .setClassToggle(fade[i], "visible") // add class toggle
      //.addIndicators({ name: "가드" }) // 가이드드 추가(플러그인 필요)
      .addTo(controller);
  }

  });

  

  /* var tween = new TimelineMax ()
  .add([
    TweenMax.to(".header_inner .default", {opacity: 1}),
    TweenMax.to(".header_inner .reversal", {opacity: 0}),
  ]); */

})();
