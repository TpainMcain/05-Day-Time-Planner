// Declare variables. Jquery (https://api.jquery.com/).
var today = moment(); // (https://momentjs.com/docs/).
var timeBlockEl = document.querySelector('.container');

// Moment.js adds current date to currentDay div.
$('#currentDay').text(today.format('LLLL'));

// Event listener for saveBtn.
$('.saveBtn').on('click', function () {
// Declare variable for saved user input from entered text in taskHere div.
  var userInput = $(this).siblings('.taskHere').val();
// Declare variable for the ID attribute of the parent div. (hour1, hour2, hour3..).
  var timeKey = $(this).parent().attr('id');
// Function to save userInput and timeKey in to local storage.
  localStorage.setItem(timeKey, userInput); });

// Function to retrieve saved info from local storage if it exists.
$('#hour6 .taskHere').val(localStorage.getItem('hour6'));
$('#hour7 .taskHere').val(localStorage.getItem('hour7'));
$('#hour8 .taskHere').val(localStorage.getItem('hour8'));
$('#hour9 .taskHere').val(localStorage.getItem('hour9'));
$('#hour10 .taskHere').val(localStorage.getItem('hour10'));
$('#hour11 .taskHere').val(localStorage.getItem('hour11'));
$('#hour12 .taskHere').val(localStorage.getItem('hour12'));
$('#hour13 .taskHere').val(localStorage.getItem('hour13'));
$('#hour14 .taskHere').val(localStorage.getItem('hour14'));
$('#hour15 .taskHere').val(localStorage.getItem('hour15'));
$('#hour16 .taskHere').val(localStorage.getItem('hour16'));
$('#hour17 .taskHere').val(localStorage.getItem('hour17'));
$('#hour18 .taskHere').val(localStorage.getItem('hour18'));
$('#hour19 .taskHere').val(localStorage.getItem('hour19'));
$('#hour20 .taskHere').val(localStorage.getItem('hour20'));
$('#hour21 .taskHere').val(localStorage.getItem('hour21'));
$('#hour22 .taskHere').val(localStorage.getItem('hour22'));
$('#hour23 .taskHere').val(localStorage.getItem('hour23'));
$('#hour0 .taskHere').val(localStorage.getItem('hour0'));
$('#hour1 .taskHere').val(localStorage.getItem('hour1'));
$('#hour2 .taskHere').val(localStorage.getItem('hour2'));
$('#hour3 .taskHere').val(localStorage.getItem('hour3'));
$('#hour4 .taskHere').val(localStorage.getItem('hour4'));
$('#hour5 .taskHere').val(localStorage.getItem('hour5'));

// Function to track task time and change color depending on the time.
function trackTask() {
// Decalre variable for current hour.
    var currentHour = today.hours();
// Begin loop over every timeblock.
    $('.time-block').each(function () {
      var timeId = parseInt($(this).attr('id').split("hour")[1]);
// If time Id attribute is before current hour, add past class.
      if (timeId < currentHour) {
        $(this).addClass('past');} 
// If time Id attribute is equal to current hour, remove past and future class and add present class.
      else if (timeId === currentHour) {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');}
// If time Id attribute is greater than current time, remove past and present class and add future class.
      else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }});
  }
// Calls trackTask(); function.
trackTask();

// Function to refresh the page ever 60s (1000ms * 60s)
setTimeout(function () {
    location = ''; // location = current URL
  }, 1000 * 60);