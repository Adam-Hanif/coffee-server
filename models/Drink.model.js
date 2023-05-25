const mongoose = require("mongoose");

const drinkSchema = mongoose.Schema({
  name: String,
  price: Number,
  drinkAvailable: Boolean,
  containCaffeine: Boolean,
  volume: Number,
  descriptionOfTheDrink: String,
});
const Drink = mongoose.model("Drink", drinkSchema);
module.exports = Drink;
