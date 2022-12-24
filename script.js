

function sum ( args ) {
   return args.reduce((accum, val) => accum + val, 0); //obtenemos la suma de cada uno de los digitos
}

function multi ( digits ) {
   return digits.reduce((accum, val) => accum * val, 1); // obtenemos la multiplicación de cada uno de los digitos
}

function sumDigitProd ( ...args ) { //nos falto dividir los ditigos en un array
   let sumDigits = sum(args);

   while ( sumDigits.toString().length > 1 ) { // Mientras la cantidad de digitos sea mayor a 1, entrará en el ciclo
      let digits = sumDigits.toString().split(''); // para dividir el numero en digitos
      sumDigits = multi(digits); //multiplicamos cada uno de los digitos.
   }

   return sumDigits;
}

let response = sumDigitProd(5,16,46,77,87,67); // resultado es 6
console.log("==== response ====");
console.log(response);

/*
   El resultado
   5+16+46+77+87+67 = 298

   2*9*8 = 144
   1*4*4 = 16
   1*6 = 6

*/