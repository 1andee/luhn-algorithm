const assert = require("chai").assert;
const luhnCheck = require("../lib/luhn");

describe("Luhn Algorithm", function() {
  it("should return true if number is valid", function() {
    let number = "79927398713";
    let result = luhnCheck(number);
    assert.isTrue(result);
  });

  it("should return true if number is valid", function() {
    let number = "49927398716";
    assert.isTrue(luhnCheck(number));
  });

  it("should return true if number is valid", function() {
    let number = "371449635398431";
    assert.isTrue(luhnCheck(number));
  });

  it("should return true if number is valid", function() {
    let number = "378734493671000"
    assert.isTrue(luhnCheck(number));
  });

  it("should return true if number is valid", function() {
    let number = "6011111111111117";
    assert.isTrue(luhnCheck(number));
  });

  it("should return true if number is valid", function() {
    let number = "5555555555554444";
    assert.isTrue(luhnCheck(number));
  });

  it("should return false if number is NOT valid", function() {
    let number = "79928299714";
    assert.isFalse(luhnCheck(number));
  });

  it("should return false if number is NOT valid", function() {
    let number = "012345678910";
    assert.isFalse(luhnCheck(number));
  });

  it("should return false if number is NOT valid", function() {
    let number = "5555665553552222";
    assert.isFalse(luhnCheck(number));
  });
});
