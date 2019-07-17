// Button to toggle visibility of view tweet form section
const toggleInput = function() {
  $(".new-tweet").slideToggle(300);
};

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
                <p>${escape(tweetData.content.text)}</p>
              </div>

              <footer class="tweetFooter">
                <span class="daysAgo">${daysAgo} ago</span>
                <span class="socials">
                  <i class="fas fa-flag"></i>
                  <i class="fas fa-retweet"></i>
                  <i class="fas fa-heart"></i>
                </span>
              </footer>
            </article>
          `;
  }
}

// Loop through array of tweet objects and append to index page
const renderTweets = function(tweets) {
  let $tweets = [];
  // loops through tweets
  for (const tweet of tweets) {
    // calls createTweetElement for each tweet
    $tweets.unshift(createTweetElement(tweet));
    // takes return value and appends it to the tweets container
  }

  const formattedMarkup = $tweets.join("");

  $('#tweets-container').html(formattedMarkup); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
};

// AJAX get tweets
const loadTweets = function() {
  $.ajax('/tweets', { method: 'GET' })
    .done(function(tweets) {
      renderTweets(tweets);
    })
    .fail(function(error) {
      console.log(error);
    });
};