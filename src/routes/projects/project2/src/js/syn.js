var synonyms = require("synonyms");

function getSynonyms(params) {
    return synonyms(params)
}
  
window.getSynonyms = getSynonyms