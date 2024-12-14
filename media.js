function calcularMedia() {
        const nota1 = parseFloat(document.getElementById("nota1").value);
        const nota2 = parseFloat(document.getElementById("nota2").value);
        const nota3 = parseFloat(document.getElementById("nota3").value);
        const nota4 = parseFloat(document.getElementById("nota4").value);
        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) 
            || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 
            || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 > 10) 
        {
        document.getElementById("resultadoMed").innerHTML = "Por favor, insira apenas números entre 0 e 10 para as notas.";
        return;
        }
        const media = (nota1 + nota2 + nota3 + nota4) / 4;
        let mensagem = "";
        if (isNaN(media)) {
            mensagem = "Houve um erro no cálculo da média. Verifique os valores inseridos.";
        } else if (media === 0) {
            mensagem = "Infelizmente você zerou a prova :(";
        } else if (media > 0 && media <= 3) {
            mensagem = `Sua média foi de ${media.toFixed(2)}. Estude mais para a próxima!`;
        } else if (media > 3 && media <= 5.9) {
            mensagem = `Sua média foi de ${media.toFixed(2)}. Que tal dar uma revisada no conteúdo?`;
        } else if (media >= 6 && media <= 7) {
            mensagem = `Parabéns! Sua média foi de ${media.toFixed(2)}. Você está no caminho certo!`;
        } else if (media > 7 && media <= 9.9) {
            mensagem = `Excelente! Sua média foi de ${media.toFixed(2)}. Continue assim!`;
        } else if (media === 10) {
            mensagem = "Parabéns! Você tirou 10! Nota máxima!";
        } 
        document.getElementById("resultadoMed").innerHTML = mensagem;
}