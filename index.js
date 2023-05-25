const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(require("./routes/drink.route"));

async function startServerAndConnectDB() {
  try {
    await app.listen(3000);
    await mongoose.connect(
      "mongodb+srv://into:code@cluster0.oczbebn.mongodb.net/coffee-server?retryWrites=true&w=majority"
    );
    console.log("Сервер запущен");
  } catch (error) {
    console.log("Ошибка при соединении с сервером");
  }
}
startServerAndConnectDB();
