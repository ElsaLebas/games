// Elements
const board = document.querySelectorAll(".tile");
const comboCol1 = [board[0], board[7], board[14], board[21], board[28], board[35]];
const comboCol2 = [board[1], board[8], board[15], board[22], board[29], board[36]];
const comboCol3 = [board[2], board[9], board[16], board[23], board[30], board[37]];
const comboCol4 = [board[3], board[10], board[17], board[24], board[31], board[38]];
const comboCol5 = [board[4], board[11], board[18], board[25], board[32], board[39]];
const comboCol6 = [board[5], board[12], board[19], board[26], board[33], board[40]];
const comboCol7 = [board[6], board[13], board[20], board[27], board[34], board[41]];

const winnerTextArea = document.getElementById("winner-text");

// Winning Combinations Array
const winningCombos = [
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],

  [7, 8, 9, 10],
  [8, 9, 10, 11],
  [9, 10, 11, 12],
  [10, 11, 12, 13],

  [14, 15, 16, 17],
  [15, 16, 17, 18],
  [16, 17, 18, 19],
  [17, 18, 19, 20],

  [21, 22, 23, 24],
  [22, 23, 24, 25],
  [23, 24, 25, 26],
  [24, 25, 26, 27],

  [28, 29, 30, 31],
  [29, 30, 31, 32],
  [30, 31, 32, 33],
  [31, 32, 33, 34],

  [35, 36, 37, 38],
  [36, 37, 38, 39],
  [37, 38, 39, 40],
  [38, 39, 40, 41],

  [0, 7, 14, 21],
  [7, 14, 21, 28],
  [14, 21, 28, 35],

  [1, 8, 15, 22],
  [8, 15, 22, 29],
  [15, 22, 29, 36],

  [2, 9, 16, 23],
  [9, 16, 23, 30],
  [16, 23, 30, 37],

  [3, 10, 17, 24],
  [10, 17, 24, 31],
  [17, 24, 31, 38],

  [4, 11, 18, 25],
  [11, 18, 25, 32],
  [18, 25, 32, 39],

  [5, 12, 19, 26],
  [12, 19, 26, 33],
  [19, 26, 33, 40],

  [6, 13, 20, 27],
  [13, 20, 27, 34],
  [20, 27, 34, 41],

  [3, 9, 15, 21],

  [4, 10, 16, 22],
  [10, 16, 22, 28],

  [5, 11, 17, 23],
  [11, 17, 23, 29],
  [17, 23, 29, 35],

  [6, 12, 18, 24],
  [12, 18, 24, 30],
  [18, 24, 30, 36],

  [13, 19, 25, 31],
  [19, 25, 31, 37],

  [20, 26, 32, 38],
];

// // Check if there is a winning combination in the board
// const checkForWinner = () => {
//   winningCombos.forEach((winningCombo) => {
//     const tile1 = board[winningCombo[0]];
//     console.log(tile1.classList);
//     const tile2 = board[winningCombo[1]];
//     const tile3 = board[winningCombo[2]];
//     const tile4 = board[winningCombo[3]];

//     if (
//       tile1.classList.contains("player-red")
//       && tile2.classList.contains("player-red")
//       && tile3.classList.contains("player-red")
//       && tile4.classList.contains("player-red")
//     ) {
//       winnerTextArea.innerText = "Player Red wins!";
//     } if (
//       tile1.classList.contains("player-yellow")
//       && tile2.classList.contains("player-yellow")
//       && tile3.classList.contains("player-yellow")
//       && tile4.classList.contains("player-yellow")
//     ) {
//       winnerTextArea.innerText = "Player Yellow wins!";
//     }
//   });
// };

const checkForWinner = () => {
  for (let i = 0; i < winningCombos.length; i++) {
    const tile1 = board[winningCombos[i][0]];
    const tile2 = board[winningCombos[i][1]];
    const tile3 = board[winningCombos[i][2]];
    const tile4 = board[winningCombos[i][3]];
    if (
      tile1.classList.contains("player-red")
      && tile2.classList.contains("player-red")
      && tile3.classList.contains("player-red")
      && tile4.classList.contains("player-red")
    ) {
      winnerTextArea.innerText = "Player Red wins!";
    } else if (
      tile1.classList.contains("player-yellow")
      && tile2.classList.contains("player-yellow")
      && tile3.classList.contains("player-yellow")
      && tile4.classList.contains("player-yellow")
    ) {
      winnerTextArea.innerText = "Player Yellow wins!";
    } else if (
      comboCol1.length === 0
      && comboCol2.length === 0
      && comboCol3.length === 0
      && comboCol4.length === 0
      && comboCol5.length === 0
      && comboCol6.length === 0
      && comboCol7.length === 0
    ) {
      winnerTextArea.innerText = "Draw!";
    }
  }
};

const playersInfo = document.getElementById("players-info");
// Players
let turn = "Player Red";

// Function to set turn and playersInfo
const setTurn = (playerColor) => {
  turn = `Player ${playerColor}`;
  playersInfo.innerText = `Turn > Player ${playerColor}`;
};

document.addEventListener("click", (event) => {
  const columnClicked = event.target.classList;
  if (columnClicked.contains("col-1")) {
    const spaceLeftInCol1 = comboCol1.length;
    if (turn === "Player Red" && spaceLeftInCol1 > 0) {
      comboCol1[spaceLeftInCol1 - 1].classList.add("player-red");
      setTurn("Yellow");
      comboCol1.pop();
      checkForWinner();
    } else if (turn === "Player Yellow" && spaceLeftInCol1 > 0) {
      comboCol1[spaceLeftInCol1 - 1].classList.add("player-yellow");
      setTurn("Red");
      comboCol1.pop();
      checkForWinner();
    } else {
      alert("No more space available in this col 1 ");
    }
  } else if (columnClicked.contains("col-2")) {
    const spaceLeftInCol2 = comboCol2.length;
    if (turn === "Player Red" && spaceLeftInCol2 > 0) {
      comboCol2[spaceLeftInCol2 - 1].classList.add("player-red");
      setTurn("Yellow");
      comboCol2.pop();
      checkForWinner();
    } else if (turn === "Player Yellow" && spaceLeftInCol2 > 0) {
      comboCol2[spaceLeftInCol2 - 1].classList.add("player-yellow");
      setTurn("Red");
      comboCol2.pop();
      checkForWinner();
    } else {
      alert("No more space available in this col 2 ");
    }
  } else if (columnClicked.contains("col-3")) {
    const spaceLeftInCol3 = comboCol3.length;
    if (turn === "Player Red" && spaceLeftInCol3 > 0) {
      comboCol3[spaceLeftInCol3 - 1].classList.add("player-red");
      setTurn("Yellow");
      comboCol3.pop();
      checkForWinner();
    } else if (turn === "Player Yellow" && spaceLeftInCol3 > 0) {
      comboCol3[spaceLeftInCol3 - 1].classList.add("player-yellow");
      setTurn("Red");
      comboCol3.pop();
      checkForWinner();
    } else {
      alert("No more space available in this col 3 ");
    }
  } else if (columnClicked.contains("col-4")) {
    const spaceLeftInCol4 = comboCol4.length;
    if (turn === "Player Red" && spaceLeftInCol4 > 0) {
      comboCol4[spaceLeftInCol4 - 1].classList.add("player-red");
      setTurn("Yellow");
      comboCol4.pop();
      checkForWinner();
    } else if (turn === "Player Yellow" && spaceLeftInCol4 > 0) {
      comboCol4[spaceLeftInCol4 - 1].classList.add("player-yellow");
      setTurn("Red");
      comboCol4.pop();
      checkForWinner();
    } else {
      alert("No more space available in this col 4 ");
    }
  } else if (columnClicked.contains("col-5")) {
    const spaceLeftInCol5 = comboCol5.length;
    if (turn === "Player Red" && spaceLeftInCol5 > 0) {
      comboCol5[spaceLeftInCol5 - 1].classList.add("player-red");
      setTurn("Yellow");
      comboCol5.pop();
      checkForWinner();
    } else if (turn === "Player Yellow" && spaceLeftInCol5 > 0) {
      comboCol5[spaceLeftInCol5 - 1].classList.add("player-yellow");
      setTurn("Red");
      comboCol5.pop();
      checkForWinner();
    } else {
      alert("No more space available in this col 5 ");
    }
  } else if (columnClicked.contains("col-6")) {
    const spaceLeftInCol6 = comboCol6.length;
    if (turn === "Player Red" && spaceLeftInCol6 > 0) {
      comboCol6[spaceLeftInCol6 - 1].classList.add("player-red");
      setTurn("Yellow");
      comboCol6.pop();
      checkForWinner();
    } else if (turn === "Player Yellow" && spaceLeftInCol6 > 0) {
      comboCol6[spaceLeftInCol6 - 1].classList.add("player-yellow");
      setTurn("Red");
      comboCol6.pop();
      checkForWinner();
    } else {
      alert("No more space available in this col 6 ");
    }
  } else if (columnClicked.contains("col-7")) {
    const spaceLeftInCol7 = comboCol7.length;
    if (turn === "Player Red" && spaceLeftInCol7 > 0) {
      comboCol7[spaceLeftInCol7 - 1].classList.add("player-red");
      setTurn("Yellow");
      comboCol7.pop();
      checkForWinner();
    } else if (turn === "Player Yellow" && spaceLeftInCol7 > 0) {
      comboCol7[spaceLeftInCol7 - 1].classList.add("player-yellow");
      setTurn("Red");
      comboCol7.pop();
      checkForWinner();
    } else {
      alert("No more space available in this col 7 ");
    }
  }
});
