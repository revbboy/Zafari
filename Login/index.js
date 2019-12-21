
const botonIng = window.document.querySelector('#Boton');
console.log(botonIng);

function ingresar(){
    const input1 = window.document.querySelector('#Usuario');
    const input2 = window.document.querySelector('#Pass');

    const usuario   = input1.value;
    const pass      = input2.value;

    console.log('Usuario: ' + usuario + ', Contraseña: '+ pass);
    if (usuario === 'ejemplo@gmail.com' && pass === '123456') {
        console.log('Iniciando Sesión...')
    }
    else{
        console.log('Email y/o contraseña incorrectos')
    }
    input1.value = '';
    input1.focus();
    input2.value = '';
    input2.focus();

}
botonIng.addEventListener('click',ingresar);

