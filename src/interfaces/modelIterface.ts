import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

interface Student
  extends Model<InferAttributes<Student>, InferCreationAttributes<Student>> {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobileNo: number;
  age: number;
}

interface SchoolInterface
  extends Model<
    InferAttributes<SchoolInterface>,
    InferCreationAttributes<SchoolInterface>
  > {
  id: string;
  schoolName: string;
  registrationNo: string;
}

interface Subject
  extends Model<InferAttributes<Subject>, InferCreationAttributes<Subject>> {
  id: string;
  subjectName: string;
}

interface Teacher
  extends Model<InferAttributes<Teacher>, InferCreationAttributes<Teacher>> {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobileNo: number;
}

export { Student, SchoolInterface, Subject, Teacher };
