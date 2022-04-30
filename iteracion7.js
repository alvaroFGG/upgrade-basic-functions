const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];


  function finderName(param, valor) {
        let bool = false;
        let index = 0;

        if(param.includes(valor)){
            bool = true;
            index = param.indexOf(valor);
        }

        return bool + " " + index;
  }

  console.log(finderName(nameFinder,"Steve"));