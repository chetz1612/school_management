import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import School from "./school";
import Subject from "./subject";

@Table({
  tableName: "student",
  timestamps: false,
})
class Student extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    allowNull: false,
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName!: string;

  @Column({
    type: DataType.STRING,
  })
  lastName!: string;

  @Column({
    type: DataType.STRING,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    validate: {
      customValidator(value: number) {
        if (value.toString().length > 10)
          throw new Error("Mobile number length should be 10");
      },
    },
  })
  mobileNo!: string;

  @Column({
    type: DataType.INTEGER,
    validate: {
      customValidator(value: number) {
        if (value.toString().length > 18)
          throw new Error("Age should be less than 18 years");
      },
    },
  })
  age!: number;

  @ForeignKey(() => School)
  @Column(DataType.UUID)
  schoolId!: string;

  @BelongsTo(() => School)
  school!: School;

  @ForeignKey(() => Subject)
  @Column(DataType.UUID)
  subjects!: Subject[];
}

export default Student;
