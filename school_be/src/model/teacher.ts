import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import School from "./school";

@Table({
  tableName: "teacher",
  timestamps: false,
})
export class Teacher extends Model {
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
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.BIGINT,
    validate: {
      customValidator(value: number) {
        if (value.toString().length > 10)
          throw new Error("Mobile number length should be 10");
      },
    },
  })
  mobileNo!: bigint;

  @BelongsTo(() => School)
  school!: School;

  @ForeignKey(() => School)
  @Column(DataType.UUID)
  schoolId!: string;
}