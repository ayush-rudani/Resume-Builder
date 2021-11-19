$(document).ready(function () {
    $('.t2 .two').css("border", "3px solid white");
    $('.t2 .pelement').click(function () {
        $('.t2 .pelement').css("border", "3px solid transparent");
        $(this).css("border", "3px solid white");
        $('.t2 .upper').css("background-color", $(this).css("background-color"));
    })
})