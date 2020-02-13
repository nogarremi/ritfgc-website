$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip(); 
  getScores(3,3);
  getScores(3,5);
  getScores(3,9);
  
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