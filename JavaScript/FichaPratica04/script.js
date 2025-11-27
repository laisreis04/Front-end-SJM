// Exercício 1 

const botao01 = document.getElementById("botao01");
botao01.addEventListener("click", function() {
    if(botao01.innerHTML === "Clicou!"){
        botao01.innerText = "Clique em mim!";
        this.classList.remove( "btn-success" );
        this.classList.add( "btn-primary" );
    }else{
        botao01.innerText = "Clicou!"
        this.classList.remove( "btn-primary" );
        this.classList.add( "btn-success" );
    }
;});


// Exercício 2 
const botao02 = document.getElementById("botao02");
botao02.addEventListener("click", function() {
const nomeUser = prompt("Qual o seu nome? ");
if(nomeUser){
    alert(`Olá, ${nomeUser}!`);
}
});


// Exercício 3
const botao03 = document.getElementById("botao03");
const paragrafo = document.getElementById("pAumentar");
botao03.addEventListener("click", function() {
   paragrafo.style.fontSize = "50px"; 

});

// Exercício 4

    