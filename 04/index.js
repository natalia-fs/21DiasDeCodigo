const display = document.getElementById('display');

const botoes = Array.from(document.getElementsByClassName('btn'));

botoes.map( btn => {
  btn.addEventListener('click', (e) => {
    switch(e.target.innerText){
      case '=':
        try{
          let resultado = eval(display.innerText)
          display.innerText = resultado != undefined ? resultado : 'Erro';
        } catch {
          display.innerText = 'Erro';
        }
        break;
      case 'C':
        display.innerText = '';
      case '←':
        if(display) display.innerText = display.innerText.slice(0, -1);
        break;

      default:
        let valor_display = display.innerText;
        if(valor_display == 'Erro') display.innerText = '';
        display.innerText += e.target.innerText;
    }
  });
});

