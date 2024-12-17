import express, { Router } from "express";
import * as dotenv from "dotenv";
import { sequelize } from "./database/db";
import { authMiddleware } from "./middlewares/authMiddleware";
import routesHandler from "./routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(authMiddleware);

app.use("/", routesHandler);

const syncSequelize = async () => {
    try { 
        await sequelize.authenticate();
        console.log("Connection established successfully...");
        
        await sequelize.sync({ alter: true });
        console.log("Database synchronized...");
        
        app.listen(process.env.PORT, () => {
            console.log(`Server listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log("error: ", error);
    }
}

syncSequelize();