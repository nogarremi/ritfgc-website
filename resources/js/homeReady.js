$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip(); 
  //getScores(SemesterID,GameID)
  getScores(13,16);
  getScores(13,3);
  getScores(13,12);
  
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