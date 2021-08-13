chrome.runtime.onInstalled.addListener(details => {
    chrome.storage.local.set({ shows: [] });
    chrome.contextMenus.create({
        title: 'Search Tv Show',
        id: 'com1',
        contexts: ['page', 'selection'],
    });
    chrome.contextMenus.create({
        title: 'Read this text',
        id: 'com2',
        contexts: ['page', 'selection'],
    });
    chrome.contextMenus.onClicked.addListener(e => {
        if (e.menuItemId === 'com1') {
            fetch(`https://api.tvmaze.com/search/shows?q=${e.selectionText}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    chrome.storage.local.set({
                        shows: data,
                    });
                });
        } else if (e.menuItemId === 'com2') {
            chrome.tts.speak(e.selectionText, { lang: 'zh-CN', rate: 4 });
        }
    });
});

console.log('background script running');
