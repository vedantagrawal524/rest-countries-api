const CountryItem = require("../model/CountryItem");

const getAllCountries = async (req, res) => {
  try {
    const countries = await CountryItem.find();
    if (!countries || countries.length === 0) {
      return res.status(204).json({ message: "No countries found." });
    }
    res.status(200).json(countries);
  } catch (err) {
    console.error("Error fetching countries:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = {
  getAllCountries,
};
