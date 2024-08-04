const hasil = document.getElementById('hasil');
const submit = document.getElementById('submit');
const tebakan = document.getElementById('tebakan');
const skor = document.getElementById('skor');
const jawaban = document.getElementById('jawaban');

let angkaAcak = Math.floor(Math.random() * 100) + 1;
let skorValue = 0;

submit.addEventListener('click', () => {
  const tebakanValue = parseInt(tebakan.value);
  if (tebakanValue === angkaAcak) {
    hasil.textContent = 'Selamat! Tebakanmu benar!';
    skorValue++;
    skor.textContent = `Skor: ${skorValue}`;
    jawaban.textContent = `Jawaban: ${angkaAcak}`;
    angkaAcak = Math.floor(Math.random() * 100) + 1;
  } else if (tebakanValue < angkaAcak) {
    hasil.textContent = 'Tebakanmu terlalu rendah!';
    jawaban.textContent = `Jawaban: ${angkaAcak}`;
  } else {
    hasil.textContent = 'Tebakanmu terlalu tinggi!';
    jawaban.textContent = `Jawaban: ${angkaAcak}`;
  }
});
