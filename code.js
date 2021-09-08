var isAndroid = /(android)/i.test(navigator.userAgent)

if(isAndroid) {
  console.log('is Android')
}
else {
  console.log('is not Android')
}