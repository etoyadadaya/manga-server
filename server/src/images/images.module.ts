import {Module} from "@nestjs/common";
import {ImagesService} from "./images.service";
import {ImagesController} from "./images.controller";
import {SequelizeModule} from "@nestjs/sequelize";
import {Image} from "./images.model";
import {MangaModule} from "../manga/manga.module";

@Module({
  controllers: [ImagesController],
  providers: [ImagesService],
  imports: [
    SequelizeModule.forFeature([Image]),
    MangaModule
  ],
  exports: [ImagesService],
})
export class ImagesModule {}
