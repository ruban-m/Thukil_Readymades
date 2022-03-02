function whatsapp() {
  window.location = 'https://wa.me/+919787434087'
}
// slideshow
var i = 0
var path = new Array()
path[0] = './slide-show/1.jpg'
path[1] = './slide-show/2.jpg'
path[2] = './slide-show/3.jpg'
path[3] = './slide-show/4.jpg'
path[4] = './slide-show/5.jpg'
path[5] = './slide-show/6.jpg'
function swapimage() {
  document.slider.src = path[i]
  if (i < path.length - 1) i++
  else i = 0
  setTimeout('swapimage()', 4000)
}
window.onload = swapimage
