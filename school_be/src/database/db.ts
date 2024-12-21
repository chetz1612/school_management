import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
import { School } from "../model/school";
import Student from "../model/student";
import { Teacher } from "../model/teacher";
import { Dialect } from "sequelize";
import Subject from "../model/subject";


dotenv.config();
export const sequelize: any = new Sequelize({
  dialect: process.env.DB_DIALECT as Dialect,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  models: [
    School,
    Student,
    Subject,
    Teacher
  ]
});