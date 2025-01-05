const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  if (!(date instanceof Date) || typeof date != "object") {
    throw new Error("Invalid date!");
  }
  let month = null;

  try {
    month = date.getMonth();
  } catch {
    throw new Error("Invalid date!");
  }

  if ((month >= 0 && month <= 1) || month == 11) {
    return "winter";
  }

  if (month >= 2 && month <= 4) {
    // month >= 3 month <=5
    return "spring";
  }

  if (month >= 5 && month <= 7) {
    return "summer";
  }

  if (month >= 8 && month <= 10) {
    return "autumn (fall)";
  }
}

module.exports = {
  getSeason,
};
