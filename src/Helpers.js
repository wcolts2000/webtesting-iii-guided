const uuid = require("uuid");

module.exports = {
  makePerson,
  forEvenOnly,
  greeter
};

function makePerson(first, last) {
  return {
    id: uuid(),
    name: `${first} ${last}`
  };
}

function forEvenOnly(number, callback) {
  if (number % 2 === 0) {
    callback(number);
  }
}

function greeter(cb) {
  return cb();
}
