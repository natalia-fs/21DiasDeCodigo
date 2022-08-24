const index = 'theme@21DiasDeCodigo';
let theme = localStorage.getItem(index);

const themeToggle = document.querySelector('#switch')

const enableLightMode = () => {
    document.body.classList.toggle('lightmode');
    localStorage.setItem(index, 'light');
}

const disableLightMode = () => {
    document.body.classList.toggle('lightmode');
    localStorage.setItem(index, 'dark');
}

if (theme === 'light') {
    enableLightMode()
}

themeToggle.addEventListener("click", () =>{
    theme = localStorage.getItem(index); 
    if(theme !== 'light'){
        enableLightMode()
    } else {
        disableLightMode();
    }
});
