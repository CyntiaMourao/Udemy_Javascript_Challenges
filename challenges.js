/*CHALLENGE #4
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

// const billRestaurant = 430;
// const tip15 = 0.15;
// const tip20 = 0.20;

// const billRestaurantTip = billRestaurant >= 50 && billRestaurant <= 300 ? `The bill was ${billRestaurant}, the tip was ${billRestaurant * tip15}, and the total value ${billRestaurant + billRestaurant * tip15}.`: `The bill was ${billRestaurant}, the tip was ${billRestaurant * tip20}, and the total value ${billRestaurant + billRestaurant * tip20}.`;

// console.log (billRestaurantTip);

const bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

const billRestaurant = `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`;

console.log(billRestaurant);



/* CHALLENGE #1
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

const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
};

function checkWinner(avgDolphins, avgKoalas) {
    avgDolphins = scoreDolphins;
    avgKoalas = scoreKoalas;

    if (avgDolphins >= 2*avgKoalas) {
        console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
    } else if (avgKoalas >= 2*avgDolphins) {
        console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
    } else {
        console.log('No team wins...');
    }
}

const scoreDolphins = calcAverage(84, 54, 41);

const scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins,scoreKoalas);