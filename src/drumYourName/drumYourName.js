  // Elements
  const keys = document.querySelectorAll('key');

  // playAudio arrow function to play the audio related to the event listened 
  const playAudio = event => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if (audio == null) return; // Stop the function from running if the audio is null ie. when no keyboard key associated to an audio
    
    audio.play();
    audio.currentTime = 0;
  };

  const keyStyle = event => {
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if(!key) return; // Stop the function from running if the key is null
    key.classList.add("playing");
    key.addEventListener("transitionend", (event) => {
      if(event.propertyName != "transform") return;
      key.classList.remove("playing");
    });
  };

  // Main flow
  // Listen to the keydown and do something
  window.addEventListener("keydown", (event) => {
    playAudio(event);
    keyStyle(event);
});