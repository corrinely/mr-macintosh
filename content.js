chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

if (document.readyState === "complete") {

  var elm = document.createElement("img");
  elm.src = "http://total0.com/Macintosh/mr.mac.png"
  document.body.appendChild(elm);
  elm.style.position = 'absolute';
  elm.style.left = '10px';
  elm.style.top = '10px';
  elm.style.zIndex = "500";
}

  });
