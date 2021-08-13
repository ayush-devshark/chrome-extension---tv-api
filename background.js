chrome.runtime.onInstalled.addListener(details => {
    chrome.contextMenus.create({
        title: 'TV API',
        id: 'com1',
        contexts: ['page', 'selection'],
    });
    chrome.contextMenus.onClicked.addListener(e => {
        chrome.tabs.create({
            url: `https://www.imdb.com/find?q=${e.selectionText}&ref_=nv_sr_sm`,
        });
    });
});

chrome.runtime.onMessage.addListener((msg, sender, sendRes) => {
    console.log({ msg, sender });
    sendRes('recieved msh on background');
});

console.log('background script running');
