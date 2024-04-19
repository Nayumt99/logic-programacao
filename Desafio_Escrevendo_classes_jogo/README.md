# Classe Heroi

Esta é uma classe JavaScript que representa um herói de uma aventura, com a capacidade de atacar de acordo com seu tipo.

## Utilização

Para utilizar a classe `Heroi`, siga estas etapas:

1. **Instancie um herói:**

```javascript
const heroi = new Heroi(nome, idade, tipo);
````

Substitua nome, idade e tipo pelos valores desejados para o herói.

2. Chame o método atacar():
````
heroi.atacar();
````

Este método exibirá uma mensagem de ataque de acordo com o tipo do herói.

## Exemplo
````
const heroi = new Heroi('Aragorn', 30, 'guerreiro');
heroi.atacar(); // Saída: O guerreiro atacou usando espada
````

Neste exemplo, um herói de nome "Aragorn", com 30 anos de idade e do tipo "guerreiro", é criado e então realiza um ataque usando uma espada.

## Propriedades da Classe

A classe Heroi possui as seguintes propriedades:

nome: O nome do herói.
idade: A idade do herói.
tipo: O tipo do herói (ex: guerreiro, mago, monge, ninja).
Método atacar()
O método atacar() exibe uma mensagem de ataque de acordo com o tipo do herói:

Se for um mago, exibirá "usou magia".
Se for um guerreiro, exibirá "usou espada".
Se for um monge, exibirá "usou artes marciais".
Se for um ninja, exibirá "usou shuriken".

## Contribuindo

Sinta-se à vontade para contribuir com melhorias, sugestões ou correções neste projeto. Basta abrir uma issue ou enviar um pull request.
