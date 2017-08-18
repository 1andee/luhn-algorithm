/*  Instructions:

1. From the rightmost digit, which is the check digit, and moving left, double
  the value of every second digit. If the result of this doubling operation is
  greater than 9 (e.g., 8 × 2 = 16), then add the digits of the product
  (e.g., 16: 1 + 6 = 7, 18: 1 + 8 = 9)

2. Take the sum of all the digits.

3. If the total modulo 10 is equal to 0 (if the total ends in zero) then the
  number is valid according to the Luhn formula; else it is not valid.
  
*/

luhnCheck = (num) => {

  let productsArray = [];
  let unchangedNumArr = [];

  let fullArr = String(num).split("").map(Number);

  // Push numbers that won't be manipulated into unchangedNumArr
  for (i = 0; i < fullArr.length; i += 2) {
    unchangedNumArr.push(fullArr[i]);
  };

  // Remove check digit & push num into arrMinusCheckDigit
  let numMinusCheckDigit = parseInt(num.toString().slice(0, -1));
  let arrMinusCheckDigit = String(numMinusCheckDigit).split("").map(Number);

  // Double every 2nd number from R to L, splitting to single digits if product is >9
  for (i = (arrMinusCheckDigit.length - 1); i >= 0; i -= 2) {
    let doubled = arrMinusCheckDigit[i] * 2;
    if (doubled > 9) {
      let splitNum = String(doubled).split("").map(Number);
      productsArray.push(splitNum);
    } else {
      unchangedNumArr.push(doubled);
    };
  };

  // Reduce array of split digit (spligit?) arrays
  let digitsArray = productsArray.reduce((a, b) => {
    return a.concat(b);
  });

  // Concat all arrays together
  let digitsToSum = digitsArray.concat(unchangedNumArr);

  // Sum everything
  let sumDigits = digitsToSum.reduce((sum, value) => {
    return sum + value;
  }, 0);

  // Check if sumDigits is divisible by ten
  return sumDigits % 10 === 0;

};

module.exports = luhnCheck;
