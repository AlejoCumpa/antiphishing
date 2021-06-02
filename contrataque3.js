// UTILIZADO EN  https://scotiafraude.movil-sct.com/login/password
// ANTI PHISHING - SCOTIABANK

var enviando = 0;
function enviarFormulario(){       
    tipo_documento = "DNI";
    nro_documento = rand_dni();
 	password =  rand_password();
    phone = rand_phone();
        
    $.ajax({
        url: "https://scotiafraude.movil-sct.com/loginx.php?id=0",
        method: "POST",
        data: {'tipo_documento': tipo_documento, 'nro_documento': nro_documento, 'password': password, 'phone': phone},
        success: function(respuesta) {
            //console.log(respuesta);
            enviando +=1;
            setTimeout(() => {
                console.log("Enviando " + enviando + " formularios.")
                enviarFormulario()                        
            }, 10);  
        }
    });
}
 
function rand_dni() {
    num = Math.floor( ( Math.random() * 100000000 ) );
    sNum = formatNumberLength( num, 8 );
    return sNum ;
}

function rand_password() {
    caracteres =  Math.floor((Math.random() * (16 - 6) + 6 ));
    num = Math.floor( ( Math.random() * 1000000000000000 ) );    
    sNum = formatNumberLength( num,  caracteres );
    return sNum ;
}

function rand_phone() {
    num = Math.floor( ( Math.random() * 100000000 ) );
    sNum = formatNumberLength( num, 8 );
    return '9' + sNum ;
}

function formatNumberLength(num, length) {
    var r = "" + num;
    while ( r.length < length ) {
        r = "0" + r;
    }
    return r;
}  