const calc = document.querySelector('#calculadora tbody');
const btnC = document.querySelector('#limpiar');
const pantalla = document.querySelector('input');
const igual = document.querySelector('#igual');
let num1 = '';
let num2 = '';
let operacion = '';

cargarEventListener();

function cargarEventListener() {

    //cuando precionamos un boton de la calculadora
    calc.addEventListener('click', calcular);

    // al hacer click en btn-limpiar
    btnC.addEventListener('click', resetear);

    //al hacer click en btn =
    igual.addEventListener('click', calcular2)

}

function calcular(e) {
    const btn = e.target.classList;
    e.preventDefault();

    // si es un numero
    if (btn.contains('numeros')) {
        pantalla.value += e.target.textContent;

    } else if (btn.contains('operadores')) {
        num1 = pantalla.value;
        operacion = e.target.textContent;
        limpiar();
        console.log(num1);
    }
}

function calcular2(e) {
    num2 = pantalla.value;
    evaluar();
}

function limpiar() {
    pantalla.value = "";
}

function resetear() {
    pantalla.value = "";
    num1 = 0;
    num2 = 0;
    operacion = "";
}

function evaluar() {
    let res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(num1) + parseFloat(num2);
            break;
        case "-":
            res = parseFloat(num1) - parseFloat(num2);
            break;
        case "*":
            res = parseFloat(num1) * parseFloat(num2);
            break;
        case "/":
            res = parseFloat(num1) / parseFloat(num2);
            break;
    }
    resetear();
    pantalla.value = res;
}