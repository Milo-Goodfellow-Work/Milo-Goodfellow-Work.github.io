$( document ).ready(function(){
  $("body").find(".btn-hmtl5").click(function(){

    $("body").find(".card-edit").fadeOut("slow", function(){
      $(this).addClass("hide");

      $("body").find(".card-html-css").fadeIn("slow")
      $("body").find(".card-html-css").removeClass("hide");

      });



    });

  });
