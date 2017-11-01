function getQuote() {
  $('.new_quote').on('click', function(e) {
    e.preventDefault();
    var random = Math.floor(Math.random() * 40);
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40&callback=", function(a) {
      // console.log(a);
      $('.new_text').empty();
      $(".new_text").append(a[random].content + "<p>— " + a[random].title + "</p>")
            // console.log('success');

      $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?&text=' + encodeURIComponent('"' + a[random].content + '" ' + "-" + a[random].title));
    })
  });
}

$(document).ready(function() {
  getQuote();
});
