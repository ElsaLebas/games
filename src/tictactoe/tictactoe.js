const tiles = document.querySelectorAll(".tile");
const playerX = "X";
const playerO = "O";
let turn = playerX;

const boardState = Array(tiles.length);
boardState.fill(null);

let signe = window.prompt('Quelle est la réponse ?');

// Elements
const strike = document.getElementById("strike");
const gameOverArea = document.getElementById("game-over-area");
const gameOverText = document.getElementById("game-over-text");
const playAgain = document.getElementById("play-again");

// // Sounds
// const clickSound = new Audio('sounds/Hero.wav');
// const gameOverSound = new Audio('??');

// Winning Combinations
const winningCombinations = [
  // rows combos
  { combo: [1, 2, 3], strikeClass: "strike-row-1" },
  { combo: [4, 5, 6], strikeClass: "strike-row-2" },
  { combo: [7, 8, 9], strikeClass: "strike-row-3" },
  // cols combos
  { combo: [1, 4, 7], strikeClass: "strike-col-1" },
  { combo: [2, 5, 8], strikeClass: "strike-col-2" },
  { combo: [3, 6, 9], strikeClass: "strike-col-3" },
  // diags combos
  { combo: [1, 5, 9], strikeClass: "strike-diag-1" },
  { combo: [3, 5, 7], strikeClass: "strike-diag-2" },
];

// GameOver Screen when there is a winner or a draw
const gameOverScreen = (winner) => {
  gameOverArea.className = "visible";
  if (winner === null) {
    gameOverText.innerText = `Draw!`;
  } else {
    gameOverText.innerText = `The winner is ${winner} !`;
    // scoreCount(winner);
  }
  // gameOverSound.play();
  // let text = "Draw!";
  // if (winner !== null) {
  //   text = `The winner is${winner}!`;
  // }
  // gameOverText.innerText = text;
};

const checkWinner = () => {
  winningCombinations.forEach( (winningCombination) => {
    const { combo, strikeClass } = winningCombination;
    const tileValue1 = boardState[combo[0] - 1];
    const tileValue2 = boardState[combo[1] - 1];
    const tileValue3 = boardState[combo[2] - 1];

    if (
      tileValue1 !== null
      && tileValue1 === tileValue2
      && tileValue1 === tileValue3) {
      strike.classList.add(strikeClass);
      gameOverScreen(tileValue1);
    } else if (boardState.every((element) => element !== null)
    && tileValue1 === tileValue2
    && tileValue1 === tileValue3
    ) {
      gameOverScreen(tileValue1);
    } else if (boardState.every((element) => element !== null)
    && (tileValue1 !== tileValue2 || tileValue1 !== tileValue3)
    ) {
      gameOverScreen(null);
    }
  });
};

// function to be able to remove all hover text on each tile
const setHoverText = () => {
  // To know the class Name depending on the player turn
  const hoverClass = `${turn.toLowerCase()}-hover`;

  tiles.forEach((tile) => {
    // remove all hover text 
    tile.classList.remove("o-hover");
    tile.classList.remove("x-hover");
    // and add hover class depending on player turn
    if (tile.innerText === "") {
      tile.classList.add(hoverClass);
    }
  });
};

setHoverText();

// function tileClick to be used on each tile on click
const tileClick = (event) => {
  if (gameOverArea.classList.contains("hidden")) {
    const tile = event.target;
    const tileNumber = tile.dataset.index;
    if (tile.innerText === "") {
      if (turn === playerX) {
        tile.innerText = playerX;
        boardState[tileNumber - 1] = playerX;
        turn = playerO;
      } else {
        tile.innerText = playerO;
        boardState[tileNumber - 1] = playerO;
        turn = playerX;
      }
    }
  }
  //  clickSound.play();
  setHoverText();
  checkWinner();
};

tiles.forEach((tile) => {
  tile.addEventListener("click", tileClick);
});

const startNewGame = () => {
  gameOverArea.className = "hidden";
  strike.className = "strike";
  boardState.fill(null);
  tiles.forEach((tile) => {
    tile.innerText = "";
  });
  turn = playerX;
  setHoverText();
};

playAgain.addEventListener("click", startNewGame);

// Scores Elements
// const playerXScore = document.getElementById("playerX-score");
// const playerOScore = document.getElementById("playerO-score");
// const reset = document.getElementById("reset-score");

// const scoreCount = (winner) => {
//   if (winner === playerX) {
//     scorePlayerX += 1;
//     playerXScore.innerText = `Player X => ${scorePlayerX}`;
//   } else {
//     scorePlayerO += 1;
//     playerOScore.innerText = `Player O => ${scorePlayerO}`;
//   }
// };
// const resetScores = () => {
//   scorePlayerO = 0;
//   playerOScore.innerText = "";
//   scorePlayerX = 0;
//   playerXScore.innerText = "";
//   startNewGame();
// };

// reset.addEventListener("click", resetScores);

// const checkWinner = () => {
//   // Check for a winner
//   for (const winningCombination of winningCombinations) {
//   const { combo, strikeClass } = winningCombination;
//   const tileValue1 = boardState[combo[0] - 1];
//   const tileValue2 = boardState[combo[1] - 1];
//   const tileValue3 = boardState[combo[2] - 1];
//     if (
//       tileValue1 !== null &&
//       tileValue1 === tileValue2 &&
//       tileValue1 === tileValue3
//       ) {
//         strike.classList.add(strikeClass);
//         gameOverScreen(tileValue1);
//         return;
//     }
//   }
//   // Check for a draw!
//   // Check if every tile is filled In > Every Element of the Array BoardState is not null
//   gameOverText.innerText = `Draw!`;
//   if (boardState.every((element) => element !== null)) {
//     // No winner > call gamOverScreen on null
//     gameOverScreen(null);
//   }
// };
