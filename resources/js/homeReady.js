$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip(); 
  getScores(5,3);
  getScores(5,10);
  getScores(5,11);
  
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