"use strict";

/*
SECTION #9 -- CHALLENGE #4

Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable 
 calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅

Hints:
§ Remember which character defines a new line in the textarea.
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable name conversion working.
§ This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK! */

// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

//const variavel = "Underscore_cAse";

// const userInput = document.querySelector("textarea").textContent;
// // console.log(variavel);

// const toCamelCase = function (variavel) {
//   // Converter tudo para minúsculas:
//   const varMinusc = variavel.toLowerCase();

//   // Subdividir a string e colocar num array:
//   const antesUnderscore = varMinusc.slice(0, varMinusc.indexOf("_"));

//   const aposUnderscore = varMinusc.slice(varMinusc.indexOf("_") + 2);

//   const aSubstituir = varMinusc[varMinusc.indexOf("_") + 1]
//     .toUpperCase()
//     .replace("_", "");

//   const varArray = [antesUnderscore, aSubstituir, aposUnderscore]
//     .join()
//     .replaceAll(",", "");

//   console.log(varArray);
// };

const buttonSubmit = document.querySelector("#btnSubmit");
const buttonLimpar = document.querySelector("#btnLimpar");

buttonSubmit.addEventListener("click", function () {
  let variavel = document.getElementById("variable").value;
  const varMinusc = variavel.toLowerCase().trim();
  const antesUnderscore = varMinusc.slice(0, varMinusc.indexOf("_"));
  const aposUnderscore = varMinusc.slice(varMinusc.indexOf("_") + 2);
  const aSubstituir = varMinusc[varMinusc.indexOf("_") + 1]
    .toUpperCase()
    .replace("_", "");
  const varArray = [antesUnderscore, aSubstituir, aposUnderscore]
    .join()
    .replaceAll(",", "");

  document.getElementById("result").value = varArray;

  console.log(varArray);
});

buttonLimpar.addEventListener("click", function () {
  document.getElementById("variable").value = " ";
  document.getElementById("result").value = " ";
});
