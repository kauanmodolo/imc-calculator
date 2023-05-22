const calcular = document.getElementById("calcular");

function imc () {
 const nome = document.getElementById("nome").value;
 const altura = document.getElementById("altura").value;
 const peso = document.getElementById("peso").value;
 const resultado = document.getElementById("resultado");

 if (nome !== "" && altura !== "" && peso !== "") {
 const imc = (peso / (altura * altura)).toFixed(1);
 
 let classification = "";
 if (imc < 16.6) {
    classification = "muito abaixo do peso.";
 }
 else if (imc < 18.4) {
    classification = "abaixo do peso."
 } 
 else if (imc < 24.9) {
    classification = "com peso normal."
 } 
 else if (imc < 29.9) {
    classification = "acima do peso."
 } 
 else if (imc < 34.9) {
    classification = "com obesidade grau 1."
 } 
 else if (imc < 40) {
    classification = "com obesidade grau 2."
 } 
 else {
    classification = "com obesidade grau 3."
 } 

 resultado.textContent = `${nome}, seu IMC é ${imc} e você está ${classification}`;
}

else{
    resultado.textContent = "Preencha todos os campos!";

}
}

calcular.addEventListener ("click", imc);