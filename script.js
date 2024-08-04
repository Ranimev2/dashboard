const loadingScreen = document.getElementById('loading-screen');
const gameContent = document.getElementById('game-content');
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

// Simulate loading time
setTimeout(() => {
  loadingScreen.style.display = 'none';
  gameContent.style.display = 'block';
}, 3000);

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
