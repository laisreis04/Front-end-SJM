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

// ehPrimo(7)

//Ex_03
function converterParaFahrenheit(tempCelsius){
//Para mostrar na consola
console.log((tempCelsius* 1.8) + 32)

}

converterParaFahrenheit(100)