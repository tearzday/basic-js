const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let nameDreamTeam = [];

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == "string") {
      nameDreamTeam.push(
        members[i].replace(/\s+/g, "").slice(0, 1).toUpperCase()
      );
    }
  }

  return nameDreamTeam.sort().join("");
}

module.exports = {
  createDreamTeam,
};
