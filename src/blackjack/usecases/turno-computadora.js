import { pedirCarta , valorCarta} from "./";
import { crearCarta } from "./crear-carta-html.js";
/**
 * 
 * @param {Number} puntosMinimos que la computadora necesita para ganar 
 * @param {HTMLElement} puntosHTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora para mostrar las cartas
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML,divCartasComputadora,deck = [] ) => {
    if(!puntosMinimos) throw new Error('Los puntos minimos son necesarios ')
    
    if(!puntosHTML) throw new Error('Los puntos son obligatorios')
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCarta(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 1000 );
}