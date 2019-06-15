/* CHALLENGE 1 

Mark and John are trying to compare their BMI, which is calculated using the
formula: BMI = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMIs.
3.Create a boolean variable containing information
   about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something
   like "is Mark's BMI higher than John's? true").
*/

var johnHeight, johnMass, markHeight, markMass;
johnHeight = 1.80;
johnMass = 75;
markHeight = 1.85;
markMass = 60;

var johnBMI = johnMass / (johnHeight * johnHeight);
var markBMI =  markMass / (markHeight * markHeight);
console.log(johnBMI);
console.log(markBMI);

var highestBMI = johnBMI >= markBMI;

console.log('Is John\'s BMI higher than Mark\'s?' + ' ' + highestBMI);