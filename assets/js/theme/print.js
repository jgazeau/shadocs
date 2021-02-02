// VARS //
// MAIN //
//Manage print of page content
document.addEventListener('DOMContentLoaded', function() {
  let pb = document.getElementById('printButton');
  pb.setAttribute('title',printLabel);
  pb.addEventListener('click', function(e) {
    try {
      window.print();
    } catch (error) {
      console.error('Error printing page content:' + error);
    }
  });
});
