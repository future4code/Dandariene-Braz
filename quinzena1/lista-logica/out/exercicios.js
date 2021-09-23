// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  let altura = Number(prompt('Insira a altura do retângulo (Ex: 1 ou 1.2'))
  let largura = Number(prompt('Insira a largura do retângulo (Ex: 1 ou 1.2'))
  console.log(altura * largura)
}

// Exercício 2
function imprimeIdade() {
  let anoAtual = Number(prompt('Em que ano estamos?'))
  let anoNasc = Number(prompt('Que ano você nasceu?'))
  console.log(anoAtual - anoNasc)
}

// Exercício 3
function calculaIMC() {
  let peso = Number(prompt('Qual seu peso?'))
  let altura = Number(prompt('Qual sua altura?'))
  console.log(peso / (altura * altura))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  let nome = prompt('Qual seu nome?')
  let idade = Number(prompt('Qual sua idade?'))
  let email = prompt('Qual seu email?')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  let cor1 = prompt('Digite sua cor favorita')
  let cor2 = prompt('Digite uma segunda cor')
  let cor3 = prompt('Digite uma terceira cor')

  primeiraCor = cor1
  segundaCor = cor2
  terceiraCor = cor3

  console.log([primeiraCor, segundaCor, terceiraCor])
}

// Exercício 6
function retornaStringEmMaiuscula() {
  let frase = prompt('Digite uma frase e veja ela toda em maiúsculo')
  fraseConvertida = frase.toUpperCase()
  console.log(fraseConvertida)
}

// Exercício 7
function calculaIngressosEspetaculo() {
  let custoDoEspetaculo = Number(prompt('Quanto custa o espetáculo de teatro?'))
  let precoDoConvite = Number(prompt('Digite o preço do convite.'))

  qtdeDeConvite = custoDoEspetaculo / precoDoConvite

  console.log(qtdeDeConvite)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  let frase1 = prompt('Digite uma frase:')
  let frase2 = prompt('Digite outra frase para comparar tamanho com a primeira:')

  let comparacao = frase1.length === frase2.length

  console.log(comparacao)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  let frase1 = prompt('Digite uma frase:')
  let frase2 = prompt('Digite outra frase para conferir se é igual a primeira:')

  let comparacao = frase1.toUpperCase() === frase2.toUpperCase()

  console.log(comparacao)
 }

// Exercício 10
function checaRenovacaoRG() {
    let anoAtual = Number(prompt('Digite o ano atual: '))
    let anoNasc = Number(prompt('Digite seu ano de nascimento: '))
    let anoIdentidade = Number(prompt("Digite o ano de emissão da sua carteira de identidade: "))

    let idade = anoAtual - anoNasc
    let validadeIdentidade = anoAtual - anoIdentidade

    let faixaEtaria1 = idade <= 20 && validadeIdentidade >= 5
    let faixaEtaria2 = idade >= 20 && idade <= 50 &&  validadeIdentidade >= 10
    let faixaEtaria3 = idade > 50 && validadeIdentidade >= 15

    console.log(faixaEtaria1 || faixaEtaria2 || faixaEtaria3)
    
}
// Exercício 11
function checaAnoBissexto() {
  const checagemAno = prompt("Digite um ano")

  bissexto1 = (checagemAno % 400) == 0
  bissexto2 = ((checagemAno % 4 == 0) && (checagemAno % 100 != 0))
  bissextoNao = checagemAno && bissexto1 && bissexto2

console.log (bissextoNao || bissexto1 || bissexto2)

}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  let idade = (prompt("Você tem mais de 18 anos? (sim / não"))
let escolaridade = prompt("Você possui ensino médio completo?(sim /nao)")
let horarios = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

let respostas = idade === "sim" && escolaridade === "sim" && horarios === "sim"

console.log(respostas)

}