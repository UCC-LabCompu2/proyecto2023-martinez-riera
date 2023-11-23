const boton = document.getElementById('boton');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
num1.textContent = Math.floor(Math.random() * 10).toString();
num2.textContent = Math.floor(Math.random() * 10).toString();
/**
 * Esta función compara a "res" (valor de la suma que introduce el usuario) con "sum_resultado" (suma de los dos números generados aleatoriamente). Si el valor que introduce el usuario es correcto, saldrá una alerta indicando esto y se redireccionará a la página de logeo. En caso de que no, saldrá una alerta indicando y se re-cargará la página con una nueva suma.
 * @method captcha
 */
const captcha = () => {
    let input_val = document.getElementById('valor');
    let numero1 = parseInt(num1.innerText, 10);
    let numero2 = parseInt(num2.innerText, 10);
    let sum_resultado = numero1 + numero2;
    let res = parseInt(input_val.value, 10);
    if (res === sum_resultado) {
        alert("¡Correcto!, ahora puedes registrarte");
        window.location.href = "perfil.html";
    } else {
        alert("¡Incorrecto!, inténtalo de nuevo");
        window.location.href = "captcha.html";
    }
}
boton.addEventListener("click", captcha);

const num = document.getElementById('valor');
const boton_dibujar = document.getElementById('boton_dibujar');
const canvas = document.getElementById('_canvas');
const ctx = canvas.getContext('2d');
let color = 0;

/**
 * Esta función llama a la función dibujar para que dibuje el número ingresado por el usuario, para posteriormente llamar a la función cambiarColor y cada 0.5 segundos cambiar el color.
 * @method dibujarYcambiarColor
 */
const dibujarYcambiarColor = ()=>{
    const numero = parseInt(num.value, 10);
    dibujarNumero(numero);
    setInterval(cambiarColor, 500); // Cambiar color cada 0.5 segundos
}
boton_dibujar.addEventListener('click', dibujarYcambiarColor)

/**
 * Primero borra cualquier contenido previamente dibujado en el canvas, para posteriormente dibujar el numero que introduce el usuario.
 * @method dibujarNumero
 * @param {number} numero - almacena el valor que introduce el usuario al completar la suma
 */
function dibujarNumero(numero) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Configuración
    ctx.fillStyle = 'black';
    ctx.font = '48px Arial';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    // Dibujar el número
    ctx.fillText(numero.toString(), canvas.width / 2, canvas.height / 2);
}
/**
 * Cambia el color dinámicamente incrementado el valor de "color" y se calcula el residuo entre 360 para darle un valor de color en HSL.
 * @method cambiarColor
 */
function cambiarColor() {
    color += 20; // Incrementar el valor del color
    ctx.fillStyle = `hsl(${color % 360}, 100%, 50%)`; // Cambiar color utilizando HSL
    ctx.fillText(num.value, canvas.width / 2, canvas.height / 2);
}

