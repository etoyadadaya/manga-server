import {forwardRef, Module} from "@nestjs/common";
import {UsersService} from "./users.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.model";
import {AuthModule} from "../auth/auth.module";
import {UsersController} from "./users.controller";
import {Manga} from "../manga/manga.model";
import {UserFavorites} from "./user_favorites.model";

@Module({
  imports: [
    SequelizeModule.forFeature([User, Manga, UserFavorites]),
    forwardRef(() => AuthModule),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
