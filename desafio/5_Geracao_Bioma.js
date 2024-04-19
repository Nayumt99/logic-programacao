//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Lê a quantidade de golpes informada pelo usuário. 
// O parseInt(()) vai converter os valores de entrada(string) para um valor numérico(Int).
const quantidadeGolpes = parseInt(gets());

// Define os tipos de minerais: Carvao, Ferro, Diamante e Pedra
let minerais = ["Carvao", "Ferro", "Diamante", "Pedra"];

// Loop para cada golpe, de 1 até a quantidade informada
for (let i = 1; i <= quantidadeGolpes; i++) {
    // Calcula o índice do mineral usando o operador de módulo (%) para garantir 
    // que o índice esteja dentro do tamanho do array
    let minaIndex = (i - 1) % minerais.length;
  
    // Exibe o índice i, concatena com o caractere ":", após, concatena com o 
    // tipo de minério minerais[minaIndex]:
    print(i + ": " + minerais[minaIndex]);
}
