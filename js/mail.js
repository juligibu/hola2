function enviarMail() {
    var elemento_nombre = document.getElementById("form-name");
    var nombre = elemento_nombre.value;

    var elemento_mail = document.getElementById("form-mail");
    var mail = elemento_mail.value;

    var elemento_mensaje = document.getElementById("form-message");
    var mensaje = elemento_mensaje.value;

    if(nombre === "") {
        alert("¡Error! El campo nombre es obligatorio");
    } else {
        if(mail === "") {
            alert("¡Error! El campo mail es obligatorio");
        } else {
            var mail_confirmado = prompt("Vuelva a ingresar su mail", "");
            if(mail_confirmado === mail) {
                if(mensaje === "") {
                    alert("¡Error! El campo mensaje es obligatorio");
                } else {
                    alert("¡Éxito! ¡Gracias, " + nombre + "!");
    
                    var confirmado = confirm("¿Desea volver a la pagina principal?");
                    if(confirmado) {
                        location.href = "index.html";
                    } else {
                        elemento_nombre.value = "";
                        elemento_mail.value = "";
                        elemento_mensaje.value = ""
                    }
                }
            } else {
                alert("Los mails no coinciden");
            }
        }
    }
}