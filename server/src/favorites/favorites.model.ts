import {Model, Table} from "sequelize-typescript";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FavoritesCreationsAttrs {}

@Table({tableName: "favorites", updatedAt: false})
export class Favorites extends Model<Favorites, FavoritesCreationsAttrs> {}
