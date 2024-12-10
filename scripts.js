function gerarNumeros() {
    const quantidade = document.getElementById("quantidade").value;
    const numeros = [];
    
    // Gerar números aleatórios de 1 a 60
    while (numeros.length < quantidade) {
        let num = Math.floor(Math.random() * 60) + 1;
        
        // Verifica se o número já foi gerado
        if (!numeros.includes(num)) {
            numeros.push(num);
        }
    }
    
    // Exibe os números gerados no formato desejado
    document.getElementById("resultado").innerText = "Números sorteados: " + numeros.sort((a, b) => a - b).join(', ');
}
