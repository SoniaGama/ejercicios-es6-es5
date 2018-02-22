// //                 // ES5

// function findPairForSum(array, number) {   
//     var result = [];
//     for (var i = 0; i < array.length; i++) {
//        var number1 = array[i];
//         for (var j = 1; j < array.length; j++) {
//            var number2 = array[j];
//             if (number1 + number2 === number) {
//                 result.push(number1, number2);               
//                 console.log(result);
//                 return result;
//             }
//         }
//     }
// }


// Revisar porque return no corta el flujo en la primera conicidencia
// function findPairForSum(array, number) {  
//     var result = [];
//     array.forEach(function(element) {        
//         array.forEach(function(item){           
//             if(element + item === number){
//                 result.push(element, item);
//                 console.log(result);
//                 return result;                
//             }
//         })
//     });   
// }


// findPairForSum([3, 34, 4, 12, 5, 2], 9);

// Ahora comenta todo el código anterior y pasalo a ES6
const findPairForSum = (array, number) => {
    result = [];
    for(let element of array){
        for (let item of array) {
            console.log(item)
            if(element+item === number){
                ;
                
                result.push(element, item);
                console.log(result);
                return result;
                
            }
        }
    }
}


findPairForSum([3, 34, 4, 12, 5, 2], 9);