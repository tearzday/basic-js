const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrNumber = n.toString().split("");
  if (arrNumber[1] == "0") {
    arrNumber.splice(1, 1);
  } else {
    arrNumber.splice(0, 1);
  }

  return +arrNumber.join("");
}

module.exports = {
  deleteDigit,
};
