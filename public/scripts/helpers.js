const daysInMonth  = function(month, year) { 
  return new Date(year, month, 0).getDate(); 
} 

// Function to check the date object of tweet, convert to date and compare with todays date
// will return a rounded integer of time based on how long ago it was
// Used to populate the footer of a tweet section
const daysApart = function(date) {
  const oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
  const oneHour = 60*60*1000; // minutes*seconds*milliseconds
  const oneMinute = 60*1000; // seconds*milliseconds
  const oneSecond = 1000; // milliseconds

  const today = new Date();
  const daysInThisMonth = daysInMonth(today.getMonth(), today.getFullYear());
  let unitsApart;
  let unitsOfTime;

  const diffDays = Math.round(Math.abs((date.getTime() - today.getTime())/(oneDay)));
  const diffHours = Math.round(Math.abs((date.getTime() - today.getTime())/(oneHour)));
  const diffMinutes = Math.round(Math.abs((date.getTime() - today.getTime())/(oneMinute)));
  const diffSeconds = Math.round(Math.abs((date.getTime() - today.getTime())/(oneSecond)));

  if (diffDays / 365 >= 1) {
    unitsApart = Math.floor(diffDays / 365);
    unitsOfTime = "years";
  } else if (diffDays / daysInMonth >= 1) {
    unitsApart = Math.floor(diffDays / daysInThisMonth)
    unitsOfTime = "months";
  } else if (diffDays >= 1) {
    unitsApart = diffDays;
    unitsOfTime = "days";
  } else if (diffHours >= 1) {
    unitsApart = diffHours;
    unitsOfTime = "hours";
  } else if (diffMinutes >= 1){
    unitsApart = diffMinutes;
    unitsOfTime = "minutes";
  } else {
    unitsApart = diffSeconds;
    unitsOfTime = "seconds";
  }

  return `${unitsApart} ${unitsOfTime}`;
}