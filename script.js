function format(command) {
  document.execCommand(command, false, null);
}

function setColor(color) {
  document.execCommand("foreColor", false, color);
}

function align(direction) {
  document.getElementById("editor").style.textAlign = direction;
}