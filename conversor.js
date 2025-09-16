function conversorMoedaDolarParaReal(valorEmDolar) {
    const taxaDeCambio = 5.25;
    const valorEmReal = valorEmDolar * taxaDeCambio;
    console.log(`O valor em reais (BRL) é: R$ ${valorEmReal.toFixed(2)}`);
}

function conversorMoedaReaisParaDolar(valorEmReal) {
    const taxaDeCambio = 5.25;
    const valorEmDolar = valorEmReal / taxaDeCambio;
    console.log(`O valor em dólares (USD) é: $ ${valorEmDolar.toFixed(2)}`);
}

// Importa o módulo 'readline' do Node.js
const readline = require('readline');

// Cria uma interface de leitura usando stdin (entrada do terminal) e stdout (saída do terminal)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para exibir o menu e capturar a opção do usuário
function exibirMenu() {
    console.log("\nEscolha uma das opções:");
    console.log("1 - Converter de Dólar (USD) para Real (BRL)");
    console.log("2 - Converter de Real (BRL) para Dólar (USD)");
    console.log("3 - Sair");
    rl.question("Digite o número da opção desejada: ", (opcao) => {
        switch (opcao) {
            case '1':
                rl.question('Digite o valor em dólares (USD): ', (valor) => {
                    const valorEmDolar = parseFloat(valor);
                    conversorMoedaDolarParaReal(valorEmDolar);
                    exibirMenu();  // Exibe o menu novamente após a operação
                });
                break;

            case '2':
                rl.question('Digite o valor em reais (BRL): ', (valor) => {
                    const valorEmReal = parseFloat(valor);
                    conversorMoedaReaisParaDolar(valorEmReal);
                    exibirMenu();  // Exibe o menu novamente após a operação
                });
                break;

            case '3':
                console.log("Obrigado por usar o conversor!");
                rl.close();  // Fecha a interface de leitura
                break;

            default:
                console.log("Opção inválida. Tente novamente.");
                exibirMenu();  // Exibe o menu novamente se a opção for inválida
                break;
        }
    });
}

// Chama a função para exibir o menu inicial
exibirMenu();
