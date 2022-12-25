import {
  Controller, Get, Param,
  UsePipes,
  ValidationPipe,
  ParseIntPipe
} from "@nestjs/common";
import {ImagesService} from "./images.service";
import {MangaService} from "../manga/manga.service";

@UsePipes(new ValidationPipe())
@Controller("images")
export class ImagesController {
  constructor(
    private imagesService: ImagesService,
    private mangaService: MangaService,
  ) {}

  @Get("/:name/:episodeID")
  async getByName(@Param("name") name: string, @Param("episodeID", ParseIntPipe) episodeID: number) {
    const manga = await this.mangaService.getByName(name);
    return this.imagesService.getByID(manga.id, episodeID);
  }
}
