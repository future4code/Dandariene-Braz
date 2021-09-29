//__________________________________________________________________________________________________________________//
//Exercícios de escrita de código\\

/*
1 - Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, 
um por um, e guarde esses nomes em um array
*/


let pets = []
let qtdBichos = Number(prompt("Quantos bichinhos você tem?"))

if (qtdBichos <= 0) {
    console.log("Que pena! Você pode adotar um pet")

} else {

    for (i = 0; i < qtdBichos; i++) {

        let nomePets = prompt("Digite o nome do seu" + (i + 1) + "º pet")
        pets.push(nomePets)

    }

}

console.log(pets)

//______________________________________________//_______________________________________________________________//
// 2 - Considere que você tenha acesso a um array  (chamado de 'array original')
// que é composto somente de números. Baseando-se nisso, crie uma função para cada um
// dos itens abaixo, realizando as operações pedidas:
//A.Escreva um programa que imprime cada um dos valores do array original.
let arrayOriginal = [35, 87, 30, 50]
let imprimeArray = (array) => {
    for (let imprimeArray of array) {
        console.log(imprimeArray)
    }
}

imprimeArray(arrayOriginal)

//B. Escreva um programa que imprime cada um dos valores do array original divididos por 10
let arrayDivido = (array) => {
    for (let arrayDivido of array)

        console.log(arrayDivido / 10)

}
arrayDivido(arrayOriginal)

//C.  Escreva um programa que crie um novo array contendo, somente, os números pares do array 
//original e imprima esse novo array

let novoArray = (array) => {
    arrayPar = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {

            arrayPar[i] = array[i]

        }
    }

    console.log(arrayPar)
}
novoArray(arrayOriginal)

//D.  Escreva um programa que crie um novo array contendo strings, da seguinte forma:
// "O elemento do índex i é: numero". Depois, imprima este novo array.

let arrayString = (array) => {
    crieArray = []
    for (let i = 0; i < array.length; i++) {

        crieArray[i] = array[i]

        console.log(`"O elemento do índex ${i} é: ${crieArray[i]}"`)
    }

}

arrayString(arrayOriginal)

//E. Escreva um programa que imprima no console o maior e o menor números contidos no array original

let maiorMenor = (array) => {

    let maior = 0
    let menor = Infinity
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
        if (array[i] < menor) {
            menor = array[i]


        }
        
    }
    console.log("O maior elemento é " + maior + " e o menor é " + menor)
}
maiorMenor(arrayOriginal)
