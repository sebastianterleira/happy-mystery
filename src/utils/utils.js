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

export function handleVideoPlayback(videoElement, container, opacityContainer) {
  opacityContainer.classList.remove('loaded');
  container.style.display = 'block';
  videoElement.classList.add('visible');
  videoElement.play();

  videoElement.addEventListener('ended', () => {
    videoElement.classList.remove('visible');
    container.style.display = 'none';
    opacityContainer.classList.add('loaded');
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