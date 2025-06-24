const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  name: String,
  topLevelDomain: [String],
  alpha2Code: String,
  alpha3Code: String,
  callingCodes: [String],
  capital: String,
  altSpellings: [String],
  subregion: String,
  region: String,
  population: Number,
  latlng: [Number],
  demonym: String,
  area: Number,
  gini: Number,
  timezones: [String],
  borders: [String],
  nativeName: String,
  numericCode: String,
  flag: String,
  flags: {
    svg: String,
    png: String,
  },
  currencies: [
    {
      code: String,
      name: String,
      symbol: String,
    },
  ],
  languages: [
    {
      iso639_1: String,
      iso639_2: String,
      name: String,
      nativeName: String,
    },
  ],
  translations: {
    type: Map,
    of: String,
  },
  regionalBlocs: [
    {
      acronym: String,
      name: String,
      otherNames: [String],
      otherAcronyms: [String],
    },
  ],
  cioc: String,
  independent: Boolean,
});

module.exports = mongoose.model("CountryItem", countrySchema);
