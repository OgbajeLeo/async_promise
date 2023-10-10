const urlInput = document.querySelector("#url")  
const button = document.querySelector("#btn")
button.addEventListener('click', async () => {
   try {
    const response = await fetch(urlInput.value);
    const file = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = "sampleVideo.mp4";;
    link.click();
   } catch(error) {
    alert("Download Failed")
   }
});