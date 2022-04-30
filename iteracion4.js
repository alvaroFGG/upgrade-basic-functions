const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(array) {
    let sum = 0;
    let cont = 0;
    
    for(let i of array){
        sum += i;
        cont++;
    }

    return sum/cont;
  
}

console.log("La media es de: ",average(numbers));