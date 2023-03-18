var model = document.getElementsByClassName('key');
var button = document.getElementById('keyButton');
var span = document.getElementsByClassName("close")[0];

function setKeyDisplay () {
    model.style.display = "block";
}
function spanHandler() {
    model.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }