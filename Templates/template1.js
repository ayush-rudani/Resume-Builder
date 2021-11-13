function addStr(str, index, stringToAdd){
    return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
}

function appender(z,value){
    return z.substring(0,z.length-1)+value+z.substring(z.length-1);
}

window.onload=function(){
    document.getElementsByClassName("one")[0].click();
};  

$(document).ready(function(){
    $('.one').css("border","3px solid white");
    $('.pelement').click(function(){
        $('.pelement').css("border","3px solid transparent");
        $(this).css("border","3px solid white");
        $('.left_side').css("background-color",$(this).css("background-color"));
        $('.right_side .about .text h4').css("color",appender(addStr($(this).css("background-color"),3,"a"),", 0.82")); 
        $('.right_side .percent div').css("background-color",appender(addStr($(this).css("background-color"),3,"a"),", 0.65"));
    })
})