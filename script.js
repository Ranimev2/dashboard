const selectionScreen = document.getElementById('selection-screen');
const gameContent = document.getElementById('game-content');
const buttons = selectionScreen.querySelectorAll('button');
const loadingScreen = document.getElementById('loading-screen');
const scoreBoard = document.getElementById('score-board');
const scoreText = document.getElementById('score');
const rankText = document.getElementById('rank');
const hasil = document.getElementById('hasil');
const submit = document.getElementById('submit');
const tebakan = document.getElementById('tebakan');
const jawaban = document.getElementById('jawaban');

let angkaAcak = Math.floor(Math.random() * 100) + 1;
let skorValue = 0;
let rankValue = '';

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    selectionScreen.style.display = 'none';
    loadingScreen.style.display = 'block';
    // Simulate loading time
    setTimeout(() => {
      loadingScreen.style.display = 'none';
      gameContent.style.display = 'block';
      // Initialize game based on selected mode
      switch (button.id) {
        case '2v2':
          // Initialize 2v2 game mode
          init2v2Game();
          break;
        case 'player-vs-computer':
          // Initialize Player vs Computer game mode
          initPvCGame();
          break;
        case 'player-vs-player-premium':
          // Initialize Player vs Player Premium game mode
          initPvPPremiumGame();
          break;
      }
    }, 3000);
  });
});

function init2v2Game() {
  // 2v2 game mode logic goes here
  console.log('2v2 game mode initialized');
}

function initPvCGame() {
  // Player vs Computer game mode logic goes here
  console.log('Player vs Computer game mode initialized');
  submit.addEventListener('click', () => {
    const tebakanValue = parseInt(tebakan.value);
    if (tebakanValue === angkaAcak) {
      skorValue++;
      hasil.textContent = `Selamat! Anda benar, angka yang dihasilkan adalah ${angkaAcak}.`;
      jawaban.textContent = `Anda telah menebak ${skorValue} kali.`;
      updateScoreBoard();
    } else {
      hasil.textContent = `Sayang, tebakan Anda salah. Angka yang dihasilkan adalah ${angkaAcak}.`;
    }
  });
}

function initPvPPremiumGame() {
  // Player vs Player Premium game mode logic goes here
  console.log('Player vs Player Premium game mode initialized');
}

function updateScoreBoard() {
  scoreText.textContent = `Skor: ${skorValue}`;
  if (skorValue < 5) {
    rankValue = 'Pemula';
  } else if (skorValue < 10) {
    rankValue = 'Menengah';
  } else {
    rankValue = 'Master';
  }
  rankText.textContent = `Peringkat: ${rankValue}`;
}
