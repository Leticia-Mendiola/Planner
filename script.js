var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY, h:mm:ss a"));

var saveBtn = $('#saveBtn')
var textarea1 = $('#textarea1')
var comment = textarea1.value.trim()

function init() {
    
}

function storeComments() {
localStorage.setItem("textarea1", JSON.stringify(textarea1.value.trim()));
}

saveBtn.on("click", function(event) {
    event.preventDefault();
    storeComments();
});

function renderLast() {
    var lastSave = JSON.parse(localStorage.getItem("textarea1"));
    if (lastSave !== null) {
        textarea1.text = lastSave;
    }
}

renderLast();
