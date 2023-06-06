
/*
Esta funcion basicamente genera dos numeros aleatorios q luego seran sumados para posteriormente pedirle
al usuario que ingrese el valor de esa suma y asi verificar q no es un bot.
@method captcha
* @param {number} num1 - numero aleatorio genera q se pedira sumar
* @param {number} num2 - numero aleatorio genera q se pedira sumar
* @param {number} sum_resultado - es el resultado de la suma de num1 y num2
* @param {number} numero1 - almacena los valores enteros de num1
* @param {number} numero2 - almacena los valores enteros de num2
* @return {number} -el numero q se retorna en la funcion para verificar si es correcto o no es la suma de los numeros, (sum_resultado)
*/
let input_val = document.getElementById('valor');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');

const boton = document.getElementById('boton');

num1.textContent = Math.floor(Math.random() * 10).toString();
num2.textContent = Math.floor(Math.random() * 10).toString();
let numero1 = parseInt(num1.innerText, 10);
let numero2 = parseInt(num2.innerText, 10);

const captcha = () => { //En esta funcion flecha, lo que hacemos es que a sum_resultado
    let sum_resultado = numero1 + numero2;
    let res = parseInt(input_val.value, 10);
    if (res === sum_resultado) {
        alert("¡Correcto!");
        window.location.href = "perfil.html";
    } else {
        alert("¡Incorrecto!");
        window.location.href = "captcha.html";
    }
}

boton.addEventListener("click", captcha);

const num = document.getElementById('valor');
const boton_dibujar = document.getElementById('boton_dibujar');
const canvas = document.getElementById('_canvas');
const ctx = canvas.getContext('2d');

boton_dibujar.addEventListener('click', () => {
    const number = parseInt(num.value, 10);
    drawNumber(number);
});

function drawNumber(number) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el lienzo

    // Configurar propiedades de dibujo
    ctx.fillStyle = 'black';
    ctx.font = '48px Arial';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';

    // Dibujar el número en el centro del lienzo
    ctx.fillText(number.toString(), canvas.width / 2, canvas.height / 2);
}