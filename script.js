var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY, h:mm:ss a"));

var currentHour = today.format("HH")
var future = $(".future");
var present = $(".present");
var past = $(".past");
var hourID = $('input[data-hour="8"]');

if (hourID == currentHour) {
    future.hide();
    present.show();
    past.hide();
};
if (hourID > currentHour) {
    future.show();
    present.hide();
    past.hide()
}
if (hourID < currentHour) {
    future.hide();
    present.hide();
    past.show();
}



var saveBtn = $('.saveBtn')
var textarea1 = $('#textarea1')
var comment = textarea1.value.trim()

function storeComments() {
localStorage.setItem("#textarea1", JSON.stringify(textarea1.value.trim()));
}

$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    storeComments();
});

function renderLast() {
    var lastSave = JSON.parse(localStorage.getItem("textarea1"));
    if (lastSave !== null) {
        $("#textarea1").text(lastSave);
    }
}

renderLast();
