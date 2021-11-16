function template_selector() {
    if ($('#template_1').prop('checked') == true) {
        generateCV('Template_1');
    }
    else {
        generateCV('template_2');
    }
}

function generateCV(temp) {

    document.getElementById('form3').style.display = 'none';
    document.getElementById(temp).style.display = 'flex';
    document.getElementById('nav').style.display = 'none';

    //  **********      Profile Image       *********

    let file = document.getElementById('inpImg').files[0];
    let reader = new FileReader();

    reader.readAsDataURL(file);
    // console.log(reader.result);


    reader.onloadend = function () {
        document.getElementById('profilepic').src = reader.result;
    };

    //  **********    **********    **********    **********    **********


    // ************************************ First Form *******************************

    let dob = new Date($('#dob').val());
    $('#t_name').html($('#fname').val() + " " + $('#lname').val());
    $('#t_gender').html("Gender: " + $('#gender').val());
    $('#t_dob').html("DOB: " + dob.getDate() + " / " + (dob.getMonth() + 1) + " / " + dob.getFullYear());
    $('#t_email').html($('#email').val());
    $('#t_number').html($('#number').val());
    $('#t_address').html($('#address').val() + "<br>" + $('#zip').val() + "<br>" + $('#city').val() + ", " + $('#state').val() + ", " + $('#country').val());

    if ($('#website').val().trim() == "") {
        $('#t_website').parent().css('display', 'none');
    }
    else {
        $('#t_website').html($('#website').val());
    }

    if ($('#linkedIn').val().trim() == "") {
        $('#t_linkedIn').parent().css('display', 'none');
    }
    else {
        $('#t_linkedIn').html($('#linkedIn').val());
    }

    //  **********    **********    **********    **********    **********

    // ************************ Second form *************************

    // <li>
    //     <h5>2010-2013</h5>
    //     <h4>Master's Degree in Computer Science</h4>
    //     <h4>University name</h4>
    // </li>

    let edu_items = $('#accordionEdu .accordion-item').length;
    for (let i = 0; i < edu_items; i++) {
        let degree = $(`#accordionEdu .accordion-item:nth-child(${i + 1}) .degree`).val();
        let srt_date = new Date($(`#accordionEdu .accordion-item:nth-child(${i + 1}) .edu_start`).val());
        srt_date = srt_date.getFullYear();

        let end_date = "";
        if ($(`#accordionEdu .accordion-item:nth-child(${i + 1}) .end_date_toggle`).prop('checked')) {
            end_date = 'Present';
        }
        else {
            end_date = new Date($(`#accordionEdu .accordion-item:nth-child(${i + 1}) .end_date`).val());
            end_date = end_date.getFullYear();
        }
        let school = $(`#accordionEdu .accordion-item:nth-child(${i + 1}) .school`).val();
        console.log(srt_date,end_date,degree,school);
        // .t1 .left_side .education ul
        // if(degree.val().trim()=="" || school.val().trim()=="" || srt_date || end_date){
        //     continue;
        // }
        $('.t1 .left_side .education ul').append(`<li>
            <h5>${srt_date} - ${end_date}</h5>
            <h4>${degree}</h4>
            <h4>${school}</h4>
        </li>`);
    }
    //  **********    **********    **********    **********    **********
}