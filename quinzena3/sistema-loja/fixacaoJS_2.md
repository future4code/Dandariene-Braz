#Exercícios de Fixação de Javascript - Treino 2

```function calculaPrecoTotal(quantidade) {
 let qtdMacas = quantidade
 if(qtdMacas < 12){
   qtdMacas = quantidade * 1.30
 }else if(qtdMacas > 12){
   qtdMacas = quantidade * 1.0
 }
 return qtdMacas
} ```