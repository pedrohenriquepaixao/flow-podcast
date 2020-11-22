const buttonLogin = document.querySelector('#login-register');
const btnFechar = document.querySelector('#btn-fechar');
const popup = document.querySelector('#pop-up');
const overlawer = document.querySelector('#overlawer');

buttonLogin.addEventListener('click',()=>{
    popup.classList.add('pop-up')
    popup.classList.remove('disable');
    popup.classList.remove('fadeOut');
})

btnFechar.addEventListener('click',()=>{
    popup.classList.add('fadeOut');

    setTimeout(() => {
        popup.classList.add('disable')
    }, 500);
})

overlawer.addEventListener('click',()=>{
    popup.classList.add('fadeOut');

    setTimeout(() => {
        popup.classList.add('disable')
    }, 500);
})

