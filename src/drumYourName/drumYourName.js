// Elements
const keys = document.querySelectorAll('key');
const resetButton = document.getElementById('reset');
const outputSpace = document.getElementById('output');
const resetBtnPanel = document.querySelector('.drumname');

// playAudio arrow function to play the audio related to the event listened  (event = keydown)
const playAudio = event => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (audio == null) return; // Stop the function from running if the audio is null ie. when no keyboard key associated to an audio
  audio.play();
  audio.currentTime = 0;
};

// keyStyle fct to style each key <kbd> with a yellow outline (event = keydown)
const keyStyle = event => {
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if(!key) return; // Stop the function from running if the key is null
  key.classList.add("playing");
  key.addEventListener("transitionend", (event) => {
    if(event.propertyName != "transform") return;
    key.classList.remove("playing");
  });
};

// letterOutput fct to concatenate and displat the letters typed by user (event = keydown)
const letterOutput = event => {
  const letter = document.querySelector(`div[data-key="${event.keyCode}"] kbd`).innerText;
  if(!letter) return; // Stop the function from running if the letter is null
  if(!outputSpace) return;
  if(outputSpace.innerText === "Press a Key to Drum Your Name !") {
    outputSpace.innerText ="";
  }
  outputSpace.innerText += letter;
};

// startNewGame fct to start a new game when the reset btn is cicked (event = btn click)
const startNewGame = event => {
  const init = document.querySelector(`init`);
  if(outputSpace.innerText === "") return;
    outputSpace.innerText ="Press a Key to Drum Your Name !";
};

// add the reset btn with JS
// const addResetBtn = event => {
//   resetBtnPanel.innerHTML = '<p id="output" class="init">Press a Key to Drum Your Name !</p><button id="reset" class="disabled" >replay</button>';
// }

// Main flow
// =================================

// Listen to the keydown and do something
window.addEventListener("keydown", (event) => {
  playAudio(event);
  keyStyle(event);
  letterOutput(event);
});

// Listen to the click on the reset btn and restart a new game
resetButton.addEventListener("click", (event) => {
  startNewGame(event);
});
