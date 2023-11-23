function tocaSom(idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
//enquanto
while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = function () { //Quando criamos uma função apenas declaramos que ela existe, e nao executa 
        tocaSom('#som_tecla_pom')
    }
    console.log(contador);
    contador++;
}