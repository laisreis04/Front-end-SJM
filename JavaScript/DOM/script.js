//idExercise

// const titulo = document.getElementById('titulo');
// const imagem = document.getElementById('imagem_doc')

// console.log(titulo)
// console.log(imagem)

// -----------------------------------------------

//TODOS
// let doneTodos = document.querySelectorAll('.done');

// let checkbox = document.querySelectorAll('[type = "checkbox"]');

// console.log(doneTodos)
// console.log(checkbox)

// -----------------------------------------------
// PICKLES

// let mudarNome = document.querySelector('h1')
// mudarNome.innerText = "Yack"

// -----------------------------------------------
//OVO
// function mudarImagem() {
//   const imagemGalinhaOvo = document.getElementById("imagem_galinha");

//   imagemGalinhaOvo.getAttribute("src");

//   if (
//     imagemGalinhaOvo.src ===
//     "https://media.istockphoto.com/id/1313823703/pt/foto/one-brown-chicken-egg-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=xwuuodcja84SvjrasjFDoor5Wo_3qT6OZ5VmtDs2RbQ="
//   ) {
//     imagemGalinhaOvo.setAttribute(
//       "src",
//       "https://devsprouthosting.com/images/chicken.jpg"
//     );
//   } else {
//     imagemGalinhaOvo.setAttribute(
//       "src",
//       "https://media.istockphoto.com/id/1313823703/pt/foto/one-brown-chicken-egg-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=xwuuodcja84SvjrasjFDoor5Wo_3qT6OZ5VmtDs2RbQ="
//     );
//   }
// }


// -----------------------------------------------
//Magic Forest

// //elemento 1
// const box = document.getElementById('container')
// box.style.textAlign = 'center'
// //elemento 2
// const imagem = document.getElementById('floresta')
// imagem.style.width = '150px';
// imagem.style.borderRadius = '50%'

// -----------------------------------------------
//Rainbow
// const cores = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

// const elemnetosSpan = document.querySelectorAll('div') // Selecionaeni os elementos apenas com a TAG span

// elemnetosSpan.forEach((cadaSpan, index) => {
//     cadaSpan.style.backgroundColor = cores[index]
// }) 

// //Buttons

// //Localização do elemento 
// const container = document.querySelector('.button-container'); 

// //Função para criar botões
// function criarBotao(texto){

// const botao = document.createElement('button');
// botao.textContent = texto;
// botao.classList.add('btn', 'btn-danger' ,'m-1', 'p-2');

// return botao;
// }

// //Criando os 100 botões
// for(let contador = 1; contador <= 100;contador++){
// const meuBotao = criarBotao(`Hello ${contador}`)
// container.appendChild(meuBotao)
// }

//Colors

// const botao = document.getElementById('btnColor') //Botão 

// function mudarCor(){

//     let r = Math.floor(Math.random() * 256); //Gerar um tom vermelho
//     let g = Math.floor(Math.random() * 256); //Gerar um tom de verde
//     let b = Math.floor(Math.random() * 256); //gerar um tom de azul 

//     let novaCor = `rgb(${r},${g},${b})`

//     //Adicionar novo elemento H1

//     const novoElemento = document.createElement('h1')
//     novoElemento.textContent = novaCor

//     //Adicionar o elemento ao HTML
// document.body.appendChild(novoElemento)

// //colocar a cor de fundo
// const backG = document.querySelector('body')
// backG.style.backgroundColor = novaCor


// }

// botao.addEventListener('click', mudarCor)

