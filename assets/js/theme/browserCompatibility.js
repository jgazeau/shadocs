// Function returning true or false (wether the site can be loaded or not)
// depending on the browser version (IE not supported)
function browserCompatibility() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');
  var trident = ua.indexOf('Trident/');
  console.log(ua);
  var unsupportedBrowserHtml =
    "\
  <div id='unsupportedBrowser'>\
    <div class='is-compatibility-alert'>\
      <div>\
        <h2>⚠ Unsupported Browser ⚠</h2>\
        <p>The current website is not supporting your browser :</p>\
        <p>$BROWSER_VERSION</p>\
      </div>\
    </div>\
  </div>";
  if (msie > 0) {
    // IE 10 or older, return version number
    document.body.innerHTML = unsupportedBrowserHtml.replace(
      '$BROWSER_VERSION',
      'IE ' + parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10)
    );
  } else if (trident > 0) {
    // IE 11, return version number
    var rv = ua.indexOf('rv:');
    document.body.innerHTML = unsupportedBrowserHtml.replace(
      '$BROWSER_VERSION',
      'IE ' + parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10)
    );
  }
}
