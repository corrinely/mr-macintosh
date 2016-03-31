
function getRandomValue(maxValue) {
  return Math.floor(Math.random() * maxValue) + 1;
}

function randomXPosition() {
  return getRandomValue(window.innerHeight);
}

function randromYPosition() {
  return getRandomValue(window.innerWidth);
}

function runMrMac() {
  var id = "mr_mac";
  var elm = document.getElementById(id);
  if(elm == null) {
    elm = document.createElement("img");
    document.createElement("img");
    elm.src = "https://s3.amazonaws.com/islinkliveyet.com/mr.mac.png"
    document.body.appendChild(elm);
    elm.id = id;
    elm.style.position = 'fixed';
    elm.style.left = randomXPosition()+'px';
    elm.style.top = randomXPosition()+'px';
    elm.style.zIndex = "500";
  }

  // remove mr mac after timeout
  var timeout = window.setTimeout(function(){
    elm.remove();
    window.clearTimeout(timeout);
  }, 500);
}

window.onload = function() {
  // don't always run mr mac
  var display_threshold = 0.85;
  var random_number = Math.random();
  if(random_number >= display_threshold) {
    return;
  }

  // display mr mac within 10 seconds after page load
  var timer = getRandomValue(10);
  var mr_mac_timer = window.setTimeout(function(){
    runMrMac();
    window.clearTimeout(mr_mac_timer);
  }, timer);
}
