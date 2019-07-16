/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  const $form = $('#newTweetCreate');
  $form.on('submit', function () {
    event.preventDefault();
    if (!$("#newTweetCreate textarea").val()) {
      const serializedInput = $(this).serialize()
      const post_url = $(this).attr("action"); //get form action url
      const request_method = $(this).attr("method"); //get form GET/POST method
      
      $.ajax({
        url : post_url,
        type: request_method,
        data : serializedInput
      })
      .then(function(response){ //
        console.log(response);
      });

    }
  });

  renderTweets(data);


});