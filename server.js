import express from "express";
import bodyParser from "body-parser";
import dbConfig from "./config/database.config.js";
import databaseTestConfig from "./config/databaseTest.config.js";
import mongoose from "mongoose";

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// Connecting to the database
const shouldUseTestDatabase =
  process.env.NODE_ENV === "test" || process.argv.some((arg) => arg.includes("mocha"));
const mongoUrl = shouldUseTestDatabase
  ? databaseTestConfig.url
  : process.env.MONGO_URI || dbConfig.url;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoUrl, {
      serverSelectionTimeoutMS: 10000,
    });
    console.log(
      shouldUseTestDatabase
        ? "Successfully connected to the test database"
        : "Successfully connected to the database",
    );
  } catch (err) {
    console.warn(
      shouldUseTestDatabase
        ? "Could not connect to the test database. Continuing without DB for now."
        : "Could not connect to the database. Continuing without DB for now.",
      err.message,
    );
  }
};

await connectToDatabase();

// define a simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l'API de TyDrive" });
});

import shopcategoryRoutes from "./app/routes/shopcategory.routes.js";
import productcategoryRoutes from "./app/routes/productcategory.routes.js";
import productRoutes from "./app/routes/product.routes.js";
import shopRoutes from "./app/routes/shop.routes.js";

shopcategoryRoutes(app);
productcategoryRoutes(app);
productRoutes(app);
shopRoutes(app);

//Démarrage du serveur
const server = app.listen(8001, () => {
  console.log(`Server is running on port: 8001 `);
});

export default server;
