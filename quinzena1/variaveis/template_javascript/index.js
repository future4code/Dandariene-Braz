/*
1- Construa um programa, seguindo os seguintes passos:

a) Declare uma variável para armazenar um nome, sem atribuir um valor.

b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.

d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código. */ 

const Nome = 'Dandariene'
let idade = 33

console.log(typeof Nome)
console.log(typeof idade)
//Em primeiro instante, com a variável ainda vazia me rretornou uma
//mensagem de erro no terminal: "Missing initializer in const declaration"

//Ao passar os valores para as variáveis me retornou os tipos das variáveis ,
//sendo elas: string e number, respectivamente.

//----------------------------------------------------------------------------------------------------------//

/*e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.




f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu

*/

const nomeUsuario = prompt('Qual seu nome?')
let idadeUsuario = prompt('Quantos anos você tem?')
console.log('Olá', nomeUsuario, ' ,você tem ', idadeUsuario, ' anos')

//-------------------------------------------------------------------------------------------------------//

/* 2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado cada uma em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

    a) Crie três novas variáveis, contendo as respostas

    b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas.
 */
const calor = true
const frio = false
const chuvoso = false

console.log('Hoje está calor! =', calor)
console.log('Hoje está frio! =', frio)
console.log('Hoje o dia está chuvoso! =', chuvoso)

//-----------------------------------------------------------------------------------------------------------//

let a = 10
let b = 25

console.log("O valor de a é", a) 
console.log("O valor de b é", b)

 let c
 c = a
 a = b
 b = c

console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b)


