function validacionCorrecta(){
	let mensajeError1 = '[ERROR] - Número mayor que 99999999';
	let mensajeError2 = '[ERROR] - Número menor que 0';
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	let soloNumDni = 48346925;
	
	if(soloNumDni > 99999999){
		alert(mensajeError1);
	}else if(soloNumDni<0){
		alert(mensajeError2);
	}else{
		let posicionLetraDni = soloNumDni%23;
		let letraDni = letras[posicionLetraDni];
		console.log(soloNumDni);
		console.log(letraDni);
		document.write(soloNumDni+"-"+letraDni);
	}
}

function validacionIncorrectaMayor(){
	let mensajeError1 = '[ERROR] - Número mayor que 99999999';
	let mensajeError2 = '[ERROR] - Número menor que 0';
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	let soloNumDni = 99999999999;
	
	if(soloNumDni > 99999999){
		alert(mensajeError1);
	}else if(soloNumDni < 0){
		alert(mensajeError2);
	}else{
		let posicionLetraDni = soloNumDni%23;
		let letraDni = letras[posicionLetraDni];
		console.log(soloNumDni);
		console.log(letraDni);
		document.write(soloNumDni+"-"+letraDni);
	}	
}

function validacionIncorrectaMenor(){
	let mensajeError1 = '[ERROR] - Número mayor que 99999999';
	let mensajeError2 = '[ERROR] - Número menor que 0';
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	let soloNumDni = -5;
	
	if(soloNumDni > 99999999){
		alert(mensajeError1);
	}else if(soloNumDni < 0){
		alert(mensajeError2);
	}else{
		let posicionLetraDni = soloNumDni%23;
		let letraDni = letras[posicionLetraDni];
		console.log(soloNumDni);
		console.log(letraDni);
		document.write(soloNumDni+"-"+letraDni);
	}	
}
