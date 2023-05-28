//Escribe un código que pase por cada número del 1 al 100 y://
//Para cada número que sea múltiplo de 3 , imprima  "Fizz"
//Para cada número que sea múltiplo de 5 , imprima  "Buzz"
//Para los números que son múltiplos de 3 y 5, imprima  "FizzBuzz"
//Todos los demás números deberían imprimirse de forma normal//

for (var i = 1; i < 101; i++) {
    if (i % 3 === 0) {
        console.log('fizz');
    } else if (i % 5 === 0) {
        console.log('buzz');
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
    } else {
        console.log(i);
    }
}

// el número 1 se imprimirá como tal porque no cumple con las condiciones impuestas (son 3 condiciones), el 2 también,
// pero el 3 si cumple con la primera condición, ya que al ser divisible por 3, se imprimirá fizz
// el 5 cumple con la segunda condición, y el 15 cumple con la tercera condición, es divisible por el número 3 y 5
// por lo que se imprimirá fizzbuzz.