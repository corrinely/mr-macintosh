chrome.tabs.onActivated.addListener(function(tabId, changeInfo, tab) {
  tabId = tabId.tabId;
  chrome.tabs.sendMessage(tabId, {greeting: "hello"},
    function(response) {
    });
  }
);
