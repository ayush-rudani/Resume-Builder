function makeVisible() {
  $("#accordionWork .accordion-header").css("display", "block");
}

function delWork(event) {
  event.preventDefault();
  if ($("#accordionWork .accordion-item").length > 1) {
    makeVisible();
    event.target.parentElement.parentElement.remove();
  }
  event.stopPropagation();
}

function delWork2(event) {
  event.preventDefault();
  if ($("#accordionWork .accordion-item").length > 1) {
    makeVisible();
    event.target.parentElement.parentElement.parentElement.remove();
  }
  event.stopPropagation();
}

$(document).ready(function () {
  let workAdder = $("#accordionWork").html();
  let workCounter = 1;

  $("#add_work").click(function () {
    workCounter++;
    if ($("#accordionWork .accordion-item").length > 0) {
      $("#accordionWork .accordion-header").css("display", "block");
      let count = $("#accordionWork .accordion-item").length;
      if (
        document
          .getElementById("accordionWork")
          .getElementsByClassName("accordion-item")
          [count - 1].getElementsByClassName("accordion-collapse")[0]
          .classList.contains("show")
      ) {
        document
          .getElementById("accordionWork")
          .getElementsByClassName("accordion-item")
          [count - 1].getElementsByClassName("accordion-button")[0]
          .click();
      }
    }
    $("#accordionWork").append(workAdder);

    $("#accordionWork .accordion-header")
      .last()
      .attr("id", "heading" + workCounter);
    $("#accordionWork .accordion-collapse")
      .last()
      .attr("aria-labelledby", "heading" + workCounter);
    $("#accordionWork .accordion-collapse")
      .last()
      .attr("id", "collapse" + workCounter);
    $("#accordionWork .accordion-button")
      .last()
      .attr("data-bs-target", "#collapse" + workCounter);
    $("#accordionWork .accordion-button")
      .last()
      .attr("aria-controls", "collapse" + workCounter);
  });

  $(".fc2").mouseleave(function () {
    makeVisible();
    let count = $("#accordionWork .accordion-item").length;
    for (let i = 0; i < count; i++) {
      if (
        document
          .getElementById("accordionWork")
          .getElementsByClassName("accordion-item")
          [i].getElementsByClassName("accordion-collapse")[0]
          .classList.contains("show")
      ) {
        document
          .getElementById("accordionWork")
          .getElementsByClassName("accordion-button")
          [i].click();
      }
    }
  });
});
