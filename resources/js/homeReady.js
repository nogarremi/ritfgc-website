$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip(); 
  getScores(4,3);
  getScores(4,10);
  getScores(4,4);
  
  $(".navbar a, footer a[href='#topOfPage']").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      });
    }
  });
});