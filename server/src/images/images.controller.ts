import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import {ImagesService} from "./images.service";

@UsePipes(new ValidationPipe())
@Controller("images")
export class ImagesController {
  constructor(private imagesService: ImagesService) {}

  @Get("/:name/:episode")
  getImage(
    @Param("name") name: string,
    @Param("episode", ParseIntPipe) episode: number
  ) {
    return this.imagesService.getImage(name, episode);
  }

  @Get("/:name")
  getCount(@Param("name") name: string) {
    return this.imagesService.getCount(name);
  }
}
