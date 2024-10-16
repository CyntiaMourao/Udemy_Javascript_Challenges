"use strict";

/*
SECTION #2 -- CHALLENGE #1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).*/

// RESOLUÇÃO:

const massMarkI = 78;
const heightMarkI = 1.69;
const massJohnI = 92;
const heightJohnI = 1.95;

let BMIMarkI = massMarkI / (heightMarkI * heightMarkI);
let BMIJohnI = massJohnI / (heightJohnI * heightJohnI);

console.log(BMIMarkI);
console.log(BMIJohnI);

let markHigherBMII = BMIMarkI > BMIJohnI;

console.log(markHigherBMII);

/*
SECTION #2 -- CHALLENGE #2

Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.*/

// RESOLUÇÃO:

const massMarkII = 78;
const heightMarkII = 1.69;
const massJohnII = 92;
const heightJohnII = 1.95;

const BMIMarkII = massMarkII / (heightMarkII * heightMarkII);
const BMIJohnII = massJohnII / (heightJohnII * heightJohnII);
console.log(BMIMarkII, BMIJohnII);

/* Write your code below. Good luck! 🙂 */

if (BMIMarkII > BMIJohnII) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}

if (BMIMarkII > BMIJohnII) {
  console.log(
    `Mark's BMI (${BMIMarkII}) is higher than John's (${BMIJohnII})!`
  );
} else {
  console.log(
    `John's BMI (${BMIJohnII}) is higher than Mark's (${BMIMarkII})!`
  );
}

/*
SECTION #2 -- CHALLENGE #3

There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.

TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.*/

// RESOLUÇÃO:

let scoreDolphinsI = (96 + 108 + 89) / 3;
let scoreKoalasI = (88 + 91 + 110) / 3;

if (scoreDolphinsI > scoreKoalasI) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphinsI < scoreKoalasI) {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win the trophy");
}

/*
SECTION #2 -- CHALLENGE #4

Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉*/

// RESOLUÇÃO:

const billI = 275;
let tipI = billI >= 50 && billI <= 300 ? billI * 0.15 : billI * 0.2;

const billRestaurantI = `The bill was ${billI}, the tip was ${tipI}, and the total value ${
  billI + tipI
}.`;

console.log(billRestaurantI);

/*
SECTION #3 -- CHALLENGE #1

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.*/

// RESOLUÇÃO:

const calcAverageII = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

function checkWinnerII(avgDolphinsII, avgKoalasII) {
  avgDolphinsII = scoreDolphinsII;
  avgKoalasII = scoreKoalasII;

  if (avgDolphinsII >= 2 * avgKoalasII) {
    console.log(`Dolphins win ${avgDolphinsII} vs. ${avgKoalasII}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win ${avgKoalasII} vs. ${avgDolphinsII}`);
  } else {
    console.log("No team wins...");
  }
}

const scoreDolphinsII = calcAverageII(84, 54, 41);

const scoreKoalasII = calcAverageII(23, 34, 27);

checkWinnerII(scoreDolphinsII, scoreKoalasII);

/*
SECTION #3 -- CHALLENGE #2

Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTipII that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.*/

// RESOLUÇÃO:

function calcTipII(billII) {
  if (billII >= 50 && billII <= 300) {
    return billII * 0.15;
  } else {
    return billII * 0.2;
  }
}

const bills = [125, 55, 44];

const tipsII = [calcTipII(bills[0]), calcTipII(bills[1]), calcTipII(bills[2])];

const totals = [
  bills[0] + tipsII[0],
  bills[1] + tipsII[1],
  bills[2] + tipsII[2],
];

console.log(calcTipII(500));
console.log(bills);
console.log(tipsII);
console.log(totals);

/*
SECTION #3 -- CHALLENGE #3

Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.*/

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

john.calcBMI();
mark.calcBMI();

if (john.bmi > mark.bmi) {
  console.log(
    `John Smith's BMI (${Math.round(
      john.bmi
    )}) is higher than Mark Miller's (${Math.round(mark.bmi)})!`
  );
} else {
  console.log(
    `Mark Miller's BMI (${Math.round(
      mark.bmi
    )}) is higher than John Smith's (${Math.round(john.bmi)})!`
  );
}

/*
SECTION #3 -- CHALLENGE #4

Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:
Create an array called bills containing all 10 test bill values.
Create empty arrays for the tips and the totals (tips and totals)
Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

BONUS:
Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.*/

const billsIII = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tipsIII = [];

const totalsIII = [];

let calcTipIII = function (billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
};

for (let i = 0; i < billsIII.length; i++) {
  tipsIII.push(calcTipIII(billsIII[i]));
}

console.log(tipsIII);

for (let i = 0; i < tipsIII.length; i++) {
  totalsIII.push(billsIII[i] + tipsIII[i]);
}

console.log(totalsIII);

let calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  let avg = sum / arr.length;
  return avg;
};

console.log(calcAverage(totalsIII));

/*
SECTION #9 -- CHALLENGE #1

We're building a football betting app (<<App de Apostas Desportivas para Futebol>>)!
Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Your tasks:
// 1. Create one player array for each team (variables 'players1' and 'players2');

const [players1, players2] = game.players;
console.log(players1, players2);

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players;

const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic';

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2');

const { team1, x: draw, team2 } = game.odds;
console.log(team1);
console.log(draw);
console.log(team2);

// ou

// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// console.log(team1);
// console.log(draw);
// console.log(team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

team1 < team2 && console.log("Team 1 is more likely to win");

// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored.
