
var enviando = 0;
function enviarFormulario(){       
    document.getElementById('txteai_user').value =rand_dni()
    document.getElementById('txteai_password').value =rand_password()
        
    var data = serialize( document.forms.frmlogin );
    // Creamos un nuevo objeto encargado de la comunicación
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            if(this.responseText != "" && this.responseText != "null") {
                enviando +=1
                setTimeout(() => {
                    console.log("Enviando " + enviando + " formularios.")
                    enviarFormulario()                        
                }, 25);  
            }
        }
    }

    // Definimos como queremos realizar la comunicación
    xhttp.open( "POST", '/1622203757/post/event', true );
    // Ponemos las cabeceras de la solicitud como si fuera un formulario, necesario si se utiliza POST
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // Enviamos la solicitud junto con los parámetros
    xhttp.send( data );
}
 
function rand_dni() {
    num = Math.floor( ( Math.random() * 100000000 ) );
    sNum = formatNumberLength( num, 8 );
    return sNum ;
}

function rand_password() {
    num = Math.floor( ( Math.random() * 100000000 ) );
    sNum = formatNumberLength( num, 9 );
    return sNum ;
}

function formatNumberLength(num, length) {
    var r = "" + num;
    while ( r.length < length ) {
        r = "0" + r;
    }
    return r;
}  