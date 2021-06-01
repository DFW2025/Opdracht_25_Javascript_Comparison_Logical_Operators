// Javascript

const age = 24;
const naam = "Bram";
const totalAmount = 120;

if (age >= 18 && age < 25 ) { console.log("Je krijgt 50% korting op al je biertjes!! "); }
else { console.log("Sorry maar je kan er niet in!!.."); }

if (age >= 18 && age < 25 || naam == "Bram") { console.log("Je krijgt een gratis biertje vandaag!! "); }
else { console.log("Sorry volgende keer beter.."); }


if (totalAmount >= 25 && totalAmount <= 50 ) { console.log("Je krijgt een gratis portie vega bitterballen!! "); }
else if (totalAmount >= 50 && totalAmount <= 100) { console.log("Je krijgt een gratis portie nacho's!! "); }
else if (totalAmount > 100) { console.log("Je krijgt een gratis flesje champagne!!"); }
else { console.log("Sorry volgende keer beter!! "); }

