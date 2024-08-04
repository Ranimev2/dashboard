const apiKey = 'YOUR_API_KEY';
const apiUrl = 'https://api.mathjs.org/v1/questions';

const soalContainer = document.getElementById('soal-container');
const opsiList = document.getElementById('opsi');
const jawabBtn = document.getElementById('jawab-btn');
const hasilText = document.getElementById('hasil');
const nextBtn = document.getElementById('next-btn');

let currentSoal = 0;
let soalData = [];

function getSoal() {
  fetch(`${apiUrl}?apiKey=${apiKey}&category=math`)
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
  const jawabanUser = parseInt(prompt('Masukkan jawaban Anda:'));
  const jawabanBenar = soalData[currentSoal].correct;
  if (jawabanUser === jawabanBenar) {
    hasilText.textContent = 'Benar!';
  } else {
    hasilText.textContent = 'Salah. Jawaban yang benar adalah 'awabanBenar;
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

document.addEventListener('DOMContentLoaded', function() {
  const loadingScreen = document.querySelector('.loading-screen');
  const logoContainer = document.querySelector('.logo-container');
  const quizContainer = document.querySelector('.quiz-container');

  loadingScreen.style.display = 'none';
  logoContainer.style.display = 'block';
  quizContainer.style.display = 'block';
});
