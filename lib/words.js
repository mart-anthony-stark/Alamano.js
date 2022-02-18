const en = require("./languages/en");

/**
 * @param language {string} two character abbreviation for language containing words for that language
 * Each language is assigned a two-letter (639-1) and three-letter (639-2 and 639-3) lowercase abbreviation,
 * amended in later versions of the nomenclature.
 *
 * supports: en
 * @returns {{check: (function(*=): boolean)}} a function that determines if the given word is a valid word in the
 * language
 */
const words = (lang) => {
  const languages = { en };
  return languages[lang.toLowerCase()] || languages["en"];
};
module.exports = words;
