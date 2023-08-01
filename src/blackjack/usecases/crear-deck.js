import _ from 'underscore';
/**
 * 
 * @param {Array<String>} tiposDeCarta  Ejemplo: ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K'];
 * @returns {Array<Sting>} Devuelve deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    
    if(tiposDeCarta.length===0 || !tiposDeCarta) throw new Error('Tipos de cartas es obligatorio como un arreglo de string');
    
    if(tiposEspeciales.length===0 || !tiposEspeciales) throw new Error('Tipos de cartas especiales es obligatorio como un arreglo de string');
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
  
    return deck;
}
