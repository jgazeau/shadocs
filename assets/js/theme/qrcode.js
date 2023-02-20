import { addElementToModal, displayModal } from './modules/helpers.min.js';

// VARS //
// MAIN //
//Manage print of page content
document.addEventListener('DOMContentLoaded', function () {
  let qrcs = document.querySelectorAll('[id^="qrCodeButton"]');
  for (const qrc of qrcs) {
    qrc.setAttribute('title', qrCodeLabel);
    qrc.addEventListener('click', function (e) {
      let qrImg = document.createElement('img');
      qrImg.id = 'currentPageQrCode';
      const qrCode = new QRious({
        background: 'white',
        backgroundAlpha: 1,
        element: qrImg,
        foreground: 'black',
        foregroundAlpha: 1,
        level: 'L',
        mime: 'image/png',
        padding: null,
        size: 250,
        value: window.location.href,
      });
      addElementToModal(qrImg);
      displayModal();
    });
  }
});
