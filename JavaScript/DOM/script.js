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
const cores = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const elemnetosSpan = document.querySelectorAll('div') // Selecionaeni os elementos apenas com a TAG span

elemnetosSpan.forEach((cadaSpan, index) => {
    cadaSpan.style.backgroundColor = cores[index]
}) 
