import {Model, Table} from "sequelize-typescript";

interface FavoritesCreationsAttrs {}

@Table({tableName: "favorites", updatedAt: false})
export class Favorites extends Model<Favorites, FavoritesCreationsAttrs> {}
