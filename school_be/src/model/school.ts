import {
  Column,
  DataType,
  HasMany,
  Model,
  Table,
  Unique,
} from "sequelize-typescript";

@Table({
  tableName: "school",
  timestamps: false,
})
export class School extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  schoolName!: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
    primaryKey: true,
  })
  registrationNo!: string;
}

export default School;
