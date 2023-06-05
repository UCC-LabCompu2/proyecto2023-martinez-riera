function convertirDolaresAPesos(dolares) {
    // Tasa de cambio: 1 dólar = 100 pesos
    var tasaCambio = 100;

    var pesos = dolares * tasaCambio;

    return pesos;
}
let input_val = document.getElementById('input_val');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');

const myBtn = document.getElementById('btn');

//
num1.innerText = Math.floor(Math.random() * 10);
num2.innerText = Math.floor(Math.random() * 10);
let number1 = num1.innerText;
let number2 = num2.innerText;

myBtn.addEvenListener ("click",()=> {
    let sum_result = parseInt(number1) + parseInt(number2);
    let res = parseInt(input_val.value)

    if (res == sum_result) {
        alert("correcto");
    } else {
        alert("incorrecto");
    }

    window.location.reload();
})