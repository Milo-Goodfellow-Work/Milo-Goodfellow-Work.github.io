$( document ).ready(function(){

  //Go to HTML/CSS from home
  $("body").find(".btn-hmtl5").click(function(){

    $("body").find(".card-edit").fadeOut("slow", function(){
      $(this).addClass("hide");
      $("body").find(".html-css-fade").fadeIn("slow");
      $("body").find(".card-html-css").removeClass("hide");
      $("body").find(".x-button").removeClass("hide");
      $("body").find(".center-left").removeClass("l3");
      $("body").find(".center-right").removeClass("l3");
      $("body").find(".l6").addClass("l12");
      $("body").find(".l6").removeClass("l6");

      });
    });

    //Return home from HTML/CSS
    $("body").find(".x-button").click(function(){
      $("body").find(".html-css-fade").fadeOut("slow",function(){
        $(this).addClass("hide");

        $("body").find(".card-edit").fadeIn("slow");
        $("body").find(".card-edit").removeClass("hide");

        $("body").find(".center-left").addClass("l3");
        $("body").find(".center-right").addClass("l3");
        $("body").find(".l12").addClass("l6");
        $("body").find(".l12").removeClass("l12");

      });
    });


  });
