function makeVisible(){
    $('.accordion-header').css("display","block");
}

function delWork(event){
    event.preventDefault();
    console.log($('.accordion-item').length)
    if($('.accordion-item').length>1){
        event.target.parentElement.parentElement.parentElement.remove();
    }
}

$(document).ready(function(){


    let workAdder = $('#accordionWork').html();
    let workCounter = 1;

    $('#add_work').click(function(){
        workCounter++;
        $('.accordion-header').css("display","block");
        let count = $('.accordion-item').length;
        if(document.getElementsByClassName('accordion-item')[count-1].getElementsByClassName('accordion-collapse')[0].classList.contains("show")){
            document.getElementsByClassName('accordion-item')[count-1].getElementsByClassName('accordion-button')[0].click();
            // $('.accordion-button')[count-1].click();
        }
        $('.accordion').append(workAdder);
        
        $('.accordion-header').last().attr("id","heading"+workCounter);
        $('.accordion-collapse').last().attr("aria-labelledby","heading"+workCounter);
        $('.accordion-collapse').last().attr("id","collapse"+workCounter);
        $('.accordion-button').last().attr("data-bs-target","#collapse"+workCounter);
        $('.accordion-button').last().attr("aria-controls","collapse"+workCounter);
    })

    
    
})