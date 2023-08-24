const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const route = require("./route/route");

//cors origin issue
app.use(cors({ origin: "*" }));

//env eniviroment variable path
require("dotenv").config({ path: "./config/.env" });

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", route);

const PORT = process.env.PORT || 3001;
const url =
   "mongodb+srv://suryasurya256:51lbtGOe7ag6j0qP@cluster0.0ze4dqz.mongodb.net/?retryWrites=true&w=majority";
// // mongoose connection
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB)
.then(() => {
  console.log("Connected to the database!");
})
  
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

//port connection
app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
