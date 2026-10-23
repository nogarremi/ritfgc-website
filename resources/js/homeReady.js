$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip(); 
  //getScores(SemesterID,GameID)
  getScores(16,12);
  getScores(16,17);
  getScores(16,3);
  getScores(16,16);
  
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
