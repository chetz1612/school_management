import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "subject",
  timestamps: false,
})
class Subject extends Model {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    primaryKey: true,
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  subjectName!: string;
}

export default Subject;