const btnAtivar = document.getElementById('btnAtivar');
const inputCodigo = document.getElementById('codigo');
const mensagem = document.getElementById('mensagem');
const explicacao = document.getElementById('explicacao');
const circuloCarregamento = document.getElementById('circulo-carregando');
const iconLua = document.getElementById('icone-lua');

// Forçar letras maiúsculas ao digitar
inputCodigo.addEventListener('input', () => {
  inputCodigo.value = inputCodigo.value.toUpperCase();
});

btnAtivar.addEventListener('click', () => {
  const codigo = inputCodigo.value.trim();

  if (!codigo) {
    mensagem.textContent = 'Por favor, insira um código.';
    mensagem.style.color = 'red';
    return;
  }

  const regexGiftCard = /^([A-Z0-9]{4}-){3}[A-Z0-9]{4}$/;
  if (!regexGiftCard.test(codigo)) {
    mensagem.textContent = 'Código inválido! Use o formato XXXX-XXXX-XXXX-XXXX.';
    mensagem.style.color = 'red';
    return;
  }

  circuloCarregamento.style.display = 'block';
  btnAtivar.style.display = 'none';
  mensagem.textContent = '';

  const tempoCarregamento = Math.floor(Math.random() * (35000 - 15000 + 1)) + 15000;

  setTimeout(() => {
    circuloCarregamento.style.display = 'none';
    mensagem.textContent = 'Código ativado com sucesso!';
    mensagem.style.color = 'green';
    inputCodigo.value = '';
  }, tempoCarregamento);
});

// Alternar modo escuro
iconLua.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
