chrome.runtime.onInstalled.addListener(details => {
    chrome.storage.local.set({ shows: [] });
    chrome.contextMenus.create({
        title: 'Search Tv Show',
        id: 'com1',
        contexts: ['page', 'selection'],
    });
    chrome.contextMenus.onClicked.addListener(e => {
        fetch(`https://api.tvmaze.com/search/shows?q=${e.selectionText}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                chrome.storage.local.set({
                    shows: data,
                });
            });
    });
});

console.log('background script running');
