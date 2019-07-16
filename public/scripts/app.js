/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

$(document).ready(function(){

  // Return a string template with the data from a tweet object to be used to append
  function createTweetElement(tweetData) {
    if (tweetData.length !== 0) {
      // Calculate the days since tweet using helper function
      const dateCreated = new Date(tweetData.created_at);
      const daysAgo = daysApart(dateCreated);
      
      return `
              <article class="singleTweet">
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
                  <span>${daysAgo} ago</span>
                  <span class="socials">
                    <i class="fas fa-flag"></i>
                    <i class="fas fa-retweet"></i>
                    <i class="fas fa-heart"></i>
                  </span>
                </footer>
              </article>
            `
    }
  }

  // Loop through array of tweet objects and append to index page
  const renderTweets = function(tweets) {
    let $tweet;
    // loops through tweets
    for (const tweet of tweets) {
      // calls createTweetElement for each tweet
      $tweet = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
    }
  }


  renderTweets(data);
});