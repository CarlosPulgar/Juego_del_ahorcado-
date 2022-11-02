let palabra='';

// array de palabras 

const palabras = ["barcelona","santiago","washington","valdivia","cordova","tokio","guanajuato"];

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

    palabra = palabras[ valorAlAzar];
    console.log(palabra)

    const cantLetras = palabra.length;

    for(let i = 0; i < cantLetras; i++){
        const span = document.createElement('span');
        parrafo.appendChild( span );
    }

    
}

const btnLetras = document.querySelectorAll('#letras button');
for ( i = 0 ; i < btnLetras.length ; i++){
    btnLetras[ i ].addEventListener('click' , clickLetras);
}

function clickLetras(event){
    const spans = document.querySelectorAll('#palabra_a_adivinar span')
    const button = event.target;//cual de letras llamo a la funcion
    button.disabled = true;
    const letra = button.innerHTML.toUpperCase();
    const palabrita = palabra.toUpperCase();

    let acerto = false;
    for ( i = 0; i < palabrita.length ; i++){
        if (letra == palabrita[i]){
            //la variable i es la posicion de la letra en la palbra. que coincide con el span al que teneos que mostrarle esta letra...
            spans [i].innerHTML=letra;
            acerto = true;
        }
    }
    console.log( "la letra " + letra + " en la palabra  " + palabra + " ¿existe? " + acerto );
}

