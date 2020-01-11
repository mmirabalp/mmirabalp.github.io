var close = "fa-bars";
var open = "fa-times";
var menuIcon = $("#menu-icon");

$("#menu").click(function(){
    $("#collapsibleNavbar").toggle();      
      if (menuIcon.hasClass(open)) {
         $("#menu-icon")
           .removeClass(open)
           .addClass(close);
      }else{
        $("#menu-icon")
          .removeClass(close)
          .addClass(open);
      }  
});


