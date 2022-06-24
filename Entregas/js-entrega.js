
-------------------------/* ESTO FUE LA PRIMERA ENTREGA ----------------------------------

//   Muestra los números del 0 al 5  ITERACION FOR

for (var i = 0; i < 5; i++) {
    console.log(i);
 }
 




// determina si el nombre es o no nicolas

let nombre = prompt("Ingrese un nombre")

if (nombre=="Nicolas") {
    console.log("El nombre es Nicolas");
}
    else{
        console.log("el nombre no es nicolas");
    }




// suma 1 y muestra al llegar a 10

let contador=0
do{
    ++contador
}
 while (contador==10){
     console.log("llegaste a 10")
 }


----------------------------------------------------------------------------------------------------*/


// SEGUNDO DESAFIO -- FUNCIONES -- Funcion que devuelve el doble del número ingresado

let estatura = prompt ("Ingrese su estatura en este formato EJ: 1.82 ")
let peso = prompt("Ingrese su peso en kg ")


function imc(estatura, peso){
    Return estatura * (peso * peso);
}

imc(estatura,peso);

