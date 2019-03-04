/*
    BMI Formula
    mass / (height * height)
*/
var bmiMark, bmiJohn;

// Stats
var markHeight, markWeight;

markHeight = 1.80; // Meters
markWeight = 72; // KG

var johnHeight, johnWeight;

johnHeight = 1.82; // Meters
johnWeight = 82; // KG


// BMIs
bmiMark = markWeight / (markHeight * markHeight);
bmiJohn = johnWeight / (johnHeight * johnHeight);

var BMI_WINNER = bmiMark > bmiJohn;

console.log('Is Mark\'s BMI higher than John\'s?' + ' ' + BMI_WINNER);

