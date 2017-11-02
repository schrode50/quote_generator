var colors = ["#D46A6A", "#565695", "#407F7F", "#004304", "#6E7C15", "#805C15", "#803F15", "#CC120D", "#52474D", "#FA7DC4"];

function randomColor(x) {
  var rColor = Math.floor(Math.random() * 10);
  console.log(rColor['colors']);
  return rColor[colors];
}

function getQuote() {
  $('.new_quote').on('click', function(e) {
    e.preventDefault();

    var random = Math.floor(Math.random() * 40);

    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40&callback=", function(a) {
      var text = a[random].content;
      var author = a[random].title;
      $('.quote').empty();
      $('.quote').append(text + author);
      $('#tweet_quote').attr("href", "https://twitter.com/intent/tweet?&text="+ encodeURIComponent('"' + text + '" ' + "-" + author));
    })
  });
}
// function shareTwitter(quote) {
//   var link = "https://platform.twitter.com/widgets.js";
//   // get rid of p tags in quote
//   var div = document.createElement("div");
//   div.innerHTML = quote;
//   var text = div.textContent || div.innerText || "";
//   var quoteArr = text.split(' ');
//
//   quote = quoteArr.join('%20');
//
//
//   $("#tweet_quote").attr("href", encodeURIComponent(link + quote));
// };

$(document).ready(function() {
  getQuote();
  randomColor(colors);
});
