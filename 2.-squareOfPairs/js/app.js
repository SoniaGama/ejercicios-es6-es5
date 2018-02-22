// 3 variables llamadas igual para hacer 3 pruebas (usa una variable y las otras 2 comentalas)

// ES5

// declara las variables ES5

// var array = [2, 4, 6];
// var array = [-3, 2, -8, 12, 5];
// var array = [1, 2, 3, 4, 5];


// declaración de la funcion 



// function square() {
//   // escribe tu código aqui...
// }


// Crear una función que reciba como parámetro un arreglo de números y retornar 
// en la consola los elementos elevados al cuadrado solo si se cumple que el número es positivo.

//  ES6

// Ahora comenta todo el codigo de arriba y escribelo en ES6
// declara variables (let-const)

const array = [-3, 2, -8, 12, 5];

// declara la funcion y ejecuta el código

const square = array => {
  const newArray = array.map(element => {
    if (Math.sign(element) == 1) {
      return Math.pow(element, 2);
    } else {
      return element;
    }
  })
  console.log(newArray);
  return newArray;
}

square(array);







// ejecuta la funcion