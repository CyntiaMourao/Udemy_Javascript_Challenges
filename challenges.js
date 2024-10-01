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
    console.log(`Mark's BMI (${BMIMarkII}) is higher than John's (${BMIJohnII})!`);
} else {
    console.log(`John's BMI (${BMIJohnII}) is higher than Mark's (${BMIMarkII})!`);
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

let scoreDolphinsI = (96 + 108 + 89)/3;
let scoreKoalasI  = (88 + 91 + 110)/3;

if (scoreDolphinsI > scoreKoalasI) {
    console.log ("Dolphins win the trophy");
} else if (scoreDolphinsI < scoreKoalasI) {
    console.log ("Koalas win the trophy");
} else {
    console.log ("Both win the trophy");
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
let tipI = billI >= 50 && billI <= 300 ? billI * 0.15 : billI * 0.20;

const billRestaurantI = `The bill was ${billI}, the tip was ${tipI}, and the total value ${billI + tipI}.`;

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

    if (avgDolphinsII >= 2*avgKoalasII) {
        console.log(`Dolphins win ${avgDolphinsII} vs. ${avgKoalasII}`);
    } else if (avgKoalas >= 2*avgDolphins) {
        console.log(`Koalas win ${avgKoalasII} vs. ${avgDolphinsII}`);
    } else {
        console.log('No team wins...');
    }
}

const scoreDolphinsII = calcAverageII(84, 54, 41);

const scoreKoalasII = calcAverageII(23, 34, 27);

checkWinnerII(scoreDolphinsII,scoreKoalasII);



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

function calcTipII (billII) {
    if(billII >=50 && billII <= 300) {
        return billII * 0.15;
    } else {
        return billII * 0.20;
    }
}

const bills = [125, 55, 44];

const tipsII = [calcTipII(bills[0]), calcTipII(bills[1]), calcTipII(bills[2])];

const totals = [bills[0]+tipsII[0], bills[1]+tipsII[1], bills[2]+tipsII[2]]

console.log(calcTipII(500));
console.log(bills);
console.log(tipsII)
console.log(totals)