/*

Problem Solving - Luhn Algorithm (mod 10)

Description:
Write a function check, which, given a number, returns whether it is valid or not
according to the Luhn Algorithm.

Instructions:
  1. From the rightmost digit, which is the check digit, and moving left, double
  the value of every second digit. If the result of this doubling operation is
  greater than 9 (e.g., 8 × 2 = 16), then add the digits of the product
  (e.g., 16: 1 + 6 = 7, 18: 1 + 8 = 9)

  2. Take the sum of all the digits.

  3. If the total modulo 10 is equal to 0 (if the total ends in zero) then the
  number is valid according to the Luhn formula; else it is not valid.

*/

let productsArray = [];
let unchangedNumArr = [];

check = (num) => {

  let fullArr = String(num).split("").map(Number);

  // Push numbers that won't be manipulated into unchangedNumArr
  for (i = 0; i < fullArr.length; i += 2) {
    unchangedNumArr.push(fullArr[i]);
  };

  // Remove check digit
  let numMinusCheckDigit = parseInt(num.toString().slice(0, -1));
  let arrMinusCheckDigit = String(numMinusCheckDigit).split("").map(Number);

  // Double every 2nd digit from R to L, splitting into digits if product is >9
  for (i = (arrMinusCheckDigit.length - 1); i >= 0; i -= 2) {
    let doubled = arrMinusCheckDigit[i] * 2;
    if (doubled > 9) {
      let splitNum = String(doubled).split("").map(Number);
      productsArray.push(splitNum);
    } else {
      unchangedNumArr.push(doubled);
    };
  };

  // Reduce array of split digit (spligit?) arrays into single array
  let digitsArray = productsArray.reduce((a, b) => {
    return a.concat(b);
  });

  // Concat all arrays together
  let sumDigitsArray = digitsArray.concat(unchangedNumArr);

  // Sum everything
  let sumDigits = sumDigitsArray.reduce((sum, value) => {
    return sum + value;
  }, 0);

  // Check of sum is divisible by ten
  if (sumDigits % 10 === 0) {
    return console.log(`Checksum passes. Number ${num} is valid.`);
  } else {
    return console.log(`Checksum failed. Number ${num} is NOT valid.`);
  };

};

check(79927398713);
check(49927398716);
check(371449635398431);
check(378734493671000);
check(6011111111111117);
check(5555555555554444);
