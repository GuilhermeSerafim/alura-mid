function tocaSom(idElementAudio) { //Está preparado para receber um id dinamicamente
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) { //Percorre o array

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; //Acessando a segunda classe
    console.log(instrumento);

    const idAudio = `#som_${instrumento}`; //Template String
    console.log(idAudio);

    tecla.onclick = function () { //Quando criamos uma função apenas declaramos que ela existe, e nao executa 
        tocaSom(idAudio);
    }
    console.log(contador);
    contador++;
} 