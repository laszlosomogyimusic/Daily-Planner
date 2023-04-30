var startHour = 1;
var endHour = 17;
var idRow = "row-";
var idHourCol = "hour-col-";
var idDescrCol = "descr-col-";
var idNotes = "notes-"
var idSaveCol = "save-col-";
var idSaveBtn = "save-btn-";
var idSaveIcon = "save-icon-";
var dataHelperId = "helper-id";
var localStoreKey = "scheduler-hour-";

function displayDate() {
  var currentDay = moment().format("dddd, MMMM Do");
  $("#currentDay").text(currentDay);
}

function displayHour(identifier) {
    //displaying the hour
    var hourColumn = $("<div>");
    hourColumn.addClass("col-md-2 hour");
    hourColumn.attr("id", idHourCol + identifier);
    var hourText = $("<p>");
    hourText.text(identifier + ":00");
    hourColumn.append(hourText);
    return hourColumn;
}

function displayDescription(identifier) {
    //displaying the input field area
    var descriptionColumn = $("<div>");
    descriptionColumn.addClass("col-md-9 description p-0");
    descriptionColumn.attr("id", idDescrCol + identifier);
    var textArea = $("<textarea>");
    textArea.attr("id", idNotes + identifier);
    if(identifier < moment().format("HH")) {
      textArea.addClass("past");
    } else if (identifier == moment().format("HH")) {
      textArea.addClass("present");
    } else if (identifier > moment().format("HH")) {
      textArea.addClass("future");
    } 
    //get the data from the local storage (if there's any)
    var savedData = localStorage.getItem(localStoreKey + identifier);
    textArea.val(savedData);
    descriptionColumn.append(textArea);
    
    return descriptionColumn;
}

function displaySaveButton(identifier) {
    //displaying the save button area
    var saveButtonColumn = $("<div>");
    saveButtonColumn.addClass("col-md-1 saveColumn");
    saveButtonColumn.attr("id", idSaveCol + identifier);
    var saveButton = $("<button>");
    saveButton.addClass("saveBtn");
    saveButton.attr("id", idSaveBtn + identifier);
    //add a data-helper-id to the DOM, to prevent later string parsing in the button click event
    saveButton.data(dataHelperId, identifier);
    var saveIcon = $("<i>");
    saveIcon.addClass("far fa-save fa-lg");
    saveIcon.attr("id", idSaveIcon + identifier);
    saveButton.append(saveIcon);
    saveButtonColumn.append(saveButton);

    return saveButtonColumn;
}


function displayScheduler() {
  for(var i=startHour; i<=endHour; i++) {
    var row = $("<div>");
    row.addClass("row");
    row.attr("id", idRow + i);
    
    var hourColumn = displayHour(i);
    var descriptionColumn = displayDescription(i);
    var saveButtonColumn = displaySaveButton(i);

    row.append(hourColumn, descriptionColumn, saveButtonColumn);
    $(".container").append(row);
  }
}

function saveEntry() {
  //get the data-helper-id, so we don't have to parse the whole string to find the id
  var btnId = $(this).data(dataHelperId);
  var notes = $("#" + idNotes + btnId).val();
  localStorage.setItem(localStoreKey + btnId, notes);
}

displayDate();
displayScheduler();

$(".saveBtn").on("click", saveEntry);