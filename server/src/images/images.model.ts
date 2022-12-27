import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Manga} from "../manga/manga.model";

@Table({tableName: "images", createdAt: false, updatedAt: false})
export class Image extends Model {
  @Column({
    field: "images_num",
    type: DataType.INTEGER,
  })
  imagesNum: number;

  @Column({
    field: "episode",
    type: DataType.INTEGER,
  })
  episode: number;

  @ForeignKey(() => Manga)
  @Column({
    field: "manga_id",
    type: DataType.INTEGER,
  })
  mangaID: number;
}
