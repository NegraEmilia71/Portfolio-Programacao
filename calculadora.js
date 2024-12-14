function somar() {
    const valor1 = parseFloat(document.getElementById("valor1Som").value);
    const valor2 = parseFloat(document.getElementById("valor2Som").value);
        
    const resultado = valor1 + valor2;
    document.getElementById("resultadoSom").innerHTML = resultado;
}
function subtrair() {
    const valor1 = parseFloat(document.getElementById("valor1Subt").value);
    const valor2 = parseFloat(document.getElementById("valor2Subt").value);
    
    const resultado = valor1 - valor2;
    document.getElementById("resultadoSubt").innerHTML = resultado;
}
function multiplicar() {
    const valor1 = parseFloat(document.getElementById("valor1Multi").value);
    const valor2 = parseFloat(document.getElementById("valor2Multi").value);
    
    const resultado = valor1 * valor2;
    document.getElementById("resultadoMulti").innerHTML = resultado;
}
function dividir() {
    const valor1 = parseFloat(document.getElementById("valor1Divi").value);
    const valor2 = parseFloat(document.getElementById("valor2Divi").value);
    
    if (valor2 !== 0) {
        const resultado = valor1 / valor2;
        document.getElementById("resultadoDivi").innerHTML = resultado;
      } else {
        document.getElementById("resultadoDivi").innerHTML = "Divisão por zero não é permitida.";
      }
}