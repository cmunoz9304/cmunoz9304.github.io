
// function LanzarAlerta(){

//  	alert("pagina cargando")
// }

function censurar(){

	var comentarioUsuario = document.getElementById("val1").value	
	var palabraReservada = document.getElementById("val2").value	
	var resultado=comentarioUsuario.replace(new RegExp(palabraReservada,"g"),"******");
	document.getElementById("resultado").value=resultado

	var palabra=["primo","hijo","papa","enojo"]


}


function alerta(){
	for(var i=0;i<4;i++){
		alert("prueba 0001");
	}
}

function suma(){
	var v01= document.getElementById("val1").value
	var v02= document.getElementById("val2").value
	var res= Number(v01)+Number(v02)
	document.getElementById("resultado").value=res
}

function resta(){
	var v01= document.getElementById("val1").value
	var v02= document.getElementById("val2").value
	var res= Number(v01)-Number(v02)
	document.getElementById("resultado").value=res
}

function multi(){
	var v01= document.getElementById("val1").value
	var v02= document.getElementById("val2").value
	var res= Number(v01)*Number(v02)
	document.getElementById("resultado").value=res
}

function divi(){
	var v01= document.getElementById("val1").value
	var v02= document.getElementById("val2").value

	if (v01="0"){
		alert("no se puede dividir entre cero")
	}
	else{
		var res= Number(v01)/Number(v02)
		document.getElementById("resultado").value=res	
	}	
}

function reset(){
	document.getElementById("val1").value=""	
	document.getElementById("val2").value=""
	document.getElementById("resultado").value=""	
}


//Función que permite solo Números
function ValidaSoloNumeros() {
 if ((event.keyCode < 48) || (event.keyCode > 57)) 
  event.returnValue = false;
}

