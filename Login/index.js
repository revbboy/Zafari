
const botonIng = window.document.querySelector('#Boton');
console.log(botonIng);

function ingresar(){
    const input1 = window.document.querySelector('#Usuario');
    const input2 = window.document.querySelector('#Pass');

    const usuario   = input1.value;
    const pass      = input2.value;

    console.log('Usuario: ' + usuario + ', Contraseña: '+ pass);
    if (usuario === 'revbboy@gmail.com' && pass === 'AntonellA21') {
        console.log('PUEDES INGRESAR AL SISTEMA')
    }
    else{
        console.log('NO PUEDE INGRESAR AL SISTEMA')
    }
    input1.value = '';
    input1.focus();
    input2.value = '';
    input2.focus();

}
botonIng.addEventListener('click',ingresar);

