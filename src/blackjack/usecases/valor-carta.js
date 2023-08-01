
/**
 * 
 * @param {String} carta 
 * @returns devuelve el valor de la carta como entero
 */
export const valorCarta = ( carta ) => {
    
    if(!carta) throw new Error('La carta es obligatoria');


    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}