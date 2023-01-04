import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import {Manga} from "../manga/manga.model";
import {UserFavorites} from "./user_favorites.model";

interface UserCreationsAttrs {
  email: string;
  password: string;
}

@Table({tableName: "users", createdAt: false, updatedAt: false})
export class User extends Model<User, UserCreationsAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({type: DataType.STRING, unique: true})
  email: string;

  @Column({type: DataType.STRING})
  password: string;

  @BelongsToMany(() => Manga, () => UserFavorites)
  favorites: Manga[];
}
