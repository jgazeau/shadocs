// VARS //
// MAIN //
document.addEventListener('DOMContentLoaded', function () {
  renderAllAsyncapi();
});
function renderAllAsyncapi() {
  let diva = document.getElementsByClassName('sc-asciinema-container');
  for (let i = 0; i < diva.length; i++) {
    let options = diva[i].getAttribute('asciinema-options');
    AsciinemaPlayer.create(
      diva[i].getAttribute('asciinema-url'),
      diva[i],
      options == '' ? {} : JSON.parse(options),
    );
  }
}
