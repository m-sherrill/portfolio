 // if clicking on the about me button //
 $(".aboutMeLink").on("click", function(){
  $("#fixedMenu").css("display", "block")
  $("#aboutMe").fadeIn(2000).css("display", "block")
  $("#workContainer").css("display", "none")
  $("#intro").css("display", "none")
  $("#contactMe").css("display", "none")
  
})

// if clicking on the view work button //
  $(".workLink").on("click", function() {
    $("#fixedMenu").css("display", "block")
    $("#workContainer").fadeIn(2000).css("display", "block")
    $("#intro").css("display", "none")
    $("#aboutMe").css("display", "none")
    $("#contactMe").css("display", "none")
    $("#small4img").attr("src", "assets/images/small1.png")
  })


  // If clicking the button for contact //
  $(".contactMeLink").on("click", function(){
    $("#fixedMenu").css("display", "block")
    $("#contactMe").fadeIn(2000).css("display", "block")
    $("#workContainer").css("display", "none")
    $("#intro").css("display", "none")
    $("#aboutMe").css("display", "none")
  })

   // if clicking the home button //
   $(".introLink").on("click", function(){
    $("#fixedMenu").css("display", "none")
    $("#intro").fadeIn(2000).css("display", "block")
    $("#workContainer").css("display", "none")
    $("#aboutMe").css("display", "none")
    $("#contactMe").css("display", "none")
    $("#small4img").attr("src", "assets/images/small3.png")
  })

   // if clicking the home button //
   $(".introLinkfixed").on("click", function(){
    $("#fixedMenu").css("display", "none")
    $("#intro").fadeIn(2000).css("display", "block")
    $("#workContainer").css("display", "none")
    $("#aboutMe").css("display", "none")
    $("#contactMe").css("display", "none")
    $("#small4img").attr("src", "assets/images/small3.png")
  })

  // Initiates Corner Menu
  $(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });

//  Inititates ToolTips
  $(document).ready(function(){
    $('.tooltipped').tooltip();
  });
      