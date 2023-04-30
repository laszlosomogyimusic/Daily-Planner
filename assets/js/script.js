var startHour = 1;
var endHour = 17;

function displayDate() {
  var currentDay = moment().format("dddd, MMMM Do");
  $("#currentDay").text(currentDay);
}

function displayScheduler() {
  for(var i=startHour; i<=endHour; i++) {
    var row = $("<div>");
    row.addClass("row");
    row.attr("id", "row-" + i);
    
    //displaying the hour
    var hourColumn = $("<div>");
    hourColumn.addClass("col-md-2 hour");
    hourColumn.attr("id", "hour-col-" + i);
    var hourText = $("<p>");
    var displayedHour = i + ":00";
    hourText.text(displayedHour);
    hourColumn.append(hourText);

    //displaying the input field area
    var descriptionColumn = $("<div>");
    descriptionColumn.addClass("col-md-9 description p-0");
    descriptionColumn.attr("id", "description-col-" + i);
    var textArea = $("<textarea>");
    textArea.attr("id", i);
    descriptionColumn.append(textArea);

    //displaying the dave button area
    var saveButtonColumn = $("<div>");
    saveButtonColumn.addClass("col-md-1");
    saveButtonColumn.attr("id", "save-col-" + i);

    var saveButton = $("<button>");
    saveButton.addClass("saveBtn");
    saveButton.attr("id", "save-btn-" + i);
    var saveIcon = $("<i>");
    saveIcon.addClass("far fa-save fa-lg");
    saveIcon.attr("id", "save-icon-" + i);
    saveButton.append(saveIcon);
    saveButtonColumn.append(saveButton);

    row.append(hourColumn, descriptionColumn, saveButtonColumn);
    $(".container").append(row);


  }
}

displayDate();
displayScheduler();