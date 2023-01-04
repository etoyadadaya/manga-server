import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Manga} from "../manga/manga.model";
import {User} from "./users.model";

@Table({tableName: "user_favorites", updatedAt: false})
export class UserFavorites extends Model<UserFavorites> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Manga)
  @Column({
    type: DataType.INTEGER,
  })
  mangaID: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userID: number;
}
