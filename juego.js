// array de palabras 

const palabras = ["Baercelona","Santiago","Washington","Valdivia","Cordova","tokio","guanajuato"];

const btn = id(`jugar`);//aqui llamamos al la fuction id que ejecuta el getelementbyid
btn.addEventListener(`click`, iniciar)

function id (string) {
    return document.getElementById(string);
}

function obtenerRandom(numMin, numMax){
    const amplitudValores = numMax-numMin;
    const valorAlAzar = Math.floor( Math.random()* amplitudValores) + numMin;
    return valorAlAzar
}

function iniciar(event){
    btn.disabled = true//para desabilitar el btn cuando lo inicie y le aparexca la palabra secreta

    const parrafo = id ('palabra_a_adivinar');
    parrafo.innerHTML = ''

    const cantPalabras= palabras.length;

    const valorAlAzar = obtenerRandom(0,cantPalabras);

    const palabra = palabras[ valorAlAzar];
    console.log(palabra)

    const cantLetras = palabra.length;

    for(let i = 0; i < cantLetras; i++){
        const span = document.createElement('span');
        parrafo.appendChild( span );
    }

    
}