var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY, h:mm:ss a"));

var currentHour = today.format("hh");
console.log(currentHour);
var hourId = $("textarea").data(hourId);
console.log(hourId);
var hourIdEl = moment(hourId, "hh");
var textarea = $(".textarea")

function timeAtt() {
if (hourIdEl === currentHour) {
    textarea.addClass(".present")
} else if (hourIdEl > currentHour) {
    textarea.addClass(".future")
} else if (hourIdEl < currentHour) {
    textarea.addclass(".past")
}}

timeAtt();

var saveBtn = $('.saveBtn')
var comment = textarea.value.trim()

function storeComments() {
localStorage.setItem("#textarea", JSON.stringify(time8.value.trim()));
}

$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    storeComments();
});

function renderLast() {
    var lastSave = JSON.parse(localStorage.getItem("textarea"));
    if (lastSave !== null) {
        $("#textarea").text(lastSave);
    }
}

renderLast();
