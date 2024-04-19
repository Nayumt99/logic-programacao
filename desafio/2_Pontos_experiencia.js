let nivelMonstro = parseInt(gets());

let dificuldadeBatalha = parseInt(gets());



// Calcula a quantidade de XP ganhos usando a fórmula num1 * num2 * 100

let xpGanhos = nivelMonstro * dificuldadeBatalha * 100;



// Imprime a quantidade de XP ganhos após a batalha

console.log("Voce ganhou", xpGanhos, "XP!");
