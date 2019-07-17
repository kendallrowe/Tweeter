// Post new tweet function
const $form = $('#newTweetCreate');
$form.on('submit', function() {
  event.preventDefault();
  const $input = $(this).find("input[type=text], textarea");
  const $errorMsg = $("#newTweetError");

  // Remove error message from view
  $errorMsg.slideUp(300);
  
  // If tweet textarea has been filled
  if (!$input.val()) {
    // Error message if empty form filled
    $errorMsg.children("h4").html(`Make sure to add some text to your Tweet and try again.`);
    $errorMsg.slideDown(300);
  } else if ($input.val().length > 140) {
    $errorMsg.children("h4").html(`Oops! Tweets can only be 140 characters are left. Shorten your tweet and try again.`);
    $errorMsg.slideDown(300);
  } else {
    // AJAX Post Request
    const serializedInput = $(this).serialize();
    const post_url = $(this).attr("action"); //get form action url
    const request_method = $(this).attr("method"); //get form GET/POST method

    $.ajax({
      url : post_url,
      type: request_method,
      data : serializedInput
      ,
      success: function(data) {
        // If successful, reset value of form, reset character counter, and update tweets elements
        $input.val("");
        $form.find(".counter").html("140");
        loadTweets();
      },
      error: function(error) {
        console.log("Tweet was not posted :(");
        console.log(error);
      }
    });
  }
});

