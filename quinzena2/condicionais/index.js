//________________________Exercícios de escrita de código____________________________________________//

//____________________________________________________________________________________________________//

/*
1 - Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela
 pode dirigir (apenas maiores de idade).

 a) Faça um prompt para receber a idade do usuário e guarde em uma variável.

 b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.

 c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
 Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."
*/

//____________________________________________________________________________________________________//

let idade = Number(prompt('Qual sua idade?'))


if (idade >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir.")
}

//___________________________________________________________________________________________________//

/*
2 - Agora faça um programa que verifica que turno do dia um aluno estuda. 
Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
*/

const turno = prompt('Qual turno você estuda? Digite M(matutino) V(vespertino) e N(noturno')

if (turno === "M") {
    console.log("Bom dia!")
} else if (turno === "V") {
    console.log("Boa tarde!")
} else if (turno === "N") {
    console.log("Boa noite!")
}

/*
3- Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
*/

const turnoB = prompt('Qual turno você estuda? Digite M(matutino) V(vespertino) e N(noturno)')

switch (turnoB) {
    case "M":
        console.log('Bom dia!')
        break
    case "V":
        console.log('Boa tarde!')
        break
    case "N":
        console.log('Boa noite!')
        break
    default:
        console.log('Digite somente "M, V ou N"')
}

/*
4- Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, 
então verifique se seu amigo ou amiga vai topar assistir o filme. 
Caso positivo, imprima no console a mensagem:
"Bom filme!", caso contrário, imprima "Escolha outro filme :("
*/

let cinema = prompt("Qual gênero de filme iremos assistir?")
let ingresso = Number(prompt("Digite o valor do ingresso:"))

if (cinema === "Fantasia" && ingresso < 15) {

    console.log("Bom filme!")

} else {
    console.log("Escolha outro filme!")

}




