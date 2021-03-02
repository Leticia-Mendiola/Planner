var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY, h:mm:ss a"));

var saveBtn = $('#saveBtn')
// var textarea = $('#textarea')

saveBtn.on("click", function() {
    localStorage.setItem("textarea", textarea);
})

function renderLast() {
    localStorage.getItem("textarea")
}

renderLast()