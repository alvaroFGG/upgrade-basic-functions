const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  
function repeatCounter(param) {
    
    // for(let i=0; i<param.length; i++){
    //     let cont = 0;
    //     for(let j = 0; j<i+1; j++){
    //         if(param[i]===param[j]){
    //             cont++;
    //         }
    //     }
    //     console.log("La palabra ha aparecido: ",cont);
    // }

    const count = {};
    for(let element of param){
        if(count[element]){
            count[element] += 1
        }else{
            count[element] = 1;
        }
    }

    console.log(count);

}

repeatCounter(counterWords);