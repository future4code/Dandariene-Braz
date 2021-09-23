//-----------------------------Exercícios sobre objetos--------------------------------------------------//

//1-Resolva os passos a seguir:

/*
a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** 

// Exemplo de entrada
const pessoa = {
   nome: "Amanda", 
   apelidos: ["Amandinha", "Mandinha", "Mandi"]
}

// Exemplo de saída
"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"
*/

const pessoa = {
    nome: 'Dandariene',
    apelidos: ['Danda', 'Dandy', 'Dandara']
}
function receberPessoa(pessoa) {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} 
ou ${pessoa.apelidos[2]}`)
}

receberPessoa(pessoa)

/*b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome,
 mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando
 como argumento o novo objeto*/

const novaPessoa = {
    ...pessoa,
    apelidos: ['Dara', 'Dan', 'Ene'],
}
receberPessoa(novaPessoa)
//-------------------------------------//------------------------------------//
/*
 2 - Resolva os passos a seguir: 
 a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

1. O valor de `nome`
2. O numero de caracteres do valor `nome`
3. O valor de `idade`
4. O valor de `profissão`
5. O numero de caracteres do valor `profissão`
- Exemplo

    const pessoa = {
        nome: "Bruno", 
      idade: 23, 
        profissao: "Instrutor"
    }

    minhaFuncao(pessoa)

    Retorno: ["Bruno", 5, 23, "Instrutor", 9]
*/

const pessoa1 = {

    nome: "Dandariene",
    idade: 20,
    profissao: "Programadora"
}

const pessoa2 = {

    nome: "Maria",
    idade: 50,
    profissao: "Confeiteira"
}

function recebeObjeto(pessoa1) {
    console.log([pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao,
    pessoa1.profissao.length])

}

recebeObjeto(pessoa1)
recebeObjeto(pessoa2)

/*
3 - Resolva os passos a seguir:
a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

b) Crie três novos objetos que representem frutas de um sacolão.
Eles devem ter as seguintes propriedades:
nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

c) Crie uma função que **receba**
um objeto fruta por **parâmetro** e
coloque-a dentro do array de `carrinho`.
Invoque essa função passando os três objetos criados.

d) Imprima a variável carrinho e garanta que ela agora seja um array
preenchido com três objetos
*/

let carrinho = []

let fruta1 = {
    nome: 'banana',
    dispo: true,
}

let fruta2 = {
    nome: 'uva',
    dispo: true,
}

let fruta3 = {
    nome: 'morango',
    dispo: true,
}

function sacolao() {
    carrinho.push(fruta1)
    carrinho.push(fruta2)
    carrinho.push(fruta3)

    console.log(carrinho)
}
sacolao()



