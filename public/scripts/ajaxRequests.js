// Post new tweet function
const $form = $('#newTweetCreate');
$form.on('submit', function() {
  event.preventDefault();
  const $input = $(this).find("input[type=text], textarea");
  // If tweet textarea has been filled
  if (!$input.val()) {
    alert("Make sure you've written something to tweet!");
  } else if ($input.val().length > 140){
    alert("Tweets can only be 140 characters in length.")
  } else {
    const serializedInput = $(this).serialize();
    const post_url = $(this).attr("action"); //get form action url
    const request_method = $(this).attr("method"); //get form GET/POST method

    $.ajax({
      url : post_url,
      type: request_method,
      data : serializedInput
      ,
      success: function(data) { //
        console.log("Tweet posted!", data);
        $input.val("");
        loadTweets();
      },
      error: function(error) { //
        console.log("Tweet was not posted :(");
        console.log(error);
      }
    });
  }
});

// AJAX get tweets
const loadTweets = function() {
  $.ajax('/tweets', { method: 'GET' })
  .then(function (tweets) {
    console.log($(".singleTweet").length);
    console.log(tweets.slice($(".singleTweet").length));
    renderTweets(tweets.slice($(".singleTweet").length));
  });
}