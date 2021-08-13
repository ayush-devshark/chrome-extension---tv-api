console.log('Hello from content script');

chrome.runtime.sendMessage(null, [], res => {
    console.log('I am from send res fn ' + res);
});

chrome.runtime.onMessage.addListener((message, sender, senderRes) => {
    console.log(message);
    console.log(sender);
});
