/**
 * 
 * @param {Array<String>} deck Array de String
 * @returns String devuelve el valor de una carta del mazo
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0  || !deck )  throw new Error ('El deck es obligatorio');
    
    
    const carta = deck.pop();
    return carta;
}