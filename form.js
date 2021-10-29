let edu = 0;
let skill = 0;
let work = 0;
let interest = 0;

// Work Experience

function wmakeVisible() {
  $("#accordionWork .accordion-header").css("display", "block");
}

function delWork(event) {
  event.preventDefault();
  if ($("#accordionWork .accordion-item").length > 1) {
    wmakeVisible();
    event.target.parentElement.parentElement.remove();
  }
  event.stopPropagation();
}

function delWork2(event) {
  event.preventDefault();
  if ($("#accordionWork .accordion-item").length > 1) {
    wmakeVisible();
    event.target.parentElement.parentElement.parentElement.remove();
  }
  event.stopPropagation();
}

// Education and Qualifications

function emakeVisible() {
  $("#accordionEdu .accordion-header").css("display", "block");
}

function delEdu(event) {
  event.preventDefault();
  if ($("#accordionEdu .accordion-item").length > 1) {
    emakeVisible();
    event.target.parentElement.parentElement.remove();
  }
  event.stopPropagation();
}

function delEdu2(event) {
  event.preventDefault();
  if ($("#accordionEdu .accordion-item").length > 1) {
    emakeVisible();
    event.target.parentElement.parentElement.parentElement.remove();
  }
  event.stopPropagation();
}

// Skills

function smakeVisible() {
  $("#accordionSkill .accordion-header").css("display", "block");
}

function delSkill(event) {
  event.preventDefault();
  if ($("#accordionSkill .accordion-item").length > 1) {
    smakeVisible();
    event.target.parentElement.parentElement.remove();
  }
  event.stopPropagation();
}

function delSkill2(event) {
  event.preventDefault();
  if ($("#accordionSkill .accordion-item").length > 1) {
    smakeVisible();
    event.target.parentElement.parentElement.parentElement.remove();
  }
  event.stopPropagation();
}

// Interests

function imakeVisible() {
  $("#accordionInt .accordion-header").css("display", "block");
}

function delInt(event) {
  event.preventDefault();
  if ($("#accordionInt .accordion-item").length > 1) {
    imakeVisible();
    event.target.parentElement.parentElement.remove();
  }
  event.stopPropagation();
}

function delInt2(event) {
  event.preventDefault();
  if ($("#accordionInt .accordion-item").length > 1) {
    imakeVisible();
    event.target.parentElement.parentElement.parentElement.remove();
  }
  event.stopPropagation();
}

$(document).ready(function () {

  // Work Experience
  $('.fc2').click(function(){
    work = 1;
    $('.fc2').off('click');
  })
  let workAdder = $("#accordionWork").html();
  let workCounter = 1;

  $("#add_work").click(function () {
    workCounter++;
    if ($("#accordionWork .accordion-item").length > 0) {
      $("#accordionWork .accordion-header").css("display", "block");
      let count = $("#accordionWork .accordion-item").length;
      if (document.getElementById("accordionWork").getElementsByClassName("accordion-item")[count - 1].getElementsByClassName("accordion-collapse")[0].classList.contains("show")){
        document.getElementById("accordionWork").getElementsByClassName("accordion-item")[count - 1].getElementsByClassName("accordion-button")[0].click();
      }
    }
    $("#accordionWork").append(workAdder);

    $("#accordionWork .accordion-header").last().attr("id", "wheading" + workCounter);
    $("#accordionWork .accordion-collapse").last().attr("aria-labelledby", "wheading" + workCounter);
    $("#accordionWork .accordion-collapse").last().attr("id", "wcollapse" + workCounter);
    $("#accordionWork .accordion-button").last().attr("data-bs-target", "#wcollapse" + workCounter);
    $("#accordionWork .accordion-button").last().attr("aria-controls", "wcollapse" + workCounter);
  });

  $(".fc2").mouseleave(function () {
    if(work == 0){return;}
    let timer = window.setTimeout(function(){
      wmakeVisible();
      let count = $("#accordionWork .accordion-item").length;
      for (let i = 0; i < count; i++) {
        if (document.getElementById("accordionWork").getElementsByClassName("accordion-item")[i].getElementsByClassName("accordion-collapse")[0].classList.contains("show")){
          document.getElementById("accordionWork").getElementsByClassName("accordion-button")[i].click();
        }
      }},5000);
      $(".fc2").mouseenter(function(){
        window.clearTimeout(timer);
        $(".fc2").unbind('mouseenter');
      });
  });


  // Education and Qualifications

  $('.fc1').click(function(){
    edu = 1;
    $('.fc1').off('click');
  })
  let eduAdder = $("#accordionEdu").html();
  let eduCounter = 1;

  $("#add_edu").click(function () {
    eduCounter++;
    if ($("#accordionEdu .accordion-item").length > 0) {
      $("#accordionEdu .accordion-header").css("display", "block");
      let count = $("#accordionEdu .accordion-item").length;
      if (document.getElementById("accordionEdu").getElementsByClassName("accordion-item")[count - 1].getElementsByClassName("accordion-collapse")[0].classList.contains("show")){
        document.getElementById("accordionEdu").getElementsByClassName("accordion-item")[count - 1].getElementsByClassName("accordion-button")[0].click();
      }
    }
    $("#accordionEdu").append(eduAdder);

    $("#accordionEdu .accordion-header").last().attr("id", "eheading" + eduCounter);
    $("#accordionEdu .accordion-collapse").last().attr("aria-labelledby", "eheading" + eduCounter);
    $("#accordionEdu .accordion-collapse").last().attr("id", "ecollapse" + eduCounter);
    $("#accordionEdu .accordion-button").last().attr("data-bs-target", "#ecollapse" + eduCounter);
    $("#accordionEdu .accordion-button").last().attr("aria-controls", "ecollapse" + eduCounter);
  });

  $(".fc1").mouseleave(function () {
    if(edu == 0){return;}
    let timer = window.setTimeout(function(){
      emakeVisible();
      let count = $("#accordionEdu .accordion-item").length;
      for (let i = 0; i < count; i++) {
        if (document.getElementById("accordionEdu").getElementsByClassName("accordion-item")[i].getElementsByClassName("accordion-collapse")[0].classList.contains("show")){
          document.getElementById("accordionEdu").getElementsByClassName("accordion-button")[i].click();
        }
      }},5000);
      $(".fc1").mouseenter(function(){
        window.clearTimeout(timer);
        $(".fc1").unbind('mouseenter');
      });
  });
  
  // Skill
  
  $('.fc3').click(function(){
    skill = 1;
    $('.fc3').off('click');
  })
  let skillAdder = $("#accordionSkill").html();
  let skillCounter = 1;

  $("#add_skill").click(function () {
    skillCounter++;
    if ($("#accordionSkill .accordion-item").length > 0) {
      $("#accordionSkill .accordion-header").css("display", "block");
      let count = $("#accordionSkill .accordion-item").length;
      if (document.getElementById("accordionSkill").getElementsByClassName("accordion-item")[count - 1].getElementsByClassName("accordion-collapse")[0].classList.contains("show")){
        document.getElementById("accordionSkill").getElementsByClassName("accordion-item")[count - 1].getElementsByClassName("accordion-button")[0].click();
      }
    }
    $("#accordionSkill").append(skillAdder);

    $("#accordionSkill .accordion-header").last().attr("id", "sheading" + skillCounter);
    $("#accordionSkill .accordion-collapse").last().attr("aria-labelledby", "sheading" + skillCounter);
    $("#accordionSkill .accordion-collapse").last().attr("id", "scollapse" + skillCounter);
    $("#accordionSkill .accordion-button").last().attr("data-bs-target", "#scollapse" + skillCounter);
    $("#accordionSkill .accordion-button").last().attr("aria-controls", "scollapse" + skillCounter);
  });

  $(".fc3").mouseleave(function () {
    if(skill == 0){return;}
    let timer = window.setTimeout(function(){
      smakeVisible();
      let count = $("#accordionSkill .accordion-item").length;
      for (let i = 0; i < count; i++) {
        if (document.getElementById("accordionSkill").getElementsByClassName("accordion-item")[i].getElementsByClassName("accordion-collapse")[0].classList.contains("show")){
          document.getElementById("accordionSkill").getElementsByClassName("accordion-button")[i].click();
        }
      }},5000);
      $(".fc3").mouseenter(function(){
        window.clearTimeout(timer);
        $(".fc3").unbind('mouseenter');
      });
  });
  

  // Interests
  

  $('.fc4').click(function(){
    interest = 1;
    $('.fc4').off('click');
  })
  let interestAdder = $("#accordionInt").html();
  let interestCounter = 1;

  $("#add_interest").click(function () {
    interestCounter++;
    if ($("#accordionInt .accordion-item").length > 0) {
      $("#accordionInt .accordion-header").css("display", "block");
      let count = $("#accordionInt .accordion-item").length;
      if (document.getElementById("accordionInt").getElementsByClassName("accordion-item")[count - 1].getElementsByClassName("accordion-collapse")[0].classList.contains("show")){
        document.getElementById("accordionInt").getElementsByClassName("accordion-item")[count - 1].getElementsByClassName("accordion-button")[0].click();
      }
    }
    $("#accordionInt").append(interestAdder);

    $("#accordionInt .accordion-header").last().attr("id", "iheading" + interestCounter);
    $("#accordionInt .accordion-collapse").last().attr("aria-labelledby", "iheading" + interestCounter);
    $("#accordionInt .accordion-collapse").last().attr("id", "icollapse" + interestCounter);
    $("#accordionInt .accordion-button").last().attr("data-bs-target", "#icollapse" + interestCounter);
    $("#accordionInt .accordion-button").last().attr("aria-controls", "icollapse" + interestCounter);
  });

  $(".fc4").mouseleave(function () {
    if(interest == 0){return;}
    let timer = window.setTimeout(function(){
      imakeVisible();
      let count = $("#accordionInt .accordion-item").length;
      for (let i = 0; i < count; i++) {
        if (document.getElementById("accordionInt").getElementsByClassName("accordion-item")[i].getElementsByClassName("accordion-collapse")[0].classList.contains("show")){
          document.getElementById("accordionInt").getElementsByClassName("accordion-button")[i].click();
        }
      }},5000);
      $(".fc4").mouseenter(function(){
        window.clearTimeout(timer);
        $(".fc4").unbind('mouseenter');
      });
  });




});
