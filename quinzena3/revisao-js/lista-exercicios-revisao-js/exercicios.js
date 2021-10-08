// EXERCÍCIO 01
function inverteArray(array) {
  const arrayInvertido = array.map((item, indice, array) => array[array.length - indice - 1])

  return arrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const numerosPares = array.filter(item => item % 2 === 0).map(item => item * item)
  return numerosPares

}

// EXERCÍCIO 03
function retornaNumerosPares(array) {

  const numerosPares = array.filter(item => item % 2 === 0)
  return numerosPares

}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  const maior = Math.max(...array)
  return maior

}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  const qtdElementos = array.length
  return qtdElementos

}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3
  const expressoesBoleanas = [booleano1 && booleano2 && !booleano4,
  (booleano1 && booleano2) || !booleano3,
  (booleano2 || booleano3) && (booleano4 || booleano1),
  !(booleano2 && booleano3) || !(booleano1 && booleano3),
  !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)]

  return expressoesBoleanas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let numerosPares = []
  for (let i = 0; i < n; i++) {
    numerosPares.push(i * 2)
  }

  return numerosPares

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a === b && b === c) {
    return 'Equilátero'

  } else if (a === b || b === c) {
    return 'Isósceles'

  } else {
    return 'Escaleno'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  const comparador = {
    maiorNumero: 0,
    maiorDivisivelPorMenor: 0,
    diferenca: 0
  }

  const verificaSeDivide = (num1, num2) => {
    return num1 % num2 === 0
  }

  if (num1 < num2) {
    comparador.maiorNumero = num2
    comparador.maiorDivisivelPorMenor = verificaSeDivide(num2, num1)
    comparador.diferenca = num2 - num1

    return comparador

  } else {
    comparador.maiorNumero = num1
    comparador.maiorDivisivelPorMenor = verificaSeDivide(num1, num2)
    comparador.diferenca = num1 - num2


    return comparador
  }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {
  novoArray = []
  for (item of array) {
    let contador = 0
    for (itemcomparado of array) {
      if (item > itemcomparado) {
        contador = contador + 1
      }
    }
    novoArray[contador] = item
  }
  return novoArray
}

// EXERCÍCIO 12
function filmeFavorito() {
  const filmeFavoritoAstrodev = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci'],
  }
  return (filmeFavoritoAstrodev)

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}




