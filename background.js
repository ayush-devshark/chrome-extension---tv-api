chrome.runtime.onInstalled.addListener(details => {
    chrome.contextMenus.create({
        title: 'TV API',
        id: 'com1',
        contexts: ['page', 'selection'],
    });
    chrome.contextMenus.create({
        title: 'TV API 1',
        id: 'com2',
        parentId: 'com1',
        contexts: ['page', 'selection'],
    });
    chrome.contextMenus.onClicked.addListener(e => {
        console.log(e);
    });
});

console.log('background script running');
