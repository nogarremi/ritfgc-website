$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip(); 
  getScores(6,3);
  getScores(6,12);
  getScores(6,13);
  
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