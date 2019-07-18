$(document).ready(function() {
  function keyCount(event) {
    const $tweetInput = $(this);
    const $counter = $tweetInput.siblings("div").children(".counter");

    const currentCount = 140 - $tweetInput.val().length;
    $counter.text(currentCount.toString());

    if (currentCount < 0) {
      $counter.css("color", "#EF6969");
    } else {
      $counter.css("color", "#545149");
    }

  }
  
  $(".new-tweet textarea").on("input", keyCount);

});

