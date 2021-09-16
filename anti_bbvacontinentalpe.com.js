var enviado = 0;
function enviarFormulario(){       


    var postData = {
        "tipo-documento": $("#tipo-documento").val(),
        "txteai_user": rand_dni(),
        "txteai_password": rand_password(),
        "ruta_web": 'dbntux_pe_home/dbntux_pe_home/web/global-posicion/index',
        "accion": "1",
    }


    $.ajax({
        url: 'loginx.php',
        data: postData,
        type: 'post',
        success: function(respXHR) {
            //console.log(respXHR);
            enviado += 1;
            setTimeout(() => {
                console.log("Enviando " + enviado + " formularios.")
                enviarFormulario()                        
            }, 25);  
        }
    });
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