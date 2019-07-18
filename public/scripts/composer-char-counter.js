// On each keystroke within textarea for new tweet, update counter element and highlight red if above 140
const keyCount = function(event) {
  const $tweetInput = $(this);
  const $counter = $tweetInput.siblings("div").children(".counter");

  const currentCount = 140 - $tweetInput.val().length;
  $counter.text(currentCount.toString());

  if (currentCount < 0) {
    $counter.css("color", "#EF6969");
  } else {
    $counter.css("color", "#545149");
  }
};

