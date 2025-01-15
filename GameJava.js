let storedInput = "";

function MAINPAGE()
{
    window.location.href = "WEBSITE VERSION 1.html";
}
const buttons = document.querySelectorAll('.Magic-Box');

buttons.forEach(button => {
    let glow = null;

    button.addEventListener('mouseenter', () => {
        if (!glow) {
            glow = document.createElement('div');
            glow.classList.add('glow');
            button.appendChild(glow);
        }
    });

    button.addEventListener('mousemove', (event) => {
        if (glow) {
            const rect = button.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            glow.style.left = `${x}px`;
            glow.style.top = `${y}px`;
        }
    });

    button.addEventListener('mouseleave', () => {
        if (glow) {
            glow.remove();
            glow = null;
        }
    });
});
function MAGICBUTTONPRESSED(){
    const gloweffect = document.querySelectorAll('.glow');
    
    gloweffect.forEach(div => div.classList.add('glowBlue') ) ;
    gloweffect.forEach(div => div.classList.remove('glow') ) ;
    
        
    }
    function MAGICBUTTONRELEASED(){
    const gloweffect1 = document.querySelectorAll('.glowBlue');
    
    gloweffect1.forEach(div => div.classList.add('glow') ) ;
    gloweffect1.forEach(div => div.classList.remove('glowBlue') ) ;
    }



    function initializeHLSPlayer(videoUrl) {
        const video = document.getElementById('video');
    
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(videoUrl);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function() {
                video.play();
            });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = videoUrl;
            video.addEventListener('loadedmetadata', function() {
                video.play();
            });
        }
    }
    async function fetchData() {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = 'https://api-anime-rouge.vercel.app/aniwatch/az-list?page=69';
    
        try {
            const response = await fetch(proxyUrl + encodeURIComponent(targetUrl), { mode: 'cors' });
            console.log('Response:', response); // Log the entire response object
    
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.status + ' ' + response.statusText);
            }
    
            const data = await response.json();
            console.log('Data:', data); // Log the returned values
    
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            alert('Failed to fetch data. Please check the console for more details.');
        }
    }
    
    
    
    // Call the function with the URL of your M3U8 playlist
    function animeSearch(){
        storedInput = document.getElementById('userInput').value;
        fetchData();
        initializeHLSPlayer('https://wf1.biananset.net/_v7/0fece0b01b5b1d19095d6f7bb3cc0be7827e65eac0885997133d5c946d9be3ecc96d33f219a7bb17001d57b274f137777855a64a792e149a39597de79becb0698f75a275a2945bd5dadd493a6183d54b3f8d6ff432860163cfbab1355ccd873c311954e8b86ddcd301d8fc6c28d9048f7e106b83aa5d98f3a20b5857f4fc0bfe/master.m3u8');
    }
    