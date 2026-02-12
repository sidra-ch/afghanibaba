const mongoose = require("mongoose");
require("dotenv").config();

const app = require("./app");

const port = process.env.PORT ? Number(process.env.PORT) : 4000;
const mongoUri = process.env.MONGO_URI;

const startServer = () => {
  app.listen(port, () => {
    console.log(`API listening on port ${port}`);
  });
};

if (mongoUri) {
  mongoose
    .connect(mongoUri)
    .then(() => {
      console.log("MongoDB connected");
      startServer();
    })
    .catch((error) => {
      console.error("MongoDB connection failed", error.message);
      process.exit(1);
    });
} else {
  console.warn("MONGO_URI not set. Starting API without database.");
  startServer();
}
