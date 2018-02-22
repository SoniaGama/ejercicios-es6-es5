// En este ejercicio deberas crear tu solción en ES5, asegurarte que funcione 
// var password = prompt('¿Cuál es tu contraseña?');
// // declara el prompt
// var passwordUser = 'laboratoria';

// function user(password) {
//     if (password === '' || password !== passwordUser) {       
//         console.log('falso');
//     } else if (password === passwordUser) {
//         console.log('verdaero');
//     }
// }

// user(password);


// comenta todo lo anterior y escribelo en ES6

const password = prompt('¿Cuál es tu contraseña?');

const user = password => {
    const passwordUser = 'laboratoria';
    if (password === '' || password !== passwordUser) {
        console.log('falso');
    } else if (password === passwordUser) {
        console.log('verdadero');
    }
}

user(password);
