// ES5


// 1.1- Mostrar en la consola un mensaje que diga... "El numero de generaciones es (numero de generaciones en total)"
const generations = laboratoria => {
    for (let key in laboratoria) {
        let element = Object.keys(laboratoria[key]).length;
        console.log(`El numero de generaciones es ${element}`);
    }
}

generations(laboratoria);


// 1.2- Mostrar en la consola un mensaje que diga ... "La (numero de generacion) tuvo (numero de alumnas en esa generacion) alumnas" [Un mensaje por cada generacion]
// const numberOfStudentsByGeneration = laboratoria => {
//     let obj
//     let gen;
//     let students;
//     for (let key in laboratoria) {
//         obj = laboratoria[key];                 
//     }     
// }


// numberOfStudentsByGeneration(laboratoria);


// 1.3- Mostrar en la consola un mensaje que diga "El promedio de edad de la (numero de generacion) generacion es de (promedio de numero de alumas en la generacion)" [un mensaje por generacion]










// 1.4- Mostrar en la consola un mensaje que diga "El nombre mas comun de la (numero de generacion) generacion es: (nombre mas comun de esa generacion)"







// Alcance 2... 


// 2.1- Mostrar en la consola un mensaje que diga... ""El numero total de alumnas en todas las generaciones es: (total de alumnas de todas las generaciones) y en promedio (el promedio de alumnas por generacion) mujeres  cursan Laboratoria cada generacion"








// 2.2- Mostrar en consola un mensaje que diga "La edad promedio de las mujeres que cursan laboratoria es:  (promedio de la edad promedio de todas las generaciones)"






// 2.3- Mostrar en consola un mensaje que diga "En las (numero de generaciones) los nombres mas comunes fueron (los nombres mas comunes de todas las generaciones separados por una (,)).






// Alcance 3....

// Crear botones para disparar cada uno de los puntos y pintarlos por medio del DOM 










// Alcance 4....

// Agregar la siguiente generacion a la data desde una funcion obteniendo los datos por medio de prompts: 

//  "sexta", "alumnas": 120, "edad-promedio": 28, "nombre-mas-comun" : "Silvana"





// ----------------------------Ahora comenta todo el código anterior y escribelo en ES6----------------