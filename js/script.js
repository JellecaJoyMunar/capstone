const videoIds = [
    '36GlmDTYs6s',
    'iYpTJ5cEl9Y',
    'e6MYgcbUKqQ',
    '0aeMv3ihAA4',
    'BVMaquZJGOM',
    'Wl-pkKk82Nc',
    'QwmhjIKL2jI',
    'ePeYEEG3wzQ',
    '9fqwXWT6gE0',
    'Ea6VPQzdbpw',
    '2qCecWd88H4',
    'vshlTKwNLgw',
    '6CRR5JaAXcc',
    'Mu0JYyyEYhA',
    'Swzq96UGddw',
    // Add more YouTube video IDs here, one for each day
];


function loadVideo(videoId) {
    if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
        // YouTube API is not ready, try again later
        setTimeout(() => loadVideo(videoId), 1000);
    } else {
        new YT.Player('video-container', {
            videoId: videoId,
            height: '450',
            width: '90%',
            playerVars: {
                autoplay: 1,
                controls: 1,
                modestbranding: 1,
                showinfo: 0,
                rel: 0,
            },
        });
    }
}

function changeVideoDaily() {
    const date = new Date();
    const dayIndex = date.getDate() % videoIds.length;
    const videoId = videoIds[dayIndex];
    loadVideo(videoId);
}

// Load the first video on page load
changeVideoDaily();

// Schedule video change daily at midnight
setInterval(changeVideoDaily, 24 * 60 * 60 * 1000);


// <!--==script js for see more button===-->

function toggleRows() {
    const hiddenRows = document.getElementById("hidden-rows");
    const showMoreButton = document.getElementById("showMoreButton");
  
    if (hiddenRows.style.display === "none") {
      hiddenRows.style.display = "flex";
      showMoreButton.innerText = "Show Less";
    } else {
      hiddenRows.style.display = "none";
      showMoreButton.innerText = "Show More";
    }
  }
  

