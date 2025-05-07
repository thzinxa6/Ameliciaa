const button = document.getElementById('startBtn');
const spinner = document.getElementById('spinner');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  button.disabled = true;
  spinner.style.display = 'block';
  message.style.display = 'block';

  setTimeout(() => {
    window.location.href = 'parte2.html';
  }, 4000);
});
