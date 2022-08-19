$(document).ready(function(){
  $('body').click('click',function(){
    var audio = document.getElementById("audio");
    audio.play();
    var video = document.getElementById("video");
    video.play();

  });
});