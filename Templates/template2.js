$(document).ready(function(){
    console.log("hi");
    $('.two').css("border","3px solid white");
    $('.pelement').click(function(){
       $('.pelement').css("border","3px solid transparent");
       $(this).css("border","3px solid white");
       $('.upper').css("background-color",$(this).css("background-color"));
    })
})