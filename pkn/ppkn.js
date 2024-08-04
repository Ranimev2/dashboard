const soalContainer = document.getElementById('soal-container');
const opsiList = document.getElementById('opsi');
const jawabBtn = document.getElementById('jawab-btn');
const hasilText = document.getElementById('hasil');
const nextBtn = document.getElementById('next-btn');

const apiKey = 'KrWerCEDwTuhXWNH2naDZDuIYTpUNOGJmRTovvH6';
const apiUrl = 'https://quizapi.io/v1/questions';

let currentSoal = 0;
let soalData = [];

function getSoal() {
    fetch(`${apiUrl}?apiKey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            soalData = data;
            tampilkanSoal();
        })
        .catch(error => console.error(error));
}

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
    const jawabanUser = parseInt(prompt('Masukkan jawaban Anda (1-' + soalData[currentSoal].options.length + '):'));
    const jawabanBenar = soalData[currentSoal].correct;
    if (jawabanUser === jawabanBenar) {
        hasilText.textContent = 'Benar!';
    } else {
        hasilText.textContent = 'Salah. Jawaban yang benar adalah ' + soalData[currentSoal].options[jawabanBenar];
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
