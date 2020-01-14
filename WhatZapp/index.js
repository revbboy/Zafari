const jpp = document.querySelector('#jpp');
const pc = document.querySelector('#pc');
const mu = document.querySelector('#mu');
const pa = document.querySelector('#pa');
const mh = document.querySelector('#mh');
const cs = document.querySelector('#conSup');

jpp.addEventListener('click', nom1);

function nom1() {
    cs.innerHTML = "JUAN PEREZ PEREZ";
}
pc.addEventListener('click', nom2);

function nom2() {
    cs.innerHTML = "PATRICIO CASANOVA";
}
mu.addEventListener('click', nom3);

function nom3() {
    cs.innerHTML = "MIRANDA UNDURRAGA";
}
pa.addEventListener('click', nom4);

function nom4() {
    cs.innerHTML = "PAOLA ASENJO";
}
mh.addEventListener('click', nom5);

function nom5() {
    cs.innerHTML = "MIRIAM HERNANDEZ";
}