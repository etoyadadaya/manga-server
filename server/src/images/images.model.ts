import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table({tableName: "images", createdAt: false, updatedAt: false})
export class Image extends Model {
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
  })
  episode: number;

  @Column({
    type: DataType.INTEGER,
  })
  count: number;
}
