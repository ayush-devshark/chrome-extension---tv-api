console.log('Hello from content script');

chrome.runtime.sendMessage(null, [], res => {
    console.log('I am from send send res fn ' + res);
});
