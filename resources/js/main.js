$(document).ready(function () {
    //dESIGNING STICKY MENU//
    $(".js--services-section").waypoint(function (direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
       
        } else {
            $("nav").removeClass("sticky");
           
        }
    });


    //MIXITUP PORTFOLIO SECTION//
    var mixer = mixitup('.container');

//    smooyh scroll for ie/edge/safari
$("a").on('click', function(event){

if (this.hash !== "") {
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offSet().top
    }, 800, function(){
        window.location.hash = hash;
    });
    

}



});

function openNav(){
    document.getElementById("myNav").style.width = "100%";
}
function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}