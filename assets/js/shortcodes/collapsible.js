// VARS //
// MAIN //
document.addEventListener('DOMContentLoaded', function () {
  // Manage collapsibles in content
  let c = document.getElementsByClassName('sc-collapsible-header');
  for (let i = 0; i < c.length; i++) {
    c[i].addEventListener('click', function (e) {
      this.classList.toggle('sc-uncollapsed');
    });
  }
});
