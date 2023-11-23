function validarContraseñas(event) {
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password").value;
    if (password !== confirm_password) {
        alert("Las contraseñas no coinciden");
        event.preventDefault();
    }
    else{
        alert("Serás redireccionado a la página principal")
    }
}

document.getElementById("formulario").addEventListener("submit", validarContraseñas);

