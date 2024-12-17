import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

interface Student
  extends Model<
    InferAttributes<Student>,
    InferCreationAttributes<Student>
  > {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobileNo: number;
  age: number;
}

interface School
  extends Model<
    InferAttributes<School>,
    InferCreationAttributes<School>
  > {
  id: string;
  schoolName: string;
  registrationNo: string;
}

export { Student, School };
