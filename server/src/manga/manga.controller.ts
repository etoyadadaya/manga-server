import {Controller, Get, Param, UsePipes, ValidationPipe} from "@nestjs/common";
import {MangaService} from "./manga.service";

@UsePipes(new ValidationPipe())
@Controller("manga")
export class MangaController {
  constructor(private mangaService: MangaService) {}

  @Get("/:name")
  getByName(@Param("name") name: string) {
    return this.mangaService.getByName(name);
  }

  @Get()
  getAll() {
    return this.mangaService.getAll();
  }
}
