"use strict";

function toggleMenu() {
    document.querySelector(".navegacion").classList.toggle("show");
}


let num1 = Math.floor((Math.random() * 100000) + 1);

function generaNum() {
    document.querySelector("#numeroRandom").innerHTML = num1;
}

let btnValidar = document.getElementById("validar");
btnValidar.addEventListener("click", validar)

function validar(e) {
    e.preventDefault();
    let nodoInput = document.getElementById("respuesta");
    let respuesta = nodoInput.value;


    if (respuesta == "") {
        document.querySelector("#validoInvalido").innerHTML = "Esperando número del Captcha...";
    }
    else if (respuesta == num1) {
        document.querySelector("#validoInvalido").innerHTML = "🟢 El captcha es valido! Compra Realizada. ✔";
    }
    else if (respuesta != num1) {
        document.querySelector("#validoInvalido").innerHTML = "🔴 El captcha NO es valido. ❌ Compra no realizada. ";
    }

}
generaNum()

"use strict";


let ropa = [];
function agregar() {
    let ropas = document.getElementById("recom").value;
    ropa.push(ropas);
    mostrar();
  }
function agregar3() {
  let ropas = document.getElementById("recom").value;
  ropa.push(ropas);
  ropa.push(ropas);
  ropa.push(ropas);
  mostrar();
}

function reset() {
  ropa = [];
  mostrar();
}

function borrarUltimo() {
  ropa.pop();
  mostrar();
}

function mostrar() {
  let lista = document.querySelector("#listado");
  lista.innerHTML = "";
  for(let n of ropa){
    lista.innerHTML = lista.innerHTML + 
      "<li>" + n  + "</li>";
  }
}

function enviar() {
    ropa = [];
    mostrar();
    document.querySelector("#btn-enviar").innerHTML = "Datos enviados"
  }

document.querySelector("#btn-agregar").addEventListener("click", agregar);
document.querySelector("#btn-agregar3").addEventListener("click", agregar3);
document.querySelector("#btn-reset").addEventListener("click", reset);
document.querySelector("#borrar-ultimo").addEventListener("click", borrarUltimo);
document.querySelector("#btn-enviar").addEventListener("click", enviar);