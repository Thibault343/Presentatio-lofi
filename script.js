document.getElementById('change-video-btn').addEventListener('click', function() {
    var newVideoId = prompt("4xDzrJKXOOY");
    if (newVideoId) {
      var iframe = document.getElementById('youtube-video');
      iframe.src = 'https://www.youtube.com/embed/' + newVideoId;
    }
  });
  