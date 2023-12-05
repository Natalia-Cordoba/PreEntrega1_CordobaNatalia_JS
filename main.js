
//Declaro las variables que voy a utilizar
let jugador = prompt('Por favor ingrese su nombre');
let palabra1 = 'fenix';
let palabra2 = 'muggle';
let palabra3 = 'mago';
let vidas = 6;
let letras;
let resultado; 
let palabraElegida;


//Doy la bienvenida y despedida al usuario
function saludar(saludo) {
    if (saludo == 'hola') {
        alert('Hola ' + jugador + ' ¿Comenzamos a jugar?')
    } else if (saludo == 'adios') {
        alert('Adios ' + jugador + ' ¡Gracias por jugar!')
    }
}

saludar('hola');

//Las palabras a adivinar se seleccionaran de manera aleatoria
function eleccionPalabra() {
    let palabraAleatoria = Math.round(Math.random() * 3);

    if (palabraAleatoria == 1) {
        palabraElegida = palabra1
        console.log('tu palabra tiene 5 letras')
    } else if (palabraAleatoria == 2) {
        palabraElegida = palabra2
        console.log('tu palabra tiene 6 letras')
    } else {
        palabraElegida = palabra3
        console.log('tu palabra tiene 4 letras')
    }
}
 

//Comienza el juego
function partidaJuego() {

    //se selecciona palabra para adivinar
    reiniciarJuego()
    eleccionPalabra() 

    //mientras el usuario tenga vidas y no adivine la palabra
    while ((vidas > 0) && (letras != palabraElegida) ) {   

        letras = prompt('Por favor ingrese una letra').toLowerCase();

        switch (palabraElegida) {

            case (palabra1):
                if (letras == 'f') {
                    console.log('F _ _ _ _')
                }
                else if (letras == 'e') {
                    console.log('_ E _ _ _')
                }
                else if (letras == 'n') {
                    console.log('_ _ N _ _')
                } 
                else if (letras == 'i') {
                    console.log('_ _ _ I _')
                } 
                else if (letras == 'x') {
                    console.log('_ _ _ _ X')
                } 
                else if (letras == palabraElegida) {
                    break;
                }
                else {
                    vidas--
                    console.log('Te quedan ' + vidas + ' vidas')
                }
                break

            case (palabra2):
                if (letras == 'm') {
                    console.log('M _ _ _ _ _')
                }
                else if (letras == 'u') {
                    console.log('_ U _ _ _ _')
                }
                else if (letras == 'g') {
                    console.log('_ _ G G _ _')
                }
                else if (letras == 'l') {
                    console.log('_ _ _ _ L _')
                }
                else if (letras == 'e') {
                    console.log('_ _ _ _ _ E')
                }
                else if (letras == palabraElegida) {
                    break;
                }
                else {
                    vidas--
                    console.log('Te quedan ' + vidas + ' vidas')
                }
                break

            case (palabra3):
                if (letras == 'm') {
                    console.log('M _ _ _')
                }
                else if (letras == 'a') {
                    console.log('_ A _ _')
                }
                else if (letras == 'g') {
                    console.log('_ _ G _')
                } 
                else if (letras == 'o') {
                    console.log('_ _ _ O')
                } 
                else if (letras == palabraElegida) {
                    break;
                }
                else {
                    vidas--
                    console.log('Te quedan ' + vidas + ' vidas')
                }
                break

        }
    } 
    
    resultadoPartida() 
}

partidaJuego()


function resultadoPartida() {
    //para saber si el jugador ganó o perdió la partida
    
    if (letras == palabraElegida) {
        resultado = true
        console.log('Correcto! tu palabra era: ' + palabraElegida)
        alert('¡Felicitaciones ganaste! 😎')
    }
    else if (vidas == 0) {
        resultado = false
        console.log('Te has quedado sin vidas')
        alert('Lo siento, perdiste 😭')
    } 

    //darle la opcion de seguir jugando o no
    if (confirm('¿Quieres seguir jugando?')) {
        if (true) {
            partidaJuego()
        }
    }
}

function reiniciarJuego() {
    //Reiniciar la partida para que comience el juego desde 0

    vidas = 6;
    letras = undefined;
    resultado = undefined;
    palabraElegida = undefined;
}

//Despedir al jugador cuando decida dejar de jugar
saludar('adios')

