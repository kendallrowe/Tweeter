// Post new tweet function
const $form = $('#newTweetCreate');
$form.on('submit', function() {
  event.preventDefault();
  const $input = $(this).find("input[type=text], textarea");
  // If tweet textarea has been filled
  if ($input.val()) {
    const serializedInput = $(this).serialize();
    const post_url = $(this).attr("action"); //get form action url
    const request_method = $(this).attr("method"); //get form GET/POST method

    $.ajax({
      url : post_url,
      type: request_method,
      data : serializedInput
      ,
      success: function(data) { //
        console.log("Tweet posted!");
        $input.val("");
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
    console.log('Success: ', tweets);
    renderTweets(tweets);

    // $button.replaceWith(morePostsHtml);
  });
}