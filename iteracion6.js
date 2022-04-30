const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

function removeDuplicates(param) {
    let nuevoArray = [...new Set(param)];

    console.log(nuevoArray);
}

removeDuplicates(duplicates);



