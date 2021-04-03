var player; 

function onYouTubeIframeAPIReady() {
  player = new YT.Player('video-foreground', {
    videoId: 'uHKfrz65KSU', // YouTube Video ID
    playerVars: {
      autoplay: 1,        // Auto-play the video on load
      controls: 0,        // Show pause/play buttons in player
      showinfo: 0,        // Hide the video title
      modestbranding: 1,  // Hide the Youtube Logo
      loop: 1,            // Run the video in a loop
      fs: 0,              // Hide the full screen button
      cc_load_policy: 0, // Hide closed captions
      iv_load_policy: 3,  // Hide the Video Annotations
      autohide: 0,         // Hide video controls when playing
      playlist: 'uHKfrz65KSU'
    },
    events: {
      onReady: function(e) {
        e.target.mute();
      }
    }
  });
}


$(document).ready(function(e) {   
  $('.sound').on('click', function(){
    $('#video-foreground').toggleClass('mute');
    $('.volume-icon').toggleClass('fa-volume-up', 'fa-volume-off');
    if($('#video-foreground').hasClass('mute')){
      player.mute();
    } else {
      player.unMute();
    }
  });
});

/*Blog J*/
