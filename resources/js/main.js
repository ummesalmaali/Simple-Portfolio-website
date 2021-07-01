$(document).ready(function () {
    //dESIGNING STICKY MENU//
    $(".js--services-section").waypoint(function (direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
            $(".main-nav").addClass("m-0");
        } else {
            $("nav").removeClass("sticky");
            $(".main-nav").removeClass("m-0");
        }
    });


    //MIXITUP PORTFOLIO SECTION//
    var mixer = mixitup('.container');
});