$(document).ready(function(){
    $('.one').css("border","3px solid white");
    $('.pelement').click(function(){
        $('.pelement').css("border","3px solid transparent");
        $(this).css("border","3px solid white");
        $('.left_side').css("background-color",$(this).css("background-color"));
    })
})