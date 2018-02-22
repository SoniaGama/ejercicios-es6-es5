         
         
//          // ES5

// // declaracion de las variables

// var [teachersTeam, members] = [
//   'formacion',
//      ['Amalia',
//       'Karla', 
//       'Silvana', 
//       'Manu', 
//       'Jonh',
//       'Mike'
//     ],
// ];

// var formatTeamMessage = function (teachersTeam, members) {
//   var message = 'Hay ' + members.length + " " + 'personas en el equipo de' + " " + teachersTeam + "\n" + "Ellos son" + " " + members.join(", ") + ".";
//   console.log(message)
//   return message;
// };  

// formatTeamMessage(teachersTeam, members);

// Ahora comenta todo el código anterior y escribelo en ES6


                            //  ES6
// declaracion de las variables 
// const evenNumbers = `evenNumbers ${numberArray.filter(number => number % 2 === 0)}`;

const [teamName, product] = ['formacion', ['Amalia', 'Karla', 'Silvana', 'Manu', 'Jonh', 'Mike'],];


const formatTeamMessage = (teamName, people) => {
  const message = `Hay ${people.length} personas en el equipo de ${teamName}.
Ellos son: ${people}.`
  console.log(message);
  return message;  
}

formatTeamMessage(teamName, product);
// Hay 6 personas en el equipo de formacion.
// Ellos son: Amalia, Karla, Silvana, Manu, Jonh, Mike. 
