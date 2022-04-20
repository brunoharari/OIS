function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight + 50 >= 0);

}

function playVid() {
  console.log('playing')
  video.volume = 0.5
  video.play();
}

function pauseVid() {
  console.log('paused')
  video.pause();


}


window.onscroll = function () {
  // CODE
  const video = document.getElementById('video')

  video.muted = !checkVisible(video);
  video.muted ? pauseVid() : playVid()

};