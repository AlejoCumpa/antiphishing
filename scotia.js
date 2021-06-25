var enviando = 0;
function enviarFormulario(){       
    
    //PASO 1        
    data1 = {'mat-input-0':rand_dni(),
            'cbodoc':'1',
            'proceso':'dfsdccsdfsdf'}
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText != "" || this.responseText != "null") {
                //console.log(this.responseText);

                //PASO 2
                data2 = {'mat-input-1':rand_password(), 'proceso':'cG9zdGNyZWRpdG8'}
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        if (this.responseText != "" || this.responseText != "null") {
                            enviando +=1;
                            setTimeout(() => {
                                console.log("Enviando " + enviando + " formularios.")
                                enviarFormulario();                   
                            }, 25); 
                        }
                    }
                }

                // Definimos como queremos realizar la comunicación
                xhttp.open("POST", '/' + kiookxoka + '/' + '../1624650040/login/index.html', true);
                // ENCRIPTAMOS LAS VARIABLES A ENVIAR
                xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                // Enviamos la solicitud junto con los parámetros
                xhttp.send(data2);     
            }
        }
    }

        // Definimos como queremos realizar la comunicación
    xhttp.open("POST", '/' + kiookxoka + '/' + 'post/event', true);
    // ENCRIPTAMOS LAS VARIABLES A ENVIAR
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // Enviamos la solicitud junto con los parámetros
    xhttp.send(data1);
   
      
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

enviarFormulario()