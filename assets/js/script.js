function displayDate() {
  var currentDay = moment().format("dddd, MMMM Do");
  $("#currentDay").text(currentDay);
}

displayDate();