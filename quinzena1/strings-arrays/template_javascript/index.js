//-----------------------EXERCÍCIOS DE ESCRITA DE CÓDIGO-----------------------------------//

//===============================================================================================================//


// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:

//     O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

/*let nomeUsuario = prompt('Qual seu nome?')
let emailUsuario = prompt('Qual o seu email?')

console.log(`O email ${emailUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeUsuario}`)*/


//==============================================================================================================//

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

//     a) Imprima na tela o array completo

//     b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

//     c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista

/*let comidasFavoritas = ["lasanha","Frango","Tapioca","Macarronada","churrasco"]
console.log(comidasFavoritas)
console.log(`Essas são minhas comidas preferidas: \n
${comidasFavoritas[0]}\n${comidasFavoritas[1]}\n${comidasFavoritas[2]}\n${comidasFavoritas[3]}\n${comidasFavoritas[4]}`)

let comidaPreferidaUsuario = prompt('Qual sua comida preferida?')
console.log(`Essas são minhas comidas preferidas: \n
${comidasFavoritas[0]}\n${comidaPreferidaUsuario}\n${comidasFavoritas[2]}\n${comidasFavoritas[3]}\n${comidasFavoritas[4]}`)*/


//================================================================================================================//

// 3. Faça um programa, seguindo os passos:

//     a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

//     b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

//     c) Imprima o array na tela

//     d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

//     e) Remova da lista o item de índice que o usuário escolheu.

//     f) Imprima o array na tela

let listaDeTarefas = []
let tarefa1 = prompt('Qual sua primeira tarefa do dia?')
listaDeTarefas.push(tarefa1)
let tarefa2 = prompt('Qual sua segunda tarefa do dia?')
listaDeTarefas.push(tarefa2)
let tarefa3 = prompt('Qual sua terceira tarefa do dia?')
listaDeTarefas.push(tarefa3)
console.log(`Essas são suas tarefas do dia: \n 
0-${listaDeTarefas[0]} \n 
1-${listaDeTarefas[1]} \n 
2-${listaDeTarefas[2]}`)
let novaLista = prompt('Digite o índíce da tarefa concluída. (0, 1, 2)')
novaLista = listaDeTarefas.splice(novaLista, 1)
console.log(listaDeTarefas)

