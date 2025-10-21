// let weekDay = prompt('Qual o dia da semana?');

// let semanaCaixaAlta = weekDay.toLowerCase();

// if(semanaCaixaAlta === 'segunda'){
//     alert('Segunda ... Buhhh')
// }
// if(semanaCaixaAlta === 'terça'){
//     alert('terça ... Buhhh')
// }
// if(semanaCaixaAlta === 'quarta'){
//     alert('Quarta ... Buhhh')
// }
// if(semanaCaixaAlta === 'quinta'){
//     alert('Quinta ... Buhhh')
// }
// if(semanaCaixaAlta === 'sexta'){
//     alert('Sextouuuu')
// }


//PLANETAS
// //Array de planetas
// let planetas = ["Mercúrio", "Vénus", "Terra", "Mart", "Jupiter", "Saturno", "Urano", "Neptuno", "Plutão"];

// //Corrigi a gaveta de indice 03
// planetas[3] = "Marte"

// // Retirar plutão
// planetas.pop();

// //adicionar um novo planeta no inicio do Array
// planetas.unshift('Narnia');

// console.log(planetas)

//Inserir Nome

// const airplaneSeats = [
//    ['Ruth', 'Anthony', 'Stevie'],
//    ['Amelia', 'Pedro', 'Maya'],
//    ['Xavier', 'Ananya', 'Luis'],
//    ['Luke', null, 'Deniz'],
//    ['Rin', 'Sakura', 'Francisco']
// ];

// console.log(airplaneSeats)

// airplaneSeats[3][1] = 'Lais'
// console.log(airplaneSeats)


//Criar objeto

// let product = {
// nome: 'banana',
// inStock: true,
// price:1.99,
// colors: ['vermelho', 'azul', 'verde']
// };


// console.log(product.price)
// console.log(product.colors[2])

// product.price = 2.55

// console.log(product.price)
// console.log(product)


//Loop 

//Escrever um ciclo

// for(i = 1; i <= 26; i++){
//     console.log( i + " I know")
// }

// for(i = 25;i >= 5; i= i -5){
//     console.log(i)
// }



//Lista de nomes
// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

// for(const pessoas of people){
//     console.log(pessoas.toUpperCase())
// }

//Lista de compras

//Iniciar com um array vazio
// let listaCompras = [];

// let palavraCodigo = "fim";

// let novoItem = "";

// while(novoItem != palavraCodigo){

//     novoItem = prompt(`Adicione um novo item a sua lista e use a palavra ${palavraCodigo} para terminar a sua lista`)


//     if(novoItem === palavraCodigo){
//         break;
//     }else{
//         listaCompras.push(novoItem)
//         console.log(`${novoItem} adicionado a sua lista`)
//     }
// }

// console.log(listaCompras)

//Imprimir Coração

// function imprimirCoracoes(){
//     alert('<3')
// }

//Imprimir a mensagem 

// function rant(message){
// //Criar um bloco de execução
// for(let i = 1; i <= 3; i++){
    
//     // alert(message.toUpperCase())
//     console.log(message.toUpperCase())
// }

// }

// IsSnakeEyes

// function isSnakeEyes(num1,num2){
//     // Condição se os numeros forem iguais
// if(num1 === num2){
//     console.log('Yay! Snake eyes ')
// }else{
//     console.log('Não são snake eyes')
// }
// }

// isSnakeEyes(58,9);

// isSnakeEyes(1,1)


// function soma(arg1, arg2){
//     // console.log(arg1 +arg2)
//     return arg1 +arg2;
// }

// console.log(soma(5,5) * 5);

//Harry Potter Exercício

const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// const fisrtNames = fullNames.forEach(function (nomes){
//      return console.log(nomes.first)
// })

const lastNames = fullNames.map(function (ultimoNome){
    return console.log(ultimoNome.last.toUpperCase())
})

