const readline = require("readline-sync");

let choice = "1-Ajouter des valeurs au tableau\n";
choice += "2-Afficher tableau\n";
choice += "3-Calculer la moyenne\n";
choice += "0-Quitter";

console.log(choice);

let array = [];

const displayArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Indice : ${i} - Valeur : ${arr[i]}`);
  }
  return arr;
};

const addSum = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let result = sum / arr.length;
  console.log("La moyen du tableau est de  " + Math.round(result * 100) / 100);
};

let number = true;

while (number) {
  number = readline.questionInt("Quel est votre choix ? ");

  switch (number) {
    case 1:
      array = getArray();
      break;
    case 2:
      displayArray(array);
      break;
    case 3:
      addSum(array);
      break;

    case 0:
      console.log("Sortir");
      process.exit(0);
      break;
    default:
      console.log("cas non traité");
  }
}

function getArray() {
  let count = readline.questionInt("Combien de valeurs voulez-vous ajouter ? ");
  let newArray = [];

  for (let i = 1; i <= count; i++) {
    let value = readline.questionInt(`Entrer la valeur ${i} :`);
    newArray.push(value);
  }

  return newArray;
}
