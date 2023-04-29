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
    var hourField = $("<div>");
    hourField.text(i);
    hourField.addClass("col-md-2 hour");
    row.append(hourField);
  }
}

displayDate();
displayScheduler();