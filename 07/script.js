const btn_iniciar = document.getElementById('iniciar');
const btn_reiniciar = document.getElementById('reiniciar');
let tempo_exibicao = document.getElementById('tempo');

const valor_padrao = 10;
let intervalo = null;
let ativado = false;

let tempo = valor_padrao;

function iniciarContador(){
  ativado = true;
  btn_iniciar.disabled = true;
  atualizar_contador();
}

function reiniciarContador(){
  btn_iniciar.disabled = false;
  clearInterval(intervalo);
  ativado = false;
  tempo = valor_padrao;
  tempo_exibicao.innerText = formatar_tempo_exibicao(valor_padrao);
}

function atualizar_contador(){
  intervalo = setInterval(() => {
    if(ativado && tempo >= 0){
      tempo_exibicao.innerText = formatar_tempo_exibicao(tempo);
      tempo-=1;
    } else if (ativado && tempo < 0) {
      clearInterval(intervalo);
      btn_iniciar.disabled = false;
    }
  }, 1000);
}

btn_iniciar.addEventListener('click', iniciarContador);
btn_reiniciar.addEventListener('click', reiniciarContador);

function formatar_tempo_exibicao(tempo){
  return `${String(Math.floor(tempo / 60)).padStart(2, '0')}:${String(tempo % 60).padStart(2, '0')}`
}
// Assim que a página carregar, executa a função
document.addEventListener('DOMContentLoaded', () => {
  tempo_exibicao.innerText = formatar_tempo_exibicao(valor_padrao);
});