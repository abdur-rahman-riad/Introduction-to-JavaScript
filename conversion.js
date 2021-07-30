// String Add
var firstName = "Mohammad Abdur";
var lastName = "Rahman Riad";
var fullName = firstName + ' ' + lastName;
console.log(fullName);

// String to Integer Conversion
var quantity = '5.5';
var convertIntoInteger = parseInt(quantity);
console.log(convertIntoInteger);

// String to Float Conversion
var convertIntoFloat = parseFloat(quantity);
console.log(convertIntoFloat);

// Types of Variable 
var areYouHappy = true;
console.log(typeof (fullName));
console.log(typeof (convertIntoFloat));
console.log(typeof (convertIntoInteger));
console.log(typeof (areYouHappy));

// Extra
var today = new Date();
console.log(today);
console.log(typeof today);

// Speciall Edition
var value1 = 0.1;
var value2 = 0.2;
var totalValue = value1 + value2;
console.log(totalValue.toFixed(1));