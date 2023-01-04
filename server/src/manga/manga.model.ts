import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import {Image} from "../images/images.model";
import {UserFavorites} from "../users/user_favorites.model";
import {User} from "../users/users.model";

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
    type: DataType.STRING(2048),
  })
  description: string;

  @Column({
    field: "episodes_num",
    type: DataType.INTEGER,
  })
  episodesNum: number;

  @Column({
    field: "author",
    type: DataType.STRING,
  })
  author: string;

  @Column({
    field: "status",
    type: DataType.STRING,
  })
  status: string;

  @Column({
    field: "year",
    type: DataType.INTEGER,
  })
  year: number;

  @Column({
    field: "age",
    type: DataType.INTEGER,
  })
  age: number;

  @HasMany(() => Image)
  images: Image[];

  @BelongsToMany(() => User, () => UserFavorites)
  favorites: Manga[];
}
