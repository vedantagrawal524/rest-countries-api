require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const CountryItem = require("../model/CountryItem");

const dataPath = path.join(__dirname, "../model/data.json");
const countries = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

const seedData = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {});

    await CountryItem.deleteMany(); // clear old if needed
    await CountryItem.insertMany(countries);

    console.log("Countries uploaded to MongoDB");
    mongoose.disconnect();
  } catch (err) {
    console.error("Failed to upload:", err);
    process.exit(1);
  }
};

seedData();
