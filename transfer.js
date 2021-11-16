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


    //  **********    Education    **********

    let edu_items = $('#accordionEdu .accordion-item').length;
    for (let i = 0; i < edu_items; i++) {
        let degree = $(`#accordionEdu .accordion-item:nth-child(${i + 1}) .degree`).val().trim();
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
        let school = $(`#accordionEdu .accordion-item:nth-child(${i + 1}) .school`).val().trim();
        // console.log(srt_date, end_date, degree, school);

        if (degree == "" || school == "" || srt_date == NaN || end_date == NaN) {
            continue;
        }
        $('.t1 .left_side .education ul').append(`<li>
            <h5>${srt_date} - ${end_date}</h5>
            <h4>${degree}</h4>
            <h4>${school}</h4>
        </li>`);
    }


    //  **********    Work    **********

    let work_items = $('#accordionWork .accordion-item').length;

    for (let i = 0; i < work_items; i++) {
        let job_title = $(`#accordionWork .accordion-item:nth-child(${i + 1}) .job_title`).val().trim();
        let company_name = $(`#accordionWork .accordion-item:nth-child(${i + 1}) .company_name`).val().trim();
        let srt_date = new Date($(`#accordionWork .accordion-item:nth-child(${i + 1}) .work_start`).val());
        srt_date = srt_date.getFullYear();

        let end_date = "";
        if ($(`#accordionWork .accordion-item:nth-child(${i + 1}) .end_date_toggle`).prop('checked')) {
            end_date = 'Present';
        }
        else {
            end_date = new Date($(`#accordionWork .accordion-item:nth-child(${i + 1}) .end_date`).val());
            end_date = end_date.getFullYear();
        }
        let work_desc = $(`#accordionWork .accordion-item:nth-child(${i + 1}) .work_desc`).val().trim();

        if (job_title == "" || company_name == "" || srt_date == NaN || end_date == NaN) {
            continue;
        }
        $('.t1 .right_side .experience').append(
            `<div class="box">
            <div class="year_company">
                <h5>${srt_date} - ${end_date}</h5>
                <h5>${company_name}</h5>
            </div>
            <div class="text">
                <h4>${job_title}</h4>
                <p>${work_desc}</p>
            </div>
        </div>`
        )
    }

    //  **********    Skills    **********

    let skill_items = $('#accordionSkill .accordion-item').length;
    for (let i = 0; i < skill_items; i++) {
        let skill = $(`#accordionSkill .accordion-item:nth-child(${i + 1}) .skill`).val().trim();

        if (skill == "") {
            continue;
        }
        $('.t1 .right_side .skills .box').append(`
            <h4>${skill}</h4>`);
    }


    //  **********    Interest    **********

    let interest_items = $('#accordionInt .accordion-item').length;
    for (let i = 0; i < interest_items; i++) {
        let interest = $(`#accordionInt .accordion-item:nth-child(${i + 1}) .hobby`).val().trim();

        if (interest == "") {
            continue;
        }
        $('.t1 .right_side .interest ul').append(`
             <li>${interest}</li>`);
    }

    // <li><span class="text">English</span></li>

    //  **********    Languages    **********

    let lang_items = $('#accordionLang .accordion-item').length;
    for (let i = 0; i < lang_items; i++) {
        let lang = $(`#accordionLang .accordion-item:nth-child(${i + 1}) .lang`).val().trim();

        if (lang == "") {
            continue;
        }
        $('.t1 .left_side .language ul').append(`<li><span class="text">${lang}</span></li>`);
    }


    //  **********    Archievements    **********

    // let achv = $(`#achv_description`).val().trim();
    let achv = $(`#achv_description`).val().replaceAll("\n", "<br />\r\n");
    if (achv !== "") {
        $('.t1 .right_side .achievements').append(`<p>${achv}</p>`);
    }


    //  **********    **********    **********    **********    **********
}