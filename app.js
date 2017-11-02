
function getQuote() {
  $('.new_quote').on('click', function(e) {
    e.preventDefault();

    var random = Math.floor(Math.random() * 40);

    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40&callback=", function(a) {
      var text = a[random].content;
      var author = a[random].title;
      $('p').empty();
      $('.quote').append(text + author);

      $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?&text=' + encodeURIComponent('"' + text + '" ' + "-" + author));
    })
  });
}

$(document).ready(function() {
  getQuote();
});
