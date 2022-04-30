const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];


function findLongestWord(array) {
    let max = 0;
    let maxPalabra = '';
    for(let i of array){
        if(i.length > max){
            max = i.length;
            maxPalabra = i;
        }
    }

    return maxPalabra;
}

console.log("LA palabra mas larga del array es: ",findLongestWord(avengers));