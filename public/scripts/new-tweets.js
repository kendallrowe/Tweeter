// Post new tweet function
const $form = $('#newTweetCreate');
$form.on('submit', function() {
  event.preventDefault();
  const $input = $(this).find("input[type=text], textarea");
  const $errorMsg = $("#newTweetError");
  // If tweet textarea has been filled
  if (!$input.val()) {
    $errorMsg.children("h4").html("Make sure to add some text to your Tweet and try again.")
    $input.css("border-bottom", "border-bottom: 3px solid #EF6969")
    $errorMsg.slideDown(300);
  } else if ($input.val().length > 140){
    alert("Oops! Tweets can only be 140 characters are left. Shorten your tweet and try again.");
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

