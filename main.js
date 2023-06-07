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


/*
    Lo que hace la siguiente funcion es si el resultado de la suma que hace el usuario es igual al numero generado aleatoriamente por el captcha, entonces el usuario es redirigido
    a la pagina principal. Y si es incorrecto, se genera una alert notificandolo al user y genera otro captcha.

 */
const captcha = () => {
    let sum_resultado = numero1 + numero2;
    let res = parseInt(input_val.value, 10);
    if (res === sum_resultado) {
        alert("¡Correcto!, Ahora puedes registrarte");
        window.location.href = "perfil.html";
    } else {
        alert("¡Incorrecto!, Intentalo de nuevo!!");
        window.location.href = "captcha.html";
    }
}

boton.addEventListener("click", captcha);


/*
Esta funcion lo que hace es leer el numero que el usuario ingreso y dibujarlo a un costado
@method dibujarnumero
* @param {number} numero - en esta variable se guarda el valor dado por num desde el html.
* @return no retorna nada , ya q lo q hace una vez lee el numero es dibujarlo en el html.
*/
const num = document.getElementById('valor');
const boton_dibujar = document.getElementById('boton_dibujar');
const canvas = document.getElementById('_canvas');
const ctx = canvas.getContext('2d');

boton_dibujar.addEventListener('click', () => {
    const numero = parseInt(num.value, 10);
    dibujarnumero(numero);
});

function dibujarnumero(numero) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el lienzo

    // Configuracion
    ctx.fillStyle = 'black';
    ctx.font = '48px Arial';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';

    // Dibujar el número
    ctx.fillText(numero.toString(), canvas.width / 2, canvas.height / 2);
}