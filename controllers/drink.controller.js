const { ObjectId } = require("bson");
const Drink = require("../models/Drink.model");

module.exports.drinkController = {
  getDrinks: async (req, res) => {
    try {
      const drink = await Drink.find({});
      res.json(drink);
    } catch (error) {
      res.json({ error: "Ошибка при показе всех напитков" });
    }
  },
  getDrinksInfo: async (req, res) => {
    try {
      const drink = await Drink.findById(req.params.id);
      res.json(drink);
    } catch (error) {
      res.json({ error: "Ошибка при показе инфо" });
    }
  },
  getDrinksInStock: async (req, res) => {
    try {
      const drink = await Drink.find(
        { drinkAvailable: true },
        "_id name price"
      );
      res.json(drink);
    } catch (error) {
      res.json({ error: "Ошибка при показе напитка, которые есть в наличии" });
    }
  },
  addDrinks: async (req, res) => {
    try {
      const {
        name,
        price,
        drinkAvailable,
        containCaffeine,
        volume,
        descriptionOfTheDrink,
      } = req.body;
      const drink = await Drink.create({
        name,
        price,
        drinkAvailable,
        containCaffeine,
        volume,
        descriptionOfTheDrink,
      });
      res.json(drink);
    } catch (error) {
      res.json({ error: "Ошибка при добавление напитка" });
    }
  },
  deleteDrinks: async (req, res) => {
    try {
      const drink = await Drink.findByIdAndRemove(req.params.id);
      res.json(drink);
    } catch (error) {
      res.json({ error: "Ошибка при удаление напитка" });
    }
  },
  patchDrinks: async (req, res) => {
    try {
      const drink = await Drink.findByIdAndUpdate(req.params.id, req.body);
      res.json(drink);
    } catch (error) {
      res.json({ error: "Ошибка при изменение напитка" });
    }
  },
};
