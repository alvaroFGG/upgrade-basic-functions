const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
    let sumNum = 0;
    let sumWord = 0;

    for(let i of param){
        if(typeof i === 'number'){
            sumNum += i;
        }else{
            sumWord += i.length;
        }
    }

    console.log("La suma de los numeros es: ",sumNum);
    console.log("La suma de las palabras es: ",sumWord);
}

averageWord(mixedElements);