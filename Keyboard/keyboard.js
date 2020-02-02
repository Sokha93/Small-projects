var keys = {
  'Q': 81,
  'W': 87,
  'E': 69,
  'R': 82,
  'S': 83
}

var keyDown = {};

var setKey = (keyCode) => {
  keyDown[keyCode] = true;
}

var isKeyDown = (keyName) => {
  return  keyDown[keys[keyName]] == true
}

var clearKey = (keyCode) => {
  keyDown[keyCode] = false;
}
var gameEngine = () => {
  if(typeof engine == 'function'){
    engine()
  } else {
    document.body.innerHTML = "your code didnt work"
  }
  requestAnimationFrame(gameEngine)
}

window.onload = () => {
  window.onkeydown = (b) => {
    setKey(b.keyCode);
  }
  window.onkeyup = (b) => {
    clearKey(b.keyCode);
  }
  gameEngine()
}
