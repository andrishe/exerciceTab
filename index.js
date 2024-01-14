const readline = require("readline-sync");

let choice = "1-Afficher tableau \n";
choice += "2-Calculer la moyenne \n";
choice += "0-Quitter";

console.log(choice);

let array = [4, 8, 12, 16];

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

let number = readline.questionInt("Quel est votre choix ? ");

switch (number) {
  case 1:
    displayArray(array);
    break;
  case 2:
    addSum(array);
    break;
  case 0:
    console.log("Sortir");
    process.exit(0);
    break;
  default:
    console.log("cas non traité");
}
