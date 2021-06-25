function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);

}

function playVid() {
  video.play();
}

function pauseVid() {
  video.pause();
}


window.onscroll = function () {
  // CODE
  const video = document.getElementById('video')

  video.muted = !checkVisible(video);
  video.muted ? pauseVid() : playVid()
};