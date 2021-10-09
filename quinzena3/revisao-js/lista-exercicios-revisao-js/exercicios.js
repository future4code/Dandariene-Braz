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
  return [novoArray[novoArray.length - 2], novoArray[1]]
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
  let filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci'],
  }
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  largura = lado1
  altura = lado2
  perimetro = 2 * (lado1 + lado2)
  area = lado1 * lado2
  const objeto = {
    largura: largura,
    altura: altura,
    perimetro: perimetro,
    area: area
  }
  return (objeto)
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const pessoaAnonima = {
    ...pessoa,
    nome: "ANÔNIMO"
  }
  return (pessoaAnonima)
}

//EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const maior18 = arrayDePessoas.filter((item) => {
    return item.idade >= 18
  })
  return maior18

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const menor18 = arrayDePessoas.filter((item) => {
    return item.idade < 18
  })
  return menor18

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const multPor2 = array.map((item) => {
    return item * 2
  })
  return multPor2
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const multPor2Str = array.map((item) => {
    item = item * 2
    return item.toString()
  })
  return multPor2Str
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  const imparPar = array.map((item) => {
    if (item % 2 === 0) {
      return `${item} é par`
    } else {
      return `${item} é ímpar`
    }
  })
  return imparPar
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  let autorizadas = []
  for (let pessoa of pessoas) {
    if (pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
      autorizadas.push(pessoa)
    }
  }
  return autorizadas
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  let autorizadas = []
  for (let pessoa of pessoas) {
    if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60) {
      autorizadas.push(pessoa)
    }
  }
  return autorizadas
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  const ordenaNomes = consultasNome.sort((a, b) => {
    return a.nome.localeCompare(b.nome)
  })
  return ordenaNomes
}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}




