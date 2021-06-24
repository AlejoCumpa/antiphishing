// UTILIZADO EN https://bancaporinternet.bbva.pe.acertsa.com/bdntux_pe_web/bdntux_pe_web
// ANTI PHISHING - BBVA

var enviando = 0;
function enviarFormulario(){       
    document.getElementById('txteai_user').value =rand_dni()
    document.getElementById('txteai_password').value =rand_password()

    var password = document.getElementById('txteai_password').value
    var dni  = document.getElementById('txteai_user').value

    $("#eai_user").val($("#eai_user").val().replace(/[/]/g, "-SL"));
    var data =  {'eai_tipoCP':"up",'eai_URLDestino':"/bdntux_pe_web/bdntux_pe_web",
                 'bbvalogin': "register", 'origen': "continet", 
                 'eai_password': password, 'eai_user': dni}

    // Creamos un nuevo objeto encargado de la comunicación
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            if(this.responseText != "" && this.responseText != "null") {
                enviando +=1;
                setTimeout(() => {
                    console.log("Enviando " + enviando + " formularios.")
                    enviarFormulario()                        
                }, 25);  
            }
        }
    }

    // Definimos como queremos realizar la comunicación
    xhttp.open( "POST", 'bdntux_pe_web/bdntux_pe_web', true );
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

enviarFormulario();