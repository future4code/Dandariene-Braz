//================================Exercício de escrita de código===================================//

/*
1. Faça um programa que:

    a) Pergunte a idade do usuário

    b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

    c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

    d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
*/

let idade = Number(prompt('Qual a sua idade? '))
let idadeAmig = Number(prompt('Qual idade do(a) seu(a) melhor amigo(a)? '))
let idadeUsuario = idade
let idadeAmigoOuAmiga = idadeAmig
console.log('Sua idade é maior do que a do seu melhor amigo?', idadeUsuario > idadeAmigoOuAmiga)
console.log('A diferença de idade entre vocês é: ', idadeUsuario - idadeAmigoOuAmiga)

//--------------------------------------------------------------------------------------------------------//  

/*
2. Faça um programa que:

    a) Peça ao usuário que insira um número **par**

    b) Imprima na console **o resto da divisão** desse número por 2.

    c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

    d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
*/

let numPar = Number(prompt('Digite um número par: '))

let resultado = numPar


console.log('O resto da divisão de', resultado , 'por 2, é: ', resultado % 2)

//resposta c: O padrão é que a resposta é sempre "0"
//resposta d: Se insere um número impar o resultado é sempre "1"

//-------------------------------------------------------------------------------------------------------//

/*
3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 

    a) A idade do usuário em meses

    b) A idade do usuário em dias

    c) A idade do usuário em horas
*/  

let idadeDoUsuario = Number(prompt('Qual a sua idade em anos? '))
let idadeMeses = idadeDoUsuario * 12
console.log('Sua idade em meses é: ', idadeMeses)
let idadeDias = idadeMeses * 365.25
console.log('Sua idade em dias é: ', idadeDias)
let idadeHoras = idadeDias * 24
console.log('Sua idade em horas é: ', idadeHoras)
//------------------------------------------------------------------------------------------------------//

/*
4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens:

    O primeiro numero é maior que segundo? true ou false
    O primeiro numero é igual ao segundo? true ou false
    O primeiro numero é divisível pelo segundo? true ou false
    O segundo numero é divisível pelo primeiro? true ou false

    obs: O resultado true ou false vai depender dos números inseridos e do resultado das operações.
*/

let num1 = Number(prompt('Digite o primeiro número: '))
let num2 = Number(prompt('Digite o segundo número: '))

console.log('O primeiro numero é maior que segundo? ', num1 > num2)
console.log('O primeiro numero é igual ao segundo? ' , num1 === num2)
console.log('O primeiro numero é divisível pelo segundo? ', num1 / num2 === 0 )
console.log('O segundo numero é divisível pelo primeiro? ', num2 / num1 === 0)