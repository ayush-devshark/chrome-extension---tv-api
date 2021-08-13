chrome.storage.local.get(['shows'], res => {
    console.log(res.shows);
    for (const show of res.shows) {
        renderShow(show);
    }
});

function renderShow(show) {
    const showDiv = document.createElement('div');
    const showTitle = document.createElement('h3');
    const showImage = document.createElement('img');

    showTitle.textContent = show.show.name;
    showImage.src = show.show.image?.medium;

    showDiv.appendChild(showTitle);
    showDiv.appendChild(showImage);
    document.body.appendChild(showDiv);
}
