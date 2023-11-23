/**
 * Esta función chequea que la contraseña introducida y el confirmar la contraseña introducida sean iguales. Caso que suceda, el usuario será redireccionado a la página principal (ya se registró), caso contrario se le informará mediante un alert de que las contraseñas no coinciden.
 * @method validarContrasenias
 */
function validarContrasenias(event) {
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password").value;
    if (password !== confirm_password) {
        alert("Las contraseñas no coinciden");
        event.preventDefault();
    }
    else{
        alert("Serás redireccionado a la página principal")
        window.location.href = "index.html";
    }
}
document.getElementById("formulario").addEventListener("submit", validarContrasenias);

