$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip(); 
  //getScores(SemesterID,GameID)
  getScores(14,15);
  getScores(14,3);
  getScores(14,12);
  
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