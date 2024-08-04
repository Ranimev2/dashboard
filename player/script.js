let angkaAcak = Math.floor(Math.random() * 100) + 1;
let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;

function generateRandomNumber() {
    angkaAcak = Math.floor(Math.random() * 100) + 1;
}

function updateScoreBoard() {
    player1ScoreText.textContent = `Skor Pemain 1: ${player1Score}`;
    player2ScoreText.textContent = `Skor Pemain 2: ${player2Score}`;
}

function handlePlayerTurn(playerNumber) {
    const currentPlayerAnswer = parseInt(eval(`player${playerNumber}Input`).value);

    if (currentPlayerAnswer === angkaAcak) {
        eval(`player${playerNumber}Score`)++;
        hasil.textContent = `Selamat! Pemain ${playerNumber} benar, angka yang dihasilkan adalah ${angkaAcak}.`;
        updateScoreBoard();
    } else {
        hasil.textContent = `Sayang, Pemain ${playerNumber} salah. Angka yang dihasilkan adalah ${angkaAcak}.`;
    }

    currentPlayer = 3 - currentPlayer;
    eval(`player${currentPlayer}Input`).focus();
}

const player1Submit = document.getElementById('player1Submit');
const player2Submit = document.getElementById('player2Submit');
const player1ScoreText = document.getElementById('player1ScoreText');
const player2ScoreText = document.getElementById('player2ScoreText');
const hasil = document.getElementById('hasil');
const gameContent = document.getElementById('gameContent');
const loadingScreen = document.querySelector('.loading-screen');

setTimeout(() => {
    loadingScreen.style.display = 'none';
    gameContent.style.display = 'block';
}, 2000); // adjust the timeout to your liking

player1Submit.addEventListener('click', () => handlePlayerTurn(1));
player2Submit.addEventListener('click', () => handlePlayerTurn(2));
