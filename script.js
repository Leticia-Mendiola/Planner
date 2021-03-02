var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY, h:mm:ss a"));

var saveBtn = $('#saveBtn')
// var textarea = $('#textarea')

saveBtn.on("click", function(event) {
    event.preventDefault();
    localStorage.setItem("textarea", textarea);
})

function renderLast(event) {
    event.preventDefault();
    localStorage.getItem("textarea");
}

renderLast()