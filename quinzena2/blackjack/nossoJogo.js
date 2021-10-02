/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log('Bem vindo(a) ao jogo de Blackjack')

if (confirm('Quer iniciar uma rodada?')) {
   const cartaUsuario = comprarCarta()
   const cartaUsuario2 = comprarCarta()
   const pontosUsuario = cartaUsuario.valor + cartaUsuario2.valor
   console.log(`Usuário - cartas: ${cartaUsuario.texto} ${cartaUsuario2.texto} - ${pontosUsuario}`)


   const cartaComputador = comprarCarta()
   const cartaComputador2 = comprarCarta()
   const pontosComputador = cartaComputador.valor + cartaComputador2.valor

   console.log(`Computador - cartas: ${cartaComputador.texto} ${cartaComputador2.texto} - ${pontosComputador}`)


   const usuarioGanhou = pontosComputador < pontosUsuario
   const computadorGanhou = pontosComputador > pontosUsuario
   const empate = pontosComputador === pontosUsuario
   if (empate === true) {
      console.log('Empate!')
   } else if (usuarioGanhou === true) {
      console.log('O usuário ganhou!')
   } else if (computadorGanhou === true) {
      console.log('O computador ganhou!')
   }
} else {
   console.log('O jogo acabou')
}