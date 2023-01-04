import {Module} from "@nestjs/common";
import {FavoritesService} from "./favorites.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {FavoritesController} from "./favorites.controller";
import {Favorites} from "./favorites.model";

@Module({
  imports: [SequelizeModule.forFeature([Favorites])],
  controllers: [FavoritesController],
  providers: [FavoritesService],
  exports: [FavoritesService],
})
export class FavoritesModule {}
