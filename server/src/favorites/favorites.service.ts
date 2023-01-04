import {InjectModel} from "@nestjs/sequelize";
import {Favorites} from "./favorites.model";

export class FavoritesService {
  constructor(@InjectModel(Favorites) private repository: typeof Favorites) {}
}
