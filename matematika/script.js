const soalData = [
  {
    question: "2 + 2 =?",
    options: ["3", "4", "5", "6"],
    correct: 4
  },
  {
    question: "5 - 1 =?",
    options: ["3", "4", "5", "6"],
    correct: 4
  },
  {
    question: "7 x 3 =?",
    options: ["20", "21", "22", "23"],
    correct: 21
  },
  // add more questions here
];

let currentSoal = 0;

const soalContainer = document.getElementById('soal-container');
const opsiList = document.getElementById('opsi');
const jawabBtn = document.getElementById('jawab-btn');
const hasilText = document.getElementById('hasil');
const nextBtn = document.getElementById('next-btn');

function tampilkanSoal() {
  const soal = soalData[currentSoal];
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
    hasilText.textContent = 'Salah. Jawaban yang benar adalah ' jawabanBenar;
  }
}

function nextSoal() {
  currentSoal++;
  if (currentSoal >= soalData.length) {
    currentSoal = 0;
  }
  tampilkanSoal();
  hasilText.textContent = '';
}

jawabBtn.addEventListener('click', jawabSoal);
nextBtn.addEventListener('click', nextSoal);

document.addEventListener('DOMContentLoaded', function() {
  const loadingScreen = document.querySelector('.loading-screen');
  const logoContainer = document.querySelector('.logo-container');
  const quizContainer = document.querySelector('.quiz-container');

  loadingScreen.style.display = 'none';
  logoContainer.style.display = 'block';
  quizContainer.style.display = 'block';

  tampilkanSoal();
});
