function tocaSom(idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
//enquanto
while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocaSom; //Associamos a function onclick a todos os elementos da lista
    console.log(contador);
    contador++;
}