export function resetBlinkEffect(state) {
  const inputElement = document.getElementById('input');
  
  if (state) {
    inputElement.classList.remove('blink_correct');
    void inputElement.offsetWidth; // Forzar reflujo para reiniciar la animación
    inputElement.classList.add('blink_correct');
    return;
  }

  // reset input value
  // Reinicia la animación del parpadeo
  inputElement.classList.remove('blink_correct');
  inputElement.classList.remove('blink_error');
  void inputElement.offsetWidth; // Forzar reflujo para reiniciar la animación
  inputElement.classList.add('blink_error');
  inputElement.value = '';
}

export function playErrorSound() {
  const errorSound = document.getElementById('error');
  errorSound.currentTime = 0; // Reinicia el sonido al inicio
  errorSound.volume = 1;
  errorSound.play();
}

export function handleVideoDisplay(videoElement, container, opacityContainer, resultText) {
  document.getElementById('result').innerText = resultText;

  opacityContainer.classList.remove('loaded');
  container.style.display = 'block';
  videoElement.classList.add('visible');
  videoElement.play();

  videoElement.addEventListener('ended', () => {
    videoElement.classList.remove('visible');
    container.style.display = 'none'; // Oculta el video después de reproducirse
    opacityContainer.classList.add('loaded'); // Asegura que la sección esté completamente visible
  });
}

export function handleImageDisplay(imageElement, resultText, contentSound, container) {
  container.style.display = 'flex';
  imageElement.classList.add('visible');
  document.getElementById('result').innerText = '';
  document.getElementById('text-image').innerText = resultText;
  contentSound.volume = 1;
  contentSound.play();
}

export const handleWindowOpen = (codeKey, url, vel = 1000) => {
  console.log(vel)
  resetBlinkEffect(true);
  document.getElementById("result").innerText = codeKey;
  setTimeout(() => window.open(url, "_blank"), vel);
};

export function handleFileDownload(filePath, fileName, resultText) {
  const downloadLink = document.createElement('a');
  downloadLink.href = filePath;
  downloadLink.download = fileName;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
  resetBlinkEffect(true);
  document.getElementById("result").innerText = resultText;
}
