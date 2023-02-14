/**
 * this module is the entry point of the application
 */
// import libraries
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// import middleware
import errorHandler from "./src/middleware/errorHandler.js";

// configure environemnt variables
dotenv.config({ path: "./.env" });

// import routers
import UserRouter from "./src/routes/UserRouter.js";
import authRouter from "./src/routes/authRouter.js";
// create an instance of express (i think)
const app = express();

// initialize middleware
app.use(express.json()); // enables express to parse json payloads
app.use(cors()); // enables cross origin requests

// initialize routers

app.use(UserRouter);
app.use(authRouter);

// initialize error handling middleware
app.use(errorHandler);

// hello, world 👋
app.get("/", (request, response) => {
  response.status(200).json({
    message: "a poison to erase my existance!",
  });
});

// 🐸
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGOOSE_URI)
  .then((connection) => {
    app.listen(process.env.PORT, () => {
      console.log("database connection successful!");
      console.log(`listening @ http://localhost:${process.env.PORT}!`);
    });
  })
  .catch((error) => {
    console.error("database connection failed", error);
    console.error("program terminated");
  });
