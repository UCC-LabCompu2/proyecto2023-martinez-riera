let input_val = document.getElementById('input_val');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');

const myBtn = document.getElementById('btn');

num1.textContent = Math.floor(Math.random() * 10).toString();
num2.textContent = Math.floor(Math.random() * 10).toString();
let number1 = parseInt(num1.innerText, 10);
let number2 = parseInt(num2.innerText, 10);

myBtn.addEventListener("click", () => {
    let sum_result = number1 + number2;
    let res = parseInt(input_val.value, 10);

    if (res === sum_result) {
        alert("¡Correcto!");
        window.location.href = "index.html";
    } else {
        alert("¡Incorrecto!");
        window.location.href = "perfil.html";
    }

    window.location.reload();
});
