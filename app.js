function getQuote() {
  $('.new_quote').on('click', function(e) {
    e.preventDefault();
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40&callback=", function(a) {
      // console.log(a);
      var random = Math.floor(Math.random() * 40);
      $('.new_text').empty();
      $(".new_text").append(a[random].content + "<p>— " + a[random].title + "</p>")
      // console.log('success');
    })
  });
}

$(document).ready(function() {
  getQuote();
});
