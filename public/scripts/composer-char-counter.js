$(document).ready(function() {
  function keyCount(event) {
    const $tweetInput = $(this);
    $counter = $tweetInput.siblings("div").children(".counter");

    const currentCount = 140 - $tweetInput.val().length;
    $counter.text(currentCount.toString());

    if (currentCount < 0) {
      $counter.css("color", "#EF6969");
    }

  }
  
  $(".new-tweet textarea").on("input", keyCount);

});

