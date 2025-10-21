//Ex_01

// function boasVindas(nome){
//     // nome = prompt('Digite o seu nome:') // Mostar no navegador
//     // alert(`Olá ${nome}`)
//     console.log(`Olá ${nome}`) //Apenas para impimir na consola
// }

// boasVindas('Afonso') // Para mostar na consola

//Ex_02

//criar função que recebe 1 parametro
// function ehPrimo(numParaVerificar){
//     for(let i = 2; i < numParaVerificar; i++){
//         //Condição
//         if(numParaVerificar % i === 0){
//             console.log('Não é primo')
//             return false;
            
//         }else{
//             console.log('É Primo')
//             return true;
//         }

//     }

// }

// ehPrimo(9)

//Ex_03
// function converterParaFahrenheit(tempCelsius){
// //Para mostrar na consola
// console.log((tempCelsius* 1.8) + 32)

// }

// converterParaFahrenheit(30)

//Ex_04

function gerarSenha(tamanhoSenha){

let senha = "";
let listaCaracteres = "ABDCEabced1234$@";

//Ciclo para iterar o mesmo numero do tamanho da senha
for(let i = 0; i < tamanhoSenha; i++){
senha += listaCaracteres[Math.floor(Math.random()*listaCaracteres.length)]
}

console.log(senha)
}

gerarSenha(10)