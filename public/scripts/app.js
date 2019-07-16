/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
"user": {
  "name": "Newton",
  "avatars": "/images/guy-image.svg",
  "handle": "@SirIsaac"
},
"content": {
  "text": "If I have seen further it is by standing on the shoulders of giants"
},
"created_at": 1461116232227
}
$(document).ready(function(){

  const daysInMonth  = function(month, year) { 
    return new Date(year, month, 0).getDate(); 
  } 

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

  function createTweetElement(tweetData) {
    const dateCreated = new Date(tweetData.created_at);
    const daysAgo = daysApart(dateCreated);
    console.log(daysAgo);
    return `
      <div class="singleTweet">
      <header class="tweetHeader">
        <span>
          <img src="${tweetData.user.avatars}" alt="Created by Adrien Coquet from the Noun Project">
          <h3>${tweetData.user.name}</h4>
        </span>
        <h4>${tweetData.user.handle}</h4>
      </header>
      
      <div class="tweetBody">
        <p>${tweetData.content.text}</p>
      </div>

      <footer class="tweetFooter">
        <span></span>
        <span class="socials">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </span>
      </footer>
    </div>
    `
  }

  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});