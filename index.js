const express = require("express");
const sequelize = require("./sequelize");
const app = express();
const port = process.env.PORT || 3000;
const schoolRoutes = require("./routes/schools");
const studentRoutes = require("./routes/students");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/schools", schoolRoutes);
app.use("/api/students", studentRoutes);

const syncSequelize = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection established successfully...");

    await sequelize.sync({ alter: true });
    console.log("Database synchronized...");

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}!`);
    });
  } catch (error) {
    console.log("error: ", error);
  }
};

syncSequelize();
