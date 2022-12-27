import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {Image} from "../images/images.model";

@Table({tableName: "manga", createdAt: false, updatedAt: false})
export class Manga extends Model {
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  title: string;

  @Column({
    type: DataType.STRING,
  })
  description: string;

  @Column({
    field: "episodes_num",
    type: DataType.INTEGER,
  })
  episodesNum: number;

  @HasMany(() => Image)
  images: Image[];
}
