                            // ES5

// // declara la variable
// var array = [10, 20, 30, 20, 30, 40, 60];

// // escribe tu funcion

// function computeSumOfAllElements (array) {
//     var result = 0;
//     array.forEach(function(element) {        
//         result += element/array.length;                 
//     });
//     console.log("El promedio de este arreglo es: "+ result);    
// }

// computeSumOfAllElements(array)
                              //ES6
// Comenta todo lo anterior y escribelo en ES6
// declara la variable
let array = [10, 20, 30, 20, 30, 40, 60];

// escribe tu funcion
const computeSumOfAllElements = array => {
    suma = 0;
    for (let element of array) {
        suma += element
        result = suma / array.length;
    }
    console.log(`El promedio de este arreglo es: ${result}`);
}

computeSumOfAllElements(array)