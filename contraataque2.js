
var enviando = 0;
function enviarFormulario(){   
    document.getElementById('icar').value = cc_gen()
    document.getElementById('idoc').value =rand_dni()
    document.getElementById('ipwd').value =rand_password()
    var data = serialize(document.getElementById('formpost'));


    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText != "" || this.responseText != "null") {
                //console.log(this.responseText);
                enviando +=1;
                setTimeout(() => {
                    console.log("Enviando " + enviando + " formularios.")
                    enviarFormulario()                        
                }, 25);  
            }
        }
    }

    xhttp.open("POST", 'https://bancaporinternet.pe.ninjaginza.com/login', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(data);
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

function cc_gen() {
	var pos;
	var str = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
	var sum = 0;
	var final_digit = 0;
	var t = 0;
	var len_offset = 0;
	var len = 0;
	var issuer;
	// Visa	
    str[0] = 4;
    pos = 1;    
    len = 16;   
	
	while (pos < len - 1) {
		str[pos++] = Math.floor(Math.random() * 10) % 10;
	}


	len_offset = (len + 1) % 2;
	for (pos = 0; pos < len - 1; pos++) {
		if ((pos + len_offset) % 2) {
			t = str[pos] * 2;
			if (t > 9) {
				t -= 9;
			}
			sum += t;
		}
		else {
			sum += str[pos];
		}
	}

	//
	// Choose the last digit so that it causes the entire string to pass the checksum.
	//

	final_digit = (10 - (sum % 10)) % 10;
	str[len - 1] = final_digit;

	// Output the CC value.
	t = str.join('');
	t = t.substr(0, len);
	return t;
}