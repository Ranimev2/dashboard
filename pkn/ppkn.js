const loadingScreen = document.querySelector('.loading-screen');
const logoContainer = document.querySelector('.logo-container');
const nicknameText = document.querySelector('.nickname');
const soalContainer = document.getElementById('soal-container');
const opsiList = document.getElementById('opsi');
const jawabBtn = document.getElementById('jawab-btn');
const hasilText = document.getElementById('hasil');
const nextBtn = document.getElementById('next-btn');

const apiKey = 'KrWerCEDwTuhXWNH2naDZDuIYTpUNOGJmRTovvH6';
const apiUrl = 'https://api.quizapi.io/v1/questions';

let currentSoal = 0;
let soalData = [];

function getSoal() {
  fetch(`${apiUrl}?apiKey=${apiKey}`)
  .then(response => response.json())
  .then(data => {
      console.log('API Response:', data);
      soalData = data;
      tampilkanSoal();
    })
  .catch(error => {
      console.error('Error fetching API:', error);
    });
}

function tampilkanSoal() {
  loadingScreen.style.display = 'none';
  logoContainer.style.display = 'block';
  nicknameText.textContent = 'Admin Nickname'; // Replace with admin nickname
  const logoImg = document.createElement('img');
  logoImg.src = 'logo.png'; // Replace with logo image
  logoImg.alt = 'Logo';
  logoContainer.appendChild(logoImg);

  const soal = soalData[currentSoal];
  console.log('Current Soal:', soal);
  soalContainer.innerHTML = soal.question;
  opsiList.innerHTML = '';
  soal.options.forEach((opsi, index) => {
    const li = document.createElement('li');
    li.textContent = opsi;
    opsiList.appendChild(li);
  });
}

function jawabSoal() {
  const jawabanUser = parseInt(prompt('Masukkan jawaban Anda (1-' + soalData[currentSoal].options.length + '):'));
  const jawabanBenar = soalData[currentSoal].correct;
  if (jawabanUser === jawabanBenar) {
    hasilText.textContent = 'Benar!';
  } else {
    hasilText.textContent = 'Salah. Jawaban yang benar adalah ' soalData[currentSoal].options[jawabanBenar];
  }
}

function nextSoal() {
  currentSoal++;
  if (currentSoal >= soalData.length) {
    currentSoal = 0;
  }
  tampilkanSoal();
}

getSoal();

jawabBtn.addEventListener('click', jawabSoal);
nextBtn.addEventListener('click', nextSoal);
