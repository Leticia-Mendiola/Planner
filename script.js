var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY, h:mm:ss a"));

var currentHour = today.format("h a")
console.log(currentHour)
var hourID = $('input[name="data-hour"]').value();
var time8 = $("#textarea1")

function timeAtt() {
if (hourID == currentHour) {
    time8.removeClass(".future, .past")
    time8.addClass(".present")
} else if (hourID > currentHour) {
    time8.removeClass(".present, .past")
    time8.addClass(".future")
} else if (hourID < currentHour) {
    time8.removeClass(".future, .present")
    time8.addclass(".past")
}}



var saveBtn = $('.saveBtn')
var comment = textarea1.value.trim()

function storeComments() {
localStorage.setItem("#textarea1", JSON.stringify(time8.value.trim()));
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
