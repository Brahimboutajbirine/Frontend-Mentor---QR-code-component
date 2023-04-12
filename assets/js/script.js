var qrcode = new QRCode({
  content: "http://github.com/brahimboutajbirine",
  width: 160,
  height: 160,
  padding: 0,
  color: "#ffffff",
  background: "#2c7dfa",
  container: "svg-viewbox", //Responsive use
  ecl: "H",
  join: true, //Crisp rendering and 4-5x reduced file size
});
var svg = qrcode.svg();
document.getElementById("qrcode").innerHTML = svg;
