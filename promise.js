function downloadVideo(url) {
    return new Promise(function (resolve, reject) {
      fetch(url)
        .then(function (response) {
          if (!response.ok) {
            throw new Error(
              `Request failed with status ${response.status}`
            );
          }
          return response.blob();
        })
        .then(resolve)
        .catch(reject);
    });
  }

  const urlInput = document.getElementById("url");
  const downloadBtn = document.getElementById("btn");

  downloadBtn.addEventListener("click", function () {
    downloadVideo(urlInput.value)
      .then(function (blob) {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "sampleVideo.mp4";;
        link.click();
      })
      .catch(function (error) {
        alert("Error fetching data:", error);
      });
  });