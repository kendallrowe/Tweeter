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
        $input.val("");
        $form.find(".counter").html("140");
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
  .done(function (tweets) {
    renderTweets(tweets);
  })
  .fail(function (error) {
    console.log(error);
  });
}