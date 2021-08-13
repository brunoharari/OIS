function checkVisible(e) {
  var n = e.getBoundingClientRect(),
    e = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(n.bottom < 0 || 0 <= n.top - e + 50);
}
function playVid() {
  console.log("playing"), video.play();
}
function pauseVid() {
  console.log("paused"), video.pause();
}

const e = document.getElementById('video')
e.muted = !checkVisible(e)