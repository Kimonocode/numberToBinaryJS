
/**
 * Convert number to binary
 * @param {number} n
 * @throws NAN error if n is not a number
 * @return binary number
 */
function numberToBinary(n){
    let binary = '';
    if(typeof n !== 'number'){
        throw `NAN: ${n} is not a number`;
    }
    while(n>0){
        binary = (n%2) + binary;
        n = Math.floor(n/2);
    }
    return binary; 
}

module.exports = { numberToBinary };