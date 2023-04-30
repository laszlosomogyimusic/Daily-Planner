var startHour = 9;
var endHour = 17;

function displayDate() {
  var currentDay = moment().format("dddd, MMMM Do");
  $("#currentDay").text(currentDay);
}

function displayScheduler() {
  for(var i=startHour; i<=endHour; i++) {
    var row = $("<div>");
    row.addClass("row");
    $(".container").append(row);
    var hourColumn = $("<div>");
    var hourText = i + ":00";
    hourColumn.text(hourText);
    hourColumn.addClass("col-md-2 hour");

    var descriptionColumn = $("<div>");
    descriptionColumn.addClass("col-md-9 description p-0");
    var textArea = $("<textarea>");
    textArea.attr("id", i);
    descriptionColumn.append(textArea);


    row.append(hourColumn, descriptionColumn);


  }
}

displayDate();
displayScheduler();