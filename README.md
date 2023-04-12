# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

![](./screenshot/screenDestop.png)
![](./screenshot/screenMobile.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/frontend-mentor-qr-code-component-solution-qdOEYq-qbx](https://www.frontendmentor.io/solutions/frontend-mentor-qr-code-component-solution-qdOEYq-qbx)
- Live Site URL: [https://brahimboutajbirine.github.io/Frontend-Mentor---QR-code-component/](https://brahimboutajbirine.github.io/Frontend-Mentor---QR-code-component/)

## My process

### Built with

- HTML5
- CSS3
- Flexbox
- Javascript
- Mobile-first workflow
- qrcode-svg library

### What I learned

This project allowed me to learn how to use a library to generate a Qr code

To see how you can add code snippets, see below:

```html
<div id="qrcode"></div>
```

```js
var qrcode = new QRCode({
  content: "http://github.com/brahimboutajbirine",
  color: "#ffffff",
  background: "#2c7dfa",
  container: "svg-viewbox", //Responsive use
  ecl: "H",
  join: true, //Crisp rendering and 4-5x reduced file size
});
var svg = qrcode.svg();
document.getElementById("qrcode").innerHTML = svg;
```

## Author

- Frontend Mentor - [@Brahimboutajbirine](https://www.frontendmentor.io/profile/Brahimboutajbirine)
