function makeVisible(){
    $('.accordion-header').css("display","block");
}

$(document).ready(function(){


    let workAdder = $('#accordionWork').html();
    let workCounter = 1;

    $('#add_work').click(function(){
        workCounter++;
        $('.accordion-header').css("display","block");
        if($('#collapse'+(workCounter-1)).hasClass('show')){
            $('.accordion-button')[workCounter-2].click();
        }
        $('.accordion').append(workAdder);
        
        $('.accordion-header').last().attr("id","heading"+workCounter);
        $('.accordion-collapse').last().attr("aria-labelledby","heading"+workCounter);
        $('.accordion-collapse').last().attr("id","collapse"+workCounter);
        $('.accordion-button').last().attr("data-bs-target","#collapse"+workCounter);
        $('.accordion-button').last().attr("aria-controls","collapse"+workCounter);
    })

    
})