var appStore = "https://apps.apple.com/ca/app/%C3%A9tsmobile/id557463461?l=fr"
var playStore = "https://play.google.com/store/apps/details?id=ca.etsmtl.applets.etsmobile"

var isAndroid = /(android)/i.test(navigator.userAgent)
var isIos = navigator.userAgent.match(/ipad|iphone|ipod/i)

if(isAndroid) {
  window.location = playStore
}
else if(isIos) {
  window.location = appStore
}
else {
  window.location = playStore
}