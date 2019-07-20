$( document ).ready(function(){

  //Go to HTML/CSS from home
  $("body").find(".btn-hmtl5").click(function(){
    $("body").find(".card-edit").addClass("hide");
    $("body").find(".html-css-fade").fadeIn("slow");
    $("body").find(".card-html-css").removeClass("hide");
    $("body").find(".x-button").removeClass("hide");
    $("body").find(".center-left").removeClass("l3");
    $("body").find(".center-right").removeClass("l3");
    $("body").find(".l6").addClass("l12");
    $("body").find(".l6").removeClass("l6");

  });

    //Return home from HTML/CSS
    $("body").find(".x-button").click(function(){
      $("body").find(".html-css-fade").addClass("hide");
      $("body").find(".card-edit").fadeIn("slow");
      $("body").find(".card-edit").removeClass("hide");
      $("body").find(".center-left").addClass("l3");
      $("body").find(".center-right").addClass("l3");
      $("body").find(".l12").addClass("l6");
      $("body").find(".l12").removeClass("l12");

    });

    $("body").find(".btn-javascript").click(function(){
      $("body").find(".card-edit").addClass("hide");
      $("body").find(".javascript-fade").fadeIn("slow");
      $("body").find(".javascript-fade").removeClass("hide");
      $("body").find(".center-left").removeClass("l3");
      $("body").find(".center-right").removeClass("l3");
      $("body").find(".l6").addClass("l12");
      $("body").find(".l6").removeClass("l6");

    });

    $("body").find(".x-button-js").click(function(){
      $("body").find(".javascript-fade").addClass("hide");
      $("body").find(".card-edit").fadeIn("slow");
      $("body").find(".card-edit").removeClass("hide");
      $("body").find(".center-left").addClass("l3");
      $("body").find(".center-right").addClass("l3");
      $("body").find(".l12").addClass("l6");
      $("body").find(".l12").removeClass("l12");

    });

    $("body").on("click", ".right-chevron", function(){
      let StoreLocalClassPos1 = '';
      let StoreLocalClassPos2 = '';
      let StoreLocalClassPos3 = '';

      StoreLocalClassPos1 = $("div[pos_value='pos-1']").attr("class");
      StoreLocalClassPos2 = $("div[pos_value='pos-2']").attr("class");
      StoreLocalClassPos3 = $("div[pos_value='pos-3']").attr("class");

      $("div[pos_value='pos-1']").switchClass(StoreLocalClassPos1, StoreLocalClassPos3, "linear");
      $("div[pos_value='pos-2']").switchClass(StoreLocalClassPos2, StoreLocalClassPos1, "linear");
      $("div[pos_value='pos-3']").switchClass(StoreLocalClassPos3, StoreLocalClassPos2, "linear");


    });

    $("body").on("click", ".left-chevron", function(){
      let StoreLocalClassPos1 = '';
      let StoreLocalClassPos2 = '';
      let StoreLocalClassPos3 = '';

      StoreLocalClassPos1 = $("div[pos_value='pos-1']").attr("class");
      StoreLocalClassPos2 = $("div[pos_value='pos-2']").attr("class");
      StoreLocalClassPos3 = $("div[pos_value='pos-3']").attr("class");

      $("div[pos_value='pos-1']").switchClass(StoreLocalClassPos1, StoreLocalClassPos2, "linear");
      $("div[pos_value='pos-2']").switchClass(StoreLocalClassPos2, StoreLocalClassPos3, "linear");
      $("div[pos_value='pos-3']").switchClass(StoreLocalClassPos3, StoreLocalClassPos1, "linear");


    });

    $(function(){
      $("#draggable").draggable({containment: ".mouse-follow-container"});

    });

  });
