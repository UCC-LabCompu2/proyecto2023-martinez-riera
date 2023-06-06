
var contenedorImagen = document.getElementById('stock');
var imagen = contenedorImagen.getElementsByTagName('img')[0];

contenedorImagen.addEventListener('mouseover', function() {
    imagen.classList.add('hidden');
});

contenedorImagen.addEventListener('mouseout', function() {
    imagen.classList.remove('hidden');
});
contenedorImagen.addEventListener('mouseout', function() {
    imagen.remove('img');
});
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

num1.textContent = Math.floor(Math.random() * 10).toString();
num2.textContent = Math.floor(Math.random() * 10).toString();
let number1 = parseInt(num1.innerText, 10);
let number2 = parseInt(num2.innerText, 10);
myBtn.addEventListener("click", () => {
    let sum_result = parseInt(number1) + parseInt(number2);
    let res = parseInt(input_val.value, 10);

    if (res === sum_result) {
        alert("correcto");
    } else {
        alert("incorrecto");
    }
});


    window.location.reload();