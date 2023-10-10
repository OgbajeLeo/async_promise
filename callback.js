const downloadBtn = document.querySelector('#btn');
        const playBtn = document.querySelector('#playBtn');
        const resText = document.querySelector('#responseText');
        const url = document.querySelector('#url')
        let videoUrl;

        downloadBtn.addEventListener('click', () => {
            
            videoUrl = url.value.trim()
            downloadVideoCallback(videoUrl, (error) => {
                if (error) {
                    resText.innerHTML = `<h2>Error downloading video: ${error}</h2>`;
                } else {
                    resText.innerHTML = `<h2>Video Downloaded Successfully</h2>`;
                    playBtn.style.display = 'inline-block'; 
                }
            });
        });

        playBtn.addEventListener('click', () => {
                playVideo(videoUrl);    
         });

        function downloadVideoCallback(url, callback) {
            fetch(url)
                .then(response => response.blob())
                .then(blob => {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = "video.mp4";
                    a.click();
                    URL.revokeObjectURL(url);
                    callback(null);
                })
                .catch(error => callback(error));
        }

        function playVideo(url) {
            const videoPlayer = document.createElement('video');
            videoPlayer.src = url;
            videoPlayer.controls = true;
            videoPlayer.style.width = '100%';
            resText.innerHTML = ''; // Clear previous messages
            resText.appendChild(videoPlayer);
        }