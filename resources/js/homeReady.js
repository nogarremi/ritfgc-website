$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip(); 
  //getScores(SemesterID,GameID)
  getScores(9,4);
  getScores(9,12);
  getScores(9,13);
  
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