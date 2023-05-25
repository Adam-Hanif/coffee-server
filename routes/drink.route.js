const { Router } = require("express");
const { drinkController } = require("../controllers/drink.controller");
const router = Router();

router.get("/drinks", drinkController.getDrinks);
router.get("/drinks/in-stock", drinkController.getDrinksInStock);
router.get("/drinks/:id", drinkController.getDrinksInfo);
router.post("/drinks", drinkController.addDrinks);
router.delete("/drinks/:id", drinkController.deleteDrinks);
router.patch("/drinks/:id", drinkController.patchDrinks);

module.exports = router;
