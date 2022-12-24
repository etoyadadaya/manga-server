import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {MangaController} from "./manga.controller";
import {MangaService} from "./manga.service";
import {Manga} from "./manga.model";

@Module({
  controllers: [MangaController],
  providers: [MangaService],
  imports: [SequelizeModule.forFeature([Manga])],
  exports: [MangaService],
})
export class MangaModule {}
