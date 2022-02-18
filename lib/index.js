const words = require("./words");

module.exports = (language) => {
  return {
    checkword: (word) => words(language).test(word),
  };
};
