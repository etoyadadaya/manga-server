import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {MangaController} from "./manga.controller";
import {MangaService} from "./manga.service";
import {Manga} from "./manga.model";
import {User} from "../users/users.model";
import {UserFavorites} from "../users/user_favorites.model";

@Module({
  controllers: [MangaController],
  providers: [MangaService],
  imports: [SequelizeModule.forFeature([Manga, User, UserFavorites])],
  exports: [MangaService],
})
export class MangaModule {}
