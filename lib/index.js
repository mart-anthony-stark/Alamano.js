const en = require("./languages/en");

/**
 * @param language {string} two character abbreviation for language containing words for that language;
 * supports: de, en, es, fr
 * @returns {{check: (function(*=): boolean)}} a function that determines if the given word is a valid word in the
 * language
 */
const words = (lang) => {
  const languages = { en };

  lang = lang.toLowerCase() || "en";
  return languages[lang];
};
module.exports = words;
