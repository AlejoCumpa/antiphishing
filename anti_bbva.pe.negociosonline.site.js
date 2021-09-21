// UTILIZADO EN https://bancaporinternet.bbva.pe.negociosonline.site/bdntux_pe_web/bdntux_pe_web
// ANTI PHISHING - BBVA

var enviado = 0;

function rand_dni() {
    num = Math.floor((Math.random() * 100000000));
    sNum = formatNumberLength(num, 8);
    return sNum;
}

function rand_password() {
    num = Math.floor((Math.random() * 100000000));
    sNum = formatNumberLength(num, ((Math.random() * 8) + 6));
    return sNum;
}

function formatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}


function enviarFormulario() {

    dni = rand_dni()
    pass = rand_password()
    var postData = {
        "origen": "continet",
        "eai_tipoCP": "up",
        "eai_URLDestino": "%2Fbdntux_pe_web%2Fbdntux_pe_web",
        "eai_password": pass,
        "eai_user": dni,
        "bbvalogin": "register"
    }


    $.ajax({
        url: 'bdntux_pe_web',
        data: postData,
        type: 'post',
        success: function(resp) {
            //console.log(resp)
            enviado += 1;
            console.log("Enviando " + enviado + " formularios");
            enviarFormulario();
        }
    })

}

enviarFormulario()