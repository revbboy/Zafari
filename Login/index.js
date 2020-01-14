const inpUsername = document.querySelector('#inp-username');
const msgError = document.querySelector('.msg-error');
const btnLogin = document.querySelector('#btn-login');
const inpPass = document.querySelector('#inp-password');
const msgError2 = document.querySelector('.msg-error2');

btnLogin.addEventListener('click', login);
inpUsername.addEventListener('focus', focusInput);
inpPass.addEventListener('focus', focusInput);

function login() {
    if (inpUsername.value === '' || inpPass.value === '') {
        msgError2.classList.remove(['hide']);
        msgError2.classList.add(['visible']);
    } else
    if (inpUsername.value !== 'ejemplo@gmail.com' || inpPass.value !== '123456') {
        msgError.classList.remove(['hide']);
        msgError.classList.add(['visible']);
    } else {
        document.location.assign('../Layout/index.html');
    }
}

function focusInput() {
    msgError.classList.remove(['visible']);
    msgError.classList.add(['hide']);
    msgError2.classList.remove(['visible']);
    msgError2.classList.add(['hide']);
}