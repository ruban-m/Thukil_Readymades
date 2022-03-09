function whatsapp() {
  window.location = 'https://wa.me/+919787434087'
}
// slideshow
let shttp = new XMLHttpRequest()
shttp.open('GET', './json/slide.json', false)
shttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let s = JSON.parse(this.responseText)
    let i = 0
    setInterval(() => {
      if (i < s.length) {
        document.slider.src = s[i]['path']
        i++
      } else {
        i = 0
      }
    }, 4000)
  }
}
shttp.send()
