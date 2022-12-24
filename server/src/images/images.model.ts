import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Manga} from "../manga/manga.model";

@Table({tableName: "images", createdAt: false, updatedAt: false})
export class Image extends Model {
  @Column({
    type: DataType.INTEGER,
  })
  episode: number;

  @ForeignKey(() => Manga)
  @Column({type: DataType.INTEGER})
  mangaID: number;
}
